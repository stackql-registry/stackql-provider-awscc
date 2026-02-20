---
title: scaling_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - scaling_policies
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

Creates, updates, deletes or gets a <code>scaling_policy</code> resource or lists <code>scaling_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>scaling_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::AutoScaling::ScalingPolicy resource specifies an Amazon EC2 Auto Scaling scaling policy so that the Auto Scaling group can scale the number of instances available for your application.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.autoscaling.scaling_policies" /></td></tr>
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
    "name": "metric_aggregation_type",
    "type": "string",
    "description": "The aggregation type for the CloudWatch metrics. The valid values are Minimum, Maximum, and Average. If the aggregation type is null, the value is treated as Average. Valid only if the policy type is StepScaling."
  },
  {
    "name": "policy_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "policy_type",
    "type": "string",
    "description": "One of the following policy types: TargetTrackingScaling, StepScaling, SimpleScaling (default), PredictiveScaling"
  },
  {
    "name": "predictive_scaling_configuration",
    "type": "object",
    "description": "A predictive scaling policy. Includes support for predefined metrics only.",
    "children": [
      {
        "name": "metric_specifications",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "customized_capacity_metric_specification",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "metric_data_queries",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "customized_load_metric_specification",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "metric_data_queries",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "customized_scaling_metric_specification",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "metric_data_queries",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "predefined_load_metric_specification",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "resource_label",
                "type": "string",
                "description": ""
              },
              {
                "name": "predefined_metric_type",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "target_value",
            "type": "number",
            "description": ""
          },
          {
            "name": "predefined_scaling_metric_specification",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "resource_label",
                "type": "string",
                "description": ""
              },
              {
                "name": "predefined_metric_type",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "predefined_metric_pair_specification",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "resource_label",
                "type": "string",
                "description": ""
              },
              {
                "name": "predefined_metric_type",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "max_capacity_breach_behavior",
        "type": "string",
        "description": ""
      },
      {
        "name": "max_capacity_buffer",
        "type": "integer",
        "description": ""
      },
      {
        "name": "scheduling_buffer_time",
        "type": "integer",
        "description": ""
      },
      {
        "name": "mode",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "scaling_adjustment",
    "type": "integer",
    "description": "The amount by which to scale, based on the specified adjustment type. A positive value adds to the current capacity while a negative number removes from the current capacity. For exact capacity, you must specify a positive value. Required if the policy type is SimpleScaling. (Not used with any other policy type.)"
  },
  {
    "name": "cooldown",
    "type": "string",
    "description": "The duration of the policy's cooldown period, in seconds. When a cooldown period is specified here, it overrides the default cooldown period defined for the Auto Scaling group."
  },
  {
    "name": "step_adjustments",
    "type": "array",
    "description": "A set of adjustments that enable you to scale based on the size of the alarm breach. Required if the policy type is StepScaling. (Not used with any other policy type.)",
    "children": [
      {
        "name": "metric_interval_upper_bound",
        "type": "number",
        "description": ""
      },
      {
        "name": "metric_interval_lower_bound",
        "type": "number",
        "description": ""
      },
      {
        "name": "scaling_adjustment",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "auto_scaling_group_name",
    "type": "string",
    "description": "The name of the Auto Scaling group."
  },
  {
    "name": "min_adjustment_magnitude",
    "type": "integer",
    "description": "The minimum value to scale by when the adjustment type is PercentChangeInCapacity. For example, suppose that you create a step scaling policy to scale out an Auto Scaling group by 25 percent and you specify a MinAdjustmentMagnitude of 2. If the group has 4 instances and the scaling policy is performed, 25 percent of 4 is 1. However, because you specified a MinAdjustmentMagnitude of 2, Amazon EC2 Auto Scaling scales out the group by 2 instances."
  },
  {
    "name": "target_tracking_configuration",
    "type": "object",
    "description": "A target tracking scaling policy. Includes support for predefined or customized metrics.",
    "children": [
      {
        "name": "customized_metric_specification",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "metric_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "dimensions",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "value",
                "type": "string",
                "description": ""
              },
              {
                "name": "name",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "metrics",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "label",
                "type": "string",
                "description": ""
              },
              {
                "name": "metric_stat",
                "type": "object",
                "description": ""
              },
              {
                "name": "id",
                "type": "string",
                "description": ""
              },
              {
                "name": "return_data",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "expression",
                "type": "string",
                "description": ""
              },
              {
                "name": "period",
                "type": "integer",
                "description": ""
              }
            ]
          },
          {
            "name": "statistic",
            "type": "string",
            "description": ""
          },
          {
            "name": "unit",
            "type": "string",
            "description": ""
          },
          {
            "name": "namespace",
            "type": "string",
            "description": ""
          },
          {
            "name": "period",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "target_value",
        "type": "number",
        "description": ""
      },
      {
        "name": "disable_scale_in",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "predefined_metric_specification",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "resource_label",
            "type": "string",
            "description": ""
          },
          {
            "name": "predefined_metric_type",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "estimated_instance_warmup",
    "type": "integer",
    "description": "The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. If not provided, the default is to use the value from the default cooldown period for the Auto Scaling group. Valid only if the policy type is TargetTrackingScaling or StepScaling."
  },
  {
    "name": "adjustment_type",
    "type": "string",
    "description": "Specifies how the scaling adjustment is interpreted. The valid values are ChangeInCapacity, ExactCapacity, and PercentChangeInCapacity."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The ARN of the AutoScaling scaling policy"
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
    "description": "The ARN of the AutoScaling scaling policy"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-scalingpolicy.html"><code>AWS::AutoScaling::ScalingPolicy</code></a>.

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
    <td><code>scaling_policies</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AutoScalingGroupName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>scaling_policies</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>scaling_policies</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>scaling_policies_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>scaling_policies</code></td>
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

Gets all properties from an individual <code>scaling_policy</code>.
```sql
SELECT
region,
metric_aggregation_type,
policy_name,
policy_type,
predictive_scaling_configuration,
scaling_adjustment,
cooldown,
step_adjustments,
auto_scaling_group_name,
min_adjustment_magnitude,
target_tracking_configuration,
estimated_instance_warmup,
adjustment_type,
arn
FROM awscc.autoscaling.scaling_policies
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>scaling_policies</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.autoscaling.scaling_policies_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>scaling_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.autoscaling.scaling_policies (
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
INSERT INTO awscc.autoscaling.scaling_policies (
 MetricAggregationType,
 PolicyType,
 PredictiveScalingConfiguration,
 ScalingAdjustment,
 Cooldown,
 StepAdjustments,
 AutoScalingGroupName,
 MinAdjustmentMagnitude,
 TargetTrackingConfiguration,
 EstimatedInstanceWarmup,
 AdjustmentType,
 region
)
SELECT 
 '{{ MetricAggregationType }}',
 '{{ PolicyType }}',
 '{{ PredictiveScalingConfiguration }}',
 '{{ ScalingAdjustment }}',
 '{{ Cooldown }}',
 '{{ StepAdjustments }}',
 '{{ AutoScalingGroupName }}',
 '{{ MinAdjustmentMagnitude }}',
 '{{ TargetTrackingConfiguration }}',
 '{{ EstimatedInstanceWarmup }}',
 '{{ AdjustmentType }}',
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
  - name: scaling_policy
    props:
      - name: MetricAggregationType
        value: '{{ MetricAggregationType }}'
      - name: PolicyType
        value: '{{ PolicyType }}'
      - name: PredictiveScalingConfiguration
        value:
          MetricSpecifications:
            - CustomizedCapacityMetricSpecification:
                MetricDataQueries:
                  - Label: '{{ Label }}'
                    MetricStat:
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
              CustomizedLoadMetricSpecification:
                MetricDataQueries:
                  - null
              CustomizedScalingMetricSpecification:
                MetricDataQueries:
                  - null
              PredefinedLoadMetricSpecification:
                ResourceLabel: '{{ ResourceLabel }}'
                PredefinedMetricType: '{{ PredefinedMetricType }}'
              TargetValue: null
              PredefinedScalingMetricSpecification:
                ResourceLabel: '{{ ResourceLabel }}'
                PredefinedMetricType: '{{ PredefinedMetricType }}'
              PredefinedMetricPairSpecification:
                ResourceLabel: '{{ ResourceLabel }}'
                PredefinedMetricType: '{{ PredefinedMetricType }}'
          MaxCapacityBreachBehavior: '{{ MaxCapacityBreachBehavior }}'
          MaxCapacityBuffer: '{{ MaxCapacityBuffer }}'
          SchedulingBufferTime: '{{ SchedulingBufferTime }}'
          Mode: '{{ Mode }}'
      - name: ScalingAdjustment
        value: '{{ ScalingAdjustment }}'
      - name: Cooldown
        value: '{{ Cooldown }}'
      - name: StepAdjustments
        value:
          - MetricIntervalUpperBound: null
            MetricIntervalLowerBound: null
            ScalingAdjustment: '{{ ScalingAdjustment }}'
      - name: AutoScalingGroupName
        value: '{{ AutoScalingGroupName }}'
      - name: MinAdjustmentMagnitude
        value: '{{ MinAdjustmentMagnitude }}'
      - name: TargetTrackingConfiguration
        value:
          CustomizedMetricSpecification:
            MetricName: '{{ MetricName }}'
            Dimensions:
              - null
            Metrics:
              - Label: '{{ Label }}'
                MetricStat:
                  Metric: null
                  Stat: '{{ Stat }}'
                  Unit: '{{ Unit }}'
                  Period: '{{ Period }}'
                Id: '{{ Id }}'
                ReturnData: '{{ ReturnData }}'
                Expression: '{{ Expression }}'
                Period: '{{ Period }}'
            Statistic: '{{ Statistic }}'
            Unit: '{{ Unit }}'
            Namespace: '{{ Namespace }}'
            Period: '{{ Period }}'
          TargetValue: null
          DisableScaleIn: '{{ DisableScaleIn }}'
          PredefinedMetricSpecification:
            ResourceLabel: '{{ ResourceLabel }}'
            PredefinedMetricType: '{{ PredefinedMetricType }}'
      - name: EstimatedInstanceWarmup
        value: '{{ EstimatedInstanceWarmup }}'
      - name: AdjustmentType
        value: '{{ AdjustmentType }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>scaling_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.autoscaling.scaling_policies
SET PatchDocument = string('{{ {
    "MetricAggregationType": metric_aggregation_type,
    "PolicyType": policy_type,
    "PredictiveScalingConfiguration": predictive_scaling_configuration,
    "ScalingAdjustment": scaling_adjustment,
    "Cooldown": cooldown,
    "StepAdjustments": step_adjustments,
    "MinAdjustmentMagnitude": min_adjustment_magnitude,
    "TargetTrackingConfiguration": target_tracking_configuration,
    "EstimatedInstanceWarmup": estimated_instance_warmup,
    "AdjustmentType": adjustment_type
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.autoscaling.scaling_policies
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>scaling_policies</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
autoscaling:DescribePolicies,
autoscaling:PutScalingPolicy,
cloudwatch:GetMetricData
```

</TabItem>
<TabItem value="read">

```json
autoscaling:DescribePolicies
```

</TabItem>
<TabItem value="update">

```json
autoscaling:DescribePolicies,
autoscaling:PutScalingPolicy,
cloudwatch:GetMetricData
```

</TabItem>
<TabItem value="delete">

```json
autoscaling:DeletePolicy,
autoscaling:DescribePolicies
```

</TabItem>
<TabItem value="list">

```json
autoscaling:DescribePolicies
```

</TabItem>
</Tabs>