---
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
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

Creates, updates, deletes or gets a <code>user</code> resource or lists <code>users</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>users</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::ElastiCache::User</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.elasticache.users" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "status",
    "type": "string",
    "description": "Indicates the user status. Can be \"active\", \"modifying\" or \"deleting\"."
  },
  {
    "name": "user_id",
    "type": "string",
    "description": "The ID of the user."
  },
  {
    "name": "user_name",
    "type": "string",
    "description": "The username of the user."
  },
  {
    "name": "engine",
    "type": "string",
    "description": "The target cache engine for the user."
  },
  {
    "name": "access_string",
    "type": "string",
    "description": "Access permissions string used for this user account."
  },
  {
    "name": "no_password_required",
    "type": "boolean",
    "description": "Indicates a password is not required for this user account."
  },
  {
    "name": "passwords",
    "type": "array",
    "description": "Passwords used for this user account. You can create up to two passwords for each user."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the user account."
  },
  {
    "name": "authentication_mode",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": "Authentication Type"
      },
      {
        "name": "passwords",
        "type": "array",
        "description": "Passwords used for this user account. You can create up to two passwords for each user."
      }
    ]
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-user.html"><code>AWS::ElastiCache::User</code></a>.

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
    <td><CopyableCode code="UserId, UserName, Engine, region" /></td>
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

Gets all properties from an individual <code>user</code>.
```sql
SELECT
region,
status,
user_id,
user_name,
engine,
access_string,
no_password_required,
passwords,
arn,
authentication_mode,
tags
FROM awscc.elasticache.users
WHERE region = 'us-east-1' AND data__Identifier = '<UserId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>user</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.elasticache.users (
 UserId,
 UserName,
 Engine,
 region
)
SELECT 
'{{ UserId }}',
 '{{ UserName }}',
 '{{ Engine }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.elasticache.users (
 UserId,
 UserName,
 Engine,
 AccessString,
 NoPasswordRequired,
 Passwords,
 AuthenticationMode,
 Tags,
 region
)
SELECT 
 '{{ UserId }}',
 '{{ UserName }}',
 '{{ Engine }}',
 '{{ AccessString }}',
 '{{ NoPasswordRequired }}',
 '{{ Passwords }}',
 '{{ AuthenticationMode }}',
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
  - name: user
    props:
      - name: UserId
        value: '{{ UserId }}'
      - name: UserName
        value: '{{ UserName }}'
      - name: Engine
        value: '{{ Engine }}'
      - name: AccessString
        value: '{{ AccessString }}'
      - name: NoPasswordRequired
        value: '{{ NoPasswordRequired }}'
      - name: Passwords
        value:
          - '{{ Passwords[0] }}'
      - name: AuthenticationMode
        value:
          Type: '{{ Type }}'
          Passwords:
            - '{{ Passwords[0] }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.elasticache.users
WHERE data__Identifier = '<UserId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>users</code> resource, the following permissions are required:

### Create
```json
elasticache:CreateUser,
elasticache:DescribeUsers,
elasticache:ListTagsForResource,
elasticache:AddTagsToResource
```

### Read
```json
elasticache:DescribeUsers,
elasticache:ListTagsForResource
```

### Update
```json
elasticache:ModifyUser,
elasticache:DescribeUsers,
elasticache:ListTagsForResource,
elasticache:AddTagsToResource,
elasticache:RemoveTagsFromResource
```

### Delete
```json
elasticache:DeleteUser,
elasticache:DescribeUsers
```

### List
```json
elasticache:DescribeUsers,
elasticache:ListTagsForResource
```
