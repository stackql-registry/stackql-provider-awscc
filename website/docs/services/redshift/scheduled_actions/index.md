---
title: scheduled_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - scheduled_actions
  - redshift
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

Creates, updates, deletes or gets a <code>scheduled_action</code> resource or lists <code>scheduled_actions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>scheduled_actions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;AWS::Redshift::ScheduledAction&#96; resource creates an Amazon Redshift Scheduled Action.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.redshift.scheduled_actions" /></td></tr>
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
    "name": "scheduled_action_description",
    "type": "string",
    "description": "The description of the scheduled action."
  },
  {
    "name": "scheduled_action_name",
    "type": "string",
    "description": "The name of the scheduled action. The name must be unique within an account."
  },
  {
    "name": "end_time",
    "type": "string",
    "description": "The end time in UTC of the scheduled action. After this time, the scheduled action does not trigger."
  },
  {
    "name": "state",
    "type": "string",
    "description": "The state of the scheduled action."
  },
  {
    "name": "schedule",
    "type": "string",
    "description": "The schedule in &#96;at( )&#96; or &#96;cron( )&#96; format."
  },
  {
    "name": "iam_role",
    "type": "string",
    "description": "The IAM role to assume to run the target action."
  },
  {
    "name": "enable",
    "type": "boolean",
    "description": "If true, the schedule is enabled. If false, the scheduled action does not trigger."
  },
  {
    "name": "target_action",
    "type": "object",
    "description": "A JSON format string of the Amazon Redshift API operation with input parameters."
  },
  {
    "name": "next_invocations",
    "type": "array",
    "description": "List of times when the scheduled action will run."
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
    "name": "scheduled_action_name",
    "type": "string",
    "description": "The name of the scheduled action. The name must be unique within an account."
  },
  {
    "name": "schedule",
    "type": "string",
    "description": "The schedule in &#96;at( )&#96; or &#96;cron( )&#96; format."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html"><code>AWS::Redshift::ScheduledAction</code></a>.

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
    <td><code>scheduled_actions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ScheduledActionName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>scheduled_actions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>scheduled_actions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>scheduled_actions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>scheduled_actions</code></td>
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

Gets all properties from an individual <code>scheduled_action</code>.
```sql
SELECT
region,
scheduled_action_description,
scheduled_action_name,
end_time,
state,
schedule,
iam_role,
start_time,
enable,
target_action,
next_invocations
FROM awscc.redshift.scheduled_actions
WHERE region = 'us-east-1' AND Identifier = '<ScheduledActionName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>scheduled_actions</code> in a region.
```sql
SELECT
region,
scheduled_action_name
FROM awscc.redshift.scheduled_actions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>scheduled_action</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.redshift.scheduled_actions (
 ScheduledActionName,
 region
)
SELECT 
'{{ ScheduledActionName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.redshift.scheduled_actions (
 ScheduledActionDescription,
 ScheduledActionName,
 EndTime,
 Schedule,
 IamRole,
 StartTime,
 Enable,
 TargetAction,
 region
)
SELECT 
 '{{ ScheduledActionDescription }}',
 '{{ ScheduledActionName }}',
 '{{ EndTime }}',
 '{{ Schedule }}',
 '{{ IamRole }}',
 '{{ StartTime }}',
 '{{ Enable }}',
 '{{ TargetAction }}',
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
  - name: scheduled_action
    props:
      - name: ScheduledActionDescription
        value: '{{ ScheduledActionDescription }}'
      - name: ScheduledActionName
        value: '{{ ScheduledActionName }}'
      - name: EndTime
        value: '{{ EndTime }}'
      - name: Schedule
        value: '{{ Schedule }}'
      - name: IamRole
        value: '{{ IamRole }}'
      - name: StartTime
        value: null
      - name: Enable
        value: '{{ Enable }}'
      - name: TargetAction
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>scheduled_action</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.redshift.scheduled_actions
SET PatchDocument = string('{{ {
    "ScheduledActionDescription": scheduled_action_description,
    "EndTime": end_time,
    "Schedule": schedule,
    "IamRole": iam_role,
    "StartTime": start_time,
    "Enable": enable,
    "TargetAction": target_action
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ScheduledActionName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.redshift.scheduled_actions
WHERE Identifier = '<ScheduledActionName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>scheduled_actions</code> resource, the following permissions are required:

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
redshift:DescribeScheduledActions,
redshift:DescribeTags
```

</TabItem>
<TabItem value="create">

```json
redshift:CreateScheduledAction,
redshift:DescribeScheduledActions,
redshift:DescribeTags,
redshift:PauseCluster,
redshift:ResumeCluster,
redshift:ResizeCluster,
iam:PassRole
```

</TabItem>
<TabItem value="update">

```json
redshift:DescribeScheduledActions,
redshift:ModifyScheduledAction,
redshift:PauseCluster,
redshift:ResumeCluster,
redshift:ResizeCluster,
redshift:DescribeTags,
iam:PassRole
```

</TabItem>
<TabItem value="list">

```json
redshift:DescribeTags,
redshift:DescribeScheduledActions
```

</TabItem>
<TabItem value="delete">

```json
redshift:DescribeTags,
redshift:DescribeScheduledActions,
redshift:DeleteScheduledAction
```

</TabItem>
</Tabs>