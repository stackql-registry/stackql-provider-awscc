---
title: directory_buckets
hide_title: false
hide_table_of_contents: false
keywords:
  - directory_buckets
  - s3express
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

Creates, updates, deletes or gets a <code>directory_bucket</code> resource or lists <code>directory_buckets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>directory_buckets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::S3Express::DirectoryBucket.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.s3express.directory_buckets" /></td></tr>
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
    "name": "bucket_name",
    "type": "string",
    "description": "Specifies a name for the bucket. The bucket name must contain only lowercase letters, numbers, and hyphens (-). A directory bucket name must be unique in the chosen Availability Zone or Local Zone. The bucket name must also follow the format 'bucket&#95;base&#95;name--zone&#95;id--x-s3'. The zone&#95;id can be the ID of an Availability Zone or a Local Zone. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the bucket name."
  },
  {
    "name": "location_name",
    "type": "string",
    "description": "Specifies the Zone ID of the Availability Zone or Local Zone where the directory bucket will be created. An example Availability Zone ID value is 'use1-az5'."
  },
  {
    "name": "availability_zone_name",
    "type": "string",
    "description": "Returns the code for the Availability Zone or Local Zone where the directory bucket was created. An example for the code of an Availability Zone is 'us-east-1f'."
  },
  {
    "name": "data_redundancy",
    "type": "string",
    "description": "Specifies the number of Availability Zone or Local Zone that's used for redundancy for the bucket."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "Returns the Amazon Resource Name (ARN) of the specified bucket."
  },
  {
    "name": "bucket_encryption",
    "type": "object",
    "description": "Specifies default encryption for a bucket using server-side encryption with Amazon S3 managed keys (SSE-S3) or AWS KMS keys (SSE-KMS).",
    "children": [
      {
        "name": "server_side_encryption_configuration",
        "type": "array",
        "description": "Specifies the default server-side-encryption configuration.",
        "children": [
          {
            "name": "bucket_key_enabled",
            "type": "boolean",
            "description": "Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket. Existing objects are not affected. Amazon S3 Express One Zone uses an S3 Bucket Key with SSE-KMS and S3 Bucket Key cannot be disabled. It's only allowed to set the BucketKeyEnabled element to true."
          },
          {
            "name": "server_side_encryption_by_default",
            "type": "object",
            "description": "Specifies the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied.",
            "children": [
              {
                "name": "kms_master_key_id",
                "type": "string",
                "description": "AWS Key Management Service (KMS) customer managed key ID to use for the default encryption. This parameter is allowed only if SSEAlgorithm is set to aws:kms. You can specify this parameter with the key ID or the Amazon Resource Name (ARN) of the KMS key"
              },
              {
                "name": "sse_algorithm",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "lifecycle_configuration",
    "type": "object",
    "description": "Lifecycle rules that define how Amazon S3 Express manages objects during their lifetime.",
    "children": [
      {
        "name": "rules",
        "type": "array",
        "description": "A lifecycle rule for individual objects in an Amazon S3 Express bucket.",
        "children": [
          {
            "name": "abort_incomplete_multipart_upload",
            "type": "object",
            "description": "Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload.",
            "children": [
              {
                "name": "days_after_initiation",
                "type": "integer",
                "description": "Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload."
              }
            ]
          },
          {
            "name": "expiration_in_days",
            "type": "integer",
            "description": ""
          },
          {
            "name": "id",
            "type": "string",
            "description": ""
          },
          {
            "name": "prefix",
            "type": "string",
            "description": ""
          },
          {
            "name": "status",
            "type": "string",
            "description": ""
          },
          {
            "name": "object_size_greater_than",
            "type": "string",
            "description": ""
          },
          {
            "name": "object_size_less_than",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
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
    "name": "bucket_name",
    "type": "string",
    "description": "Specifies a name for the bucket. The bucket name must contain only lowercase letters, numbers, and hyphens (-). A directory bucket name must be unique in the chosen Availability Zone or Local Zone. The bucket name must also follow the format 'bucket&#95;base&#95;name--zone&#95;id--x-s3'. The zone&#95;id can be the ID of an Availability Zone or a Local Zone. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the bucket name."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html"><code>AWS::S3Express::DirectoryBucket</code></a>.

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
    <td><code>directory_buckets</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="LocationName, DataRedundancy, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>directory_buckets</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>directory_buckets</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>directory_buckets_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>directory_buckets</code></td>
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

Gets all properties from an individual <code>directory_bucket</code>.
```sql
SELECT
region,
bucket_name,
location_name,
availability_zone_name,
data_redundancy,
arn,
bucket_encryption,
lifecycle_configuration,
tags
FROM awscc.s3express.directory_buckets
WHERE region = 'us-east-1' AND Identifier = '<BucketName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>directory_buckets</code> in a region.
```sql
SELECT
region,
bucket_name
FROM awscc.s3express.directory_buckets_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>directory_bucket</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.s3express.directory_buckets (
 LocationName,
 DataRedundancy,
 region
)
SELECT 
'{{ LocationName }}',
 '{{ DataRedundancy }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.s3express.directory_buckets (
 BucketName,
 LocationName,
 DataRedundancy,
 BucketEncryption,
 LifecycleConfiguration,
 Tags,
 region
)
SELECT 
 '{{ BucketName }}',
 '{{ LocationName }}',
 '{{ DataRedundancy }}',
 '{{ BucketEncryption }}',
 '{{ LifecycleConfiguration }}',
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
  - name: directory_bucket
    props:
      - name: BucketName
        value: '{{ BucketName }}'
      - name: LocationName
        value: '{{ LocationName }}'
      - name: DataRedundancy
        value: '{{ DataRedundancy }}'
      - name: BucketEncryption
        value:
          ServerSideEncryptionConfiguration:
            - BucketKeyEnabled: '{{ BucketKeyEnabled }}'
              ServerSideEncryptionByDefault:
                KMSMasterKeyID: '{{ KMSMasterKeyID }}'
                SSEAlgorithm: '{{ SSEAlgorithm }}'
      - name: LifecycleConfiguration
        value:
          Rules:
            - AbortIncompleteMultipartUpload:
                DaysAfterInitiation: '{{ DaysAfterInitiation }}'
              ExpirationInDays: '{{ ExpirationInDays }}'
              Id: '{{ Id }}'
              Prefix: '{{ Prefix }}'
              Status: '{{ Status }}'
              ObjectSizeGreaterThan: '{{ ObjectSizeGreaterThan }}'
              ObjectSizeLessThan: '{{ ObjectSizeLessThan }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>directory_bucket</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.s3express.directory_buckets
SET PatchDocument = string('{{ {
    "BucketEncryption": bucket_encryption,
    "LifecycleConfiguration": lifecycle_configuration,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<BucketName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.s3express.directory_buckets
WHERE Identifier = '<BucketName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>directory_buckets</code> resource, the following permissions are required:

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
kms:GenerateDataKey,
kms:Decrypt,
s3express:CreateBucket,
s3express:ListAllMyDirectoryBuckets,
s3express:PutEncryptionConfiguration,
s3express:PutLifecycleConfiguration,
s3express:TagResource
```

</TabItem>
<TabItem value="read">

```json
s3express:ListAllMyDirectoryBuckets,
ec2:DescribeAvailabilityZones,
s3express:GetEncryptionConfiguration,
s3express:GetLifecycleConfiguration,
s3express:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
kms:GenerateDataKey,
kms:Decrypt,
s3express:PutEncryptionConfiguration,
s3express:PutLifecycleConfiguration,
s3express:TagResource,
s3express:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
s3express:DeleteBucket,
s3express:ListAllMyDirectoryBuckets
```

</TabItem>
<TabItem value="list">

```json
s3express:ListAllMyDirectoryBuckets
```

</TabItem>
</Tabs>