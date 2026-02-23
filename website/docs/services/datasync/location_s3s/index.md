---
title: location_s3s
hide_title: false
hide_table_of_contents: false
keywords:
  - location_s3s
  - datasync
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

Creates, updates, deletes or gets a <code>location_s3</code> resource or lists <code>location_s3s</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>location_s3s</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::DataSync::LocationS3</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.datasync.location_s3s" /></td></tr>
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
    "name": "s3_config",
    "type": "object",
    "description": "The Amazon Resource Name (ARN) of the AWS IAM role that is used to access an Amazon S3 bucket.",
    "children": [
      {
        "name": "bucket_access_role_arn",
        "type": "string",
        "description": "The ARN of the IAM role of the Amazon S3 bucket."
      }
    ]
  },
  {
    "name": "s3_bucket_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the Amazon S3 bucket."
  },
  {
    "name": "subdirectory",
    "type": "string",
    "description": "A subdirectory in the Amazon S3 bucket. This subdirectory in Amazon S3 is used to read data from the S3 source location or write data to the S3 destination."
  },
  {
    "name": "s3_storage_class",
    "type": "string",
    "description": "The Amazon S3 storage class you want to store your files in when this location is used as a task destination."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key for an AWS resource tag."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for an AWS resource tag."
      }
    ]
  },
  {
    "name": "location_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the Amazon S3 bucket location."
  },
  {
    "name": "location_uri",
    "type": "string",
    "description": "The URL of the S3 location that was described."
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
    "name": "location_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the Amazon S3 bucket location."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locations3.html"><code>AWS::DataSync::LocationS3</code></a>.

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
    <td><code>location_s3s</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="S3Config, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>location_s3s</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>location_s3s</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>location_s3s_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>location_s3s</code></td>
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

Gets all properties from an individual <code>location_s3</code>.
```sql
SELECT
region,
s3_config,
s3_bucket_arn,
subdirectory,
s3_storage_class,
tags,
location_arn,
location_uri
FROM awscc.datasync.location_s3s
WHERE region = 'us-east-1' AND Identifier = '{{ location_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>location_s3s</code> in a region.
```sql
SELECT
region,
location_arn
FROM awscc.datasync.location_s3s_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>location_s3</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.datasync.location_s3s (
 S3Config,
 region
)
SELECT
'{{ s3_config }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.datasync.location_s3s (
 S3Config,
 S3BucketArn,
 Subdirectory,
 S3StorageClass,
 Tags,
 region
)
SELECT
 '{{ s3_config }}',
 '{{ s3_bucket_arn }}',
 '{{ subdirectory }}',
 '{{ s3_storage_class }}',
 '{{ tags }}',
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
  - name: location_s3
    props:
      - name: s3_config
        value:
          bucket_access_role_arn: '{{ bucket_access_role_arn }}'
      - name: s3_bucket_arn
        value: '{{ s3_bucket_arn }}'
      - name: subdirectory
        value: '{{ subdirectory }}'
      - name: s3_storage_class
        value: '{{ s3_storage_class }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>location_s3</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.datasync.location_s3s
SET PatchDocument = string('{{ {
    "S3Config": s3_config,
    "Subdirectory": subdirectory,
    "S3StorageClass": s3_storage_class,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ location_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datasync.location_s3s
WHERE Identifier = '{{ location_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>location_s3s</code> resource, the following permissions are required:

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
datasync:CreateLocationS3,
datasync:DescribeLocationS3,
datasync:ListTagsForResource,
datasync:TagResource,
s3:ListAllMyBuckets,
s3:ListBucket,
iam:GetRole,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
datasync:DescribeLocationS3,
datasync:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
datasync:DescribeLocationS3,
datasync:ListTagsForResource,
datasync:TagResource,
datasync:UntagResource,
datasync:UpdateLocationS3,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
datasync:DeleteLocation
```

</TabItem>
<TabItem value="list">

```json
datasync:ListLocations
```

</TabItem>
</Tabs>