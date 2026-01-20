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
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApiGateway::Deployment&#96;&#96; resource deploys an API Gateway &#96;&#96;RestApi&#96;&#96; resource to a stage so that clients can call the API over the internet. The stage acts as an environment.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigateway.deployments" /></td></tr>
</tbody>
</table>

## Fields
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
        "description": "The logging level for this method. For valid values, see the &#96;&#96;loggingLevel&#96;&#96; property of the &#91;MethodSetting&#93;(https://docs.aws.amazon.com/apigateway/latest/api/API&#95;MethodSetting.html) resource in the &#42;Amazon API Gateway API Reference&#42;."
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
        "description": "The target request steady-state rate limit. For more information, see &#91;Manage API Request Throttling&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html) in the &#42;API Gateway Developer Guide&#42;."
      },
      {
        "name": "client_certificate_id",
        "type": "string",
        "description": "The identifier of the client certificate that API Gateway uses to call your integration endpoints in the stage."
      },
      {
        "name": "variables",
        "type": "object",
        "description": "A map that defines the stage variables. Variable names must consist of alphanumeric characters, and the values must match the following regular expression: &#96;&#96;&#91;A-Za-z0-9-.&#95;&#126;:/?#&=,&#93;+&#96;&#96;."
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
        "description": "The target request burst rate limit. This allows more requests through for a period of time than the target rate limit. For more information, see &#91;Manage API Request Throttling&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html) in the &#42;API Gateway Developer Guide&#42;."
      },
      {
        "name": "caching_enabled",
        "type": "boolean",
        "description": "Indicates whether responses are cached and returned for requests. You must enable a cache cluster on the stage to cache responses. For more information, see &#91;Enable API Gateway Caching in a Stage to Enhance API Performance&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html) in the &#42;API Gateway Developer Guide&#42;."
      },
      {
        "name": "tracing_enabled",
        "type": "boolean",
        "description": "Specifies whether active tracing with X-ray is enabled for this stage.<br />For more information, see &#91;Trace API Gateway API Execution with X-Ray&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-xray.html) in the &#42;API Gateway Developer Guide&#42;."
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
            "description": "The HTTP method. To apply settings to multiple resources and methods, specify an asterisk (&#96;&#96;&#42;&#96;&#96;) for the &#96;&#96;HttpMethod&#96;&#96; and &#96;&#96;/&#42;&#96;&#96; for the &#96;&#96;ResourcePath&#96;&#96;. This parameter is required when you specify a &#96;&#96;MethodSetting&#96;&#96;."
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
            "description": "The resource path for this method. Forward slashes (&#96;&#96;/&#96;&#96;) are encoded as &#96;&#96;&#126;1&#96;&#96; and the initial slash must include a forward slash. For example, the path value &#96;&#96;/resource/subresource&#96;&#96; must be encoded as &#96;&#96;/&#126;1resource&#126;1subresource&#96;&#96;. To specify the root path, use only a slash (&#96;&#96;/&#96;&#96;). To apply settings to multiple resources and methods, specify an asterisk (&#96;&#96;&#42;&#96;&#96;) for the &#96;&#96;HttpMethod&#96;&#96; and &#96;&#96;/&#42;&#96;&#96; for the &#96;&#96;ResourcePath&#96;&#96;. This parameter is required when you specify a &#96;&#96;MethodSetting&#96;&#96;."
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
            "description": "The Amazon Resource Name (ARN) of the CloudWatch Logs log group or Kinesis Data Firehose delivery stream to receive access logs. If you specify a Kinesis Data Firehose delivery stream, the stream name must begin with &#96;&#96;amazon-apigateway-&#96;&#96;. This parameter is required to enable access logging."
          },
          {
            "name": "format",
            "type": "string",
            "description": "A single line format of the access logs of data, as specified by selected &#91;$context variables&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html#context-variable-reference). The format must include at least &#96;&#96;$context.requestId&#96;&#96;. This parameter is required to enable access logging."
          }
        ]
      },
      {
        "name": "cache_cluster_size",
        "type": "string",
        "description": "The size of the stage's cache cluster. For more information, see &#91;cacheClusterSize&#93;(https://docs.aws.amazon.com/apigateway/latest/api/API&#95;CreateStage.html#apigw-CreateStage-request-cacheClusterSize) in the &#42;API Gateway API Reference&#42;."
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
    "description": "The &#96;&#96;DeploymentCanarySettings&#96;&#96; property type specifies settings for the canary deployment.",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-deployment.html"><code>AWS::ApiGateway::Deployment</code></a>.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="create_resource" /></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="RestApiId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

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
WHERE region = 'us-east-1' AND data__Identifier = '<DeploymentId>|<RestApiId>';
```

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
'{{ RestApiId }}',
'{{ region }}';
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
 '{{ Description }}',
 '{{ StageDescription }}',
 '{{ StageName }}',
 '{{ RestApiId }}',
 '{{ DeploymentCanarySettings }}',
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
  - name: deployment
    props:
      - name: Description
        value: '{{ Description }}'
      - name: StageDescription
        value:
          CacheTtlInSeconds: '{{ CacheTtlInSeconds }}'
          Description: '{{ Description }}'
          LoggingLevel: '{{ LoggingLevel }}'
          CanarySetting:
            DeploymentId: '{{ DeploymentId }}'
            PercentTraffic: null
            StageVariableOverrides: {}
            UseStageCache: '{{ UseStageCache }}'
          ThrottlingRateLimit: null
          ClientCertificateId: '{{ ClientCertificateId }}'
          Variables: {}
          DocumentationVersion: '{{ DocumentationVersion }}'
          CacheDataEncrypted: '{{ CacheDataEncrypted }}'
          DataTraceEnabled: '{{ DataTraceEnabled }}'
          ThrottlingBurstLimit: '{{ ThrottlingBurstLimit }}'
          CachingEnabled: '{{ CachingEnabled }}'
          TracingEnabled: '{{ TracingEnabled }}'
          MethodSettings:
            - CacheDataEncrypted: '{{ CacheDataEncrypted }}'
              CacheTtlInSeconds: '{{ CacheTtlInSeconds }}'
              CachingEnabled: '{{ CachingEnabled }}'
              DataTraceEnabled: '{{ DataTraceEnabled }}'
              HttpMethod: '{{ HttpMethod }}'
              LoggingLevel: '{{ LoggingLevel }}'
              MetricsEnabled: '{{ MetricsEnabled }}'
              ResourcePath: '{{ ResourcePath }}'
              ThrottlingBurstLimit: '{{ ThrottlingBurstLimit }}'
              ThrottlingRateLimit: null
          AccessLogSetting:
            DestinationArn: '{{ DestinationArn }}'
            Format: '{{ Format }}'
          CacheClusterSize: '{{ CacheClusterSize }}'
          MetricsEnabled: '{{ MetricsEnabled }}'
          Tags:
            - Value: '{{ Value }}'
              Key: '{{ Key }}'
          CacheClusterEnabled: '{{ CacheClusterEnabled }}'
      - name: StageName
        value: '{{ StageName }}'
      - name: RestApiId
        value: '{{ RestApiId }}'
      - name: DeploymentCanarySettings
        value:
          StageVariableOverrides: {}
          PercentTraffic: null
          UseStageCache: '{{ UseStageCache }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apigateway.deployments
WHERE data__Identifier = '<DeploymentId|RestApiId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>deployments</code> resource, the following permissions are required:

### Read
```json
apigateway:GET
```

### Create
```json
apigateway:POST,
apigateway:PATCH,
apigateway:PUT,
apigateway:GET
```

### Update
```json
apigateway:PATCH,
apigateway:GET,
apigateway:PUT,
apigateway:DELETE
```

### List
```json
apigateway:GET
```

### Delete
```json
apigateway:GET,
apigateway:DELETE
```
