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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversion.html"><code>AWS::Glue::SchemaVersion</code></a>.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="create_resource" /></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Schema, SchemaDefinition, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>schema_version</code>.
```sql
SELECT
region,
schema,
schema_definition,
version_id
FROM awscc.glue.schema_versions
WHERE region = 'us-east-1' AND data__Identifier = '<VersionId>';
```

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
'{{ Schema }}',
 '{{ SchemaDefinition }}',
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
 '{{ Schema }}',
 '{{ SchemaDefinition }}',
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
      - name: Schema
        value:
          SchemaArn: '{{ SchemaArn }}'
          SchemaName: '{{ SchemaName }}'
          RegistryName: '{{ RegistryName }}'
      - name: SchemaDefinition
        value: '{{ SchemaDefinition }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.glue.schema_versions
WHERE data__Identifier = '<VersionId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>schema_versions</code> resource, the following permissions are required:

### Create
```json
glue:RegisterSchemaVersion,
glue:GetSchemaVersion,
glue:GetSchemaByDefinition
```

### Read
```json
glue:GetSchemaVersion
```

### Delete
```json
glue:DeleteSchemaVersions,
glue:GetSchemaVersion
```

### List
```json
glue:ListSchemaVersions
```
