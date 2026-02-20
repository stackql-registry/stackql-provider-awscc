---
title: faqs
hide_title: false
hide_table_of_contents: false
keywords:
  - faqs
  - kendra
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

Creates, updates, deletes or gets a <code>faq</code> resource or lists <code>faqs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>faqs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A Kendra FAQ resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.kendra.faqs" /></td></tr>
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
    "description": "Unique ID of index"
  },
  {
    "name": "index_id",
    "type": "string",
    "description": "Index ID"
  },
  {
    "name": "name",
    "type": "string",
    "description": "FAQ name"
  },
  {
    "name": "description",
    "type": "string",
    "description": "FAQ description"
  },
  {
    "name": "file_format",
    "type": "string",
    "description": "FAQ file format"
  },
  {
    "name": "s3_path",
    "type": "object",
    "description": "FAQ S3 path",
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
    "name": "role_arn",
    "type": "string",
    "description": "FAQ role ARN"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags for labeling the FAQ",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "A string used to identify this tag"
      },
      {
        "name": "value",
        "type": "string",
        "description": "A string containing the value for the tag"
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "language_code",
    "type": "string",
    "description": "The code for a language."
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
    "description": "Unique ID of index"
  },
  {
    "name": "index_id",
    "type": "string",
    "description": "Index ID"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html"><code>AWS::Kendra::Faq</code></a>.

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
    <td><code>faqs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="IndexId, Name, S3Path, RoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>faqs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>faqs</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>faqs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>faqs</code></td>
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

Gets all properties from an individual <code>faq</code>.
```sql
SELECT
region,
id,
index_id,
name,
description,
file_format,
s3_path,
role_arn,
tags,
arn,
language_code
FROM awscc.kendra.faqs
WHERE region = 'us-east-1' AND data__Identifier = '<Id>|<IndexId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>faqs</code> in a region.
```sql
SELECT
region,
id,
index_id
FROM awscc.kendra.faqs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>faq</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.kendra.faqs (
 IndexId,
 Name,
 S3Path,
 RoleArn,
 region
)
SELECT 
'{{ IndexId }}',
 '{{ Name }}',
 '{{ S3Path }}',
 '{{ RoleArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.kendra.faqs (
 IndexId,
 Name,
 Description,
 FileFormat,
 S3Path,
 RoleArn,
 Tags,
 LanguageCode,
 region
)
SELECT 
 '{{ IndexId }}',
 '{{ Name }}',
 '{{ Description }}',
 '{{ FileFormat }}',
 '{{ S3Path }}',
 '{{ RoleArn }}',
 '{{ Tags }}',
 '{{ LanguageCode }}',
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
  - name: faq
    props:
      - name: IndexId
        value: '{{ IndexId }}'
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: FileFormat
        value: '{{ FileFormat }}'
      - name: S3Path
        value:
          Bucket: '{{ Bucket }}'
          Key: '{{ Key }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: LanguageCode
        value: '{{ LanguageCode }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.kendra.faqs
SET data__PatchDocument = string('{{ {
    "Tags": tags,
    "LanguageCode": language_code
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Id>|<IndexId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.kendra.faqs
WHERE data__Identifier = '<Id|IndexId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>faqs</code> resource, the following permissions are required:

### Create
```json
kendra:CreateFaq,
kendra:DescribeFaq,
iam:PassRole,
kendra:ListTagsForResource,
kendra:TagResource
```

### Update
```json
kendra:ListTagsForResource,
kendra:UntagResource,
kendra:TagResource
```

### Read
```json
kendra:DescribeFaq,
kendra:ListTagsForResource
```

### Delete
```json
kendra:DeleteFaq,
kendra:DescribeFaq
```

### List
```json
kendra:ListFaqs
```
