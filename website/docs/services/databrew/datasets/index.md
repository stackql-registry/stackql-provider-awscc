---
title: datasets
hide_title: false
hide_table_of_contents: false
keywords:
  - datasets
  - databrew
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
<tr><td><b>Description</b></td><td>Resource schema for AWS::DataBrew::Dataset.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.databrew.datasets" /></td></tr>
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
    "description": "Dataset name"
  },
  {
    "name": "format",
    "type": "string",
    "description": "Dataset format"
  },
  {
    "name": "format_options",
    "type": "object",
    "description": "Format options for dataset",
    "children": [
      {
        "name": "json",
        "type": "object",
        "description": "Json options",
        "children": [
          {
            "name": "multi_line",
            "type": "boolean",
            "description": ""
          }
        ]
      },
      {
        "name": "excel",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "sheet_names",
            "type": "array",
            "description": ""
          },
          {
            "name": "sheet_indexes",
            "type": "array",
            "description": ""
          },
          {
            "name": "header_row",
            "type": "boolean",
            "description": ""
          }
        ]
      },
      {
        "name": "csv",
        "type": "object",
        "description": "Csv options",
        "children": [
          {
            "name": "delimiter",
            "type": "string",
            "description": ""
          },
          {
            "name": "header_row",
            "type": "boolean",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "input",
    "type": "object",
    "description": "Input",
    "children": [
      {
        "name": "s3_input_definition",
        "type": "object",
        "description": "Input location",
        "children": [
          {
            "name": "bucket",
            "type": "string",
            "description": ""
          },
          {
            "name": "key",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "data_catalog_input_definition",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "catalog_id",
            "type": "string",
            "description": "Catalog id"
          },
          {
            "name": "database_name",
            "type": "string",
            "description": "Database name"
          },
          {
            "name": "table_name",
            "type": "string",
            "description": "Table name"
          }
        ]
      },
      {
        "name": "database_input_definition",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "glue_connection_name",
            "type": "string",
            "description": "Glue connection name"
          },
          {
            "name": "database_table_name",
            "type": "string",
            "description": "Database table name"
          },
          {
            "name": "query_string",
            "type": "string",
            "description": "Custom SQL to run against the provided AWS Glue connection. This SQL will be used as the input for DataBrew projects and jobs."
          }
        ]
      },
      {
        "name": "metadata",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "source_arn",
            "type": "string",
            "description": "Arn of the source of the dataset. For e.g.: AppFlow Flow ARN."
          }
        ]
      }
    ]
  },
  {
    "name": "source",
    "type": "string",
    "description": "Source type of the dataset"
  },
  {
    "name": "path_options",
    "type": "object",
    "description": "PathOptions",
    "children": [
      {
        "name": "files_limit",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "max_files",
            "type": "integer",
            "description": "Maximum number of files"
          },
          {
            "name": "ordered_by",
            "type": "string",
            "description": "Ordered by"
          },
          {
            "name": "order",
            "type": "string",
            "description": "Order"
          }
        ]
      },
      {
        "name": "last_modified_date_condition",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "expression",
            "type": "string",
            "description": "Filtering expression for a parameter"
          },
          {
            "name": "values_map",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "value_reference",
                "type": "string",
                "description": "Variable name"
              },
              {
                "name": "value",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "parameters",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "path_parameter_name",
            "type": "string",
            "description": "Parameter name"
          },
          {
            "name": "dataset_parameter",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "type",
                "type": "string",
                "description": "Parameter type"
              },
              {
                "name": "datetime_options",
                "type": "object",
                "description": ""
              },
              {
                "name": "create_column",
                "type": "boolean",
                "description": "Add the value of this parameter as a column in a dataset."
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "name",
    "type": "string",
    "description": "Dataset name"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html"><code>AWS::DataBrew::Dataset</code></a>.

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
    <td><CopyableCode code="Name, Input, region" /></td>
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
format,
format_options,
input,
source,
path_options,
tags
FROM awscc.databrew.datasets
WHERE region = 'us-east-1' AND Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>datasets</code> in a region.
```sql
SELECT
region,
name
FROM awscc.databrew.datasets_list_only
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
INSERT INTO awscc.databrew.datasets (
 Name,
 Input,
 region
)
SELECT 
'{{ Name }}',
 '{{ Input }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.databrew.datasets (
 Name,
 Format,
 FormatOptions,
 Input,
 Source,
 PathOptions,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Format }}',
 '{{ FormatOptions }}',
 '{{ Input }}',
 '{{ Source }}',
 '{{ PathOptions }}',
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
      - name: Name
        value: '{{ Name }}'
      - name: Format
        value: '{{ Format }}'
      - name: FormatOptions
        value:
          Json:
            MultiLine: '{{ MultiLine }}'
          Excel:
            SheetNames:
              - '{{ SheetNames[0] }}'
            SheetIndexes:
              - '{{ SheetIndexes[0] }}'
            HeaderRow: '{{ HeaderRow }}'
          Csv:
            Delimiter: '{{ Delimiter }}'
            HeaderRow: '{{ HeaderRow }}'
      - name: Input
        value:
          S3InputDefinition:
            Bucket: '{{ Bucket }}'
            Key: '{{ Key }}'
          DataCatalogInputDefinition:
            CatalogId: '{{ CatalogId }}'
            DatabaseName: '{{ DatabaseName }}'
            TableName: '{{ TableName }}'
            TempDirectory: null
          DatabaseInputDefinition:
            GlueConnectionName: '{{ GlueConnectionName }}'
            DatabaseTableName: '{{ DatabaseTableName }}'
            TempDirectory: null
            QueryString: '{{ QueryString }}'
          Metadata:
            SourceArn: '{{ SourceArn }}'
      - name: Source
        value: '{{ Source }}'
      - name: PathOptions
        value:
          FilesLimit:
            MaxFiles: '{{ MaxFiles }}'
            OrderedBy: '{{ OrderedBy }}'
            Order: '{{ Order }}'
          LastModifiedDateCondition:
            Expression: '{{ Expression }}'
            ValuesMap:
              - ValueReference: '{{ ValueReference }}'
                Value: '{{ Value }}'
          Parameters:
            - PathParameterName: '{{ PathParameterName }}'
              DatasetParameter:
                Name: null
                Type: '{{ Type }}'
                DatetimeOptions:
                  Format: '{{ Format }}'
                  TimezoneOffset: '{{ TimezoneOffset }}'
                  LocaleCode: '{{ LocaleCode }}'
                CreateColumn: '{{ CreateColumn }}'
                Filter: null
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>dataset</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.databrew.datasets
SET PatchDocument = string('{{ {
    "Format": format,
    "FormatOptions": format_options,
    "Input": input,
    "Source": source,
    "PathOptions": path_options,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.databrew.datasets
WHERE Identifier = '<Name>'
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
databrew:CreateDataset,
databrew:DescribeDataset,
databrew:TagResource,
databrew:UntagResource,
glue:GetConnection,
glue:GetTable,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
databrew:DescribeDataset,
iam:ListRoles
```

</TabItem>
<TabItem value="update">

```json
databrew:UpdateDataset,
databrew:TagResource,
databrew:UntagResource,
glue:GetConnection,
glue:GetTable
```

</TabItem>
<TabItem value="delete">

```json
databrew:DeleteDataset
```

</TabItem>
<TabItem value="list">

```json
databrew:ListDatasets,
databrew:ListTagsForResource,
iam:ListRoles
```

</TabItem>
</Tabs>