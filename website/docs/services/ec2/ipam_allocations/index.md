---
title: ipam_allocations
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_allocations
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

Creates, updates, deletes or gets an <code>ipam_allocation</code> resource or lists <code>ipam_allocations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>ipam_allocations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Schema of AWS::EC2::IPAMAllocation Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.ipam_allocations" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "ipam_pool_allocation_id",
    "type": "string",
    "description": "Id of the allocation."
  },
  {
    "name": "ipam_pool_id",
    "type": "string",
    "description": "Id of the IPAM Pool."
  },
  {
    "name": "cidr",
    "type": "string",
    "description": "Represents a single IPv4 or IPv6 CIDR"
  },
  {
    "name": "netmask_length",
    "type": "integer",
    "description": "The desired netmask length of the allocation. If set, IPAM will choose a block of free space with this size and return the CIDR representing it."
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamallocation.html"><code>AWS::EC2::IPAMAllocation</code></a>.

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
    <td><CopyableCode code="IpamPoolId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>ipam_allocation</code>.
```sql
SELECT
region,
ipam_pool_allocation_id,
ipam_pool_id,
cidr,
netmask_length,
description
FROM awscc.ec2.ipam_allocations
WHERE region = 'us-east-1' AND data__Identifier = '<IpamPoolId>|<IpamPoolAllocationId>|<Cidr>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>ipam_allocation</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.ipam_allocations (
 IpamPoolId,
 region
)
SELECT 
'{{ IpamPoolId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.ipam_allocations (
 IpamPoolId,
 Cidr,
 NetmaskLength,
 Description,
 region
)
SELECT 
 '{{ IpamPoolId }}',
 '{{ Cidr }}',
 '{{ NetmaskLength }}',
 '{{ Description }}',
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
  - name: ipam_allocation
    props:
      - name: IpamPoolId
        value: '{{ IpamPoolId }}'
      - name: Cidr
        value: '{{ Cidr }}'
      - name: NetmaskLength
        value: '{{ NetmaskLength }}'
      - name: Description
        value: '{{ Description }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.ipam_allocations
WHERE data__Identifier = '<IpamPoolId|IpamPoolAllocationId|Cidr>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>ipam_allocations</code> resource, the following permissions are required:

### Create
```json
ec2:AllocateIpamPoolCidr,
ec2:GetIpamPoolAllocations
```

### Read
```json
ec2:GetIpamPoolAllocations
```

### Delete
```json
ec2:ReleaseIpamPoolAllocation
```

### List
```json
ec2:GetIpamPoolAllocations
```
