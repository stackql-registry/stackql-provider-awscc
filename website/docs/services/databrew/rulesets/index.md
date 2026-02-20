---
title: rulesets
hide_title: false
hide_table_of_contents: false
keywords:
  - rulesets
  - databrew
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

Creates, updates, deletes or gets a <code>ruleset</code> resource or lists <code>rulesets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>rulesets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::DataBrew::Ruleset.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.databrew.rulesets" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": "Name of the Ruleset"
  },
  {
    "name": "description",
    "type": "string",
    "description": "Description of the Ruleset"
  },
  {
    "name": "target_arn",
    "type": "string",
    "description": "Arn of the target resource (dataset) to apply the ruleset to"
  },
  {
    "name": "rules",
    "type": "array",
    "description": "List of the data quality rules in the ruleset",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": "Name of the rule"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": "Boolean value to disable/enable a rule"
      },
      {
        "name": "check_expression",
        "type": "string",
        "description": "Expression with rule conditions"
      },
      {
        "name": "substitution_map",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "value_reference",
            "type": "string",
            "description": "Variable name"
          },
          {
            "name": "value",
            "type": "string",
            "description": "Value or column name"
          }
        ]
      },
      {
        "name": "threshold",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "value",
            "type": "number",
            "description": "Threshold value for a rule"
          },
          {
            "name": "type",
            "type": "string",
            "description": "Threshold type for a rule"
          },
          {
            "name": "unit",
            "type": "string",
            "description": "Threshold unit for a rule"
          }
        ]
      },
      {
        "name": "column_selectors",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "regex",
            "type": "string",
            "description": "A regular expression for selecting a column from a dataset"
          },
          {
            "name": "name",
            "type": "string",
            "description": "The name of a column from a dataset"
          }
        ]
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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "name",
    "type": "string",
    "description": "Name of the Ruleset"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-ruleset.html"><code>AWS::DataBrew::Ruleset</code></a>.

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
    <td><code>rulesets</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, TargetArn, Rules, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>rulesets</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>rulesets</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>rulesets_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>rulesets</code></td>
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

Gets all properties from an individual <code>ruleset</code>.
```sql
SELECT
region,
name,
description,
target_arn,
rules,
tags
FROM awscc.databrew.rulesets
WHERE region = 'us-east-1' AND Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>rulesets</code> in a region.
```sql
SELECT
region,
name
FROM awscc.databrew.rulesets_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>ruleset</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.databrew.rulesets (
 Name,
 TargetArn,
 Rules,
 region
)
SELECT 
'{{ Name }}',
 '{{ TargetArn }}',
 '{{ Rules }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.databrew.rulesets (
 Name,
 Description,
 TargetArn,
 Rules,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Description }}',
 '{{ TargetArn }}',
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
  - name: ruleset
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: TargetArn
        value: '{{ TargetArn }}'
      - name: Rules
        value:
          - Name: '{{ Name }}'
            Disabled: '{{ Disabled }}'
            CheckExpression: '{{ CheckExpression }}'
            SubstitutionMap:
              - ValueReference: '{{ ValueReference }}'
                Value: '{{ Value }}'
            Threshold:
              Value: null
              Type: '{{ Type }}'
              Unit: '{{ Unit }}'
            ColumnSelectors:
              - Regex: '{{ Regex }}'
                Name: '{{ Name }}'
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
UPDATE awscc.databrew.rulesets
SET PatchDocument = string('{{ {
    "Description": description,
    "Rules": rules,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.databrew.rulesets
WHERE Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>rulesets</code> resource, the following permissions are required:

### Create
```json
databrew:CreateRuleset,
databrew:DescribeRuleset,
databrew:TagResource,
databrew:UntagResource,
iam:PassRole
```

### Read
```json
databrew:DescribeRuleset,
iam:ListRoles
```

### Update
```json
databrew:UpdateRuleset,
databrew:TagResource,
databrew:UntagResource
```

### Delete
```json
databrew:DeleteRuleset
```

### List
```json
databrew:ListRulesets,
databrew:ListTagsForResource,
iam:ListRoles
```
