---
title: knowledge_bases
hide_title: false
hide_table_of_contents: false
keywords:
  - knowledge_bases
  - bedrock
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

Creates, updates, deletes or gets a <code>knowledge_base</code> resource or lists <code>knowledge_bases</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>knowledge_bases</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Bedrock::KnowledgeBase Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.bedrock.knowledge_bases" /></td></tr>
</tbody>
</table>

## Fields
<Tabs
    defaultValue="get"
    values={[
        { label: 'get (all properties)', value: 'get' },
        { label: 'list (identifiers only)', value: 'list' }
    ]}
>
<TabItem value="get">

<SchemaTable fields={[
  {
    "name": "description",
    "type": "string",
    "description": "Description of the Resource."
  },
  {
    "name": "knowledge_base_configuration",
    "type": "object",
    "description": "Contains details about the embeddings model used for the knowledge base.",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": "The type of a knowledge base."
      },
      {
        "name": "vector_knowledge_base_configuration",
        "type": "object",
        "description": "Contains details about the model used to create vector embeddings for the knowledge base.",
        "children": [
          {
            "name": "embedding_model_arn",
            "type": "string",
            "description": "The ARN of the model used to create vector embeddings for the knowledge base."
          },
          {
            "name": "embedding_model_configuration",
            "type": "object",
            "description": "The embeddings model configuration details for the vector model used in Knowledge Base.",
            "children": [
              {
                "name": "bedrock_embedding_model_configuration",
                "type": "object",
                "description": "The vector configuration details for the Bedrock embeddings model."
              }
            ]
          },
          {
            "name": "supplemental_data_storage_configuration",
            "type": "object",
            "description": "Configurations for supplemental data storage.",
            "children": [
              {
                "name": "supplemental_data_storage_locations",
                "type": "array",
                "description": "List of supplemental data storage locations."
              }
            ]
          }
        ]
      },
      {
        "name": "kendra_knowledge_base_configuration",
        "type": "object",
        "description": "Configurations for a Kendra knowledge base",
        "children": [
          {
            "name": "kendra_index_arn",
            "type": "string",
            "description": "Arn of a Kendra index"
          }
        ]
      },
      {
        "name": "sql_knowledge_base_configuration",
        "type": "object",
        "description": "Configurations for a SQL knowledge base",
        "children": [
          {
            "name": "type",
            "type": "string",
            "description": "SQL query engine type"
          },
          {
            "name": "redshift_configuration",
            "type": "object",
            "description": "Configurations for a Redshift knowledge base",
            "children": [
              {
                "name": "storage_configurations",
                "type": "array",
                "description": "List of configurations for available Redshift query engine storage types"
              },
              {
                "name": "query_engine_configuration",
                "type": "object",
                "description": "Configurations for Redshift query engine"
              },
              {
                "name": "query_generation_configuration",
                "type": "object",
                "description": "Configurations for generating Redshift engine queries"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "knowledge_base_id",
    "type": "string",
    "description": "The unique identifier of the knowledge base."
  },
  {
    "name": "knowledge_base_arn",
    "type": "string",
    "description": "The ARN of the knowledge base."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the knowledge base."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of a knowledge base."
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "The ARN of the IAM role with permissions to invoke API operations on the knowledge base. The ARN must begin with AmazonBedrockExecutionRoleForKnowledgeBase&#95;"
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The time at which the knowledge base was created."
  },
  {
    "name": "failure_reasons",
    "type": "array",
    "description": "A list of reasons that the API operation on the knowledge base failed."
  },
  {
    "name": "updated_at",
    "type": "string",
    "description": "The time at which the knowledge base was last updated."
  },
  {
    "name": "storage_configuration",
    "type": "object",
    "description": "The vector store service in which the knowledge base is stored.",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": "The storage type of a knowledge base."
      },
      {
        "name": "opensearch_serverless_configuration",
        "type": "object",
        "description": "Contains the storage configuration of the knowledge base in Amazon OpenSearch Service.",
        "children": [
          {
            "name": "collection_arn",
            "type": "string",
            "description": "The ARN of the OpenSearch Service vector store."
          },
          {
            "name": "vector_index_name",
            "type": "string",
            "description": "The name of the vector store."
          },
          {
            "name": "field_mapping",
            "type": "object",
            "description": "A mapping of Bedrock Knowledge Base fields to OpenSearch Serverless field names",
            "children": [
              {
                "name": "vector_field",
                "type": "string",
                "description": "The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources."
              },
              {
                "name": "text_field",
                "type": "string",
                "description": "The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose."
              },
              {
                "name": "metadata_field",
                "type": "string",
                "description": "The name of the field in which Amazon Bedrock stores metadata about the vector store."
              }
            ]
          }
        ]
      },
      {
        "name": "pinecone_configuration",
        "type": "object",
        "description": "Contains the storage configuration of the knowledge base in Pinecone.",
        "children": [
          {
            "name": "connection_string",
            "type": "string",
            "description": "The endpoint URL for your index management page."
          },
          {
            "name": "credentials_secret_arn",
            "type": "string",
            "description": "The ARN of the secret that you created in AWS Secrets Manager that is linked to your Pinecone API key."
          },
          {
            "name": "namespace",
            "type": "string",
            "description": "The namespace to be used to write new data to your database."
          },
          {
            "name": "field_mapping",
            "type": "object",
            "description": "Contains the names of the fields to which to map information about the vector store.",
            "children": [
              {
                "name": "text_field",
                "type": "string",
                "description": "The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose."
              },
              {
                "name": "metadata_field",
                "type": "string",
                "description": "The name of the field in which Amazon Bedrock stores metadata about the vector store."
              }
            ]
          }
        ]
      },
      {
        "name": "rds_configuration",
        "type": "object",
        "description": "Contains details about the storage configuration of the knowledge base in Amazon RDS. For more information, see Create a vector index in Amazon RDS.",
        "children": [
          {
            "name": "resource_arn",
            "type": "string",
            "description": "The ARN of the vector store."
          },
          {
            "name": "credentials_secret_arn",
            "type": "string",
            "description": "The ARN of the secret that you created in AWS Secrets Manager that is linked to your Amazon RDS database."
          },
          {
            "name": "database_name",
            "type": "string",
            "description": "The name of your Amazon RDS database."
          },
          {
            "name": "table_name",
            "type": "string",
            "description": "The name of the table in the database."
          },
          {
            "name": "field_mapping",
            "type": "object",
            "description": "Contains the names of the fields to which to map information about the vector store.",
            "children": [
              {
                "name": "primary_key_field",
                "type": "string",
                "description": "The name of the field in which Amazon Bedrock stores the ID for each entry."
              },
              {
                "name": "vector_field",
                "type": "string",
                "description": "The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources."
              },
              {
                "name": "text_field",
                "type": "string",
                "description": "The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose."
              },
              {
                "name": "metadata_field",
                "type": "string",
                "description": "The name of the field in which Amazon Bedrock stores metadata about the vector store."
              },
              {
                "name": "custom_metadata_field",
                "type": "string",
                "description": "The name of the field in which Amazon Bedrock stores custom metadata about the vector store."
              }
            ]
          }
        ]
      },
      {
        "name": "mongo_db_atlas_configuration",
        "type": "object",
        "description": "Contains the storage configuration of the knowledge base in MongoDb Atlas Cloud.",
        "children": [
          {
            "name": "endpoint",
            "type": "string",
            "description": "MongoDB Atlas endpoint."
          },
          {
            "name": "credentials_secret_arn",
            "type": "string",
            "description": "The ARN of the secret that you created in AWS Secrets Manager that is linked to your Amazon Mongo database."
          },
          {
            "name": "database_name",
            "type": "string",
            "description": "Name of the database within MongoDB Atlas."
          },
          {
            "name": "collection_name",
            "type": "string",
            "description": "Name of the collection within MongoDB Atlas."
          },
          {
            "name": "vector_index_name",
            "type": "string",
            "description": "Name of a MongoDB Atlas index."
          },
          {
            "name": "text_index_name",
            "type": "string",
            "description": "Name of a MongoDB Atlas text index."
          },
          {
            "name": "endpoint_service_name",
            "type": "string",
            "description": "MongoDB Atlas endpoint service name."
          },
          {
            "name": "field_mapping",
            "type": "object",
            "description": "Contains the names of the fields to which to map information about the vector store.",
            "children": [
              {
                "name": "vector_field",
                "type": "string",
                "description": "The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources."
              },
              {
                "name": "text_field",
                "type": "string",
                "description": "The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose."
              },
              {
                "name": "metadata_field",
                "type": "string",
                "description": "The name of the field in which Amazon Bedrock stores metadata about the vector store."
              }
            ]
          }
        ]
      },
      {
        "name": "neptune_analytics_configuration",
        "type": "object",
        "description": "Contains the configurations to use Neptune Analytics as Vector Store.",
        "children": [
          {
            "name": "graph_arn",
            "type": "string",
            "description": "ARN for Neptune Analytics graph database."
          },
          {
            "name": "field_mapping",
            "type": "object",
            "description": "A mapping of Bedrock Knowledge Base fields to Neptune Analytics fields.",
            "children": [
              {
                "name": "text_field",
                "type": "string",
                "description": "The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose."
              },
              {
                "name": "metadata_field",
                "type": "string",
                "description": "The name of the field in which Amazon Bedrock stores metadata about the vector store."
              }
            ]
          }
        ]
      },
      {
        "name": "opensearch_managed_cluster_configuration",
        "type": "object",
        "description": "Contains the storage configuration of the knowledge base in Amazon OpenSearch Service.",
        "children": [
          {
            "name": "domain_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the OpenSearch domain."
          },
          {
            "name": "domain_endpoint",
            "type": "string",
            "description": "The endpoint URL the OpenSearch domain."
          },
          {
            "name": "vector_index_name",
            "type": "string",
            "description": "The name of the vector store."
          },
          {
            "name": "field_mapping",
            "type": "object",
            "description": "A mapping of Bedrock Knowledge Base fields to OpenSearch Managed Cluster field names",
            "children": [
              {
                "name": "vector_field",
                "type": "string",
                "description": "The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources."
              },
              {
                "name": "text_field",
                "type": "string",
                "description": "The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose."
              },
              {
                "name": "metadata_field",
                "type": "string",
                "description": "The name of the field in which Amazon Bedrock stores metadata about the vector store."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A map of tag keys and values"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "knowledge_base_id",
    "type": "string",
    "description": "The unique identifier of the knowledge base."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html"><code>AWS::Bedrock::KnowledgeBase</code></a>.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Resource</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="create_resource" /></td>
    <td><code>knowledge_bases</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="KnowledgeBaseConfiguration, Name, RoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>knowledge_bases</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>knowledge_bases</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>knowledge_bases_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>knowledge_bases</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get (all properties)', value: 'get' },
        { label: 'list (identifiers only)', value: 'list' }
    ]}
>
<TabItem value="get">

Gets all properties from an individual <code>knowledge_base</code>.
```sql
SELECT
region,
description,
knowledge_base_configuration,
knowledge_base_id,
knowledge_base_arn,
name,
status,
role_arn,
created_at,
failure_reasons,
updated_at,
storage_configuration,
tags
FROM awscc.bedrock.knowledge_bases
WHERE region = 'us-east-1' AND Identifier = '{{ knowledge_base_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>knowledge_bases</code> in a region.
```sql
SELECT
region,
knowledge_base_id
FROM awscc.bedrock.knowledge_bases_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>knowledge_base</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

<Tabs
    defaultValue="required"
    values={[
      { label: 'Required Properties', value: 'required', },
      { label: 'All Properties', value: 'all', },
      { label: 'Manifest', value: 'manifest', },
    ]
}>
<TabItem value="required">

```sql
/*+ create */
INSERT INTO awscc.bedrock.knowledge_bases (
 KnowledgeBaseConfiguration,
 Name,
 RoleArn,
 region
)
SELECT
'{{ knowledge_base_configuration }}',
 '{{ name }}',
 '{{ role_arn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.bedrock.knowledge_bases (
 Description,
 KnowledgeBaseConfiguration,
 Name,
 RoleArn,
 StorageConfiguration,
 Tags,
 region
)
SELECT
 '{{ description }}',
 '{{ knowledge_base_configuration }}',
 '{{ name }}',
 '{{ role_arn }}',
 '{{ storage_configuration }}',
 '{{ tags }}',
 '{{ region }}';
```
</TabItem>
<TabItem value="manifest">

```yaml
version: 1
name: stack name
description: stack description
providers:
  - aws
globals:
  - name: region
    value: '{{ vars.AWS_REGION }}'
resources:
  - name: knowledge_base
    props:
      - name: description
        value: '{{ description }}'
      - name: knowledge_base_configuration
        value:
          type: '{{ type }}'
          vector_knowledge_base_configuration:
            embedding_model_arn: '{{ embedding_model_arn }}'
            embedding_model_configuration:
              bedrock_embedding_model_configuration:
                dimensions: '{{ dimensions }}'
                embedding_data_type: '{{ embedding_data_type }}'
            supplemental_data_storage_configuration:
              supplemental_data_storage_locations:
                - supplemental_data_storage_location_type: '{{ supplemental_data_storage_location_type }}'
                  s3_location:
                    uri: '{{ uri }}'
          kendra_knowledge_base_configuration:
            kendra_index_arn: '{{ kendra_index_arn }}'
          sql_knowledge_base_configuration:
            type: '{{ type }}'
            redshift_configuration:
              storage_configurations:
                - type: '{{ type }}'
                  aws_data_catalog_configuration:
                    table_names:
                      - '{{ table_names[0] }}'
                  redshift_configuration:
                    database_name: '{{ database_name }}'
              query_engine_configuration:
                type: '{{ type }}'
                serverless_configuration:
                  workgroup_arn: '{{ workgroup_arn }}'
                  auth_configuration:
                    type: '{{ type }}'
                    username_password_secret_arn: '{{ username_password_secret_arn }}'
                provisioned_configuration:
                  cluster_identifier: '{{ cluster_identifier }}'
                  auth_configuration:
                    type: '{{ type }}'
                    database_user: '{{ database_user }}'
                    username_password_secret_arn: null
              query_generation_configuration:
                execution_timeout_seconds: '{{ execution_timeout_seconds }}'
                generation_context:
                  tables:
                    - name: '{{ name }}'
                      description: '{{ description }}'
                      inclusion: '{{ inclusion }}'
                      columns:
                        - name: '{{ name }}'
                          description: null
                          inclusion: null
                  curated_queries:
                    - natural_language: '{{ natural_language }}'
                      sql: '{{ sql }}'
      - name: name
        value: '{{ name }}'
      - name: role_arn
        value: '{{ role_arn }}'
      - name: storage_configuration
        value:
          type: '{{ type }}'
          opensearch_serverless_configuration:
            collection_arn: '{{ collection_arn }}'
            vector_index_name: '{{ vector_index_name }}'
            field_mapping:
              vector_field: '{{ vector_field }}'
              text_field: '{{ text_field }}'
              metadata_field: '{{ metadata_field }}'
          pinecone_configuration:
            connection_string: '{{ connection_string }}'
            credentials_secret_arn: '{{ credentials_secret_arn }}'
            namespace: '{{ namespace }}'
            field_mapping:
              text_field: '{{ text_field }}'
              metadata_field: '{{ metadata_field }}'
          rds_configuration:
            resource_arn: '{{ resource_arn }}'
            credentials_secret_arn: '{{ credentials_secret_arn }}'
            database_name: '{{ database_name }}'
            table_name: '{{ table_name }}'
            field_mapping:
              primary_key_field: '{{ primary_key_field }}'
              vector_field: '{{ vector_field }}'
              text_field: '{{ text_field }}'
              metadata_field: '{{ metadata_field }}'
              custom_metadata_field: '{{ custom_metadata_field }}'
          mongo_db_atlas_configuration:
            endpoint: '{{ endpoint }}'
            credentials_secret_arn: '{{ credentials_secret_arn }}'
            database_name: '{{ database_name }}'
            collection_name: '{{ collection_name }}'
            vector_index_name: '{{ vector_index_name }}'
            text_index_name: '{{ text_index_name }}'
            endpoint_service_name: '{{ endpoint_service_name }}'
            field_mapping:
              vector_field: '{{ vector_field }}'
              text_field: '{{ text_field }}'
              metadata_field: '{{ metadata_field }}'
          neptune_analytics_configuration:
            graph_arn: '{{ graph_arn }}'
            field_mapping:
              text_field: '{{ text_field }}'
              metadata_field: '{{ metadata_field }}'
          opensearch_managed_cluster_configuration:
            domain_arn: '{{ domain_arn }}'
            domain_endpoint: '{{ domain_endpoint }}'
            vector_index_name: '{{ vector_index_name }}'
            field_mapping:
              vector_field: '{{ vector_field }}'
              text_field: '{{ text_field }}'
              metadata_field: '{{ metadata_field }}'
      - name: tags
        value: {}
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>knowledge_base</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.bedrock.knowledge_bases
SET PatchDocument = string('{{ {
    "Description": description,
    "Name": name,
    "RoleArn": role_arn,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ knowledge_base_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.bedrock.knowledge_bases
WHERE Identifier = '{{ knowledge_base_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>knowledge_bases</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
bedrock:CreateKnowledgeBase,
bedrock:GetKnowledgeBase,
bedrock:TagResource,
bedrock:ListTagsForResource,
bedrock:AssociateThirdPartyKnowledgeBase,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
bedrock:GetKnowledgeBase,
bedrock:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
bedrock:GetKnowledgeBase,
bedrock:UpdateKnowledgeBase,
bedrock:TagResource,
bedrock:UntagResource,
bedrock:ListTagsForResource,
bedrock:AssociateThirdPartyKnowledgeBase,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
bedrock:GetKnowledgeBase,
bedrock:DeleteKnowledgeBase,
bedrock:ListDataSources
```

</TabItem>
<TabItem value="list">

```json
bedrock:ListKnowledgeBases
```

</TabItem>
</Tabs>