---
title: multi_region_access_points
hide_title: false
hide_table_of_contents: false
keywords:
  - multi_region_access_points
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

Creates, updates, deletes or gets a <code>multi_region_access_point</code> resource or lists <code>multi_region_access_points</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>multi_region_access_points</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>AWS::S3::MultiRegionAccessPoint is an Amazon S3 resource type that dynamically routes S3 requests to easily satisfy geographic compliance requirements based on customer-defined routing policies.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.s3.multi_region_access_points" /></td></tr>
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
    "name": "public_access_block_configuration",
    "type": "object",
    "description": "The PublicAccessBlock configuration that you want to apply to this Multi Region Access Point. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status 'The Meaning of Public' in the Amazon Simple Storage Service Developer Guide.",
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
    "name": "alias",
    "type": "string",
    "description": "The alias is a unique identifier to, and is part of the public DNS name for this Multi Region Access Point"
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The timestamp of the when the Multi Region Access Point is created"
  },
  {
    "name": "regions",
    "type": "array",
    "description": "The list of buckets that you want to associate this Multi Region Access Point with.",
    "children": [
      {
        "name": "bucket",
        "type": "string",
        "description": ""
      },
      {
        "name": "bucket_account_id",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name you want to assign to this Multi Region Access Point."
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
    "description": "The name you want to assign to this Multi Region Access Point."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspoint.html"><code>AWS::S3::MultiRegionAccessPoint</code></a>.

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
    <td><code>multi_region_access_points</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Regions, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>multi_region_access_points</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>multi_region_access_points_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>multi_region_access_points</code></td>
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

Gets all properties from an individual <code>multi_region_access_point</code>.
```sql
SELECT
region,
public_access_block_configuration,
alias,
created_at,
regions,
name
FROM awscc.s3.multi_region_access_points
WHERE region = 'us-east-1' AND data__Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>multi_region_access_points</code> in a region.
```sql
SELECT
region,
name
FROM awscc.s3.multi_region_access_points_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>multi_region_access_point</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.s3.multi_region_access_points (
 Regions,
 region
)
SELECT 
'{{ Regions }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.s3.multi_region_access_points (
 PublicAccessBlockConfiguration,
 Regions,
 Name,
 region
)
SELECT 
 '{{ PublicAccessBlockConfiguration }}',
 '{{ Regions }}',
 '{{ Name }}',
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
  - name: multi_region_access_point
    props:
      - name: PublicAccessBlockConfiguration
        value:
          RestrictPublicBuckets: '{{ RestrictPublicBuckets }}'
          BlockPublicPolicy: '{{ BlockPublicPolicy }}'
          BlockPublicAcls: '{{ BlockPublicAcls }}'
          IgnorePublicAcls: '{{ IgnorePublicAcls }}'
      - name: Regions
        value:
          - Bucket: '{{ Bucket }}'
            BucketAccountId: '{{ BucketAccountId }}'
      - name: Name
        value: '{{ Name }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.s3.multi_region_access_points
WHERE data__Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>multi_region_access_points</code> resource, the following permissions are required:

### Read
```json
s3:GetMultiRegionAccessPoint
```

### Create
```json
s3:CreateMultiRegionAccessPoint,
s3:DescribeMultiRegionAccessPointOperation,
s3:GetMultiRegionAccessPoint
```

### List
```json
s3:ListMultiRegionAccessPoints
```

### Delete
```json
s3:DeleteMultiRegionAccessPoint,
s3:DescribeMultiRegionAccessPointOperation,
s3:GetMultiRegionAccessPoint
```
