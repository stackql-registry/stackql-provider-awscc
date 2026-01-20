---
title: scheduled_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - scheduled_actions
  - autoscaling
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
<tr><td><b>Description</b></td><td>The AWS::AutoScaling::ScheduledAction resource specifies an Amazon EC2 Auto Scaling scheduled action so that the Auto Scaling group can change the number of instances available for your application in response to predictable load changes.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.autoscaling.scheduled_actions" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "scheduled_action_name",
    "type": "string",
    "description": "Auto-generated unique identifier"
  },
  {
    "name": "min_size",
    "type": "integer",
    "description": "The minimum size of the Auto Scaling group."
  },
  {
    "name": "recurrence",
    "type": "string",
    "description": "The recurring schedule for the action, in Unix cron syntax format. When StartTime and EndTime are specified with Recurrence , they form the boundaries of when the recurring action starts and stops."
  },
  {
    "name": "time_zone",
    "type": "string",
    "description": "The time zone for the cron expression."
  },
  {
    "name": "end_time",
    "type": "string",
    "description": "The latest scheduled start time to return. If scheduled action names are provided, this parameter is ignored."
  },
  {
    "name": "auto_scaling_group_name",
    "type": "string",
    "description": "The name of the Auto Scaling group."
  },
  {
    "name": "start_time",
    "type": "string",
    "description": "The earliest scheduled start time to return. If scheduled action names are provided, this parameter is ignored."
  },
  {
    "name": "desired_capacity",
    "type": "integer",
    "description": "The desired capacity is the initial capacity of the Auto Scaling group after the scheduled action runs and the capacity it attempts to maintain."
  },
  {
    "name": "max_size",
    "type": "integer",
    "description": "The minimum size of the Auto Scaling group."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-scheduledaction.html"><code>AWS::AutoScaling::ScheduledAction</code></a>.

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
    <td><CopyableCode code="AutoScalingGroupName, region" /></td>
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
scheduled_action_name,
min_size,
recurrence,
time_zone,
end_time,
auto_scaling_group_name,
start_time,
desired_capacity,
max_size
FROM awscc.autoscaling.scheduled_actions
WHERE region = 'us-east-1' AND data__Identifier = '<ScheduledActionName>|<AutoScalingGroupName>';
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
INSERT INTO awscc.autoscaling.scheduled_actions (
 AutoScalingGroupName,
 region
)
SELECT 
'{{ AutoScalingGroupName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.autoscaling.scheduled_actions (
 MinSize,
 Recurrence,
 TimeZone,
 EndTime,
 AutoScalingGroupName,
 StartTime,
 DesiredCapacity,
 MaxSize,
 region
)
SELECT 
 '{{ MinSize }}',
 '{{ Recurrence }}',
 '{{ TimeZone }}',
 '{{ EndTime }}',
 '{{ AutoScalingGroupName }}',
 '{{ StartTime }}',
 '{{ DesiredCapacity }}',
 '{{ MaxSize }}',
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
      - name: MinSize
        value: '{{ MinSize }}'
      - name: Recurrence
        value: '{{ Recurrence }}'
      - name: TimeZone
        value: '{{ TimeZone }}'
      - name: EndTime
        value: '{{ EndTime }}'
      - name: AutoScalingGroupName
        value: '{{ AutoScalingGroupName }}'
      - name: StartTime
        value: '{{ StartTime }}'
      - name: DesiredCapacity
        value: '{{ DesiredCapacity }}'
      - name: MaxSize
        value: '{{ MaxSize }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.autoscaling.scheduled_actions
WHERE data__Identifier = '<ScheduledActionName|AutoScalingGroupName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>scheduled_actions</code> resource, the following permissions are required:

### Create
```json
autoscaling:PutScheduledUpdateGroupAction,
autoscaling:DescribeScheduledActions
```

### Read
```json
autoscaling:DescribeScheduledActions
```

### Update
```json
autoscaling:PutScheduledUpdateGroupAction
```

### Delete
```json
autoscaling:DeleteScheduledAction,
autoscaling:DescribeScheduledActions
```

### List
```json
autoscaling:DescribeScheduledActions
```
