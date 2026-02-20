---
title: route_tables
hide_title: false
hide_table_of_contents: false
keywords:
  - route_tables
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

Creates, updates, deletes or gets a <code>route_table</code> resource or lists <code>route_tables</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>route_tables</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Specifies a route table for the specified VPC. After you create a route table, you can add routes and associate the table with a subnet.<br />For more information, see &#91;Route tables&#93;(https://docs.aws.amazon.com/vpc/latest/userguide/VPC&#95;Route&#95;Tables.html) in the &#42;Amazon VPC User Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.route_tables" /></td></tr>
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
    "name": "route_table_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "vpc_id",
    "type": "string",
    "description": "The ID of the VPC."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Any tags assigned to the route table.",
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
    "name": "route_table_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routetable.html"><code>AWS::EC2::RouteTable</code></a>.

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
    <td><code>route_tables</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="VpcId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>route_tables</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>route_tables</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>route_tables_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>route_tables</code></td>
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

Gets all properties from an individual <code>route_table</code>.
```sql
SELECT
region,
route_table_id,
vpc_id,
tags
FROM awscc.ec2.route_tables
WHERE region = 'us-east-1' AND data__Identifier = '<RouteTableId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>route_tables</code> in a region.
```sql
SELECT
region,
route_table_id
FROM awscc.ec2.route_tables_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>route_table</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.route_tables (
 VpcId,
 region
)
SELECT 
'{{ VpcId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.route_tables (
 VpcId,
 Tags,
 region
)
SELECT 
 '{{ VpcId }}',
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
  - name: route_table
    props:
      - name: VpcId
        value: '{{ VpcId }}'
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
UPDATE awscc.ec2.route_tables
SET data__PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<RouteTableId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.route_tables
WHERE data__Identifier = '<RouteTableId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>route_tables</code> resource, the following permissions are required:

### Read
```json
ec2:DescribeRouteTables
```

### Create
```json
ec2:CreateRouteTable,
ec2:CreateTags,
ec2:DescribeRouteTables
```

### Update
```json
ec2:CreateTags,
ec2:DeleteTags,
ec2:DescribeRouteTables
```

### List
```json
ec2:DescribeRouteTables
```

### Delete
```json
ec2:DescribeRouteTables,
ec2:DeleteRouteTable
```
