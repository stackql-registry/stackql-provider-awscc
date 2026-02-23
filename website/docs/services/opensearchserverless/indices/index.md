---
title: indices
hide_title: false
hide_table_of_contents: false
keywords:
  - indices
  - opensearchserverless
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
<tr><td><b>Description</b></td><td>An OpenSearch Serverless index resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.opensearchserverless.indices" /></td></tr>
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
    "name": "collection_endpoint",
    "type": "string",
    "description": "The endpoint for the collection."
  },
  {
    "name": "index_name",
    "type": "string",
    "description": "The name of the OpenSearch Serverless index."
  },
  {
    "name": "settings",
    "type": "object",
    "description": "Index settings",
    "children": [
      {
        "name": "index",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "refresh_interval",
            "type": "string",
            "description": "How often to perform refresh operation (e.g. '1s', '5s')"
          },
          {
            "name": "knn",
            "type": "boolean",
            "description": "Enable/disable k-nearest neighbor search capability"
          },
          {
            "name": "knn_algo_param_ef_search",
            "type": "integer",
            "description": "Size of the dynamic list for the nearest neighbors"
          }
        ]
      }
    ]
  },
  {
    "name": "mappings",
    "type": "object",
    "description": "Index Mappings",
    "children": [
      {
        "name": "properties",
        "type": "object",
        "description": "Defines the fields within the mapping, including their types and configurations"
      }
    ]
  },
  {
    "name": "uuid",
    "type": "string",
    "description": "The unique identifier for the index."
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
    "name": "collection_endpoint",
    "type": "string",
    "description": "The endpoint for the collection."
  },
  {
    "name": "index_name",
    "type": "string",
    "description": "The name of the OpenSearch Serverless index."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html"><code>AWS::OpenSearchServerless::Index</code></a>.

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
    <td><CopyableCode code="CollectionEndpoint, IndexName, region" /></td>
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
collection_endpoint,
index_name,
settings,
mappings,
uuid
FROM awscc.opensearchserverless.indices
WHERE region = 'us-east-1' AND Identifier = '{{ index_name }}|{{ collection_endpoint }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>indices</code> in a region.
```sql
SELECT
region,
index_name,
collection_endpoint
FROM awscc.opensearchserverless.indices_list_only
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
INSERT INTO awscc.opensearchserverless.indices (
 CollectionEndpoint,
 IndexName,
 region
)
SELECT
'{{ collection_endpoint }}',
 '{{ index_name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.opensearchserverless.indices (
 CollectionEndpoint,
 IndexName,
 Settings,
 Mappings,
 region
)
SELECT
 '{{ collection_endpoint }}',
 '{{ index_name }}',
 '{{ settings }}',
 '{{ mappings }}',
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
      - name: collection_endpoint
        value: '{{ collection_endpoint }}'
      - name: index_name
        value: '{{ index_name }}'
      - name: settings
        value:
          index:
            refresh_interval: '{{ refresh_interval }}'
            knn: '{{ knn }}'
            knn_algo_param_ef_search: '{{ knn_algo_param_ef_search }}'
      - name: mappings
        value:
          properties: {}
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>index</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.opensearchserverless.indices
SET PatchDocument = string('{{ {
    "Settings": settings,
    "Mappings": mappings
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ index_name }}|{{ collection_endpoint }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.opensearchserverless.indices
WHERE Identifier = '{{ index_name }}|{{ collection_endpoint }}'
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
aoss:APIAccessAll
```

</TabItem>
<TabItem value="read">

```json
aoss:APIAccessAll
```

</TabItem>
<TabItem value="update">

```json
aoss:APIAccessAll
```

</TabItem>
<TabItem value="delete">

```json
aoss:APIAccessAll
```

</TabItem>
<TabItem value="list">

```json
aoss:APIAccessAll
```

</TabItem>
</Tabs>