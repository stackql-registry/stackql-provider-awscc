---
title: local_gateway_routes
hide_title: false
hide_table_of_contents: false
keywords:
  - local_gateway_routes
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

Creates, updates, deletes or gets a <code>local_gateway_route</code> resource or lists <code>local_gateway_routes</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>local_gateway_routes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for Local Gateway Route which describes a route for a local gateway route table.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.local_gateway_routes" /></td></tr>
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
    "name": "destination_cidr_block",
    "type": "string",
    "description": "The CIDR block used for destination matches."
  },
  {
    "name": "local_gateway_route_table_id",
    "type": "string",
    "description": "The ID of the local gateway route table."
  },
  {
    "name": "local_gateway_virtual_interface_group_id",
    "type": "string",
    "description": "The ID of the virtual interface group."
  },
  {
    "name": "network_interface_id",
    "type": "string",
    "description": "The ID of the network interface."
  },
  {
    "name": "state",
    "type": "string",
    "description": "The state of the route."
  },
  {
    "name": "type",
    "type": "string",
    "description": "The route type."
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
    "name": "destination_cidr_block",
    "type": "string",
    "description": "The CIDR block used for destination matches."
  },
  {
    "name": "local_gateway_route_table_id",
    "type": "string",
    "description": "The ID of the local gateway route table."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroute.html"><code>AWS::EC2::LocalGatewayRoute</code></a>.

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
    <td><code>local_gateway_routes</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>local_gateway_routes</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>local_gateway_routes</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>local_gateway_routes_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>local_gateway_routes</code></td>
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

Gets all properties from an individual <code>local_gateway_route</code>.
```sql
SELECT
region,
destination_cidr_block,
local_gateway_route_table_id,
local_gateway_virtual_interface_group_id,
network_interface_id,
state,
type
FROM awscc.ec2.local_gateway_routes
WHERE region = 'us-east-1' AND data__Identifier = '<DestinationCidrBlock>|<LocalGatewayRouteTableId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>local_gateway_routes</code> in a region.
```sql
SELECT
region,
destination_cidr_block,
local_gateway_route_table_id
FROM awscc.ec2.local_gateway_routes_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>local_gateway_route</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.local_gateway_routes (
 DestinationCidrBlock,
 LocalGatewayRouteTableId,
 LocalGatewayVirtualInterfaceGroupId,
 NetworkInterfaceId,
 region
)
SELECT 
'{{ DestinationCidrBlock }}',
 '{{ LocalGatewayRouteTableId }}',
 '{{ LocalGatewayVirtualInterfaceGroupId }}',
 '{{ NetworkInterfaceId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.local_gateway_routes (
 DestinationCidrBlock,
 LocalGatewayRouteTableId,
 LocalGatewayVirtualInterfaceGroupId,
 NetworkInterfaceId,
 region
)
SELECT 
 '{{ DestinationCidrBlock }}',
 '{{ LocalGatewayRouteTableId }}',
 '{{ LocalGatewayVirtualInterfaceGroupId }}',
 '{{ NetworkInterfaceId }}',
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
  - name: local_gateway_route
    props:
      - name: DestinationCidrBlock
        value: '{{ DestinationCidrBlock }}'
      - name: LocalGatewayRouteTableId
        value: '{{ LocalGatewayRouteTableId }}'
      - name: LocalGatewayVirtualInterfaceGroupId
        value: '{{ LocalGatewayVirtualInterfaceGroupId }}'
      - name: NetworkInterfaceId
        value: '{{ NetworkInterfaceId }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.ec2.local_gateway_routes
SET data__PatchDocument = string('{{ {
    "LocalGatewayVirtualInterfaceGroupId": local_gateway_virtual_interface_group_id,
    "NetworkInterfaceId": network_interface_id
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<DestinationCidrBlock>|<LocalGatewayRouteTableId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.local_gateway_routes
WHERE data__Identifier = '<DestinationCidrBlock|LocalGatewayRouteTableId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>local_gateway_routes</code> resource, the following permissions are required:

### Create
```json
ec2:CreateLocalGatewayRoute,
ec2:SearchLocalGatewayRoutes
```

### Read
```json
ec2:SearchLocalGatewayRoutes
```

### Delete
```json
ec2:DeleteLocalGatewayRoute,
ec2:SearchLocalGatewayRoutes
```

### List
```json
ec2:DescribeLocalGatewayRouteTables,
ec2:SearchLocalGatewayRoutes
```

### Update
```json
ec2:ModifyLocalGatewayRoute,
ec2:SearchLocalGatewayRoutes
```
