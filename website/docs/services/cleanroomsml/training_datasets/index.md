---
title: training_datasets
hide_title: false
hide_table_of_contents: false
keywords:
  - training_datasets
  - cleanroomsml
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

Creates, updates, deletes or gets a <code>training_dataset</code> resource or lists <code>training_datasets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>training_datasets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::CleanRoomsML::TrainingDataset Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cleanroomsml.training_datasets" /></td></tr>
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
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An arbitrary set of tags (key-value pairs) for this cleanrooms-ml training dataset.",
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
    "name": "training_data",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": ""
      },
      {
        "name": "input_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "schema",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "column_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "column_types",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "data_source",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "glue_data_source",
                "type": "object",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "training_dataset_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
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
    "name": "training_data",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": ""
      },
      {
        "name": "input_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "schema",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "column_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "column_types",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "data_source",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "glue_data_source",
                "type": "object",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "training_dataset_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanroomsml-trainingdataset.html"><code>AWS::CleanRoomsML::TrainingDataset</code></a>.

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
    <td><code>training_datasets</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, RoleArn, TrainingData, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>training_datasets</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>training_datasets</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>training_datasets_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>training_datasets</code></td>
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

Gets all properties from an individual <code>training_dataset</code>.
```sql
SELECT
region,
description,
name,
role_arn,
tags,
training_data,
training_dataset_arn,
status
FROM awscc.cleanroomsml.training_datasets
WHERE region = 'us-east-1' AND Identifier = '<TrainingDatasetArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>training_datasets</code> in a region.
```sql
SELECT
region,
training_dataset_arn
FROM awscc.cleanroomsml.training_datasets_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>training_dataset</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cleanroomsml.training_datasets (
 Name,
 RoleArn,
 TrainingData,
 region
)
SELECT 
'{{ Name }}',
 '{{ RoleArn }}',
 '{{ TrainingData }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cleanroomsml.training_datasets (
 Description,
 Name,
 RoleArn,
 Tags,
 TrainingData,
 region
)
SELECT 
 '{{ Description }}',
 '{{ Name }}',
 '{{ RoleArn }}',
 '{{ Tags }}',
 '{{ TrainingData }}',
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
  - name: training_dataset
    props:
      - name: Description
        value: '{{ Description }}'
      - name: Name
        value: '{{ Name }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: TrainingData
        value:
          - Type: '{{ Type }}'
            InputConfig:
              Schema:
                - ColumnName: '{{ ColumnName }}'
                  ColumnTypes:
                    - '{{ ColumnTypes[0] }}'
              DataSource:
                GlueDataSource:
                  TableName: '{{ TableName }}'
                  DatabaseName: '{{ DatabaseName }}'
                  CatalogId: '{{ CatalogId }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>training_dataset</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cleanroomsml.training_datasets
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<TrainingDatasetArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cleanroomsml.training_datasets
WHERE Identifier = '<TrainingDatasetArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>training_datasets</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

```json
cleanrooms-ml:CreateTrainingDataset,
cleanrooms-ml:GetTrainingDataset,
cleanrooms-ml:TagResource,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
cleanrooms-ml:GetTrainingDataset
```

</TabItem>
<TabItem value="delete">

```json
cleanrooms-ml:DeleteTrainingDataset
```

</TabItem>
<TabItem value="list">

```json
cleanrooms-ml:ListTrainingDatasets
```

</TabItem>
<TabItem value="update">

```json
cleanrooms-ml:TagResource,
cleanrooms-ml:UntagResource
```

</TabItem>
</Tabs>