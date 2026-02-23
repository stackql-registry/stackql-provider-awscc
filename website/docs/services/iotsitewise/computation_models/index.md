---
title: computation_models
hide_title: false
hide_table_of_contents: false
keywords:
  - computation_models
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

Creates, updates, deletes or gets a <code>computation_model</code> resource or lists <code>computation_models</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>computation_models</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::IoTSiteWise::ComputationModel.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotsitewise.computation_models" /></td></tr>
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
    "name": "computation_model_id",
    "type": "string",
    "description": "The ID of the computation model."
  },
  {
    "name": "computation_model_arn",
    "type": "string",
    "description": "The ARN of the computation model."
  },
  {
    "name": "computation_model_name",
    "type": "string",
    "description": "The name of the computation model."
  },
  {
    "name": "computation_model_description",
    "type": "string",
    "description": "A description about the computation model."
  },
  {
    "name": "computation_model_configuration",
    "type": "object",
    "description": "The configuration for the computation model.",
    "children": [
      {
        "name": "anomaly_detection",
        "type": "object",
        "description": "Contains configuration for anomaly detection computation model.",
        "children": [
          {
            "name": "input_properties",
            "type": "string",
            "description": "Input properties for anomaly detection."
          },
          {
            "name": "result_property",
            "type": "string",
            "description": "Result property for anomaly detection."
          }
        ]
      }
    ]
  },
  {
    "name": "computation_model_data_binding",
    "type": "object",
    "description": "The data binding for the computation model."
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "computation_model_id",
    "type": "string",
    "description": "The ID of the computation model."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-computationmodel.html"><code>AWS::IoTSiteWise::ComputationModel</code></a>.

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
    <td><code>computation_models</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ComputationModelName, ComputationModelConfiguration, ComputationModelDataBinding, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>computation_models</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>computation_models</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>computation_models_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>computation_models</code></td>
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

Gets all properties from an individual <code>computation_model</code>.
```sql
SELECT
region,
computation_model_id,
computation_model_arn,
computation_model_name,
computation_model_description,
computation_model_configuration,
computation_model_data_binding,
tags
FROM awscc.iotsitewise.computation_models
WHERE region = 'us-east-1' AND Identifier = '{{ computation_model_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>computation_models</code> in a region.
```sql
SELECT
region,
computation_model_id
FROM awscc.iotsitewise.computation_models_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>computation_model</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iotsitewise.computation_models (
 ComputationModelName,
 ComputationModelConfiguration,
 ComputationModelDataBinding,
 region
)
SELECT
'{{ computation_model_name }}',
 '{{ computation_model_configuration }}',
 '{{ computation_model_data_binding }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iotsitewise.computation_models (
 ComputationModelName,
 ComputationModelDescription,
 ComputationModelConfiguration,
 ComputationModelDataBinding,
 Tags,
 region
)
SELECT
 '{{ computation_model_name }}',
 '{{ computation_model_description }}',
 '{{ computation_model_configuration }}',
 '{{ computation_model_data_binding }}',
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
  - name: computation_model
    props:
      - name: computation_model_name
        value: '{{ computation_model_name }}'
      - name: computation_model_description
        value: '{{ computation_model_description }}'
      - name: computation_model_configuration
        value:
          anomaly_detection:
            input_properties: '{{ input_properties }}'
            result_property: '{{ result_property }}'
      - name: computation_model_data_binding
        value: {}
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>computation_model</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iotsitewise.computation_models
SET PatchDocument = string('{{ {
    "ComputationModelName": computation_model_name,
    "ComputationModelDescription": computation_model_description,
    "ComputationModelConfiguration": computation_model_configuration,
    "ComputationModelDataBinding": computation_model_data_binding,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ computation_model_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotsitewise.computation_models
WHERE Identifier = '{{ computation_model_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>computation_models</code> resource, the following permissions are required:

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
iotsitewise:CreateComputationModel,
iotsitewise:DescribeComputationModel,
iotsitewise:ListTagsForResource,
iotsitewise:TagResource
```

</TabItem>
<TabItem value="read">

```json
iotsitewise:DescribeComputationModel,
iotsitewise:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
iotsitewise:UpdateComputationModel,
iotsitewise:DescribeComputationModel,
iotsitewise:ListTagsForResource,
iotsitewise:TagResource,
iotsitewise:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
iotsitewise:DeleteComputationModel,
iotsitewise:DescribeComputationModel,
iotsitewise:ListTagsForResource
```

</TabItem>
<TabItem value="list">

```json
iotsitewise:ListComputationModels,
iotsitewise:ListTagsForResource
```

</TabItem>
</Tabs>