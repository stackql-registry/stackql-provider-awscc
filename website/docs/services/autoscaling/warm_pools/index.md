---
title: warm_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - warm_pools
  - autoscaling
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

Creates, updates, deletes or gets a <code>warm_pool</code> resource or lists <code>warm_pools</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>warm_pools</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::AutoScaling::WarmPool.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.autoscaling.warm_pools" /></td></tr>
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
    "name": "auto_scaling_group_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "max_group_prepared_capacity",
    "type": "integer",
    "description": ""
  },
  {
    "name": "min_size",
    "type": "integer",
    "description": ""
  },
  {
    "name": "pool_state",
    "type": "string",
    "description": ""
  },
  {
    "name": "instance_reuse_policy",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "reuse_on_scale_in",
        "type": "boolean",
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
    "name": "auto_scaling_group_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-warmpool.html"><code>AWS::AutoScaling::WarmPool</code></a>.

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
    <td><code>warm_pools</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AutoScalingGroupName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>warm_pools</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>warm_pools</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>warm_pools_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>warm_pools</code></td>
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

Gets all properties from an individual <code>warm_pool</code>.
```sql
SELECT
region,
auto_scaling_group_name,
max_group_prepared_capacity,
min_size,
pool_state,
instance_reuse_policy
FROM awscc.autoscaling.warm_pools
WHERE region = 'us-east-1' AND data__Identifier = '<AutoScalingGroupName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>warm_pools</code> in a region.
```sql
SELECT
region,
auto_scaling_group_name
FROM awscc.autoscaling.warm_pools_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>warm_pool</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.autoscaling.warm_pools (
 AutoScalingGroupName,
 region
)
SELECT 
'{{ AutoScalingGroupName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.autoscaling.warm_pools (
 AutoScalingGroupName,
 MaxGroupPreparedCapacity,
 MinSize,
 PoolState,
 InstanceReusePolicy,
 region
)
SELECT 
 '{{ AutoScalingGroupName }}',
 '{{ MaxGroupPreparedCapacity }}',
 '{{ MinSize }}',
 '{{ PoolState }}',
 '{{ InstanceReusePolicy }}',
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
  - name: warm_pool
    props:
      - name: AutoScalingGroupName
        value: '{{ AutoScalingGroupName }}'
      - name: MaxGroupPreparedCapacity
        value: '{{ MaxGroupPreparedCapacity }}'
      - name: MinSize
        value: '{{ MinSize }}'
      - name: PoolState
        value: '{{ PoolState }}'
      - name: InstanceReusePolicy
        value:
          ReuseOnScaleIn: '{{ ReuseOnScaleIn }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.autoscaling.warm_pools
SET data__PatchDocument = string('{{ {
    "MaxGroupPreparedCapacity": max_group_prepared_capacity,
    "MinSize": min_size,
    "PoolState": pool_state,
    "InstanceReusePolicy": instance_reuse_policy
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<AutoScalingGroupName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.autoscaling.warm_pools
WHERE data__Identifier = '<AutoScalingGroupName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>warm_pools</code> resource, the following permissions are required:

### Create
```json
autoscaling:PutWarmPool,
autoscaling:DescribeWarmPool,
autoscaling:DescribeAutoScalingGroups
```

### Delete
```json
autoscaling:DeleteWarmPool,
autoscaling:DescribeWarmPool
```

### Read
```json
autoscaling:DescribeWarmPool
```

### Update
```json
autoscaling:PutWarmPool,
autoscaling:DescribeWarmPool,
autoscaling:DescribeAutoScalingGroups
```

### List
```json
autoscaling:DescribeWarmPool
```
