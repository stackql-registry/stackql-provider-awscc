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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html"><code>AWS::Omics::AnnotationStore</code></a>.

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
    <td><code>annotation_stores</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, StoreFormat, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>annotation_stores</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>annotation_stores</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>annotation_stores_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>annotation_stores</code></td>
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
WHERE region = 'us-east-1' AND Identifier = '{{ name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>annotation_stores</code> in a region.
```sql
SELECT
region,
name
FROM awscc.omics.annotation_stores_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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
'{{ name }}',
 '{{ store_format }}',
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
 '{{ description }}',
 '{{ name }}',
 '{{ reference }}',
 '{{ sse_config }}',
 '{{ store_format }}',
 '{{ store_options }}',
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
  - name: annotation_store
    props:
      - name: description
        value: '{{ description }}'
      - name: name
        value: '{{ name }}'
      - name: reference
        value:
          reference_arn: '{{ reference_arn }}'
      - name: sse_config
        value:
          type: '{{ type }}'
          key_arn: '{{ key_arn }}'
      - name: store_format
        value: '{{ store_format }}'
      - name: store_options
        value: null
      - name: tags
        value: {}
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>annotation_store</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.omics.annotation_stores
SET PatchDocument = string('{{ {
    "Description": description
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.omics.annotation_stores
WHERE Identifier = '{{ name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>annotation_stores</code> resource, the following permissions are required:

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
omics:CreateAnnotationStore,
omics:TagResource,
kms:DescribeKey,
kms:GenerateDataKey,
kms:CreateGrant,
ram:AcceptResourceShareInvitation,
ram:GetResourceShareInvitations,
omics:GetAnnotationStore
```

</TabItem>
<TabItem value="read">

```json
omics:GetAnnotationStore
```

</TabItem>
<TabItem value="update">

```json
omics:UpdateAnnotationStore,
omics:TagResource,
omics:UntagResource,
omics:GetAnnotationStore,
omics:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
omics:DeleteAnnotationStore,
omics:ListAnnotationStores
```

</TabItem>
<TabItem value="list">

```json
omics:ListAnnotationStores
```

</TabItem>
</Tabs>