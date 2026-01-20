---
title: annotation_stores
hide_title: false
hide_table_of_contents: false
keywords:
  - annotation_stores
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

Creates, updates, deletes or gets an <code>annotation_store</code> resource or lists <code>annotation_stores</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>annotation_stores</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Omics::AnnotationStore Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.omics.annotation_stores" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "creation_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "reference",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "reference_arn",
        "type": "string",
        "description": ""
      }
    ]
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
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "status_message",
    "type": "string",
    "description": ""
  },
  {
    "name": "store_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "store_format",
    "type": "string",
    "description": ""
  },
  {
    "name": "store_options",
    "type": "object",
    "description": ""
  },
  {
    "name": "store_size_bytes",
    "type": "number",
    "description": ""
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A map of resource tags"
  },
  {
    "name": "update_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html"><code>AWS::Omics::AnnotationStore</code></a>.

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
    <td><CopyableCode code="Name, StoreFormat, region" /></td>
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

Gets all properties from an individual <code>annotation_store</code>.
```sql
SELECT
region,
creation_time,
description,
id,
name,
reference,
sse_config,
status,
status_message,
store_arn,
store_format,
store_options,
store_size_bytes,
tags,
update_time
FROM awscc.omics.annotation_stores
WHERE region = 'us-east-1' AND data__Identifier = '<Name>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>annotation_store</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.omics.annotation_stores (
 Name,
 StoreFormat,
 region
)
SELECT 
'{{ Name }}',
 '{{ StoreFormat }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.omics.annotation_stores (
 Description,
 Name,
 Reference,
 SseConfig,
 StoreFormat,
 StoreOptions,
 Tags,
 region
)
SELECT 
 '{{ Description }}',
 '{{ Name }}',
 '{{ Reference }}',
 '{{ SseConfig }}',
 '{{ StoreFormat }}',
 '{{ StoreOptions }}',
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
  - name: annotation_store
    props:
      - name: Description
        value: '{{ Description }}'
      - name: Name
        value: '{{ Name }}'
      - name: Reference
        value:
          ReferenceArn: '{{ ReferenceArn }}'
      - name: SseConfig
        value:
          Type: '{{ Type }}'
          KeyArn: '{{ KeyArn }}'
      - name: StoreFormat
        value: '{{ StoreFormat }}'
      - name: StoreOptions
        value: null
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.omics.annotation_stores
WHERE data__Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>annotation_stores</code> resource, the following permissions are required:

### Create
```json
omics:CreateAnnotationStore,
omics:TagResource,
kms:DescribeKey,
kms:GenerateDataKey,
kms:CreateGrant,
ram:AcceptResourceShareInvitation,
ram:GetResourceShareInvitations,
omics:GetAnnotationStore
```

### Read
```json
omics:GetAnnotationStore
```

### Update
```json
omics:UpdateAnnotationStore,
omics:TagResource,
omics:UntagResource,
omics:GetAnnotationStore,
omics:ListTagsForResource
```

### Delete
```json
omics:DeleteAnnotationStore,
omics:ListAnnotationStores
```

### List
```json
omics:ListAnnotationStores
```
