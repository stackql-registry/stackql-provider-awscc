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

import CodeBlock from '@theme/CodeBlock';
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
<tr><td><b>Description</b></td><td><details><summary>The <code>AWS::CloudWatch::Alarm</code> type specifies an alarm and associates it with the specified metric or metric math expression.</summary>When this operation creates an alarm, the alarm state is immediately set to <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed.<br />When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm.</details></td></tr>
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
    "description": "In an alarm based on an anomaly detection model, this is the ID of the <code>ANOMALY_DETECTION_BAND</code> function used as the threshold for the alarm."
  },
  {
    "name": "evaluate_low_sample_count_percentile",
    "type": "string",
    "description": "Used only for alarms based on percentiles. If <code>ignore</code>, the alarm state does not change during periods with too few data points to be statistically significant. If <code>evaluate</code> or this parameter is not used, the alarm is always evaluated and possibly changes state no matter how many data points are available."
  },
  {
    "name": "extended_statistic",
    "type": "string",
    "description": "<details><summary>The percentile statistic for the metric associated with the alarm. Specify a value between p0.0 and p100.</summary>For an alarm based on a metric, you must specify either <code>Statistic</code> or <code>ExtendedStatistic</code> but not both.<br />For an alarm based on a math expression, you can't specify <code>ExtendedStatistic</code>. Instead, you use <code>Metrics</code>.</details>"
  },
  {
    "name": "comparison_operator",
    "type": "string",
    "description": "The arithmetic operation to use when comparing the specified statistic and threshold. The specified statistic value is used as the first operand."
  },
  {
    "name": "treat_missing_data",
    "type": "string",
    "description": "<details><summary>Sets how this alarm is to handle missing data points. Valid values are <code>breaching</code>, <code>notBreaching</code>, <code>ignore</code>, and <code>missing</code>. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-missing-data\">Configuring How Alarms Treat Missing Data</a> in the <i>Amazon User Guide</i>.</summary>If you omit this parameter, the default behavior of <code>missing</code> is used.</details>"
  },
  {
    "name": "dimensions",
    "type": "array",
    "description": "The dimensions for the metric associated with the alarm. For an alarm based on a math expression, you can't specify <code>Dimensions</code>. Instead, you use <code>Metrics</code>.",
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
    "description": "<details><summary>The period, in seconds, over which the statistic is applied. This is required for an alarm based on a metric. Valid values are 10, 20, 30, 60, and any multiple of 60.</summary>For an alarm based on a math expression, you can't specify <code>Period</code>, and instead you use the <code>Metrics</code> parameter.<br /><i>Minimum:</i> 10</details>"
  },
  {
    "name": "evaluation_periods",
    "type": "integer",
    "description": "<details><summary>The number of periods over which data is compared to the specified threshold. If you are setting an alarm that requires that a number of consecutive data points be breaching to trigger the alarm, this value specifies that number. If you are setting an \"M out of N\" alarm, this value is the N, and <code>DatapointsToAlarm</code> is the M.</summary>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation\">Evaluating an Alarm</a> in the <i>User Guide</i>.</details>"
  },
  {
    "name": "unit",
    "type": "string",
    "description": "<details><summary>The unit of the metric associated with the alarm. Specify this only if you are creating an alarm based on a single metric. Do not specify this if you are specifying a <code>Metrics</code> array.</summary>You can specify the following values: Seconds, Microseconds, Milliseconds, Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, Bits, Kilobits, Megabits, Gigabits, Terabits, Percent, Count, Bytes/Second, Kilobytes/Second, Megabytes/Second, Gigabytes/Second, Terabytes/Second, Bits/Second, Kilobits/Second, Megabits/Second, Gigabits/Second, Terabits/Second, Count/Second, or None.</details>"
  },
  {
    "name": "namespace",
    "type": "string",
    "description": "<details><summary>The namespace of the metric associated with the alarm. This is required for an alarm based on a metric. For an alarm based on a math expression, you can't specify <code>Namespace</code> and you use <code>Metrics</code> instead.</summary>For a list of namespaces for metrics from AWS services, see <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html\">Services That Publish Metrics.</a></details>"
  },
  {
    "name": "ok_actions",
    "type": "array",
    "description": "The actions to execute when this alarm transitions to the <code>OK</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN)."
  },
  {
    "name": "alarm_actions",
    "type": "array",
    "description": "The list of actions to execute when this alarm transitions into an ALARM state from any other state. Specify each action as an Amazon Resource Name (ARN). For more information about creating alarms and the actions that you can specify, see <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricAlarm.html\">PutMetricAlarm</a> in the <i>API Reference</i>."
  },
  {
    "name": "metric_name",
    "type": "string",
    "description": "The name of the metric associated with the alarm. This is required for an alarm based on a metric. For an alarm based on a math expression, you use <code>Metrics</code> instead and you can't specify <code>MetricName</code>."
  },
  {
    "name": "actions_enabled",
    "type": "boolean",
    "description": "Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE."
  },
  {
    "name": "metrics",
    "type": "array",
    "description": "<details><summary>An array that enables you to create an alarm based on the result of a metric math expression. Each item in the array either retrieves a metric or performs a math expression.</summary>If you specify the <code>Metrics</code> parameter, you cannot specify <code>MetricName</code>, <code>Dimensions</code>, <code>Period</code>, <code>Namespace</code>, <code>Statistic</code>, <code>ExtendedStatistic</code>, or <code>Unit</code>.</details>",
    "children": [
      {
        "name": "label",
        "type": "string",
        "description": "A human-readable label for this metric or expression. This is especially useful if this is an expression, so that you know what the value represents. If the metric or expression is shown in a CW dashboard widget, the label is shown. If <code>Label</code> is omitted, CW generates a default."
      },
      {
        "name": "metric_stat",
        "type": "object",
        "description": "<details><summary>The metric to be returned, along with statistics, period, and units. Use this parameter only if this object is retrieving a metric and not performing a math expression on returned data.</summary>Within one MetricDataQuery object, you must specify either <code>Expression</code> or <code>MetricStat</code> but not both.</details>",
        "children": [
          {
            "name": "period",
            "type": "integer",
            "description": "<details><summary>The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 20, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a <code>PutMetricData</code> call that includes a <code>StorageResolution</code> of 1 second.</summary>If the <code>StartTime</code> parameter specifies a time stamp that is greater than 3 hours ago, you must specify the period as follows or no data points in that time range is returned:<br />+  Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).<br />+  Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).<br />+  Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).</details>"
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
            "description": "The statistic to return. It can include any CW statistic or extended statistic. For a list of valid values, see the table in <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic\">Statistics</a> in the <i>User Guide</i>."
          },
          {
            "name": "unit",
            "type": "string",
            "description": "<details><summary>The unit to use for the returned data points.</summary>Valid values are: Seconds, Microseconds, Milliseconds, Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, Bits, Kilobits, Megabits, Gigabits, Terabits, Percent, Count, Bytes/Second, Kilobytes/Second, Megabytes/Second, Gigabytes/Second, Terabytes/Second, Bits/Second, Kilobits/Second, Megabits/Second, Gigabits/Second, Terabits/Second, Count/Second, or None.</details>"
          }
        ]
      },
      {
        "name": "id",
        "type": "string",
        "description": "A short name used to tie this object to the results in the response. This name must be unique within a single call to <code>GetMetricData</code>. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscore. The first character must be a lowercase letter."
      },
      {
        "name": "return_data",
        "type": "boolean",
        "description": "<details><summary>This option indicates whether to return the timestamps and raw data values of this metric.</summary>When you create an alarm based on a metric math expression, specify <code>True</code> for this value for only the one math expression that the alarm is based on. You must specify <code>False</code> for <code>ReturnData</code> for all the other metrics and expressions used in the alarm.<br />This field is required.</details>"
      },
      {
        "name": "expression",
        "type": "string",
        "description": "<details><summary>The math expression to be performed on the returned data, if this object is performing a math expression. This expression can use the <code>Id</code> of the other metrics to refer to those metrics, and can also use the <code>Id</code> of other expressions to use the result of those expressions. For more information about metric math expressions, see <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax\">Metric Math Syntax and Functions</a> in the <i>User Guide</i>.</summary>Within each MetricDataQuery object, you must specify either <code>Expression</code> or <code>MetricStat</code> but not both.</details>"
      },
      {
        "name": "period",
        "type": "integer",
        "description": "The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 20, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a <code>PutMetricData</code> operation that includes a <code>StorageResolution of 1 second</code>."
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
    "description": "<details><summary>The name of the alarm. If you don't specify a name, CFN generates a unique physical ID and uses that ID for the alarm name.</summary>If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.</details>"
  },
  {
    "name": "statistic",
    "type": "string",
    "description": "<details><summary>The statistic for the metric associated with the alarm, other than percentile. For percentile statistics, use <code>ExtendedStatistic</code>.</summary>For an alarm based on a metric, you must specify either <code>Statistic</code> or <code>ExtendedStatistic</code> but not both.<br />For an alarm based on a math expression, you can't specify <code>Statistic</code>. Instead, you use <code>Metrics</code>.</details>"
  },
  {
    "name": "insufficient_data_actions",
    "type": "array",
    "description": "The actions to execute when this alarm transitions to the <code>INSUFFICIENT_DATA</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN)."
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "datapoints_to_alarm",
    "type": "integer",
    "description": "<details><summary>The number of datapoints that must be breaching to trigger the alarm. This is used only if you are setting an \"M out of N\" alarm. In that case, this value is the M, and the value that you set for <code>EvaluationPeriods</code> is the N value. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation\">Evaluating an Alarm</a> in the <i>User Guide</i>.</summary>If you omit this parameter, CW uses the same value here that you set for <code>EvaluationPeriods</code>, and the alarm goes to alarm state if that many consecutive periods are breaching.</details>"
  },
  {
    "name": "threshold",
    "type": "number",
    "description": "The value to compare with the specified statistic."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "<details><summary>A list of key-value pairs to associate with the alarm. You can associate as many as 50 tags with an alarm. To be able to associate tags with the alarm when you create the alarm, you must have the <code>cloudwatch:TagResource</code> permission.</summary>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</details>",
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
    "description": "<details><summary>The name of the alarm. If you don't specify a name, CFN generates a unique physical ID and uses that ID for the alarm name.</summary>If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.</details>"
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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ alarm_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>alarms</code> in a region.
```sql
SELECT
  region,
  alarm_name
FROM awscc.cloudwatch.alarms_list_only
WHERE
  region = '{{ region }}';
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
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
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
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`version: 1
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
            value: '{{ value }}'`}</CodeBlock>

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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ alarm_name }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudwatch.alarms
WHERE
  Identifier = '{{ alarm_name }}' AND
  region = '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

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