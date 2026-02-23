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
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

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
    "name": "snapshot_name",
    "type": "string",
    "description": "The name of the snapshot."
  },
  {
    "name": "namespace_name",
    "type": "string",
    "description": "The namespace the snapshot is associated with."
  },
  {
    "name": "owner_account",
    "type": "string",
    "description": "The owner account of the snapshot."
  },
  {
    "name": "retention_period",
    "type": "integer",
    "description": "The retention period of the snapshot."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "snapshot",
    "type": "object",
    "description": "Definition for snapshot resource",
    "children": [
      {
        "name": "snapshot_name",
        "type": "string",
        "description": "The name of the snapshot."
      },
      {
        "name": "namespace_name",
        "type": "string",
        "description": "The namespace the snapshot is associated with."
      },
      {
        "name": "owner_account",
        "type": "string",
        "description": "The owner account of the snapshot."
      },
      {
        "name": "retention_period",
        "type": "integer",
        "description": "The retention period of the snapshot."
      },
      {
        "name": "tags",
        "type": "array",
        "description": "An array of key-value pairs to apply to this resource."
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
    "name": "snapshot_name",
    "type": "string",
    "description": "The name of the snapshot."
  },
  {
    "name": "snapshot",
    "type": "object",
    "description": "Definition for snapshot resource",
    "children": [
      {
        "name": "snapshot_name",
        "type": "string",
        "description": "The name of the snapshot."
      },
      {
        "name": "namespace_name",
        "type": "string",
        "description": "The namespace the snapshot is associated with."
      },
      {
        "name": "owner_account",
        "type": "string",
        "description": "The owner account of the snapshot."
      },
      {
        "name": "retention_period",
        "type": "integer",
        "description": "The retention period of the snapshot."
      },
      {
        "name": "tags",
        "type": "array",
        "description": "An array of key-value pairs to apply to this resource."
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
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-snapshot.html"><code>AWS::RedshiftServerless::Snapshot</code></a>.

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
    <td><code>snapshots</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="SnapshotName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>snapshots</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>snapshots</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>snapshots_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>snapshots</code></td>
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
WHERE region = 'us-east-1' AND Identifier = '{{ snapshot_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>snapshots</code> in a region.
```sql
SELECT
region,
snapshot_name
FROM awscc.redshiftserverless.snapshots_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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
'{{ snapshot_name }}',
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
 '{{ snapshot_name }}',
 '{{ namespace_name }}',
 '{{ retention_period }}',
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
  - name: snapshot
    props:
      - name: snapshot_name
        value: '{{ snapshot_name }}'
      - name: namespace_name
        value: '{{ namespace_name }}'
      - name: retention_period
        value: '{{ retention_period }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>snapshot</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.redshiftserverless.snapshots
SET PatchDocument = string('{{ {
    "RetentionPeriod": retention_period
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ snapshot_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.redshiftserverless.snapshots
WHERE Identifier = '{{ snapshot_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>snapshots</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
redshift-serverless:CreateSnapshot,
redshift-serverless:GetSnapshot,
redshift-serverless:ListTagsForResource,
redshift-serverless:TagResource,
redshift-serverless:GetNamespace
```

</TabItem>
<TabItem value="read">

```json
redshift-serverless:GetSnapshot,
redshift-serverless:ListTagsForResource,
redshift-serverless:GetNamespace
```

</TabItem>
<TabItem value="update">

```json
redshift-serverless:UpdateSnapshot,
redshift-serverless:GetSnapshot,
redshift-serverless:ListTagsForResource,
redshift-serverless:TagResource,
redshift-serverless:UntagResource,
redshift-serverless:GetNamespace
```

</TabItem>
<TabItem value="delete">

```json
redshift-serverless:DeleteSnapshot,
redshift-serverless:GetSnapshot,
redshift-serverless:ListTagsForResource,
redshift-serverless:UntagResource,
redshift-serverless:GetNamespace
```

</TabItem>
<TabItem value="list">

```json
redshift-serverless:ListSnapshots,
redshift-serverless:GetSnapshot,
redshift-serverless:ListTagsForResource,
redshift-serverless:GetNamespace
```

</TabItem>
</Tabs>