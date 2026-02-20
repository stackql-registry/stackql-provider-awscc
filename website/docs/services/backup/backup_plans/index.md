---
title: backup_plans
hide_title: false
hide_table_of_contents: false
keywords:
  - backup_plans
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

Creates, updates, deletes or gets a <code>backup_plan</code> resource or lists <code>backup_plans</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>backup_plans</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Backup::BackupPlan</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.backup.backup_plans" /></td></tr>
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
    "name": "backup_plan_tags",
    "type": "object",
    "description": ""
  },
  {
    "name": "backup_plan_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "backup_plan_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "version_id",
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
<TabItem value="list">

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
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html"><code>AWS::Backup::BackupPlan</code></a>.

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
    <td><code>backup_plans</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="BackupPlan, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>backup_plans</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>backup_plans</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>backup_plans_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>backup_plans</code></td>
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

Gets all properties from an individual <code>backup_plan</code>.
```sql
SELECT
region,
backup_plan,
backup_plan_tags,
backup_plan_arn,
backup_plan_id,
version_id
FROM awscc.backup.backup_plans
WHERE region = 'us-east-1' AND Identifier = '<BackupPlanId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>backup_plans</code> in a region.
```sql
SELECT
region,
backup_plan_id
FROM awscc.backup.backup_plans_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>backup_plan</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.backup.backup_plans (
 BackupPlan,
 region
)
SELECT 
'{{ BackupPlan }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.backup.backup_plans (
 BackupPlan,
 BackupPlanTags,
 region
)
SELECT 
 '{{ BackupPlan }}',
 '{{ BackupPlanTags }}',
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
  - name: backup_plan
    props:
      - name: BackupPlan
        value:
          BackupPlanName: '{{ BackupPlanName }}'
          AdvancedBackupSettings:
            - BackupOptions: {}
              ResourceType: '{{ ResourceType }}'
          BackupPlanRule:
            - RuleName: '{{ RuleName }}'
              TargetBackupVault: '{{ TargetBackupVault }}'
              StartWindowMinutes: null
              CompletionWindowMinutes: null
              ScheduleExpression: '{{ ScheduleExpression }}'
              ScheduleExpressionTimezone: '{{ ScheduleExpressionTimezone }}'
              IndexActions:
                - ResourceTypes:
                    - '{{ ResourceTypes[0] }}'
              RecoveryPointTags: {}
              CopyActions:
                - Lifecycle:
                    MoveToColdStorageAfterDays: null
                    DeleteAfterDays: null
                    OptInToArchiveForSupportedResources: '{{ OptInToArchiveForSupportedResources }}'
                  DestinationBackupVaultArn: '{{ DestinationBackupVaultArn }}'
              Lifecycle: null
              EnableContinuousBackup: '{{ EnableContinuousBackup }}'
      - name: BackupPlanTags
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>backup_plan</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.backup.backup_plans
SET PatchDocument = string('{{ {
    "BackupPlan": backup_plan,
    "BackupPlanTags": backup_plan_tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<BackupPlanId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.backup.backup_plans
WHERE Identifier = '<BackupPlanId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>backup_plans</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="read">

```json
backup:GetBackupPlan,
backup:ListTags
```

</TabItem>
<TabItem value="create">

```json
backup:GetBackupPlan,
backup:TagResource,
backup:CreateBackupPlan
```

</TabItem>
<TabItem value="delete">

```json
backup:GetBackupPlan,
backup:DeleteBackupPlan
```

</TabItem>
<TabItem value="update">

```json
backup:UpdateBackupPlan,
backup:ListTags,
backup:TagResource,
backup:UntagResource
```

</TabItem>
<TabItem value="list">

```json
backup:ListBackupPlans
```

</TabItem>
</Tabs>