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

import CodeBlock from '@theme/CodeBlock';
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
<tr><td><b>Description</b></td><td><details><summary>Specifies a subnet for the specified VPC.</summary>For an IPv4 only subnet, specify an IPv4 CIDR block. If the VPC has an IPv6 CIDR block, you can create an IPv6 only subnet or a dual stack subnet instead. For an IPv6 only subnet, specify an IPv6 CIDR block. For a dual stack subnet, specify both an IPv4 CIDR block and an IPv6 CIDR block.<br />For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html">Subnets for your VPC</a> in the <i>Amazon VPC User Guide</i>.</details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.subnets" /></td></tr>
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
    "name": "assign_ipv6_address_on_creation",
    "type": "boolean",
    "description": "<details><summary>Indicates whether a network interface created in this subnet receives an IPv6 address. The default value is <code>false</code>.</summary>If you specify <code>AssignIpv6AddressOnCreation</code>, you must also specify an IPv6 CIDR block.</details>"
  },
  {
    "name": "vpc_id",
    "type": "string",
    "description": "<details><summary>The ID of the VPC the subnet is in.</summary>If you update this property, you must also update the <code>CidrBlock</code> property.</details>"
  },
  {
    "name": "map_public_ip_on_launch",
    "type": "boolean",
    "description": "<details><summary>Indicates whether instances launched in this subnet receive a public IPv4 address. The default value is <code>false</code>.</summary>AWS charges for all public IPv4 addresses, including public IPv4 addresses associated with running instances and Elastic IP addresses. For more information, see the <i>Public IPv4 Address</i> tab on the <a href=\"https://docs.aws.amazon.com/vpc/pricing/\">VPC pricing page</a>.</details>"
  },
  {
    "name": "enable_lni_at_device_index",
    "type": "integer",
    "description": "Indicates the device position for local network interfaces in this subnet. For example, <code>1</code> indicates local network interfaces in this subnet are the secondary network interface (eth1)."
  },
  {
    "name": "network_acl_association_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "availability_zone",
    "type": "string",
    "description": "<details><summary>The Availability Zone of the subnet.</summary>If you update this property, you must also update the <code>CidrBlock</code> property.</details>"
  },
  {
    "name": "availability_zone_id",
    "type": "string",
    "description": "The AZ ID of the subnet."
  },
  {
    "name": "cidr_block",
    "type": "string",
    "description": "<details><summary>The IPv4 CIDR block assigned to the subnet.</summary>If you update this property, we create a new subnet, and then delete the existing one.</details>"
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
    "description": "<details><summary>The IPv6 CIDR block.</summary>If you specify <code>AssignIpv6AddressOnCreation</code>, you must also specify an IPv6 CIDR block.</details>"
  },
  {
    "name": "outpost_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the Outpost."
  },
  {
    "name": "ipv6_native",
    "type": "boolean",
    "description": "Indicates whether this is an IPv6 only subnet. For more information, see <a href=\"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html#subnet-basics\">Subnet basics</a> in the <i>User Guide</i>."
  },
  {
    "name": "enable_dns64",
    "type": "boolean",
    "description": "<details><summary>Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.</summary>You must first configure a NAT gateway in a public subnet (separate from the subnet containing the IPv6-only workloads). For example, the subnet containing the NAT gateway should have a <code>0.0.0.0/0</code> route pointing to the internet gateway. For more information, see <a href=\"https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-nat64-dns64.html#nat-gateway-nat64-dns64-walkthrough\">Configure DNS64 and NAT64</a> in the <i>User Guide</i>.</details>"
  },
  {
    "name": "private_dns_name_options_on_launch",
    "type": "object",
    "description": "<details><summary>The hostname type for EC2 instances launched into this subnet and how DNS A and AAAA record queries to the instances should be handled. For more information, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html\">Amazon EC2 instance hostname types</a> in the <i>User Guide</i>.</summary>Available options:<br />+  EnableResourceNameDnsAAAARecord (true | false)<br />+  EnableResourceNameDnsARecord (true | false)<br />+  HostnameType (ip-name | resource-name)</details>",
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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "subnet_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html"><code>AWS::EC2::Subnet</code></a>.

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
    <td><code>subnets</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="VpcId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>subnets</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>subnets</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>subnets_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>subnets</code></td>
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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ subnet_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>subnets</code> in a region.
```sql
SELECT
  region,
  subnet_id
FROM awscc.ec2.subnets_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

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
  '{{ vpc_id }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
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
  '{{ assign_ipv6_address_on_creation }}',
  '{{ vpc_id }}',
  '{{ map_public_ip_on_launch }}',
  '{{ enable_lni_at_device_index }}',
  '{{ availability_zone }}',
  '{{ availability_zone_id }}',
  '{{ cidr_block }}',
  '{{ ipv6_cidr_block }}',
  '{{ outpost_arn }}',
  '{{ ipv6_native }}',
  '{{ enable_dns64 }}',
  '{{ private_dns_name_options_on_launch }}',
  '{{ tags }}',
  '{{ ipv4_ipam_pool_id }}',
  '{{ ipv4_netmask_length }}',
  '{{ ipv6_ipam_pool_id }}',
  '{{ ipv6_netmask_length }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`version: 1
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
      - name: assign_ipv6_address_on_creation
        value: '{{ assign_ipv6_address_on_creation }}'
      - name: vpc_id
        value: '{{ vpc_id }}'
      - name: map_public_ip_on_launch
        value: '{{ map_public_ip_on_launch }}'
      - name: enable_lni_at_device_index
        value: '{{ enable_lni_at_device_index }}'
      - name: availability_zone
        value: '{{ availability_zone }}'
      - name: availability_zone_id
        value: '{{ availability_zone_id }}'
      - name: cidr_block
        value: '{{ cidr_block }}'
      - name: ipv6_cidr_block
        value: '{{ ipv6_cidr_block }}'
      - name: outpost_arn
        value: '{{ outpost_arn }}'
      - name: ipv6_native
        value: '{{ ipv6_native }}'
      - name: enable_dns64
        value: '{{ enable_dns64 }}'
      - name: private_dns_name_options_on_launch
        value:
          hostname_type: '{{ hostname_type }}'
          enable_resource_name_dns_arecord: '{{ enable_resource_name_dns_arecord }}'
          enable_resource_name_dns_aa_aa_record: '{{ enable_resource_name_dns_aa_aa_record }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: ipv4_ipam_pool_id
        value: '{{ ipv4_ipam_pool_id }}'
      - name: ipv4_netmask_length
        value: '{{ ipv4_netmask_length }}'
      - name: ipv6_ipam_pool_id
        value: '{{ ipv6_ipam_pool_id }}'
      - name: ipv6_netmask_length
        value: '{{ ipv6_netmask_length }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>subnet</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.subnets
SET PatchDocument = string('{{ {
    "AssignIpv6AddressOnCreation": assign_ipv6_address_on_creation,
    "MapPublicIpOnLaunch": map_public_ip_on_launch,
    "EnableLniAtDeviceIndex": enable_lni_at_device_index,
    "Ipv6CidrBlock": ipv6_cidr_block,
    "EnableDns64": enable_dns64,
    "PrivateDnsNameOptionsOnLaunch": private_dns_name_options_on_launch,
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ subnet_id }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.subnets
WHERE
  Identifier = '{{ subnet_id }}' AND
  region = '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

## Permissions

To operate on the <code>subnets</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
ec2:DescribeSubnets,
ec2:CreateSubnet,
ec2:CreateTags,
ec2:ModifySubnetAttribute
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeSubnets,
ec2:DescribeNetworkAcls
```

</TabItem>
<TabItem value="update">

```json
ec2:DescribeSubnets,
ec2:ModifySubnetAttribute,
ec2:CreateTags,
ec2:DeleteTags,
ec2:AssociateSubnetCidrBlock,
ec2:DisassociateSubnetCidrBlock
```

</TabItem>
<TabItem value="delete">

```json
ec2:DescribeSubnets,
ec2:DeleteSubnet
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeSubnets,
ec2:DescribeNetworkAcls
```

</TabItem>
</Tabs>