---
title: alarms
hide_title: false
hide_table_of_contents: false
keywords:
  - alarms
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

Creates, updates, deletes or gets an <code>alarm</code> resource or lists <code>alarms</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>alarms</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::CloudWatch::Alarm&#96;&#96; type specifies an alarm and associates it with the specified metric or metric math expression.<br />When this operation creates an alarm, the alarm state is immediately set to &#96;&#96;INSUFFICIENT&#95;DATA&#96;&#96;. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed.<br />When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudwatch.alarms" /></td></tr>
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
    "name": "threshold_metric_id",
    "type": "string",
    "description": "In an alarm based on an anomaly detection model, this is the ID of the &#96;&#96;ANOMALY&#95;DETECTION&#95;BAND&#96;&#96; function used as the threshold for the alarm."
  },
  {
    "name": "evaluate_low_sample_count_percentile",
    "type": "string",
    "description": "Used only for alarms based on percentiles. If &#96;&#96;ignore&#96;&#96;, the alarm state does not change during periods with too few data points to be statistically significant. If &#96;&#96;evaluate&#96;&#96; or this parameter is not used, the alarm is always evaluated and possibly changes state no matter how many data points are available."
  },
  {
    "name": "extended_statistic",
    "type": "string",
    "description": "The percentile statistic for the metric associated with the alarm. Specify a value between p0.0 and p100.<br />For an alarm based on a metric, you must specify either &#96;&#96;Statistic&#96;&#96; or &#96;&#96;ExtendedStatistic&#96;&#96; but not both.<br />For an alarm based on a math expression, you can't specify &#96;&#96;ExtendedStatistic&#96;&#96;. Instead, you use &#96;&#96;Metrics&#96;&#96;."
  },
  {
    "name": "comparison_operator",
    "type": "string",
    "description": "The arithmetic operation to use when comparing the specified statistic and threshold. The specified statistic value is used as the first operand."
  },
  {
    "name": "treat_missing_data",
    "type": "string",
    "description": "Sets how this alarm is to handle missing data points. Valid values are &#96;&#96;breaching&#96;&#96;, &#96;&#96;notBreaching&#96;&#96;, &#96;&#96;ignore&#96;&#96;, and &#96;&#96;missing&#96;&#96;. For more information, see &#91;Configuring How Alarms Treat Missing Data&#93;(https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-missing-data) in the &#42;Amazon User Guide&#42;.<br />If you omit this parameter, the default behavior of &#96;&#96;missing&#96;&#96; is used."
  },
  {
    "name": "dimensions",
    "type": "array",
    "description": "The dimensions for the metric associated with the alarm. For an alarm based on a math expression, you can't specify &#96;&#96;Dimensions&#96;&#96;. Instead, you use &#96;&#96;Metrics&#96;&#96;.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The value for the dimension, from 1–255 characters in length."
      },
      {
        "name": "name",
        "type": "string",
        "description": "The name of the dimension, from 1–255 characters in length. This dimension name must have been included when the metric was published."
      }
    ]
  },
  {
    "name": "period",
    "type": "integer",
    "description": "The period, in seconds, over which the statistic is applied. This is required for an alarm based on a metric. Valid values are 10, 20, 30, 60, and any multiple of 60.<br />For an alarm based on a math expression, you can't specify &#96;&#96;Period&#96;&#96;, and instead you use the &#96;&#96;Metrics&#96;&#96; parameter.<br />&#42;Minimum:&#42; 10"
  },
  {
    "name": "evaluation_periods",
    "type": "integer",
    "description": "The number of periods over which data is compared to the specified threshold. If you are setting an alarm that requires that a number of consecutive data points be breaching to trigger the alarm, this value specifies that number. If you are setting an \"M out of N\" alarm, this value is the N, and &#96;&#96;DatapointsToAlarm&#96;&#96; is the M.<br />For more information, see &#91;Evaluating an Alarm&#93;(https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation) in the &#42;User Guide&#42;."
  },
  {
    "name": "unit",
    "type": "string",
    "description": "The unit of the metric associated with the alarm. Specify this only if you are creating an alarm based on a single metric. Do not specify this if you are specifying a &#96;&#96;Metrics&#96;&#96; array.<br />You can specify the following values: Seconds, Microseconds, Milliseconds, Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, Bits, Kilobits, Megabits, Gigabits, Terabits, Percent, Count, Bytes/Second, Kilobytes/Second, Megabytes/Second, Gigabytes/Second, Terabytes/Second, Bits/Second, Kilobits/Second, Megabits/Second, Gigabits/Second, Terabits/Second, Count/Second, or None."
  },
  {
    "name": "namespace",
    "type": "string",
    "description": "The namespace of the metric associated with the alarm. This is required for an alarm based on a metric. For an alarm based on a math expression, you can't specify &#96;&#96;Namespace&#96;&#96; and you use &#96;&#96;Metrics&#96;&#96; instead.<br />For a list of namespaces for metrics from AWS services, see &#91;Services That Publish Metrics.&#93;(https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html)"
  },
  {
    "name": "ok_actions",
    "type": "array",
    "description": "The actions to execute when this alarm transitions to the &#96;&#96;OK&#96;&#96; state from any other state. Each action is specified as an Amazon Resource Name (ARN)."
  },
  {
    "name": "alarm_actions",
    "type": "array",
    "description": "The list of actions to execute when this alarm transitions into an ALARM state from any other state. Specify each action as an Amazon Resource Name (ARN). For more information about creating alarms and the actions that you can specify, see &#91;PutMetricAlarm&#93;(https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API&#95;PutMetricAlarm.html) in the &#42;API Reference&#42;."
  },
  {
    "name": "metric_name",
    "type": "string",
    "description": "The name of the metric associated with the alarm. This is required for an alarm based on a metric. For an alarm based on a math expression, you use &#96;&#96;Metrics&#96;&#96; instead and you can't specify &#96;&#96;MetricName&#96;&#96;."
  },
  {
    "name": "actions_enabled",
    "type": "boolean",
    "description": "Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE."
  },
  {
    "name": "metrics",
    "type": "array",
    "description": "An array that enables you to create an alarm based on the result of a metric math expression. Each item in the array either retrieves a metric or performs a math expression.<br />If you specify the &#96;&#96;Metrics&#96;&#96; parameter, you cannot specify &#96;&#96;MetricName&#96;&#96;, &#96;&#96;Dimensions&#96;&#96;, &#96;&#96;Period&#96;&#96;, &#96;&#96;Namespace&#96;&#96;, &#96;&#96;Statistic&#96;&#96;, &#96;&#96;ExtendedStatistic&#96;&#96;, or &#96;&#96;Unit&#96;&#96;.",
    "children": [
      {
        "name": "label",
        "type": "string",
        "description": "A human-readable label for this metric or expression. This is especially useful if this is an expression, so that you know what the value represents. If the metric or expression is shown in a CW dashboard widget, the label is shown. If &#96;&#96;Label&#96;&#96; is omitted, CW generates a default."
      },
      {
        "name": "metric_stat",
        "type": "object",
        "description": "The metric to be returned, along with statistics, period, and units. Use this parameter only if this object is retrieving a metric and not performing a math expression on returned data.<br />Within one MetricDataQuery object, you must specify either &#96;&#96;Expression&#96;&#96; or &#96;&#96;MetricStat&#96;&#96; but not both.",
        "children": [
          {
            "name": "period",
            "type": "integer",
            "description": "The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 20, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a &#96;&#96;PutMetricData&#96;&#96; call that includes a &#96;&#96;StorageResolution&#96;&#96; of 1 second.<br />If the &#96;&#96;StartTime&#96;&#96; parameter specifies a time stamp that is greater than 3 hours ago, you must specify the period as follows or no data points in that time range is returned:<br />+ Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).<br />+ Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).<br />+ Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour)."
          },
          {
            "name": "metric",
            "type": "object",
            "description": "The metric to return, including the metric name, namespace, and dimensions.",
            "children": [
              {
                "name": "metric_name",
                "type": "string",
                "description": "The name of the metric that you want the alarm to watch. This is a required field."
              },
              {
                "name": "dimensions",
                "type": "array",
                "description": "The metric dimensions that you want to be used for the metric that the alarm will watch."
              },
              {
                "name": "namespace",
                "type": "string",
                "description": "The namespace of the metric that the alarm will watch."
              }
            ]
          },
          {
            "name": "stat",
            "type": "string",
            "description": "The statistic to return. It can include any CW statistic or extended statistic. For a list of valid values, see the table in &#91;Statistics&#93;(https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch&#95;concepts.html#Statistic) in the &#42;User Guide&#42;."
          },
          {
            "name": "unit",
            "type": "string",
            "description": "The unit to use for the returned data points. <br />Valid values are: Seconds, Microseconds, Milliseconds, Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, Bits, Kilobits, Megabits, Gigabits, Terabits, Percent, Count, Bytes/Second, Kilobytes/Second, Megabytes/Second, Gigabytes/Second, Terabytes/Second, Bits/Second, Kilobits/Second, Megabits/Second, Gigabits/Second, Terabits/Second, Count/Second, or None."
          }
        ]
      },
      {
        "name": "id",
        "type": "string",
        "description": "A short name used to tie this object to the results in the response. This name must be unique within a single call to &#96;&#96;GetMetricData&#96;&#96;. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscore. The first character must be a lowercase letter."
      },
      {
        "name": "return_data",
        "type": "boolean",
        "description": "This option indicates whether to return the timestamps and raw data values of this metric.<br />When you create an alarm based on a metric math expression, specify &#96;&#96;True&#96;&#96; for this value for only the one math expression that the alarm is based on. You must specify &#96;&#96;False&#96;&#96; for &#96;&#96;ReturnData&#96;&#96; for all the other metrics and expressions used in the alarm.<br />This field is required."
      },
      {
        "name": "expression",
        "type": "string",
        "description": "The math expression to be performed on the returned data, if this object is performing a math expression. This expression can use the &#96;&#96;Id&#96;&#96; of the other metrics to refer to those metrics, and can also use the &#96;&#96;Id&#96;&#96; of other expressions to use the result of those expressions. For more information about metric math expressions, see &#91;Metric Math Syntax and Functions&#93;(https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax) in the &#42;User Guide&#42;.<br />Within each MetricDataQuery object, you must specify either &#96;&#96;Expression&#96;&#96; or &#96;&#96;MetricStat&#96;&#96; but not both."
      },
      {
        "name": "period",
        "type": "integer",
        "description": "The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 20, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a &#96;&#96;PutMetricData&#96;&#96; operation that includes a &#96;&#96;StorageResolution of 1 second&#96;&#96;."
      },
      {
        "name": "account_id",
        "type": "string",
        "description": "The ID of the account where the metrics are located, if this is a cross-account alarm."
      }
    ]
  },
  {
    "name": "alarm_description",
    "type": "string",
    "description": "The description of the alarm."
  },
  {
    "name": "alarm_name",
    "type": "string",
    "description": "The name of the alarm. If you don't specify a name, CFN generates a unique physical ID and uses that ID for the alarm name. <br />If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name."
  },
  {
    "name": "statistic",
    "type": "string",
    "description": "The statistic for the metric associated with the alarm, other than percentile. For percentile statistics, use &#96;&#96;ExtendedStatistic&#96;&#96;.<br />For an alarm based on a metric, you must specify either &#96;&#96;Statistic&#96;&#96; or &#96;&#96;ExtendedStatistic&#96;&#96; but not both.<br />For an alarm based on a math expression, you can't specify &#96;&#96;Statistic&#96;&#96;. Instead, you use &#96;&#96;Metrics&#96;&#96;."
  },
  {
    "name": "insufficient_data_actions",
    "type": "array",
    "description": "The actions to execute when this alarm transitions to the &#96;&#96;INSUFFICIENT&#95;DATA&#96;&#96; state from any other state. Each action is specified as an Amazon Resource Name (ARN)."
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "datapoints_to_alarm",
    "type": "integer",
    "description": "The number of datapoints that must be breaching to trigger the alarm. This is used only if you are setting an \"M out of N\" alarm. In that case, this value is the M, and the value that you set for &#96;&#96;EvaluationPeriods&#96;&#96; is the N value. For more information, see &#91;Evaluating an Alarm&#93;(https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation) in the &#42;User Guide&#42;.<br />If you omit this parameter, CW uses the same value here that you set for &#96;&#96;EvaluationPeriods&#96;&#96;, and the alarm goes to alarm state if that many consecutive periods are breaching."
  },
  {
    "name": "threshold",
    "type": "number",
    "description": "The value to compare with the specified statistic."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of key-value pairs to associate with the alarm. You can associate as many as 50 tags with an alarm. To be able to associate tags with the alarm when you create the alarm, you must have the &#96;&#96;cloudwatch:TagResource&#96;&#96; permission.<br />Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.",
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
    "description": "The name of the alarm. If you don't specify a name, CFN generates a unique physical ID and uses that ID for the alarm name. <br />If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarm.html"><code>AWS::CloudWatch::Alarm</code></a>.

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
    <td><code>alarms</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ComparisonOperator, EvaluationPeriods, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>alarms</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>alarms</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>alarms_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>alarms</code></td>
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

Gets all properties from an individual <code>alarm</code>.
```sql
SELECT
region,
threshold_metric_id,
evaluate_low_sample_count_percentile,
extended_statistic,
comparison_operator,
treat_missing_data,
dimensions,
period,
evaluation_periods,
unit,
namespace,
ok_actions,
alarm_actions,
metric_name,
actions_enabled,
metrics,
alarm_description,
alarm_name,
statistic,
insufficient_data_actions,
arn,
datapoints_to_alarm,
threshold,
tags
FROM awscc.cloudwatch.alarms
WHERE region = 'us-east-1' AND Identifier = '{{ alarm_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>alarms</code> in a region.
```sql
SELECT
region,
alarm_name
FROM awscc.cloudwatch.alarms_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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
INSERT INTO awscc.cloudwatch.alarms (
 ComparisonOperator,
 EvaluationPeriods,
 region
)
SELECT
'{{ comparison_operator }}',
 '{{ evaluation_periods }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cloudwatch.alarms (
 ThresholdMetricId,
 EvaluateLowSampleCountPercentile,
 ExtendedStatistic,
 ComparisonOperator,
 TreatMissingData,
 Dimensions,
 Period,
 EvaluationPeriods,
 Unit,
 Namespace,
 OKActions,
 AlarmActions,
 MetricName,
 ActionsEnabled,
 Metrics,
 AlarmDescription,
 AlarmName,
 Statistic,
 InsufficientDataActions,
 DatapointsToAlarm,
 Threshold,
 Tags,
 region
)
SELECT
 '{{ threshold_metric_id }}',
 '{{ evaluate_low_sample_count_percentile }}',
 '{{ extended_statistic }}',
 '{{ comparison_operator }}',
 '{{ treat_missing_data }}',
 '{{ dimensions }}',
 '{{ period }}',
 '{{ evaluation_periods }}',
 '{{ unit }}',
 '{{ namespace }}',
 '{{ ok_actions }}',
 '{{ alarm_actions }}',
 '{{ metric_name }}',
 '{{ actions_enabled }}',
 '{{ metrics }}',
 '{{ alarm_description }}',
 '{{ alarm_name }}',
 '{{ statistic }}',
 '{{ insufficient_data_actions }}',
 '{{ datapoints_to_alarm }}',
 '{{ threshold }}',
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
  - name: alarm
    props:
      - name: threshold_metric_id
        value: '{{ threshold_metric_id }}'
      - name: evaluate_low_sample_count_percentile
        value: '{{ evaluate_low_sample_count_percentile }}'
      - name: extended_statistic
        value: '{{ extended_statistic }}'
      - name: comparison_operator
        value: '{{ comparison_operator }}'
      - name: treat_missing_data
        value: '{{ treat_missing_data }}'
      - name: dimensions
        value:
          - value: '{{ value }}'
            name: '{{ name }}'
      - name: period
        value: '{{ period }}'
      - name: evaluation_periods
        value: '{{ evaluation_periods }}'
      - name: unit
        value: '{{ unit }}'
      - name: namespace
        value: '{{ namespace }}'
      - name: ok_actions
        value:
          - '{{ ok_actions[0] }}'
      - name: alarm_actions
        value:
          - '{{ alarm_actions[0] }}'
      - name: metric_name
        value: '{{ metric_name }}'
      - name: actions_enabled
        value: '{{ actions_enabled }}'
      - name: metrics
        value:
          - label: '{{ label }}'
            metric_stat:
              period: '{{ period }}'
              metric:
                metric_name: '{{ metric_name }}'
                dimensions:
                  - null
                namespace: '{{ namespace }}'
              stat: '{{ stat }}'
              unit: '{{ unit }}'
            id: '{{ id }}'
            return_data: '{{ return_data }}'
            expression: '{{ expression }}'
            period: '{{ period }}'
            account_id: '{{ account_id }}'
      - name: alarm_description
        value: '{{ alarm_description }}'
      - name: alarm_name
        value: '{{ alarm_name }}'
      - name: statistic
        value: '{{ statistic }}'
      - name: insufficient_data_actions
        value:
          - '{{ insufficient_data_actions[0] }}'
      - name: datapoints_to_alarm
        value: '{{ datapoints_to_alarm }}'
      - name: threshold
        value: null
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>alarm</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cloudwatch.alarms
SET PatchDocument = string('{{ {
    "ThresholdMetricId": threshold_metric_id,
    "EvaluateLowSampleCountPercentile": evaluate_low_sample_count_percentile,
    "ExtendedStatistic": extended_statistic,
    "ComparisonOperator": comparison_operator,
    "TreatMissingData": treat_missing_data,
    "Dimensions": dimensions,
    "Period": period,
    "EvaluationPeriods": evaluation_periods,
    "Unit": unit,
    "Namespace": namespace,
    "OKActions": ok_actions,
    "AlarmActions": alarm_actions,
    "MetricName": metric_name,
    "ActionsEnabled": actions_enabled,
    "Metrics": metrics,
    "AlarmDescription": alarm_description,
    "Statistic": statistic,
    "InsufficientDataActions": insufficient_data_actions,
    "DatapointsToAlarm": datapoints_to_alarm,
    "Threshold": threshold,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ alarm_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudwatch.alarms
WHERE Identifier = '{{ alarm_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>alarms</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Read', value: 'read', },
    ]
}>
<TabItem value="create">

```json
cloudwatch:PutMetricAlarm,
cloudwatch:DescribeAlarms,
cloudwatch:TagResource
```

</TabItem>
<TabItem value="update">

```json
cloudwatch:PutMetricAlarm,
cloudwatch:DescribeAlarms,
cloudwatch:TagResource,
cloudwatch:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
cloudwatch:DeleteAlarms,
cloudwatch:DescribeAlarms
```

</TabItem>
<TabItem value="list">

```json
cloudwatch:DescribeAlarms
```

</TabItem>
<TabItem value="read">

```json
cloudwatch:DescribeAlarms,
cloudwatch:ListTagsForResource
```

</TabItem>
</Tabs>