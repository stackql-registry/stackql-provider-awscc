---
title: exports
hide_title: false
hide_table_of_contents: false
keywords:
  - exports
  - bcmdataexports
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

Creates, updates, deletes or gets an <code>export</code> resource or lists <code>exports</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>exports</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::BCMDataExports::Export Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.bcmdataexports.exports" /></td></tr>
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
    "name": "export",
    "type": "object",
    "description": "Definition of AWS::BCMDataExports::Export Resource Type",
    "children": [
      {
        "name": "export_arn",
        "type": "string",
        "description": ""
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
      }
    ]
  },
  {
    "name": "export_arn",
    "type": "string",
    "description": ""
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
    "name": "export",
    "type": "object",
    "description": "Definition of AWS::BCMDataExports::Export Resource Type",
    "children": [
      {
        "name": "export_arn",
        "type": "string",
        "description": ""
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
      }
    ]
  },
  {
    "name": "export_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html"><code>AWS::BCMDataExports::Export</code></a>.

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
    <td><code>exports</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Export, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>exports</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>exports</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>exports_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>exports</code></td>
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

Gets all properties from an individual <code>export</code>.
```sql
SELECT
region,
export,
export_arn,
tags
FROM awscc.bcmdataexports.exports
WHERE region = 'us-east-1' AND data__Identifier = '<ExportArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>exports</code> in a region.
```sql
SELECT
region,
export_arn
FROM awscc.bcmdataexports.exports_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>export</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.bcmdataexports.exports (
 Export,
 region
)
SELECT 
'{{ Export }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.bcmdataexports.exports (
 Export,
 Tags,
 region
)
SELECT 
 '{{ Export }}',
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
  - name: export
    props:
      - name: Export
        value:
          Export: null
          Tags:
            - Key: '{{ Key }}'
              Value: '{{ Value }}'
      - name: Tags
        value:
          - null

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.bcmdataexports.exports
SET data__PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<ExportArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.bcmdataexports.exports
WHERE data__Identifier = '<ExportArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>exports</code> resource, the following permissions are required:

### Create
```json
bcm-data-exports:CreateExport,
bcm-data-exports:GetExport,
bcm-data-exports:ListTagsForResource,
bcm-data-exports:TagResource,
cur:PutReportDefinition
```

### Read
```json
bcm-data-exports:GetExport,
bcm-data-exports:ListTagsForResource
```

### Update
```json
bcm-data-exports:UpdateExport,
bcm-data-exports:TagResource,
bcm-data-exports:UntagResource,
bcm-data-exports:GetExport,
bcm-data-exports:ListTagsForResource
```

### Delete
```json
bcm-data-exports:DeleteExport
```

### List
```json
bcm-data-exports:ListExports
```
