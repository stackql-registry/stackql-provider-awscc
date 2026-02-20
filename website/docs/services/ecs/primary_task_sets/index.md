---
title: primary_task_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - primary_task_sets
  - ecs
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

Creates, updates, deletes or gets a <code>primary_task_set</code> resource or lists <code>primary_task_sets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>primary_task_sets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A pseudo-resource that manages which of your ECS task sets is primary.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ecs.primary_task_sets" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "task_set_id",
    "type": "string",
    "description": "The ID or full Amazon Resource Name (ARN) of the task set."
  },
  {
    "name": "cluster",
    "type": "string",
    "description": "The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the task set in."
  },
  {
    "name": "service",
    "type": "string",
    "description": "The short name or full Amazon Resource Name (ARN) of the service to create the task set in."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-primarytaskset.html"><code>AWS::ECS::PrimaryTaskSet</code></a>.

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
    <td><CopyableCode code="Cluster, Service, TaskSetId, region" /></td>
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

Gets all properties from an individual <code>primary_task_set</code>.
```sql
SELECT
region,
task_set_id,
cluster,
service
FROM awscc.ecs.primary_task_sets
WHERE region = 'us-east-1' AND Identifier = '<Cluster>|<Service>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>primary_task_set</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ecs.primary_task_sets (
 TaskSetId,
 Cluster,
 Service,
 region
)
SELECT 
'{{ TaskSetId }}',
 '{{ Cluster }}',
 '{{ Service }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ecs.primary_task_sets (
 TaskSetId,
 Cluster,
 Service,
 region
)
SELECT 
 '{{ TaskSetId }}',
 '{{ Cluster }}',
 '{{ Service }}',
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
  - name: primary_task_set
    props:
      - name: TaskSetId
        value: '{{ TaskSetId }}'
      - name: Cluster
        value: '{{ Cluster }}'
      - name: Service
        value: '{{ Service }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.ecs.primary_task_sets
SET PatchDocument = string('{{ {
    "TaskSetId": task_set_id
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Cluster>|<Service>';
```


## Permissions

To operate on the <code>primary_task_sets</code> resource, the following permissions are required:

### Create
```json
ecs:DescribeTaskSets,
ecs:UpdateServicePrimaryTaskSet
```

### Update
```json
ecs:DescribeTaskSets,
ecs:UpdateServicePrimaryTaskSet
```
