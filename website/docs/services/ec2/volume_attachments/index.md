---
title: volume_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - volume_attachments
  - ec2
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

Creates, updates, deletes or gets a <code>volume_attachment</code> resource or lists <code>volume_attachments</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>volume_attachments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td><details><summary>Attaches an Amazon EBS volume to a running instance and exposes it to the instance with the specified device name.</summary>Before this resource can be deleted (and therefore the volume detached), you must first unmount the volume in the instance. Failure to do so results in the volume being stuck in the busy state while it is trying to detach, which could possibly damage the file system or the data it contains.<br />If an Amazon EBS volume is the root device of an instance, it cannot be detached while the instance is in the "running" state. To detach the root volume, stop the instance first.<br />If the root volume is detached from an instance with an MKT product code, then the product codes from that volume are no longer associated with the instance.</details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.volume_attachments" /></td></tr>
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
    "name": "volume_id",
    "type": "string",
    "description": "The ID of the Amazon EBS volume. The volume and instance must be within the same Availability Zone. This value can be a reference to an <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ebs-volume.html\">AWS::EC2::Volume</a> resource, or it can be the volume ID of an existing Amazon EBS volume."
  },
  {
    "name": "instance_id",
    "type": "string",
    "description": "The ID of the instance to which the volume attaches. This value can be a reference to an <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html\">AWS::EC2::Instance</a> resource, or it can be the physical ID of an existing EC2 instance."
  },
  {
    "name": "device",
    "type": "string",
    "description": "The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>)."
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
    "name": "volume_id",
    "type": "string",
    "description": "The ID of the Amazon EBS volume. The volume and instance must be within the same Availability Zone. This value can be a reference to an <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ebs-volume.html\">AWS::EC2::Volume</a> resource, or it can be the volume ID of an existing Amazon EBS volume."
  },
  {
    "name": "instance_id",
    "type": "string",
    "description": "The ID of the instance to which the volume attaches. This value can be a reference to an <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html\">AWS::EC2::Instance</a> resource, or it can be the physical ID of an existing EC2 instance."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-volumeattachment.html"><code>AWS::EC2::VolumeAttachment</code></a>.

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
    <td><code>volume_attachments</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="VolumeId, InstanceId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>volume_attachments</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>volume_attachments_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>volume_attachments</code></td>
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

Gets all properties from an individual <code>volume_attachment</code>.
```sql
SELECT
  region,
  volume_id,
  instance_id,
  device
FROM awscc.ec2.volume_attachments
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ volume_id }}|{{ instance_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>volume_attachments</code> in a region.
```sql
SELECT
  region,
  volume_id,
  instance_id
FROM awscc.ec2.volume_attachments_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>volume_attachment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.volume_attachments (
  VolumeId,
  InstanceId,
  region
)
SELECT
  '{{ volume_id }}',
  '{{ instance_id }}',
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
INSERT INTO awscc.ec2.volume_attachments (
  VolumeId,
  InstanceId,
  Device,
  region
)
SELECT
  '{{ volume_id }}',
  '{{ instance_id }}',
  '{{ device }}',
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
  - name: volume_attachment
    props:
      - name: volume_id
        value: '{{ volume_id }}'
      - name: instance_id
        value: '{{ instance_id }}'
      - name: device
        value: '{{ device }}'`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.volume_attachments
WHERE
  Identifier = '{{ volume_id }}|{{ instance_id }}' AND
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

To operate on the <code>volume_attachments</code> resource, the following permissions are required:

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
ec2:AttachVolume,
ec2:DescribeVolumes
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeVolumes
```

</TabItem>
<TabItem value="delete">

```json
ec2:DetachVolume,
ec2:DescribeVolumes
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeVolumes
```

</TabItem>
</Tabs>