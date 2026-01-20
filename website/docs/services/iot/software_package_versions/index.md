---
title: software_package_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - software_package_versions
  - iot
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

Creates, updates, deletes or gets a <code>software_package_version</code> resource or lists <code>software_package_versions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>software_package_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>resource definition</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iot.software_package_versions" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "attributes",
    "type": "object",
    "description": ""
  },
  {
    "name": "artifact",
    "type": "object",
    "description": "The artifact location of the package version",
    "children": [
      {
        "name": "s3_location",
        "type": "object",
        "description": "The Amazon S3 location",
        "children": [
          {
            "name": "bucket",
            "type": "string",
            "description": "The S3 bucket"
          },
          {
            "name": "key",
            "type": "string",
            "description": "The S3 key"
          },
          {
            "name": "version",
            "type": "string",
            "description": "The S3 version"
          }
        ]
      }
    ]
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "error_reason",
    "type": "string",
    "description": ""
  },
  {
    "name": "package_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "package_version_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "recipe",
    "type": "string",
    "description": "The inline json job document associated with a software package version"
  },
  {
    "name": "sbom",
    "type": "object",
    "description": "The sbom zip archive location of the package version",
    "children": [
      {
        "name": "s3_location",
        "type": "object",
        "description": "The Amazon S3 location",
        "children": [
          {
            "name": "bucket",
            "type": "string",
            "description": "The S3 bucket"
          },
          {
            "name": "key",
            "type": "string",
            "description": "The S3 key"
          },
          {
            "name": "version",
            "type": "string",
            "description": "The S3 version"
          }
        ]
      }
    ]
  },
  {
    "name": "sbom_validation_status",
    "type": "string",
    "description": "The validation status of the Sbom file"
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
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
    "name": "version_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-softwarepackageversion.html"><code>AWS::IoT::SoftwarePackageVersion</code></a>.

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
    <td><CopyableCode code="PackageName, region" /></td>
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
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>software_package_version</code>.
```sql
SELECT
region,
attributes,
artifact,
description,
error_reason,
package_name,
package_version_arn,
recipe,
sbom,
sbom_validation_status,
status,
tags,
version_name
FROM awscc.iot.software_package_versions
WHERE region = 'us-east-1' AND data__Identifier = '<PackageName>|<VersionName>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>software_package_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iot.software_package_versions (
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
INSERT INTO awscc.iot.software_package_versions (
 Attributes,
 Artifact,
 Description,
 PackageName,
 Recipe,
 Sbom,
 Tags,
 VersionName,
 region
)
SELECT 
 '{{ Attributes }}',
 '{{ Artifact }}',
 '{{ Description }}',
 '{{ PackageName }}',
 '{{ Recipe }}',
 '{{ Sbom }}',
 '{{ Tags }}',
 '{{ VersionName }}',
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
  - name: software_package_version
    props:
      - name: Attributes
        value: {}
      - name: Artifact
        value:
          S3Location:
            Bucket: '{{ Bucket }}'
            Key: '{{ Key }}'
            Version: '{{ Version }}'
      - name: Description
        value: '{{ Description }}'
      - name: PackageName
        value: '{{ PackageName }}'
      - name: Recipe
        value: '{{ Recipe }}'
      - name: Sbom
        value:
          S3Location: null
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: VersionName
        value: '{{ VersionName }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iot.software_package_versions
WHERE data__Identifier = '<PackageName|VersionName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>software_package_versions</code> resource, the following permissions are required:

### Create
```json
iot:CreatePackageVersion,
iot:GetPackageVersion,
iot:ListTagsForResource,
iot:TagResource,
iot:GetIndexingConfiguration,
s3:GetObjectVersion,
iot:AssociateSbomWithPackageVersion
```

### Read
```json
iot:GetPackageVersion,
iot:ListTagsForResource
```

### Update
```json
iot:UpdatePackageVersion,
iot:GetPackageVersion,
iot:ListTagsForResource,
iot:TagResource,
iot:UntagResource,
iot:GetIndexingConfiguration,
s3:GetObjectVersion,
iot:AssociateSbomWithPackageVersion,
iot:DisassociateSbomFromPackageVersion
```

### Delete
```json
iot:DeletePackageVersion,
iot:UpdatePackageVersion,
iot:GetPackageVersion,
iot:GetIndexingConfiguration
```

### List
```json
iot:ListPackageVersions
```
