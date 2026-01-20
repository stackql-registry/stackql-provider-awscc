---
title: refresh_schedules_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - refresh_schedules_list_only
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

Lists <code>refresh_schedules</code> in a region or regions, for all properties use <a href="/services/quicksight/refresh_schedules/"><code>refresh_schedules</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>refresh_schedules_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of the AWS::QuickSight::RefreshSchedule Resource Type.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.quicksight.refresh_schedules_list_only" /></td></tr>
</tbody>
</table>

## Fields
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

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples
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


## Permissions

For permissions required to operate on the <code>refresh_schedules_list_only</code> resource, see <a href="/services/quicksight/refresh_schedules/#permissions"><code>refresh_schedules</code></a>

