---
title: bucket_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket_policies
  - s3
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

Creates, updates, deletes or gets a <code>bucket_policy</code> resource or lists <code>bucket_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>bucket_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Applies an Amazon S3 bucket policy to an Amazon S3 bucket. If you are using an identity other than the root user of the AWS-account that owns the bucket, the calling identity must have the <code>PutBucketPolicy</code> permissions on the specified bucket and belong to the bucket owner's account in order to use this operation.<br />If you don't have <code>PutBucketPolicy</code> permissions, Amazon S3 returns a <code>403 Access Denied</code> error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a <code>405 Method Not Allowed</code> error.<br />As a security precaution, the root user of the AWS-account that owns a bucket can always use this operation, even if the policy explicitly denies the root user the ability to perform this action. <br />When using the <code>AWS::S3::BucketPolicy</code> resource, you can create, update, and delete bucket policies for S3 buckets located in Regions that are different from the stack's Region. However, the CloudFormation stacks should be deployed in the US East (N. Virginia) or <code>us-east-1</code> Region. This cross-region bucket policy modification functionality is supported for backward compatibility with existing workflows.<br />If the &#91;DeletionPolicy attribute&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html) is not specified or set to <code>Delete</code>, the bucket policy will be removed when the stack is deleted. If set to <code>Retain</code>, the bucket policy will be preserved even after the stack is deleted.<br />For example, a CloudFormation stack in <code>us-east-1</code> can use the <code>AWS::S3::BucketPolicy</code> resource to manage the bucket policy for an S3 bucket in <code>us-west-2</code>. The retention or removal of the bucket policy during the stack deletion is determined by the <code>DeletionPolicy</code> attribute specified in the stack template.<br />For more information, see &#91;Bucket policy examples&#93;(https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html).<br />The following operations are related to <code>PutBucketPolicy</code>:<br />+ &#91;CreateBucket&#93;(https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html) <br />+ &#91;DeleteBucket&#93;(https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html)</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.s3.bucket_policies" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="bucket" /></td><td><code>string</code></td><td>The name of the Amazon S3 bucket to which the policy applies.</td></tr>
<tr><td><CopyableCode code="policy_document" /></td><td><code>object</code></td><td>A policy document containing permissions to add to the specified bucket. In IAM, you must provide policy documents in JSON format. However, in CloudFormation you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to IAM. For more information, see the AWS::IAM::Policy &#91;PolicyDocument&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html#cfn-iam-policy-policydocument) resource description in this guide and &#91;Access Policy Language Overview&#93;(https://docs.aws.amazon.com/AmazonS3/latest/dev/access-policy-language-overview.html) in the ASTERIX;Amazon S3 User GuideASTERIX;.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucketpolicy.html"><code>AWS::S3::BucketPolicy</code></a>.

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
    <td><CopyableCode code="Bucket, PolicyDocument, region" /></td>
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
Gets all <code>bucket_policies</code> in a region.
```sql
SELECT
region,
bucket,
policy_document
FROM awscc.s3.bucket_policies
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>bucket_policy</code>.
```sql
SELECT
region,
bucket,
policy_document
FROM awscc.s3.bucket_policies
WHERE region = 'us-east-1' AND data__Identifier = '<Bucket>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>bucket_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.s3.bucket_policies (
 Bucket,
 PolicyDocument,
 region
)
SELECT 
'{{ Bucket }}',
 '{{ PolicyDocument }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.s3.bucket_policies (
 Bucket,
 PolicyDocument,
 region
)
SELECT 
 '{{ Bucket }}',
 '{{ PolicyDocument }}',
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
  - name: bucket_policy
    props:
      - name: Bucket
        value: '{{ Bucket }}'
      - name: PolicyDocument
        value: {}

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.s3.bucket_policies
WHERE data__Identifier = '<Bucket>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>bucket_policies</code> resource, the following permissions are required:

### Create
```json
s3:GetBucketPolicy,
s3:PutBucketPolicy
```

### Read
```json
s3:GetBucketPolicy
```

### Update
```json
s3:GetBucketPolicy,
s3:PutBucketPolicy
```

### Delete
```json
s3:GetBucketPolicy,
s3:DeleteBucketPolicy
```

### List
```json
s3:GetBucketPolicy,
s3:ListAllMyBuckets
```
