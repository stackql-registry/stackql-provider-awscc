---
title: tag_options
hide_title: false
hide_table_of_contents: false
keywords:
  - tag_options
  - servicecatalog
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

Creates, updates, deletes or gets a <code>tag_option</code> resource or lists <code>tag_options</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>tag_options</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource type definition for AWS::ServiceCatalog::TagOption</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.servicecatalog.tag_options" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": "The TagOption identifier."
  },
  {
    "name": "active",
    "type": "boolean",
    "description": "The TagOption active state."
  },
  {
    "name": "value",
    "type": "string",
    "description": "The TagOption value."
  },
  {
    "name": "key",
    "type": "string",
    "description": "The TagOption key."
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
    "name": "id",
    "type": "string",
    "description": "The TagOption identifier."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoption.html"><code>AWS::ServiceCatalog::TagOption</code></a>.

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
    <td><code>tag_options</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Value, Key, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>tag_options</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>tag_options</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>tag_options_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>tag_options</code></td>
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

Gets all properties from an individual <code>tag_option</code>.
```sql
SELECT
region,
id,
active,
value,
key
FROM awscc.servicecatalog.tag_options
WHERE region = 'us-east-1' AND Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>tag_options</code> in a region.
```sql
SELECT
region,
id
FROM awscc.servicecatalog.tag_options_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>tag_option</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.servicecatalog.tag_options (
 Value,
 Key,
 region
)
SELECT 
'{{ Value }}',
 '{{ Key }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.servicecatalog.tag_options (
 Active,
 Value,
 Key,
 region
)
SELECT 
 '{{ Active }}',
 '{{ Value }}',
 '{{ Key }}',
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
  - name: tag_option
    props:
      - name: Active
        value: '{{ Active }}'
      - name: Value
        value: '{{ Value }}'
      - name: Key
        value: '{{ Key }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.servicecatalog.tag_options
SET PatchDocument = string('{{ {
    "Active": active
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.servicecatalog.tag_options
WHERE Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>tag_options</code> resource, the following permissions are required:

### Create
```json
servicecatalog:CreateTagOption
```

### Read
```json
servicecatalog:DescribeTagOption
```

### Update
```json
servicecatalog:UpdateTagOption,
servicecatalog:DescribeTagOption
```

### Delete
```json
servicecatalog:DeleteTagOption
```

### List
```json
servicecatalog:ListTagOptions
```
