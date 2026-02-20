---
title: subnet_cidr_blocks
hide_title: false
hide_table_of_contents: false
keywords:
  - subnet_cidr_blocks
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

Creates, updates, deletes or gets a <code>subnet_cidr_block</code> resource or lists <code>subnet_cidr_blocks</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>subnet_cidr_blocks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::EC2::SubnetCidrBlock resource creates association between subnet and IPv6 CIDR</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.subnet_cidr_blocks" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": "Information about the IPv6 association."
  },
  {
    "name": "ipv6_cidr_block",
    "type": "string",
    "description": "The IPv6 network range for the subnet, in CIDR notation. The subnet size must use a /64 prefix length"
  },
  {
    "name": "ipv6_ipam_pool_id",
    "type": "string",
    "description": "The ID of an IPv6 Amazon VPC IP Address Manager (IPAM) pool from which to allocate, to get the subnet's CIDR"
  },
  {
    "name": "ipv6_netmask_length",
    "type": "integer",
    "description": "The netmask length of the IPv6 CIDR to allocate to the subnet from an IPAM pool"
  },
  {
    "name": "subnet_id",
    "type": "string",
    "description": "The ID of the subnet"
  },
  {
    "name": "ipv6_address_attribute",
    "type": "string",
    "description": "The value denoting whether an IPv6 Subnet CIDR Block is public or private."
  },
  {
    "name": "ip_source",
    "type": "string",
    "description": "The IP Source of an IPv6 Subnet CIDR Block."
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
    "description": "Information about the IPv6 association."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetcidrblock.html"><code>AWS::EC2::SubnetCidrBlock</code></a>.

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
    <td><code>subnet_cidr_blocks</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="SubnetId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>subnet_cidr_blocks</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>subnet_cidr_blocks_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>subnet_cidr_blocks</code></td>
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

Gets all properties from an individual <code>subnet_cidr_block</code>.
```sql
SELECT
region,
id,
ipv6_cidr_block,
ipv6_ipam_pool_id,
ipv6_netmask_length,
subnet_id,
ipv6_address_attribute,
ip_source
FROM awscc.ec2.subnet_cidr_blocks
WHERE region = 'us-east-1' AND Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>subnet_cidr_blocks</code> in a region.
```sql
SELECT
region,
id
FROM awscc.ec2.subnet_cidr_blocks_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>subnet_cidr_block</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.subnet_cidr_blocks (
 SubnetId,
 region
)
SELECT 
'{{ SubnetId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.subnet_cidr_blocks (
 Ipv6CidrBlock,
 Ipv6IpamPoolId,
 Ipv6NetmaskLength,
 SubnetId,
 region
)
SELECT 
 '{{ Ipv6CidrBlock }}',
 '{{ Ipv6IpamPoolId }}',
 '{{ Ipv6NetmaskLength }}',
 '{{ SubnetId }}',
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
  - name: subnet_cidr_block
    props:
      - name: Ipv6CidrBlock
        value: '{{ Ipv6CidrBlock }}'
      - name: Ipv6IpamPoolId
        value: '{{ Ipv6IpamPoolId }}'
      - name: Ipv6NetmaskLength
        value: '{{ Ipv6NetmaskLength }}'
      - name: SubnetId
        value: '{{ SubnetId }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.subnet_cidr_blocks
WHERE Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>subnet_cidr_blocks</code> resource, the following permissions are required:

### Create
```json
ec2:AssociateSubnetCidrBlock,
ec2:DescribeSubnets
```

### Delete
```json
ec2:DisassociateSubnetCidrBlock,
ec2:DescribeSubnets
```

### List
```json
ec2:DescribeSubnets
```

### Read
```json
ec2:DescribeSubnets
```
