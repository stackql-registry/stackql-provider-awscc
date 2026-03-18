---
title: prepared_statements
hide_title: false
hide_table_of_contents: false
keywords:
  - prepared_statements
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

Creates, updates, deletes or gets a <code>prepared_statement</code> resource or lists <code>prepared_statements</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>prepared_statements</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::Athena::PreparedStatement</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.athena.prepared_statements" /></td></tr>
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
    "name": "statement_name",
    "type": "string",
    "description": "The name of the prepared statement."
  },
  {
    "name": "work_group",
    "type": "string",
    "description": "The name of the workgroup to which the prepared statement belongs."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the prepared statement."
  },
  {
    "name": "query_statement",
    "type": "string",
    "description": "The query string for the prepared statement."
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
    "name": "statement_name",
    "type": "string",
    "description": "The name of the prepared statement."
  },
  {
    "name": "work_group",
    "type": "string",
    "description": "The name of the workgroup to which the prepared statement belongs."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-preparedstatement.html"><code>AWS::Athena::PreparedStatement</code></a>.

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
    <td><code>prepared_statements</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="StatementName, WorkGroup, QueryStatement, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>prepared_statements</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>prepared_statements</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>prepared_statements_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>prepared_statements</code></td>
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

Gets all properties from an individual <code>prepared_statement</code>.
```sql
SELECT
  region,
  statement_name,
  work_group,
  description,
  query_statement
FROM awscc.athena.prepared_statements
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ statement_name }}|{{ work_group }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>prepared_statements</code> in a region.
```sql
SELECT
  region,
  statement_name,
  work_group
FROM awscc.athena.prepared_statements_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>prepared_statement</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.athena.prepared_statements (
  StatementName,
  WorkGroup,
  QueryStatement,
  region
)
SELECT
  '{{ statement_name }}',
  '{{ work_group }}',
  '{{ query_statement }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.athena.prepared_statements (
  StatementName,
  WorkGroup,
  Description,
  QueryStatement,
  region
)
SELECT
  '{{ statement_name }}',
  '{{ work_group }}',
  '{{ description }}',
  '{{ query_statement }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
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
  - name: prepared_statement
    props:
      - name: statement_name
        value: '{{ statement_name }}'
      - name: work_group
        value: '{{ work_group }}'
      - name: description
        value: '{{ description }}'
      - name: query_statement
        value: '{{ query_statement }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>prepared_statement</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.athena.prepared_statements
SET PatchDocument = string('{{ {
    "Description": description,
    "QueryStatement": query_statement
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ statement_name }}|{{ work_group }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.athena.prepared_statements
WHERE
  Identifier = '{{ statement_name }}|{{ work_group }}' AND
  region = '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

## Permissions

To operate on the <code>prepared_statements</code> resource, the following permissions are required:

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
athena:CreatePreparedStatement,
athena:GetPreparedStatement
```

</TabItem>
<TabItem value="read">

```json
athena:GetPreparedStatement
```

</TabItem>
<TabItem value="update">

```json
athena:UpdatePreparedStatement
```

</TabItem>
<TabItem value="delete">

```json
athena:DeletePreparedStatement,
athena:GetPreparedStatement
```

</TabItem>
<TabItem value="list">

```json
athena:ListPreparedStatements
```

</TabItem>
</Tabs>