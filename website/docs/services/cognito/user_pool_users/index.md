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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluser.html"><code>AWS::Cognito::UserPoolUser</code></a>.

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
    <td><CopyableCode code="UserPoolId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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
WHERE region = 'us-east-1' AND data__Identifier = '<UserPoolId>|<Username>';
```

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
'{{ UserPoolId }}',
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
 '{{ DesiredDeliveryMediums }}',
 '{{ ForceAliasCreation }}',
 '{{ UserAttributes }}',
 '{{ MessageAction }}',
 '{{ Username }}',
 '{{ UserPoolId }}',
 '{{ ValidationData }}',
 '{{ ClientMetadata }}',
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
      - name: DesiredDeliveryMediums
        value:
          - '{{ DesiredDeliveryMediums[0] }}'
      - name: ForceAliasCreation
        value: '{{ ForceAliasCreation }}'
      - name: UserAttributes
        value:
          - Name: '{{ Name }}'
            Value: '{{ Value }}'
      - name: MessageAction
        value: '{{ MessageAction }}'
      - name: Username
        value: '{{ Username }}'
      - name: UserPoolId
        value: '{{ UserPoolId }}'
      - name: ValidationData
        value:
          - null
      - name: ClientMetadata
        value: {}

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cognito.user_pool_users
WHERE data__Identifier = '<UserPoolId|Username>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>user_pool_users</code> resource, the following permissions are required:

### Create
```json
cognito-idp:AdminCreateUser,
cognito-idp:AdminGetUser,
iam:PassRole
```

### Read
```json
cognito-idp:AdminGetUser
```

### Delete
```json
cognito-idp:AdminDeleteUser
```

### List
```json
cognito-idp:ListUsers
```
