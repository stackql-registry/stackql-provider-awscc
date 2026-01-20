// bin/generate-provider.js

const libDir = '../lib';
const providerDevDir = '../provider-dev';
const openAPIDir = '../openapi';

import * as fs from 'fs'; // For synchronous methods like fs.existsSync
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { dump, load } from "js-yaml";
import { 
  generateStackqlViews, 
  convertToOpenAPI, 
  cleanOpenAPISpec, 
  cloudControlServers, 
  cloudControlPaths, 
  cloudControlParameters, 
  cloudControlSecuritySchemes,
  cloudControlSchemas, 
} from '../lib/utils/index.js';
import { resourceTypes } from '../provider-dev/config/cc_supported_resources.js';

const providerName = 'awscc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Dynamically read static files from the static_services directory
const staticServicesDir = path.join(__dirname, `${providerDevDir}/config/static_services`);
let staticFiles = [];
if (fs.existsSync(staticServicesDir)) {
  staticFiles = fs.readdirSync(staticServicesDir).filter(file => file.endsWith('.yaml'));
  console.log('Found static service files:', staticFiles);
} else {
  console.log('Static services directory not found:', staticServicesDir);
}

const docsDir = path.join(__dirname, `${providerDevDir}/downloaded`);
console.log('Docs dir:', docsDir);

const outputDir = path.join(__dirname, `${openAPIDir}/src/${providerName}/v00.00.00000/services`);

let providerManifest = {
  id: providerName,
  name: providerName,
  version: 'v00.00.00000',
  providerServices: {},
  config: {
    auth: {
      type: 'aws_signing_v4',
      credentialsenvvar: 'AWS_SECRET_ACCESS_KEY',
      keyIDenvvar: 'AWS_ACCESS_KEY_ID',
    },
  },
};

function clearOutputDir() {
  // Define directories
  const servicesDir = outputDir;

  const providerYamlPath = path.join(servicesDir, '..', 'provider.yaml');
  if (fs.existsSync(providerYamlPath)) {  // Check if the file exists
      try {
          fs.unlinkSync(providerYamlPath);  // If it exists, delete it
          console.log(`Deleted ${providerYamlPath}`);
      } catch (err) {
          console.error(`Error deleting file ${providerYamlPath}:`, err);
      }
  } else {
      console.log(`${providerYamlPath} doesn't exist. Nothing to delete.`);
      // make it
      fs.mkdirSync(path.join(servicesDir, '..'), { recursive: true });
      fs.mkdirSync(servicesDir, { recursive: true });
  }

  for (const dir of [servicesDir]) {
      if (fs.existsSync(dir)) {
          // Get all the files in the directory
          const files = fs.readdirSync(dir);

          for (const file of files) {
              const filePath = path.join(dir, file);
              
              // // Skip if static service file
              // if (staticFiles.includes(file)) {
              //   console.log(`Skipping statically defined spec:  ${filePath}`);
              //   continue;
              // }

              // Check if the file ends with .yaml
              if (path.extname(filePath) === '.yaml') {
                  try {
                      fs.unlinkSync(filePath); // Deletes the file
                      console.log(`Deleted ${filePath}`);
                  } catch (err) {
                      console.error(`Error deleting file ${filePath}:`, err);
                  }
              }
          }
      } else {
          console.log(`${dir} doesn't exist. Nothing to clean.`);
      }
  }
}

function copyStaticFiles() {
  const staticServicesDir = path.join(__dirname, `${providerDevDir}/config/static_services`);
  
  if (!fs.existsSync(staticServicesDir)) {
    console.log('Static services directory not found:', staticServicesDir);
    return;
  }

  staticFiles.forEach(file => {
    const sourcePath = path.join(staticServicesDir, file);
    const destPath = path.join(outputDir, file);
    
    if (fs.existsSync(sourcePath)) {
      try {
        fs.copyFileSync(sourcePath, destPath);
        console.log(`Copied static file: ${file}`);
      } catch (err) {
        console.error(`Error copying static file ${file}:`, err);
      }
    } else {
      console.log(`Static file not found: ${sourcePath}`);
    }
  });
}

function findFiles(startPath, filter) {
  let results = [];
  if (!fs.existsSync(startPath)) {
    console.log("No directory found:", startPath);
    return;
  }

  const files = fs.readdirSync(startPath);
  for (let i = 0; i < files.length; i++) {
    const filename = path.join(startPath, files[i]);
    const stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      results = results.concat(findFiles(filename, filter));
    } else if (filename.indexOf(filter) >= 0) {
      results.push(filename);
    }
  }
  return results;
}

function writeObjectToYamlFile(fileContent, filename) {
  try {
    const yaml = dump(fileContent, {lineWidth: 500});
    const outputFilePath = path.join(outputDir, filename);
    fs.writeFileSync(outputFilePath, yaml, "utf8");
    console.log(`File ${filename} written successfully.`);
  } catch (err) {
    console.error("Error writing file:", err);
  }
}

async function processService(servicePrefix, outputFilename) {
  const openAPI = {
    openapi: "3.0.0",
    info: {
      version: "2.0.0",
      "x-serviceName": "cloudcontrolapi"
    },
    servers: cloudControlServers,
    components: {
      parameters: cloudControlParameters,
      'x-cloud-control-schemas': cloudControlSchemas,
      schemas: {},
      securitySchemes: cloudControlSecuritySchemes,
    },
    paths: cloudControlPaths,
    // security: {
    //   hmac: []
    // },
    'x-stackQL-config': {
      requestTranslate: {
        algorithm: "drop_double_underscore_params"
      },
      pagination: {
        requestToken: {
          key: "NextToken",
          location: "body"
        },
        responseToken: {
          key: "NextToken",
          location: "body"
        },
      }
    }
  };

  const files = findFiles(docsDir, servicePrefix);
  let serviceTitle;
  for (const file of files) {
    const content = await fs.promises.readFile(file);
    const jsonContent = JSON.parse(content);
    // Check if resource type is supported, if not, skip it
    if (!resourceTypes.includes(jsonContent.typeName)) {
      console.log(`Skipping unsupported resource type: ${jsonContent.typeName}`);
      continue;
    }

    const componentName = jsonContent.typeName.split("::").pop();
    if (!serviceTitle) {
      serviceTitle = jsonContent.typeName?.split("::")[1];
    }
    const openAPIComponent = convertToOpenAPI(
      jsonContent,
      componentName,
      openAPI.components.schemas
    );
    Object.assign(openAPI.components.schemas, openAPIComponent);
  }
  openAPI.info = {title: serviceTitle, ...openAPI.info};

  const stackqlViews = generateStackqlViews(openAPI);
  if (!openAPI.components['x-stackQL-resources']) {
      openAPI.components['x-stackQL-resources'] = {};
  }
  Object.assign(openAPI.components['x-stackQL-resources'], stackqlViews);

  if (!Object.keys(openAPI.components['x-stackQL-resources']).length) {
    return false;
  }

  const cleanedOpenAPI = cleanOpenAPISpec(openAPI);

  if(serviceTitle == 'EC2'){
    // fix bug with self referencing object
    delete cleanedOpenAPI.components.schemas.SseSpecification.$ref;
    cleanedOpenAPI.components.schemas.SseSpecification['type'] = 'object';
    cleanedOpenAPI.components.schemas.SseSpecification['properties'] = {
      KmsKeyArn: {
        description: 'KMS Key Arn used to encrypt the group policy',
        type: 'string'
      },
      CustomerManagedKeyEnabled: {
        description: 'Whether to encrypt the policy with the provided key or disable encryption',
        type: 'boolean'
      }
    }
    cleanedOpenAPI.components.schemas.SseSpecification['additionalProperties'] = false;
  }
 
  // const finalAPI = addAdditionalRoutes(cleanedOpenAPI, serviceTitle);

  writeObjectToYamlFile(cleanedOpenAPI, outputFilename);
  return true;
}

function deepMerge(target, source) {
  for (let key in source) {
    if (source[key] instanceof Object && key in target) {
      target[key] = deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

function addAdditionalRoutes(openAPISpec, serviceTitle) {
  // Check for additional routes
  const routesDir = path.join(__dirname, `${libDir}/addtl_routes`);
  const routesFile = findFiles(routesDir, `${serviceTitle}.yaml`);
  
  if (routesFile.length == 1) {
    const routesContent = fs.readFileSync(routesFile[0], 'utf8');
    let addtlRoutes = load(routesContent);

    // Ensure 'addtlRoutes' only contains relevant component definitions
    if (addtlRoutes.components && addtlRoutes.components['x-stackQL-resources']) {
      openAPISpec.components['x-stackQL-resources'] = deepMerge(
        addtlRoutes.components['x-stackQL-resources'],
        openAPISpec.components['x-stackQL-resources']
      );      
    }

    if (addtlRoutes.components && addtlRoutes.components.schemas) {
      openAPISpec.components['schemas'] = {
        ...addtlRoutes.components.schemas,
        ...openAPISpec.components['schemas'], // existing schemas should take precedence
      };
    }

    if (addtlRoutes.paths) {
      openAPISpec['paths'] = {
        ...openAPISpec['paths'],
        ...addtlRoutes.paths
      };
    }
    
    if (addtlRoutes['x-stackQL-config']) {
      openAPISpec['x-stackQL-config'] = {
        ...openAPISpec['x-stackQL-config'],
        ...addtlRoutes['x-stackQL-config']
      };
    }    
    
  }

  return openAPISpec;
}

function findFilesInDocs(filter) {

  const filePath = filter? path.join(docsDir, filter) : docsDir;
  const files = fs.readdirSync(filePath);

  return files;
}

function addStaticFilesToManifest(service) {
return (
  providerManifest.providerServices[service] = {
    id: `${service}:${providerManifest.version}`,
    name: service,
    preferred: true,
    service: {
        $ref: `${providerName}/${providerManifest.version}/services/${service}.yaml`,
    },
    title: service,
    version: providerManifest.version,
    description: service,
  }
)
}

async function main(){
  clearOutputDir();

  const docFiles = findFilesInDocs();
  const fileFilters = docFiles
  .filter(filename => filename.startsWith("aws-"))
  .map(filename => filename.split("-")[1]);

  const uniqueServices = [...new Set(fileFilters)];

  for (let service of uniqueServices) {
    try {
      const filePrefix = `aws-${service}-`;
      let outputFilename = `${service}.yaml`;

      const validService = await processService(filePrefix, outputFilename);

      if(!validService) {
        console.log(`WARN: No stackQL views found for ${service}`);
        continue;
      }

      // add service to manifest
      providerManifest.providerServices[service] = {
        id: `${service}:${providerManifest.version}`,
        name: service,
        preferred: true,
        service: {
            $ref: `${providerName}/${providerManifest.version}/services/${service}.yaml`,
        },
        title: service,
        version: providerManifest.version,
        description: service,
      };
      console.log('Service processed', service);
    } catch (error) {
      console.log('Error processing file', service, error)
    }
  }

  // copy static files to services directory
  copyStaticFiles();

  // add static files
  const baseNames = staticFiles.map(file => file.replace('.yaml', ''));
  baseNames.forEach(service => {
    console.log('Adding static service to manifest', service);
    addStaticFilesToManifest(service);
  });

  // fix doc issues
  const cwd = process.cwd();

  const opensearchFilePath = path.join(__dirname, `${openAPIDir}/src/awscc/v00.00.00000/services/opensearchservice.yaml`);
  let opensearchContent = await fs.promises.readFile(opensearchFilePath, 'utf8');
  opensearchContent = opensearchContent.replace(/\$ref: '#\/properties\/Arn'/g, 'type: string');
  fs.writeFileSync(opensearchFilePath, opensearchContent, "utf8");

  const resourceGroupsFilePath = path.join(__dirname, `${openAPIDir}/src/awscc/v00.00.00000/services/resourcegroups.yaml`);
  let resourceGroupsContent = await fs.promises.readFile(resourceGroupsFilePath, 'utf8');
  resourceGroupsContent = resourceGroupsContent.replace(/as group,/g, 'as group_id,');
  fs.writeFileSync(resourceGroupsFilePath, resourceGroupsContent, "utf8");

  writeObjectToYamlFile(providerManifest, '../provider.yaml');
}

await main();