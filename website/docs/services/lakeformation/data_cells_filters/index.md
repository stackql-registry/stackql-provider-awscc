---
title: data_cells_filters
hide_title: false
hide_table_of_contents: false
keywords:
  - data_cells_filters
  - lakeformation
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

Creates, updates, deletes or gets a <code>data_cells_filter</code> resource or lists <code>data_cells_filters</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>data_cells_filters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A resource schema representing a Lake Formation Data Cells Filter.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lakeformation.data_cells_filters" /></td></tr>
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
    "name": "table_catalog_id",
    "type": "string",
    "description": "The Catalog Id of the Table on which to create a Data Cells Filter."
  },
  {
    "name": "database_name",
    "type": "string",
    "description": "The name of the Database that the Table resides in."
  },
  {
    "name": "row_filter",
    "type": "object",
    "description": "An object representing the Data Cells Filter's Row Filter. Either a Filter Expression or a Wildcard is required",
    "children": [
      {
        "name": "filter_expression",
        "type": "string",
        "description": "A PartiQL predicate."
      },
      {
        "name": "all_rows_wildcard",
        "type": "object",
        "description": "An empty object representing a row wildcard."
      }
    ]
  },
  {
    "name": "column_names",
    "type": "array",
    "description": "A list of columns to be included in this Data Cells Filter."
  },
  {
    "name": "column_wildcard",
    "type": "object",
    "description": "An object representing the Data Cells Filter's Columns. Either Column Names or a Wildcard is required"
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
    "name": "table_catalog_id",
    "type": "string",
    "description": "The Catalog Id of the Table on which to create a Data Cells Filter."
  },
  {
    "name": "database_name",
    "type": "string",
    "description": "The name of the Database that the Table resides in."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datacellsfilter.html"><code>AWS::LakeFormation::DataCellsFilter</code></a>.

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
    <td><code>data_cells_filters</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="TableCatalogId, DatabaseName, TableName, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>data_cells_filters</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>data_cells_filters_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>data_cells_filters</code></td>
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

Gets all properties from an individual <code>data_cells_filter</code>.
```sql
SELECT
region,
table_catalog_id,
database_name,
table_name,
name,
row_filter,
column_names,
column_wildcard
FROM awscc.lakeformation.data_cells_filters
WHERE region = 'us-east-1' AND Identifier = '{{ table_catalog_id }}|{{ database_name }}|{{ table_name }}|{{ name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>data_cells_filters</code> in a region.
```sql
SELECT
region,
table_catalog_id,
database_name,
table_name,
name
FROM awscc.lakeformation.data_cells_filters_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>data_cells_filter</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.lakeformation.data_cells_filters (
 TableCatalogId,
 DatabaseName,
 TableName,
 Name,
 region
)
SELECT
'{{ table_catalog_id }}',
 '{{ database_name }}',
 '{{ table_name }}',
 '{{ name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.lakeformation.data_cells_filters (
 TableCatalogId,
 DatabaseName,
 TableName,
 Name,
 RowFilter,
 ColumnNames,
 ColumnWildcard,
 region
)
SELECT
 '{{ table_catalog_id }}',
 '{{ database_name }}',
 '{{ table_name }}',
 '{{ name }}',
 '{{ row_filter }}',
 '{{ column_names }}',
 '{{ column_wildcard }}',
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
  - name: data_cells_filter
    props:
      - name: table_catalog_id
        value: '{{ table_catalog_id }}'
      - name: database_name
        value: '{{ database_name }}'
      - name: table_name
        value: null
      - name: name
        value: null
      - name: row_filter
        value:
          filter_expression: '{{ filter_expression }}'
          all_rows_wildcard: {}
      - name: column_names
        value:
          - null
      - name: column_wildcard
        value:
          excluded_column_names: null
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.lakeformation.data_cells_filters
WHERE Identifier = '{{ table_catalog_id }}|{{ database_name }}|{{ table_name }}|{{ name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>data_cells_filters</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'Read', value: 'read', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
lakeformation:CreateDataCellsFilter,
glue:GetTable
```

</TabItem>
<TabItem value="delete">

```json
lakeformation:DeleteDataCellsFilter
```

</TabItem>
<TabItem value="read">

```json
lakeformation:ListDataCellsFilter
```

</TabItem>
<TabItem value="list">

```json
lakeformation:ListDataCellsFilter
```

</TabItem>
</Tabs>