---
title: pricing_plans
hide_title: false
hide_table_of_contents: false
keywords:
  - pricing_plans
  - billingconductor
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

Creates, updates, deletes or gets a <code>pricing_plan</code> resource or lists <code>pricing_plans</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>pricing_plans</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Pricing Plan enables you to customize your billing details consistent with the usage that accrues in each of your billing groups.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.billingconductor.pricing_plans" /></td></tr>
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
    "description": "Pricing Plan ARN"
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "pricing_rule_arns",
    "type": "array",
    "description": ""
  },
  {
    "name": "size",
    "type": "integer",
    "description": "Number of associated pricing rules"
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "creation_time",
    "type": "integer",
    "description": "Creation timestamp in UNIX epoch time format"
  },
  {
    "name": "last_modified_time",
    "type": "integer",
    "description": "Latest modified timestamp in UNIX epoch time format"
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
    "name": "arn",
    "type": "string",
    "description": "Pricing Plan ARN"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingplan.html"><code>AWS::BillingConductor::PricingPlan</code></a>.

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
    <td><code>pricing_plans</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>pricing_plans</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>pricing_plans</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>pricing_plans_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>pricing_plans</code></td>
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

Gets all properties from an individual <code>pricing_plan</code>.
```sql
SELECT
region,
arn,
name,
pricing_rule_arns,
size,
description,
creation_time,
last_modified_time,
tags
FROM awscc.billingconductor.pricing_plans
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>pricing_plans</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.billingconductor.pricing_plans_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>pricing_plan</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.billingconductor.pricing_plans (
 Name,
 region
)
SELECT 
'{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.billingconductor.pricing_plans (
 Name,
 PricingRuleArns,
 Description,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ PricingRuleArns }}',
 '{{ Description }}',
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
  - name: pricing_plan
    props:
      - name: Name
        value: '{{ Name }}'
      - name: PricingRuleArns
        value:
          - '{{ PricingRuleArns[0] }}'
      - name: Description
        value: '{{ Description }}'
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
UPDATE awscc.billingconductor.pricing_plans
SET PatchDocument = string('{{ {
    "Name": name,
    "PricingRuleArns": pricing_rule_arns,
    "Description": description,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.billingconductor.pricing_plans
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>pricing_plans</code> resource, the following permissions are required:

### Create
```json
billingconductor:CreatePricingPlan,
billingconductor:AssociatePricingRules,
billingconductor:ListPricingPlans,
billingconductor:TagResource,
billingconductor:ListTagsForResource
```

### Read
```json
billingconductor:ListPricingPlans,
billingconductor:ListPricingRulesAssociatedToPricingPlan,
billingconductor:ListTagsForResource
```

### List
```json
billingconductor:ListPricingPlans,
billingconductor:ListPricingRulesAssociatedToPricingPlan,
billingconductor:ListTagsForResource
```

### Update
```json
billingconductor:ListPricingPlans,
billingconductor:UpdatePricingPlan,
billingconductor:ListPricingRulesAssociatedToPricingPlan,
billingconductor:AssociatePricingRules,
billingconductor:DisassociatePricingRules,
billingconductor:TagResource,
billingconductor:UntagResource
```

### Delete
```json
billingconductor:ListPricingPlans,
billingconductor:DeletePricingPlan,
billingconductor:UntagResource
```
