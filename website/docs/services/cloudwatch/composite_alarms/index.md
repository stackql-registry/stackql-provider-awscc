---
title: composite_alarms
hide_title: false
hide_table_of_contents: false
keywords:
  - composite_alarms
  - cloudwatch
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

Creates, updates, deletes or gets a <code>composite_alarm</code> resource or lists <code>composite_alarms</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>composite_alarms</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::CloudWatch::CompositeAlarm type specifies an alarm which aggregates the states of other Alarms (Metric or Composite Alarms) as defined by the AlarmRule expression</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudwatch.composite_alarms" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": "Amazon Resource Name (ARN) of the alarm"
  },
  {
    "name": "alarm_name",
    "type": "string",
    "description": "The name of the Composite Alarm"
  },
  {
    "name": "alarm_rule",
    "type": "string",
    "description": "Expression which aggregates the state of other Alarms (Metric or Composite Alarms)"
  },
  {
    "name": "alarm_description",
    "type": "string",
    "description": "The description of the alarm"
  },
  {
    "name": "actions_enabled",
    "type": "boolean",
    "description": "Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE."
  },
  {
    "name": "ok_actions",
    "type": "array",
    "description": "The actions to execute when this alarm transitions to the OK state from any other state. Each action is specified as an Amazon Resource Name (ARN)."
  },
  {
    "name": "alarm_actions",
    "type": "array",
    "description": "The list of actions to execute when this alarm transitions into an ALARM state from any other state. Specify each action as an Amazon Resource Name (ARN)."
  },
  {
    "name": "insufficient_data_actions",
    "type": "array",
    "description": "The actions to execute when this alarm transitions to the INSUFFICIENT&#95;DATA state from any other state. Each action is specified as an Amazon Resource Name (ARN)."
  },
  {
    "name": "actions_suppressor",
    "type": "string",
    "description": "Actions will be suppressed if the suppressor alarm is in the ALARM state. ActionsSuppressor can be an AlarmName or an Amazon Resource Name (ARN) from an existing alarm."
  },
  {
    "name": "actions_suppressor_wait_period",
    "type": "integer",
    "description": "Actions will be suppressed if ExtensionPeriod is active. The length of time that actions are suppressed is in seconds."
  },
  {
    "name": "actions_suppressor_extension_period",
    "type": "integer",
    "description": "Actions will be suppressed if WaitPeriod is active. The length of time that actions are suppressed is in seconds."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of key-value pairs to associate with the composite alarm. You can associate as many as 50 tags with an alarm.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "A unique identifier for the tag."
      },
      {
        "name": "value",
        "type": "string",
        "description": "String which you can use to describe or define the tag."
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
    "name": "alarm_name",
    "type": "string",
    "description": "The name of the Composite Alarm"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-compositealarm.html"><code>AWS::CloudWatch::CompositeAlarm</code></a>.

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
    <td><code>composite_alarms</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AlarmRule, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>composite_alarms</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>composite_alarms</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>composite_alarms_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>composite_alarms</code></td>
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

Gets all properties from an individual <code>composite_alarm</code>.
```sql
SELECT
region,
arn,
alarm_name,
alarm_rule,
alarm_description,
actions_enabled,
ok_actions,
alarm_actions,
insufficient_data_actions,
actions_suppressor,
actions_suppressor_wait_period,
actions_suppressor_extension_period,
tags
FROM awscc.cloudwatch.composite_alarms
WHERE region = 'us-east-1' AND Identifier = '<AlarmName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>composite_alarms</code> in a region.
```sql
SELECT
region,
alarm_name
FROM awscc.cloudwatch.composite_alarms_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>composite_alarm</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cloudwatch.composite_alarms (
 AlarmRule,
 region
)
SELECT 
'{{ AlarmRule }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cloudwatch.composite_alarms (
 AlarmName,
 AlarmRule,
 AlarmDescription,
 ActionsEnabled,
 OKActions,
 AlarmActions,
 InsufficientDataActions,
 ActionsSuppressor,
 ActionsSuppressorWaitPeriod,
 ActionsSuppressorExtensionPeriod,
 Tags,
 region
)
SELECT 
 '{{ AlarmName }}',
 '{{ AlarmRule }}',
 '{{ AlarmDescription }}',
 '{{ ActionsEnabled }}',
 '{{ OKActions }}',
 '{{ AlarmActions }}',
 '{{ InsufficientDataActions }}',
 '{{ ActionsSuppressor }}',
 '{{ ActionsSuppressorWaitPeriod }}',
 '{{ ActionsSuppressorExtensionPeriod }}',
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
  - name: composite_alarm
    props:
      - name: AlarmName
        value: '{{ AlarmName }}'
      - name: AlarmRule
        value: '{{ AlarmRule }}'
      - name: AlarmDescription
        value: '{{ AlarmDescription }}'
      - name: ActionsEnabled
        value: '{{ ActionsEnabled }}'
      - name: OKActions
        value:
          - '{{ OKActions[0] }}'
      - name: AlarmActions
        value:
          - '{{ AlarmActions[0] }}'
      - name: InsufficientDataActions
        value:
          - '{{ InsufficientDataActions[0] }}'
      - name: ActionsSuppressor
        value: '{{ ActionsSuppressor }}'
      - name: ActionsSuppressorWaitPeriod
        value: '{{ ActionsSuppressorWaitPeriod }}'
      - name: ActionsSuppressorExtensionPeriod
        value: '{{ ActionsSuppressorExtensionPeriod }}'
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
UPDATE awscc.cloudwatch.composite_alarms
SET PatchDocument = string('{{ {
    "AlarmRule": alarm_rule,
    "AlarmDescription": alarm_description,
    "ActionsEnabled": actions_enabled,
    "OKActions": ok_actions,
    "AlarmActions": alarm_actions,
    "InsufficientDataActions": insufficient_data_actions,
    "ActionsSuppressor": actions_suppressor,
    "ActionsSuppressorWaitPeriod": actions_suppressor_wait_period,
    "ActionsSuppressorExtensionPeriod": actions_suppressor_extension_period,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<AlarmName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudwatch.composite_alarms
WHERE Identifier = '<AlarmName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>composite_alarms</code> resource, the following permissions are required:

### Create
```json
cloudwatch:DescribeAlarms,
cloudwatch:PutCompositeAlarm,
cloudwatch:TagResource
```

### Read
```json
cloudwatch:DescribeAlarms,
cloudwatch:ListTagsForResource
```

### Update
```json
cloudwatch:DescribeAlarms,
cloudwatch:PutCompositeAlarm,
cloudwatch:TagResource,
cloudwatch:UntagResource
```

### Delete
```json
cloudwatch:DescribeAlarms,
cloudwatch:DeleteAlarms
```

### List
```json
cloudwatch:DescribeAlarms
```
