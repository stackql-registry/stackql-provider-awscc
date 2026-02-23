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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "agent_id",
    "type": "string",
    "description": "Identifier for a resource."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html"><code>AWS::Bedrock::Agent</code></a>.

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
    <td><code>agents</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AgentName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>agents</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>agents</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>agents_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>agents</code></td>
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
WHERE region = 'us-east-1' AND Identifier = '{{ agent_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>agents</code> in a region.
```sql
SELECT
region,
agent_id
FROM awscc.bedrock.agents_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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
'{{ agent_name }}',
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
 '{{ action_groups }}',
 '{{ agent_name }}',
 '{{ agent_resource_role_arn }}',
 '{{ auto_prepare }}',
 '{{ custom_orchestration }}',
 '{{ customer_encryption_key_arn }}',
 '{{ skip_resource_in_use_check_on_delete }}',
 '{{ description }}',
 '{{ foundation_model }}',
 '{{ guardrail_configuration }}',
 '{{ memory_configuration }}',
 '{{ idle_session_ttl_in_seconds }}',
 '{{ agent_collaboration }}',
 '{{ instruction }}',
 '{{ knowledge_bases }}',
 '{{ agent_collaborators }}',
 '{{ orchestration_type }}',
 '{{ prompt_override_configuration }}',
 '{{ tags }}',
 '{{ test_alias_tags }}',
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
      - name: action_groups
        value:
          - action_group_name: '{{ action_group_name }}'
            description: '{{ description }}'
            parent_action_group_signature: '{{ parent_action_group_signature }}'
            action_group_executor: null
            api_schema: null
            action_group_state: '{{ action_group_state }}'
            function_schema:
              functions:
                - name: '{{ name }}'
                  description: '{{ description }}'
                  parameters: {}
                  require_confirmation: '{{ require_confirmation }}'
            skip_resource_in_use_check_on_delete: '{{ skip_resource_in_use_check_on_delete }}'
      - name: agent_name
        value: '{{ agent_name }}'
      - name: agent_resource_role_arn
        value: '{{ agent_resource_role_arn }}'
      - name: auto_prepare
        value: '{{ auto_prepare }}'
      - name: custom_orchestration
        value:
          executor:
            lambda: '{{ lambda }}'
      - name: customer_encryption_key_arn
        value: '{{ customer_encryption_key_arn }}'
      - name: skip_resource_in_use_check_on_delete
        value: '{{ skip_resource_in_use_check_on_delete }}'
      - name: description
        value: '{{ description }}'
      - name: foundation_model
        value: '{{ foundation_model }}'
      - name: guardrail_configuration
        value:
          guardrail_identifier: '{{ guardrail_identifier }}'
          guardrail_version: '{{ guardrail_version }}'
      - name: memory_configuration
        value:
          enabled_memory_types:
            - '{{ enabled_memory_types[0] }}'
          storage_days: null
          session_summary_configuration:
            max_recent_sessions: null
      - name: idle_session_ttl_in_seconds
        value: null
      - name: agent_collaboration
        value: '{{ agent_collaboration }}'
      - name: instruction
        value: '{{ instruction }}'
      - name: knowledge_bases
        value:
          - knowledge_base_id: '{{ knowledge_base_id }}'
            description: '{{ description }}'
            knowledge_base_state: '{{ knowledge_base_state }}'
      - name: agent_collaborators
        value:
          - agent_descriptor:
              alias_arn: '{{ alias_arn }}'
            collaboration_instruction: '{{ collaboration_instruction }}'
            collaborator_name: '{{ collaborator_name }}'
            relay_conversation_history: '{{ relay_conversation_history }}'
      - name: orchestration_type
        value: '{{ orchestration_type }}'
      - name: prompt_override_configuration
        value:
          prompt_configurations:
            - prompt_type: '{{ prompt_type }}'
              prompt_creation_mode: '{{ prompt_creation_mode }}'
              prompt_state: '{{ prompt_state }}'
              base_prompt_template: '{{ base_prompt_template }}'
              inference_configuration:
                temperature: null
                top_p: null
                top_k: null
                maximum_length: null
                stop_sequences:
                  - '{{ stop_sequences[0] }}'
              parser_mode: null
              foundation_model: null
              additional_model_request_fields: {}
          override_lambda: '{{ override_lambda }}'
      - name: tags
        value: {}
      - name: test_alias_tags
        value: null
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>agent</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.bedrock.agents
SET PatchDocument = string('{{ {
    "ActionGroups": action_groups,
    "AgentName": agent_name,
    "AgentResourceRoleArn": agent_resource_role_arn,
    "AutoPrepare": auto_prepare,
    "CustomOrchestration": custom_orchestration,
    "CustomerEncryptionKeyArn": customer_encryption_key_arn,
    "SkipResourceInUseCheckOnDelete": skip_resource_in_use_check_on_delete,
    "Description": description,
    "FoundationModel": foundation_model,
    "GuardrailConfiguration": guardrail_configuration,
    "MemoryConfiguration": memory_configuration,
    "IdleSessionTTLInSeconds": idle_session_ttl_in_seconds,
    "AgentCollaboration": agent_collaboration,
    "Instruction": instruction,
    "KnowledgeBases": knowledge_bases,
    "AgentCollaborators": agent_collaborators,
    "OrchestrationType": orchestration_type,
    "PromptOverrideConfiguration": prompt_override_configuration,
    "Tags": tags,
    "TestAliasTags": test_alias_tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ agent_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.bedrock.agents
WHERE Identifier = '{{ agent_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>agents</code> resource, the following permissions are required:

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

</TabItem>
<TabItem value="read">

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

</TabItem>
<TabItem value="update">

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

</TabItem>
<TabItem value="delete">

```json
bedrock:GetAgent,
bedrock:DeleteAgent,
bedrock:DeleteGuardrail,
bedrock:GetGuardrail,
kms:Decrypt,
kms:Encrypt,
kms:GenerateDataKey
```

</TabItem>
<TabItem value="list">

```json
bedrock:ListAgents,
bedrock:ListGuardrails
```

</TabItem>
</Tabs>