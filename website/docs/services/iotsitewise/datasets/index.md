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
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="dataset_id" /></td><td><code>string</code></td><td>The ID of the dataset.</td></tr>
<tr><td><CopyableCode code="dataset_arn" /></td><td><code>string</code></td><td>The ARN of the dataset.</td></tr>
<tr><td><CopyableCode code="dataset_name" /></td><td><code>string</code></td><td>The name of the dataset.</td></tr>
<tr><td><CopyableCode code="dataset_description" /></td><td><code>string</code></td><td>A description about the dataset, and its functionality.</td></tr>
<tr><td><CopyableCode code="dataset_source" /></td><td><code>object</code></td><td>The data source for the dataset.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dataset.html"><code>AWS::IoTSiteWise::Dataset</code></a>.

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
    <td><CopyableCode code="DatasetName, DatasetSource, region" /></td>
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
Gets all <code>datasets</code> in a region.
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
WHERE region = 'us-east-1';
```
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
WHERE region = 'us-east-1' AND data__Identifier = '<DatasetId>';
```

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

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotsitewise.datasets
WHERE data__Identifier = '<DatasetId>'
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
