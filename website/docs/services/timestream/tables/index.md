---
title: tables
hide_title: false
hide_table_of_contents: false
keywords:
  - tables
  - timestream
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
<tr><td><b>Description</b></td><td>The AWS::Timestream::Table resource creates a Timestream Table.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.timestream.tables" /></td></tr>
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
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": "The table name exposed as a read-only attribute."
  },
  {
    "name": "database_name",
    "type": "string",
    "description": "The name for the database which the table to be created belongs to."
  },
  {
    "name": "table_name",
    "type": "string",
    "description": "The name for the table. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the table name."
  },
  {
    "name": "retention_properties",
    "type": "object",
    "description": "The retention duration of the memory store and the magnetic store.",
    "children": [
      {
        "name": "memory_store_retention_period_in_hours",
        "type": "string",
        "description": "The duration for which data must be stored in the memory store."
      },
      {
        "name": "magnetic_store_retention_period_in_days",
        "type": "string",
        "description": "The duration for which data must be stored in the magnetic store."
      }
    ]
  },
  {
    "name": "schema",
    "type": "object",
    "description": "A Schema specifies the expected data model of the table.",
    "children": [
      {
        "name": "composite_partition_key",
        "type": "array",
        "description": "A list of partition keys defining the attributes used to partition the table data. The order of the list determines the partition hierarchy. The name and type of each partition key as well as the partition key order cannot be changed after the table is created. However, the enforcement level of each partition key can be changed.",
        "children": [
          {
            "name": "type",
            "type": "string",
            "description": "The type of the partition key. Options are DIMENSION (dimension key) and MEASURE (measure key)."
          },
          {
            "name": "name",
            "type": "string",
            "description": "The name of the attribute used for a dimension key."
          },
          {
            "name": "enforcement_in_record",
            "type": "string",
            "description": "The level of enforcement for the specification of a dimension key in ingested records. Options are REQUIRED (dimension key must be specified) and OPTIONAL (dimension key does not have to be specified)."
          }
        ]
      }
    ]
  },
  {
    "name": "magnetic_store_write_properties",
    "type": "object",
    "description": "The properties that determine whether magnetic store writes are enabled.",
    "children": [
      {
        "name": "enable_magnetic_store_writes",
        "type": "boolean",
        "description": "Boolean flag indicating whether magnetic store writes are enabled."
      },
      {
        "name": "magnetic_store_rejected_data_location",
        "type": "object",
        "description": "Location to store information about records that were asynchronously rejected during magnetic store writes.",
        "children": [
          {
            "name": "s3_configuration",
            "type": "object",
            "description": "S3 configuration for location to store rejections from magnetic store writes",
            "children": [
              {
                "name": "bucket_name",
                "type": "string",
                "description": "The bucket name used to store the data."
              },
              {
                "name": "object_key_prefix",
                "type": "string",
                "description": "String used to prefix all data in the bucket."
              },
              {
                "name": "encryption_option",
                "type": "string",
                "description": "Either SSE&#95;KMS or SSE&#95;S3."
              },
              {
                "name": "kms_key_id",
                "type": "string",
                "description": "Must be provided if SSE&#95;KMS is specified as the encryption option"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "string",
        "description": ""
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
    "name": "name",
    "type": "string",
    "description": "The table name exposed as a read-only attribute."
  },
  {
    "name": "database_name",
    "type": "string",
    "description": "The name for the database which the table to be created belongs to."
  },
  {
    "name": "table_name",
    "type": "string",
    "description": "The name for the table. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the table name."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html"><code>AWS::Timestream::Table</code></a>.

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
    <td><CopyableCode code="DatabaseName, region" /></td>
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
arn,
name,
database_name,
table_name,
retention_properties,
schema,
magnetic_store_write_properties,
tags
FROM awscc.timestream.tables
WHERE region = 'us-east-1' AND Identifier = '<DatabaseName>|<TableName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>tables</code> in a region.
```sql
SELECT
region,
database_name,
table_name
FROM awscc.timestream.tables_list_only
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
INSERT INTO awscc.timestream.tables (
 DatabaseName,
 region
)
SELECT 
'{{ DatabaseName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.timestream.tables (
 DatabaseName,
 TableName,
 RetentionProperties,
 Schema,
 MagneticStoreWriteProperties,
 Tags,
 region
)
SELECT 
 '{{ DatabaseName }}',
 '{{ TableName }}',
 '{{ RetentionProperties }}',
 '{{ Schema }}',
 '{{ MagneticStoreWriteProperties }}',
 '{{ Tags }}',
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
      - name: DatabaseName
        value: '{{ DatabaseName }}'
      - name: TableName
        value: '{{ TableName }}'
      - name: RetentionProperties
        value:
          MemoryStoreRetentionPeriodInHours: '{{ MemoryStoreRetentionPeriodInHours }}'
          MagneticStoreRetentionPeriodInDays: '{{ MagneticStoreRetentionPeriodInDays }}'
      - name: Schema
        value:
          CompositePartitionKey:
            - Type: '{{ Type }}'
              Name: '{{ Name }}'
              EnforcementInRecord: '{{ EnforcementInRecord }}'
      - name: MagneticStoreWriteProperties
        value:
          EnableMagneticStoreWrites: '{{ EnableMagneticStoreWrites }}'
          MagneticStoreRejectedDataLocation:
            S3Configuration:
              BucketName: '{{ BucketName }}'
              ObjectKeyPrefix: '{{ ObjectKeyPrefix }}'
              EncryptionOption: '{{ EncryptionOption }}'
              KmsKeyId: '{{ KmsKeyId }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.timestream.tables
SET PatchDocument = string('{{ {
    "RetentionProperties": retention_properties,
    "Schema": schema,
    "MagneticStoreWriteProperties": magnetic_store_write_properties,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<DatabaseName>|<TableName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.timestream.tables
WHERE Identifier = '<DatabaseName|TableName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>tables</code> resource, the following permissions are required:

### Create
```json
timestream:CreateTable,
timestream:DescribeEndpoints,
timestream:TagResource,
s3:PutObject,
s3:GetObject,
s3:GetBucketAcl,
kms:GenerateDataKey,
kms:GenerateDataKeyWithoutPlaintext,
kms:DescribeKey,
kms:Encrypt
```

### Read
```json
timestream:DescribeTable,
timestream:DescribeEndpoints,
timestream:ListTagsForResource
```

### Update
```json
timestream:UpdateTable,
timestream:DescribeEndpoints,
timestream:TagResource,
timestream:UntagResource,
s3:PutObject,
s3:GetObject,
s3:GetBucketAcl,
kms:GenerateDataKey,
kms:GenerateDataKeyWithoutPlaintext,
kms:DescribeKey,
kms:Encrypt
```

### Delete
```json
timestream:DeleteTable,
timestream:DescribeEndpoints,
timestream:DescribeTable
```

### List
```json
timestream:ListTables,
timestream:DescribeEndpoints
```
