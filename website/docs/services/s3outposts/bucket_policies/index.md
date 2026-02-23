---
title: bucket_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket_policies
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

Creates, updates, deletes or gets a <code>bucket_policy</code> resource or lists <code>bucket_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>bucket_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type Definition for AWS::S3Outposts::BucketPolicy</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.s3outposts.bucket_policies" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "bucket",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the specified bucket."
  },
  {
    "name": "policy_document",
    "type": "object",
    "description": "A policy document containing permissions to add to the specified bucket."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucketpolicy.html"><code>AWS::S3Outposts::BucketPolicy</code></a>.

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
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>bucket_policy</code>.
```sql
SELECT
region,
bucket,
policy_document
FROM awscc.s3outposts.bucket_policies
WHERE region = 'us-east-1' AND Identifier = '{{ bucket }}';
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
INSERT INTO awscc.s3outposts.bucket_policies (
 Bucket,
 PolicyDocument,
 region
)
SELECT
'{{ bucket }}',
 '{{ policy_document }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.s3outposts.bucket_policies (
 Bucket,
 PolicyDocument,
 region
)
SELECT
 '{{ bucket }}',
 '{{ policy_document }}',
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
UPDATE awscc.s3outposts.bucket_policies
SET PatchDocument = string('{{ {
    "PolicyDocument": policy_document
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ bucket }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.s3outposts.bucket_policies
WHERE Identifier = '{{ bucket }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>bucket_policies</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="create">

```json
s3-outposts:PutBucketPolicy,
s3-outposts:GetBucketPolicy
```

</TabItem>
<TabItem value="read">

```json
s3-outposts:GetBucketPolicy
```

</TabItem>
<TabItem value="update">

```json
s3-outposts:PutBucketPolicy,
s3-outposts:GetBucketPolicy
```

</TabItem>
<TabItem value="delete">

```json
s3-outposts:DeleteBucketPolicy,
s3-outposts:GetBucketPolicy
```

</TabItem>
</Tabs>