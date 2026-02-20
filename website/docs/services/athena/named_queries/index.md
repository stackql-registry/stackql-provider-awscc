---
title: named_queries
hide_title: false
hide_table_of_contents: false
keywords:
  - named_queries
  - athena
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

Creates, updates, deletes or gets a <code>named_query</code> resource or lists <code>named_queries</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>named_queries</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::Athena::NamedQuery</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.athena.named_queries" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": "The query name."
  },
  {
    "name": "database",
    "type": "string",
    "description": "The database to which the query belongs."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The query description."
  },
  {
    "name": "query_string",
    "type": "string",
    "description": "The contents of the query with all query statements."
  },
  {
    "name": "work_group",
    "type": "string",
    "description": "The name of the workgroup that contains the named query."
  },
  {
    "name": "named_query_id",
    "type": "string",
    "description": "The unique ID of the query."
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
    "description": "The query name."
  },
  {
    "name": "named_query_id",
    "type": "string",
    "description": "The unique ID of the query."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-namedquery.html"><code>AWS::Athena::NamedQuery</code></a>.

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
    <td><code>named_queries</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Database, QueryString, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>named_queries</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>named_queries_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>named_queries</code></td>
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

Gets all properties from an individual <code>named_query</code>.
```sql
SELECT
region,
name,
database,
description,
query_string,
work_group,
named_query_id
FROM awscc.athena.named_queries
WHERE region = 'us-east-1' AND data__Identifier = '<NamedQueryId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>named_queries</code> in a region.
```sql
SELECT
region,
named_query_id
FROM awscc.athena.named_queries_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>named_query</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.athena.named_queries (
 Database,
 QueryString,
 region
)
SELECT 
'{{ Database }}',
 '{{ QueryString }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.athena.named_queries (
 Name,
 Database,
 Description,
 QueryString,
 WorkGroup,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Database }}',
 '{{ Description }}',
 '{{ QueryString }}',
 '{{ WorkGroup }}',
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
  - name: named_query
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Database
        value: '{{ Database }}'
      - name: Description
        value: '{{ Description }}'
      - name: QueryString
        value: '{{ QueryString }}'
      - name: WorkGroup
        value: '{{ WorkGroup }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.athena.named_queries
WHERE data__Identifier = '<NamedQueryId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>named_queries</code> resource, the following permissions are required:

### Create
```json
athena:CreateNamedQuery
```

### Read
```json
athena:GetNamedQuery
```

### List
```json
athena:ListNamedQueries
```

### Delete
```json
athena:DeleteNamedQuery
```
