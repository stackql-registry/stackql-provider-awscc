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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arcregionswitch-plan.html"><code>AWS::ARCRegionSwitch::Plan</code></a>.

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
    <td><code>plans</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ExecutionRole, Name, RecoveryApproach, Regions, Workflows, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>plans</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>plans</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>plans_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>plans</code></td>
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
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>plans</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.arcregionswitch.plans_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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
'{{ execution_role }}',
 '{{ name }}',
 '{{ recovery_approach }}',
 '{{ regions }}',
 '{{ workflows }}',
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
 '{{ associated_alarms }}',
 '{{ description }}',
 '{{ execution_role }}',
 '{{ name }}',
 '{{ primary_region }}',
 '{{ recovery_approach }}',
 '{{ recovery_time_objective_minutes }}',
 '{{ regions }}',
 '{{ tags }}',
 '{{ triggers }}',
 '{{ workflows }}',
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
      - name: associated_alarms
        value: {}
      - name: description
        value: '{{ description }}'
      - name: execution_role
        value: '{{ execution_role }}'
      - name: name
        value: '{{ name }}'
      - name: primary_region
        value: '{{ primary_region }}'
      - name: recovery_approach
        value: '{{ recovery_approach }}'
      - name: recovery_time_objective_minutes
        value: null
      - name: regions
        value:
          - '{{ regions[0] }}'
      - name: tags
        value: {}
      - name: triggers
        value:
          - description: '{{ description }}'
            target_region: '{{ target_region }}'
            action: '{{ action }}'
            conditions:
              - associated_alarm_name: '{{ associated_alarm_name }}'
                condition: '{{ condition }}'
            min_delay_minutes_between_executions: null
      - name: workflows
        value:
          - steps:
              - name: '{{ name }}'
                description: '{{ description }}'
                execution_block_configuration: null
                execution_block_type: '{{ execution_block_type }}'
            workflow_target_action: null
            workflow_target_region: '{{ workflow_target_region }}'
            workflow_description: '{{ workflow_description }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>plan</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.arcregionswitch.plans
SET PatchDocument = string('{{ {
    "AssociatedAlarms": associated_alarms,
    "Description": description,
    "ExecutionRole": execution_role,
    "RecoveryTimeObjectiveMinutes": recovery_time_objective_minutes,
    "Tags": tags,
    "Triggers": triggers,
    "Workflows": workflows
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.arcregionswitch.plans
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>plans</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
arc-region-switch:CreatePlan,
arc-region-switch:GetPlan,
arc-region-switch:ListRoute53HealthChecks,
arc-region-switch:ListTagsForResource,
arc-region-switch:TagResource,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
arc-region-switch:GetPlan,
arc-region-switch:ListRoute53HealthChecks,
arc-region-switch:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
arc-region-switch:GetPlan,
arc-region-switch:ListRoute53HealthChecks,
arc-region-switch:ListTagsForResource,
arc-region-switch:TagResource,
arc-region-switch:UntagResource,
arc-region-switch:UpdatePlan,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
arc-region-switch:DeletePlan,
arc-region-switch:GetPlan
```

</TabItem>
<TabItem value="list">

```json
arc-region-switch:ListPlans
```

</TabItem>
</Tabs>