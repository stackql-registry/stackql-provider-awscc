---
title: query_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - query_definitions
  - logs
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

Creates, updates, deletes or gets a <code>query_definition</code> resource or lists <code>query_definitions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>query_definitions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The resource schema for AWSLogs QueryDefinition</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.logs.query_definitions" /></td></tr>
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
    "description": "A name for the saved query definition"
  },
  {
    "name": "query_string",
    "type": "string",
    "description": "The query string to use for this definition"
  },
  {
    "name": "log_group_names",
    "type": "array",
    "description": "Optionally define specific log groups as part of your query definition"
  },
  {
    "name": "query_definition_id",
    "type": "string",
    "description": "Unique identifier of a query definition"
  },
  {
    "name": "query_language",
    "type": "string",
    "description": "Query language of the query string. Possible values are CWLI, SQL, PPL, with CWLI being the default."
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
    "name": "query_definition_id",
    "type": "string",
    "description": "Unique identifier of a query definition"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-querydefinition.html"><code>AWS::Logs::QueryDefinition</code></a>.

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
    <td><code>query_definitions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, QueryString, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>query_definitions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>query_definitions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>query_definitions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>query_definitions</code></td>
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

Gets all properties from an individual <code>query_definition</code>.
```sql
SELECT
region,
name,
query_string,
log_group_names,
query_definition_id,
query_language
FROM awscc.logs.query_definitions
WHERE region = 'us-east-1' AND Identifier = '{{ query_definition_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>query_definitions</code> in a region.
```sql
SELECT
region,
query_definition_id
FROM awscc.logs.query_definitions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>query_definition</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.logs.query_definitions (
 Name,
 QueryString,
 region
)
SELECT
'{{ name }}',
 '{{ query_string }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.logs.query_definitions (
 Name,
 QueryString,
 LogGroupNames,
 QueryLanguage,
 region
)
SELECT
 '{{ name }}',
 '{{ query_string }}',
 '{{ log_group_names }}',
 '{{ query_language }}',
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
  - name: query_definition
    props:
      - name: name
        value: '{{ name }}'
      - name: query_string
        value: '{{ query_string }}'
      - name: log_group_names
        value:
          - '{{ log_group_names[0] }}'
      - name: query_language
        value: '{{ query_language }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>query_definition</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.logs.query_definitions
SET PatchDocument = string('{{ {
    "Name": name,
    "QueryString": query_string,
    "LogGroupNames": log_group_names,
    "QueryLanguage": query_language
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ query_definition_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.logs.query_definitions
WHERE Identifier = '{{ query_definition_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>query_definitions</code> resource, the following permissions are required:

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
logs:PutQueryDefinition
```

</TabItem>
<TabItem value="read">

```json
logs:DescribeQueryDefinitions
```

</TabItem>
<TabItem value="update">

```json
logs:PutQueryDefinition
```

</TabItem>
<TabItem value="delete">

```json
logs:DeleteQueryDefinition
```

</TabItem>
<TabItem value="list">

```json
logs:DescribeQueryDefinitions
```

</TabItem>
</Tabs>