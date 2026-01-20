---
title: security_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - security_profiles
  - iot
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

Creates, updates, deletes or gets a <code>security_profile</code> resource or lists <code>security_profiles</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>security_profiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A security profile defines a set of expected behaviors for devices in your account.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iot.security_profiles" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "security_profile_name",
    "type": "string",
    "description": "A unique identifier for the security profile."
  },
  {
    "name": "security_profile_description",
    "type": "string",
    "description": "A description of the security profile."
  },
  {
    "name": "behaviors",
    "type": "array",
    "description": "Specifies the behaviors that, when violated by a device (thing), cause an alert.",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": "The name for the behavior."
      },
      {
        "name": "metric",
        "type": "string",
        "description": "What is measured by the behavior."
      },
      {
        "name": "metric_dimension",
        "type": "object",
        "description": "The dimension of a metric.",
        "children": [
          {
            "name": "dimension_name",
            "type": "string",
            "description": "A unique identifier for the dimension."
          },
          {
            "name": "operator",
            "type": "string",
            "description": "Defines how the dimensionValues of a dimension are interpreted."
          }
        ]
      },
      {
        "name": "criteria",
        "type": "object",
        "description": "The criteria by which the behavior is determined to be normal.",
        "children": [
          {
            "name": "comparison_operator",
            "type": "string",
            "description": "The operator that relates the thing measured (metric) to the criteria (containing a value or statisticalThreshold)."
          },
          {
            "name": "value",
            "type": "object",
            "description": "The value to be compared with the metric.",
            "children": [
              {
                "name": "count",
                "type": "string",
                "description": "If the ComparisonOperator calls for a numeric value, use this to specify that (integer) numeric value to be compared with the metric."
              },
              {
                "name": "cidrs",
                "type": "array",
                "description": "If the ComparisonOperator calls for a set of CIDRs, use this to specify that set to be compared with the metric."
              },
              {
                "name": "ports",
                "type": "array",
                "description": "If the ComparisonOperator calls for a set of ports, use this to specify that set to be compared with the metric."
              },
              {
                "name": "number",
                "type": "number",
                "description": "The numeral value of a metric."
              },
              {
                "name": "numbers",
                "type": "array",
                "description": "The numeral values of a metric."
              },
              {
                "name": "strings",
                "type": "array",
                "description": "The string values of a metric."
              }
            ]
          },
          {
            "name": "duration_seconds",
            "type": "integer",
            "description": "Use this to specify the time duration over which the behavior is evaluated."
          },
          {
            "name": "consecutive_datapoints_to_alarm",
            "type": "integer",
            "description": "If a device is in violation of the behavior for the specified number of consecutive datapoints, an alarm occurs. If not specified, the default is 1."
          },
          {
            "name": "consecutive_datapoints_to_clear",
            "type": "integer",
            "description": "If an alarm has occurred and the offending device is no longer in violation of the behavior for the specified number of consecutive datapoints, the alarm is cleared. If not specified, the default is 1."
          },
          {
            "name": "statistical_threshold",
            "type": "object",
            "description": "A statistical ranking (percentile) which indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior.",
            "children": [
              {
                "name": "statistic",
                "type": "string",
                "description": "The percentile which resolves to a threshold value by which compliance with a behavior is determined"
              }
            ]
          },
          {
            "name": "ml_detection_config",
            "type": "object",
            "description": "The configuration of an ML Detect Security Profile.",
            "children": [
              {
                "name": "confidence_level",
                "type": "string",
                "description": "The sensitivity of anomalous behavior evaluation. Can be Low, Medium, or High."
              }
            ]
          }
        ]
      },
      {
        "name": "suppress_alerts",
        "type": "boolean",
        "description": "Manage Detect alarm SNS notifications by setting behavior notification to on or suppressed. Detect will continue to performing device behavior evaluations. However, suppressed alarms wouldn't be forwarded for SNS notification."
      },
      {
        "name": "export_metric",
        "type": "boolean",
        "description": "Flag to enable/disable metrics export for metric to be retained."
      }
    ]
  },
  {
    "name": "alert_targets",
    "type": "object",
    "description": "Specifies the destinations to which alerts are sent."
  },
  {
    "name": "additional_metrics_to_retain_v2",
    "type": "array",
    "description": "A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here.",
    "children": [
      {
        "name": "metric",
        "type": "string",
        "description": "What is measured by the behavior."
      },
      {
        "name": "metric_dimension",
        "type": "object",
        "description": "The dimension of a metric.",
        "children": [
          {
            "name": "dimension_name",
            "type": "string",
            "description": "A unique identifier for the dimension."
          },
          {
            "name": "operator",
            "type": "string",
            "description": "Defines how the dimensionValues of a dimension are interpreted."
          }
        ]
      },
      {
        "name": "export_metric",
        "type": "boolean",
        "description": "Flag to enable/disable metrics export for metric to be retained."
      }
    ]
  },
  {
    "name": "metrics_export_config",
    "type": "object",
    "description": "A structure containing the mqtt topic for metrics export.",
    "children": [
      {
        "name": "mqtt_topic",
        "type": "string",
        "description": "The topic for metrics export."
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": "The ARN of the role that grants permission to publish to mqtt topic."
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Metadata that can be used to manage the security profile.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "target_arns",
    "type": "array",
    "description": "A set of target ARNs that the security profile is attached to."
  },
  {
    "name": "security_profile_arn",
    "type": "string",
    "description": "The ARN (Amazon resource name) of the created security profile."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html"><code>AWS::IoT::SecurityProfile</code></a>.

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
    <td><CopyableCode code=", region" /></td>
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

Gets all properties from an individual <code>security_profile</code>.
```sql
SELECT
region,
security_profile_name,
security_profile_description,
behaviors,
alert_targets,
additional_metrics_to_retain_v2,
metrics_export_config,
tags,
target_arns,
security_profile_arn
FROM awscc.iot.security_profiles
WHERE region = 'us-east-1' AND data__Identifier = '<SecurityProfileName>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>security_profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iot.security_profiles (
 ,
 region
)
SELECT 
'{{  }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iot.security_profiles (
 SecurityProfileName,
 SecurityProfileDescription,
 Behaviors,
 AlertTargets,
 AdditionalMetricsToRetainV2,
 MetricsExportConfig,
 Tags,
 TargetArns,
 region
)
SELECT 
 '{{ SecurityProfileName }}',
 '{{ SecurityProfileDescription }}',
 '{{ Behaviors }}',
 '{{ AlertTargets }}',
 '{{ AdditionalMetricsToRetainV2 }}',
 '{{ MetricsExportConfig }}',
 '{{ Tags }}',
 '{{ TargetArns }}',
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
  - name: security_profile
    props:
      - name: SecurityProfileName
        value: '{{ SecurityProfileName }}'
      - name: SecurityProfileDescription
        value: '{{ SecurityProfileDescription }}'
      - name: Behaviors
        value:
          - Name: '{{ Name }}'
            Metric: '{{ Metric }}'
            MetricDimension:
              DimensionName: '{{ DimensionName }}'
              Operator: '{{ Operator }}'
            Criteria:
              ComparisonOperator: '{{ ComparisonOperator }}'
              Value:
                Count: '{{ Count }}'
                Cidrs:
                  - '{{ Cidrs[0] }}'
                Ports:
                  - '{{ Ports[0] }}'
                Number: null
                Numbers:
                  - null
                Strings:
                  - '{{ Strings[0] }}'
              DurationSeconds: '{{ DurationSeconds }}'
              ConsecutiveDatapointsToAlarm: '{{ ConsecutiveDatapointsToAlarm }}'
              ConsecutiveDatapointsToClear: '{{ ConsecutiveDatapointsToClear }}'
              StatisticalThreshold:
                Statistic: '{{ Statistic }}'
              MlDetectionConfig:
                ConfidenceLevel: '{{ ConfidenceLevel }}'
            SuppressAlerts: '{{ SuppressAlerts }}'
            ExportMetric: '{{ ExportMetric }}'
      - name: AlertTargets
        value: {}
      - name: AdditionalMetricsToRetainV2
        value:
          - Metric: '{{ Metric }}'
            MetricDimension: null
            ExportMetric: null
      - name: MetricsExportConfig
        value:
          MqttTopic: '{{ MqttTopic }}'
          RoleArn: '{{ RoleArn }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: TargetArns
        value:
          - '{{ TargetArns[0] }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iot.security_profiles
WHERE data__Identifier = '<SecurityProfileName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>security_profiles</code> resource, the following permissions are required:

### Create
```json
iot:CreateSecurityProfile,
iot:AttachSecurityProfile,
iot:DescribeSecurityProfile,
iot:TagResource,
iam:PassRole
```

### Read
```json
iot:DescribeSecurityProfile,
iot:ListTagsForResource,
iot:ListTargetsForSecurityProfile
```

### Update
```json
iot:UpdateSecurityProfile,
iot:ListTargetsForSecurityProfile,
iot:AttachSecurityProfile,
iot:DetachSecurityProfile,
iot:ListTagsForResource,
iot:UntagResource,
iot:TagResource,
iam:PassRole
```

### Delete
```json
iot:DescribeSecurityProfile,
iot:DeleteSecurityProfile
```

### List
```json
iot:ListSecurityProfiles
```
