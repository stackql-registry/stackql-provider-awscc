---
title: billing_views
hide_title: false
hide_table_of_contents: false
keywords:
  - billing_views
  - billing
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

Creates, updates, deletes or gets a <code>billing_view</code> resource or lists <code>billing_views</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>billing_views</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A billing view is a container of cost & usage metadata.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.billing.billing_views" /></td></tr>
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
    "description": ""
  },
  {
    "name": "billing_view_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "data_filter_expression",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "dimensions",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "key",
            "type": "string",
            "description": ""
          },
          {
            "name": "values",
            "type": "array",
            "description": ""
          }
        ]
      },
      {
        "name": "tags",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "key",
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
    "name": "created_at",
    "type": "number",
    "description": "The time when the billing view was created."
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "owner_account_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs associated to the billing view being created.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "source_views",
    "type": "array",
    "description": "An array of strings that define the billing view's source."
  },
  {
    "name": "updated_at",
    "type": "number",
    "description": "The time when the billing view was last updated."
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
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billing-billingview.html"><code>AWS::Billing::BillingView</code></a>.

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
    <td><code>billing_views</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, SourceViews, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>billing_views</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>billing_views</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>billing_views_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>billing_views</code></td>
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

Gets all properties from an individual <code>billing_view</code>.
```sql
SELECT
region,
arn,
billing_view_type,
data_filter_expression,
created_at,
description,
name,
owner_account_id,
tags,
source_views,
updated_at
FROM awscc.billing.billing_views
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>billing_views</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.billing.billing_views_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>billing_view</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.billing.billing_views (
 Name,
 SourceViews,
 region
)
SELECT 
'{{ Name }}',
 '{{ SourceViews }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.billing.billing_views (
 DataFilterExpression,
 Description,
 Name,
 Tags,
 SourceViews,
 region
)
SELECT 
 '{{ DataFilterExpression }}',
 '{{ Description }}',
 '{{ Name }}',
 '{{ Tags }}',
 '{{ SourceViews }}',
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
  - name: billing_view
    props:
      - name: DataFilterExpression
        value:
          Dimensions:
            Key: '{{ Key }}'
            Values:
              - '{{ Values[0] }}'
          Tags:
            Key: '{{ Key }}'
            Values:
              - '{{ Values[0] }}'
      - name: Description
        value: '{{ Description }}'
      - name: Name
        value: '{{ Name }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: SourceViews
        value:
          - '{{ SourceViews[0] }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.billing.billing_views
SET PatchDocument = string('{{ {
    "DataFilterExpression": data_filter_expression,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.billing.billing_views
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>billing_views</code> resource, the following permissions are required:

### Create
```json
billing:CreateBillingView,
billing:TagResource,
billing:ListTagsForResource,
billing:GetBillingView,
billing:ListSourceViewsForBillingView
```

### Read
```json
billing:GetBillingView,
billing:ListTagsForResource,
billing:ListSourceViewsForBillingView
```

### Update
```json
billing:UpdateBillingView,
billing:GetBillingView,
billing:ListTagsForResource,
billing:TagResource,
billing:UntagResource,
billing:ListSourceViewsForBillingView
```

### Delete
```json
billing:GetBillingView,
billing:DeleteBillingView
```

### List
```json
billing:ListBillingViews
```
