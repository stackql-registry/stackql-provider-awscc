---
title: automated_reasoning_policy_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - automated_reasoning_policy_versions
  - bedrock
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

Creates, updates, deletes or gets an <code>automated_reasoning_policy_version</code> resource or lists <code>automated_reasoning_policy_versions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>automated_reasoning_policy_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Bedrock::AutomatedReasoningPolicyVersion Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.bedrock.automated_reasoning_policy_versions" /></td></tr>
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
    "name": "policy_arn",
    "type": "string",
    "description": "Arn of the policy"
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name inherited from the policy"
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description inherited from the policy"
  },
  {
    "name": "version",
    "type": "string",
    "description": "The version of the policy"
  },
  {
    "name": "definition_hash",
    "type": "string",
    "description": "The hash for this version"
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "Time this policy version was created"
  },
  {
    "name": "updated_at",
    "type": "string",
    "description": "Time this policy was last updated"
  },
  {
    "name": "policy_id",
    "type": "string",
    "description": "The id of the associated policy"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "Tag Key"
      },
      {
        "name": "value",
        "type": "string",
        "description": "Tag Value"
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
    "name": "policy_arn",
    "type": "string",
    "description": "Arn of the policy"
  },
  {
    "name": "version",
    "type": "string",
    "description": "The version of the policy"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-automatedreasoningpolicyversion.html"><code>AWS::Bedrock::AutomatedReasoningPolicyVersion</code></a>.

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
    <td><code>automated_reasoning_policy_versions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="PolicyArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>automated_reasoning_policy_versions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>automated_reasoning_policy_versions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>automated_reasoning_policy_versions</code></td>
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

Gets all properties from an individual <code>automated_reasoning_policy_version</code>.
```sql
SELECT
  region,
  policy_arn,
  name,
  description,
  version,
  definition_hash,
  last_updated_definition_hash,
  created_at,
  updated_at,
  policy_id,
  tags
FROM awscc.bedrock.automated_reasoning_policy_versions
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ policy_arn }}|{{ version }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>automated_reasoning_policy_versions</code> in a region.
```sql
SELECT
  region,
  policy_arn,
  version
FROM awscc.bedrock.automated_reasoning_policy_versions_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>automated_reasoning_policy_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.bedrock.automated_reasoning_policy_versions (
  PolicyArn,
  region
)
SELECT
  '{{ policy_arn }}',
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
INSERT INTO awscc.bedrock.automated_reasoning_policy_versions (
  PolicyArn,
  LastUpdatedDefinitionHash,
  Tags,
  region
)
SELECT
  '{{ policy_arn }}',
  '{{ last_updated_definition_hash }}',
  '{{ tags }}',
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
  - name: automated_reasoning_policy_version
    props:
      - name: policy_arn
        value: '{{ policy_arn }}'
      - name: last_updated_definition_hash
        value: '{{ last_updated_definition_hash }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.bedrock.automated_reasoning_policy_versions
WHERE
  Identifier = '{{ policy_arn }}|{{ version }}' AND
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

To operate on the <code>automated_reasoning_policy_versions</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
bedrock:CreateAutomatedReasoningPolicyVersion,
bedrock:GetAutomatedReasoningPolicy,
bedrock:ExportAutomatedReasoningPolicyVersion,
bedrock:TagResource,
bedrock:ListTagsForResource
```

</TabItem>
<TabItem value="read">

```json
bedrock:GetAutomatedReasoningPolicy,
bedrock:ExportAutomatedReasoningPolicyVersion,
bedrock:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
bedrock:DeleteAutomatedReasoningPolicy,
bedrock:GetAutomatedReasoningPolicy
```

</TabItem>
<TabItem value="list">

```json
bedrock:ListAutomatedReasoningPolicies
```

</TabItem>
</Tabs>