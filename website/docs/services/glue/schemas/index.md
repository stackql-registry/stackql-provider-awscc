---
title: schemas
hide_title: false
hide_table_of_contents: false
keywords:
  - schemas
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

import CodeBlock from '@theme/CodeBlock';
import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>schema</code> resource or lists <code>schemas</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>schemas</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>This resource represents a schema of Glue Schema Registry.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.glue.schemas" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": "Amazon Resource Name for the Schema."
  },
  {
    "name": "registry",
    "type": "object",
    "description": "Identifier for the registry which the schema is part of.",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": "Name of the registry in which the schema will be created."
      },
      {
        "name": "arn",
        "type": "string",
        "description": "Amazon Resource Name for the Registry."
      }
    ]
  },
  {
    "name": "name",
    "type": "string",
    "description": "Name of the schema."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description of the schema. If description is not provided, there will not be any default value for this."
  },
  {
    "name": "data_format",
    "type": "string",
    "description": "Data format name to use for the schema. Accepted values: 'AVRO', 'JSON', 'PROTOBUF'"
  },
  {
    "name": "compatibility",
    "type": "string",
    "description": "Compatibility setting for the schema."
  },
  {
    "name": "schema_definition",
    "type": "string",
    "description": "Definition for the initial schema version in plain-text."
  },
  {
    "name": "checkpoint_version",
    "type": "object",
    "description": "Specify checkpoint version for update. This is only required to update the Compatibility.",
    "children": [
      {
        "name": "is_latest",
        "type": "boolean",
        "description": "Indicates if the latest version needs to be updated."
      },
      {
        "name": "version_number",
        "type": "integer",
        "description": "Indicates the version number in the schema to update."
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "List of tags to tag the schema",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "A key to identify the tag."
      },
      {
        "name": "value",
        "type": "string",
        "description": "Corresponding tag value for the key."
      }
    ]
  },
  {
    "name": "initial_schema_version_id",
    "type": "string",
    "description": "Represents the version ID associated with the initial schema version."
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
    "name": "arn",
    "type": "string",
    "description": "Amazon Resource Name for the Schema."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schema.html"><code>AWS::Glue::Schema</code></a>.

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
    <td><code>schemas</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, DataFormat, Compatibility, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>schemas</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>schemas</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>schemas_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>schemas</code></td>
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

Gets all properties from an individual <code>schema</code>.
```sql
SELECT
  region,
  arn,
  registry,
  name,
  description,
  data_format,
  compatibility,
  schema_definition,
  checkpoint_version,
  tags,
  initial_schema_version_id
FROM awscc.glue.schemas
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>schemas</code> in a region.
```sql
SELECT
  region,
  arn
FROM awscc.glue.schemas_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>schema</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.glue.schemas (
  Name,
  DataFormat,
  Compatibility,
  region
)
SELECT
  '{{ name }}',
  '{{ data_format }}',
  '{{ compatibility }}',
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
INSERT INTO awscc.glue.schemas (
  Registry,
  Name,
  Description,
  DataFormat,
  Compatibility,
  SchemaDefinition,
  CheckpointVersion,
  Tags,
  region
)
SELECT
  '{{ registry }}',
  '{{ name }}',
  '{{ description }}',
  '{{ data_format }}',
  '{{ compatibility }}',
  '{{ schema_definition }}',
  '{{ checkpoint_version }}',
  '{{ tags }}',
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

<CodeBlock language="yaml">{`version: 1
name: stack name
description: stack description
providers:
  - aws
globals:
  - name: region
    value: '{{ vars.AWS_REGION }}'
resources:
  - name: schema
    props:
      - name: registry
        value:
          name: '{{ name }}'
          arn: '{{ arn }}'
      - name: name
        value: '{{ name }}'
      - name: description
        value: '{{ description }}'
      - name: data_format
        value: '{{ data_format }}'
      - name: compatibility
        value: '{{ compatibility }}'
      - name: schema_definition
        value: '{{ schema_definition }}'
      - name: checkpoint_version
        value:
          is_latest: '{{ is_latest }}'
          version_number: '{{ version_number }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>schema</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.glue.schemas
SET PatchDocument = string('{{ {
    "Description": description,
    "Compatibility": compatibility,
    "CheckpointVersion": checkpoint_version,
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ arn }}'
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
DELETE FROM awscc.glue.schemas
WHERE
  Identifier = '{{ arn }}' AND
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

To operate on the <code>schemas</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
glue:CreateSchema,
glue:TagResource
```

</TabItem>
<TabItem value="read">

```json
glue:GetSchemaVersion,
glue:GetSchema,
glue:GetTags
```

</TabItem>
<TabItem value="delete">

```json
glue:DeleteSchema,
glue:GetSchema
```

</TabItem>
<TabItem value="update">

```json
glue:UpdateSchema,
glue:GetSchemaVersion,
glue:GetSchema,
glue:GetTags,
glue:TagResource,
glue:UntagResource
```

</TabItem>
<TabItem value="list">

```json
glue:ListSchemas
```

</TabItem>
</Tabs>