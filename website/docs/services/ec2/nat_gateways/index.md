---
title: nat_gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - nat_gateways
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

Creates, updates, deletes or gets a <code>nat_gateway</code> resource or lists <code>nat_gateways</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>nat_gateways</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Specifies a network address translation (NAT) gateway in the specified subnet. You can create either a public NAT gateway or a private NAT gateway. The default is a public NAT gateway. If you create a public NAT gateway, you must specify an elastic IP address.<br />With a NAT gateway, instances in a private subnet can connect to the internet, other AWS services, or an on-premises network using the IP address of the NAT gateway. For more information, see &#91;NAT gateways&#93;(https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html) in the &#42;Amazon VPC User Guide&#42;.<br />If you add a default route (&#96;&#96;AWS::EC2::Route&#96;&#96; resource) that points to a NAT gateway, specify the NAT gateway ID for the route's &#96;&#96;NatGatewayId&#96;&#96; property.<br />When you associate an Elastic IP address or secondary Elastic IP address with a public NAT gateway, the network border group of the Elastic IP address must match the network border group of the Availability Zone (AZ) that the public NAT gateway is in. Otherwise, the NAT gateway fails to launch. You can see the network border group for the AZ by viewing the details of the subnet. Similarly, you can view the network border group for the Elastic IP address by viewing its details. For more information, see &#91;Allocate an Elastic IP address&#93;(https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html#allocate-eip) in the &#42;Amazon VPC User Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.nat_gateways" /></td></tr>
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
    "name": "secondary_allocation_ids",
    "type": "array",
    "description": "Secondary EIP allocation IDs. For more information, see &#91;Create a NAT gateway&#93;(https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-working-with.html) in the &#42;Amazon VPC User Guide&#42;."
  },
  {
    "name": "private_ip_address",
    "type": "string",
    "description": "The private IPv4 address to assign to the NAT gateway. If you don't provide an address, a private IPv4 address will be automatically assigned."
  },
  {
    "name": "secondary_private_ip_address_count",
    "type": "integer",
    "description": "&#91;Private NAT gateway only&#93; The number of secondary private IPv4 addresses you want to assign to the NAT gateway. For more information about secondary addresses, see &#91;Create a NAT gateway&#93;(https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-creating) in the &#42;Amazon Virtual Private Cloud User Guide&#42;.<br />&#96;&#96;SecondaryPrivateIpAddressCount&#96;&#96; and &#96;&#96;SecondaryPrivateIpAddresses&#96;&#96; cannot be set at the same time."
  },
  {
    "name": "allocation_id",
    "type": "string",
    "description": "&#91;Public NAT gateway only&#93; The allocation ID of the Elastic IP address that's associated with the NAT gateway. This property is required for a public NAT gateway and cannot be specified with a private NAT gateway."
  },
  {
    "name": "subnet_id",
    "type": "string",
    "description": "The ID of the subnet in which the NAT gateway is located."
  },
  {
    "name": "connectivity_type",
    "type": "string",
    "description": "Indicates whether the NAT gateway supports public or private connectivity. The default is public connectivity."
  },
  {
    "name": "secondary_private_ip_addresses",
    "type": "array",
    "description": "Secondary private IPv4 addresses. For more information about secondary addresses, see &#91;Create a NAT gateway&#93;(https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-creating) in the &#42;Amazon Virtual Private Cloud User Guide&#42;.<br />&#96;&#96;SecondaryPrivateIpAddressCount&#96;&#96; and &#96;&#96;SecondaryPrivateIpAddresses&#96;&#96; cannot be set at the same time."
  },
  {
    "name": "nat_gateway_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags for the NAT gateway.",
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
    "name": "max_drain_duration_seconds",
    "type": "integer",
    "description": "The maximum amount of time to wait (in seconds) before forcibly releasing the IP addresses if connections are still in progress. Default value is 350 seconds."
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
    "name": "nat_gateway_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-natgateway.html"><code>AWS::EC2::NatGateway</code></a>.

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
    <td><code>nat_gateways</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>nat_gateways</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>nat_gateways</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>nat_gateways_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>nat_gateways</code></td>
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

Gets all properties from an individual <code>nat_gateway</code>.
```sql
SELECT
region,
secondary_allocation_ids,
private_ip_address,
secondary_private_ip_address_count,
allocation_id,
subnet_id,
connectivity_type,
secondary_private_ip_addresses,
nat_gateway_id,
tags,
max_drain_duration_seconds
FROM awscc.ec2.nat_gateways
WHERE region = 'us-east-1' AND Identifier = '<NatGatewayId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>nat_gateways</code> in a region.
```sql
SELECT
region,
nat_gateway_id
FROM awscc.ec2.nat_gateways_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>nat_gateway</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.nat_gateways (
 SecondaryAllocationIds,
 PrivateIpAddress,
 SecondaryPrivateIpAddressCount,
 AllocationId,
 SubnetId,
 ConnectivityType,
 SecondaryPrivateIpAddresses,
 Tags,
 MaxDrainDurationSeconds,
 region
)
SELECT 
'{{ SecondaryAllocationIds }}',
 '{{ PrivateIpAddress }}',
 '{{ SecondaryPrivateIpAddressCount }}',
 '{{ AllocationId }}',
 '{{ SubnetId }}',
 '{{ ConnectivityType }}',
 '{{ SecondaryPrivateIpAddresses }}',
 '{{ Tags }}',
 '{{ MaxDrainDurationSeconds }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.nat_gateways (
 SecondaryAllocationIds,
 PrivateIpAddress,
 SecondaryPrivateIpAddressCount,
 AllocationId,
 SubnetId,
 ConnectivityType,
 SecondaryPrivateIpAddresses,
 Tags,
 MaxDrainDurationSeconds,
 region
)
SELECT 
 '{{ SecondaryAllocationIds }}',
 '{{ PrivateIpAddress }}',
 '{{ SecondaryPrivateIpAddressCount }}',
 '{{ AllocationId }}',
 '{{ SubnetId }}',
 '{{ ConnectivityType }}',
 '{{ SecondaryPrivateIpAddresses }}',
 '{{ Tags }}',
 '{{ MaxDrainDurationSeconds }}',
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
  - name: nat_gateway
    props:
      - name: SecondaryAllocationIds
        value:
          - '{{ SecondaryAllocationIds[0] }}'
      - name: PrivateIpAddress
        value: '{{ PrivateIpAddress }}'
      - name: SecondaryPrivateIpAddressCount
        value: '{{ SecondaryPrivateIpAddressCount }}'
      - name: AllocationId
        value: '{{ AllocationId }}'
      - name: SubnetId
        value: '{{ SubnetId }}'
      - name: ConnectivityType
        value: '{{ ConnectivityType }}'
      - name: SecondaryPrivateIpAddresses
        value:
          - '{{ SecondaryPrivateIpAddresses[0] }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: MaxDrainDurationSeconds
        value: '{{ MaxDrainDurationSeconds }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>nat_gateway</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.nat_gateways
SET PatchDocument = string('{{ {
    "SecondaryAllocationIds": secondary_allocation_ids,
    "SecondaryPrivateIpAddressCount": secondary_private_ip_address_count,
    "SecondaryPrivateIpAddresses": secondary_private_ip_addresses,
    "Tags": tags,
    "MaxDrainDurationSeconds": max_drain_duration_seconds
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<NatGatewayId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.nat_gateways
WHERE Identifier = '<NatGatewayId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>nat_gateways</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="read">

```json
ec2:DescribeNatGateways
```

</TabItem>
<TabItem value="create">

```json
ec2:CreateNatGateway,
ec2:DescribeNatGateways,
ec2:CreateTags
```

</TabItem>
<TabItem value="update">

```json
ec2:DescribeNatGateways,
ec2:CreateTags,
ec2:DeleteTags,
ec2:AssociateNatGatewayAddress,
ec2:DisassociateNatGatewayAddress,
ec2:AssignPrivateNatGatewayAddress,
ec2:UnassignPrivateNatGatewayAddress
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeNatGateways
```

</TabItem>
<TabItem value="delete">

```json
ec2:DeleteNatGateway,
ec2:DescribeNatGateways
```

</TabItem>
</Tabs>