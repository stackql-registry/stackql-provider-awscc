---
title: dataset_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - dataset_groups
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

Creates, updates, deletes or gets a <code>dataset_group</code> resource or lists <code>dataset_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>dataset_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Represents a dataset group that holds a collection of related datasets</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.forecast.dataset_groups" /></td></tr>
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
    "name": "dataset_arns",
    "type": "array",
    "description": "An array of Amazon Resource Names (ARNs) of the datasets that you want to include in the dataset group."
  },
  {
    "name": "dataset_group_name",
    "type": "string",
    "description": "A name for the dataset group."
  },
  {
    "name": "domain",
    "type": "string",
    "description": "The domain associated with the dataset group. When you add a dataset to a dataset group, this value and the value specified for the Domain parameter of the CreateDataset operation must match."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags of Application Insights application.",
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
    "name": "dataset_group_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the dataset group to delete."
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
    "name": "dataset_group_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the dataset group to delete."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-datasetgroup.html"><code>AWS::Forecast::DatasetGroup</code></a>.

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
    <td><code>dataset_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DatasetGroupName, Domain, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>dataset_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>dataset_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>dataset_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>dataset_groups</code></td>
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

Gets all properties from an individual <code>dataset_group</code>.
```sql
SELECT
region,
dataset_arns,
dataset_group_name,
domain,
tags,
dataset_group_arn
FROM awscc.forecast.dataset_groups
WHERE region = 'us-east-1' AND Identifier = '{{ dataset_group_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>dataset_groups</code> in a region.
```sql
SELECT
region,
dataset_group_arn
FROM awscc.forecast.dataset_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>dataset_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.forecast.dataset_groups (
 DatasetGroupName,
 Domain,
 region
)
SELECT
'{{ dataset_group_name }}',
 '{{ domain }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.forecast.dataset_groups (
 DatasetArns,
 DatasetGroupName,
 Domain,
 Tags,
 region
)
SELECT
 '{{ dataset_arns }}',
 '{{ dataset_group_name }}',
 '{{ domain }}',
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
  - name: dataset_group
    props:
      - name: dataset_arns
        value:
          - '{{ dataset_arns[0] }}'
      - name: dataset_group_name
        value: '{{ dataset_group_name }}'
      - name: domain
        value: '{{ domain }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>dataset_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.forecast.dataset_groups
SET PatchDocument = string('{{ {
    "DatasetArns": dataset_arns,
    "Domain": domain,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ dataset_group_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.forecast.dataset_groups
WHERE Identifier = '{{ dataset_group_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>dataset_groups</code> resource, the following permissions are required:

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
forecast:CreateDatasetGroup
```

</TabItem>
<TabItem value="read">

```json
forecast:DescribeDatasetGroup
```

</TabItem>
<TabItem value="update">

```json
forecast:UpdateDatasetGroup
```

</TabItem>
<TabItem value="delete">

```json
forecast:DeleteDatasetGroup
```

</TabItem>
<TabItem value="list">

```json
forecast:ListDatasetGroups
```

</TabItem>
</Tabs>