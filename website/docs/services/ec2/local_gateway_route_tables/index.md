---
title: local_gateway_route_tables
hide_title: false
hide_table_of_contents: false
keywords:
  - local_gateway_route_tables
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

Creates, updates, deletes or gets a <code>local_gateway_route_table</code> resource or lists <code>local_gateway_route_tables</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>local_gateway_route_tables</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for Local Gateway Route Table which describes a route table for a local gateway.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.local_gateway_route_tables" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "local_gateway_route_table_id",
    "type": "string",
    "description": "The ID of the local gateway route table."
  },
  {
    "name": "local_gateway_route_table_arn",
    "type": "string",
    "description": "The ARN of the local gateway route table."
  },
  {
    "name": "local_gateway_id",
    "type": "string",
    "description": "The ID of the local gateway."
  },
  {
    "name": "outpost_arn",
    "type": "string",
    "description": "The ARN of the outpost."
  },
  {
    "name": "owner_id",
    "type": "string",
    "description": "The owner of the local gateway route table."
  },
  {
    "name": "state",
    "type": "string",
    "description": "The state of the local gateway route table."
  },
  {
    "name": "mode",
    "type": "string",
    "description": "The mode of the local gateway route table."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags for the local gateway route table.",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetable.html"><code>AWS::EC2::LocalGatewayRouteTable</code></a>.

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
    <td><CopyableCode code="LocalGatewayId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>local_gateway_route_table</code>.
```sql
SELECT
region,
local_gateway_route_table_id,
local_gateway_route_table_arn,
local_gateway_id,
outpost_arn,
owner_id,
state,
mode,
tags
FROM awscc.ec2.local_gateway_route_tables
WHERE region = 'us-east-1' AND data__Identifier = '<LocalGatewayRouteTableId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>local_gateway_route_table</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.local_gateway_route_tables (
 LocalGatewayId,
 region
)
SELECT 
'{{ LocalGatewayId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.local_gateway_route_tables (
 LocalGatewayId,
 Mode,
 Tags,
 region
)
SELECT 
 '{{ LocalGatewayId }}',
 '{{ Mode }}',
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
  - name: local_gateway_route_table
    props:
      - name: LocalGatewayId
        value: '{{ LocalGatewayId }}'
      - name: Mode
        value: '{{ Mode }}'
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
DELETE FROM awscc.ec2.local_gateway_route_tables
WHERE data__Identifier = '<LocalGatewayRouteTableId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>local_gateway_route_tables</code> resource, the following permissions are required:

### Create
```json
ec2:CreateLocalGatewayRouteTable,
ec2:DescribeLocalGatewayRouteTables,
ec2:CreateTags
```

### Read
```json
ec2:DescribeLocalGatewayRouteTables,
ec2:DescribeTags
```

### Update
```json
ec2:DescribeLocalGatewayRouteTables,
ec2:CreateTags,
ec2:DeleteTags,
ec2:DescribeTags
```

### Delete
```json
ec2:DeleteLocalGatewayRouteTable,
ec2:DescribeLocalGatewayRouteTables,
ec2:DeleteTags
```

### List
```json
ec2:DescribeLocalGatewayRouteTables
```
