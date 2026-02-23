---
title: collections
hide_title: false
hide_table_of_contents: false
keywords:
  - collections
  - rekognition
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

Creates, updates, deletes or gets a <code>collection</code> resource or lists <code>collections</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>collections</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::Rekognition::Collection type creates an Amazon Rekognition Collection. A collection is a logical grouping of information about detected faces which can later be referenced for searches on the group</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.rekognition.collections" /></td></tr>
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
    "description": "The ARN of the stream processor"
  },
  {
    "name": "collection_id",
    "type": "string",
    "description": "The name of the collection"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "collection_id",
    "type": "string",
    "description": "The name of the collection"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rekognition-collection.html"><code>AWS::Rekognition::Collection</code></a>.

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
    <td><code>collections</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="CollectionId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>collections</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>collections</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>collections_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>collections</code></td>
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

Gets all properties from an individual <code>collection</code>.
```sql
SELECT
region,
arn,
collection_id,
tags
FROM awscc.rekognition.collections
WHERE region = 'us-east-1' AND Identifier = '{{ collection_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>collections</code> in a region.
```sql
SELECT
region,
collection_id
FROM awscc.rekognition.collections_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>collection</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.rekognition.collections (
 CollectionId,
 region
)
SELECT
'{{ collection_id }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.rekognition.collections (
 CollectionId,
 Tags,
 region
)
SELECT
 '{{ collection_id }}',
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
  - name: collection
    props:
      - name: collection_id
        value: '{{ collection_id }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>collection</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.rekognition.collections
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ collection_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.rekognition.collections
WHERE Identifier = '{{ collection_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>collections</code> resource, the following permissions are required:

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
rekognition:CreateCollection,
rekognition:DescribeCollection,
rekognition:ListTagsForResource,
rekognition:TagResource
```

</TabItem>
<TabItem value="read">

```json
rekognition:DescribeCollection,
rekognition:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
rekognition:TagResource,
rekognition:UntagResource,
rekognition:DescribeCollection,
rekognition:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
rekognition:DeleteCollection
```

</TabItem>
<TabItem value="list">

```json
rekognition:ListCollections
```

</TabItem>
</Tabs>