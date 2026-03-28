---
title: scaling_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - scaling_policies
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

import CodeBlock from '@theme/CodeBlock';
import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>scaling_policy</code> resource or lists <code>scaling_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>scaling_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td><details><summary>The <code>AWS::ApplicationAutoScaling::ScalingPolicy</code> resource defines a scaling policy that Application Auto Scaling uses to adjust the capacity of a scalable target.</summary>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.applicationautoscaling.scaling_policies" /></td></tr>
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
    "name": "policy_type",
    "type": "string",
    "description": "<details><summary>The scaling policy type.</summary>The following policy types are supported:<br /><code>TargetTrackingScaling</code>—Not supported for Amazon EMR<br /><code>StepScaling</code>—Not supported for DynamoDB, Amazon Comprehend, Lambda, Amazon Keyspaces, Amazon MSK, Amazon ElastiCache, or Neptune.<br /><code>PredictiveScaling</code>—Only supported for Amazon ECS</details>"
  },
  {
    "name": "resource_id",
    "type": "string",
    "description": "<details><summary>The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier.</summary>+  ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/my-cluster/my-service</code>.<br />+  Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.<br />+  EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.<br />+  AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.<br />+  DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>table/my-table</code>.<br />+  DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name. Example: <code>table/my-table/index/my-table-index</code>.<br />+  Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.<br />+  SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.<br />+  Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our <a href=\"https://docs.aws.amazon.com/https://github.com/aws/aws-auto-scaling-custom-resource\">GitHub repository</a>.<br />+  Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.<br />+  Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.<br />+  Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>. Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.<br />+  Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>keyspace/mykeyspace/table/mytable</code>.<br />+  Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.<br />+  Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name. Example: <code>replication-group/mycluster</code>.<br />+  Amazon ElastiCache cache cluster - The resource type is <code>cache-cluster</code> and the unique identifier is the cache cluster name. Example: <code>cache-cluster/mycluster</code>.<br />+  Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.<br />+  SageMaker serverless endpoint - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.<br />+  SageMaker inference component - The resource type is <code>inference-component</code> and the unique identifier is the resource ID. Example: <code>inference-component/my-inference-component</code>.<br />+  Pool of WorkSpaces - The resource type is <code>workspacespool</code> and the unique identifier is the pool ID. Example: <code>workspacespool/wspool-123456</code>.</details>"
  },
  {
    "name": "scaling_target_id",
    "type": "string",
    "description": "<details><summary>The CloudFormation-generated ID of an Application Auto Scaling scalable target. For more information about the ID, see the Return Value section of the <code>AWS::ApplicationAutoScaling::ScalableTarget</code> resource.</summary>You must specify either the <code>ScalingTargetId</code> property, or the <code>ResourceId</code>, <code>ScalableDimension</code>, and <code>ServiceNamespace</code> properties, but not both.</details>"
  },
  {
    "name": "policy_name",
    "type": "string",
    "description": "<details><summary>The name of the scaling policy.</summary>Updates to the name of a target tracking scaling policy are not supported, unless you also update the metric used for scaling. To change only a target tracking scaling policy's name, first delete the policy by removing the existing <code>AWS::ApplicationAutoScaling::ScalingPolicy</code> resource from the template and updating the stack. Then, recreate the resource with the same settings and a different name.</details>"
  },
  {
    "name": "service_namespace",
    "type": "string",
    "description": "The namespace of the AWS service that provides the resource, or a <code>custom-resource</code>."
  },
  {
    "name": "scalable_dimension",
    "type": "string",
    "description": "<details><summary>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</summary>+  <code>ecs:service:DesiredCount</code> - The task count of an ECS service.<br />+  <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.<br />+  <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.<br />+  <code>appstream:fleet:DesiredCapacity</code> - The capacity of an AppStream 2.0 fleet.<br />+  <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.<br />+  <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.<br />+  <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.<br />+  <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.<br />+  <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.<br />+  <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.<br />+  <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.<br />+  <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.<br />+  <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.<br />+  <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.<br />+  <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.<br />+  <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.<br />+  <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.<br />+  <code>elasticache:cache-cluster:Nodes</code> - The number of nodes for an Amazon ElastiCache cache cluster.<br />+  <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.<br />+  <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.<br />+  <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.<br />+  <code>sagemaker:variant:DesiredProvisionedConcurrency</code> - The provisioned concurrency for a SageMaker serverless endpoint.<br />+  <code>sagemaker:inference-component:DesiredCopyCount</code> - The number of copies across an endpoint for a SageMaker inference component.<br />+  <code>workspaces:workspacespool:DesiredUserSessions</code> - The number of user sessions for the WorkSpaces in the pool.</details>"
  },
  {
    "name": "target_tracking_scaling_policy_configuration",
    "type": "object",
    "description": "A target tracking scaling policy.",
    "children": [
      {
        "name": "scale_out_cooldown",
        "type": "integer",
        "description": "The amount of time, in seconds, to wait for a previous scale-out activity to take effect. For more information and for default values, see <a href=\"https://docs.aws.amazon.com/autoscaling/application/userguide/target-tracking-scaling-policy-overview.html#target-tracking-cooldown\">Define cooldown periods</a> in the <i>Application Auto Scaling User Guide</i>."
      },
      {
        "name": "target_value",
        "type": "number",
        "description": "The target value for the metric. Although this property accepts numbers of type Double, it won't accept values that are either too small or too large. Values must be in the range of -2^360 to 2^360. The value must be a valid number based on the choice of metric. For example, if the metric is CPU utilization, then the target value is a percent value that represents how much of the CPU can be used before scaling out."
      },
      {
        "name": "customized_metric_specification",
        "type": "object",
        "description": "A customized metric. You can specify either a predefined metric or a customized metric.",
        "children": [
          {
            "name": "metric_name",
            "type": "string",
            "description": "The name of the metric. To get the exact metric name, namespace, and dimensions, inspect the <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Metric.html\">Metric</a> object that's returned by a call to <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html\">ListMetrics</a>."
          },
          {
            "name": "metrics",
            "type": "array",
            "description": "The metrics to include in the target tracking scaling policy, as a metric data query. This can include both raw metric and metric math expressions.",
            "children": [
              {
                "name": "return_data",
                "type": "boolean",
                "description": "<details><summary>Indicates whether to return the timestamps and raw data values of this metric.</summary>If you use any math expressions, specify <code>true</code> for this value for only the final math expression that the metric specification is based on. You must specify <code>false</code> for <code>ReturnData</code> for all the other metrics and expressions used in the metric specification.<br />If you are only retrieving metrics and not performing any math expressions, do not specify anything for <code>ReturnData</code>. This sets it to its default (<code>true</code>).</details>"
              },
              {
                "name": "expression",
                "type": "string",
                "description": "<details><summary>The math expression to perform on the returned data, if this object is performing a math expression. This expression can use the <code>Id</code> of the other metrics to refer to those metrics, and can also use the <code>Id</code> of other expressions to use the result of those expressions.</summary>Conditional: Within each <code>TargetTrackingMetricDataQuery</code> object, you must specify either <code>Expression</code> or <code>MetricStat</code>, but not both.</details>"
              },
              {
                "name": "label",
                "type": "string",
                "description": "A human-readable label for this metric or expression. This is especially useful if this is a math expression, so that you know what the value represents."
              },
              {
                "name": "metric_stat",
                "type": "object",
                "description": "<details><summary>Information about the metric data to return.</summary>Conditional: Within each <code>MetricDataQuery</code> object, you must specify either <code>Expression</code> or <code>MetricStat</code>, but not both.</details>"
              },
              {
                "name": "id",
                "type": "string",
                "description": "A short name that identifies the object's results in the response. This name must be unique among all <code>MetricDataQuery</code> objects specified for a single scaling policy. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscores. The first character must be a lowercase letter."
              }
            ]
          },
          {
            "name": "statistic",
            "type": "string",
            "description": "The statistic of the metric."
          },
          {
            "name": "dimensions",
            "type": "array",
            "description": "<details><summary>The dimensions of the metric.</summary>Conditional: If you published your metric with dimensions, you must specify the same dimensions in your scaling policy.</details>",
            "children": [
              {
                "name": "value",
                "type": "string",
                "description": "The value of the dimension."
              },
              {
                "name": "name",
                "type": "string",
                "description": "The name of the dimension."
              }
            ]
          },
          {
            "name": "unit",
            "type": "string",
            "description": "The unit of the metric. For a complete list of the units that CloudWatch supports, see the <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html\">MetricDatum</a> data type in the <i>Amazon CloudWatch API Reference</i>."
          },
          {
            "name": "namespace",
            "type": "string",
            "description": "The namespace of the metric."
          }
        ]
      },
      {
        "name": "disable_scale_in",
        "type": "boolean",
        "description": "Indicates whether scale in by the target tracking scaling policy is disabled. If the value is <code>true</code>, scale in is disabled and the target tracking scaling policy won't remove capacity from the scalable target. Otherwise, scale in is enabled and the target tracking scaling policy can remove capacity from the scalable target. The default value is <code>false</code>."
      },
      {
        "name": "scale_in_cooldown",
        "type": "integer",
        "description": "The amount of time, in seconds, after a scale-in activity completes before another scale-in activity can start. For more information and for default values, see <a href=\"https://docs.aws.amazon.com/autoscaling/application/userguide/target-tracking-scaling-policy-overview.html#target-tracking-cooldown\">Define cooldown periods</a> in the <i>Application Auto Scaling User Guide</i>."
      },
      {
        "name": "predefined_metric_specification",
        "type": "object",
        "description": "A predefined metric. You can specify either a predefined metric or a customized metric.",
        "children": [
          {
            "name": "predefined_metric_type",
            "type": "string",
            "description": "The metric type. The <code>ALBRequestCountPerTarget</code> metric type applies only to Spot fleet requests and ECS services."
          },
          {
            "name": "resource_label",
            "type": "string",
            "description": "<details><summary>Identifies the resource associated with the metric type. You can't specify a resource label unless the metric type is <code>ALBRequestCountPerTarget</code> and there is a target group attached to the Spot Fleet or ECS service.</summary>You create the resource label by appending the final portion of the load balancer ARN and the final portion of the target group ARN into a single value, separated by a forward slash (/). The format of the resource label is:<br /><code>app/my-alb/778d41231b141a0f/targetgroup/my-alb-target-group/943f017f100becff</code>.<br />Where:<br />+  app/<load-balancer-name>/<load-balancer-id> is the final portion of the load balancer ARN<br />+  targetgroup/<target-group-name>/<target-group-id> is the final portion of the target group ARN.<br />To find the ARN for an Application Load Balancer, use the <a href=\"https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html\">DescribeLoadBalancers</a> API operation. To find the ARN for the target group, use the <a href=\"https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html\">DescribeTargetGroups</a> API operation.</details>"
          }
        ]
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "step_scaling_policy_configuration",
    "type": "object",
    "description": "A step scaling policy.",
    "children": [
      {
        "name": "metric_aggregation_type",
        "type": "string",
        "description": "The aggregation type for the CloudWatch metrics. Valid values are <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code>. If the aggregation type is null, the value is treated as <code>Average</code>."
      },
      {
        "name": "cooldown",
        "type": "integer",
        "description": "The amount of time, in seconds, to wait for a previous scaling activity to take effect. If not specified, the default value is 300. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/application/userguide/step-scaling-policy-overview.html#step-scaling-cooldown\">Cooldown period</a> in the <i>Application Auto Scaling User Guide</i>."
      },
      {
        "name": "step_adjustments",
        "type": "array",
        "description": "<details><summary>A set of adjustments that enable you to scale based on the size of the alarm breach.</summary>At least one step adjustment is required if you are adding a new step scaling policy configuration.</details>",
        "children": [
          {
            "name": "metric_interval_upper_bound",
            "type": "number",
            "description": "<details><summary>The upper bound for the difference between the alarm threshold and the CloudWatch metric. If the metric value is above the breach threshold, the upper bound is exclusive (the metric must be less than the threshold plus the upper bound). Otherwise, it is inclusive (the metric must be less than or equal to the threshold plus the upper bound). A null value indicates positive infinity.</summary>You must specify at least one upper or lower bound.</details>"
          },
          {
            "name": "metric_interval_lower_bound",
            "type": "number",
            "description": "<details><summary>The lower bound for the difference between the alarm threshold and the CloudWatch metric. If the metric value is above the breach threshold, the lower bound is inclusive (the metric must be greater than or equal to the threshold plus the lower bound). Otherwise, it is exclusive (the metric must be greater than the threshold plus the lower bound). A null value indicates negative infinity.</summary>You must specify at least one upper or lower bound.</details>"
          },
          {
            "name": "scaling_adjustment",
            "type": "integer",
            "description": "The amount by which to scale. The adjustment is based on the value that you specified in the <code>AdjustmentType</code> property (either an absolute number or a percentage). A positive value adds to the current capacity and a negative number subtracts from the current capacity."
          }
        ]
      },
      {
        "name": "min_adjustment_magnitude",
        "type": "integer",
        "description": "The minimum value to scale by when the adjustment type is <code>PercentChangeInCapacity</code>. For example, suppose that you create a step scaling policy to scale out an Amazon ECS service by 25 percent and you specify a <code>MinAdjustmentMagnitude</code> of 2. If the service has 4 tasks and the scaling policy is performed, 25 percent of 4 is 1. However, because you specified a <code>MinAdjustmentMagnitude</code> of 2, Application Auto Scaling scales out the service by 2 tasks."
      },
      {
        "name": "adjustment_type",
        "type": "string",
        "description": "Specifies whether the <code>ScalingAdjustment</code> value in the <code>StepAdjustment</code> property is an absolute number or a percentage of the current capacity."
      }
    ]
  },
  {
    "name": "predictive_scaling_policy_configuration",
    "type": "object",
    "description": "The predictive scaling policy configuration.",
    "children": [
      {
        "name": "max_capacity_breach_behavior",
        "type": "string",
        "description": "Defines the behavior that should be applied if the forecast capacity approaches or exceeds the maximum capacity. Defaults to <code>HonorMaxCapacity</code> if not specified."
      },
      {
        "name": "max_capacity_buffer",
        "type": "integer",
        "description": "<details><summary>The size of the capacity buffer to use when the forecast capacity is close to or exceeds the maximum capacity. The value is specified as a percentage relative to the forecast capacity. For example, if the buffer is 10, this means a 10 percent buffer, such that if the forecast capacity is 50, and the maximum capacity is 40, then the effective maximum capacity is 55.</summary>Required if the <code>MaxCapacityBreachBehavior</code> property is set to <code>IncreaseMaxCapacity</code>, and cannot be used otherwise.</details>"
      },
      {
        "name": "mode",
        "type": "string",
        "description": "The predictive scaling mode. Defaults to <code>ForecastOnly</code> if not specified."
      },
      {
        "name": "metric_specifications",
        "type": "array",
        "description": "<details><summary>This structure includes the metrics and target utilization to use for predictive scaling.</summary>This is an array, but we currently only support a single metric specification. That is, you can specify a target value and a single metric pair, or a target value and one scaling metric and one load metric.</details>",
        "children": [
          {
            "name": "customized_load_metric_specification",
            "type": "object",
            "description": "The customized load metric specification.",
            "children": [
              {
                "name": "metric_data_queries",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "predefined_load_metric_specification",
            "type": "object",
            "description": "The predefined load metric specification.",
            "children": [
              {
                "name": "predefined_metric_type",
                "type": "string",
                "description": "The metric type."
              },
              {
                "name": "resource_label",
                "type": "string",
                "description": "A label that uniquely identifies a target group."
              }
            ]
          },
          {
            "name": "target_value",
            "type": "number",
            "description": "Specifies the target utilization."
          },
          {
            "name": "predefined_scaling_metric_specification",
            "type": "object",
            "description": "The predefined scaling metric specification.",
            "children": [
              {
                "name": "predefined_metric_type",
                "type": "string",
                "description": "The metric type."
              },
              {
                "name": "resource_label",
                "type": "string",
                "description": "A label that uniquely identifies a specific target group from which to determine the average request count."
              }
            ]
          },
          {
            "name": "customized_capacity_metric_specification",
            "type": "object",
            "description": "The customized capacity metric specification.",
            "children": [
              {
                "name": "metric_data_queries",
                "type": "array",
                "description": "One or more metric data queries to provide data points for a metric specification."
              }
            ]
          },
          {
            "name": "customized_scaling_metric_specification",
            "type": "object",
            "description": "The customized scaling metric specification.",
            "children": [
              {
                "name": "metric_data_queries",
                "type": "array",
                "description": "One or more metric data queries to provide data points for a metric specification."
              }
            ]
          },
          {
            "name": "predefined_metric_pair_specification",
            "type": "object",
            "description": "The predefined metric pair specification that determines the appropriate scaling metric and load metric to use.",
            "children": [
              {
                "name": "predefined_metric_type",
                "type": "string",
                "description": "Indicates which metrics to use. There are two different types of metrics for each metric type: one is a load metric and one is a scaling metric."
              },
              {
                "name": "resource_label",
                "type": "string",
                "description": "A label that uniquely identifies a specific target group from which to determine the total and average request count."
              }
            ]
          }
        ]
      },
      {
        "name": "scheduling_buffer_time",
        "type": "integer",
        "description": "<details><summary>The amount of time, in seconds, that the start time can be advanced.</summary>The value must be less than the forecast interval duration of 3600 seconds (60 minutes). Defaults to 300 seconds if not specified.</details>"
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
    "name": "scalable_dimension",
    "type": "string",
    "description": "<details><summary>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</summary>+  <code>ecs:service:DesiredCount</code> - The task count of an ECS service.<br />+  <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.<br />+  <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.<br />+  <code>appstream:fleet:DesiredCapacity</code> - The capacity of an AppStream 2.0 fleet.<br />+  <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.<br />+  <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.<br />+  <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.<br />+  <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.<br />+  <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.<br />+  <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.<br />+  <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.<br />+  <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.<br />+  <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.<br />+  <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.<br />+  <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.<br />+  <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.<br />+  <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.<br />+  <code>elasticache:cache-cluster:Nodes</code> - The number of nodes for an Amazon ElastiCache cache cluster.<br />+  <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.<br />+  <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.<br />+  <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.<br />+  <code>sagemaker:variant:DesiredProvisionedConcurrency</code> - The provisioned concurrency for a SageMaker serverless endpoint.<br />+  <code>sagemaker:inference-component:DesiredCopyCount</code> - The number of copies across an endpoint for a SageMaker inference component.<br />+  <code>workspaces:workspacespool:DesiredUserSessions</code> - The number of user sessions for the WorkSpaces in the pool.</details>"
  },
  {
    "name": "arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html"><code>AWS::ApplicationAutoScaling::ScalingPolicy</code></a>.

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
    <td><code>scaling_policies</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="PolicyName, PolicyType, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>scaling_policies</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>scaling_policies</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>scaling_policies_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>scaling_policies</code></td>
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

Gets all properties from an individual <code>scaling_policy</code>.
```sql
SELECT
  region,
  policy_type,
  resource_id,
  scaling_target_id,
  policy_name,
  service_namespace,
  scalable_dimension,
  target_tracking_scaling_policy_configuration,
  arn,
  step_scaling_policy_configuration,
  predictive_scaling_policy_configuration
FROM awscc.applicationautoscaling.scaling_policies
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ arn }}|{{ scalable_dimension }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>scaling_policies</code> in a region.
```sql
SELECT
  region,
  arn,
  scalable_dimension
FROM awscc.applicationautoscaling.scaling_policies_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>scaling_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.applicationautoscaling.scaling_policies (
  PolicyType,
  PolicyName,
  region
)
SELECT
  '{{ policy_type }}',
  '{{ policy_name }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.applicationautoscaling.scaling_policies (
  PolicyType,
  ResourceId,
  ScalingTargetId,
  PolicyName,
  ServiceNamespace,
  ScalableDimension,
  TargetTrackingScalingPolicyConfiguration,
  StepScalingPolicyConfiguration,
  PredictiveScalingPolicyConfiguration,
  region
)
SELECT
  '{{ policy_type }}',
  '{{ resource_id }}',
  '{{ scaling_target_id }}',
  '{{ policy_name }}',
  '{{ service_namespace }}',
  '{{ scalable_dimension }}',
  '{{ target_tracking_scaling_policy_configuration }}',
  '{{ step_scaling_policy_configuration }}',
  '{{ predictive_scaling_policy_configuration }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`version: 1
name: stack name
description: stack description
providers:
  - aws
globals:
  - name: region
    value: '{{ vars.AWS_REGION }}'
resources:
  - name: scaling_policy
    props:
      - name: policy_type
        value: '{{ policy_type }}'
      - name: resource_id
        value: '{{ resource_id }}'
      - name: scaling_target_id
        value: '{{ scaling_target_id }}'
      - name: policy_name
        value: '{{ policy_name }}'
      - name: service_namespace
        value: '{{ service_namespace }}'
      - name: scalable_dimension
        value: '{{ scalable_dimension }}'
      - name: target_tracking_scaling_policy_configuration
        value:
          scale_out_cooldown: '{{ scale_out_cooldown }}'
          target_value: null
          customized_metric_specification:
            metric_name: '{{ metric_name }}'
            metrics:
              - return_data: '{{ return_data }}'
                expression: '{{ expression }}'
                label: '{{ label }}'
                metric_stat:
                  stat: '{{ stat }}'
                  metric:
                    metric_name: '{{ metric_name }}'
                    dimensions:
                      - value: '{{ value }}'
                        name: '{{ name }}'
                    namespace: '{{ namespace }}'
                  unit: '{{ unit }}'
                id: '{{ id }}'
            statistic: '{{ statistic }}'
            dimensions:
              - value: '{{ value }}'
                name: '{{ name }}'
            unit: '{{ unit }}'
            namespace: '{{ namespace }}'
          disable_scale_in: '{{ disable_scale_in }}'
          scale_in_cooldown: '{{ scale_in_cooldown }}'
          predefined_metric_specification:
            predefined_metric_type: '{{ predefined_metric_type }}'
            resource_label: '{{ resource_label }}'
      - name: step_scaling_policy_configuration
        value:
          metric_aggregation_type: '{{ metric_aggregation_type }}'
          cooldown: '{{ cooldown }}'
          step_adjustments:
            - metric_interval_upper_bound: null
              metric_interval_lower_bound: null
              scaling_adjustment: '{{ scaling_adjustment }}'
          min_adjustment_magnitude: '{{ min_adjustment_magnitude }}'
          adjustment_type: '{{ adjustment_type }}'
      - name: predictive_scaling_policy_configuration
        value:
          max_capacity_breach_behavior: '{{ max_capacity_breach_behavior }}'
          max_capacity_buffer: '{{ max_capacity_buffer }}'
          mode: '{{ mode }}'
          metric_specifications:
            - customized_load_metric_specification:
                metric_data_queries:
                  - return_data: '{{ return_data }}'
                    expression: '{{ expression }}'
                    label: '{{ label }}'
                    metric_stat:
                      stat: '{{ stat }}'
                      metric:
                        metric_name: '{{ metric_name }}'
                        dimensions:
                          - value: '{{ value }}'
                            name: '{{ name }}'
                        namespace: '{{ namespace }}'
                      unit: '{{ unit }}'
                    id: '{{ id }}'
              predefined_load_metric_specification:
                predefined_metric_type: '{{ predefined_metric_type }}'
                resource_label: '{{ resource_label }}'
              target_value: null
              predefined_scaling_metric_specification:
                predefined_metric_type: '{{ predefined_metric_type }}'
                resource_label: '{{ resource_label }}'
              customized_capacity_metric_specification:
                metric_data_queries:
                  - null
              customized_scaling_metric_specification:
                metric_data_queries:
                  - null
              predefined_metric_pair_specification:
                predefined_metric_type: '{{ predefined_metric_type }}'
                resource_label: '{{ resource_label }}'
          scheduling_buffer_time: '{{ scheduling_buffer_time }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>scaling_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.applicationautoscaling.scaling_policies
SET PatchDocument = string('{{ {
    "PolicyType": policy_type,
    "TargetTrackingScalingPolicyConfiguration": target_tracking_scaling_policy_configuration,
    "StepScalingPolicyConfiguration": step_scaling_policy_configuration,
    "PredictiveScalingPolicyConfiguration": predictive_scaling_policy_configuration
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ arn }}|{{ scalable_dimension }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.applicationautoscaling.scaling_policies
WHERE
  Identifier = '{{ arn }}|{{ scalable_dimension }}' AND
  region = '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

## Permissions

To operate on the <code>scaling_policies</code> resource, the following permissions are required:

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
application-autoscaling:DescribeScalingPolicies
```

</TabItem>
<TabItem value="create">

```json
application-autoscaling:DescribeScalingPolicies,
application-autoscaling:PutScalingPolicy,
cloudwatch:GetMetricData
```

</TabItem>
<TabItem value="update">

```json
application-autoscaling:DescribeScalingPolicies,
application-autoscaling:PutScalingPolicy,
cloudwatch:GetMetricData
```

</TabItem>
<TabItem value="list">

```json
application-autoscaling:DescribeScalingPolicies
```

</TabItem>
<TabItem value="delete">

```json
application-autoscaling:DescribeScalingPolicies,
application-autoscaling:DeleteScalingPolicy
```

</TabItem>
</Tabs>