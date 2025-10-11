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
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="without_metadata" /></td><td><code>string</code></td><td>Indicates that you don't want to specify a schema for the table. This property is mutually exclusive to 'IcebergMetadata', and its only possible value is 'Yes'.</td></tr>
<tr><td><CopyableCode code="compaction" /></td><td><code>object</code></td><td>Settings governing the Compaction maintenance action. Contains details about the compaction settings for an Iceberg table.</td></tr>
<tr><td><CopyableCode code="namespace" /></td><td><code>string</code></td><td>The namespace that the table belongs to.</td></tr>
<tr><td><CopyableCode code="table_name" /></td><td><code>string</code></td><td>The name for the table.</td></tr>
<tr><td><CopyableCode code="table_bucket_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the specified table bucket.</td></tr>
<tr><td><CopyableCode code="version_token" /></td><td><code>string</code></td><td>The version token of the table</td></tr>
<tr><td><CopyableCode code="table_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the specified table.</td></tr>
<tr><td><CopyableCode code="open_table_format" /></td><td><code>string</code></td><td>Format of the table.</td></tr>
<tr><td><CopyableCode code="iceberg_metadata" /></td><td><code>object</code></td><td>Contains details about the metadata for an Iceberg table.</td></tr>
<tr><td><CopyableCode code="warehouse_location" /></td><td><code>string</code></td><td>The warehouse location of the table.</td></tr>
<tr><td><CopyableCode code="snapshot_management" /></td><td><code>object</code></td><td>Contains details about the snapshot management settings for an Iceberg table. A snapshot is expired when it exceeds MinSnapshotsToKeep and MaxSnapshotAgeHours.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-table.html"><code>AWS::S3Tables::Table</code></a>.

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
    <td><CopyableCode code="TableBucketARN, Namespace, TableName, OpenTableFormat, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
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
Gets all <code>tables</code> in a region.
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
WHERE region = 'us-east-1';
```
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
WHERE region = 'us-east-1' AND data__Identifier = '<TableARN>';
```

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
'{{ Namespace }}',
 '{{ TableName }}',
 '{{ TableBucketARN }}',
 '{{ OpenTableFormat }}',
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
 '{{ WithoutMetadata }}',
 '{{ Compaction }}',
 '{{ Namespace }}',
 '{{ TableName }}',
 '{{ TableBucketARN }}',
 '{{ OpenTableFormat }}',
 '{{ IcebergMetadata }}',
 '{{ SnapshotManagement }}',
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
      - name: WithoutMetadata
        value: '{{ WithoutMetadata }}'
      - name: Compaction
        value:
          Status: '{{ Status }}'
          TargetFileSizeMB: '{{ TargetFileSizeMB }}'
      - name: Namespace
        value: '{{ Namespace }}'
      - name: TableName
        value: '{{ TableName }}'
      - name: TableBucketARN
        value: '{{ TableBucketARN }}'
      - name: OpenTableFormat
        value: '{{ OpenTableFormat }}'
      - name: IcebergMetadata
        value:
          IcebergSchema:
            SchemaFieldList:
              - Type: '{{ Type }}'
                Required: '{{ Required }}'
                Name: '{{ Name }}'
      - name: SnapshotManagement
        value:
          Status: '{{ Status }}'
          MinSnapshotsToKeep: '{{ MinSnapshotsToKeep }}'
          MaxSnapshotAgeHours: '{{ MaxSnapshotAgeHours }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.s3tables.tables
WHERE data__Identifier = '<TableARN>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>tables</code> resource, the following permissions are required:

### Read
```json
s3tables:GetTable,
s3tables:GetTableMaintenanceConfiguration
```

### Create
```json
s3tables:CreateTable,
s3tables:PutTableData,
s3tables:GetTable,
s3tables:PutTableMaintenanceConfiguration
```

### Update
```json
s3tables:GetTable,
s3tables:RenameTable,
s3tables:PutTableMaintenanceConfiguration
```

### List
```json
s3tables:ListTables,
s3tables:ListTableBuckets,
s3tables:ListNamespaces
```

### Delete
```json
s3tables:GetTable,
s3tables:DeleteTable
```
