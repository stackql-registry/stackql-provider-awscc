---
title: asset_models
hide_title: false
hide_table_of_contents: false
keywords:
  - asset_models
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

Creates, updates, deletes or gets an <code>asset_model</code> resource or lists <code>asset_models</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>asset_models</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::IoTSiteWise::AssetModel</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotsitewise.asset_models" /></td></tr>
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
    "name": "asset_model_id",
    "type": "string",
    "description": "The ID of the asset model."
  },
  {
    "name": "asset_model_type",
    "type": "string",
    "description": "The type of the asset model (ASSET&#95;MODEL OR COMPONENT&#95;MODEL or INTERFACE)"
  },
  {
    "name": "asset_model_external_id",
    "type": "string",
    "description": "The external ID of the asset model."
  },
  {
    "name": "asset_model_arn",
    "type": "string",
    "description": "The ARN of the asset model, which has the following format."
  },
  {
    "name": "asset_model_name",
    "type": "string",
    "description": "A unique, friendly name for the asset model."
  },
  {
    "name": "asset_model_description",
    "type": "string",
    "description": "A description for the asset model."
  },
  {
    "name": "asset_model_properties",
    "type": "array",
    "description": "The property definitions of the asset model. You can specify up to 200 properties per asset model.",
    "children": [
      {
        "name": "logical_id",
        "type": "string",
        "description": "Customer provided Logical ID for property."
      },
      {
        "name": "id",
        "type": "string",
        "description": "The ID of the Asset Model Property"
      },
      {
        "name": "external_id",
        "type": "string",
        "description": "The External ID of the Asset Model Property"
      },
      {
        "name": "name",
        "type": "string",
        "description": "The name of the asset model property."
      },
      {
        "name": "data_type",
        "type": "string",
        "description": "The data type of the asset model property."
      },
      {
        "name": "data_type_spec",
        "type": "string",
        "description": "The data type of the structure for this property."
      },
      {
        "name": "unit",
        "type": "string",
        "description": "The unit of the asset model property, such as Newtons or RPM."
      },
      {
        "name": "type",
        "type": "object",
        "description": "The property type",
        "children": [
          {
            "name": "type_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "attribute",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "default_value",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "transform",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "expression",
                "type": "string",
                "description": "The mathematical expression that defines the transformation function. You can specify up to 10 functions per expression."
              },
              {
                "name": "variables",
                "type": "array",
                "description": "The list of variables used in the expression."
              }
            ]
          },
          {
            "name": "metric",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "expression",
                "type": "string",
                "description": "The mathematical expression that defines the metric aggregation function. You can specify up to 10 functions per expression."
              },
              {
                "name": "variables",
                "type": "array",
                "description": "The list of variables used in the expression."
              },
              {
                "name": "window",
                "type": "object",
                "description": "The window (time interval) over which AWS IoT SiteWise computes the metric's aggregation expression"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "asset_model_composite_models",
    "type": "array",
    "description": "The composite asset models that are part of this asset model. Composite asset models are asset models that contain specific properties.",
    "children": [
      {
        "name": "id",
        "type": "string",
        "description": "The Actual ID of the composite model"
      },
      {
        "name": "external_id",
        "type": "string",
        "description": "The External ID of the composite model"
      },
      {
        "name": "composed_asset_model_id",
        "type": "string",
        "description": "The component model ID for which the composite model is composed of"
      },
      {
        "name": "parent_asset_model_composite_model_external_id",
        "type": "string",
        "description": "The parent composite model External ID"
      },
      {
        "name": "path",
        "type": "array",
        "description": "The path of the composite model. This is only for derived composite models"
      },
      {
        "name": "description",
        "type": "string",
        "description": "A description for the asset composite model."
      },
      {
        "name": "name",
        "type": "string",
        "description": "A unique, friendly name for the asset composite model."
      },
      {
        "name": "type",
        "type": "string",
        "description": "The type of the composite model. For alarm composite models, this type is AWS/ALARM"
      },
      {
        "name": "composite_model_properties",
        "type": "array",
        "description": "The property definitions of the asset model. You can specify up to 200 properties per asset model."
      }
    ]
  },
  {
    "name": "asset_model_hierarchies",
    "type": "array",
    "description": "The hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. You can specify up to 10 hierarchies per asset model.",
    "children": [
      {
        "name": "id",
        "type": "string",
        "description": "Customer provided actual ID for hierarchy"
      },
      {
        "name": "external_id",
        "type": "string",
        "description": "Customer provided external ID for hierarchy"
      },
      {
        "name": "logical_id",
        "type": "string",
        "description": "Customer provided logical ID for hierarchy."
      },
      {
        "name": "name",
        "type": "string",
        "description": "The name of the asset model hierarchy."
      },
      {
        "name": "child_asset_model_id",
        "type": "string",
        "description": "The ID of the asset model. All assets in this hierarchy must be instances of the child AssetModelId asset model."
      }
    ]
  },
  {
    "name": "enforced_asset_model_interface_relationships",
    "type": "array",
    "description": "a list of asset model and interface relationships",
    "children": [
      {
        "name": "interface_asset_model_id",
        "type": "string",
        "description": "The ID of the interface that is enforced to the asset model"
      },
      {
        "name": "property_mappings",
        "type": "array",
        "description": "Contains information about enforced interface property and asset model property",
        "children": [
          {
            "name": "asset_model_property_external_id",
            "type": "string",
            "description": "The external ID of the enforced asset model property"
          },
          {
            "name": "asset_model_property_logical_id",
            "type": "string",
            "description": "The logical ID of the enforced asset model property"
          },
          {
            "name": "interface_asset_model_property_external_id",
            "type": "string",
            "description": "The external ID of the enforced interface property"
          }
        ]
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
    "name": "asset_model_id",
    "type": "string",
    "description": "The ID of the asset model."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html"><code>AWS::IoTSiteWise::AssetModel</code></a>.

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
    <td><code>asset_models</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AssetModelName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>asset_models</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>asset_models</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>asset_models_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>asset_models</code></td>
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

Gets all properties from an individual <code>asset_model</code>.
```sql
SELECT
region,
asset_model_id,
asset_model_type,
asset_model_external_id,
asset_model_arn,
asset_model_name,
asset_model_description,
asset_model_properties,
asset_model_composite_models,
asset_model_hierarchies,
enforced_asset_model_interface_relationships,
tags
FROM awscc.iotsitewise.asset_models
WHERE region = 'us-east-1' AND Identifier = '<AssetModelId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>asset_models</code> in a region.
```sql
SELECT
region,
asset_model_id
FROM awscc.iotsitewise.asset_models_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>asset_model</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iotsitewise.asset_models (
 AssetModelName,
 region
)
SELECT 
'{{ AssetModelName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iotsitewise.asset_models (
 AssetModelType,
 AssetModelExternalId,
 AssetModelName,
 AssetModelDescription,
 AssetModelProperties,
 AssetModelCompositeModels,
 AssetModelHierarchies,
 EnforcedAssetModelInterfaceRelationships,
 Tags,
 region
)
SELECT 
 '{{ AssetModelType }}',
 '{{ AssetModelExternalId }}',
 '{{ AssetModelName }}',
 '{{ AssetModelDescription }}',
 '{{ AssetModelProperties }}',
 '{{ AssetModelCompositeModels }}',
 '{{ AssetModelHierarchies }}',
 '{{ EnforcedAssetModelInterfaceRelationships }}',
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
  - name: asset_model
    props:
      - name: AssetModelType
        value: '{{ AssetModelType }}'
      - name: AssetModelExternalId
        value: '{{ AssetModelExternalId }}'
      - name: AssetModelName
        value: '{{ AssetModelName }}'
      - name: AssetModelDescription
        value: '{{ AssetModelDescription }}'
      - name: AssetModelProperties
        value:
          - LogicalId: '{{ LogicalId }}'
            Id: '{{ Id }}'
            ExternalId: '{{ ExternalId }}'
            Name: '{{ Name }}'
            DataType: '{{ DataType }}'
            DataTypeSpec: '{{ DataTypeSpec }}'
            Unit: '{{ Unit }}'
            Type:
              TypeName: '{{ TypeName }}'
              Attribute:
                DefaultValue: '{{ DefaultValue }}'
              Transform:
                Expression: '{{ Expression }}'
                Variables:
                  - Name: '{{ Name }}'
                    Value:
                      PropertyLogicalId: '{{ PropertyLogicalId }}'
                      PropertyId: '{{ PropertyId }}'
                      PropertyExternalId: '{{ PropertyExternalId }}'
                      PropertyPath:
                        - Name: '{{ Name }}'
                      HierarchyLogicalId: '{{ HierarchyLogicalId }}'
                      HierarchyId: '{{ HierarchyId }}'
                      HierarchyExternalId: '{{ HierarchyExternalId }}'
              Metric:
                Expression: '{{ Expression }}'
                Variables:
                  - null
                Window:
                  Tumbling:
                    Interval: '{{ Interval }}'
                    Offset: '{{ Offset }}'
      - name: AssetModelCompositeModels
        value:
          - Id: '{{ Id }}'
            ExternalId: '{{ ExternalId }}'
            ComposedAssetModelId: '{{ ComposedAssetModelId }}'
            ParentAssetModelCompositeModelExternalId: '{{ ParentAssetModelCompositeModelExternalId }}'
            Path:
              - '{{ Path[0] }}'
            Description: '{{ Description }}'
            Name: '{{ Name }}'
            Type: '{{ Type }}'
            CompositeModelProperties:
              - null
      - name: AssetModelHierarchies
        value:
          - Id: '{{ Id }}'
            ExternalId: '{{ ExternalId }}'
            LogicalId: '{{ LogicalId }}'
            Name: '{{ Name }}'
            ChildAssetModelId: '{{ ChildAssetModelId }}'
      - name: EnforcedAssetModelInterfaceRelationships
        value:
          - InterfaceAssetModelId: '{{ InterfaceAssetModelId }}'
            PropertyMappings:
              - AssetModelPropertyExternalId: '{{ AssetModelPropertyExternalId }}'
                AssetModelPropertyLogicalId: '{{ AssetModelPropertyLogicalId }}'
                InterfaceAssetModelPropertyExternalId: '{{ InterfaceAssetModelPropertyExternalId }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>asset_model</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iotsitewise.asset_models
SET PatchDocument = string('{{ {
    "AssetModelExternalId": asset_model_external_id,
    "AssetModelName": asset_model_name,
    "AssetModelDescription": asset_model_description,
    "EnforcedAssetModelInterfaceRelationships": enforced_asset_model_interface_relationships,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<AssetModelId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotsitewise.asset_models
WHERE Identifier = '<AssetModelId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>asset_models</code> resource, the following permissions are required:

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
iotsitewise:CreateAssetModel,
iotsitewise:ListTagsForResource,
iotsitewise:TagResource,
iotsitewise:DescribeAssetModel,
iotsitewise:UpdateAssetModel,
iotsitewise:ListAssetModelProperties,
iotsitewise:ListAssetModelCompositeModels,
iotsitewise:UpdateAssetModelCompositeModel,
iotsitewise:DescribeAssetModelCompositeModel,
iotsitewise:CreateAssetModelCompositeModel,
iotsitewise:PutAssetModelInterfaceRelationship,
iotsitewise:DescribeAssetModelInterfaceRelationship
```

</TabItem>
<TabItem value="read">

```json
iotsitewise:DescribeAssetModel,
iotsitewise:ListAssetModelProperties,
iotsitewise:DescribeAssetModelCompositeModel,
iotsitewise:ListAssetModelCompositeModels,
iotsitewise:ListTagsForResource,
iotsitewise:DescribeAssetModelInterfaceRelationship
```

</TabItem>
<TabItem value="update">

```json
iotsitewise:DescribeAssetModel,
iotsitewise:ListTagsForResource,
iotsitewise:TagResource,
iotsitewise:UntagResource,
iotsitewise:ListAssetModelProperties,
iotsitewise:ListAssetModelCompositeModels,
iotsitewise:CreateAssetModelCompositeModel,
iotsitewise:UpdateAssetModelCompositeModel,
iotsitewise:DeleteAssetModelCompositeModel,
iotsitewise:DescribeAssetModelCompositeModel,
iotsitewise:UpdateAssetModel,
iotsitewise:PutAssetModelInterfaceRelationship,
iotsitewise:DeleteAssetModelInterfaceRelationship,
iotsitewise:DescribeAssetModelInterfaceRelationship
```

</TabItem>
<TabItem value="delete">

```json
iotsitewise:DescribeAssetModel,
iotsitewise:DeleteAssetModel,
iotsitewise:ListAssetModelProperties,
iotsitewise:ListAssetModelCompositeModels
```

</TabItem>
<TabItem value="list">

```json
iotsitewise:DescribeAssetModel,
iotsitewise:ListAssetModels,
iotsitewise:ListTagsForResource,
iotsitewise:ListAssetModelProperties,
iotsitewise:ListAssetModelCompositeModels
```

</TabItem>
</Tabs>