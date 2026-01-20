---
title: cloud_watch_alarm_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_watch_alarm_templates
  - medialive
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

Creates, updates, deletes or gets a <code>cloud_watch_alarm_template</code> resource or lists <code>cloud_watch_alarm_templates</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>cloud_watch_alarm_templates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::MediaLive::CloudWatchAlarmTemplate Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.medialive.cloud_watch_alarm_templates" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": "A cloudwatch alarm template's ARN (Amazon Resource Name)"
  },
  {
    "name": "comparison_operator",
    "type": "string",
    "description": "The comparison operator used to compare the specified statistic and the threshold."
  },
  {
    "name": "created_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "datapoints_to_alarm",
    "type": "number",
    "description": "The number of datapoints within the evaluation period that must be breaching to trigger the alarm."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A resource's optional description."
  },
  {
    "name": "evaluation_periods",
    "type": "number",
    "description": "The number of periods over which data is compared to the specified threshold."
  },
  {
    "name": "group_id",
    "type": "string",
    "description": "A cloudwatch alarm template group's id. AWS provided template groups have ids that start with &#96;aws-&#96;"
  },
  {
    "name": "group_identifier",
    "type": "string",
    "description": "A cloudwatch alarm template group's identifier. Can be either be its id or current name."
  },
  {
    "name": "id",
    "type": "string",
    "description": "A cloudwatch alarm template's id. AWS provided templates have ids that start with &#96;aws-&#96;"
  },
  {
    "name": "identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "metric_name",
    "type": "string",
    "description": "The name of the metric associated with the alarm. Must be compatible with targetResourceType."
  },
  {
    "name": "modified_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": "A resource's name. Names must be unique within the scope of a resource type in a specific region."
  },
  {
    "name": "period",
    "type": "number",
    "description": "The period, in seconds, over which the specified statistic is applied."
  },
  {
    "name": "statistic",
    "type": "string",
    "description": "The statistic to apply to the alarm's metric data."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "Represents the tags associated with a resource."
  },
  {
    "name": "target_resource_type",
    "type": "string",
    "description": "The resource type this template should dynamically generate cloudwatch metric alarms for."
  },
  {
    "name": "threshold",
    "type": "number",
    "description": "The threshold value to compare with the specified statistic."
  },
  {
    "name": "treat_missing_data",
    "type": "string",
    "description": "Specifies how missing data points are treated when evaluating the alarm's condition."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html"><code>AWS::MediaLive::CloudWatchAlarmTemplate</code></a>.

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
    <td><CopyableCode code="ComparisonOperator, EvaluationPeriods, MetricName, Name, Period, Statistic, TargetResourceType, Threshold, TreatMissingData, region" /></td>
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

Gets all properties from an individual <code>cloud_watch_alarm_template</code>.
```sql
SELECT
region,
arn,
comparison_operator,
created_at,
datapoints_to_alarm,
description,
evaluation_periods,
group_id,
group_identifier,
id,
identifier,
metric_name,
modified_at,
name,
period,
statistic,
tags,
target_resource_type,
threshold,
treat_missing_data
FROM awscc.medialive.cloud_watch_alarm_templates
WHERE region = 'us-east-1' AND data__Identifier = '<Identifier>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>cloud_watch_alarm_template</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.medialive.cloud_watch_alarm_templates (
 ComparisonOperator,
 EvaluationPeriods,
 MetricName,
 Name,
 Period,
 Statistic,
 TargetResourceType,
 Threshold,
 TreatMissingData,
 region
)
SELECT 
'{{ ComparisonOperator }}',
 '{{ EvaluationPeriods }}',
 '{{ MetricName }}',
 '{{ Name }}',
 '{{ Period }}',
 '{{ Statistic }}',
 '{{ TargetResourceType }}',
 '{{ Threshold }}',
 '{{ TreatMissingData }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.medialive.cloud_watch_alarm_templates (
 ComparisonOperator,
 DatapointsToAlarm,
 Description,
 EvaluationPeriods,
 GroupIdentifier,
 MetricName,
 Name,
 Period,
 Statistic,
 Tags,
 TargetResourceType,
 Threshold,
 TreatMissingData,
 region
)
SELECT 
 '{{ ComparisonOperator }}',
 '{{ DatapointsToAlarm }}',
 '{{ Description }}',
 '{{ EvaluationPeriods }}',
 '{{ GroupIdentifier }}',
 '{{ MetricName }}',
 '{{ Name }}',
 '{{ Period }}',
 '{{ Statistic }}',
 '{{ Tags }}',
 '{{ TargetResourceType }}',
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
  - name: cloud_watch_alarm_template
    props:
      - name: ComparisonOperator
        value: '{{ ComparisonOperator }}'
      - name: DatapointsToAlarm
        value: null
      - name: Description
        value: '{{ Description }}'
      - name: EvaluationPeriods
        value: null
      - name: GroupIdentifier
        value: '{{ GroupIdentifier }}'
      - name: MetricName
        value: '{{ MetricName }}'
      - name: Name
        value: '{{ Name }}'
      - name: Period
        value: null
      - name: Statistic
        value: '{{ Statistic }}'
      - name: Tags
        value: {}
      - name: TargetResourceType
        value: '{{ TargetResourceType }}'
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
DELETE FROM awscc.medialive.cloud_watch_alarm_templates
WHERE data__Identifier = '<Identifier>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>cloud_watch_alarm_templates</code> resource, the following permissions are required:

### Create
```json
medialive:CreateCloudWatchAlarmTemplate,
medialive:GetCloudWatchAlarmTemplate,
medialive:CreateTags
```

### Read
```json
medialive:GetCloudWatchAlarmTemplate
```

### Update
```json
medialive:UpdateCloudWatchAlarmTemplate,
medialive:GetCloudWatchAlarmTemplate,
medialive:CreateTags,
medialive:DeleteTags
```

### Delete
```json
medialive:DeleteCloudWatchAlarmTemplate
```

### List
```json
medialive:ListCloudWatchAlarmTemplates
```
