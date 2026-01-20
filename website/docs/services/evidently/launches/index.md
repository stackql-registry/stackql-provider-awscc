---
title: launches
hide_title: false
hide_table_of_contents: false
keywords:
  - launches
  - evidently
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

Creates, updates, deletes or gets a <code>launch</code> resource or lists <code>launches</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>launches</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Evidently::Launch.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.evidently.launches" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "project",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "randomization_salt",
    "type": "string",
    "description": ""
  },
  {
    "name": "scheduled_splits_config",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "start_time",
        "type": "string",
        "description": ""
      },
      {
        "name": "group_weights",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "group_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "split_weight",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "segment_overrides",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "segment",
            "type": "string",
            "description": ""
          },
          {
            "name": "evaluation_order",
            "type": "integer",
            "description": ""
          },
          {
            "name": "weights",
            "type": "array",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "groups",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "group_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "description",
        "type": "string",
        "description": ""
      },
      {
        "name": "feature",
        "type": "string",
        "description": ""
      },
      {
        "name": "variation",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "metric_monitors",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "metric_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "entity_id_key",
        "type": "string",
        "description": "The JSON path to reference the entity id in the event."
      },
      {
        "name": "value_key",
        "type": "string",
        "description": "The JSON path to reference the numerical metric value in the event."
      },
      {
        "name": "event_pattern",
        "type": "string",
        "description": "Event patterns have the same structure as the events they match. Rules use event patterns to select events. An event pattern either matches an event or it doesn't."
      },
      {
        "name": "unit_label",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "execution_status",
    "type": "object",
    "description": "Start or Stop Launch Launch. Default is not started.",
    "children": [
      {
        "name": "status",
        "type": "string",
        "description": "Provide START or STOP action to apply on a launch"
      },
      {
        "name": "desired_state",
        "type": "string",
        "description": "Provide CANCELLED or COMPLETED as the launch desired state. Defaults to Completed if not provided."
      },
      {
        "name": "reason",
        "type": "string",
        "description": "Provide a reason for stopping the launch. Defaults to empty if not provided."
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-launch.html"><code>AWS::Evidently::Launch</code></a>.

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
    <td><CopyableCode code="Name, Project, Groups, ScheduledSplitsConfig, region" /></td>
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
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>launch</code>.
```sql
SELECT
region,
arn,
name,
project,
description,
randomization_salt,
scheduled_splits_config,
groups,
metric_monitors,
tags,
execution_status
FROM awscc.evidently.launches
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>launch</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.evidently.launches (
 Name,
 Project,
 ScheduledSplitsConfig,
 Groups,
 region
)
SELECT 
'{{ Name }}',
 '{{ Project }}',
 '{{ ScheduledSplitsConfig }}',
 '{{ Groups }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.evidently.launches (
 Name,
 Project,
 Description,
 RandomizationSalt,
 ScheduledSplitsConfig,
 Groups,
 MetricMonitors,
 Tags,
 ExecutionStatus,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Project }}',
 '{{ Description }}',
 '{{ RandomizationSalt }}',
 '{{ ScheduledSplitsConfig }}',
 '{{ Groups }}',
 '{{ MetricMonitors }}',
 '{{ Tags }}',
 '{{ ExecutionStatus }}',
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
  - name: launch
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Project
        value: '{{ Project }}'
      - name: Description
        value: '{{ Description }}'
      - name: RandomizationSalt
        value: '{{ RandomizationSalt }}'
      - name: ScheduledSplitsConfig
        value:
          - StartTime: '{{ StartTime }}'
            GroupWeights:
              - GroupName: '{{ GroupName }}'
                SplitWeight: '{{ SplitWeight }}'
            SegmentOverrides:
              - Segment: '{{ Segment }}'
                EvaluationOrder: '{{ EvaluationOrder }}'
                Weights:
                  - null
      - name: Groups
        value:
          - GroupName: '{{ GroupName }}'
            Description: '{{ Description }}'
            Feature: '{{ Feature }}'
            Variation: '{{ Variation }}'
      - name: MetricMonitors
        value:
          - MetricName: '{{ MetricName }}'
            EntityIdKey: '{{ EntityIdKey }}'
            ValueKey: '{{ ValueKey }}'
            EventPattern: '{{ EventPattern }}'
            UnitLabel: '{{ UnitLabel }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: ExecutionStatus
        value:
          Status: '{{ Status }}'
          DesiredState: '{{ DesiredState }}'
          Reason: '{{ Reason }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.evidently.launches
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>launches</code> resource, the following permissions are required:

### Create
```json
evidently:CreateLaunch,
evidently:TagResource,
evidently:GetLaunch,
evidently:StartLaunch
```

### Read
```json
evidently:GetLaunch,
evidently:ListTagsForResource
```

### Update
```json
evidently:UpdateLaunch,
evidently:ListTagsForResource,
evidently:TagResource,
evidently:UntagResource,
evidently:GetLaunch,
evidently:StartLaunch,
evidently:StopLaunch
```

### Delete
```json
evidently:DeleteLaunch,
evidently:UntagResource,
evidently:GetLaunch
```
