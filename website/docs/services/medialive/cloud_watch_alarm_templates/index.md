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
    "description": "A cloudwatch alarm template group's id. AWS provided template groups have ids that start with <code>aws-</code>"
  },
  {
    "name": "group_identifier",
    "type": "string",
    "description": "A cloudwatch alarm template group's identifier. Can be either be its id or current name."
  },
  {
    "name": "id",
    "type": "string",
    "description": "A cloudwatch alarm template's id. AWS provided templates have ids that start with <code>aws-</code>"
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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "id",
    "type": "string",
    "description": "A cloudwatch alarm template's id. AWS provided templates have ids that start with <code>aws-</code>"
  },
  {
    "name": "identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html"><code>AWS::MediaLive::CloudWatchAlarmTemplate</code></a>.

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
    <td><code>cloud_watch_alarm_templates</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ComparisonOperator, EvaluationPeriods, MetricName, Name, Period, Statistic, TargetResourceType, Threshold, TreatMissingData, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>cloud_watch_alarm_templates</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>cloud_watch_alarm_templates</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>cloud_watch_alarm_templates_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>cloud_watch_alarm_templates</code></td>
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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ identifier }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>cloud_watch_alarm_templates</code> in a region.
```sql
SELECT
  region,
  identifier
FROM awscc.medialive.cloud_watch_alarm_templates_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

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
  '{{ comparison_operator }}',
  '{{ evaluation_periods }}',
  '{{ metric_name }}',
  '{{ name }}',
  '{{ period }}',
  '{{ statistic }}',
  '{{ target_resource_type }}',
  '{{ threshold }}',
  '{{ treat_missing_data }}',
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
  '{{ comparison_operator }}',
  '{{ datapoints_to_alarm }}',
  '{{ description }}',
  '{{ evaluation_periods }}',
  '{{ group_identifier }}',
  '{{ metric_name }}',
  '{{ name }}',
  '{{ period }}',
  '{{ statistic }}',
  '{{ tags }}',
  '{{ target_resource_type }}',
  '{{ threshold }}',
  '{{ treat_missing_data }}',
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
      - name: comparison_operator
        value: '{{ comparison_operator }}'
      - name: datapoints_to_alarm
        value: null
      - name: description
        value: '{{ description }}'
      - name: evaluation_periods
        value: null
      - name: group_identifier
        value: '{{ group_identifier }}'
      - name: metric_name
        value: '{{ metric_name }}'
      - name: name
        value: '{{ name }}'
      - name: period
        value: null
      - name: statistic
        value: '{{ statistic }}'
      - name: tags
        value: {}
      - name: target_resource_type
        value: '{{ target_resource_type }}'
      - name: threshold
        value: null
      - name: treat_missing_data
        value: '{{ treat_missing_data }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>cloud_watch_alarm_template</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.medialive.cloud_watch_alarm_templates
SET PatchDocument = string('{{ {
    "ComparisonOperator": comparison_operator,
    "DatapointsToAlarm": datapoints_to_alarm,
    "Description": description,
    "EvaluationPeriods": evaluation_periods,
    "GroupIdentifier": group_identifier,
    "MetricName": metric_name,
    "Name": name,
    "Period": period,
    "Statistic": statistic,
    "TargetResourceType": target_resource_type,
    "Threshold": threshold,
    "TreatMissingData": treat_missing_data
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ identifier }}'
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
DELETE FROM awscc.medialive.cloud_watch_alarm_templates
WHERE
  Identifier = '{{ identifier }}' AND
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

To operate on the <code>cloud_watch_alarm_templates</code> resource, the following permissions are required:

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
medialive:CreateCloudWatchAlarmTemplate,
medialive:GetCloudWatchAlarmTemplate,
medialive:CreateTags
```

</TabItem>
<TabItem value="read">

```json
medialive:GetCloudWatchAlarmTemplate
```

</TabItem>
<TabItem value="update">

```json
medialive:UpdateCloudWatchAlarmTemplate,
medialive:GetCloudWatchAlarmTemplate,
medialive:CreateTags,
medialive:DeleteTags
```

</TabItem>
<TabItem value="delete">

```json
medialive:DeleteCloudWatchAlarmTemplate
```

</TabItem>
<TabItem value="list">

```json
medialive:ListCloudWatchAlarmTemplates
```

</TabItem>
</Tabs>