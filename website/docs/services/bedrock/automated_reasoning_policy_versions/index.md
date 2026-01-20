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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-automatedreasoningpolicyversion.html"><code>AWS::Bedrock::AutomatedReasoningPolicyVersion</code></a>.

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
    <td><CopyableCode code="PolicyArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

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
WHERE region = 'us-east-1' AND data__Identifier = '<PolicyArn>|<Version>';
```

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
'{{ PolicyArn }}',
'{{ region }}';
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
 '{{ PolicyArn }}',
 '{{ LastUpdatedDefinitionHash }}',
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
  - name: automated_reasoning_policy_version
    props:
      - name: PolicyArn
        value: '{{ PolicyArn }}'
      - name: LastUpdatedDefinitionHash
        value: '{{ LastUpdatedDefinitionHash }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.bedrock.automated_reasoning_policy_versions
WHERE data__Identifier = '<PolicyArn|Version>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>automated_reasoning_policy_versions</code> resource, the following permissions are required:

### Create
```json
bedrock:CreateAutomatedReasoningPolicyVersion,
bedrock:GetAutomatedReasoningPolicy,
bedrock:ExportAutomatedReasoningPolicyVersion,
bedrock:TagResource,
bedrock:ListTagsForResource
```

### Read
```json
bedrock:GetAutomatedReasoningPolicy,
bedrock:ExportAutomatedReasoningPolicyVersion,
bedrock:ListTagsForResource
```

### Delete
```json
bedrock:DeleteAutomatedReasoningPolicy,
bedrock:GetAutomatedReasoningPolicy
```

### List
```json
bedrock:ListAutomatedReasoningPolicies
```
