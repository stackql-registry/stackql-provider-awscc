---
title: snapshot_block_public_accesses
hide_title: false
hide_table_of_contents: false
keywords:
  - snapshot_block_public_accesses
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

Creates, updates, deletes or gets a <code>snapshot_block_public_access</code> resource or lists <code>snapshot_block_public_accesses</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>snapshot_block_public_accesses</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::EC2::SnapshotBlockPublicAccess</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.snapshot_block_public_accesses" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "state",
    "type": "string",
    "description": "The state of EBS Snapshot Block Public Access."
  },
  {
    "name": "account_id",
    "type": "string",
    "description": "The identifier for the specified AWS account."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-snapshotblockpublicaccess.html"><code>AWS::EC2::SnapshotBlockPublicAccess</code></a>.

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
    <td><CopyableCode code="State, region" /></td>
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

Gets all properties from an individual <code>snapshot_block_public_access</code>.
```sql
SELECT
region,
state,
account_id
FROM awscc.ec2.snapshot_block_public_accesses
WHERE region = 'us-east-1' AND data__Identifier = '<AccountId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>snapshot_block_public_access</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.snapshot_block_public_accesses (
 State,
 region
)
SELECT 
'{{ State }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.snapshot_block_public_accesses (
 State,
 region
)
SELECT 
 '{{ State }}',
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
  - name: snapshot_block_public_access
    props:
      - name: State
        value: '{{ State }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.snapshot_block_public_accesses
WHERE data__Identifier = '<AccountId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>snapshot_block_public_accesses</code> resource, the following permissions are required:

### Create
```json
ec2:EnableSnapshotBlockPublicAccess,
ec2:GetSnapshotBlockPublicAccessState
```

### Read
```json
ec2:GetSnapshotBlockPublicAccessState
```

### Update
```json
ec2:EnableSnapshotBlockPublicAccess,
ec2:GetSnapshotBlockPublicAccessState
```

### Delete
```json
ec2:DisableSnapshotBlockPublicAccess,
ec2:GetSnapshotBlockPublicAccessState
```

### List
```json
ec2:GetSnapshotBlockPublicAccessState
```
