---
title: metered_products
hide_title: false
hide_table_of_contents: false
keywords:
  - metered_products
  - deadline
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

Creates, updates, deletes or gets a <code>metered_product</code> resource or lists <code>metered_products</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>metered_products</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Deadline::MeteredProduct Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.deadline.metered_products" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "license_endpoint_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "product_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "port",
    "type": "integer",
    "description": ""
  },
  {
    "name": "family",
    "type": "string",
    "description": ""
  },
  {
    "name": "vendor",
    "type": "string",
    "description": ""
  },
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-meteredproduct.html"><code>AWS::Deadline::MeteredProduct</code></a>.

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
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>metered_product</code>.
```sql
SELECT
region,
license_endpoint_id,
product_id,
port,
family,
vendor,
arn
FROM awscc.deadline.metered_products
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>metered_product</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.deadline.metered_products (
 LicenseEndpointId,
 ProductId,
 region
)
SELECT 
'{{ LicenseEndpointId }}',
 '{{ ProductId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.deadline.metered_products (
 LicenseEndpointId,
 ProductId,
 region
)
SELECT 
 '{{ LicenseEndpointId }}',
 '{{ ProductId }}',
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
  - name: metered_product
    props:
      - name: LicenseEndpointId
        value: '{{ LicenseEndpointId }}'
      - name: ProductId
        value: '{{ ProductId }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.deadline.metered_products
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>metered_products</code> resource, the following permissions are required:

### Create
```json
deadline:PutMeteredProduct,
deadline:ListMeteredProducts
```

### Read
```json
deadline:GetMeteredProduct,
deadline:ListMeteredProducts
```

### Delete
```json
deadline:DeleteMeteredProduct,
deadline:ListMeteredProducts
```

### List
```json
deadline:ListMeteredProducts
```
