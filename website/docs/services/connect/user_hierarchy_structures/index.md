---
title: user_hierarchy_structures
hide_title: false
hide_table_of_contents: false
keywords:
  - user_hierarchy_structures
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

Creates, updates, deletes or gets an <code>user_hierarchy_structure</code> resource or lists <code>user_hierarchy_structures</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>user_hierarchy_structures</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Connect::UserHierarchyStructure</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.connect.user_hierarchy_structures" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "instance_arn",
    "type": "string",
    "description": "The identifier of the Amazon Connect instance."
  },
  {
    "name": "user_hierarchy_structure_arn",
    "type": "string",
    "description": "The identifier of the User Hierarchy Structure."
  },
  {
    "name": "user_hierarchy_structure",
    "type": "object",
    "description": "Information about the hierarchy structure.",
    "children": [
      {
        "name": "level_one",
        "type": "object",
        "description": "Information about level one.",
        "children": [
          {
            "name": "hierarchy_level_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the hierarchy level."
          },
          {
            "name": "hierarchy_level_id",
            "type": "string",
            "description": "The identifier of the hierarchy level."
          },
          {
            "name": "name",
            "type": "string",
            "description": "The name of the hierarchy level."
          }
        ]
      },
      {
        "name": "level_two",
        "type": "object",
        "description": "Information about level two.",
        "children": [
          {
            "name": "hierarchy_level_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the hierarchy level."
          },
          {
            "name": "hierarchy_level_id",
            "type": "string",
            "description": "The identifier of the hierarchy level."
          },
          {
            "name": "name",
            "type": "string",
            "description": "The name of the hierarchy level."
          }
        ]
      },
      {
        "name": "level_three",
        "type": "object",
        "description": "Information about level three.",
        "children": [
          {
            "name": "hierarchy_level_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the hierarchy level."
          },
          {
            "name": "hierarchy_level_id",
            "type": "string",
            "description": "The identifier of the hierarchy level."
          },
          {
            "name": "name",
            "type": "string",
            "description": "The name of the hierarchy level."
          }
        ]
      },
      {
        "name": "level_four",
        "type": "object",
        "description": "Information about level four.",
        "children": [
          {
            "name": "hierarchy_level_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the hierarchy level."
          },
          {
            "name": "hierarchy_level_id",
            "type": "string",
            "description": "The identifier of the hierarchy level."
          },
          {
            "name": "name",
            "type": "string",
            "description": "The name of the hierarchy level."
          }
        ]
      },
      {
        "name": "level_five",
        "type": "object",
        "description": "Information about level five.",
        "children": [
          {
            "name": "hierarchy_level_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the hierarchy level."
          },
          {
            "name": "hierarchy_level_id",
            "type": "string",
            "description": "The identifier of the hierarchy level."
          },
          {
            "name": "name",
            "type": "string",
            "description": "The name of the hierarchy level."
          }
        ]
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html"><code>AWS::Connect::UserHierarchyStructure</code></a>.

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
    <td><CopyableCode code="InstanceArn, region" /></td>
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

Gets all properties from an individual <code>user_hierarchy_structure</code>.
```sql
SELECT
region,
instance_arn,
user_hierarchy_structure_arn,
user_hierarchy_structure
FROM awscc.connect.user_hierarchy_structures
WHERE region = 'us-east-1' AND Identifier = '{{ user_hierarchy_structure_arn }}';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>user_hierarchy_structure</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.connect.user_hierarchy_structures (
 InstanceArn,
 region
)
SELECT
'{{ instance_arn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.connect.user_hierarchy_structures (
 InstanceArn,
 UserHierarchyStructure,
 region
)
SELECT
 '{{ instance_arn }}',
 '{{ user_hierarchy_structure }}',
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
  - name: user_hierarchy_structure
    props:
      - name: instance_arn
        value: '{{ instance_arn }}'
      - name: user_hierarchy_structure
        value:
          level_one:
            hierarchy_level_arn: '{{ hierarchy_level_arn }}'
            hierarchy_level_id: '{{ hierarchy_level_id }}'
            name: '{{ name }}'
          level_two:
            hierarchy_level_arn: null
            hierarchy_level_id: null
            name: null
          level_three:
            hierarchy_level_arn: null
            hierarchy_level_id: null
            name: null
          level_four:
            hierarchy_level_arn: null
            hierarchy_level_id: null
            name: null
          level_five:
            hierarchy_level_arn: null
            hierarchy_level_id: null
            name: null
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>user_hierarchy_structure</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.connect.user_hierarchy_structures
SET PatchDocument = string('{{ {
    "UserHierarchyStructure": user_hierarchy_structure
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ user_hierarchy_structure_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.connect.user_hierarchy_structures
WHERE Identifier = '{{ user_hierarchy_structure_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>user_hierarchy_structures</code> resource, the following permissions are required:

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
connect:UpdateUserHierarchyStructure
```

</TabItem>
<TabItem value="read">

```json
connect:DescribeUserHierarchyStructure
```

</TabItem>
<TabItem value="delete">

```json
connect:UpdateUserHierarchyStructure
```

</TabItem>
<TabItem value="update">

```json
connect:UpdateUserHierarchyStructure
```

</TabItem>
</Tabs>