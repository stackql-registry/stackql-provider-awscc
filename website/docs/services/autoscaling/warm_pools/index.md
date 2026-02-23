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
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>warm_pools</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
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
WHERE region = 'us-east-1' AND Identifier = '{{ auto_scaling_group_name }}';
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
'{{ auto_scaling_group_name }}',
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
 '{{ auto_scaling_group_name }}',
 '{{ max_group_prepared_capacity }}',
 '{{ min_size }}',
 '{{ pool_state }}',
 '{{ instance_reuse_policy }}',
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
      - name: auto_scaling_group_name
        value: '{{ auto_scaling_group_name }}'
      - name: max_group_prepared_capacity
        value: '{{ max_group_prepared_capacity }}'
      - name: min_size
        value: '{{ min_size }}'
      - name: pool_state
        value: '{{ pool_state }}'
      - name: instance_reuse_policy
        value:
          reuse_on_scale_in: '{{ reuse_on_scale_in }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>warm_pool</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.autoscaling.warm_pools
SET PatchDocument = string('{{ {
    "MaxGroupPreparedCapacity": max_group_prepared_capacity,
    "MinSize": min_size,
    "PoolState": pool_state,
    "InstanceReusePolicy": instance_reuse_policy
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ auto_scaling_group_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.autoscaling.warm_pools
WHERE Identifier = '{{ auto_scaling_group_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>warm_pools</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
autoscaling:PutWarmPool,
autoscaling:DescribeWarmPool,
autoscaling:DescribeAutoScalingGroups
```

</TabItem>
<TabItem value="delete">

```json
autoscaling:DeleteWarmPool,
autoscaling:DescribeWarmPool
```

</TabItem>
<TabItem value="read">

```json
autoscaling:DescribeWarmPool
```

</TabItem>
<TabItem value="update">

```json
autoscaling:PutWarmPool,
autoscaling:DescribeWarmPool,
autoscaling:DescribeAutoScalingGroups
```

</TabItem>
<TabItem value="list">

```json
autoscaling:DescribeWarmPool
```

</TabItem>
</Tabs>