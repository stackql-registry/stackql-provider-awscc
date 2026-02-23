---
title: datasets
hide_title: false
hide_table_of_contents: false
keywords:
  - datasets
  - personalize
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

Creates, updates, deletes or gets a <code>dataset</code> resource or lists <code>datasets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>datasets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::Personalize::Dataset.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.personalize.datasets" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": "The name for the dataset"
  },
  {
    "name": "dataset_arn",
    "type": "string",
    "description": "The ARN of the dataset"
  },
  {
    "name": "dataset_type",
    "type": "string",
    "description": "The type of dataset"
  },
  {
    "name": "dataset_group_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the dataset group to add the dataset to"
  },
  {
    "name": "schema_arn",
    "type": "string",
    "description": "The ARN of the schema to associate with the dataset. The schema defines the dataset fields."
  },
  {
    "name": "dataset_import_job",
    "type": "object",
    "description": "Initial DatasetImportJob for the created dataset",
    "children": [
      {
        "name": "job_name",
        "type": "string",
        "description": "The name for the dataset import job."
      },
      {
        "name": "dataset_import_job_arn",
        "type": "string",
        "description": "The ARN of the dataset import job"
      },
      {
        "name": "dataset_arn",
        "type": "string",
        "description": "The ARN of the dataset that receives the imported data"
      },
      {
        "name": "data_source",
        "type": "object",
        "description": "The Amazon S3 bucket that contains the training data to import.",
        "children": [
          {
            "name": "data_location",
            "type": "string",
            "description": "The path to the Amazon S3 bucket where the data that you want to upload to your dataset is stored."
          }
        ]
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": "The ARN of the IAM role that has permissions to read from the Amazon S3 data source."
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
    "name": "dataset_arn",
    "type": "string",
    "description": "The ARN of the dataset"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-dataset.html"><code>AWS::Personalize::Dataset</code></a>.

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
    <td><code>datasets</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, DatasetType, DatasetGroupArn, SchemaArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>datasets</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>datasets</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>datasets_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>datasets</code></td>
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

Gets all properties from an individual <code>dataset</code>.
```sql
SELECT
region,
name,
dataset_arn,
dataset_type,
dataset_group_arn,
schema_arn,
dataset_import_job
FROM awscc.personalize.datasets
WHERE region = 'us-east-1' AND Identifier = '{{ dataset_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>datasets</code> in a region.
```sql
SELECT
region,
dataset_arn
FROM awscc.personalize.datasets_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>dataset</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.personalize.datasets (
 Name,
 DatasetType,
 DatasetGroupArn,
 SchemaArn,
 region
)
SELECT
'{{ name }}',
 '{{ dataset_type }}',
 '{{ dataset_group_arn }}',
 '{{ schema_arn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.personalize.datasets (
 Name,
 DatasetType,
 DatasetGroupArn,
 SchemaArn,
 DatasetImportJob,
 region
)
SELECT
 '{{ name }}',
 '{{ dataset_type }}',
 '{{ dataset_group_arn }}',
 '{{ schema_arn }}',
 '{{ dataset_import_job }}',
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
  - name: dataset
    props:
      - name: name
        value: '{{ name }}'
      - name: dataset_type
        value: '{{ dataset_type }}'
      - name: dataset_group_arn
        value: '{{ dataset_group_arn }}'
      - name: schema_arn
        value: '{{ schema_arn }}'
      - name: dataset_import_job
        value:
          job_name: '{{ job_name }}'
          dataset_import_job_arn: '{{ dataset_import_job_arn }}'
          dataset_arn: '{{ dataset_arn }}'
          data_source:
            data_location: '{{ data_location }}'
          role_arn: '{{ role_arn }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>dataset</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.personalize.datasets
SET PatchDocument = string('{{ {
    "DatasetImportJob": dataset_import_job
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ dataset_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.personalize.datasets
WHERE Identifier = '{{ dataset_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>datasets</code> resource, the following permissions are required:

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
personalize:CreateDataset,
personalize:DescribeDataset,
personalize:CreateDatasetImportJob,
personalize:DescribeDatasetImportJob,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
personalize:DescribeDataset
```

</TabItem>
<TabItem value="update">

```json
personalize:DescribeDataset,
personalize:CreateDatasetImportJob,
personalize:DescribeDatasetImportJob,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
personalize:DeleteDataset,
personalize:DescribeDataset
```

</TabItem>
<TabItem value="list">

```json
personalize:ListDatasets
```

</TabItem>
</Tabs>