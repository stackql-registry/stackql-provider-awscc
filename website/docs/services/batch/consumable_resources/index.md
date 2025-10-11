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
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="consumable_resource_name" /></td><td><code>string</code></td><td>Name of ConsumableResource.</td></tr>
<tr><td><CopyableCode code="consumable_resource_arn" /></td><td><code>string</code></td><td>ARN of the Scheduling Policy.</td></tr>
<tr><td><CopyableCode code="total_quantity" /></td><td><code>integer</code></td><td>Total Quantity of ConsumableResource.</td></tr>
<tr><td><CopyableCode code="in_use_quantity" /></td><td><code>integer</code></td><td>In-use Quantity of ConsumableResource.</td></tr>
<tr><td><CopyableCode code="available_quantity" /></td><td><code>integer</code></td><td>Available Quantity of ConsumableResource.</td></tr>
<tr><td><CopyableCode code="resource_type" /></td><td><code>string</code></td><td>Type of Consumable Resource.</td></tr>
<tr><td><CopyableCode code="created_at" /></td><td><code>integer</code></td><td></td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>object</code></td><td>A key-value pair to associate with a resource.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-consumableresource.html"><code>AWS::Batch::ConsumableResource</code></a>.

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
    <td><CopyableCode code="ResourceType, TotalQuantity, region" /></td>
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
Gets all <code>consumable_resources</code> in a region.
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
WHERE region = 'us-east-1';
```
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
WHERE region = 'us-east-1' AND data__Identifier = '<ConsumableResourceArn>';
```

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

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.batch.consumable_resources
WHERE data__Identifier = '<ConsumableResourceArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>consumable_resources</code> resource, the following permissions are required:

### Create
```json
Batch:CreateConsumableResource,
Batch:TagResource
```

### Read
```json
Batch:DescribeConsumableResource
```

### Update
```json
Batch:UpdateConsumableResource,
Batch:TagResource,
Batch:UnTagResource
```

### Delete
```json
Batch:DescribeConsumableResource,
Batch:DeleteConsumableResource
```

### List
```json
Batch:ListConsumableResources
```
