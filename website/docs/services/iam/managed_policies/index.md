---
title: managed_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_policies
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

Creates, updates, deletes or gets a <code>managed_policy</code> resource or lists <code>managed_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>managed_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Creates a new managed policy for your AWS-account.<br />This operation creates a policy version with a version identifier of &#96;&#96;v1&#96;&#96; and sets v1 as the policy's default version. For more information about policy versions, see &#91;Versioning for managed policies&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html) in the &#42;IAM User Guide&#42;.<br />As a best practice, you can validate your IAM policies. To learn more, see &#91;Validating IAM policies&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/access&#95;policies&#95;policy-validator.html) in the &#42;IAM User Guide&#42;.<br />For more information about managed policies in general, see &#91;Managed policies and inline policies&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html) in the &#42;IAM User Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iam.managed_policies" /></td></tr>
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
    "name": "description",
    "type": "string",
    "description": "A friendly description of the policy.<br />Typically used to store information about the permissions defined in the policy. For example, \"Grants access to production DynamoDB tables.\"<br />The policy description is immutable. After a value is assigned, it cannot be changed."
  },
  {
    "name": "groups",
    "type": "array",
    "description": "The name (friendly name, not ARN) of the group to attach the policy to.<br />This parameter allows (through its &#91;regex pattern&#93;(https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: &#95;+=,.@-"
  },
  {
    "name": "managed_policy_name",
    "type": "string",
    "description": "The friendly name of the policy.<br />If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.<br />If you specify a name, you must specify the &#96;&#96;CAPABILITY&#95;NAMED&#95;IAM&#96;&#96; value to acknowledge your template's capabilities. For more information, see &#91;Acknowledging Resources in Templates&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-capabilities).<br />Naming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple Regions. To prevent this, we recommend using &#96;&#96;Fn::Join&#96;&#96; and &#96;&#96;AWS::Region&#96;&#96; to create a Region-specific name, as in the following example: &#96;&#96;&#123;\"Fn::Join\": &#91;\"\", &#91;&#123;\"Ref\": \"AWS::Region\"&#125;, &#123;\"Ref\": \"MyResourceName\"&#125;&#93;&#93;&#125;&#96;&#96;."
  },
  {
    "name": "path",
    "type": "string",
    "description": "The path for the policy.<br />For more information about paths, see &#91;IAM identifiers&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/Using&#95;Identifiers.html) in the &#42;IAM User Guide&#42;.<br />This parameter is optional. If it is not included, it defaults to a slash (/).<br />This parameter allows (through its &#91;regex pattern&#93;(https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (&#96;&#96;\\u0021&#96;&#96;) through the DEL character (&#96;&#96;\\u007F&#96;&#96;), including most punctuation characters, digits, and upper and lowercased letters.<br />You cannot use an asterisk (&#42;) in the path name."
  },
  {
    "name": "policy_document",
    "type": "object",
    "description": "The JSON policy document that you want to use as the content for the new policy.<br />You must provide policies in JSON format in IAM. However, for CFN templates formatted in YAML, you can provide the policy in JSON or YAML format. CFN always converts a YAML policy to JSON format before submitting it to IAM.<br />The maximum length of the policy document that you can pass in this operation, including whitespace, is listed below. To view the maximum character counts of a managed policy with no whitespaces, see &#91;IAM and character quotas&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/reference&#95;iam-quotas.html#reference&#95;iam-quotas-entity-length).<br />To learn more about JSON policy grammar, see &#91;Grammar of the IAM JSON policy language&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/reference&#95;policies&#95;grammar.html) in the &#42;IAM User Guide&#42;. <br />The &#91;regex pattern&#93;(https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:<br />+ Any printable ASCII character ranging from the space character (&#96;&#96;\\u0020&#96;&#96;) through the end of the ASCII character range<br />+ The printable characters in the Basic Latin and Latin-1 Supplement character set (through &#96;&#96;\\u00FF&#96;&#96;)<br />+ The special characters tab (&#96;&#96;\\u0009&#96;&#96;), line feed (&#96;&#96;\\u000A&#96;&#96;), and carriage return (&#96;&#96;\\u000D&#96;&#96;)"
  },
  {
    "name": "roles",
    "type": "array",
    "description": "The name (friendly name, not ARN) of the role to attach the policy to.<br />This parameter allows (per its &#91;regex pattern&#93;(https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: &#95;+=,.@-<br />If an external policy (such as &#96;&#96;AWS::IAM::Policy&#96;&#96; or &#96;&#96;AWS::IAM::ManagedPolicy&#96;&#96;) has a &#96;&#96;Ref&#96;&#96; to a role and if a resource (such as &#96;&#96;AWS::ECS::Service&#96;&#96;) also has a &#96;&#96;Ref&#96;&#96; to the same role, add a &#96;&#96;DependsOn&#96;&#96; attribute to the resource to make the resource depend on the external policy. This dependency ensures that the role's policy is available throughout the resource's lifecycle. For example, when you delete a stack with an &#96;&#96;AWS::ECS::Service&#96;&#96; resource, the &#96;&#96;DependsOn&#96;&#96; attribute ensures that CFN deletes the &#96;&#96;AWS::ECS::Service&#96;&#96; resource before deleting its role's policy."
  },
  {
    "name": "users",
    "type": "array",
    "description": "The name (friendly name, not ARN) of the IAM user to attach the policy to.<br />This parameter allows (through its &#91;regex pattern&#93;(https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: &#95;+=,.@-"
  },
  {
    "name": "policy_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "attachment_count",
    "type": "integer",
    "description": ""
  },
  {
    "name": "create_date",
    "type": "string",
    "description": ""
  },
  {
    "name": "update_date",
    "type": "string",
    "description": ""
  },
  {
    "name": "default_version_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "is_attachable",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "permissions_boundary_usage_count",
    "type": "integer",
    "description": ""
  },
  {
    "name": "policy_id",
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "policy_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-managedpolicy.html"><code>AWS::IAM::ManagedPolicy</code></a>.

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
    <td><code>managed_policies</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="PolicyDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>managed_policies</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>managed_policies</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>managed_policies_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>managed_policies</code></td>
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

Gets all properties from an individual <code>managed_policy</code>.
```sql
SELECT
region,
description,
groups,
managed_policy_name,
path,
policy_document,
roles,
users,
policy_arn,
attachment_count,
create_date,
update_date,
default_version_id,
is_attachable,
permissions_boundary_usage_count,
policy_id
FROM awscc.iam.managed_policies
WHERE region = 'us-east-1' AND Identifier = '{{ policy_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>managed_policies</code> in a region.
```sql
SELECT
region,
policy_arn
FROM awscc.iam.managed_policies_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>managed_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iam.managed_policies (
 PolicyDocument,
 region
)
SELECT
'{{ policy_document }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iam.managed_policies (
 Description,
 Groups,
 ManagedPolicyName,
 Path,
 PolicyDocument,
 Roles,
 Users,
 region
)
SELECT
 '{{ description }}',
 '{{ groups }}',
 '{{ managed_policy_name }}',
 '{{ path }}',
 '{{ policy_document }}',
 '{{ roles }}',
 '{{ users }}',
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
  - name: managed_policy
    props:
      - name: description
        value: '{{ description }}'
      - name: groups
        value:
          - '{{ groups[0] }}'
      - name: managed_policy_name
        value: '{{ managed_policy_name }}'
      - name: path
        value: '{{ path }}'
      - name: policy_document
        value: {}
      - name: roles
        value:
          - '{{ roles[0] }}'
      - name: users
        value:
          - '{{ users[0] }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>managed_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iam.managed_policies
SET PatchDocument = string('{{ {
    "Groups": groups,
    "PolicyDocument": policy_document,
    "Roles": roles,
    "Users": users
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ policy_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iam.managed_policies
WHERE Identifier = '{{ policy_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>managed_policies</code> resource, the following permissions are required:

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
iam:CreatePolicy,
iam:AttachGroupPolicy,
iam:AttachUserPolicy,
iam:AttachRolePolicy
```

</TabItem>
<TabItem value="read">

```json
iam:GetPolicy,
iam:ListEntitiesForPolicy,
iam:GetPolicyVersion
```

</TabItem>
<TabItem value="update">

```json
iam:DetachRolePolicy,
iam:GetPolicy,
iam:ListPolicyVersions,
iam:DetachGroupPolicy,
iam:DetachUserPolicy,
iam:CreatePolicyVersion,
iam:DeletePolicyVersion,
iam:AttachGroupPolicy,
iam:AttachUserPolicy,
iam:AttachRolePolicy
```

</TabItem>
<TabItem value="delete">

```json
iam:DetachRolePolicy,
iam:GetPolicy,
iam:ListPolicyVersions,
iam:DetachGroupPolicy,
iam:DetachUserPolicy,
iam:DeletePolicyVersion,
iam:DeletePolicy,
iam:ListEntitiesForPolicy
```

</TabItem>
<TabItem value="list">

```json
iam:ListPolicies
```

</TabItem>
</Tabs>