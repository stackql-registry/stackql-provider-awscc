---
title: buckets
hide_title: false
hide_table_of_contents: false
keywords:
  - buckets
  - s3outposts
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

Creates, updates, deletes or gets a <code>bucket</code> resource or lists <code>buckets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>buckets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type Definition for AWS::S3Outposts::Bucket</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.s3outposts.buckets" /></td></tr>
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
    "description": "The Amazon Resource Name (ARN) of the specified bucket."
  },
  {
    "name": "bucket_name",
    "type": "string",
    "description": "A name for the bucket."
  },
  {
    "name": "outpost_id",
    "type": "string",
    "description": "The id of the customer outpost on which the bucket resides."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An arbitrary set of tags (key-value pairs) for this S3Outposts bucket.",
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
    "name": "lifecycle_configuration",
    "type": "object",
    "description": "Rules that define how Amazon S3Outposts manages objects during their lifetime.",
    "children": [
      {
        "name": "rules",
        "type": "array",
        "description": "A list of lifecycle rules for individual objects in an Amazon S3Outposts bucket.",
        "children": [
          {
            "name": "status",
            "type": "string",
            "description": ""
          },
          {
            "name": "id",
            "type": "string",
            "description": "Unique identifier for the lifecycle rule. The value can't be longer than 255 characters."
          },
          {
            "name": "abort_incomplete_multipart_upload",
            "type": "object",
            "description": "Specifies a lifecycle rule that stops incomplete multipart uploads to an Amazon S3Outposts bucket.",
            "children": [
              {
                "name": "days_after_initiation",
                "type": "integer",
                "description": "Specifies the number of days after which Amazon S3Outposts aborts an incomplete multipart upload."
              }
            ]
          },
          {
            "name": "expiration_date",
            "type": "string",
            "description": "Indicates when objects are deleted from Amazon S3Outposts. The date value must be in ISO 8601 format. The time is always midnight UTC."
          },
          {
            "name": "expiration_in_days",
            "type": "integer",
            "description": "Indicates the number of days after creation when objects are deleted from Amazon S3Outposts."
          },
          {
            "name": "filter",
            "type": "object",
            "description": "The container for the filter of the lifecycle rule.",
            "children": [
              {
                "name": "prefix",
                "type": "string",
                "description": "Object key prefix that identifies one or more objects to which this rule applies."
              },
              {
                "name": "tag",
                "type": "object",
                "description": "Specifies a tag used to identify a subset of objects for an Amazon S3Outposts bucket."
              },
              {
                "name": "and_operator",
                "type": "object",
                "description": "The container for the AND condition for the lifecycle rule. A combination of Prefix and 1 or more Tags OR a minimum of 2 or more tags."
              }
            ]
          }
        ]
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
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the specified bucket."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucket.html"><code>AWS::S3Outposts::Bucket</code></a>.

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
    <td><code>buckets</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="BucketName, OutpostId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>buckets</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>buckets</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>buckets_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>buckets</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>bucket</code>.
```sql
SELECT
region,
arn,
bucket_name,
outpost_id,
tags,
lifecycle_configuration
FROM awscc.s3outposts.buckets
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>buckets</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.s3outposts.buckets_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>bucket</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.s3outposts.buckets (
 BucketName,
 OutpostId,
 region
)
SELECT 
'{{ BucketName }}',
 '{{ OutpostId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.s3outposts.buckets (
 BucketName,
 OutpostId,
 Tags,
 LifecycleConfiguration,
 region
)
SELECT 
 '{{ BucketName }}',
 '{{ OutpostId }}',
 '{{ Tags }}',
 '{{ LifecycleConfiguration }}',
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
  - name: bucket
    props:
      - name: BucketName
        value: '{{ BucketName }}'
      - name: OutpostId
        value: '{{ OutpostId }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: LifecycleConfiguration
        value:
          Rules:
            - Status: '{{ Status }}'
              Id: '{{ Id }}'
              AbortIncompleteMultipartUpload:
                DaysAfterInitiation: '{{ DaysAfterInitiation }}'
              ExpirationDate: '{{ ExpirationDate }}'
              ExpirationInDays: '{{ ExpirationInDays }}'
              Filter:
                Prefix: '{{ Prefix }}'
                Tag:
                  Key: '{{ Key }}'
                  Value: '{{ Value }}'
                AndOperator: null

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.s3outposts.buckets
SET data__PatchDocument = string('{{ {
    "Tags": tags,
    "LifecycleConfiguration": lifecycle_configuration
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.s3outposts.buckets
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>buckets</code> resource, the following permissions are required:

### Create
```json
s3-outposts:CreateBucket,
s3-outposts:PutBucketTagging,
s3-outposts:PutLifecycleConfiguration
```

### Read
```json
s3-outposts:GetBucket,
s3-outposts:GetBucketTagging,
s3-outposts:GetLifecycleConfiguration
```

### Update
```json
s3-outposts:PutBucketTagging,
s3-outposts:DeleteBucketTagging,
s3-outposts:PutLifecycleConfiguration
```

### Delete
```json
s3-outposts:DeleteBucket
```

### List
```json
s3-outposts:ListRegionalBuckets
```
