---
title: user_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - user_policies
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

Creates, updates, deletes or gets an <code>user_policy</code> resource or lists <code>user_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>user_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td><details><summary>Adds or updates an inline policy document that is embedded in the specified IAM user.</summary>An IAM user can also have a managed policy attached to it. To attach a managed policy to a user, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html">AWS::IAM::User</a>. To create a new managed policy, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-managedpolicy.html">AWS::IAM::ManagedPolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.<br />For information about the maximum number of inline policies that you can embed in a user, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and quotas</a> in the <i>IAM User Guide</i>.</details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iam.user_policies" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "policy_document",
    "type": "object",
    "description": "<details><summary>The policy document.</summary>You must provide policies in JSON format in IAM. However, for CFN templates formatted in YAML, you can provide the policy in JSON or YAML format. CFN always converts a YAML policy to JSON format before submitting it to IAM.<br />The <a href=\"https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex\">regex pattern</a> used to validate this parameter is a string of characters consisting of the following:<br />+  Any printable ASCII character ranging from the space character (<code>\\u0020</code>) through the end of the ASCII character range<br />+  The printable characters in the Basic Latin and Latin-1 Supplement character set (through <code>\\u00FF</code>)<br />+  The special characters tab (<code>\\u0009</code>), line feed (<code>\\u000A</code>), and carriage return (<code>\\u000D</code>)</details>"
  },
  {
    "name": "policy_name",
    "type": "string",
    "description": "<details><summary>The name of the policy document.</summary>This parameter allows (through its <a href=\"https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex\">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</details>"
  },
  {
    "name": "user_name",
    "type": "string",
    "description": "<details><summary>The name of the user to associate the policy with.</summary>This parameter allows (through its <a href=\"https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex\">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</details>"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-userpolicy.html"><code>AWS::IAM::UserPolicy</code></a>.

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
    <td><CopyableCode code="PolicyName, UserName, region" /></td>
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

Gets all properties from an individual <code>user_policy</code>.
```sql
SELECT
  region,
  policy_document,
  policy_name,
  user_name
FROM awscc.iam.user_policies
WHERE
  region = 'us-east-1' AND
  Identifier = '{{ policy_name }}|{{ user_name }}';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>user_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iam.user_policies (
  PolicyName,
  UserName,
  region
)
SELECT
  '{{ policy_name }}',
  '{{ user_name }}',
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
INSERT INTO awscc.iam.user_policies (
  PolicyDocument,
  PolicyName,
  UserName,
  region
)
SELECT
  '{{ policy_document }}',
  '{{ policy_name }}',
  '{{ user_name }}',
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
  - name: user_policy
    props:
      - name: policy_document
        value: {}
      - name: policy_name
        value: '{{ policy_name }}'
      - name: user_name
        value: '{{ user_name }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>user_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iam.user_policies
SET PatchDocument = string('{{ {
    "PolicyDocument": policy_document
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ policy_name }}|{{ user_name }}'
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
DELETE FROM awscc.iam.user_policies
WHERE
  Identifier = '{{ policy_name }}|{{ user_name }}' AND
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

To operate on the <code>user_policies</code> resource, the following permissions are required:

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
iam:PutUserPolicy,
iam:GetUserPolicy
```

</TabItem>
<TabItem value="read">

```json
iam:GetUserPolicy
```

</TabItem>
<TabItem value="update">

```json
iam:PutUserPolicy,
iam:GetUserPolicy
```

</TabItem>
<TabItem value="delete">

```json
iam:DeleteUserPolicy,
iam:GetUserPolicy
```

</TabItem>
</Tabs>