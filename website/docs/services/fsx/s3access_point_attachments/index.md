---
title: s3access_point_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - s3access_point_attachments
  - fsx
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

Creates, updates, deletes or gets a <code>s3access_point_attachment</code> resource or lists <code>s3access_point_attachments</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>s3access_point_attachments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource type definition for AWS::FSx::S3AccessPointAttachment</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.fsx.s3access_point_attachments" /></td></tr>
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
    "description": "The Name of the S3AccessPointAttachment"
  },
  {
    "name": "type",
    "type": "string",
    "description": ""
  },
  {
    "name": "open_zf_sconfiguration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "volume_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "file_system_identity",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "type",
            "type": "string",
            "description": ""
          },
          {
            "name": "posix_user",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "uid",
                "type": "number",
                "description": ""
              },
              {
                "name": "gid",
                "type": "number",
                "description": ""
              },
              {
                "name": "secondary_gids",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "s3_access_point",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "resource_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "alias",
        "type": "string",
        "description": ""
      },
      {
        "name": "vpc_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "vpc_id",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "policy",
        "type": "object",
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
    "name": "name",
    "type": "string",
    "description": "The Name of the S3AccessPointAttachment"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-s3accesspointattachment.html"><code>AWS::FSx::S3AccessPointAttachment</code></a>.

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
    <td><code>s3access_point_attachments</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, Type, OpenZFSConfiguration, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>s3access_point_attachments</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>s3access_point_attachments_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>s3access_point_attachments</code></td>
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

Gets all properties from an individual <code>s3access_point_attachment</code>.
```sql
SELECT
region,
name,
type,
open_zf_sconfiguration,
s3_access_point
FROM awscc.fsx.s3access_point_attachments
WHERE region = 'us-east-1' AND Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>s3access_point_attachments</code> in a region.
```sql
SELECT
region,
name
FROM awscc.fsx.s3access_point_attachments_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>s3access_point_attachment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.fsx.s3access_point_attachments (
 Name,
 Type,
 OpenZFSConfiguration,
 region
)
SELECT 
'{{ Name }}',
 '{{ Type }}',
 '{{ OpenZFSConfiguration }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.fsx.s3access_point_attachments (
 Name,
 Type,
 OpenZFSConfiguration,
 S3AccessPoint,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Type }}',
 '{{ OpenZFSConfiguration }}',
 '{{ S3AccessPoint }}',
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
  - name: s3access_point_attachment
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Type
        value: '{{ Type }}'
      - name: OpenZFSConfiguration
        value:
          VolumeId: '{{ VolumeId }}'
          FileSystemIdentity:
            Type: '{{ Type }}'
            PosixUser:
              Uid: null
              Gid: null
              SecondaryGids:
                - Gid: null
      - name: S3AccessPoint
        value:
          ResourceARN: '{{ ResourceARN }}'
          Alias: '{{ Alias }}'
          VpcConfiguration:
            VpcId: '{{ VpcId }}'
          Policy: {}

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.fsx.s3access_point_attachments
WHERE Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>s3access_point_attachments</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
fsx:CreateAndAttachS3AccessPoint,
fsx:DescribeS3AccessPointAttachments,
s3:CreateAccessPoint,
s3:GetAccessPoint,
s3:PutAccessPointPolicy
```

</TabItem>
<TabItem value="read">

```json
fsx:DescribeS3AccessPointAttachments,
s3:GetAccessPoint
```

</TabItem>
<TabItem value="delete">

```json
fsx:DescribeS3AccessPointAttachments,
fsx:DetachAndDeleteS3AccessPoint,
s3:DeleteAccessPoint,
s3:GetAccessPoint
```

</TabItem>
<TabItem value="list">

```json
fsx:DescribeS3AccessPointAttachments,
s3:GetAccessPoint
```

</TabItem>
</Tabs>