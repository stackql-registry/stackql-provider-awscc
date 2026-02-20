---
title: detectors
hide_title: false
hide_table_of_contents: false
keywords:
  - detectors
  - frauddetector
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

Creates, updates, deletes or gets a <code>detector</code> resource or lists <code>detectors</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>detectors</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A resource schema for a Detector in Amazon Fraud Detector.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.frauddetector.detectors" /></td></tr>
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
    "name": "detector_id",
    "type": "string",
    "description": "The ID of the detector"
  },
  {
    "name": "detector_version_status",
    "type": "string",
    "description": "The desired detector version status for the detector"
  },
  {
    "name": "detector_version_id",
    "type": "string",
    "description": "The active version ID of the detector"
  },
  {
    "name": "rule_execution_mode",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags associated with this detector.",
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
    "name": "description",
    "type": "string",
    "description": "The description of the detector."
  },
  {
    "name": "rules",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "rule_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "rule_version",
        "type": "string",
        "description": ""
      },
      {
        "name": "detector_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "expression",
        "type": "string",
        "description": ""
      },
      {
        "name": "language",
        "type": "string",
        "description": ""
      },
      {
        "name": "outcomes",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": "The name of the outcome."
          },
          {
            "name": "tags",
            "type": "array",
            "description": "Tags associated with this outcome."
          },
          {
            "name": "description",
            "type": "string",
            "description": "The outcome description."
          },
          {
            "name": "arn",
            "type": "string",
            "description": "The outcome ARN."
          },
          {
            "name": "created_time",
            "type": "string",
            "description": "The timestamp when the outcome was created."
          },
          {
            "name": "last_updated_time",
            "type": "string",
            "description": "The timestamp when the outcome was last updated."
          }
        ]
      },
      {
        "name": "arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "description",
        "type": "string",
        "description": "The description."
      },
      {
        "name": "tags",
        "type": "array",
        "description": "Tags associated with this event type."
      },
      {
        "name": "created_time",
        "type": "string",
        "description": "The time when the event type was created."
      },
      {
        "name": "last_updated_time",
        "type": "string",
        "description": "The time when the event type was last updated."
      }
    ]
  },
  {
    "name": "event_type",
    "type": "object",
    "description": "The event type to associate this detector with.",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": "The name for the event type"
      },
      {
        "name": "tags",
        "type": "array",
        "description": "Tags associated with this event type."
      },
      {
        "name": "description",
        "type": "string",
        "description": "The description of the event type."
      },
      {
        "name": "event_variables",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "inline",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "name",
            "type": "string",
            "description": ""
          },
          {
            "name": "data_source",
            "type": "string",
            "description": ""
          },
          {
            "name": "data_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "default_value",
            "type": "string",
            "description": ""
          },
          {
            "name": "variable_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "description",
            "type": "string",
            "description": "The description."
          },
          {
            "name": "tags",
            "type": "array",
            "description": "Tags associated with this event type."
          },
          {
            "name": "created_time",
            "type": "string",
            "description": "The time when the event type was created."
          },
          {
            "name": "last_updated_time",
            "type": "string",
            "description": "The time when the event type was last updated."
          }
        ]
      },
      {
        "name": "labels",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": "The name of the label."
          },
          {
            "name": "tags",
            "type": "array",
            "description": "Tags associated with this label."
          },
          {
            "name": "description",
            "type": "string",
            "description": "The label description."
          },
          {
            "name": "arn",
            "type": "string",
            "description": "The label ARN."
          },
          {
            "name": "created_time",
            "type": "string",
            "description": "The timestamp when the label was created."
          },
          {
            "name": "last_updated_time",
            "type": "string",
            "description": "The timestamp when the label was last updated."
          }
        ]
      },
      {
        "name": "entity_types",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "inline",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "name",
            "type": "string",
            "description": ""
          },
          {
            "name": "description",
            "type": "string",
            "description": "The description."
          },
          {
            "name": "tags",
            "type": "array",
            "description": "Tags associated with this event type."
          },
          {
            "name": "created_time",
            "type": "string",
            "description": "The time when the event type was created."
          },
          {
            "name": "last_updated_time",
            "type": "string",
            "description": "The time when the event type was last updated."
          }
        ]
      },
      {
        "name": "arn",
        "type": "string",
        "description": "The ARN of the event type."
      },
      {
        "name": "created_time",
        "type": "string",
        "description": "The time when the event type was created."
      },
      {
        "name": "last_updated_time",
        "type": "string",
        "description": "The time when the event type was last updated."
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The ARN of the detector."
  },
  {
    "name": "created_time",
    "type": "string",
    "description": "The time when the detector was created."
  },
  {
    "name": "last_updated_time",
    "type": "string",
    "description": "The time when the detector was last updated."
  },
  {
    "name": "associated_models",
    "type": "array",
    "description": "The models to associate with this detector.",
    "children": [
      {
        "name": "arn",
        "type": "string",
        "description": ""
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
    "description": "The ARN of the detector."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html"><code>AWS::FraudDetector::Detector</code></a>.

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
    <td><code>detectors</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DetectorId, EventType, Rules, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>detectors</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>detectors</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>detectors_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>detectors</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>detector</code>.
```sql
SELECT
region,
detector_id,
detector_version_status,
detector_version_id,
rule_execution_mode,
tags,
description,
rules,
event_type,
arn,
created_time,
last_updated_time,
associated_models
FROM awscc.frauddetector.detectors
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>detectors</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.frauddetector.detectors_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>detector</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.frauddetector.detectors (
 DetectorId,
 Rules,
 EventType,
 region
)
SELECT 
'{{ DetectorId }}',
 '{{ Rules }}',
 '{{ EventType }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.frauddetector.detectors (
 DetectorId,
 DetectorVersionStatus,
 RuleExecutionMode,
 Tags,
 Description,
 Rules,
 EventType,
 AssociatedModels,
 region
)
SELECT 
 '{{ DetectorId }}',
 '{{ DetectorVersionStatus }}',
 '{{ RuleExecutionMode }}',
 '{{ Tags }}',
 '{{ Description }}',
 '{{ Rules }}',
 '{{ EventType }}',
 '{{ AssociatedModels }}',
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
  - name: detector
    props:
      - name: DetectorId
        value: '{{ DetectorId }}'
      - name: DetectorVersionStatus
        value: '{{ DetectorVersionStatus }}'
      - name: RuleExecutionMode
        value: '{{ RuleExecutionMode }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: Description
        value: '{{ Description }}'
      - name: Rules
        value:
          - RuleId: '{{ RuleId }}'
            RuleVersion: '{{ RuleVersion }}'
            DetectorId: '{{ DetectorId }}'
            Expression: '{{ Expression }}'
            Language: '{{ Language }}'
            Outcomes:
              - Name: '{{ Name }}'
                Tags:
                  - null
                Description: '{{ Description }}'
            Arn: '{{ Arn }}'
            Description: '{{ Description }}'
            Tags:
              - null
            CreatedTime: '{{ CreatedTime }}'
            LastUpdatedTime: '{{ LastUpdatedTime }}'
      - name: EventType
        value:
          Name: '{{ Name }}'
          Tags:
            - null
          Description: '{{ Description }}'
          EventVariables:
            - Arn: '{{ Arn }}'
              Inline: '{{ Inline }}'
              Name: '{{ Name }}'
              DataSource: '{{ DataSource }}'
              DataType: '{{ DataType }}'
              DefaultValue: '{{ DefaultValue }}'
              VariableType: '{{ VariableType }}'
              Description: '{{ Description }}'
              Tags:
                - null
              CreatedTime: '{{ CreatedTime }}'
              LastUpdatedTime: '{{ LastUpdatedTime }}'
          Labels:
            - Name: '{{ Name }}'
              Tags:
                - null
              Description: '{{ Description }}'
          EntityTypes:
            - Arn: '{{ Arn }}'
              Inline: '{{ Inline }}'
              Name: '{{ Name }}'
              Description: '{{ Description }}'
              Tags:
                - null
              CreatedTime: '{{ CreatedTime }}'
              LastUpdatedTime: '{{ LastUpdatedTime }}'
      - name: AssociatedModels
        value:
          - Arn: '{{ Arn }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.frauddetector.detectors
SET data__PatchDocument = string('{{ {
    "DetectorVersionStatus": detector_version_status,
    "RuleExecutionMode": rule_execution_mode,
    "Tags": tags,
    "Description": description
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.frauddetector.detectors
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>detectors</code> resource, the following permissions are required:

### Create
```json
frauddetector:PutDetector,
frauddetector:CreateDetectorVersion,
frauddetector:UpdateDetectorVersionStatus,
frauddetector:CreateRule,
frauddetector:CreateVariable,
frauddetector:PutLabel,
frauddetector:PutOutcome,
frauddetector:PutEntityType,
frauddetector:PutEventType,
frauddetector:DescribeDetector,
frauddetector:GetDetectors,
frauddetector:GetDetectorVersion,
frauddetector:GetRules,
frauddetector:GetVariables,
frauddetector:GetEventTypes,
frauddetector:GetExternalModels,
frauddetector:GetModelVersion,
frauddetector:GetLabels,
frauddetector:GetOutcomes,
frauddetector:GetEntityTypes,
frauddetector:ListTagsForResource
```

### Update
```json
frauddetector:GetDetectors,
frauddetector:GetDetectorVersion,
frauddetector:PutDetector,
frauddetector:UpdateDetectorVersion,
frauddetector:UpdateDetectorVersionStatus,
frauddetector:UpdateDetectorVersionMetadata,
frauddetector:UpdateRuleVersion,
frauddetector:UpdateRuleMetadata,
frauddetector:CreateRule,
frauddetector:CreateVariable,
frauddetector:UpdateVariable,
frauddetector:GetVariables,
frauddetector:PutLabel,
frauddetector:PutOutcome,
frauddetector:PutEntityType,
frauddetector:PutEventType,
frauddetector:GetRules,
frauddetector:GetEventTypes,
frauddetector:GetLabels,
frauddetector:GetOutcomes,
frauddetector:GetEntityTypes,
frauddetector:GetExternalModels,
frauddetector:GetModelVersion,
frauddetector:DeleteEventType,
frauddetector:DeleteVariable,
frauddetector:DeleteLabel,
frauddetector:DeleteEntityType,
frauddetector:ListTagsForResource,
frauddetector:TagResource,
frauddetector:UntagResource
```

### Delete
```json
frauddetector:GetDetectors,
frauddetector:GetDetectorVersion,
frauddetector:DescribeDetector,
frauddetector:GetRules,
frauddetector:GetVariables,
frauddetector:GetEventTypes,
frauddetector:GetLabels,
frauddetector:GetOutcomes,
frauddetector:GetEntityTypes,
frauddetector:DeleteDetector,
frauddetector:DeleteDetectorVersion,
frauddetector:DeleteRule,
frauddetector:DeleteEventType,
frauddetector:DeleteVariable,
frauddetector:DeleteLabel,
frauddetector:DeleteOutcome,
frauddetector:DeleteEntityType,
frauddetector:ListTagsForResource
```

### Read
```json
frauddetector:GetDetectors,
frauddetector:GetDetectorVersion,
frauddetector:DescribeDetector,
frauddetector:GetRules,
frauddetector:GetVariables,
frauddetector:GetEventTypes,
frauddetector:GetExternalModels,
frauddetector:GetModelVersion,
frauddetector:GetLabels,
frauddetector:GetOutcomes,
frauddetector:GetEntityTypes,
frauddetector:ListTagsForResource
```

### List
```json
frauddetector:GetDetectors,
frauddetector:GetDetectorVersion,
frauddetector:DescribeDetector,
frauddetector:GetRules,
frauddetector:GetVariables,
frauddetector:GetEventTypes,
frauddetector:GetExternalModels,
frauddetector:GetModelVersion,
frauddetector:GetLabels,
frauddetector:GetOutcomes,
frauddetector:GetEntityTypes,
frauddetector:ListTagsForResource
```
