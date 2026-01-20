---
title: layer_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - layer_versions
  - lambda
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

Creates, updates, deletes or gets a <code>layer_version</code> resource or lists <code>layer_versions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>layer_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Lambda::LayerVersion</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lambda.layer_versions" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "compatible_runtimes",
    "type": "array",
    "description": "A list of compatible function runtimes. Used for filtering with ListLayers and ListLayerVersions."
  },
  {
    "name": "license_info",
    "type": "string",
    "description": "The layer's software license."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the version."
  },
  {
    "name": "layer_name",
    "type": "string",
    "description": "The name or Amazon Resource Name (ARN) of the layer."
  },
  {
    "name": "content",
    "type": "object",
    "description": "The function layer archive.",
    "children": [
      {
        "name": "s3_object_version",
        "type": "string",
        "description": "For versioned objects, the version of the layer archive object to use."
      },
      {
        "name": "s3_bucket",
        "type": "string",
        "description": "The Amazon S3 bucket of the layer archive."
      },
      {
        "name": "s3_key",
        "type": "string",
        "description": "The Amazon S3 key of the layer archive."
      }
    ]
  },
  {
    "name": "layer_version_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "compatible_architectures",
    "type": "array",
    "description": "A list of compatible instruction set architectures."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversion.html"><code>AWS::Lambda::LayerVersion</code></a>.

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
    <td><CopyableCode code="Content, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>layer_version</code>.
```sql
SELECT
region,
compatible_runtimes,
license_info,
description,
layer_name,
content,
layer_version_arn,
compatible_architectures
FROM awscc.lambda.layer_versions
WHERE region = 'us-east-1' AND data__Identifier = '<LayerVersionArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>layer_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.lambda.layer_versions (
 Content,
 region
)
SELECT 
'{{ Content }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.lambda.layer_versions (
 CompatibleRuntimes,
 LicenseInfo,
 Description,
 LayerName,
 Content,
 CompatibleArchitectures,
 region
)
SELECT 
 '{{ CompatibleRuntimes }}',
 '{{ LicenseInfo }}',
 '{{ Description }}',
 '{{ LayerName }}',
 '{{ Content }}',
 '{{ CompatibleArchitectures }}',
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
  - name: layer_version
    props:
      - name: CompatibleRuntimes
        value:
          - '{{ CompatibleRuntimes[0] }}'
      - name: LicenseInfo
        value: '{{ LicenseInfo }}'
      - name: Description
        value: '{{ Description }}'
      - name: LayerName
        value: '{{ LayerName }}'
      - name: Content
        value:
          S3ObjectVersion: '{{ S3ObjectVersion }}'
          S3Bucket: '{{ S3Bucket }}'
          S3Key: '{{ S3Key }}'
      - name: CompatibleArchitectures
        value:
          - '{{ CompatibleArchitectures[0] }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.lambda.layer_versions
WHERE data__Identifier = '<LayerVersionArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>layer_versions</code> resource, the following permissions are required:

### Create
```json
lambda:PublishLayerVersion,
s3:GetObject,
s3:GetObjectVersion
```

### Read
```json
lambda:GetLayerVersion
```

### Delete
```json
lambda:GetLayerVersion,
lambda:DeleteLayerVersion
```

### List
```json
lambda:ListLayerVersions
```
