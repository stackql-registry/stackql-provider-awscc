---
title: role_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - role_policies
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

Creates, updates, deletes or gets a <code>role_policy</code> resource or lists <code>role_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>role_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Adds or updates an inline policy document that is embedded in the specified IAM role.<br />When you embed an inline policy in a role, the inline policy is used as part of the role's access (permissions) policy. The role's trust policy is created at the same time as the role, using &#91;CreateRole&#93;(https://docs.aws.amazon.com/IAM/latest/APIReference/API&#95;CreateRole.html). You can update a role's trust policy using &#91;UpdateAssumeRolePolicy&#93;(https://docs.aws.amazon.com/IAM/latest/APIReference/API&#95;UpdateAssumeRolePolicy.html). For information about roles, see &#91;roles&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html) in the &#42;IAM User Guide&#42;.<br />A role can also have a managed policy attached to it. To attach a managed policy to a role, use &#91;AWS::IAM::Role&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html). To create a new managed policy, use &#91;AWS::IAM::ManagedPolicy&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-managedpolicy.html). For information about policies, see &#91;Managed policies and inline policies&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html) in the &#42;IAM User Guide&#42;.<br />For information about the maximum number of inline policies that you can embed with a role, see &#91;IAM and quotas&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/reference&#95;iam-quotas.html) in the &#42;IAM User Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iam.role_policies" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "policy_document",
    "type": "object",
    "description": "The policy document.<br />You must provide policies in JSON format in IAM. However, for CFN templates formatted in YAML, you can provide the policy in JSON or YAML format. CFN always converts a YAML policy to JSON format before submitting it to IAM.<br />The &#91;regex pattern&#93;(https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:<br />+ Any printable ASCII character ranging from the space character (&#96;&#96;\\u0020&#96;&#96;) through the end of the ASCII character range<br />+ The printable characters in the Basic Latin and Latin-1 Supplement character set (through &#96;&#96;\\u00FF&#96;&#96;)<br />+ The special characters tab (&#96;&#96;\\u0009&#96;&#96;), line feed (&#96;&#96;\\u000A&#96;&#96;), and carriage return (&#96;&#96;\\u000D&#96;&#96;)"
  },
  {
    "name": "policy_name",
    "type": "string",
    "description": "The name of the policy document.<br />This parameter allows (through its &#91;regex pattern&#93;(https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: &#95;+=,.@-"
  },
  {
    "name": "role_name",
    "type": "string",
    "description": "The name of the role to associate the policy with.<br />This parameter allows (through its &#91;regex pattern&#93;(https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: &#95;+=,.@-"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-rolepolicy.html"><code>AWS::IAM::RolePolicy</code></a>.

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
    <td><CopyableCode code="PolicyName, RoleName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>role_policy</code>.
```sql
SELECT
region,
policy_document,
policy_name,
role_name
FROM awscc.iam.role_policies
WHERE region = 'us-east-1' AND Identifier = '{{ policy_name }}|{{ role_name }}';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>role_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iam.role_policies (
 PolicyName,
 RoleName,
 region
)
SELECT
'{{ policy_name }}',
 '{{ role_name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iam.role_policies (
 PolicyDocument,
 PolicyName,
 RoleName,
 region
)
SELECT
 '{{ policy_document }}',
 '{{ policy_name }}',
 '{{ role_name }}',
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
  - name: role_policy
    props:
      - name: policy_document
        value: {}
      - name: policy_name
        value: '{{ policy_name }}'
      - name: role_name
        value: '{{ role_name }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>role_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iam.role_policies
SET PatchDocument = string('{{ {
    "PolicyDocument": policy_document
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ policy_name }}|{{ role_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iam.role_policies
WHERE Identifier = '{{ policy_name }}|{{ role_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>role_policies</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="create">

```json
iam:PutRolePolicy,
iam:GetRolePolicy
```

</TabItem>
<TabItem value="read">

```json
iam:GetRolePolicy
```

</TabItem>
<TabItem value="update">

```json
iam:PutRolePolicy,
iam:GetRolePolicy
```

</TabItem>
<TabItem value="delete">

```json
iam:DeleteRolePolicy,
iam:GetRolePolicy
```

</TabItem>
</Tabs>