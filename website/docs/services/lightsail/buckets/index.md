---
title: buckets
hide_title: false
hide_table_of_contents: false
keywords:
  - buckets
  - lightsail
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
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Lightsail::Bucket</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lightsail.buckets" /></td></tr>
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
    "description": "The name for the bucket."
  },
  {
    "name": "bundle_id",
    "type": "string",
    "description": "The ID of the bundle to use for the bucket."
  },
  {
    "name": "bucket_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "object_versioning",
    "type": "boolean",
    "description": "Specifies whether to enable or disable versioning of objects in the bucket."
  },
  {
    "name": "access_rules",
    "type": "object",
    "description": "An object that sets the public accessibility of objects in the specified bucket.",
    "children": [
      {
        "name": "get_object",
        "type": "string",
        "description": "Specifies the anonymous access to all objects in a bucket."
      },
      {
        "name": "allow_public_overrides",
        "type": "boolean",
        "description": "A Boolean value that indicates whether the access control list (ACL) permissions that are applied to individual objects override the getObject option that is currently specified."
      }
    ]
  },
  {
    "name": "resources_receiving_access",
    "type": "array",
    "description": "The names of the Lightsail resources for which to set bucket access."
  },
  {
    "name": "read_only_access_accounts",
    "type": "array",
    "description": "An array of strings to specify the AWS account IDs that can access the bucket."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "url",
    "type": "string",
    "description": "The URL of the bucket."
  },
  {
    "name": "able_to_update_bundle",
    "type": "boolean",
    "description": "Indicates whether the bundle that is currently applied to a bucket can be changed to another bundle. You can update a bucket's bundle only one time within a monthly AWS billing cycle."
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
    "description": "The name for the bucket."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-bucket.html"><code>AWS::Lightsail::Bucket</code></a>.

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
    <td><CopyableCode code="BucketName, BundleId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>buckets</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>buckets</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
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

Gets all properties from an individual <code>bucket</code>.
```sql
SELECT
region,
bucket_name,
bundle_id,
bucket_arn,
object_versioning,
access_rules,
resources_receiving_access,
read_only_access_accounts,
tags,
url,
able_to_update_bundle
FROM awscc.lightsail.buckets
WHERE region = 'us-east-1' AND Identifier = '<BucketName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>buckets</code> in a region.
```sql
SELECT
region,
bucket_name
FROM awscc.lightsail.buckets_list_only
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
INSERT INTO awscc.lightsail.buckets (
 BucketName,
 BundleId,
 region
)
SELECT 
'{{ BucketName }}',
 '{{ BundleId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.lightsail.buckets (
 BucketName,
 BundleId,
 ObjectVersioning,
 AccessRules,
 ResourcesReceivingAccess,
 ReadOnlyAccessAccounts,
 Tags,
 region
)
SELECT 
 '{{ BucketName }}',
 '{{ BundleId }}',
 '{{ ObjectVersioning }}',
 '{{ AccessRules }}',
 '{{ ResourcesReceivingAccess }}',
 '{{ ReadOnlyAccessAccounts }}',
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
  - name: bucket
    props:
      - name: BucketName
        value: '{{ BucketName }}'
      - name: BundleId
        value: '{{ BundleId }}'
      - name: ObjectVersioning
        value: '{{ ObjectVersioning }}'
      - name: AccessRules
        value:
          GetObject: '{{ GetObject }}'
          AllowPublicOverrides: '{{ AllowPublicOverrides }}'
      - name: ResourcesReceivingAccess
        value:
          - '{{ ResourcesReceivingAccess[0] }}'
      - name: ReadOnlyAccessAccounts
        value:
          - '{{ ReadOnlyAccessAccounts[0] }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.lightsail.buckets
SET PatchDocument = string('{{ {
    "BundleId": bundle_id,
    "ObjectVersioning": object_versioning,
    "AccessRules": access_rules,
    "ResourcesReceivingAccess": resources_receiving_access,
    "ReadOnlyAccessAccounts": read_only_access_accounts,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<BucketName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.lightsail.buckets
WHERE Identifier = '<BucketName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>buckets</code> resource, the following permissions are required:

### Create
```json
lightsail:CreateBucket,
lightsail:GetBuckets,
lightsail:GetInstance,
lightsail:UpdateBucket,
lightsail:UpdateBucketBundle,
lightsail:SetResourceAccessForBucket,
lightsail:TagResource,
lightsail:UntagResource
```

### Read
```json
lightsail:GetBuckets
```

### Delete
```json
lightsail:DeleteBucket,
lightsail:GetBuckets
```

### List
```json
lightsail:GetBuckets
```

### Update
```json
lightsail:GetBuckets,
lightsail:GetInstance,
lightsail:UpdateBucket,
lightsail:UpdateBucketBundle,
lightsail:SetResourceAccessForBucket,
lightsail:TagResource,
lightsail:UntagResource
```
