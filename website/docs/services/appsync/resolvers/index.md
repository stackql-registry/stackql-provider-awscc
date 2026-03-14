---
title: resolvers
hide_title: false
hide_table_of_contents: false
keywords:
  - resolvers
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

Creates, updates, deletes or gets a <code>resolver</code> resource or lists <code>resolvers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>resolvers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td><details><summary>The <code>AWS::AppSync::Resolver</code> resource defines the logical GraphQL resolver that you attach to fields in a schema. Request and response templates for resolvers are written in Apache Velocity Template Language (VTL) format. For more information about resolvers, see <a href="https://docs.aws.amazon.com/appsync/latest/devguide/resolver-mapping-template-reference.html">Resolver Mapping Template Reference</a>.</summary>When you submit an update, CFNLong updates resources based on differences between what you submit and the stack's current template. To cause this resource to be updated you must change a property value for this resource in the CFNshort template. Changing the S3 file content without changing a property value will not result in an update operation.<br />See <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html">Update Behaviors of Stack Resources</a> in the <i>User Guide</i>.</details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.appsync.resolvers" /></td></tr>
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
    "description": "The APSYlong GraphQL API to which you want to attach this resolver."
  },
  {
    "name": "caching_config",
    "type": "object",
    "description": "The caching configuration for the resolver.",
    "children": [
      {
        "name": "caching_keys",
        "type": "array",
        "description": "<details><summary>The caching keys for a resolver that has caching activated.</summary>Valid values are entries from the <code>$context.arguments</code>, <code>$context.source</code>, and <code>$context.identity</code> maps.</details>"
      },
      {
        "name": "ttl",
        "type": "number",
        "description": "<details><summary>The TTL in seconds for a resolver that has caching activated.</summary>Valid values are 1–3,600 seconds.</details>"
      }
    ]
  },
  {
    "name": "code",
    "type": "string",
    "description": "The <code>resolver</code> code that contains the request and response functions. When code is used, the <code>runtime</code> is required. The runtime value must be <code>APPSYNC_JS</code>."
  },
  {
    "name": "code_s3_location",
    "type": "string",
    "description": "The Amazon S3 endpoint."
  },
  {
    "name": "data_source_name",
    "type": "string",
    "description": "The resolver data source name."
  },
  {
    "name": "field_name",
    "type": "string",
    "description": "The GraphQL field on a type that invokes the resolver."
  },
  {
    "name": "kind",
    "type": "string",
    "description": "<details><summary>The resolver type.</summary>+  <i>UNIT</i>: A UNIT resolver type. A UNIT resolver is the default resolver type. You can use a UNIT resolver to run a GraphQL query against a single data source.<br />+  <i>PIPELINE</i>: A PIPELINE resolver type. You can use a PIPELINE resolver to invoke a series of <code>Function</code> objects in a serial manner. You can use a pipeline resolver to run a GraphQL query against multiple data sources.</details>"
  },
  {
    "name": "max_batch_size",
    "type": "integer",
    "description": "The maximum number of resolver request inputs that will be sent to a single LAMlong function in a <code>BatchInvoke</code> operation."
  },
  {
    "name": "pipeline_config",
    "type": "object",
    "description": "Functions linked with the pipeline resolver.",
    "children": [
      {
        "name": "functions",
        "type": "array",
        "description": "A list of <code>Function</code> objects."
      }
    ]
  },
  {
    "name": "request_mapping_template",
    "type": "string",
    "description": "<details><summary>The request mapping template.</summary>Request mapping templates are optional when using a Lambda data source. For all other data sources, a request mapping template is required.</details>"
  },
  {
    "name": "request_mapping_template_s3_location",
    "type": "string",
    "description": "The location of a request mapping template in an S3 bucket. Use this if you want to provision with a template file in S3 rather than embedding it in your CFNshort template."
  },
  {
    "name": "resolver_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "response_mapping_template",
    "type": "string",
    "description": "The response mapping template."
  },
  {
    "name": "response_mapping_template_s3_location",
    "type": "string",
    "description": "The location of a response mapping template in an S3 bucket. Use this if you want to provision with a template file in S3 rather than embedding it in your CFNshort template."
  },
  {
    "name": "runtime",
    "type": "object",
    "description": "Describes a runtime used by an APSYlong resolver or APSYlong function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.",
    "children": [
      {
        "name": "runtime_version",
        "type": "string",
        "description": "The <code>version</code> of the runtime to use. Currently, the only allowed version is <code>1.0.0</code>."
      },
      {
        "name": "name",
        "type": "string",
        "description": "The <code>name</code> of the runtime to use. Currently, the only allowed value is <code>APPSYNC_JS</code>."
      }
    ]
  },
  {
    "name": "sync_config",
    "type": "object",
    "description": "The <code>SyncConfig</code> for a resolver attached to a versioned data source.",
    "children": [
      {
        "name": "conflict_handler",
        "type": "string",
        "description": "<details><summary>The Conflict Resolution strategy to perform in the event of a conflict.</summary>+  <i>OPTIMISTIC_CONCURRENCY</i>: Resolve conflicts by rejecting mutations when versions don't match the latest version at the server.<br />+  <i>AUTOMERGE</i>: Resolve conflicts with the Automerge conflict resolution strategy.<br />+  <i>LAMBDA</i>: Resolve conflicts with an LAMlong function supplied in the <code>LambdaConflictHandlerConfig</code>.</details>"
      },
      {
        "name": "conflict_detection",
        "type": "string",
        "description": "<details><summary>The Conflict Detection strategy to use.</summary>+  <i>VERSION</i>: Detect conflicts based on object versions for this resolver.<br />+  <i>NONE</i>: Do not detect conflicts when invoking this resolver.</details>"
      },
      {
        "name": "lambda_conflict_handler_config",
        "type": "object",
        "description": "The <code>LambdaConflictHandlerConfig</code> when configuring <code>LAMBDA</code> as the Conflict Handler.",
        "children": [
          {
            "name": "lambda_conflict_handler_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) for the Lambda function to use as the Conflict Handler."
          }
        ]
      }
    ]
  },
  {
    "name": "type_name",
    "type": "string",
    "description": "The GraphQL type that invokes this resolver."
  },
  {
    "name": "metrics_config",
    "type": "string",
    "description": "Enables or disables enhanced resolver metrics for specified resolvers. Note that <code>MetricsConfig</code> won't be used unless the <code>resolverLevelMetricsBehavior</code> value is set to <code>PER_RESOLVER_METRICS</code>. If the <code>resolverLevelMetricsBehavior</code> is set to <code>FULL_REQUEST_RESOLVER_METRICS</code> instead, <code>MetricsConfig</code> will be ignored. However, you can still set its value."
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
    "name": "resolver_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html"><code>AWS::AppSync::Resolver</code></a>.

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
    <td><code>resolvers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="TypeName, ApiId, FieldName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>resolvers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>resolvers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>resolvers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>resolvers</code></td>
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

Gets all properties from an individual <code>resolver</code>.
```sql
SELECT
  region,
  api_id,
  caching_config,
  code,
  code_s3_location,
  data_source_name,
  field_name,
  kind,
  max_batch_size,
  pipeline_config,
  request_mapping_template,
  request_mapping_template_s3_location,
  resolver_arn,
  response_mapping_template,
  response_mapping_template_s3_location,
  runtime,
  sync_config,
  type_name,
  metrics_config
FROM awscc.appsync.resolvers
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ resolver_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>resolvers</code> in a region.
```sql
SELECT
  region,
  resolver_arn
FROM awscc.appsync.resolvers_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>resolver</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.appsync.resolvers (
  ApiId,
  FieldName,
  TypeName,
  region
)
SELECT
  '{{ api_id }}',
  '{{ field_name }}',
  '{{ type_name }}',
  '{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.appsync.resolvers (
  ApiId,
  CachingConfig,
  Code,
  CodeS3Location,
  DataSourceName,
  FieldName,
  Kind,
  MaxBatchSize,
  PipelineConfig,
  RequestMappingTemplate,
  RequestMappingTemplateS3Location,
  ResponseMappingTemplate,
  ResponseMappingTemplateS3Location,
  Runtime,
  SyncConfig,
  TypeName,
  MetricsConfig,
  region
)
SELECT
  '{{ api_id }}',
  '{{ caching_config }}',
  '{{ code }}',
  '{{ code_s3_location }}',
  '{{ data_source_name }}',
  '{{ field_name }}',
  '{{ kind }}',
  '{{ max_batch_size }}',
  '{{ pipeline_config }}',
  '{{ request_mapping_template }}',
  '{{ request_mapping_template_s3_location }}',
  '{{ response_mapping_template }}',
  '{{ response_mapping_template_s3_location }}',
  '{{ runtime }}',
  '{{ sync_config }}',
  '{{ type_name }}',
  '{{ metrics_config }}',
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
  - name: resolver
    props:
      - name: api_id
        value: '{{ api_id }}'
      - name: caching_config
        value:
          caching_keys:
            - '{{ caching_keys[0] }}'
          ttl: null
      - name: code
        value: '{{ code }}'
      - name: code_s3_location
        value: '{{ code_s3_location }}'
      - name: data_source_name
        value: '{{ data_source_name }}'
      - name: field_name
        value: '{{ field_name }}'
      - name: kind
        value: '{{ kind }}'
      - name: max_batch_size
        value: '{{ max_batch_size }}'
      - name: pipeline_config
        value:
          functions:
            - '{{ functions[0] }}'
      - name: request_mapping_template
        value: '{{ request_mapping_template }}'
      - name: request_mapping_template_s3_location
        value: '{{ request_mapping_template_s3_location }}'
      - name: response_mapping_template
        value: '{{ response_mapping_template }}'
      - name: response_mapping_template_s3_location
        value: '{{ response_mapping_template_s3_location }}'
      - name: runtime
        value:
          runtime_version: '{{ runtime_version }}'
          name: '{{ name }}'
      - name: sync_config
        value:
          conflict_handler: '{{ conflict_handler }}'
          conflict_detection: '{{ conflict_detection }}'
          lambda_conflict_handler_config:
            lambda_conflict_handler_arn: '{{ lambda_conflict_handler_arn }}'
      - name: type_name
        value: '{{ type_name }}'
      - name: metrics_config
        value: '{{ metrics_config }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>resolver</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.appsync.resolvers
SET PatchDocument = string('{{ {
    "CachingConfig": caching_config,
    "Code": code,
    "CodeS3Location": code_s3_location,
    "DataSourceName": data_source_name,
    "Kind": kind,
    "MaxBatchSize": max_batch_size,
    "PipelineConfig": pipeline_config,
    "RequestMappingTemplate": request_mapping_template,
    "RequestMappingTemplateS3Location": request_mapping_template_s3_location,
    "ResponseMappingTemplate": response_mapping_template,
    "ResponseMappingTemplateS3Location": response_mapping_template_s3_location,
    "Runtime": runtime,
    "SyncConfig": sync_config,
    "MetricsConfig": metrics_config
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ resolver_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.appsync.resolvers
WHERE
  Identifier = '{{ resolver_arn }}' AND
  region = '{{ region }}';
```

## Permissions

To operate on the <code>resolvers</code> resource, the following permissions are required:

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
s3:GetObject,
appsync:CreateResolver,
appsync:GetResolver
```

</TabItem>
<TabItem value="read">

```json
appsync:GetResolver
```

</TabItem>
<TabItem value="update">

```json
s3:GetObject,
appsync:UpdateResolver
```

</TabItem>
<TabItem value="delete">

```json
appsync:DeleteResolver
```

</TabItem>
<TabItem value="list">

```json
appsync:ListResolvers
```

</TabItem>
</Tabs>