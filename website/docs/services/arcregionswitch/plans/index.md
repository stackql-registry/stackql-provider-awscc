---
title: plans
hide_title: false
hide_table_of_contents: false
keywords:
  - plans
  - arcregionswitch
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

Creates, updates, deletes or gets a <code>plan</code> resource or lists <code>plans</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>plans</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Represents a plan that specifies Regions, IAM roles, and workflows of logic required to perform the desired change to your multi-Region application</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.arcregionswitch.plans" /></td></tr>
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
    "name": "associated_alarms",
    "type": "object",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "execution_role",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "owner",
    "type": "string",
    "description": ""
  },
  {
    "name": "primary_region",
    "type": "string",
    "description": ""
  },
  {
    "name": "recovery_approach",
    "type": "string",
    "description": ""
  },
  {
    "name": "recovery_time_objective_minutes",
    "type": "number",
    "description": ""
  },
  {
    "name": "regions",
    "type": "array",
    "description": ""
  },
  {
    "name": "tags",
    "type": "object",
    "description": ""
  },
  {
    "name": "triggers",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "description",
        "type": "string",
        "description": ""
      },
      {
        "name": "target_region",
        "type": "string",
        "description": ""
      },
      {
        "name": "action",
        "type": "string",
        "description": ""
      },
      {
        "name": "conditions",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "associated_alarm_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "condition",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "min_delay_minutes_between_executions",
        "type": "number",
        "description": ""
      }
    ]
  },
  {
    "name": "version",
    "type": "string",
    "description": ""
  },
  {
    "name": "workflows",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "steps",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": ""
          },
          {
            "name": "description",
            "type": "string",
            "description": ""
          },
          {
            "name": "execution_block_configuration",
            "type": "object",
            "description": ""
          },
          {
            "name": "execution_block_type",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "workflow_target_action",
        "type": "string",
        "description": ""
      },
      {
        "name": "workflow_target_region",
        "type": "string",
        "description": ""
      },
      {
        "name": "workflow_description",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "health_checks_for_plan",
    "type": "object",
    "description": ""
  },
  {
    "name": "route53_health_checks",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "health_check_ids",
        "type": "array",
        "description": ""
      },
      {
        "name": "record_names",
        "type": "array",
        "description": ""
      },
      {
        "name": "regions",
        "type": "array",
        "description": ""
      },
      {
        "name": "hosted_zone_ids",
        "type": "array",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arcregionswitch-plan.html"><code>AWS::ARCRegionSwitch::Plan</code></a>.

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
    <td><CopyableCode code="ExecutionRole, Name, RecoveryApproach, Regions, Workflows, region" /></td>
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

Gets all properties from an individual <code>plan</code>.
```sql
SELECT
region,
arn,
associated_alarms,
description,
execution_role,
name,
owner,
primary_region,
recovery_approach,
recovery_time_objective_minutes,
regions,
tags,
triggers,
version,
workflows,
health_checks_for_plan,
route53_health_checks
FROM awscc.arcregionswitch.plans
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>plan</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.arcregionswitch.plans (
 ExecutionRole,
 Name,
 RecoveryApproach,
 Regions,
 Workflows,
 region
)
SELECT 
'{{ ExecutionRole }}',
 '{{ Name }}',
 '{{ RecoveryApproach }}',
 '{{ Regions }}',
 '{{ Workflows }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.arcregionswitch.plans (
 AssociatedAlarms,
 Description,
 ExecutionRole,
 Name,
 PrimaryRegion,
 RecoveryApproach,
 RecoveryTimeObjectiveMinutes,
 Regions,
 Tags,
 Triggers,
 Workflows,
 region
)
SELECT 
 '{{ AssociatedAlarms }}',
 '{{ Description }}',
 '{{ ExecutionRole }}',
 '{{ Name }}',
 '{{ PrimaryRegion }}',
 '{{ RecoveryApproach }}',
 '{{ RecoveryTimeObjectiveMinutes }}',
 '{{ Regions }}',
 '{{ Tags }}',
 '{{ Triggers }}',
 '{{ Workflows }}',
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
  - name: plan
    props:
      - name: AssociatedAlarms
        value: {}
      - name: Description
        value: '{{ Description }}'
      - name: ExecutionRole
        value: '{{ ExecutionRole }}'
      - name: Name
        value: '{{ Name }}'
      - name: PrimaryRegion
        value: '{{ PrimaryRegion }}'
      - name: RecoveryApproach
        value: '{{ RecoveryApproach }}'
      - name: RecoveryTimeObjectiveMinutes
        value: null
      - name: Regions
        value:
          - '{{ Regions[0] }}'
      - name: Tags
        value: {}
      - name: Triggers
        value:
          - Description: '{{ Description }}'
            TargetRegion: '{{ TargetRegion }}'
            Action: '{{ Action }}'
            Conditions:
              - AssociatedAlarmName: '{{ AssociatedAlarmName }}'
                Condition: '{{ Condition }}'
            MinDelayMinutesBetweenExecutions: null
      - name: Workflows
        value:
          - Steps:
              - Name: '{{ Name }}'
                Description: '{{ Description }}'
                ExecutionBlockConfiguration: null
                ExecutionBlockType: '{{ ExecutionBlockType }}'
            WorkflowTargetAction: null
            WorkflowTargetRegion: '{{ WorkflowTargetRegion }}'
            WorkflowDescription: '{{ WorkflowDescription }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.arcregionswitch.plans
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>plans</code> resource, the following permissions are required:

### Create
```json
arc-region-switch:CreatePlan,
arc-region-switch:GetPlan,
arc-region-switch:ListRoute53HealthChecks,
arc-region-switch:ListTagsForResource,
arc-region-switch:TagResource,
iam:PassRole
```

### Read
```json
arc-region-switch:GetPlan,
arc-region-switch:ListRoute53HealthChecks,
arc-region-switch:ListTagsForResource
```

### Update
```json
arc-region-switch:GetPlan,
arc-region-switch:ListRoute53HealthChecks,
arc-region-switch:ListTagsForResource,
arc-region-switch:TagResource,
arc-region-switch:UntagResource,
arc-region-switch:UpdatePlan,
iam:PassRole
```

### Delete
```json
arc-region-switch:DeletePlan,
arc-region-switch:GetPlan
```

### List
```json
arc-region-switch:ListPlans
```
