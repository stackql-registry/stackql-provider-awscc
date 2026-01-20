---
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - transfer
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
<tr><td><b>Description</b></td><td>Definition of AWS::Transfer::User Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.transfer.users" /></td></tr>
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
    "name": "home_directory",
    "type": "string",
    "description": ""
  },
  {
    "name": "home_directory_mappings",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "entry",
        "type": "string",
        "description": ""
      },
      {
        "name": "target",
        "type": "string",
        "description": ""
      },
      {
        "name": "type",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "home_directory_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "policy",
    "type": "string",
    "description": ""
  },
  {
    "name": "posix_profile",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "uid",
        "type": "number",
        "description": ""
      },
      {
        "name": "gid",
        "type": "number",
        "description": ""
      },
      {
        "name": "secondary_gids",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "role",
    "type": "string",
    "description": ""
  },
  {
    "name": "server_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "ssh_public_keys",
    "type": "array",
    "description": "This represents the SSH User Public Keys for CloudFormation resource"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The name assigned to the tag that you create."
      },
      {
        "name": "value",
        "type": "string",
        "description": "Contains one or more values that you assigned to the key name you create."
      }
    ]
  },
  {
    "name": "user_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-user.html"><code>AWS::Transfer::User</code></a>.

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
    <td><CopyableCode code="Role, ServerId, UserName, region" /></td>
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
arn,
home_directory,
home_directory_mappings,
home_directory_type,
policy,
posix_profile,
role,
server_id,
ssh_public_keys,
tags,
user_name
FROM awscc.transfer.users
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
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
INSERT INTO awscc.transfer.users (
 Role,
 ServerId,
 UserName,
 region
)
SELECT 
'{{ Role }}',
 '{{ ServerId }}',
 '{{ UserName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.transfer.users (
 HomeDirectory,
 HomeDirectoryMappings,
 HomeDirectoryType,
 Policy,
 PosixProfile,
 Role,
 ServerId,
 SshPublicKeys,
 Tags,
 UserName,
 region
)
SELECT 
 '{{ HomeDirectory }}',
 '{{ HomeDirectoryMappings }}',
 '{{ HomeDirectoryType }}',
 '{{ Policy }}',
 '{{ PosixProfile }}',
 '{{ Role }}',
 '{{ ServerId }}',
 '{{ SshPublicKeys }}',
 '{{ Tags }}',
 '{{ UserName }}',
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
      - name: HomeDirectory
        value: '{{ HomeDirectory }}'
      - name: HomeDirectoryMappings
        value:
          - Entry: '{{ Entry }}'
            Target: '{{ Target }}'
            Type: '{{ Type }}'
      - name: HomeDirectoryType
        value: '{{ HomeDirectoryType }}'
      - name: Policy
        value: '{{ Policy }}'
      - name: PosixProfile
        value:
          Uid: null
          Gid: null
          SecondaryGids:
            - null
      - name: Role
        value: '{{ Role }}'
      - name: ServerId
        value: '{{ ServerId }}'
      - name: SshPublicKeys
        value:
          - '{{ SshPublicKeys[0] }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: UserName
        value: '{{ UserName }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.transfer.users
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>users</code> resource, the following permissions are required:

### Create
```json
iam:PassRole,
transfer:CreateUser,
transfer:DescribeUser,
transfer:ImportSshPublicKey,
transfer:TagResource
```

### Read
```json
transfer:DescribeUser
```

### Update
```json
iam:PassRole,
transfer:DeleteSshPublicKey,
transfer:DescribeUser,
transfer:ImportSshPublicKey,
transfer:TagResource,
transfer:UnTagResource,
transfer:UpdateUser
```

### Delete
```json
transfer:DeleteUser
```

### List
```json
transfer:ListUsers
```
