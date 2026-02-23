---
title: ipam_pool_cidrs
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_pool_cidrs
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

Creates, updates, deletes or gets an <code>ipam_pool_cidr</code> resource or lists <code>ipam_pool_cidrs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>ipam_pool_cidrs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Schema of AWS::EC2::IPAMPoolCidr Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.ipam_pool_cidrs" /></td></tr>
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
    "name": "ipam_pool_cidr_id",
    "type": "string",
    "description": "Id of the IPAM Pool Cidr."
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
    "description": "The desired netmask length of the provision. If set, IPAM will choose a block of free space with this size and return the CIDR representing it."
  },
  {
    "name": "state",
    "type": "string",
    "description": "Provisioned state of the cidr."
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
    "name": "ipam_pool_cidr_id",
    "type": "string",
    "description": "Id of the IPAM Pool Cidr."
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipampoolcidr.html"><code>AWS::EC2::IPAMPoolCidr</code></a>.

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
    <td><code>ipam_pool_cidrs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="IpamPoolId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>ipam_pool_cidrs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>ipam_pool_cidrs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>ipam_pool_cidrs</code></td>
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

Gets all properties from an individual <code>ipam_pool_cidr</code>.
```sql
SELECT
region,
ipam_pool_cidr_id,
ipam_pool_id,
cidr,
netmask_length,
state
FROM awscc.ec2.ipam_pool_cidrs
WHERE region = 'us-east-1' AND Identifier = '{{ ipam_pool_id }}|{{ ipam_pool_cidr_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>ipam_pool_cidrs</code> in a region.
```sql
SELECT
region,
ipam_pool_id,
ipam_pool_cidr_id
FROM awscc.ec2.ipam_pool_cidrs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>ipam_pool_cidr</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.ipam_pool_cidrs (
 IpamPoolId,
 region
)
SELECT
'{{ ipam_pool_id }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.ipam_pool_cidrs (
 IpamPoolId,
 Cidr,
 NetmaskLength,
 region
)
SELECT
 '{{ ipam_pool_id }}',
 '{{ cidr }}',
 '{{ netmask_length }}',
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
  - name: ipam_pool_cidr
    props:
      - name: ipam_pool_id
        value: '{{ ipam_pool_id }}'
      - name: cidr
        value: '{{ cidr }}'
      - name: netmask_length
        value: '{{ netmask_length }}'
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.ipam_pool_cidrs
WHERE Identifier = '{{ ipam_pool_id }}|{{ ipam_pool_cidr_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>ipam_pool_cidrs</code> resource, the following permissions are required:

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
ec2:ProvisionIpamPoolCidr,
ec2:GetIpamPoolCidrs
```

</TabItem>
<TabItem value="read">

```json
ec2:GetIpamPoolCidrs
```

</TabItem>
<TabItem value="delete">

```json
ec2:DeprovisionIpamPoolCidr,
ec2:GetIpamPoolCidrs
```

</TabItem>
<TabItem value="list">

```json
ec2:GetIpamPoolCidrs
```

</TabItem>
</Tabs>