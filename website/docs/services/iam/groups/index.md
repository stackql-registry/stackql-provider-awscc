---
title: groups
hide_title: false
hide_table_of_contents: false
keywords:
  - groups
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

Creates, updates, deletes or gets a <code>group</code> resource or lists <code>groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Creates a new group.<br />For information about the number of groups you can create, see &#91;Limitations on Entities&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html) in the &#42;User Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iam.groups" /></td></tr>
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
    "name": "group_name",
    "type": "string",
    "description": "The name of the group to create. Do not include the path in this value.<br />The group name must be unique within the account. Group names are not distinguished by case. For example, you cannot create groups named both \"ADMINS\" and \"admins\". If you don't specify a name, CFN generates a unique physical ID and uses that ID for the group name.<br />If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.<br />If you specify a name, you must specify the &#96;&#96;CAPABILITY&#95;NAMED&#95;IAM&#96;&#96; value to acknowledge your template's capabilities. For more information, see &#91;Acknowledging Resources in Templates&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-capabilities).<br />Naming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple Regions. To prevent this, we recommend using &#96;&#96;Fn::Join&#96;&#96; and &#96;&#96;AWS::Region&#96;&#96; to create a Region-specific name, as in the following example: &#96;&#96;&#123;\"Fn::Join\": &#91;\"\", &#91;&#123;\"Ref\": \"AWS::Region\"&#125;, &#123;\"Ref\": \"MyResourceName\"&#125;&#93;&#93;&#125;&#96;&#96;."
  },
  {
    "name": "managed_policy_arns",
    "type": "array",
    "description": "The Amazon Resource Name (ARN) of the IAM policy you want to attach.<br />For more information about ARNs, see &#91;Amazon Resource Names (ARNs)&#93;(https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the &#42;General Reference&#42;."
  },
  {
    "name": "path",
    "type": "string",
    "description": "The path to the group. For more information about paths, see &#91;IAM identifiers&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/Using&#95;Identifiers.html) in the &#42;IAM User Guide&#42;.<br />This parameter is optional. If it is not included, it defaults to a slash (/).<br />This parameter allows (through its &#91;regex pattern&#93;(https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (&#96;&#96;\\u0021&#96;&#96;) through the DEL character (&#96;&#96;\\u007F&#96;&#96;), including most punctuation characters, digits, and upper and lowercased letters."
  },
  {
    "name": "policies",
    "type": "array",
    "description": "Adds or updates an inline policy document that is embedded in the specified IAM group. To view AWS::IAM::Group snippets, see &#91;Declaring an Group Resource&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/quickref-iam.html#scenario-iam-group).<br />The name of each inline policy for a role, user, or group must be unique. If you don't choose unique names, updates to the IAM identity will fail. <br />For information about limits on the number of inline policies that you can embed in a group, see &#91;Limitations on Entities&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html) in the &#42;User Guide&#42;.",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "group_name",
    "type": "string",
    "description": "The name of the group to create. Do not include the path in this value.<br />The group name must be unique within the account. Group names are not distinguished by case. For example, you cannot create groups named both \"ADMINS\" and \"admins\". If you don't specify a name, CFN generates a unique physical ID and uses that ID for the group name.<br />If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.<br />If you specify a name, you must specify the &#96;&#96;CAPABILITY&#95;NAMED&#95;IAM&#96;&#96; value to acknowledge your template's capabilities. For more information, see &#91;Acknowledging Resources in Templates&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-capabilities).<br />Naming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple Regions. To prevent this, we recommend using &#96;&#96;Fn::Join&#96;&#96; and &#96;&#96;AWS::Region&#96;&#96; to create a Region-specific name, as in the following example: &#96;&#96;&#123;\"Fn::Join\": &#91;\"\", &#91;&#123;\"Ref\": \"AWS::Region\"&#125;, &#123;\"Ref\": \"MyResourceName\"&#125;&#93;&#93;&#125;&#96;&#96;."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-group.html"><code>AWS::IAM::Group</code></a>.

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
    <td><code>groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>groups</code></td>
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

Gets all properties from an individual <code>group</code>.
```sql
SELECT
region,
arn,
group_name,
managed_policy_arns,
path,
policies
FROM awscc.iam.groups
WHERE region = 'us-east-1' AND Identifier = '{{ group_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>groups</code> in a region.
```sql
SELECT
region,
group_name
FROM awscc.iam.groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iam.groups (
 GroupName,
 ManagedPolicyArns,
 Path,
 Policies,
 region
)
SELECT
'{{ group_name }}',
 '{{ managed_policy_arns }}',
 '{{ path }}',
 '{{ policies }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iam.groups (
 GroupName,
 ManagedPolicyArns,
 Path,
 Policies,
 region
)
SELECT
 '{{ group_name }}',
 '{{ managed_policy_arns }}',
 '{{ path }}',
 '{{ policies }}',
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
  - name: group
    props:
      - name: group_name
        value: '{{ group_name }}'
      - name: managed_policy_arns
        value:
          - '{{ managed_policy_arns[0] }}'
      - name: path
        value: '{{ path }}'
      - name: policies
        value:
          - policy_document: {}
            policy_name: '{{ policy_name }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iam.groups
SET PatchDocument = string('{{ {
    "ManagedPolicyArns": managed_policy_arns,
    "Path": path,
    "Policies": policies
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ group_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iam.groups
WHERE Identifier = '{{ group_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>groups</code> resource, the following permissions are required:

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
iam:CreateGroup,
iam:PutGroupPolicy,
iam:AttachGroupPolicy,
iam:GetGroupPolicy,
iam:GetGroup
```

</TabItem>
<TabItem value="read">

```json
iam:GetGroup,
iam:ListGroupPolicies,
iam:GetGroupPolicy,
iam:ListAttachedGroupPolicies
```

</TabItem>
<TabItem value="update">

```json
iam:GetGroup,
iam:UpdateGroup,
iam:DetachGroupPolicy,
iam:AttachGroupPolicy,
iam:DeleteGroupPolicy,
iam:PutGroupPolicy,
iam:GetGroupPolicy
```

</TabItem>
<TabItem value="delete">

```json
iam:GetGroup,
iam:DeleteGroup,
iam:ListAttachedGroupPolicies,
iam:ListGroupPolicies,
iam:DetachGroupPolicy,
iam:DeleteGroupPolicy,
iam:GetGroupPolicy
```

</TabItem>
<TabItem value="list">

```json
iam:ListGroups
```

</TabItem>
</Tabs>