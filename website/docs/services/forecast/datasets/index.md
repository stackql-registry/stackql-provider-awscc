---
title: datasets
hide_title: false
hide_table_of_contents: false
keywords:
  - datasets
  - forecast
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
<tr><td><b>Description</b></td><td>Resource Type Definition for AWS::Forecast::Dataset</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.forecast.datasets" /></td></tr>
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
    "name": "dataset_name",
    "type": "string",
    "description": "A name for the dataset"
  },
  {
    "name": "dataset_type",
    "type": "string",
    "description": "The dataset type"
  },
  {
    "name": "data_frequency",
    "type": "string",
    "description": "Frequency of data collection. This parameter is required for RELATED&#95;TIME&#95;SERIES"
  },
  {
    "name": "domain",
    "type": "string",
    "description": "The domain associated with the dataset"
  },
  {
    "name": "encryption_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "kms_key_arn",
        "type": "string",
        "description": "KMS key used to encrypt the Dataset data"
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": "The ARN of the IAM role that Amazon Forecast can assume to access the AWS KMS key."
      }
    ]
  },
  {
    "name": "schema",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "attributes",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "attribute_name",
            "type": "string",
            "description": "Name of the dataset field"
          },
          {
            "name": "attribute_type",
            "type": "string",
            "description": "Data type of the field"
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-dataset.html"><code>AWS::Forecast::Dataset</code></a>.

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
    <td><CopyableCode code="DatasetName, DatasetType, Domain, Schema, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>dataset</code>.
```sql
SELECT
region,
arn,
dataset_name,
dataset_type,
data_frequency,
domain,
encryption_config,
schema,
tags
FROM awscc.forecast.datasets
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
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
INSERT INTO awscc.forecast.datasets (
 DatasetName,
 DatasetType,
 Domain,
 Schema,
 region
)
SELECT 
'{{ DatasetName }}',
 '{{ DatasetType }}',
 '{{ Domain }}',
 '{{ Schema }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.forecast.datasets (
 DatasetName,
 DatasetType,
 DataFrequency,
 Domain,
 EncryptionConfig,
 Schema,
 Tags,
 region
)
SELECT 
 '{{ DatasetName }}',
 '{{ DatasetType }}',
 '{{ DataFrequency }}',
 '{{ Domain }}',
 '{{ EncryptionConfig }}',
 '{{ Schema }}',
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
      - name: DatasetType
        value: '{{ DatasetType }}'
      - name: DataFrequency
        value: '{{ DataFrequency }}'
      - name: Domain
        value: '{{ Domain }}'
      - name: EncryptionConfig
        value:
          KmsKeyArn: '{{ KmsKeyArn }}'
          RoleArn: '{{ RoleArn }}'
      - name: Schema
        value:
          Attributes:
            - AttributeName: '{{ AttributeName }}'
              AttributeType: '{{ AttributeType }}'
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
DELETE FROM awscc.forecast.datasets
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>datasets</code> resource, the following permissions are required:

### Create
```json
forecast:CreateDataset
```

### Read
```json
forecast:DescribeDataset
```

### Delete
```json
forecast:DeleteDataset
```

### List
```json
forecast:ListDatasets
```
