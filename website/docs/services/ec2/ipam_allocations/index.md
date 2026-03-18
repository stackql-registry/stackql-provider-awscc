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
</TabItem>
<TabItem value="list">

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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamallocation.html"><code>AWS::EC2::IPAMAllocation</code></a>.

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
    <td><code>ipam_allocations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="IpamPoolId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>ipam_allocations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>ipam_allocations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>ipam_allocations</code></td>
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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ ipam_pool_id }}|{{ ipam_pool_allocation_id }}|{{ cidr }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>ipam_allocations</code> in a region.
```sql
SELECT
  region,
  ipam_pool_id,
  ipam_pool_allocation_id,
  cidr
FROM awscc.ec2.ipam_allocations_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

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
  '{{ ipam_pool_id }}',
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
INSERT INTO awscc.ec2.ipam_allocations (
  IpamPoolId,
  Cidr,
  NetmaskLength,
  Description,
  region
)
SELECT
  '{{ ipam_pool_id }}',
  '{{ cidr }}',
  '{{ netmask_length }}',
  '{{ description }}',
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
      - name: ipam_pool_id
        value: '{{ ipam_pool_id }}'
      - name: cidr
        value: '{{ cidr }}'
      - name: netmask_length
        value: '{{ netmask_length }}'
      - name: description
        value: '{{ description }}'
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.ipam_allocations
WHERE
  Identifier = '{{ ipam_pool_id }}|{{ ipam_pool_allocation_id }}|{{ cidr }}' AND
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

To operate on the <code>ipam_allocations</code> resource, the following permissions are required:

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
ec2:AllocateIpamPoolCidr,
ec2:GetIpamPoolAllocations
```

</TabItem>
<TabItem value="read">

```json
ec2:GetIpamPoolAllocations
```

</TabItem>
<TabItem value="delete">

```json
ec2:ReleaseIpamPoolAllocation
```

</TabItem>
<TabItem value="list">

```json
ec2:GetIpamPoolAllocations
```

</TabItem>
</Tabs>