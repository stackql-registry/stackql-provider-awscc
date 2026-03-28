---
title: deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - deployments
  - apigateway
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CodeBlock from '@theme/CodeBlock';
import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>deployment</code> resource or lists <code>deployments</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>deployments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The <code>AWS::ApiGateway::Deployment</code> resource deploys an API Gateway <code>RestApi</code> resource to a stage so that clients can call the API over the internet. The stage acts as an environment.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigateway.deployments" /></td></tr>
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
    "name": "deployment_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "stage_description",
    "type": "object",
    "description": "The description of the Stage resource for the Deployment resource to create. To specify a stage description, you must also provide a stage name.",
    "children": [
      {
        "name": "cache_ttl_in_seconds",
        "type": "integer",
        "description": "The time-to-live (TTL) period, in seconds, that specifies how long API Gateway caches responses."
      },
      {
        "name": "description",
        "type": "string",
        "description": "A description of the purpose of the stage."
      },
      {
        "name": "logging_level",
        "type": "string",
        "description": "The logging level for this method. For valid values, see the <code>loggingLevel</code> property of the <a href=\"https://docs.aws.amazon.com/apigateway/latest/api/API_MethodSetting.html\">MethodSetting</a> resource in the <i>Amazon API Gateway API Reference</i>."
      },
      {
        "name": "canary_setting",
        "type": "object",
        "description": "Specifies settings for the canary deployment in this stage.",
        "children": [
          {
            "name": "deployment_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "percent_traffic",
            "type": "number",
            "description": ""
          },
          {
            "name": "stage_variable_overrides",
            "type": "object",
            "description": ""
          },
          {
            "name": "use_stage_cache",
            "type": "boolean",
            "description": ""
          }
        ]
      },
      {
        "name": "throttling_rate_limit",
        "type": "number",
        "description": "The target request steady-state rate limit. For more information, see <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html\">Manage API Request Throttling</a> in the <i>API Gateway Developer Guide</i>."
      },
      {
        "name": "client_certificate_id",
        "type": "string",
        "description": "The identifier of the client certificate that API Gateway uses to call your integration endpoints in the stage."
      },
      {
        "name": "variables",
        "type": "object",
        "description": "A map that defines the stage variables. Variable names must consist of alphanumeric characters, and the values must match the following regular expression: <code>[A-Za-z0-9-._~:/?#&=,]+</code>."
      },
      {
        "name": "documentation_version",
        "type": "string",
        "description": "The version identifier of the API documentation snapshot."
      },
      {
        "name": "cache_data_encrypted",
        "type": "boolean",
        "description": "Indicates whether the cached responses are encrypted."
      },
      {
        "name": "data_trace_enabled",
        "type": "boolean",
        "description": "Indicates whether data trace logging is enabled for methods in the stage. API Gateway pushes these logs to Amazon CloudWatch Logs."
      },
      {
        "name": "throttling_burst_limit",
        "type": "integer",
        "description": "The target request burst rate limit. This allows more requests through for a period of time than the target rate limit. For more information, see <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html\">Manage API Request Throttling</a> in the <i>API Gateway Developer Guide</i>."
      },
      {
        "name": "caching_enabled",
        "type": "boolean",
        "description": "Indicates whether responses are cached and returned for requests. You must enable a cache cluster on the stage to cache responses. For more information, see <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html\">Enable API Gateway Caching in a Stage to Enhance API Performance</a> in the <i>API Gateway Developer Guide</i>."
      },
      {
        "name": "tracing_enabled",
        "type": "boolean",
        "description": "<details><summary>Specifies whether active tracing with X-ray is enabled for this stage.</summary>For more information, see <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-xray.html\">Trace API Gateway API Execution with X-Ray</a> in the <i>API Gateway Developer Guide</i>.</details>"
      },
      {
        "name": "method_settings",
        "type": "array",
        "description": "Configures settings for all of the stage's methods.",
        "children": [
          {
            "name": "cache_data_encrypted",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "cache_ttl_in_seconds",
            "type": "integer",
            "description": ""
          },
          {
            "name": "caching_enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "data_trace_enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "http_method",
            "type": "string",
            "description": "The HTTP method. To apply settings to multiple resources and methods, specify an asterisk (<code><i></code>) for the <code>HttpMethod</code> and <code>/</i></code> for the <code>ResourcePath</code>. This parameter is required when you specify a <code>MethodSetting</code>."
          },
          {
            "name": "logging_level",
            "type": "string",
            "description": ""
          },
          {
            "name": "metrics_enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "resource_path",
            "type": "string",
            "description": "The resource path for this method. Forward slashes (<code>/</code>) are encoded as <code>~1</code> and the initial slash must include a forward slash. For example, the path value <code>/resource/subresource</code> must be encoded as <code>/~1resource~1subresource</code>. To specify the root path, use only a slash (<code>/</code>). To apply settings to multiple resources and methods, specify an asterisk (<code><i></code>) for the <code>HttpMethod</code> and <code>/</i></code> for the <code>ResourcePath</code>. This parameter is required when you specify a <code>MethodSetting</code>."
          },
          {
            "name": "throttling_burst_limit",
            "type": "integer",
            "description": ""
          },
          {
            "name": "throttling_rate_limit",
            "type": "number",
            "description": ""
          }
        ]
      },
      {
        "name": "access_log_setting",
        "type": "object",
        "description": "Specifies settings for logging access in this stage.",
        "children": [
          {
            "name": "destination_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the CloudWatch Logs log group or Kinesis Data Firehose delivery stream to receive access logs. If you specify a Kinesis Data Firehose delivery stream, the stream name must begin with <code>amazon-apigateway-</code>. This parameter is required to enable access logging."
          },
          {
            "name": "format",
            "type": "string",
            "description": "A single line format of the access logs of data, as specified by selected <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html#context-variable-reference\">$context variables</a>. The format must include at least <code>$context.requestId</code>. This parameter is required to enable access logging."
          }
        ]
      },
      {
        "name": "cache_cluster_size",
        "type": "string",
        "description": "The size of the stage's cache cluster. For more information, see <a href=\"https://docs.aws.amazon.com/apigateway/latest/api/API_CreateStage.html#apigw-CreateStage-request-cacheClusterSize\">cacheClusterSize</a> in the <i>API Gateway API Reference</i>."
      },
      {
        "name": "metrics_enabled",
        "type": "boolean",
        "description": "Indicates whether Amazon CloudWatch metrics are enabled for methods in the stage."
      },
      {
        "name": "tags",
        "type": "array",
        "description": "An array of arbitrary tags (key-value pairs) to associate with the stage.",
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
        "name": "cache_cluster_enabled",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  {
    "name": "stage_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "rest_api_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "deployment_canary_settings",
    "type": "object",
    "description": "The <code>DeploymentCanarySettings</code> property type specifies settings for the canary deployment.",
    "children": [
      {
        "name": "stage_variable_overrides",
        "type": "object",
        "description": ""
      },
      {
        "name": "percent_traffic",
        "type": "number",
        "description": ""
      },
      {
        "name": "use_stage_cache",
        "type": "boolean",
        "description": ""
      }
    ]
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
    "name": "deployment_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "rest_api_id",
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
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-deployment.html"><code>AWS::ApiGateway::Deployment</code></a>.

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
    <td><code>deployments</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="RestApiId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>deployments</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>deployments</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>deployments_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>deployments</code></td>
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

Gets all properties from an individual <code>deployment</code>.
```sql
SELECT
  region,
  deployment_id,
  description,
  stage_description,
  stage_name,
  rest_api_id,
  deployment_canary_settings
FROM awscc.apigateway.deployments
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ deployment_id }}|{{ rest_api_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>deployments</code> in a region.
```sql
SELECT
  region,
  deployment_id,
  rest_api_id
FROM awscc.apigateway.deployments_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>deployment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.apigateway.deployments (
  RestApiId,
  region
)
SELECT
  '{{ rest_api_id }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.apigateway.deployments (
  Description,
  StageDescription,
  StageName,
  RestApiId,
  DeploymentCanarySettings,
  region
)
SELECT
  '{{ description }}',
  '{{ stage_description }}',
  '{{ stage_name }}',
  '{{ rest_api_id }}',
  '{{ deployment_canary_settings }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`version: 1
name: stack name
description: stack description
providers:
  - aws
globals:
  - name: region
    value: '{{ vars.AWS_REGION }}'
resources:
  - name: deployment
    props:
      - name: description
        value: '{{ description }}'
      - name: stage_description
        value:
          cache_ttl_in_seconds: '{{ cache_ttl_in_seconds }}'
          description: '{{ description }}'
          logging_level: '{{ logging_level }}'
          canary_setting:
            deployment_id: '{{ deployment_id }}'
            percent_traffic: null
            stage_variable_overrides: {}
            use_stage_cache: '{{ use_stage_cache }}'
          throttling_rate_limit: null
          client_certificate_id: '{{ client_certificate_id }}'
          variables: {}
          documentation_version: '{{ documentation_version }}'
          cache_data_encrypted: '{{ cache_data_encrypted }}'
          data_trace_enabled: '{{ data_trace_enabled }}'
          throttling_burst_limit: '{{ throttling_burst_limit }}'
          caching_enabled: '{{ caching_enabled }}'
          tracing_enabled: '{{ tracing_enabled }}'
          method_settings:
            - cache_data_encrypted: '{{ cache_data_encrypted }}'
              cache_ttl_in_seconds: '{{ cache_ttl_in_seconds }}'
              caching_enabled: '{{ caching_enabled }}'
              data_trace_enabled: '{{ data_trace_enabled }}'
              http_method: '{{ http_method }}'
              logging_level: '{{ logging_level }}'
              metrics_enabled: '{{ metrics_enabled }}'
              resource_path: '{{ resource_path }}'
              throttling_burst_limit: '{{ throttling_burst_limit }}'
              throttling_rate_limit: null
          access_log_setting:
            destination_arn: '{{ destination_arn }}'
            format: '{{ format }}'
          cache_cluster_size: '{{ cache_cluster_size }}'
          metrics_enabled: '{{ metrics_enabled }}'
          tags:
            - value: '{{ value }}'
              key: '{{ key }}'
          cache_cluster_enabled: '{{ cache_cluster_enabled }}'
      - name: stage_name
        value: '{{ stage_name }}'
      - name: rest_api_id
        value: '{{ rest_api_id }}'
      - name: deployment_canary_settings
        value:
          stage_variable_overrides: {}
          percent_traffic: null
          use_stage_cache: '{{ use_stage_cache }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>deployment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.apigateway.deployments
SET PatchDocument = string('{{ {
    "Description": description,
    "StageDescription": stage_description,
    "StageName": stage_name
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ deployment_id }}|{{ rest_api_id }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apigateway.deployments
WHERE
  Identifier = '{{ deployment_id }}|{{ rest_api_id }}' AND
  region = '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

## Permissions

To operate on the <code>deployments</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="read">

```json
apigateway:GET
```

</TabItem>
<TabItem value="create">

```json
apigateway:POST,
apigateway:PATCH,
apigateway:PUT,
apigateway:GET
```

</TabItem>
<TabItem value="update">

```json
apigateway:PATCH,
apigateway:GET,
apigateway:PUT,
apigateway:DELETE
```

</TabItem>
<TabItem value="list">

```json
apigateway:GET
```

</TabItem>
<TabItem value="delete">

```json
apigateway:GET,
apigateway:DELETE
```

</TabItem>
</Tabs>