---
title: schema_version_metadata
hide_title: false
hide_table_of_contents: false
keywords:
  - schema_version_metadata
  - glue
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

Creates, updates, deletes or gets a <code>schema_version_metadatum</code> resource or lists <code>schema_version_metadata</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>schema_version_metadata</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>This resource adds Key-Value metadata to a Schema version of Glue Schema Registry.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.glue.schema_version_metadata" /></td></tr>
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
    "name": "schema_version_id",
    "type": "string",
    "description": "Represents the version ID associated with the schema version."
  },
  {
    "name": "key",
    "type": "string",
    "description": "Metadata key"
  },
  {
    "name": "value",
    "type": "string",
    "description": "Metadata value"
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
    "name": "schema_version_id",
    "type": "string",
    "description": "Represents the version ID associated with the schema version."
  },
  {
    "name": "key",
    "type": "string",
    "description": "Metadata key"
  },
  {
    "name": "value",
    "type": "string",
    "description": "Metadata value"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversionmetadatum.html"><code>AWS::Glue::SchemaVersionMetadata</code></a>.

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
    <td><code>schema_version_metadata</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="SchemaVersionId, Key, Value, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>schema_version_metadata</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>schema_version_metadata_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>schema_version_metadata</code></td>
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

Gets all properties from an individual <code>schema_version_metadatum</code>.
```sql
SELECT
  region,
  schema_version_id,
  key,
  value
FROM awscc.glue.schema_version_metadata
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ schema_version_id }}|{{ key }}|{{ value }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>schema_version_metadata</code> in a region.
```sql
SELECT
  region,
  schema_version_id,
  key,
  value
FROM awscc.glue.schema_version_metadata_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>schema_version_metadatum</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.glue.schema_version_metadata (
  SchemaVersionId,
  Key,
  Value,
  region
)
SELECT
  '{{ schema_version_id }}',
  '{{ key }}',
  '{{ value }}',
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
INSERT INTO awscc.glue.schema_version_metadata (
  SchemaVersionId,
  Key,
  Value,
  region
)
SELECT
  '{{ schema_version_id }}',
  '{{ key }}',
  '{{ value }}',
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
  - name: schema_version_metadatum
    props:
      - name: schema_version_id
        value: '{{ schema_version_id }}'
      - name: key
        value: '{{ key }}'
      - name: value
        value: '{{ value }}'
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.glue.schema_version_metadata
WHERE
  Identifier = '{{ schema_version_id }}|{{ key }}|{{ value }}' AND
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

To operate on the <code>schema_version_metadata</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
glue:putSchemaVersionMetadata
```

</TabItem>
<TabItem value="read">

```json
glue:querySchemaVersionMetadata
```

</TabItem>
<TabItem value="delete">

```json
glue:removeSchemaVersionMetadata
```

</TabItem>
<TabItem value="list">

```json
glue:querySchemaVersionMetadata
```

</TabItem>
</Tabs>