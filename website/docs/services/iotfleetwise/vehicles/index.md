---
title: vehicles
hide_title: false
hide_table_of_contents: false
keywords:
  - vehicles
  - iotfleetwise
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

Creates, updates, deletes or gets a <code>vehicle</code> resource or lists <code>vehicles</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vehicles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::IoTFleetWise::Vehicle Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotfleetwise.vehicles" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "association_behavior",
    "type": "string",
    "description": ""
  },
  {
    "name": "attributes",
    "type": "object",
    "description": ""
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "decoder_manifest_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "last_modification_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "model_manifest_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
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
    "name": "state_templates",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "identifier",
        "type": "string",
        "description": ""
      },
      {
        "name": "state_template_update_strategy",
        "type": "object",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html"><code>AWS::IoTFleetWise::Vehicle</code></a>.

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
    <td><CopyableCode code="Name, DecoderManifestArn, ModelManifestArn, region" /></td>
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

Gets all properties from an individual <code>vehicle</code>.
```sql
SELECT
region,
arn,
association_behavior,
attributes,
creation_time,
decoder_manifest_arn,
name,
last_modification_time,
model_manifest_arn,
tags,
state_templates
FROM awscc.iotfleetwise.vehicles
WHERE region = 'us-east-1' AND data__Identifier = '<Name>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>vehicle</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iotfleetwise.vehicles (
 DecoderManifestArn,
 Name,
 ModelManifestArn,
 region
)
SELECT 
'{{ DecoderManifestArn }}',
 '{{ Name }}',
 '{{ ModelManifestArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iotfleetwise.vehicles (
 AssociationBehavior,
 Attributes,
 DecoderManifestArn,
 Name,
 ModelManifestArn,
 Tags,
 StateTemplates,
 region
)
SELECT 
 '{{ AssociationBehavior }}',
 '{{ Attributes }}',
 '{{ DecoderManifestArn }}',
 '{{ Name }}',
 '{{ ModelManifestArn }}',
 '{{ Tags }}',
 '{{ StateTemplates }}',
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
  - name: vehicle
    props:
      - name: AssociationBehavior
        value: '{{ AssociationBehavior }}'
      - name: Attributes
        value: {}
      - name: DecoderManifestArn
        value: '{{ DecoderManifestArn }}'
      - name: Name
        value: '{{ Name }}'
      - name: ModelManifestArn
        value: '{{ ModelManifestArn }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: StateTemplates
        value:
          - Identifier: '{{ Identifier }}'
            StateTemplateUpdateStrategy: null

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotfleetwise.vehicles
WHERE data__Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>vehicles</code> resource, the following permissions are required:

### Create
```json
iotfleetwise:GetVehicle,
iotfleetwise:CreateVehicle,
iot:CreateThing,
iot:DeleteThing,
iot:DescribeThing,
iotfleetwise:ListTagsForResource,
iotfleetwise:ListVehicles,
iotfleetwise:TagResource
```

### Read
```json
iotfleetwise:GetVehicle,
iotfleetwise:ListTagsForResource
```

### Update
```json
iotfleetwise:GetVehicle,
iotfleetwise:UpdateVehicle,
iotfleetwise:ListTagsForResource,
iotfleetwise:TagResource,
iotfleetwise:UntagResource
```

### Delete
```json
iotfleetwise:GetVehicle,
iotfleetwise:DeleteVehicle
```

### List
```json
iotfleetwise:ListVehicles
```
