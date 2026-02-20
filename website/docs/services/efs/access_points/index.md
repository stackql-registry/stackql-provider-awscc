---
title: access_points
hide_title: false
hide_table_of_contents: false
keywords:
  - access_points
  - efs
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

Creates, updates, deletes or gets an <code>access_point</code> resource or lists <code>access_points</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>access_points</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::EFS::AccessPoint&#96;&#96; resource creates an EFS access point. An access point is an application-specific view into an EFS file system that applies an operating system user and group, and a file system path, to any file system request made through the access point. The operating system user and group override any identity information provided by the NFS client. The file system path is exposed as the access point's root directory. Applications using the access point can only access data in its own directory and below. To learn more, see &#91;Mounting a file system using EFS access points&#93;(https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html).<br />This operation requires permissions for the &#96;&#96;elasticfilesystem:CreateAccessPoint&#96;&#96; action.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.efs.access_points" /></td></tr>
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
    "name": "access_point_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "client_token",
    "type": "string",
    "description": "The opaque string specified in the request to ensure idempotent creation."
  },
  {
    "name": "access_point_tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.<br />For more information, see &#91;Tag&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The tag key (String). The key can't start with &#96;&#96;aws:&#96;&#96;."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value of the tag key."
      }
    ]
  },
  {
    "name": "file_system_id",
    "type": "string",
    "description": "The ID of the EFS file system that the access point applies to. Accepts only the ID format for input when specifying a file system, for example &#96;&#96;fs-0123456789abcedf2&#96;&#96;."
  },
  {
    "name": "posix_user",
    "type": "object",
    "description": "The full POSIX identity, including the user ID, group ID, and secondary group IDs on the access point that is used for all file operations by NFS clients using the access point.",
    "children": [
      {
        "name": "uid",
        "type": "string",
        "description": "The POSIX user ID used for all file system operations using this access point."
      },
      {
        "name": "gid",
        "type": "string",
        "description": "The POSIX group ID used for all file system operations using this access point."
      },
      {
        "name": "secondary_gids",
        "type": "array",
        "description": "Secondary POSIX group IDs used for all file system operations using this access point."
      }
    ]
  },
  {
    "name": "root_directory",
    "type": "object",
    "description": "The directory on the EFS file system that the access point exposes as the root directory to NFS clients using the access point.",
    "children": [
      {
        "name": "path",
        "type": "string",
        "description": "Specifies the path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system. A path can have up to four subdirectories. If the specified path does not exist, you are required to provide the &#96;&#96;CreationInfo&#96;&#96;."
      },
      {
        "name": "creation_info",
        "type": "object",
        "description": "(Optional) Specifies the POSIX IDs and permissions to apply to the access point's &#96;&#96;RootDirectory&#96;&#96;. If the &#96;&#96;RootDirectory&#96;&#96; &gt; &#96;&#96;Path&#96;&#96; specified does not exist, EFS creates the root directory using the &#96;&#96;CreationInfo&#96;&#96; settings when a client connects to an access point. When specifying the &#96;&#96;CreationInfo&#96;&#96;, you must provide values for all properties. <br />If you do not provide &#96;&#96;CreationInfo&#96;&#96; and the specified &#96;&#96;RootDirectory&#96;&#96; &gt; &#96;&#96;Path&#96;&#96; does not exist, attempts to mount the file system using the access point will fail.",
        "children": [
          {
            "name": "owner_uid",
            "type": "string",
            "description": "Specifies the POSIX user ID to apply to the &#96;&#96;RootDirectory&#96;&#96;. Accepts values from 0 to 2^32 (4294967295)."
          },
          {
            "name": "owner_gid",
            "type": "string",
            "description": "Specifies the POSIX group ID to apply to the &#96;&#96;RootDirectory&#96;&#96;. Accepts values from 0 to 2^32 (4294967295)."
          },
          {
            "name": "permissions",
            "type": "string",
            "description": "Specifies the POSIX permissions to apply to the &#96;&#96;RootDirectory&#96;&#96;, in the format of an octal number representing the file's mode bits."
          }
        ]
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
    "name": "access_point_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-accesspoint.html"><code>AWS::EFS::AccessPoint</code></a>.

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
    <td><code>access_points</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="FileSystemId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>access_points</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>access_points</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>access_points_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>access_points</code></td>
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

Gets all properties from an individual <code>access_point</code>.
```sql
SELECT
region,
access_point_id,
arn,
client_token,
access_point_tags,
file_system_id,
posix_user,
root_directory
FROM awscc.efs.access_points
WHERE region = 'us-east-1' AND data__Identifier = '<AccessPointId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>access_points</code> in a region.
```sql
SELECT
region,
access_point_id
FROM awscc.efs.access_points_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>access_point</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.efs.access_points (
 FileSystemId,
 region
)
SELECT 
'{{ FileSystemId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.efs.access_points (
 ClientToken,
 AccessPointTags,
 FileSystemId,
 PosixUser,
 RootDirectory,
 region
)
SELECT 
 '{{ ClientToken }}',
 '{{ AccessPointTags }}',
 '{{ FileSystemId }}',
 '{{ PosixUser }}',
 '{{ RootDirectory }}',
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
  - name: access_point
    props:
      - name: ClientToken
        value: '{{ ClientToken }}'
      - name: AccessPointTags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: FileSystemId
        value: '{{ FileSystemId }}'
      - name: PosixUser
        value:
          Uid: '{{ Uid }}'
          Gid: '{{ Gid }}'
          SecondaryGids:
            - '{{ SecondaryGids[0] }}'
      - name: RootDirectory
        value:
          Path: '{{ Path }}'
          CreationInfo:
            OwnerUid: '{{ OwnerUid }}'
            OwnerGid: '{{ OwnerGid }}'
            Permissions: '{{ Permissions }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.efs.access_points
SET data__PatchDocument = string('{{ {
    "AccessPointTags": access_point_tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<AccessPointId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.efs.access_points
WHERE data__Identifier = '<AccessPointId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>access_points</code> resource, the following permissions are required:

### Create
```json
elasticfilesystem:CreateAccessPoint,
elasticfilesystem:TagResource,
elasticfilesystem:DescribeAccessPoints
```

### Read
```json
elasticfilesystem:DescribeAccessPoints
```

### Delete
```json
elasticfilesystem:DeleteAccessPoint,
elasticfilesystem:DescribeAccessPoints
```

### List
```json
elasticfilesystem:DescribeAccessPoints
```

### Update
```json
elasticfilesystem:DescribeAccessPoints,
elasticfilesystem:ListTagsForResource,
elasticfilesystem:TagResource,
elasticfilesystem:UntagResource
```
