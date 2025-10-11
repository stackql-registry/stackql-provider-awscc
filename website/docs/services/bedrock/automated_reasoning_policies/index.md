---
title: automated_reasoning_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - automated_reasoning_policies
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

Creates, updates, deletes or gets an <code>automated_reasoning_policy</code> resource or lists <code>automated_reasoning_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>automated_reasoning_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Bedrock::AutomatedReasoningPolicy Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.bedrock.automated_reasoning_policies" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>The name inherited from the policy</td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>The description inherited from the policy</td></tr>
<tr><td><CopyableCode code="policy_definition" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="policy_arn" /></td><td><code>string</code></td><td>Arn of the policy</td></tr>
<tr><td><CopyableCode code="version" /></td><td><code>string</code></td><td>The version of the policy</td></tr>
<tr><td><CopyableCode code="definition_hash" /></td><td><code>string</code></td><td>The hash for this version</td></tr>
<tr><td><CopyableCode code="created_at" /></td><td><code>string</code></td><td>Time this policy version was created</td></tr>
<tr><td><CopyableCode code="updated_at" /></td><td><code>string</code></td><td>Time this policy was last updated</td></tr>
<tr><td><CopyableCode code="policy_id" /></td><td><code>string</code></td><td>The id of the associated policy</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-automatedreasoningpolicy.html"><code>AWS::Bedrock::AutomatedReasoningPolicy</code></a>.

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
    <td><CopyableCode code="Name, region" /></td>
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
Gets all <code>automated_reasoning_policies</code> in a region.
```sql
SELECT
region,
name,
description,
policy_definition,
policy_arn,
version,
definition_hash,
created_at,
updated_at,
policy_id,
tags
FROM awscc.bedrock.automated_reasoning_policies
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>automated_reasoning_policy</code>.
```sql
SELECT
region,
name,
description,
policy_definition,
policy_arn,
version,
definition_hash,
created_at,
updated_at,
policy_id,
tags
FROM awscc.bedrock.automated_reasoning_policies
WHERE region = 'us-east-1' AND data__Identifier = '<PolicyArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>automated_reasoning_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.bedrock.automated_reasoning_policies (
 Name,
 region
)
SELECT 
'{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.bedrock.automated_reasoning_policies (
 Name,
 Description,
 PolicyDefinition,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Description }}',
 '{{ PolicyDefinition }}',
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
  - name: automated_reasoning_policy
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: PolicyDefinition
        value:
          Version: '{{ Version }}'
          Types:
            - Name: '{{ Name }}'
              Description: '{{ Description }}'
              Values:
                - Value: '{{ Value }}'
                  Description: '{{ Description }}'
          Rules:
            - Id: '{{ Id }}'
              Expression: '{{ Expression }}'
              AlternateExpression: '{{ AlternateExpression }}'
          Variables:
            - Name: '{{ Name }}'
              Type: '{{ Type }}'
              Description: '{{ Description }}'
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
DELETE FROM awscc.bedrock.automated_reasoning_policies
WHERE data__Identifier = '<PolicyArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>automated_reasoning_policies</code> resource, the following permissions are required:

### Create
```json
bedrock:CreateAutomatedReasoningPolicy,
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

### Update
```json
bedrock:UpdateAutomatedReasoningPolicy,
bedrock:GetAutomatedReasoningPolicy,
bedrock:ExportAutomatedReasoningPolicyVersion,
bedrock:ListTagsForResource,
bedrock:TagResource,
bedrock:UntagResource
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
