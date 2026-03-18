---
title: auto_scaling_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - auto_scaling_groups
  - autoscaling
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

Creates, updates, deletes or gets an <code>auto_scaling_group</code> resource or lists <code>auto_scaling_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>auto_scaling_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td><details><summary>The <code>AWS::AutoScaling::AutoScalingGroup</code> resource defines an Amazon EC2 Auto Scaling group, which is a collection of Amazon EC2 instances that are treated as a logical grouping for the purposes of automatic scaling and management.</summary>For more information about Amazon EC2 Auto Scaling, see the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html">Amazon EC2 Auto Scaling User Guide</a>.<br />Amazon EC2 Auto Scaling configures instances launched as part of an Auto Scaling group using either a <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html">launch template</a> or a launch configuration. We strongly recommend that you do not use launch configurations. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/launch-configurations.html">Launch configurations</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.<br />For help migrating from launch configurations to launch templates, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/migrate-launch-configurations-with-cloudformation.html">Migrate CloudFormation stacks from launch configurations to launch templates</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.autoscaling.auto_scaling_groups" /></td></tr>
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
    "name": "lifecycle_hook_specification_list",
    "type": "array",
    "description": "One or more lifecycle hooks to add to the Auto Scaling group before instances are launched.",
    "children": [
      {
        "name": "lifecycle_hook_name",
        "type": "string",
        "description": "The name of the lifecycle hook."
      },
      {
        "name": "lifecycle_transition",
        "type": "string",
        "description": "<details><summary>The lifecycle transition. For Auto Scaling groups, there are two major lifecycle transitions.</summary>+  To create a lifecycle hook for scale-out events, specify <code>autoscaling:EC2_INSTANCE_LAUNCHING</code>.<br />+  To create a lifecycle hook for scale-in events, specify <code>autoscaling:EC2_INSTANCE_TERMINATING</code>.</details>"
      },
      {
        "name": "heartbeat_timeout",
        "type": "integer",
        "description": "The maximum time, in seconds, that can elapse before the lifecycle hook times out. The range is from <code>30</code> to <code>7200</code> seconds. The default value is <code>3600</code> seconds (1 hour)."
      },
      {
        "name": "notification_metadata",
        "type": "string",
        "description": "Additional information that you want to include any time Amazon EC2 Auto Scaling sends a message to the notification target."
      },
      {
        "name": "default_result",
        "type": "string",
        "description": "<details><summary>The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an unexpected failure occurs. The default value is <code>ABANDON</code>.</summary>Valid values: <code>CONTINUE</code> | <code>ABANDON</code></details>"
      },
      {
        "name": "notification_target_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the notification target that Amazon EC2 Auto Scaling sends notifications to when an instance is in a wait state for the lifecycle hook. You can specify an Amazon SNS topic or an Amazon SQS queue."
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": "<details><summary>The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target. For information about creating this role, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/prepare-for-lifecycle-notifications.html\">Prepare to add a lifecycle hook to your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</summary>Valid only if the notification target is an Amazon SNS topic or an Amazon SQS queue.</details>"
      }
    ]
  },
  {
    "name": "load_balancer_names",
    "type": "array",
    "description": "A list of Classic Load Balancers associated with this Auto Scaling group. For Application Load Balancers, Network Load Balancers, and Gateway Load Balancers, specify the <code>TargetGroupARNs</code> property instead."
  },
  {
    "name": "launch_configuration_name",
    "type": "string",
    "description": "<details><summary>The name of the launch configuration to use to launch instances.</summary>Required only if you don't specify <code>LaunchTemplate</code>, <code>MixedInstancesPolicy</code>, or <code>InstanceId</code>.</details>"
  },
  {
    "name": "service_linked_role_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to call other AWS service on your behalf. By default, Amazon EC2 Auto Scaling uses a service-linked role named <code>AWSServiceRoleForAutoScaling</code>, which it creates if it does not exist. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-service-linked-role.html\">Service-linked roles</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>."
  },
  {
    "name": "availability_zone_impairment_policy",
    "type": "object",
    "description": "The Availability Zone impairment policy.",
    "children": [
      {
        "name": "zonal_shift_enabled",
        "type": "boolean",
        "description": "If <code>true</code>, enable zonal shift for your Auto Scaling group."
      },
      {
        "name": "impaired_zone_health_check_behavior",
        "type": "string",
        "description": "Specifies the health check behavior for the impaired Availability Zone in an active zonal shift. If you select <code>Replace unhealthy</code>, instances that appear unhealthy will be replaced in all Availability Zones. If you select <code>Ignore unhealthy</code>, instances will not be replaced in the Availability Zone with the active zonal shift. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-zonal-shift.html\">Auto Scaling group zonal shift</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>."
      }
    ]
  },
  {
    "name": "target_group_arns",
    "type": "array",
    "description": "The Amazon Resource Names (ARN) of the Elastic Load Balancing target groups to associate with the Auto Scaling group. Instances are registered as targets with the target groups. The target groups receive incoming traffic and route requests to one or more registered targets. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html\">Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>."
  },
  {
    "name": "cooldown",
    "type": "string",
    "description": "<details><summary><i>Only needed if you use simple scaling policies.</i></summary>The amount of time, in seconds, between one scaling activity ending and another one starting due to simple scaling policies. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-scaling-cooldowns.html\">Scaling cooldowns for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.<br />Default: <code>300</code> seconds</details>"
  },
  {
    "name": "notification_configurations",
    "type": "array",
    "description": "Configures an Auto Scaling group to send notifications when specified events take place.",
    "children": [
      {
        "name": "topic_arn",
        "type": "array",
        "description": "The Amazon Resource Name (ARN) of the Amazon SNS topic."
      },
      {
        "name": "notification_types",
        "type": "array",
        "description": "<details><summary>A list of event types that send a notification. Event types can include any of the following types.</summary><i>Allowed values</i>:<br />+   <code>autoscaling:EC2_INSTANCE_LAUNCH</code><br />+   <code>autoscaling:EC2_INSTANCE_LAUNCH_ERROR</code><br />+   <code>autoscaling:EC2_INSTANCE_TERMINATE</code><br />+   <code>autoscaling:EC2_INSTANCE_TERMINATE_ERROR</code><br />+   <code>autoscaling:TEST_NOTIFICATION</code></details>"
      }
    ]
  },
  {
    "name": "desired_capacity",
    "type": "string",
    "description": "<details><summary>The desired capacity is the initial capacity of the Auto Scaling group at the time of its creation and the capacity it attempts to maintain. It can scale beyond this capacity if you configure automatic scaling.</summary>The number must be greater than or equal to the minimum size of the group and less than or equal to the maximum size of the group. If you do not specify a desired capacity when creating the stack, the default is the minimum size of the group.<br />CloudFormation marks the Auto Scaling group as successful (by setting its status to CREATE_COMPLETE) when the desired capacity is reached. However, if a maximum Spot price is set in the launch template or launch configuration that you specified, then desired capacity is not used as a criteria for success. Whether your request is fulfilled depends on Spot Instance capacity and your maximum price.</details>"
  },
  {
    "name": "health_check_grace_period",
    "type": "integer",
    "description": "<details><summary>The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before checking the health status of an EC2 instance that has come into service and marking it unhealthy due to a failed health check. This is useful if your instances do not immediately pass their health checks after they enter the <code>InService</code> state. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/health-check-grace-period.html\">Set the health check grace period for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</summary>Default: <code>0</code> seconds</details>"
  },
  {
    "name": "default_instance_warmup",
    "type": "integer",
    "description": "<details><summary>The amount of time, in seconds, until a new instance is considered to have finished initializing and resource consumption to become stable after it enters the <code>InService</code> state.</summary>During an instance refresh, Amazon EC2 Auto Scaling waits for the warm-up period after it replaces an instance before it moves on to replacing the next instance. Amazon EC2 Auto Scaling also waits for the warm-up period before aggregating the metrics for new instances with existing instances in the Amazon CloudWatch metrics that are used for scaling, resulting in more reliable usage data. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-default-instance-warmup.html\">Set the default instance warmup for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.<br />To manage various warm-up settings at the group level, we recommend that you set the default instance warmup, <i>even if it is set to 0 seconds</i>. To remove a value that you previously set, include the property but specify <code>-1</code> for the value. However, we strongly recommend keeping the default instance warmup enabled by specifying a value of <code>0</code> or other nominal value.<br />Default: None</details>"
  },
  {
    "name": "skip_zonal_shift_validation",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "new_instances_protected_from_scale_in",
    "type": "boolean",
    "description": "Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling when scaling in. For more information about preventing instances from terminating on scale in, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-protection.html\">Use instance scale-in protection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>."
  },
  {
    "name": "launch_template",
    "type": "object",
    "description": "<details><summary>Information used to specify the launch template and version to use to launch instances. You can alternatively associate a launch template to the Auto Scaling group by specifying a <code>MixedInstancesPolicy</code>. For more information about creating launch templates, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-template.html\">Create a launch template for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</summary>If you omit this property, you must specify <code>MixedInstancesPolicy</code>, <code>LaunchConfigurationName</code>, or <code>InstanceId</code>.</details>",
    "children": [
      {
        "name": "launch_template_name",
        "type": "string",
        "description": "<details><summary>The name of the launch template.</summary>You must specify the <code>LaunchTemplateName</code> or the <code>LaunchTemplateID</code>, but not both.</details>"
      },
      {
        "name": "version",
        "type": "string",
        "description": "<details><summary>The version number of the launch template.</summary>Specifying <code>$Latest</code> or <code>$Default</code> for the template version number is not supported. However, you can specify <code>LatestVersionNumber</code> or <code>DefaultVersionNumber</code> using the <code>Fn::GetAtt</code> intrinsic function. For more information, see <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html\">Fn::GetAtt</a>.<br />For an example of using the <code>Fn::GetAtt</code> function, see the <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#aws-resource-autoscaling-autoscalinggroup--examples\">Examples</a> section of the <code>AWS::AutoScaling::AutoScalingGroup</code> resource.</details>"
      },
      {
        "name": "launch_template_id",
        "type": "string",
        "description": "<details><summary>The ID of the launch template.</summary>You must specify the <code>LaunchTemplateID</code> or the <code>LaunchTemplateName</code>, but not both.</details>"
      }
    ]
  },
  {
    "name": "mixed_instances_policy",
    "type": "object",
    "description": "<details><summary>An embedded object that specifies a mixed instances policy.</summary>The policy includes properties that not only define the distribution of On-Demand Instances and Spot Instances, the maximum price to pay for Spot Instances (optional), and how the Auto Scaling group allocates instance types to fulfill On-Demand and Spot capacities, but also the properties that specify the instance configuration information—the launch template and instance types. The policy can also include a weight for each instance type and different launch templates for individual instance types.<br />For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html\">Auto Scaling groups with multiple instance types and purchase options</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</details>",
    "children": [
      {
        "name": "instances_distribution",
        "type": "object",
        "description": "The instances distribution.",
        "children": [
          {
            "name": "on_demand_allocation_strategy",
            "type": "string",
            "description": "<details><summary>The allocation strategy to apply to your On-Demand Instances when they are launched. Possible instance types are determined by the launch template overrides that you specify.</summary>The following lists the valid values:<br />+ lowest-price Uses price to determine which instance types are the highest priority, launching the lowest priced instance types within an Availability Zone first. This is the default value for Auto Scaling groups that specify InstanceRequirements. + prioritized You set the order of instance types for the launch template overrides from highest to lowest priority (from first to last in the list). Amazon EC2 Auto Scaling launches your highest priority instance types first. If all your On-Demand capacity cannot be fulfilled using your highest priority instance type, then Amazon EC2 Auto Scaling launches the remaining capacity using the second priority instance type, and so on. This is the default value for Auto Scaling groups that don't specify InstanceRequirements and cannot be used for groups that do.</details>"
          },
          {
            "name": "on_demand_base_capacity",
            "type": "integer",
            "description": "<details><summary>The minimum amount of the Auto Scaling group's capacity that must be fulfilled by On-Demand Instances. This base portion is launched first as your group scales.</summary>This number has the same unit of measurement as the group's desired capacity. If you change the default unit of measurement (number of instances) by specifying weighted capacity values in your launch template overrides list, or by changing the default desired capacity type setting of the group, you must specify this number using the same unit of measurement.<br />Default: 0<br />An update to this setting means a gradual replacement of instances to adjust the current On-Demand Instance levels. When replacing instances, Amazon EC2 Auto Scaling launches new instances before terminating the previous ones.</details>"
          },
          {
            "name": "on_demand_percentage_above_base_capacity",
            "type": "integer",
            "description": "<details><summary>Controls the percentages of On-Demand Instances and Spot Instances for your additional capacity beyond <code>OnDemandBaseCapacity</code>. Expressed as a number (for example, 20 specifies 20% On-Demand Instances, 80% Spot Instances). If set to 100, only On-Demand Instances are used.</summary>Default: 100<br />An update to this setting means a gradual replacement of instances to adjust the current On-Demand and Spot Instance levels for your additional capacity higher than the base capacity. When replacing instances, Amazon EC2 Auto Scaling launches new instances before terminating the previous ones.</details>"
          },
          {
            "name": "spot_instance_pools",
            "type": "integer",
            "description": "<details><summary>The number of Spot Instance pools across which to allocate your Spot Instances. The Spot pools are determined from the different instance types in the overrides. Valid only when the <code>SpotAllocationStrategy</code> is <code>lowest-price</code>. Value must be in the range of 1–20.</summary>Default: 2</details>"
          },
          {
            "name": "spot_allocation_strategy",
            "type": "string",
            "description": "<details><summary>The allocation strategy to apply to your Spot Instances when they are launched. Possible instance types are determined by the launch template overrides that you specify.</summary>The following lists the valid values:<br />+ capacity-optimized Requests Spot Instances using pools that are optimally chosen based on the available Spot capacity. This strategy has the lowest risk of interruption. To give certain instance types a higher chance of launching first, use capacity-optimized-prioritized. + capacity-optimized-prioritized You set the order of instance types for the launch template overrides from highest to lowest priority (from first to last in the list). Amazon EC2 Auto Scaling honors the instance type priorities on a best effort basis but optimizes for capacity first. Note that if the On-Demand allocation strategy is set to prioritized, the same priority is applied when fulfilling On-Demand capacity. This is not a valid value for Auto Scaling groups that specify InstanceRequirements. + lowest-price Requests Spot Instances using the lowest priced pools within an Availability Zone, across the number of Spot pools that you specify for the SpotInstancePools property. To ensure that your desired capacity is met, you might receive Spot Instances from several pools. This is the default value, but it might lead to high interruption rates because this strategy only considers instance price and not available capacity. + price-capacity-optimized (recommended) The price and capacity optimized allocation strategy looks at both price and capacity to select the Spot Instance pools that are the least likely to be interrupted and have the lowest possible price.</details>"
          },
          {
            "name": "spot_max_price",
            "type": "string",
            "description": "<details><summary>The maximum price per unit hour that you are willing to pay for a Spot Instance. If your maximum price is lower than the Spot price for the instance types that you selected, your Spot Instances are not launched. We do not recommend specifying a maximum price because it can lead to increased interruptions. When Spot Instances launch, you pay the current Spot price. To remove a maximum price that you previously set, include the property but specify an empty string (\"\") for the value.</summary>If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify one.<br />Valid Range: Minimum value of 0.001</details>"
          }
        ]
      },
      {
        "name": "launch_template",
        "type": "object",
        "description": "One or more launch templates and the instance types (overrides) that are used to launch EC2 instances to fulfill On-Demand and Spot capacities.",
        "children": [
          {
            "name": "overrides",
            "type": "array",
            "description": "Any properties that you specify override the same properties in the launch template.",
            "children": [
              {
                "name": "weighted_capacity",
                "type": "string",
                "description": "<details><summary>If you provide a list of instance types to use, you can specify the number of capacity units provided by each instance type in terms of virtual CPUs, memory, storage, throughput, or other relative performance characteristic. When a Spot or On-Demand Instance is launched, the capacity units count toward the desired capacity. Amazon EC2 Auto Scaling launches instances until the desired capacity is totally fulfilled, even if this results in an overage. For example, if there are two units remaining to fulfill capacity, and Amazon EC2 Auto Scaling can only launch an instance with a <code>WeightedCapacity</code> of five units, the instance is launched, and the desired capacity is exceeded by three units. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups-instance-weighting.html\">Configure instance weighting for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. Value must be in the range of 1-999.</summary>If you specify a value for <code>WeightedCapacity</code> for one instance type, you must specify a value for <code>WeightedCapacity</code> for all of them.<br />Every Auto Scaling group has three size parameters (<code>DesiredCapacity</code>, <code>MaxSize</code>, and <code>MinSize</code>). Usually, you set these sizes based on a specific number of instances. However, if you configure a mixed instances policy that defines weights for the instance types, you must specify these sizes with the same units that you use for weighting instances.</details>"
              },
              {
                "name": "instance_requirements",
                "type": "object",
                "description": "<details><summary>The instance requirements. Amazon EC2 Auto Scaling uses your specified requirements to identify instance types. Then, it uses your On-Demand and Spot allocation strategies to launch instances from these instance types.</summary>You can specify up to four separate sets of instance requirements per Auto Scaling group. This is useful for provisioning instances from different Amazon Machine Images (AMIs) in the same Auto Scaling group. To do this, create the AMIs and create a new launch template for each AMI. Then, create a compatible set of instance requirements for each launch template.<br />If you specify <code>InstanceRequirements</code>, you can't specify <code>InstanceType</code>.</details>"
              },
              {
                "name": "instance_type",
                "type": "string",
                "description": "<details><summary>The instance type, such as <code>m3.xlarge</code>. You must specify an instance type that is supported in your requested Region and Availability Zones. For more information, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html\">Instance types</a> in the <i>Amazon EC2 User Guide</i>.</summary>You can specify up to 40 instance types per Auto Scaling group.</details>"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "vpc_zone_identifier",
    "type": "array",
    "description": "<details><summary>A list of subnet IDs for a virtual private cloud (VPC) where instances in the Auto Scaling group can be created.</summary>If this resource specifies public subnets and is also in a VPC that is defined in the same stack template, you must use the <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html\">DependsOn attribute</a> to declare a dependency on the <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc-gateway-attachment.html\">VPC-gateway attachment</a>.<br />When you update <code>VPCZoneIdentifier</code>, this retains the same Auto Scaling group and replaces old instances with new ones, according to the specified subnets. You can optionally specify how CloudFormation handles these updates by using an <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html\">UpdatePolicy attribute</a>.<br />Required to launch instances into a nondefault VPC. If you specify <code>VPCZoneIdentifier</code> with <code>AvailabilityZones</code>, the subnets that you specify for this property must reside in those Availability Zones.</details>"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "One or more tags. You can tag your Auto Scaling group and propagate the tags to the Amazon EC2 instances it launches. Tags are not propagated to Amazon EBS volumes. To add tags to Amazon EBS volumes, specify the tags in a launch template but use caution. If the launch template specifies an instance tag with a key that is also specified for the Auto Scaling group, Amazon EC2 Auto Scaling overrides the value of that instance tag with the value specified by the Auto Scaling group. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-tagging.html\">Tag Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The tag value."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The tag key."
      },
      {
        "name": "propagate_at_launch",
        "type": "boolean",
        "description": "Set to <code>true</code> if you want CloudFormation to copy the tag to EC2 instances that are launched as part of the Auto Scaling group. Set to <code>false</code> if you want the tag attached only to the Auto Scaling group and not copied to any instances launched as part of the Auto Scaling group."
      }
    ]
  },
  {
    "name": "context",
    "type": "string",
    "description": "Reserved."
  },
  {
    "name": "capacity_rebalance",
    "type": "boolean",
    "description": "Indicates whether Capacity Rebalancing is enabled. Otherwise, Capacity Rebalancing is disabled. When you turn on Capacity Rebalancing, Amazon EC2 Auto Scaling attempts to launch a Spot Instance whenever Amazon EC2 notifies that a Spot Instance is at an elevated risk of interruption. After launching a new instance, it then terminates an old instance. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-capacity-rebalancing.html\">Use Capacity Rebalancing to handle Amazon EC2 Spot Interruptions</a> in the in the <i>Amazon EC2 Auto Scaling User Guide</i>."
  },
  {
    "name": "instance_id",
    "type": "string",
    "description": "<details><summary>The ID of the instance used to base the launch configuration on. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-asg-from-instance.html\">Create an Auto Scaling group using an EC2 instance</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</summary>If you specify <code>LaunchTemplate</code>, <code>MixedInstancesPolicy</code>, or <code>LaunchConfigurationName</code>, don't specify <code>InstanceId</code>.</details>"
  },
  {
    "name": "auto_scaling_group_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "availability_zones",
    "type": "array",
    "description": "A list of Availability Zones where instances in the Auto Scaling group can be created. Used for launching into the default VPC subnet in each Availability Zone when not using the <code>VPCZoneIdentifier</code> property, or for attaching a network interface when an existing network interface ID is specified in a launch template."
  },
  {
    "name": "availability_zone_distribution",
    "type": "object",
    "description": "The instance capacity distribution across Availability Zones.",
    "children": [
      {
        "name": "capacity_distribution_strategy",
        "type": "string",
        "description": "<details><summary>If launches fail in an Availability Zone, the following strategies are available. The default is <code>balanced-best-effort</code>.</summary>+  <code>balanced-only</code> - If launches fail in an Availability Zone, Auto Scaling will continue to attempt to launch in the unhealthy zone to preserve a balanced distribution.<br />+  <code>balanced-best-effort</code> - If launches fail in an Availability Zone, Auto Scaling will attempt to launch in another healthy Availability Zone instead.</details>"
      }
    ]
  },
  {
    "name": "metrics_collection",
    "type": "array",
    "description": "Enables the monitoring of group metrics of an Auto Scaling group. By default, these metrics are disabled.",
    "children": [
      {
        "name": "metrics",
        "type": "array",
        "description": "<details><summary>Identifies the metrics to enable.</summary>You can specify one or more of the following metrics:<br />+   <code>GroupMinSize</code><br />+   <code>GroupMaxSize</code><br />+   <code>GroupDesiredCapacity</code><br />+   <code>GroupInServiceInstances</code><br />+   <code>GroupPendingInstances</code><br />+   <code>GroupStandbyInstances</code><br />+   <code>GroupTerminatingInstances</code><br />+   <code>GroupTotalInstances</code><br />+   <code>GroupInServiceCapacity</code><br />+   <code>GroupPendingCapacity</code><br />+   <code>GroupStandbyCapacity</code><br />+   <code>GroupTerminatingCapacity</code><br />+   <code>GroupTotalCapacity</code><br />+   <code>WarmPoolDesiredCapacity</code><br />+   <code>WarmPoolWarmedCapacity</code><br />+   <code>WarmPoolPendingCapacity</code><br />+   <code>WarmPoolTerminatingCapacity</code><br />+   <code>WarmPoolTotalCapacity</code><br />+   <code>GroupAndWarmPoolDesiredCapacity</code><br />+   <code>GroupAndWarmPoolTotalCapacity</code><br />If you specify <code>Granularity</code> and don't specify any metrics, all metrics are enabled.<br />For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-metrics.html\">Amazon CloudWatch metrics for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</details>"
      },
      {
        "name": "granularity",
        "type": "string",
        "description": "The frequency at which Amazon EC2 Auto Scaling sends aggregated data to CloudWatch. The only valid value is <code>1Minute</code>."
      }
    ]
  },
  {
    "name": "instance_maintenance_policy",
    "type": "object",
    "description": "An instance maintenance policy. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-maintenance-policy.html\">Set instance maintenance policy</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.",
    "children": [
      {
        "name": "max_healthy_percentage",
        "type": "integer",
        "description": "<details><summary>Specifies the upper threshold as a percentage of the desired capacity of the Auto Scaling group. It represents the maximum percentage of the group that can be in service and healthy, or pending, to support your workload when replacing instances. Value range is 100 to 200. To clear a previously set value, specify a value of <code>-1</code>.</summary>Both <code>MinHealthyPercentage</code> and <code>MaxHealthyPercentage</code> must be specified, and the difference between them cannot be greater than 100. A large range increases the number of instances that can be replaced at the same time.</details>"
      },
      {
        "name": "min_healthy_percentage",
        "type": "integer",
        "description": "Specifies the lower threshold as a percentage of the desired capacity of the Auto Scaling group. It represents the minimum percentage of the group to keep in service, healthy, and ready to use to support your workload when replacing instances. Value range is 0 to 100. To clear a previously set value, specify a value of <code>-1</code>."
      }
    ]
  },
  {
    "name": "max_size",
    "type": "string",
    "description": "<details><summary>The maximum size of the group.</summary>With a mixed instances policy that uses instance weighting, Amazon EC2 Auto Scaling may need to go above <code>MaxSize</code> to meet your capacity requirements. In this event, Amazon EC2 Auto Scaling will never go above <code>MaxSize</code> by more than your largest instance weight (weights that define how many units each instance contributes to the desired capacity of the group).</details>"
  },
  {
    "name": "min_size",
    "type": "string",
    "description": "The minimum size of the group."
  },
  {
    "name": "termination_policies",
    "type": "array",
    "description": "<details><summary>A policy or a list of policies that are used to select the instance to terminate. These policies are executed in the order that you list them. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-termination-policies.html\">Configure termination policies for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</summary>Valid values: <code>Default</code> | <code>AllocationStrategy</code> | <code>ClosestToNextInstanceHour</code> | <code>NewestInstance</code> | <code>OldestInstance</code> | <code>OldestLaunchConfiguration</code> | <code>OldestLaunchTemplate</code> | <code>arn:aws:lambda:region:account-id:function:my-function:my-alias</code></details>"
  },
  {
    "name": "auto_scaling_group_name",
    "type": "string",
    "description": "<details><summary>The name of the Auto Scaling group. This name must be unique per Region per account.</summary>The name can contain any ASCII character 33 to 126 including most punctuation characters, digits, and upper and lowercased letters.<br />You cannot use a colon (:) in the name.</details>"
  },
  {
    "name": "traffic_sources",
    "type": "array",
    "description": "The traffic sources associated with this Auto Scaling group.",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": "<details><summary>Provides additional context for the value of <code>Identifier</code>.</summary>The following lists the valid values:<br />+  <code>elb</code> if <code>Identifier</code> is the name of a Classic Load Balancer.<br />+  <code>elbv2</code> if <code>Identifier</code> is the ARN of an Application Load Balancer, Gateway Load Balancer, or Network Load Balancer target group.<br />+  <code>vpc-lattice</code> if <code>Identifier</code> is the ARN of a VPC Lattice target group.<br />Required if the identifier is the name of a Classic Load Balancer.</details>"
      },
      {
        "name": "identifier",
        "type": "string",
        "description": "<details><summary>Identifies the traffic source.</summary>For Application Load Balancers, Gateway Load Balancers, Network Load Balancers, and VPC Lattice, this will be the Amazon Resource Name (ARN) for a target group in this account and Region. For Classic Load Balancers, this will be the name of the Classic Load Balancer in this account and Region.<br />For example:<br />+  Application Load Balancer ARN: <code>arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/1234567890123456</code><br />+  Classic Load Balancer name: <code>my-classic-load-balancer</code><br />+  VPC Lattice ARN: <code>arn:aws:vpc-lattice:us-west-2:123456789012:targetgroup/tg-1234567890123456</code><br />To get the ARN of a target group for a Application Load Balancer, Gateway Load Balancer, or Network Load Balancer, or the name of a Classic Load Balancer, use the Elastic Load Balancing <a href=\"https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html\">DescribeTargetGroups</a> and <a href=\"https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html\">DescribeLoadBalancers</a> API operations.<br />To get the ARN of a target group for VPC Lattice, use the VPC Lattice <a href=\"https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_GetTargetGroup.html\">GetTargetGroup</a> API operation.</details>"
      }
    ]
  },
  {
    "name": "desired_capacity_type",
    "type": "string",
    "description": "<details><summary>The unit of measurement for the value specified for desired capacity. Amazon EC2 Auto Scaling supports <code>DesiredCapacityType</code> for attribute-based instance type selection only. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-mixed-instances-group-attribute-based-instance-type-selection.html\">Create a mixed instances group using attribute-based instance type selection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</summary>By default, Amazon EC2 Auto Scaling specifies <code>units</code>, which translates into number of instances.<br />Valid values: <code>units</code> | <code>vcpu</code> | <code>memory-mib</code></details>"
  },
  {
    "name": "placement_group",
    "type": "string",
    "description": "<details><summary>The name of the placement group into which to launch your instances. For more information, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html\">Placement groups</a> in the <i>Amazon EC2 User Guide</i>.</summary>A <i>cluster</i> placement group is a logical grouping of instances within a single Availability Zone. You cannot specify multiple Availability Zones and a cluster placement group.</details>"
  },
  {
    "name": "capacity_reservation_specification",
    "type": "object",
    "description": "The capacity reservation specification.",
    "children": [
      {
        "name": "capacity_reservation_preference",
        "type": "string",
        "description": "<details><summary>The capacity reservation preference. The following options are available:</summary>+  <code>capacity-reservations-only</code> - Auto Scaling will only launch instances into a Capacity Reservation or Capacity Reservation resource group. If capacity isn't available, instances will fail to launch.<br />+  <code>capacity-reservations-first</code> - Auto Scaling will try to launch instances into a Capacity Reservation or Capacity Reservation resource group first. If capacity isn't available, instances will run in On-Demand capacity.<br />+  <code>none</code> - Auto Scaling will not launch instances into a Capacity Reservation. Instances will run in On-Demand capacity.<br />+  <code>default</code> - Auto Scaling uses the Capacity Reservation preference from your launch template or an open Capacity Reservation.</details>"
      },
      {
        "name": "capacity_reservation_target",
        "type": "object",
        "description": "Describes a target Capacity Reservation or Capacity Reservation resource group.",
        "children": [
          {
            "name": "capacity_reservation_ids",
            "type": "array",
            "description": "The Capacity Reservation IDs to launch instances into."
          },
          {
            "name": "capacity_reservation_resource_group_arns",
            "type": "array",
            "description": "The resource group ARNs of the Capacity Reservation to launch instances into."
          }
        ]
      }
    ]
  },
  {
    "name": "health_check_type",
    "type": "string",
    "description": "<details><summary>A comma-separated value string of one or more health check types.</summary>The valid values are <code>EC2</code>, <code>EBS</code>, <code>ELB</code>, and <code>VPC_LATTICE</code>. <code>EC2</code> is the default health check and cannot be disabled. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-health-checks.html\">Health checks for instances in an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.<br />Only specify <code>EC2</code> if you must clear a value that was previously set.</details>"
  },
  {
    "name": "max_instance_lifetime",
    "type": "integer",
    "description": "The maximum amount of time, in seconds, that an instance can be in service. The default is null. If specified, the value must be either 0 or a number equal to or greater than 86,400 seconds (1 day). For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-max-instance-lifetime.html\">Replace Auto Scaling instances based on maximum instance lifetime</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>."
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
    "name": "auto_scaling_group_name",
    "type": "string",
    "description": "<details><summary>The name of the Auto Scaling group. This name must be unique per Region per account.</summary>The name can contain any ASCII character 33 to 126 including most punctuation characters, digits, and upper and lowercased letters.<br />You cannot use a colon (:) in the name.</details>"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html"><code>AWS::AutoScaling::AutoScalingGroup</code></a>.

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
    <td><code>auto_scaling_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="MinSize, MaxSize, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>auto_scaling_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>auto_scaling_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>auto_scaling_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>auto_scaling_groups</code></td>
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

Gets all properties from an individual <code>auto_scaling_group</code>.
```sql
SELECT
  region,
  lifecycle_hook_specification_list,
  load_balancer_names,
  launch_configuration_name,
  service_linked_role_arn,
  availability_zone_impairment_policy,
  target_group_arns,
  cooldown,
  notification_configurations,
  desired_capacity,
  health_check_grace_period,
  default_instance_warmup,
  skip_zonal_shift_validation,
  new_instances_protected_from_scale_in,
  launch_template,
  mixed_instances_policy,
  vpc_zone_identifier,
  tags,
  context,
  capacity_rebalance,
  instance_id,
  auto_scaling_group_arn,
  availability_zones,
  notification_configuration,
  availability_zone_distribution,
  metrics_collection,
  instance_maintenance_policy,
  max_size,
  min_size,
  termination_policies,
  auto_scaling_group_name,
  traffic_sources,
  desired_capacity_type,
  placement_group,
  capacity_reservation_specification,
  health_check_type,
  max_instance_lifetime
FROM awscc.autoscaling.auto_scaling_groups
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ auto_scaling_group_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>auto_scaling_groups</code> in a region.
```sql
SELECT
  region,
  auto_scaling_group_name
FROM awscc.autoscaling.auto_scaling_groups_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>auto_scaling_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.autoscaling.auto_scaling_groups (
  MaxSize,
  MinSize,
  region
)
SELECT
  '{{ max_size }}',
  '{{ min_size }}',
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
INSERT INTO awscc.autoscaling.auto_scaling_groups (
  LifecycleHookSpecificationList,
  LoadBalancerNames,
  LaunchConfigurationName,
  ServiceLinkedRoleARN,
  AvailabilityZoneImpairmentPolicy,
  TargetGroupARNs,
  Cooldown,
  NotificationConfigurations,
  DesiredCapacity,
  HealthCheckGracePeriod,
  DefaultInstanceWarmup,
  SkipZonalShiftValidation,
  NewInstancesProtectedFromScaleIn,
  LaunchTemplate,
  MixedInstancesPolicy,
  VPCZoneIdentifier,
  Tags,
  Context,
  CapacityRebalance,
  InstanceId,
  AvailabilityZones,
  NotificationConfiguration,
  AvailabilityZoneDistribution,
  MetricsCollection,
  InstanceMaintenancePolicy,
  MaxSize,
  MinSize,
  TerminationPolicies,
  AutoScalingGroupName,
  TrafficSources,
  DesiredCapacityType,
  PlacementGroup,
  CapacityReservationSpecification,
  HealthCheckType,
  MaxInstanceLifetime,
  region
)
SELECT
  '{{ lifecycle_hook_specification_list }}',
  '{{ load_balancer_names }}',
  '{{ launch_configuration_name }}',
  '{{ service_linked_role_arn }}',
  '{{ availability_zone_impairment_policy }}',
  '{{ target_group_arns }}',
  '{{ cooldown }}',
  '{{ notification_configurations }}',
  '{{ desired_capacity }}',
  '{{ health_check_grace_period }}',
  '{{ default_instance_warmup }}',
  '{{ skip_zonal_shift_validation }}',
  '{{ new_instances_protected_from_scale_in }}',
  '{{ launch_template }}',
  '{{ mixed_instances_policy }}',
  '{{ vpc_zone_identifier }}',
  '{{ tags }}',
  '{{ context }}',
  '{{ capacity_rebalance }}',
  '{{ instance_id }}',
  '{{ availability_zones }}',
  '{{ notification_configuration }}',
  '{{ availability_zone_distribution }}',
  '{{ metrics_collection }}',
  '{{ instance_maintenance_policy }}',
  '{{ max_size }}',
  '{{ min_size }}',
  '{{ termination_policies }}',
  '{{ auto_scaling_group_name }}',
  '{{ traffic_sources }}',
  '{{ desired_capacity_type }}',
  '{{ placement_group }}',
  '{{ capacity_reservation_specification }}',
  '{{ health_check_type }}',
  '{{ max_instance_lifetime }}',
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
  - name: auto_scaling_group
    props:
      - name: lifecycle_hook_specification_list
        value:
          - lifecycle_hook_name: '{{ lifecycle_hook_name }}'
            lifecycle_transition: '{{ lifecycle_transition }}'
            heartbeat_timeout: '{{ heartbeat_timeout }}'
            notification_metadata: '{{ notification_metadata }}'
            default_result: '{{ default_result }}'
            notification_target_arn: '{{ notification_target_arn }}'
            role_arn: '{{ role_arn }}'
      - name: load_balancer_names
        value:
          - '{{ load_balancer_names[0] }}'
      - name: launch_configuration_name
        value: '{{ launch_configuration_name }}'
      - name: service_linked_role_arn
        value: '{{ service_linked_role_arn }}'
      - name: availability_zone_impairment_policy
        value:
          zonal_shift_enabled: '{{ zonal_shift_enabled }}'
          impaired_zone_health_check_behavior: '{{ impaired_zone_health_check_behavior }}'
      - name: target_group_arns
        value:
          - '{{ target_group_arns[0] }}'
      - name: cooldown
        value: '{{ cooldown }}'
      - name: notification_configurations
        value:
          - topic_arn:
              - '{{ topic_arn[0] }}'
            notification_types:
              - '{{ notification_types[0] }}'
      - name: desired_capacity
        value: '{{ desired_capacity }}'
      - name: health_check_grace_period
        value: '{{ health_check_grace_period }}'
      - name: default_instance_warmup
        value: '{{ default_instance_warmup }}'
      - name: skip_zonal_shift_validation
        value: '{{ skip_zonal_shift_validation }}'
      - name: new_instances_protected_from_scale_in
        value: '{{ new_instances_protected_from_scale_in }}'
      - name: launch_template
        value:
          launch_template_name: '{{ launch_template_name }}'
          version: '{{ version }}'
          launch_template_id: '{{ launch_template_id }}'
      - name: mixed_instances_policy
        value:
          instances_distribution:
            on_demand_allocation_strategy: '{{ on_demand_allocation_strategy }}'
            on_demand_base_capacity: '{{ on_demand_base_capacity }}'
            on_demand_percentage_above_base_capacity: '{{ on_demand_percentage_above_base_capacity }}'
            spot_instance_pools: '{{ spot_instance_pools }}'
            spot_allocation_strategy: '{{ spot_allocation_strategy }}'
            spot_max_price: '{{ spot_max_price }}'
          launch_template:
            launch_template_specification: null
            overrides:
              - launch_template_specification: null
                weighted_capacity: '{{ weighted_capacity }}'
                instance_requirements:
                  instance_generations:
                    - '{{ instance_generations[0] }}'
                  accelerator_types:
                    - '{{ accelerator_types[0] }}'
                  memory_gi_bper_vcpu:
                    min: null
                    max: null
                  accelerator_manufacturers:
                    - '{{ accelerator_manufacturers[0] }}'
                  v_cpu_count:
                    min: '{{ min }}'
                    max: '{{ max }}'
                  local_storage: '{{ local_storage }}'
                  cpu_manufacturers:
                    - '{{ cpu_manufacturers[0] }}'
                  bare_metal: '{{ bare_metal }}'
                  require_hibernate_support: '{{ require_hibernate_support }}'
                  max_spot_price_as_percentage_of_optimal_on_demand_price: '{{ max_spot_price_as_percentage_of_optimal_on_demand_price }}'
                  on_demand_max_price_percentage_over_lowest_price: '{{ on_demand_max_price_percentage_over_lowest_price }}'
                  memory_mi_b:
                    min: '{{ min }}'
                    max: '{{ max }}'
                  local_storage_types:
                    - '{{ local_storage_types[0] }}'
                  network_interface_count:
                    min: '{{ min }}'
                    max: '{{ max }}'
                  excluded_instance_types:
                    - '{{ excluded_instance_types[0] }}'
                  allowed_instance_types:
                    - '{{ allowed_instance_types[0] }}'
                  accelerator_count:
                    min: '{{ min }}'
                    max: '{{ max }}'
                  network_bandwidth_gbps:
                    min: null
                    max: null
                  baseline_performance_factors:
                    cpu:
                      references:
                        - instance_family: '{{ instance_family }}'
                  baseline_ebs_bandwidth_mbps:
                    min: '{{ min }}'
                    max: '{{ max }}'
                  spot_max_price_percentage_over_lowest_price: '{{ spot_max_price_percentage_over_lowest_price }}'
                  accelerator_names:
                    - '{{ accelerator_names[0] }}'
                  accelerator_total_memory_mi_b:
                    min: '{{ min }}'
                    max: '{{ max }}'
                  burstable_performance: '{{ burstable_performance }}'
                  total_local_storage_gb:
                    min: null
                    max: null
                instance_type: '{{ instance_type }}'
      - name: vpc_zone_identifier
        value:
          - '{{ vpc_zone_identifier[0] }}'
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
            propagate_at_launch: '{{ propagate_at_launch }}'
      - name: context
        value: '{{ context }}'
      - name: capacity_rebalance
        value: '{{ capacity_rebalance }}'
      - name: instance_id
        value: '{{ instance_id }}'
      - name: availability_zones
        value:
          - '{{ availability_zones[0] }}'
      - name: notification_configuration
        value: null
      - name: availability_zone_distribution
        value:
          capacity_distribution_strategy: '{{ capacity_distribution_strategy }}'
      - name: metrics_collection
        value:
          - metrics:
              - '{{ metrics[0] }}'
            granularity: '{{ granularity }}'
      - name: instance_maintenance_policy
        value:
          max_healthy_percentage: '{{ max_healthy_percentage }}'
          min_healthy_percentage: '{{ min_healthy_percentage }}'
      - name: max_size
        value: '{{ max_size }}'
      - name: min_size
        value: '{{ min_size }}'
      - name: termination_policies
        value:
          - '{{ termination_policies[0] }}'
      - name: auto_scaling_group_name
        value: '{{ auto_scaling_group_name }}'
      - name: traffic_sources
        value:
          - type: '{{ type }}'
            identifier: '{{ identifier }}'
      - name: desired_capacity_type
        value: '{{ desired_capacity_type }}'
      - name: placement_group
        value: '{{ placement_group }}'
      - name: capacity_reservation_specification
        value:
          capacity_reservation_preference: '{{ capacity_reservation_preference }}'
          capacity_reservation_target:
            capacity_reservation_ids:
              - '{{ capacity_reservation_ids[0] }}'
            capacity_reservation_resource_group_arns:
              - '{{ capacity_reservation_resource_group_arns[0] }}'
      - name: health_check_type
        value: '{{ health_check_type }}'
      - name: max_instance_lifetime
        value: '{{ max_instance_lifetime }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>auto_scaling_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.autoscaling.auto_scaling_groups
SET PatchDocument = string('{{ {
    "LifecycleHookSpecificationList": lifecycle_hook_specification_list,
    "LoadBalancerNames": load_balancer_names,
    "LaunchConfigurationName": launch_configuration_name,
    "ServiceLinkedRoleARN": service_linked_role_arn,
    "AvailabilityZoneImpairmentPolicy": availability_zone_impairment_policy,
    "TargetGroupARNs": target_group_arns,
    "Cooldown": cooldown,
    "NotificationConfigurations": notification_configurations,
    "DesiredCapacity": desired_capacity,
    "HealthCheckGracePeriod": health_check_grace_period,
    "DefaultInstanceWarmup": default_instance_warmup,
    "SkipZonalShiftValidation": skip_zonal_shift_validation,
    "NewInstancesProtectedFromScaleIn": new_instances_protected_from_scale_in,
    "LaunchTemplate": launch_template,
    "MixedInstancesPolicy": mixed_instances_policy,
    "VPCZoneIdentifier": vpc_zone_identifier,
    "Tags": tags,
    "Context": context,
    "CapacityRebalance": capacity_rebalance,
    "AvailabilityZones": availability_zones,
    "NotificationConfiguration": notification_configuration,
    "AvailabilityZoneDistribution": availability_zone_distribution,
    "MetricsCollection": metrics_collection,
    "InstanceMaintenancePolicy": instance_maintenance_policy,
    "MaxSize": max_size,
    "MinSize": min_size,
    "TerminationPolicies": termination_policies,
    "TrafficSources": traffic_sources,
    "DesiredCapacityType": desired_capacity_type,
    "PlacementGroup": placement_group,
    "CapacityReservationSpecification": capacity_reservation_specification,
    "HealthCheckType": health_check_type,
    "MaxInstanceLifetime": max_instance_lifetime
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ auto_scaling_group_name }}'
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
DELETE FROM awscc.autoscaling.auto_scaling_groups
WHERE
  Identifier = '{{ auto_scaling_group_name }}' AND
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

To operate on the <code>auto_scaling_groups</code> resource, the following permissions are required:

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
autoscaling:Describe*,
managed-fleets:Get*
```

</TabItem>
<TabItem value="create">

```json
autoscaling:CreateAutoScalingGroup,
autoscaling:UpdateAutoScalingGroup,
autoscaling:CreateOrUpdateTags,
autoscaling:Describe*,
autoscaling:EnableMetricsCollection,
autoscaling:PutNotificationConfiguration,
cloudwatch:PutMetricAlarm,
ec2:Describe*,
ec2:Get*,
ec2:RunInstances,
elasticloadbalancing:Describe*,
iam:CreateServiceLinkedRole,
iam:PassRole,
managed-fleets:Get*,
managed-fleets:CreateAutoScalingGroup,
managed-fleets:UpdateAutoScalingGroup,
ssm:Get*,
vpc-lattice:DeregisterTargets,
vpc-lattice:GetTargetGroup,
vpc-lattice:ListTargets,
vpc-lattice:RegisterTargets
```

</TabItem>
<TabItem value="update">

```json
autoscaling:UpdateAutoScalingGroup,
autoscaling:CreateOrUpdateTags,
autoscaling:DeleteTags,
autoscaling:Describe*,
autoscaling:EnableMetricsCollection,
autoscaling:DisableMetricsCollection,
autoscaling:PutNotificationConfiguration,
autoscaling:DeleteNotificationConfiguration,
autoscaling:DetachLoadBalancerTargetGroups,
autoscaling:AttachLoadBalancerTargetGroups,
autoscaling:AttachLoadBalancers,
autoscaling:DetachLoadBalancers,
autoscaling:AttachTrafficSources,
autoscaling:DetachTrafficSources,
autoscaling:DeleteLifecycleHook,
autoscaling:PutLifecycleHook,
cloudwatch:PutMetricAlarm,
ec2:Describe*,
ec2:Get*,
ec2:RunInstances,
elasticloadbalancing:Describe*,
iam:CreateServiceLinkedRole,
iam:PassRole,
managed-fleets:Get*,
managed-fleets:RegisterAutoScalingGroup,
managed-fleets:DeregisterAutoScalingGroup,
managed-fleets:UpdateAutoScalingGroup,
ssm:Get*,
vpc-lattice:DeregisterTargets,
vpc-lattice:GetTargetGroup,
vpc-lattice:ListTargets,
vpc-lattice:RegisterTargets
```

</TabItem>
<TabItem value="list">

```json
autoscaling:Describe*
```

</TabItem>
<TabItem value="delete">

```json
autoscaling:DeleteAutoScalingGroup,
autoscaling:UpdateAutoScalingGroup,
autoscaling:Describe*,
managed-fleets:Get*,
managed-fleets:DeleteAutoScalingGroup
```

</TabItem>
</Tabs>