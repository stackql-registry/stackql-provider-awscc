---
title: cost_categories
hide_title: false
hide_table_of_contents: false
keywords:
  - cost_categories
  - ce
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

Creates, updates, deletes or gets a <code>cost_category</code> resource or lists <code>cost_categories</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>cost_categories</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::CE::CostCategory. Cost Category enables you to map your cost and usage into meaningful categories. You can use Cost Category to organize your costs using a rule-based engine.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ce.cost_categories" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": "Cost category ARN"
  },
  {
    "name": "effective_start",
    "type": "string",
    "description": "ISO 8601 date time with offset format"
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "rule_version",
    "type": "string",
    "description": ""
  },
  {
    "name": "rules",
    "type": "string",
    "description": "JSON array format of Expression in Billing and Cost Management API"
  },
  {
    "name": "split_charge_rules",
    "type": "string",
    "description": "Json array format of CostCategorySplitChargeRule in Billing and Cost Management API"
  },
  {
    "name": "default_value",
    "type": "string",
    "description": "The default value for the cost category"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags to assign to the cost category.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name for the tag."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag."
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-costcategory.html"><code>AWS::CE::CostCategory</code></a>.

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
    <td><CopyableCode code="Name, RuleVersion, Rules, region" /></td>
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

Gets all properties from an individual <code>cost_category</code>.
```sql
SELECT
region,
arn,
effective_start,
name,
rule_version,
rules,
split_charge_rules,
default_value,
tags
FROM awscc.ce.cost_categories
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>cost_category</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ce.cost_categories (
 Name,
 RuleVersion,
 Rules,
 region
)
SELECT 
'{{ Name }}',
 '{{ RuleVersion }}',
 '{{ Rules }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ce.cost_categories (
 Name,
 RuleVersion,
 Rules,
 SplitChargeRules,
 DefaultValue,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ RuleVersion }}',
 '{{ Rules }}',
 '{{ SplitChargeRules }}',
 '{{ DefaultValue }}',
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
  - name: cost_category
    props:
      - name: Name
        value: '{{ Name }}'
      - name: RuleVersion
        value: '{{ RuleVersion }}'
      - name: Rules
        value: '{{ Rules }}'
      - name: SplitChargeRules
        value: '{{ SplitChargeRules }}'
      - name: DefaultValue
        value: '{{ DefaultValue }}'
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
DELETE FROM awscc.ce.cost_categories
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>cost_categories</code> resource, the following permissions are required:

### Create
```json
ce:CreateCostCategoryDefinition,
ce:TagResource
```

### Read
```json
ce:DescribeCostCategoryDefinition,
ce:ListTagsForResource
```

### Update
```json
ce:UpdateCostCategoryDefinition,
ce:TagResource,
ce:UntagResource
```

### Delete
```json
ce:DeleteCostCategoryDefinition
```

### List
```json
ce:ListCostCategoryDefinitions
```
