---
title: prompts
hide_title: false
hide_table_of_contents: false
keywords:
  - prompts
  - connect
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

Creates, updates, deletes or gets a <code>prompt</code> resource or lists <code>prompts</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>prompts</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Connect::Prompt</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.connect.prompts" /></td></tr>
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
    "name": "instance_arn",
    "type": "string",
    "description": "The identifier of the Amazon Connect instance."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the prompt."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the prompt."
  },
  {
    "name": "s3_uri",
    "type": "string",
    "description": "S3 URI of the customer's audio file for creating prompts resource.."
  },
  {
    "name": "prompt_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the prompt."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters"
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. . You can specify a value that is maximum of 256 Unicode characters"
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
    "name": "prompt_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the prompt."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-prompt.html"><code>AWS::Connect::Prompt</code></a>.

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
    <td><code>prompts</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="InstanceArn, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>prompts</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>prompts</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>prompts_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>prompts</code></td>
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

Gets all properties from an individual <code>prompt</code>.
```sql
SELECT
region,
instance_arn,
name,
description,
s3_uri,
prompt_arn,
tags
FROM awscc.connect.prompts
WHERE region = 'us-east-1' AND Identifier = '{{ prompt_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>prompts</code> in a region.
```sql
SELECT
region,
prompt_arn
FROM awscc.connect.prompts_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>prompt</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.connect.prompts (
 InstanceArn,
 Name,
 region
)
SELECT
'{{ instance_arn }}',
 '{{ name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.connect.prompts (
 InstanceArn,
 Name,
 Description,
 S3Uri,
 Tags,
 region
)
SELECT
 '{{ instance_arn }}',
 '{{ name }}',
 '{{ description }}',
 '{{ s3_uri }}',
 '{{ tags }}',
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
  - name: prompt
    props:
      - name: instance_arn
        value: '{{ instance_arn }}'
      - name: name
        value: '{{ name }}'
      - name: description
        value: '{{ description }}'
      - name: s3_uri
        value: '{{ s3_uri }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>prompt</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.connect.prompts
SET PatchDocument = string('{{ {
    "InstanceArn": instance_arn,
    "Name": name,
    "Description": description,
    "S3Uri": s3_uri,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ prompt_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.connect.prompts
WHERE Identifier = '{{ prompt_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>prompts</code> resource, the following permissions are required:

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
connect:CreatePrompt,
connect:TagResource,
s3:GetObject,
kms:Decrypt,
s3:GetObjectAcl
```

</TabItem>
<TabItem value="read">

```json
connect:DescribePrompt
```

</TabItem>
<TabItem value="update">

```json
connect:UpdatePrompt,
connect:TagResource,
connect:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
connect:DeletePrompt
```

</TabItem>
<TabItem value="list">

```json
connect:ListPrompts
```

</TabItem>
</Tabs>