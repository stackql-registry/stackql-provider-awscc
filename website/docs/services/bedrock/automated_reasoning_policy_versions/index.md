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
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="policy_arn" /></td><td><code>string</code></td><td>Arn of the policy</td></tr>
<tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>The name inherited from the policy</td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>The description inherited from the policy</td></tr>
<tr><td><CopyableCode code="version" /></td><td><code>string</code></td><td>The version of the policy</td></tr>
<tr><td><CopyableCode code="definition_hash" /></td><td><code>string</code></td><td>The hash for this version</td></tr>
<tr><td><CopyableCode code="last_updated_definition_hash" /></td><td><code>string</code></td><td>The hash for this version</td></tr>
<tr><td><CopyableCode code="created_at" /></td><td><code>string</code></td><td>Time this policy version was created</td></tr>
<tr><td><CopyableCode code="updated_at" /></td><td><code>string</code></td><td>Time this policy was last updated</td></tr>
<tr><td><CopyableCode code="policy_id" /></td><td><code>string</code></td><td>The id of the associated policy</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

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
Gets all <code>automated_reasoning_policy_versions</code> in a region.
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
WHERE region = 'us-east-1';
```
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
