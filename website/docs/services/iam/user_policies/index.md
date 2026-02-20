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
<tr><td><b>Description</b></td><td>Adds or updates an inline policy document that is embedded in the specified IAM user.<br />An IAM user can also have a managed policy attached to it. To attach a managed policy to a user, use &#91;AWS::IAM::User&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html). To create a new managed policy, use &#91;AWS::IAM::ManagedPolicy&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-managedpolicy.html). For information about policies, see &#91;Managed policies and inline policies&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html) in the &#42;IAM User Guide&#42;.<br />For information about the maximum number of inline policies that you can embed in a user, see &#91;IAM and quotas&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/reference&#95;iam-quotas.html) in the &#42;IAM User Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iam.user_policies" /></td></tr>
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
    "name": "user_name",
    "type": "string",
    "description": "The name of the user to associate the policy with.<br />This parameter allows (through its &#91;regex pattern&#93;(https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: &#95;+=,.@-"
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
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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
WHERE data__Identifier = '<PolicyName>|<UserName>';
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
'{{ PolicyName }}',
 '{{ UserName }}',
'{{ region }}';
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
 '{{ PolicyDocument }}',
 '{{ PolicyName }}',
 '{{ UserName }}',
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
  - name: user_policy
    props:
      - name: PolicyDocument
        value: {}
      - name: PolicyName
        value: '{{ PolicyName }}'
      - name: UserName
        value: '{{ UserName }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.iam.user_policies
SET data__PatchDocument = string('{{ {
    "PolicyDocument": policy_document
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<PolicyName>|<UserName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iam.user_policies
WHERE data__Identifier = '<PolicyName|UserName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>user_policies</code> resource, the following permissions are required:

### Create
```json
iam:PutUserPolicy,
iam:GetUserPolicy
```

### Read
```json
iam:GetUserPolicy
```

### Update
```json
iam:PutUserPolicy,
iam:GetUserPolicy
```

### Delete
```json
iam:DeleteUserPolicy,
iam:GetUserPolicy
```
