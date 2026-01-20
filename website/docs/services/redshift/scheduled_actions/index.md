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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html"><code>AWS::Redshift::ScheduledAction</code></a>.

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
    <td><CopyableCode code="ScheduledActionName, region" /></td>
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
WHERE region = 'us-east-1' AND data__Identifier = '<ScheduledActionName>';
```

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

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.redshift.scheduled_actions
WHERE data__Identifier = '<ScheduledActionName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>scheduled_actions</code> resource, the following permissions are required:

### Read
```json
redshift:DescribeScheduledActions,
redshift:DescribeTags
```

### Create
```json
redshift:CreateScheduledAction,
redshift:DescribeScheduledActions,
redshift:DescribeTags,
redshift:PauseCluster,
redshift:ResumeCluster,
redshift:ResizeCluster,
iam:PassRole
```

### Update
```json
redshift:DescribeScheduledActions,
redshift:ModifyScheduledAction,
redshift:PauseCluster,
redshift:ResumeCluster,
redshift:ResizeCluster,
redshift:DescribeTags,
iam:PassRole
```

### List
```json
redshift:DescribeTags,
redshift:DescribeScheduledActions
```

### Delete
```json
redshift:DescribeTags,
redshift:DescribeScheduledActions,
redshift:DeleteScheduledAction
```
