---
title: wireless_devices
hide_title: false
hide_table_of_contents: false
keywords:
  - wireless_devices
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

Creates, updates, deletes or gets a <code>wireless_device</code> resource or lists <code>wireless_devices</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>wireless_devices</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Create and manage wireless gateways, including LoRa gateways.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotwireless.wireless_devices" /></td></tr>
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
    "name": "type",
    "type": "string",
    "description": "Wireless device type, currently only Sidewalk and LoRa"
  },
  {
    "name": "name",
    "type": "string",
    "description": "Wireless device name"
  },
  {
    "name": "description",
    "type": "string",
    "description": "Wireless device description"
  },
  {
    "name": "destination_name",
    "type": "string",
    "description": "Wireless device destination name"
  },
  {
    "name": "lo_ra_wan",
    "type": "object",
    "description": "The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Device.",
    "children": [
      {
        "name": "dev_eui",
        "type": "string",
        "description": ""
      },
      {
        "name": "device_profile_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "service_profile_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "otaa_v11",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "app_key",
            "type": "string",
            "description": ""
          },
          {
            "name": "nwk_key",
            "type": "string",
            "description": ""
          },
          {
            "name": "join_eui",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "otaa_v10x",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "app_key",
            "type": "string",
            "description": ""
          },
          {
            "name": "app_eui",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "abp_v11",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "dev_addr",
            "type": "string",
            "description": ""
          },
          {
            "name": "session_keys",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "f_nwk_sint_key",
                "type": "string",
                "description": ""
              },
              {
                "name": "s_nwk_sint_key",
                "type": "string",
                "description": ""
              },
              {
                "name": "nwk_senc_key",
                "type": "string",
                "description": ""
              },
              {
                "name": "app_skey",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "abp_v10x",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "dev_addr",
            "type": "string",
            "description": ""
          },
          {
            "name": "session_keys",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "nwk_skey",
                "type": "string",
                "description": ""
              },
              {
                "name": "app_skey",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "f_ports",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "applications",
            "type": "array",
            "description": "A list of optional LoRaWAN application information, which can be used for geolocation.",
            "children": [
              {
                "name": "destination_name",
                "type": "string",
                "description": "The name of the position data destination that describes the AWS IoT rule that processes the device's position data for use by AWS IoT Core for LoRaWAN."
              },
              {
                "name": "f_port",
                "type": "integer",
                "description": "The Fport value."
              },
              {
                "name": "type",
                "type": "string",
                "description": "Application type, which can be specified to obtain real-time position information of your LoRaWAN device."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of key-value pairs that contain metadata for the device. Currently not supported, will not create if tags are passed.",
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
    "name": "arn",
    "type": "string",
    "description": "Wireless device arn. Returned after successful create."
  },
  {
    "name": "id",
    "type": "string",
    "description": "Wireless device Id. Returned after successful create."
  },
  {
    "name": "thing_arn",
    "type": "string",
    "description": "Thing arn. Passed into update to associate Thing with Wireless device."
  },
  {
    "name": "thing_name",
    "type": "string",
    "description": "Thing Arn. If there is a Thing created, this can be returned with a Get call."
  },
  {
    "name": "last_uplink_received_at",
    "type": "string",
    "description": "The date and time when the most recent uplink was received."
  },
  {
    "name": "positioning",
    "type": "string",
    "description": "FPort values for the GNSS, stream, and ClockSync functions of the positioning information."
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
    "description": "Wireless device Id. Returned after successful create."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdevice.html"><code>AWS::IoTWireless::WirelessDevice</code></a>.

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
    <td><code>wireless_devices</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Type, DestinationName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>wireless_devices</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>wireless_devices</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>wireless_devices_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>wireless_devices</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>wireless_device</code>.
```sql
SELECT
region,
type,
name,
description,
destination_name,
lo_ra_wan,
tags,
arn,
id,
thing_arn,
thing_name,
last_uplink_received_at,
positioning
FROM awscc.iotwireless.wireless_devices
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>wireless_devices</code> in a region.
```sql
SELECT
region,
id
FROM awscc.iotwireless.wireless_devices_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>wireless_device</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iotwireless.wireless_devices (
 Type,
 DestinationName,
 region
)
SELECT 
'{{ Type }}',
 '{{ DestinationName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iotwireless.wireless_devices (
 Type,
 Name,
 Description,
 DestinationName,
 LoRaWAN,
 Tags,
 ThingArn,
 LastUplinkReceivedAt,
 Positioning,
 region
)
SELECT 
 '{{ Type }}',
 '{{ Name }}',
 '{{ Description }}',
 '{{ DestinationName }}',
 '{{ LoRaWAN }}',
 '{{ Tags }}',
 '{{ ThingArn }}',
 '{{ LastUplinkReceivedAt }}',
 '{{ Positioning }}',
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
  - name: wireless_device
    props:
      - name: Type
        value: '{{ Type }}'
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: DestinationName
        value: '{{ DestinationName }}'
      - name: LoRaWAN
        value:
          DevEui: '{{ DevEui }}'
          DeviceProfileId: '{{ DeviceProfileId }}'
          ServiceProfileId: '{{ ServiceProfileId }}'
          OtaaV11:
            AppKey: '{{ AppKey }}'
            NwkKey: '{{ NwkKey }}'
            JoinEui: '{{ JoinEui }}'
          OtaaV10x:
            AppKey: '{{ AppKey }}'
            AppEui: '{{ AppEui }}'
          AbpV11:
            DevAddr: '{{ DevAddr }}'
            SessionKeys:
              FNwkSIntKey: '{{ FNwkSIntKey }}'
              SNwkSIntKey: '{{ SNwkSIntKey }}'
              NwkSEncKey: '{{ NwkSEncKey }}'
              AppSKey: '{{ AppSKey }}'
          AbpV10x:
            DevAddr: '{{ DevAddr }}'
            SessionKeys:
              NwkSKey: '{{ NwkSKey }}'
              AppSKey: '{{ AppSKey }}'
          FPorts:
            Applications:
              - DestinationName: '{{ DestinationName }}'
                FPort: '{{ FPort }}'
                Type: '{{ Type }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: ThingArn
        value: '{{ ThingArn }}'
      - name: LastUplinkReceivedAt
        value: '{{ LastUplinkReceivedAt }}'
      - name: Positioning
        value: '{{ Positioning }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.iotwireless.wireless_devices
SET data__PatchDocument = string('{{ {
    "Type": type,
    "Name": name,
    "Description": description,
    "DestinationName": destination_name,
    "LoRaWAN": lo_ra_wan,
    "Tags": tags,
    "ThingArn": thing_arn,
    "LastUplinkReceivedAt": last_uplink_received_at,
    "Positioning": positioning
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotwireless.wireless_devices
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>wireless_devices</code> resource, the following permissions are required:

### Create
```json
iotwireless:CreateWirelessDevice,
iotwireless:TagResource
```

### Read
```json
iotwireless:GetWirelessDevice,
iotwireless:ListTagsForResource
```

### Update
```json
iotwireless:UpdateWirelessDevice,
iotwireless:GetWirelessDevice,
iotwireless:AssociateWirelessDeviceWithThing,
iotwireless:TagResource,
iotwireless:UntagResource
```

### Delete
```json
iotwireless:DeleteWirelessDevice,
iotwireless:DisassociateWirelessDeviceFromThing
```

### List
```json
iotwireless:ListWirelessDevices,
iotwireless:ListTagsForResource
```
