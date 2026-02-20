---
title: datasets
hide_title: false
hide_table_of_contents: false
keywords:
  - datasets
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

Creates, updates, deletes or gets a <code>dataset</code> resource or lists <code>datasets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>datasets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::IoTSiteWise::Dataset.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotsitewise.datasets" /></td></tr>
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
    "name": "dataset_id",
    "type": "string",
    "description": "The ID of the dataset."
  },
  {
    "name": "dataset_arn",
    "type": "string",
    "description": "The ARN of the dataset."
  },
  {
    "name": "dataset_name",
    "type": "string",
    "description": "The name of the dataset."
  },
  {
    "name": "dataset_description",
    "type": "string",
    "description": "A description about the dataset, and its functionality."
  },
  {
    "name": "dataset_source",
    "type": "object",
    "description": "The data source for the dataset.",
    "children": [
      {
        "name": "source_format",
        "type": "string",
        "description": "The format of the dataset source associated with the dataset."
      },
      {
        "name": "source_type",
        "type": "string",
        "description": "The type of data source for the dataset."
      },
      {
        "name": "source_detail",
        "type": "object",
        "description": "The details of the dataset source associated with the dataset.",
        "children": [
          {
            "name": "kendra",
            "type": "object",
            "description": "Contains details about the Kendra dataset source.",
            "children": [
              {
                "name": "knowledge_base_arn",
                "type": "string",
                "description": "The knowledgeBaseArn details for the Kendra dataset source."
              },
              {
                "name": "role_arn",
                "type": "string",
                "description": "The roleARN details for the Kendra dataset source."
              }
            ]
          }
        ]
      }
    ]
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
    "name": "dataset_id",
    "type": "string",
    "description": "The ID of the dataset."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dataset.html"><code>AWS::IoTSiteWise::Dataset</code></a>.

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
    <td><CopyableCode code="DatasetName, DatasetSource, region" /></td>
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
dataset_id,
dataset_arn,
dataset_name,
dataset_description,
dataset_source,
tags
FROM awscc.iotsitewise.datasets
WHERE region = 'us-east-1' AND Identifier = '<DatasetId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>datasets</code> in a region.
```sql
SELECT
region,
dataset_id
FROM awscc.iotsitewise.datasets_list_only
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
INSERT INTO awscc.iotsitewise.datasets (
 DatasetName,
 DatasetSource,
 region
)
SELECT 
'{{ DatasetName }}',
 '{{ DatasetSource }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iotsitewise.datasets (
 DatasetName,
 DatasetDescription,
 DatasetSource,
 Tags,
 region
)
SELECT 
 '{{ DatasetName }}',
 '{{ DatasetDescription }}',
 '{{ DatasetSource }}',
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
  - name: dataset
    props:
      - name: DatasetName
        value: '{{ DatasetName }}'
      - name: DatasetDescription
        value: '{{ DatasetDescription }}'
      - name: DatasetSource
        value:
          SourceFormat: '{{ SourceFormat }}'
          SourceType: '{{ SourceType }}'
          SourceDetail:
            Kendra:
              KnowledgeBaseArn: '{{ KnowledgeBaseArn }}'
              RoleArn: '{{ RoleArn }}'
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
UPDATE awscc.iotsitewise.datasets
SET PatchDocument = string('{{ {
    "DatasetName": dataset_name,
    "DatasetDescription": dataset_description,
    "DatasetSource": dataset_source,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<DatasetId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotsitewise.datasets
WHERE Identifier = '<DatasetId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>datasets</code> resource, the following permissions are required:

### Create
```json
iotsitewise:CreateDataset,
iotsitewise:DescribeDataset,
iam:PassRole,
iotsitewise:ListTagsForResource,
iotsitewise:TagResource
```

### Read
```json
iotsitewise:DescribeDataset,
iotsitewise:ListTagsForResource
```

### Update
```json
iotsitewise:UpdateDataset,
iotsitewise:DescribeDataset,
iam:PassRole,
iotsitewise:ListTagsForResource,
iotsitewise:TagResource,
iotsitewise:UntagResource
```

### Delete
```json
iotsitewise:DeleteDataset,
iotsitewise:DescribeDataset,
iotsitewise:ListTagsForResource
```

### List
```json
iotsitewise:ListDatasets,
iotsitewise:ListTagsForResource
```
