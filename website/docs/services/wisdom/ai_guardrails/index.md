---
title: ai_guardrails
hide_title: false
hide_table_of_contents: false
keywords:
  - ai_guardrails
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

Creates, updates, deletes or gets an <code>ai_guardrail</code> resource or lists <code>ai_guardrails</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>ai_guardrails</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Wisdom::AIGuardrail Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.wisdom.ai_guardrails" /></td></tr>
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
    "name": "assistant_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "assistant_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "a_iguardrail_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "a_iguardrail_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "blocked_input_messaging",
    "type": "string",
    "description": "Messaging for when violations are detected in text"
  },
  {
    "name": "blocked_outputs_messaging",
    "type": "string",
    "description": "Messaging for when violations are detected in text"
  },
  {
    "name": "description",
    "type": "string",
    "description": "Description of the guardrail or its version"
  },
  {
    "name": "topic_policy_config",
    "type": "object",
    "description": "Topic policy config for a guardrail.",
    "children": [
      {
        "name": "topics_config",
        "type": "array",
        "description": "List of topic configs in topic policy.",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": "Name of topic in topic policy"
          },
          {
            "name": "definition",
            "type": "string",
            "description": "Definition of topic in topic policy"
          },
          {
            "name": "examples",
            "type": "array",
            "description": "List of text examples"
          },
          {
            "name": "type",
            "type": "string",
            "description": "Type of topic in a policy"
          }
        ]
      }
    ]
  },
  {
    "name": "content_policy_config",
    "type": "object",
    "description": "Content policy config for a guardrail.",
    "children": [
      {
        "name": "filters_config",
        "type": "array",
        "description": "List of content filter configs in content policy.",
        "children": [
          {
            "name": "type",
            "type": "string",
            "description": "Type of text to text filter in content policy"
          },
          {
            "name": "input_strength",
            "type": "string",
            "description": "Strength for filters"
          }
        ]
      }
    ]
  },
  {
    "name": "word_policy_config",
    "type": "object",
    "description": "Word policy config for a guardrail.",
    "children": [
      {
        "name": "words_config",
        "type": "array",
        "description": "List of custom word configs.",
        "children": [
          {
            "name": "text",
            "type": "string",
            "description": "The custom word text."
          }
        ]
      },
      {
        "name": "managed_word_lists_config",
        "type": "array",
        "description": "A config for the list of managed words.",
        "children": [
          {
            "name": "type",
            "type": "string",
            "description": "Options for managed words."
          }
        ]
      }
    ]
  },
  {
    "name": "sensitive_information_policy_config",
    "type": "object",
    "description": "Sensitive information policy config for a guardrail.",
    "children": [
      {
        "name": "pii_entities_config",
        "type": "array",
        "description": "List of entities.",
        "children": [
          {
            "name": "type",
            "type": "string",
            "description": "The currently supported PII entities"
          },
          {
            "name": "action",
            "type": "string",
            "description": "Options for sensitive information action."
          }
        ]
      },
      {
        "name": "regexes_config",
        "type": "array",
        "description": "List of regex.",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": "The regex name."
          },
          {
            "name": "description",
            "type": "string",
            "description": "The regex description."
          },
          {
            "name": "pattern",
            "type": "string",
            "description": "The regex pattern."
          },
          {
            "name": "action",
            "type": "string",
            "description": "Options for sensitive information action."
          }
        ]
      }
    ]
  },
  {
    "name": "contextual_grounding_policy_config",
    "type": "object",
    "description": "Contextual grounding policy config for a guardrail.",
    "children": [
      {
        "name": "filters_config",
        "type": "array",
        "description": "List of contextual grounding filter configs.",
        "children": [
          {
            "name": "type",
            "type": "string",
            "description": "Type of contextual grounding filter"
          },
          {
            "name": "threshold",
            "type": "number",
            "description": "The threshold for this filter."
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "object",
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
    "name": "assistant_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "a_iguardrail_id",
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
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html"><code>AWS::Wisdom::AIGuardrail</code></a>.

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
    <td><code>ai_guardrails</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AssistantId, BlockedInputMessaging, BlockedOutputsMessaging, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>ai_guardrails</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>ai_guardrails</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>ai_guardrails_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>ai_guardrails</code></td>
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

Gets all properties from an individual <code>ai_guardrail</code>.
```sql
SELECT
region,
assistant_id,
assistant_arn,
a_iguardrail_arn,
a_iguardrail_id,
name,
blocked_input_messaging,
blocked_outputs_messaging,
description,
topic_policy_config,
content_policy_config,
word_policy_config,
sensitive_information_policy_config,
contextual_grounding_policy_config,
tags
FROM awscc.wisdom.ai_guardrails
WHERE region = 'us-east-1' AND Identifier = '<AIGuardrailId>|<AssistantId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>ai_guardrails</code> in a region.
```sql
SELECT
region,
a_iguardrail_id,
assistant_id
FROM awscc.wisdom.ai_guardrails_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>ai_guardrail</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.wisdom.ai_guardrails (
 AssistantId,
 BlockedInputMessaging,
 BlockedOutputsMessaging,
 region
)
SELECT 
'{{ AssistantId }}',
 '{{ BlockedInputMessaging }}',
 '{{ BlockedOutputsMessaging }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.wisdom.ai_guardrails (
 AssistantId,
 Name,
 BlockedInputMessaging,
 BlockedOutputsMessaging,
 Description,
 TopicPolicyConfig,
 ContentPolicyConfig,
 WordPolicyConfig,
 SensitiveInformationPolicyConfig,
 ContextualGroundingPolicyConfig,
 Tags,
 region
)
SELECT 
 '{{ AssistantId }}',
 '{{ Name }}',
 '{{ BlockedInputMessaging }}',
 '{{ BlockedOutputsMessaging }}',
 '{{ Description }}',
 '{{ TopicPolicyConfig }}',
 '{{ ContentPolicyConfig }}',
 '{{ WordPolicyConfig }}',
 '{{ SensitiveInformationPolicyConfig }}',
 '{{ ContextualGroundingPolicyConfig }}',
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
  - name: ai_guardrail
    props:
      - name: AssistantId
        value: '{{ AssistantId }}'
      - name: Name
        value: '{{ Name }}'
      - name: BlockedInputMessaging
        value: '{{ BlockedInputMessaging }}'
      - name: BlockedOutputsMessaging
        value: '{{ BlockedOutputsMessaging }}'
      - name: Description
        value: '{{ Description }}'
      - name: TopicPolicyConfig
        value:
          TopicsConfig:
            - Name: '{{ Name }}'
              Definition: '{{ Definition }}'
              Examples:
                - '{{ Examples[0] }}'
              Type: '{{ Type }}'
      - name: ContentPolicyConfig
        value:
          FiltersConfig:
            - Type: '{{ Type }}'
              InputStrength: '{{ InputStrength }}'
              OutputStrength: null
      - name: WordPolicyConfig
        value:
          WordsConfig:
            - Text: '{{ Text }}'
          ManagedWordListsConfig:
            - Type: '{{ Type }}'
      - name: SensitiveInformationPolicyConfig
        value:
          PiiEntitiesConfig:
            - Type: '{{ Type }}'
              Action: '{{ Action }}'
          RegexesConfig:
            - Name: '{{ Name }}'
              Description: '{{ Description }}'
              Pattern: '{{ Pattern }}'
              Action: null
      - name: ContextualGroundingPolicyConfig
        value:
          FiltersConfig:
            - Type: '{{ Type }}'
              Threshold: null
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>ai_guardrail</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.wisdom.ai_guardrails
SET PatchDocument = string('{{ {
    "BlockedInputMessaging": blocked_input_messaging,
    "BlockedOutputsMessaging": blocked_outputs_messaging,
    "Description": description,
    "TopicPolicyConfig": topic_policy_config,
    "ContentPolicyConfig": content_policy_config,
    "WordPolicyConfig": word_policy_config,
    "SensitiveInformationPolicyConfig": sensitive_information_policy_config,
    "ContextualGroundingPolicyConfig": contextual_grounding_policy_config
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<AIGuardrailId>|<AssistantId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.wisdom.ai_guardrails
WHERE Identifier = '<AIGuardrailId|AssistantId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>ai_guardrails</code> resource, the following permissions are required:

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
wisdom:CreateAIGuardrail,
wisdom:TagResource
```

</TabItem>
<TabItem value="read">

```json
wisdom:GetAIGuardrail
```

</TabItem>
<TabItem value="update">

```json
wisdom:UpdateAIGuardrail
```

</TabItem>
<TabItem value="delete">

```json
wisdom:DeleteAIGuardrail
```

</TabItem>
<TabItem value="list">

```json
wisdom:ListAIGuardrails
```

</TabItem>
</Tabs>