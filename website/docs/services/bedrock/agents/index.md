---
title: agents
hide_title: false
hide_table_of_contents: false
keywords:
  - agents
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

Creates, updates, deletes or gets an <code>agent</code> resource or lists <code>agents</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>agents</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Bedrock::Agent Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.bedrock.agents" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "action_groups",
    "type": "array",
    "description": "List of ActionGroups",
    "children": [
      {
        "name": "action_group_name",
        "type": "string",
        "description": "Name of the action group"
      },
      {
        "name": "description",
        "type": "string",
        "description": "Description of action group"
      },
      {
        "name": "parent_action_group_signature",
        "type": "string",
        "description": "Action Group Signature for a BuiltIn Action"
      },
      {
        "name": "action_group_executor",
        "type": "object",
        "description": "Type of Executors for an Action Group"
      },
      {
        "name": "api_schema",
        "type": "object",
        "description": "Contains information about the API Schema for the Action Group"
      },
      {
        "name": "action_group_state",
        "type": "string",
        "description": "State of the action group"
      },
      {
        "name": "function_schema",
        "type": "object",
        "description": "Schema of Functions",
        "children": [
          {
            "name": "functions",
            "type": "array",
            "description": "List of Function definitions",
            "children": [
              {
                "name": "name",
                "type": "string",
                "description": "Name for a resource."
              },
              {
                "name": "description",
                "type": "string",
                "description": "Description of function"
              },
              {
                "name": "parameters",
                "type": "object",
                "description": "A map of parameter name and detail"
              },
              {
                "name": "require_confirmation",
                "type": "string",
                "description": "ENUM to check if action requires user confirmation"
              }
            ]
          }
        ]
      },
      {
        "name": "skip_resource_in_use_check_on_delete",
        "type": "boolean",
        "description": "Specifies whether to allow deleting action group while it is in use."
      }
    ]
  },
  {
    "name": "agent_arn",
    "type": "string",
    "description": "Arn representation of the Agent."
  },
  {
    "name": "agent_id",
    "type": "string",
    "description": "Identifier for a resource."
  },
  {
    "name": "agent_name",
    "type": "string",
    "description": "Name for a resource."
  },
  {
    "name": "agent_resource_role_arn",
    "type": "string",
    "description": "ARN of a IAM role."
  },
  {
    "name": "agent_status",
    "type": "string",
    "description": "Schema Type for Action APIs."
  },
  {
    "name": "agent_version",
    "type": "string",
    "description": "Draft Agent Version."
  },
  {
    "name": "auto_prepare",
    "type": "boolean",
    "description": "Specifies whether to automatically prepare after creating or updating the agent."
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "Time Stamp."
  },
  {
    "name": "custom_orchestration",
    "type": "object",
    "description": "Structure for custom orchestration",
    "children": [
      {
        "name": "executor",
        "type": "object",
        "description": "Types of executors for custom orchestration strategy",
        "children": [
          {
            "name": "lambda",
            "type": "string",
            "description": "ARN of a Lambda."
          }
        ]
      }
    ]
  },
  {
    "name": "customer_encryption_key_arn",
    "type": "string",
    "description": "A KMS key ARN"
  },
  {
    "name": "skip_resource_in_use_check_on_delete",
    "type": "boolean",
    "description": "Specifies whether to allow deleting agent while it is in use."
  },
  {
    "name": "description",
    "type": "string",
    "description": "Description of the Resource."
  },
  {
    "name": "failure_reasons",
    "type": "array",
    "description": "Failure Reasons for Error."
  },
  {
    "name": "foundation_model",
    "type": "string",
    "description": "ARN or name of a Bedrock model."
  },
  {
    "name": "guardrail_configuration",
    "type": "object",
    "description": "Configuration for a guardrail",
    "children": [
      {
        "name": "guardrail_identifier",
        "type": "string",
        "description": "Identifier for the guardrail, could be the id or the arn"
      },
      {
        "name": "guardrail_version",
        "type": "string",
        "description": "Version of the guardrail"
      }
    ]
  },
  {
    "name": "memory_configuration",
    "type": "object",
    "description": "Configuration for memory storage",
    "children": [
      {
        "name": "enabled_memory_types",
        "type": "array",
        "description": "Types of session storage persisted in memory"
      },
      {
        "name": "storage_days",
        "type": "number",
        "description": "Maximum number of days to store session details"
      },
      {
        "name": "session_summary_configuration",
        "type": "object",
        "description": "Configuration for Session Summarization",
        "children": [
          {
            "name": "max_recent_sessions",
            "type": "number",
            "description": "Maximum number of Sessions to Summarize"
          }
        ]
      }
    ]
  },
  {
    "name": "idle_session_ttl_in_seconds",
    "type": "number",
    "description": "Max Session Time."
  },
  {
    "name": "agent_collaboration",
    "type": "string",
    "description": "Agent collaboration state"
  },
  {
    "name": "instruction",
    "type": "string",
    "description": "Instruction for the agent."
  },
  {
    "name": "knowledge_bases",
    "type": "array",
    "description": "List of Agent Knowledge Bases",
    "children": [
      {
        "name": "knowledge_base_id",
        "type": "string",
        "description": "Identifier for a resource."
      },
      {
        "name": "description",
        "type": "string",
        "description": "Description of the Resource."
      },
      {
        "name": "knowledge_base_state",
        "type": "string",
        "description": "State of the knowledge base; whether it is enabled or disabled"
      }
    ]
  },
  {
    "name": "agent_collaborators",
    "type": "array",
    "description": "List of Agent Collaborators",
    "children": [
      {
        "name": "agent_descriptor",
        "type": "object",
        "description": "Agent descriptor for agent collaborator",
        "children": [
          {
            "name": "alias_arn",
            "type": "string",
            "description": "Alias ARN for agent descriptor"
          }
        ]
      },
      {
        "name": "collaboration_instruction",
        "type": "string",
        "description": "Agent collaborator instruction"
      },
      {
        "name": "collaborator_name",
        "type": "string",
        "description": "Agent collaborator name"
      },
      {
        "name": "relay_conversation_history",
        "type": "string",
        "description": "Relay conversation history state"
      }
    ]
  },
  {
    "name": "orchestration_type",
    "type": "string",
    "description": "Types of orchestration strategy for agents"
  },
  {
    "name": "prepared_at",
    "type": "string",
    "description": "Time Stamp."
  },
  {
    "name": "prompt_override_configuration",
    "type": "object",
    "description": "Configuration for prompt override.",
    "children": [
      {
        "name": "prompt_configurations",
        "type": "array",
        "description": "List of BasePromptConfiguration",
        "children": [
          {
            "name": "prompt_type",
            "type": "string",
            "description": "Prompt Type."
          },
          {
            "name": "prompt_creation_mode",
            "type": "string",
            "description": "Creation Mode for Prompt Configuration."
          },
          {
            "name": "prompt_state",
            "type": "string",
            "description": "Prompt State."
          },
          {
            "name": "base_prompt_template",
            "type": "string",
            "description": "Base Prompt Template."
          },
          {
            "name": "inference_configuration",
            "type": "object",
            "description": "Configuration for inference in prompt configuration",
            "children": [
              {
                "name": "temperature",
                "type": "number",
                "description": "Controls randomness, higher values increase diversity"
              },
              {
                "name": "top_p",
                "type": "number",
                "description": "Cumulative probability cutoff for token selection"
              },
              {
                "name": "top_k",
                "type": "number",
                "description": "Sample from the k most likely next tokens"
              },
              {
                "name": "maximum_length",
                "type": "number",
                "description": "Maximum length of output"
              },
              {
                "name": "stop_sequences",
                "type": "array",
                "description": "List of stop sequences"
              }
            ]
          },
          {
            "name": "additional_model_request_fields",
            "type": "object",
            "description": "Contains model-specific configurations"
          }
        ]
      },
      {
        "name": "override_lambda",
        "type": "string",
        "description": "ARN of a Lambda."
      }
    ]
  },
  {
    "name": "recommended_actions",
    "type": "array",
    "description": "The recommended actions users can take to resolve an error in failureReasons."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A map of tag keys and values"
  },
  {
    "name": "updated_at",
    "type": "string",
    "description": "Time Stamp."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html"><code>AWS::Bedrock::Agent</code></a>.

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
    <td><CopyableCode code="AgentName, region" /></td>
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

Gets all properties from an individual <code>agent</code>.
```sql
SELECT
region,
action_groups,
agent_arn,
agent_id,
agent_name,
agent_resource_role_arn,
agent_status,
agent_version,
auto_prepare,
created_at,
custom_orchestration,
customer_encryption_key_arn,
skip_resource_in_use_check_on_delete,
description,
failure_reasons,
foundation_model,
guardrail_configuration,
memory_configuration,
idle_session_ttl_in_seconds,
agent_collaboration,
instruction,
knowledge_bases,
agent_collaborators,
orchestration_type,
prepared_at,
prompt_override_configuration,
recommended_actions,
tags,
test_alias_tags,
updated_at
FROM awscc.bedrock.agents
WHERE region = 'us-east-1' AND data__Identifier = '<AgentId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>agent</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.bedrock.agents (
 AgentName,
 region
)
SELECT 
'{{ AgentName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.bedrock.agents (
 ActionGroups,
 AgentName,
 AgentResourceRoleArn,
 AutoPrepare,
 CustomOrchestration,
 CustomerEncryptionKeyArn,
 SkipResourceInUseCheckOnDelete,
 Description,
 FoundationModel,
 GuardrailConfiguration,
 MemoryConfiguration,
 IdleSessionTTLInSeconds,
 AgentCollaboration,
 Instruction,
 KnowledgeBases,
 AgentCollaborators,
 OrchestrationType,
 PromptOverrideConfiguration,
 Tags,
 TestAliasTags,
 region
)
SELECT 
 '{{ ActionGroups }}',
 '{{ AgentName }}',
 '{{ AgentResourceRoleArn }}',
 '{{ AutoPrepare }}',
 '{{ CustomOrchestration }}',
 '{{ CustomerEncryptionKeyArn }}',
 '{{ SkipResourceInUseCheckOnDelete }}',
 '{{ Description }}',
 '{{ FoundationModel }}',
 '{{ GuardrailConfiguration }}',
 '{{ MemoryConfiguration }}',
 '{{ IdleSessionTTLInSeconds }}',
 '{{ AgentCollaboration }}',
 '{{ Instruction }}',
 '{{ KnowledgeBases }}',
 '{{ AgentCollaborators }}',
 '{{ OrchestrationType }}',
 '{{ PromptOverrideConfiguration }}',
 '{{ Tags }}',
 '{{ TestAliasTags }}',
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
  - name: agent
    props:
      - name: ActionGroups
        value:
          - ActionGroupName: '{{ ActionGroupName }}'
            Description: '{{ Description }}'
            ParentActionGroupSignature: '{{ ParentActionGroupSignature }}'
            ActionGroupExecutor: null
            ApiSchema: null
            ActionGroupState: '{{ ActionGroupState }}'
            FunctionSchema:
              Functions:
                - Name: '{{ Name }}'
                  Description: '{{ Description }}'
                  Parameters: {}
                  RequireConfirmation: '{{ RequireConfirmation }}'
            SkipResourceInUseCheckOnDelete: '{{ SkipResourceInUseCheckOnDelete }}'
      - name: AgentName
        value: '{{ AgentName }}'
      - name: AgentResourceRoleArn
        value: '{{ AgentResourceRoleArn }}'
      - name: AutoPrepare
        value: '{{ AutoPrepare }}'
      - name: CustomOrchestration
        value:
          Executor:
            Lambda: '{{ Lambda }}'
      - name: CustomerEncryptionKeyArn
        value: '{{ CustomerEncryptionKeyArn }}'
      - name: SkipResourceInUseCheckOnDelete
        value: '{{ SkipResourceInUseCheckOnDelete }}'
      - name: Description
        value: '{{ Description }}'
      - name: FoundationModel
        value: '{{ FoundationModel }}'
      - name: GuardrailConfiguration
        value:
          GuardrailIdentifier: '{{ GuardrailIdentifier }}'
          GuardrailVersion: '{{ GuardrailVersion }}'
      - name: MemoryConfiguration
        value:
          EnabledMemoryTypes:
            - '{{ EnabledMemoryTypes[0] }}'
          StorageDays: null
          SessionSummaryConfiguration:
            MaxRecentSessions: null
      - name: IdleSessionTTLInSeconds
        value: null
      - name: AgentCollaboration
        value: '{{ AgentCollaboration }}'
      - name: Instruction
        value: '{{ Instruction }}'
      - name: KnowledgeBases
        value:
          - KnowledgeBaseId: '{{ KnowledgeBaseId }}'
            Description: '{{ Description }}'
            KnowledgeBaseState: '{{ KnowledgeBaseState }}'
      - name: AgentCollaborators
        value:
          - AgentDescriptor:
              AliasArn: '{{ AliasArn }}'
            CollaborationInstruction: '{{ CollaborationInstruction }}'
            CollaboratorName: '{{ CollaboratorName }}'
            RelayConversationHistory: '{{ RelayConversationHistory }}'
      - name: OrchestrationType
        value: '{{ OrchestrationType }}'
      - name: PromptOverrideConfiguration
        value:
          PromptConfigurations:
            - PromptType: '{{ PromptType }}'
              PromptCreationMode: '{{ PromptCreationMode }}'
              PromptState: '{{ PromptState }}'
              BasePromptTemplate: '{{ BasePromptTemplate }}'
              InferenceConfiguration:
                Temperature: null
                TopP: null
                TopK: null
                MaximumLength: null
                StopSequences:
                  - '{{ StopSequences[0] }}'
              ParserMode: null
              FoundationModel: null
              AdditionalModelRequestFields: {}
          OverrideLambda: '{{ OverrideLambda }}'
      - name: Tags
        value: {}
      - name: TestAliasTags
        value: null

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.bedrock.agents
WHERE data__Identifier = '<AgentId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>agents</code> resource, the following permissions are required:

### Create
```json
bedrock:CreateAgent,
bedrock:GetAgent,
bedrock:PrepareAgent,
bedrock:GetAgentKnowledgeBase,
bedrock:AssociateAgentKnowledgeBase,
bedrock:ListAgentKnowledgeBases,
bedrock:CreateAgentActionGroup,
bedrock:GetAgentActionGroup,
bedrock:ListAgentActionGroups,
bedrock:TagResource,
bedrock:ListTagsForResource,
bedrock:CreateGuardrail,
bedrock:CreateGuardrailVersion,
bedrock:GetGuardrail,
bedrock:AssociateAgentCollaborator,
bedrock:GetAgentCollaborator,
bedrock:ListAgentCollaborators,
iam:PassRole,
kms:GenerateDataKeyWithoutPlainText,
kms:ReEncryptFrom,
kms:ReEncryptTo,
kms:Decrypt,
kms:GenerateDataKey
```

### Read
```json
bedrock:GetAgent,
bedrock:GetAgentActionGroup,
bedrock:ListAgentActionGroups,
bedrock:GetAgentKnowledgeBase,
bedrock:ListAgentKnowledgeBases,
bedrock:ListTagsForResource,
bedrock:GetGuardrail,
bedrock:GetAgentCollaborator,
bedrock:ListAgentCollaborators,
kms:Decrypt,
kms:GenerateDataKey,
kms:Encrypt
```

### Update
```json
bedrock:GetAgent,
bedrock:UpdateAgent,
bedrock:PrepareAgent,
bedrock:GetAgentKnowledgeBase,
bedrock:UpdateAgentKnowledgeBase,
bedrock:AssociateAgentKnowledgeBase,
bedrock:DisassociateAgentKnowledgeBase,
bedrock:ListAgentKnowledgeBases,
bedrock:CreateAgentActionGroup,
bedrock:GetAgentActionGroup,
bedrock:UpdateAgentActionGroup,
bedrock:DeleteAgentActionGroup,
bedrock:ListAgentActionGroups,
bedrock:TagResource,
bedrock:UntagResource,
bedrock:ListTagsForResource,
bedrock:UpdateGuardrail,
bedrock:GetGuardrail,
bedrock:AssociateAgentCollaborator,
bedrock:GetAgentCollaborator,
bedrock:ListAgentCollaborators,
bedrock:DisassociateAgentCollaborator,
bedrock:UpdateAgentCollaborator,
kms:Decrypt,
kms:Encrypt,
kms:GenerateDataKey,
kms:GenerateDataKeyWithoutPlainText,
kms:ReEncryptFrom,
kms:ReEncryptTo,
iam:PassRole
```

### Delete
```json
bedrock:GetAgent,
bedrock:DeleteAgent,
bedrock:DeleteGuardrail,
bedrock:GetGuardrail,
kms:Decrypt,
kms:Encrypt,
kms:GenerateDataKey
```

### List
```json
bedrock:ListAgents,
bedrock:ListGuardrails
```
