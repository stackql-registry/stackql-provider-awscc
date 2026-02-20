---
title: wireless_device_import_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - wireless_device_import_tasks
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

Creates, updates, deletes or gets a <code>wireless_device_import_task</code> resource or lists <code>wireless_device_import_tasks</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>wireless_device_import_tasks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Wireless Device Import Tasks</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotwireless.wireless_device_import_tasks" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": "Id for Wireless Device Import Task, Returned upon successful start."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "Arn for Wireless Device Import Task, Returned upon successful start."
  },
  {
    "name": "destination_name",
    "type": "string",
    "description": "Destination Name for import task"
  },
  {
    "name": "creation_date",
    "type": "string",
    "description": "CreationDate for import task"
  },
  {
    "name": "sidewalk",
    "type": "object",
    "description": "sidewalk contain file for created device and role",
    "children": [
      {
        "name": "sidewalk_manufacturing_sn",
        "type": "string",
        "description": ""
      },
      {
        "name": "device_creation_file",
        "type": "string",
        "description": ""
      },
      {
        "name": "device_creation_file_list",
        "type": "array",
        "description": "sidewalk create device's file path"
      },
      {
        "name": "role",
        "type": "string",
        "description": "sidewalk role"
      }
    ]
  },
  {
    "name": "status",
    "type": "string",
    "description": "Status for import task"
  },
  {
    "name": "status_reason",
    "type": "string",
    "description": "StatusReason for import task"
  },
  {
    "name": "initialized_imported_devices_count",
    "type": "integer",
    "description": "Initialized Imported Devices Count"
  },
  {
    "name": "pending_imported_devices_count",
    "type": "integer",
    "description": "Pending Imported Devices Count"
  },
  {
    "name": "onboarded_imported_devices_count",
    "type": "integer",
    "description": "Onboarded Imported Devices Count"
  },
  {
    "name": "failed_imported_devices_count",
    "type": "integer",
    "description": "Failed Imported Devices Count"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
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
    "description": "Id for Wireless Device Import Task, Returned upon successful start."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdeviceimporttask.html"><code>AWS::IoTWireless::WirelessDeviceImportTask</code></a>.

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
    <td><code>wireless_device_import_tasks</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DestinationName, Sidewalk, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>wireless_device_import_tasks</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>wireless_device_import_tasks</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>wireless_device_import_tasks_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>wireless_device_import_tasks</code></td>
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

Gets all properties from an individual <code>wireless_device_import_task</code>.
```sql
SELECT
region,
id,
arn,
destination_name,
creation_date,
sidewalk,
status,
status_reason,
initialized_imported_devices_count,
pending_imported_devices_count,
onboarded_imported_devices_count,
failed_imported_devices_count,
tags
FROM awscc.iotwireless.wireless_device_import_tasks
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>wireless_device_import_tasks</code> in a region.
```sql
SELECT
region,
id
FROM awscc.iotwireless.wireless_device_import_tasks_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>wireless_device_import_task</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iotwireless.wireless_device_import_tasks (
 DestinationName,
 Sidewalk,
 region
)
SELECT 
'{{ DestinationName }}',
 '{{ Sidewalk }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iotwireless.wireless_device_import_tasks (
 DestinationName,
 Sidewalk,
 Tags,
 region
)
SELECT 
 '{{ DestinationName }}',
 '{{ Sidewalk }}',
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
  - name: wireless_device_import_task
    props:
      - name: DestinationName
        value: '{{ DestinationName }}'
      - name: Sidewalk
        value:
          SidewalkManufacturingSn: '{{ SidewalkManufacturingSn }}'
          DeviceCreationFile: '{{ DeviceCreationFile }}'
          DeviceCreationFileList:
            - '{{ DeviceCreationFileList[0] }}'
          Role: '{{ Role }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.iotwireless.wireless_device_import_tasks
SET data__PatchDocument = string('{{ {
    "DestinationName": destination_name,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotwireless.wireless_device_import_tasks
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>wireless_device_import_tasks</code> resource, the following permissions are required:

### Create
```json
iotwireless:StartWirelessDeviceImportTask,
iotwireless:StartSingleWirelessDeviceImportTask,
iotwireless:TagResource,
iam:PassRole
```

### Read
```json
iotwireless:GetWirelessDeviceImportTask,
iotwireless:ListTagsForResource
```

### Update
```json
iotwireless:GetWirelessDeviceImportTask,
iotwireless:UpdateWirelessDeviceImportTask,
iotwireless:TagResource,
iotwireless:UntagResource,
iam:PassRole
```

### Delete
```json
iotwireless:DeleteWirelessDeviceImportTask
```

### List
```json
iotwireless:ListWirelessDeviceImportTasks,
iotwireless:ListTagsForResource
```
