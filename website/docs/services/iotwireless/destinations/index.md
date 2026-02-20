---
title: destinations
hide_title: false
hide_table_of_contents: false
keywords:
  - destinations
  - iotwireless
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

Creates, updates, deletes or gets a <code>destination</code> resource or lists <code>destinations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>destinations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Destination's resource schema demonstrating some basic constructs and validation rules.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotwireless.destinations" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": "Unique name of destination"
  },
  {
    "name": "expression",
    "type": "string",
    "description": "Destination expression"
  },
  {
    "name": "expression_type",
    "type": "string",
    "description": "Must be RuleName"
  },
  {
    "name": "description",
    "type": "string",
    "description": "Destination description"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of key-value pairs that contain metadata for the destination.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "AWS role ARN that grants access"
  },
  {
    "name": "arn",
    "type": "string",
    "description": "Destination arn. Returned after successful create."
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
    "name": "name",
    "type": "string",
    "description": "Unique name of destination"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-destination.html"><code>AWS::IoTWireless::Destination</code></a>.

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
    <td><code>destinations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, Expression, ExpressionType, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>destinations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>destinations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>destinations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>destinations</code></td>
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

Gets all properties from an individual <code>destination</code>.
```sql
SELECT
region,
name,
expression,
expression_type,
description,
tags,
role_arn,
arn
FROM awscc.iotwireless.destinations
WHERE region = 'us-east-1' AND Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>destinations</code> in a region.
```sql
SELECT
region,
name
FROM awscc.iotwireless.destinations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>destination</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iotwireless.destinations (
 Name,
 Expression,
 ExpressionType,
 region
)
SELECT 
'{{ Name }}',
 '{{ Expression }}',
 '{{ ExpressionType }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iotwireless.destinations (
 Name,
 Expression,
 ExpressionType,
 Description,
 Tags,
 RoleArn,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Expression }}',
 '{{ ExpressionType }}',
 '{{ Description }}',
 '{{ Tags }}',
 '{{ RoleArn }}',
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
  - name: destination
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Expression
        value: '{{ Expression }}'
      - name: ExpressionType
        value: '{{ ExpressionType }}'
      - name: Description
        value: '{{ Description }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: RoleArn
        value: '{{ RoleArn }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.iotwireless.destinations
SET PatchDocument = string('{{ {
    "Expression": expression,
    "ExpressionType": expression_type,
    "Description": description,
    "Tags": tags,
    "RoleArn": role_arn
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotwireless.destinations
WHERE Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>destinations</code> resource, the following permissions are required:

### Create
```json
iam:PassRole,
iotwireless:CreateDestination,
iotwireless:TagResource
```

### Read
```json
iotwireless:GetDestination,
iotwireless:ListTagsForResource
```

### Update
```json
iam:PassRole,
iotwireless:GetDestination,
iotwireless:UpdateDestination,
iotwireless:UntagResource,
iotwireless:TagResource
```

### Delete
```json
iotwireless:DeleteDestination
```

### List
```json
iotwireless:ListDestinations,
iotwireless:ListTagsForResource
```
