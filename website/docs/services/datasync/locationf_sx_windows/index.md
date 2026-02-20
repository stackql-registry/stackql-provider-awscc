---
title: locationf_sx_windows
hide_title: false
hide_table_of_contents: false
keywords:
  - locationf_sx_windows
  - datasync
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

Creates, updates, deletes or gets a <code>locationf_sx_window</code> resource or lists <code>locationf_sx_windows</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>locationf_sx_windows</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::DataSync::LocationFSxWindows.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.datasync.locationf_sx_windows" /></td></tr>
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
    "name": "domain",
    "type": "string",
    "description": "The name of the Windows domain that the FSx for Windows server belongs to."
  },
  {
    "name": "fsx_filesystem_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the FSx for Windows file system."
  },
  {
    "name": "password",
    "type": "string",
    "description": "The password of the user who has the permissions to access files and folders in the FSx for Windows file system."
  },
  {
    "name": "security_group_arns",
    "type": "array",
    "description": "The ARNs of the security groups that are to use to configure the FSx for Windows file system."
  },
  {
    "name": "subdirectory",
    "type": "string",
    "description": "A subdirectory in the location's path."
  },
  {
    "name": "user",
    "type": "string",
    "description": "The user who has the permissions to access files and folders in the FSx for Windows file system."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key for an AWS resource tag."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for an AWS resource tag."
      }
    ]
  },
  {
    "name": "location_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the Amazon FSx for Windows file system location that is created."
  },
  {
    "name": "location_uri",
    "type": "string",
    "description": "The URL of the FSx for Windows location that was described."
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
    "name": "location_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the Amazon FSx for Windows file system location that is created."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindow.html"><code>AWS::DataSync::LocationFSxWindows</code></a>.

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
    <td><code>locationf_sx_windows</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="User, SecurityGroupArns, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>locationf_sx_windows</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>locationf_sx_windows</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>locationf_sx_windows_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>locationf_sx_windows</code></td>
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

Gets all properties from an individual <code>locationf_sx_window</code>.
```sql
SELECT
region,
domain,
fsx_filesystem_arn,
password,
security_group_arns,
subdirectory,
user,
tags,
location_arn,
location_uri
FROM awscc.datasync.locationf_sx_windows
WHERE region = 'us-east-1' AND Identifier = '<LocationArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>locationf_sx_windows</code> in a region.
```sql
SELECT
region,
location_arn
FROM awscc.datasync.locationf_sx_windows_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>locationf_sx_window</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.datasync.locationf_sx_windows (
 SecurityGroupArns,
 User,
 region
)
SELECT 
'{{ SecurityGroupArns }}',
 '{{ User }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.datasync.locationf_sx_windows (
 Domain,
 FsxFilesystemArn,
 Password,
 SecurityGroupArns,
 Subdirectory,
 User,
 Tags,
 region
)
SELECT 
 '{{ Domain }}',
 '{{ FsxFilesystemArn }}',
 '{{ Password }}',
 '{{ SecurityGroupArns }}',
 '{{ Subdirectory }}',
 '{{ User }}',
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
  - name: locationf_sx_window
    props:
      - name: Domain
        value: '{{ Domain }}'
      - name: FsxFilesystemArn
        value: '{{ FsxFilesystemArn }}'
      - name: Password
        value: '{{ Password }}'
      - name: SecurityGroupArns
        value:
          - '{{ SecurityGroupArns[0] }}'
      - name: Subdirectory
        value: '{{ Subdirectory }}'
      - name: User
        value: '{{ User }}'
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
UPDATE awscc.datasync.locationf_sx_windows
SET PatchDocument = string('{{ {
    "Domain": domain,
    "Password": password,
    "Subdirectory": subdirectory,
    "User": user,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<LocationArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datasync.locationf_sx_windows
WHERE Identifier = '<LocationArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>locationf_sx_windows</code> resource, the following permissions are required:

### Create
```json
datasync:CreateLocationFsxWindows,
datasync:DescribeLocationFsxWindows,
datasync:ListTagsForResource,
datasync:TagResource,
fsx:DescribeFileSystems,
ec2:DescribeNetworkInterfaces,
ec2:DescribeSubnets,
ec2:DescribeSecurityGroups
```

### Read
```json
datasync:DescribeLocationFsxWindows,
datasync:ListTagsForResource
```

### Update
```json
datasync:DescribeLocationFsxWindows,
datasync:UpdateLocationFsxWindows,
datasync:ListTagsForResource,
datasync:TagResource,
datasync:UntagResource,
fsx:DescribeFileSystems,
ec2:DescribeNetworkInterfaces
```

### Delete
```json
datasync:DeleteLocation
```

### List
```json
datasync:ListLocations
```
