---
title: package_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - package_versions
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

Creates, updates, deletes or gets a <code>package_version</code> resource or lists <code>package_versions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>package_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Registers a package version.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.panorama.package_versions" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "owner_account",
    "type": "string",
    "description": "An owner account."
  },
  {
    "name": "package_id",
    "type": "string",
    "description": "A package ID."
  },
  {
    "name": "package_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "package_version",
    "type": "string",
    "description": "A package version."
  },
  {
    "name": "patch_version",
    "type": "string",
    "description": "A patch version."
  },
  {
    "name": "mark_latest",
    "type": "boolean",
    "description": "Whether to mark the new version as the latest version."
  },
  {
    "name": "is_latest_patch",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "package_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "status_description",
    "type": "string",
    "description": ""
  },
  {
    "name": "registered_time",
    "type": "integer",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-packageversion.html"><code>AWS::Panorama::PackageVersion</code></a>.

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
    <td><CopyableCode code="PackageId, PackageVersion, PatchVersion, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>package_version</code>.
```sql
SELECT
region,
owner_account,
package_id,
package_arn,
package_version,
patch_version,
mark_latest,
is_latest_patch,
package_name,
status,
status_description,
registered_time,
updated_latest_patch_version
FROM awscc.panorama.package_versions
WHERE region = 'us-east-1' AND data__Identifier = '<PackageId>|<PackageVersion>|<PatchVersion>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>package_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.panorama.package_versions (
 PackageId,
 PackageVersion,
 PatchVersion,
 region
)
SELECT 
'{{ PackageId }}',
 '{{ PackageVersion }}',
 '{{ PatchVersion }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.panorama.package_versions (
 OwnerAccount,
 PackageId,
 PackageVersion,
 PatchVersion,
 MarkLatest,
 UpdatedLatestPatchVersion,
 region
)
SELECT 
 '{{ OwnerAccount }}',
 '{{ PackageId }}',
 '{{ PackageVersion }}',
 '{{ PatchVersion }}',
 '{{ MarkLatest }}',
 '{{ UpdatedLatestPatchVersion }}',
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
  - name: package_version
    props:
      - name: OwnerAccount
        value: '{{ OwnerAccount }}'
      - name: PackageId
        value: '{{ PackageId }}'
      - name: PackageVersion
        value: '{{ PackageVersion }}'
      - name: PatchVersion
        value: '{{ PatchVersion }}'
      - name: MarkLatest
        value: '{{ MarkLatest }}'
      - name: UpdatedLatestPatchVersion
        value: null

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.panorama.package_versions
SET data__PatchDocument = string('{{ {
    "MarkLatest": mark_latest,
    "UpdatedLatestPatchVersion": updated_latest_patch_version
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<PackageId>|<PackageVersion>|<PatchVersion>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.panorama.package_versions
WHERE data__Identifier = '<PackageId|PackageVersion|PatchVersion>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>package_versions</code> resource, the following permissions are required:

### Create
```json
panorama:RegisterPackageVersion,
panorama:DescribePackageVersion,
s3:ListBucket,
s3:PutObject,
s3:GetObject,
s3:GetObjectVersion
```

### Read
```json
panorama:DescribePackageVersion,
s3:ListBucket,
s3:GetObject,
s3:GetObjectVersion
```

### Update
```json
panorama:DescribePackageVersion,
panorama:RegisterPackageVersion,
s3:ListBucket,
s3:PutObject,
s3:GetObject,
s3:GetObjectVersion
```

### Delete
```json
panorama:DeregisterPackageVersion,
panorama:DescribePackageVersion,
s3:DeleteObject,
s3:DeleteObjectVersion,
s3:DeleteObjectVersionTagging,
s3:ListBucket,
s3:GetObject,
s3:GetObjectVersion
```
