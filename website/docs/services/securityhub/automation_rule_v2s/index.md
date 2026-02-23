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
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

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
    "name": "rule_name",
    "type": "string",
    "description": "The name of the automation rule"
  },
  {
    "name": "rule_status",
    "type": "string",
    "description": "The status of the automation rule"
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description of the automation rule"
  },
  {
    "name": "rule_order",
    "type": "number",
    "description": "The value for the rule priority"
  },
  {
    "name": "criteria",
    "type": "object",
    "description": "Defines the parameters and conditions used to evaluate and filter security findings",
    "children": [
      {
        "name": "ocsf_finding_criteria",
        "type": "object",
        "description": "The filtering conditions that align with OCSF standards",
        "children": [
          {
            "name": "composite_filters",
            "type": "array",
            "description": "Enables the creation of complex filtering conditions by combining filter",
            "children": [
              {
                "name": "string_filters",
                "type": "array",
                "description": "Enables filtering based on string field values"
              },
              {
                "name": "date_filters",
                "type": "array",
                "description": "Enables filtering based on date and timestamp fields"
              },
              {
                "name": "boolean_filters",
                "type": "array",
                "description": "Enables filtering based on boolean field values"
              },
              {
                "name": "number_filters",
                "type": "array",
                "description": "Enables filtering based on numerical field values"
              },
              {
                "name": "map_filters",
                "type": "array",
                "description": "Enables filtering based on map field value"
              },
              {
                "name": "operator",
                "type": "string",
                "description": "The logical operator used to combine multiple conditions"
              }
            ]
          },
          {
            "name": "composite_operator",
            "type": "string",
            "description": "The logical operator used to combine multiple conditions"
          }
        ]
      }
    ]
  },
  {
    "name": "actions",
    "type": "array",
    "description": "A list of actions to be performed when the rule criteria is met",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": "The category of action to be executed by the automation rule"
      },
      {
        "name": "finding_fields_update",
        "type": "object",
        "description": "The changes to be applied to fields in a security finding when an automation rule is triggered",
        "children": [
          {
            "name": "severity_id",
            "type": "integer",
            "description": "The severity level to be assigned to findings that match the automation rule criteria"
          },
          {
            "name": "comment",
            "type": "string",
            "description": "Notes or contextual information for findings that are modified by the automation rule"
          },
          {
            "name": "status_id",
            "type": "integer",
            "description": "The status to be applied to findings that match automation rule criteria"
          }
        ]
      },
      {
        "name": "external_integration_configuration",
        "type": "object",
        "description": "The settings for integrating automation rule actions with external systems or service",
        "children": [
          {
            "name": "connector_arn",
            "type": "string",
            "description": "The ARN of the connector that establishes the integration"
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A key-value pair to associate with the Security Hub V2 resource. You can specify a key that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
  },
  {
    "name": "rule_arn",
    "type": "string",
    "description": "The ARN of the automation rule"
  },
  {
    "name": "rule_id",
    "type": "string",
    "description": "The ID of the automation rule"
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The date and time, in UTC and ISO 8601 format."
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
    "name": "rule_arn",
    "type": "string",
    "description": "The ARN of the automation rule"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrulev2.html"><code>AWS::SecurityHub::AutomationRuleV2</code></a>.

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
    <td><code>automation_rule_v2s</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="RuleName, Description, RuleOrder, Criteria, Actions, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>automation_rule_v2s</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>automation_rule_v2s</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>automation_rule_v2s_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>automation_rule_v2s</code></td>
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
WHERE region = 'us-east-1' AND Identifier = '{{ rule_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>automation_rule_v2s</code> in a region.
```sql
SELECT
region,
rule_arn
FROM awscc.securityhub.automation_rule_v2s_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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
'{{ rule_name }}',
 '{{ description }}',
 '{{ rule_order }}',
 '{{ criteria }}',
 '{{ actions }}',
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
 '{{ rule_name }}',
 '{{ rule_status }}',
 '{{ description }}',
 '{{ rule_order }}',
 '{{ criteria }}',
 '{{ actions }}',
 '{{ tags }}',
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
      - name: rule_name
        value: '{{ rule_name }}'
      - name: rule_status
        value: '{{ rule_status }}'
      - name: description
        value: '{{ description }}'
      - name: rule_order
        value: null
      - name: criteria
        value:
          ocsf_finding_criteria:
            composite_filters:
              - string_filters:
                  - field_name: '{{ field_name }}'
                    filter:
                      comparison: '{{ comparison }}'
                      value: '{{ value }}'
                date_filters:
                  - field_name: '{{ field_name }}'
                    filter:
                      date_range:
                        unit: '{{ unit }}'
                        value: null
                      end: '{{ end }}'
                      start: null
                boolean_filters:
                  - field_name: '{{ field_name }}'
                    filter:
                      value: '{{ value }}'
                number_filters:
                  - field_name: '{{ field_name }}'
                    filter:
                      eq: null
                      gte: null
                      lte: null
                map_filters:
                  - field_name: '{{ field_name }}'
                    filter:
                      comparison: '{{ comparison }}'
                      key: null
                      value: null
                operator: '{{ operator }}'
            composite_operator: null
      - name: actions
        value:
          - type: '{{ type }}'
            finding_fields_update:
              severity_id: '{{ severity_id }}'
              comment: '{{ comment }}'
              status_id: '{{ status_id }}'
            external_integration_configuration:
              connector_arn: '{{ connector_arn }}'
      - name: tags
        value: {}
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>automation_rule_v2</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.securityhub.automation_rule_v2s
SET PatchDocument = string('{{ {
    "RuleName": rule_name,
    "RuleStatus": rule_status,
    "Description": description,
    "RuleOrder": rule_order,
    "Criteria": criteria,
    "Actions": actions,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ rule_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.securityhub.automation_rule_v2s
WHERE Identifier = '{{ rule_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>automation_rule_v2s</code> resource, the following permissions are required:

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
securityhub:CreateAutomationRuleV2,
securityhub:GetAutomationRuleV2,
securityhub:TagResource,
securityhub:ListTagsForResource
```

</TabItem>
<TabItem value="read">

```json
securityhub:GetAutomationRuleV2,
securityhub:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
securityhub:UpdateAutomationRuleV2,
securityhub:GetAutomationRuleV2,
securityhub:TagResource,
securityhub:UntagResource,
securityhub:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
securityhub:GetAutomationRuleV2,
securityhub:DeleteAutomationRuleV2
```

</TabItem>
<TabItem value="list">

```json
securityhub:ListAutomationRulesV2,
securityhub:ListTagsForResource
```

</TabItem>
</Tabs>