---
title: assets
hide_title: false
hide_table_of_contents: false
keywords:
  - assets
  - iotsitewise
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
<tr><td><b>Description</b></td><td>Resource schema for AWS::IoTSiteWise::Asset</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotsitewise.assets" /></td></tr>
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
    "name": "asset_id",
    "type": "string",
    "description": "The ID of the asset"
  },
  {
    "name": "asset_external_id",
    "type": "string",
    "description": "The External ID of the asset"
  },
  {
    "name": "asset_model_id",
    "type": "string",
    "description": "The ID of the asset model from which to create the asset."
  },
  {
    "name": "asset_arn",
    "type": "string",
    "description": "The ARN of the asset"
  },
  {
    "name": "asset_name",
    "type": "string",
    "description": "A unique, friendly name for the asset."
  },
  {
    "name": "asset_description",
    "type": "string",
    "description": "A description for the asset"
  },
  {
    "name": "asset_properties",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "id",
        "type": "string",
        "description": "Customer provided actual UUID for property"
      },
      {
        "name": "external_id",
        "type": "string",
        "description": "String-friendly customer provided external ID"
      },
      {
        "name": "logical_id",
        "type": "string",
        "description": "Customer provided ID for property."
      },
      {
        "name": "alias",
        "type": "string",
        "description": "The property alias that identifies the property."
      },
      {
        "name": "notification_state",
        "type": "string",
        "description": "The MQTT notification state (ENABLED or DISABLED) for this asset property."
      },
      {
        "name": "unit",
        "type": "string",
        "description": "The unit of measure (such as Newtons or RPM) of the asset property. If you don't specify a value for this parameter, the service uses the value of the assetModelProperty in the asset model."
      }
    ]
  },
  {
    "name": "asset_hierarchies",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "id",
        "type": "string",
        "description": "Customer provided actual UUID for property"
      },
      {
        "name": "external_id",
        "type": "string",
        "description": "String-friendly customer provided external ID"
      },
      {
        "name": "logical_id",
        "type": "string",
        "description": "The LogicalID of a hierarchy in the parent asset's model."
      },
      {
        "name": "child_asset_id",
        "type": "string",
        "description": "The ID of the child asset to be associated."
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of key-value pairs that contain metadata for the asset.",
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
    "name": "asset_id",
    "type": "string",
    "description": "The ID of the asset"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-asset.html"><code>AWS::IoTSiteWise::Asset</code></a>.

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
    <td><CopyableCode code="AssetName, AssetModelId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>assets</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>assets</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
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

Gets all properties from an individual <code>asset</code>.
```sql
SELECT
region,
asset_id,
asset_external_id,
asset_model_id,
asset_arn,
asset_name,
asset_description,
asset_properties,
asset_hierarchies,
tags
FROM awscc.iotsitewise.assets
WHERE region = 'us-east-1' AND Identifier = '<AssetId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>assets</code> in a region.
```sql
SELECT
region,
asset_id
FROM awscc.iotsitewise.assets_list_only
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
INSERT INTO awscc.iotsitewise.assets (
 AssetModelId,
 AssetName,
 region
)
SELECT 
'{{ AssetModelId }}',
 '{{ AssetName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iotsitewise.assets (
 AssetExternalId,
 AssetModelId,
 AssetName,
 AssetDescription,
 AssetProperties,
 AssetHierarchies,
 Tags,
 region
)
SELECT 
 '{{ AssetExternalId }}',
 '{{ AssetModelId }}',
 '{{ AssetName }}',
 '{{ AssetDescription }}',
 '{{ AssetProperties }}',
 '{{ AssetHierarchies }}',
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
      - name: AssetExternalId
        value: '{{ AssetExternalId }}'
      - name: AssetModelId
        value: '{{ AssetModelId }}'
      - name: AssetName
        value: '{{ AssetName }}'
      - name: AssetDescription
        value: '{{ AssetDescription }}'
      - name: AssetProperties
        value:
          - Id: '{{ Id }}'
            ExternalId: '{{ ExternalId }}'
            LogicalId: '{{ LogicalId }}'
            Alias: '{{ Alias }}'
            NotificationState: '{{ NotificationState }}'
            Unit: '{{ Unit }}'
      - name: AssetHierarchies
        value:
          - Id: '{{ Id }}'
            ExternalId: '{{ ExternalId }}'
            LogicalId: '{{ LogicalId }}'
            ChildAssetId: '{{ ChildAssetId }}'
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
UPDATE awscc.iotsitewise.assets
SET PatchDocument = string('{{ {
    "AssetExternalId": asset_external_id,
    "AssetModelId": asset_model_id,
    "AssetName": asset_name,
    "AssetDescription": asset_description,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<AssetId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotsitewise.assets
WHERE Identifier = '<AssetId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>assets</code> resource, the following permissions are required:

### Create
```json
iotsitewise:AssociateAssets,
iotsitewise:CreateAsset,
iotsitewise:DescribeAsset,
iotsitewise:DescribeAssetModel,
iotsitewise:ListAssociatedAssets,
iotsitewise:ListTagsForResource,
iotsitewise:TagResource,
iotsitewise:ListAssetModelProperties,
iotsitewise:ListAssetProperties,
iotsitewise:ListAssetModelCompositeModels,
iotsitewise:UpdateAssetProperty
```

### Read
```json
iotsitewise:DescribeAsset,
iotsitewise:DescribeAssetModel,
iotsitewise:ListAssociatedAssets,
iotsitewise:ListAssetModelProperties,
iotsitewise:ListAssetModelCompositeModels,
iotsitewise:ListAssetProperties,
iotsitewise:ListTagsForResource
```

### Update
```json
iotsitewise:AssociateAssets,
iotsitewise:DescribeAsset,
iotsitewise:DescribeAssetModel,
iotsitewise:DisassociateAssets,
iotsitewise:ListAssociatedAssets,
iotsitewise:ListTagsForResource,
iotsitewise:TagResource,
iotsitewise:UpdateAsset,
iotsitewise:UpdateAssetProperty,
iotsitewise:ListAssetModelProperties,
iotsitewise:ListAssetProperties,
iotsitewise:ListAssetModelCompositeModels,
iotsitewise:UntagResource
```

### Delete
```json
iotsitewise:DeleteAsset,
iotsitewise:DescribeAsset,
iotsitewise:DescribeAssetModel,
iotsitewise:DisassociateAssets,
iotsitewise:ListAssociatedAssets,
iotsitewise:ListAssetProperties,
iotsitewise:ListTagsForResource,
iotsitewise:ListAssetModelCompositeModels,
iotsitewise:ListAssetModelProperties,
iotsitewise:ListAssetProperties
```

### List
```json
iotsitewise:ListAssetModels,
iotsitewise:ListAssets
```
