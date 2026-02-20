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
WHERE region = 'us-east-1' AND Identifier = '<SchemaVersionId>|<Key>|<Value>';
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
WHERE region = 'us-east-1';
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
'{{ SchemaVersionId }}',
 '{{ Key }}',
 '{{ Value }}',
'{{ region }}';
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
 '{{ SchemaVersionId }}',
 '{{ Key }}',
 '{{ Value }}',
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
  - name: schema_version_metadatum
    props:
      - name: SchemaVersionId
        value: '{{ SchemaVersionId }}'
      - name: Key
        value: '{{ Key }}'
      - name: Value
        value: '{{ Value }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.glue.schema_version_metadata
WHERE Identifier = '<SchemaVersionId|Key|Value>'
AND region = 'us-east-1';
```

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