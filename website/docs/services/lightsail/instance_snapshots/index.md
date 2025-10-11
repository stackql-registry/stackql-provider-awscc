---
title: instance_snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_snapshots
  - lightsail
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

Creates, updates, deletes or gets an <code>instance_snapshot</code> resource or lists <code>instance_snapshots</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>instance_snapshots</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Lightsail::InstanceSnapshot</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lightsail.instance_snapshots" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="instance_snapshot_name" /></td><td><code>string</code></td><td>The name of the snapshot.</td></tr>
<tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the snapshot.</td></tr>
<tr><td><CopyableCode code="instance_name" /></td><td><code>string</code></td><td>The instance from which the snapshot was created.</td></tr>
<tr><td><CopyableCode code="resource_type" /></td><td><code>string</code></td><td>The type of resource (usually InstanceSnapshot).</td></tr>
<tr><td><CopyableCode code="state" /></td><td><code>string</code></td><td>The state the snapshot is in.</td></tr>
<tr><td><CopyableCode code="from_instance_name" /></td><td><code>string</code></td><td>The instance from which the snapshot was created.</td></tr>
<tr><td><CopyableCode code="from_instance_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the instance from which the snapshot was created.</td></tr>
<tr><td><CopyableCode code="size_in_gb" /></td><td><code>integer</code></td><td>The size in GB of the SSD</td></tr>
<tr><td><CopyableCode code="is_from_auto_snapshot" /></td><td><code>boolean</code></td><td>A Boolean value indicating whether the snapshot was created from an automatic snapshot.</td></tr>
<tr><td><CopyableCode code="support_code" /></td><td><code>string</code></td><td>Support code to help identify any issues</td></tr>
<tr><td><CopyableCode code="location" /></td><td><code>object</code></td><td>The region name and Availability Zone where you created the snapshot.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instancesnapshot.html"><code>AWS::Lightsail::InstanceSnapshot</code></a>.

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
    <td><CopyableCode code="InstanceSnapshotName, InstanceName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
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
Gets all <code>instance_snapshots</code> in a region.
```sql
SELECT
region,
instance_snapshot_name,
arn,
instance_name,
resource_type,
state,
from_instance_name,
from_instance_arn,
size_in_gb,
is_from_auto_snapshot,
support_code,
location,
tags
FROM awscc.lightsail.instance_snapshots
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>instance_snapshot</code>.
```sql
SELECT
region,
instance_snapshot_name,
arn,
instance_name,
resource_type,
state,
from_instance_name,
from_instance_arn,
size_in_gb,
is_from_auto_snapshot,
support_code,
location,
tags
FROM awscc.lightsail.instance_snapshots
WHERE region = 'us-east-1' AND data__Identifier = '<InstanceSnapshotName>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>instance_snapshot</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.lightsail.instance_snapshots (
 InstanceSnapshotName,
 InstanceName,
 region
)
SELECT 
'{{ InstanceSnapshotName }}',
 '{{ InstanceName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.lightsail.instance_snapshots (
 InstanceSnapshotName,
 InstanceName,
 Tags,
 region
)
SELECT 
 '{{ InstanceSnapshotName }}',
 '{{ InstanceName }}',
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
  - name: instance_snapshot
    props:
      - name: InstanceSnapshotName
        value: '{{ InstanceSnapshotName }}'
      - name: InstanceName
        value: '{{ InstanceName }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.lightsail.instance_snapshots
WHERE data__Identifier = '<InstanceSnapshotName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>instance_snapshots</code> resource, the following permissions are required:

### Create
```json
lightsail:CreateInstanceSnapshot,
lightsail:GetInstanceSnapshot,
lightsail:TagResource
```

### Read
```json
lightsail:GetInstanceSnapshot
```

### Update
```json
lightsail:GetInstanceSnapshot,
lightsail:TagResource,
lightsail:UntagResource
```

### Delete
```json
lightsail:GetInstanceSnapshot,
lightsail:DeleteInstanceSnapshot
```

### List
```json
lightsail:GetInstanceSnapshots
```
