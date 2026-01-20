---
title: backup_plans_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - backup_plans_list_only
  - backup
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

Lists <code>backup_plans</code> in a region or regions, for all properties use <a href="/services/backup/backup_plans/"><code>backup_plans</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>backup_plans_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Backup::BackupPlan</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.backup.backup_plans_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "backup_plan",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "backup_plan_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "advanced_backup_settings",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "backup_options",
            "type": "object",
            "description": ""
          },
          {
            "name": "resource_type",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "backup_plan_rule",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "rule_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "target_backup_vault",
            "type": "string",
            "description": ""
          },
          {
            "name": "start_window_minutes",
            "type": "number",
            "description": ""
          },
          {
            "name": "completion_window_minutes",
            "type": "number",
            "description": ""
          },
          {
            "name": "schedule_expression",
            "type": "string",
            "description": ""
          },
          {
            "name": "schedule_expression_timezone",
            "type": "string",
            "description": ""
          },
          {
            "name": "index_actions",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "resource_types",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "recovery_point_tags",
            "type": "object",
            "description": ""
          },
          {
            "name": "copy_actions",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "lifecycle",
                "type": "object",
                "description": ""
              },
              {
                "name": "destination_backup_vault_arn",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "lifecycle",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "move_to_cold_storage_after_days",
                "type": "number",
                "description": ""
              },
              {
                "name": "delete_after_days",
                "type": "number",
                "description": ""
              },
              {
                "name": "opt_in_to_archive_for_supported_resources",
                "type": "boolean",
                "description": ""
              }
            ]
          },
          {
            "name": "enable_continuous_backup",
            "type": "boolean",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "backup_plan_id",
    "type": "string",
    "description": ""
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
Lists all <code>backup_plans</code> in a region.
```sql
SELECT
region,
backup_plan_id
FROM awscc.backup.backup_plans_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>backup_plans_list_only</code> resource, see <a href="/services/backup/backup_plans/#permissions"><code>backup_plans</code></a>

