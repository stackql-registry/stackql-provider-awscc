---
title: eips
hide_title: false
hide_table_of_contents: false
keywords:
  - eips
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

Creates, updates, deletes or gets an <code>eip</code> resource or lists <code>eips</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>eips</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Specifies an Elastic IP (EIP) address and can, optionally, associate it with an Amazon EC2 instance.<br />You can allocate an Elastic IP address from an address pool owned by AWS or from an address pool created from a public IPv4 address range that you have brought to AWS for use with your AWS resources using bring your own IP addresses (BYOIP). For more information, see &#91;Bring Your Own IP Addresses (BYOIP)&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html) in the &#42;Amazon EC2 User Guide&#42;.<br />For more information, see &#91;Elastic IP Addresses&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html) in the &#42;Amazon EC2 User Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.eips" /></td></tr>
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
    "name": "public_ip",
    "type": "string",
    "description": ""
  },
  {
    "name": "allocation_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "domain",
    "type": "string",
    "description": "The network (&#96;&#96;vpc&#96;&#96;).<br />If you define an Elastic IP address and associate it with a VPC that is defined in the same template, you must declare a dependency on the VPC-gateway attachment by using the &#91;DependsOn Attribute&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) on this resource."
  },
  {
    "name": "network_border_group",
    "type": "string",
    "description": "A unique set of Availability Zones, Local Zones, or Wavelength Zones from which AWS advertises IP addresses. Use this parameter to limit the IP address to this location. IP addresses cannot move between network border groups.<br />Use &#91;DescribeAvailabilityZones&#93;(https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API&#95;DescribeAvailabilityZones.html) to view the network border groups."
  },
  {
    "name": "transfer_address",
    "type": "string",
    "description": "The Elastic IP address you are accepting for transfer. You can only accept one transferred address. For more information on Elastic IP address transfers, see &#91;Transfer Elastic IP addresses&#93;(https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html#transfer-EIPs-intro) in the &#42;Amazon Virtual Private Cloud User Guide&#42;."
  },
  {
    "name": "instance_id",
    "type": "string",
    "description": "The ID of the instance.<br />Updates to the &#96;&#96;InstanceId&#96;&#96; property may require &#42;some interruptions&#42;. Updates on an EIP reassociates the address on its associated resource."
  },
  {
    "name": "public_ipv4_pool",
    "type": "string",
    "description": "The ID of an address pool that you own. Use this parameter to let Amazon EC2 select an address from the address pool.<br />Updates to the &#96;&#96;PublicIpv4Pool&#96;&#96; property may require &#42;some interruptions&#42;. Updates on an EIP reassociates the address on its associated resource."
  },
  {
    "name": "ipam_pool_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "address",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Any tags assigned to the Elastic IP address.<br />Updates to the &#96;&#96;Tags&#96;&#96; property may require &#42;some interruptions&#42;. Updates on an EIP reassociates the address on its associated resource.",
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
    "name": "public_ip",
    "type": "string",
    "description": ""
  },
  {
    "name": "allocation_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-eip.html"><code>AWS::EC2::EIP</code></a>.

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
    <td><code>eips</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>eips</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>eips</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>eips_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>eips</code></td>
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

Gets all properties from an individual <code>eip</code>.
```sql
SELECT
region,
public_ip,
allocation_id,
domain,
network_border_group,
transfer_address,
instance_id,
public_ipv4_pool,
ipam_pool_id,
address,
tags
FROM awscc.ec2.eips
WHERE region = 'us-east-1' AND Identifier = '<PublicIp>|<AllocationId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>eips</code> in a region.
```sql
SELECT
region,
public_ip,
allocation_id
FROM awscc.ec2.eips_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>eip</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.eips (
 Domain,
 NetworkBorderGroup,
 TransferAddress,
 InstanceId,
 PublicIpv4Pool,
 IpamPoolId,
 Address,
 Tags,
 region
)
SELECT 
'{{ Domain }}',
 '{{ NetworkBorderGroup }}',
 '{{ TransferAddress }}',
 '{{ InstanceId }}',
 '{{ PublicIpv4Pool }}',
 '{{ IpamPoolId }}',
 '{{ Address }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.eips (
 Domain,
 NetworkBorderGroup,
 TransferAddress,
 InstanceId,
 PublicIpv4Pool,
 IpamPoolId,
 Address,
 Tags,
 region
)
SELECT 
 '{{ Domain }}',
 '{{ NetworkBorderGroup }}',
 '{{ TransferAddress }}',
 '{{ InstanceId }}',
 '{{ PublicIpv4Pool }}',
 '{{ IpamPoolId }}',
 '{{ Address }}',
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
  - name: eip
    props:
      - name: Domain
        value: '{{ Domain }}'
      - name: NetworkBorderGroup
        value: '{{ NetworkBorderGroup }}'
      - name: TransferAddress
        value: '{{ TransferAddress }}'
      - name: InstanceId
        value: '{{ InstanceId }}'
      - name: PublicIpv4Pool
        value: '{{ PublicIpv4Pool }}'
      - name: IpamPoolId
        value: '{{ IpamPoolId }}'
      - name: Address
        value: '{{ Address }}'
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
UPDATE awscc.ec2.eips
SET PatchDocument = string('{{ {
    "Domain": domain,
    "InstanceId": instance_id,
    "PublicIpv4Pool": public_ipv4_pool,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<PublicIp>|<AllocationId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.eips
WHERE Identifier = '<PublicIp|AllocationId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>eips</code> resource, the following permissions are required:

### Create
```json
ec2:AllocateAddress,
ec2:AcceptAddressTransfer,
ec2:DescribeAddresses,
ec2:AssociateAddress,
ec2:CreateTags
```

### Read
```json
ec2:DescribeAddresses
```

### Delete
```json
ec2:ReleaseAddress,
ec2:DescribeAddresses,
ec2:DisassociateAddress
```

### Update
```json
ec2:DescribeAddresses,
ec2:DisassociateAddress,
ec2:DeleteTags,
ec2:CreateTags,
ec2:AssociateAddress
```

### List
```json
ec2:DescribeAddresses
```
