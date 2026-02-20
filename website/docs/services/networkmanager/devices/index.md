---
title: devices
hide_title: false
hide_table_of_contents: false
keywords:
  - devices
  - networkmanager
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

Creates, updates, deletes or gets a <code>device</code> resource or lists <code>devices</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>devices</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::NetworkManager::Device type describes a device.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.networkmanager.devices" /></td></tr>
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
    "name": "device_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the device."
  },
  {
    "name": "device_id",
    "type": "string",
    "description": "The ID of the device."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the device."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags for the device.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "global_network_id",
    "type": "string",
    "description": "The ID of the global network."
  },
  {
    "name": "aws_location",
    "type": "object",
    "description": "The Amazon Web Services location of the device, if applicable.",
    "children": [
      {
        "name": "zone",
        "type": "string",
        "description": "The Zone that the device is located in. Specify the ID of an Availability Zone, Local Zone, Wavelength Zone, or an Outpost."
      },
      {
        "name": "subnet_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the subnet that the device is located in."
      }
    ]
  },
  {
    "name": "location",
    "type": "object",
    "description": "The site location.",
    "children": [
      {
        "name": "address",
        "type": "string",
        "description": "The physical address."
      },
      {
        "name": "latitude",
        "type": "string",
        "description": "The latitude."
      },
      {
        "name": "longitude",
        "type": "string",
        "description": "The longitude."
      }
    ]
  },
  {
    "name": "model",
    "type": "string",
    "description": "The device model"
  },
  {
    "name": "serial_number",
    "type": "string",
    "description": "The device serial number."
  },
  {
    "name": "site_id",
    "type": "string",
    "description": "The site ID."
  },
  {
    "name": "type",
    "type": "string",
    "description": "The device type."
  },
  {
    "name": "vendor",
    "type": "string",
    "description": "The device vendor."
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The date and time that the device was created."
  },
  {
    "name": "state",
    "type": "string",
    "description": "The state of the device."
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
    "name": "device_id",
    "type": "string",
    "description": "The ID of the device."
  },
  {
    "name": "global_network_id",
    "type": "string",
    "description": "The ID of the global network."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-device.html"><code>AWS::NetworkManager::Device</code></a>.

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
    <td><code>devices</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="GlobalNetworkId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>devices</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>devices</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>devices_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>devices</code></td>
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

Gets all properties from an individual <code>device</code>.
```sql
SELECT
region,
device_arn,
device_id,
description,
tags,
global_network_id,
aws_location,
location,
model,
serial_number,
site_id,
type,
vendor,
created_at,
state
FROM awscc.networkmanager.devices
WHERE region = 'us-east-1' AND Identifier = '<GlobalNetworkId>|<DeviceId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>devices</code> in a region.
```sql
SELECT
region,
global_network_id,
device_id
FROM awscc.networkmanager.devices_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>device</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.networkmanager.devices (
 GlobalNetworkId,
 region
)
SELECT 
'{{ GlobalNetworkId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.networkmanager.devices (
 Description,
 Tags,
 GlobalNetworkId,
 AWSLocation,
 Location,
 Model,
 SerialNumber,
 SiteId,
 Type,
 Vendor,
 region
)
SELECT 
 '{{ Description }}',
 '{{ Tags }}',
 '{{ GlobalNetworkId }}',
 '{{ AWSLocation }}',
 '{{ Location }}',
 '{{ Model }}',
 '{{ SerialNumber }}',
 '{{ SiteId }}',
 '{{ Type }}',
 '{{ Vendor }}',
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
  - name: device
    props:
      - name: Description
        value: '{{ Description }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: GlobalNetworkId
        value: '{{ GlobalNetworkId }}'
      - name: AWSLocation
        value:
          Zone: '{{ Zone }}'
          SubnetArn: '{{ SubnetArn }}'
      - name: Location
        value:
          Address: '{{ Address }}'
          Latitude: '{{ Latitude }}'
          Longitude: '{{ Longitude }}'
      - name: Model
        value: '{{ Model }}'
      - name: SerialNumber
        value: '{{ SerialNumber }}'
      - name: SiteId
        value: '{{ SiteId }}'
      - name: Type
        value: '{{ Type }}'
      - name: Vendor
        value: '{{ Vendor }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.networkmanager.devices
SET PatchDocument = string('{{ {
    "Description": description,
    "Tags": tags,
    "AWSLocation": aws_location,
    "Location": location,
    "Model": model,
    "SerialNumber": serial_number,
    "SiteId": site_id,
    "Type": type,
    "Vendor": vendor
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<GlobalNetworkId>|<DeviceId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.networkmanager.devices
WHERE Identifier = '<GlobalNetworkId|DeviceId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>devices</code> resource, the following permissions are required:

### Create
```json
networkmanager:CreateDevice,
networkmanager:GetDevices,
networkmanager:TagResource
```

### Read
```json
networkmanager:GetDevices
```

### Update
```json
networkmanager:UpdateDevice,
networkmanager:ListTagsForResource,
networkmanager:GetDevices,
networkmanager:TagResource,
networkmanager:UntagResource
```

### Delete
```json
networkmanager:GetDevices,
networkmanager:DeleteDevice
```

### List
```json
networkmanager:GetDevices
```
