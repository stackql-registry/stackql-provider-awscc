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
<tr><td><b>Description</b></td><td><details><summary>Creates a new role for your AWS-account.</summary>For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM roles</a> in the <i>IAM User Guide</i>. For information about quotas for role names and the number of roles you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and quotas</a> in the <i>IAM User Guide</i>.</details></td></tr>
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
    "description": "The trust policy that is associated with this role. Trust policies define which entities can assume the role. You can associate only one trust policy with a role. For an example of a policy that can be used to assume a role, see <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html#aws-resource-iam-role--examples\">Template Examples</a>. For more information about the elements that you can use in an IAM policy, see <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html\">Policy Elements Reference</a> in the <i>User Guide</i>."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description of the role that you provide."
  },
  {
    "name": "managed_policy_arns",
    "type": "array",
    "description": "<details><summary>A list of Amazon Resource Names (ARNs) of the IAM managed policies that you want to attach to the role.</summary>For more information about ARNs, see <a href=\"https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html\">Amazon Resource Names (ARNs) and Service Namespaces</a> in the <i>General Reference</i>.</details>"
  },
  {
    "name": "max_session_duration",
    "type": "integer",
    "description": "<details><summary>The maximum session duration (in seconds) that you want to set for the specified role. If you do not specify a value for this setting, the default value of one hour is applied. This setting can have a value from 1 hour to 12 hours.</summary>Anyone who assumes the role from the CLI or API can use the <code>DurationSeconds</code> API parameter or the <code>duration-seconds</code>CLI parameter to request a longer session. The <code>MaxSessionDuration</code> setting determines the maximum duration that can be requested using the <code>DurationSeconds</code> parameter. If users don't specify a value for the <code>DurationSeconds</code> parameter, their security credentials are valid for one hour by default. This applies when you use the <code>AssumeRole<i></code> API operations or the <code>assume-role</i></code>CLI operations but does not apply when you use those operations to create a console URL. For more information, see <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html\">Using IAM roles</a> in the <i>IAM User Guide</i>.</details>"
  },
  {
    "name": "path",
    "type": "string",
    "description": "<details><summary>The path to the role. For more information about paths, see <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html\">IAM Identifiers</a> in the <i>IAM User Guide</i>.</summary>This parameter is optional. If it is not included, it defaults to a slash (/).<br />This parameter allows (through its <a href=\"https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex\">regex pattern</a>) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (<code>\\u0021</code>) through the DEL character (<code>\\u007F</code>), including most punctuation characters, digits, and upper and lowercased letters.</details>"
  },
  {
    "name": "permissions_boundary",
    "type": "string",
    "description": "<details><summary>The ARN of the policy used to set the permissions boundary for the role.</summary>For more information about permissions boundaries, see <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html\">Permissions boundaries for IAM identities</a> in the <i>IAM User Guide</i>.</details>"
  },
  {
    "name": "policies",
    "type": "array",
    "description": "<details><summary>Adds or updates an inline policy document that is embedded in the specified IAM role.</summary>When you embed an inline policy in a role, the inline policy is used as part of the role's access (permissions) policy. The role's trust policy is created at the same time as the role. You can update a role's trust policy later. For more information about IAM roles, go to <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html\">Using Roles to Delegate Permissions and Federate Identities</a>.<br />A role can also have an attached managed policy. For information about policies, see <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html\">Managed Policies and Inline Policies</a> in the <i>User Guide</i>.<br />For information about limits on the number of inline policies that you can embed with a role, see <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html\">Limitations on Entities</a> in the <i>User Guide</i>.<br />If an external policy (such as <code>AWS::IAM::Policy</code> or <code>AWS::IAM::ManagedPolicy</code>) has a <code>Ref</code> to a role and if a resource (such as <code>AWS::ECS::Service</code>) also has a <code>Ref</code> to the same role, add a <code>DependsOn</code> attribute to the resource to make the resource depend on the external policy. This dependency ensures that the role's policy is available throughout the resource's lifecycle. For example, when you delete a stack with an <code>AWS::ECS::Service</code> resource, the <code>DependsOn</code> attribute ensures that CFN deletes the <code>AWS::ECS::Service</code> resource before deleting its role's policy.</details>",
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
    "name": "role_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "role_name",
    "type": "string",
    "description": "<details><summary>A name for the IAM role, up to 64 characters in length. For valid values, see the <code>RoleName</code> parameter for the <a href=\"https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html\">CreateRole</a> action in the <i>User Guide</i>.</summary>This parameter allows (per its <a href=\"https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex\">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-. The role name must be unique within the account. Role names are not distinguished by case. For example, you cannot create roles named both \"Role1\" and \"role1\".<br />If you don't specify a name, CFN generates a unique physical ID and uses that ID for the role name.<br />If you specify a name, you must specify the <code>CAPABILITY_NAMED_IAM</code> value to acknowledge your template's capabilities. For more information, see <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-capabilities\">Acknowledging Resources in Templates</a>.<br />Naming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple Regions. To prevent this, we recommend using <code>Fn::Join</code> and <code>AWS::Region</code> to create a Region-specific name, as in the following example: <code>&#123;\"Fn::Join\": [\"\", [&#123;\"Ref\": \"AWS::Region\"&#125;, &#123;\"Ref\": \"MyResourceName\"&#125;]]&#125;</code>.</details>"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of tags that are attached to the role. For more information about tagging, see <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html\">Tagging IAM resources</a> in the <i>IAM User Guide</i>.",
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
    "description": "<details><summary>A name for the IAM role, up to 64 characters in length. For valid values, see the <code>RoleName</code> parameter for the <a href=\"https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html\">CreateRole</a> action in the <i>User Guide</i>.</summary>This parameter allows (per its <a href=\"https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex\">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-. The role name must be unique within the account. Role names are not distinguished by case. For example, you cannot create roles named both \"Role1\" and \"role1\".<br />If you don't specify a name, CFN generates a unique physical ID and uses that ID for the role name.<br />If you specify a name, you must specify the <code>CAPABILITY_NAMED_IAM</code> value to acknowledge your template's capabilities. For more information, see <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-capabilities\">Acknowledging Resources in Templates</a>.<br />Naming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple Regions. To prevent this, we recommend using <code>Fn::Join</code> and <code>AWS::Region</code> to create a Region-specific name, as in the following example: <code>&#123;\"Fn::Join\": [\"\", [&#123;\"Ref\": \"AWS::Region\"&#125;, &#123;\"Ref\": \"MyResourceName\"&#125;]]&#125;</code>.</details>"
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
WHERE
  region = 'us-east-1' AND
  Identifier = '{{ role_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>roles</code> in a region.
```sql
SELECT
  region,
  role_name
FROM awscc.iam.roles_list_only
WHERE
  region = 'us-east-1';
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
  '{{ assume_role_policy_document }}',
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
  '{{ assume_role_policy_document }}',
  '{{ description }}',
  '{{ managed_policy_arns }}',
  '{{ max_session_duration }}',
  '{{ path }}',
  '{{ permissions_boundary }}',
  '{{ policies }}',
  '{{ role_name }}',
  '{{ tags }}',
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
      - name: assume_role_policy_document
        value: {}
      - name: description
        value: '{{ description }}'
      - name: managed_policy_arns
        value:
          - '{{ managed_policy_arns[0] }}'
      - name: max_session_duration
        value: '{{ max_session_duration }}'
      - name: path
        value: '{{ path }}'
      - name: permissions_boundary
        value: '{{ permissions_boundary }}'
      - name: policies
        value:
          - policy_document: {}
            policy_name: '{{ policy_name }}'
      - name: role_name
        value: '{{ role_name }}'
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ role_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iam.roles
WHERE
  Identifier = '{{ role_name }}' AND
  region = 'us-east-1';
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