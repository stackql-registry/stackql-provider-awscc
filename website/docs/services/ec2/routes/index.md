---
title: routes
hide_title: false
hide_table_of_contents: false
keywords:
  - routes
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

Creates, updates, deletes or gets a <code>route</code> resource or lists <code>routes</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>routes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Specifies a route in a route table. For more information, see &#91;Routes&#93;(https://docs.aws.amazon.com/vpc/latest/userguide/VPC&#95;Route&#95;Tables.html#route-table-routes) in the &#42;Amazon VPC User Guide&#42;.<br />You must specify either a destination CIDR block or prefix list ID. You must also specify exactly one of the resources as the target.<br />If you create a route that references a transit gateway in the same template where you create the transit gateway, you must declare a dependency on the transit gateway attachment. The route table cannot use the transit gateway until it has successfully attached to the VPC. Add a &#91;DependsOn Attribute&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) in the &#96;&#96;AWS::EC2::Route&#96;&#96; resource to explicitly declare a dependency on the &#96;&#96;AWS::EC2::TransitGatewayAttachment&#96;&#96; resource.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.routes" /></td></tr>
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
    "name": "carrier_gateway_id",
    "type": "string",
    "description": "The ID of the carrier gateway.<br />You can only use this option when the VPC contains a subnet which is associated with a Wavelength Zone."
  },
  {
    "name": "cidr_block",
    "type": "string",
    "description": ""
  },
  {
    "name": "core_network_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the core network."
  },
  {
    "name": "destination_cidr_block",
    "type": "string",
    "description": "The IPv4 CIDR address block used for the destination match. Routing decisions are based on the most specific match. We modify the specified CIDR block to its canonical form; for example, if you specify &#96;&#96;100.68.0.18/18&#96;&#96;, we modify it to &#96;&#96;100.68.0.0/18&#96;&#96;."
  },
  {
    "name": "destination_ipv6_cidr_block",
    "type": "string",
    "description": "The IPv6 CIDR block used for the destination match. Routing decisions are based on the most specific match."
  },
  {
    "name": "destination_prefix_list_id",
    "type": "string",
    "description": "The ID of a prefix list used for the destination match."
  },
  {
    "name": "egress_only_internet_gateway_id",
    "type": "string",
    "description": "&#91;IPv6 traffic only&#93; The ID of an egress-only internet gateway."
  },
  {
    "name": "gateway_id",
    "type": "string",
    "description": "The ID of an internet gateway or virtual private gateway attached to your VPC."
  },
  {
    "name": "instance_id",
    "type": "string",
    "description": "The ID of a NAT instance in your VPC. The operation fails if you specify an instance ID unless exactly one network interface is attached."
  },
  {
    "name": "local_gateway_id",
    "type": "string",
    "description": "The ID of the local gateway."
  },
  {
    "name": "nat_gateway_id",
    "type": "string",
    "description": "&#91;IPv4 traffic only&#93; The ID of a NAT gateway."
  },
  {
    "name": "network_interface_id",
    "type": "string",
    "description": "The ID of a network interface."
  },
  {
    "name": "route_table_id",
    "type": "string",
    "description": "The ID of the route table for the route."
  },
  {
    "name": "transit_gateway_id",
    "type": "string",
    "description": "The ID of a transit gateway."
  },
  {
    "name": "vpc_endpoint_id",
    "type": "string",
    "description": "The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only."
  },
  {
    "name": "vpc_peering_connection_id",
    "type": "string",
    "description": "The ID of a VPC peering connection."
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
    "name": "cidr_block",
    "type": "string",
    "description": ""
  },
  {
    "name": "route_table_id",
    "type": "string",
    "description": "The ID of the route table for the route."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-route.html"><code>AWS::EC2::Route</code></a>.

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
    <td><code>routes</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="RouteTableId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>routes</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>routes</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>routes_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>routes</code></td>
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

Gets all properties from an individual <code>route</code>.
```sql
SELECT
region,
carrier_gateway_id,
cidr_block,
core_network_arn,
destination_cidr_block,
destination_ipv6_cidr_block,
destination_prefix_list_id,
egress_only_internet_gateway_id,
gateway_id,
instance_id,
local_gateway_id,
nat_gateway_id,
network_interface_id,
route_table_id,
transit_gateway_id,
vpc_endpoint_id,
vpc_peering_connection_id
FROM awscc.ec2.routes
WHERE region = 'us-east-1' AND Identifier = '<RouteTableId>|<CidrBlock>';
```
</TabItem>
<TabItem value="list">

Lists all <code>routes</code> in a region.
```sql
SELECT
region,
route_table_id,
cidr_block
FROM awscc.ec2.routes_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>route</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.routes (
 RouteTableId,
 region
)
SELECT 
'{{ RouteTableId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.routes (
 CarrierGatewayId,
 CoreNetworkArn,
 DestinationCidrBlock,
 DestinationIpv6CidrBlock,
 DestinationPrefixListId,
 EgressOnlyInternetGatewayId,
 GatewayId,
 InstanceId,
 LocalGatewayId,
 NatGatewayId,
 NetworkInterfaceId,
 RouteTableId,
 TransitGatewayId,
 VpcEndpointId,
 VpcPeeringConnectionId,
 region
)
SELECT 
 '{{ CarrierGatewayId }}',
 '{{ CoreNetworkArn }}',
 '{{ DestinationCidrBlock }}',
 '{{ DestinationIpv6CidrBlock }}',
 '{{ DestinationPrefixListId }}',
 '{{ EgressOnlyInternetGatewayId }}',
 '{{ GatewayId }}',
 '{{ InstanceId }}',
 '{{ LocalGatewayId }}',
 '{{ NatGatewayId }}',
 '{{ NetworkInterfaceId }}',
 '{{ RouteTableId }}',
 '{{ TransitGatewayId }}',
 '{{ VpcEndpointId }}',
 '{{ VpcPeeringConnectionId }}',
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
  - name: route
    props:
      - name: CarrierGatewayId
        value: '{{ CarrierGatewayId }}'
      - name: CoreNetworkArn
        value: '{{ CoreNetworkArn }}'
      - name: DestinationCidrBlock
        value: '{{ DestinationCidrBlock }}'
      - name: DestinationIpv6CidrBlock
        value: '{{ DestinationIpv6CidrBlock }}'
      - name: DestinationPrefixListId
        value: '{{ DestinationPrefixListId }}'
      - name: EgressOnlyInternetGatewayId
        value: '{{ EgressOnlyInternetGatewayId }}'
      - name: GatewayId
        value: '{{ GatewayId }}'
      - name: InstanceId
        value: '{{ InstanceId }}'
      - name: LocalGatewayId
        value: '{{ LocalGatewayId }}'
      - name: NatGatewayId
        value: '{{ NatGatewayId }}'
      - name: NetworkInterfaceId
        value: '{{ NetworkInterfaceId }}'
      - name: RouteTableId
        value: '{{ RouteTableId }}'
      - name: TransitGatewayId
        value: '{{ TransitGatewayId }}'
      - name: VpcEndpointId
        value: '{{ VpcEndpointId }}'
      - name: VpcPeeringConnectionId
        value: '{{ VpcPeeringConnectionId }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.ec2.routes
SET PatchDocument = string('{{ {
    "CarrierGatewayId": carrier_gateway_id,
    "CoreNetworkArn": core_network_arn,
    "EgressOnlyInternetGatewayId": egress_only_internet_gateway_id,
    "GatewayId": gateway_id,
    "InstanceId": instance_id,
    "LocalGatewayId": local_gateway_id,
    "NatGatewayId": nat_gateway_id,
    "NetworkInterfaceId": network_interface_id,
    "TransitGatewayId": transit_gateway_id,
    "VpcEndpointId": vpc_endpoint_id,
    "VpcPeeringConnectionId": vpc_peering_connection_id
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<RouteTableId>|<CidrBlock>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.routes
WHERE Identifier = '<RouteTableId|CidrBlock>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>routes</code> resource, the following permissions are required:

### Create
```json
ec2:CreateRoute,
ec2:DescribeRouteTables,
ec2:DescribeNetworkInterfaces
```

### Read
```json
ec2:DescribeRouteTables
```

### Update
```json
ec2:ReplaceRoute,
ec2:DescribeRouteTables,
ec2:DescribeNetworkInterfaces
```

### Delete
```json
ec2:DeleteRoute,
ec2:DescribeRouteTables
```

### List
```json
ec2:DescribeRouteTables
```
