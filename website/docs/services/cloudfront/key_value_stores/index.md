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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-keyvaluestore.html"><code>AWS::CloudFront::KeyValueStore</code></a>.

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
    <td><CopyableCode code="Name, region" /></td>
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
WHERE data__Identifier = '<Name>';
```

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
'{{ Name }}',
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
 '{{ Name }}',
 '{{ Comment }}',
 '{{ ImportSource }}',
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
      - name: Name
        value: '{{ Name }}'
      - name: Comment
        value: '{{ Comment }}'
      - name: ImportSource
        value:
          SourceType: '{{ SourceType }}'
          SourceArn: '{{ SourceArn }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudfront.key_value_stores
WHERE data__Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>key_value_stores</code> resource, the following permissions are required:

### Create
```json
cloudfront:CreateKeyValueStore,
cloudfront:DescribeKeyValueStore,
s3:GetObject,
s3:HeadObject,
s3:GetBucketLocation
```

### Delete
```json
cloudfront:DeleteKeyValueStore,
cloudfront:DescribeKeyValueStore
```

### List
```json
cloudfront:ListKeyValueStores
```

### Read
```json
cloudfront:DescribeKeyValueStore
```

### Update
```json
cloudfront:UpdateKeyValueStore,
cloudfront:DescribeKeyValueStore
```
