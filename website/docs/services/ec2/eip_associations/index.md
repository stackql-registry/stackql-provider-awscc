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
<tr><td><b>Description</b></td><td><details><summary>Associates an Elastic IP address with an instance or a network interface. Before you can use an Elastic IP address, you must allocate it to your account. For more information about working with Elastic IP addresses, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html#vpc-eip-overview">Elastic IP address concepts and rules</a>.</summary>You must specify <code>AllocationId</code> and either <code>InstanceId</code>, <code>NetworkInterfaceId</code>, or <code>PrivateIpAddress</code>.</details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.eip_associations" /></td></tr>
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
    "description": "<details><summary>The ID of the network interface. If the instance has more than one network interface, you must specify a network interface ID.</summary>You can specify either the instance ID or the network interface ID, but not both.</details>"
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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-eipassociation.html"><code>AWS::EC2::EIPAssociation</code></a>.

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
    <td><code>eip_associations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>eip_associations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>eip_associations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>eip_associations</code></td>
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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>eip_associations</code> in a region.
```sql
SELECT
  region,
  id
FROM awscc.ec2.eip_associations_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

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
  '{{ private_ip_address }}',
  '{{ instance_id }}',
  '{{ allocation_id }}',
  '{{ network_interface_id }}',
  '{{ e_ip }}',
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
INSERT INTO awscc.ec2.eip_associations (
  PrivateIpAddress,
  InstanceId,
  AllocationId,
  NetworkInterfaceId,
  EIP,
  region
)
SELECT
  '{{ private_ip_address }}',
  '{{ instance_id }}',
  '{{ allocation_id }}',
  '{{ network_interface_id }}',
  '{{ e_ip }}',
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
  - name: eip_association
    props:
      - name: private_ip_address
        value: '{{ private_ip_address }}'
      - name: instance_id
        value: '{{ instance_id }}'
      - name: allocation_id
        value: '{{ allocation_id }}'
      - name: network_interface_id
        value: '{{ network_interface_id }}'
      - name: e_ip
        value: '{{ e_ip }}'
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.eip_associations
WHERE
  Identifier = '{{ id }}' AND
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

To operate on the <code>eip_associations</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="read">

```json
ec2:DescribeAddresses
```

</TabItem>
<TabItem value="create">

```json
ec2:DescribeAddresses,
ec2:AssociateAddress
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeAddresses
```

</TabItem>
<TabItem value="delete">

```json
ec2:DisassociateAddress,
ec2:DescribeAddresses
```

</TabItem>
</Tabs>