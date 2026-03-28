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

import CodeBlock from '@theme/CodeBlock';
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
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."
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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ bucket_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>buckets</code> in a region.
```sql
SELECT
  region,
  bucket_name
FROM awscc.lightsail.buckets_list_only
WHERE
  region = '{{ region }}';
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
  '{{ bucket_name }}',
  '{{ bundle_id }}',
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
  '{{ bucket_name }}',
  '{{ bundle_id }}',
  '{{ object_versioning }}',
  '{{ access_rules }}',
  '{{ resources_receiving_access }}',
  '{{ read_only_access_accounts }}',
  '{{ tags }}',
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

<CodeBlock language="yaml">{`version: 1
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
      - name: bucket_name
        value: '{{ bucket_name }}'
      - name: bundle_id
        value: '{{ bundle_id }}'
      - name: object_versioning
        value: '{{ object_versioning }}'
      - name: access_rules
        value:
          get_object: '{{ get_object }}'
          allow_public_overrides: '{{ allow_public_overrides }}'
      - name: resources_receiving_access
        value:
          - '{{ resources_receiving_access[0] }}'
      - name: read_only_access_accounts
        value:
          - '{{ read_only_access_accounts[0] }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>bucket</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ bucket_name }}'
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
DELETE FROM awscc.lightsail.buckets
WHERE
  Identifier = '{{ bucket_name }}' AND
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

To operate on the <code>buckets</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

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

</TabItem>
<TabItem value="read">

```json
lightsail:GetBuckets
```

</TabItem>
<TabItem value="delete">

```json
lightsail:DeleteBucket,
lightsail:GetBuckets
```

</TabItem>
<TabItem value="list">

```json
lightsail:GetBuckets
```

</TabItem>
<TabItem value="update">

```json
lightsail:GetBuckets,
lightsail:GetInstance,
lightsail:UpdateBucket,
lightsail:UpdateBucketBundle,
lightsail:SetResourceAccessForBucket,
lightsail:TagResource,
lightsail:UntagResource
```

</TabItem>
</Tabs>