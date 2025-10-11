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
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="computation_model_id" /></td><td><code>string</code></td><td>The ID of the computation model.</td></tr>
<tr><td><CopyableCode code="computation_model_arn" /></td><td><code>string</code></td><td>The ARN of the computation model.</td></tr>
<tr><td><CopyableCode code="computation_model_name" /></td><td><code>string</code></td><td>The name of the computation model.</td></tr>
<tr><td><CopyableCode code="computation_model_description" /></td><td><code>string</code></td><td>A description about the computation model.</td></tr>
<tr><td><CopyableCode code="computation_model_configuration" /></td><td><code>object</code></td><td>The configuration for the computation model.</td></tr>
<tr><td><CopyableCode code="computation_model_data_binding" /></td><td><code>object</code></td><td>The data binding for the computation model.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-computationmodel.html"><code>AWS::IoTSiteWise::ComputationModel</code></a>.

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
    <td><CopyableCode code="ComputationModelName, ComputationModelConfiguration, ComputationModelDataBinding, region" /></td>
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
Gets all <code>computation_models</code> in a region.
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
WHERE region = 'us-east-1';
```
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
WHERE region = 'us-east-1' AND data__Identifier = '<ComputationModelId>';
```

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
'{{ ComputationModelName }}',
 '{{ ComputationModelConfiguration }}',
 '{{ ComputationModelDataBinding }}',
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
 '{{ ComputationModelName }}',
 '{{ ComputationModelDescription }}',
 '{{ ComputationModelConfiguration }}',
 '{{ ComputationModelDataBinding }}',
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
  - name: computation_model
    props:
      - name: ComputationModelName
        value: '{{ ComputationModelName }}'
      - name: ComputationModelDescription
        value: '{{ ComputationModelDescription }}'
      - name: ComputationModelConfiguration
        value:
          AnomalyDetection:
            InputProperties: '{{ InputProperties }}'
            ResultProperty: '{{ ResultProperty }}'
      - name: ComputationModelDataBinding
        value: {}
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
DELETE FROM awscc.iotsitewise.computation_models
WHERE data__Identifier = '<ComputationModelId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>computation_models</code> resource, the following permissions are required:

### Create
```json
iotsitewise:CreateComputationModel,
iotsitewise:DescribeComputationModel,
iotsitewise:ListTagsForResource,
iotsitewise:TagResource
```

### Read
```json
iotsitewise:DescribeComputationModel,
iotsitewise:ListTagsForResource
```

### Update
```json
iotsitewise:UpdateComputationModel,
iotsitewise:DescribeComputationModel,
iotsitewise:ListTagsForResource,
iotsitewise:TagResource,
iotsitewise:UntagResource
```

### Delete
```json
iotsitewise:DeleteComputationModel,
iotsitewise:DescribeComputationModel,
iotsitewise:ListTagsForResource
```

### List
```json
iotsitewise:ListComputationModels,
iotsitewise:ListTagsForResource
```
