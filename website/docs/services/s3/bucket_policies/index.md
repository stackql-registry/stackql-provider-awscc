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
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>bucket_policy</code> resource or lists <code>bucket_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>bucket_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td><details><summary>Applies an Amazon S3 bucket policy to an Amazon S3 bucket. If you are using an identity other than the root user of the AWS-account that owns the bucket, the calling identity must have the <code>PutBucketPolicy</code> permissions on the specified bucket and belong to the bucket owner's account in order to use this operation.</summary>If you don't have <code>PutBucketPolicy</code> permissions, Amazon S3 returns a <code>403 Access Denied</code> error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a <code>405 Method Not Allowed</code> error.<br />As a security precaution, the root user of the AWS-account that owns a bucket can always use this operation, even if the policy explicitly denies the root user the ability to perform this action.<br />When using the <code>AWS::S3::BucketPolicy</code> resource, you can create, update, and delete bucket policies for S3 buckets located in Regions that are different from the stack's Region. However, the CloudFormation stacks should be deployed in the US East (N. Virginia) or <code>us-east-1</code> Region. This cross-region bucket policy modification functionality is supported for backward compatibility with existing workflows.<br />If the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html">DeletionPolicy attribute</a> is not specified or set to <code>Delete</code>, the bucket policy will be removed when the stack is deleted. If set to <code>Retain</code>, the bucket policy will be preserved even after the stack is deleted.<br />For example, a CloudFormation stack in <code>us-east-1</code> can use the <code>AWS::S3::BucketPolicy</code> resource to manage the bucket policy for an S3 bucket in <code>us-west-2</code>. The retention or removal of the bucket policy during the stack deletion is determined by the <code>DeletionPolicy</code> attribute specified in the stack template.<br />For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html">Bucket policy examples</a>.<br />The following operations are related to <code>PutBucketPolicy</code>:<br />+   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a><br />+   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html">DeleteBucket</a></details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.s3.bucket_policies" /></td></tr>
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
    "name": "bucket",
    "type": "string",
    "description": "The name of the Amazon S3 bucket to which the policy applies."
  },
  {
    "name": "policy_document",
    "type": "object",
    "description": "A policy document containing permissions to add to the specified bucket. In IAM, you must provide policy documents in JSON format. However, in CloudFormation you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to IAM. For more information, see the AWS::IAM::Policy <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html#cfn-iam-policy-policydocument\">PolicyDocument</a> resource description in this guide and <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/access-policy-language-overview.html\">Access Policy Language Overview</a> in the <i>Amazon S3 User Guide</i>."
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
    "name": "bucket",
    "type": "string",
    "description": "The name of the Amazon S3 bucket to which the policy applies."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucketpolicy.html"><code>AWS::S3::BucketPolicy</code></a>.

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
    <td><code>bucket_policies</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Bucket, PolicyDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>bucket_policies</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>bucket_policies</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>bucket_policies_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>bucket_policies</code></td>
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

Gets all properties from an individual <code>bucket_policy</code>.
```sql
SELECT
  region,
  bucket,
  policy_document
FROM awscc.s3.bucket_policies
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ bucket }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>bucket_policies</code> in a region.
```sql
SELECT
  region,
  bucket
FROM awscc.s3.bucket_policies_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

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
  '{{ bucket }}',
  '{{ policy_document }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
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
  '{{ bucket }}',
  '{{ policy_document }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
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
      - name: bucket
        value: '{{ bucket }}'
      - name: policy_document
        value: {}
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>bucket_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.s3.bucket_policies
SET PatchDocument = string('{{ {
    "PolicyDocument": policy_document
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ bucket }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.s3.bucket_policies
WHERE
  Identifier = '{{ bucket }}' AND
  region = '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

## Permissions

To operate on the <code>bucket_policies</code> resource, the following permissions are required:

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
s3:GetBucketPolicy,
s3:PutBucketPolicy
```

</TabItem>
<TabItem value="read">

```json
s3:GetBucketPolicy
```

</TabItem>
<TabItem value="update">

```json
s3:GetBucketPolicy,
s3:PutBucketPolicy
```

</TabItem>
<TabItem value="delete">

```json
s3:GetBucketPolicy,
s3:DeleteBucketPolicy
```

</TabItem>
<TabItem value="list">

```json
s3:GetBucketPolicy,
s3:ListAllMyBuckets
```

</TabItem>
</Tabs>