---
title: subnets
hide_title: false
hide_table_of_contents: false
keywords:
  - subnets
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

Creates, updates, deletes or gets a <code>subnet</code> resource or lists <code>subnets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>subnets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Specifies a subnet for the specified VPC.<br />For an IPv4 only subnet, specify an IPv4 CIDR block. If the VPC has an IPv6 CIDR block, you can create an IPv6 only subnet or a dual stack subnet instead. For an IPv6 only subnet, specify an IPv6 CIDR block. For a dual stack subnet, specify both an IPv4 CIDR block and an IPv6 CIDR block.<br />For more information, see &#91;Subnets for your VPC&#93;(https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html) in the &#42;Amazon VPC User Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.subnets" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "assign_ipv6_address_on_creation",
    "type": "boolean",
    "description": "Indicates whether a network interface created in this subnet receives an IPv6 address. The default value is &#96;&#96;false&#96;&#96;.<br />If you specify &#96;&#96;AssignIpv6AddressOnCreation&#96;&#96;, you must also specify an IPv6 CIDR block."
  },
  {
    "name": "vpc_id",
    "type": "string",
    "description": "The ID of the VPC the subnet is in.<br />If you update this property, you must also update the &#96;&#96;CidrBlock&#96;&#96; property."
  },
  {
    "name": "map_public_ip_on_launch",
    "type": "boolean",
    "description": "Indicates whether instances launched in this subnet receive a public IPv4 address. The default value is &#96;&#96;false&#96;&#96;.<br />AWS charges for all public IPv4 addresses, including public IPv4 addresses associated with running instances and Elastic IP addresses. For more information, see the &#42;Public IPv4 Address&#42; tab on the &#91;VPC pricing page&#93;(https://docs.aws.amazon.com/vpc/pricing/)."
  },
  {
    "name": "enable_lni_at_device_index",
    "type": "integer",
    "description": "Indicates the device position for local network interfaces in this subnet. For example, &#96;&#96;1&#96;&#96; indicates local network interfaces in this subnet are the secondary network interface (eth1)."
  },
  {
    "name": "network_acl_association_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "availability_zone",
    "type": "string",
    "description": "The Availability Zone of the subnet.<br />If you update this property, you must also update the &#96;&#96;CidrBlock&#96;&#96; property."
  },
  {
    "name": "availability_zone_id",
    "type": "string",
    "description": "The AZ ID of the subnet."
  },
  {
    "name": "cidr_block",
    "type": "string",
    "description": "The IPv4 CIDR block assigned to the subnet.<br />If you update this property, we create a new subnet, and then delete the existing one."
  },
  {
    "name": "subnet_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "ipv6_cidr_blocks",
    "type": "array",
    "description": ""
  },
  {
    "name": "ipv6_cidr_block",
    "type": "string",
    "description": "The IPv6 CIDR block.<br />If you specify &#96;&#96;AssignIpv6AddressOnCreation&#96;&#96;, you must also specify an IPv6 CIDR block."
  },
  {
    "name": "outpost_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the Outpost."
  },
  {
    "name": "ipv6_native",
    "type": "boolean",
    "description": "Indicates whether this is an IPv6 only subnet. For more information, see &#91;Subnet basics&#93;(https://docs.aws.amazon.com/vpc/latest/userguide/VPC&#95;Subnets.html#subnet-basics) in the &#42;User Guide&#42;."
  },
  {
    "name": "enable_dns64",
    "type": "boolean",
    "description": "Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.<br />You must first configure a NAT gateway in a public subnet (separate from the subnet containing the IPv6-only workloads). For example, the subnet containing the NAT gateway should have a &#96;&#96;0.0.0.0/0&#96;&#96; route pointing to the internet gateway. For more information, see &#91;Configure DNS64 and NAT64&#93;(https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-nat64-dns64.html#nat-gateway-nat64-dns64-walkthrough) in the &#42;User Guide&#42;."
  },
  {
    "name": "private_dns_name_options_on_launch",
    "type": "object",
    "description": "The hostname type for EC2 instances launched into this subnet and how DNS A and AAAA record queries to the instances should be handled. For more information, see &#91;Amazon EC2 instance hostname types&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the &#42;User Guide&#42;.<br />Available options:<br />+ EnableResourceNameDnsAAAARecord (true &#124; false)<br />+ EnableResourceNameDnsARecord (true &#124; false)<br />+ HostnameType (ip-name &#124; resource-name)",
    "children": [
      {
        "name": "hostname_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "enable_resource_name_dns_arecord",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "enable_resource_name_dns_aa_aa_record",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Any tags assigned to the subnet.",
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
    "name": "ipv4_ipam_pool_id",
    "type": "string",
    "description": "An IPv4 IPAM pool ID for the subnet."
  },
  {
    "name": "ipv4_netmask_length",
    "type": "integer",
    "description": "An IPv4 netmask length for the subnet."
  },
  {
    "name": "ipv6_ipam_pool_id",
    "type": "string",
    "description": "An IPv6 IPAM pool ID for the subnet."
  },
  {
    "name": "ipv6_netmask_length",
    "type": "integer",
    "description": "An IPv6 netmask length for the subnet."
  },
  {
    "name": "block_public_access_states",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "internet_gateway_block_mode",
        "type": "string",
        "description": "The mode of VPC BPA. Options here are off, block-bidirectional, block-ingress"
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html"><code>AWS::EC2::Subnet</code></a>.

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
    <td><CopyableCode code="VpcId, region" /></td>
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

Gets all properties from an individual <code>subnet</code>.
```sql
SELECT
region,
assign_ipv6_address_on_creation,
vpc_id,
map_public_ip_on_launch,
enable_lni_at_device_index,
network_acl_association_id,
availability_zone,
availability_zone_id,
cidr_block,
subnet_id,
ipv6_cidr_blocks,
ipv6_cidr_block,
outpost_arn,
ipv6_native,
enable_dns64,
private_dns_name_options_on_launch,
tags,
ipv4_ipam_pool_id,
ipv4_netmask_length,
ipv6_ipam_pool_id,
ipv6_netmask_length,
block_public_access_states
FROM awscc.ec2.subnets
WHERE region = 'us-east-1' AND data__Identifier = '<SubnetId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>subnet</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.subnets (
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
INSERT INTO awscc.ec2.subnets (
 AssignIpv6AddressOnCreation,
 VpcId,
 MapPublicIpOnLaunch,
 EnableLniAtDeviceIndex,
 AvailabilityZone,
 AvailabilityZoneId,
 CidrBlock,
 Ipv6CidrBlock,
 OutpostArn,
 Ipv6Native,
 EnableDns64,
 PrivateDnsNameOptionsOnLaunch,
 Tags,
 Ipv4IpamPoolId,
 Ipv4NetmaskLength,
 Ipv6IpamPoolId,
 Ipv6NetmaskLength,
 region
)
SELECT 
 '{{ AssignIpv6AddressOnCreation }}',
 '{{ VpcId }}',
 '{{ MapPublicIpOnLaunch }}',
 '{{ EnableLniAtDeviceIndex }}',
 '{{ AvailabilityZone }}',
 '{{ AvailabilityZoneId }}',
 '{{ CidrBlock }}',
 '{{ Ipv6CidrBlock }}',
 '{{ OutpostArn }}',
 '{{ Ipv6Native }}',
 '{{ EnableDns64 }}',
 '{{ PrivateDnsNameOptionsOnLaunch }}',
 '{{ Tags }}',
 '{{ Ipv4IpamPoolId }}',
 '{{ Ipv4NetmaskLength }}',
 '{{ Ipv6IpamPoolId }}',
 '{{ Ipv6NetmaskLength }}',
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
  - name: subnet
    props:
      - name: AssignIpv6AddressOnCreation
        value: '{{ AssignIpv6AddressOnCreation }}'
      - name: VpcId
        value: '{{ VpcId }}'
      - name: MapPublicIpOnLaunch
        value: '{{ MapPublicIpOnLaunch }}'
      - name: EnableLniAtDeviceIndex
        value: '{{ EnableLniAtDeviceIndex }}'
      - name: AvailabilityZone
        value: '{{ AvailabilityZone }}'
      - name: AvailabilityZoneId
        value: '{{ AvailabilityZoneId }}'
      - name: CidrBlock
        value: '{{ CidrBlock }}'
      - name: Ipv6CidrBlock
        value: '{{ Ipv6CidrBlock }}'
      - name: OutpostArn
        value: '{{ OutpostArn }}'
      - name: Ipv6Native
        value: '{{ Ipv6Native }}'
      - name: EnableDns64
        value: '{{ EnableDns64 }}'
      - name: PrivateDnsNameOptionsOnLaunch
        value:
          HostnameType: '{{ HostnameType }}'
          EnableResourceNameDnsARecord: '{{ EnableResourceNameDnsARecord }}'
          EnableResourceNameDnsAAAARecord: '{{ EnableResourceNameDnsAAAARecord }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: Ipv4IpamPoolId
        value: '{{ Ipv4IpamPoolId }}'
      - name: Ipv4NetmaskLength
        value: '{{ Ipv4NetmaskLength }}'
      - name: Ipv6IpamPoolId
        value: '{{ Ipv6IpamPoolId }}'
      - name: Ipv6NetmaskLength
        value: '{{ Ipv6NetmaskLength }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.subnets
WHERE data__Identifier = '<SubnetId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>subnets</code> resource, the following permissions are required:

### Create
```json
ec2:DescribeSubnets,
ec2:CreateSubnet,
ec2:CreateTags,
ec2:ModifySubnetAttribute
```

### Read
```json
ec2:DescribeSubnets,
ec2:DescribeNetworkAcls
```

### Update
```json
ec2:DescribeSubnets,
ec2:ModifySubnetAttribute,
ec2:CreateTags,
ec2:DeleteTags,
ec2:AssociateSubnetCidrBlock,
ec2:DisassociateSubnetCidrBlock
```

### Delete
```json
ec2:DescribeSubnets,
ec2:DeleteSubnet
```

### List
```json
ec2:DescribeSubnets,
ec2:DescribeNetworkAcls
```
