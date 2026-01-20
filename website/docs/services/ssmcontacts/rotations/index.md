---
title: rotations
hide_title: false
hide_table_of_contents: false
keywords:
  - rotations
  - ssmcontacts
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

Creates, updates, deletes or gets a <code>rotation</code> resource or lists <code>rotations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>rotations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SSMContacts::Rotation.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ssmcontacts.rotations" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "name",
    "type": "string",
    "description": "Name of the Rotation"
  },
  {
    "name": "contact_ids",
    "type": "array",
    "description": "Members of the rotation"
  },
  {
    "name": "start_time",
    "type": "string",
    "description": "Start time of the first shift of Oncall Schedule"
  },
  {
    "name": "time_zone_id",
    "type": "string",
    "description": "TimeZone Identifier for the Oncall Schedule"
  },
  {
    "name": "recurrence",
    "type": "object",
    "description": "Information about when an on-call rotation is in effect and how long the rotation period lasts.",
    "children": [
      {
        "name": "monthly_settings",
        "type": "array",
        "description": "Information about on-call rotations that recur monthly.",
        "children": [
          {
            "name": "day_of_month",
            "type": "integer",
            "description": "The day of the month when monthly recurring on-call rotations begin."
          },
          {
            "name": "hand_off_time",
            "type": "string",
            "description": "Details about when an on-call rotation shift begins or ends. Time of the day in format HH:MM"
          }
        ]
      },
      {
        "name": "weekly_settings",
        "type": "array",
        "description": "Information about on-call rotations that recur weekly.",
        "children": [
          {
            "name": "day_of_week",
            "type": "string",
            "description": "The day of the week when weekly recurring on-call shift rotations begin."
          },
          {
            "name": "hand_off_time",
            "type": "string",
            "description": "Details about when an on-call rotation shift begins or ends. Time of the day in format HH:MM"
          }
        ]
      },
      {
        "name": "daily_settings",
        "type": "array",
        "description": "Information about on-call rotations that recur daily."
      },
      {
        "name": "number_of_on_calls",
        "type": "integer",
        "description": "Number of Oncalls per shift."
      },
      {
        "name": "recurrence_multiplier",
        "type": "integer",
        "description": "The number of days, weeks, or months a single rotation lasts."
      },
      {
        "name": "shift_coverages",
        "type": "array",
        "description": "Information about the days of the week included in on-call rotation coverage.",
        "children": [
          {
            "name": "day_of_week",
            "type": "string",
            "description": "The day of the week when weekly recurring on-call shift rotations begin."
          },
          {
            "name": "coverage_times",
            "type": "array",
            "description": "Information about when an on-call shift begins and ends."
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag"
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag."
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the rotation."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html"><code>AWS::SSMContacts::Rotation</code></a>.

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
    <td><CopyableCode code="Name, ContactIds, StartTime, TimeZoneId, Recurrence, region" /></td>
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

Gets all properties from an individual <code>rotation</code>.
```sql
SELECT
region,
name,
contact_ids,
start_time,
time_zone_id,
recurrence,
tags,
arn
FROM awscc.ssmcontacts.rotations
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>rotation</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ssmcontacts.rotations (
 Name,
 ContactIds,
 StartTime,
 TimeZoneId,
 Recurrence,
 region
)
SELECT 
'{{ Name }}',
 '{{ ContactIds }}',
 '{{ StartTime }}',
 '{{ TimeZoneId }}',
 '{{ Recurrence }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ssmcontacts.rotations (
 Name,
 ContactIds,
 StartTime,
 TimeZoneId,
 Recurrence,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ ContactIds }}',
 '{{ StartTime }}',
 '{{ TimeZoneId }}',
 '{{ Recurrence }}',
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
  - name: rotation
    props:
      - name: Name
        value: '{{ Name }}'
      - name: ContactIds
        value:
          - '{{ ContactIds[0] }}'
      - name: StartTime
        value: '{{ StartTime }}'
      - name: TimeZoneId
        value: '{{ TimeZoneId }}'
      - name: Recurrence
        value:
          MonthlySettings:
            - DayOfMonth: '{{ DayOfMonth }}'
              HandOffTime: '{{ HandOffTime }}'
          WeeklySettings:
            - DayOfWeek: '{{ DayOfWeek }}'
              HandOffTime: null
          DailySettings:
            - null
          NumberOfOnCalls: '{{ NumberOfOnCalls }}'
          RecurrenceMultiplier: '{{ RecurrenceMultiplier }}'
          ShiftCoverages:
            - DayOfWeek: null
              CoverageTimes:
                - StartTime: null
                  EndTime: null
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ssmcontacts.rotations
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>rotations</code> resource, the following permissions are required:

### Create
```json
ssm-contacts:CreateRotation,
ssm-contacts:GetRotation,
ssm-contacts:TagResource,
ssm-contacts:ListTagsForResource
```

### Read
```json
ssm-contacts:GetRotation,
ssm-contacts:ListTagsForResource
```

### Update
```json
ssm-contacts:UpdateRotation,
ssm-contacts:GetRotation,
ssm-contacts:TagResource,
ssm-contacts:ListTagsForResource,
ssm-contacts:UntagResource
```

### Delete
```json
ssm-contacts:DeleteRotation,
ssm-contacts:GetRotation,
ssm-contacts:ListTagsForResource,
ssm-contacts:UntagResource
```

### List
```json
ssm-contacts:ListRotations,
ssm-contacts:GetRotation,
ssm-contacts:ListTagsForResource
```
