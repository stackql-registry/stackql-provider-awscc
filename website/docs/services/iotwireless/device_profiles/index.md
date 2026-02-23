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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
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
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-deviceprofile.html"><code>AWS::IoTWireless::DeviceProfile</code></a>.

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
    <td><code>device_profiles</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code=", region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>device_profiles</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>device_profiles</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>device_profiles_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>device_profiles</code></td>
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
WHERE region = 'us-east-1' AND Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>device_profiles</code> in a region.
```sql
SELECT
region,
id
FROM awscc.iotwireless.device_profiles_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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
 '{{ name }}',
 '{{ lo_ra_wan }}',
 '{{ tags }}',
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
      - name: name
        value: '{{ name }}'
      - name: lo_ra_wan
        value:
          supports_class_b: '{{ supports_class_b }}'
          class_btimeout: '{{ class_btimeout }}'
          ping_slot_period: '{{ ping_slot_period }}'
          ping_slot_dr: '{{ ping_slot_dr }}'
          ping_slot_freq: '{{ ping_slot_freq }}'
          supports_class_c: '{{ supports_class_c }}'
          class_ctimeout: '{{ class_ctimeout }}'
          mac_version: '{{ mac_version }}'
          reg_params_revision: '{{ reg_params_revision }}'
          rx_delay1: '{{ rx_delay1 }}'
          rx_dr_offset1: '{{ rx_dr_offset1 }}'
          rx_freq2: '{{ rx_freq2 }}'
          rx_data_rate2: '{{ rx_data_rate2 }}'
          factory_preset_freqs_list:
            - '{{ factory_preset_freqs_list[0] }}'
          max_eirp: '{{ max_eirp }}'
          max_duty_cycle: '{{ max_duty_cycle }}'
          supports_join: '{{ supports_join }}'
          rf_region: '{{ rf_region }}'
          supports32_bit_fcnt: '{{ supports32_bit_fcnt }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>device_profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iotwireless.device_profiles
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotwireless.device_profiles
WHERE Identifier = '{{ id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>device_profiles</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
iotwireless:CreateDeviceProfile,
iotwireless:TagResource
```

</TabItem>
<TabItem value="update">

```json
iotwireless:GetDeviceProfile,
iotwireless:TagResource,
iotwireless:UntagResource
```

</TabItem>
<TabItem value="read">

```json
iotwireless:GetDeviceProfile,
iotwireless:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
iotwireless:DeleteDeviceProfile
```

</TabItem>
<TabItem value="list">

```json
iotwireless:ListDeviceProfiles,
iotwireless:ListTagsForResource
```

</TabItem>
</Tabs>