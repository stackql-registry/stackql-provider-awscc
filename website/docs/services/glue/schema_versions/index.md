---
title: schema_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - schema_versions
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

Creates, updates, deletes or gets a <code>schema_version</code> resource or lists <code>schema_versions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>schema_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>This resource represents an individual schema version of a schema defined in Glue Schema Registry.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.glue.schema_versions" /></td></tr>
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
    "name": "schema",
    "type": "object",
    "description": "Identifier for the schema where the schema version will be created.",
    "children": [
      {
        "name": "schema_arn",
        "type": "string",
        "description": "Amazon Resource Name for the Schema. This attribute can be used to uniquely represent the Schema."
      },
      {
        "name": "schema_name",
        "type": "string",
        "description": "Name of the schema. This parameter requires RegistryName to be provided."
      },
      {
        "name": "registry_name",
        "type": "string",
        "description": "Name of the registry to identify where the Schema is located."
      }
    ]
  },
  {
    "name": "schema_definition",
    "type": "string",
    "description": "Complete definition of the schema in plain-text."
  },
  {
    "name": "version_id",
    "type": "string",
    "description": "Represents the version ID associated with the schema version."
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
    "name": "version_id",
    "type": "string",
    "description": "Represents the version ID associated with the schema version."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversion.html"><code>AWS::Glue::SchemaVersion</code></a>.

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
    <td><code>schema_versions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Schema, SchemaDefinition, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>schema_versions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>schema_versions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>schema_versions</code></td>
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

Gets all properties from an individual <code>schema_version</code>.
```sql
SELECT
region,
schema,
schema_definition,
version_id
FROM awscc.glue.schema_versions
WHERE region = 'us-east-1' AND Identifier = '{{ version_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>schema_versions</code> in a region.
```sql
SELECT
region,
version_id
FROM awscc.glue.schema_versions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>schema_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.glue.schema_versions (
 Schema,
 SchemaDefinition,
 region
)
SELECT
'{{ schema }}',
 '{{ schema_definition }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.glue.schema_versions (
 Schema,
 SchemaDefinition,
 region
)
SELECT
 '{{ schema }}',
 '{{ schema_definition }}',
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
  - name: schema_version
    props:
      - name: schema
        value:
          schema_arn: '{{ schema_arn }}'
          schema_name: '{{ schema_name }}'
          registry_name: '{{ registry_name }}'
      - name: schema_definition
        value: '{{ schema_definition }}'
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.glue.schema_versions
WHERE Identifier = '{{ version_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>schema_versions</code> resource, the following permissions are required:

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
glue:RegisterSchemaVersion,
glue:GetSchemaVersion,
glue:GetSchemaByDefinition
```

</TabItem>
<TabItem value="read">

```json
glue:GetSchemaVersion
```

</TabItem>
<TabItem value="delete">

```json
glue:DeleteSchemaVersions,
glue:GetSchemaVersion
```

</TabItem>
<TabItem value="list">

```json
glue:ListSchemaVersions
```

</TabItem>
</Tabs>