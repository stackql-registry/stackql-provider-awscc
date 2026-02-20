---
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - iam
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
<tr><td><b>Description</b></td><td>Creates a new IAM user for your AWS-account.<br />For information about quotas for the number of IAM users you can create, see &#91;IAM and quotas&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/reference&#95;iam-quotas.html) in the &#42;IAM User Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iam.users" /></td></tr>
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
    "name": "path",
    "type": "string",
    "description": "The path for the user name. For more information about paths, see &#91;IAM identifiers&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/Using&#95;Identifiers.html) in the &#42;IAM User Guide&#42;.<br />This parameter is optional. If it is not included, it defaults to a slash (/).<br />This parameter allows (through its &#91;regex pattern&#93;(https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (&#96;&#96;\\u0021&#96;&#96;) through the DEL character (&#96;&#96;\\u007F&#96;&#96;), including most punctuation characters, digits, and upper and lowercased letters."
  },
  {
    "name": "managed_policy_arns",
    "type": "array",
    "description": "A list of Amazon Resource Names (ARNs) of the IAM managed policies that you want to attach to the user.<br />For more information about ARNs, see &#91;Amazon Resource Names (ARNs) and Service Namespaces&#93;(https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the &#42;General Reference&#42;."
  },
  {
    "name": "policies",
    "type": "array",
    "description": "Adds or updates an inline policy document that is embedded in the specified IAM user. To view AWS::IAM::User snippets, see &#91;Declaring an User Resource&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/quickref-iam.html#scenario-iam-user).<br />The name of each policy for a role, user, or group must be unique. If you don't choose unique names, updates to the IAM identity will fail. <br />For information about limits on the number of inline policies that you can embed in a user, see &#91;Limitations on Entities&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html) in the &#42;User Guide&#42;.",
    "children": [
      {
        "name": "policy_document",
        "type": "object",
        "description": "The entire contents of the policy that defines permissions. For more information, see &#91;Overview of JSON policies&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/access&#95;policies.html#access&#95;policies-json)."
      },
      {
        "name": "policy_name",
        "type": "string",
        "description": "The friendly name (not ARN) identifying the policy."
      }
    ]
  },
  {
    "name": "user_name",
    "type": "string",
    "description": "The name of the user to create. Do not include the path in this value.<br />This parameter allows (per its &#91;regex pattern&#93;(https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: &#95;+=,.@-. The user name must be unique within the account. User names are not distinguished by case. For example, you cannot create users named both \"John\" and \"john\".<br />If you don't specify a name, CFN generates a unique physical ID and uses that ID for the user name.<br />If you specify a name, you must specify the &#96;&#96;CAPABILITY&#95;NAMED&#95;IAM&#96;&#96; value to acknowledge your template's capabilities. For more information, see &#91;Acknowledging Resources in Templates&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-capabilities).<br />Naming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple Regions. To prevent this, we recommend using &#96;&#96;Fn::Join&#96;&#96; and &#96;&#96;AWS::Region&#96;&#96; to create a Region-specific name, as in the following example: &#96;&#96;&#123;\"Fn::Join\": &#91;\"\", &#91;&#123;\"Ref\": \"AWS::Region\"&#125;, &#123;\"Ref\": \"MyResourceName\"&#125;&#93;&#93;&#125;&#96;&#96;."
  },
  {
    "name": "groups",
    "type": "array",
    "description": "A list of group names to which you want to add the user."
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "login_profile",
    "type": "object",
    "description": "Creates a password for the specified IAM user. A password allows an IAM user to access AWS services through the console.<br />You can use the CLI, the AWS API, or the &#42;Users&#42; page in the IAM console to create a password for any IAM user. Use &#91;ChangePassword&#93;(https://docs.aws.amazon.com/IAM/latest/APIReference/API&#95;ChangePassword.html) to update your own existing password in the &#42;My Security Credentials&#42; page in the console.<br />For more information about managing passwords, see &#91;Managing passwords&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/Using&#95;ManagingLogins.html) in the &#42;User Guide&#42;.",
    "children": [
      {
        "name": "password_reset_required",
        "type": "boolean",
        "description": "Specifies whether the user is required to set a new password on next sign-in."
      },
      {
        "name": "password",
        "type": "string",
        "description": "The user's password."
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of tags that you want to attach to the new user. Each tag consists of a key name and an associated value. For more information about tagging, see &#91;Tagging IAM resources&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/id&#95;tags.html) in the &#42;IAM User Guide&#42;.<br />If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "permissions_boundary",
    "type": "string",
    "description": "The ARN of the managed policy that is used to set the permissions boundary for the user.<br />A permissions boundary policy defines the maximum permissions that identity-based policies can grant to an entity, but does not grant permissions. Permissions boundaries do not define the maximum permissions that a resource-based policy can grant to an entity. To learn more, see &#91;Permissions boundaries for IAM entities&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/access&#95;policies&#95;boundaries.html) in the &#42;IAM User Guide&#42;.<br />For more information about policy types, see &#91;Policy types&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/access&#95;policies.html#access&#95;policy-types) in the &#42;IAM User Guide&#42;."
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
    "name": "user_name",
    "type": "string",
    "description": "The name of the user to create. Do not include the path in this value.<br />This parameter allows (per its &#91;regex pattern&#93;(https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: &#95;+=,.@-. The user name must be unique within the account. User names are not distinguished by case. For example, you cannot create users named both \"John\" and \"john\".<br />If you don't specify a name, CFN generates a unique physical ID and uses that ID for the user name.<br />If you specify a name, you must specify the &#96;&#96;CAPABILITY&#95;NAMED&#95;IAM&#96;&#96; value to acknowledge your template's capabilities. For more information, see &#91;Acknowledging Resources in Templates&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-capabilities).<br />Naming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple Regions. To prevent this, we recommend using &#96;&#96;Fn::Join&#96;&#96; and &#96;&#96;AWS::Region&#96;&#96; to create a Region-specific name, as in the following example: &#96;&#96;&#123;\"Fn::Join\": &#91;\"\", &#91;&#123;\"Ref\": \"AWS::Region\"&#125;, &#123;\"Ref\": \"MyResourceName\"&#125;&#93;&#93;&#125;&#96;&#96;."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-user.html"><code>AWS::IAM::User</code></a>.

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
    <td><CopyableCode code="region" /></td>
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
path,
managed_policy_arns,
policies,
user_name,
groups,
arn,
login_profile,
tags,
permissions_boundary
FROM awscc.iam.users
WHERE Identifier = '<UserName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>users</code> in a region.
```sql
SELECT
region,
user_name
FROM awscc.iam.users_list_only
;
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
INSERT INTO awscc.iam.users (
 Path,
 ManagedPolicyArns,
 Policies,
 UserName,
 Groups,
 LoginProfile,
 Tags,
 PermissionsBoundary,
 region
)
SELECT 
'{{ Path }}',
 '{{ ManagedPolicyArns }}',
 '{{ Policies }}',
 '{{ UserName }}',
 '{{ Groups }}',
 '{{ LoginProfile }}',
 '{{ Tags }}',
 '{{ PermissionsBoundary }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iam.users (
 Path,
 ManagedPolicyArns,
 Policies,
 UserName,
 Groups,
 LoginProfile,
 Tags,
 PermissionsBoundary,
 region
)
SELECT 
 '{{ Path }}',
 '{{ ManagedPolicyArns }}',
 '{{ Policies }}',
 '{{ UserName }}',
 '{{ Groups }}',
 '{{ LoginProfile }}',
 '{{ Tags }}',
 '{{ PermissionsBoundary }}',
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
      - name: Path
        value: '{{ Path }}'
      - name: ManagedPolicyArns
        value:
          - '{{ ManagedPolicyArns[0] }}'
      - name: Policies
        value:
          - PolicyDocument: {}
            PolicyName: '{{ PolicyName }}'
      - name: UserName
        value: '{{ UserName }}'
      - name: Groups
        value:
          - '{{ Groups[0] }}'
      - name: LoginProfile
        value:
          PasswordResetRequired: '{{ PasswordResetRequired }}'
          Password: '{{ Password }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'
      - name: PermissionsBoundary
        value: '{{ PermissionsBoundary }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>user</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iam.users
SET PatchDocument = string('{{ {
    "Path": path,
    "ManagedPolicyArns": managed_policy_arns,
    "Policies": policies,
    "Groups": groups,
    "LoginProfile": login_profile,
    "Tags": tags,
    "PermissionsBoundary": permissions_boundary
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<UserName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iam.users
WHERE Identifier = '<UserName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>users</code> resource, the following permissions are required:

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
iam:CreateLoginProfile,
iam:AddUserToGroup,
iam:PutUserPolicy,
iam:AttachUserPolicy,
iam:CreateUser,
iam:GetUser,
iam:TagUser
```

</TabItem>
<TabItem value="read">

```json
iam:GetUserPolicy,
iam:ListGroupsForUser,
iam:ListAttachedUserPolicies,
iam:ListUserPolicies,
iam:GetUser,
iam:GetLoginProfile
```

</TabItem>
<TabItem value="update">

```json
iam:UpdateLoginProfile,
iam:UpdateUser,
iam:PutUserPermissionsBoundary,
iam:AttachUserPolicy,
iam:DeleteUserPolicy,
iam:DeleteUserPermissionsBoundary,
iam:TagUser,
iam:UntagUser,
iam:CreateLoginProfile,
iam:RemoveUserFromGroup,
iam:AddUserToGroup,
iam:PutUserPolicy,
iam:DetachUserPolicy,
iam:GetLoginProfile,
iam:DeleteLoginProfile,
iam:GetUser,
iam:ListUserTags
```

</TabItem>
<TabItem value="delete">

```json
iam:DeleteAccessKey,
iam:RemoveUserFromGroup,
iam:DeleteUserPolicy,
iam:DeleteUser,
iam:DetachUserPolicy,
iam:DeleteLoginProfile,
iam:ListAccessKeys,
iam:GetUserPolicy,
iam:ListGroupsForUser,
iam:ListAttachedUserPolicies,
iam:ListUserPolicies,
iam:GetUser,
iam:GetLoginProfile
```

</TabItem>
<TabItem value="list">

```json
iam:listUsers
```

</TabItem>
</Tabs>