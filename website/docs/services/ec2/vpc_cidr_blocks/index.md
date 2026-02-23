---
title: vpc_cidr_blocks
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_cidr_blocks
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

Creates, updates, deletes or gets a <code>vpc_cidr_block</code> resource or lists <code>vpc_cidr_blocks</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vpc_cidr_blocks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::EC2::VPCCidrBlock</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.vpc_cidr_blocks" /></td></tr>
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
    "name": "cidr_block",
    "type": "string",
    "description": "An IPv4 CIDR block to associate with the VPC."
  },
  {
    "name": "ipv6_pool",
    "type": "string",
    "description": "The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The Id of the VPC associated CIDR Block."
  },
  {
    "name": "vpc_id",
    "type": "string",
    "description": "The ID of the VPC."
  },
  {
    "name": "ipv6_cidr_block",
    "type": "string",
    "description": "An IPv6 CIDR block from the IPv6 address pool."
  },
  {
    "name": "ipv4_ipam_pool_id",
    "type": "string",
    "description": "The ID of the IPv4 IPAM pool to Associate a CIDR from to a VPC."
  },
  {
    "name": "ipv4_netmask_length",
    "type": "integer",
    "description": "The netmask length of the IPv4 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool."
  },
  {
    "name": "ipv6_ipam_pool_id",
    "type": "string",
    "description": "The ID of the IPv6 IPAM pool to Associate a CIDR from to a VPC."
  },
  {
    "name": "ipv6_netmask_length",
    "type": "integer",
    "description": "The netmask length of the IPv6 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool."
  },
  {
    "name": "amazon_provided_ipv6_cidr_block",
    "type": "boolean",
    "description": "Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. You cannot specify the range of IPv6 addresses, or the size of the CIDR block."
  },
  {
    "name": "ipv6_address_attribute",
    "type": "string",
    "description": "The value denoting whether an IPv6 VPC CIDR Block is public or private."
  },
  {
    "name": "ip_source",
    "type": "string",
    "description": "The IP Source of an IPv6 VPC CIDR Block."
  },
  {
    "name": "ipv6_cidr_block_network_border_group",
    "type": "string",
    "description": "The name of the location from which we advertise the IPV6 CIDR block."
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
    "name": "id",
    "type": "string",
    "description": "The Id of the VPC associated CIDR Block."
  },
  {
    "name": "vpc_id",
    "type": "string",
    "description": "The ID of the VPC."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpccidrblock.html"><code>AWS::EC2::VPCCidrBlock</code></a>.

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
    <td><code>vpc_cidr_blocks</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="VpcId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>vpc_cidr_blocks</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>vpc_cidr_blocks_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>vpc_cidr_blocks</code></td>
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

Gets all properties from an individual <code>vpc_cidr_block</code>.
```sql
SELECT
region,
cidr_block,
ipv6_pool,
id,
vpc_id,
ipv6_cidr_block,
ipv4_ipam_pool_id,
ipv4_netmask_length,
ipv6_ipam_pool_id,
ipv6_netmask_length,
amazon_provided_ipv6_cidr_block,
ipv6_address_attribute,
ip_source,
ipv6_cidr_block_network_border_group
FROM awscc.ec2.vpc_cidr_blocks
WHERE region = 'us-east-1' AND Identifier = '{{ id }}|{{ vpc_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>vpc_cidr_blocks</code> in a region.
```sql
SELECT
region,
id,
vpc_id
FROM awscc.ec2.vpc_cidr_blocks_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>vpc_cidr_block</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.vpc_cidr_blocks (
 VpcId,
 region
)
SELECT
'{{ vpc_id }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.vpc_cidr_blocks (
 CidrBlock,
 Ipv6Pool,
 VpcId,
 Ipv6CidrBlock,
 Ipv4IpamPoolId,
 Ipv4NetmaskLength,
 Ipv6IpamPoolId,
 Ipv6NetmaskLength,
 AmazonProvidedIpv6CidrBlock,
 Ipv6CidrBlockNetworkBorderGroup,
 region
)
SELECT
 '{{ cidr_block }}',
 '{{ ipv6_pool }}',
 '{{ vpc_id }}',
 '{{ ipv6_cidr_block }}',
 '{{ ipv4_ipam_pool_id }}',
 '{{ ipv4_netmask_length }}',
 '{{ ipv6_ipam_pool_id }}',
 '{{ ipv6_netmask_length }}',
 '{{ amazon_provided_ipv6_cidr_block }}',
 '{{ ipv6_cidr_block_network_border_group }}',
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
  - name: vpc_cidr_block
    props:
      - name: cidr_block
        value: '{{ cidr_block }}'
      - name: ipv6_pool
        value: '{{ ipv6_pool }}'
      - name: vpc_id
        value: '{{ vpc_id }}'
      - name: ipv6_cidr_block
        value: '{{ ipv6_cidr_block }}'
      - name: ipv4_ipam_pool_id
        value: '{{ ipv4_ipam_pool_id }}'
      - name: ipv4_netmask_length
        value: '{{ ipv4_netmask_length }}'
      - name: ipv6_ipam_pool_id
        value: '{{ ipv6_ipam_pool_id }}'
      - name: ipv6_netmask_length
        value: '{{ ipv6_netmask_length }}'
      - name: amazon_provided_ipv6_cidr_block
        value: '{{ amazon_provided_ipv6_cidr_block }}'
      - name: ipv6_cidr_block_network_border_group
        value: '{{ ipv6_cidr_block_network_border_group }}'
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.vpc_cidr_blocks
WHERE Identifier = '{{ id }}|{{ vpc_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>vpc_cidr_blocks</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
ec2:AssociateVpcCidrBlock,
ec2:DescribeVpcs,
ec2:AllocateIpamPoolCidr
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeVpcs
```

</TabItem>
<TabItem value="delete">

```json
ec2:DescribeVpcs,
ec2:DisassociateVpcCidrBlock
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeVpcs
```

</TabItem>
</Tabs>