---
title: tag_sync_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - tag_sync_tasks
  - resourcegroups
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

Creates, updates, deletes or gets a <code>tag_sync_task</code> resource or lists <code>tag_sync_tasks</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>tag_sync_tasks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Schema for ResourceGroups::TagSyncTask</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.resourcegroups.tag_sync_tasks" /></td></tr>
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
    "name": "group",
    "type": "string",
    "description": "The Amazon resource name (ARN) or name of the application group for which you want to create a tag-sync task"
  },
  {
    "name": "group_arn",
    "type": "string",
    "description": "The Amazon resource name (ARN) of the ApplicationGroup for which the TagSyncTask is created"
  },
  {
    "name": "group_name",
    "type": "string",
    "description": "The Name of the application group for which the TagSyncTask is created"
  },
  {
    "name": "task_arn",
    "type": "string",
    "description": "The ARN of the TagSyncTask resource"
  },
  {
    "name": "tag_key",
    "type": "string",
    "description": "The tag key. Resources tagged with this tag key-value pair will be added to the application. If a resource with this tag is later untagged, the tag-sync task removes the resource from the application."
  },
  {
    "name": "tag_value",
    "type": "string",
    "description": "The tag value. Resources tagged with this tag key-value pair will be added to the application. If a resource with this tag is later untagged, the tag-sync task removes the resource from the application."
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "The Amazon resource name (ARN) of the role assumed by the service to tag and untag resources on your behalf."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of the TagSyncTask"
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
    "name": "task_arn",
    "type": "string",
    "description": "The ARN of the TagSyncTask resource"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-tagsynctask.html"><code>AWS::ResourceGroups::TagSyncTask</code></a>.

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
    <td><code>tag_sync_tasks</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Group, TagKey, TagValue, RoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>tag_sync_tasks</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>tag_sync_tasks_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>tag_sync_tasks</code></td>
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

Gets all properties from an individual <code>tag_sync_task</code>.
```sql
SELECT
region,
group,
group_arn,
group_name,
task_arn,
tag_key,
tag_value,
role_arn,
status
FROM awscc.resourcegroups.tag_sync_tasks
WHERE region = 'us-east-1' AND Identifier = '{{ task_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>tag_sync_tasks</code> in a region.
```sql
SELECT
region,
task_arn
FROM awscc.resourcegroups.tag_sync_tasks_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>tag_sync_task</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.resourcegroups.tag_sync_tasks (
 Group,
 TagKey,
 TagValue,
 RoleArn,
 region
)
SELECT
'{{ group }}',
 '{{ tag_key }}',
 '{{ tag_value }}',
 '{{ role_arn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.resourcegroups.tag_sync_tasks (
 Group,
 TagKey,
 TagValue,
 RoleArn,
 region
)
SELECT
 '{{ group }}',
 '{{ tag_key }}',
 '{{ tag_value }}',
 '{{ role_arn }}',
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
  - name: tag_sync_task
    props:
      - name: group
        value: '{{ group }}'
      - name: tag_key
        value: '{{ tag_key }}'
      - name: tag_value
        value: '{{ tag_value }}'
      - name: role_arn
        value: '{{ role_arn }}'
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.resourcegroups.tag_sync_tasks
WHERE Identifier = '{{ task_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>tag_sync_tasks</code> resource, the following permissions are required:

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
resource-groups:StartTagSyncTask,
resource-groups:CreateGroup,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
resource-groups:GetTagSyncTask
```

</TabItem>
<TabItem value="delete">

```json
resource-groups:CancelTagSyncTask,
resource-groups:DeleteGroup
```

</TabItem>
<TabItem value="list">

```json
resource-groups:ListTagSyncTasks
```

</TabItem>
</Tabs>