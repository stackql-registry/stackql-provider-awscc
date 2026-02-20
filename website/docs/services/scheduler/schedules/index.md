---
title: schedules
hide_title: false
hide_table_of_contents: false
keywords:
  - schedules
  - scheduler
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

Creates, updates, deletes or gets a <code>schedule</code> resource or lists <code>schedules</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>schedules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Scheduler::Schedule Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.scheduler.schedules" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the schedule."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the schedule."
  },
  {
    "name": "end_date",
    "type": "string",
    "description": "The date, in UTC, before which the schedule can invoke its target. Depending on the schedule's recurrence expression, invocations might stop on, or before, the EndDate you specify."
  },
  {
    "name": "flexible_time_window",
    "type": "object",
    "description": "Flexible time window allows configuration of a window within which a schedule can be invoked",
    "children": [
      {
        "name": "mode",
        "type": "string",
        "description": "Determines whether the schedule is executed within a flexible time window."
      },
      {
        "name": "maximum_window_in_minutes",
        "type": "number",
        "description": "The maximum time window during which a schedule can be invoked."
      }
    ]
  },
  {
    "name": "group_name",
    "type": "string",
    "description": "The name of the schedule group to associate with this schedule. If you omit this, the default schedule group is used."
  },
  {
    "name": "kms_key_arn",
    "type": "string",
    "description": "The ARN for a KMS Key that will be used to encrypt customer data."
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "schedule_expression",
    "type": "string",
    "description": "The scheduling expression."
  },
  {
    "name": "schedule_expression_timezone",
    "type": "string",
    "description": "The timezone in which the scheduling expression is evaluated."
  },
  {
    "name": "start_date",
    "type": "string",
    "description": "The date, in UTC, after which the schedule can begin invoking its target. Depending on the schedule's recurrence expression, invocations might occur on, or after, the StartDate you specify."
  },
  {
    "name": "state",
    "type": "string",
    "description": "Specifies whether the schedule is enabled or disabled."
  },
  {
    "name": "target",
    "type": "object",
    "description": "The schedule target.",
    "children": [
      {
        "name": "arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the target."
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the IAM role to be used for this target when the schedule is triggered."
      },
      {
        "name": "dead_letter_config",
        "type": "object",
        "description": "A DeadLetterConfig object that contains information about a dead-letter queue configuration.",
        "children": [
          {
            "name": "arn",
            "type": "string",
            "description": "The ARN of the SQS queue specified as the target for the dead-letter queue."
          }
        ]
      },
      {
        "name": "retry_policy",
        "type": "object",
        "description": "A RetryPolicy object that includes information about the retry policy settings.",
        "children": [
          {
            "name": "maximum_event_age_in_seconds",
            "type": "number",
            "description": "The maximum amount of time, in seconds, to continue to make retry attempts."
          },
          {
            "name": "maximum_retry_attempts",
            "type": "number",
            "description": "The maximum number of retry attempts to make before the request fails. Retry attempts with exponential backoff continue until either the maximum number of attempts is made or until the duration of the MaximumEventAgeInSeconds is reached."
          }
        ]
      },
      {
        "name": "input",
        "type": "string",
        "description": "The text, or well-formed JSON, passed to the target. If you are configuring a templated Lambda, AWS Step Functions, or Amazon EventBridge target, the input must be a well-formed JSON. For all other target types, a JSON is not required. If you do not specify anything for this field, EventBridge Scheduler delivers a default notification to the target."
      },
      {
        "name": "ecs_parameters",
        "type": "object",
        "description": "The custom parameters to be used when the target is an Amazon ECS task.",
        "children": [
          {
            "name": "task_definition_arn",
            "type": "string",
            "description": "The ARN of the task definition to use if the event target is an Amazon ECS task."
          },
          {
            "name": "task_count",
            "type": "number",
            "description": "The number of tasks to create based on TaskDefinition. The default is 1."
          },
          {
            "name": "launch_type",
            "type": "string",
            "description": "Specifies the launch type on which your task is running. The launch type that you specify here must match one of the launch type (compatibilities) of the target task. The FARGATE value is supported only in the Regions where AWS Fargate with Amazon ECS is supported. For more information, see AWS Fargate on Amazon ECS in the Amazon Elastic Container Service Developer Guide."
          },
          {
            "name": "network_configuration",
            "type": "object",
            "description": "This structure specifies the network configuration for an ECS task.",
            "children": [
              {
                "name": "awsvpc_configuration",
                "type": "object",
                "description": "This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the awsvpc network mode."
              }
            ]
          },
          {
            "name": "platform_version",
            "type": "string",
            "description": "Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as 1.1.0."
          },
          {
            "name": "group",
            "type": "string",
            "description": "Specifies an ECS task group for the task. The maximum length is 255 characters."
          },
          {
            "name": "capacity_provider_strategy",
            "type": "array",
            "description": "The capacity provider strategy to use for the task.",
            "children": [
              {
                "name": "capacity_provider",
                "type": "string",
                "description": "The short name of the capacity provider."
              },
              {
                "name": "weight",
                "type": "number",
                "description": "The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The weight value is taken into consideration after the base value, if defined, is satisfied."
              },
              {
                "name": "base",
                "type": "number",
                "description": "The base value designates how many tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined. If no value is specified, the default value of 0 is used."
              }
            ]
          },
          {
            "name": "enable_ecs_managed_tags",
            "type": "boolean",
            "description": "Specifies whether to enable Amazon ECS managed tags for the task. For more information, see Tagging Your Amazon ECS Resources in the Amazon Elastic Container Service Developer Guide."
          },
          {
            "name": "enable_execute_command",
            "type": "boolean",
            "description": "Whether or not to enable the execute command functionality for the containers in this task. If true, this enables execute command functionality on all containers in the task."
          },
          {
            "name": "placement_constraints",
            "type": "array",
            "description": "An array of placement constraint objects to use for the task. You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime).",
            "children": [
              {
                "name": "type",
                "type": "string",
                "description": "The type of constraint. Use distinctInstance to ensure that each task in a particular group is running on a different container instance. Use memberOf to restrict the selection to a group of valid candidates."
              },
              {
                "name": "expression",
                "type": "string",
                "description": "A cluster query language expression to apply to the constraint. You cannot specify an expression if the constraint type is distinctInstance. To learn more, see Cluster Query Language in the Amazon Elastic Container Service Developer Guide."
              }
            ]
          },
          {
            "name": "placement_strategy",
            "type": "array",
            "description": "The placement strategy objects to use for the task. You can specify a maximum of five strategy rules per task.",
            "children": [
              {
                "name": "type",
                "type": "string",
                "description": "The type of placement strategy. The random placement strategy randomly places tasks on available candidates. The spread placement strategy spreads placement across available candidates evenly based on the field parameter. The binpack strategy places tasks on available candidates that have the least available amount of the resource that is specified with the field parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory (but still enough to run the task)."
              },
              {
                "name": "field",
                "type": "string",
                "description": "The field to apply the placement strategy against. For the spread placement strategy, valid values are instanceId (or host, which has the same effect), or any platform or custom attribute that is applied to a container instance, such as attribute:ecs.availability-zone. For the binpack placement strategy, valid values are cpu and memory. For the random placement strategy, this field is not used."
              }
            ]
          },
          {
            "name": "propagate_tags",
            "type": "string",
            "description": "Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags are not propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the TagResource API action."
          },
          {
            "name": "reference_id",
            "type": "string",
            "description": "The reference ID to use for the task."
          },
          {
            "name": "tags",
            "type": "array",
            "description": "The metadata that you apply to the task to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. To learn more, see RunTask in the Amazon ECS API Reference."
          }
        ]
      },
      {
        "name": "event_bridge_parameters",
        "type": "object",
        "description": "EventBridge PutEvent predefined target type.",
        "children": [
          {
            "name": "detail_type",
            "type": "string",
            "description": "Free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail."
          },
          {
            "name": "source",
            "type": "string",
            "description": "The source of the event."
          }
        ]
      },
      {
        "name": "kinesis_parameters",
        "type": "object",
        "description": "The custom parameter you can use to control the shard to which EventBridge Scheduler sends the event.",
        "children": [
          {
            "name": "partition_key",
            "type": "string",
            "description": "The custom parameter used as the Kinesis partition key. For more information, see Amazon Kinesis Streams Key Concepts in the Amazon Kinesis Streams Developer Guide."
          }
        ]
      },
      {
        "name": "sage_maker_pipeline_parameters",
        "type": "object",
        "description": "These are custom parameters to use when the target is a SageMaker Model Building Pipeline that starts based on AWS EventBridge Scheduler schedules.",
        "children": [
          {
            "name": "pipeline_parameter_list",
            "type": "array",
            "description": "List of Parameter names and values for SageMaker Model Building Pipeline execution.",
            "children": [
              {
                "name": "name",
                "type": "string",
                "description": "Name of parameter to start execution of a SageMaker Model Building Pipeline."
              },
              {
                "name": "value",
                "type": "string",
                "description": "Value of parameter to start execution of a SageMaker Model Building Pipeline."
              }
            ]
          }
        ]
      },
      {
        "name": "sqs_parameters",
        "type": "object",
        "description": "Contains the message group ID to use when the target is a FIFO queue. If you specify an SQS FIFO queue as a target, the queue must have content-based deduplication enabled.",
        "children": [
          {
            "name": "message_group_id",
            "type": "string",
            "description": "The FIFO message group ID to use as the target."
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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedule.html"><code>AWS::Scheduler::Schedule</code></a>.

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
    <td><code>schedules</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="FlexibleTimeWindow, ScheduleExpression, Target, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>schedules</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>schedules</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>schedules_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>schedules</code></td>
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

Gets all properties from an individual <code>schedule</code>.
```sql
SELECT
region,
arn,
description,
end_date,
flexible_time_window,
group_name,
kms_key_arn,
name,
schedule_expression,
schedule_expression_timezone,
start_date,
state,
target
FROM awscc.scheduler.schedules
WHERE region = 'us-east-1' AND Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>schedules</code> in a region.
```sql
SELECT
region,
name
FROM awscc.scheduler.schedules_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>schedule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.scheduler.schedules (
 FlexibleTimeWindow,
 ScheduleExpression,
 Target,
 region
)
SELECT 
'{{ FlexibleTimeWindow }}',
 '{{ ScheduleExpression }}',
 '{{ Target }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.scheduler.schedules (
 Description,
 EndDate,
 FlexibleTimeWindow,
 GroupName,
 KmsKeyArn,
 Name,
 ScheduleExpression,
 ScheduleExpressionTimezone,
 StartDate,
 State,
 Target,
 region
)
SELECT 
 '{{ Description }}',
 '{{ EndDate }}',
 '{{ FlexibleTimeWindow }}',
 '{{ GroupName }}',
 '{{ KmsKeyArn }}',
 '{{ Name }}',
 '{{ ScheduleExpression }}',
 '{{ ScheduleExpressionTimezone }}',
 '{{ StartDate }}',
 '{{ State }}',
 '{{ Target }}',
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
  - name: schedule
    props:
      - name: Description
        value: '{{ Description }}'
      - name: EndDate
        value: '{{ EndDate }}'
      - name: FlexibleTimeWindow
        value:
          Mode: '{{ Mode }}'
          MaximumWindowInMinutes: null
      - name: GroupName
        value: '{{ GroupName }}'
      - name: KmsKeyArn
        value: '{{ KmsKeyArn }}'
      - name: Name
        value: '{{ Name }}'
      - name: ScheduleExpression
        value: '{{ ScheduleExpression }}'
      - name: ScheduleExpressionTimezone
        value: '{{ ScheduleExpressionTimezone }}'
      - name: StartDate
        value: '{{ StartDate }}'
      - name: State
        value: '{{ State }}'
      - name: Target
        value:
          Arn: '{{ Arn }}'
          RoleArn: '{{ RoleArn }}'
          DeadLetterConfig:
            Arn: '{{ Arn }}'
          RetryPolicy:
            MaximumEventAgeInSeconds: null
            MaximumRetryAttempts: null
          Input: '{{ Input }}'
          EcsParameters:
            TaskDefinitionArn: '{{ TaskDefinitionArn }}'
            TaskCount: null
            LaunchType: '{{ LaunchType }}'
            NetworkConfiguration:
              AwsvpcConfiguration:
                Subnets:
                  - '{{ Subnets[0] }}'
                SecurityGroups:
                  - '{{ SecurityGroups[0] }}'
                AssignPublicIp: '{{ AssignPublicIp }}'
            PlatformVersion: '{{ PlatformVersion }}'
            Group: '{{ Group }}'
            CapacityProviderStrategy:
              - CapacityProvider: '{{ CapacityProvider }}'
                Weight: null
                Base: null
            EnableECSManagedTags: '{{ EnableECSManagedTags }}'
            EnableExecuteCommand: '{{ EnableExecuteCommand }}'
            PlacementConstraints:
              - Type: '{{ Type }}'
                Expression: '{{ Expression }}'
            PlacementStrategy:
              - Type: '{{ Type }}'
                Field: '{{ Field }}'
            PropagateTags: '{{ PropagateTags }}'
            ReferenceId: '{{ ReferenceId }}'
            Tags:
              - {}
          EventBridgeParameters:
            DetailType: '{{ DetailType }}'
            Source: '{{ Source }}'
          KinesisParameters:
            PartitionKey: '{{ PartitionKey }}'
          SageMakerPipelineParameters:
            PipelineParameterList:
              - Name: '{{ Name }}'
                Value: '{{ Value }}'
          SqsParameters:
            MessageGroupId: '{{ MessageGroupId }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>schedule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.scheduler.schedules
SET PatchDocument = string('{{ {
    "Description": description,
    "EndDate": end_date,
    "FlexibleTimeWindow": flexible_time_window,
    "GroupName": group_name,
    "KmsKeyArn": kms_key_arn,
    "ScheduleExpression": schedule_expression,
    "ScheduleExpressionTimezone": schedule_expression_timezone,
    "StartDate": start_date,
    "State": state,
    "Target": target
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.scheduler.schedules
WHERE Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>schedules</code> resource, the following permissions are required:

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
scheduler:CreateSchedule,
scheduler:GetSchedule,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
scheduler:GetSchedule
```

</TabItem>
<TabItem value="update">

```json
scheduler:UpdateSchedule,
scheduler:GetSchedule,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
scheduler:DeleteSchedule,
scheduler:GetSchedule
```

</TabItem>
<TabItem value="list">

```json
scheduler:ListSchedules
```

</TabItem>
</Tabs>