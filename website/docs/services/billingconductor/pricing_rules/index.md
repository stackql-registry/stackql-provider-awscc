---
title: pricing_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - pricing_rules
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

Creates, updates, deletes or gets a <code>pricing_rule</code> resource or lists <code>pricing_rules</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>pricing_rules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A markup/discount that is defined for a specific set of services that can later be associated with a pricing plan.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.billingconductor.pricing_rules" /></td></tr>
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
    "description": "Pricing rule ARN"
  },
  {
    "name": "name",
    "type": "string",
    "description": "Pricing rule name"
  },
  {
    "name": "description",
    "type": "string",
    "description": "Pricing rule description"
  },
  {
    "name": "scope",
    "type": "string",
    "description": "A term used to categorize the granularity of a Pricing Rule."
  },
  {
    "name": "type",
    "type": "string",
    "description": "One of MARKUP, DISCOUNT or TIERING that describes the behaviour of the pricing rule."
  },
  {
    "name": "modifier_percentage",
    "type": "number",
    "description": "Pricing rule modifier percentage"
  },
  {
    "name": "service",
    "type": "string",
    "description": "The service which a pricing rule is applied on"
  },
  {
    "name": "billing_entity",
    "type": "string",
    "description": "The seller of services provided by AWS, their affiliates, or third-party providers selling services via AWS Marketplaces. Supported billing entities are AWS, AWS Marketplace, and AISPL."
  },
  {
    "name": "tiering",
    "type": "object",
    "description": "The set of tiering configurations for the pricing rule.",
    "children": [
      {
        "name": "free_tier",
        "type": "object",
        "description": "The possible customizable free tier configurations.",
        "children": [
          {
            "name": "activated",
            "type": "boolean",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "usage_type",
    "type": "string",
    "description": "The UsageType which a SKU pricing rule is modifying"
  },
  {
    "name": "operation",
    "type": "string",
    "description": "The Operation which a SKU pricing rule is modifying"
  },
  {
    "name": "associated_pricing_plan_count",
    "type": "integer",
    "description": "The number of pricing plans associated with pricing rule"
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
    "description": "Pricing rule ARN"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html"><code>AWS::BillingConductor::PricingRule</code></a>.

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
    <td><code>pricing_rules</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, Scope, Type, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>pricing_rules</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>pricing_rules</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>pricing_rules_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>pricing_rules</code></td>
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

Gets all properties from an individual <code>pricing_rule</code>.
```sql
SELECT
region,
arn,
name,
description,
scope,
type,
modifier_percentage,
service,
billing_entity,
tiering,
usage_type,
operation,
associated_pricing_plan_count,
creation_time,
last_modified_time,
tags
FROM awscc.billingconductor.pricing_rules
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>pricing_rules</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.billingconductor.pricing_rules_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>pricing_rule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.billingconductor.pricing_rules (
 Name,
 Scope,
 Type,
 region
)
SELECT
'{{ name }}',
 '{{ scope }}',
 '{{ type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.billingconductor.pricing_rules (
 Name,
 Description,
 Scope,
 Type,
 ModifierPercentage,
 Service,
 BillingEntity,
 Tiering,
 UsageType,
 Operation,
 Tags,
 region
)
SELECT
 '{{ name }}',
 '{{ description }}',
 '{{ scope }}',
 '{{ type }}',
 '{{ modifier_percentage }}',
 '{{ service }}',
 '{{ billing_entity }}',
 '{{ tiering }}',
 '{{ usage_type }}',
 '{{ operation }}',
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
  - name: pricing_rule
    props:
      - name: name
        value: '{{ name }}'
      - name: description
        value: '{{ description }}'
      - name: scope
        value: '{{ scope }}'
      - name: type
        value: '{{ type }}'
      - name: modifier_percentage
        value: null
      - name: service
        value: '{{ service }}'
      - name: billing_entity
        value: '{{ billing_entity }}'
      - name: tiering
        value:
          free_tier:
            activated: '{{ activated }}'
      - name: usage_type
        value: '{{ usage_type }}'
      - name: operation
        value: '{{ operation }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>pricing_rule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.billingconductor.pricing_rules
SET PatchDocument = string('{{ {
    "Name": name,
    "Description": description,
    "Type": type,
    "ModifierPercentage": modifier_percentage,
    "Tiering": tiering,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.billingconductor.pricing_rules
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>pricing_rules</code> resource, the following permissions are required:

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
billingconductor:CreatePricingRule,
billingconductor:ListPricingRules,
billingconductor:TagResource,
billingconductor:ListTagsForResource
```

</TabItem>
<TabItem value="read">

```json
billingconductor:ListPricingRules,
billingconductor:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
billingconductor:UpdatePricingRule,
billingconductor:ListPricingRules,
billingconductor:TagResource,
billingconductor:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
billingconductor:DeletePricingRule,
billingconductor:ListPricingRules,
billingconductor:UntagResource
```

</TabItem>
<TabItem value="list">

```json
billingconductor:ListPricingRules,
billingconductor:ListTagsForResource
```

</TabItem>
</Tabs>