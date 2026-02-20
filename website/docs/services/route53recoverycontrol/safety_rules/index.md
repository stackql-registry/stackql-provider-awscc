---
title: safety_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - safety_rules
  - route53recoverycontrol
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

Creates, updates, deletes or gets a <code>safety_rule</code> resource or lists <code>safety_rules</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>safety_rules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS Route53 Recovery Control basic constructs and validation rules.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.route53recoverycontrol.safety_rules" /></td></tr>
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
    "name": "assertion_rule",
    "type": "object",
    "description": "An assertion rule enforces that, when a routing control state is changed, that the criteria set by the rule configuration is met. Otherwise, the change to the routing control is not accepted.",
    "children": [
      {
        "name": "wait_period_ms",
        "type": "integer",
        "description": "An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent \"flapping\" of state. The wait period is 5000 ms by default, but you can choose a custom value."
      },
      {
        "name": "asserted_controls",
        "type": "array",
        "description": "The routing controls that are part of transactions that are evaluated to determine if a request to change a routing control state is allowed. For example, you might include three routing controls, one for each of three AWS Regions."
      }
    ]
  },
  {
    "name": "gating_rule",
    "type": "object",
    "description": "A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify. If the gating rule evaluates to true, Amazon Route 53 Application Recovery Controller allows a set of routing control state changes to run and complete against the set of target controls.",
    "children": [
      {
        "name": "gating_controls",
        "type": "array",
        "description": "The gating controls for the gating rule. That is, routing controls that are evaluated by the rule configuration that you specify."
      },
      {
        "name": "target_controls",
        "type": "array",
        "description": "Routing controls that can only be set or unset if the specified RuleConfig evaluates to true for the specified GatingControls. For example, say you have three gating controls, one for each of three AWS Regions. Now you specify AtLeast 2 as your RuleConfig. With these settings, you can only change (set or unset) the routing controls that you have specified as TargetControls if that rule evaluates to true. <br />In other words, your ability to change the routing controls that you have specified as TargetControls is gated by the rule that you set for the routing controls in GatingControls."
      },
      {
        "name": "wait_period_ms",
        "type": "integer",
        "description": "An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent \"flapping\" of state. The wait period is 5000 ms by default, but you can choose a custom value."
      }
    ]
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name for the safety rule."
  },
  {
    "name": "safety_rule_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the safety rule."
  },
  {
    "name": "control_panel_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the control panel."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The deployment status of the routing control. Status can be one of the following: PENDING, DEPLOYED, PENDING&#95;DELETION."
  },
  {
    "name": "rule_config",
    "type": "object",
    "description": "The rule configuration for an assertion rule or gating rule. This is the criteria that you set for specific assertion controls (routing controls) or gating controls. This configuration specifies how many controls must be enabled after a transaction completes.",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": "A rule can be one of the following: ATLEAST, AND, or OR."
      },
      {
        "name": "threshold",
        "type": "integer",
        "description": "The value of N, when you specify an ATLEAST rule type. That is, Threshold is the number of controls that must be set when you specify an ATLEAST type."
      },
      {
        "name": "inverted",
        "type": "boolean",
        "description": "Logical negation of the rule. If the rule would usually evaluate true, it's evaluated as false, and vice versa."
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A collection of tags associated with a resource",
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
    "name": "safety_rule_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the safety rule."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html"><code>AWS::Route53RecoveryControl::SafetyRule</code></a>.

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
    <td><code>safety_rules</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code=", region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>safety_rules</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>safety_rules</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>safety_rules_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>safety_rules</code></td>
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

Gets all properties from an individual <code>safety_rule</code>.
```sql
SELECT
region,
assertion_rule,
gating_rule,
name,
safety_rule_arn,
control_panel_arn,
status,
rule_config,
tags
FROM awscc.route53recoverycontrol.safety_rules
WHERE region = 'us-east-1' AND Identifier = '<SafetyRuleArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>safety_rules</code> in a region.
```sql
SELECT
region,
safety_rule_arn
FROM awscc.route53recoverycontrol.safety_rules_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>safety_rule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.route53recoverycontrol.safety_rules (
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
INSERT INTO awscc.route53recoverycontrol.safety_rules (
 AssertionRule,
 GatingRule,
 Name,
 ControlPanelArn,
 RuleConfig,
 Tags,
 region
)
SELECT 
 '{{ AssertionRule }}',
 '{{ GatingRule }}',
 '{{ Name }}',
 '{{ ControlPanelArn }}',
 '{{ RuleConfig }}',
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
  - name: safety_rule
    props:
      - name: AssertionRule
        value:
          WaitPeriodMs: '{{ WaitPeriodMs }}'
          AssertedControls:
            - '{{ AssertedControls[0] }}'
      - name: GatingRule
        value:
          GatingControls:
            - '{{ GatingControls[0] }}'
          TargetControls:
            - '{{ TargetControls[0] }}'
          WaitPeriodMs: '{{ WaitPeriodMs }}'
      - name: Name
        value: '{{ Name }}'
      - name: ControlPanelArn
        value: '{{ ControlPanelArn }}'
      - name: RuleConfig
        value:
          Type: '{{ Type }}'
          Threshold: '{{ Threshold }}'
          Inverted: '{{ Inverted }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.route53recoverycontrol.safety_rules
SET PatchDocument = string('{{ {
    "AssertionRule": assertion_rule,
    "GatingRule": gating_rule,
    "Name": name,
    "ControlPanelArn": control_panel_arn,
    "RuleConfig": rule_config,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<SafetyRuleArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.route53recoverycontrol.safety_rules
WHERE Identifier = '<SafetyRuleArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>safety_rules</code> resource, the following permissions are required:

### Create
```json
route53-recovery-control-config:CreateSafetyRule,
route53-recovery-control-config:DescribeSafetyRule,
route53-recovery-control-config:DescribeControlPanel,
route53-recovery-control-config:DescribeRoutingControl,
route53-recovery-control-config:ListTagsForResource,
route53-recovery-control-config:TagResource
```

### Read
```json
route53-recovery-control-config:DescribeSafetyRule,
route53-recovery-control-config:ListTagsForResource
```

### Update
```json
route53-recovery-control-config:UpdateSafetyRule,
route53-recovery-control-config:DescribeSafetyRule,
route53-recovery-control-config:ListTagsForResource,
route53-recovery-control-config:TagResource,
route53-recovery-control-config:UntagResource
```

### Delete
```json
route53-recovery-control-config:DescribeSafetyRule,
route53-recovery-control-config:DeleteSafetyRule
```

### List
```json
route53-recovery-control-config:ListSafetyRules
```
