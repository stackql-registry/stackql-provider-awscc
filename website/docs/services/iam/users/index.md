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

import CodeBlock from '@theme/CodeBlock';
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
<tr><td><b>Description</b></td><td><details><summary>Creates a new IAM user for your AWS-account.</summary>For information about quotas for the number of IAM users you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and quotas</a> in the <i>IAM User Guide</i>.</details></td></tr>
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
    "description": "<details><summary>The path for the user name. For more information about paths, see <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html\">IAM identifiers</a> in the <i>IAM User Guide</i>.</summary>This parameter is optional. If it is not included, it defaults to a slash (/).<br />This parameter allows (through its <a href=\"https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex\">regex pattern</a>) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (<code>\\u0021</code>) through the DEL character (<code>\\u007F</code>), including most punctuation characters, digits, and upper and lowercased letters.</details>"
  },
  {
    "name": "managed_policy_arns",
    "type": "array",
    "description": "<details><summary>A list of Amazon Resource Names (ARNs) of the IAM managed policies that you want to attach to the user.</summary>For more information about ARNs, see <a href=\"https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html\">Amazon Resource Names (ARNs) and Service Namespaces</a> in the <i>General Reference</i>.</details>"
  },
  {
    "name": "policies",
    "type": "array",
    "description": "<details><summary>Adds or updates an inline policy document that is embedded in the specified IAM user. To view AWS::IAM::User snippets, see <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/quickref-iam.html#scenario-iam-user\">Declaring an User Resource</a>.</summary>The name of each policy for a role, user, or group must be unique. If you don't choose unique names, updates to the IAM identity will fail.<br />For information about limits on the number of inline policies that you can embed in a user, see <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html\">Limitations on Entities</a> in the <i>User Guide</i>.</details>",
    "children": [
      {
        "name": "policy_document",
        "type": "object",
        "description": "The entire contents of the policy that defines permissions. For more information, see <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policies-json\">Overview of JSON policies</a>."
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
    "description": "<details><summary>The name of the user to create. Do not include the path in this value.</summary>This parameter allows (per its <a href=\"https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex\">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-. The user name must be unique within the account. User names are not distinguished by case. For example, you cannot create users named both \"John\" and \"john\".<br />If you don't specify a name, CFN generates a unique physical ID and uses that ID for the user name.<br />If you specify a name, you must specify the <code>CAPABILITY_NAMED_IAM</code> value to acknowledge your template's capabilities. For more information, see <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-capabilities\">Acknowledging Resources in Templates</a>.<br />Naming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple Regions. To prevent this, we recommend using <code>Fn::Join</code> and <code>AWS::Region</code> to create a Region-specific name, as in the following example: <code>&#123;\"Fn::Join\": [\"\", [&#123;\"Ref\": \"AWS::Region\"&#125;, &#123;\"Ref\": \"MyResourceName\"&#125;]]&#125;</code>.</details>"
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
    "description": "<details><summary>Creates a password for the specified IAM user. A password allows an IAM user to access AWS services through the console.</summary>You can use the CLI, the AWS API, or the <i>Users</i> page in the IAM console to create a password for any IAM user. Use <a href=\"https://docs.aws.amazon.com/IAM/latest/APIReference/API_ChangePassword.html\">ChangePassword</a> to update your own existing password in the <i>My Security Credentials</i> page in the console.<br />For more information about managing passwords, see <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html\">Managing passwords</a> in the <i>User Guide</i>.</details>",
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
    "description": "<details><summary>A list of tags that you want to attach to the new user. Each tag consists of a key name and an associated value. For more information about tagging, see <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html\">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</summary>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.</details>",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "permissions_boundary",
    "type": "string",
    "description": "<details><summary>The ARN of the managed policy that is used to set the permissions boundary for the user.</summary>A permissions boundary policy defines the maximum permissions that identity-based policies can grant to an entity, but does not grant permissions. Permissions boundaries do not define the maximum permissions that a resource-based policy can grant to an entity. To learn more, see <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html\">Permissions boundaries for IAM entities</a> in the <i>IAM User Guide</i>.<br />For more information about policy types, see <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policy-types\">Policy types</a> in the <i>IAM User Guide</i>.</details>"
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
    "description": "<details><summary>The name of the user to create. Do not include the path in this value.</summary>This parameter allows (per its <a href=\"https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex\">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-. The user name must be unique within the account. User names are not distinguished by case. For example, you cannot create users named both \"John\" and \"john\".<br />If you don't specify a name, CFN generates a unique physical ID and uses that ID for the user name.<br />If you specify a name, you must specify the <code>CAPABILITY_NAMED_IAM</code> value to acknowledge your template's capabilities. For more information, see <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-capabilities\">Acknowledging Resources in Templates</a>.<br />Naming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple Regions. To prevent this, we recommend using <code>Fn::Join</code> and <code>AWS::Region</code> to create a Region-specific name, as in the following example: <code>&#123;\"Fn::Join\": [\"\", [&#123;\"Ref\": \"AWS::Region\"&#125;, &#123;\"Ref\": \"MyResourceName\"&#125;]]&#125;</code>.</details>"
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
WHERE
  region = 'us-east-1' AND
  Identifier = '{{ user_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>users</code> in a region.
```sql
SELECT
  region,
  user_name
FROM awscc.iam.users_list_only
WHERE
  region = 'us-east-1';
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
  '{{ path }}',
  '{{ managed_policy_arns }}',
  '{{ policies }}',
  '{{ user_name }}',
  '{{ groups }}',
  '{{ login_profile }}',
  '{{ tags }}',
  '{{ permissions_boundary }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
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
  '{{ path }}',
  '{{ managed_policy_arns }}',
  '{{ policies }}',
  '{{ user_name }}',
  '{{ groups }}',
  '{{ login_profile }}',
  '{{ tags }}',
  '{{ permissions_boundary }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`version: 1
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
      - name: path
        value: '{{ path }}'
      - name: managed_policy_arns
        value:
          - '{{ managed_policy_arns[0] }}'
      - name: policies
        value:
          - policy_document: {}
            policy_name: '{{ policy_name }}'
      - name: user_name
        value: '{{ user_name }}'
      - name: groups
        value:
          - '{{ groups[0] }}'
      - name: login_profile
        value:
          password_reset_required: '{{ password_reset_required }}'
          password: '{{ password }}'
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
      - name: permissions_boundary
        value: '{{ permissions_boundary }}'`}</CodeBlock>

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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ user_name }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iam.users
WHERE
  Identifier = '{{ user_name }}' AND
  region = 'us-east-1'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

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