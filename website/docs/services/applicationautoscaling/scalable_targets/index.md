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
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApplicationAutoScaling::ScalableTarget&#96;&#96; resource specifies a resource that Application Auto Scaling can scale, such as an AWS::DynamoDB::Table or AWS::ECS::Service resource.<br />For more information, see &#91;Getting started&#93;(https://docs.aws.amazon.com/autoscaling/application/userguide/getting-started.html) in the &#42;Application Auto Scaling User Guide&#42;.<br />If the resource that you want Application Auto Scaling to scale is not yet created in your account, add a dependency on the resource when registering it as a scalable target using the &#91;DependsOn&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) attribute.</td></tr>
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
        "description": "The schedule for this action. The following formats are supported:<br />+ At expressions - \"&#96;&#96;at(yyyy-mm-ddThh:mm:ss)&#96;&#96;\"<br />+ Rate expressions - \"&#96;&#96;rate(valueunit)&#96;&#96;\"<br />+ Cron expressions - \"&#96;&#96;cron(fields)&#96;&#96;\"<br /><br />At expressions are useful for one-time schedules. Cron expressions are useful for scheduled actions that run periodically at a specified date and time, and rate expressions are useful for scheduled actions that run at a regular interval.<br />At and cron expressions use Universal Coordinated Time (UTC) by default.<br />The cron format consists of six fields separated by white spaces: &#91;Minutes&#93; &#91;Hours&#93; &#91;Day&#95;of&#95;Month&#93; &#91;Month&#93; &#91;Day&#95;of&#95;Week&#93; &#91;Year&#93;.<br />For rate expressions, &#42;value&#42; is a positive integer and &#42;unit&#42; is &#96;&#96;minute&#96;&#96; &#124; &#96;&#96;minutes&#96;&#96; &#124; &#96;&#96;hour&#96;&#96; &#124; &#96;&#96;hours&#96;&#96; &#124; &#96;&#96;day&#96;&#96; &#124; &#96;&#96;days&#96;&#96;."
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
    "description": "The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier.<br />+ ECS service - The resource type is &#96;&#96;service&#96;&#96; and the unique identifier is the cluster name and service name. Example: &#96;&#96;service/my-cluster/my-service&#96;&#96;.<br />+ Spot Fleet - The resource type is &#96;&#96;spot-fleet-request&#96;&#96; and the unique identifier is the Spot Fleet request ID. Example: &#96;&#96;spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE&#96;&#96;.<br />+ EMR cluster - The resource type is &#96;&#96;instancegroup&#96;&#96; and the unique identifier is the cluster ID and instance group ID. Example: &#96;&#96;instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0&#96;&#96;.<br />+ AppStream 2.0 fleet - The resource type is &#96;&#96;fleet&#96;&#96; and the unique identifier is the fleet name. Example: &#96;&#96;fleet/sample-fleet&#96;&#96;.<br />+ DynamoDB table - The resource type is &#96;&#96;table&#96;&#96; and the unique identifier is the table name. Example: &#96;&#96;table/my-table&#96;&#96;.<br />+ DynamoDB global secondary index - The resource type is &#96;&#96;index&#96;&#96; and the unique identifier is the index name. Example: &#96;&#96;table/my-table/index/my-table-index&#96;&#96;.<br />+ Aurora DB cluster - The resource type is &#96;&#96;cluster&#96;&#96; and the unique identifier is the cluster name. Example: &#96;&#96;cluster:my-db-cluster&#96;&#96;.<br />+ SageMaker endpoint variant - The resource type is &#96;&#96;variant&#96;&#96; and the unique identifier is the resource ID. Example: &#96;&#96;endpoint/my-end-point/variant/KMeansClustering&#96;&#96;.<br />+ Custom resources are not supported with a resource type. This parameter must specify the &#96;&#96;OutputValue&#96;&#96; from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our &#91;GitHub repository&#93;(https://docs.aws.amazon.com/https://github.com/aws/aws-auto-scaling-custom-resource).<br />+ Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: &#96;&#96;arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE&#96;&#96;.<br />+ Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: &#96;&#96;arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE&#96;&#96;.<br />+ Lambda provisioned concurrency - The resource type is &#96;&#96;function&#96;&#96; and the unique identifier is the function name with a function version or alias name suffix that is not &#96;&#96;$LATEST&#96;&#96;. Example: &#96;&#96;function:my-function:prod&#96;&#96; or &#96;&#96;function:my-function:1&#96;&#96;.<br />+ Amazon Keyspaces table - The resource type is &#96;&#96;table&#96;&#96; and the unique identifier is the table name. Example: &#96;&#96;keyspace/mykeyspace/table/mytable&#96;&#96;.<br />+ Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: &#96;&#96;arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5&#96;&#96;.<br />+ Amazon ElastiCache replication group - The resource type is &#96;&#96;replication-group&#96;&#96; and the unique identifier is the replication group name. Example: &#96;&#96;replication-group/mycluster&#96;&#96;.<br />+ Amazon ElastiCache cache cluster - The resource type is &#96;&#96;cache-cluster&#96;&#96; and the unique identifier is the cache cluster name. Example: &#96;&#96;cache-cluster/mycluster&#96;&#96;.<br />+ Neptune cluster - The resource type is &#96;&#96;cluster&#96;&#96; and the unique identifier is the cluster name. Example: &#96;&#96;cluster:mycluster&#96;&#96;.<br />+ SageMaker serverless endpoint - The resource type is &#96;&#96;variant&#96;&#96; and the unique identifier is the resource ID. Example: &#96;&#96;endpoint/my-end-point/variant/KMeansClustering&#96;&#96;.<br />+ SageMaker inference component - The resource type is &#96;&#96;inference-component&#96;&#96; and the unique identifier is the resource ID. Example: &#96;&#96;inference-component/my-inference-component&#96;&#96;.<br />+ Pool of WorkSpaces - The resource type is &#96;&#96;workspacespool&#96;&#96; and the unique identifier is the pool ID. Example: &#96;&#96;workspacespool/wspool-123456&#96;&#96;."
  },
  {
    "name": "service_namespace",
    "type": "string",
    "description": "The namespace of the AWS service that provides the resource, or a &#96;&#96;custom-resource&#96;&#96;."
  },
  {
    "name": "scalable_dimension",
    "type": "string",
    "description": "The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property.<br />+ &#96;&#96;ecs:service:DesiredCount&#96;&#96; - The task count of an ECS service.<br />+ &#96;&#96;elasticmapreduce:instancegroup:InstanceCount&#96;&#96; - The instance count of an EMR Instance Group.<br />+ &#96;&#96;ec2:spot-fleet-request:TargetCapacity&#96;&#96; - The target capacity of a Spot Fleet.<br />+ &#96;&#96;appstream:fleet:DesiredCapacity&#96;&#96; - The capacity of an AppStream 2.0 fleet.<br />+ &#96;&#96;dynamodb:table:ReadCapacityUnits&#96;&#96; - The provisioned read capacity for a DynamoDB table.<br />+ &#96;&#96;dynamodb:table:WriteCapacityUnits&#96;&#96; - The provisioned write capacity for a DynamoDB table.<br />+ &#96;&#96;dynamodb:index:ReadCapacityUnits&#96;&#96; - The provisioned read capacity for a DynamoDB global secondary index.<br />+ &#96;&#96;dynamodb:index:WriteCapacityUnits&#96;&#96; - The provisioned write capacity for a DynamoDB global secondary index.<br />+ &#96;&#96;rds:cluster:ReadReplicaCount&#96;&#96; - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.<br />+ &#96;&#96;sagemaker:variant:DesiredInstanceCount&#96;&#96; - The number of EC2 instances for a SageMaker model endpoint variant.<br />+ &#96;&#96;custom-resource:ResourceType:Property&#96;&#96; - The scalable dimension for a custom resource provided by your own application or service.<br />+ &#96;&#96;comprehend:document-classifier-endpoint:DesiredInferenceUnits&#96;&#96; - The number of inference units for an Amazon Comprehend document classification endpoint.<br />+ &#96;&#96;comprehend:entity-recognizer-endpoint:DesiredInferenceUnits&#96;&#96; - The number of inference units for an Amazon Comprehend entity recognizer endpoint.<br />+ &#96;&#96;lambda:function:ProvisionedConcurrency&#96;&#96; - The provisioned concurrency for a Lambda function.<br />+ &#96;&#96;cassandra:table:ReadCapacityUnits&#96;&#96; - The provisioned read capacity for an Amazon Keyspaces table.<br />+ &#96;&#96;cassandra:table:WriteCapacityUnits&#96;&#96; - The provisioned write capacity for an Amazon Keyspaces table.<br />+ &#96;&#96;kafka:broker-storage:VolumeSize&#96;&#96; - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.<br />+ &#96;&#96;elasticache:cache-cluster:Nodes&#96;&#96; - The number of nodes for an Amazon ElastiCache cache cluster.<br />+ &#96;&#96;elasticache:replication-group:NodeGroups&#96;&#96; - The number of node groups for an Amazon ElastiCache replication group.<br />+ &#96;&#96;elasticache:replication-group:Replicas&#96;&#96; - The number of replicas per node group for an Amazon ElastiCache replication group.<br />+ &#96;&#96;neptune:cluster:ReadReplicaCount&#96;&#96; - The count of read replicas in an Amazon Neptune DB cluster.<br />+ &#96;&#96;sagemaker:variant:DesiredProvisionedConcurrency&#96;&#96; - The provisioned concurrency for a SageMaker serverless endpoint.<br />+ &#96;&#96;sagemaker:inference-component:DesiredCopyCount&#96;&#96; - The number of copies across an endpoint for a SageMaker inference component.<br />+ &#96;&#96;workspaces:workspacespool:DesiredUserSessions&#96;&#96; - The number of user sessions for the WorkSpaces in the pool."
  },
  {
    "name": "suspended_state",
    "type": "object",
    "description": "An embedded object that contains attributes and attribute values that are used to suspend and resume automatic scaling. Setting the value of an attribute to &#96;&#96;true&#96;&#96; suspends the specified scaling activities. Setting it to &#96;&#96;false&#96;&#96; (default) resumes the specified scaling activities. <br />&#42;Suspension Outcomes&#42; <br />+ For &#96;&#96;DynamicScalingInSuspended&#96;&#96;, while a suspension is in effect, all scale-in activities that are triggered by a scaling policy are suspended.<br />+ For &#96;&#96;DynamicScalingOutSuspended&#96;&#96;, while a suspension is in effect, all scale-out activities that are triggered by a scaling policy are suspended.<br />+ For &#96;&#96;ScheduledScalingSuspended&#96;&#96;, while a suspension is in effect, all scaling activities that involve scheduled actions are suspended.",
    "children": [
      {
        "name": "dynamic_scaling_out_suspended",
        "type": "boolean",
        "description": "Whether scale out by a target tracking scaling policy or a step scaling policy is suspended. Set the value to &#96;&#96;true&#96;&#96; if you don't want Application Auto Scaling to add capacity when a scaling policy is triggered. The default is &#96;&#96;false&#96;&#96;."
      },
      {
        "name": "scheduled_scaling_suspended",
        "type": "boolean",
        "description": "Whether scheduled scaling is suspended. Set the value to &#96;&#96;true&#96;&#96; if you don't want Application Auto Scaling to add or remove capacity by initiating scheduled actions. The default is &#96;&#96;false&#96;&#96;."
      },
      {
        "name": "dynamic_scaling_in_suspended",
        "type": "boolean",
        "description": "Whether scale in by a target tracking scaling policy or a step scaling policy is suspended. Set the value to &#96;&#96;true&#96;&#96; if you don't want Application Auto Scaling to remove capacity when a scaling policy is triggered. The default is &#96;&#96;false&#96;&#96;."
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
    "description": "Specify the Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that allows Application Auto Scaling to modify the scalable target on your behalf. This can be either an IAM service role that Application Auto Scaling can assume to make calls to other AWS resources on your behalf, or a service-linked role for the specified service. For more information, see &#91;How Application Auto Scaling works with IAM&#93;(https://docs.aws.amazon.com/autoscaling/application/userguide/security&#95;iam&#95;service-with-iam.html) in the &#42;Application Auto Scaling User Guide&#42;.<br />To automatically create a service-linked role (recommended), specify the full ARN of the service-linked role in your stack template. To find the exact ARN of the service-linked role for your AWS or custom resource, see the &#91;Service-linked roles&#93;(https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-service-linked-roles.html) topic in the &#42;Application Auto Scaling User Guide&#42;. Look for the ARN in the table at the bottom of the page."
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
    "description": "The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier.<br />+ ECS service - The resource type is &#96;&#96;service&#96;&#96; and the unique identifier is the cluster name and service name. Example: &#96;&#96;service/my-cluster/my-service&#96;&#96;.<br />+ Spot Fleet - The resource type is &#96;&#96;spot-fleet-request&#96;&#96; and the unique identifier is the Spot Fleet request ID. Example: &#96;&#96;spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE&#96;&#96;.<br />+ EMR cluster - The resource type is &#96;&#96;instancegroup&#96;&#96; and the unique identifier is the cluster ID and instance group ID. Example: &#96;&#96;instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0&#96;&#96;.<br />+ AppStream 2.0 fleet - The resource type is &#96;&#96;fleet&#96;&#96; and the unique identifier is the fleet name. Example: &#96;&#96;fleet/sample-fleet&#96;&#96;.<br />+ DynamoDB table - The resource type is &#96;&#96;table&#96;&#96; and the unique identifier is the table name. Example: &#96;&#96;table/my-table&#96;&#96;.<br />+ DynamoDB global secondary index - The resource type is &#96;&#96;index&#96;&#96; and the unique identifier is the index name. Example: &#96;&#96;table/my-table/index/my-table-index&#96;&#96;.<br />+ Aurora DB cluster - The resource type is &#96;&#96;cluster&#96;&#96; and the unique identifier is the cluster name. Example: &#96;&#96;cluster:my-db-cluster&#96;&#96;.<br />+ SageMaker endpoint variant - The resource type is &#96;&#96;variant&#96;&#96; and the unique identifier is the resource ID. Example: &#96;&#96;endpoint/my-end-point/variant/KMeansClustering&#96;&#96;.<br />+ Custom resources are not supported with a resource type. This parameter must specify the &#96;&#96;OutputValue&#96;&#96; from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our &#91;GitHub repository&#93;(https://docs.aws.amazon.com/https://github.com/aws/aws-auto-scaling-custom-resource).<br />+ Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: &#96;&#96;arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE&#96;&#96;.<br />+ Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: &#96;&#96;arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE&#96;&#96;.<br />+ Lambda provisioned concurrency - The resource type is &#96;&#96;function&#96;&#96; and the unique identifier is the function name with a function version or alias name suffix that is not &#96;&#96;$LATEST&#96;&#96;. Example: &#96;&#96;function:my-function:prod&#96;&#96; or &#96;&#96;function:my-function:1&#96;&#96;.<br />+ Amazon Keyspaces table - The resource type is &#96;&#96;table&#96;&#96; and the unique identifier is the table name. Example: &#96;&#96;keyspace/mykeyspace/table/mytable&#96;&#96;.<br />+ Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: &#96;&#96;arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5&#96;&#96;.<br />+ Amazon ElastiCache replication group - The resource type is &#96;&#96;replication-group&#96;&#96; and the unique identifier is the replication group name. Example: &#96;&#96;replication-group/mycluster&#96;&#96;.<br />+ Amazon ElastiCache cache cluster - The resource type is &#96;&#96;cache-cluster&#96;&#96; and the unique identifier is the cache cluster name. Example: &#96;&#96;cache-cluster/mycluster&#96;&#96;.<br />+ Neptune cluster - The resource type is &#96;&#96;cluster&#96;&#96; and the unique identifier is the cluster name. Example: &#96;&#96;cluster:mycluster&#96;&#96;.<br />+ SageMaker serverless endpoint - The resource type is &#96;&#96;variant&#96;&#96; and the unique identifier is the resource ID. Example: &#96;&#96;endpoint/my-end-point/variant/KMeansClustering&#96;&#96;.<br />+ SageMaker inference component - The resource type is &#96;&#96;inference-component&#96;&#96; and the unique identifier is the resource ID. Example: &#96;&#96;inference-component/my-inference-component&#96;&#96;.<br />+ Pool of WorkSpaces - The resource type is &#96;&#96;workspacespool&#96;&#96; and the unique identifier is the pool ID. Example: &#96;&#96;workspacespool/wspool-123456&#96;&#96;."
  },
  {
    "name": "service_namespace",
    "type": "string",
    "description": "The namespace of the AWS service that provides the resource, or a &#96;&#96;custom-resource&#96;&#96;."
  },
  {
    "name": "scalable_dimension",
    "type": "string",
    "description": "The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property.<br />+ &#96;&#96;ecs:service:DesiredCount&#96;&#96; - The task count of an ECS service.<br />+ &#96;&#96;elasticmapreduce:instancegroup:InstanceCount&#96;&#96; - The instance count of an EMR Instance Group.<br />+ &#96;&#96;ec2:spot-fleet-request:TargetCapacity&#96;&#96; - The target capacity of a Spot Fleet.<br />+ &#96;&#96;appstream:fleet:DesiredCapacity&#96;&#96; - The capacity of an AppStream 2.0 fleet.<br />+ &#96;&#96;dynamodb:table:ReadCapacityUnits&#96;&#96; - The provisioned read capacity for a DynamoDB table.<br />+ &#96;&#96;dynamodb:table:WriteCapacityUnits&#96;&#96; - The provisioned write capacity for a DynamoDB table.<br />+ &#96;&#96;dynamodb:index:ReadCapacityUnits&#96;&#96; - The provisioned read capacity for a DynamoDB global secondary index.<br />+ &#96;&#96;dynamodb:index:WriteCapacityUnits&#96;&#96; - The provisioned write capacity for a DynamoDB global secondary index.<br />+ &#96;&#96;rds:cluster:ReadReplicaCount&#96;&#96; - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.<br />+ &#96;&#96;sagemaker:variant:DesiredInstanceCount&#96;&#96; - The number of EC2 instances for a SageMaker model endpoint variant.<br />+ &#96;&#96;custom-resource:ResourceType:Property&#96;&#96; - The scalable dimension for a custom resource provided by your own application or service.<br />+ &#96;&#96;comprehend:document-classifier-endpoint:DesiredInferenceUnits&#96;&#96; - The number of inference units for an Amazon Comprehend document classification endpoint.<br />+ &#96;&#96;comprehend:entity-recognizer-endpoint:DesiredInferenceUnits&#96;&#96; - The number of inference units for an Amazon Comprehend entity recognizer endpoint.<br />+ &#96;&#96;lambda:function:ProvisionedConcurrency&#96;&#96; - The provisioned concurrency for a Lambda function.<br />+ &#96;&#96;cassandra:table:ReadCapacityUnits&#96;&#96; - The provisioned read capacity for an Amazon Keyspaces table.<br />+ &#96;&#96;cassandra:table:WriteCapacityUnits&#96;&#96; - The provisioned write capacity for an Amazon Keyspaces table.<br />+ &#96;&#96;kafka:broker-storage:VolumeSize&#96;&#96; - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.<br />+ &#96;&#96;elasticache:cache-cluster:Nodes&#96;&#96; - The number of nodes for an Amazon ElastiCache cache cluster.<br />+ &#96;&#96;elasticache:replication-group:NodeGroups&#96;&#96; - The number of node groups for an Amazon ElastiCache replication group.<br />+ &#96;&#96;elasticache:replication-group:Replicas&#96;&#96; - The number of replicas per node group for an Amazon ElastiCache replication group.<br />+ &#96;&#96;neptune:cluster:ReadReplicaCount&#96;&#96; - The count of read replicas in an Amazon Neptune DB cluster.<br />+ &#96;&#96;sagemaker:variant:DesiredProvisionedConcurrency&#96;&#96; - The provisioned concurrency for a SageMaker serverless endpoint.<br />+ &#96;&#96;sagemaker:inference-component:DesiredCopyCount&#96;&#96; - The number of copies across an endpoint for a SageMaker inference component.<br />+ &#96;&#96;workspaces:workspacespool:DesiredUserSessions&#96;&#96; - The number of user sessions for the WorkSpaces in the pool."
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
WHERE region = 'us-east-1' AND Identifier = '<ResourceId>|<ScalableDimension>|<ServiceNamespace>';
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
WHERE region = 'us-east-1';
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
'{{ ResourceId }}',
 '{{ ServiceNamespace }}',
 '{{ ScalableDimension }}',
 '{{ MinCapacity }}',
 '{{ MaxCapacity }}',
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
 '{{ ScheduledActions }}',
 '{{ ResourceId }}',
 '{{ ServiceNamespace }}',
 '{{ ScalableDimension }}',
 '{{ SuspendedState }}',
 '{{ MinCapacity }}',
 '{{ RoleARN }}',
 '{{ MaxCapacity }}',
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
      - name: ScheduledActions
        value:
          - Timezone: '{{ Timezone }}'
            ScheduledActionName: '{{ ScheduledActionName }}'
            EndTime: '{{ EndTime }}'
            Schedule: '{{ Schedule }}'
            StartTime: '{{ StartTime }}'
            ScalableTargetAction:
              MinCapacity: '{{ MinCapacity }}'
              MaxCapacity: '{{ MaxCapacity }}'
      - name: ResourceId
        value: '{{ ResourceId }}'
      - name: ServiceNamespace
        value: '{{ ServiceNamespace }}'
      - name: ScalableDimension
        value: '{{ ScalableDimension }}'
      - name: SuspendedState
        value:
          DynamicScalingOutSuspended: '{{ DynamicScalingOutSuspended }}'
          ScheduledScalingSuspended: '{{ ScheduledScalingSuspended }}'
          DynamicScalingInSuspended: '{{ DynamicScalingInSuspended }}'
      - name: MinCapacity
        value: '{{ MinCapacity }}'
      - name: RoleARN
        value: '{{ RoleARN }}'
      - name: MaxCapacity
        value: '{{ MaxCapacity }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

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
WHERE region = '{{ region }}'
AND Identifier = '<ResourceId>|<ScalableDimension>|<ServiceNamespace>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.applicationautoscaling.scalable_targets
WHERE Identifier = '<ResourceId|ScalableDimension|ServiceNamespace>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>scalable_targets</code> resource, the following permissions are required:

### Read
```json
application-autoscaling:DescribeScalableTargets,
application-autoscaling:DescribeScheduledActions
```

### Create
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

### Update
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

### List
```json
application-autoscaling:DescribeScalableTargets
```

### Delete
```json
application-autoscaling:DeregisterScalableTarget
```
