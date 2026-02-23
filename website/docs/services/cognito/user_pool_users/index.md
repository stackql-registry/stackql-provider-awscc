---
title: user_pool_users
hide_title: false
hide_table_of_contents: false
keywords:
  - user_pool_users
  - cognito
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

Creates, updates, deletes or gets an <code>user_pool_user</code> resource or lists <code>user_pool_users</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>user_pool_users</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Cognito::UserPoolUser</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cognito.user_pool_users" /></td></tr>
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
    "name": "desired_delivery_mediums",
    "type": "array",
    "description": ""
  },
  {
    "name": "force_alias_creation",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "user_attributes",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "name",
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
    "name": "message_action",
    "type": "string",
    "description": ""
  },
  {
    "name": "username",
    "type": "string",
    "description": ""
  },
  {
    "name": "user_pool_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "validation_data",
    "type": "array",
    "description": ""
  },
  {
    "name": "client_metadata",
    "type": "object",
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
    "name": "username",
    "type": "string",
    "description": ""
  },
  {
    "name": "user_pool_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluser.html"><code>AWS::Cognito::UserPoolUser</code></a>.

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
    <td><code>user_pool_users</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="UserPoolId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>user_pool_users</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>user_pool_users_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>user_pool_users</code></td>
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

Gets all properties from an individual <code>user_pool_user</code>.
```sql
SELECT
region,
desired_delivery_mediums,
force_alias_creation,
user_attributes,
message_action,
username,
user_pool_id,
validation_data,
client_metadata
FROM awscc.cognito.user_pool_users
WHERE region = 'us-east-1' AND Identifier = '{{ user_pool_id }}|{{ username }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>user_pool_users</code> in a region.
```sql
SELECT
region,
user_pool_id,
username
FROM awscc.cognito.user_pool_users_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>user_pool_user</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cognito.user_pool_users (
 UserPoolId,
 region
)
SELECT
'{{ user_pool_id }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cognito.user_pool_users (
 DesiredDeliveryMediums,
 ForceAliasCreation,
 UserAttributes,
 MessageAction,
 Username,
 UserPoolId,
 ValidationData,
 ClientMetadata,
 region
)
SELECT
 '{{ desired_delivery_mediums }}',
 '{{ force_alias_creation }}',
 '{{ user_attributes }}',
 '{{ message_action }}',
 '{{ username }}',
 '{{ user_pool_id }}',
 '{{ validation_data }}',
 '{{ client_metadata }}',
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
  - name: user_pool_user
    props:
      - name: desired_delivery_mediums
        value:
          - '{{ desired_delivery_mediums[0] }}'
      - name: force_alias_creation
        value: '{{ force_alias_creation }}'
      - name: user_attributes
        value:
          - name: '{{ name }}'
            value: '{{ value }}'
      - name: message_action
        value: '{{ message_action }}'
      - name: username
        value: '{{ username }}'
      - name: user_pool_id
        value: '{{ user_pool_id }}'
      - name: validation_data
        value:
          - null
      - name: client_metadata
        value: {}
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cognito.user_pool_users
WHERE Identifier = '{{ user_pool_id }}|{{ username }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>user_pool_users</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
cognito-idp:AdminCreateUser,
cognito-idp:AdminGetUser,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
cognito-idp:AdminGetUser
```

</TabItem>
<TabItem value="delete">

```json
cognito-idp:AdminDeleteUser
```

</TabItem>
<TabItem value="list">

```json
cognito-idp:ListUsers
```

</TabItem>
</Tabs>