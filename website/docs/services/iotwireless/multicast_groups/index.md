---
title: multicast_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - multicast_groups
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

Creates, updates, deletes or gets a <code>multicast_group</code> resource or lists <code>multicast_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>multicast_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Create and manage Multicast groups.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotwireless.multicast_groups" /></td></tr>
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
    "description": "Name of Multicast group"
  },
  {
    "name": "description",
    "type": "string",
    "description": "Multicast group description"
  },
  {
    "name": "lo_ra_wan",
    "type": "object",
    "description": "Multicast group LoRaWAN",
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
    "name": "arn",
    "type": "string",
    "description": "Multicast group arn. Returned after successful create."
  },
  {
    "name": "id",
    "type": "string",
    "description": "Multicast group id. Returned after successful create."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of key-value pairs that contain metadata for the Multicast group.",
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
    "name": "status",
    "type": "string",
    "description": "Multicast group status. Returned after successful read."
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
    "description": "Multicast group id. Returned after successful create."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-multicastgroup.html"><code>AWS::IoTWireless::MulticastGroup</code></a>.

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
    <td><code>multicast_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="LoRaWAN, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>multicast_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>multicast_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>multicast_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>multicast_groups</code></td>
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

Gets all properties from an individual <code>multicast_group</code>.
```sql
SELECT
region,
name,
description,
lo_ra_wan,
arn,
id,
tags,
status,
associate_wireless_device,
disassociate_wireless_device
FROM awscc.iotwireless.multicast_groups
WHERE region = 'us-east-1' AND Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>multicast_groups</code> in a region.
```sql
SELECT
region,
id
FROM awscc.iotwireless.multicast_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>multicast_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iotwireless.multicast_groups (
 LoRaWAN,
 region
)
SELECT 
'{{ LoRaWAN }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iotwireless.multicast_groups (
 Name,
 Description,
 LoRaWAN,
 Tags,
 AssociateWirelessDevice,
 DisassociateWirelessDevice,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Description }}',
 '{{ LoRaWAN }}',
 '{{ Tags }}',
 '{{ AssociateWirelessDevice }}',
 '{{ DisassociateWirelessDevice }}',
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
  - name: multicast_group
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: LoRaWAN
        value:
          RfRegion: '{{ RfRegion }}'
          DlClass: '{{ DlClass }}'
          NumberOfDevicesRequested: '{{ NumberOfDevicesRequested }}'
          NumberOfDevicesInGroup: '{{ NumberOfDevicesInGroup }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: AssociateWirelessDevice
        value: '{{ AssociateWirelessDevice }}'
      - name: DisassociateWirelessDevice
        value: '{{ DisassociateWirelessDevice }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.iotwireless.multicast_groups
SET PatchDocument = string('{{ {
    "Name": name,
    "Description": description,
    "Tags": tags,
    "AssociateWirelessDevice": associate_wireless_device,
    "DisassociateWirelessDevice": disassociate_wireless_device
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotwireless.multicast_groups
WHERE Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>multicast_groups</code> resource, the following permissions are required:

### Create
```json
iotwireless:CreateMulticastGroup,
iotwireless:TagResource
```

### Read
```json
iotwireless:GetMulticastGroup,
iotwireless:ListTagsForResource
```

### Update
```json
iotwireless:UpdateMulticastGroup,
iotwireless:GetMulticastGroup,
iotwireless:TagResource,
iotwireless:UntagResource,
iotwireless:AssociateWirelessDeviceWithMulticastGroup,
iotwireless:DisassociateWirelessDeviceFromMulticastGroup
```

### Delete
```json
iotwireless:DeleteMulticastGroup
```

### List
```json
iotwireless:ListMulticastGroups,
iotwireless:ListTagsForResource
```
