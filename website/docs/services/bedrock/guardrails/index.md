---
title: guardrails
hide_title: false
hide_table_of_contents: false
keywords:
  - guardrails
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

Creates, updates, deletes or gets a <code>guardrail</code> resource or lists <code>guardrails</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>guardrails</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Bedrock::Guardrail Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.bedrock.guardrails" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
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
            "description": "Type of filter in content policy"
          },
          {
            "name": "input_strength",
            "type": "string",
            "description": "Strength for filters"
          },
          {
            "name": "input_modalities",
            "type": "array",
            "description": "List of modalities"
          },
          {
            "name": "output_modalities",
            "type": "array",
            "description": "List of modalities"
          },
          {
            "name": "input_action",
            "type": "string",
            "description": ""
          },
          {
            "name": "input_enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "output_enabled",
            "type": "boolean",
            "description": ""
          }
        ]
      },
      {
        "name": "content_filters_tier_config",
        "type": "object",
        "description": "Guardrail tier config for content policy",
        "children": [
          {
            "name": "tier_name",
            "type": "string",
            "description": "Tier name for tier configuration in content filters policy"
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
          },
          {
            "name": "action",
            "type": "string",
            "description": ""
          },
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "Time Stamp"
  },
  {
    "name": "cross_region_config",
    "type": "object",
    "description": "The system-defined guardrail profile that you’re using with your guardrail",
    "children": [
      {
        "name": "guardrail_profile_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the guardrail profile"
      }
    ]
  },
  {
    "name": "description",
    "type": "string",
    "description": "Description of the guardrail or its version"
  },
  {
    "name": "failure_recommendations",
    "type": "array",
    "description": "List of failure recommendations"
  },
  {
    "name": "guardrail_arn",
    "type": "string",
    "description": "Arn representation for the guardrail"
  },
  {
    "name": "guardrail_id",
    "type": "string",
    "description": "Unique id for the guardrail"
  },
  {
    "name": "kms_key_arn",
    "type": "string",
    "description": "The KMS key with which the guardrail was encrypted at rest"
  },
  {
    "name": "name",
    "type": "string",
    "description": "Name of the guardrail"
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
          },
          {
            "name": "input_enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "output_enabled",
            "type": "boolean",
            "description": ""
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
          },
          {
            "name": "input_enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "output_enabled",
            "type": "boolean",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "status",
    "type": "string",
    "description": "Status of the guardrail"
  },
  {
    "name": "status_reasons",
    "type": "array",
    "description": "List of status reasons"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "List of Tags",
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
          },
          {
            "name": "input_action",
            "type": "string",
            "description": ""
          },
          {
            "name": "input_enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "output_enabled",
            "type": "boolean",
            "description": ""
          }
        ]
      },
      {
        "name": "topics_tier_config",
        "type": "object",
        "description": "Guardrail tier config for topic policy",
        "children": [
          {
            "name": "tier_name",
            "type": "string",
            "description": "Tier name for tier configuration in topic policy"
          }
        ]
      }
    ]
  },
  {
    "name": "updated_at",
    "type": "string",
    "description": "Time Stamp"
  },
  {
    "name": "version",
    "type": "string",
    "description": "Guardrail version"
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
          },
          {
            "name": "input_action",
            "type": "string",
            "description": ""
          },
          {
            "name": "input_enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "output_enabled",
            "type": "boolean",
            "description": ""
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
          },
          {
            "name": "input_action",
            "type": "string",
            "description": ""
          },
          {
            "name": "input_enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "output_enabled",
            "type": "boolean",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html"><code>AWS::Bedrock::Guardrail</code></a>.

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
    <td><CopyableCode code="Name, BlockedInputMessaging, BlockedOutputsMessaging, region" /></td>
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

Gets all properties from an individual <code>guardrail</code>.
```sql
SELECT
region,
blocked_input_messaging,
blocked_outputs_messaging,
content_policy_config,
contextual_grounding_policy_config,
created_at,
cross_region_config,
description,
failure_recommendations,
guardrail_arn,
guardrail_id,
kms_key_arn,
name,
sensitive_information_policy_config,
status,
status_reasons,
tags,
topic_policy_config,
updated_at,
version,
word_policy_config
FROM awscc.bedrock.guardrails
WHERE region = 'us-east-1' AND data__Identifier = '<GuardrailArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>guardrail</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.bedrock.guardrails (
 BlockedInputMessaging,
 BlockedOutputsMessaging,
 Name,
 region
)
SELECT 
'{{ BlockedInputMessaging }}',
 '{{ BlockedOutputsMessaging }}',
 '{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.bedrock.guardrails (
 BlockedInputMessaging,
 BlockedOutputsMessaging,
 ContentPolicyConfig,
 ContextualGroundingPolicyConfig,
 CrossRegionConfig,
 Description,
 KmsKeyArn,
 Name,
 SensitiveInformationPolicyConfig,
 Tags,
 TopicPolicyConfig,
 WordPolicyConfig,
 region
)
SELECT 
 '{{ BlockedInputMessaging }}',
 '{{ BlockedOutputsMessaging }}',
 '{{ ContentPolicyConfig }}',
 '{{ ContextualGroundingPolicyConfig }}',
 '{{ CrossRegionConfig }}',
 '{{ Description }}',
 '{{ KmsKeyArn }}',
 '{{ Name }}',
 '{{ SensitiveInformationPolicyConfig }}',
 '{{ Tags }}',
 '{{ TopicPolicyConfig }}',
 '{{ WordPolicyConfig }}',
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
  - name: guardrail
    props:
      - name: BlockedInputMessaging
        value: '{{ BlockedInputMessaging }}'
      - name: BlockedOutputsMessaging
        value: '{{ BlockedOutputsMessaging }}'
      - name: ContentPolicyConfig
        value:
          FiltersConfig:
            - Type: '{{ Type }}'
              InputStrength: '{{ InputStrength }}'
              OutputStrength: null
              InputModalities:
                - '{{ InputModalities[0] }}'
              OutputModalities:
                - null
              InputAction: '{{ InputAction }}'
              OutputAction: null
              InputEnabled: '{{ InputEnabled }}'
              OutputEnabled: '{{ OutputEnabled }}'
          ContentFiltersTierConfig:
            TierName: '{{ TierName }}'
      - name: ContextualGroundingPolicyConfig
        value:
          FiltersConfig:
            - Type: '{{ Type }}'
              Threshold: null
              Action: '{{ Action }}'
              Enabled: '{{ Enabled }}'
      - name: CrossRegionConfig
        value:
          GuardrailProfileArn: '{{ GuardrailProfileArn }}'
      - name: Description
        value: '{{ Description }}'
      - name: KmsKeyArn
        value: '{{ KmsKeyArn }}'
      - name: Name
        value: '{{ Name }}'
      - name: SensitiveInformationPolicyConfig
        value:
          PiiEntitiesConfig:
            - Type: '{{ Type }}'
              Action: '{{ Action }}'
              InputAction: null
              OutputAction: null
              InputEnabled: '{{ InputEnabled }}'
              OutputEnabled: '{{ OutputEnabled }}'
          RegexesConfig:
            - Name: '{{ Name }}'
              Description: '{{ Description }}'
              Pattern: '{{ Pattern }}'
              Action: null
              InputAction: null
              OutputAction: null
              InputEnabled: '{{ InputEnabled }}'
              OutputEnabled: '{{ OutputEnabled }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: TopicPolicyConfig
        value:
          TopicsConfig:
            - Name: '{{ Name }}'
              Definition: '{{ Definition }}'
              Examples:
                - '{{ Examples[0] }}'
              Type: '{{ Type }}'
              InputAction: '{{ InputAction }}'
              OutputAction: null
              InputEnabled: '{{ InputEnabled }}'
              OutputEnabled: '{{ OutputEnabled }}'
          TopicsTierConfig:
            TierName: '{{ TierName }}'
      - name: WordPolicyConfig
        value:
          WordsConfig:
            - Text: '{{ Text }}'
              InputAction: '{{ InputAction }}'
              OutputAction: null
              InputEnabled: '{{ InputEnabled }}'
              OutputEnabled: '{{ OutputEnabled }}'
          ManagedWordListsConfig:
            - Type: '{{ Type }}'
              InputAction: null
              OutputAction: null
              InputEnabled: '{{ InputEnabled }}'
              OutputEnabled: '{{ OutputEnabled }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.bedrock.guardrails
WHERE data__Identifier = '<GuardrailArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>guardrails</code> resource, the following permissions are required:

### Create
```json
bedrock:CreateGuardrail,
bedrock:GetGuardrail,
kms:DescribeKey,
kms:CreateGrant,
kms:GenerateDataKey,
kms:Decrypt,
bedrock:TagResource,
bedrock:ListTagsForResource
```

### Read
```json
bedrock:GetGuardrail,
kms:Decrypt,
bedrock:ListTagsForResource
```

### Update
```json
bedrock:UpdateGuardrail,
bedrock:GetGuardrail,
bedrock:ListTagsForResource,
bedrock:TagResource,
bedrock:UntagResource,
kms:DescribeKey,
kms:CreateGrant,
kms:GenerateDataKey,
kms:Decrypt
```

### Delete
```json
bedrock:DeleteGuardrail,
bedrock:GetGuardrail,
kms:Decrypt,
kms:RetireGrant
```

### List
```json
bedrock:ListGuardrails
```
