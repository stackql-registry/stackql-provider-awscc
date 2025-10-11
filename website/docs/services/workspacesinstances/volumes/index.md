---
title: volumes
hide_title: false
hide_table_of_contents: false
keywords:
  - volumes
  - workspacesinstances
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

Creates, updates, deletes or gets a <code>volume</code> resource or lists <code>volumes</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>volumes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::WorkspacesInstances::Volume - Manages WorkSpaces Volume resources</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.workspacesinstances.volumes" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="volume_id" /></td><td><code>string</code></td><td>Unique identifier for the volume</td></tr>
<tr><td><CopyableCode code="availability_zone" /></td><td><code>string</code></td><td>The Availability Zone in which to create the volume</td></tr>
<tr><td><CopyableCode code="encrypted" /></td><td><code>boolean</code></td><td>Indicates whether the volume should be encrypted</td></tr>
<tr><td><CopyableCode code="iops" /></td><td><code>integer</code></td><td>The number of I/O operations per second (IOPS)</td></tr>
<tr><td><CopyableCode code="kms_key_id" /></td><td><code>string</code></td><td>The identifier of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for Amazon EBS encryption</td></tr>
<tr><td><CopyableCode code="size_in_gb" /></td><td><code>integer</code></td><td>The size of the volume, in GiBs</td></tr>
<tr><td><CopyableCode code="snapshot_id" /></td><td><code>string</code></td><td>The snapshot from which to create the volume</td></tr>
<tr><td><CopyableCode code="throughput" /></td><td><code>integer</code></td><td>The throughput to provision for a volume, with a maximum of 1,000 MiB/s</td></tr>
<tr><td><CopyableCode code="volume_type" /></td><td><code>string</code></td><td>The volume type</td></tr>
<tr><td><CopyableCode code="tag_specifications" /></td><td><code>array</code></td><td>The tags passed to EBS volume</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesinstances-volume.html"><code>AWS::WorkspacesInstances::Volume</code></a>.

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
    <td><CopyableCode code="AvailabilityZone, region" /></td>
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
Gets all <code>volumes</code> in a region.
```sql
SELECT
region,
volume_id,
availability_zone,
encrypted,
iops,
kms_key_id,
size_in_gb,
snapshot_id,
throughput,
volume_type,
tag_specifications
FROM awscc.workspacesinstances.volumes
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>volume</code>.
```sql
SELECT
region,
volume_id,
availability_zone,
encrypted,
iops,
kms_key_id,
size_in_gb,
snapshot_id,
throughput,
volume_type,
tag_specifications
FROM awscc.workspacesinstances.volumes
WHERE region = 'us-east-1' AND data__Identifier = '<VolumeId>';
```

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
INSERT INTO awscc.workspacesinstances.volumes (
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
INSERT INTO awscc.workspacesinstances.volumes (
 AvailabilityZone,
 Encrypted,
 Iops,
 KmsKeyId,
 SizeInGB,
 SnapshotId,
 Throughput,
 VolumeType,
 TagSpecifications,
 region
)
SELECT 
 '{{ AvailabilityZone }}',
 '{{ Encrypted }}',
 '{{ Iops }}',
 '{{ KmsKeyId }}',
 '{{ SizeInGB }}',
 '{{ SnapshotId }}',
 '{{ Throughput }}',
 '{{ VolumeType }}',
 '{{ TagSpecifications }}',
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
      - name: AvailabilityZone
        value: '{{ AvailabilityZone }}'
      - name: Encrypted
        value: '{{ Encrypted }}'
      - name: Iops
        value: '{{ Iops }}'
      - name: KmsKeyId
        value: '{{ KmsKeyId }}'
      - name: SizeInGB
        value: '{{ SizeInGB }}'
      - name: SnapshotId
        value: '{{ SnapshotId }}'
      - name: Throughput
        value: '{{ Throughput }}'
      - name: VolumeType
        value: '{{ VolumeType }}'
      - name: TagSpecifications
        value:
          - ResourceType: '{{ ResourceType }}'
            Tags:
              - Key: '{{ Key }}'
                Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.workspacesinstances.volumes
WHERE data__Identifier = '<VolumeId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>volumes</code> resource, the following permissions are required:

### Create
```json
workspaces-instances:CreateVolume,
ec2:CreateVolume,
ec2:CreateTags
```

### Read
```json
ec2:DescribeVolumes
```

### Delete
```json
workspaces-instances:DeleteVolume,
ec2:DescribeVolumes,
ec2:DeleteVolume
```

### List
```json
ec2:DescribeVolumes
```
