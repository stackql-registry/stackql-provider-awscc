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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": "Cost category ARN"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-costcategory.html"><code>AWS::CE::CostCategory</code></a>.

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
    <td><code>cost_categories</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, RuleVersion, Rules, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>cost_categories</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>cost_categories</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>cost_categories_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>cost_categories</code></td>
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
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>cost_categories</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.ce.cost_categories_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>cost_category</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ce.cost_categories
SET PatchDocument = string('{{ {
    "RuleVersion": rule_version,
    "Rules": rules,
    "SplitChargeRules": split_charge_rules,
    "DefaultValue": default_value,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ce.cost_categories
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>cost_categories</code> resource, the following permissions are required:

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
ce:CreateCostCategoryDefinition,
ce:TagResource
```

</TabItem>
<TabItem value="read">

```json
ce:DescribeCostCategoryDefinition,
ce:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
ce:UpdateCostCategoryDefinition,
ce:TagResource,
ce:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
ce:DeleteCostCategoryDefinition
```

</TabItem>
<TabItem value="list">

```json
ce:ListCostCategoryDefinitions
```

</TabItem>
</Tabs>