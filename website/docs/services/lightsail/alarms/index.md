---
title: alarms
hide_title: false
hide_table_of_contents: false
keywords:
  - alarms
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

Creates, updates, deletes or gets an <code>alarm</code> resource or lists <code>alarms</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>alarms</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Lightsail::Alarm</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lightsail.alarms" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "alarm_name",
    "type": "string",
    "description": "The name for the alarm. Specify the name of an existing alarm to update, and overwrite the previous configuration of the alarm."
  },
  {
    "name": "monitored_resource_name",
    "type": "string",
    "description": "The name of the Lightsail resource that the alarm monitors."
  },
  {
    "name": "metric_name",
    "type": "string",
    "description": "The name of the metric to associate with the alarm."
  },
  {
    "name": "comparison_operator",
    "type": "string",
    "description": "The arithmetic operation to use when comparing the specified statistic to the threshold. The specified statistic value is used as the first operand."
  },
  {
    "name": "contact_protocols",
    "type": "array",
    "description": "The contact protocols to use for the alarm, such as Email, SMS (text messaging), or both."
  },
  {
    "name": "alarm_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "datapoints_to_alarm",
    "type": "integer",
    "description": "The number of data points that must be not within the specified threshold to trigger the alarm. If you are setting an \"M out of N\" alarm, this value (datapointsToAlarm) is the M."
  },
  {
    "name": "evaluation_periods",
    "type": "integer",
    "description": "The number of most recent periods over which data is compared to the specified threshold. If you are setting an \"M out of N\" alarm, this value (evaluationPeriods) is the N."
  },
  {
    "name": "notification_enabled",
    "type": "boolean",
    "description": "Indicates whether the alarm is enabled. Notifications are enabled by default if you don't specify this parameter."
  },
  {
    "name": "notification_triggers",
    "type": "array",
    "description": "The alarm states that trigger a notification."
  },
  {
    "name": "threshold",
    "type": "number",
    "description": "The value against which the specified statistic is compared."
  },
  {
    "name": "treat_missing_data",
    "type": "string",
    "description": "Sets how this alarm will handle missing data points."
  },
  {
    "name": "state",
    "type": "string",
    "description": "The current state of the alarm."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html"><code>AWS::Lightsail::Alarm</code></a>.

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
    <td><CopyableCode code="AlarmName, MonitoredResourceName, MetricName, ComparisonOperator, EvaluationPeriods, Threshold, region" /></td>
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

Gets all properties from an individual <code>alarm</code>.
```sql
SELECT
region,
alarm_name,
monitored_resource_name,
metric_name,
comparison_operator,
contact_protocols,
alarm_arn,
datapoints_to_alarm,
evaluation_periods,
notification_enabled,
notification_triggers,
threshold,
treat_missing_data,
state
FROM awscc.lightsail.alarms
WHERE region = 'us-east-1' AND data__Identifier = '<AlarmName>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>alarm</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.lightsail.alarms (
 AlarmName,
 MonitoredResourceName,
 MetricName,
 ComparisonOperator,
 EvaluationPeriods,
 Threshold,
 region
)
SELECT 
'{{ AlarmName }}',
 '{{ MonitoredResourceName }}',
 '{{ MetricName }}',
 '{{ ComparisonOperator }}',
 '{{ EvaluationPeriods }}',
 '{{ Threshold }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.lightsail.alarms (
 AlarmName,
 MonitoredResourceName,
 MetricName,
 ComparisonOperator,
 ContactProtocols,
 DatapointsToAlarm,
 EvaluationPeriods,
 NotificationEnabled,
 NotificationTriggers,
 Threshold,
 TreatMissingData,
 region
)
SELECT 
 '{{ AlarmName }}',
 '{{ MonitoredResourceName }}',
 '{{ MetricName }}',
 '{{ ComparisonOperator }}',
 '{{ ContactProtocols }}',
 '{{ DatapointsToAlarm }}',
 '{{ EvaluationPeriods }}',
 '{{ NotificationEnabled }}',
 '{{ NotificationTriggers }}',
 '{{ Threshold }}',
 '{{ TreatMissingData }}',
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
  - name: alarm
    props:
      - name: AlarmName
        value: '{{ AlarmName }}'
      - name: MonitoredResourceName
        value: '{{ MonitoredResourceName }}'
      - name: MetricName
        value: '{{ MetricName }}'
      - name: ComparisonOperator
        value: '{{ ComparisonOperator }}'
      - name: ContactProtocols
        value:
          - '{{ ContactProtocols[0] }}'
      - name: DatapointsToAlarm
        value: '{{ DatapointsToAlarm }}'
      - name: EvaluationPeriods
        value: '{{ EvaluationPeriods }}'
      - name: NotificationEnabled
        value: '{{ NotificationEnabled }}'
      - name: NotificationTriggers
        value:
          - '{{ NotificationTriggers[0] }}'
      - name: Threshold
        value: null
      - name: TreatMissingData
        value: '{{ TreatMissingData }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.lightsail.alarms
WHERE data__Identifier = '<AlarmName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>alarms</code> resource, the following permissions are required:

### Create
```json
lightsail:PutAlarm,
lightsail:GetAlarms
```

### Read
```json
lightsail:GetAlarms
```

### Update
```json
lightsail:PutAlarm,
lightsail:GetAlarms
```

### Delete
```json
lightsail:DeleteAlarm,
lightsail:GetAlarms
```

### List
```json
lightsail:GetAlarms
```
