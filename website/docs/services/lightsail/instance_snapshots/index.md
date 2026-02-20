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
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

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
    "name": "instance_snapshot_name",
    "type": "string",
    "description": "The name of the snapshot."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the snapshot."
  },
  {
    "name": "instance_name",
    "type": "string",
    "description": "The instance from which the snapshot was created."
  },
  {
    "name": "resource_type",
    "type": "string",
    "description": "The type of resource (usually InstanceSnapshot)."
  },
  {
    "name": "state",
    "type": "string",
    "description": "The state the snapshot is in."
  },
  {
    "name": "from_instance_name",
    "type": "string",
    "description": "The instance from which the snapshot was created."
  },
  {
    "name": "from_instance_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the instance from which the snapshot was created."
  },
  {
    "name": "size_in_gb",
    "type": "integer",
    "description": "The size in GB of the SSD"
  },
  {
    "name": "is_from_auto_snapshot",
    "type": "boolean",
    "description": "A Boolean value indicating whether the snapshot was created from an automatic snapshot."
  },
  {
    "name": "support_code",
    "type": "string",
    "description": "Support code to help identify any issues"
  },
  {
    "name": "location",
    "type": "object",
    "description": "The region name and Availability Zone where you created the snapshot.",
    "children": [
      {
        "name": "availability_zone",
        "type": "string",
        "description": "The Availability Zone. Follows the format us-east-2a (case-sensitive)."
      },
      {
        "name": "region_name",
        "type": "string",
        "description": "The AWS Region name."
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
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
    "name": "instance_snapshot_name",
    "type": "string",
    "description": "The name of the snapshot."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instancesnapshot.html"><code>AWS::Lightsail::InstanceSnapshot</code></a>.

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
    <td><code>instance_snapshots</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="InstanceSnapshotName, InstanceName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>instance_snapshots</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>instance_snapshots</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>instance_snapshots_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>instance_snapshots</code></td>
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
WHERE region = 'us-east-1' AND Identifier = '<InstanceSnapshotName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>instance_snapshots</code> in a region.
```sql
SELECT
region,
instance_snapshot_name
FROM awscc.lightsail.instance_snapshots_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.lightsail.instance_snapshots
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<InstanceSnapshotName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.lightsail.instance_snapshots
WHERE Identifier = '<InstanceSnapshotName>'
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
