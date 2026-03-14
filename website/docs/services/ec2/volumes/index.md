---
title: volumes
hide_title: false
hide_table_of_contents: false
keywords:
  - volumes
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

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>volume</code> resource or lists <code>volumes</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>volumes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td><details><summary>Specifies an Amazon Elastic Block Store (Amazon EBS) volume.</summary>When you use CFNlong to update an Amazon EBS volume that modifies <code>Iops</code>, <code>Size</code>, or <code>VolumeType</code>, there is a cooldown period before another operation can occur. This can cause your stack to report being in <code>UPDATE_IN_PROGRESS</code> or <code>UPDATE_ROLLBACK_IN_PROGRESS</code> for long periods of time.<br />Amazon EBS does not support sizing down an Amazon EBS volume. CFNlong does not attempt to modify an Amazon EBS volume to a smaller size on rollback.<br />Some common scenarios when you might encounter a cooldown period for Amazon EBS include:<br />+  You successfully update an Amazon EBS volume and the update succeeds. When you attempt another update within the cooldown window, that update will be subject to a cooldown period.<br />+  You successfully update an Amazon EBS volume and the update succeeds but another change in your <code>update-stack</code> call fails. The rollback will be subject to a cooldown period.<br />For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/modify-volume-requirements.html">Requirements for EBS volume modifications</a>.<br /><i>DeletionPolicy attribute</i><br />To control how CFNlong handles the volume when the stack is deleted, set a deletion policy for your volume. You can choose to retain the volume, to delete the volume, or to create a snapshot of the volume. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html">DeletionPolicy attribute</a>.<br />If you set a deletion policy that creates a snapshot, all tags on the volume are included in the snapshot.</details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.volumes" /></td></tr>
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
    "name": "multi_attach_enabled",
    "type": "boolean",
    "description": "<details><summary>Indicates whether Amazon EBS Multi-Attach is enabled.</summary>CFNlong does not currently support updating a single-attach volume to be multi-attach enabled, updating a multi-attach enabled volume to be single-attach, or updating the size or number of I/O operations per second (IOPS) of a multi-attach enabled volume.</details>"
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "<details><summary>The identifier of the kms-key-long to use for Amazon EBS encryption. If <code>KmsKeyId</code> is specified, the encrypted state must be <code>true</code>.</summary>If you omit this property and your account is enabled for encryption by default, or <i>Encrypted</i> is set to <code>true</code>, then the volume is encrypted using the default key specified for your account. If your account does not have a default key, then the volume is encrypted using the aws-managed-key.<br />Alternatively, if you want to specify a different key, you can specify one of the following:<br />+  Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab.<br />+  Key alias. Specify the alias for the key, prefixed with <code>alias/</code>. For example, for a key with the alias <code>my_cmk</code>, use <code>alias/my_cmk</code>. Or to specify the aws-managed-key, use <code>alias/aws/ebs</code>.<br />+  Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab.<br />+  Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.</details>"
  },
  {
    "name": "encrypted",
    "type": "boolean",
    "description": "<details><summary>Indicates whether the volume should be encrypted. The effect of setting the encryption state to <code>true</code> depends on the volume origin (new or from a snapshot), starting encryption state, ownership, and whether encryption by default is enabled. For more information, see <a href=\"https://docs.aws.amazon.com/ebs/latest/userguide/work-with-ebs-encr.html#encryption-by-default\">Encryption by default</a> in the <i>Amazon EBS User Guide</i>.</summary>Encrypted Amazon EBS volumes must be attached to instances that support Amazon EBS encryption. For more information, see <a href=\"https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption-requirements.html#ebs-encryption_supported_instances\">Supported instance types</a>.</details>"
  },
  {
    "name": "size",
    "type": "integer",
    "description": "<details><summary>The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size. If you specify a snapshot, the default is the snapshot size. You can specify a volume size that is equal to or larger than the snapshot size.</summary>The following are the supported volumes sizes for each volume type:<br />+  <code>gp2</code> and <code>gp3</code>: 1 - 16,384 GiB<br />+  <code>io1</code>: 4 - 16,384 GiB<br />+  <code>io2</code>: 4 - 65,536 GiB<br />+  <code>st1</code> and <code>sc1</code>: 125 - 16,384 GiB<br />+  <code>standard</code>: 1 - 1024 GiB</details>"
  },
  {
    "name": "auto_enable_io",
    "type": "boolean",
    "description": "Indicates whether the volume is auto-enabled for I/O operations. By default, Amazon EBS disables I/O to the volume from attached EC2 instances when it determines that a volume's data is potentially inconsistent. If the consistency of the volume is not a concern, and you prefer that the volume be made available immediately if it's impaired, you can configure the volume to automatically enable I/O."
  },
  {
    "name": "outpost_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the Outpost."
  },
  {
    "name": "availability_zone",
    "type": "string",
    "description": "<details><summary>The ID of the Availability Zone in which to create the volume. For example, <code>us-east-1a</code>.</summary>Either <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code> must be specified, but not both.</details>"
  },
  {
    "name": "throughput",
    "type": "integer",
    "description": "<details><summary>The throughput to provision for a volume, with a maximum of 1,000 MiB/s.</summary>This parameter is valid only for <code>gp3</code> volumes. The default value is 125.<br />Valid Range: Minimum value of 125. Maximum value of 1000.</details>"
  },
  {
    "name": "iops",
    "type": "integer",
    "description": "<details><summary>The number of I/O operations per second (IOPS). For <code>gp3</code>, <code>io1</code>, and <code>io2</code> volumes, this represents the number of IOPS that are provisioned for the volume. For <code>gp2</code> volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.</summary>The following are the supported values for each volume type:<br />+  <code>gp3</code>: 3,000 - 16,000 IOPS<br />+  <code>io1</code>: 100 - 64,000 IOPS<br />+  <code>io2</code>: 100 - 256,000 IOPS<br />For <code>io2</code> volumes, you can achieve up to 256,000 IOPS on <a href=\"https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-nitro-instances.html\">instances built on the Nitro System</a>. On other instances, you can achieve performance up to 32,000 IOPS.<br />This parameter is required for <code>io1</code> and <code>io2</code> volumes. The default for <code>gp3</code> volumes is 3,000 IOPS. This parameter is not supported for <code>gp2</code>, <code>st1</code>, <code>sc1</code>, or <code>standard</code> volumes.</details>"
  },
  {
    "name": "volume_initialization_rate",
    "type": "integer",
    "description": "<details><summary>Specifies the Amazon EBS Provisioned Rate for Volume Initialization (volume initialization rate), in MiB/s, at which to download the snapshot blocks from Amazon S3 to the volume. This is also known as <i>volume initialization</i>. Specifying a volume initialization rate ensures that the volume is initialized at a predictable and consistent rate after creation.</summary>This parameter is supported only for volumes created from snapshots. Omit this parameter if:<br />+  You want to create the volume using fast snapshot restore. You must specify a snapshot that is enabled for fast snapshot restore. In this case, the volume is fully initialized at creation.<br />If you specify a snapshot that is enabled for fast snapshot restore and a volume initialization rate, the volume will be initialized at the specified rate instead of fast snapshot restore.<br />+  You want to create a volume that is initialized at the default rate.<br />For more information, see <a href=\"https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html\">Initialize Amazon EBS volumes</a> in the <i>Amazon EC2 User Guide</i>.<br />Valid range: 100 - 300 MiB/s</details>"
  },
  {
    "name": "snapshot_id",
    "type": "string",
    "description": "The snapshot from which to create the volume. You must specify either a snapshot ID or a volume size."
  },
  {
    "name": "volume_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "volume_type",
    "type": "string",
    "description": "<details><summary>The volume type. This parameter can be one of the following values:</summary>+  General Purpose SSD: <code>gp2</code> | <code>gp3</code><br />+  Provisioned IOPS SSD: <code>io1</code> | <code>io2</code><br />+  Throughput Optimized HDD: <code>st1</code><br />+  Cold HDD: <code>sc1</code><br />+  Magnetic: <code>standard</code><br />For more information, see <a href=\"https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html\">Amazon EBS volume types</a>.<br />Default: <code>gp2</code></details>"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags to apply to the volume during creation.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The tag key."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The tag value."
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
    "name": "volume_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-volume.html"><code>AWS::EC2::Volume</code></a>.

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
    <td><code>volumes</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AvailabilityZone, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>volumes</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>volumes</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>volumes_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>volumes</code></td>
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

Gets all properties from an individual <code>volume</code>.
```sql
SELECT
  region,
  multi_attach_enabled,
  kms_key_id,
  encrypted,
  size,
  auto_enable_io,
  outpost_arn,
  availability_zone,
  throughput,
  iops,
  volume_initialization_rate,
  snapshot_id,
  volume_id,
  volume_type,
  tags
FROM awscc.ec2.volumes
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ volume_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>volumes</code> in a region.
```sql
SELECT
  region,
  volume_id
FROM awscc.ec2.volumes_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>volume</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.volumes (
  AvailabilityZone,
  region
)
SELECT
  '{{ availability_zone }}',
  '{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.volumes (
  MultiAttachEnabled,
  KmsKeyId,
  Encrypted,
  Size,
  AutoEnableIO,
  OutpostArn,
  AvailabilityZone,
  Throughput,
  Iops,
  VolumeInitializationRate,
  SnapshotId,
  VolumeType,
  Tags,
  region
)
SELECT
  '{{ multi_attach_enabled }}',
  '{{ kms_key_id }}',
  '{{ encrypted }}',
  '{{ size }}',
  '{{ auto_enable_io }}',
  '{{ outpost_arn }}',
  '{{ availability_zone }}',
  '{{ throughput }}',
  '{{ iops }}',
  '{{ volume_initialization_rate }}',
  '{{ snapshot_id }}',
  '{{ volume_type }}',
  '{{ tags }}',
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
  - name: volume
    props:
      - name: multi_attach_enabled
        value: '{{ multi_attach_enabled }}'
      - name: kms_key_id
        value: '{{ kms_key_id }}'
      - name: encrypted
        value: '{{ encrypted }}'
      - name: size
        value: '{{ size }}'
      - name: auto_enable_io
        value: '{{ auto_enable_io }}'
      - name: outpost_arn
        value: '{{ outpost_arn }}'
      - name: availability_zone
        value: '{{ availability_zone }}'
      - name: throughput
        value: '{{ throughput }}'
      - name: iops
        value: '{{ iops }}'
      - name: volume_initialization_rate
        value: '{{ volume_initialization_rate }}'
      - name: snapshot_id
        value: '{{ snapshot_id }}'
      - name: volume_type
        value: '{{ volume_type }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>volume</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.volumes
SET PatchDocument = string('{{ {
    "MultiAttachEnabled": multi_attach_enabled,
    "KmsKeyId": kms_key_id,
    "Encrypted": encrypted,
    "Size": size,
    "AutoEnableIO": auto_enable_io,
    "OutpostArn": outpost_arn,
    "AvailabilityZone": availability_zone,
    "Throughput": throughput,
    "Iops": iops,
    "VolumeInitializationRate": volume_initialization_rate,
    "SnapshotId": snapshot_id,
    "VolumeType": volume_type,
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ volume_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.volumes
WHERE
  Identifier = '{{ volume_id }}' AND
  region = '{{ region }}';
```

## Permissions

To operate on the <code>volumes</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="read">

```json
ec2:DescribeVolumes,
ec2:DescribeVolumeAttribute,
ec2:DescribeTags
```

</TabItem>
<TabItem value="create">

```json
ec2:CreateVolume,
ec2:DescribeVolumes,
ec2:DescribeVolumeAttribute,
ec2:ModifyVolumeAttribute,
ec2:CreateTags,
kms:GenerateDataKeyWithoutPlaintext,
kms:CreateGrant
```

</TabItem>
<TabItem value="update">

```json
ec2:ModifyVolume,
ec2:ModifyVolumeAttribute,
ec2:DescribeVolumeAttribute,
ec2:DescribeVolumesModifications,
ec2:DescribeVolumes,
ec2:CreateTags,
ec2:DeleteTags
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeVolumes,
ec2:DescribeTags,
ec2:DescribeVolumeAttribute
```

</TabItem>
<TabItem value="delete">

```json
ec2:DeleteVolume,
ec2:CreateSnapshot,
ec2:DescribeSnapshots,
ec2:DeleteTags,
ec2:DescribeVolumes
```

</TabItem>
</Tabs>