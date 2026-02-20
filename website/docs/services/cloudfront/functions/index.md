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
<tr><td><b>Description</b></td><td>Creates a CF function.<br />To create a function, you provide the function code and some configuration information about the function. The response contains an Amazon Resource Name (ARN) that uniquely identifies the function, and the function’s stage.<br />By default, when you create a function, it’s in the &#96;&#96;DEVELOPMENT&#96;&#96; stage. In this stage, you can &#91;test the function&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/test-function.html) in the CF console (or with &#96;&#96;TestFunction&#96;&#96; in the CF API).<br />When you’re ready to use your function with a CF distribution, publish the function to the &#96;&#96;LIVE&#96;&#96; stage. You can do this in the CF console, with &#96;&#96;PublishFunction&#96;&#96; in the CF API, or by updating the &#96;&#96;AWS::CloudFront::Function&#96;&#96; resource with the &#96;&#96;AutoPublish&#96;&#96; property set to &#96;&#96;true&#96;&#96;. When the function is published to the &#96;&#96;LIVE&#96;&#96; stage, you can attach it to a distribution’s cache behavior, using the function’s ARN.<br />To automatically publish the function to the &#96;&#96;LIVE&#96;&#96; stage when it’s created, set the &#96;&#96;AutoPublish&#96;&#96; property to &#96;&#96;true&#96;&#96;.</td></tr>
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
    "description": "A flag that determines whether to automatically publish the function to the &#96;&#96;LIVE&#96;&#96; stage when it’s created. To automatically publish to the &#96;&#96;LIVE&#96;&#96; stage, set this property to &#96;&#96;true&#96;&#96;."
  },
  {
    "name": "function_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "function_code",
    "type": "string",
    "description": "The function code. For more information about writing a CloudFront function, see &#91;Writing function code for CloudFront Functions&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/writing-function-code.html) in the &#42;Amazon CloudFront Developer Guide&#42;."
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
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>functions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
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
WHERE data__Identifier = '<FunctionARN>';
```
</TabItem>
<TabItem value="list">

Lists all <code>functions</code> in a region.
```sql
SELECT
region,
function_arn
FROM awscc.cloudfront.functions_list_only
;
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
'{{ FunctionCode }}',
 '{{ FunctionConfig }}',
 '{{ Name }}',
'{{ region }}';
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
 '{{ AutoPublish }}',
 '{{ FunctionCode }}',
 '{{ FunctionConfig }}',
 '{{ FunctionMetadata }}',
 '{{ Name }}',
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
  - name: function
    props:
      - name: AutoPublish
        value: '{{ AutoPublish }}'
      - name: FunctionCode
        value: '{{ FunctionCode }}'
      - name: FunctionConfig
        value:
          Comment: '{{ Comment }}'
          Runtime: '{{ Runtime }}'
          KeyValueStoreAssociations:
            - KeyValueStoreARN: '{{ KeyValueStoreARN }}'
      - name: FunctionMetadata
        value:
          FunctionARN: '{{ FunctionARN }}'
      - name: Name
        value: '{{ Name }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.cloudfront.functions
SET data__PatchDocument = string('{{ {
    "AutoPublish": auto_publish,
    "FunctionCode": function_code,
    "FunctionConfig": function_config
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<FunctionARN>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudfront.functions
WHERE data__Identifier = '<FunctionARN>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>functions</code> resource, the following permissions are required:

### Create
```json
cloudfront:CreateFunction,
cloudfront:PublishFunction,
cloudfront:DescribeFunction
```

### Delete
```json
cloudfront:DeleteFunction,
cloudfront:DescribeFunction
```

### List
```json
cloudfront:ListFunctions
```

### Read
```json
cloudfront:DescribeFunction,
cloudfront:GetFunction
```

### Update
```json
cloudfront:UpdateFunction,
cloudfront:PublishFunction,
cloudfront:DescribeFunction
```
