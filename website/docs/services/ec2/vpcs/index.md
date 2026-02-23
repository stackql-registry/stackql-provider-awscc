---
title: vpcs
hide_title: false
hide_table_of_contents: false
keywords:
  - vpcs
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

Creates, updates, deletes or gets a <code>vpc</code> resource or lists <code>vpcs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vpcs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Specifies a virtual private cloud (VPC).<br />To add an IPv6 CIDR block to the VPC, see &#91;AWS::EC2::VPCCidrBlock&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpccidrblock.html).<br />For more information, see &#91;Virtual private clouds (VPC)&#93;(https://docs.aws.amazon.com/vpc/latest/userguide/configure-your-vpc.html) in the &#42;Amazon VPC User Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.vpcs" /></td></tr>
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
    "name": "vpc_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "instance_tenancy",
    "type": "string",
    "description": "The allowed tenancy of instances launched into the VPC.<br />+ &#96;&#96;default&#96;&#96;: An instance launched into the VPC runs on shared hardware by default, unless you explicitly specify a different tenancy during instance launch.<br />+ &#96;&#96;dedicated&#96;&#96;: An instance launched into the VPC runs on dedicated hardware by default, unless you explicitly specify a tenancy of &#96;&#96;host&#96;&#96; during instance launch. You cannot specify a tenancy of &#96;&#96;default&#96;&#96; during instance launch.<br /><br />Updating &#96;&#96;InstanceTenancy&#96;&#96; requires no replacement only if you are updating its value from &#96;&#96;dedicated&#96;&#96; to &#96;&#96;default&#96;&#96;. Updating &#96;&#96;InstanceTenancy&#96;&#96; from &#96;&#96;default&#96;&#96; to &#96;&#96;dedicated&#96;&#96; requires replacement."
  },
  {
    "name": "ipv4_netmask_length",
    "type": "integer",
    "description": "The netmask length of the IPv4 CIDR you want to allocate to this VPC from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see &#91;What is IPAM?&#93;(https://docs.aws.amazon.com//vpc/latest/ipam/what-is-it-ipam.html) in the &#42;Amazon VPC IPAM User Guide&#42;."
  },
  {
    "name": "cidr_block_associations",
    "type": "array",
    "description": ""
  },
  {
    "name": "cidr_block",
    "type": "string",
    "description": "The IPv4 network range for the VPC, in CIDR notation. For example, &#96;&#96;10.0.0.0/16&#96;&#96;. We modify the specified CIDR block to its canonical form; for example, if you specify &#96;&#96;100.68.0.18/18&#96;&#96;, we modify it to &#96;&#96;100.68.0.0/18&#96;&#96;.<br />You must specify either&#96;&#96;CidrBlock&#96;&#96; or &#96;&#96;Ipv4IpamPoolId&#96;&#96;."
  },
  {
    "name": "ipv4_ipam_pool_id",
    "type": "string",
    "description": "The ID of an IPv4 IPAM pool you want to use for allocating this VPC's CIDR. For more information, see &#91;What is IPAM?&#93;(https://docs.aws.amazon.com//vpc/latest/ipam/what-is-it-ipam.html) in the &#42;Amazon VPC IPAM User Guide&#42;.<br />You must specify either&#96;&#96;CidrBlock&#96;&#96; or &#96;&#96;Ipv4IpamPoolId&#96;&#96;."
  },
  {
    "name": "default_network_acl",
    "type": "string",
    "description": ""
  },
  {
    "name": "enable_dns_support",
    "type": "boolean",
    "description": "Indicates whether the DNS resolution is supported for the VPC. If enabled, queries to the Amazon provided DNS server at the 169.254.169.253 IP address, or the reserved IP address at the base of the VPC network range \"plus two\" succeed. If disabled, the Amazon provided DNS service in the VPC that resolves public DNS hostnames to IP addresses is not enabled. Enabled by default. For more information, see &#91;DNS attributes in your VPC&#93;(https://docs.aws.amazon.com/vpc/latest/userguide/vpc-dns.html#vpc-dns-support)."
  },
  {
    "name": "ipv6_cidr_blocks",
    "type": "array",
    "description": ""
  },
  {
    "name": "default_security_group",
    "type": "string",
    "description": ""
  },
  {
    "name": "enable_dns_hostnames",
    "type": "boolean",
    "description": "Indicates whether the instances launched in the VPC get DNS hostnames. If enabled, instances in the VPC get DNS hostnames; otherwise, they do not. Disabled by default for nondefault VPCs. For more information, see &#91;DNS attributes in your VPC&#93;(https://docs.aws.amazon.com/vpc/latest/userguide/vpc-dns.html#vpc-dns-support).<br />You can only enable DNS hostnames if you've enabled DNS support."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags for the VPC.",
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
    "name": "vpc_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc.html"><code>AWS::EC2::VPC</code></a>.

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
    <td><code>vpcs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>vpcs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>vpcs</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>vpcs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>vpcs</code></td>
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

Gets all properties from an individual <code>vpc</code>.
```sql
SELECT
region,
vpc_id,
instance_tenancy,
ipv4_netmask_length,
cidr_block_associations,
cidr_block,
ipv4_ipam_pool_id,
default_network_acl,
enable_dns_support,
ipv6_cidr_blocks,
default_security_group,
enable_dns_hostnames,
tags
FROM awscc.ec2.vpcs
WHERE region = 'us-east-1' AND Identifier = '{{ vpc_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>vpcs</code> in a region.
```sql
SELECT
region,
vpc_id
FROM awscc.ec2.vpcs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>vpc</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.vpcs (
 InstanceTenancy,
 Ipv4NetmaskLength,
 CidrBlock,
 Ipv4IpamPoolId,
 EnableDnsSupport,
 EnableDnsHostnames,
 Tags,
 region
)
SELECT
'{{ instance_tenancy }}',
 '{{ ipv4_netmask_length }}',
 '{{ cidr_block }}',
 '{{ ipv4_ipam_pool_id }}',
 '{{ enable_dns_support }}',
 '{{ enable_dns_hostnames }}',
 '{{ tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.vpcs (
 InstanceTenancy,
 Ipv4NetmaskLength,
 CidrBlock,
 Ipv4IpamPoolId,
 EnableDnsSupport,
 EnableDnsHostnames,
 Tags,
 region
)
SELECT
 '{{ instance_tenancy }}',
 '{{ ipv4_netmask_length }}',
 '{{ cidr_block }}',
 '{{ ipv4_ipam_pool_id }}',
 '{{ enable_dns_support }}',
 '{{ enable_dns_hostnames }}',
 '{{ tags }}',
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
  - name: vpc
    props:
      - name: instance_tenancy
        value: '{{ instance_tenancy }}'
      - name: ipv4_netmask_length
        value: '{{ ipv4_netmask_length }}'
      - name: cidr_block
        value: '{{ cidr_block }}'
      - name: ipv4_ipam_pool_id
        value: '{{ ipv4_ipam_pool_id }}'
      - name: enable_dns_support
        value: '{{ enable_dns_support }}'
      - name: enable_dns_hostnames
        value: '{{ enable_dns_hostnames }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>vpc</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.vpcs
SET PatchDocument = string('{{ {
    "InstanceTenancy": instance_tenancy,
    "EnableDnsSupport": enable_dns_support,
    "EnableDnsHostnames": enable_dns_hostnames,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ vpc_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.vpcs
WHERE Identifier = '{{ vpc_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>vpcs</code> resource, the following permissions are required:

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
ec2:DescribeVpcs,
ec2:DescribeSecurityGroups,
ec2:DescribeNetworkAcls,
ec2:DescribeVpcAttribute
```

</TabItem>
<TabItem value="create">

```json
ec2:CreateVpc,
ec2:DescribeVpcs,
ec2:DescribeVpcAttribute,
ec2:ModifyVpcAttribute,
ec2:CreateTags
```

</TabItem>
<TabItem value="update">

```json
ec2:CreateTags,
ec2:ModifyVpcAttribute,
ec2:DescribeVpcAttribute,
ec2:DeleteTags,
ec2:ModifyVpcTenancy
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeVpcs
```

</TabItem>
<TabItem value="delete">

```json
ec2:DeleteVpc,
ec2:DescribeVpcs
```

</TabItem>
</Tabs>