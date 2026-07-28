---
title: disks
hide_title: false
hide_table_of_contents: false
keywords:
  - disks
  - lightsail
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CodeBlock from '@theme/CodeBlock';
import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>disk</code> resource or lists <code>disks</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>disks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Lightsail::Disk</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lightsail.disks" /></td></tr>
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
    "name": "disk_name",
    "type": "string",
    "description": "The names to use for your new Lightsail disk."
  },
  {
    "name": "disk_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "support_code",
    "type": "string",
    "description": "Support code to help identify any issues"
  },
  {
    "name": "availability_zone",
    "type": "string",
    "description": "The Availability Zone in which to create your instance. Use the following format: us-east-2a (case sensitive). Be sure to add the include Availability Zones parameter to your request."
  },
  {
    "name": "location",
    "type": "object",
    "description": "Location of a resource.",
    "children": [
      {
        "name": "availability_zone",
        "type": "string",
        "description": "The Availability Zone in which to create your disk. Use the following format: us-east-2a (case sensitive). Be sure to add the include Availability Zones parameter to your request."
      },
      {
        "name": "region_name",
        "type": "string",
        "description": "The Region Name in which to create your disk."
      }
    ]
  },
  {
    "name": "resource_type",
    "type": "string",
    "description": "Resource type of Lightsail instance."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "add_ons",
    "type": "array",
    "description": "An array of objects representing the add-ons to enable for the new instance.",
    "children": [
      {
        "name": "add_on_type",
        "type": "string",
        "description": "The add-on type"
      },
      {
        "name": "status",
        "type": "string",
        "description": "Status of the Addon"
      },
      {
        "name": "auto_snapshot_add_on_request",
        "type": "object",
        "description": "An object that represents additional parameters when enabling or modifying the automatic snapshot add-on",
        "children": [
          {
            "name": "snapshot_time_of_day",
            "type": "string",
            "description": "The daily time when an automatic snapshot will be created."
          }
        ]
      }
    ]
  },
  {
    "name": "state",
    "type": "string",
    "description": "State of the Lightsail disk"
  },
  {
    "name": "attachment_state",
    "type": "string",
    "description": "Attachment State of the Lightsail disk"
  },
  {
    "name": "size_in_gb",
    "type": "integer",
    "description": "Size of the Lightsail disk"
  },
  {
    "name": "iops",
    "type": "integer",
    "description": "Iops of the Lightsail disk"
  },
  {
    "name": "is_attached",
    "type": "boolean",
    "description": "Check is Disk is attached state"
  },
  {
    "name": "path",
    "type": "string",
    "description": "Path of the  attached Disk"
  },
  {
    "name": "attached_to",
    "type": "string",
    "description": "Name of the attached Lightsail Instance"
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
    "name": "disk_name",
    "type": "string",
    "description": "The names to use for your new Lightsail disk."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html"><code>AWS::Lightsail::Disk</code></a>.

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
    <td><code>disks</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DiskName, SizeInGb, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>disks</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>disks</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>disks_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>disks</code></td>
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

Gets all properties from an individual <code>disk</code>.
```sql
SELECT
  region,
  disk_name,
  disk_arn,
  support_code,
  availability_zone,
  location,
  resource_type,
  tags,
  add_ons,
  state,
  attachment_state,
  size_in_gb,
  iops,
  is_attached,
  path,
  attached_to
FROM awscc.lightsail.disks
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ disk_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>disks</code> in a region.
```sql
SELECT
  region,
  disk_name
FROM awscc.lightsail.disks_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>disk</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.lightsail.disks (
  DiskName,
  SizeInGb,
  region
)
SELECT
  '{{ disk_name }}',
  '{{ size_in_gb }}',
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
INSERT INTO awscc.lightsail.disks (
  DiskName,
  AvailabilityZone,
  Location,
  Tags,
  AddOns,
  SizeInGb,
  region
)
SELECT
  '{{ disk_name }}',
  '{{ availability_zone }}',
  '{{ location }}',
  '{{ tags }}',
  '{{ add_ons }}',
  '{{ size_in_gb }}',
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

<CodeBlock language="yaml">{`version: 1
name: stack name
description: stack description
providers:
  - aws
globals:
  - name: region
    value: '{{ vars.AWS_REGION }}'
resources:
  - name: disk
    props:
      - name: disk_name
        value: '{{ disk_name }}'
      - name: availability_zone
        value: '{{ availability_zone }}'
      - name: location
        value:
          availability_zone: '{{ availability_zone }}'
          region_name: '{{ region_name }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: add_ons
        value:
          - add_on_type: '{{ add_on_type }}'
            status: '{{ status }}'
            auto_snapshot_add_on_request:
              snapshot_time_of_day: '{{ snapshot_time_of_day }}'
      - name: size_in_gb
        value: '{{ size_in_gb }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>disk</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.lightsail.disks
SET PatchDocument = string('{{ {
    "Tags": tags,
    "AddOns": add_ons
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ disk_name }}'
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
DELETE FROM awscc.lightsail.disks
WHERE
  Identifier = '{{ disk_name }}' AND
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

To operate on the <code>disks</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

```json
lightsail:CreateDisk,
lightsail:EnableAddOn,
lightsail:DisableAddOn,
lightsail:GetDisk,
lightsail:GetDisks,
lightsail:GetRegions,
lightsail:TagResource,
lightsail:UntagResource
```

</TabItem>
<TabItem value="read">

```json
lightsail:GetDisk,
lightsail:GetDisks
```

</TabItem>
<TabItem value="delete">

```json
lightsail:GetDisk,
lightsail:GetDisks,
lightsail:DeleteDisk
```

</TabItem>
<TabItem value="list">

```json
lightsail:GetDisks
```

</TabItem>
<TabItem value="update">

```json
lightsail:GetDisk,
lightsail:GetDisks,
lightsail:EnableAddOn,
lightsail:DisableAddOn,
lightsail:TagResource,
lightsail:UntagResource
```

</TabItem>
</Tabs>