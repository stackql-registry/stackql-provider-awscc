---
title: restore_testing_plans
hide_title: false
hide_table_of_contents: false
keywords:
  - restore_testing_plans
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

Creates, updates, deletes or gets a <code>restore_testing_plan</code> resource or lists <code>restore_testing_plans</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>restore_testing_plans</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Backup::RestoreTestingPlan Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.backup.restore_testing_plans" /></td></tr>
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
    "name": "schedule_expression",
    "type": "string",
    "description": ""
  },
  {
    "name": "start_window_hours",
    "type": "integer",
    "description": ""
  },
  {
    "name": "recovery_point_selection",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "selection_window_days",
        "type": "integer",
        "description": ""
      },
      {
        "name": "recovery_point_types",
        "type": "array",
        "description": ""
      },
      {
        "name": "include_vaults",
        "type": "array",
        "description": ""
      },
      {
        "name": "exclude_vaults",
        "type": "array",
        "description": ""
      },
      {
        "name": "algorithm",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "restore_testing_plan_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "restore_testing_plan_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "schedule_expression_timezone",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
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
    "name": "restore_testing_plan_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingplan.html"><code>AWS::Backup::RestoreTestingPlan</code></a>.

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
    <td><code>restore_testing_plans</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="RecoveryPointSelection, ScheduleExpression, RestoreTestingPlanName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>restore_testing_plans</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>restore_testing_plans</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>restore_testing_plans_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>restore_testing_plans</code></td>
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

Gets all properties from an individual <code>restore_testing_plan</code>.
```sql
SELECT
region,
schedule_expression,
start_window_hours,
recovery_point_selection,
restore_testing_plan_arn,
restore_testing_plan_name,
schedule_expression_timezone,
tags
FROM awscc.backup.restore_testing_plans
WHERE region = 'us-east-1' AND Identifier = '<RestoreTestingPlanName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>restore_testing_plans</code> in a region.
```sql
SELECT
region,
restore_testing_plan_name
FROM awscc.backup.restore_testing_plans_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>restore_testing_plan</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.backup.restore_testing_plans (
 ScheduleExpression,
 RecoveryPointSelection,
 RestoreTestingPlanName,
 region
)
SELECT 
'{{ ScheduleExpression }}',
 '{{ RecoveryPointSelection }}',
 '{{ RestoreTestingPlanName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.backup.restore_testing_plans (
 ScheduleExpression,
 StartWindowHours,
 RecoveryPointSelection,
 RestoreTestingPlanName,
 ScheduleExpressionTimezone,
 Tags,
 region
)
SELECT 
 '{{ ScheduleExpression }}',
 '{{ StartWindowHours }}',
 '{{ RecoveryPointSelection }}',
 '{{ RestoreTestingPlanName }}',
 '{{ ScheduleExpressionTimezone }}',
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
  - name: restore_testing_plan
    props:
      - name: ScheduleExpression
        value: '{{ ScheduleExpression }}'
      - name: StartWindowHours
        value: '{{ StartWindowHours }}'
      - name: RecoveryPointSelection
        value:
          SelectionWindowDays: '{{ SelectionWindowDays }}'
          RecoveryPointTypes:
            - '{{ RecoveryPointTypes[0] }}'
          IncludeVaults:
            - '{{ IncludeVaults[0] }}'
          ExcludeVaults:
            - '{{ ExcludeVaults[0] }}'
          Algorithm: '{{ Algorithm }}'
      - name: RestoreTestingPlanName
        value: '{{ RestoreTestingPlanName }}'
      - name: ScheduleExpressionTimezone
        value: '{{ ScheduleExpressionTimezone }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.backup.restore_testing_plans
SET PatchDocument = string('{{ {
    "ScheduleExpression": schedule_expression,
    "StartWindowHours": start_window_hours,
    "RecoveryPointSelection": recovery_point_selection,
    "ScheduleExpressionTimezone": schedule_expression_timezone,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<RestoreTestingPlanName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.backup.restore_testing_plans
WHERE Identifier = '<RestoreTestingPlanName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>restore_testing_plans</code> resource, the following permissions are required:

### Read
```json
backup:GetRestoreTestingPlan,
backup:ListTags
```

### Create
```json
backup:CreateRestoreTestingPlan,
backup:TagResource,
backup:GetRestoreTestingPlan,
backup:ListTags
```

### Update
```json
backup:UpdateRestoreTestingPlan,
backup:TagResource,
backup:UntagResource,
backup:GetRestoreTestingPlan,
backup:ListTags
```

### List
```json
backup:ListRestoreTestingPlans
```

### Delete
```json
backup:DeleteRestoreTestingPlan,
backup:GetRestoreTestingPlan
```
