---
title: configured_tables
hide_title: false
hide_table_of_contents: false
keywords:
  - configured_tables
  - cleanrooms
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

Creates, updates, deletes or gets a <code>configured_table</code> resource or lists <code>configured_tables</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>configured_tables</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Represents a table that can be associated with collaborations</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cleanrooms.configured_tables" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration.",
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
    "name": "allowed_columns",
    "type": "array",
    "description": ""
  },
  {
    "name": "analysis_method",
    "type": "string",
    "description": ""
  },
  {
    "name": "selected_analysis_methods",
    "type": "array",
    "description": ""
  },
  {
    "name": "configured_table_identifier",
    "type": "string",
    "description": ""
  },
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
    "name": "analysis_rules",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": ""
      },
      {
        "name": "policy",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "v1",
            "type": "object",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "table_reference",
    "type": "object",
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
    "name": "configured_table_identifier",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html"><code>AWS::CleanRooms::ConfiguredTable</code></a>.

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
    <td><code>configured_tables</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AllowedColumns, AnalysisMethod, Name, TableReference, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>configured_tables</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>configured_tables</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>configured_tables_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>configured_tables</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>configured_table</code>.
```sql
SELECT
region,
arn,
tags,
allowed_columns,
analysis_method,
selected_analysis_methods,
configured_table_identifier,
description,
name,
analysis_rules,
table_reference
FROM awscc.cleanrooms.configured_tables
WHERE region = 'us-east-1' AND data__Identifier = '<ConfiguredTableIdentifier>';
```
</TabItem>
<TabItem value="list">

Lists all <code>configured_tables</code> in a region.
```sql
SELECT
region,
configured_table_identifier
FROM awscc.cleanrooms.configured_tables_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>configured_table</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cleanrooms.configured_tables (
 AllowedColumns,
 AnalysisMethod,
 Name,
 TableReference,
 region
)
SELECT 
'{{ AllowedColumns }}',
 '{{ AnalysisMethod }}',
 '{{ Name }}',
 '{{ TableReference }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cleanrooms.configured_tables (
 Tags,
 AllowedColumns,
 AnalysisMethod,
 SelectedAnalysisMethods,
 Description,
 Name,
 AnalysisRules,
 TableReference,
 region
)
SELECT 
 '{{ Tags }}',
 '{{ AllowedColumns }}',
 '{{ AnalysisMethod }}',
 '{{ SelectedAnalysisMethods }}',
 '{{ Description }}',
 '{{ Name }}',
 '{{ AnalysisRules }}',
 '{{ TableReference }}',
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
  - name: configured_table
    props:
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: AllowedColumns
        value:
          - '{{ AllowedColumns[0] }}'
      - name: AnalysisMethod
        value: '{{ AnalysisMethod }}'
      - name: SelectedAnalysisMethods
        value:
          - '{{ SelectedAnalysisMethods[0] }}'
      - name: Description
        value: '{{ Description }}'
      - name: Name
        value: '{{ Name }}'
      - name: AnalysisRules
        value:
          - Type: '{{ Type }}'
            Policy:
              V1: null
      - name: TableReference
        value: null

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.cleanrooms.configured_tables
SET data__PatchDocument = string('{{ {
    "Tags": tags,
    "AllowedColumns": allowed_columns,
    "AnalysisMethod": analysis_method,
    "SelectedAnalysisMethods": selected_analysis_methods,
    "Description": description,
    "Name": name,
    "AnalysisRules": analysis_rules,
    "TableReference": table_reference
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<ConfiguredTableIdentifier>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cleanrooms.configured_tables
WHERE data__Identifier = '<ConfiguredTableIdentifier>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>configured_tables</code> resource, the following permissions are required:

### Create
```json
cleanrooms:CreateConfiguredTable,
cleanrooms:DeleteConfiguredTable,
cleanrooms:DeleteConfiguredTableAnalysisRule,
cleanrooms:CreateConfiguredTableAnalysisRule,
cleanrooms:GetConfiguredTable,
cleanrooms:GetConfiguredTableAnalysisRule,
glue:GetDatabase,
glue:GetDatabases,
glue:GetTable,
glue:GetTables,
glue:GetPartition,
glue:GetPartitions,
glue:BatchGetPartition,
glue:GetSchemaVersion,
cleanrooms:ListTagsForResource,
cleanrooms:TagResource,
cleanrooms:ListConfiguredTables,
athena:GetTableMetadata
```

### Read
```json
cleanrooms:GetConfiguredTable,
cleanrooms:GetConfiguredTableAnalysisRule,
cleanrooms:ListTagsForResource
```

### Update
```json
cleanrooms:UpdateConfiguredTable,
cleanrooms:UpdateConfiguredTableReference,
cleanrooms:UpdateConfiguredTableAllowedColumns,
cleanrooms:GetConfiguredTable,
cleanrooms:CreateConfiguredTableAnalysisRule,
cleanrooms:UpdateConfiguredTableAnalysisRule,
cleanrooms:GetConfiguredTableAnalysisRule,
cleanrooms:DeleteConfiguredTableAnalysisRule,
cleanrooms:ListTagsForResource,
cleanrooms:TagResource,
cleanrooms:UntagResource,
glue:GetDatabase,
glue:GetDatabases,
glue:GetTable,
glue:GetTables,
glue:GetPartition,
glue:GetPartitions,
glue:BatchGetPartition,
glue:GetSchemaVersion
```

### Delete
```json
cleanrooms:DeleteConfiguredTable,
cleanrooms:GetConfiguredTable,
cleanrooms:ListConfiguredTables,
cleanrooms:GetConfiguredTableAnalysisRule,
cleanrooms:DeleteConfiguredTableAnalysisRule,
cleanrooms:ListTagsForResource,
cleanrooms:UntagResource,
glue:GetDatabase,
glue:GetDatabases,
glue:GetTable,
glue:GetTables,
glue:GetPartition,
glue:GetPartitions,
glue:BatchGetPartition,
glue:GetSchemaVersion
```

### List
```json
cleanrooms:ListConfiguredTables
```
