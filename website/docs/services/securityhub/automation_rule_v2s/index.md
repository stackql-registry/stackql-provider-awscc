---
title: automation_rule_v2s
hide_title: false
hide_table_of_contents: false
keywords:
  - automation_rule_v2s
  - securityhub
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

Creates, updates, deletes or gets an <code>automation_rule_v2</code> resource or lists <code>automation_rule_v2s</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>automation_rule_v2s</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::SecurityHub::AutomationRuleV2</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.securityhub.automation_rule_v2s" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="rule_name" /></td><td><code>string</code></td><td>The name of the automation rule</td></tr>
<tr><td><CopyableCode code="rule_status" /></td><td><code>string</code></td><td>The status of the automation rule</td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>A description of the automation rule</td></tr>
<tr><td><CopyableCode code="rule_order" /></td><td><code>number</code></td><td>The value for the rule priority</td></tr>
<tr><td><CopyableCode code="criteria" /></td><td><code>object</code></td><td>Defines the parameters and conditions used to evaluate and filter security findings</td></tr>
<tr><td><CopyableCode code="actions" /></td><td><code>array</code></td><td>A list of actions to be performed when the rule criteria is met</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>object</code></td><td>A key-value pair to associate with the Security Hub V2 resource. You can specify a key that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.</td></tr>
<tr><td><CopyableCode code="rule_arn" /></td><td><code>string</code></td><td>The ARN of the automation rule</td></tr>
<tr><td><CopyableCode code="rule_id" /></td><td><code>string</code></td><td>The ID of the automation rule</td></tr>
<tr><td><CopyableCode code="created_at" /></td><td><code>string</code></td><td>The date and time, in UTC and ISO 8601 format.</td></tr>
<tr><td><CopyableCode code="updated_at" /></td><td><code>string</code></td><td>The date and time, in UTC and ISO 8601 format.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrulev2.html"><code>AWS::SecurityHub::AutomationRuleV2</code></a>.

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
    <td><CopyableCode code="RuleName, Description, RuleOrder, Criteria, Actions, region" /></td>
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
Gets all <code>automation_rule_v2s</code> in a region.
```sql
SELECT
region,
rule_name,
rule_status,
description,
rule_order,
criteria,
actions,
tags,
rule_arn,
rule_id,
created_at,
updated_at
FROM awscc.securityhub.automation_rule_v2s
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>automation_rule_v2</code>.
```sql
SELECT
region,
rule_name,
rule_status,
description,
rule_order,
criteria,
actions,
tags,
rule_arn,
rule_id,
created_at,
updated_at
FROM awscc.securityhub.automation_rule_v2s
WHERE region = 'us-east-1' AND data__Identifier = '<RuleArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>automation_rule_v2</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.securityhub.automation_rule_v2s (
 RuleName,
 Description,
 RuleOrder,
 Criteria,
 Actions,
 region
)
SELECT 
'{{ RuleName }}',
 '{{ Description }}',
 '{{ RuleOrder }}',
 '{{ Criteria }}',
 '{{ Actions }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.securityhub.automation_rule_v2s (
 RuleName,
 RuleStatus,
 Description,
 RuleOrder,
 Criteria,
 Actions,
 Tags,
 region
)
SELECT 
 '{{ RuleName }}',
 '{{ RuleStatus }}',
 '{{ Description }}',
 '{{ RuleOrder }}',
 '{{ Criteria }}',
 '{{ Actions }}',
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
  - name: automation_rule_v2
    props:
      - name: RuleName
        value: '{{ RuleName }}'
      - name: RuleStatus
        value: '{{ RuleStatus }}'
      - name: Description
        value: '{{ Description }}'
      - name: RuleOrder
        value: null
      - name: Criteria
        value:
          OcsfFindingCriteria:
            CompositeFilters:
              - StringFilters:
                  - FieldName: '{{ FieldName }}'
                    Filter:
                      Comparison: '{{ Comparison }}'
                      Value: '{{ Value }}'
                DateFilters:
                  - FieldName: '{{ FieldName }}'
                    Filter:
                      DateRange:
                        Unit: '{{ Unit }}'
                        Value: null
                      End: '{{ End }}'
                      Start: null
                BooleanFilters:
                  - FieldName: '{{ FieldName }}'
                    Filter:
                      Value: '{{ Value }}'
                NumberFilters:
                  - FieldName: '{{ FieldName }}'
                    Filter:
                      Eq: null
                      Gte: null
                      Lte: null
                MapFilters:
                  - FieldName: '{{ FieldName }}'
                    Filter:
                      Comparison: '{{ Comparison }}'
                      Key: null
                      Value: null
                Operator: '{{ Operator }}'
            CompositeOperator: null
      - name: Actions
        value:
          - Type: '{{ Type }}'
            FindingFieldsUpdate:
              SeverityId: '{{ SeverityId }}'
              Comment: '{{ Comment }}'
              StatusId: '{{ StatusId }}'
            ExternalIntegrationConfiguration:
              ConnectorArn: '{{ ConnectorArn }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.securityhub.automation_rule_v2s
WHERE data__Identifier = '<RuleArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>automation_rule_v2s</code> resource, the following permissions are required:

### Create
```json
securityhub:CreateAutomationRuleV2,
securityhub:GetAutomationRuleV2,
securityhub:TagResource,
securityhub:ListTagsForResource
```

### Read
```json
securityhub:GetAutomationRuleV2,
securityhub:ListTagsForResource
```

### Update
```json
securityhub:UpdateAutomationRuleV2,
securityhub:GetAutomationRuleV2,
securityhub:TagResource,
securityhub:UntagResource,
securityhub:ListTagsForResource
```

### Delete
```json
securityhub:GetAutomationRuleV2,
securityhub:DeleteAutomationRuleV2
```

### List
```json
securityhub:ListAutomationRulesV2,
securityhub:ListTagsForResource
```
