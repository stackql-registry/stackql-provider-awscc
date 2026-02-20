---
title: roles
hide_title: false
hide_table_of_contents: false
keywords:
  - roles
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

Creates, updates, deletes or gets a <code>role</code> resource or lists <code>roles</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>roles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Creates a new role for your AWS-account.<br />For more information about roles, see &#91;IAM roles&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/id&#95;roles.html) in the &#42;IAM User Guide&#42;. For information about quotas for role names and the number of roles you can create, see &#91;IAM and quotas&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/reference&#95;iam-quotas.html) in the &#42;IAM User Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iam.roles" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "assume_role_policy_document",
    "type": "object",
    "description": "The trust policy that is associated with this role. Trust policies define which entities can assume the role. You can associate only one trust policy with a role. For an example of a policy that can be used to assume a role, see &#91;Template Examples&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html#aws-resource-iam-role--examples). For more information about the elements that you can use in an IAM policy, see &#91;Policy Elements Reference&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/reference&#95;policies&#95;elements.html) in the &#42;User Guide&#42;."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description of the role that you provide."
  },
  {
    "name": "managed_policy_arns",
    "type": "array",
    "description": "A list of Amazon Resource Names (ARNs) of the IAM managed policies that you want to attach to the role.<br />For more information about ARNs, see &#91;Amazon Resource Names (ARNs) and Service Namespaces&#93;(https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the &#42;General Reference&#42;."
  },
  {
    "name": "max_session_duration",
    "type": "integer",
    "description": "The maximum session duration (in seconds) that you want to set for the specified role. If you do not specify a value for this setting, the default value of one hour is applied. This setting can have a value from 1 hour to 12 hours.<br />Anyone who assumes the role from the CLI or API can use the &#96;&#96;DurationSeconds&#96;&#96; API parameter or the &#96;&#96;duration-seconds&#96;&#96;CLI parameter to request a longer session. The &#96;&#96;MaxSessionDuration&#96;&#96; setting determines the maximum duration that can be requested using the &#96;&#96;DurationSeconds&#96;&#96; parameter. If users don't specify a value for the &#96;&#96;DurationSeconds&#96;&#96; parameter, their security credentials are valid for one hour by default. This applies when you use the &#96;&#96;AssumeRole&#42;&#96;&#96; API operations or the &#96;&#96;assume-role&#42;&#96;&#96;CLI operations but does not apply when you use those operations to create a console URL. For more information, see &#91;Using IAM roles&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/id&#95;roles&#95;use.html) in the &#42;IAM User Guide&#42;."
  },
  {
    "name": "path",
    "type": "string",
    "description": "The path to the role. For more information about paths, see &#91;IAM Identifiers&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/Using&#95;Identifiers.html) in the &#42;IAM User Guide&#42;.<br />This parameter is optional. If it is not included, it defaults to a slash (/).<br />This parameter allows (through its &#91;regex pattern&#93;(https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (&#96;&#96;\\u0021&#96;&#96;) through the DEL character (&#96;&#96;\\u007F&#96;&#96;), including most punctuation characters, digits, and upper and lowercased letters."
  },
  {
    "name": "permissions_boundary",
    "type": "string",
    "description": "The ARN of the policy used to set the permissions boundary for the role.<br />For more information about permissions boundaries, see &#91;Permissions boundaries for IAM identities&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/access&#95;policies&#95;boundaries.html) in the &#42;IAM User Guide&#42;."
  },
  {
    "name": "policies",
    "type": "array",
    "description": "Adds or updates an inline policy document that is embedded in the specified IAM role.<br />When you embed an inline policy in a role, the inline policy is used as part of the role's access (permissions) policy. The role's trust policy is created at the same time as the role. You can update a role's trust policy later. For more information about IAM roles, go to &#91;Using Roles to Delegate Permissions and Federate Identities&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html).<br />A role can also have an attached managed policy. For information about policies, see &#91;Managed Policies and Inline Policies&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html) in the &#42;User Guide&#42;.<br />For information about limits on the number of inline policies that you can embed with a role, see &#91;Limitations on Entities&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html) in the &#42;User Guide&#42;.<br />If an external policy (such as &#96;&#96;AWS::IAM::Policy&#96;&#96; or &#96;&#96;AWS::IAM::ManagedPolicy&#96;&#96;) has a &#96;&#96;Ref&#96;&#96; to a role and if a resource (such as &#96;&#96;AWS::ECS::Service&#96;&#96;) also has a &#96;&#96;Ref&#96;&#96; to the same role, add a &#96;&#96;DependsOn&#96;&#96; attribute to the resource to make the resource depend on the external policy. This dependency ensures that the role's policy is available throughout the resource's lifecycle. For example, when you delete a stack with an &#96;&#96;AWS::ECS::Service&#96;&#96; resource, the &#96;&#96;DependsOn&#96;&#96; attribute ensures that CFN deletes the &#96;&#96;AWS::ECS::Service&#96;&#96; resource before deleting its role's policy.",
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
    "name": "role_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "role_name",
    "type": "string",
    "description": "A name for the IAM role, up to 64 characters in length. For valid values, see the &#96;&#96;RoleName&#96;&#96; parameter for the &#91;CreateRole&#93;(https://docs.aws.amazon.com/IAM/latest/APIReference/API&#95;CreateRole.html) action in the &#42;User Guide&#42;.<br />This parameter allows (per its &#91;regex pattern&#93;(https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: &#95;+=,.@-. The role name must be unique within the account. Role names are not distinguished by case. For example, you cannot create roles named both \"Role1\" and \"role1\".<br />If you don't specify a name, CFN generates a unique physical ID and uses that ID for the role name.<br />If you specify a name, you must specify the &#96;&#96;CAPABILITY&#95;NAMED&#95;IAM&#96;&#96; value to acknowledge your template's capabilities. For more information, see &#91;Acknowledging Resources in Templates&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-capabilities).<br />Naming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple Regions. To prevent this, we recommend using &#96;&#96;Fn::Join&#96;&#96; and &#96;&#96;AWS::Region&#96;&#96; to create a Region-specific name, as in the following example: &#96;&#96;&#123;\"Fn::Join\": &#91;\"\", &#91;&#123;\"Ref\": \"AWS::Region\"&#125;, &#123;\"Ref\": \"MyResourceName\"&#125;&#93;&#93;&#125;&#96;&#96;."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of tags that are attached to the role. For more information about tagging, see &#91;Tagging IAM resources&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/id&#95;tags.html) in the &#42;IAM User Guide&#42;.",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "role_name",
    "type": "string",
    "description": "A name for the IAM role, up to 64 characters in length. For valid values, see the &#96;&#96;RoleName&#96;&#96; parameter for the &#91;CreateRole&#93;(https://docs.aws.amazon.com/IAM/latest/APIReference/API&#95;CreateRole.html) action in the &#42;User Guide&#42;.<br />This parameter allows (per its &#91;regex pattern&#93;(https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: &#95;+=,.@-. The role name must be unique within the account. Role names are not distinguished by case. For example, you cannot create roles named both \"Role1\" and \"role1\".<br />If you don't specify a name, CFN generates a unique physical ID and uses that ID for the role name.<br />If you specify a name, you must specify the &#96;&#96;CAPABILITY&#95;NAMED&#95;IAM&#96;&#96; value to acknowledge your template's capabilities. For more information, see &#91;Acknowledging Resources in Templates&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-capabilities).<br />Naming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple Regions. To prevent this, we recommend using &#96;&#96;Fn::Join&#96;&#96; and &#96;&#96;AWS::Region&#96;&#96; to create a Region-specific name, as in the following example: &#96;&#96;&#123;\"Fn::Join\": &#91;\"\", &#91;&#123;\"Ref\": \"AWS::Region\"&#125;, &#123;\"Ref\": \"MyResourceName\"&#125;&#93;&#93;&#125;&#96;&#96;."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html"><code>AWS::IAM::Role</code></a>.

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
    <td><code>roles</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AssumeRolePolicyDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>roles</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>roles</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>roles_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>roles</code></td>
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

Gets all properties from an individual <code>role</code>.
```sql
SELECT
region,
arn,
assume_role_policy_document,
description,
managed_policy_arns,
max_session_duration,
path,
permissions_boundary,
policies,
role_id,
role_name,
tags
FROM awscc.iam.roles
WHERE Identifier = '<RoleName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>roles</code> in a region.
```sql
SELECT
region,
role_name
FROM awscc.iam.roles_list_only
;
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>role</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iam.roles (
 AssumeRolePolicyDocument,
 region
)
SELECT 
'{{ AssumeRolePolicyDocument }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iam.roles (
 AssumeRolePolicyDocument,
 Description,
 ManagedPolicyArns,
 MaxSessionDuration,
 Path,
 PermissionsBoundary,
 Policies,
 RoleName,
 Tags,
 region
)
SELECT 
 '{{ AssumeRolePolicyDocument }}',
 '{{ Description }}',
 '{{ ManagedPolicyArns }}',
 '{{ MaxSessionDuration }}',
 '{{ Path }}',
 '{{ PermissionsBoundary }}',
 '{{ Policies }}',
 '{{ RoleName }}',
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
  - name: role
    props:
      - name: AssumeRolePolicyDocument
        value: {}
      - name: Description
        value: '{{ Description }}'
      - name: ManagedPolicyArns
        value:
          - '{{ ManagedPolicyArns[0] }}'
      - name: MaxSessionDuration
        value: '{{ MaxSessionDuration }}'
      - name: Path
        value: '{{ Path }}'
      - name: PermissionsBoundary
        value: '{{ PermissionsBoundary }}'
      - name: Policies
        value:
          - PolicyDocument: {}
            PolicyName: '{{ PolicyName }}'
      - name: RoleName
        value: '{{ RoleName }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>role</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iam.roles
SET PatchDocument = string('{{ {
    "AssumeRolePolicyDocument": assume_role_policy_document,
    "Description": description,
    "ManagedPolicyArns": managed_policy_arns,
    "MaxSessionDuration": max_session_duration,
    "PermissionsBoundary": permissions_boundary,
    "Policies": policies,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<RoleName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iam.roles
WHERE Identifier = '<RoleName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>roles</code> resource, the following permissions are required:

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
iam:CreateRole,
iam:PutRolePolicy,
iam:AttachRolePolicy,
iam:GetRolePolicy,
iam:TagRole,
iam:UntagRole,
iam:GetRole
```

</TabItem>
<TabItem value="read">

```json
iam:GetRole,
iam:ListAttachedRolePolicies,
iam:ListRolePolicies,
iam:GetRolePolicy
```

</TabItem>
<TabItem value="update">

```json
iam:UpdateRole,
iam:UpdateRoleDescription,
iam:UpdateAssumeRolePolicy,
iam:DetachRolePolicy,
iam:AttachRolePolicy,
iam:DeleteRolePermissionsBoundary,
iam:PutRolePermissionsBoundary,
iam:DeleteRolePolicy,
iam:PutRolePolicy,
iam:TagRole,
iam:UntagRole
```

</TabItem>
<TabItem value="delete">

```json
iam:DeleteRole,
iam:DetachRolePolicy,
iam:DeleteRolePolicy,
iam:GetRole,
iam:ListAttachedRolePolicies,
iam:ListRolePolicies,
iam:TagRole,
iam:UntagRole
```

</TabItem>
<TabItem value="list">

```json
iam:ListRoles
```

</TabItem>
</Tabs>