---
title: functions
hide_title: false
hide_table_of_contents: false
keywords:
  - functions
  - cloudfront
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

Creates, updates, deletes or gets a <code>function</code> resource or lists <code>functions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>functions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td><details><summary>Creates a CF function.</summary>To create a function, you provide the function code and some configuration information about the function. The response contains an Amazon Resource Name (ARN) that uniquely identifies the function, and the function’s stage.<br />By default, when you create a function, it’s in the <code>DEVELOPMENT</code> stage. In this stage, you can <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/test-function.html">test the function</a> in the CF console (or with <code>TestFunction</code> in the CF API).<br />When you’re ready to use your function with a CF distribution, publish the function to the <code>LIVE</code> stage. You can do this in the CF console, with <code>PublishFunction</code> in the CF API, or by updating the <code>AWS::CloudFront::Function</code> resource with the <code>AutoPublish</code> property set to <code>true</code>. When the function is published to the <code>LIVE</code> stage, you can attach it to a distribution’s cache behavior, using the function’s ARN.<br />To automatically publish the function to the <code>LIVE</code> stage when it’s created, set the <code>AutoPublish</code> property to <code>true</code>.</details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudfront.functions" /></td></tr>
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
    "name": "auto_publish",
    "type": "boolean",
    "description": "A flag that determines whether to automatically publish the function to the <code>LIVE</code> stage when it’s created. To automatically publish to the <code>LIVE</code> stage, set this property to <code>true</code>."
  },
  {
    "name": "function_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "function_code",
    "type": "string",
    "description": "The function code. For more information about writing a CloudFront function, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/writing-function-code.html\">Writing function code for CloudFront Functions</a> in the <i>Amazon CloudFront Developer Guide</i>."
  },
  {
    "name": "function_config",
    "type": "object",
    "description": "Contains configuration information about a CloudFront function.",
    "children": [
      {
        "name": "comment",
        "type": "string",
        "description": "A comment to describe the function."
      },
      {
        "name": "runtime",
        "type": "string",
        "description": "The function's runtime environment version."
      },
      {
        "name": "key_value_store_associations",
        "type": "array",
        "description": "The configuration for the key value store associations.",
        "children": [
          {
            "name": "key_value_store_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the key value store association."
          }
        ]
      }
    ]
  },
  {
    "name": "function_metadata",
    "type": "object",
    "description": "Contains metadata about a CloudFront function.",
    "children": [
      {
        "name": "function_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the function. The ARN uniquely identifies the function."
      }
    ]
  },
  {
    "name": "name",
    "type": "string",
    "description": "A name to identify the function."
  },
  {
    "name": "stage",
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
    "name": "function_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-function.html"><code>AWS::CloudFront::Function</code></a>.

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
    <td><code>functions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, FunctionConfig, FunctionCode, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>functions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>functions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>functions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>functions</code></td>
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

Gets all properties from an individual <code>function</code>.
```sql
SELECT
  region,
  auto_publish,
  function_arn,
  function_code,
  function_config,
  function_metadata,
  name,
  stage
FROM awscc.cloudfront.functions
WHERE
  region = 'us-east-1' AND
  Identifier = '{{ function_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>functions</code> in a region.
```sql
SELECT
  region,
  function_arn
FROM awscc.cloudfront.functions_list_only
WHERE
  region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>function</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cloudfront.functions (
  FunctionCode,
  FunctionConfig,
  Name,
  region
)
SELECT
  '{{ function_code }}',
  '{{ function_config }}',
  '{{ name }}',
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
INSERT INTO awscc.cloudfront.functions (
  AutoPublish,
  FunctionCode,
  FunctionConfig,
  FunctionMetadata,
  Name,
  region
)
SELECT
  '{{ auto_publish }}',
  '{{ function_code }}',
  '{{ function_config }}',
  '{{ function_metadata }}',
  '{{ name }}',
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
  - name: function
    props:
      - name: auto_publish
        value: '{{ auto_publish }}'
      - name: function_code
        value: '{{ function_code }}'
      - name: function_config
        value:
          comment: '{{ comment }}'
          runtime: '{{ runtime }}'
          key_value_store_associations:
            - key_value_store_arn: '{{ key_value_store_arn }}'
      - name: function_metadata
        value:
          function_arn: '{{ function_arn }}'
      - name: name
        value: '{{ name }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>function</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cloudfront.functions
SET PatchDocument = string('{{ {
    "AutoPublish": auto_publish,
    "FunctionCode": function_code,
    "FunctionConfig": function_config
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ function_arn }}'
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
DELETE FROM awscc.cloudfront.functions
WHERE
  Identifier = '{{ function_arn }}' AND
  region = 'us-east-1'
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

To operate on the <code>functions</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

```json
cloudfront:CreateFunction,
cloudfront:PublishFunction,
cloudfront:DescribeFunction
```

</TabItem>
<TabItem value="delete">

```json
cloudfront:DeleteFunction,
cloudfront:DescribeFunction
```

</TabItem>
<TabItem value="list">

```json
cloudfront:ListFunctions
```

</TabItem>
<TabItem value="read">

```json
cloudfront:DescribeFunction,
cloudfront:GetFunction
```

</TabItem>
<TabItem value="update">

```json
cloudfront:UpdateFunction,
cloudfront:PublishFunction,
cloudfront:DescribeFunction
```

</TabItem>
</Tabs>