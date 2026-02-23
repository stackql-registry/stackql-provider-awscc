---
title: tables
hide_title: false
hide_table_of_contents: false
keywords:
  - tables
  - s3tables
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

Creates, updates, deletes or gets a <code>table</code> resource or lists <code>tables</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>tables</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::S3Tables::Table</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.s3tables.tables" /></td></tr>
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
    "name": "without_metadata",
    "type": "string",
    "description": "Indicates that you don't want to specify a schema for the table. This property is mutually exclusive to 'IcebergMetadata', and its only possible value is 'Yes'."
  },
  {
    "name": "compaction",
    "type": "object",
    "description": "Settings governing the Compaction maintenance action. Contains details about the compaction settings for an Iceberg table.",
    "children": [
      {
        "name": "status",
        "type": "string",
        "description": "Indicates whether the Compaction maintenance action is enabled."
      },
      {
        "name": "target_file_size_mb",
        "type": "integer",
        "description": "The target file size for the table in MB."
      }
    ]
  },
  {
    "name": "namespace",
    "type": "string",
    "description": "The namespace that the table belongs to."
  },
  {
    "name": "table_name",
    "type": "string",
    "description": "The name for the table."
  },
  {
    "name": "table_bucket_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the specified table bucket."
  },
  {
    "name": "version_token",
    "type": "string",
    "description": "The version token of the table"
  },
  {
    "name": "table_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the specified table."
  },
  {
    "name": "open_table_format",
    "type": "string",
    "description": "Format of the table."
  },
  {
    "name": "iceberg_metadata",
    "type": "object",
    "description": "Contains details about the metadata for an Iceberg table.",
    "children": [
      {
        "name": "iceberg_schema",
        "type": "object",
        "description": "Contains details about the schema for an Iceberg table",
        "children": [
          {
            "name": "schema_field_list",
            "type": "array",
            "description": "Contains details about the schema for an Iceberg table",
            "children": [
              {
                "name": "type",
                "type": "string",
                "description": "The field type"
              },
              {
                "name": "required",
                "type": "boolean",
                "description": "A Boolean value that specifies whether values are required for each row in this field"
              },
              {
                "name": "name",
                "type": "string",
                "description": "The name of the field"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "warehouse_location",
    "type": "string",
    "description": "The warehouse location of the table."
  },
  {
    "name": "snapshot_management",
    "type": "object",
    "description": "Contains details about the snapshot management settings for an Iceberg table. A snapshot is expired when it exceeds MinSnapshotsToKeep and MaxSnapshotAgeHours.",
    "children": [
      {
        "name": "status",
        "type": "string",
        "description": "Indicates whether the SnapshotManagement maintenance action is enabled."
      },
      {
        "name": "min_snapshots_to_keep",
        "type": "integer",
        "description": "The minimum number of snapshots to keep."
      },
      {
        "name": "max_snapshot_age_hours",
        "type": "integer",
        "description": "The maximum age of a snapshot before it can be expired."
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
    "name": "table_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the specified table."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-table.html"><code>AWS::S3Tables::Table</code></a>.

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
    <td><code>tables</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="TableBucketARN, Namespace, TableName, OpenTableFormat, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>tables</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>tables</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>tables_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>tables</code></td>
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

Gets all properties from an individual <code>table</code>.
```sql
SELECT
region,
without_metadata,
compaction,
namespace,
table_name,
table_bucket_arn,
version_token,
table_arn,
open_table_format,
iceberg_metadata,
warehouse_location,
snapshot_management
FROM awscc.s3tables.tables
WHERE region = 'us-east-1' AND Identifier = '{{ table_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>tables</code> in a region.
```sql
SELECT
region,
table_arn
FROM awscc.s3tables.tables_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>table</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.s3tables.tables (
 Namespace,
 TableName,
 TableBucketARN,
 OpenTableFormat,
 region
)
SELECT
'{{ namespace }}',
 '{{ table_name }}',
 '{{ table_bucket_arn }}',
 '{{ open_table_format }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.s3tables.tables (
 WithoutMetadata,
 Compaction,
 Namespace,
 TableName,
 TableBucketARN,
 OpenTableFormat,
 IcebergMetadata,
 SnapshotManagement,
 region
)
SELECT
 '{{ without_metadata }}',
 '{{ compaction }}',
 '{{ namespace }}',
 '{{ table_name }}',
 '{{ table_bucket_arn }}',
 '{{ open_table_format }}',
 '{{ iceberg_metadata }}',
 '{{ snapshot_management }}',
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
  - name: table
    props:
      - name: without_metadata
        value: '{{ without_metadata }}'
      - name: compaction
        value:
          status: '{{ status }}'
          target_file_size_mb: '{{ target_file_size_mb }}'
      - name: namespace
        value: '{{ namespace }}'
      - name: table_name
        value: '{{ table_name }}'
      - name: table_bucket_arn
        value: '{{ table_bucket_arn }}'
      - name: open_table_format
        value: '{{ open_table_format }}'
      - name: iceberg_metadata
        value:
          iceberg_schema:
            schema_field_list:
              - type: '{{ type }}'
                required: '{{ required }}'
                name: '{{ name }}'
      - name: snapshot_management
        value:
          status: '{{ status }}'
          min_snapshots_to_keep: '{{ min_snapshots_to_keep }}'
          max_snapshot_age_hours: '{{ max_snapshot_age_hours }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>table</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.s3tables.tables
SET PatchDocument = string('{{ {
    "Compaction": compaction,
    "Namespace": namespace,
    "TableName": table_name,
    "SnapshotManagement": snapshot_management
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ table_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.s3tables.tables
WHERE Identifier = '{{ table_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>tables</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="read">

```json
s3tables:GetTable,
s3tables:GetTableMaintenanceConfiguration
```

</TabItem>
<TabItem value="create">

```json
s3tables:CreateTable,
s3tables:PutTableData,
s3tables:GetTable,
s3tables:PutTableMaintenanceConfiguration
```

</TabItem>
<TabItem value="update">

```json
s3tables:GetTable,
s3tables:RenameTable,
s3tables:PutTableMaintenanceConfiguration
```

</TabItem>
<TabItem value="list">

```json
s3tables:ListTables,
s3tables:ListTableBuckets,
s3tables:ListNamespaces
```

</TabItem>
<TabItem value="delete">

```json
s3tables:GetTable,
s3tables:DeleteTable
```

</TabItem>
</Tabs>