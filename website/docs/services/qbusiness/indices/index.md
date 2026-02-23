---
title: indices
hide_title: false
hide_table_of_contents: false
keywords:
  - indices
  - qbusiness
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

Creates, updates, deletes or gets an <code>index</code> resource or lists <code>indices</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>indices</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::QBusiness::Index Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.qbusiness.indices" /></td></tr>
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
    "name": "application_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "capacity_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "units",
        "type": "number",
        "description": ""
      }
    ]
  },
  {
    "name": "created_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "display_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "document_attribute_configurations",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": ""
      },
      {
        "name": "type",
        "type": "string",
        "description": ""
      },
      {
        "name": "search",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "index_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "index_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "index_statistics",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "text_document_statistics",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "indexed_text_bytes",
            "type": "number",
            "description": ""
          },
          {
            "name": "indexed_text_document_count",
            "type": "number",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "type",
    "type": "string",
    "description": ""
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
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
    "name": "updated_at",
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
    "name": "application_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "index_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-index.html"><code>AWS::QBusiness::Index</code></a>.

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
    <td><code>indices</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ApplicationId, DisplayName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>indices</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>indices</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>indices_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>indices</code></td>
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

Gets all properties from an individual <code>index</code>.
```sql
SELECT
region,
application_id,
capacity_configuration,
created_at,
description,
display_name,
document_attribute_configurations,
index_arn,
index_id,
index_statistics,
type,
status,
tags,
updated_at
FROM awscc.qbusiness.indices
WHERE region = 'us-east-1' AND Identifier = '{{ application_id }}|{{ index_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>indices</code> in a region.
```sql
SELECT
region,
application_id,
index_id
FROM awscc.qbusiness.indices_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>index</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.qbusiness.indices (
 ApplicationId,
 DisplayName,
 region
)
SELECT
'{{ application_id }}',
 '{{ display_name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.qbusiness.indices (
 ApplicationId,
 CapacityConfiguration,
 Description,
 DisplayName,
 DocumentAttributeConfigurations,
 Type,
 Tags,
 region
)
SELECT
 '{{ application_id }}',
 '{{ capacity_configuration }}',
 '{{ description }}',
 '{{ display_name }}',
 '{{ document_attribute_configurations }}',
 '{{ type }}',
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
  - name: index
    props:
      - name: application_id
        value: '{{ application_id }}'
      - name: capacity_configuration
        value:
          units: null
      - name: description
        value: '{{ description }}'
      - name: display_name
        value: '{{ display_name }}'
      - name: document_attribute_configurations
        value:
          - name: '{{ name }}'
            type: '{{ type }}'
            search: '{{ search }}'
      - name: type
        value: '{{ type }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>index</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.qbusiness.indices
SET PatchDocument = string('{{ {
    "CapacityConfiguration": capacity_configuration,
    "Description": description,
    "DisplayName": display_name,
    "DocumentAttributeConfigurations": document_attribute_configurations,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ application_id }}|{{ index_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.qbusiness.indices
WHERE Identifier = '{{ application_id }}|{{ index_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>indices</code> resource, the following permissions are required:

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
qbusiness:CreateIndex,
qbusiness:GetIndex,
qbusiness:ListTagsForResource,
qbusiness:TagResource,
qbusiness:UpdateIndex
```

</TabItem>
<TabItem value="read">

```json
qbusiness:GetIndex,
qbusiness:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
qbusiness:GetIndex,
qbusiness:ListTagsForResource,
qbusiness:TagResource,
qbusiness:UntagResource,
qbusiness:UpdateIndex
```

</TabItem>
<TabItem value="delete">

```json
qbusiness:DeleteIndex,
qbusiness:GetIndex
```

</TabItem>
<TabItem value="list">

```json
qbusiness:ListIndices
```

</TabItem>
</Tabs>