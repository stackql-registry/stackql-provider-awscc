---
title: graphql_apis
hide_title: false
hide_table_of_contents: false
keywords:
  - graphql_apis
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

Creates, updates, deletes or gets a <code>graphql_api</code> resource or lists <code>graphql_apis</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>graphql_apis</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::AppSync::GraphQLApi</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.appsync.graphql_apis" /></td></tr>
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
    "name": "additional_authentication_providers",
    "type": "array",
    "description": "A list of additional authentication providers for the GraphqlApi API.",
    "children": [
      {
        "name": "lambda_authorizer_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "identity_validation_expression",
            "type": "string",
            "description": "A regular expression for validation of tokens before the Lambda function is called."
          },
          {
            "name": "authorizer_uri",
            "type": "string",
            "description": "The ARN of the Lambda function to be called for authorization."
          },
          {
            "name": "authorizer_result_ttl_in_seconds",
            "type": "integer",
            "description": "The number of seconds a response should be cached for."
          }
        ]
      },
      {
        "name": "open_id_connect_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "client_id",
            "type": "string",
            "description": "The client identifier of the Relying party at the OpenID identity provider."
          },
          {
            "name": "auth_ttl",
            "type": "number",
            "description": "The number of milliseconds that a token is valid after being authenticated."
          },
          {
            "name": "issuer",
            "type": "string",
            "description": "The issuer for the OIDC configuration."
          },
          {
            "name": "iat_ttl",
            "type": "number",
            "description": "The number of milliseconds that a token is valid after it's issued to a user.<br />"
          }
        ]
      },
      {
        "name": "user_pool_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "app_id_client_regex",
            "type": "string",
            "description": "A regular expression for validating the incoming Amazon Cognito user pool app client ID."
          },
          {
            "name": "user_pool_id",
            "type": "string",
            "description": "The user pool ID"
          },
          {
            "name": "aws_region",
            "type": "string",
            "description": "The AWS Region in which the user pool was created."
          }
        ]
      },
      {
        "name": "authentication_type",
        "type": "string",
        "description": "The authentication type for API key, AWS Identity and Access Management, OIDC, Amazon Cognito user pools, or AWS Lambda."
      }
    ]
  },
  {
    "name": "api_id",
    "type": "string",
    "description": "Unique AWS AppSync GraphQL API identifier."
  },
  {
    "name": "api_type",
    "type": "string",
    "description": "The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API (MERGED)."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the API key"
  },
  {
    "name": "authentication_type",
    "type": "string",
    "description": "Security configuration for your GraphQL API"
  },
  {
    "name": "enhanced_metrics_config",
    "type": "object",
    "description": "Enables and controls the enhanced metrics feature. Enhanced metrics emit granular data on API usage and performance such as AppSync request and error counts, latency, and cache hits/misses. All enhanced metric data is sent to your CloudWatch account, and you can configure the types of data that will be sent.",
    "children": [
      {
        "name": "operation_level_metrics_config",
        "type": "string",
        "description": "Controls how operation metrics will be emitted to CloudWatch. Operation metrics include:<br />"
      },
      {
        "name": "resolver_level_metrics_behavior",
        "type": "string",
        "description": "Controls how resolver metrics will be emitted to CloudWatch. Resolver metrics include:<br />"
      },
      {
        "name": "data_source_level_metrics_behavior",
        "type": "string",
        "description": "Controls how data source metrics will be emitted to CloudWatch. Data source metrics include:<br />"
      }
    ]
  },
  {
    "name": "environment_variables",
    "type": "object",
    "description": "A map containing the list of resources with their properties and environment variables."
  },
  {
    "name": "graph_ql_dns",
    "type": "string",
    "description": "The fully qualified domain name (FQDN) of the endpoint URL of your GraphQL API."
  },
  {
    "name": "graph_ql_endpoint_arn",
    "type": "string",
    "description": "The GraphQL endpoint ARN."
  },
  {
    "name": "graph_ql_url",
    "type": "string",
    "description": "The Endpoint URL of your GraphQL API."
  },
  {
    "name": "introspection_config",
    "type": "string",
    "description": "Sets the value of the GraphQL API to enable (ENABLED) or disable (DISABLED) introspection. If no value is provided, the introspection configuration will be set to ENABLED by default. This field will produce an error if the operation attempts to use the introspection feature while this field is disabled."
  },
  {
    "name": "lambda_authorizer_config",
    "type": "object",
    "description": "A LambdaAuthorizerConfig holds configuration on how to authorize AWS AppSync API access when using the AWS&#95;LAMBDA authorizer mode. Be aware that an AWS AppSync API may have only one Lambda authorizer configured at a time.",
    "children": [
      {
        "name": "identity_validation_expression",
        "type": "string",
        "description": "A regular expression for validation of tokens before the Lambda function is called."
      },
      {
        "name": "authorizer_uri",
        "type": "string",
        "description": "The ARN of the Lambda function to be called for authorization."
      },
      {
        "name": "authorizer_result_ttl_in_seconds",
        "type": "integer",
        "description": "The number of seconds a response should be cached for."
      }
    ]
  },
  {
    "name": "log_config",
    "type": "object",
    "description": "The Amazon CloudWatch Logs configuration.",
    "children": [
      {
        "name": "exclude_verbose_content",
        "type": "boolean",
        "description": "Set to TRUE to exclude sections that contain information such as headers, context, and evaluated mapping templates, regardless of logging level."
      },
      {
        "name": "field_log_level",
        "type": "string",
        "description": "The field logging level. Values can be NONE, ERROR, INFO, DEBUG, or ALL."
      },
      {
        "name": "cloud_watch_logs_role_arn",
        "type": "string",
        "description": "The service role that AWS AppSync will assume to publish to Amazon CloudWatch Logs in your account."
      }
    ]
  },
  {
    "name": "merged_api_execution_role_arn",
    "type": "string",
    "description": "The AWS Identity and Access Management service role ARN for a merged API."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The API name"
  },
  {
    "name": "open_id_connect_config",
    "type": "object",
    "description": "The OpenID Connect configuration.",
    "children": [
      {
        "name": "client_id",
        "type": "string",
        "description": "The client identifier of the Relying party at the OpenID identity provider."
      },
      {
        "name": "auth_ttl",
        "type": "number",
        "description": "The number of milliseconds that a token is valid after being authenticated."
      },
      {
        "name": "issuer",
        "type": "string",
        "description": "The issuer for the OIDC configuration."
      },
      {
        "name": "iat_ttl",
        "type": "number",
        "description": "The number of milliseconds that a token is valid after it's issued to a user.<br />"
      }
    ]
  },
  {
    "name": "owner_contact",
    "type": "string",
    "description": "The owner contact information for an API resource."
  },
  {
    "name": "query_depth_limit",
    "type": "integer",
    "description": "The maximum depth a query can have in a single request. Depth refers to the amount of nested levels allowed in the body of query."
  },
  {
    "name": "realtime_dns",
    "type": "string",
    "description": "The fully qualified domain name (FQDN) of the real-time endpoint URL of your GraphQL API."
  },
  {
    "name": "realtime_url",
    "type": "string",
    "description": "The GraphQL API real-time endpoint URL."
  },
  {
    "name": "resolver_count_limit",
    "type": "integer",
    "description": "The maximum number of resolvers that can be invoked in a single request."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An arbitrary set of tags (key-value pairs) for this GraphQL API.<br />",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": ""
      },
      {
        "name": "key",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "user_pool_config",
    "type": "object",
    "description": "Optional authorization configuration for using Amazon Cognito user pools with your GraphQL endpoint.<br />",
    "children": [
      {
        "name": "app_id_client_regex",
        "type": "string",
        "description": "A regular expression for validating the incoming Amazon Cognito user pool app client ID."
      },
      {
        "name": "user_pool_id",
        "type": "string",
        "description": "The user pool ID."
      },
      {
        "name": "aws_region",
        "type": "string",
        "description": "The AWS Region in which the user pool was created."
      },
      {
        "name": "default_action",
        "type": "string",
        "description": "The action that you want your GraphQL API to take when a request that uses Amazon Cognito user pool authentication doesn't match the Amazon Cognito user pool configuration."
      }
    ]
  },
  {
    "name": "visibility",
    "type": "string",
    "description": "Sets the scope of the GraphQL API to public (GLOBAL) or private (PRIVATE). By default, the scope is set to Global if no value is provided."
  },
  {
    "name": "xray_enabled",
    "type": "boolean",
    "description": "A flag indicating whether to use AWS X-Ray tracing for this GraphqlApi.<br />"
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
    "name": "api_id",
    "type": "string",
    "description": "Unique AWS AppSync GraphQL API identifier."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html"><code>AWS::AppSync::GraphQLApi</code></a>.

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
    <td><code>graphql_apis</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, AuthenticationType, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>graphql_apis</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>graphql_apis</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>graphql_apis_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>graphql_apis</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>graphql_api</code>.
```sql
SELECT
region,
additional_authentication_providers,
api_id,
api_type,
arn,
authentication_type,
enhanced_metrics_config,
environment_variables,
graph_ql_dns,
graph_ql_endpoint_arn,
graph_ql_url,
introspection_config,
lambda_authorizer_config,
log_config,
merged_api_execution_role_arn,
name,
open_id_connect_config,
owner_contact,
query_depth_limit,
realtime_dns,
realtime_url,
resolver_count_limit,
tags,
user_pool_config,
visibility,
xray_enabled
FROM awscc.appsync.graphql_apis
WHERE region = 'us-east-1' AND data__Identifier = '<ApiId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>graphql_apis</code> in a region.
```sql
SELECT
region,
api_id
FROM awscc.appsync.graphql_apis_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>graphql_api</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.appsync.graphql_apis (
 AuthenticationType,
 Name,
 region
)
SELECT 
'{{ AuthenticationType }}',
 '{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.appsync.graphql_apis (
 AdditionalAuthenticationProviders,
 ApiType,
 AuthenticationType,
 EnhancedMetricsConfig,
 EnvironmentVariables,
 IntrospectionConfig,
 LambdaAuthorizerConfig,
 LogConfig,
 MergedApiExecutionRoleArn,
 Name,
 OpenIDConnectConfig,
 OwnerContact,
 QueryDepthLimit,
 ResolverCountLimit,
 Tags,
 UserPoolConfig,
 Visibility,
 XrayEnabled,
 region
)
SELECT 
 '{{ AdditionalAuthenticationProviders }}',
 '{{ ApiType }}',
 '{{ AuthenticationType }}',
 '{{ EnhancedMetricsConfig }}',
 '{{ EnvironmentVariables }}',
 '{{ IntrospectionConfig }}',
 '{{ LambdaAuthorizerConfig }}',
 '{{ LogConfig }}',
 '{{ MergedApiExecutionRoleArn }}',
 '{{ Name }}',
 '{{ OpenIDConnectConfig }}',
 '{{ OwnerContact }}',
 '{{ QueryDepthLimit }}',
 '{{ ResolverCountLimit }}',
 '{{ Tags }}',
 '{{ UserPoolConfig }}',
 '{{ Visibility }}',
 '{{ XrayEnabled }}',
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
  - name: graphql_api
    props:
      - name: AdditionalAuthenticationProviders
        value:
          - LambdaAuthorizerConfig:
              IdentityValidationExpression: '{{ IdentityValidationExpression }}'
              AuthorizerUri: '{{ AuthorizerUri }}'
              AuthorizerResultTtlInSeconds: '{{ AuthorizerResultTtlInSeconds }}'
            OpenIDConnectConfig:
              ClientId: '{{ ClientId }}'
              AuthTTL: null
              Issuer: '{{ Issuer }}'
              IatTTL: null
            UserPoolConfig:
              AppIdClientRegex: '{{ AppIdClientRegex }}'
              UserPoolId: '{{ UserPoolId }}'
              AwsRegion: '{{ AwsRegion }}'
            AuthenticationType: '{{ AuthenticationType }}'
      - name: ApiType
        value: '{{ ApiType }}'
      - name: AuthenticationType
        value: '{{ AuthenticationType }}'
      - name: EnhancedMetricsConfig
        value:
          OperationLevelMetricsConfig: '{{ OperationLevelMetricsConfig }}'
          ResolverLevelMetricsBehavior: '{{ ResolverLevelMetricsBehavior }}'
          DataSourceLevelMetricsBehavior: '{{ DataSourceLevelMetricsBehavior }}'
      - name: EnvironmentVariables
        value: {}
      - name: IntrospectionConfig
        value: '{{ IntrospectionConfig }}'
      - name: LambdaAuthorizerConfig
        value: null
      - name: LogConfig
        value:
          ExcludeVerboseContent: '{{ ExcludeVerboseContent }}'
          FieldLogLevel: '{{ FieldLogLevel }}'
          CloudWatchLogsRoleArn: '{{ CloudWatchLogsRoleArn }}'
      - name: MergedApiExecutionRoleArn
        value: '{{ MergedApiExecutionRoleArn }}'
      - name: Name
        value: '{{ Name }}'
      - name: OpenIDConnectConfig
        value: null
      - name: OwnerContact
        value: '{{ OwnerContact }}'
      - name: QueryDepthLimit
        value: '{{ QueryDepthLimit }}'
      - name: ResolverCountLimit
        value: '{{ ResolverCountLimit }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'
      - name: UserPoolConfig
        value:
          AppIdClientRegex: '{{ AppIdClientRegex }}'
          UserPoolId: '{{ UserPoolId }}'
          AwsRegion: '{{ AwsRegion }}'
          DefaultAction: '{{ DefaultAction }}'
      - name: Visibility
        value: '{{ Visibility }}'
      - name: XrayEnabled
        value: '{{ XrayEnabled }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.appsync.graphql_apis
SET data__PatchDocument = string('{{ {
    "AdditionalAuthenticationProviders": additional_authentication_providers,
    "ApiType": api_type,
    "AuthenticationType": authentication_type,
    "EnhancedMetricsConfig": enhanced_metrics_config,
    "EnvironmentVariables": environment_variables,
    "IntrospectionConfig": introspection_config,
    "LambdaAuthorizerConfig": lambda_authorizer_config,
    "LogConfig": log_config,
    "MergedApiExecutionRoleArn": merged_api_execution_role_arn,
    "Name": name,
    "OpenIDConnectConfig": open_id_connect_config,
    "OwnerContact": owner_contact,
    "QueryDepthLimit": query_depth_limit,
    "ResolverCountLimit": resolver_count_limit,
    "Tags": tags,
    "UserPoolConfig": user_pool_config,
    "Visibility": visibility,
    "XrayEnabled": xray_enabled
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<ApiId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.appsync.graphql_apis
WHERE data__Identifier = '<ApiId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>graphql_apis</code> resource, the following permissions are required:

### Create
```json
appsync:CreateGraphqlApi,
appsync:TagResource
```

### Read
```json
appsync:GetGraphqlApi,
appsync:GetGraphqlApiEnvironmentVariables,
appsync:ListTagsForResource
```

### Update
```json
appsync:GetGraphqlApi,
appsync:UpdateGraphqlApi,
appsync:TagResource,
appsync:UntagResource
```

### Delete
```json
appsync:DeleteGraphqlApi
```

### List
```json
appsync:ListGraphqlApis
```
