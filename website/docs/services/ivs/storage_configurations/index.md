---
title: storage_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - storage_configurations
  - ivs
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

Creates, updates, deletes or gets a <code>storage_configuration</code> resource or lists <code>storage_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>storage_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::IVS::StorageConfiguration</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ivs.storage_configurations" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": "Storage Configuration ARN is automatically generated on creation and assigned as the unique identifier."
  },
  {
    "name": "name",
    "type": "string",
    "description": "Storage Configuration Name."
  },
  {
    "name": "s3",
    "type": "object",
    "description": "A complex type that describes an S3 location where recorded videos will be stored.",
    "children": [
      {
        "name": "bucket_name",
        "type": "string",
        "description": "Location (S3 bucket name) where recorded videos will be stored. Note that the StorageConfiguration and S3 bucket must be in the same region as the Composition."
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of key-value pairs that contain metadata for the asset model.",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": "Storage Configuration ARN is automatically generated on creation and assigned as the unique identifier."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-storageconfiguration.html"><code>AWS::IVS::StorageConfiguration</code></a>.

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
    <td><code>storage_configurations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="S3, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>storage_configurations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>storage_configurations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>storage_configurations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>storage_configurations</code></td>
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

Gets all properties from an individual <code>storage_configuration</code>.
```sql
SELECT
region,
arn,
name,
s3,
tags
FROM awscc.ivs.storage_configurations
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>storage_configurations</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.ivs.storage_configurations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>storage_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ivs.storage_configurations (
 S3,
 region
)
SELECT
'{{ s3 }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ivs.storage_configurations (
 Name,
 S3,
 Tags,
 region
)
SELECT
 '{{ name }}',
 '{{ s3 }}',
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
  - name: storage_configuration
    props:
      - name: name
        value: '{{ name }}'
      - name: s3
        value:
          bucket_name: '{{ bucket_name }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>storage_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ivs.storage_configurations
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ivs.storage_configurations
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>storage_configurations</code> resource, the following permissions are required:

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
ivs:CreateStorageConfiguration,
ivs:GetStorageConfiguration,
ivs:TagResource,
s3:GetBucketLocation,
s3:GetBucketPolicy,
s3:PutBucketPolicy
```

</TabItem>
<TabItem value="read">

```json
ivs:GetStorageConfiguration,
ivs:ListTagsForResource,
s3:GetBucketLocation
```

</TabItem>
<TabItem value="update">

```json
ivs:GetStorageConfiguration,
ivs:TagResource,
ivs:UntagResource,
ivs:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
ivs:DeleteStorageConfiguration,
ivs:UntagResource,
s3:GetBucketPolicy,
s3:DeleteBucketPolicy,
s3:PutBucketPolicy
```

</TabItem>
<TabItem value="list">

```json
ivs:ListStorageConfigurations,
s3:GetBucketLocation,
ivs:ListTagsForResource
```

</TabItem>
</Tabs>