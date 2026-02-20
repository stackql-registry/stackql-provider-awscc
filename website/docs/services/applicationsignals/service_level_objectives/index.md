---
title: service_level_objectives
hide_title: false
hide_table_of_contents: false
keywords:
  - service_level_objectives
  - applicationsignals
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

Creates, updates, deletes or gets a <code>service_level_objective</code> resource or lists <code>service_level_objectives</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>service_level_objectives</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::ApplicationSignals::ServiceLevelObjective</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.applicationsignals.service_level_objectives" /></td></tr>
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
    "description": "The ARN of this SLO."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of this SLO."
  },
  {
    "name": "description",
    "type": "string",
    "description": "An optional description for this SLO. Default is 'No description'"
  },
  {
    "name": "created_time",
    "type": "integer",
    "description": "Epoch time in seconds of the time that this SLO was created"
  },
  {
    "name": "last_updated_time",
    "type": "integer",
    "description": "Epoch time in seconds of the time that this SLO was most recently updated"
  },
  {
    "name": "sli",
    "type": "object",
    "description": "This structure contains information about the performance metric that an SLO monitors.",
    "children": [
      {
        "name": "sli_metric",
        "type": "object",
        "description": "A structure that contains information about the metric that the SLO monitors.",
        "children": [
          {
            "name": "key_attributes",
            "type": "object",
            "description": "This is a string-to-string map that contains information about the type of object that this SLO is related to."
          },
          {
            "name": "operation_name",
            "type": "string",
            "description": "If the SLO monitors a specific operation of the service, this field displays that operation name."
          },
          {
            "name": "metric_type",
            "type": "string",
            "description": "If the SLO monitors either the LATENCY or AVAILABILITY metric that Application Signals collects, this field displays which of those metrics is used."
          },
          {
            "name": "statistic",
            "type": "string",
            "description": "The statistic to use for comparison to the threshold. It can be any CloudWatch statistic or extended statistic"
          },
          {
            "name": "period_seconds",
            "type": "integer",
            "description": "The number of seconds to use as the period for SLO evaluation. Your application's performance is compared to the SLI during each period. For each period, the application is determined to have either achieved or not achieved the necessary performance."
          },
          {
            "name": "metric_data_queries",
            "type": "array",
            "description": "If this SLO monitors a CloudWatch metric or the result of a CloudWatch metric math expression, this structure includes the information about that metric or expression.",
            "children": [
              {
                "name": "metric_stat",
                "type": "object",
                "description": "A metric to be used directly for the SLO, or to be used in the math expression that will be used for the SLO. Within one MetricDataQuery, you must specify either Expression or MetricStat but not both."
              },
              {
                "name": "id",
                "type": "string",
                "description": "A short name used to tie this object to the results in the response."
              },
              {
                "name": "return_data",
                "type": "boolean",
                "description": "This option indicates whether to return the timestamps and raw data values of this metric."
              },
              {
                "name": "expression",
                "type": "string",
                "description": "The math expression to be performed on the returned data."
              },
              {
                "name": "account_id",
                "type": "string",
                "description": "The ID of the account where the metrics are located, if this is a cross-account alarm."
              }
            ]
          },
          {
            "name": "dependency_config",
            "type": "object",
            "description": "Configuration for identifying a dependency and its operation",
            "children": [
              {
                "name": "dependency_key_attributes",
                "type": "object",
                "description": "If this SLO is related to a metric collected by Application Signals, you must use this field to specify which dependency the SLO metric is related to."
              },
              {
                "name": "dependency_operation_name",
                "type": "string",
                "description": "When the SLO monitors a specific operation of the dependency, this field specifies the name of that operation in the dependency."
              }
            ]
          }
        ]
      },
      {
        "name": "metric_threshold",
        "type": "number",
        "description": "The value that the SLI metric is compared to."
      },
      {
        "name": "comparison_operator",
        "type": "string",
        "description": "The arithmetic operation used when comparing the specified metric to the threshold."
      }
    ]
  },
  {
    "name": "request_based_sli",
    "type": "object",
    "description": "This structure contains information about the performance metric that a request-based SLO monitors.",
    "children": [
      {
        "name": "request_based_sli_metric",
        "type": "object",
        "description": "This structure contains the information about the metric that is used for a request-based SLO.",
        "children": [
          {
            "name": "key_attributes",
            "type": "object",
            "description": "This is a string-to-string map that contains information about the type of object that this SLO is related to."
          },
          {
            "name": "operation_name",
            "type": "string",
            "description": "If the SLO monitors a specific operation of the service, this field displays that operation name."
          },
          {
            "name": "metric_type",
            "type": "string",
            "description": "If the SLO monitors either the LATENCY or AVAILABILITY metric that Application Signals collects, this field displays which of those metrics is used."
          },
          {
            "name": "total_request_count_metric",
            "type": "array",
            "description": "This structure defines the metric that is used as the \"total requests\" number for a request-based SLO. The number observed for this metric is divided by the number of \"good requests\" or \"bad requests\" that is observed for the metric defined in &#96;MonitoredRequestCountMetric&#96;.",
            "children": [
              {
                "name": "metric_stat",
                "type": "object",
                "description": "A metric to be used directly for the SLO, or to be used in the math expression that will be used for the SLO. Within one MetricDataQuery, you must specify either Expression or MetricStat but not both."
              },
              {
                "name": "id",
                "type": "string",
                "description": "A short name used to tie this object to the results in the response."
              },
              {
                "name": "return_data",
                "type": "boolean",
                "description": "This option indicates whether to return the timestamps and raw data values of this metric."
              },
              {
                "name": "expression",
                "type": "string",
                "description": "The math expression to be performed on the returned data."
              },
              {
                "name": "account_id",
                "type": "string",
                "description": "The ID of the account where the metrics are located, if this is a cross-account alarm."
              }
            ]
          },
          {
            "name": "monitored_request_count_metric",
            "type": "object",
            "description": "This structure defines the metric that is used as the \"good request\" or \"bad request\" value for a request-based SLO. This value observed for the metric defined in &#96;TotalRequestCountMetric&#96; is divided by the number found for &#96;MonitoredRequestCountMetric&#96; to determine the percentage of successful requests that this SLO tracks."
          },
          {
            "name": "dependency_config",
            "type": "object",
            "description": "Configuration for identifying a dependency and its operation",
            "children": [
              {
                "name": "dependency_key_attributes",
                "type": "object",
                "description": "If this SLO is related to a metric collected by Application Signals, you must use this field to specify which dependency the SLO metric is related to."
              },
              {
                "name": "dependency_operation_name",
                "type": "string",
                "description": "When the SLO monitors a specific operation of the dependency, this field specifies the name of that operation in the dependency."
              }
            ]
          }
        ]
      },
      {
        "name": "metric_threshold",
        "type": "number",
        "description": "The value that the SLI metric is compared to."
      },
      {
        "name": "comparison_operator",
        "type": "string",
        "description": "The arithmetic operation used when comparing the specified metric to the threshold."
      }
    ]
  },
  {
    "name": "evaluation_type",
    "type": "string",
    "description": "Displays whether this is a period-based SLO or a request-based SLO."
  },
  {
    "name": "goal",
    "type": "object",
    "description": "A structure that contains the attributes that determine the goal of the SLO. This includes the time period for evaluation and the attainment threshold.",
    "children": [
      {
        "name": "interval",
        "type": "object",
        "description": "The time period used to evaluate the SLO. It can be either a calendar interval or rolling interval.<br />If you omit this parameter, a rolling interval of 7 days is used.",
        "children": [
          {
            "name": "rolling_interval",
            "type": "object",
            "description": "If the interval is a calendar interval, this structure contains the interval specifications.",
            "children": [
              {
                "name": "duration_unit",
                "type": "string",
                "description": "Specifies the interval unit."
              },
              {
                "name": "duration",
                "type": "integer",
                "description": "Specifies the duration of each interval. For example, if &#96;Duration&#96; is 1 and &#96;DurationUnit&#96; is &#96;MONTH&#96;, each interval is one month, aligned with the calendar."
              }
            ]
          },
          {
            "name": "calendar_interval",
            "type": "object",
            "description": "If the interval for this service level objective is a calendar interval, this structure contains the interval specifications.",
            "children": [
              {
                "name": "start_time",
                "type": "integer",
                "description": "Epoch time in seconds you want the first interval to start. Be sure to choose a time that configures the intervals the way that you want. For example, if you want weekly intervals starting on Mondays at 6 a.m., be sure to specify a start time that is a Monday at 6 a.m.<br />As soon as one calendar interval ends, another automatically begins."
              },
              {
                "name": "duration_unit",
                "type": "string",
                "description": "Specifies the interval unit."
              },
              {
                "name": "duration",
                "type": "integer",
                "description": "Specifies the duration of each interval. For example, if &#96;Duration&#96; is 1 and &#96;DurationUnit&#96; is &#96;MONTH&#96;, each interval is one month, aligned with the calendar."
              }
            ]
          }
        ]
      },
      {
        "name": "attainment_goal",
        "type": "number",
        "description": "The threshold that determines if the goal is being met. An attainment goal is the ratio of good periods that meet the threshold requirements to the total periods within the interval. For example, an attainment goal of 99.9% means that within your interval, you are targeting 99.9% of the periods to be in healthy state.<br />If you omit this parameter, 99 is used to represent 99% as the attainment goal."
      },
      {
        "name": "warning_threshold",
        "type": "number",
        "description": "The percentage of remaining budget over total budget that you want to get warnings for. If you omit this parameter, the default of 50.0 is used."
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The list of tag keys and values associated with the resource you specified",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "A string that you can use to assign a value. The combination of tag keys and values can help you organize and categorize your resources."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the specified tag key."
      }
    ]
  },
  {
    "name": "burn_rate_configurations",
    "type": "array",
    "description": "Each object in this array defines the length of the look-back window used to calculate one burn rate metric for this SLO. The burn rate measures how fast the service is consuming the error budget, relative to the attainment goal of the SLO.",
    "children": [
      {
        "name": "look_back_window_minutes",
        "type": "integer",
        "description": "The number of minutes to use as the look-back window."
      }
    ]
  },
  {
    "name": "exclusion_windows",
    "type": "array",
    "description": "Each object in this array defines a time exclusion window for this SLO. The time exclusion window is used to exclude breaching data points from affecting attainment rate, error budget, and burn rate metrics.",
    "children": [
      {
        "name": "window",
        "type": "object",
        "description": "This object defines the length of time an exclusion window should span.",
        "children": [
          {
            "name": "duration_unit",
            "type": "string",
            "description": "Specifies the interval unit."
          },
          {
            "name": "duration",
            "type": "integer",
            "description": "Specifies the duration of each interval. For example, if &#96;Duration&#96; is 1 and &#96;DurationUnit&#96; is &#96;MONTH&#96;, each interval is one month, aligned with the calendar."
          }
        ]
      },
      {
        "name": "start_time",
        "type": "string",
        "description": "The time you want the exclusion window to start at. Note that time exclusion windows can only be scheduled in the future, not the past."
      },
      {
        "name": "recurrence_rule",
        "type": "object",
        "description": "This object defines how often to repeat a time exclusion window.",
        "children": [
          {
            "name": "expression",
            "type": "string",
            "description": "A cron or rate expression denoting how often to repeat this exclusion window."
          }
        ]
      },
      {
        "name": "reason",
        "type": "string",
        "description": "An optional reason for scheduling this time exclusion window. Default is 'No reason'."
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
    "name": "arn",
    "type": "string",
    "description": "The ARN of this SLO."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationsignals-servicelevelobjective.html"><code>AWS::ApplicationSignals::ServiceLevelObjective</code></a>.

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
    <td><code>service_level_objectives</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>service_level_objectives</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>service_level_objectives</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>service_level_objectives_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>service_level_objectives</code></td>
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

Gets all properties from an individual <code>service_level_objective</code>.
```sql
SELECT
region,
arn,
name,
description,
created_time,
last_updated_time,
sli,
request_based_sli,
evaluation_type,
goal,
tags,
burn_rate_configurations,
exclusion_windows
FROM awscc.applicationsignals.service_level_objectives
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>service_level_objectives</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.applicationsignals.service_level_objectives_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>service_level_objective</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.applicationsignals.service_level_objectives (
 Name,
 region
)
SELECT 
'{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.applicationsignals.service_level_objectives (
 Name,
 Description,
 Sli,
 RequestBasedSli,
 Goal,
 Tags,
 BurnRateConfigurations,
 ExclusionWindows,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Description }}',
 '{{ Sli }}',
 '{{ RequestBasedSli }}',
 '{{ Goal }}',
 '{{ Tags }}',
 '{{ BurnRateConfigurations }}',
 '{{ ExclusionWindows }}',
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
  - name: service_level_objective
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: Sli
        value:
          SliMetric:
            KeyAttributes: null
            OperationName: '{{ OperationName }}'
            MetricType: '{{ MetricType }}'
            Statistic: '{{ Statistic }}'
            PeriodSeconds: '{{ PeriodSeconds }}'
            MetricDataQueries:
              - MetricStat:
                  Period: '{{ Period }}'
                  Metric:
                    MetricName: '{{ MetricName }}'
                    Dimensions:
                      - Value: '{{ Value }}'
                        Name: '{{ Name }}'
                    Namespace: '{{ Namespace }}'
                  Stat: '{{ Stat }}'
                  Unit: '{{ Unit }}'
                Id: '{{ Id }}'
                ReturnData: '{{ ReturnData }}'
                Expression: '{{ Expression }}'
                AccountId: '{{ AccountId }}'
            DependencyConfig:
              DependencyKeyAttributes: null
              DependencyOperationName: '{{ DependencyOperationName }}'
          MetricThreshold: null
          ComparisonOperator: '{{ ComparisonOperator }}'
      - name: RequestBasedSli
        value:
          RequestBasedSliMetric:
            KeyAttributes: null
            OperationName: '{{ OperationName }}'
            MetricType: '{{ MetricType }}'
            TotalRequestCountMetric: null
            MonitoredRequestCountMetric:
              GoodCountMetric: null
              BadCountMetric: null
            DependencyConfig: null
          MetricThreshold: null
          ComparisonOperator: '{{ ComparisonOperator }}'
      - name: Goal
        value:
          Interval:
            RollingInterval:
              DurationUnit: '{{ DurationUnit }}'
              Duration: '{{ Duration }}'
            CalendarInterval:
              StartTime: '{{ StartTime }}'
              DurationUnit: null
              Duration: null
          AttainmentGoal: null
          WarningThreshold: null
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: BurnRateConfigurations
        value:
          - LookBackWindowMinutes: '{{ LookBackWindowMinutes }}'
      - name: ExclusionWindows
        value:
          - Window:
              DurationUnit: null
              Duration: null
            StartTime: '{{ StartTime }}'
            RecurrenceRule:
              Expression: '{{ Expression }}'
            Reason: '{{ Reason }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.applicationsignals.service_level_objectives
SET PatchDocument = string('{{ {
    "Description": description,
    "Sli": sli,
    "RequestBasedSli": request_based_sli,
    "Goal": goal,
    "Tags": tags,
    "BurnRateConfigurations": burn_rate_configurations,
    "ExclusionWindows": exclusion_windows
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.applicationsignals.service_level_objectives
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>service_level_objectives</code> resource, the following permissions are required:

### Create
```json
application-signals:CreateServiceLevelObjective,
cloudwatch:GetMetricData,
application-signals:TagResource,
application-signals:GetServiceLevelObjective,
application-signals:ListTagsForResource,
iam:GetRole,
iam:CreateServiceLinkedRole,
application-signals:ListServiceLevelObjectiveExclusionWindows,
application-signals:BatchUpdateExclusionWindows
```

### Read
```json
application-signals:GetServiceLevelObjective,
application-signals:ListTagsForResource,
application-signals:ListServiceLevelObjectiveExclusionWindows
```

### Update
```json
application-signals:UpdateServiceLevelObjective,
cloudwatch:GetMetricData,
application-signals:TagResource,
application-signals:UntagResource,
application-signals:GetServiceLevelObjective,
application-signals:ListTagsForResource,
application-signals:ListServiceLevelObjectiveExclusionWindows,
application-signals:BatchUpdateExclusionWindows
```

### Delete
```json
application-signals:DeleteServiceLevelObjective,
application-signals:UntagResource,
application-signals:GetServiceLevelObjective
```

### List
```json
application-signals:ListServiceLevelObjectives,
application-signals:ListTagsForResource,
application-signals:ListServiceLevelObjectiveExclusionWindows
```
