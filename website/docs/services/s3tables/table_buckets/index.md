---
title: table_buckets
hide_title: false
hide_table_of_contents: false
keywords:
  - table_buckets
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

Creates, updates, deletes or gets a <code>table_bucket</code> resource or lists <code>table_buckets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>table_buckets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Creates an Amazon S3 Tables table bucket in the same AWS Region where you create the AWS CloudFormation stack.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.s3tables.table_buckets" /></td></tr>
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
    "name": "table_bucket_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the specified table bucket."
  },
  {
    "name": "table_bucket_name",
    "type": "string",
    "description": "A name for the table bucket."
  },
  {
    "name": "unreferenced_file_removal",
    "type": "object",
    "description": "Settings governing the Unreferenced File Removal maintenance action. Unreferenced file removal identifies and deletes all objects that are not referenced by any table snapshots.",
    "children": [
      {
        "name": "status",
        "type": "string",
        "description": "Indicates whether the Unreferenced File Removal maintenance action is enabled."
      },
      {
        "name": "unreferenced_days",
        "type": "integer",
        "description": "For any object not referenced by your table and older than the UnreferencedDays property, S3 creates a delete marker and marks the object version as noncurrent."
      },
      {
        "name": "noncurrent_days",
        "type": "integer",
        "description": "S3 permanently deletes noncurrent objects after the number of days specified by the NoncurrentDays property."
      }
    ]
  },
  {
    "name": "encryption_configuration",
    "type": "object",
    "description": "Specifies encryption settings for the table bucket",
    "children": [
      {
        "name": "sse_algorithm",
        "type": "string",
        "description": "Server-side encryption algorithm"
      },
      {
        "name": "kms_key_arn",
        "type": "string",
        "description": "ARN of the KMS key to use for encryption"
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
    "name": "table_bucket_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the specified table bucket."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-tablebucket.html"><code>AWS::S3Tables::TableBucket</code></a>.

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
    <td><code>table_buckets</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="TableBucketName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>table_buckets</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>table_buckets</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>table_buckets_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>table_buckets</code></td>
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

Gets all properties from an individual <code>table_bucket</code>.
```sql
SELECT
region,
table_bucket_arn,
table_bucket_name,
unreferenced_file_removal,
encryption_configuration
FROM awscc.s3tables.table_buckets
WHERE region = 'us-east-1' AND Identifier = '<TableBucketARN>';
```
</TabItem>
<TabItem value="list">

Lists all <code>table_buckets</code> in a region.
```sql
SELECT
region,
table_bucket_arn
FROM awscc.s3tables.table_buckets_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>table_bucket</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.s3tables.table_buckets (
 TableBucketName,
 region
)
SELECT 
'{{ TableBucketName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.s3tables.table_buckets (
 TableBucketName,
 UnreferencedFileRemoval,
 EncryptionConfiguration,
 region
)
SELECT 
 '{{ TableBucketName }}',
 '{{ UnreferencedFileRemoval }}',
 '{{ EncryptionConfiguration }}',
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
  - name: table_bucket
    props:
      - name: TableBucketName
        value: '{{ TableBucketName }}'
      - name: UnreferencedFileRemoval
        value:
          Status: '{{ Status }}'
          UnreferencedDays: '{{ UnreferencedDays }}'
          NoncurrentDays: '{{ NoncurrentDays }}'
      - name: EncryptionConfiguration
        value:
          SSEAlgorithm: '{{ SSEAlgorithm }}'
          KMSKeyArn: '{{ KMSKeyArn }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.s3tables.table_buckets
SET PatchDocument = string('{{ {
    "UnreferencedFileRemoval": unreferenced_file_removal,
    "EncryptionConfiguration": encryption_configuration
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<TableBucketARN>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.s3tables.table_buckets
WHERE Identifier = '<TableBucketARN>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>table_buckets</code> resource, the following permissions are required:

### Create
```json
s3tables:CreateTableBucket,
s3tables:PutTableBucketMaintenanceConfiguration,
s3tables:PutTableBucketEncryption,
s3tables:GetTableBucket,
s3tables:GetTableBucketMaintenanceConfiguration,
s3tables:GetTableBucketEncryption,
kms:DescribeKey
```

### Read
```json
s3tables:GetTableBucket,
s3tables:GetTableBucketMaintenanceConfiguration,
s3tables:GetTableBucketEncryption
```

### Update
```json
s3tables:PutTableBucketMaintenanceConfiguration,
s3tables:PutTableBucketEncryption,
s3tables:GetTableBucketMaintenanceConfiguration,
s3tables:GetTableBucketEncryption,
s3tables:DeleteTableBucketEncryption,
s3tables:GetTableBucket,
kms:DescribeKey
```

### Delete
```json
s3tables:DeleteTableBucket
```

### List
```json
s3tables:ListTableBuckets
```
