---
title: execution_plans
hide_title: false
hide_table_of_contents: false
keywords:
  - execution_plans
  - kendraranking
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

Creates, updates, deletes or gets an <code>execution_plan</code> resource or lists <code>execution_plans</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>execution_plans</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A KendraRanking Rescore execution plan</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.kendraranking.execution_plans" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": "Unique ID of rescore execution plan"
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description for the execution plan"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags for labeling the execution plan",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "A string used to identify this tag"
      },
      {
        "name": "value",
        "type": "string",
        "description": "A string containing the value for the tag"
      }
    ]
  },
  {
    "name": "name",
    "type": "string",
    "description": "Name of kendra ranking rescore execution plan"
  },
  {
    "name": "capacity_units",
    "type": "object",
    "description": "Capacity units",
    "children": [
      {
        "name": "rescore_capacity_units",
        "type": "integer",
        "description": ""
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
    "name": "id",
    "type": "string",
    "description": "Unique ID of rescore execution plan"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendraranking-executionplan.html"><code>AWS::KendraRanking::ExecutionPlan</code></a>.

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
    <td><code>execution_plans</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>execution_plans</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>execution_plans</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>execution_plans_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>execution_plans</code></td>
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

Gets all properties from an individual <code>execution_plan</code>.
```sql
SELECT
region,
id,
arn,
description,
tags,
name,
capacity_units
FROM awscc.kendraranking.execution_plans
WHERE region = 'us-east-1' AND Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>execution_plans</code> in a region.
```sql
SELECT
region,
id
FROM awscc.kendraranking.execution_plans_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>execution_plan</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.kendraranking.execution_plans (
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
INSERT INTO awscc.kendraranking.execution_plans (
 Description,
 Tags,
 Name,
 CapacityUnits,
 region
)
SELECT 
 '{{ Description }}',
 '{{ Tags }}',
 '{{ Name }}',
 '{{ CapacityUnits }}',
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
  - name: execution_plan
    props:
      - name: Description
        value: '{{ Description }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: Name
        value: '{{ Name }}'
      - name: CapacityUnits
        value:
          RescoreCapacityUnits: '{{ RescoreCapacityUnits }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.kendraranking.execution_plans
SET PatchDocument = string('{{ {
    "Description": description,
    "Tags": tags,
    "Name": name,
    "CapacityUnits": capacity_units
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.kendraranking.execution_plans
WHERE Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>execution_plans</code> resource, the following permissions are required:

### Create
```json
kendra-ranking:CreateRescoreExecutionPlan,
kendra-ranking:DescribeRescoreExecutionPlan,
kendra-ranking:UpdateRescoreExecutionPlan,
kendra-ranking:ListTagsForResource,
kendra-ranking:TagResource
```

### Read
```json
kendra-ranking:DescribeRescoreExecutionPlan,
kendra-ranking:ListTagsForResource
```

### Update
```json
kendra-ranking:DescribeRescoreExecutionPlan,
kendra-ranking:UpdateRescoreExecutionPlan,
kendra-ranking:ListTagsForResource,
kendra-ranking:TagResource,
kendra-ranking:UntagResource
```

### Delete
```json
kendra-ranking:DescribeRescoreExecutionPlan,
kendra-ranking:DeleteRescoreExecutionPlan
```

### List
```json
kendra-ranking:ListRescoreExecutionPlans
```
