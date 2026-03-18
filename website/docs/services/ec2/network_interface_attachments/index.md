---
title: network_interface_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - network_interface_attachments
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

Creates, updates, deletes or gets a <code>network_interface_attachment</code> resource or lists <code>network_interface_attachments</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>network_interface_attachments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Attaches an elastic network interface (ENI) to an Amazon EC2 instance. You can use this resource type to attach additional network interfaces to an instance without interruption.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.network_interface_attachments" /></td></tr>
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
    "name": "attachment_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "delete_on_termination",
    "type": "boolean",
    "description": "Whether to delete the network interface when the instance terminates. By default, this value is set to <code>true</code>."
  },
  {
    "name": "device_index",
    "type": "string",
    "description": "The network interface's position in the attachment order. For example, the first attached network interface has a <code>DeviceIndex</code> of 0."
  },
  {
    "name": "instance_id",
    "type": "string",
    "description": "The ID of the instance to which you will attach the ENI."
  },
  {
    "name": "network_interface_id",
    "type": "string",
    "description": "The ID of the ENI that you want to attach."
  },
  {
    "name": "ena_srd_specification",
    "type": "object",
    "description": "Configures ENA Express for the network interface that this action attaches to the instance.",
    "children": [
      {
        "name": "ena_srd_enabled",
        "type": "boolean",
        "description": "Indicates whether ENA Express is enabled for the network interface."
      },
      {
        "name": "ena_srd_udp_specification",
        "type": "object",
        "description": "Configures ENA Express for UDP network traffic.",
        "children": [
          {
            "name": "ena_srd_udp_enabled",
            "type": "boolean",
            "description": ""
          }
        ]
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
    "name": "attachment_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfaceattachment.html"><code>AWS::EC2::NetworkInterfaceAttachment</code></a>.

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
    <td><code>network_interface_attachments</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DeviceIndex, InstanceId, NetworkInterfaceId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>network_interface_attachments</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>network_interface_attachments</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>network_interface_attachments_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>network_interface_attachments</code></td>
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

Gets all properties from an individual <code>network_interface_attachment</code>.
```sql
SELECT
  region,
  attachment_id,
  delete_on_termination,
  device_index,
  instance_id,
  network_interface_id,
  ena_srd_specification
FROM awscc.ec2.network_interface_attachments
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ attachment_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>network_interface_attachments</code> in a region.
```sql
SELECT
  region,
  attachment_id
FROM awscc.ec2.network_interface_attachments_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>network_interface_attachment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.network_interface_attachments (
  DeviceIndex,
  InstanceId,
  NetworkInterfaceId,
  region
)
SELECT
  '{{ device_index }}',
  '{{ instance_id }}',
  '{{ network_interface_id }}',
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
INSERT INTO awscc.ec2.network_interface_attachments (
  DeleteOnTermination,
  DeviceIndex,
  InstanceId,
  NetworkInterfaceId,
  EnaSrdSpecification,
  region
)
SELECT
  '{{ delete_on_termination }}',
  '{{ device_index }}',
  '{{ instance_id }}',
  '{{ network_interface_id }}',
  '{{ ena_srd_specification }}',
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
  - name: network_interface_attachment
    props:
      - name: delete_on_termination
        value: '{{ delete_on_termination }}'
      - name: device_index
        value: '{{ device_index }}'
      - name: instance_id
        value: '{{ instance_id }}'
      - name: network_interface_id
        value: '{{ network_interface_id }}'
      - name: ena_srd_specification
        value:
          ena_srd_enabled: '{{ ena_srd_enabled }}'
          ena_srd_udp_specification:
            ena_srd_udp_enabled: '{{ ena_srd_udp_enabled }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>network_interface_attachment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.network_interface_attachments
SET PatchDocument = string('{{ {
    "DeleteOnTermination": delete_on_termination,
    "EnaSrdSpecification": ena_srd_specification
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ attachment_id }}'
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
DELETE FROM awscc.ec2.network_interface_attachments
WHERE
  Identifier = '{{ attachment_id }}' AND
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

To operate on the <code>network_interface_attachments</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'List', value: 'list', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="create">

```json
ec2:AttachNetworkInterface,
ec2:DescribeNetworkInterfaces,
ec2:ModifyNetworkInterfaceAttribute
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeNetworkInterfaces
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeNetworkInterfaces
```

</TabItem>
<TabItem value="update">

```json
ec2:ModifyNetworkInterfaceAttribute,
ec2:DescribeNetworkInterfaces,
ec2:AttachNetworkInterface,
ec2:DetachNetworkInterface
```

</TabItem>
<TabItem value="delete">

```json
ec2:DetachNetworkInterface,
ec2:DescribeNetworkInterfaces
```

</TabItem>
</Tabs>