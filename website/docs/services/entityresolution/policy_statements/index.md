---
title: policy_statements
hide_title: false
hide_table_of_contents: false
keywords:
  - policy_statements
  - entityresolution
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

Creates, updates, deletes or gets a <code>policy_statement</code> resource or lists <code>policy_statements</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>policy_statements</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Policy Statement defined in AWS Entity Resolution Service</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.entityresolution.policy_statements" /></td></tr>
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
    "description": "Arn of the resource to which the policy statement is being attached."
  },
  {
    "name": "statement_id",
    "type": "string",
    "description": "The Statement Id of the policy statement that is being attached."
  },
  {
    "name": "effect",
    "type": "string",
    "description": ""
  },
  {
    "name": "action",
    "type": "array",
    "description": ""
  },
  {
    "name": "principal",
    "type": "array",
    "description": ""
  },
  {
    "name": "condition",
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
    "name": "arn",
    "type": "string",
    "description": "Arn of the resource to which the policy statement is being attached."
  },
  {
    "name": "statement_id",
    "type": "string",
    "description": "The Statement Id of the policy statement that is being attached."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-policystatement.html"><code>AWS::EntityResolution::PolicyStatement</code></a>.

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
    <td><code>policy_statements</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Arn, StatementId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>policy_statements</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>policy_statements</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>policy_statements_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>policy_statements</code></td>
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

Gets all properties from an individual <code>policy_statement</code>.
```sql
SELECT
  region,
  arn,
  statement_id,
  effect,
  action,
  principal,
  condition
FROM awscc.entityresolution.policy_statements
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ arn }}|{{ statement_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>policy_statements</code> in a region.
```sql
SELECT
  region,
  arn,
  statement_id
FROM awscc.entityresolution.policy_statements_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>policy_statement</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.entityresolution.policy_statements (
  Arn,
  StatementId,
  region
)
SELECT
  '{{ arn }}',
  '{{ statement_id }}',
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
INSERT INTO awscc.entityresolution.policy_statements (
  Arn,
  StatementId,
  Effect,
  Action,
  Principal,
  Condition,
  region
)
SELECT
  '{{ arn }}',
  '{{ statement_id }}',
  '{{ effect }}',
  '{{ action }}',
  '{{ principal }}',
  '{{ condition }}',
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
  - name: policy_statement
    props:
      - name: arn
        value: '{{ arn }}'
      - name: statement_id
        value: '{{ statement_id }}'
      - name: effect
        value: '{{ effect }}'
      - name: action
        value:
          - '{{ action[0] }}'
      - name: principal
        value:
          - '{{ principal[0] }}'
      - name: condition
        value: '{{ condition }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>policy_statement</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.entityresolution.policy_statements
SET PatchDocument = string('{{ {
    "Effect": effect,
    "Action": action,
    "Principal": principal,
    "Condition": condition
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ arn }}|{{ statement_id }}'
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
DELETE FROM awscc.entityresolution.policy_statements
WHERE
  Identifier = '{{ arn }}|{{ statement_id }}' AND
  region = '{{ region }}'
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

To operate on the <code>policy_statements</code> resource, the following permissions are required:

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
entityresolution:AddPolicyStatement
```

</TabItem>
<TabItem value="read">

```json
entityresolution:GetPolicy
```

</TabItem>
<TabItem value="update">

```json
entityresolution:AddPolicyStatement,
entityresolution:DeletePolicyStatement
```

</TabItem>
<TabItem value="delete">

```json
entityresolution:DeletePolicyStatement,
entityresolution:GetPolicy
```

</TabItem>
<TabItem value="list">

```json
entityresolution:GetPolicy
```

</TabItem>
</Tabs>