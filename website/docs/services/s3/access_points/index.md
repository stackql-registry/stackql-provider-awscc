---
title: access_points
hide_title: false
hide_table_of_contents: false
keywords:
  - access_points
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

Creates, updates, deletes or gets an <code>access_point</code> resource or lists <code>access_points</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>access_points</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::S3::AccessPoint resource is an Amazon S3 resource type that you can use to access buckets.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.s3.access_points" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": "The name you want to assign to this Access Point. If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the access point name."
  },
  {
    "name": "alias",
    "type": "string",
    "description": "The alias of this Access Point. This alias can be used for compatibility purposes with other AWS services and third-party applications."
  },
  {
    "name": "bucket",
    "type": "string",
    "description": "The name of the bucket that you want to associate this Access Point with."
  },
  {
    "name": "bucket_account_id",
    "type": "string",
    "description": "The AWS account ID associated with the S3 bucket associated with this access point."
  },
  {
    "name": "vpc_configuration",
    "type": "object",
    "description": "If you include this field, Amazon S3 restricts access to this Access Point to requests from the specified Virtual Private Cloud (VPC).",
    "children": [
      {
        "name": "vpc_id",
        "type": "string",
        "description": "If this field is specified, this access point will only allow connections from the specified VPC ID."
      }
    ]
  },
  {
    "name": "public_access_block_configuration",
    "type": "object",
    "description": "The PublicAccessBlock configuration that you want to apply to this Access Point. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status 'The Meaning of Public' in the Amazon Simple Storage Service Developer Guide.",
    "children": [
      {
        "name": "restrict_public_buckets",
        "type": "boolean",
        "description": "Specifies whether Amazon S3 should restrict public bucket policies for this bucket. Setting this element to TRUE restricts access to this bucket to only AWS services and authorized users within this account if the bucket has a public policy.<br />Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked."
      },
      {
        "name": "block_public_policy",
        "type": "boolean",
        "description": "Specifies whether Amazon S3 should block public bucket policies for buckets in this account. Setting this element to TRUE causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access. Enabling this setting doesn't affect existing bucket policies."
      },
      {
        "name": "block_public_acls",
        "type": "boolean",
        "description": "Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in this account. Setting this element to TRUE causes the following behavior:<br />- PUT Bucket acl and PUT Object acl calls fail if the specified ACL is public.<br />- PUT Object calls fail if the request includes a public ACL.<br />. - PUT Bucket calls fail if the request includes a public ACL.<br />Enabling this setting doesn't affect existing policies or ACLs."
      },
      {
        "name": "ignore_public_acls",
        "type": "boolean",
        "description": "Specifies whether Amazon S3 should ignore public ACLs for buckets in this account. Setting this element to TRUE causes Amazon S3 to ignore all public ACLs on buckets in this account and any objects that they contain. Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set."
      }
    ]
  },
  {
    "name": "policy",
    "type": "object",
    "description": "The Access Point Policy you want to apply to this access point."
  },
  {
    "name": "network_origin",
    "type": "string",
    "description": "Indicates whether this Access Point allows access from the public Internet. If VpcConfiguration is specified for this Access Point, then NetworkOrigin is VPC, and the Access Point doesn't allow access from the public Internet. Otherwise, NetworkOrigin is Internet, and the Access Point allows access from the public Internet, subject to the Access Point and bucket access policies."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the specified accesspoint."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An arbitrary set of tags (key-value pairs) for this S3 Access Point.",
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
    "description": "The name you want to assign to this Access Point. If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the access point name."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accesspoint.html"><code>AWS::S3::AccessPoint</code></a>.

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
    <td><code>access_points</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Bucket, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>access_points</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>access_points</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>access_points_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>access_points</code></td>
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

Gets all properties from an individual <code>access_point</code>.
```sql
SELECT
region,
name,
alias,
bucket,
bucket_account_id,
vpc_configuration,
public_access_block_configuration,
policy,
network_origin,
arn,
tags
FROM awscc.s3.access_points
WHERE region = 'us-east-1' AND Identifier = '{{ name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>access_points</code> in a region.
```sql
SELECT
region,
name
FROM awscc.s3.access_points_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>access_point</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.s3.access_points (
 Bucket,
 region
)
SELECT
'{{ bucket }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.s3.access_points (
 Name,
 Bucket,
 BucketAccountId,
 VpcConfiguration,
 PublicAccessBlockConfiguration,
 Policy,
 Tags,
 region
)
SELECT
 '{{ name }}',
 '{{ bucket }}',
 '{{ bucket_account_id }}',
 '{{ vpc_configuration }}',
 '{{ public_access_block_configuration }}',
 '{{ policy }}',
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
  - name: access_point
    props:
      - name: name
        value: '{{ name }}'
      - name: bucket
        value: '{{ bucket }}'
      - name: bucket_account_id
        value: '{{ bucket_account_id }}'
      - name: vpc_configuration
        value:
          vpc_id: '{{ vpc_id }}'
      - name: public_access_block_configuration
        value:
          restrict_public_buckets: '{{ restrict_public_buckets }}'
          block_public_policy: '{{ block_public_policy }}'
          block_public_acls: '{{ block_public_acls }}'
          ignore_public_acls: '{{ ignore_public_acls }}'
      - name: policy
        value: {}
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>access_point</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.s3.access_points
SET PatchDocument = string('{{ {
    "PublicAccessBlockConfiguration": public_access_block_configuration,
    "Policy": policy,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.s3.access_points
WHERE Identifier = '{{ name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>access_points</code> resource, the following permissions are required:

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
s3:CreateAccessPoint,
s3:PutAccessPointPolicy,
s3:GetAccessPoint,
s3:PutAccessPointPublicAccessBlock,
s3:TagResource
```

</TabItem>
<TabItem value="read">

```json
s3:GetAccessPoint,
s3:GetAccessPointPolicy,
s3:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
s3:PutAccessPointPolicy,
s3:PutAccessPointPublicAccessBlock,
s3:DeleteAccessPointPolicy,
s3:GetAccessPoint,
s3:GetAccessPointPolicy,
s3:TagResource,
s3:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
s3:DeleteAccessPointPolicy,
s3:DeleteAccessPoint
```

</TabItem>
<TabItem value="list">

```json
s3:ListAccessPoints
```

</TabItem>
</Tabs>