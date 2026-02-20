---
title: virtualmfa_devices
hide_title: false
hide_table_of_contents: false
keywords:
  - virtualmfa_devices
  - iam
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

Creates, updates, deletes or gets a <code>virtualmfa_device</code> resource or lists <code>virtualmfa_devices</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>virtualmfa_devices</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::IAM::VirtualMFADevice</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iam.virtualmfa_devices" /></td></tr>
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
    "name": "virtual_mfa_device_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "path",
    "type": "string",
    "description": ""
  },
  {
    "name": "serial_number",
    "type": "string",
    "description": ""
  },
  {
    "name": "users",
    "type": "array",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
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
    "name": "serial_number",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-virtualmfadevice.html"><code>AWS::IAM::VirtualMFADevice</code></a>.

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
    <td><code>virtualmfa_devices</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Users, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>virtualmfa_devices</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>virtualmfa_devices</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>virtualmfa_devices_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>virtualmfa_devices</code></td>
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

Gets all properties from an individual <code>virtualmfa_device</code>.
```sql
SELECT
region,
virtual_mfa_device_name,
path,
serial_number,
users,
tags
FROM awscc.iam.virtualmfa_devices
WHERE Identifier = '<SerialNumber>';
```
</TabItem>
<TabItem value="list">

Lists all <code>virtualmfa_devices</code> in a region.
```sql
SELECT
region,
serial_number
FROM awscc.iam.virtualmfa_devices_list_only
;
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>virtualmfa_device</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iam.virtualmfa_devices (
 Users,
 region
)
SELECT 
'{{ Users }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iam.virtualmfa_devices (
 VirtualMfaDeviceName,
 Path,
 Users,
 Tags,
 region
)
SELECT 
 '{{ VirtualMfaDeviceName }}',
 '{{ Path }}',
 '{{ Users }}',
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
  - name: virtualmfa_device
    props:
      - name: VirtualMfaDeviceName
        value: '{{ VirtualMfaDeviceName }}'
      - name: Path
        value: '{{ Path }}'
      - name: Users
        value:
          - '{{ Users[0] }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>virtualmfa_device</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iam.virtualmfa_devices
SET PatchDocument = string('{{ {
    "Users": users,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<SerialNumber>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iam.virtualmfa_devices
WHERE Identifier = '<SerialNumber>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>virtualmfa_devices</code> resource, the following permissions are required:

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
iam:CreateVirtualMFADevice,
iam:EnableMFADevice,
iam:ListVirtualMFADevices
```

</TabItem>
<TabItem value="read">

```json
iam:ListVirtualMFADevices
```

</TabItem>
<TabItem value="update">

```json
iam:TagMFADevice,
iam:UntagMFADevice
```

</TabItem>
<TabItem value="delete">

```json
iam:DeleteVirtualMFADevice,
iam:DeactivateMFADevice
```

</TabItem>
<TabItem value="list">

```json
iam:ListVirtualMFADevices
```

</TabItem>
</Tabs>