---
title: image_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - image_versions
  - sagemaker
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

Creates, updates, deletes or gets an <code>image_version</code> resource or lists <code>image_versions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>image_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SageMaker::ImageVersion</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sagemaker.image_versions" /></td></tr>
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
    "name": "image_name",
    "type": "string",
    "description": "The name of the image this version belongs to."
  },
  {
    "name": "image_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the parent image."
  },
  {
    "name": "image_version_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the image version."
  },
  {
    "name": "base_image",
    "type": "string",
    "description": "The registry path of the container image on which this image version is based."
  },
  {
    "name": "container_image",
    "type": "string",
    "description": "The image to use for the container that will be materialized for the inference component"
  },
  {
    "name": "version",
    "type": "integer",
    "description": "The version number of the image version."
  },
  {
    "name": "alias",
    "type": "string",
    "description": "The alias of the image version."
  },
  {
    "name": "aliases",
    "type": "array",
    "description": "List of aliases for the image version."
  },
  {
    "name": "vendor_guidance",
    "type": "string",
    "description": "The availability of the image version specified by the maintainer."
  },
  {
    "name": "job_type",
    "type": "string",
    "description": "Indicates SageMaker job type compatibility."
  },
  {
    "name": "ml_framework",
    "type": "string",
    "description": "The machine learning framework vended in the image version."
  },
  {
    "name": "programming_lang",
    "type": "string",
    "description": "The supported programming language and its version."
  },
  {
    "name": "processor",
    "type": "string",
    "description": "Indicates CPU or GPU compatibility."
  },
  {
    "name": "horovod",
    "type": "boolean",
    "description": "Indicates Horovod compatibility."
  },
  {
    "name": "release_notes",
    "type": "string",
    "description": "The maintainer description of the image version."
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
    "name": "image_version_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the image version."
  },
  {
    "name": "version",
    "type": "integer",
    "description": "The version number of the image version."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html"><code>AWS::SageMaker::ImageVersion</code></a>.

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
    <td><code>image_versions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ImageName, BaseImage, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>image_versions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>image_versions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>image_versions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>image_versions</code></td>
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

Gets all properties from an individual <code>image_version</code>.
```sql
SELECT
region,
image_name,
image_arn,
image_version_arn,
base_image,
container_image,
version,
alias,
aliases,
vendor_guidance,
job_type,
ml_framework,
programming_lang,
processor,
horovod,
release_notes
FROM awscc.sagemaker.image_versions
WHERE region = 'us-east-1' AND data__Identifier = '<ImageVersionArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>image_versions</code> in a region.
```sql
SELECT
region,
image_version_arn
FROM awscc.sagemaker.image_versions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>image_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.sagemaker.image_versions (
 ImageName,
 BaseImage,
 region
)
SELECT 
'{{ ImageName }}',
 '{{ BaseImage }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.sagemaker.image_versions (
 ImageName,
 BaseImage,
 Alias,
 Aliases,
 VendorGuidance,
 JobType,
 MLFramework,
 ProgrammingLang,
 Processor,
 Horovod,
 ReleaseNotes,
 region
)
SELECT 
 '{{ ImageName }}',
 '{{ BaseImage }}',
 '{{ Alias }}',
 '{{ Aliases }}',
 '{{ VendorGuidance }}',
 '{{ JobType }}',
 '{{ MLFramework }}',
 '{{ ProgrammingLang }}',
 '{{ Processor }}',
 '{{ Horovod }}',
 '{{ ReleaseNotes }}',
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
  - name: image_version
    props:
      - name: ImageName
        value: '{{ ImageName }}'
      - name: BaseImage
        value: '{{ BaseImage }}'
      - name: Alias
        value: '{{ Alias }}'
      - name: Aliases
        value:
          - null
      - name: VendorGuidance
        value: '{{ VendorGuidance }}'
      - name: JobType
        value: '{{ JobType }}'
      - name: MLFramework
        value: '{{ MLFramework }}'
      - name: ProgrammingLang
        value: '{{ ProgrammingLang }}'
      - name: Processor
        value: '{{ Processor }}'
      - name: Horovod
        value: '{{ Horovod }}'
      - name: ReleaseNotes
        value: '{{ ReleaseNotes }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.sagemaker.image_versions
SET data__PatchDocument = string('{{ {
    "Alias": alias,
    "Aliases": aliases,
    "VendorGuidance": vendor_guidance,
    "JobType": job_type,
    "MLFramework": ml_framework,
    "ProgrammingLang": programming_lang,
    "Processor": processor,
    "Horovod": horovod,
    "ReleaseNotes": release_notes
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<ImageVersionArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.sagemaker.image_versions
WHERE data__Identifier = '<ImageVersionArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>image_versions</code> resource, the following permissions are required:

### Create
```json
sagemaker:CreateImageVersion,
sagemaker:DescribeImageVersion
```

### Read
```json
sagemaker:DescribeImageVersion
```

### Update
```json
sagemaker:UpdateImageVersion,
sagemaker:DescribeImageVersion,
sagemaker:ListAliases
```

### Delete
```json
sagemaker:DeleteImageVersion,
sagemaker:DescribeImageVersion
```

### List
```json
sagemaker:ListImageVersions
```
