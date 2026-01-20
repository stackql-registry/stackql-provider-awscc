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
<SchemaTable fields={[
  {
    "name": "attachment_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "delete_on_termination",
    "type": "boolean",
    "description": "Whether to delete the network interface when the instance terminates. By default, this value is set to &#96;&#96;true&#96;&#96;."
  },
  {
    "name": "device_index",
    "type": "string",
    "description": "The network interface's position in the attachment order. For example, the first attached network interface has a &#96;&#96;DeviceIndex&#96;&#96; of 0."
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfaceattachment.html"><code>AWS::EC2::NetworkInterfaceAttachment</code></a>.

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
    <td><CopyableCode code="DeviceIndex, InstanceId, NetworkInterfaceId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
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
WHERE region = 'us-east-1' AND data__Identifier = '<AttachmentId>';
```

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
'{{ DeviceIndex }}',
 '{{ InstanceId }}',
 '{{ NetworkInterfaceId }}',
'{{ region }}';
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
 '{{ DeleteOnTermination }}',
 '{{ DeviceIndex }}',
 '{{ InstanceId }}',
 '{{ NetworkInterfaceId }}',
 '{{ EnaSrdSpecification }}',
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
  - name: network_interface_attachment
    props:
      - name: DeleteOnTermination
        value: '{{ DeleteOnTermination }}'
      - name: DeviceIndex
        value: '{{ DeviceIndex }}'
      - name: InstanceId
        value: '{{ InstanceId }}'
      - name: NetworkInterfaceId
        value: '{{ NetworkInterfaceId }}'
      - name: EnaSrdSpecification
        value:
          EnaSrdEnabled: '{{ EnaSrdEnabled }}'
          EnaSrdUdpSpecification:
            EnaSrdUdpEnabled: '{{ EnaSrdUdpEnabled }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.network_interface_attachments
WHERE data__Identifier = '<AttachmentId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>network_interface_attachments</code> resource, the following permissions are required:

### Create
```json
ec2:AttachNetworkInterface,
ec2:DescribeNetworkInterfaces,
ec2:ModifyNetworkInterfaceAttribute
```

### Read
```json
ec2:DescribeNetworkInterfaces
```

### List
```json
ec2:DescribeNetworkInterfaces
```

### Update
```json
ec2:ModifyNetworkInterfaceAttribute,
ec2:DescribeNetworkInterfaces,
ec2:AttachNetworkInterface,
ec2:DetachNetworkInterface
```

### Delete
```json
ec2:DetachNetworkInterface,
ec2:DescribeNetworkInterfaces
```
