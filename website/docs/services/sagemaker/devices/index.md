---
title: devices
hide_title: false
hide_table_of_contents: false
keywords:
  - devices
  - sagemaker
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
<tr><td><b>Description</b></td><td>Resource schema for AWS::SageMaker::Device</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sagemaker.devices" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "device_fleet_name",
    "type": "string",
    "description": "The name of the edge device fleet"
  },
  {
    "name": "device",
    "type": "object",
    "description": "The Edge Device you want to register against a device fleet",
    "children": [
      {
        "name": "device_fleet_name",
        "type": "string",
        "description": "The name of the edge device fleet"
      },
      {
        "name": "tags",
        "type": "array",
        "description": "Associate tags with the resource",
        "children": [
          {
            "name": "value",
            "type": "string",
            "description": ""
          },
          {
            "name": "key",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Associate tags with the resource",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": ""
      },
      {
        "name": "key",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-device.html"><code>AWS::SageMaker::Device</code></a>.

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
    <td><CopyableCode code="DeviceFleetName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>device</code>.
```sql
SELECT
region,
device_fleet_name,
device,
tags
FROM awscc.sagemaker.devices
WHERE region = 'us-east-1' AND Identifier = '{{ device/device_name }}';
```

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
INSERT INTO awscc.sagemaker.devices (
 DeviceFleetName,
 region
)
SELECT
'{{ device_fleet_name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.sagemaker.devices (
 DeviceFleetName,
 Device,
 Tags,
 region
)
SELECT
 '{{ device_fleet_name }}',
 '{{ device }}',
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
  - name: device
    props:
      - name: device_fleet_name
        value: '{{ device_fleet_name }}'
      - name: device
        value:
          device_fleet_name: '{{ device_fleet_name }}'
          device: null
          tags:
            - value: '{{ value }}'
              key: '{{ key }}'
      - name: tags
        value:
          - null
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>device</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.sagemaker.devices
SET PatchDocument = string('{{ {
    "DeviceFleetName": device_fleet_name,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ device/device_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.sagemaker.devices
WHERE Identifier = '{{ device/device_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>devices</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="create">

```json
sagemaker:RegisterDevices
```

</TabItem>
<TabItem value="read">

```json
sagemaker:DescribeDevice
```

</TabItem>
<TabItem value="update">

```json
sagemaker:UpdateDevices
```

</TabItem>
<TabItem value="delete">

```json
sagemaker:DeregisterDevices
```

</TabItem>
</Tabs>