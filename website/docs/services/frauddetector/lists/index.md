---
title: lists
hide_title: false
hide_table_of_contents: false
keywords:
  - lists
  - frauddetector
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

Creates, updates, deletes or gets a <code>list</code> resource or lists <code>lists</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>lists</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A resource schema for a List in Amazon Fraud Detector.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.frauddetector.lists" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": "The list ARN."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the list."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the list."
  },
  {
    "name": "variable_type",
    "type": "string",
    "description": "The variable type of the list."
  },
  {
    "name": "created_time",
    "type": "string",
    "description": "The time when the list was created."
  },
  {
    "name": "last_updated_time",
    "type": "string",
    "description": "The time when the list was last updated."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags associated with this list.",
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
    "name": "elements",
    "type": "array",
    "description": "The elements in this list."
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
    "description": "The list ARN."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-list.html"><code>AWS::FraudDetector::List</code></a>.

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
    <td><code>lists</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>lists</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>lists</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>lists_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>lists</code></td>
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

Gets all properties from an individual <code>list</code>.
```sql
SELECT
region,
arn,
name,
description,
variable_type,
created_time,
last_updated_time,
tags,
elements
FROM awscc.frauddetector.lists
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>lists</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.frauddetector.lists_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>list</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.frauddetector.lists (
 Name,
 region
)
SELECT 
'{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.frauddetector.lists (
 Name,
 Description,
 VariableType,
 Tags,
 Elements,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Description }}',
 '{{ VariableType }}',
 '{{ Tags }}',
 '{{ Elements }}',
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
  - name: list
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: VariableType
        value: '{{ VariableType }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: Elements
        value:
          - '{{ Elements[0] }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.frauddetector.lists
SET data__PatchDocument = string('{{ {
    "Description": description,
    "VariableType": variable_type,
    "Tags": tags,
    "Elements": elements
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.frauddetector.lists
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>lists</code> resource, the following permissions are required:

### Create
```json
frauddetector:CreateList,
frauddetector:GetListElements,
frauddetector:GetListsMetadata,
frauddetector:ListTagsForResource,
frauddetector:TagResource,
frauddetector:UpdateList
```

### Read
```json
frauddetector:GetListElements,
frauddetector:GetListsMetadata,
frauddetector:ListTagsForResource
```

### Update
```json
frauddetector:GetListElements,
frauddetector:GetListsMetadata,
frauddetector:ListTagsForResource,
frauddetector:UntagResource,
frauddetector:UpdateList,
frauddetector:TagResource
```

### Delete
```json
frauddetector:DeleteList,
frauddetector:GetListsMetadata
```

### List
```json
frauddetector:GetListElements,
frauddetector:GetListsMetadata,
frauddetector:ListTagsForResource
```
