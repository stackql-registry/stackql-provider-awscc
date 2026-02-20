---
title: packages
hide_title: false
hide_table_of_contents: false
keywords:
  - packages
  - panorama
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

Creates, updates, deletes or gets a <code>package</code> resource or lists <code>packages</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>packages</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Creates a package and storage location in an Amazon S3 access point.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.panorama.packages" /></td></tr>
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
    "name": "package_name",
    "type": "string",
    "description": "A name for the package."
  },
  {
    "name": "package_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "storage_location",
    "type": "object",
    "description": "A storage location.",
    "children": [
      {
        "name": "bucket",
        "type": "string",
        "description": "The location's bucket."
      },
      {
        "name": "repo_prefix_location",
        "type": "string",
        "description": "The location's repo prefix."
      },
      {
        "name": "generated_prefix_location",
        "type": "string",
        "description": "The location's generated prefix."
      },
      {
        "name": "binary_prefix_location",
        "type": "string",
        "description": "The location's binary prefix."
      },
      {
        "name": "manifest_prefix_location",
        "type": "string",
        "description": "The location's manifest prefix."
      }
    ]
  },
  {
    "name": "created_time",
    "type": "integer",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags for the package.",
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
    "name": "package_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-package.html"><code>AWS::Panorama::Package</code></a>.

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
    <td><code>packages</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="PackageName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>packages</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>packages</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>packages_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>packages</code></td>
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

Gets all properties from an individual <code>package</code>.
```sql
SELECT
region,
package_name,
package_id,
arn,
storage_location,
created_time,
tags
FROM awscc.panorama.packages
WHERE region = 'us-east-1' AND Identifier = '<PackageId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>packages</code> in a region.
```sql
SELECT
region,
package_id
FROM awscc.panorama.packages_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>package</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.panorama.packages (
 PackageName,
 region
)
SELECT 
'{{ PackageName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.panorama.packages (
 PackageName,
 StorageLocation,
 Tags,
 region
)
SELECT 
 '{{ PackageName }}',
 '{{ StorageLocation }}',
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
  - name: package
    props:
      - name: PackageName
        value: '{{ PackageName }}'
      - name: StorageLocation
        value:
          Bucket: '{{ Bucket }}'
          RepoPrefixLocation: '{{ RepoPrefixLocation }}'
          GeneratedPrefixLocation: '{{ GeneratedPrefixLocation }}'
          BinaryPrefixLocation: '{{ BinaryPrefixLocation }}'
          ManifestPrefixLocation: '{{ ManifestPrefixLocation }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>package</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.panorama.packages
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<PackageId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.panorama.packages
WHERE Identifier = '<PackageId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>packages</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="create">

```json
panorama:CreatePackage,
panorama:ListTagsForResource,
panorama:TagResource,
panorama:DescribePackage,
s3:ListBucket,
s3:PutObject,
s3:GetObject,
s3:GetObjectVersion
```

</TabItem>
<TabItem value="read">

```json
panorama:DescribePackage,
panorama:ListTagsForResource,
s3:ListBucket,
s3:GetObject,
s3:GetObjectVersion
```

</TabItem>
<TabItem value="update">

```json
panorama:DescribePackage,
panorama:ListTagsForResource,
panorama:TagResource,
panorama:UntagResource,
s3:PutObject,
s3:ListBucket,
s3:GetObject,
s3:GetObjectVersion
```

</TabItem>
<TabItem value="list">

```json
panorama:ListPackages,
s3:ListBucket,
s3:GetObject,
s3:GetObjectVersion
```

</TabItem>
<TabItem value="delete">

```json
panorama:DeletePackage,
panorama:DescribePackage,
s3:DeleteObject,
s3:DeleteObjectVersion,
s3:DeleteObjectVersionTagging,
s3:ListObjects,
s3:ListObjectsV2,
s3:ListBucket,
s3:GetObject,
s3:GetObjectVersion
```

</TabItem>
</Tabs>