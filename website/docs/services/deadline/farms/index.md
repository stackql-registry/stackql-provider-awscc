---
title: farms
hide_title: false
hide_table_of_contents: false
keywords:
  - farms
  - deadline
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

Creates, updates, deletes or gets a <code>farm</code> resource or lists <code>farms</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>farms</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Deadline::Farm Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.deadline.farms" /></td></tr>
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
    "name": "farm_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "kms_key_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
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
    "name": "arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-farm.html"><code>AWS::Deadline::Farm</code></a>.

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
    <td><code>farms</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DisplayName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>farms</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>farms</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>farms_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>farms</code></td>
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

Gets all properties from an individual <code>farm</code>.
```sql
SELECT
region,
description,
display_name,
farm_id,
kms_key_arn,
arn,
tags
FROM awscc.deadline.farms
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>farms</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.deadline.farms_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>farm</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.deadline.farms (
 DisplayName,
 region
)
SELECT 
'{{ DisplayName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.deadline.farms (
 Description,
 DisplayName,
 KmsKeyArn,
 Tags,
 region
)
SELECT 
 '{{ Description }}',
 '{{ DisplayName }}',
 '{{ KmsKeyArn }}',
 '{{ Tags }}',
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
  - name: farm
    props:
      - name: Description
        value: '{{ Description }}'
      - name: DisplayName
        value: '{{ DisplayName }}'
      - name: KmsKeyArn
        value: '{{ KmsKeyArn }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.deadline.farms
SET data__PatchDocument = string('{{ {
    "Description": description,
    "DisplayName": display_name,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.deadline.farms
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>farms</code> resource, the following permissions are required:

### Create
```json
deadline:CreateFarm,
deadline:GetFarm,
deadline:TagResource,
deadline:ListTagsForResource,
identitystore:ListGroupMembershipsForMember,
kms:Encrypt,
kms:Decrypt,
kms:CreateGrant,
kms:GenerateDataKey
```

### Read
```json
deadline:GetFarm,
deadline:ListTagsForResource,
identitystore:ListGroupMembershipsForMember,
kms:Encrypt,
kms:Decrypt,
kms:CreateGrant,
kms:GenerateDataKey
```

### Update
```json
deadline:UpdateFarm,
deadline:GetFarm,
deadline:TagResource,
deadline:UntagResource,
deadline:ListTagsForResource,
identitystore:ListGroupMembershipsForMember,
kms:Encrypt,
kms:Decrypt,
kms:CreateGrant,
kms:GenerateDataKey
```

### Delete
```json
deadline:DeleteFarm,
deadline:GetFarm,
identitystore:ListGroupMembershipsForMember,
kms:Encrypt,
kms:Decrypt,
kms:CreateGrant,
kms:GenerateDataKey
```

### List
```json
deadline:ListFarms,
identitystore:ListGroupMembershipsForMember
```
