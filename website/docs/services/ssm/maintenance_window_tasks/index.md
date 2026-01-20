---
title: maintenance_window_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - maintenance_window_tasks
  - ssm
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

Creates, updates, deletes or gets a <code>maintenance_window_task</code> resource or lists <code>maintenance_window_tasks</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>maintenance_window_tasks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SSM::MaintenanceWindowTask</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ssm.maintenance_window_tasks" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "max_errors",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "service_role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "priority",
    "type": "integer",
    "description": ""
  },
  {
    "name": "max_concurrency",
    "type": "string",
    "description": ""
  },
  {
    "name": "targets",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "values",
        "type": "array",
        "description": ""
      },
      {
        "name": "key",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "task_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "task_invocation_parameters",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "maintenance_window_step_functions_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "input",
            "type": "string",
            "description": ""
          },
          {
            "name": "name",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "maintenance_window_run_command_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "timeout_seconds",
            "type": "integer",
            "description": ""
          },
          {
            "name": "comment",
            "type": "string",
            "description": ""
          },
          {
            "name": "output_s3_key_prefix",
            "type": "string",
            "description": ""
          },
          {
            "name": "parameters",
            "type": "object",
            "description": ""
          },
          {
            "name": "cloud_watch_output_config",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "cloud_watch_output_enabled",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "cloud_watch_log_group_name",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "document_hash_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "service_role_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "notification_config",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "notification_events",
                "type": "array",
                "description": ""
              },
              {
                "name": "notification_arn",
                "type": "string",
                "description": ""
              },
              {
                "name": "notification_type",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "document_version",
            "type": "string",
            "description": ""
          },
          {
            "name": "output_s3_bucket_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "document_hash",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "maintenance_window_lambda_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "qualifier",
            "type": "string",
            "description": ""
          },
          {
            "name": "payload",
            "type": "string",
            "description": ""
          },
          {
            "name": "client_context",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "maintenance_window_automation_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "parameters",
            "type": "object",
            "description": ""
          },
          {
            "name": "document_version",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "window_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "task_parameters",
    "type": "object",
    "description": ""
  },
  {
    "name": "task_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "cutoff_behavior",
    "type": "string",
    "description": ""
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "logging_info",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "region",
        "type": "string",
        "description": ""
      },
      {
        "name": "s3_prefix",
        "type": "string",
        "description": ""
      },
      {
        "name": "s3_bucket",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html"><code>AWS::SSM::MaintenanceWindowTask</code></a>.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
</tbody>
</table>






