---
title: bots
hide_title: false
hide_table_of_contents: false
keywords:
  - bots
  - lex
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

Creates, updates, deletes or gets a <code>bot</code> resource or lists <code>bots</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>bots</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Amazon Lex conversational bot performing automated tasks such as ordering a pizza, booking a hotel, and so on.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lex.bots" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": "Unique ID of resource"
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": "A unique identifier for a resource."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description of the version. Use the description to help identify the version in lists."
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "data_privacy",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "child_directed",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  {
    "name": "error_log_settings",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "enabled",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  {
    "name": "idle_session_ttl_in_seconds",
    "type": "integer",
    "description": ""
  },
  {
    "name": "bot_locales",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "locale_id",
        "type": "string",
        "description": "The identifier of the language and locale that the bot will be used in."
      },
      {
        "name": "voice_settings",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "voice_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "engine",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "generative_ai_settings",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "buildtime_settings",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "descriptive_bot_builder_specification",
                "type": "object",
                "description": ""
              },
              {
                "name": "sample_utterance_generation_specification",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "runtime_settings",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "nlu_improvement_specification",
                "type": "object",
                "description": ""
              },
              {
                "name": "slot_resolution_improvement_specification",
                "type": "object",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "nlu_confidence_threshold",
        "type": "number",
        "description": ""
      },
      {
        "name": "intents",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "parent_intent_signature",
            "type": "string",
            "description": ""
          },
          {
            "name": "sample_utterances",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "utterance",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "dialog_code_hook",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "enabled",
                "type": "boolean",
                "description": ""
              }
            ]
          },
          {
            "name": "fulfillment_code_hook",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "fulfillment_updates_specification",
                "type": "object",
                "description": ""
              },
              {
                "name": "post_fulfillment_status_specification",
                "type": "object",
                "description": ""
              },
              {
                "name": "enabled",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "is_active",
                "type": "boolean",
                "description": ""
              }
            ]
          },
          {
            "name": "intent_confirmation_setting",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "prompt_specification",
                "type": "object",
                "description": ""
              },
              {
                "name": "is_active",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "confirmation_response",
                "type": "object",
                "description": ""
              },
              {
                "name": "confirmation_next_step",
                "type": "object",
                "description": ""
              },
              {
                "name": "confirmation_conditional",
                "type": "object",
                "description": ""
              },
              {
                "name": "code_hook",
                "type": "object",
                "description": ""
              },
              {
                "name": "elicitation_code_hook",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "intent_closing_setting",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "closing_response",
                "type": "object",
                "description": ""
              },
              {
                "name": "is_active",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "conditional",
                "type": "object",
                "description": ""
              },
              {
                "name": "next_step",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "initial_response_setting",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "initial_response",
                "type": "object",
                "description": ""
              },
              {
                "name": "next_step",
                "type": "object",
                "description": ""
              },
              {
                "name": "conditional",
                "type": "object",
                "description": ""
              },
              {
                "name": "code_hook",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "input_contexts",
            "type": "array",
            "description": ""
          },
          {
            "name": "output_contexts",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "time_to_live_in_seconds",
                "type": "integer",
                "description": ""
              },
              {
                "name": "turns_to_live",
                "type": "integer",
                "description": ""
              }
            ]
          },
          {
            "name": "kendra_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "kendra_index",
                "type": "string",
                "description": ""
              },
              {
                "name": "query_filter_string_enabled",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "query_filter_string",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "qn_aintent_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "data_source_configuration",
                "type": "object",
                "description": ""
              },
              {
                "name": "bedrock_model_configuration",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "q_in_connect_intent_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "q_in_connect_assistant_configuration",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "bedrock_agent_intent_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "bedrock_agent_configuration",
                "type": "object",
                "description": ""
              },
              {
                "name": "bedrock_agent_intent_knowledge_base_configuration",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "slot_priorities",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "priority",
                "type": "integer",
                "description": ""
              }
            ]
          },
          {
            "name": "slots",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "slot_type_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "value_elicitation_setting",
                "type": "object",
                "description": ""
              },
              {
                "name": "obfuscation_setting",
                "type": "object",
                "description": ""
              },
              {
                "name": "multiple_values_setting",
                "type": "object",
                "description": ""
              },
              {
                "name": "sub_slot_setting",
                "type": "object",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "slot_types",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "parent_slot_type_signature",
            "type": "string",
            "description": ""
          },
          {
            "name": "slot_type_values",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "sample_value",
                "type": "object",
                "description": ""
              },
              {
                "name": "synonyms",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "value_selection_setting",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "resolution_strategy",
                "type": "string",
                "description": ""
              },
              {
                "name": "regex_filter",
                "type": "object",
                "description": ""
              },
              {
                "name": "advanced_recognition_setting",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "external_source_setting",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "grammar_slot_type_setting",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "composite_slot_type_setting",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "sub_slots",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "custom_vocabulary",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "custom_vocabulary_items",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "phrase",
                "type": "string",
                "description": ""
              },
              {
                "name": "weight",
                "type": "integer",
                "description": ""
              },
              {
                "name": "display_as",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "bot_file_s3_location",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "s3_bucket",
        "type": "string",
        "description": ""
      },
      {
        "name": "s3_object_key",
        "type": "string",
        "description": ""
      },
      {
        "name": "s3_object_version",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "bot_tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "A string used to identify this tag"
      },
      {
        "name": "value",
        "type": "string",
        "description": "A string containing the value for the tag"
      }
    ]
  },
  {
    "name": "test_bot_alias_tags",
    "type": "array",
    "description": ""
  },
  {
    "name": "auto_build_bot_locales",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "test_bot_alias_settings",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "bot_alias_locale_settings",
        "type": "array",
        "description": "A list of bot alias locale settings to add to the bot alias.",
        "children": [
          {
            "name": "locale_id",
            "type": "string",
            "description": "A string used to identify the locale"
          },
          {
            "name": "bot_alias_locale_setting",
            "type": "object",
            "description": "You can use this parameter to specify a specific Lambda function to run different functions in different locales.",
            "children": [
              {
                "name": "code_hook_specification",
                "type": "object",
                "description": "Contains information about code hooks that Amazon Lex calls during a conversation."
              },
              {
                "name": "enabled",
                "type": "boolean",
                "description": "Whether the Lambda code hook is enabled"
              }
            ]
          }
        ]
      },
      {
        "name": "conversation_log_settings",
        "type": "object",
        "description": "Contains information about code hooks that Amazon Lex calls during a conversation.",
        "children": [
          {
            "name": "audio_log_settings",
            "type": "array",
            "description": "List of audio log settings",
            "children": [
              {
                "name": "destination",
                "type": "object",
                "description": "The location of audio log files collected when conversation logging is enabled for a bot."
              },
              {
                "name": "enabled",
                "type": "boolean",
                "description": ""
              }
            ]
          },
          {
            "name": "text_log_settings",
            "type": "array",
            "description": "List of text log settings",
            "children": [
              {
                "name": "destination",
                "type": "object",
                "description": "Defines the Amazon CloudWatch Logs destination log group for conversation text logs."
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
        "name": "sentiment_analysis_settings",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "detect_sentiment",
            "type": "boolean",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "replication",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "replica_regions",
        "type": "array",
        "description": ""
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
    "name": "id",
    "type": "string",
    "description": "Unique ID of resource"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html"><code>AWS::Lex::Bot</code></a>.

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
    <td><code>bots</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, RoleArn, DataPrivacy, IdleSessionTTLInSeconds, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>bots</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>bots</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>bots_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>bots</code></td>
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

Gets all properties from an individual <code>bot</code>.
```sql
SELECT
region,
id,
arn,
name,
description,
role_arn,
data_privacy,
error_log_settings,
idle_session_ttl_in_seconds,
bot_locales,
bot_file_s3_location,
bot_tags,
test_bot_alias_tags,
auto_build_bot_locales,
test_bot_alias_settings,
replication
FROM awscc.lex.bots
WHERE region = 'us-east-1' AND Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>bots</code> in a region.
```sql
SELECT
region,
id
FROM awscc.lex.bots_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>bot</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.lex.bots (
 Name,
 RoleArn,
 DataPrivacy,
 IdleSessionTTLInSeconds,
 region
)
SELECT
'{{ name }}',
 '{{ role_arn }}',
 '{{ data_privacy }}',
 '{{ idle_session_ttl_in_seconds }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.lex.bots (
 Name,
 Description,
 RoleArn,
 DataPrivacy,
 ErrorLogSettings,
 IdleSessionTTLInSeconds,
 BotLocales,
 BotFileS3Location,
 BotTags,
 TestBotAliasTags,
 AutoBuildBotLocales,
 TestBotAliasSettings,
 Replication,
 region
)
SELECT
 '{{ name }}',
 '{{ description }}',
 '{{ role_arn }}',
 '{{ data_privacy }}',
 '{{ error_log_settings }}',
 '{{ idle_session_ttl_in_seconds }}',
 '{{ bot_locales }}',
 '{{ bot_file_s3_location }}',
 '{{ bot_tags }}',
 '{{ test_bot_alias_tags }}',
 '{{ auto_build_bot_locales }}',
 '{{ test_bot_alias_settings }}',
 '{{ replication }}',
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
  - name: bot
    props:
      - name: name
        value: '{{ name }}'
      - name: description
        value: '{{ description }}'
      - name: role_arn
        value: '{{ role_arn }}'
      - name: data_privacy
        value:
          child_directed: '{{ child_directed }}'
      - name: error_log_settings
        value:
          enabled: '{{ enabled }}'
      - name: idle_session_ttl_in_seconds
        value: '{{ idle_session_ttl_in_seconds }}'
      - name: bot_locales
        value:
          - locale_id: '{{ locale_id }}'
            description: null
            voice_settings:
              voice_id: '{{ voice_id }}'
              engine: '{{ engine }}'
            generative_ai_settings:
              buildtime_settings:
                descriptive_bot_builder_specification:
                  enabled: '{{ enabled }}'
                  bedrock_model_specification:
                    model_arn: '{{ model_arn }}'
                    bedrock_guardrail_configuration:
                      bedrock_guardrail_identifier: '{{ bedrock_guardrail_identifier }}'
                      bedrock_guardrail_version: '{{ bedrock_guardrail_version }}'
                    bedrock_trace_status: '{{ bedrock_trace_status }}'
                    bedrock_model_custom_prompt: '{{ bedrock_model_custom_prompt }}'
                sample_utterance_generation_specification:
                  enabled: '{{ enabled }}'
                  bedrock_model_specification: null
              runtime_settings:
                nlu_improvement_specification:
                  enabled: '{{ enabled }}'
                slot_resolution_improvement_specification:
                  enabled: '{{ enabled }}'
                  bedrock_model_specification: null
            nlu_confidence_threshold: null
            intents:
              - name: null
                description: null
                parent_intent_signature: '{{ parent_intent_signature }}'
                sample_utterances:
                  - utterance: '{{ utterance }}'
                dialog_code_hook:
                  enabled: '{{ enabled }}'
                fulfillment_code_hook:
                  fulfillment_updates_specification:
                    start_response:
                      message_groups:
                        - message:
                            plain_text_message:
                              value: '{{ value }}'
                            custom_payload:
                              value: '{{ value }}'
                            ssm_lmessage:
                              value: '{{ value }}'
                            image_response_card:
                              title: '{{ title }}'
                              subtitle: null
                              image_url: '{{ image_url }}'
                              buttons:
                                - text: '{{ text }}'
                                  value: '{{ value }}'
                          variations:
                            - null
                      delay_in_seconds: '{{ delay_in_seconds }}'
                      allow_interrupt: '{{ allow_interrupt }}'
                    update_response:
                      message_groups: null
                      frequency_in_seconds: '{{ frequency_in_seconds }}'
                      allow_interrupt: '{{ allow_interrupt }}'
                    timeout_in_seconds: '{{ timeout_in_seconds }}'
                    active: '{{ active }}'
                  post_fulfillment_status_specification:
                    success_response:
                      message_groups_list: null
                      allow_interrupt: '{{ allow_interrupt }}'
                    success_next_step:
                      dialog_action:
                        type: '{{ type }}'
                        slot_to_elicit: null
                        suppress_next_message: '{{ suppress_next_message }}'
                      intent:
                        name: null
                        slots:
                          - slot_name: null
                            slot_value_override:
                              shape: '{{ shape }}'
                              value:
                                interpreted_value: '{{ interpreted_value }}'
                              values:
                                - null
                      session_attributes:
                        - key: '{{ key }}'
                          value: '{{ value }}'
                    success_conditional:
                      is_active: '{{ is_active }}'
                      conditional_branches:
                        - name: null
                          condition:
                            expression_string: '{{ expression_string }}'
                          next_step: null
                          response: null
                      default_branch:
                        next_step: null
                        response: null
                    failure_response: null
                    failure_next_step: null
                    failure_conditional: null
                    timeout_response: null
                    timeout_next_step: null
                    timeout_conditional: null
                  enabled: '{{ enabled }}'
                  is_active: '{{ is_active }}'
                intent_confirmation_setting:
                  prompt_specification:
                    message_groups_list: null
                    max_retries: '{{ max_retries }}'
                    allow_interrupt: '{{ allow_interrupt }}'
                    message_selection_strategy: '{{ message_selection_strategy }}'
                    prompt_attempts_specification: {}
                  is_active: '{{ is_active }}'
                  confirmation_response: null
                  confirmation_next_step: null
                  confirmation_conditional: null
                  declination_response: null
                  declination_next_step: null
                  declination_conditional: null
                  failure_response: null
                  failure_next_step: null
                  failure_conditional: null
                  code_hook:
                    enable_code_hook_invocation: '{{ enable_code_hook_invocation }}'
                    is_active: '{{ is_active }}'
                    invocation_label: null
                    post_code_hook_specification:
                      success_response: null
                      success_next_step: null
                      success_conditional: null
                      failure_response: null
                      failure_next_step: null
                      failure_conditional: null
                      timeout_response: null
                      timeout_next_step: null
                      timeout_conditional: null
                  elicitation_code_hook:
                    enable_code_hook_invocation: '{{ enable_code_hook_invocation }}'
                    invocation_label: null
                intent_closing_setting:
                  closing_response: null
                  is_active: '{{ is_active }}'
                  conditional: null
                  next_step: null
                initial_response_setting:
                  initial_response: null
                  next_step: null
                  conditional: null
                  code_hook: null
                input_contexts:
                  - name: null
                output_contexts:
                  - name: null
                    time_to_live_in_seconds: '{{ time_to_live_in_seconds }}'
                    turns_to_live: '{{ turns_to_live }}'
                kendra_configuration:
                  kendra_index: '{{ kendra_index }}'
                  query_filter_string_enabled: '{{ query_filter_string_enabled }}'
                  query_filter_string: '{{ query_filter_string }}'
                qn_aintent_configuration:
                  data_source_configuration:
                    opensearch_configuration:
                      domain_endpoint: '{{ domain_endpoint }}'
                      index_name: '{{ index_name }}'
                      include_fields:
                        - '{{ include_fields[0] }}'
                      exact_response: '{{ exact_response }}'
                      exact_response_fields:
                        question_field: '{{ question_field }}'
                        answer_field: '{{ answer_field }}'
                    bedrock_knowledge_store_configuration:
                      bedrock_knowledge_base_arn: '{{ bedrock_knowledge_base_arn }}'
                      exact_response: '{{ exact_response }}'
                      b_kb_exact_response_fields:
                        answer_field: '{{ answer_field }}'
                    kendra_configuration:
                      kendra_index: '{{ kendra_index }}'
                      query_filter_string: '{{ query_filter_string }}'
                      query_filter_string_enabled: '{{ query_filter_string_enabled }}'
                      exact_response: '{{ exact_response }}'
                  bedrock_model_configuration: null
                q_in_connect_intent_configuration:
                  q_in_connect_assistant_configuration:
                    assistant_arn: '{{ assistant_arn }}'
                bedrock_agent_intent_configuration:
                  bedrock_agent_configuration:
                    bedrock_agent_id: '{{ bedrock_agent_id }}'
                    bedrock_agent_alias_id: '{{ bedrock_agent_alias_id }}'
                  bedrock_agent_intent_knowledge_base_configuration:
                    bedrock_knowledge_base_arn: '{{ bedrock_knowledge_base_arn }}'
                    bedrock_model_configuration: null
                slot_priorities:
                  - priority: '{{ priority }}'
                    slot_name: null
                slots:
                  - name: null
                    description: null
                    slot_type_name: '{{ slot_type_name }}'
                    value_elicitation_setting:
                      default_value_specification:
                        default_value_list:
                          - default_value: '{{ default_value }}'
                      slot_constraint: '{{ slot_constraint }}'
                      prompt_specification: null
                      sample_utterances: null
                      wait_and_continue_specification:
                        waiting_response: null
                        continue_response: null
                        still_waiting_response:
                          message_groups_list: null
                          frequency_in_seconds: '{{ frequency_in_seconds }}'
                          timeout_in_seconds: '{{ timeout_in_seconds }}'
                          allow_interrupt: '{{ allow_interrupt }}'
                        is_active: '{{ is_active }}'
                      slot_capture_setting:
                        capture_response: null
                        capture_next_step: null
                        capture_conditional: null
                        failure_response: null
                        failure_next_step: null
                        failure_conditional: null
                        code_hook: null
                        elicitation_code_hook: null
                    obfuscation_setting:
                      obfuscation_setting_type: '{{ obfuscation_setting_type }}'
                    multiple_values_setting:
                      allow_multiple_values: '{{ allow_multiple_values }}'
                    sub_slot_setting:
                      expression: '{{ expression }}'
                      slot_specifications: {}
            slot_types:
              - name: null
                description: null
                parent_slot_type_signature: '{{ parent_slot_type_signature }}'
                slot_type_values:
                  - sample_value:
                      value: '{{ value }}'
                    synonyms:
                      - null
                value_selection_setting:
                  resolution_strategy: '{{ resolution_strategy }}'
                  regex_filter:
                    pattern: '{{ pattern }}'
                  advanced_recognition_setting:
                    audio_recognition_strategy: '{{ audio_recognition_strategy }}'
                external_source_setting:
                  grammar_slot_type_setting:
                    source:
                      s3_bucket_name: '{{ s3_bucket_name }}'
                      s3_object_key: '{{ s3_object_key }}'
                      kms_key_arn: '{{ kms_key_arn }}'
                composite_slot_type_setting:
                  sub_slots:
                    - name: '{{ name }}'
                      slot_type_id: '{{ slot_type_id }}'
            custom_vocabulary:
              custom_vocabulary_items:
                - phrase: '{{ phrase }}'
                  weight: '{{ weight }}'
                  display_as: '{{ display_as }}'
      - name: bot_file_s3_location
        value:
          s3_bucket: null
          s3_object_key: null
          s3_object_version: '{{ s3_object_version }}'
      - name: bot_tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: test_bot_alias_tags
        value:
          - null
      - name: auto_build_bot_locales
        value: '{{ auto_build_bot_locales }}'
      - name: test_bot_alias_settings
        value:
          bot_alias_locale_settings:
            - locale_id: '{{ locale_id }}'
              bot_alias_locale_setting:
                code_hook_specification:
                  lambda_code_hook:
                    code_hook_interface_version: '{{ code_hook_interface_version }}'
                    lambda_arn: '{{ lambda_arn }}'
                enabled: '{{ enabled }}'
          conversation_log_settings:
            audio_log_settings:
              - destination:
                  s3_bucket:
                    s3_bucket_arn: '{{ s3_bucket_arn }}'
                    log_prefix: '{{ log_prefix }}'
                    kms_key_arn: '{{ kms_key_arn }}'
                enabled: '{{ enabled }}'
            text_log_settings:
              - destination:
                  cloud_watch:
                    cloud_watch_log_group_arn: '{{ cloud_watch_log_group_arn }}'
                    log_prefix: '{{ log_prefix }}'
                enabled: '{{ enabled }}'
          description: null
          sentiment_analysis_settings:
            detect_sentiment: '{{ detect_sentiment }}'
      - name: replication
        value:
          replica_regions:
            - '{{ replica_regions[0] }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>bot</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.lex.bots
SET PatchDocument = string('{{ {
    "Name": name,
    "Description": description,
    "RoleArn": role_arn,
    "DataPrivacy": data_privacy,
    "ErrorLogSettings": error_log_settings,
    "IdleSessionTTLInSeconds": idle_session_ttl_in_seconds,
    "BotLocales": bot_locales,
    "BotFileS3Location": bot_file_s3_location,
    "BotTags": bot_tags,
    "TestBotAliasTags": test_bot_alias_tags,
    "AutoBuildBotLocales": auto_build_bot_locales,
    "TestBotAliasSettings": test_bot_alias_settings,
    "Replication": replication
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.lex.bots
WHERE Identifier = '{{ id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>bots</code> resource, the following permissions are required:

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
iam:PassRole,
lex:DescribeBot,
lex:CreateUploadUrl,
lex:StartImport,
lex:DescribeImport,
lex:ListTagsForResource,
lex:TagResource,
lex:CreateBot,
lex:CreateBotLocale,
lex:CreateIntent,
lex:CreateSlot,
lex:CreateSlotType,
lex:UpdateBot,
lex:UpdateBotLocale,
lex:UpdateIntent,
lex:UpdateSlot,
lex:UpdateSlotType,
lex:DeleteBotLocale,
lex:DeleteIntent,
lex:DeleteSlot,
lex:DeleteSlotType,
lex:DescribeBotLocale,
lex:BuildBotLocale,
lex:ListBots,
lex:ListBotLocales,
lex:CreateCustomVocabulary,
lex:UpdateCustomVocabulary,
lex:DeleteCustomVocabulary,
s3:GetObject,
lex:UpdateBotAlias,
iam:CreateServiceLinkedRole,
iam:GetRole,
lex:CreateBotReplica,
lex:DescribeBotReplica,
lex:DeleteBotReplica
```

</TabItem>
<TabItem value="read">

```json
lex:DescribeBot,
lex:ListTagsForResource,
lex:DescribeBotReplica
```

</TabItem>
<TabItem value="update">

```json
iam:PassRole,
lex:DescribeBot,
lex:CreateUploadUrl,
lex:StartImport,
lex:DescribeImport,
lex:ListTagsForResource,
lex:TagResource,
lex:UntagResource,
lex:CreateBot,
lex:CreateBotLocale,
lex:CreateIntent,
lex:CreateSlot,
lex:CreateSlotType,
lex:UpdateBot,
lex:UpdateBotLocale,
lex:UpdateIntent,
lex:UpdateSlot,
lex:UpdateSlotType,
lex:DeleteBotLocale,
lex:DeleteIntent,
lex:DeleteSlot,
lex:DeleteSlotType,
lex:DescribeBotLocale,
lex:BuildBotLocale,
lex:ListBots,
lex:ListBotLocales,
lex:CreateCustomVocabulary,
lex:UpdateCustomVocabulary,
lex:DeleteCustomVocabulary,
s3:GetObject,
lex:UpdateBotAlias,
lex:CreateBotReplica,
lex:DescribeBotReplica,
lex:DeleteBotReplica
```

</TabItem>
<TabItem value="delete">

```json
lex:DeleteBot,
lex:DescribeBot,
lex:DeleteBotLocale,
lex:DeleteIntent,
lex:DeleteSlotType,
lex:DeleteSlot,
lex:DeleteBotVersion,
lex:DeleteBotChannel,
lex:DeleteBotAlias,
lex:DeleteCustomVocabulary,
lex:DeleteBotReplica
```

</TabItem>
<TabItem value="list">

```json
lex:ListBots,
lex:ListBotReplicas
```

</TabItem>
</Tabs>