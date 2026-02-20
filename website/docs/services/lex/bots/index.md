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
WHERE region = 'us-east-1' AND Identifier = '<Id>';
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
'{{ Name }}',
 '{{ RoleArn }}',
 '{{ DataPrivacy }}',
 '{{ IdleSessionTTLInSeconds }}',
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
 '{{ Name }}',
 '{{ Description }}',
 '{{ RoleArn }}',
 '{{ DataPrivacy }}',
 '{{ ErrorLogSettings }}',
 '{{ IdleSessionTTLInSeconds }}',
 '{{ BotLocales }}',
 '{{ BotFileS3Location }}',
 '{{ BotTags }}',
 '{{ TestBotAliasTags }}',
 '{{ AutoBuildBotLocales }}',
 '{{ TestBotAliasSettings }}',
 '{{ Replication }}',
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
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: DataPrivacy
        value:
          ChildDirected: '{{ ChildDirected }}'
      - name: ErrorLogSettings
        value:
          Enabled: '{{ Enabled }}'
      - name: IdleSessionTTLInSeconds
        value: '{{ IdleSessionTTLInSeconds }}'
      - name: BotLocales
        value:
          - LocaleId: '{{ LocaleId }}'
            Description: null
            VoiceSettings:
              VoiceId: '{{ VoiceId }}'
              Engine: '{{ Engine }}'
            GenerativeAISettings:
              BuildtimeSettings:
                DescriptiveBotBuilderSpecification:
                  Enabled: '{{ Enabled }}'
                  BedrockModelSpecification:
                    ModelArn: '{{ ModelArn }}'
                    BedrockGuardrailConfiguration:
                      BedrockGuardrailIdentifier: '{{ BedrockGuardrailIdentifier }}'
                      BedrockGuardrailVersion: '{{ BedrockGuardrailVersion }}'
                    BedrockTraceStatus: '{{ BedrockTraceStatus }}'
                    BedrockModelCustomPrompt: '{{ BedrockModelCustomPrompt }}'
                SampleUtteranceGenerationSpecification:
                  Enabled: '{{ Enabled }}'
                  BedrockModelSpecification: null
              RuntimeSettings:
                NluImprovementSpecification:
                  Enabled: '{{ Enabled }}'
                SlotResolutionImprovementSpecification:
                  Enabled: '{{ Enabled }}'
                  BedrockModelSpecification: null
            NluConfidenceThreshold: null
            Intents:
              - Name: null
                Description: null
                ParentIntentSignature: '{{ ParentIntentSignature }}'
                SampleUtterances:
                  - Utterance: '{{ Utterance }}'
                DialogCodeHook:
                  Enabled: '{{ Enabled }}'
                FulfillmentCodeHook:
                  FulfillmentUpdatesSpecification:
                    StartResponse:
                      MessageGroups:
                        - Message:
                            PlainTextMessage:
                              Value: '{{ Value }}'
                            CustomPayload:
                              Value: '{{ Value }}'
                            SSMLMessage:
                              Value: '{{ Value }}'
                            ImageResponseCard:
                              Title: '{{ Title }}'
                              Subtitle: null
                              ImageUrl: '{{ ImageUrl }}'
                              Buttons:
                                - Text: '{{ Text }}'
                                  Value: '{{ Value }}'
                          Variations:
                            - null
                      DelayInSeconds: '{{ DelayInSeconds }}'
                      AllowInterrupt: '{{ AllowInterrupt }}'
                    UpdateResponse:
                      MessageGroups: null
                      FrequencyInSeconds: '{{ FrequencyInSeconds }}'
                      AllowInterrupt: '{{ AllowInterrupt }}'
                    TimeoutInSeconds: '{{ TimeoutInSeconds }}'
                    Active: '{{ Active }}'
                  PostFulfillmentStatusSpecification:
                    SuccessResponse:
                      MessageGroupsList: null
                      AllowInterrupt: '{{ AllowInterrupt }}'
                    SuccessNextStep:
                      DialogAction:
                        Type: '{{ Type }}'
                        SlotToElicit: null
                        SuppressNextMessage: '{{ SuppressNextMessage }}'
                      Intent:
                        Name: null
                        Slots:
                          - SlotName: null
                            SlotValueOverride:
                              Shape: '{{ Shape }}'
                              Value:
                                InterpretedValue: '{{ InterpretedValue }}'
                              Values:
                                - null
                      SessionAttributes:
                        - Key: '{{ Key }}'
                          Value: '{{ Value }}'
                    SuccessConditional:
                      IsActive: '{{ IsActive }}'
                      ConditionalBranches:
                        - Name: null
                          Condition:
                            ExpressionString: '{{ ExpressionString }}'
                          NextStep: null
                          Response: null
                      DefaultBranch:
                        NextStep: null
                        Response: null
                    FailureResponse: null
                    FailureNextStep: null
                    FailureConditional: null
                    TimeoutResponse: null
                    TimeoutNextStep: null
                    TimeoutConditional: null
                  Enabled: '{{ Enabled }}'
                  IsActive: '{{ IsActive }}'
                IntentConfirmationSetting:
                  PromptSpecification:
                    MessageGroupsList: null
                    MaxRetries: '{{ MaxRetries }}'
                    AllowInterrupt: '{{ AllowInterrupt }}'
                    MessageSelectionStrategy: '{{ MessageSelectionStrategy }}'
                    PromptAttemptsSpecification: {}
                  IsActive: '{{ IsActive }}'
                  ConfirmationResponse: null
                  ConfirmationNextStep: null
                  ConfirmationConditional: null
                  DeclinationResponse: null
                  DeclinationNextStep: null
                  DeclinationConditional: null
                  FailureResponse: null
                  FailureNextStep: null
                  FailureConditional: null
                  CodeHook:
                    EnableCodeHookInvocation: '{{ EnableCodeHookInvocation }}'
                    IsActive: '{{ IsActive }}'
                    InvocationLabel: null
                    PostCodeHookSpecification:
                      SuccessResponse: null
                      SuccessNextStep: null
                      SuccessConditional: null
                      FailureResponse: null
                      FailureNextStep: null
                      FailureConditional: null
                      TimeoutResponse: null
                      TimeoutNextStep: null
                      TimeoutConditional: null
                  ElicitationCodeHook:
                    EnableCodeHookInvocation: '{{ EnableCodeHookInvocation }}'
                    InvocationLabel: null
                IntentClosingSetting:
                  ClosingResponse: null
                  IsActive: '{{ IsActive }}'
                  Conditional: null
                  NextStep: null
                InitialResponseSetting:
                  InitialResponse: null
                  NextStep: null
                  Conditional: null
                  CodeHook: null
                InputContexts:
                  - Name: null
                OutputContexts:
                  - Name: null
                    TimeToLiveInSeconds: '{{ TimeToLiveInSeconds }}'
                    TurnsToLive: '{{ TurnsToLive }}'
                KendraConfiguration:
                  KendraIndex: '{{ KendraIndex }}'
                  QueryFilterStringEnabled: '{{ QueryFilterStringEnabled }}'
                  QueryFilterString: '{{ QueryFilterString }}'
                QnAIntentConfiguration:
                  DataSourceConfiguration:
                    OpensearchConfiguration:
                      DomainEndpoint: '{{ DomainEndpoint }}'
                      IndexName: '{{ IndexName }}'
                      IncludeFields:
                        - '{{ IncludeFields[0] }}'
                      ExactResponse: '{{ ExactResponse }}'
                      ExactResponseFields:
                        QuestionField: '{{ QuestionField }}'
                        AnswerField: '{{ AnswerField }}'
                    BedrockKnowledgeStoreConfiguration:
                      BedrockKnowledgeBaseArn: '{{ BedrockKnowledgeBaseArn }}'
                      ExactResponse: '{{ ExactResponse }}'
                      BKBExactResponseFields:
                        AnswerField: '{{ AnswerField }}'
                    KendraConfiguration:
                      KendraIndex: '{{ KendraIndex }}'
                      QueryFilterString: '{{ QueryFilterString }}'
                      QueryFilterStringEnabled: '{{ QueryFilterStringEnabled }}'
                      ExactResponse: '{{ ExactResponse }}'
                  BedrockModelConfiguration: null
                QInConnectIntentConfiguration:
                  QInConnectAssistantConfiguration:
                    AssistantArn: '{{ AssistantArn }}'
                BedrockAgentIntentConfiguration:
                  BedrockAgentConfiguration:
                    BedrockAgentId: '{{ BedrockAgentId }}'
                    BedrockAgentAliasId: '{{ BedrockAgentAliasId }}'
                  BedrockAgentIntentKnowledgeBaseConfiguration:
                    BedrockKnowledgeBaseArn: '{{ BedrockKnowledgeBaseArn }}'
                    BedrockModelConfiguration: null
                SlotPriorities:
                  - Priority: '{{ Priority }}'
                    SlotName: null
                Slots:
                  - Name: null
                    Description: null
                    SlotTypeName: '{{ SlotTypeName }}'
                    ValueElicitationSetting:
                      DefaultValueSpecification:
                        DefaultValueList:
                          - DefaultValue: '{{ DefaultValue }}'
                      SlotConstraint: '{{ SlotConstraint }}'
                      PromptSpecification: null
                      SampleUtterances: null
                      WaitAndContinueSpecification:
                        WaitingResponse: null
                        ContinueResponse: null
                        StillWaitingResponse:
                          MessageGroupsList: null
                          FrequencyInSeconds: '{{ FrequencyInSeconds }}'
                          TimeoutInSeconds: '{{ TimeoutInSeconds }}'
                          AllowInterrupt: '{{ AllowInterrupt }}'
                        IsActive: '{{ IsActive }}'
                      SlotCaptureSetting:
                        CaptureResponse: null
                        CaptureNextStep: null
                        CaptureConditional: null
                        FailureResponse: null
                        FailureNextStep: null
                        FailureConditional: null
                        CodeHook: null
                        ElicitationCodeHook: null
                    ObfuscationSetting:
                      ObfuscationSettingType: '{{ ObfuscationSettingType }}'
                    MultipleValuesSetting:
                      AllowMultipleValues: '{{ AllowMultipleValues }}'
                    SubSlotSetting:
                      Expression: '{{ Expression }}'
                      SlotSpecifications: {}
            SlotTypes:
              - Name: null
                Description: null
                ParentSlotTypeSignature: '{{ ParentSlotTypeSignature }}'
                SlotTypeValues:
                  - SampleValue:
                      Value: '{{ Value }}'
                    Synonyms:
                      - null
                ValueSelectionSetting:
                  ResolutionStrategy: '{{ ResolutionStrategy }}'
                  RegexFilter:
                    Pattern: '{{ Pattern }}'
                  AdvancedRecognitionSetting:
                    AudioRecognitionStrategy: '{{ AudioRecognitionStrategy }}'
                ExternalSourceSetting:
                  GrammarSlotTypeSetting:
                    Source:
                      S3BucketName: '{{ S3BucketName }}'
                      S3ObjectKey: '{{ S3ObjectKey }}'
                      KmsKeyArn: '{{ KmsKeyArn }}'
                CompositeSlotTypeSetting:
                  SubSlots:
                    - Name: '{{ Name }}'
                      SlotTypeId: '{{ SlotTypeId }}'
            CustomVocabulary:
              CustomVocabularyItems:
                - Phrase: '{{ Phrase }}'
                  Weight: '{{ Weight }}'
                  DisplayAs: '{{ DisplayAs }}'
      - name: BotFileS3Location
        value:
          S3Bucket: null
          S3ObjectKey: null
          S3ObjectVersion: '{{ S3ObjectVersion }}'
      - name: BotTags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: TestBotAliasTags
        value:
          - null
      - name: AutoBuildBotLocales
        value: '{{ AutoBuildBotLocales }}'
      - name: TestBotAliasSettings
        value:
          BotAliasLocaleSettings:
            - LocaleId: '{{ LocaleId }}'
              BotAliasLocaleSetting:
                CodeHookSpecification:
                  LambdaCodeHook:
                    CodeHookInterfaceVersion: '{{ CodeHookInterfaceVersion }}'
                    LambdaArn: '{{ LambdaArn }}'
                Enabled: '{{ Enabled }}'
          ConversationLogSettings:
            AudioLogSettings:
              - Destination:
                  S3Bucket:
                    S3BucketArn: '{{ S3BucketArn }}'
                    LogPrefix: '{{ LogPrefix }}'
                    KmsKeyArn: '{{ KmsKeyArn }}'
                Enabled: '{{ Enabled }}'
            TextLogSettings:
              - Destination:
                  CloudWatch:
                    CloudWatchLogGroupArn: '{{ CloudWatchLogGroupArn }}'
                    LogPrefix: '{{ LogPrefix }}'
                Enabled: '{{ Enabled }}'
          Description: null
          SentimentAnalysisSettings:
            DetectSentiment: '{{ DetectSentiment }}'
      - name: Replication
        value:
          ReplicaRegions:
            - '{{ ReplicaRegions[0] }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

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
AND Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.lex.bots
WHERE Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>bots</code> resource, the following permissions are required:

### Create
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

### Read
```json
lex:DescribeBot,
lex:ListTagsForResource,
lex:DescribeBotReplica
```

### Update
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

### Delete
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

### List
```json
lex:ListBots,
lex:ListBotReplicas
```
