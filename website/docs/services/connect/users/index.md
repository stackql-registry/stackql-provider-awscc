---
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - connect
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
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Connect::User</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.connect.users" /></td></tr>
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
    "name": "instance_arn",
    "type": "string",
    "description": "The identifier of the Amazon Connect instance."
  },
  {
    "name": "directory_user_id",
    "type": "string",
    "description": "The identifier of the user account in the directory used for identity management."
  },
  {
    "name": "hierarchy_group_arn",
    "type": "string",
    "description": "The identifier of the hierarchy group for the user."
  },
  {
    "name": "username",
    "type": "string",
    "description": "The user name for the account."
  },
  {
    "name": "password",
    "type": "string",
    "description": "The password for the user account. A password is required if you are using Amazon Connect for identity management. Otherwise, it is an error to include a password."
  },
  {
    "name": "routing_profile_arn",
    "type": "string",
    "description": "The identifier of the routing profile for the user."
  },
  {
    "name": "identity_info",
    "type": "object",
    "description": "The information about the identity of the user.",
    "children": [
      {
        "name": "first_name",
        "type": "string",
        "description": "The first name. This is required if you are using Amazon Connect or SAML for identity management."
      },
      {
        "name": "last_name",
        "type": "string",
        "description": "The last name. This is required if you are using Amazon Connect or SAML for identity management."
      },
      {
        "name": "email",
        "type": "string",
        "description": "The email address. If you are using SAML for identity management and include this parameter, an error is returned."
      },
      {
        "name": "secondary_email",
        "type": "string",
        "description": "The secondary email address. If you provide a secondary email, the user receives email notifications -- other than password reset notifications -- to this email address instead of to their primary email address."
      },
      {
        "name": "mobile",
        "type": "string",
        "description": "The mobile phone number."
      }
    ]
  },
  {
    "name": "phone_config",
    "type": "object",
    "description": "The phone settings for the user.",
    "children": [
      {
        "name": "after_contact_work_time_limit",
        "type": "integer",
        "description": "The After Call Work (ACW) timeout setting, in seconds."
      },
      {
        "name": "auto_accept",
        "type": "boolean",
        "description": "The Auto accept setting."
      },
      {
        "name": "desk_phone_number",
        "type": "string",
        "description": "The phone number for the user's desk phone."
      },
      {
        "name": "phone_type",
        "type": "string",
        "description": "The phone type."
      },
      {
        "name": "persistent_connection",
        "type": "boolean",
        "description": "The Persistent Connection setting."
      }
    ]
  },
  {
    "name": "security_profile_arns",
    "type": "array",
    "description": "One or more security profile arns for the user"
  },
  {
    "name": "user_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the user."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "One or more tags.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters"
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. . You can specify a value that is maximum of 256 Unicode characters"
      }
    ]
  },
  {
    "name": "user_proficiencies",
    "type": "array",
    "description": "One or more predefined attributes assigned to a user, with a level that indicates how skilled they are.",
    "children": [
      {
        "name": "attribute_name",
        "type": "string",
        "description": "The name of user's proficiency. You must use name of predefined attribute present in the Amazon Connect instance."
      },
      {
        "name": "attribute_value",
        "type": "string",
        "description": "The value of user's proficiency. You must use value of predefined attribute present in the Amazon Connect instance."
      },
      {
        "name": "level",
        "type": "number",
        "description": "The level of the proficiency. The valid values are 1, 2, 3, 4 and 5."
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
    "name": "user_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the user."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-user.html"><code>AWS::Connect::User</code></a>.

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
    <td><code>users</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="InstanceArn, PhoneConfig, RoutingProfileArn, SecurityProfileArns, Username, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>users</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>users</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>users_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>users</code></td>
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

Gets all properties from an individual <code>user</code>.
```sql
SELECT
region,
instance_arn,
directory_user_id,
hierarchy_group_arn,
username,
password,
routing_profile_arn,
identity_info,
phone_config,
security_profile_arns,
user_arn,
tags,
user_proficiencies
FROM awscc.connect.users
WHERE region = 'us-east-1' AND Identifier = '{{ user_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>users</code> in a region.
```sql
SELECT
region,
user_arn
FROM awscc.connect.users_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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
INSERT INTO awscc.connect.users (
 InstanceArn,
 Username,
 RoutingProfileArn,
 PhoneConfig,
 SecurityProfileArns,
 region
)
SELECT
'{{ instance_arn }}',
 '{{ username }}',
 '{{ routing_profile_arn }}',
 '{{ phone_config }}',
 '{{ security_profile_arns }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.connect.users (
 InstanceArn,
 DirectoryUserId,
 HierarchyGroupArn,
 Username,
 Password,
 RoutingProfileArn,
 IdentityInfo,
 PhoneConfig,
 SecurityProfileArns,
 Tags,
 UserProficiencies,
 region
)
SELECT
 '{{ instance_arn }}',
 '{{ directory_user_id }}',
 '{{ hierarchy_group_arn }}',
 '{{ username }}',
 '{{ password }}',
 '{{ routing_profile_arn }}',
 '{{ identity_info }}',
 '{{ phone_config }}',
 '{{ security_profile_arns }}',
 '{{ tags }}',
 '{{ user_proficiencies }}',
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
      - name: instance_arn
        value: '{{ instance_arn }}'
      - name: directory_user_id
        value: '{{ directory_user_id }}'
      - name: hierarchy_group_arn
        value: '{{ hierarchy_group_arn }}'
      - name: username
        value: '{{ username }}'
      - name: password
        value: '{{ password }}'
      - name: routing_profile_arn
        value: '{{ routing_profile_arn }}'
      - name: identity_info
        value:
          first_name: '{{ first_name }}'
          last_name: '{{ last_name }}'
          email: '{{ email }}'
          secondary_email: '{{ secondary_email }}'
          mobile: '{{ mobile }}'
      - name: phone_config
        value:
          after_contact_work_time_limit: '{{ after_contact_work_time_limit }}'
          auto_accept: '{{ auto_accept }}'
          desk_phone_number: '{{ desk_phone_number }}'
          phone_type: '{{ phone_type }}'
          persistent_connection: '{{ persistent_connection }}'
      - name: security_profile_arns
        value:
          - '{{ security_profile_arns[0] }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: user_proficiencies
        value:
          - attribute_name: '{{ attribute_name }}'
            attribute_value: '{{ attribute_value }}'
            level: null
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>user</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.connect.users
SET PatchDocument = string('{{ {
    "InstanceArn": instance_arn,
    "DirectoryUserId": directory_user_id,
    "HierarchyGroupArn": hierarchy_group_arn,
    "Username": username,
    "Password": password,
    "RoutingProfileArn": routing_profile_arn,
    "IdentityInfo": identity_info,
    "PhoneConfig": phone_config,
    "SecurityProfileArns": security_profile_arns,
    "Tags": tags,
    "UserProficiencies": user_proficiencies
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ user_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.connect.users
WHERE Identifier = '{{ user_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>users</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
connect:CreateUser,
connect:TagResource,
connect:AssociateUserProficiencies
```

</TabItem>
<TabItem value="read">

```json
connect:DescribeUser,
connect:ListUserProficiencies
```

</TabItem>
<TabItem value="delete">

```json
connect:DeleteUser,
connect:UntagResource
```

</TabItem>
<TabItem value="update">

```json
connect:UpdateUserIdentityInfo,
connect:UpdateUserPhoneConfig,
connect:UpdateUserRoutingProfile,
connect:UpdateUserSecurityProfiles,
connect:UpdateUserHierarchy,
connect:TagResource,
connect:UntagResource,
connect:AssociateUserProficiencies,
connect:DisassociateUserProficiencies,
connect:UpdateUserProficiencies
```

</TabItem>
<TabItem value="list">

```json
connect:ListUsers
```

</TabItem>
</Tabs>