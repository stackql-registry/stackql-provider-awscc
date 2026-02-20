---
title: assets
hide_title: false
hide_table_of_contents: false
keywords:
  - assets
  - mediapackage
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

Creates, updates, deletes or gets an <code>asset</code> resource or lists <code>assets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>assets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::MediaPackage::Asset</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.mediapackage.assets" /></td></tr>
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
    "description": "The ARN of the Asset."
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The time the Asset was initially submitted for Ingest."
  },
  {
    "name": "egress_endpoints",
    "type": "array",
    "description": "The list of egress endpoints available for the Asset.",
    "children": [
      {
        "name": "packaging_configuration_id",
        "type": "string",
        "description": "The ID of the PackagingConfiguration being applied to the Asset."
      },
      {
        "name": "url",
        "type": "string",
        "description": "The URL of the parent manifest for the repackaged Asset."
      }
    ]
  },
  {
    "name": "id",
    "type": "string",
    "description": "The unique identifier for the Asset."
  },
  {
    "name": "packaging_group_id",
    "type": "string",
    "description": "The ID of the PackagingGroup for the Asset."
  },
  {
    "name": "resource_id",
    "type": "string",
    "description": "The resource ID to include in SPEKE key requests."
  },
  {
    "name": "source_arn",
    "type": "string",
    "description": "ARN of the source object in S3."
  },
  {
    "name": "source_role_arn",
    "type": "string",
    "description": "The IAM role&#95;arn used to access the source S3 bucket."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A collection of tags associated with a resource",
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
    "name": "id",
    "type": "string",
    "description": "The unique identifier for the Asset."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-asset.html"><code>AWS::MediaPackage::Asset</code></a>.

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
    <td><code>assets</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Id, PackagingGroupId, SourceArn, SourceRoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>assets</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>assets_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>assets</code></td>
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

Gets all properties from an individual <code>asset</code>.
```sql
SELECT
region,
arn,
created_at,
egress_endpoints,
id,
packaging_group_id,
resource_id,
source_arn,
source_role_arn,
tags
FROM awscc.mediapackage.assets
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>assets</code> in a region.
```sql
SELECT
region,
id
FROM awscc.mediapackage.assets_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>asset</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.mediapackage.assets (
 Id,
 PackagingGroupId,
 SourceArn,
 SourceRoleArn,
 region
)
SELECT 
'{{ Id }}',
 '{{ PackagingGroupId }}',
 '{{ SourceArn }}',
 '{{ SourceRoleArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.mediapackage.assets (
 EgressEndpoints,
 Id,
 PackagingGroupId,
 ResourceId,
 SourceArn,
 SourceRoleArn,
 Tags,
 region
)
SELECT 
 '{{ EgressEndpoints }}',
 '{{ Id }}',
 '{{ PackagingGroupId }}',
 '{{ ResourceId }}',
 '{{ SourceArn }}',
 '{{ SourceRoleArn }}',
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
  - name: asset
    props:
      - name: EgressEndpoints
        value:
          - PackagingConfigurationId: '{{ PackagingConfigurationId }}'
            Url: '{{ Url }}'
      - name: Id
        value: '{{ Id }}'
      - name: PackagingGroupId
        value: '{{ PackagingGroupId }}'
      - name: ResourceId
        value: '{{ ResourceId }}'
      - name: SourceArn
        value: '{{ SourceArn }}'
      - name: SourceRoleArn
        value: '{{ SourceRoleArn }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.mediapackage.assets
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>assets</code> resource, the following permissions are required:

### Create
```json
mediapackage-vod:CreateAsset,
mediapackage-vod:DescribeAsset,
mediapackage-vod:TagResource,
iam:PassRole
```

### Read
```json
mediapackage-vod:DescribeAsset
```

### Delete
```json
mediapackage-vod:DescribeAsset,
mediapackage-vod:DeleteAsset
```

### List
```json
mediapackage-vod:ListAssets,
mediapackage-vod:DescribePackagingGroup
```
