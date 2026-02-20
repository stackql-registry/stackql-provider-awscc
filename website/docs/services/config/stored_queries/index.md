---
title: stored_queries
hide_title: false
hide_table_of_contents: false
keywords:
  - stored_queries
  - config
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

Creates, updates, deletes or gets a <code>stored_query</code> resource or lists <code>stored_queries</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>stored_queries</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Config::StoredQuery</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.config.stored_queries" /></td></tr>
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
    "name": "query_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "query_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "query_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "query_description",
    "type": "string",
    "description": ""
  },
  {
    "name": "query_expression",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags for the stored query.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
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
    "name": "query_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-storedquery.html"><code>AWS::Config::StoredQuery</code></a>.

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
    <td><code>stored_queries</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="QueryName, QueryExpression, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>stored_queries</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>stored_queries</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>stored_queries_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>stored_queries</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>stored_query</code>.
```sql
SELECT
region,
query_arn,
query_id,
query_name,
query_description,
query_expression,
tags
FROM awscc.config.stored_queries
WHERE region = 'us-east-1' AND data__Identifier = '<QueryName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>stored_queries</code> in a region.
```sql
SELECT
region,
query_name
FROM awscc.config.stored_queries_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>stored_query</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.config.stored_queries (
 QueryName,
 QueryExpression,
 region
)
SELECT 
'{{ QueryName }}',
 '{{ QueryExpression }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.config.stored_queries (
 QueryName,
 QueryDescription,
 QueryExpression,
 Tags,
 region
)
SELECT 
 '{{ QueryName }}',
 '{{ QueryDescription }}',
 '{{ QueryExpression }}',
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
  - name: stored_query
    props:
      - name: QueryName
        value: '{{ QueryName }}'
      - name: QueryDescription
        value: '{{ QueryDescription }}'
      - name: QueryExpression
        value: '{{ QueryExpression }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.config.stored_queries
SET data__PatchDocument = string('{{ {
    "QueryDescription": query_description,
    "QueryExpression": query_expression,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<QueryName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.config.stored_queries
WHERE data__Identifier = '<QueryName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>stored_queries</code> resource, the following permissions are required:

### Create
```json
config:PutStoredQuery,
config:GetStoredQuery,
config:TagResource
```

### Read
```json
config:GetStoredQuery,
config:ListTagsForResource
```

### Update
```json
config:PutStoredQuery,
config:GetStoredQuery,
config:TagResource,
config:UntagResource,
config:ListTagsForResource
```

### Delete
```json
config:DeleteStoredQuery,
config:UntagResource
```

### List
```json
config:ListStoredQueries
```
