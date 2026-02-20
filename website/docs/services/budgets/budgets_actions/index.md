---
title: budgets_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - budgets_actions
  - budgets
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

Creates, updates, deletes or gets a <code>budgets_action</code> resource or lists <code>budgets_actions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>budgets_actions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An example resource schema demonstrating some basic constructs and validation rules.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.budgets.budgets_actions" /></td></tr>
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
    "name": "action_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "budget_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "notification_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "action_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "action_threshold",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "value",
        "type": "number",
        "description": ""
      },
      {
        "name": "type",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "execution_role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "approval_model",
    "type": "string",
    "description": ""
  },
  {
    "name": "subscribers",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": ""
      },
      {
        "name": "address",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "definition",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "iam_action_definition",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "policy_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "roles",
            "type": "array",
            "description": ""
          },
          {
            "name": "groups",
            "type": "array",
            "description": ""
          },
          {
            "name": "users",
            "type": "array",
            "description": ""
          }
        ]
      },
      {
        "name": "scp_action_definition",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "policy_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "target_ids",
            "type": "array",
            "description": ""
          }
        ]
      },
      {
        "name": "ssm_action_definition",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "subtype",
            "type": "string",
            "description": ""
          },
          {
            "name": "region",
            "type": "string",
            "description": ""
          },
          {
            "name": "instance_ids",
            "type": "array",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "resource_tags",
    "type": "array",
    "description": "",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "action_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "budget_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html"><code>AWS::Budgets::BudgetsAction</code></a>.

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
    <td><code>budgets_actions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="BudgetName, NotificationType, ActionType, ActionThreshold, ExecutionRoleArn, Definition, Subscribers, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>budgets_actions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>budgets_actions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>budgets_actions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>budgets_actions</code></td>
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

Gets all properties from an individual <code>budgets_action</code>.
```sql
SELECT
region,
action_id,
budget_name,
notification_type,
action_type,
action_threshold,
execution_role_arn,
approval_model,
subscribers,
definition,
resource_tags
FROM awscc.budgets.budgets_actions
WHERE region = 'us-east-1' AND data__Identifier = '<ActionId>|<BudgetName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>budgets_actions</code> in a region.
```sql
SELECT
region,
action_id,
budget_name
FROM awscc.budgets.budgets_actions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>budgets_action</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.budgets.budgets_actions (
 BudgetName,
 NotificationType,
 ActionType,
 ActionThreshold,
 ExecutionRoleArn,
 Subscribers,
 Definition,
 region
)
SELECT 
'{{ BudgetName }}',
 '{{ NotificationType }}',
 '{{ ActionType }}',
 '{{ ActionThreshold }}',
 '{{ ExecutionRoleArn }}',
 '{{ Subscribers }}',
 '{{ Definition }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.budgets.budgets_actions (
 BudgetName,
 NotificationType,
 ActionType,
 ActionThreshold,
 ExecutionRoleArn,
 ApprovalModel,
 Subscribers,
 Definition,
 ResourceTags,
 region
)
SELECT 
 '{{ BudgetName }}',
 '{{ NotificationType }}',
 '{{ ActionType }}',
 '{{ ActionThreshold }}',
 '{{ ExecutionRoleArn }}',
 '{{ ApprovalModel }}',
 '{{ Subscribers }}',
 '{{ Definition }}',
 '{{ ResourceTags }}',
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
  - name: budgets_action
    props:
      - name: BudgetName
        value: '{{ BudgetName }}'
      - name: NotificationType
        value: '{{ NotificationType }}'
      - name: ActionType
        value: '{{ ActionType }}'
      - name: ActionThreshold
        value:
          Value: null
          Type: '{{ Type }}'
      - name: ExecutionRoleArn
        value: '{{ ExecutionRoleArn }}'
      - name: ApprovalModel
        value: '{{ ApprovalModel }}'
      - name: Subscribers
        value:
          - Type: '{{ Type }}'
            Address: '{{ Address }}'
      - name: Definition
        value:
          IamActionDefinition:
            PolicyArn: '{{ PolicyArn }}'
            Roles:
              - '{{ Roles[0] }}'
            Groups:
              - '{{ Groups[0] }}'
            Users:
              - '{{ Users[0] }}'
          ScpActionDefinition:
            PolicyId: '{{ PolicyId }}'
            TargetIds:
              - '{{ TargetIds[0] }}'
          SsmActionDefinition:
            Subtype: '{{ Subtype }}'
            Region: '{{ Region }}'
            InstanceIds:
              - '{{ InstanceIds[0] }}'
      - name: ResourceTags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.budgets.budgets_actions
SET data__PatchDocument = string('{{ {
    "NotificationType": notification_type,
    "ActionThreshold": action_threshold,
    "ExecutionRoleArn": execution_role_arn,
    "ApprovalModel": approval_model,
    "Subscribers": subscribers,
    "Definition": definition,
    "ResourceTags": resource_tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<ActionId>|<BudgetName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.budgets.budgets_actions
WHERE data__Identifier = '<ActionId|BudgetName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>budgets_actions</code> resource, the following permissions are required:

### Create
```json
budgets:CreateBudgetAction,
iam:PassRole,
budgets:TagResource
```

### Read
```json
budgets:DescribeBudgetAction,
budgets:ListTagsForResource
```

### Update
```json
budgets:UpdateBudgetAction,
iam:PassRole,
budgets:TagResource,
budgets:UntagResource,
budgets:ListTagsForResource
```

### Delete
```json
budgets:DeleteBudgetAction
```

### List
```json
budgets:DescribeBudgetActionsForAccount,
budgets:DescribeBudgetActionsForBudget
```
