---
title: ai_agent_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - ai_agent_versions
  - wisdom
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

Creates, updates, deletes or gets an <code>ai_agent_version</code> resource or lists <code>ai_agent_versions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>ai_agent_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Wisdom::AIAgentVersion Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.wisdom.ai_agent_versions" /></td></tr>
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
    "name": "a_iagent_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "assistant_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "a_iagent_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "assistant_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "a_iagent_version_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "version_number",
    "type": "number",
    "description": ""
  },
  {
    "name": "modified_time_seconds",
    "type": "number",
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
    "name": "a_iagent_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "assistant_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "version_number",
    "type": "number",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagentversion.html"><code>AWS::Wisdom::AIAgentVersion</code></a>.

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
    <td><code>ai_agent_versions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AssistantId, AIAgentId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>ai_agent_versions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>ai_agent_versions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>ai_agent_versions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>ai_agent_versions</code></td>
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

Gets all properties from an individual <code>ai_agent_version</code>.
```sql
SELECT
  region,
  a_iagent_arn,
  assistant_arn,
  a_iagent_id,
  assistant_id,
  a_iagent_version_id,
  version_number,
  modified_time_seconds
FROM awscc.wisdom.ai_agent_versions
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ assistant_id }}|{{ a_iagent_id }}|{{ version_number }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>ai_agent_versions</code> in a region.
```sql
SELECT
  region,
  assistant_id,
  a_iagent_id,
  version_number
FROM awscc.wisdom.ai_agent_versions_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>ai_agent_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.wisdom.ai_agent_versions (
  AIAgentId,
  AssistantId,
  region
)
SELECT
  '{{ a_iagent_id }}',
  '{{ assistant_id }}',
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
INSERT INTO awscc.wisdom.ai_agent_versions (
  AIAgentId,
  AssistantId,
  ModifiedTimeSeconds,
  region
)
SELECT
  '{{ a_iagent_id }}',
  '{{ assistant_id }}',
  '{{ modified_time_seconds }}',
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
  - name: ai_agent_version
    props:
      - name: a_iagent_id
        value: '{{ a_iagent_id }}'
      - name: assistant_id
        value: '{{ assistant_id }}'
      - name: modified_time_seconds
        value: null
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.wisdom.ai_agent_versions
WHERE
  Identifier = '{{ assistant_id }}|{{ a_iagent_id }}|{{ version_number }}' AND
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

To operate on the <code>ai_agent_versions</code> resource, the following permissions are required:

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
wisdom:CreateAIAgentVersion
```

</TabItem>
<TabItem value="read">

```json
wisdom:GetAIAgent,
wisdom:GetAIAgentVersion
```

</TabItem>
<TabItem value="update">

```json
wisdom:GetAIAgent,
wisdom:GetAIAgentVersion
```

</TabItem>
<TabItem value="delete">

```json
wisdom:DeleteAIAgentVersion
```

</TabItem>
<TabItem value="list">

```json
wisdom:ListAIAgentVersions
```

</TabItem>
</Tabs>