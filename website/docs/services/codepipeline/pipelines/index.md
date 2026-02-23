---
title: pipelines
hide_title: false
hide_table_of_contents: false
keywords:
  - pipelines
  - codepipeline
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

Creates, updates, deletes or gets a <code>pipeline</code> resource or lists <code>pipelines</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>pipelines</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::CodePipeline::Pipeline resource creates a CodePipeline pipeline that describes how software changes go through a release process.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.codepipeline.pipelines" /></td></tr>
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
    "name": "artifact_stores",
    "type": "array",
    "description": "A mapping of artifactStore objects and their corresponding AWS Regions. There must be an artifact store for the pipeline Region and for each cross-region action in the pipeline.",
    "children": [
      {
        "name": "artifact_store",
        "type": "object",
        "description": "The S3 bucket where artifacts for the pipeline are stored.",
        "children": [
          {
            "name": "type",
            "type": "string",
            "description": "The type of the artifact store, such as S3."
          },
          {
            "name": "encryption_key",
            "type": "object",
            "description": "Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key",
            "children": [
              {
                "name": "type",
                "type": "string",
                "description": "The type of encryption key, such as an AWS KMS key. When creating or updating a pipeline, the value must be set to 'KMS'."
              },
              {
                "name": "id",
                "type": "string",
                "description": "The ID used to identify the key. For an AWS KMS key, you can use the key ID, the key ARN, or the alias ARN."
              }
            ]
          },
          {
            "name": "location",
            "type": "string",
            "description": "The S3 bucket used for storing the artifacts for a pipeline. You can specify the name of an S3 bucket but not a folder in the bucket. A folder to contain the pipeline artifacts is created for you based on the name of the pipeline. You can use any S3 bucket in the same AWS Region as the pipeline to store your pipeline artifacts."
          }
        ]
      },
      {
        "name": "region",
        "type": "string",
        "description": "The action declaration's AWS Region, such as us-east-1."
      }
    ]
  },
  {
    "name": "disable_inbound_stage_transitions",
    "type": "array",
    "description": "Represents the input of a DisableStageTransition action.",
    "children": [
      {
        "name": "stage_name",
        "type": "string",
        "description": "The name of the stage where you want to disable the inbound or outbound transition of artifacts."
      },
      {
        "name": "reason",
        "type": "string",
        "description": "The reason given to the user that a stage is disabled, such as waiting for manual approval or manual tests. This message is displayed in the pipeline console UI."
      }
    ]
  },
  {
    "name": "stages",
    "type": "array",
    "description": "Represents information about a stage and its definition.",
    "children": [
      {
        "name": "blockers",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": "Reserved for future use."
          },
          {
            "name": "type",
            "type": "string",
            "description": "Reserved for future use."
          }
        ]
      },
      {
        "name": "actions",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "action_type_id",
            "type": "object",
            "description": "Represents information about an action type.",
            "children": [
              {
                "name": "owner",
                "type": "string",
                "description": "The creator of the action being called. There are three valid values for the Owner field in the action category section within your pipeline structure: AWS, ThirdParty, and Custom."
              },
              {
                "name": "category",
                "type": "string",
                "description": "A category defines what kind of action can be taken in the stage, and constrains the provider type for the action. Valid categories are limited to one of the values below."
              },
              {
                "name": "version",
                "type": "string",
                "description": "A string that describes the action version."
              },
              {
                "name": "provider",
                "type": "string",
                "description": "The provider of the service being called by the action. Valid providers are determined by the action category. For example, an action in the Deploy category type might have a provider of CodeDeploy, which would be specified as CodeDeploy."
              }
            ]
          },
          {
            "name": "configuration",
            "type": "object",
            "description": "The action's configuration. These are key-value pairs that specify input values for an action."
          },
          {
            "name": "input_artifacts",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "name",
                "type": "string",
                "description": "The name of the artifact to be worked on (for example, \"My App\")."
              }
            ]
          },
          {
            "name": "output_artifacts",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "name",
                "type": "string",
                "description": "The name of the output of an artifact, such as \"My App\"."
              },
              {
                "name": "files",
                "type": "array",
                "description": "The files that you want to associate with the output artifact that will be exported from the compute action."
              }
            ]
          },
          {
            "name": "commands",
            "type": "array",
            "description": "The shell commands to run with your compute action in CodePipeline."
          },
          {
            "name": "output_variables",
            "type": "array",
            "description": "The list of variables that are to be exported from the compute action."
          },
          {
            "name": "environment_variables",
            "type": "array",
            "description": "The list of environment variables that are input to a compute based action.",
            "children": [
              {
                "name": "name",
                "type": "string",
                "description": "The name of the environment variable."
              },
              {
                "name": "value",
                "type": "string",
                "description": "The value of the environment variable."
              },
              {
                "name": "type",
                "type": "string",
                "description": "The type of the environment variable."
              }
            ]
          },
          {
            "name": "region",
            "type": "string",
            "description": "The action declaration's AWS Region, such as us-east-1."
          },
          {
            "name": "namespace",
            "type": "string",
            "description": "The variable namespace associated with the action. All variables produced as output by this action fall under this namespace."
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": "The ARN of the IAM service role that performs the declared action. This is assumed through the roleArn for the pipeline."
          },
          {
            "name": "run_order",
            "type": "integer",
            "description": "The order in which actions are run."
          },
          {
            "name": "name",
            "type": "string",
            "description": "The action declaration's name."
          },
          {
            "name": "timeout_in_minutes",
            "type": "integer",
            "description": "A timeout duration in minutes that can be applied against the ActionType’s default timeout value specified in Quotas for AWS CodePipeline. This attribute is available only to the manual approval ActionType."
          }
        ]
      },
      {
        "name": "name",
        "type": "string",
        "description": "The name of the stage."
      },
      {
        "name": "on_failure",
        "type": "object",
        "description": "The method to use when a stage has not completed successfully",
        "children": [
          {
            "name": "result",
            "type": "string",
            "description": "The specified result for when the failure conditions are met, such as rolling back the stage"
          },
          {
            "name": "retry_configuration",
            "type": "object",
            "description": "The configuration that specifies the retry configuration for a stage",
            "children": [
              {
                "name": "retry_mode",
                "type": "string",
                "description": "The specified retry mode type for the given stage. FAILED&#95;ACTIONS will retry only the failed actions. ALL&#95;ACTIONS will retry both failed and successful"
              }
            ]
          },
          {
            "name": "conditions",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "result",
                "type": "string",
                "description": "The specified result for when the failure conditions are met, such as rolling back the stage"
              },
              {
                "name": "rules",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "on_success",
        "type": "object",
        "description": "The method to use when a stage has completed successfully",
        "children": [
          {
            "name": "conditions",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "result",
                "type": "string",
                "description": "The specified result for when the failure conditions are met, such as rolling back the stage"
              },
              {
                "name": "rules",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "before_entry",
        "type": "object",
        "description": "The method to use before stage runs.",
        "children": [
          {
            "name": "conditions",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "result",
                "type": "string",
                "description": "The specified result for when the failure conditions are met, such as rolling back the stage"
              },
              {
                "name": "rules",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "execution_mode",
    "type": "string",
    "description": "The method that the pipeline will use to handle multiple executions. The default mode is SUPERSEDED."
  },
  {
    "name": "restart_execution_on_update",
    "type": "boolean",
    "description": "Indicates whether to rerun the CodePipeline pipeline after you update it."
  },
  {
    "name": "triggers",
    "type": "array",
    "description": "The trigger configuration specifying a type of event, such as Git tags, that starts the pipeline.",
    "children": [
      {
        "name": "git_configuration",
        "type": "object",
        "description": "A type of trigger configuration for Git-based source actions.",
        "children": [
          {
            "name": "push",
            "type": "array",
            "description": "The field where the repository event that will start the pipeline, such as pushing Git tags, is specified with details.",
            "children": [
              {
                "name": "file_paths",
                "type": "object",
                "description": "The Git repository file paths specified as filter criteria to start the pipeline."
              },
              {
                "name": "branches",
                "type": "object",
                "description": "The Git repository branches specified as filter criteria to start the pipeline."
              },
              {
                "name": "tags",
                "type": "object",
                "description": "The Git tags specified as filter criteria for whether a Git tag repository event will start the pipeline."
              }
            ]
          },
          {
            "name": "source_action_name",
            "type": "string",
            "description": "The name of the pipeline source action where the trigger configuration, such as Git tags, is specified. The trigger configuration will start the pipeline upon the specified change only."
          },
          {
            "name": "pull_request",
            "type": "array",
            "description": "The field where the repository event that will start the pipeline is specified as pull requests.",
            "children": [
              {
                "name": "file_paths",
                "type": "object",
                "description": "The Git repository file paths specified as filter criteria to start the pipeline."
              },
              {
                "name": "events",
                "type": "array",
                "description": "The field that specifies which pull request events to filter on (opened, updated, closed) for the trigger configuration."
              },
              {
                "name": "branches",
                "type": "object",
                "description": "The Git repository branches specified as filter criteria to start the pipeline."
              }
            ]
          }
        ]
      },
      {
        "name": "provider_type",
        "type": "string",
        "description": "The source provider for the event, such as connections configured for a repository with Git tags, for the specified trigger configuration."
      }
    ]
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for CodePipeline to use to either perform actions with no actionRoleArn, or to use to assume roles for actions with an actionRoleArn"
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the pipeline."
  },
  {
    "name": "variables",
    "type": "array",
    "description": "A list that defines the pipeline variables for a pipeline resource. Variable names can have alphanumeric and underscore characters, and the values must match &#91;A-Za-z0-9@\\-&#95;&#93;+.",
    "children": [
      {
        "name": "default_value",
        "type": "string",
        "description": "The value of a pipeline-level variable."
      },
      {
        "name": "description",
        "type": "string",
        "description": "The description of a pipeline-level variable. It's used to add additional context about the variable, and not being used at time when pipeline executes."
      },
      {
        "name": "name",
        "type": "string",
        "description": "The name of a pipeline-level variable."
      }
    ]
  },
  {
    "name": "version",
    "type": "string",
    "description": "The version of the pipeline."
  },
  {
    "name": "artifact_store",
    "type": "object",
    "description": "The S3 bucket where artifacts for the pipeline are stored.",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": "The type of the artifact store, such as S3."
      },
      {
        "name": "encryption_key",
        "type": "object",
        "description": "Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key",
        "children": [
          {
            "name": "type",
            "type": "string",
            "description": "The type of encryption key, such as an AWS KMS key. When creating or updating a pipeline, the value must be set to 'KMS'."
          },
          {
            "name": "id",
            "type": "string",
            "description": "The ID used to identify the key. For an AWS KMS key, you can use the key ID, the key ARN, or the alias ARN."
          }
        ]
      },
      {
        "name": "location",
        "type": "string",
        "description": "The S3 bucket used for storing the artifacts for a pipeline. You can specify the name of an S3 bucket but not a folder in the bucket. A folder to contain the pipeline artifacts is created for you based on the name of the pipeline. You can use any S3 bucket in the same AWS Region as the pipeline to store your pipeline artifacts."
      }
    ]
  },
  {
    "name": "pipeline_type",
    "type": "string",
    "description": "CodePipeline provides the following pipeline types, which differ in characteristics and price, so that you can tailor your pipeline features and cost to the needs of your applications."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Specifies the tags applied to the pipeline.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The tag's value."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The tag's key."
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
    "name": "name",
    "type": "string",
    "description": "The name of the pipeline."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html"><code>AWS::CodePipeline::Pipeline</code></a>.

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
    <td><code>pipelines</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Stages, RoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>pipelines</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>pipelines</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>pipelines_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>pipelines</code></td>
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

Gets all properties from an individual <code>pipeline</code>.
```sql
SELECT
region,
artifact_stores,
disable_inbound_stage_transitions,
stages,
execution_mode,
restart_execution_on_update,
triggers,
role_arn,
name,
variables,
version,
artifact_store,
pipeline_type,
tags
FROM awscc.codepipeline.pipelines
WHERE region = 'us-east-1' AND Identifier = '{{ name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>pipelines</code> in a region.
```sql
SELECT
region,
name
FROM awscc.codepipeline.pipelines_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>pipeline</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.codepipeline.pipelines (
 Stages,
 RoleArn,
 region
)
SELECT
'{{ stages }}',
 '{{ role_arn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.codepipeline.pipelines (
 ArtifactStores,
 DisableInboundStageTransitions,
 Stages,
 ExecutionMode,
 RestartExecutionOnUpdate,
 Triggers,
 RoleArn,
 Name,
 Variables,
 ArtifactStore,
 PipelineType,
 Tags,
 region
)
SELECT
 '{{ artifact_stores }}',
 '{{ disable_inbound_stage_transitions }}',
 '{{ stages }}',
 '{{ execution_mode }}',
 '{{ restart_execution_on_update }}',
 '{{ triggers }}',
 '{{ role_arn }}',
 '{{ name }}',
 '{{ variables }}',
 '{{ artifact_store }}',
 '{{ pipeline_type }}',
 '{{ tags }}',
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
  - name: pipeline
    props:
      - name: artifact_stores
        value:
          - artifact_store:
              type: '{{ type }}'
              encryption_key:
                type: '{{ type }}'
                id: '{{ id }}'
              location: '{{ location }}'
            region: '{{ region }}'
      - name: disable_inbound_stage_transitions
        value:
          - stage_name: '{{ stage_name }}'
            reason: '{{ reason }}'
      - name: stages
        value:
          - blockers:
              - name: '{{ name }}'
                type: '{{ type }}'
            actions:
              - action_type_id:
                  owner: '{{ owner }}'
                  category: '{{ category }}'
                  version: '{{ version }}'
                  provider: '{{ provider }}'
                configuration: {}
                input_artifacts:
                  - name: '{{ name }}'
                output_artifacts:
                  - name: '{{ name }}'
                    files:
                      - '{{ files[0] }}'
                commands:
                  - '{{ commands[0] }}'
                output_variables:
                  - '{{ output_variables[0] }}'
                environment_variables:
                  - name: '{{ name }}'
                    value: '{{ value }}'
                    type: '{{ type }}'
                region: '{{ region }}'
                namespace: '{{ namespace }}'
                role_arn: '{{ role_arn }}'
                run_order: '{{ run_order }}'
                name: '{{ name }}'
                timeout_in_minutes: '{{ timeout_in_minutes }}'
            name: '{{ name }}'
            on_failure:
              result: '{{ result }}'
              retry_configuration:
                retry_mode: '{{ retry_mode }}'
              conditions:
                - result: '{{ result }}'
                  rules:
                    - rule_type_id:
                        owner: '{{ owner }}'
                        category: '{{ category }}'
                        version: '{{ version }}'
                        provider: '{{ provider }}'
                      configuration: {}
                      commands:
                        - '{{ commands[0] }}'
                      input_artifacts:
                        - null
                      region: '{{ region }}'
                      role_arn: '{{ role_arn }}'
                      name: '{{ name }}'
            on_success:
              conditions:
                - null
            before_entry:
              conditions:
                - null
      - name: execution_mode
        value: '{{ execution_mode }}'
      - name: restart_execution_on_update
        value: '{{ restart_execution_on_update }}'
      - name: triggers
        value:
          - git_configuration:
              push:
                - file_paths:
                    includes:
                      - '{{ includes[0] }}'
                    excludes:
                      - '{{ excludes[0] }}'
                  branches:
                    includes:
                      - '{{ includes[0] }}'
                    excludes:
                      - '{{ excludes[0] }}'
                  tags:
                    includes:
                      - '{{ includes[0] }}'
                    excludes:
                      - '{{ excludes[0] }}'
              source_action_name: '{{ source_action_name }}'
              pull_request:
                - file_paths: null
                  events:
                    - '{{ events[0] }}'
                  branches: null
            provider_type: '{{ provider_type }}'
      - name: role_arn
        value: '{{ role_arn }}'
      - name: name
        value: '{{ name }}'
      - name: variables
        value:
          - default_value: '{{ default_value }}'
            description: '{{ description }}'
            name: '{{ name }}'
      - name: artifact_store
        value: null
      - name: pipeline_type
        value: '{{ pipeline_type }}'
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>pipeline</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.codepipeline.pipelines
SET PatchDocument = string('{{ {
    "ArtifactStores": artifact_stores,
    "DisableInboundStageTransitions": disable_inbound_stage_transitions,
    "Stages": stages,
    "ExecutionMode": execution_mode,
    "RestartExecutionOnUpdate": restart_execution_on_update,
    "Triggers": triggers,
    "RoleArn": role_arn,
    "Variables": variables,
    "ArtifactStore": artifact_store,
    "PipelineType": pipeline_type,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.codepipeline.pipelines
WHERE Identifier = '{{ name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>pipelines</code> resource, the following permissions are required:

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
iam:GetRole,
iam:PassRole,
codepipeline:GetPipeline,
codepipeline:CreatePipeline,
codepipeline:DisableStageTransition,
codepipeline:GetPipelineState,
codepipeline:TagResource,
codestar-connections:PassConnection
```

</TabItem>
<TabItem value="read">

```json
codepipeline:GetPipeline,
codepipeline:ListTagsForResource,
codepipeline:GetPipelineState
```

</TabItem>
<TabItem value="update">

```json
iam:GetRole,
iam:PassRole,
codepipeline:EnableStageTransition,
codepipeline:StartPipelineExecution,
codepipeline:GetPipeline,
codepipeline:UpdatePipeline,
codepipeline:GetPipelineState,
codepipeline:DisableStageTransition,
codepipeline:TagResource,
codepipeline:UntagResource,
codestar-connections:PassConnection
```

</TabItem>
<TabItem value="delete">

```json
codepipeline:GetPipeline,
codepipeline:DeletePipeline
```

</TabItem>
<TabItem value="list">

```json
codepipeline:ListPipelines
```

</TabItem>
</Tabs>