// lib/utils/stackql-utils.js

import pluralize from 'pluralize';

const providerName = 'awscc';

function fixReservedWordColumnAlias(columnAlias) {
 switch (columnAlias) {
    case 'values':
      return `_${columnAlias}`;
    case 'schema':
      return `_${columnAlias}`;
    case 'database':
      return `_${columnAlias}`;
    case 'format':
      return `_${columnAlias}`;
    case 'update':
      return `_${columnAlias}`;
    case 'force':
      return `_${columnAlias}`;
    case 'match':
      return `_${columnAlias}`;                      
    default:
      return columnAlias;
  }
}

function fixCamelCaseIssues(propertyName) {
  const replacements = {
      DB: "Db",
      ARN: "Arn",
      WAN: "Wan",
      URL: "Url",
      VPCDHCP: "VpcDhcp",
      EC2Fleet: "Ec2_Fleet",
      VPC: "Vpc",
      DHCP: "Dhcp",
      DNS: "Dns",
      IP: "Ip",
      IAM: "Iam",
      IPAM: "Ipam",
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
      MFA: "Mfa",
      OAuth: "Oauth",
  };

  let updatedPropertyName = propertyName;

  for (const [key, value] of Object.entries(replacements)) {
      const regex = new RegExp(key, 'g');
      updatedPropertyName = updatedPropertyName.replace(regex, value);
  }

  return updatedPropertyName;
}

function handlePrimaryIdentifierProperty(dbms, primaryIdentifier, openApiSpec) {
  let columns = "";

  primaryIdentifier.forEach(identifier => {
    const pathParts = identifier.replace(/^\//, '').split('/'); // Remove leading slash and split

    // let columnAlias = toSnakeCase(pathParts.join('_'));
    let columnAlias = toSnakeCase(pathParts.map(fixCamelCaseIssues).join('_'));

    columnAlias = fixReservedWordColumnAlias(columnAlias);

    if (dbms === 'postgres'){
      // log a message when pathParts is greater than 1
      if (pathParts.length > 1) {
        console.log(`The primaryIdentifier ${identifier} has more than one part.`);
      }
      // Wrap each part in single quotes and separate by commas
      const adjustedIdentifier = pathParts.map(part => `'${part}'`).join(', ');
      // Use json_extract_path_text for 'json' type or jsonb_extract_path_text for 'jsonb' type
      columns += `json_extract_path_text(Properties, ${adjustedIdentifier}) as ${columnAlias},\n`;
    } else {
      // For SQLite and others, use the adjusted identifier directly
      const adjustedIdentifier = pathParts.join('.');
      columns += `JSON_EXTRACT(Properties, '$.${adjustedIdentifier}') as ${columnAlias},\n`;
    }  
  });

  // Remove the trailing comma from the last column
  columns = columns.replace(/,\n$/, '');

  return columns;
}

function handleSimpleProperty(dbms, propertyName, addDetail = false) {
  let columnAlias = toSnakeCase(fixCamelCaseIssues(propertyName));
  const propertiesName = addDetail ? 'detail.Properties' : 'Properties';

  columnAlias = fixReservedWordColumnAlias(columnAlias);

  if (dbms === 'postgres'){
    return `json_extract_path_text(${propertiesName}, '${propertyName}') as ${columnAlias},\n`;
  } else {
    return `JSON_EXTRACT(${propertiesName}, '$.${propertyName}') as ${columnAlias},\n`;
  }
}

function toSnakeCase(str) {
  return str.replace(/[\w]([A-Z])/g, (m) => m[0] + "_" + m[1]).toLowerCase();
}

function removeTrailingComma(query) {
  return query.slice(0, -2);
}

function generateSelectQuery({
  dbms,
  schemaName,
  schema,
  componentName,
  openApiSpec,
  isPlural
}) {
  let selectQuery = "SELECT\nregion,\n";

  // Iterate over all properties in the schema
  if(isPlural && schema['x-stackql-primary-identifier']){
    selectQuery += handlePrimaryIdentifierProperty(dbms, schema['x-stackql-primary-identifier'], openApiSpec);
  } else {
    selectQuery += "Identifier,\n";
    for (const propertyName in schema.properties) {
      // Use simple property handler for all properties
      selectQuery += handleSimpleProperty(dbms, propertyName);
    }
    selectQuery = removeTrailingComma(selectQuery);
  }

  // selectQuery = removeTrailingComma(selectQuery);
  const typeName = `AWS::${componentName}::${schemaName}`;
  
  // Append the FROM clause based on whether it is plural or singular
  if (isPlural){
    selectQuery += `\nFROM ${providerName}.cloud_control.resources WHERE TypeName = '${typeName}'`;
  } else {
    const primaryIdentifiers = schema['x-stackql-primary-identifier'];
    const identifierValues = primaryIdentifiers.map(id => `<${id}>`).join('|');
    selectQuery += `\nFROM ${providerName}.cloud_control.resource WHERE TypeName = '${typeName}'\nAND Identifier = '${identifierValues}'`;
  }

  return selectQuery;
}

export function generateStackqlViews(openApiSpec) {
  const componentName = openApiSpec.info.title;

  // const globalServices = ['IAM', 'Route53', 'CloudFront', 'WAFv2', 'Shield', 'GlobalAccelerator'];
  // const regionClause = globalServices.includes(componentName) ? "" : "\nAND region = 'us-east-1'";

  const regionClause = "\nAND region = 'us-east-1'";

  const topLevelSchemas = Object.entries(openApiSpec.components.schemas)
    .filter(([_, value]) => value['x-stackql-resource-name']);

  console.log(`componentName: ${componentName}, number of topLevelSchemas: ${topLevelSchemas.length}`);  

  const views = {};

  topLevelSchemas.forEach(([schemaName, schema]) => {

    let resource = schema['x-stackql-resource-name'] || schemaName;
    const permissions = schema['x-required-permissions'] || {};
    const isListSupported = permissions['list'] && permissions['list'].length > 0 ? true : false;
    const isGetSupported = permissions['read'] && permissions['read'].length > 0 ? true : false;
    const isCreateSupported = permissions['create'] && permissions['create'].length > 0 ? true : false;
    const isUpdateSupported = permissions['update'] && permissions['update'].length > 0 ? true : false;
    const isDeleteSupported = permissions['delete'] && permissions['delete'].length > 0 ? true : false;
    
    const pluralResource = pluralize(resource);

    // if(['registry', 'list', 'stream'].includes(resource)){
    //   resource = `${componentName.toLowerCase()}_${resource}`;
    // }

    views[pluralResource] = {
      name: pluralResource,
      id: `${providerName}.${componentName.toLowerCase()}.${pluralResource}`,
      'x-cfn-schema-name': schemaName,
      'x-cfn-type-name': schema['x-type-name'],
      'x-identifiers': schema['x-stackql-primary-identifier'],
      'x-type': 'cloud_control',
      methods: {},
      sqlVerbs: {
        insert: [],
        delete: [],
        update: [],
      },
    };
    
    if (isCreateSupported) {
        
      // create faux schema
      openApiSpec.components.schemas = {
        ...openApiSpec.components.schemas,
        [`Create${schemaName}Request`]: {
          properties: {
            ClientToken: { type: 'string' },
            RoleArn: { type: 'string' },
            TypeName: { type: 'string' },
            TypeVersionId: { type: 'string' },
            DesiredState: {
              type: 'object',
              properties: {},
              'x-stackQL-stringOnly': true
            },
          },
          title: `Create${schemaName}Request`,
          type: 'object',
          required: []
        }
      };

      // add properties to Create${schemaName}Request from schema
      for (const propertyName in schema.properties) {
        openApiSpec.components.schemas[`Create${schemaName}Request`].properties.DesiredState.properties[propertyName] = schema.properties[propertyName];
      }

      // create faux path
      const pathKey = `/?Action=CreateResource&Version=2021-09-30&__${schemaName}&__detailTransformed=true`;

      openApiSpec.paths = {
        ...openApiSpec.paths,
        [pathKey]: {
          parameters: [
            { $ref: '#/components/parameters/X-Amz-Content-Sha256' },
            { $ref: '#/components/parameters/X-Amz-Date' },
            { $ref: '#/components/parameters/X-Amz-Algorithm' },
            { $ref: '#/components/parameters/X-Amz-Credential' },
            { $ref: '#/components/parameters/X-Amz-Security-Token' },
            { $ref: '#/components/parameters/X-Amz-Signature' },
            { $ref: '#/components/parameters/X-Amz-SignedHeaders' }
          ],
          post: {
            operationId: `Create${schemaName}`,
            parameters: [
              {
                description: "Action Header",
                in: "header",
                name: "X-Amz-Target",
                required: false,
                schema: {
                  default: `CloudApiService.CreateResource`,
                  enum: [`CloudApiService.CreateResource`],
                  type: "string"
                }
              },
              {
                in: "header",
                name: "Content-Type",
                required: false,
                schema: {
                  default: "application/x-amz-json-1.0",
                  enum: ["application/x-amz-json-1.0"],
                  type: "string"
                }
              }
            ],
            requestBody: {
              content: {
                "application/x-amz-json-1.0": {
                  schema: { $ref: `#/components/schemas/Create${schemaName}Request` }
                }
              },
              required: true
            },
            responses: {
              '200': {
                content: {
                  "application/json": {
                    schema: { $ref: '#/components/x-cloud-control-schemas/ProgressEvent' }
                  }
                },
                description: "Success"
              }
            }
          }
        }
      };

      // update x-stackQL-resources
      views[pluralResource].methods.create_resource = {
        config: {
          requestBodyTranslate: {
            algorithm: "naive_DesiredState"
          },
        },
        operation: {
          $ref: `#/paths/~1?Action=CreateResource&Version=2021-09-30&__${schemaName}&__detailTransformed=true/post`
        },
        request: {
          mediaType: "application/x-amz-json-1.0",
          base: `{\n  \"TypeName\": \"${schema['x-type-name']}\"\n}`,
        },
        response: {
          mediaType: "application/json",
          openAPIDocKey: "200"
        }
      };

      views[pluralResource].sqlVerbs.insert.push({
        $ref: `#/components/x-stackQL-resources/${pluralResource}/methods/create_resource`
      });

    }

    if (isUpdateSupported) {
      views[pluralResource].methods.update_resource = {
        operation: {
          $ref: "#/paths/~1?Action=UpdateResource&Version=2021-09-30/post"
        },
        request: {
          mediaType: "application/x-amz-json-1.0",
          base: `{\n  \"TypeName\": \"${schema['x-type-name']}\"\n}`,
        },
        response: {
          mediaType: "application/json",
          openAPIDocKey: "200"
        }          
      };
      views[pluralResource].sqlVerbs.update.push({
        $ref: `#/components/x-stackQL-resources/${pluralResource}/methods/update_resource`
      });
    }

    if (isDeleteSupported) {
      views[pluralResource].methods.delete_resource = {
        operation: {
          $ref: "#/paths/~1?Action=DeleteResource&Version=2021-09-30/post"
        },
        request: {
          mediaType: "application/x-amz-json-1.0",
          base: `{\n  \"TypeName\": \"${schema['x-type-name']}\"\n}`,
        },
        response: {
          mediaType: "application/json",
          openAPIDocKey: "200"
        }          
      };
      views[pluralResource].sqlVerbs.delete.push({
        $ref: `#/components/x-stackQL-resources/${pluralResource}/methods/delete_resource`
      });        
    }

    //
    // setup view queries
    //
    let sqlliteSelectQueryPlural;
    let postgresSelectQueryPlural;
    let sqlliteSelectQuerySingular;
    let postgresSelectQuerySingular;
    let sqlliteSelectQueryListofGets;
    let postgresSelectQueryListofGets;    

    if (isListSupported){
     
      sqlliteSelectQueryPlural = generateSelectQuery({
        dbms: 'sqlite3',
        schemaName,
        schema,
        componentName,
        openApiSpec,
        isPlural: true
      });

      postgresSelectQueryPlural = generateSelectQuery({
        dbms: 'postgres',
        schemaName,
        schema,
        componentName,
        openApiSpec,
        isPlural: true
      });   

      //
      // generate list_only resource
      //
      const listOnlyResource = `${pluralResource}_list_only`;
      
      views[listOnlyResource] = {
        name: listOnlyResource,
        id: `${providerName}.${componentName.toLowerCase()}.${listOnlyResource}`,
        'x-cfn-schema-name': schemaName,
        'x-cfn-type-name': schema['x-type-name'],
        'x-identifiers': schema['x-stackql-primary-identifier'],
        'x-type': 'cloud_control_view',
        methods: {},
        sqlVerbs: {
          insert: [],
          delete: [],
          update: [],
        },
      };

      const listConfigBlock = {
        config: {
          views: {
            select: {
              predicate: 'sqlDialect == "sqlite3"',
              ddl: `${sqlliteSelectQueryPlural}${regionClause}`,
              fallback: {
                predicate: 'sqlDialect == "postgres"',
                ddl: `${postgresSelectQueryPlural}${regionClause}`,
              },
            },
          },
        },
      };
      
      views[listOnlyResource] = {
        ...views[listOnlyResource],
        ...listConfigBlock
      };      
      
      //
      // END generate list_only resource
      //      
    }

    if (isGetSupported){

      sqlliteSelectQuerySingular = generateSelectQuery({
        dbms: 'sqlite3',
        schemaName,
        schema,
        componentName,
        openApiSpec,
        isPlural: false
      });

      postgresSelectQuerySingular = generateSelectQuery({
        dbms: 'postgres',
        schemaName,
        schema,
        componentName,
        openApiSpec,
        isPlural: false
      });    

      const configBlock = {
        config: {
          views: {
            select: {
              predicate: 'sqlDialect == "sqlite3" && requiredParams == [ Identifier ]',
              ddl: `${sqlliteSelectQuerySingular}${regionClause}`,
              fallback: {
                predicate: 'sqlDialect == "postgres" && requiredParams == [ Identifier ]',
                ddl: `${postgresSelectQuerySingular}${regionClause}`,
              },
            },
          },
        },
      };
      
      views[pluralResource] = {
        ...views[pluralResource],
        ...configBlock
      };
    }

    //
    // generate config block
    //

    // if (isListSupported && isGetSupported){

    //   sqlliteSelectQueryListofGets = generateSelectListOfGetsQuery({
    //     dbms: 'sqlite3',
    //     schemaName,
    //     schema,
    //     componentName,
    //   });

    //   postgresSelectQueryListofGets = generateSelectListOfGetsQuery({
    //     dbms: 'postgres',
    //     schemaName,
    //     schema,
    //     componentName,
    //   });  

    //   const configBlock = {
    //     config: {
    //       views: {
    //         select: {
    //           predicate: 'sqlDialect == "sqlite3" && requiredParams == [ Identifier ]',
    //           ddl: `${sqlliteSelectQuerySingular}${regionClause}`,
    //           fallback: {
    //             predicate: 'sqlDialect == "sqlite3"',
    //             ddl: `${sqlliteSelectQueryListofGets}`,
    //             fallback: {
    //               predicate: 'sqlDialect == "postgres" && requiredParams == [ Identifier ]',
    //               ddl: `${postgresSelectQuerySingular}${regionClause}`,
    //               fallback: {
    //                 predicate: 'sqlDialect == "postgres"',
    //                 ddl: `${postgresSelectQueryListofGets}`,
    //               }
    //             }
    //           }
    //         },
    //       },
    //     },
    //   };
      
    //   views[pluralResource] = {
    //     ...views[pluralResource],
    //     ...configBlock
    //   };

    //   //
    //   // generate tags resource, if Tags in schema.properties
    //   //
    //   let hasTags = false;
    //   for (const propertyName in schema.properties) {
    //     if (propertyName === 'Tags') {
    //       hasTags = true;
    //       break;
    //     }
    //   }

    //   if (hasTags) {

    //     const tagsResource = `${resource}_tags`;

    //     const sqlliteSelectTagsQuery = generateSelectListOfGetsQuery({
    //       dbms: 'sqlite3',
    //       schemaName,
    //       schema,
    //       componentName,
    //       isTags: true
    //     });
  
    //     const postgresSelectTagsQuery = generateSelectListOfGetsQuery({
    //       dbms: 'postgres',
    //       schemaName,
    //       schema,
    //       componentName,
    //       isTags: true
    //     });  

    //   views[tagsResource] = {
    //     name: tagsResource,
    //     id: `${providerName}.${componentName.toLowerCase()}.${tagsResource}`,
    //     'x-cfn-schema-name': schemaName,
    //     'x-cfn-type-name': schema['x-type-name'],
    //     'x-type': 'cloud_control_view',
    //     methods: {},
    //     sqlVerbs: {
    //       insert: [],
    //       delete: [],
    //       update: [],
    //     },
    //   };
  
    //     const configBlock = {
    //       config: {
    //         views: {
    //           select: {
    //             predicate: 'sqlDialect == "sqlite3"',
    //             ddl: `${sqlliteSelectTagsQuery}`,
    //             fallback: {
    //               predicate: 'sqlDialect == "postgres"',
    //               ddl: `${postgresSelectTagsQuery}`,
    //             }
    //           },
    //         },
    //       },
    //     };
        
    //     views[tagsResource] = {
    //       ...views[tagsResource],
    //       ...configBlock
    //     };
  
    //   }
    //   //
    //   // END generate tags resource
    //   //
    
    // } else if(isListSupported){

    //   const configBlock = {
    //     config: {
    //       views: {
    //         select: {
    //           predicate: 'sqlDialect == "sqlite3"',
    //           ddl: `${sqlliteSelectQueryPlural}${regionClause}`,
    //           fallback: {
    //             predicate: 'sqlDialect == "postgres"',
    //             ddl: `${postgresSelectQueryPlural}${regionClause}`,
    //           },
    //         },
    //       },
    //     },
    //   };
      
    //   views[pluralResource] = {
    //     ...views[pluralResource],
    //     ...configBlock
    //   };

    // } else if(isGetSupported){


    // }
      
  });

  return views;
}
