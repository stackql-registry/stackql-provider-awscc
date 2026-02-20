---
title: placement_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - placement_groups
  - ec2
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

Creates, updates, deletes or gets a <code>placement_group</code> resource or lists <code>placement_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>placement_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::EC2::PlacementGroup</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.placement_groups" /></td></tr>
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
    "name": "strategy",
    "type": "string",
    "description": "The placement strategy."
  },
  {
    "name": "group_name",
    "type": "string",
    "description": "The Group Name of Placement Group."
  },
  {
    "name": "spread_level",
    "type": "string",
    "description": "The Spread Level of Placement Group is an enum where it accepts either host or rack when strategy is spread"
  },
  {
    "name": "partition_count",
    "type": "integer",
    "description": "The number of partitions. Valid only when &#42;&#42;Strategy&#42;&#42; is set to &#96;partition&#96;"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The tag key."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The tag value."
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
    "name": "group_name",
    "type": "string",
    "description": "The Group Name of Placement Group."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-placementgroup.html"><code>AWS::EC2::PlacementGroup</code></a>.

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
    <td><code>placement_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>placement_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>placement_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>placement_groups</code></td>
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

Gets all properties from an individual <code>placement_group</code>.
```sql
SELECT
region,
strategy,
group_name,
spread_level,
partition_count,
tags
FROM awscc.ec2.placement_groups
WHERE region = 'us-east-1' AND Identifier = '<GroupName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>placement_groups</code> in a region.
```sql
SELECT
region,
group_name
FROM awscc.ec2.placement_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>placement_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.placement_groups (
 Strategy,
 SpreadLevel,
 PartitionCount,
 Tags,
 region
)
SELECT 
'{{ Strategy }}',
 '{{ SpreadLevel }}',
 '{{ PartitionCount }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.placement_groups (
 Strategy,
 SpreadLevel,
 PartitionCount,
 Tags,
 region
)
SELECT 
 '{{ Strategy }}',
 '{{ SpreadLevel }}',
 '{{ PartitionCount }}',
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
  - name: placement_group
    props:
      - name: Strategy
        value: '{{ Strategy }}'
      - name: SpreadLevel
        value: '{{ SpreadLevel }}'
      - name: PartitionCount
        value: '{{ PartitionCount }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.placement_groups
WHERE Identifier = '<GroupName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>placement_groups</code> resource, the following permissions are required:

### Create
```json
ec2:CreatePlacementGroup,
ec2:DescribePlacementGroups,
ec2:CreateTags
```

### Read
```json
ec2:DescribePlacementGroups
```

### Delete
```json
ec2:DeletePlacementGroup,
ec2:DescribePlacementGroups
```

### List
```json
ec2:DescribePlacementGroups
```
