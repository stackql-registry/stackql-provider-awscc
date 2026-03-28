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

import CodeBlock from '@theme/CodeBlock';
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
<tr><td><b>Description</b></td><td><details><summary>The <code>AWS::EFS::AccessPoint</code> resource creates an EFS access point. An access point is an application-specific view into an EFS file system that applies an operating system user and group, and a file system path, to any file system request made through the access point. The operating system user and group override any identity information provided by the NFS client. The file system path is exposed as the access point's root directory. Applications using the access point can only access data in its own directory and below. To learn more, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html">Mounting a file system using EFS access points</a>.</summary>This operation requires permissions for the <code>elasticfilesystem:CreateAccessPoint</code> action.</details></td></tr>
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
    "description": "<details><summary>An array of key-value pairs to apply to this resource.</summary>For more information, see <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html\">Tag</a>.</details>",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The tag key (String). The key can't start with <code>aws:</code>."
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
    "description": "The ID of the EFS file system that the access point applies to. Accepts only the ID format for input when specifying a file system, for example <code>fs-0123456789abcedf2</code>."
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
        "description": "Specifies the path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system. A path can have up to four subdirectories. If the specified path does not exist, you are required to provide the <code>CreationInfo</code>."
      },
      {
        "name": "creation_info",
        "type": "object",
        "description": "<details><summary>(Optional) Specifies the POSIX IDs and permissions to apply to the access point's <code>RootDirectory</code>. If the <code>RootDirectory</code> > <code>Path</code> specified does not exist, EFS creates the root directory using the <code>CreationInfo</code> settings when a client connects to an access point. When specifying the <code>CreationInfo</code>, you must provide values for all properties.</summary>If you do not provide <code>CreationInfo</code> and the specified <code>RootDirectory</code> > <code>Path</code> does not exist, attempts to mount the file system using the access point will fail.</details>",
        "children": [
          {
            "name": "owner_uid",
            "type": "string",
            "description": "Specifies the POSIX user ID to apply to the <code>RootDirectory</code>. Accepts values from 0 to 2^32 (4294967295)."
          },
          {
            "name": "owner_gid",
            "type": "string",
            "description": "Specifies the POSIX group ID to apply to the <code>RootDirectory</code>. Accepts values from 0 to 2^32 (4294967295)."
          },
          {
            "name": "permissions",
            "type": "string",
            "description": "Specifies the POSIX permissions to apply to the <code>RootDirectory</code>, in the format of an octal number representing the file's mode bits."
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
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>access_points</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ access_point_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>access_points</code> in a region.
```sql
SELECT
  region,
  access_point_id
FROM awscc.efs.access_points_list_only
WHERE
  region = '{{ region }}';
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
  '{{ file_system_id }}',
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
INSERT INTO awscc.efs.access_points (
  ClientToken,
  AccessPointTags,
  FileSystemId,
  PosixUser,
  RootDirectory,
  region
)
SELECT
  '{{ client_token }}',
  '{{ access_point_tags }}',
  '{{ file_system_id }}',
  '{{ posix_user }}',
  '{{ root_directory }}',
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
  - name: access_point
    props:
      - name: client_token
        value: '{{ client_token }}'
      - name: access_point_tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: file_system_id
        value: '{{ file_system_id }}'
      - name: posix_user
        value:
          uid: '{{ uid }}'
          gid: '{{ gid }}'
          secondary_gids:
            - '{{ secondary_gids[0] }}'
      - name: root_directory
        value:
          path: '{{ path }}'
          creation_info:
            owner_uid: '{{ owner_uid }}'
            owner_gid: '{{ owner_gid }}'
            permissions: '{{ permissions }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>access_point</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.efs.access_points
SET PatchDocument = string('{{ {
    "AccessPointTags": access_point_tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ access_point_id }}'
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
DELETE FROM awscc.efs.access_points
WHERE
  Identifier = '{{ access_point_id }}' AND
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

To operate on the <code>access_points</code> resource, the following permissions are required:

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
elasticfilesystem:CreateAccessPoint,
elasticfilesystem:TagResource,
elasticfilesystem:DescribeAccessPoints
```

</TabItem>
<TabItem value="read">

```json
elasticfilesystem:DescribeAccessPoints
```

</TabItem>
<TabItem value="delete">

```json
elasticfilesystem:DeleteAccessPoint,
elasticfilesystem:DescribeAccessPoints
```

</TabItem>
<TabItem value="list">

```json
elasticfilesystem:DescribeAccessPoints
```

</TabItem>
<TabItem value="update">

```json
elasticfilesystem:DescribeAccessPoints,
elasticfilesystem:ListTagsForResource,
elasticfilesystem:TagResource,
elasticfilesystem:UntagResource
```

</TabItem>
</Tabs>