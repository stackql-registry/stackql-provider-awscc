---
title: access_points
hide_title: false
hide_table_of_contents: false
keywords:
  - access_points
  - s3objectlambda
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
<tr><td><b>Description</b></td><td>The AWS::S3ObjectLambda::AccessPoint resource is an Amazon S3ObjectLambda resource type that you can use to add computation to S3 actions</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.s3objectlambda.access_points" /></td></tr>
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
    "description": "The name you want to assign to this Object lambda Access Point."
  },
  {
    "name": "alias",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "status",
        "type": "string",
        "description": "The status of the Object Lambda alias."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value of the Object Lambda alias."
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "creation_date",
    "type": "string",
    "description": "The date and time when the Object lambda Access Point was created."
  },
  {
    "name": "public_access_block_configuration",
    "type": "object",
    "description": "The PublicAccessBlock configuration that you want to apply to this Access Point. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status 'The Meaning of Public' in the Amazon Simple Storage Service Developer Guide.",
    "children": [
      {
        "name": "block_public_acls",
        "type": "boolean",
        "description": "Specifies whether Amazon S3 should block public access control lists (ACLs) to this object lambda access point. Setting this element to TRUE causes the following behavior:<br />- PUT Bucket acl and PUT Object acl calls fail if the specified ACL is public.<br />- PUT Object calls fail if the request includes a public ACL.<br />. - PUT Bucket calls fail if the request includes a public ACL.<br />Enabling this setting doesn't affect existing policies or ACLs."
      },
      {
        "name": "ignore_public_acls",
        "type": "boolean",
        "description": "Specifies whether Amazon S3 should ignore public ACLs for buckets in this account. Setting this element to TRUE causes Amazon S3 to ignore all public ACLs on buckets in this account and any objects that they contain. Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set."
      },
      {
        "name": "block_public_policy",
        "type": "boolean",
        "description": "Specifies whether Amazon S3 should block public bucket policies for buckets in this account. Setting this element to TRUE causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access. Enabling this setting doesn't affect existing bucket policies."
      },
      {
        "name": "restrict_public_buckets",
        "type": "boolean",
        "description": "Specifies whether Amazon S3 should restrict public bucket policies for this bucket. Setting this element to TRUE restricts access to this bucket to only AWS services and authorized users within this account if the bucket has a public policy.<br />Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked."
      }
    ]
  },
  {
    "name": "policy_status",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "is_public",
        "type": "boolean",
        "description": "Specifies whether the Object lambda Access Point Policy is Public or not. Object lambda Access Points are private by default."
      }
    ]
  },
  {
    "name": "object_lambda_configuration",
    "type": "object",
    "description": "The Object lambda Access Point Configuration that configures transformations to be applied on the objects on specified S3 Actions",
    "children": [
      {
        "name": "supporting_access_point",
        "type": "string",
        "description": ""
      },
      {
        "name": "allowed_features",
        "type": "array",
        "description": ""
      },
      {
        "name": "cloud_watch_metrics_enabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "transformation_configurations",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "actions",
            "type": "array",
            "description": ""
          },
          {
            "name": "content_transformation",
            "type": "object",
            "description": ""
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
    "name": "name",
    "type": "string",
    "description": "The name you want to assign to this Object lambda Access Point."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html"><code>AWS::S3ObjectLambda::AccessPoint</code></a>.

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
    <td><CopyableCode code="ObjectLambdaConfiguration, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>access_points</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>access_points</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
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

Gets all properties from an individual <code>access_point</code>.
```sql
SELECT
region,
name,
alias,
arn,
creation_date,
public_access_block_configuration,
policy_status,
object_lambda_configuration
FROM awscc.s3objectlambda.access_points
WHERE region = 'us-east-1' AND data__Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>access_points</code> in a region.
```sql
SELECT
region,
name
FROM awscc.s3objectlambda.access_points_list_only
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
INSERT INTO awscc.s3objectlambda.access_points (
 ObjectLambdaConfiguration,
 region
)
SELECT 
'{{ ObjectLambdaConfiguration }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.s3objectlambda.access_points (
 Name,
 ObjectLambdaConfiguration,
 region
)
SELECT 
 '{{ Name }}',
 '{{ ObjectLambdaConfiguration }}',
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
      - name: Name
        value: '{{ Name }}'
      - name: ObjectLambdaConfiguration
        value:
          SupportingAccessPoint: '{{ SupportingAccessPoint }}'
          AllowedFeatures:
            - '{{ AllowedFeatures[0] }}'
          CloudWatchMetricsEnabled: '{{ CloudWatchMetricsEnabled }}'
          TransformationConfigurations:
            - Actions:
                - '{{ Actions[0] }}'
              ContentTransformation: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.s3objectlambda.access_points
SET data__PatchDocument = string('{{ {
    "ObjectLambdaConfiguration": object_lambda_configuration
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.s3objectlambda.access_points
WHERE data__Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>access_points</code> resource, the following permissions are required:

### Create
```json
s3:CreateAccessPointForObjectLambda,
s3:PutAccessPointConfigurationForObjectLambda,
s3:GetAccessPointForObjectLambda,
s3:GetAccessPointPolicyStatusForObjectLambda,
s3:GetAccessPointConfigurationForObjectLambda
```

### Read
```json
s3:GetAccessPointForObjectLambda,
s3:GetAccessPointPolicyStatusForObjectLambda,
s3:GetAccessPointConfigurationForObjectLambda
```

### Update
```json
s3:PutAccessPointConfigurationForObjectLambda,
s3:GetAccessPointForObjectLambda,
s3:GetAccessPointPolicyStatusForObjectLambda,
s3:GetAccessPointConfigurationForObjectLambda
```

### Delete
```json
s3:DeleteAccessPointForObjectLambda
```

### List
```json
s3:ListAccessPointsForObjectLambda
```
