---
title: scalable_targets
hide_title: false
hide_table_of_contents: false
keywords:
  - scalable_targets
  - applicationautoscaling
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

Creates, updates, deletes or gets a <code>scalable_target</code> resource or lists <code>scalable_targets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>scalable_targets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td><details><summary>The <code>AWS::ApplicationAutoScaling::ScalableTarget</code> resource specifies a resource that Application Auto Scaling can scale, such as an AWS::DynamoDB::Table or AWS::ECS::Service resource.</summary>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/getting-started.html">Getting started</a> in the <i>Application Auto Scaling User Guide</i>.<br />If the resource that you want Application Auto Scaling to scale is not yet created in your account, add a dependency on the resource when registering it as a scalable target using the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html">DependsOn</a> attribute.</details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.applicationautoscaling.scalable_targets" /></td></tr>
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
    "name": "scheduled_actions",
    "type": "array",
    "description": "The scheduled actions for the scalable target. Duplicates aren't allowed.",
    "children": [
      {
        "name": "timezone",
        "type": "string",
        "description": "The time zone used when referring to the date and time of a scheduled action, when the scheduled action uses an at or cron expression."
      },
      {
        "name": "scheduled_action_name",
        "type": "string",
        "description": "The name of the scheduled action. This name must be unique among all other scheduled actions on the specified scalable target."
      },
      {
        "name": "end_time",
        "type": "string",
        "description": "The date and time that the action is scheduled to end, in UTC."
      },
      {
        "name": "schedule",
        "type": "string",
        "description": "<details><summary>The schedule for this action. The following formats are supported:</summary>+  At expressions - \"<code>at(yyyy-mm-ddThh:mm:ss)</code>\"<br />+  Rate expressions - \"<code>rate(valueunit)</code>\"<br />+  Cron expressions - \"<code>cron(fields)</code>\"<br />At expressions are useful for one-time schedules. Cron expressions are useful for scheduled actions that run periodically at a specified date and time, and rate expressions are useful for scheduled actions that run at a regular interval.<br />At and cron expressions use Universal Coordinated Time (UTC) by default.<br />The cron format consists of six fields separated by white spaces: [Minutes] [Hours] [Day_of_Month] [Month] [Day_of_Week] [Year].<br />For rate expressions, <i>value</i> is a positive integer and <i>unit</i> is <code>minute</code> | <code>minutes</code> | <code>hour</code> | <code>hours</code> | <code>day</code> | <code>days</code>.</details>"
      },
      {
        "name": "start_time",
        "type": "string",
        "description": "The date and time that the action is scheduled to begin, in UTC."
      },
      {
        "name": "scalable_target_action",
        "type": "object",
        "description": "The new minimum and maximum capacity. You can set both values or just one. At the scheduled time, if the current capacity is below the minimum capacity, Application Auto Scaling scales out to the minimum capacity. If the current capacity is above the maximum capacity, Application Auto Scaling scales in to the maximum capacity.",
        "children": [
          {
            "name": "min_capacity",
            "type": "integer",
            "description": "The minimum capacity."
          },
          {
            "name": "max_capacity",
            "type": "integer",
            "description": "The maximum capacity."
          }
        ]
      }
    ]
  },
  {
    "name": "resource_id",
    "type": "string",
    "description": "<details><summary>The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier.</summary>+  ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/my-cluster/my-service</code>.<br />+  Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.<br />+  EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.<br />+  AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.<br />+  DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>table/my-table</code>.<br />+  DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name. Example: <code>table/my-table/index/my-table-index</code>.<br />+  Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.<br />+  SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.<br />+  Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our <a href=\"https://docs.aws.amazon.com/https://github.com/aws/aws-auto-scaling-custom-resource\">GitHub repository</a>.<br />+  Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.<br />+  Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.<br />+  Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>. Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.<br />+  Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>keyspace/mykeyspace/table/mytable</code>.<br />+  Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.<br />+  Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name. Example: <code>replication-group/mycluster</code>.<br />+  Amazon ElastiCache cache cluster - The resource type is <code>cache-cluster</code> and the unique identifier is the cache cluster name. Example: <code>cache-cluster/mycluster</code>.<br />+  Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.<br />+  SageMaker serverless endpoint - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.<br />+  SageMaker inference component - The resource type is <code>inference-component</code> and the unique identifier is the resource ID. Example: <code>inference-component/my-inference-component</code>.<br />+  Pool of WorkSpaces - The resource type is <code>workspacespool</code> and the unique identifier is the pool ID. Example: <code>workspacespool/wspool-123456</code>.</details>"
  },
  {
    "name": "service_namespace",
    "type": "string",
    "description": "The namespace of the AWS service that provides the resource, or a <code>custom-resource</code>."
  },
  {
    "name": "scalable_dimension",
    "type": "string",
    "description": "<details><summary>The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property.</summary>+  <code>ecs:service:DesiredCount</code> - The task count of an ECS service.<br />+  <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.<br />+  <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.<br />+  <code>appstream:fleet:DesiredCapacity</code> - The capacity of an AppStream 2.0 fleet.<br />+  <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.<br />+  <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.<br />+  <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.<br />+  <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.<br />+  <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.<br />+  <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.<br />+  <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.<br />+  <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.<br />+  <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.<br />+  <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.<br />+  <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.<br />+  <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.<br />+  <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.<br />+  <code>elasticache:cache-cluster:Nodes</code> - The number of nodes for an Amazon ElastiCache cache cluster.<br />+  <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.<br />+  <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.<br />+  <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.<br />+  <code>sagemaker:variant:DesiredProvisionedConcurrency</code> - The provisioned concurrency for a SageMaker serverless endpoint.<br />+  <code>sagemaker:inference-component:DesiredCopyCount</code> - The number of copies across an endpoint for a SageMaker inference component.<br />+  <code>workspaces:workspacespool:DesiredUserSessions</code> - The number of user sessions for the WorkSpaces in the pool.</details>"
  },
  {
    "name": "suspended_state",
    "type": "object",
    "description": "<details><summary>An embedded object that contains attributes and attribute values that are used to suspend and resume automatic scaling. Setting the value of an attribute to <code>true</code> suspends the specified scaling activities. Setting it to <code>false</code> (default) resumes the specified scaling activities.</summary><i>Suspension Outcomes</i><br />+  For <code>DynamicScalingInSuspended</code>, while a suspension is in effect, all scale-in activities that are triggered by a scaling policy are suspended.<br />+  For <code>DynamicScalingOutSuspended</code>, while a suspension is in effect, all scale-out activities that are triggered by a scaling policy are suspended.<br />+  For <code>ScheduledScalingSuspended</code>, while a suspension is in effect, all scaling activities that involve scheduled actions are suspended.</details>",
    "children": [
      {
        "name": "dynamic_scaling_out_suspended",
        "type": "boolean",
        "description": "Whether scale out by a target tracking scaling policy or a step scaling policy is suspended. Set the value to <code>true</code> if you don't want Application Auto Scaling to add capacity when a scaling policy is triggered. The default is <code>false</code>."
      },
      {
        "name": "scheduled_scaling_suspended",
        "type": "boolean",
        "description": "Whether scheduled scaling is suspended. Set the value to <code>true</code> if you don't want Application Auto Scaling to add or remove capacity by initiating scheduled actions. The default is <code>false</code>."
      },
      {
        "name": "dynamic_scaling_in_suspended",
        "type": "boolean",
        "description": "Whether scale in by a target tracking scaling policy or a step scaling policy is suspended. Set the value to <code>true</code> if you don't want Application Auto Scaling to remove capacity when a scaling policy is triggered. The default is <code>false</code>."
      }
    ]
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "min_capacity",
    "type": "integer",
    "description": "The minimum value that you plan to scale in to. When a scaling policy is in effect, Application Auto Scaling can scale in (contract) as needed to the minimum capacity limit in response to changing demand."
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "<details><summary>Specify the Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that allows Application Auto Scaling to modify the scalable target on your behalf. This can be either an IAM service role that Application Auto Scaling can assume to make calls to other AWS resources on your behalf, or a service-linked role for the specified service. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/application/userguide/security_iam_service-with-iam.html\">How Application Auto Scaling works with IAM</a> in the <i>Application Auto Scaling User Guide</i>.</summary>To automatically create a service-linked role (recommended), specify the full ARN of the service-linked role in your stack template. To find the exact ARN of the service-linked role for your AWS or custom resource, see the <a href=\"https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-service-linked-roles.html\">Service-linked roles</a> topic in the <i>Application Auto Scaling User Guide</i>. Look for the ARN in the table at the bottom of the page.</details>"
  },
  {
    "name": "max_capacity",
    "type": "integer",
    "description": "The maximum value that you plan to scale out to. When a scaling policy is in effect, Application Auto Scaling can scale out (expand) as needed to the maximum capacity limit in response to changing demand."
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
    "name": "resource_id",
    "type": "string",
    "description": "<details><summary>The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier.</summary>+  ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/my-cluster/my-service</code>.<br />+  Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.<br />+  EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.<br />+  AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.<br />+  DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>table/my-table</code>.<br />+  DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name. Example: <code>table/my-table/index/my-table-index</code>.<br />+  Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.<br />+  SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.<br />+  Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our <a href=\"https://docs.aws.amazon.com/https://github.com/aws/aws-auto-scaling-custom-resource\">GitHub repository</a>.<br />+  Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.<br />+  Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.<br />+  Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>. Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.<br />+  Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>keyspace/mykeyspace/table/mytable</code>.<br />+  Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.<br />+  Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name. Example: <code>replication-group/mycluster</code>.<br />+  Amazon ElastiCache cache cluster - The resource type is <code>cache-cluster</code> and the unique identifier is the cache cluster name. Example: <code>cache-cluster/mycluster</code>.<br />+  Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.<br />+  SageMaker serverless endpoint - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.<br />+  SageMaker inference component - The resource type is <code>inference-component</code> and the unique identifier is the resource ID. Example: <code>inference-component/my-inference-component</code>.<br />+  Pool of WorkSpaces - The resource type is <code>workspacespool</code> and the unique identifier is the pool ID. Example: <code>workspacespool/wspool-123456</code>.</details>"
  },
  {
    "name": "service_namespace",
    "type": "string",
    "description": "The namespace of the AWS service that provides the resource, or a <code>custom-resource</code>."
  },
  {
    "name": "scalable_dimension",
    "type": "string",
    "description": "<details><summary>The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property.</summary>+  <code>ecs:service:DesiredCount</code> - The task count of an ECS service.<br />+  <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.<br />+  <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.<br />+  <code>appstream:fleet:DesiredCapacity</code> - The capacity of an AppStream 2.0 fleet.<br />+  <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.<br />+  <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.<br />+  <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.<br />+  <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.<br />+  <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.<br />+  <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.<br />+  <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.<br />+  <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.<br />+  <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.<br />+  <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.<br />+  <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.<br />+  <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.<br />+  <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.<br />+  <code>elasticache:cache-cluster:Nodes</code> - The number of nodes for an Amazon ElastiCache cache cluster.<br />+  <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.<br />+  <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.<br />+  <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.<br />+  <code>sagemaker:variant:DesiredProvisionedConcurrency</code> - The provisioned concurrency for a SageMaker serverless endpoint.<br />+  <code>sagemaker:inference-component:DesiredCopyCount</code> - The number of copies across an endpoint for a SageMaker inference component.<br />+  <code>workspaces:workspacespool:DesiredUserSessions</code> - The number of user sessions for the WorkSpaces in the pool.</details>"
  },
  {
    "name": "id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalabletarget.html"><code>AWS::ApplicationAutoScaling::ScalableTarget</code></a>.

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
    <td><code>scalable_targets</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ResourceId, ServiceNamespace, ScalableDimension, MinCapacity, MaxCapacity, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>scalable_targets</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>scalable_targets</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>scalable_targets_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>scalable_targets</code></td>
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

Gets all properties from an individual <code>scalable_target</code>.
```sql
SELECT
  region,
  scheduled_actions,
  resource_id,
  service_namespace,
  scalable_dimension,
  suspended_state,
  id,
  min_capacity,
  role_arn,
  max_capacity
FROM awscc.applicationautoscaling.scalable_targets
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ resource_id }}|{{ scalable_dimension }}|{{ service_namespace }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>scalable_targets</code> in a region.
```sql
SELECT
  region,
  resource_id,
  scalable_dimension,
  service_namespace
FROM awscc.applicationautoscaling.scalable_targets_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>scalable_target</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.applicationautoscaling.scalable_targets (
  ResourceId,
  ServiceNamespace,
  ScalableDimension,
  MinCapacity,
  MaxCapacity,
  region
)
SELECT
  '{{ resource_id }}',
  '{{ service_namespace }}',
  '{{ scalable_dimension }}',
  '{{ min_capacity }}',
  '{{ max_capacity }}',
  '{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.applicationautoscaling.scalable_targets (
  ScheduledActions,
  ResourceId,
  ServiceNamespace,
  ScalableDimension,
  SuspendedState,
  MinCapacity,
  RoleARN,
  MaxCapacity,
  region
)
SELECT
  '{{ scheduled_actions }}',
  '{{ resource_id }}',
  '{{ service_namespace }}',
  '{{ scalable_dimension }}',
  '{{ suspended_state }}',
  '{{ min_capacity }}',
  '{{ role_arn }}',
  '{{ max_capacity }}',
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
  - name: scalable_target
    props:
      - name: scheduled_actions
        value:
          - timezone: '{{ timezone }}'
            scheduled_action_name: '{{ scheduled_action_name }}'
            end_time: '{{ end_time }}'
            schedule: '{{ schedule }}'
            start_time: '{{ start_time }}'
            scalable_target_action:
              min_capacity: '{{ min_capacity }}'
              max_capacity: '{{ max_capacity }}'
      - name: resource_id
        value: '{{ resource_id }}'
      - name: service_namespace
        value: '{{ service_namespace }}'
      - name: scalable_dimension
        value: '{{ scalable_dimension }}'
      - name: suspended_state
        value:
          dynamic_scaling_out_suspended: '{{ dynamic_scaling_out_suspended }}'
          scheduled_scaling_suspended: '{{ scheduled_scaling_suspended }}'
          dynamic_scaling_in_suspended: '{{ dynamic_scaling_in_suspended }}'
      - name: min_capacity
        value: '{{ min_capacity }}'
      - name: role_arn
        value: '{{ role_arn }}'
      - name: max_capacity
        value: '{{ max_capacity }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>scalable_target</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.applicationautoscaling.scalable_targets
SET PatchDocument = string('{{ {
    "ScheduledActions": scheduled_actions,
    "SuspendedState": suspended_state,
    "MinCapacity": min_capacity,
    "RoleARN": role_arn,
    "MaxCapacity": max_capacity
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ resource_id }}|{{ scalable_dimension }}|{{ service_namespace }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.applicationautoscaling.scalable_targets
WHERE
  Identifier = '{{ resource_id }}|{{ scalable_dimension }}|{{ service_namespace }}' AND
  region = '{{ region }}';
```

## Permissions

To operate on the <code>scalable_targets</code> resource, the following permissions are required:

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
application-autoscaling:DescribeScalableTargets,
application-autoscaling:DescribeScheduledActions
```

</TabItem>
<TabItem value="create">

```json
application-autoscaling:DescribeScalableTargets,
application-autoscaling:RegisterScalableTarget,
application-autoscaling:DescribeScheduledActions,
application-autoscaling:PutScheduledAction,
iam:PassRole,
iam:CreateServiceLinkedRole,
cloudwatch:PutMetricAlarm,
cloudwatch:DeleteAlarms,
cloudwatch:DescribeAlarms,
lambda:GetProvisionedConcurrencyConfig,
lambda:PutProvisionedConcurrencyConfig,
lambda:DeleteProvisionedConcurrencyConfig
```

</TabItem>
<TabItem value="update">

```json
application-autoscaling:RegisterScalableTarget,
application-autoscaling:DescribeScalableTargets,
application-autoscaling:DescribeScheduledActions,
application-autoscaling:DeleteScheduledAction,
application-autoscaling:PutScheduledAction,
cloudwatch:PutMetricAlarm,
cloudwatch:DeleteAlarms,
cloudwatch:DescribeAlarms,
lambda:GetProvisionedConcurrencyConfig,
lambda:PutProvisionedConcurrencyConfig,
lambda:DeleteProvisionedConcurrencyConfig
```

</TabItem>
<TabItem value="list">

```json
application-autoscaling:DescribeScalableTargets
```

</TabItem>
<TabItem value="delete">

```json
application-autoscaling:DeregisterScalableTarget
```

</TabItem>
</Tabs>