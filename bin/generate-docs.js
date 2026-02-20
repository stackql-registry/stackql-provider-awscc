import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import pluralize from 'pluralize';
import indefinite from 'indefinite';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// ES module equivalents for __dirname and __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//
// update ...
//
const providerName = 'awscc';
const providerDirName = 'awscc'; // Directory name differs from provider name
const staticServices = [];
const websiteDir = '../website';
const providerDevDir = '../provider-dev';
const openAPIdir = '../openapi';

const sqlCodeBlockStart = '```sql';
const jsonCodeBlockStart = '```json';
const yamlCodeBlockStart = '```yaml';
const codeBlockEnd = '```';
const mdCodeAnchor = "`";

async function createDocsForService(yamlFilePath) {
    const data = yaml.load(fs.readFileSync(yamlFilePath, 'utf8'));

    const serviceName = path.basename(yamlFilePath, '.yaml');

    if(staticServices.includes(serviceName)) {
        console.log(`Skipping ${serviceName}`);
        return;
    }

    const serviceFolder = path.join(__dirname, `${websiteDir}/docs/services`, serviceName);

    // Create service directory under generated-docs
    if (!fs.existsSync(serviceFolder)) {
        fs.mkdirSync(serviceFolder, { recursive: true });
    }

    let resourcesObj = data.components['x-stackQL-resources'];

    if (!resourcesObj) {
        console.warn(`No resources found in ${yamlFilePath}`);
        return;
    }

    const resources = [];
    for (let resourceName in resourcesObj) {
        let resourceData = resourcesObj[resourceName];

        // Check if 'id' exists in 'resourceData'
        if (!resourceData.id) {
            console.warn(`No 'id' defined for resource: ${resourceName} in service: ${serviceName}`);
            return;
        }

        // Create the markdown content for the resource
        const schemaName = resourceData['x-cfn-schema-name'] || '';
        const schemaTypeName = resourceData['x-cfn-type-name'] || '';
        const methodType = resourceData['x-type'];
        const identifiers = resourceData['x-identifiers'] || [];
        const schema = data.components.schemas[schemaName] || {};
        const componentsSchemas = data.components.schemas;

        resources.push({ name: resourceName, type: methodType, identifiers: identifiers, schemaName, schema, componentsSchemas, resourceData, schemaTypeName });
    }

    // Build map of _list_only resources to their base resources
    const listOnlyMap = {};
    for (const resource of resources) {
        if (resource.name.endsWith('_list_only')) {
            const baseName = resource.name.replace('_list_only', '');
            listOnlyMap[baseName] = resource;
        }
    }

    // Filter out _list_only resources - they will be collapsed into base resource docs
    const filteredResources = resources.filter(r => !r.name.endsWith('_list_only'));

    // Create index.md for the service
    const serviceIndexPath = path.join(serviceFolder, 'index.md');
    const serviceIndexContent = await createServiceIndexContent(serviceName, filteredResources);
    fs.writeFileSync(serviceIndexPath, serviceIndexContent);

    // Divide resources into two columns
    const halfLength = Math.ceil(filteredResources.length / 2);
    const firstColumn = filteredResources.slice(0, halfLength);
    const secondColumn = filteredResources.slice(halfLength);

    // Create resource subfolders and index.md for each resource
    firstColumn.forEach((resource) => {
        const resourceFolder = path.join(serviceFolder, resource.name);
        if (!fs.existsSync(resourceFolder)) {
            fs.mkdirSync(resourceFolder, { recursive: true });
        }

        const resourceIndexPath = path.join(resourceFolder, 'index.md');
        const resourceIndexContent = createResourceIndexContent(serviceName, resource.name, resource.type, resource.identifiers, resource.schemaName, resource.schema, resource.componentsSchemas, resource.resourceData, resource.schemaTypeName, listOnlyMap[resource.name]);
        fs.writeFileSync(resourceIndexPath, resourceIndexContent);
    });

    secondColumn.forEach((resource) => {
        const resourceFolder = path.join(serviceFolder, resource.name);
        if (!fs.existsSync(resourceFolder)) {
            fs.mkdirSync(resourceFolder, { recursive: true });
        }

        const resourceIndexPath = path.join(resourceFolder, 'index.md');
        const resourceIndexContent = createResourceIndexContent(serviceName, resource.name, resource.type, resource.identifiers, resource.schemaName, resource.schema, resource.componentsSchemas, resource.resourceData, resource.schemaTypeName, listOnlyMap[resource.name]);

        try {
            fs.writeFileSync(resourceIndexPath, resourceIndexContent);
        } catch (error) {
            console.error('Error writing file:');
            console.error('Path:', resourceIndexPath);
            console.error('Content type:', typeof resourceIndexContent);
            console.error('Content:', resourceIndexContent);
            console.error('Error:', error);
        }
    });

    console.log(`Generated documentation for ${serviceName}`);
}

async function createServiceIndexContent(serviceName, resources) {
    const totalResources = resources.length; // Calculate the total resources

    totalResourcesCount += totalResources; // Update global resource count

    // Sort resources alphabetically by name
    resources.sort((a, b) => a.name.localeCompare(b.name));

    const halfLength = Math.ceil(totalResources / 2);
    const firstColumnResources = resources.slice(0, halfLength);
    const secondColumnResources = resources.slice(halfLength);

    // Generate the HTML for resource links in the first column
    const firstColumnLinks = generateResourceLinks(serviceName, firstColumnResources);

    // Generate the HTML for resource links in the second column
    const secondColumnLinks = generateResourceLinks(serviceName, secondColumnResources);

    // Create the markdown content for the service index
    // You can customize this content as needed
    return `---
title: ${serviceName}
hide_title: false
hide_table_of_contents: false
keywords:
  - ${serviceName}
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

The ${serviceName} service documentation.

:::info Service Summary

<div class="row">
<div class="providerDocColumn">
<span>total resources:&nbsp;<b>${totalResources}</b></span><br />
</div>
</div>

:::

## Resources
<div class="row">
<div class="providerDocColumn">
${firstColumnLinks}
</div>
<div class="providerDocColumn">
${secondColumnLinks}
</div>
</div>`;
}

function generateResourceLinks(serviceName, resources) {
    // Generate resource links for the service index
    const resourceLinks = resources.map((resource) => {
        return `<a href="/services/${serviceName}/${resource.name}/">${resource.name}</a>`;
    });
    return resourceLinks.join('<br />\n');
}

function createDeleteExample(serviceName, resourceName, resourceData, thisSchema, allSchemas) {
    const deleteOperation = resourceData.methods?.delete_resource;
    if (!deleteOperation) {
        return '';
    }

    return `\n## ${mdCodeAnchor}DELETE${mdCodeAnchor} example

${sqlCodeBlockStart}
/*+ delete */
DELETE FROM ${providerName}.${serviceName}.${resourceName}
WHERE Identifier = '<${resourceData['x-identifiers'].join('|')}>'
AND region = 'us-east-1';
${codeBlockEnd}
`;
}

function createUpdateExample(serviceName, resourceName, resourceData, thisSchema, allSchemas) {
    const updateOperation = resourceData.methods?.update_resource;
    if (!updateOperation) {
        return '';
    }

    const readOnlyProps = (thisSchema['x-read-only-properties'] || []).map(p => p.split('/')[0]);
    const createOnlyProps = (thisSchema['x-create-only-properties'] || []).map(p => p.split('/')[0]);
    const excludeProps = new Set([...readOnlyProps, ...createOnlyProps]);

    const updatableProps = Object.keys(thisSchema.properties || {}).filter(p => !excludeProps.has(p));

    if (updatableProps.length === 0) {
        return '';
    }

    const patchFields = updatableProps.map(p => `    "${p}": ${toSnakeCase(fixCamelCaseIssues(p))}`).join(',\n');
    const identifierValues = (resourceData['x-identifiers'] || []).map(id => `<${id}>`).join('|');

    return `\n## ${mdCodeAnchor}UPDATE${mdCodeAnchor} example

Use the following StackQL query and manifest file to update a <code>${pluralize.singular(resourceName)}</code> resource, using [__${mdCodeAnchor}stack-deploy${mdCodeAnchor}__](https://pypi.org/project/stack-deploy/).

${sqlCodeBlockStart}
/*+ update */
UPDATE ${providerName}.${serviceName}.${resourceName}
SET PatchDocument = string('{{ {
${patchFields}
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '${identifierValues}';
${codeBlockEnd}
`;
}

function createInsertExample(serviceName, resourceName, resourceData, thisSchema, allSchemas) {
    const createOperation = resourceData.methods?.create_resource;
    if (!createOperation) {
        return '';
    }

    function resolveRef(ref, visitedRefs) {
        const path = ref.replace('#/components/schemas/', '');
        if (visitedRefs.has(path)) {
            console.log(`Cyclic reference detected for ${path}, skipping expansion.`);
            return null; // Return null or some placeholder to avoid infinite recursion
        }
        visitedRefs.add(path);
        return allSchemas[path];
    }
    
    function resolveType(schema, requiredOnly, visitedRefs = new Set()) {
        if (!schema) return null;
    
        if (schema.type) {
            switch (schema.type) {
                case 'string':
                    return 'string';
                case 'integer':
                    return 0;
                case 'boolean':
                    return false;
                case 'array':
                    if (schema.items) {
                        return [resolveType(schema.items.$ref ? resolveRef(schema.items.$ref, visitedRefs) : schema.items, requiredOnly, visitedRefs)];
                    }
                    return [];
                case 'object':
                    if (schema.properties) {
                        let obj = {};
                        Object.keys(schema.properties).forEach(prop => {
                            if(schema['x-read-only-properties'] && schema['x-read-only-properties'].includes(prop)){
                                return null;
                            }
                            if (requiredOnly && schema['x-required-properties'] && !schema['x-required-properties'].includes(prop)) {
                                return null;
                            }
                            obj[prop] = resolveType(schema.properties[prop].$ref ? resolveRef(schema.properties[prop].$ref, visitedRefs) : schema.properties[prop], requiredOnly, visitedRefs);
                        });
                        return obj;
                    }
                    return {};
                default:
                    return null;
            }
        } else if (schema.$ref) {
            return resolveType(resolveRef(schema.$ref, visitedRefs), requiredOnly, visitedRefs);
        }
        return null;
    }

    function getObjectDetails(inputObject, detailType) {
        const keys = Object.keys(inputObject);
        const values = Object.values(inputObject);
        
        switch (detailType) {
            case 'keys':
                return keys;
            case 'values':
                return values;
            default:
                throw new Error('Invalid detail type requested. Use "keys" or "values".');
        }
    }
    
    function templateObjectValues(obj) {
        const templatedObj = JSON.parse(JSON.stringify(obj), (key, value) => {
            if (typeof value === 'string') {
                return `{{ ${key} }}`;
            }
            if (typeof value === 'boolean' || typeof value === 'number') {
                return `{{ ${key} }}`;
            }
            if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'string') {
                return [`{{ ${key}[0] }}`];
            }
            return value;
        });
        return templatedObj
    }

    const templateObject = {
        version: 1,
        name: "stack name",
        description: "stack description",
        providers: [
          "aws"
        ],
        globals: [{
            name: "region",
            value: "{{ vars.AWS_REGION }}"
        }],
        resources: [],
      };

      function transformDataToResource(templateData, resourceName, isRoot = true) {
        if (!templateData) return null;
    
        if (isRoot) {
            // If it's the root object, return a structured resource
            return {
                name: `${pluralize.singular(resourceName)}`,
                props: Object.entries(templateData).map(([key, value]) => ({
                    name: key,
                    value: transformDataToResource(value, resourceName, false)
                }))
            };
        } else if (Array.isArray(templateData)) {
            // If it's an array, transform each element
            return templateData.map(item => transformDataToResource(item, resourceName, false));
        } else if (typeof templateData === 'object' && templateData !== null) {
            // For object values, recursively call transformation for each property
            const transformedObject = {};
            for (const [key, value] of Object.entries(templateData)) {
                transformedObject[key] = transformDataToResource(value, resourceName, false);
            }
            return transformedObject;
        } else {
            // For primitive values, simply return the value
            return templateData;
        }
    };

    templateObject.resources.push(transformDataToResource(templateObjectValues(resolveType(thisSchema, false)), resourceName));

    return `\n## ${mdCodeAnchor}INSERT${mdCodeAnchor} example

Use the following StackQL query and manifest file to create a new <code>${pluralize.singular(resourceName)}</code> resource, using [__${mdCodeAnchor}stack-deploy${mdCodeAnchor}__](https://pypi.org/project/stack-deploy/).

<Tabs
    defaultValue="required"
    values={[
      { label: 'Required Properties', value: 'required', },
      { label: 'All Properties', value: 'all', },
      { label: 'Manifest', value: 'manifest', },
    ]
}>
<TabItem value="required">

${sqlCodeBlockStart}
/*+ create */
INSERT INTO ${providerName}.${serviceName}.${resourceName} (
 ${getObjectDetails(resolveType(thisSchema, true), 'keys').join(",\n ")},
 region
)
SELECT 
'{{ ${getObjectDetails(resolveType(thisSchema, true), 'keys').join(" }}',\n '{{ ")} }}',
'{{ region }}';
${codeBlockEnd}
</TabItem>
<TabItem value="all">

${sqlCodeBlockStart}
/*+ create */
INSERT INTO ${providerName}.${serviceName}.${resourceName} (
 ${getObjectDetails(resolveType(thisSchema, false), 'keys').join(",\n ")},
 region
)
SELECT 
 '{{ ${getObjectDetails(resolveType(thisSchema, false), 'keys').join(" }}',\n '{{ ")} }}',
 '{{ region }}';
${codeBlockEnd}
</TabItem>
<TabItem value="manifest">

${yamlCodeBlockStart}
${yaml.dump(templateObject)}
${codeBlockEnd}
</TabItem>
</Tabs>`;
}

function createResourceIndexContent(serviceName, resourceName, resourceType, resourceIdentifiers, schemaName, schema, componentsSchemas, resourceData, schemaTypeName, listOnlyResource) {
    // Create the markdown content for each resource index
    // resourceType is x-type, one of 'cloud_control' (cloud control), 'native' (native resource), 'view' (SQL view)

    let sqlExampleWhere;
    let sqlExampleListWhere;
    let sqlExampleGetWhere;
    let permissionsHeadingMarkdown ='';
    let permissionsBylineMarkdown = '';
    let permissionsMarkdown = '';
    let hasList = false;
    let hasGet = false;
    let isSelectable = true;
    let sqlVerbsList = [];

    const singularResourceName = pluralize.singular(resourceName);
    const listOnlyResourceName = listOnlyResource ? listOnlyResource.name : null;

    const moreInfoCaption = `For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-${serviceName}-${singularResourceName.replace(/_/g, '')}.html"><code>${schemaTypeName}</code></a>.`;

    const requiredParamsMap = {
        create_resource: (schema['x-required-properties'] ? schema['x-required-properties'].join(', ') + ', region' : 'region'),
        delete_resource: "Identifier, region",
        update_resource: "Identifier, PatchDocument, region",
    };

    const sqlExampleSelect = `SELECT`;
    const sqlExampleFrom = `FROM ${providerName}.${serviceName}.${resourceName}`;

    const globalServices = ['iam', 'route53', 'cloudfront', 'wafv2', 'shield', 'globalaccelerator'];
    sqlExampleWhere = globalServices.includes(serviceName) ? "" : "WHERE region = 'us-east-1'";
  
    let fields = resourceIdentifiers;

    let resourceDescription = `Creates, updates, deletes or gets ${indefinite(singularResourceName, { articleOnly: true })} <code>${singularResourceName}</code> resource or lists <code>${resourceName}</code> in a region`;

    if (resourceName.endsWith('_tags')) {
        const cleanedResourceName = resourceName.replace('_tags', '');
        resourceDescription = `Expands all tag keys and values for <code>${pluralize.plural(cleanedResourceName)}</code> in a region`;
    }

    if(resourceName.endsWith('_list_only')){
        const cleanedResourceName = resourceName.replace('_list_only', '');
        resourceDescription = `Lists <code>${cleanedResourceName}</code> in a region or regions, for all properties use <a href="/services/${serviceName}/${cleanedResourceName}/"><code>${cleanedResourceName}</code></a>`;
    }

    function getSqlVerbsFromResourceData(resourceData) {
        // Extract SQL verbs directly from the resource data instead of calling StackQL
        const sqlVerbsList = [];
        
        if (resourceData.sqlVerbs) {
            Object.entries(resourceData.sqlVerbs).forEach(([sqlVerbName, methodRefs]) => {
                if (methodRefs && Array.isArray(methodRefs) && methodRefs.length > 0) {
                    methodRefs.forEach(methodRef => {
                        if (methodRef && methodRef.$ref) {
                            const methodName = methodRef.$ref.split('/').pop();
                            // Use a simplified required params mapping for native resources
                            let requiredParams = 'region';
                            
                            // Map common method patterns to their required parameters
                            if (methodName.includes('list')) {
                                requiredParams = 'region';
                            } else if (methodName.includes('get') || methodName.includes('describe')) {
                                requiredParams = 'Identifier, region';
                            } else if (methodName.includes('create')) {
                                requiredParams = 'Identifier, region';
                            } else if (methodName.includes('update') || methodName.includes('modify')) {
                                requiredParams = 'Identifier, PatchDocument, region';
                            } else if (methodName.includes('delete')) {
                                requiredParams = 'Identifier, region';
                            }
                            
                            sqlVerbsList.push({
                                sqlVerbName,
                                methodName,
                                requiredParams
                            });
                        }
                    });
                }
            });
        }
        
        return sqlVerbsList;
    }    

    if (resourceType === 'view') {
        // isPlural = false;
        fields = schema.properties;
        resourceDescription = schema.description;
        if(schema['x-example-where-clause']){
            sqlExampleWhere = `${schema['x-example-where-clause']};`
        }

        sqlVerbsList.push({
            sqlVerbName: 'select',
            methodName: 'view',
            requiredParams: 'region'
        });        
    }

    if (resourceType === 'native') {
        // isPlural = false;
        resourceData['x-example-where-clause'] ? sqlExampleWhere = `${resourceData['x-example-where-clause']};` : isSelectable = false;
        if(isSelectable){
            fields = componentsSchemas[resourceData['x-cfn-schema-name']].properties;
            resourceDescription = componentsSchemas[resourceData['x-cfn-schema-name']].description;
        } else {
            resourceDescription = resourceData['x-description'];
        }

        if (!resourceDescription) {
            if('x-description' in resourceData){
                resourceDescription = resourceData['x-description'];
            }
        }

        const verbsToPush = getSqlVerbsFromResourceData(resourceData);
        verbsToPush.forEach(({ sqlVerbName, methodName, requiredParams }) => {
            sqlVerbsList.push({
                sqlVerbName,
                methodName,
                requiredParams
            });
        });
    }

    if (resourceType === 'cloud_control_view') {

        let viewResourceName = resourceName;
        
        if (resourceName.endsWith('_tags')) {
            viewResourceName = pluralize.plural(resourceName.replace('_tags', ''));
        }
    
        if(resourceName.endsWith('_list_only')){
            viewResourceName = resourceName.replace('_list_only', '');
        }

        // permissions
        permissionsHeadingMarkdown = '## Permissions\n';
        permissionsBylineMarkdown = `For permissions required to operate on the <code>${resourceName}</code> resource, see <a href="/services/${serviceName}/${viewResourceName}/#permissions"><code>${viewResourceName}</code></a>\n`;

        sqlVerbsList.push({
            sqlVerbName: 'select',
            methodName: 'list_resources',
            requiredParams: 'region'
        });

        hasList = true;
        sqlExampleListWhere = `${sqlExampleWhere};`;

    }

    if (resourceType === 'cloud_control') {

        // permissions
        permissionsHeadingMarkdown = schema?.['x-required-permissions'] ? '## Permissions\n' : '';
        permissionsBylineMarkdown = schema?.['x-required-permissions'] ? `To operate on the <code>${resourceName}</code> resource, the following permissions are required:\n` : '';
    
        const permissionTabs = Object.entries(schema?.['x-required-permissions'] ?? {})
        .map(([permissionType, permissions]) => {
            const includedTypes = ['create', 'list', 'delete', 'read', 'update'];

          if (includedTypes.includes(permissionType)) {
            // update flags
            if (permissionType === 'list') {
                hasList = true;
            }
            if (permissionType === 'read') {
                hasGet = true;
            }

            if(!hasList && !hasGet){
                isSelectable = false;
            }

            if (permissions.length === 0) {
              return null;
            }

            const label = permissionType.charAt(0).toUpperCase() + permissionType.slice(1);
            const permissionsList = permissions.join(",\n");

            return { value: permissionType, label, permissionsList };
          } else {
            return null;
          }
        })
        .filter(section => section !== null);

        if (permissionTabs.length > 0) {
            const tabValues = permissionTabs.map(t => `      { label: '${t.label}', value: '${t.value}', },`).join('\n');
            const tabItems = permissionTabs.map(t => `<TabItem value="${t.value}">

${jsonCodeBlockStart}
${t.permissionsList}
${codeBlockEnd}

</TabItem>`).join('\n');

            permissionsMarkdown = `<Tabs
    defaultValue="${permissionTabs[0].value}"
    values={[
${tabValues}
    ]
}>
${tabItems}
</Tabs>`;
        } else {
            permissionsMarkdown = '';
        }

        // covers non select ops for cc resources
         sqlVerbsList = Object.entries(resourceData.sqlVerbs).map(([key, value]) => {
            if (value && Array.isArray(value) && value.length > 0 && typeof value[0].$ref == 'string') {
            return {
                sqlVerbName: key,
                methodName: value[0].$ref.split('/').pop(),
                requiredParams: requiredParamsMap[value[0].$ref.split('/').pop()]
            };
        }});

        if(hasList){
            sqlVerbsList.push({
                sqlVerbName: 'select',
                methodName: 'list_resources',
                requiredParams: 'region'
            });
        }
        
        if(hasGet){
            sqlVerbsList.push({
                sqlVerbName: 'select',
                methodName: 'get_resource',
                requiredParams: 'Identifier, region'
            });
        }

        const identifierValues = resourceIdentifiers.map(id => `<${id}>`).join('|');
        const identifierClause = `Identifier = '${identifierValues}'`;

        sqlExampleListWhere = `${sqlExampleWhere};`;
        globalServices.includes(serviceName) ? sqlExampleGetWhere = `WHERE ${identifierClause};`: sqlExampleGetWhere = `${sqlExampleWhere} AND ${identifierClause};`;

    }
   
    sqlVerbsList = sqlVerbsList.filter(Boolean);

    // if resourceDescription is an empty string or undefined, error out
    if (!resourceDescription) {
        console.error(`Resource description is missing for ${serviceName}.${resourceName}`);
        return;
    }
    
    const sqlExampleListCols = getColumns(fields, true, resourceType === 'native', false);
    const sqlExampleGetCols = getColumns(schema.properties, false, resourceType === 'native', false);
    const sqlExampleGetTagsCols = getColumns(schema.properties, false, resourceType === 'native', true);

    // Compute list_only fields for tabbed display
    const listOnlyFields = listOnlyResource
        ? generateSchemaJsonForResource(serviceName, listOnlyResourceName, 'cloud_control_view', schema, componentsSchemas, sqlExampleListCols)
        : null;
    const listOnlyFrom = listOnlyResourceName
        ? `FROM ${providerName}.${serviceName}.${listOnlyResourceName}`
        : null;

    // Build the Fields section
    let fieldsSection;
    if (!(isSelectable || hasList || hasGet)) {
        fieldsSection = '<code>SELECT</code> operation not supported for this resource.';
    } else if (listOnlyResource && hasGet) {
        const getFields = JSON.stringify(generateSchemaJsonForResource(serviceName, resourceName, resourceType, schema, componentsSchemas, sqlExampleListCols), null, 2);
        const listFields = JSON.stringify(listOnlyFields, null, 2);
        fieldsSection = `<Tabs
    defaultValue="get"
    values={[
        { label: 'get (all properties)', value: 'get' },
        { label: 'list (identifiers only)', value: 'list' }
    ]}
>
<TabItem value="get">

<SchemaTable fields={${getFields}} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={${listFields}} />
</TabItem>
</Tabs>`;
    } else {
        fieldsSection = `<SchemaTable fields={${JSON.stringify(generateSchemaJsonForResource(serviceName, resourceName, resourceType, schema, componentsSchemas, sqlExampleListCols), null, 2)}} />`;
    }

    return `---
title: ${resourceName}
hide_title: false
hide_table_of_contents: false
keywords:
  - ${resourceName}
  - ${serviceName}
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

${resourceDescription}

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>${resourceName}</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
${schema.description ? `<tr><td><b>Description</b></td><td>${cleanDescription(schema.description)}</td></tr>` : `<tr><td><b>Description</b></td><td>${resourceName}</td></tr>`}
<tr><td><b>Id</b></td><td><CopyableCode code="${providerName}.${serviceName}.${resourceName}" /></td></tr>
</tbody>
</table>

## Fields
${fieldsSection}
${schemaName && resourceType === 'cloud_control' ? `\n${moreInfoCaption}\n` : ''}
## Methods
${generateMethodsTable(serviceName, resourceName, sqlVerbsList, listOnlyResourceName)}

${serviceName != 'cloud_control' ? generateSelectExamples(resourceName, hasList, hasGet, sqlExampleSelect, sqlExampleListCols, sqlExampleFrom, sqlExampleListWhere, sqlExampleGetCols, sqlExampleGetTagsCols, sqlExampleGetWhere, listOnlyResourceName, listOnlyFrom): ''}
${serviceName != 'cloud_control' ? createInsertExample(serviceName, resourceName, resourceData, schema, componentsSchemas): ''}
${serviceName != 'cloud_control' ? createUpdateExample(serviceName, resourceName, resourceData, schema, componentsSchemas): ''}
${serviceName != 'cloud_control' ? createDeleteExample(serviceName, resourceName, resourceData, schema, componentsSchemas): ''}
${permissionsHeadingMarkdown}
${permissionsBylineMarkdown}
${permissionsMarkdown}`;
}

function getDescFromRef(ref, components) {
    // Assuming ref is a string like '#/components/schemas/Arn'
    const schemaname = ref.split('/').pop();
    let schema = components[schemaname];
    return schema.description;
}

function getTypeFromRef(ref, components) {
    // Assuming ref is a string like '#/components/schemas/Arn'
    const schemaname = ref.split('/').pop();
    let schema = components[schemaname];
    return schema.type;
}

function cleanDescription(description) {
    if (!description) return '';
    
    // MDX special chars to escape
    const escapeForMdx = (str) => str
        .replace(/{/g, '&#123;')
        .replace(/}/g, '&#125;')
        .replace(/\[/g, '&#91;')
        .replace(/\]/g, '&#93;')
        .replace(/\*/g, '&#42;')
        .replace(/~/g, '&#126;')
        .replace(/_/g, '&#95;')
        .replace(/`/g, '&#96;')
        .replace(/\|/g, '&#124;');

    // Fix potentially malformed code tags from source
    const fixCodeTags = (str) => {
        // Remove any unclosed <code> tags by ensuring pairs
        let result = str;
        const openCount = (result.match(/<code>/gi) || []).length;
        const closeCount = (result.match(/<\/code>/gi) || []).length;
        
        if (openCount > closeCount) {
            // Add missing closing tags at end
            for (let i = 0; i < openCount - closeCount; i++) {
                result += '</code>';
            }
        } else if (closeCount > openCount) {
            // Remove orphan closing tags
            let diff = closeCount - openCount;
            result = result.replace(/<\/code>/gi, (match) => {
                if (diff > 0) {
                    diff--;
                    return '';
                }
                return match;
            });
        }
        return result;
    };

    const htmlPattern = /<p[\s\S]*?>[\s\S]*?<\/p>|<code[\s\S]*?>[\s\S]*?<\/code>|<pre[\s\S]*?>[\s\S]*?<\/pre>|<br\s*\/?>/i;
    
    let result = description;
    
    // Protect content inside <code> tags from MDX escaping
    const codeBlocks = [];
    result = result.replace(/<code>(.*?)<\/code>/gi, (match, content) => {
        codeBlocks.push(content);
        return `__CODE_BLOCK_${codeBlocks.length - 1}__`;
    });
    
    // Apply MDX escaping to non-code content
    result = escapeForMdx(result);
    
    // Restore code blocks (unescaped)
    result = result.replace(/__CODE_BLOCK_(\d+)__/g, (match, index) => {
        return `<code>${codeBlocks[parseInt(index)]}</code>`;
    });
    
    if(!htmlPattern.test(description)){
        result = result
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }
    
    result = result
        .replace(/[\r\n]+/g, '<br />')
        .replace(/\t/g, ' ')
        .replace(/\s\s+/g, ' ')
        .replace(/<br \/>\s+/g, '<br />')
        .trim();
    
    return fixCodeTags(result);
}

function toSnakeCase(str) {
    return str.replace(/[\w]([A-Z])/g, (m) => m[0] + "_" + m[1]).toLowerCase();
}

function fixCamelCaseIssues(propertyName) {
    const replacements = {
        DB: "Db",
        ARN: "Arn",
        WAN: "Wan",
        URL: "Url",
        VPC: "Vpc",
        DNS: "Dns",
        IP: "Ip",
        IAM: "Iam",
        TLS: "Tls",
        SSM: "Ssm",
        CNAME: "Cname",
        SQ: "Sq",
        ML: "Ml",
        SKU: "Sku",
        KMS: "Kms",
        OK: "Ok",
        CA: "Ca",
        ID: "Id",
        TTL: "Ttl",
        URI: "Uri",
        LB: "Lb",
        SNS: "Sns",
        AWS: "Aws",
        ACL: "Acl",
        AZ: "Az",
        API: "Api",
        MSK: "Msk",
        ECS: "Ecs",
        EBS: "Ebs",
        CWE: "Cwe",
        SSE: "Sse",
        HPO: "Hpo",
        LF: "Lf",
        WAL: "Wal",
        OAuth: "Oauth",
    };
  
    let updatedPropertyName = propertyName;
  
    for (const [key, value] of Object.entries(replacements)) {
        const regex = new RegExp(key, 'g');
        updatedPropertyName = updatedPropertyName.replace(regex, value);
    }
  
    return updatedPropertyName;
}

function generateTableRow(propName, type, descriptionCleaned, isCustom = false, nestedHtml = '') {
    if(isCustom){
        return `<tr><td><CopyableCode code="${propName}" /></td><td><code>${type}</code></td><td>${descriptionCleaned}${nestedHtml}</td></tr>\n`;
    } else {
        return `<tr><td><CopyableCode code="${toSnakeCase(fixCamelCaseIssues(propName))}" /></td><td><code>${type}</code></td><td>${descriptionCleaned}${nestedHtml}</td></tr>\n`;
    }
}

function generateSchemaJson(schema, componentsSchemas, depth = 0, maxDepth = 4, visitedRefs = new Set()) {
    if (depth >= maxDepth || !schema?.properties) return [];
    
    return Object.entries(schema.properties).map(([propName, prop]) => {
        let propType = prop.type || '';
        let propDesc = '';
        let children = [];

        // Resolve $ref
        let resolvedSchema = prop;
        if (prop.$ref) {
            const refName = prop.$ref.split('/').pop();
            if (visitedRefs.has(refName)) return null; // Prevent cycles
            visitedRefs.add(refName);
            resolvedSchema = componentsSchemas[refName] || {};
            propType = propType || resolvedSchema.type || 'object';
            propDesc = resolvedSchema.description || '';
        }

        // Handle allOf
        if (prop.allOf) {
            resolvedSchema = {};
            prop.allOf.forEach(item => {
                if (item.$ref) {
                    const refName = item.$ref.split('/').pop();
                    if (!visitedRefs.has(refName)) {
                        visitedRefs.add(refName);
                        Object.assign(resolvedSchema, componentsSchemas[refName] || {});
                    }
                } else {
                    Object.assign(resolvedSchema, item);
                }
            });
            propType = propType || resolvedSchema.type || 'object';
            propDesc = propDesc || resolvedSchema.description || '';
        }

        if (prop.description) propDesc = prop.description;
        propDesc = cleanDescription(propDesc);

        // Handle arrays - get children from items
        if ((propType === 'array' || resolvedSchema.type === 'array') && (resolvedSchema.items || prop.items)) {
            let itemsSchema = resolvedSchema.items || prop.items;
            if (itemsSchema.$ref) {
                const refName = itemsSchema.$ref.split('/').pop();
                if (!visitedRefs.has(refName)) {
                    visitedRefs.add(refName);
                    itemsSchema = componentsSchemas[refName] || {};
                }
            }
            if (itemsSchema.properties) {
                children = generateSchemaJson(itemsSchema, componentsSchemas, depth + 1, maxDepth, new Set(visitedRefs));
            }
        }

        // Handle objects - get children from properties
        if ((propType === 'object' || resolvedSchema.type === 'object') && resolvedSchema.properties) {
            children = generateSchemaJson(resolvedSchema, componentsSchemas, depth + 1, maxDepth, new Set(visitedRefs));
        }

        const fieldName = toSnakeCase(fixCamelCaseIssues(propName));
        
        return {
            name: fieldName,
            type: propType || 'object',
            description: propDesc,
            ...(children.length > 0 && { children })
        };
    }).filter(Boolean);
}

function generateSchemaJsonForResource(serviceName, resourceName, resourceType, schema, componentsSchemas, sqlExampleListCols) {
    const isTags = resourceName.endsWith('_tags');
    const isListOnly = resourceName.endsWith('_list_only');
    
    let fields = generateSchemaJson(schema, componentsSchemas, 0, 4);
    
    // Filter for list_only resources
    if (isListOnly) {
        fields = fields.filter(f => sqlExampleListCols.includes(f.name));
    }
    
    // Filter out Tags for _tags resources
    if (isTags) {
        fields = fields.filter(f => f.name !== 'tags');
        fields.push({ name: 'tag_key', type: 'string', description: 'Tag key.' });
        fields.push({ name: 'tag_value', type: 'string', description: 'Tag value.' });
    }
    
    // Add region
    fields.push({ name: 'region', type: 'string', description: 'AWS region.' });
    
    console.log(`Generated schema JSON for ${serviceName}.${resourceName}`);
    return fields;
}

// function generateNestedPropertiesHtml(propSchema, componentsSchemas, depth = 0, maxDepth = 3) {
//     if (depth >= maxDepth || !propSchema) return '';

//     let schema = propSchema;
    
//     // Resolve $ref if present
//     if (propSchema.$ref) {
//         const schemaName = propSchema.$ref.split('/').pop();
//         schema = componentsSchemas[schemaName];
//         if (!schema) return '';
//     }

//     // Handle allOf
//     if (propSchema.allOf) {
//         schema = {};
//         propSchema.allOf.forEach(item => {
//             if (item.$ref) {
//                 const refSchema = componentsSchemas[item.$ref.split('/').pop()];
//                 Object.assign(schema, refSchema);
//             } else {
//                 Object.assign(schema, item);
//             }
//         });
//     }

//     // For arrays, get items schema
//     if (schema.type === 'array' && schema.items) {
//         let itemsSchema = schema.items;
//         if (schema.items.$ref) {
//             const schemaName = schema.items.$ref.split('/').pop();
//             itemsSchema = componentsSchemas[schemaName];
//         }
//         if (itemsSchema && (itemsSchema.type === 'object' || itemsSchema.properties)) {
//             return generateNestedPropertiesHtml(itemsSchema, componentsSchemas, depth, maxDepth);
//         }
//         return '';
//     }

//     // For objects with properties
//     if (schema.properties && Object.keys(schema.properties).length > 0) {
//         let rows = '';
//         for (const [nestedPropName, nestedProp] of Object.entries(schema.properties)) {
//             let nestedType = nestedProp.type || '';
//             let nestedDesc = '';

//             if (nestedProp.$ref) {
//                 const refSchema = componentsSchemas[nestedProp.$ref.split('/').pop()];
//                 if (refSchema) {
//                     nestedType = nestedType || refSchema.type || 'object';
//                     nestedDesc = refSchema.description || '';
//                 }
//             }
//             if (nestedProp.description) {
//                 nestedDesc = nestedProp.description;
//             }

//             nestedDesc = cleanDescription(nestedDesc);
            
//             // Recurse for nested objects/arrays
//             const nestedHtml = generateNestedPropertiesHtml(nestedProp, componentsSchemas, depth + 1, maxDepth);

//             rows += `<tr><td><code>${toSnakeCase(fixCamelCaseIssues(nestedPropName))}</code></td><td><code>${nestedType}</code></td><td>${nestedDesc}${nestedHtml}</td></tr>`;
//         }

//         // Return minified HTML - no newlines
//         return `<details><summary>Show properties</summary><table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody>${rows}</tbody></table></details>`;
//     }

//     return '';
// }

function getColumns(properties, isList, isCustom = false, is_tags = false){
    let columns = 'region,';
    if (isList) {
        if(Array.isArray(properties)){
            properties.forEach(propName => {
                if(isCustom){
                    columns += `\n${propName},`;
                } else {
                    columns += `\n${toSnakeCase(fixCamelCaseIssues(propName))},`;
                }
            })
        }
    } else {
        for (let propName in properties) {
            if(isCustom){
                columns += `\n${propName},`;
            } else {
                if(propName === 'Tags' && is_tags){
                    continue;
                }
                columns += `\n${toSnakeCase(fixCamelCaseIssues(propName))},`;
            }
        }
    }

    if(is_tags){
        columns += `\ntag_key,`;
        columns += `\ntag_value,`;
    }

    columns = columns.slice(0, -1);
    return columns;
}

// function generateFieldsTable(serviceName, resourceName, resourceType, schemaName, schema, componentsSchemas, sqlExampleListCols) {
    
//     let isTags = false;
//     if(resourceName.endsWith('_tags')){
//         isTags = true;
//     }

//     let isListOnly = false;
//     if(resourceName.endsWith('_list_only')){
//         isListOnly = true;
//     }

//     let fieldsTable = '';
//     console.log(`Generating fields table for ${serviceName}.${resourceName}`);
//     for (let propName in schema.properties) {

//         if(isListOnly){
//             if(!sqlExampleListCols.includes(toSnakeCase(fixCamelCaseIssues(propName)))){
//                 continue;
//             }
//         }

//         if(isTags && propName === 'Tags'){
//             continue;
//         }

//         let propDesc = '';
//         let propType = '';
//         const prop = schema.properties[propName];

//         if('description' in prop){
//             propDesc = cleanDescription(prop.description);
//         }
//         if('type' in prop){
//             propType = prop.type;
//         }
//         if (prop.hasOwnProperty('$ref')) {
//             !propType ? propType = getTypeFromRef(prop['$ref'], componentsSchemas) : null;
//             !propDesc ? propDesc = cleanDescription(getDescFromRef(prop['$ref'], componentsSchemas)) : null;
//         } else if (prop.hasOwnProperty('allOf')) {
//             let allOfArray = prop.allOf;
//             let combinedObject = {};
//             allOfArray.forEach(item => {
//               Object.assign(combinedObject, item);
//             });
//             !propType ? propType = combinedObject.type : null;
//             !propDesc ? propDesc = combinedObject.description : null;
//             if(combinedObject.hasOwnProperty('$ref')){
//                 !propType ? propType = getTypeFromRef(combinedObject['$ref'], componentsSchemas) : null;
//                 !propDesc ? propDesc = cleanDescription(getDescFromRef(combinedObject['$ref'], componentsSchemas)) : null;
//             }
//         }

//         // Generate expandable nested properties for objects and arrays
//         let nestedHtml = '';
//         if (propType === 'object' || propType === 'array') {
//             nestedHtml = generateNestedPropertiesHtml(prop, componentsSchemas, 0, 3);
//         }

//         fieldsTable += generateTableRow(propName, propType, propDesc, false, nestedHtml);
//     }
    
//     if(isTags){
//         fieldsTable += generateTableRow('tag_key', 'string', 'Tag key.');
//         fieldsTable += generateTableRow('tag_value', 'string', 'Tag value.');
//     }

//     fieldsTable += generateTableRow('region', 'string', 'AWS region.');

//     return fieldsTable;
// }

function generateSelectExamples(resourceName, hasList, hasGet, sqlExampleSelect, sqlExampleListCols, sqlExampleFrom, sqlExampleListWhere, sqlExampleGetCols, sqlExampleGetTagsCols, sqlExampleGetWhere, listOnlyResourceName, listOnlyFrom){
    let returnString = '';
    if(hasList || hasGet){
        returnString = `## ${mdCodeAnchor}SELECT${mdCodeAnchor} examples\n`;
    } else {
        return returnString;
    }

    // Tabbed select for cloud_control resources with both get and list_only
    if(listOnlyResourceName && hasGet && hasList){
        const singularResourceName = pluralize.singular(resourceName);
        const getDesc = `Gets all properties from an individual <code>${singularResourceName}</code>.`;
        const listDesc = `Lists all <code>${resourceName}</code> in a region.`;
        const listFromClause = listOnlyFrom || sqlExampleFrom;

        returnString += `\n<Tabs
    defaultValue="get"
    values={[
        { label: 'get (all properties)', value: 'get' },
        { label: 'list (identifiers only)', value: 'list' }
    ]}
>
<TabItem value="get">

${getDesc}
${sqlCodeBlockStart}
${sqlExampleSelect}
${sqlExampleGetCols}
${sqlExampleFrom}
${sqlExampleGetWhere}
${codeBlockEnd}
</TabItem>
<TabItem value="list">

${listDesc}
${sqlCodeBlockStart}
${sqlExampleSelect}
${sqlExampleListCols}
${listFromClause}
${sqlExampleListWhere}
${codeBlockEnd}
</TabItem>
</Tabs>`;
        return returnString;
    }

    if(hasList){
        let listDesc = `Lists all <code>${resourceName.replace('_list_only','')}</code> in a region.`;

        if(resourceName.endsWith('_list_only')){
            returnString += `${listDesc}\n${sqlCodeBlockStart}\n${sqlExampleSelect}\n${sqlExampleListCols}\n${sqlExampleFrom}\n${sqlExampleListWhere}\n${codeBlockEnd}`;
        } else if(resourceName.endsWith('_tags')){
            listDesc = `Expands tags for all <code>${pluralize.plural(resourceName.replace('_tags',''))}</code> in a region.`;
            returnString += `${listDesc}\n${sqlCodeBlockStart}\n${sqlExampleSelect}\n${sqlExampleGetTagsCols}\n${sqlExampleFrom}\n${sqlExampleListWhere}\n${codeBlockEnd}`;
        }
    }

    if(hasGet){
        const singularResourceName = pluralize.singular(resourceName);
        const getDesc = `Gets all properties from an individual <code>${singularResourceName}</code>.`;
        returnString += `\n${getDesc}\n${sqlCodeBlockStart}\n${sqlExampleSelect}\n${sqlExampleGetCols}\n${sqlExampleFrom}\n${sqlExampleGetWhere}\n${codeBlockEnd}`;
    }

    return returnString;
}

function generateMethodsTable(serviceName, resourceName, sqlVerbsList, listOnlyResourceName) {
    const hasResourceCol = !!listOnlyResourceName;

    let html = `
<table>
<tbody>
  <tr>
    <th>Name</th>${hasResourceCol ? '\n    <th>Resource</th>' : ''}
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>`;

    sqlVerbsList.forEach(item => {
        const itemResource = (item.methodName === 'list_resources' && listOnlyResourceName)
            ? listOnlyResourceName
            : resourceName;
        html += `
  <tr>
    <td><CopyableCode code="${item.methodName}" /></td>${hasResourceCol ? `\n    <td><code>${itemResource}</code></td>` : ''}
    <td><code>${item.sqlVerbName.toUpperCase()}</code></td>
    <td><CopyableCode code="${item.requiredParams}" /></td>
  </tr>`;
    });

    html += `
</tbody>
</table>`;

    return html;
}

function clearAndCreateDocsDir(directory = path.join(__dirname, `${websiteDir}/docs`)) {
    if (fs.existsSync(directory)) {
        console.log(`Clearing existing docs directory: ${directory}`);
        fs.readdirSync(directory).forEach((file) => {
            const currentPath = path.join(directory, file);
            if (fs.lstatSync(currentPath).isDirectory()) {
                // Skip directories listed in staticServices
                if (staticServices.includes(file)) {
                    console.log("Skipping directory:", currentPath);
                    return; // Skip this directory and its contents
                }
                // Recurse if it's a directory and not in staticServices
                clearAndCreateDocsDir(currentPath);
                // After recursion, check if the directory is empty before attempting to remove it
                if (fs.readdirSync(currentPath).length === 0) {
                    fs.rmdirSync(currentPath); // Remove the directory once it's empty
                }
            } else {
                // Delete the file if it's not a directory and not the MDX file
                fs.unlinkSync(currentPath);
            }
        });
    } else {
        console.log("Docs directory not found, creating:", directory);
    }
    
    // Ensure the directory exists
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
        console.log("Created docs directory:", directory);
    }
}

function clearMdDocsDir(directory = `${websiteDir}/docs`) {
    if (fs.existsSync(directory)) {
        fs.readdirSync(directory).forEach((file) => {
            const currentPath = path.join(directory, file);
            if (fs.lstatSync(currentPath).isDirectory()) {
                // Skip directories listed in staticServices
                if (staticServices.includes(file)) {
                    console.log("Skipping directory:", currentPath);
                    return; // Skip this directory and its contents
                }
                // Recurse if it's a directory and not in staticServices
                clearMdDocsDir(currentPath);
                // After recursion, check if the directory is empty before attempting to remove it
                if (fs.readdirSync(currentPath).length === 0) {
                    fs.rmdirSync(currentPath); // Remove the directory once it's empty
                }
            } else {
                // Delete the file if it's not a directory and not the MDX file
                fs.unlinkSync(currentPath);
            }
        });
    } else {
        console.log("Directory not found:", directory);
    }
}

function countResourceDirectories(serviceDir) {
    return fs.readdirSync(serviceDir, { withFileTypes: true })
             .filter(dirent => dirent.isDirectory()).length;
}

//
// Main
//

// Clear and recreate the docs directory with absolute path
const docsPath = path.join(__dirname, `${websiteDir}/docs`);
clearAndCreateDocsDir(docsPath);

// delete index.md if it exists (using absolute path)
const indexMdPath = path.join(__dirname, `${websiteDir}/docs/index.md`);
if (fs.existsSync(indexMdPath)) {
    fs.unlinkSync(indexMdPath);
    console.log(`Deleted existing index.md: ${indexMdPath}`);
}

// init provider index
let servicesForIndex = [];

// Static header content
const headerContent1 = fs.readFileSync(path.join(__dirname,`${providerDevDir}/docgen/provider-data/headerContent1.txt`), 'utf8');
const headerContent2 = fs.readFileSync(path.join(__dirname,`${providerDevDir}/docgen/provider-data/headerContent2.txt`), 'utf8');

// Initialize counters for services and resources
let totalServicesCount = 0;
let totalResourcesCount = 0;

//
// Iterate over each yaml file in the output directory
// and generate documentation for each service
//
async function main() {
    const files = fs.readdirSync(path.join(__dirname, `${openAPIdir}/src/${providerDirName}/v00.00.00000/services`));
    
    for (const file of files) {
        if (path.extname(file) === '.yaml') {
            const serviceName = path.basename(file, '.yaml');
            servicesForIndex.push(serviceName);
            totalServicesCount++; // Increment service counter
            await createDocsForService(path.join(__dirname, `${openAPIdir}/src/${providerDirName}/v00.00.00000/services`, file));
        }
    }

    //
    // get data for provider index
    //

    // add non cloud control services
    servicesForIndex = servicesForIndex.concat(staticServices);

    // make sure servicesForIndex is unique
    servicesForIndex = [...new Set(servicesForIndex)];

    // add services to index
    servicesForIndex.sort();

    // Splitting services into two columns
    const half = Math.ceil(servicesForIndex.length / 2);
    const firstColumnServices = servicesForIndex.slice(0, half);
    const secondColumnServices = servicesForIndex.slice(half);

    // Function to convert services to markdown links
    function servicesToMarkdown(servicesList) {
        return servicesList.map(service => `<a href="/services/${service}/">${service}</a><br />`).join('\n');
    }

    // Create the content for the index file
    const indexContent = `${headerContent1}

:::info Provider Summary

<div class="row">
<div class="providerDocColumn">
<span>total services:&nbsp;<b>${totalServicesCount}</b></span><br />
<span>total resources:&nbsp;<b>${totalResourcesCount}</b></span><br />
</div>
</div>

:::

${headerContent2}

## Services
<div class="row">
<div class="providerDocColumn">
${servicesToMarkdown(firstColumnServices)}
</div>
<div class="providerDocColumn">
${servicesToMarkdown(secondColumnServices)}
</div>
</div>
`;

    // Write the index file
    const indexPath = path.join(__dirname, `${websiteDir}/docs/index.md`);
    fs.writeFileSync(indexPath, indexContent);

    console.log(`Index file created at ${indexPath}`);
}

// Run the main function
main().catch(console.error);
