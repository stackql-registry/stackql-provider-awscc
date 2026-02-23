---
title: key_value_stores
hide_title: false
hide_table_of_contents: false
keywords:
  - key_value_stores
  - cloudfront
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

Creates, updates, deletes or gets a <code>key_value_store</code> resource or lists <code>key_value_stores</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>key_value_stores</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The key value store. Use this to separate data from function code, allowing you to update data without having to publish a new version of a function. The key value store holds keys and their corresponding values.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudfront.key_value_stores" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the key value store."
  },
  {
    "name": "comment",
    "type": "string",
    "description": "A comment for the key value store."
  },
  {
    "name": "import_source",
    "type": "object",
    "description": "The import source for the key value store.",
    "children": [
      {
        "name": "source_type",
        "type": "string",
        "description": "The source type of the import source for the key value store."
      },
      {
        "name": "source_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the import source for the key value store."
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
    "description": "The name of the key value store."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-keyvaluestore.html"><code>AWS::CloudFront::KeyValueStore</code></a>.

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
    <td><code>key_value_stores</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>key_value_stores</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>key_value_stores</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>key_value_stores_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>key_value_stores</code></td>
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

Gets all properties from an individual <code>key_value_store</code>.
```sql
SELECT
region,
arn,
id,
status,
name,
comment,
import_source
FROM awscc.cloudfront.key_value_stores
WHERE region = 'us-east-1' AND Identifier = '{{ name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>key_value_stores</code> in a region.
```sql
SELECT
region,
name
FROM awscc.cloudfront.key_value_stores_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>key_value_store</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cloudfront.key_value_stores (
 Name,
 region
)
SELECT
'{{ name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cloudfront.key_value_stores (
 Name,
 Comment,
 ImportSource,
 region
)
SELECT
 '{{ name }}',
 '{{ comment }}',
 '{{ import_source }}',
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
  - name: key_value_store
    props:
      - name: name
        value: '{{ name }}'
      - name: comment
        value: '{{ comment }}'
      - name: import_source
        value:
          source_type: '{{ source_type }}'
          source_arn: '{{ source_arn }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>key_value_store</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cloudfront.key_value_stores
SET PatchDocument = string('{{ {
    "Comment": comment,
    "ImportSource": import_source
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudfront.key_value_stores
WHERE Identifier = '{{ name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>key_value_stores</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

```json
cloudfront:CreateKeyValueStore,
cloudfront:DescribeKeyValueStore,
s3:GetObject,
s3:HeadObject,
s3:GetBucketLocation
```

</TabItem>
<TabItem value="delete">

```json
cloudfront:DeleteKeyValueStore,
cloudfront:DescribeKeyValueStore
```

</TabItem>
<TabItem value="list">

```json
cloudfront:ListKeyValueStores
```

</TabItem>
<TabItem value="read">

```json
cloudfront:DescribeKeyValueStore
```

</TabItem>
<TabItem value="update">

```json
cloudfront:UpdateKeyValueStore,
cloudfront:DescribeKeyValueStore
```

</TabItem>
</Tabs>