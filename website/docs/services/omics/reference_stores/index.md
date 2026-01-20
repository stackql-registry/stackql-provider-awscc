---
title: reference_stores
hide_title: false
hide_table_of_contents: false
keywords:
  - reference_stores
  - omics
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

Creates, updates, deletes or gets a <code>reference_store</code> resource or lists <code>reference_stores</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>reference_stores</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Omics::ReferenceStore Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.omics.reference_stores" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": "The store's ARN."
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": "When the store was created."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description for the store."
  },
  {
    "name": "name",
    "type": "string",
    "description": "A name for the store."
  },
  {
    "name": "reference_store_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "sse_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": ""
      },
      {
        "name": "key_arn",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A map of resource tags"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-referencestore.html"><code>AWS::Omics::ReferenceStore</code></a>.

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
    <td><CopyableCode code="Name, region" /></td>
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

Gets all properties from an individual <code>reference_store</code>.
```sql
SELECT
region,
arn,
creation_time,
description,
name,
reference_store_id,
sse_config,
tags
FROM awscc.omics.reference_stores
WHERE region = 'us-east-1' AND data__Identifier = '<ReferenceStoreId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>reference_store</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.omics.reference_stores (
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
INSERT INTO awscc.omics.reference_stores (
 Description,
 Name,
 SseConfig,
 Tags,
 region
)
SELECT 
 '{{ Description }}',
 '{{ Name }}',
 '{{ SseConfig }}',
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
  - name: reference_store
    props:
      - name: Description
        value: '{{ Description }}'
      - name: Name
        value: '{{ Name }}'
      - name: SseConfig
        value:
          Type: '{{ Type }}'
          KeyArn: '{{ KeyArn }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.omics.reference_stores
WHERE data__Identifier = '<ReferenceStoreId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>reference_stores</code> resource, the following permissions are required:

### Create
```json
omics:CreateReferenceStore,
omics:TagResource,
kms:DescribeKey
```

### Read
```json
omics:GetReferenceStore,
omics:ListTagsForResource
```

### Delete
```json
omics:DeleteReferenceStore
```

### List
```json
omics:ListReferenceStores
```
