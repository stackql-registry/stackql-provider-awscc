---
title: key_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - key_groups
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

Creates, updates, deletes or gets a <code>key_group</code> resource or lists <code>key_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>key_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A key group.<br />A key group contains a list of public keys that you can use with &#91;CloudFront signed URLs and signed cookies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html).</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudfront.key_groups" /></td></tr>
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
    "description": ""
  },
  {
    "name": "key_group_config",
    "type": "object",
    "description": "The key group configuration.",
    "children": [
      {
        "name": "comment",
        "type": "string",
        "description": "A comment to describe the key group. The comment cannot be longer than 128 characters."
      },
      {
        "name": "items",
        "type": "array",
        "description": "A list of the identifiers of the public keys in the key group."
      },
      {
        "name": "name",
        "type": "string",
        "description": "A name to identify the key group."
      }
    ]
  },
  {
    "name": "last_modified_time",
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
    "name": "id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-keygroup.html"><code>AWS::CloudFront::KeyGroup</code></a>.

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
    <td><code>key_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="KeyGroupConfig, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>key_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>key_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>key_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>key_groups</code></td>
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

Gets all properties from an individual <code>key_group</code>.
```sql
SELECT
region,
id,
key_group_config,
last_modified_time
FROM awscc.cloudfront.key_groups
WHERE data__Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>key_groups</code> in a region.
```sql
SELECT
region,
id
FROM awscc.cloudfront.key_groups_list_only
;
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>key_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cloudfront.key_groups (
 KeyGroupConfig,
 region
)
SELECT 
'{{ KeyGroupConfig }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cloudfront.key_groups (
 KeyGroupConfig,
 region
)
SELECT 
 '{{ KeyGroupConfig }}',
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
  - name: key_group
    props:
      - name: KeyGroupConfig
        value:
          Comment: '{{ Comment }}'
          Items:
            - '{{ Items[0] }}'
          Name: '{{ Name }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.cloudfront.key_groups
SET data__PatchDocument = string('{{ {
    "KeyGroupConfig": key_group_config
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudfront.key_groups
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>key_groups</code> resource, the following permissions are required:

### Create
```json
cloudfront:CreateKeyGroup
```

### Delete
```json
cloudfront:DeleteKeyGroup,
cloudfront:GetKeyGroup
```

### List
```json
cloudfront:ListKeyGroups
```

### Read
```json
cloudfront:GetKeyGroup
```

### Update
```json
cloudfront:UpdateKeyGroup,
cloudfront:GetKeyGroup
```
