---
title: device_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - device_profiles
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

Creates, updates, deletes or gets a <code>device_profile</code> resource or lists <code>device_profiles</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>device_profiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Device Profile's resource schema demonstrating some basic constructs and validation rules.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotwireless.device_profiles" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "name",
    "type": "string",
    "description": "Name of service profile"
  },
  {
    "name": "lo_ra_wan",
    "type": "object",
    "description": "LoRaWANDeviceProfile supports all LoRa specific attributes for service profile for CreateDeviceProfile operation",
    "children": [
      {
        "name": "supports_class_b",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "class_btimeout",
        "type": "integer",
        "description": ""
      },
      {
        "name": "ping_slot_period",
        "type": "integer",
        "description": ""
      },
      {
        "name": "ping_slot_dr",
        "type": "integer",
        "description": ""
      },
      {
        "name": "ping_slot_freq",
        "type": "integer",
        "description": ""
      },
      {
        "name": "supports_class_c",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "class_ctimeout",
        "type": "integer",
        "description": ""
      },
      {
        "name": "mac_version",
        "type": "string",
        "description": ""
      },
      {
        "name": "reg_params_revision",
        "type": "string",
        "description": ""
      },
      {
        "name": "rx_delay1",
        "type": "integer",
        "description": ""
      },
      {
        "name": "rx_dr_offset1",
        "type": "integer",
        "description": ""
      },
      {
        "name": "rx_freq2",
        "type": "integer",
        "description": ""
      },
      {
        "name": "rx_data_rate2",
        "type": "integer",
        "description": ""
      },
      {
        "name": "factory_preset_freqs_list",
        "type": "array",
        "description": ""
      },
      {
        "name": "max_eirp",
        "type": "integer",
        "description": ""
      },
      {
        "name": "max_duty_cycle",
        "type": "integer",
        "description": ""
      },
      {
        "name": "supports_join",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "rf_region",
        "type": "string",
        "description": ""
      },
      {
        "name": "supports32_bit_fcnt",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of key-value pairs that contain metadata for the device profile.",
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
    "description": "Service profile Arn. Returned after successful create."
  },
  {
    "name": "id",
    "type": "string",
    "description": "Service profile Id. Returned after successful create."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-deviceprofile.html"><code>AWS::IoTWireless::DeviceProfile</code></a>.

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
    <td><CopyableCode code=", region" /></td>
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

Gets all properties from an individual <code>device_profile</code>.
```sql
SELECT
region,
name,
lo_ra_wan,
tags,
arn,
id
FROM awscc.iotwireless.device_profiles
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>device_profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iotwireless.device_profiles (
 ,
 region
)
SELECT 
'{{  }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iotwireless.device_profiles (
 Name,
 LoRaWAN,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ LoRaWAN }}',
 '{{ Tags }}',
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
  - name: device_profile
    props:
      - name: Name
        value: '{{ Name }}'
      - name: LoRaWAN
        value:
          SupportsClassB: '{{ SupportsClassB }}'
          ClassBTimeout: '{{ ClassBTimeout }}'
          PingSlotPeriod: '{{ PingSlotPeriod }}'
          PingSlotDr: '{{ PingSlotDr }}'
          PingSlotFreq: '{{ PingSlotFreq }}'
          SupportsClassC: '{{ SupportsClassC }}'
          ClassCTimeout: '{{ ClassCTimeout }}'
          MacVersion: '{{ MacVersion }}'
          RegParamsRevision: '{{ RegParamsRevision }}'
          RxDelay1: '{{ RxDelay1 }}'
          RxDrOffset1: '{{ RxDrOffset1 }}'
          RxFreq2: '{{ RxFreq2 }}'
          RxDataRate2: '{{ RxDataRate2 }}'
          FactoryPresetFreqsList:
            - '{{ FactoryPresetFreqsList[0] }}'
          MaxEirp: '{{ MaxEirp }}'
          MaxDutyCycle: '{{ MaxDutyCycle }}'
          SupportsJoin: '{{ SupportsJoin }}'
          RfRegion: '{{ RfRegion }}'
          Supports32BitFCnt: '{{ Supports32BitFCnt }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotwireless.device_profiles
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>device_profiles</code> resource, the following permissions are required:

### Create
```json
iotwireless:CreateDeviceProfile,
iotwireless:TagResource
```

### Update
```json
iotwireless:GetDeviceProfile,
iotwireless:TagResource,
iotwireless:UntagResource
```

### Read
```json
iotwireless:GetDeviceProfile,
iotwireless:ListTagsForResource
```

### Delete
```json
iotwireless:DeleteDeviceProfile
```

### List
```json
iotwireless:ListDeviceProfiles,
iotwireless:ListTagsForResource
```
