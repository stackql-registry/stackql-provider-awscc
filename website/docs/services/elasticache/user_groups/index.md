---
title: user_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - user_groups
  - elasticache
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

Creates, updates, deletes or gets an <code>user_group</code> resource or lists <code>user_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>user_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::ElastiCache::UserGroup</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.elasticache.user_groups" /></td></tr>
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
    "name": "status",
    "type": "string",
    "description": "Indicates user group status. Can be \"creating\", \"active\", \"modifying\", \"deleting\"."
  },
  {
    "name": "user_group_id",
    "type": "string",
    "description": "The ID of the user group."
  },
  {
    "name": "engine",
    "type": "string",
    "description": "The target cache engine for the user group."
  },
  {
    "name": "user_ids",
    "type": "array",
    "description": "List of users associated to this user group."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the user account."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this user.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with 'aws:'. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
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
    "name": "user_group_id",
    "type": "string",
    "description": "The ID of the user group."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-usergroup.html"><code>AWS::ElastiCache::UserGroup</code></a>.

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
    <td><code>user_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="UserGroupId, Engine, UserIds, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>user_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>user_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>user_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>user_groups</code></td>
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

Gets all properties from an individual <code>user_group</code>.
```sql
SELECT
region,
status,
user_group_id,
engine,
user_ids,
arn,
tags
FROM awscc.elasticache.user_groups
WHERE region = 'us-east-1' AND Identifier = '<UserGroupId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>user_groups</code> in a region.
```sql
SELECT
region,
user_group_id
FROM awscc.elasticache.user_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>user_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.elasticache.user_groups (
 UserGroupId,
 Engine,
 UserIds,
 region
)
SELECT 
'{{ UserGroupId }}',
 '{{ Engine }}',
 '{{ UserIds }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.elasticache.user_groups (
 UserGroupId,
 Engine,
 UserIds,
 Tags,
 region
)
SELECT 
 '{{ UserGroupId }}',
 '{{ Engine }}',
 '{{ UserIds }}',
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
  - name: user_group
    props:
      - name: UserGroupId
        value: '{{ UserGroupId }}'
      - name: Engine
        value: '{{ Engine }}'
      - name: UserIds
        value:
          - '{{ UserIds[0] }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.elasticache.user_groups
SET PatchDocument = string('{{ {
    "Engine": engine,
    "UserIds": user_ids,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<UserGroupId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.elasticache.user_groups
WHERE Identifier = '<UserGroupId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>user_groups</code> resource, the following permissions are required:

### Create
```json
elasticache:CreateUserGroup,
elasticache:DescribeUserGroups,
elasticache:ListTagsForResource,
elasticache:AddTagsToResource
```

### Read
```json
elasticache:DescribeUserGroups,
elasticache:ListTagsForResource
```

### Update
```json
elasticache:ModifyUserGroup,
elasticache:DescribeUserGroups,
elasticache:ListTagsForResource,
elasticache:AddTagsToResource,
elasticache:RemoveTagsFromResource
```

### Delete
```json
elasticache:ModifyReplicationGroup,
elasticache:DeleteUserGroup,
elasticache:DescribeUserGroups,
elasticache:ListTagsForResource
```

### List
```json
elasticache:DescribeUserGroups,
elasticache:ListTagsForResource
```
