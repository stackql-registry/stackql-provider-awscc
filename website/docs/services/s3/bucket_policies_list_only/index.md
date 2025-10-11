---
title: bucket_policies_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket_policies_list_only
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

Lists <code>bucket_policies</code> in a region or regions, for all properties use <a href="/services/s3/bucket_policies/"><code>bucket_policies</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>bucket_policies_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Applies an Amazon S3 bucket policy to an Amazon S3 bucket. If you are using an identity other than the root user of the AWS-account that owns the bucket, the calling identity must have the <code>PutBucketPolicy</code> permissions on the specified bucket and belong to the bucket owner's account in order to use this operation.<br />If you don't have <code>PutBucketPolicy</code> permissions, Amazon S3 returns a <code>403 Access Denied</code> error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a <code>405 Method Not Allowed</code> error.<br />As a security precaution, the root user of the AWS-account that owns a bucket can always use this operation, even if the policy explicitly denies the root user the ability to perform this action. <br />When using the <code>AWS::S3::BucketPolicy</code> resource, you can create, update, and delete bucket policies for S3 buckets located in Regions that are different from the stack's Region. However, the CloudFormation stacks should be deployed in the US East (N. Virginia) or <code>us-east-1</code> Region. This cross-region bucket policy modification functionality is supported for backward compatibility with existing workflows.<br />If the &#91;DeletionPolicy attribute&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html) is not specified or set to <code>Delete</code>, the bucket policy will be removed when the stack is deleted. If set to <code>Retain</code>, the bucket policy will be preserved even after the stack is deleted.<br />For example, a CloudFormation stack in <code>us-east-1</code> can use the <code>AWS::S3::BucketPolicy</code> resource to manage the bucket policy for an S3 bucket in <code>us-west-2</code>. The retention or removal of the bucket policy during the stack deletion is determined by the <code>DeletionPolicy</code> attribute specified in the stack template.<br />For more information, see &#91;Bucket policy examples&#93;(https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html).<br />The following operations are related to <code>PutBucketPolicy</code>:<br />+ &#91;CreateBucket&#93;(https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html) <br />+ &#91;DeleteBucket&#93;(https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html)</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.s3.bucket_policies_list_only" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="bucket" /></td><td><code>string</code></td><td>The name of the Amazon S3 bucket to which the policy applies.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples
Lists all <code>bucket_policies</code> in a region.
```sql
SELECT
region,
bucket
FROM awscc.s3.bucket_policies_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>bucket_policies_list_only</code> resource, see <a href="/services/s3/bucket_policies/#permissions"><code>bucket_policies</code></a>

