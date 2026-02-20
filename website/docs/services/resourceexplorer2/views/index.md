---
title: views
hide_title: false
hide_table_of_contents: false
keywords:
  - views
  - resourceexplorer2
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

Creates, updates, deletes or gets a <code>view</code> resource or lists <code>views</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>views</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::ResourceExplorer2::View Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.resourceexplorer2.views" /></td></tr>
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
    "name": "filters",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "filter_string",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "included_properties",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "scope",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "object",
    "description": ""
  },
  {
    "name": "view_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "view_name",
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
    "name": "view_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-view.html"><code>AWS::ResourceExplorer2::View</code></a>.

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
    <td><code>views</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ViewName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>views</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>views</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>views_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>views</code></td>
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

Gets all properties from an individual <code>view</code>.
```sql
SELECT
region,
filters,
included_properties,
scope,
tags,
view_arn,
view_name
FROM awscc.resourceexplorer2.views
WHERE region = 'us-east-1' AND Identifier = '<ViewArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>views</code> in a region.
```sql
SELECT
region,
view_arn
FROM awscc.resourceexplorer2.views_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>view</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.resourceexplorer2.views (
 ViewName,
 region
)
SELECT 
'{{ ViewName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.resourceexplorer2.views (
 Filters,
 IncludedProperties,
 Scope,
 Tags,
 ViewName,
 region
)
SELECT 
 '{{ Filters }}',
 '{{ IncludedProperties }}',
 '{{ Scope }}',
 '{{ Tags }}',
 '{{ ViewName }}',
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
  - name: view
    props:
      - name: Filters
        value:
          FilterString: '{{ FilterString }}'
      - name: IncludedProperties
        value:
          - Name: '{{ Name }}'
      - name: Scope
        value: '{{ Scope }}'
      - name: Tags
        value: {}
      - name: ViewName
        value: '{{ ViewName }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>view</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.resourceexplorer2.views
SET PatchDocument = string('{{ {
    "Filters": filters,
    "IncludedProperties": included_properties,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ViewArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.resourceexplorer2.views
WHERE Identifier = '<ViewArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>views</code> resource, the following permissions are required:

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
resource-explorer-2:CreateView,
resource-explorer-2:TagResource
```

</TabItem>
<TabItem value="read">

```json
resource-explorer-2:GetView
```

</TabItem>
<TabItem value="update">

```json
resource-explorer-2:UpdateView,
resource-explorer-2:TagResource,
resource-explorer-2:UntagResource,
resource-explorer-2:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
resource-explorer-2:DeleteView,
resource-explorer-2:GetView,
resource-explorer-2:UntagResource
```

</TabItem>
<TabItem value="list">

```json
resource-explorer-2:ListViews
```

</TabItem>
</Tabs>