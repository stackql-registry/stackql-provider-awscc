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
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>The Name of the S3AccessPointAttachment</td></tr>
<tr><td><CopyableCode code="type" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="open_zf_sconfiguration" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="s3_access_point" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-s3accesspointattachment.html"><code>AWS::FSx::S3AccessPointAttachment</code></a>.

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
    <td><CopyableCode code="Name, Type, OpenZFSConfiguration, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples
Gets all <code>s3access_point_attachments</code> in a region.
```sql
SELECT
region,
name,
type,
open_zf_sconfiguration,
s3_access_point
FROM awscc.fsx.s3access_point_attachments
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>s3access_point_attachment</code>.
```sql
SELECT
region,
name,
type,
open_zf_sconfiguration,
s3_access_point
FROM awscc.fsx.s3access_point_attachments
WHERE region = 'us-east-1' AND data__Identifier = '<Name>';
```

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
WHERE data__Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>s3access_point_attachments</code> resource, the following permissions are required:

### Create
```json
fsx:CreateAndAttachS3AccessPoint,
fsx:DescribeS3AccessPointAttachments,
s3:CreateAccessPoint,
s3:GetAccessPoint,
s3:PutAccessPointPolicy
```

### Read
```json
fsx:DescribeS3AccessPointAttachments,
s3:GetAccessPoint
```

### Delete
```json
fsx:DescribeS3AccessPointAttachments,
fsx:DetachAndDeleteS3AccessPoint,
s3:DeleteAccessPoint,
s3:GetAccessPoint
```

### List
```json
fsx:DescribeS3AccessPointAttachments,
s3:GetAccessPoint
```
