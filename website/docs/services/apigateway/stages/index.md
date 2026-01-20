---
title: stages
hide_title: false
hide_table_of_contents: false
keywords:
  - stages
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

Creates, updates, deletes or gets a <code>stage</code> resource or lists <code>stages</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>stages</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApiGateway::Stage&#96;&#96; resource creates a stage for a deployment.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigateway.stages" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "access_log_setting",
    "type": "object",
    "description": "The &#96;&#96;AccessLogSetting&#96;&#96; property type specifies settings for logging access in this stage.<br />&#96;&#96;AccessLogSetting&#96;&#96; is a property of the &#91;AWS::ApiGateway::Stage&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html) resource.",
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
    "name": "cache_cluster_enabled",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "cache_cluster_size",
    "type": "string",
    "description": ""
  },
  {
    "name": "canary_setting",
    "type": "object",
    "description": "",
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
    "name": "client_certificate_id",
    "type": "string",
    "description": ""
  },
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
    "name": "documentation_version",
    "type": "string",
    "description": ""
  },
  {
    "name": "method_settings",
    "type": "array",
    "description": "",
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
    "name": "rest_api_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "stage_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
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
    "name": "tracing_enabled",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "variables",
    "type": "object",
    "description": "A map (string-to-string map) that defines the stage variables, where the variable name is the key and the variable value is the value. Variable names are limited to alphanumeric characters. Values must match the following regular expression: &#96;&#96;&#91;A-Za-z0-9-.&#95;&#126;:/?#&=,&#93;+&#96;&#96;."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html"><code>AWS::ApiGateway::Stage</code></a>.

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

Gets all properties from an individual <code>stage</code>.
```sql
SELECT
region,
access_log_setting,
cache_cluster_enabled,
cache_cluster_size,
canary_setting,
client_certificate_id,
deployment_id,
description,
documentation_version,
method_settings,
rest_api_id,
stage_name,
tags,
tracing_enabled,
variables
FROM awscc.apigateway.stages
WHERE region = 'us-east-1' AND data__Identifier = '<RestApiId>|<StageName>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>stage</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.apigateway.stages (
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
INSERT INTO awscc.apigateway.stages (
 AccessLogSetting,
 CacheClusterEnabled,
 CacheClusterSize,
 CanarySetting,
 ClientCertificateId,
 DeploymentId,
 Description,
 DocumentationVersion,
 MethodSettings,
 RestApiId,
 StageName,
 Tags,
 TracingEnabled,
 Variables,
 region
)
SELECT 
 '{{ AccessLogSetting }}',
 '{{ CacheClusterEnabled }}',
 '{{ CacheClusterSize }}',
 '{{ CanarySetting }}',
 '{{ ClientCertificateId }}',
 '{{ DeploymentId }}',
 '{{ Description }}',
 '{{ DocumentationVersion }}',
 '{{ MethodSettings }}',
 '{{ RestApiId }}',
 '{{ StageName }}',
 '{{ Tags }}',
 '{{ TracingEnabled }}',
 '{{ Variables }}',
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
  - name: stage
    props:
      - name: AccessLogSetting
        value:
          DestinationArn: '{{ DestinationArn }}'
          Format: '{{ Format }}'
      - name: CacheClusterEnabled
        value: '{{ CacheClusterEnabled }}'
      - name: CacheClusterSize
        value: '{{ CacheClusterSize }}'
      - name: CanarySetting
        value:
          DeploymentId: '{{ DeploymentId }}'
          PercentTraffic: null
          StageVariableOverrides: {}
          UseStageCache: '{{ UseStageCache }}'
      - name: ClientCertificateId
        value: '{{ ClientCertificateId }}'
      - name: DeploymentId
        value: '{{ DeploymentId }}'
      - name: Description
        value: '{{ Description }}'
      - name: DocumentationVersion
        value: '{{ DocumentationVersion }}'
      - name: MethodSettings
        value:
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
      - name: RestApiId
        value: '{{ RestApiId }}'
      - name: StageName
        value: '{{ StageName }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'
      - name: TracingEnabled
        value: '{{ TracingEnabled }}'
      - name: Variables
        value: {}

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apigateway.stages
WHERE data__Identifier = '<RestApiId|StageName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>stages</code> resource, the following permissions are required:

### Create
```json
apigateway:POST,
apigateway:PATCH,
apigateway:GET,
apigateway:PUT
```

### Read
```json
apigateway:GET
```

### Update
```json
apigateway:GET,
apigateway:PATCH,
apigateway:PUT,
apigateway:DELETE
```

### Delete
```json
apigateway:DELETE
```

### List
```json
apigateway:GET
```
