---
title: app_blocks
hide_title: false
hide_table_of_contents: false
keywords:
  - app_blocks
  - appstream
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

Creates, updates, deletes or gets an <code>app_block</code> resource or lists <code>app_blocks</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>app_blocks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::AppStream::AppBlock</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.appstream.app_blocks" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "display_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "source_s3_location",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "s3_bucket",
        "type": "string",
        "description": ""
      },
      {
        "name": "s3_key",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "setup_script_details",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "executable_path",
        "type": "string",
        "description": ""
      },
      {
        "name": "executable_parameters",
        "type": "string",
        "description": ""
      },
      {
        "name": "timeout_in_seconds",
        "type": "integer",
        "description": ""
      }
    ]
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
    "name": "created_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "packaging_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblock.html"><code>AWS::AppStream::AppBlock</code></a>.

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
    <td><CopyableCode code="Name, SourceS3Location, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>app_block</code>.
```sql
SELECT
  region,
  name,
  arn,
  description,
  display_name,
  source_s3_location,
  setup_script_details,
  tags,
  created_time,
  packaging_type,
  post_setup_script_details
FROM awscc.appstream.app_blocks
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ arn }}';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>app_block</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.appstream.app_blocks (
  Name,
  SourceS3Location,
  region
)
SELECT
  '{{ name }}',
  '{{ source_s3_location }}',
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
INSERT INTO awscc.appstream.app_blocks (
  Name,
  Description,
  DisplayName,
  SourceS3Location,
  SetupScriptDetails,
  Tags,
  PackagingType,
  PostSetupScriptDetails,
  region
)
SELECT
  '{{ name }}',
  '{{ description }}',
  '{{ display_name }}',
  '{{ source_s3_location }}',
  '{{ setup_script_details }}',
  '{{ tags }}',
  '{{ packaging_type }}',
  '{{ post_setup_script_details }}',
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
  - name: app_block
    props:
      - name: name
        value: '{{ name }}'
      - name: description
        value: '{{ description }}'
      - name: display_name
        value: '{{ display_name }}'
      - name: source_s3_location
        value:
          s3_bucket: '{{ s3_bucket }}'
          s3_key: '{{ s3_key }}'
      - name: setup_script_details
        value:
          script_s3_location: null
          executable_path: '{{ executable_path }}'
          executable_parameters: '{{ executable_parameters }}'
          timeout_in_seconds: '{{ timeout_in_seconds }}'
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
      - name: packaging_type
        value: '{{ packaging_type }}'
      - name: post_setup_script_details
        value: null`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>app_block</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.appstream.app_blocks
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ arn }}'
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
DELETE FROM awscc.appstream.app_blocks
WHERE
  Identifier = '{{ arn }}' AND
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

To operate on the <code>app_blocks</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

```json
appstream:CreateAppBlock,
appstream:TagResource,
s3:GetObject,
s3:ListBucket,
s3:GetBucketOwnershipControls
```

</TabItem>
<TabItem value="read">

```json
appstream:DescribeAppBlocks,
appstream:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
appstream:DeleteAppBlock,
appstream:DescribeAppBlocks
```

</TabItem>
<TabItem value="update">

```json
appstream:DescribeAppBlocks,
appstream:TagResource,
appstream:UntagResource
```

</TabItem>
</Tabs>