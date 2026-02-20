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
<tr><td><b>Description</b></td><td>Specifies an Amazon Elastic Block Store (Amazon EBS) volume.<br />When you use CFNlong to update an Amazon EBS volume that modifies &#96;&#96;Iops&#96;&#96;, &#96;&#96;Size&#96;&#96;, or &#96;&#96;VolumeType&#96;&#96;, there is a cooldown period before another operation can occur. This can cause your stack to report being in &#96;&#96;UPDATE&#95;IN&#95;PROGRESS&#96;&#96; or &#96;&#96;UPDATE&#95;ROLLBACK&#95;IN&#95;PROGRESS&#96;&#96; for long periods of time.<br />Amazon EBS does not support sizing down an Amazon EBS volume. CFNlong does not attempt to modify an Amazon EBS volume to a smaller size on rollback.<br />Some common scenarios when you might encounter a cooldown period for Amazon EBS include:<br />+ You successfully update an Amazon EBS volume and the update succeeds. When you attempt another update within the cooldown window, that update will be subject to a cooldown period.<br />+ You successfully update an Amazon EBS volume and the update succeeds but another change in your &#96;&#96;update-stack&#96;&#96; call fails. The rollback will be subject to a cooldown period.<br /><br />For more information, see &#91;Requirements for EBS volume modifications&#93;(https://docs.aws.amazon.com/ebs/latest/userguide/modify-volume-requirements.html).<br />&#42;DeletionPolicy attribute&#42; <br />To control how CFNlong handles the volume when the stack is deleted, set a deletion policy for your volume. You can choose to retain the volume, to delete the volume, or to create a snapshot of the volume. For more information, see &#91;DeletionPolicy attribute&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html).<br />If you set a deletion policy that creates a snapshot, all tags on the volume are included in the snapshot.</td></tr>
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
    "description": "Indicates whether Amazon EBS Multi-Attach is enabled.<br />CFNlong does not currently support updating a single-attach volume to be multi-attach enabled, updating a multi-attach enabled volume to be single-attach, or updating the size or number of I/O operations per second (IOPS) of a multi-attach enabled volume."
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "The identifier of the kms-key-long to use for Amazon EBS encryption. If &#96;&#96;KmsKeyId&#96;&#96; is specified, the encrypted state must be &#96;&#96;true&#96;&#96;.<br />If you omit this property and your account is enabled for encryption by default, or &#42;Encrypted&#42; is set to &#96;&#96;true&#96;&#96;, then the volume is encrypted using the default key specified for your account. If your account does not have a default key, then the volume is encrypted using the aws-managed-key.<br />Alternatively, if you want to specify a different key, you can specify one of the following:<br />+ Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab.<br />+ Key alias. Specify the alias for the key, prefixed with &#96;&#96;alias/&#96;&#96;. For example, for a key with the alias &#96;&#96;my&#95;cmk&#96;&#96;, use &#96;&#96;alias/my&#95;cmk&#96;&#96;. Or to specify the aws-managed-key, use &#96;&#96;alias/aws/ebs&#96;&#96;.<br />+ Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab.<br />+ Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias."
  },
  {
    "name": "encrypted",
    "type": "boolean",
    "description": "Indicates whether the volume should be encrypted. The effect of setting the encryption state to &#96;&#96;true&#96;&#96; depends on the volume origin (new or from a snapshot), starting encryption state, ownership, and whether encryption by default is enabled. For more information, see &#91;Encryption by default&#93;(https://docs.aws.amazon.com/ebs/latest/userguide/work-with-ebs-encr.html#encryption-by-default) in the &#42;Amazon EBS User Guide&#42;.<br />Encrypted Amazon EBS volumes must be attached to instances that support Amazon EBS encryption. For more information, see &#91;Supported instance types&#93;(https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption-requirements.html#ebs-encryption&#95;supported&#95;instances)."
  },
  {
    "name": "size",
    "type": "integer",
    "description": "The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size. If you specify a snapshot, the default is the snapshot size. You can specify a volume size that is equal to or larger than the snapshot size.<br />The following are the supported volumes sizes for each volume type:<br />+ &#96;&#96;gp2&#96;&#96; and &#96;&#96;gp3&#96;&#96;: 1 - 16,384 GiB<br />+ &#96;&#96;io1&#96;&#96;: 4 - 16,384 GiB<br />+ &#96;&#96;io2&#96;&#96;: 4 - 65,536 GiB<br />+ &#96;&#96;st1&#96;&#96; and &#96;&#96;sc1&#96;&#96;: 125 - 16,384 GiB<br />+ &#96;&#96;standard&#96;&#96;: 1 - 1024 GiB"
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
    "description": "The ID of the Availability Zone in which to create the volume. For example, &#96;&#96;us-east-1a&#96;&#96;.<br />Either &#96;&#96;AvailabilityZone&#96;&#96; or &#96;&#96;AvailabilityZoneId&#96;&#96; must be specified, but not both."
  },
  {
    "name": "throughput",
    "type": "integer",
    "description": "The throughput to provision for a volume, with a maximum of 1,000 MiB/s.<br />This parameter is valid only for &#96;&#96;gp3&#96;&#96; volumes. The default value is 125.<br />Valid Range: Minimum value of 125. Maximum value of 1000."
  },
  {
    "name": "iops",
    "type": "integer",
    "description": "The number of I/O operations per second (IOPS). For &#96;&#96;gp3&#96;&#96;, &#96;&#96;io1&#96;&#96;, and &#96;&#96;io2&#96;&#96; volumes, this represents the number of IOPS that are provisioned for the volume. For &#96;&#96;gp2&#96;&#96; volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.<br />The following are the supported values for each volume type:<br />+ &#96;&#96;gp3&#96;&#96;: 3,000 - 16,000 IOPS<br />+ &#96;&#96;io1&#96;&#96;: 100 - 64,000 IOPS<br />+ &#96;&#96;io2&#96;&#96;: 100 - 256,000 IOPS<br /><br />For &#96;&#96;io2&#96;&#96; volumes, you can achieve up to 256,000 IOPS on &#91;instances built on the Nitro System&#93;(https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-nitro-instances.html). On other instances, you can achieve performance up to 32,000 IOPS.<br />This parameter is required for &#96;&#96;io1&#96;&#96; and &#96;&#96;io2&#96;&#96; volumes. The default for &#96;&#96;gp3&#96;&#96; volumes is 3,000 IOPS. This parameter is not supported for &#96;&#96;gp2&#96;&#96;, &#96;&#96;st1&#96;&#96;, &#96;&#96;sc1&#96;&#96;, or &#96;&#96;standard&#96;&#96; volumes."
  },
  {
    "name": "volume_initialization_rate",
    "type": "integer",
    "description": "Specifies the Amazon EBS Provisioned Rate for Volume Initialization (volume initialization rate), in MiB/s, at which to download the snapshot blocks from Amazon S3 to the volume. This is also known as &#42;volume initialization&#42;. Specifying a volume initialization rate ensures that the volume is initialized at a predictable and consistent rate after creation.<br />This parameter is supported only for volumes created from snapshots. Omit this parameter if:<br />+ You want to create the volume using fast snapshot restore. You must specify a snapshot that is enabled for fast snapshot restore. In this case, the volume is fully initialized at creation.<br />If you specify a snapshot that is enabled for fast snapshot restore and a volume initialization rate, the volume will be initialized at the specified rate instead of fast snapshot restore.<br />+ You want to create a volume that is initialized at the default rate.<br /><br />For more information, see &#91;Initialize Amazon EBS volumes&#93;(https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html) in the &#42;Amazon EC2 User Guide&#42;.<br />Valid range: 100 - 300 MiB/s"
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
    "description": "The volume type. This parameter can be one of the following values:<br />+ General Purpose SSD: &#96;&#96;gp2&#96;&#96; &#124; &#96;&#96;gp3&#96;&#96;<br />+ Provisioned IOPS SSD: &#96;&#96;io1&#96;&#96; &#124; &#96;&#96;io2&#96;&#96;<br />+ Throughput Optimized HDD: &#96;&#96;st1&#96;&#96;<br />+ Cold HDD: &#96;&#96;sc1&#96;&#96;<br />+ Magnetic: &#96;&#96;standard&#96;&#96;<br /><br />For more information, see &#91;Amazon EBS volume types&#93;(https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html).<br />Default: &#96;&#96;gp2&#96;&#96;"
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
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>volumes</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
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
WHERE region = 'us-east-1' AND data__Identifier = '<VolumeId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>volumes</code> in a region.
```sql
SELECT
region,
volume_id
FROM awscc.ec2.volumes_list_only
WHERE region = 'us-east-1';
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
'{{ AvailabilityZone }}',
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
 '{{ MultiAttachEnabled }}',
 '{{ KmsKeyId }}',
 '{{ Encrypted }}',
 '{{ Size }}',
 '{{ AutoEnableIO }}',
 '{{ OutpostArn }}',
 '{{ AvailabilityZone }}',
 '{{ Throughput }}',
 '{{ Iops }}',
 '{{ VolumeInitializationRate }}',
 '{{ SnapshotId }}',
 '{{ VolumeType }}',
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
  - name: volume
    props:
      - name: MultiAttachEnabled
        value: '{{ MultiAttachEnabled }}'
      - name: KmsKeyId
        value: '{{ KmsKeyId }}'
      - name: Encrypted
        value: '{{ Encrypted }}'
      - name: Size
        value: '{{ Size }}'
      - name: AutoEnableIO
        value: '{{ AutoEnableIO }}'
      - name: OutpostArn
        value: '{{ OutpostArn }}'
      - name: AvailabilityZone
        value: '{{ AvailabilityZone }}'
      - name: Throughput
        value: '{{ Throughput }}'
      - name: Iops
        value: '{{ Iops }}'
      - name: VolumeInitializationRate
        value: '{{ VolumeInitializationRate }}'
      - name: SnapshotId
        value: '{{ SnapshotId }}'
      - name: VolumeType
        value: '{{ VolumeType }}'
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
UPDATE awscc.ec2.volumes
SET data__PatchDocument = string('{{ {
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
WHERE region = '{{ region }}'
AND data__Identifier = '<VolumeId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.volumes
WHERE data__Identifier = '<VolumeId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>volumes</code> resource, the following permissions are required:

### Read
```json
ec2:DescribeVolumes,
ec2:DescribeVolumeAttribute,
ec2:DescribeTags
```

### Create
```json
ec2:CreateVolume,
ec2:DescribeVolumes,
ec2:DescribeVolumeAttribute,
ec2:ModifyVolumeAttribute,
ec2:CreateTags,
kms:GenerateDataKeyWithoutPlaintext,
kms:CreateGrant
```

### Update
```json
ec2:ModifyVolume,
ec2:ModifyVolumeAttribute,
ec2:DescribeVolumeAttribute,
ec2:DescribeVolumesModifications,
ec2:DescribeVolumes,
ec2:CreateTags,
ec2:DeleteTags
```

### List
```json
ec2:DescribeVolumes,
ec2:DescribeTags,
ec2:DescribeVolumeAttribute
```

### Delete
```json
ec2:DeleteVolume,
ec2:CreateSnapshot,
ec2:DescribeSnapshots,
ec2:DeleteTags,
ec2:DescribeVolumes
```
