---
title: rules
hide_title: false
hide_table_of_contents: false
keywords:
  - rules
  - events
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

Creates, updates, deletes or gets a <code>rule</code> resource or lists <code>rules</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>rules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Events::Rule</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.events.rules" /></td></tr>
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
    "name": "event_bus_name",
    "type": "string",
    "description": "The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is used."
  },
  {
    "name": "event_pattern",
    "type": "object",
    "description": "The event pattern of the rule. For more information, see Events and Event Patterns in the Amazon EventBridge User Guide."
  },
  {
    "name": "schedule_expression",
    "type": "string",
    "description": "The scheduling expression. For example, \"cron(0 20 &#42; &#42; ? &#42;)\", \"rate(5 minutes)\". For more information, see Creating an Amazon EventBridge rule that runs on a schedule."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the rule."
  },
  {
    "name": "state",
    "type": "string",
    "description": "The state of the rule."
  },
  {
    "name": "targets",
    "type": "array",
    "description": "Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule.<br />Targets are the resources that are invoked when a rule is triggered.",
    "children": [
      {
        "name": "input_path",
        "type": "string",
        "description": ""
      },
      {
        "name": "http_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "path_parameter_values",
            "type": "array",
            "description": ""
          },
          {
            "name": "header_parameters",
            "type": "object",
            "description": ""
          },
          {
            "name": "query_string_parameters",
            "type": "object",
            "description": ""
          }
        ]
      },
      {
        "name": "dead_letter_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "run_command_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "run_command_targets",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "values",
                "type": "array",
                "description": ""
              },
              {
                "name": "key",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "input_transformer",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "input_paths_map",
            "type": "object",
            "description": ""
          },
          {
            "name": "input_template",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "kinesis_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "partition_key_path",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "redshift_data_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "statement_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "sqls",
            "type": "array",
            "description": ""
          },
          {
            "name": "database",
            "type": "string",
            "description": ""
          },
          {
            "name": "secret_manager_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "db_user",
            "type": "string",
            "description": ""
          },
          {
            "name": "sql",
            "type": "string",
            "description": ""
          },
          {
            "name": "with_event",
            "type": "boolean",
            "description": ""
          }
        ]
      },
      {
        "name": "app_sync_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "graph_ql_operation",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "input",
        "type": "string",
        "description": ""
      },
      {
        "name": "sqs_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "message_group_id",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "ecs_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "platform_version",
            "type": "string",
            "description": ""
          },
          {
            "name": "group",
            "type": "string",
            "description": ""
          },
          {
            "name": "enable_ecs_managed_tags",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "enable_execute_command",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "placement_constraints",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "type",
                "type": "string",
                "description": ""
              },
              {
                "name": "expression",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "propagate_tags",
            "type": "string",
            "description": ""
          },
          {
            "name": "task_count",
            "type": "integer",
            "description": ""
          },
          {
            "name": "placement_strategies",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "field",
                "type": "string",
                "description": ""
              },
              {
                "name": "type",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "capacity_provider_strategy",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "capacity_provider",
                "type": "string",
                "description": ""
              },
              {
                "name": "base",
                "type": "integer",
                "description": ""
              },
              {
                "name": "weight",
                "type": "integer",
                "description": ""
              }
            ]
          },
          {
            "name": "launch_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "reference_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "tag_list",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "value",
                "type": "string",
                "description": ""
              },
              {
                "name": "key",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "network_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "aws_vpc_configuration",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "task_definition_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "batch_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "array_properties",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "size",
                "type": "integer",
                "description": ""
              }
            ]
          },
          {
            "name": "job_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "retry_strategy",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "attempts",
                "type": "integer",
                "description": ""
              }
            ]
          },
          {
            "name": "job_definition",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "id",
        "type": "string",
        "description": ""
      },
      {
        "name": "arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "sage_maker_pipeline_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "pipeline_parameter_list",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "value",
                "type": "string",
                "description": ""
              },
              {
                "name": "name",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "retry_policy",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "maximum_retry_attempts",
            "type": "integer",
            "description": ""
          },
          {
            "name": "maximum_event_age_in_seconds",
            "type": "integer",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The ARN of the rule, such as arn:aws:events:us-east-2:123456789012:rule/example."
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the role that is used for target invocation."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Any tags assigned to the event rule.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": ""
      },
      {
        "name": "key",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the rule."
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
    "name": "arn",
    "type": "string",
    "description": "The ARN of the rule, such as arn:aws:events:us-east-2:123456789012:rule/example."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-rule.html"><code>AWS::Events::Rule</code></a>.

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
    <td><code>rules</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>rules</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>rules</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>rules_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>rules</code></td>
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

Gets all properties from an individual <code>rule</code>.
```sql
SELECT
region,
event_bus_name,
event_pattern,
schedule_expression,
description,
state,
targets,
arn,
role_arn,
tags,
name
FROM awscc.events.rules
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>rules</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.events.rules_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>rule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.events.rules (
 EventBusName,
 EventPattern,
 ScheduleExpression,
 Description,
 State,
 Targets,
 RoleArn,
 Tags,
 Name,
 region
)
SELECT
'{{ event_bus_name }}',
 '{{ event_pattern }}',
 '{{ schedule_expression }}',
 '{{ description }}',
 '{{ state }}',
 '{{ targets }}',
 '{{ role_arn }}',
 '{{ tags }}',
 '{{ name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.events.rules (
 EventBusName,
 EventPattern,
 ScheduleExpression,
 Description,
 State,
 Targets,
 RoleArn,
 Tags,
 Name,
 region
)
SELECT
 '{{ event_bus_name }}',
 '{{ event_pattern }}',
 '{{ schedule_expression }}',
 '{{ description }}',
 '{{ state }}',
 '{{ targets }}',
 '{{ role_arn }}',
 '{{ tags }}',
 '{{ name }}',
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
  - name: rule
    props:
      - name: event_bus_name
        value: '{{ event_bus_name }}'
      - name: event_pattern
        value: {}
      - name: schedule_expression
        value: '{{ schedule_expression }}'
      - name: description
        value: '{{ description }}'
      - name: state
        value: '{{ state }}'
      - name: targets
        value:
          - input_path: '{{ input_path }}'
            http_parameters:
              path_parameter_values:
                - '{{ path_parameter_values[0] }}'
              header_parameters: {}
              query_string_parameters: {}
            dead_letter_config:
              arn: '{{ arn }}'
            run_command_parameters:
              run_command_targets:
                - values:
                    - '{{ values[0] }}'
                  key: '{{ key }}'
            input_transformer:
              input_paths_map: {}
              input_template: '{{ input_template }}'
            kinesis_parameters:
              partition_key_path: '{{ partition_key_path }}'
            role_arn: '{{ role_arn }}'
            redshift_data_parameters:
              statement_name: '{{ statement_name }}'
              sqls:
                - '{{ sqls[0] }}'
              database: '{{ database }}'
              secret_manager_arn: '{{ secret_manager_arn }}'
              db_user: '{{ db_user }}'
              sql: '{{ sql }}'
              with_event: '{{ with_event }}'
            app_sync_parameters:
              graph_ql_operation: '{{ graph_ql_operation }}'
            input: '{{ input }}'
            sqs_parameters:
              message_group_id: '{{ message_group_id }}'
            ecs_parameters:
              platform_version: '{{ platform_version }}'
              group: '{{ group }}'
              enable_ecs_managed_tags: '{{ enable_ecs_managed_tags }}'
              enable_execute_command: '{{ enable_execute_command }}'
              placement_constraints:
                - type: '{{ type }}'
                  expression: '{{ expression }}'
              propagate_tags: '{{ propagate_tags }}'
              task_count: '{{ task_count }}'
              placement_strategies:
                - field: '{{ field }}'
                  type: '{{ type }}'
              capacity_provider_strategy:
                - capacity_provider: '{{ capacity_provider }}'
                  base: '{{ base }}'
                  weight: '{{ weight }}'
              launch_type: '{{ launch_type }}'
              reference_id: '{{ reference_id }}'
              tag_list:
                - value: '{{ value }}'
                  key: '{{ key }}'
              network_configuration:
                aws_vpc_configuration:
                  security_groups:
                    - '{{ security_groups[0] }}'
                  subnets:
                    - '{{ subnets[0] }}'
                  assign_public_ip: '{{ assign_public_ip }}'
              task_definition_arn: '{{ task_definition_arn }}'
            batch_parameters:
              array_properties:
                size: '{{ size }}'
              job_name: '{{ job_name }}'
              retry_strategy:
                attempts: '{{ attempts }}'
              job_definition: '{{ job_definition }}'
            id: '{{ id }}'
            arn: '{{ arn }}'
            sage_maker_pipeline_parameters:
              pipeline_parameter_list:
                - value: '{{ value }}'
                  name: '{{ name }}'
            retry_policy:
              maximum_retry_attempts: '{{ maximum_retry_attempts }}'
              maximum_event_age_in_seconds: '{{ maximum_event_age_in_seconds }}'
      - name: role_arn
        value: '{{ role_arn }}'
      - name: tags
        value:
          - null
      - name: name
        value: '{{ name }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>rule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.events.rules
SET PatchDocument = string('{{ {
    "EventBusName": event_bus_name,
    "EventPattern": event_pattern,
    "ScheduleExpression": schedule_expression,
    "Description": description,
    "State": state,
    "Targets": targets,
    "RoleArn": role_arn,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.events.rules
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>rules</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="read">

```json
iam:PassRole,
events:DescribeRule,
events:ListTargetsByRule,
events:ListTagsForResource
```

</TabItem>
<TabItem value="create">

```json
iam:PassRole,
events:DescribeRule,
events:PutRule,
events:PutTargets,
events:TagResource
```

</TabItem>
<TabItem value="update">

```json
iam:PassRole,
events:DescribeRule,
events:PutRule,
events:RemoveTargets,
events:PutTargets,
events:UntagResource,
events:TagResource
```

</TabItem>
<TabItem value="list">

```json
events:ListRules
```

</TabItem>
<TabItem value="delete">

```json
iam:PassRole,
events:DescribeRule,
events:DeleteRule,
events:RemoveTargets,
events:ListTargetsByRule
```

</TabItem>
</Tabs>