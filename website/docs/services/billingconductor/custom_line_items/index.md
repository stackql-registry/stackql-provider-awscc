---
title: custom_line_items
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_line_items
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

Creates, updates, deletes or gets a <code>custom_line_item</code> resource or lists <code>custom_line_items</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>custom_line_items</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A custom line item is an one time charge that is applied to a specific billing group's bill.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.billingconductor.custom_line_items" /></td></tr>
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
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "custom_line_item_charge_details",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "flat",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "charge_value",
            "type": "number",
            "description": ""
          }
        ]
      },
      {
        "name": "percentage",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "child_associated_resources",
            "type": "array",
            "description": ""
          },
          {
            "name": "percentage_value",
            "type": "number",
            "description": ""
          }
        ]
      },
      {
        "name": "type",
        "type": "string",
        "description": ""
      },
      {
        "name": "line_item_filters",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "attribute",
            "type": "string",
            "description": ""
          },
          {
            "name": "match_option",
            "type": "string",
            "description": ""
          },
          {
            "name": "values",
            "type": "array",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "billing_group_arn",
    "type": "string",
    "description": "Billing Group ARN"
  },
  {
    "name": "billing_period_range",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "inclusive_start_billing_period",
        "type": "string",
        "description": ""
      },
      {
        "name": "exclusive_end_billing_period",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": "ARN"
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
    "name": "association_size",
    "type": "integer",
    "description": "Number of source values associated to this custom line item"
  },
  {
    "name": "product_code",
    "type": "string",
    "description": ""
  },
  {
    "name": "currency_code",
    "type": "string",
    "description": ""
  },
  {
    "name": "account_id",
    "type": "string",
    "description": "The account which this custom line item will be charged to"
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
    "description": "ARN"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html"><code>AWS::BillingConductor::CustomLineItem</code></a>.

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
    <td><code>custom_line_items</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, BillingGroupArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>custom_line_items</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>custom_line_items</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>custom_line_items_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>custom_line_items</code></td>
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

Gets all properties from an individual <code>custom_line_item</code>.
```sql
SELECT
region,
name,
description,
custom_line_item_charge_details,
billing_group_arn,
billing_period_range,
arn,
creation_time,
last_modified_time,
association_size,
product_code,
currency_code,
account_id,
tags
FROM awscc.billingconductor.custom_line_items
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>custom_line_items</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.billingconductor.custom_line_items_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>custom_line_item</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.billingconductor.custom_line_items (
 Name,
 BillingGroupArn,
 region
)
SELECT 
'{{ Name }}',
 '{{ BillingGroupArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.billingconductor.custom_line_items (
 Name,
 Description,
 CustomLineItemChargeDetails,
 BillingGroupArn,
 BillingPeriodRange,
 AccountId,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Description }}',
 '{{ CustomLineItemChargeDetails }}',
 '{{ BillingGroupArn }}',
 '{{ BillingPeriodRange }}',
 '{{ AccountId }}',
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
  - name: custom_line_item
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: CustomLineItemChargeDetails
        value:
          Flat:
            ChargeValue: null
          Percentage:
            ChildAssociatedResources:
              - '{{ ChildAssociatedResources[0] }}'
            PercentageValue: null
          Type: '{{ Type }}'
          LineItemFilters:
            - Attribute: '{{ Attribute }}'
              MatchOption: '{{ MatchOption }}'
              Values:
                - '{{ Values[0] }}'
      - name: BillingGroupArn
        value: '{{ BillingGroupArn }}'
      - name: BillingPeriodRange
        value:
          InclusiveStartBillingPeriod: '{{ InclusiveStartBillingPeriod }}'
          ExclusiveEndBillingPeriod: '{{ ExclusiveEndBillingPeriod }}'
      - name: AccountId
        value: '{{ AccountId }}'
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
UPDATE awscc.billingconductor.custom_line_items
SET PatchDocument = string('{{ {
    "Name": name,
    "Description": description,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.billingconductor.custom_line_items
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>custom_line_items</code> resource, the following permissions are required:

### Create
```json
billingconductor:CreateCustomLineItem,
billingconductor:BatchAssociateResourcesToCustomLineItem,
billingconductor:ListCustomLineItems,
billingconductor:TagResource,
billingconductor:ListTagsForResource
```

### Read
```json
billingconductor:ListCustomLineItems,
billingconductor:ListCustomLineItemVersions,
billingconductor:ListResourcesAssociatedToCustomLineItem,
billingconductor:ListTagsForResource
```

### List
```json
billingconductor:ListCustomLineItems,
billingconductor:ListResourcesAssociatedToCustomLineItem,
billingconductor:ListTagsForResource
```

### Update
```json
billingconductor:UpdateCustomLineItem,
billingconductor:ListCustomLineItems,
billingconductor:ListResourcesAssociatedToCustomLineItem,
billingconductor:BatchAssociateResourcesToCustomLineItem,
billingconductor:BatchDisassociateResourcesFromCustomLineItem,
billingconductor:TagResource,
billingconductor:UntagResource
```

### Delete
```json
billingconductor:DeleteCustomLineItem,
billingconductor:ListCustomLineItems,
billingconductor:BatchDisassociateResourcesFromCustomLineItem,
billingconductor:ListResourcesAssociatedToCustomLineItem,
billingconductor:UntagResource
```
