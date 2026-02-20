---
title: experiments
hide_title: false
hide_table_of_contents: false
keywords:
  - experiments
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

Creates, updates, deletes or gets an <code>experiment</code> resource or lists <code>experiments</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>experiments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Evidently::Experiment.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.evidently.experiments" /></td></tr>
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
    "name": "running_status",
    "type": "object",
    "description": "Start Experiment. Default is False",
    "children": [
      {
        "name": "status",
        "type": "string",
        "description": "Provide START or STOP action to apply on an experiment"
      },
      {
        "name": "analysis_complete_time",
        "type": "string",
        "description": "Provide the analysis Completion time for an experiment"
      },
      {
        "name": "reason",
        "type": "string",
        "description": "Reason is a required input for stopping the experiment"
      },
      {
        "name": "desired_state",
        "type": "string",
        "description": "Provide CANCELLED or COMPLETED desired state when stopping an experiment"
      }
    ]
  },
  {
    "name": "randomization_salt",
    "type": "string",
    "description": ""
  },
  {
    "name": "treatments",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "treatment_name",
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
    "name": "metric_goals",
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
      },
      {
        "name": "desired_change",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "sampling_rate",
    "type": "integer",
    "description": ""
  },
  {
    "name": "online_ab_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "control_treatment_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "treatment_weights",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "treatment",
            "type": "string",
            "description": ""
          },
          {
            "name": "split_weight",
            "type": "integer",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "segment",
    "type": "string",
    "description": ""
  },
  {
    "name": "remove_segment",
    "type": "boolean",
    "description": ""
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-experiment.html"><code>AWS::Evidently::Experiment</code></a>.

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
    <td><CopyableCode code="Name, Project, Treatments, MetricGoals, OnlineAbConfig, region" /></td>
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

Gets all properties from an individual <code>experiment</code>.
```sql
SELECT
region,
arn,
name,
project,
description,
running_status,
randomization_salt,
treatments,
metric_goals,
sampling_rate,
online_ab_config,
segment,
remove_segment,
tags
FROM awscc.evidently.experiments
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>experiment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.evidently.experiments (
 Name,
 Project,
 Treatments,
 MetricGoals,
 OnlineAbConfig,
 region
)
SELECT 
'{{ Name }}',
 '{{ Project }}',
 '{{ Treatments }}',
 '{{ MetricGoals }}',
 '{{ OnlineAbConfig }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.evidently.experiments (
 Name,
 Project,
 Description,
 RunningStatus,
 RandomizationSalt,
 Treatments,
 MetricGoals,
 SamplingRate,
 OnlineAbConfig,
 Segment,
 RemoveSegment,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Project }}',
 '{{ Description }}',
 '{{ RunningStatus }}',
 '{{ RandomizationSalt }}',
 '{{ Treatments }}',
 '{{ MetricGoals }}',
 '{{ SamplingRate }}',
 '{{ OnlineAbConfig }}',
 '{{ Segment }}',
 '{{ RemoveSegment }}',
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
  - name: experiment
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Project
        value: '{{ Project }}'
      - name: Description
        value: '{{ Description }}'
      - name: RunningStatus
        value:
          Status: '{{ Status }}'
          AnalysisCompleteTime: '{{ AnalysisCompleteTime }}'
          Reason: '{{ Reason }}'
          DesiredState: '{{ DesiredState }}'
      - name: RandomizationSalt
        value: '{{ RandomizationSalt }}'
      - name: Treatments
        value:
          - TreatmentName: '{{ TreatmentName }}'
            Description: '{{ Description }}'
            Feature: '{{ Feature }}'
            Variation: '{{ Variation }}'
      - name: MetricGoals
        value:
          - MetricName: '{{ MetricName }}'
            EntityIdKey: '{{ EntityIdKey }}'
            ValueKey: '{{ ValueKey }}'
            EventPattern: '{{ EventPattern }}'
            UnitLabel: '{{ UnitLabel }}'
            DesiredChange: '{{ DesiredChange }}'
      - name: SamplingRate
        value: '{{ SamplingRate }}'
      - name: OnlineAbConfig
        value:
          ControlTreatmentName: '{{ ControlTreatmentName }}'
          TreatmentWeights:
            - Treatment: '{{ Treatment }}'
              SplitWeight: '{{ SplitWeight }}'
      - name: Segment
        value: '{{ Segment }}'
      - name: RemoveSegment
        value: '{{ RemoveSegment }}'
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
UPDATE awscc.evidently.experiments
SET data__PatchDocument = string('{{ {
    "Description": description,
    "RunningStatus": running_status,
    "RandomizationSalt": randomization_salt,
    "Treatments": treatments,
    "MetricGoals": metric_goals,
    "SamplingRate": sampling_rate,
    "OnlineAbConfig": online_ab_config,
    "Segment": segment,
    "RemoveSegment": remove_segment,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.evidently.experiments
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>experiments</code> resource, the following permissions are required:

### Create
```json
evidently:CreateExperiment,
evidently:TagResource,
evidently:GetExperiment,
evidently:StartExperiment
```

### Read
```json
evidently:GetExperiment,
evidently:ListTagsForResource
```

### Update
```json
evidently:UpdateExperiment,
evidently:TagResource,
evidently:UntagResource,
evidently:GetExperiment,
evidently:StartExperiment,
evidently:StopExperiment
```

### Delete
```json
evidently:DeleteExperiment,
evidently:UntagResource,
evidently:GetExperiment
```
