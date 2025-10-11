---
title: snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - snapshots
  - redshiftserverless
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

Creates, updates, deletes or gets a <code>snapshot</code> resource or lists <code>snapshots</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>snapshots</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::RedshiftServerless::Snapshot Resource Type.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.redshiftserverless.snapshots" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="snapshot_name" /></td><td><code>string</code></td><td>The name of the snapshot.</td></tr>
<tr><td><CopyableCode code="namespace_name" /></td><td><code>string</code></td><td>The namespace the snapshot is associated with.</td></tr>
<tr><td><CopyableCode code="owner_account" /></td><td><code>string</code></td><td>The owner account of the snapshot.</td></tr>
<tr><td><CopyableCode code="retention_period" /></td><td><code>integer</code></td><td>The retention period of the snapshot.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr>
<tr><td><CopyableCode code="snapshot" /></td><td><code>object</code></td><td>Definition for snapshot resource</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-snapshot.html"><code>AWS::RedshiftServerless::Snapshot</code></a>.

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
    <td><CopyableCode code="SnapshotName, region" /></td>
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
Gets all <code>snapshots</code> in a region.
```sql
SELECT
region,
snapshot_name,
namespace_name,
owner_account,
retention_period,
tags,
snapshot
FROM awscc.redshiftserverless.snapshots
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>snapshot</code>.
```sql
SELECT
region,
snapshot_name,
namespace_name,
owner_account,
retention_period,
tags,
snapshot
FROM awscc.redshiftserverless.snapshots
WHERE region = 'us-east-1' AND data__Identifier = '<SnapshotName>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>snapshot</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.redshiftserverless.snapshots (
 SnapshotName,
 region
)
SELECT 
'{{ SnapshotName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.redshiftserverless.snapshots (
 SnapshotName,
 NamespaceName,
 RetentionPeriod,
 Tags,
 region
)
SELECT 
 '{{ SnapshotName }}',
 '{{ NamespaceName }}',
 '{{ RetentionPeriod }}',
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
  - name: snapshot
    props:
      - name: SnapshotName
        value: '{{ SnapshotName }}'
      - name: NamespaceName
        value: '{{ NamespaceName }}'
      - name: RetentionPeriod
        value: '{{ RetentionPeriod }}'
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
DELETE FROM awscc.redshiftserverless.snapshots
WHERE data__Identifier = '<SnapshotName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>snapshots</code> resource, the following permissions are required:

### Create
```json
redshift-serverless:CreateSnapshot,
redshift-serverless:GetSnapshot,
redshift-serverless:ListTagsForResource,
redshift-serverless:TagResource,
redshift-serverless:GetNamespace
```

### Read
```json
redshift-serverless:GetSnapshot,
redshift-serverless:ListTagsForResource,
redshift-serverless:GetNamespace
```

### Update
```json
redshift-serverless:UpdateSnapshot,
redshift-serverless:GetSnapshot,
redshift-serverless:ListTagsForResource,
redshift-serverless:TagResource,
redshift-serverless:UntagResource,
redshift-serverless:GetNamespace
```

### Delete
```json
redshift-serverless:DeleteSnapshot,
redshift-serverless:GetSnapshot,
redshift-serverless:ListTagsForResource,
redshift-serverless:UntagResource,
redshift-serverless:GetNamespace
```

### List
```json
redshift-serverless:ListSnapshots,
redshift-serverless:GetSnapshot,
redshift-serverless:ListTagsForResource,
redshift-serverless:GetNamespace
```
