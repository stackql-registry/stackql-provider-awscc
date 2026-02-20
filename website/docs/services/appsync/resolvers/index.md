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
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::AppSync::Resolver&#96;&#96; resource defines the logical GraphQL resolver that you attach to fields in a schema. Request and response templates for resolvers are written in Apache Velocity Template Language (VTL) format. For more information about resolvers, see &#91;Resolver Mapping Template Reference&#93;(https://docs.aws.amazon.com/appsync/latest/devguide/resolver-mapping-template-reference.html).<br />When you submit an update, CFNLong updates resources based on differences between what you submit and the stack's current template. To cause this resource to be updated you must change a property value for this resource in the CFNshort template. Changing the S3 file content without changing a property value will not result in an update operation.<br />See &#91;Update Behaviors of Stack Resources&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html) in the &#42;User Guide&#42;.</td></tr>
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
        "description": "The caching keys for a resolver that has caching activated.<br />Valid values are entries from the &#96;&#96;$context.arguments&#96;&#96;, &#96;&#96;$context.source&#96;&#96;, and &#96;&#96;$context.identity&#96;&#96; maps."
      },
      {
        "name": "ttl",
        "type": "number",
        "description": "The TTL in seconds for a resolver that has caching activated.<br />Valid values are 1–3,600 seconds."
      }
    ]
  },
  {
    "name": "code",
    "type": "string",
    "description": "The &#96;&#96;resolver&#96;&#96; code that contains the request and response functions. When code is used, the &#96;&#96;runtime&#96;&#96; is required. The runtime value must be &#96;&#96;APPSYNC&#95;JS&#96;&#96;."
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
    "description": "The resolver type.<br />+ &#42;UNIT&#42;: A UNIT resolver type. A UNIT resolver is the default resolver type. You can use a UNIT resolver to run a GraphQL query against a single data source.<br />+ &#42;PIPELINE&#42;: A PIPELINE resolver type. You can use a PIPELINE resolver to invoke a series of &#96;&#96;Function&#96;&#96; objects in a serial manner. You can use a pipeline resolver to run a GraphQL query against multiple data sources."
  },
  {
    "name": "max_batch_size",
    "type": "integer",
    "description": "The maximum number of resolver request inputs that will be sent to a single LAMlong function in a &#96;&#96;BatchInvoke&#96;&#96; operation."
  },
  {
    "name": "pipeline_config",
    "type": "object",
    "description": "Functions linked with the pipeline resolver.",
    "children": [
      {
        "name": "functions",
        "type": "array",
        "description": "A list of &#96;&#96;Function&#96;&#96; objects."
      }
    ]
  },
  {
    "name": "request_mapping_template",
    "type": "string",
    "description": "The request mapping template.<br />Request mapping templates are optional when using a Lambda data source. For all other data sources, a request mapping template is required."
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
        "description": "The &#96;&#96;version&#96;&#96; of the runtime to use. Currently, the only allowed version is &#96;&#96;1.0.0&#96;&#96;."
      },
      {
        "name": "name",
        "type": "string",
        "description": "The &#96;&#96;name&#96;&#96; of the runtime to use. Currently, the only allowed value is &#96;&#96;APPSYNC&#95;JS&#96;&#96;."
      }
    ]
  },
  {
    "name": "sync_config",
    "type": "object",
    "description": "The &#96;&#96;SyncConfig&#96;&#96; for a resolver attached to a versioned data source.",
    "children": [
      {
        "name": "conflict_handler",
        "type": "string",
        "description": "The Conflict Resolution strategy to perform in the event of a conflict.<br />+ &#42;OPTIMISTIC&#95;CONCURRENCY&#42;: Resolve conflicts by rejecting mutations when versions don't match the latest version at the server.<br />+ &#42;AUTOMERGE&#42;: Resolve conflicts with the Automerge conflict resolution strategy.<br />+ &#42;LAMBDA&#42;: Resolve conflicts with an LAMlong function supplied in the &#96;&#96;LambdaConflictHandlerConfig&#96;&#96;."
      },
      {
        "name": "conflict_detection",
        "type": "string",
        "description": "The Conflict Detection strategy to use.<br />+ &#42;VERSION&#42;: Detect conflicts based on object versions for this resolver.<br />+ &#42;NONE&#42;: Do not detect conflicts when invoking this resolver."
      },
      {
        "name": "lambda_conflict_handler_config",
        "type": "object",
        "description": "The &#96;&#96;LambdaConflictHandlerConfig&#96;&#96; when configuring &#96;&#96;LAMBDA&#96;&#96; as the Conflict Handler.",
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
    "description": "Enables or disables enhanced resolver metrics for specified resolvers. Note that &#96;&#96;MetricsConfig&#96;&#96; won't be used unless the &#96;&#96;resolverLevelMetricsBehavior&#96;&#96; value is set to &#96;&#96;PER&#95;RESOLVER&#95;METRICS&#96;&#96;. If the &#96;&#96;resolverLevelMetricsBehavior&#96;&#96; is set to &#96;&#96;FULL&#95;REQUEST&#95;RESOLVER&#95;METRICS&#96;&#96; instead, &#96;&#96;MetricsConfig&#96;&#96; will be ignored. However, you can still set its value."
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
WHERE region = 'us-east-1' AND Identifier = '<ResolverArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>resolvers</code> in a region.
```sql
SELECT
region,
resolver_arn
FROM awscc.appsync.resolvers_list_only
WHERE region = 'us-east-1';
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
'{{ ApiId }}',
 '{{ FieldName }}',
 '{{ TypeName }}',
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
 '{{ ApiId }}',
 '{{ CachingConfig }}',
 '{{ Code }}',
 '{{ CodeS3Location }}',
 '{{ DataSourceName }}',
 '{{ FieldName }}',
 '{{ Kind }}',
 '{{ MaxBatchSize }}',
 '{{ PipelineConfig }}',
 '{{ RequestMappingTemplate }}',
 '{{ RequestMappingTemplateS3Location }}',
 '{{ ResponseMappingTemplate }}',
 '{{ ResponseMappingTemplateS3Location }}',
 '{{ Runtime }}',
 '{{ SyncConfig }}',
 '{{ TypeName }}',
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
  - name: resolver
    props:
      - name: ApiId
        value: '{{ ApiId }}'
      - name: CachingConfig
        value:
          CachingKeys:
            - '{{ CachingKeys[0] }}'
          Ttl: null
      - name: Code
        value: '{{ Code }}'
      - name: CodeS3Location
        value: '{{ CodeS3Location }}'
      - name: DataSourceName
        value: '{{ DataSourceName }}'
      - name: FieldName
        value: '{{ FieldName }}'
      - name: Kind
        value: '{{ Kind }}'
      - name: MaxBatchSize
        value: '{{ MaxBatchSize }}'
      - name: PipelineConfig
        value:
          Functions:
            - '{{ Functions[0] }}'
      - name: RequestMappingTemplate
        value: '{{ RequestMappingTemplate }}'
      - name: RequestMappingTemplateS3Location
        value: '{{ RequestMappingTemplateS3Location }}'
      - name: ResponseMappingTemplate
        value: '{{ ResponseMappingTemplate }}'
      - name: ResponseMappingTemplateS3Location
        value: '{{ ResponseMappingTemplateS3Location }}'
      - name: Runtime
        value:
          RuntimeVersion: '{{ RuntimeVersion }}'
          Name: '{{ Name }}'
      - name: SyncConfig
        value:
          ConflictHandler: '{{ ConflictHandler }}'
          ConflictDetection: '{{ ConflictDetection }}'
          LambdaConflictHandlerConfig:
            LambdaConflictHandlerArn: '{{ LambdaConflictHandlerArn }}'
      - name: TypeName
        value: '{{ TypeName }}'
      - name: MetricsConfig
        value: '{{ MetricsConfig }}'

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
WHERE region = '{{ region }}'
AND Identifier = '<ResolverArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.appsync.resolvers
WHERE Identifier = '<ResolverArn>'
AND region = 'us-east-1';
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