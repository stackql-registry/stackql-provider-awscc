---
title: fuota_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - fuota_tasks
  - iotwireless
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

Creates, updates, deletes or gets a <code>fuota_task</code> resource or lists <code>fuota_tasks</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>fuota_tasks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Create and manage FUOTA tasks.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotwireless.fuota_tasks" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": "Name of FUOTA task"
  },
  {
    "name": "description",
    "type": "string",
    "description": "FUOTA task description"
  },
  {
    "name": "lo_ra_wan",
    "type": "object",
    "description": "FUOTA task LoRaWAN",
    "children": [
      {
        "name": "rf_region",
        "type": "string",
        "description": "Multicast group LoRaWAN RF region"
      },
      {
        "name": "dl_class",
        "type": "string",
        "description": "Multicast group LoRaWAN DL Class"
      },
      {
        "name": "number_of_devices_requested",
        "type": "integer",
        "description": "Multicast group number of devices requested. Returned after successful read."
      },
      {
        "name": "number_of_devices_in_group",
        "type": "integer",
        "description": "Multicast group number of devices in group. Returned after successful read."
      }
    ]
  },
  {
    "name": "firmware_update_image",
    "type": "string",
    "description": "FUOTA task firmware update image binary S3 link"
  },
  {
    "name": "firmware_update_role",
    "type": "string",
    "description": "FUOTA task firmware IAM role for reading S3"
  },
  {
    "name": "arn",
    "type": "string",
    "description": "FUOTA task arn. Returned after successful create."
  },
  {
    "name": "id",
    "type": "string",
    "description": "FUOTA task id. Returned after successful create."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of key-value pairs that contain metadata for the FUOTA task.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "fuota_task_status",
    "type": "string",
    "description": "FUOTA task status. Returned after successful read."
  },
  {
    "name": "associate_wireless_device",
    "type": "string",
    "description": "Wireless device to associate. Only for update request."
  },
  {
    "name": "disassociate_wireless_device",
    "type": "string",
    "description": "Wireless device to disassociate. Only for update request."
  },
  {
    "name": "associate_multicast_group",
    "type": "string",
    "description": "Multicast group to associate. Only for update request."
  },
  {
    "name": "disassociate_multicast_group",
    "type": "string",
    "description": "Multicast group to disassociate. Only for update request."
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
    "description": "FUOTA task id. Returned after successful create."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-fuotatask.html"><code>AWS::IoTWireless::FuotaTask</code></a>.

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
    <td><code>fuota_tasks</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="LoRaWAN, FirmwareUpdateImage, FirmwareUpdateRole, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>fuota_tasks</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>fuota_tasks</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>fuota_tasks_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>fuota_tasks</code></td>
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

Gets all properties from an individual <code>fuota_task</code>.
```sql
SELECT
region,
name,
description,
lo_ra_wan,
firmware_update_image,
firmware_update_role,
arn,
id,
tags,
fuota_task_status,
associate_wireless_device,
disassociate_wireless_device,
associate_multicast_group,
disassociate_multicast_group
FROM awscc.iotwireless.fuota_tasks
WHERE region = 'us-east-1' AND Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>fuota_tasks</code> in a region.
```sql
SELECT
region,
id
FROM awscc.iotwireless.fuota_tasks_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>fuota_task</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iotwireless.fuota_tasks (
 LoRaWAN,
 FirmwareUpdateImage,
 FirmwareUpdateRole,
 region
)
SELECT
'{{ lo_ra_wan }}',
 '{{ firmware_update_image }}',
 '{{ firmware_update_role }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iotwireless.fuota_tasks (
 Name,
 Description,
 LoRaWAN,
 FirmwareUpdateImage,
 FirmwareUpdateRole,
 Tags,
 AssociateWirelessDevice,
 DisassociateWirelessDevice,
 AssociateMulticastGroup,
 DisassociateMulticastGroup,
 region
)
SELECT
 '{{ name }}',
 '{{ description }}',
 '{{ lo_ra_wan }}',
 '{{ firmware_update_image }}',
 '{{ firmware_update_role }}',
 '{{ tags }}',
 '{{ associate_wireless_device }}',
 '{{ disassociate_wireless_device }}',
 '{{ associate_multicast_group }}',
 '{{ disassociate_multicast_group }}',
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
  - name: fuota_task
    props:
      - name: name
        value: '{{ name }}'
      - name: description
        value: '{{ description }}'
      - name: lo_ra_wan
        value:
          rf_region: '{{ rf_region }}'
          dl_class: '{{ dl_class }}'
          number_of_devices_requested: '{{ number_of_devices_requested }}'
          number_of_devices_in_group: '{{ number_of_devices_in_group }}'
      - name: firmware_update_image
        value: '{{ firmware_update_image }}'
      - name: firmware_update_role
        value: '{{ firmware_update_role }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: associate_wireless_device
        value: '{{ associate_wireless_device }}'
      - name: disassociate_wireless_device
        value: '{{ disassociate_wireless_device }}'
      - name: associate_multicast_group
        value: '{{ associate_multicast_group }}'
      - name: disassociate_multicast_group
        value: '{{ disassociate_multicast_group }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>fuota_task</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iotwireless.fuota_tasks
SET PatchDocument = string('{{ {
    "Name": name,
    "Description": description,
    "FirmwareUpdateImage": firmware_update_image,
    "FirmwareUpdateRole": firmware_update_role,
    "Tags": tags,
    "AssociateWirelessDevice": associate_wireless_device,
    "DisassociateWirelessDevice": disassociate_wireless_device,
    "AssociateMulticastGroup": associate_multicast_group,
    "DisassociateMulticastGroup": disassociate_multicast_group
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotwireless.fuota_tasks
WHERE Identifier = '{{ id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>fuota_tasks</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
iotwireless:CreateFuotaTask,
iotwireless:TagResource,
iam:GetRole,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
iotwireless:GetFuotaTask,
iotwireless:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
iam:PassRole,
iotwireless:UpdateFuotaTask,
iotwireless:GetFuotaTask,
iotwireless:TagResource,
iotwireless:UntagResource,
iotwireless:AssociateMulticastGroupWithFuotaTask,
iotwireless:DisassociateMulticastGroupFromFuotaTask,
iotwireless:AssociateWirelessDeviceWithFuotaTask,
iotwireless:DisassociateWirelessDeviceFromFuotaTask
```

</TabItem>
<TabItem value="delete">

```json
iotwireless:DeleteFuotaTask
```

</TabItem>
<TabItem value="list">

```json
iotwireless:ListFuotaTasks,
iotwireless:ListTagsForResource
```

</TabItem>
</Tabs>