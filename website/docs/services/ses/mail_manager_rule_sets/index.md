---
title: mail_manager_rule_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - mail_manager_rule_sets
  - ses
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

Creates, updates, deletes or gets a <code>mail_manager_rule_set</code> resource or lists <code>mail_manager_rule_sets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>mail_manager_rule_sets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::SES::MailManagerRuleSet Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ses.mail_manager_rule_sets" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "rule_set_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "rule_set_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "rule_set_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "rules",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": ""
      },
      {
        "name": "conditions",
        "type": "array",
        "description": ""
      },
      {
        "name": "unless",
        "type": "array",
        "description": ""
      },
      {
        "name": "actions",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html"><code>AWS::SES::MailManagerRuleSet</code></a>.

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
    <td><CopyableCode code="Rules, region" /></td>
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

Gets all properties from an individual <code>mail_manager_rule_set</code>.
```sql
SELECT
region,
rule_set_arn,
rule_set_id,
rule_set_name,
rules,
tags
FROM awscc.ses.mail_manager_rule_sets
WHERE region = 'us-east-1' AND data__Identifier = '<RuleSetId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>mail_manager_rule_set</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ses.mail_manager_rule_sets (
 Rules,
 region
)
SELECT 
'{{ Rules }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ses.mail_manager_rule_sets (
 RuleSetName,
 Rules,
 Tags,
 region
)
SELECT 
 '{{ RuleSetName }}',
 '{{ Rules }}',
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
  - name: mail_manager_rule_set
    props:
      - name: RuleSetName
        value: '{{ RuleSetName }}'
      - name: Rules
        value:
          - Name: '{{ Name }}'
            Conditions:
              - null
            Unless:
              - null
            Actions:
              - null
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ses.mail_manager_rule_sets
WHERE data__Identifier = '<RuleSetId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>mail_manager_rule_sets</code> resource, the following permissions are required:

### Create
```json
ses:TagResource,
ses:ListTagsForResource,
ses:GetRuleSet,
ses:CreateRuleSet
```

### Read
```json
ses:ListTagsForResource,
ses:GetRuleSet
```

### Update
```json
ses:TagResource,
ses:UntagResource,
ses:ListTagsForResource,
ses:GetRuleSet,
ses:UpdateRuleSet
```

### Delete
```json
ses:GetRuleSet,
ses:DeleteRuleSet
```

### List
```json
ses:ListRuleSets
```
