---
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
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

Creates, updates, deletes or gets a <code>tag</code> resource or lists <code>tags</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A resource schema representing a Lake Formation Tag.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lakeformation.tags" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "catalog_id",
    "type": "string",
    "description": "The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment."
  },
  {
    "name": "tag_key",
    "type": "string",
    "description": "The key-name for the LF-tag."
  },
  {
    "name": "tag_values",
    "type": "array",
    "description": "A list of possible values an attribute can take."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-tag.html"><code>AWS::LakeFormation::Tag</code></a>.

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
    <td><CopyableCode code="TagKey, TagValues, region" /></td>
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

Gets all properties from an individual <code>tag</code>.
```sql
SELECT
region,
catalog_id,
tag_key,
tag_values
FROM awscc.lakeformation.tags
WHERE region = 'us-east-1' AND data__Identifier = '<TagKey>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>tag</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.lakeformation.tags (
 TagKey,
 TagValues,
 region
)
SELECT 
'{{ TagKey }}',
 '{{ TagValues }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.lakeformation.tags (
 CatalogId,
 TagKey,
 TagValues,
 region
)
SELECT 
 '{{ CatalogId }}',
 '{{ TagKey }}',
 '{{ TagValues }}',
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
  - name: tag
    props:
      - name: CatalogId
        value: '{{ CatalogId }}'
      - name: TagKey
        value: '{{ TagKey }}'
      - name: TagValues
        value:
          - '{{ TagValues[0] }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.lakeformation.tags
WHERE data__Identifier = '<TagKey>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>tags</code> resource, the following permissions are required:

### Create
```json
lakeformation:CreateLFTag,
lakeformation:GetLFTag
```

### Read
```json
lakeformation:GetLFTag
```

### Update
```json
lakeformation:UpdateLFTag,
lakeformation:GetLFTag
```

### Delete
```json
lakeformation:DeleteLFTag
```

### List
```json
lakeformation:ListLFTags
```
