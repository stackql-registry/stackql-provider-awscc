---
title: storage_lens_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - storage_lens_groups
  - s3
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

Creates, updates, deletes or gets a <code>storage_lens_group</code> resource or lists <code>storage_lens_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>storage_lens_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::S3::StorageLensGroup resource is an Amazon S3 resource type that you can use to create Storage Lens Group.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.s3.storage_lens_groups" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": "The name that identifies the Amazon S3 Storage Lens Group."
  },
  {
    "name": "filter",
    "type": "object",
    "description": "Sets the Storage Lens Group filter.",
    "children": [
      {
        "name": "match_any_prefix",
        "type": "array",
        "description": "Filter to match any of the specified prefixes."
      },
      {
        "name": "match_any_suffix",
        "type": "array",
        "description": "Filter to match any of the specified suffixes."
      },
      {
        "name": "match_any_tag",
        "type": "array",
        "description": "Filter to match any of the specified object tags.",
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
        "name": "match_object_size",
        "type": "object",
        "description": "Filter to match all of the specified values for the minimum and maximum object size.",
        "children": [
          {
            "name": "bytes_greater_than",
            "type": "integer",
            "description": "Minimum object size to which the rule applies."
          },
          {
            "name": "bytes_less_than",
            "type": "integer",
            "description": "Maximum object size to which the rule applies."
          }
        ]
      },
      {
        "name": "match_object_age",
        "type": "object",
        "description": "Filter to match all of the specified values for the minimum and maximum object age.",
        "children": [
          {
            "name": "days_greater_than",
            "type": "integer",
            "description": "Minimum object age to which the rule applies."
          },
          {
            "name": "days_less_than",
            "type": "integer",
            "description": "Maximum object age to which the rule applies."
          }
        ]
      },
      {
        "name": "and",
        "type": "object",
        "description": "The Storage Lens group will include objects that match all of the specified filter values."
      },
      {
        "name": "or",
        "type": "object",
        "description": "The Storage Lens group will include objects that match any of the specified filter values."
      }
    ]
  },
  {
    "name": "storage_lens_group_arn",
    "type": "string",
    "description": "The ARN for the Amazon S3 Storage Lens Group."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A set of tags (key-value pairs) for this Amazon S3 Storage Lens Group.",
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
    "name": "name",
    "type": "string",
    "description": "The name that identifies the Amazon S3 Storage Lens Group."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html"><code>AWS::S3::StorageLensGroup</code></a>.

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
    <td><code>storage_lens_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, Filter, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>storage_lens_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>storage_lens_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>storage_lens_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>storage_lens_groups</code></td>
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

Gets all properties from an individual <code>storage_lens_group</code>.
```sql
SELECT
region,
name,
filter,
storage_lens_group_arn,
tags
FROM awscc.s3.storage_lens_groups
WHERE region = 'us-east-1' AND Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>storage_lens_groups</code> in a region.
```sql
SELECT
region,
name
FROM awscc.s3.storage_lens_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>storage_lens_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.s3.storage_lens_groups (
 Name,
 Filter,
 region
)
SELECT 
'{{ Name }}',
 '{{ Filter }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.s3.storage_lens_groups (
 Name,
 Filter,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Filter }}',
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
  - name: storage_lens_group
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Filter
        value:
          MatchAnyPrefix:
            - '{{ MatchAnyPrefix[0] }}'
          MatchAnySuffix:
            - '{{ MatchAnySuffix[0] }}'
          MatchAnyTag:
            - Key: '{{ Key }}'
              Value: '{{ Value }}'
          MatchObjectSize:
            BytesGreaterThan: '{{ BytesGreaterThan }}'
            BytesLessThan: '{{ BytesLessThan }}'
          MatchObjectAge:
            DaysGreaterThan: '{{ DaysGreaterThan }}'
            DaysLessThan: '{{ DaysLessThan }}'
          And:
            MatchAnyPrefix: null
            MatchAnySuffix: null
            MatchAnyTag: null
            MatchObjectSize: null
            MatchObjectAge: null
          Or:
            MatchAnyPrefix: null
            MatchAnySuffix: null
            MatchAnyTag: null
            MatchObjectSize: null
            MatchObjectAge: null
      - name: Tags
        value:
          - null

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>storage_lens_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.s3.storage_lens_groups
SET PatchDocument = string('{{ {
    "Filter": filter,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.s3.storage_lens_groups
WHERE Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>storage_lens_groups</code> resource, the following permissions are required:

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
s3:CreateStorageLensGroup,
s3:GetStorageLensGroup,
s3:TagResource,
s3:ListTagsForResource
```

</TabItem>
<TabItem value="read">

```json
s3:GetStorageLensGroup,
s3:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
s3:GetStorageLensGroup,
s3:UpdateStorageLensGroup,
s3:TagResource,
s3:UntagResource,
s3:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
s3:DeleteStorageLensGroup
```

</TabItem>
<TabItem value="list">

```json
s3:ListStorageLensGroups
```

</TabItem>
</Tabs>