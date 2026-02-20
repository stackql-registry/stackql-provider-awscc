---
title: consumable_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - consumable_resources
  - batch
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

Creates, updates, deletes or gets a <code>consumable_resource</code> resource or lists <code>consumable_resources</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>consumable_resources</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Batch::ConsumableResource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.batch.consumable_resources" /></td></tr>
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
    "name": "consumable_resource_name",
    "type": "string",
    "description": "Name of ConsumableResource."
  },
  {
    "name": "consumable_resource_arn",
    "type": "string",
    "description": "ARN of the Scheduling Policy."
  },
  {
    "name": "total_quantity",
    "type": "integer",
    "description": "Total Quantity of ConsumableResource."
  },
  {
    "name": "in_use_quantity",
    "type": "integer",
    "description": "In-use Quantity of ConsumableResource."
  },
  {
    "name": "available_quantity",
    "type": "integer",
    "description": "Available Quantity of ConsumableResource."
  },
  {
    "name": "resource_type",
    "type": "string",
    "description": "Type of Consumable Resource."
  },
  {
    "name": "created_at",
    "type": "integer",
    "description": ""
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A key-value pair to associate with a resource."
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
    "name": "consumable_resource_arn",
    "type": "string",
    "description": "ARN of the Scheduling Policy."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-consumableresource.html"><code>AWS::Batch::ConsumableResource</code></a>.

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
    <td><code>consumable_resources</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ResourceType, TotalQuantity, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>consumable_resources</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>consumable_resources</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>consumable_resources_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>consumable_resources</code></td>
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

Gets all properties from an individual <code>consumable_resource</code>.
```sql
SELECT
region,
consumable_resource_name,
consumable_resource_arn,
total_quantity,
in_use_quantity,
available_quantity,
resource_type,
created_at,
tags
FROM awscc.batch.consumable_resources
WHERE region = 'us-east-1' AND Identifier = '<ConsumableResourceArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>consumable_resources</code> in a region.
```sql
SELECT
region,
consumable_resource_arn
FROM awscc.batch.consumable_resources_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>consumable_resource</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.batch.consumable_resources (
 TotalQuantity,
 ResourceType,
 region
)
SELECT 
'{{ TotalQuantity }}',
 '{{ ResourceType }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.batch.consumable_resources (
 ConsumableResourceName,
 TotalQuantity,
 ResourceType,
 Tags,
 region
)
SELECT 
 '{{ ConsumableResourceName }}',
 '{{ TotalQuantity }}',
 '{{ ResourceType }}',
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
  - name: consumable_resource
    props:
      - name: ConsumableResourceName
        value: '{{ ConsumableResourceName }}'
      - name: TotalQuantity
        value: '{{ TotalQuantity }}'
      - name: ResourceType
        value: '{{ ResourceType }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>consumable_resource</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.batch.consumable_resources
SET PatchDocument = string('{{ {
    "TotalQuantity": total_quantity
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ConsumableResourceArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.batch.consumable_resources
WHERE Identifier = '<ConsumableResourceArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>consumable_resources</code> resource, the following permissions are required:

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
Batch:CreateConsumableResource,
Batch:TagResource
```

</TabItem>
<TabItem value="read">

```json
Batch:DescribeConsumableResource
```

</TabItem>
<TabItem value="update">

```json
Batch:UpdateConsumableResource,
Batch:TagResource,
Batch:UnTagResource
```

</TabItem>
<TabItem value="delete">

```json
Batch:DescribeConsumableResource,
Batch:DeleteConsumableResource
```

</TabItem>
<TabItem value="list">

```json
Batch:ListConsumableResources
```

</TabItem>
</Tabs>