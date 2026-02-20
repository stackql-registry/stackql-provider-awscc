---
title: refresh_schedules
hide_title: false
hide_table_of_contents: false
keywords:
  - refresh_schedules
  - quicksight
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

Creates, updates, deletes or gets a <code>refresh_schedule</code> resource or lists <code>refresh_schedules</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>refresh_schedules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of the AWS::QuickSight::RefreshSchedule Resource Type.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.quicksight.refresh_schedules" /></td></tr>
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
    "description": "<p>The Amazon Resource Name (ARN) of the data source.</p>"
  },
  {
    "name": "aws_account_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "data_set_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "schedule",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "schedule_id",
        "type": "string",
        "description": "<p>An unique identifier for the refresh schedule.</p>"
      },
      {
        "name": "schedule_frequency",
        "type": "object",
        "description": "<p>Information about the schedule frequency.</p>",
        "children": [
          {
            "name": "interval",
            "type": "string",
            "description": ""
          },
          {
            "name": "refresh_on_day",
            "type": "object",
            "description": "<p>The day scheduled for refresh.</p>",
            "children": [
              {
                "name": "day_of_week",
                "type": "string",
                "description": ""
              },
              {
                "name": "day_of_month",
                "type": "string",
                "description": "<p>The Day Of Month for scheduled refresh.</p>"
              }
            ]
          },
          {
            "name": "time_zone",
            "type": "string",
            "description": "<p>The timezone for scheduled refresh.</p>"
          },
          {
            "name": "time_of_the_day",
            "type": "string",
            "description": "<p>The time of the day for scheduled refresh.</p>"
          }
        ]
      },
      {
        "name": "start_after_date_time",
        "type": "string",
        "description": "<p>The date time after which refresh is to be scheduled</p>"
      },
      {
        "name": "refresh_type",
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
    "name": "aws_account_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "data_set_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "schedule",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "schedule_id",
        "type": "string",
        "description": "<p>An unique identifier for the refresh schedule.</p>"
      },
      {
        "name": "schedule_frequency",
        "type": "object",
        "description": "<p>Information about the schedule frequency.</p>",
        "children": [
          {
            "name": "interval",
            "type": "string",
            "description": ""
          },
          {
            "name": "refresh_on_day",
            "type": "object",
            "description": "<p>The day scheduled for refresh.</p>",
            "children": [
              {
                "name": "day_of_week",
                "type": "string",
                "description": ""
              },
              {
                "name": "day_of_month",
                "type": "string",
                "description": "<p>The Day Of Month for scheduled refresh.</p>"
              }
            ]
          },
          {
            "name": "time_zone",
            "type": "string",
            "description": "<p>The timezone for scheduled refresh.</p>"
          },
          {
            "name": "time_of_the_day",
            "type": "string",
            "description": "<p>The time of the day for scheduled refresh.</p>"
          }
        ]
      },
      {
        "name": "start_after_date_time",
        "type": "string",
        "description": "<p>The date time after which refresh is to be scheduled</p>"
      },
      {
        "name": "refresh_type",
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
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-refreshschedule.html"><code>AWS::QuickSight::RefreshSchedule</code></a>.

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
    <td><code>refresh_schedules</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code=", region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>refresh_schedules</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>refresh_schedules</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>refresh_schedules_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>refresh_schedules</code></td>
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

Gets all properties from an individual <code>refresh_schedule</code>.
```sql
SELECT
region,
arn,
aws_account_id,
data_set_id,
schedule
FROM awscc.quicksight.refresh_schedules
WHERE region = 'us-east-1' AND Identifier = '<AwsAccountId>|<DataSetId>|<Schedule/ScheduleId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>refresh_schedules</code> in a region.
```sql
SELECT
region,
aws_account_id,
data_set_id,
schedule/schedule_id
FROM awscc.quicksight.refresh_schedules_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>refresh_schedule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.quicksight.refresh_schedules (
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
INSERT INTO awscc.quicksight.refresh_schedules (
 AwsAccountId,
 DataSetId,
 Schedule,
 region
)
SELECT 
 '{{ AwsAccountId }}',
 '{{ DataSetId }}',
 '{{ Schedule }}',
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
  - name: refresh_schedule
    props:
      - name: AwsAccountId
        value: '{{ AwsAccountId }}'
      - name: DataSetId
        value: '{{ DataSetId }}'
      - name: Schedule
        value:
          ScheduleId: '{{ ScheduleId }}'
          ScheduleFrequency:
            Interval: '{{ Interval }}'
            RefreshOnDay:
              DayOfWeek: '{{ DayOfWeek }}'
              DayOfMonth: '{{ DayOfMonth }}'
            TimeZone: '{{ TimeZone }}'
            TimeOfTheDay: '{{ TimeOfTheDay }}'
          StartAfterDateTime: '{{ StartAfterDateTime }}'
          RefreshType: '{{ RefreshType }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.quicksight.refresh_schedules
WHERE Identifier = '<AwsAccountId|DataSetId|Schedule/ScheduleId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>refresh_schedules</code> resource, the following permissions are required:

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
quicksight:CreateRefreshSchedule,
quicksight:DescribeRefreshSchedule
```

</TabItem>
<TabItem value="update">

```json
quicksight:UpdateRefreshSchedule,
quicksight:DescribeRefreshSchedule
```

</TabItem>
<TabItem value="delete">

```json
quicksight:DeleteRefreshSchedule,
quicksight:DescribeRefreshSchedule
```

</TabItem>
<TabItem value="list">

```json
quicksight:ListRefreshSchedules
```

</TabItem>
<TabItem value="read">

```json
quicksight:DescribeRefreshSchedule
```

</TabItem>
</Tabs>