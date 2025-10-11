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
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="billing_view_type" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="data_filter_expression" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="created_at" /></td><td><code>number</code></td><td>The time when the billing view was created.</td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="owner_account_id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>An array of key-value pairs associated to the billing view being created.</td></tr>
<tr><td><CopyableCode code="source_views" /></td><td><code>array</code></td><td>An array of strings that define the billing view's source.</td></tr>
<tr><td><CopyableCode code="updated_at" /></td><td><code>number</code></td><td>The time when the billing view was last updated.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billing-billingview.html"><code>AWS::Billing::BillingView</code></a>.

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
    <td><CopyableCode code="Name, SourceViews, region" /></td>
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
Gets all <code>billing_views</code> in a region.
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
WHERE region = 'us-east-1';
```
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
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

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

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.billing.billing_views
WHERE data__Identifier = '<Arn>'
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
