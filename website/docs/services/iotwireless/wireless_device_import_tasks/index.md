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
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>wireless_device_import_tasks</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>wireless_device_import_tasks</code> in a region.
```sql
SELECT
  region,
  id
FROM awscc.iotwireless.wireless_device_import_tasks_list_only
WHERE
  region = '{{ region }}';
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
  '{{ destination_name }}',
  '{{ sidewalk }}',
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
INSERT INTO awscc.iotwireless.wireless_device_import_tasks (
  DestinationName,
  Sidewalk,
  Tags,
  region
)
SELECT
  '{{ destination_name }}',
  '{{ sidewalk }}',
  '{{ tags }}',
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
  - name: wireless_device_import_task
    props:
      - name: destination_name
        value: '{{ destination_name }}'
      - name: sidewalk
        value:
          sidewalk_manufacturing_sn: '{{ sidewalk_manufacturing_sn }}'
          device_creation_file: '{{ device_creation_file }}'
          device_creation_file_list:
            - '{{ device_creation_file_list[0] }}'
          role: '{{ role }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>wireless_device_import_task</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iotwireless.wireless_device_import_tasks
SET PatchDocument = string('{{ {
    "DestinationName": destination_name,
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ id }}'
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
DELETE FROM awscc.iotwireless.wireless_device_import_tasks
WHERE
  Identifier = '{{ id }}' AND
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

To operate on the <code>wireless_device_import_tasks</code> resource, the following permissions are required:

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
iotwireless:StartWirelessDeviceImportTask,
iotwireless:StartSingleWirelessDeviceImportTask,
iotwireless:TagResource,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
iotwireless:GetWirelessDeviceImportTask,
iotwireless:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
iotwireless:GetWirelessDeviceImportTask,
iotwireless:UpdateWirelessDeviceImportTask,
iotwireless:TagResource,
iotwireless:UntagResource,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
iotwireless:DeleteWirelessDeviceImportTask
```

</TabItem>
<TabItem value="list">

```json
iotwireless:ListWirelessDeviceImportTasks,
iotwireless:ListTagsForResource
```

</TabItem>
</Tabs>