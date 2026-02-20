---
title: queue_limit_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - queue_limit_associations
  - deadline
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

Creates, updates, deletes or gets a <code>queue_limit_association</code> resource or lists <code>queue_limit_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>queue_limit_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Deadline::QueueLimitAssociation Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.deadline.queue_limit_associations" /></td></tr>
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
    "name": "farm_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "limit_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "queue_id",
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "farm_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "limit_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "queue_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queuelimitassociation.html"><code>AWS::Deadline::QueueLimitAssociation</code></a>.

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
    <td><code>queue_limit_associations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="FarmId, LimitId, QueueId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>queue_limit_associations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>queue_limit_associations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>queue_limit_associations</code></td>
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

Gets all properties from an individual <code>queue_limit_association</code>.
```sql
SELECT
region,
farm_id,
limit_id,
queue_id
FROM awscc.deadline.queue_limit_associations
WHERE region = 'us-east-1' AND data__Identifier = '<FarmId>|<LimitId>|<QueueId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>queue_limit_associations</code> in a region.
```sql
SELECT
region,
farm_id,
limit_id,
queue_id
FROM awscc.deadline.queue_limit_associations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>queue_limit_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.deadline.queue_limit_associations (
 FarmId,
 LimitId,
 QueueId,
 region
)
SELECT 
'{{ FarmId }}',
 '{{ LimitId }}',
 '{{ QueueId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.deadline.queue_limit_associations (
 FarmId,
 LimitId,
 QueueId,
 region
)
SELECT 
 '{{ FarmId }}',
 '{{ LimitId }}',
 '{{ QueueId }}',
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
  - name: queue_limit_association
    props:
      - name: FarmId
        value: '{{ FarmId }}'
      - name: LimitId
        value: '{{ LimitId }}'
      - name: QueueId
        value: '{{ QueueId }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.deadline.queue_limit_associations
WHERE data__Identifier = '<FarmId|LimitId|QueueId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>queue_limit_associations</code> resource, the following permissions are required:

### Create
```json
deadline:CreateQueueLimitAssociation,
deadline:GetQueueLimitAssociation,
identitystore:ListGroupMembershipsForMember
```

### Read
```json
deadline:GetQueueLimitAssociation,
identitystore:ListGroupMembershipsForMember
```

### Delete
```json
deadline:DeleteQueueLimitAssociation,
deadline:GetQueueLimitAssociation,
deadline:UpdateQueueLimitAssociation,
identitystore:ListGroupMembershipsForMember
```

### List
```json
deadline:ListQueueLimitAssociations,
identitystore:ListGroupMembershipsForMember
```
