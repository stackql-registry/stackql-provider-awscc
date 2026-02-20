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
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApplicationAutoScaling::ScalingPolicy&#96;&#96; resource defines a scaling policy that Application Auto Scaling uses to adjust the capacity of a scalable target. <br />For more information, see &#91;Target tracking scaling policies&#93;(https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html) and &#91;Step scaling policies&#93;(https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html) in the &#42;Application Auto Scaling User Guide&#42;.</td></tr>
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
    "description": "The scaling policy type.<br />The following policy types are supported: <br />&#96;&#96;TargetTrackingScaling&#96;&#96;—Not supported for Amazon EMR<br />&#96;&#96;StepScaling&#96;&#96;—Not supported for DynamoDB, Amazon Comprehend, Lambda, Amazon Keyspaces, Amazon MSK, Amazon ElastiCache, or Neptune.<br />&#96;&#96;PredictiveScaling&#96;&#96;—Only supported for Amazon ECS"
  },
  {
    "name": "resource_id",
    "type": "string",
    "description": "The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier.<br />+ ECS service - The resource type is &#96;&#96;service&#96;&#96; and the unique identifier is the cluster name and service name. Example: &#96;&#96;service/my-cluster/my-service&#96;&#96;.<br />+ Spot Fleet - The resource type is &#96;&#96;spot-fleet-request&#96;&#96; and the unique identifier is the Spot Fleet request ID. Example: &#96;&#96;spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE&#96;&#96;.<br />+ EMR cluster - The resource type is &#96;&#96;instancegroup&#96;&#96; and the unique identifier is the cluster ID and instance group ID. Example: &#96;&#96;instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0&#96;&#96;.<br />+ AppStream 2.0 fleet - The resource type is &#96;&#96;fleet&#96;&#96; and the unique identifier is the fleet name. Example: &#96;&#96;fleet/sample-fleet&#96;&#96;.<br />+ DynamoDB table - The resource type is &#96;&#96;table&#96;&#96; and the unique identifier is the table name. Example: &#96;&#96;table/my-table&#96;&#96;.<br />+ DynamoDB global secondary index - The resource type is &#96;&#96;index&#96;&#96; and the unique identifier is the index name. Example: &#96;&#96;table/my-table/index/my-table-index&#96;&#96;.<br />+ Aurora DB cluster - The resource type is &#96;&#96;cluster&#96;&#96; and the unique identifier is the cluster name. Example: &#96;&#96;cluster:my-db-cluster&#96;&#96;.<br />+ SageMaker endpoint variant - The resource type is &#96;&#96;variant&#96;&#96; and the unique identifier is the resource ID. Example: &#96;&#96;endpoint/my-end-point/variant/KMeansClustering&#96;&#96;.<br />+ Custom resources are not supported with a resource type. This parameter must specify the &#96;&#96;OutputValue&#96;&#96; from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our &#91;GitHub repository&#93;(https://docs.aws.amazon.com/https://github.com/aws/aws-auto-scaling-custom-resource).<br />+ Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: &#96;&#96;arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE&#96;&#96;.<br />+ Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: &#96;&#96;arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE&#96;&#96;.<br />+ Lambda provisioned concurrency - The resource type is &#96;&#96;function&#96;&#96; and the unique identifier is the function name with a function version or alias name suffix that is not &#96;&#96;$LATEST&#96;&#96;. Example: &#96;&#96;function:my-function:prod&#96;&#96; or &#96;&#96;function:my-function:1&#96;&#96;.<br />+ Amazon Keyspaces table - The resource type is &#96;&#96;table&#96;&#96; and the unique identifier is the table name. Example: &#96;&#96;keyspace/mykeyspace/table/mytable&#96;&#96;.<br />+ Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: &#96;&#96;arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5&#96;&#96;.<br />+ Amazon ElastiCache replication group - The resource type is &#96;&#96;replication-group&#96;&#96; and the unique identifier is the replication group name. Example: &#96;&#96;replication-group/mycluster&#96;&#96;.<br />+ Amazon ElastiCache cache cluster - The resource type is &#96;&#96;cache-cluster&#96;&#96; and the unique identifier is the cache cluster name. Example: &#96;&#96;cache-cluster/mycluster&#96;&#96;.<br />+ Neptune cluster - The resource type is &#96;&#96;cluster&#96;&#96; and the unique identifier is the cluster name. Example: &#96;&#96;cluster:mycluster&#96;&#96;.<br />+ SageMaker serverless endpoint - The resource type is &#96;&#96;variant&#96;&#96; and the unique identifier is the resource ID. Example: &#96;&#96;endpoint/my-end-point/variant/KMeansClustering&#96;&#96;.<br />+ SageMaker inference component - The resource type is &#96;&#96;inference-component&#96;&#96; and the unique identifier is the resource ID. Example: &#96;&#96;inference-component/my-inference-component&#96;&#96;.<br />+ Pool of WorkSpaces - The resource type is &#96;&#96;workspacespool&#96;&#96; and the unique identifier is the pool ID. Example: &#96;&#96;workspacespool/wspool-123456&#96;&#96;."
  },
  {
    "name": "scaling_target_id",
    "type": "string",
    "description": "The CloudFormation-generated ID of an Application Auto Scaling scalable target. For more information about the ID, see the Return Value section of the &#96;&#96;AWS::ApplicationAutoScaling::ScalableTarget&#96;&#96; resource.<br />You must specify either the &#96;&#96;ScalingTargetId&#96;&#96; property, or the &#96;&#96;ResourceId&#96;&#96;, &#96;&#96;ScalableDimension&#96;&#96;, and &#96;&#96;ServiceNamespace&#96;&#96; properties, but not both."
  },
  {
    "name": "policy_name",
    "type": "string",
    "description": "The name of the scaling policy.<br />Updates to the name of a target tracking scaling policy are not supported, unless you also update the metric used for scaling. To change only a target tracking scaling policy's name, first delete the policy by removing the existing &#96;&#96;AWS::ApplicationAutoScaling::ScalingPolicy&#96;&#96; resource from the template and updating the stack. Then, recreate the resource with the same settings and a different name."
  },
  {
    "name": "service_namespace",
    "type": "string",
    "description": "The namespace of the AWS service that provides the resource, or a &#96;&#96;custom-resource&#96;&#96;."
  },
  {
    "name": "scalable_dimension",
    "type": "string",
    "description": "The scalable dimension. This string consists of the service namespace, resource type, and scaling property.<br />+ &#96;&#96;ecs:service:DesiredCount&#96;&#96; - The task count of an ECS service.<br />+ &#96;&#96;elasticmapreduce:instancegroup:InstanceCount&#96;&#96; - The instance count of an EMR Instance Group.<br />+ &#96;&#96;ec2:spot-fleet-request:TargetCapacity&#96;&#96; - The target capacity of a Spot Fleet.<br />+ &#96;&#96;appstream:fleet:DesiredCapacity&#96;&#96; - The capacity of an AppStream 2.0 fleet.<br />+ &#96;&#96;dynamodb:table:ReadCapacityUnits&#96;&#96; - The provisioned read capacity for a DynamoDB table.<br />+ &#96;&#96;dynamodb:table:WriteCapacityUnits&#96;&#96; - The provisioned write capacity for a DynamoDB table.<br />+ &#96;&#96;dynamodb:index:ReadCapacityUnits&#96;&#96; - The provisioned read capacity for a DynamoDB global secondary index.<br />+ &#96;&#96;dynamodb:index:WriteCapacityUnits&#96;&#96; - The provisioned write capacity for a DynamoDB global secondary index.<br />+ &#96;&#96;rds:cluster:ReadReplicaCount&#96;&#96; - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.<br />+ &#96;&#96;sagemaker:variant:DesiredInstanceCount&#96;&#96; - The number of EC2 instances for a SageMaker model endpoint variant.<br />+ &#96;&#96;custom-resource:ResourceType:Property&#96;&#96; - The scalable dimension for a custom resource provided by your own application or service.<br />+ &#96;&#96;comprehend:document-classifier-endpoint:DesiredInferenceUnits&#96;&#96; - The number of inference units for an Amazon Comprehend document classification endpoint.<br />+ &#96;&#96;comprehend:entity-recognizer-endpoint:DesiredInferenceUnits&#96;&#96; - The number of inference units for an Amazon Comprehend entity recognizer endpoint.<br />+ &#96;&#96;lambda:function:ProvisionedConcurrency&#96;&#96; - The provisioned concurrency for a Lambda function.<br />+ &#96;&#96;cassandra:table:ReadCapacityUnits&#96;&#96; - The provisioned read capacity for an Amazon Keyspaces table.<br />+ &#96;&#96;cassandra:table:WriteCapacityUnits&#96;&#96; - The provisioned write capacity for an Amazon Keyspaces table.<br />+ &#96;&#96;kafka:broker-storage:VolumeSize&#96;&#96; - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.<br />+ &#96;&#96;elasticache:cache-cluster:Nodes&#96;&#96; - The number of nodes for an Amazon ElastiCache cache cluster.<br />+ &#96;&#96;elasticache:replication-group:NodeGroups&#96;&#96; - The number of node groups for an Amazon ElastiCache replication group.<br />+ &#96;&#96;elasticache:replication-group:Replicas&#96;&#96; - The number of replicas per node group for an Amazon ElastiCache replication group.<br />+ &#96;&#96;neptune:cluster:ReadReplicaCount&#96;&#96; - The count of read replicas in an Amazon Neptune DB cluster.<br />+ &#96;&#96;sagemaker:variant:DesiredProvisionedConcurrency&#96;&#96; - The provisioned concurrency for a SageMaker serverless endpoint.<br />+ &#96;&#96;sagemaker:inference-component:DesiredCopyCount&#96;&#96; - The number of copies across an endpoint for a SageMaker inference component.<br />+ &#96;&#96;workspaces:workspacespool:DesiredUserSessions&#96;&#96; - The number of user sessions for the WorkSpaces in the pool."
  },
  {
    "name": "target_tracking_scaling_policy_configuration",
    "type": "object",
    "description": "A target tracking scaling policy.",
    "children": [
      {
        "name": "scale_out_cooldown",
        "type": "integer",
        "description": "The amount of time, in seconds, to wait for a previous scale-out activity to take effect. For more information and for default values, see &#91;Define cooldown periods&#93;(https://docs.aws.amazon.com/autoscaling/application/userguide/target-tracking-scaling-policy-overview.html#target-tracking-cooldown) in the &#42;Application Auto Scaling User Guide&#42;."
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
            "description": "The name of the metric. To get the exact metric name, namespace, and dimensions, inspect the &#91;Metric&#93;(https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API&#95;Metric.html) object that's returned by a call to &#91;ListMetrics&#93;(https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API&#95;ListMetrics.html)."
          },
          {
            "name": "metrics",
            "type": "array",
            "description": "The metrics to include in the target tracking scaling policy, as a metric data query. This can include both raw metric and metric math expressions.",
            "children": [
              {
                "name": "return_data",
                "type": "boolean",
                "description": "Indicates whether to return the timestamps and raw data values of this metric. <br />If you use any math expressions, specify &#96;&#96;true&#96;&#96; for this value for only the final math expression that the metric specification is based on. You must specify &#96;&#96;false&#96;&#96; for &#96;&#96;ReturnData&#96;&#96; for all the other metrics and expressions used in the metric specification.<br />If you are only retrieving metrics and not performing any math expressions, do not specify anything for &#96;&#96;ReturnData&#96;&#96;. This sets it to its default (&#96;&#96;true&#96;&#96;)."
              },
              {
                "name": "expression",
                "type": "string",
                "description": "The math expression to perform on the returned data, if this object is performing a math expression. This expression can use the &#96;&#96;Id&#96;&#96; of the other metrics to refer to those metrics, and can also use the &#96;&#96;Id&#96;&#96; of other expressions to use the result of those expressions. <br />Conditional: Within each &#96;&#96;TargetTrackingMetricDataQuery&#96;&#96; object, you must specify either &#96;&#96;Expression&#96;&#96; or &#96;&#96;MetricStat&#96;&#96;, but not both."
              },
              {
                "name": "label",
                "type": "string",
                "description": "A human-readable label for this metric or expression. This is especially useful if this is a math expression, so that you know what the value represents."
              },
              {
                "name": "metric_stat",
                "type": "object",
                "description": "Information about the metric data to return.<br />Conditional: Within each &#96;&#96;MetricDataQuery&#96;&#96; object, you must specify either &#96;&#96;Expression&#96;&#96; or &#96;&#96;MetricStat&#96;&#96;, but not both."
              },
              {
                "name": "id",
                "type": "string",
                "description": "A short name that identifies the object's results in the response. This name must be unique among all &#96;&#96;MetricDataQuery&#96;&#96; objects specified for a single scaling policy. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscores. The first character must be a lowercase letter."
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
            "description": "The dimensions of the metric. <br />Conditional: If you published your metric with dimensions, you must specify the same dimensions in your scaling policy.",
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
            "description": "The unit of the metric. For a complete list of the units that CloudWatch supports, see the &#91;MetricDatum&#93;(https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API&#95;MetricDatum.html) data type in the &#42;Amazon CloudWatch API Reference&#42;."
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
        "description": "Indicates whether scale in by the target tracking scaling policy is disabled. If the value is &#96;&#96;true&#96;&#96;, scale in is disabled and the target tracking scaling policy won't remove capacity from the scalable target. Otherwise, scale in is enabled and the target tracking scaling policy can remove capacity from the scalable target. The default value is &#96;&#96;false&#96;&#96;."
      },
      {
        "name": "scale_in_cooldown",
        "type": "integer",
        "description": "The amount of time, in seconds, after a scale-in activity completes before another scale-in activity can start. For more information and for default values, see &#91;Define cooldown periods&#93;(https://docs.aws.amazon.com/autoscaling/application/userguide/target-tracking-scaling-policy-overview.html#target-tracking-cooldown) in the &#42;Application Auto Scaling User Guide&#42;."
      },
      {
        "name": "predefined_metric_specification",
        "type": "object",
        "description": "A predefined metric. You can specify either a predefined metric or a customized metric.",
        "children": [
          {
            "name": "predefined_metric_type",
            "type": "string",
            "description": "The metric type. The &#96;&#96;ALBRequestCountPerTarget&#96;&#96; metric type applies only to Spot fleet requests and ECS services."
          },
          {
            "name": "resource_label",
            "type": "string",
            "description": "Identifies the resource associated with the metric type. You can't specify a resource label unless the metric type is &#96;&#96;ALBRequestCountPerTarget&#96;&#96; and there is a target group attached to the Spot Fleet or ECS service.<br />You create the resource label by appending the final portion of the load balancer ARN and the final portion of the target group ARN into a single value, separated by a forward slash (/). The format of the resource label is:<br />&#96;&#96;app/my-alb/778d41231b141a0f/targetgroup/my-alb-target-group/943f017f100becff&#96;&#96;.<br />Where:<br />+ app/&lt;load-balancer-name&gt;/&lt;load-balancer-id&gt; is the final portion of the load balancer ARN<br />+ targetgroup/&lt;target-group-name&gt;/&lt;target-group-id&gt; is the final portion of the target group ARN.<br /><br />To find the ARN for an Application Load Balancer, use the &#91;DescribeLoadBalancers&#93;(https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API&#95;DescribeLoadBalancers.html) API operation. To find the ARN for the target group, use the &#91;DescribeTargetGroups&#93;(https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API&#95;DescribeTargetGroups.html) API operation."
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
        "description": "The aggregation type for the CloudWatch metrics. Valid values are &#96;&#96;Minimum&#96;&#96;, &#96;&#96;Maximum&#96;&#96;, and &#96;&#96;Average&#96;&#96;. If the aggregation type is null, the value is treated as &#96;&#96;Average&#96;&#96;."
      },
      {
        "name": "cooldown",
        "type": "integer",
        "description": "The amount of time, in seconds, to wait for a previous scaling activity to take effect. If not specified, the default value is 300. For more information, see &#91;Cooldown period&#93;(https://docs.aws.amazon.com/autoscaling/application/userguide/step-scaling-policy-overview.html#step-scaling-cooldown) in the &#42;Application Auto Scaling User Guide&#42;."
      },
      {
        "name": "step_adjustments",
        "type": "array",
        "description": "A set of adjustments that enable you to scale based on the size of the alarm breach.<br />At least one step adjustment is required if you are adding a new step scaling policy configuration.",
        "children": [
          {
            "name": "metric_interval_upper_bound",
            "type": "number",
            "description": "The upper bound for the difference between the alarm threshold and the CloudWatch metric. If the metric value is above the breach threshold, the upper bound is exclusive (the metric must be less than the threshold plus the upper bound). Otherwise, it is inclusive (the metric must be less than or equal to the threshold plus the upper bound). A null value indicates positive infinity.<br />You must specify at least one upper or lower bound."
          },
          {
            "name": "metric_interval_lower_bound",
            "type": "number",
            "description": "The lower bound for the difference between the alarm threshold and the CloudWatch metric. If the metric value is above the breach threshold, the lower bound is inclusive (the metric must be greater than or equal to the threshold plus the lower bound). Otherwise, it is exclusive (the metric must be greater than the threshold plus the lower bound). A null value indicates negative infinity.<br />You must specify at least one upper or lower bound."
          },
          {
            "name": "scaling_adjustment",
            "type": "integer",
            "description": "The amount by which to scale. The adjustment is based on the value that you specified in the &#96;&#96;AdjustmentType&#96;&#96; property (either an absolute number or a percentage). A positive value adds to the current capacity and a negative number subtracts from the current capacity."
          }
        ]
      },
      {
        "name": "min_adjustment_magnitude",
        "type": "integer",
        "description": "The minimum value to scale by when the adjustment type is &#96;&#96;PercentChangeInCapacity&#96;&#96;. For example, suppose that you create a step scaling policy to scale out an Amazon ECS service by 25 percent and you specify a &#96;&#96;MinAdjustmentMagnitude&#96;&#96; of 2. If the service has 4 tasks and the scaling policy is performed, 25 percent of 4 is 1. However, because you specified a &#96;&#96;MinAdjustmentMagnitude&#96;&#96; of 2, Application Auto Scaling scales out the service by 2 tasks."
      },
      {
        "name": "adjustment_type",
        "type": "string",
        "description": "Specifies whether the &#96;&#96;ScalingAdjustment&#96;&#96; value in the &#96;&#96;StepAdjustment&#96;&#96; property is an absolute number or a percentage of the current capacity."
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
        "description": "Defines the behavior that should be applied if the forecast capacity approaches or exceeds the maximum capacity. Defaults to &#96;&#96;HonorMaxCapacity&#96;&#96; if not specified."
      },
      {
        "name": "max_capacity_buffer",
        "type": "integer",
        "description": "The size of the capacity buffer to use when the forecast capacity is close to or exceeds the maximum capacity. The value is specified as a percentage relative to the forecast capacity. For example, if the buffer is 10, this means a 10 percent buffer, such that if the forecast capacity is 50, and the maximum capacity is 40, then the effective maximum capacity is 55. <br />Required if the &#96;&#96;MaxCapacityBreachBehavior&#96;&#96; property is set to &#96;&#96;IncreaseMaxCapacity&#96;&#96;, and cannot be used otherwise."
      },
      {
        "name": "mode",
        "type": "string",
        "description": "The predictive scaling mode. Defaults to &#96;&#96;ForecastOnly&#96;&#96; if not specified."
      },
      {
        "name": "metric_specifications",
        "type": "array",
        "description": "This structure includes the metrics and target utilization to use for predictive scaling. <br />This is an array, but we currently only support a single metric specification. That is, you can specify a target value and a single metric pair, or a target value and one scaling metric and one load metric.",
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
        "description": "The amount of time, in seconds, that the start time can be advanced. <br />The value must be less than the forecast interval duration of 3600 seconds (60 minutes). Defaults to 300 seconds if not specified."
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
    "description": "The scalable dimension. This string consists of the service namespace, resource type, and scaling property.<br />+ &#96;&#96;ecs:service:DesiredCount&#96;&#96; - The task count of an ECS service.<br />+ &#96;&#96;elasticmapreduce:instancegroup:InstanceCount&#96;&#96; - The instance count of an EMR Instance Group.<br />+ &#96;&#96;ec2:spot-fleet-request:TargetCapacity&#96;&#96; - The target capacity of a Spot Fleet.<br />+ &#96;&#96;appstream:fleet:DesiredCapacity&#96;&#96; - The capacity of an AppStream 2.0 fleet.<br />+ &#96;&#96;dynamodb:table:ReadCapacityUnits&#96;&#96; - The provisioned read capacity for a DynamoDB table.<br />+ &#96;&#96;dynamodb:table:WriteCapacityUnits&#96;&#96; - The provisioned write capacity for a DynamoDB table.<br />+ &#96;&#96;dynamodb:index:ReadCapacityUnits&#96;&#96; - The provisioned read capacity for a DynamoDB global secondary index.<br />+ &#96;&#96;dynamodb:index:WriteCapacityUnits&#96;&#96; - The provisioned write capacity for a DynamoDB global secondary index.<br />+ &#96;&#96;rds:cluster:ReadReplicaCount&#96;&#96; - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.<br />+ &#96;&#96;sagemaker:variant:DesiredInstanceCount&#96;&#96; - The number of EC2 instances for a SageMaker model endpoint variant.<br />+ &#96;&#96;custom-resource:ResourceType:Property&#96;&#96; - The scalable dimension for a custom resource provided by your own application or service.<br />+ &#96;&#96;comprehend:document-classifier-endpoint:DesiredInferenceUnits&#96;&#96; - The number of inference units for an Amazon Comprehend document classification endpoint.<br />+ &#96;&#96;comprehend:entity-recognizer-endpoint:DesiredInferenceUnits&#96;&#96; - The number of inference units for an Amazon Comprehend entity recognizer endpoint.<br />+ &#96;&#96;lambda:function:ProvisionedConcurrency&#96;&#96; - The provisioned concurrency for a Lambda function.<br />+ &#96;&#96;cassandra:table:ReadCapacityUnits&#96;&#96; - The provisioned read capacity for an Amazon Keyspaces table.<br />+ &#96;&#96;cassandra:table:WriteCapacityUnits&#96;&#96; - The provisioned write capacity for an Amazon Keyspaces table.<br />+ &#96;&#96;kafka:broker-storage:VolumeSize&#96;&#96; - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.<br />+ &#96;&#96;elasticache:cache-cluster:Nodes&#96;&#96; - The number of nodes for an Amazon ElastiCache cache cluster.<br />+ &#96;&#96;elasticache:replication-group:NodeGroups&#96;&#96; - The number of node groups for an Amazon ElastiCache replication group.<br />+ &#96;&#96;elasticache:replication-group:Replicas&#96;&#96; - The number of replicas per node group for an Amazon ElastiCache replication group.<br />+ &#96;&#96;neptune:cluster:ReadReplicaCount&#96;&#96; - The count of read replicas in an Amazon Neptune DB cluster.<br />+ &#96;&#96;sagemaker:variant:DesiredProvisionedConcurrency&#96;&#96; - The provisioned concurrency for a SageMaker serverless endpoint.<br />+ &#96;&#96;sagemaker:inference-component:DesiredCopyCount&#96;&#96; - The number of copies across an endpoint for a SageMaker inference component.<br />+ &#96;&#96;workspaces:workspacespool:DesiredUserSessions&#96;&#96; - The number of user sessions for the WorkSpaces in the pool."
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
WHERE region = 'us-east-1' AND Identifier = '<Arn>|<ScalableDimension>';
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
WHERE region = 'us-east-1';
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
'{{ PolicyType }}',
 '{{ PolicyName }}',
'{{ region }}';
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
 '{{ PolicyType }}',
 '{{ ResourceId }}',
 '{{ ScalingTargetId }}',
 '{{ PolicyName }}',
 '{{ ServiceNamespace }}',
 '{{ ScalableDimension }}',
 '{{ TargetTrackingScalingPolicyConfiguration }}',
 '{{ StepScalingPolicyConfiguration }}',
 '{{ PredictiveScalingPolicyConfiguration }}',
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
  - name: scaling_policy
    props:
      - name: PolicyType
        value: '{{ PolicyType }}'
      - name: ResourceId
        value: '{{ ResourceId }}'
      - name: ScalingTargetId
        value: '{{ ScalingTargetId }}'
      - name: PolicyName
        value: '{{ PolicyName }}'
      - name: ServiceNamespace
        value: '{{ ServiceNamespace }}'
      - name: ScalableDimension
        value: '{{ ScalableDimension }}'
      - name: TargetTrackingScalingPolicyConfiguration
        value:
          ScaleOutCooldown: '{{ ScaleOutCooldown }}'
          TargetValue: null
          CustomizedMetricSpecification:
            MetricName: '{{ MetricName }}'
            Metrics:
              - ReturnData: '{{ ReturnData }}'
                Expression: '{{ Expression }}'
                Label: '{{ Label }}'
                MetricStat:
                  Stat: '{{ Stat }}'
                  Metric:
                    MetricName: '{{ MetricName }}'
                    Dimensions:
                      - Value: '{{ Value }}'
                        Name: '{{ Name }}'
                    Namespace: '{{ Namespace }}'
                  Unit: '{{ Unit }}'
                Id: '{{ Id }}'
            Statistic: '{{ Statistic }}'
            Dimensions:
              - Value: '{{ Value }}'
                Name: '{{ Name }}'
            Unit: '{{ Unit }}'
            Namespace: '{{ Namespace }}'
          DisableScaleIn: '{{ DisableScaleIn }}'
          ScaleInCooldown: '{{ ScaleInCooldown }}'
          PredefinedMetricSpecification:
            PredefinedMetricType: '{{ PredefinedMetricType }}'
            ResourceLabel: '{{ ResourceLabel }}'
      - name: StepScalingPolicyConfiguration
        value:
          MetricAggregationType: '{{ MetricAggregationType }}'
          Cooldown: '{{ Cooldown }}'
          StepAdjustments:
            - MetricIntervalUpperBound: null
              MetricIntervalLowerBound: null
              ScalingAdjustment: '{{ ScalingAdjustment }}'
          MinAdjustmentMagnitude: '{{ MinAdjustmentMagnitude }}'
          AdjustmentType: '{{ AdjustmentType }}'
      - name: PredictiveScalingPolicyConfiguration
        value:
          MaxCapacityBreachBehavior: '{{ MaxCapacityBreachBehavior }}'
          MaxCapacityBuffer: '{{ MaxCapacityBuffer }}'
          Mode: '{{ Mode }}'
          MetricSpecifications:
            - CustomizedLoadMetricSpecification:
                MetricDataQueries:
                  - ReturnData: '{{ ReturnData }}'
                    Expression: '{{ Expression }}'
                    Label: '{{ Label }}'
                    MetricStat:
                      Stat: '{{ Stat }}'
                      Metric:
                        MetricName: '{{ MetricName }}'
                        Dimensions:
                          - Value: '{{ Value }}'
                            Name: '{{ Name }}'
                        Namespace: '{{ Namespace }}'
                      Unit: '{{ Unit }}'
                    Id: '{{ Id }}'
              PredefinedLoadMetricSpecification:
                PredefinedMetricType: '{{ PredefinedMetricType }}'
                ResourceLabel: '{{ ResourceLabel }}'
              TargetValue: null
              PredefinedScalingMetricSpecification:
                PredefinedMetricType: '{{ PredefinedMetricType }}'
                ResourceLabel: '{{ ResourceLabel }}'
              CustomizedCapacityMetricSpecification:
                MetricDataQueries:
                  - null
              CustomizedScalingMetricSpecification:
                MetricDataQueries:
                  - null
              PredefinedMetricPairSpecification:
                PredefinedMetricType: '{{ PredefinedMetricType }}'
                ResourceLabel: '{{ ResourceLabel }}'
          SchedulingBufferTime: '{{ SchedulingBufferTime }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.applicationautoscaling.scaling_policies
SET PatchDocument = string('{{ {
    "PolicyType": policy_type,
    "TargetTrackingScalingPolicyConfiguration": target_tracking_scaling_policy_configuration,
    "StepScalingPolicyConfiguration": step_scaling_policy_configuration,
    "PredictiveScalingPolicyConfiguration": predictive_scaling_policy_configuration
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>|<ScalableDimension>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.applicationautoscaling.scaling_policies
WHERE Identifier = '<Arn|ScalableDimension>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>scaling_policies</code> resource, the following permissions are required:

### Read
```json
application-autoscaling:DescribeScalingPolicies
```

### Create
```json
application-autoscaling:DescribeScalingPolicies,
application-autoscaling:PutScalingPolicy,
cloudwatch:GetMetricData
```

### Update
```json
application-autoscaling:DescribeScalingPolicies,
application-autoscaling:PutScalingPolicy,
cloudwatch:GetMetricData
```

### List
```json
application-autoscaling:DescribeScalingPolicies
```

### Delete
```json
application-autoscaling:DescribeScalingPolicies,
application-autoscaling:DeleteScalingPolicy
```
