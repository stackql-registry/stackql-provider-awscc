---
title: data_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - data_sources
  - appsync
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

Creates, updates, deletes or gets a <code>data_source</code> resource or lists <code>data_sources</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>data_sources</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::AppSync::DataSource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.appsync.data_sources" /></td></tr>
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
    "name": "api_id",
    "type": "string",
    "description": "Unique AWS AppSync GraphQL API identifier where this data source will be created."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the data source."
  },
  {
    "name": "dynamo_db_config",
    "type": "object",
    "description": "AWS Region and TableName for an Amazon DynamoDB table in your account.",
    "children": [
      {
        "name": "table_name",
        "type": "string",
        "description": "The table name."
      },
      {
        "name": "delta_sync_config",
        "type": "object",
        "description": "The DeltaSyncConfig for a versioned datasource.",
        "children": [
          {
            "name": "base_table_ttl",
            "type": "string",
            "description": "The number of minutes that an Item is stored in the data source."
          },
          {
            "name": "delta_sync_table_ttl",
            "type": "string",
            "description": "The number of minutes that a Delta Sync log entry is stored in the Delta Sync table."
          },
          {
            "name": "delta_sync_table_name",
            "type": "string",
            "description": "The Delta Sync table name."
          }
        ]
      },
      {
        "name": "use_caller_credentials",
        "type": "boolean",
        "description": "Set to TRUE to use AWS Identity and Access Management with this data source."
      },
      {
        "name": "aws_region",
        "type": "string",
        "description": "The AWS Region."
      },
      {
        "name": "versioned",
        "type": "boolean",
        "description": "Set to TRUE to use Conflict Detection and Resolution with this data source."
      }
    ]
  },
  {
    "name": "elasticsearch_config",
    "type": "object",
    "description": "AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account.<br />As of September 2021, Amazon Elasticsearch Service is Amazon OpenSearch Service. This property is deprecated. For new data sources, use OpenSearchServiceConfig to specify an OpenSearch Service data source.",
    "children": [
      {
        "name": "aws_region",
        "type": "string",
        "description": "The AWS Region."
      },
      {
        "name": "endpoint",
        "type": "string",
        "description": "The endpoint."
      }
    ]
  },
  {
    "name": "event_bridge_config",
    "type": "object",
    "description": "ARN for the EventBridge bus.",
    "children": [
      {
        "name": "event_bus_arn",
        "type": "string",
        "description": "ARN for the EventBridge bus."
      }
    ]
  },
  {
    "name": "http_config",
    "type": "object",
    "description": "Endpoints for an HTTP data source.",
    "children": [
      {
        "name": "endpoint",
        "type": "string",
        "description": "The endpoint."
      },
      {
        "name": "authorization_config",
        "type": "object",
        "description": "The authorization configuration.",
        "children": [
          {
            "name": "authorization_type",
            "type": "string",
            "description": "The authorization type that the HTTP endpoint requires."
          },
          {
            "name": "aws_iam_config",
            "type": "object",
            "description": "The AWS Identity and Access Management settings.",
            "children": [
              {
                "name": "signing_region",
                "type": "string",
                "description": "The signing Region for AWS Identity and Access Management authorization."
              },
              {
                "name": "signing_service_name",
                "type": "string",
                "description": "The signing service name for AWS Identity and Access Management authorization."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "lambda_config",
    "type": "object",
    "description": "An ARN of a Lambda function in valid ARN format. This can be the ARN of a Lambda function that exists in the current account or in another account.",
    "children": [
      {
        "name": "lambda_function_arn",
        "type": "string",
        "description": "The ARN for the Lambda function."
      }
    ]
  },
  {
    "name": "name",
    "type": "string",
    "description": "Friendly name for you to identify your AppSync data source after creation."
  },
  {
    "name": "open_search_service_config",
    "type": "object",
    "description": "AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account.",
    "children": [
      {
        "name": "aws_region",
        "type": "string",
        "description": "The AWS Region."
      },
      {
        "name": "endpoint",
        "type": "string",
        "description": "The endpoint."
      }
    ]
  },
  {
    "name": "relational_database_config",
    "type": "object",
    "description": "Relational Database configuration of the relational database data source.",
    "children": [
      {
        "name": "rds_http_endpoint_config",
        "type": "object",
        "description": "Information about the Amazon RDS resource.",
        "children": [
          {
            "name": "database_name",
            "type": "string",
            "description": "Logical database name."
          },
          {
            "name": "aws_region",
            "type": "string",
            "description": "AWS Region for RDS HTTP endpoint."
          },
          {
            "name": "db_cluster_identifier",
            "type": "string",
            "description": "Amazon RDS cluster Amazon Resource Name (ARN)."
          },
          {
            "name": "aws_secret_store_arn",
            "type": "string",
            "description": "The ARN for database credentials stored in AWS Secrets Manager."
          },
          {
            "name": "schema",
            "type": "string",
            "description": "Logical schema name."
          }
        ]
      },
      {
        "name": "relational_database_source_type",
        "type": "string",
        "description": "The type of relational data source."
      }
    ]
  },
  {
    "name": "service_role_arn",
    "type": "string",
    "description": "The AWS Identity and Access Management service role ARN for the data source. The system assumes this role when accessing the data source."
  },
  {
    "name": "type",
    "type": "string",
    "description": "The type of the data source."
  },
  {
    "name": "data_source_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the API key, such as arn:aws:appsync:us-east-1:123456789012:apis/graphqlapiid/datasources/datasourcename."
  },
  {
    "name": "metrics_config",
    "type": "string",
    "description": ""
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
    "name": "data_source_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the API key, such as arn:aws:appsync:us-east-1:123456789012:apis/graphqlapiid/datasources/datasourcename."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html"><code>AWS::AppSync::DataSource</code></a>.

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
    <td><code>data_sources</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Type, ApiId, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>data_sources</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>data_sources</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>data_sources_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>data_sources</code></td>
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

Gets all properties from an individual <code>data_source</code>.
```sql
SELECT
region,
api_id,
description,
dynamo_db_config,
elasticsearch_config,
event_bridge_config,
http_config,
lambda_config,
name,
open_search_service_config,
relational_database_config,
service_role_arn,
type,
data_source_arn,
metrics_config
FROM awscc.appsync.data_sources
WHERE region = 'us-east-1' AND Identifier = '<DataSourceArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>data_sources</code> in a region.
```sql
SELECT
region,
data_source_arn
FROM awscc.appsync.data_sources_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>data_source</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.appsync.data_sources (
 ApiId,
 Name,
 Type,
 region
)
SELECT 
'{{ ApiId }}',
 '{{ Name }}',
 '{{ Type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.appsync.data_sources (
 ApiId,
 Description,
 DynamoDBConfig,
 ElasticsearchConfig,
 EventBridgeConfig,
 HttpConfig,
 LambdaConfig,
 Name,
 OpenSearchServiceConfig,
 RelationalDatabaseConfig,
 ServiceRoleArn,
 Type,
 MetricsConfig,
 region
)
SELECT 
 '{{ ApiId }}',
 '{{ Description }}',
 '{{ DynamoDBConfig }}',
 '{{ ElasticsearchConfig }}',
 '{{ EventBridgeConfig }}',
 '{{ HttpConfig }}',
 '{{ LambdaConfig }}',
 '{{ Name }}',
 '{{ OpenSearchServiceConfig }}',
 '{{ RelationalDatabaseConfig }}',
 '{{ ServiceRoleArn }}',
 '{{ Type }}',
 '{{ MetricsConfig }}',
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
  - name: data_source
    props:
      - name: ApiId
        value: '{{ ApiId }}'
      - name: Description
        value: '{{ Description }}'
      - name: DynamoDBConfig
        value:
          TableName: '{{ TableName }}'
          DeltaSyncConfig:
            BaseTableTTL: '{{ BaseTableTTL }}'
            DeltaSyncTableTTL: '{{ DeltaSyncTableTTL }}'
            DeltaSyncTableName: '{{ DeltaSyncTableName }}'
          UseCallerCredentials: '{{ UseCallerCredentials }}'
          AwsRegion: '{{ AwsRegion }}'
          Versioned: '{{ Versioned }}'
      - name: ElasticsearchConfig
        value:
          AwsRegion: '{{ AwsRegion }}'
          Endpoint: '{{ Endpoint }}'
      - name: EventBridgeConfig
        value:
          EventBusArn: '{{ EventBusArn }}'
      - name: HttpConfig
        value:
          Endpoint: '{{ Endpoint }}'
          AuthorizationConfig:
            AuthorizationType: '{{ AuthorizationType }}'
            AwsIamConfig:
              SigningRegion: '{{ SigningRegion }}'
              SigningServiceName: '{{ SigningServiceName }}'
      - name: LambdaConfig
        value:
          LambdaFunctionArn: '{{ LambdaFunctionArn }}'
      - name: Name
        value: '{{ Name }}'
      - name: OpenSearchServiceConfig
        value:
          AwsRegion: '{{ AwsRegion }}'
          Endpoint: '{{ Endpoint }}'
      - name: RelationalDatabaseConfig
        value:
          RdsHttpEndpointConfig:
            DatabaseName: '{{ DatabaseName }}'
            AwsRegion: '{{ AwsRegion }}'
            DbClusterIdentifier: '{{ DbClusterIdentifier }}'
            AwsSecretStoreArn: '{{ AwsSecretStoreArn }}'
            Schema: '{{ Schema }}'
          RelationalDatabaseSourceType: '{{ RelationalDatabaseSourceType }}'
      - name: ServiceRoleArn
        value: '{{ ServiceRoleArn }}'
      - name: Type
        value: '{{ Type }}'
      - name: MetricsConfig
        value: '{{ MetricsConfig }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>data_source</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.appsync.data_sources
SET PatchDocument = string('{{ {
    "Description": description,
    "DynamoDBConfig": dynamo_db_config,
    "ElasticsearchConfig": elasticsearch_config,
    "EventBridgeConfig": event_bridge_config,
    "HttpConfig": http_config,
    "LambdaConfig": lambda_config,
    "OpenSearchServiceConfig": open_search_service_config,
    "RelationalDatabaseConfig": relational_database_config,
    "ServiceRoleArn": service_role_arn,
    "Type": type,
    "MetricsConfig": metrics_config
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<DataSourceArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.appsync.data_sources
WHERE Identifier = '<DataSourceArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>data_sources</code> resource, the following permissions are required:

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
appsync:CreateDataSource,
appsync:GetDataSource,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
appsync:GetDataSource
```

</TabItem>
<TabItem value="update">

```json
appsync:UpdateDataSource,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
appsync:DeleteDataSource,
appsync:GetDataSource
```

</TabItem>
<TabItem value="list">

```json
appsync:ListDataSources
```

</TabItem>
</Tabs>