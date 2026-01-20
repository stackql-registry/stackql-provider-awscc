---
title: eip_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - eip_associations
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

Creates, updates, deletes or gets an <code>eip_association</code> resource or lists <code>eip_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>eip_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Associates an Elastic IP address with an instance or a network interface. Before you can use an Elastic IP address, you must allocate it to your account. For more information about working with Elastic IP addresses, see &#91;Elastic IP address concepts and rules&#93;(https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html#vpc-eip-overview).<br />You must specify &#96;&#96;AllocationId&#96;&#96; and either &#96;&#96;InstanceId&#96;&#96;, &#96;&#96;NetworkInterfaceId&#96;&#96;, or &#96;&#96;PrivateIpAddress&#96;&#96;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.eip_associations" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "private_ip_address",
    "type": "string",
    "description": "The primary or secondary private IP address to associate with the Elastic IP address. If no private IP address is specified, the Elastic IP address is associated with the primary private IP address."
  },
  {
    "name": "instance_id",
    "type": "string",
    "description": "The ID of the instance. The instance must have exactly one attached network interface. You can specify either the instance ID or the network interface ID, but not both."
  },
  {
    "name": "allocation_id",
    "type": "string",
    "description": "The allocation ID. This is required."
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "network_interface_id",
    "type": "string",
    "description": "The ID of the network interface. If the instance has more than one network interface, you must specify a network interface ID.<br />You can specify either the instance ID or the network interface ID, but not both."
  },
  {
    "name": "e_ip",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-eipassociation.html"><code>AWS::EC2::EIPAssociation</code></a>.

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
    <td><CopyableCode code="region" /></td>
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

Gets all properties from an individual <code>eip_association</code>.
```sql
SELECT
region,
private_ip_address,
instance_id,
allocation_id,
id,
network_interface_id,
e_ip
FROM awscc.ec2.eip_associations
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>eip_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.eip_associations (
 PrivateIpAddress,
 InstanceId,
 AllocationId,
 NetworkInterfaceId,
 EIP,
 region
)
SELECT 
'{{ PrivateIpAddress }}',
 '{{ InstanceId }}',
 '{{ AllocationId }}',
 '{{ NetworkInterfaceId }}',
 '{{ EIP }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.eip_associations (
 PrivateIpAddress,
 InstanceId,
 AllocationId,
 NetworkInterfaceId,
 EIP,
 region
)
SELECT 
 '{{ PrivateIpAddress }}',
 '{{ InstanceId }}',
 '{{ AllocationId }}',
 '{{ NetworkInterfaceId }}',
 '{{ EIP }}',
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
  - name: eip_association
    props:
      - name: PrivateIpAddress
        value: '{{ PrivateIpAddress }}'
      - name: InstanceId
        value: '{{ InstanceId }}'
      - name: AllocationId
        value: '{{ AllocationId }}'
      - name: NetworkInterfaceId
        value: '{{ NetworkInterfaceId }}'
      - name: EIP
        value: '{{ EIP }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.eip_associations
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>eip_associations</code> resource, the following permissions are required:

### Read
```json
ec2:DescribeAddresses
```

### Create
```json
ec2:DescribeAddresses,
ec2:AssociateAddress
```

### List
```json
ec2:DescribeAddresses
```

### Delete
```json
ec2:DisassociateAddress,
ec2:DescribeAddresses
```
