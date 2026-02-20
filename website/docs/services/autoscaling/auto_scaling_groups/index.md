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
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::AutoScaling::AutoScalingGroup&#96;&#96; resource defines an Amazon EC2 Auto Scaling group, which is a collection of Amazon EC2 instances that are treated as a logical grouping for the purposes of automatic scaling and management. <br />For more information about Amazon EC2 Auto Scaling, see the &#91;Amazon EC2 Auto Scaling User Guide&#93;(https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html). <br />Amazon EC2 Auto Scaling configures instances launched as part of an Auto Scaling group using either a &#91;launch template&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html) or a launch configuration. We strongly recommend that you do not use launch configurations. For more information, see &#91;Launch configurations&#93;(https://docs.aws.amazon.com/autoscaling/ec2/userguide/launch-configurations.html) in the &#42;Amazon EC2 Auto Scaling User Guide&#42;.<br />For help migrating from launch configurations to launch templates, see &#91;Migrate CloudFormation stacks from launch configurations to launch templates&#93;(https://docs.aws.amazon.com/autoscaling/ec2/userguide/migrate-launch-configurations-with-cloudformation.html) in the &#42;Amazon EC2 Auto Scaling User Guide&#42;.</td></tr>
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
        "description": "The lifecycle transition. For Auto Scaling groups, there are two major lifecycle transitions.<br />+ To create a lifecycle hook for scale-out events, specify &#96;&#96;autoscaling:EC2&#95;INSTANCE&#95;LAUNCHING&#96;&#96;.<br />+ To create a lifecycle hook for scale-in events, specify &#96;&#96;autoscaling:EC2&#95;INSTANCE&#95;TERMINATING&#96;&#96;."
      },
      {
        "name": "heartbeat_timeout",
        "type": "integer",
        "description": "The maximum time, in seconds, that can elapse before the lifecycle hook times out. The range is from &#96;&#96;30&#96;&#96; to &#96;&#96;7200&#96;&#96; seconds. The default value is &#96;&#96;3600&#96;&#96; seconds (1 hour)."
      },
      {
        "name": "notification_metadata",
        "type": "string",
        "description": "Additional information that you want to include any time Amazon EC2 Auto Scaling sends a message to the notification target."
      },
      {
        "name": "default_result",
        "type": "string",
        "description": "The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an unexpected failure occurs. The default value is &#96;&#96;ABANDON&#96;&#96;.<br />Valid values: &#96;&#96;CONTINUE&#96;&#96; &#124; &#96;&#96;ABANDON&#96;&#96;"
      },
      {
        "name": "notification_target_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the notification target that Amazon EC2 Auto Scaling sends notifications to when an instance is in a wait state for the lifecycle hook. You can specify an Amazon SNS topic or an Amazon SQS queue."
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": "The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target. For information about creating this role, see &#91;Prepare to add a lifecycle hook to your Auto Scaling group&#93;(https://docs.aws.amazon.com/autoscaling/ec2/userguide/prepare-for-lifecycle-notifications.html) in the &#42;Amazon EC2 Auto Scaling User Guide&#42;.<br />Valid only if the notification target is an Amazon SNS topic or an Amazon SQS queue."
      }
    ]
  },
  {
    "name": "load_balancer_names",
    "type": "array",
    "description": "A list of Classic Load Balancers associated with this Auto Scaling group. For Application Load Balancers, Network Load Balancers, and Gateway Load Balancers, specify the &#96;&#96;TargetGroupARNs&#96;&#96; property instead."
  },
  {
    "name": "launch_configuration_name",
    "type": "string",
    "description": "The name of the launch configuration to use to launch instances.<br />Required only if you don't specify &#96;&#96;LaunchTemplate&#96;&#96;, &#96;&#96;MixedInstancesPolicy&#96;&#96;, or &#96;&#96;InstanceId&#96;&#96;."
  },
  {
    "name": "service_linked_role_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to call other AWS service on your behalf. By default, Amazon EC2 Auto Scaling uses a service-linked role named &#96;&#96;AWSServiceRoleForAutoScaling&#96;&#96;, which it creates if it does not exist. For more information, see &#91;Service-linked roles&#93;(https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-service-linked-role.html) in the &#42;Amazon EC2 Auto Scaling User Guide&#42;."
  },
  {
    "name": "availability_zone_impairment_policy",
    "type": "object",
    "description": "The Availability Zone impairment policy.",
    "children": [
      {
        "name": "zonal_shift_enabled",
        "type": "boolean",
        "description": "If &#96;&#96;true&#96;&#96;, enable zonal shift for your Auto Scaling group."
      },
      {
        "name": "impaired_zone_health_check_behavior",
        "type": "string",
        "description": "Specifies the health check behavior for the impaired Availability Zone in an active zonal shift. If you select &#96;&#96;Replace unhealthy&#96;&#96;, instances that appear unhealthy will be replaced in all Availability Zones. If you select &#96;&#96;Ignore unhealthy&#96;&#96;, instances will not be replaced in the Availability Zone with the active zonal shift. For more information, see &#91;Auto Scaling group zonal shift&#93;(https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-zonal-shift.html) in the &#42;Amazon EC2 Auto Scaling User Guide&#42;."
      }
    ]
  },
  {
    "name": "target_group_arns",
    "type": "array",
    "description": "The Amazon Resource Names (ARN) of the Elastic Load Balancing target groups to associate with the Auto Scaling group. Instances are registered as targets with the target groups. The target groups receive incoming traffic and route requests to one or more registered targets. For more information, see &#91;Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group&#93;(https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html) in the &#42;Amazon EC2 Auto Scaling User Guide&#42;."
  },
  {
    "name": "cooldown",
    "type": "string",
    "description": "&#42;Only needed if you use simple scaling policies.&#42; <br />The amount of time, in seconds, between one scaling activity ending and another one starting due to simple scaling policies. For more information, see &#91;Scaling cooldowns for Amazon EC2 Auto Scaling&#93;(https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-scaling-cooldowns.html) in the &#42;Amazon EC2 Auto Scaling User Guide&#42;.<br />Default: &#96;&#96;300&#96;&#96; seconds"
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
        "description": "A list of event types that send a notification. Event types can include any of the following types. <br />&#42;Allowed values&#42;:<br />+ &#96;&#96;autoscaling:EC2&#95;INSTANCE&#95;LAUNCH&#96;&#96; <br />+ &#96;&#96;autoscaling:EC2&#95;INSTANCE&#95;LAUNCH&#95;ERROR&#96;&#96; <br />+ &#96;&#96;autoscaling:EC2&#95;INSTANCE&#95;TERMINATE&#96;&#96; <br />+ &#96;&#96;autoscaling:EC2&#95;INSTANCE&#95;TERMINATE&#95;ERROR&#96;&#96; <br />+ &#96;&#96;autoscaling:TEST&#95;NOTIFICATION&#96;&#96;"
      }
    ]
  },
  {
    "name": "desired_capacity",
    "type": "string",
    "description": "The desired capacity is the initial capacity of the Auto Scaling group at the time of its creation and the capacity it attempts to maintain. It can scale beyond this capacity if you configure automatic scaling.<br />The number must be greater than or equal to the minimum size of the group and less than or equal to the maximum size of the group. If you do not specify a desired capacity when creating the stack, the default is the minimum size of the group.<br />CloudFormation marks the Auto Scaling group as successful (by setting its status to CREATE&#95;COMPLETE) when the desired capacity is reached. However, if a maximum Spot price is set in the launch template or launch configuration that you specified, then desired capacity is not used as a criteria for success. Whether your request is fulfilled depends on Spot Instance capacity and your maximum price."
  },
  {
    "name": "health_check_grace_period",
    "type": "integer",
    "description": "The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before checking the health status of an EC2 instance that has come into service and marking it unhealthy due to a failed health check. This is useful if your instances do not immediately pass their health checks after they enter the &#96;&#96;InService&#96;&#96; state. For more information, see &#91;Set the health check grace period for an Auto Scaling group&#93;(https://docs.aws.amazon.com/autoscaling/ec2/userguide/health-check-grace-period.html) in the &#42;Amazon EC2 Auto Scaling User Guide&#42;.<br />Default: &#96;&#96;0&#96;&#96; seconds"
  },
  {
    "name": "default_instance_warmup",
    "type": "integer",
    "description": "The amount of time, in seconds, until a new instance is considered to have finished initializing and resource consumption to become stable after it enters the &#96;&#96;InService&#96;&#96; state. <br />During an instance refresh, Amazon EC2 Auto Scaling waits for the warm-up period after it replaces an instance before it moves on to replacing the next instance. Amazon EC2 Auto Scaling also waits for the warm-up period before aggregating the metrics for new instances with existing instances in the Amazon CloudWatch metrics that are used for scaling, resulting in more reliable usage data. For more information, see &#91;Set the default instance warmup for an Auto Scaling group&#93;(https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-default-instance-warmup.html) in the &#42;Amazon EC2 Auto Scaling User Guide&#42;.<br />To manage various warm-up settings at the group level, we recommend that you set the default instance warmup, &#42;even if it is set to 0 seconds&#42;. To remove a value that you previously set, include the property but specify &#96;&#96;-1&#96;&#96; for the value. However, we strongly recommend keeping the default instance warmup enabled by specifying a value of &#96;&#96;0&#96;&#96; or other nominal value.<br />Default: None"
  },
  {
    "name": "skip_zonal_shift_validation",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "new_instances_protected_from_scale_in",
    "type": "boolean",
    "description": "Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling when scaling in. For more information about preventing instances from terminating on scale in, see &#91;Use instance scale-in protection&#93;(https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-protection.html) in the &#42;Amazon EC2 Auto Scaling User Guide&#42;."
  },
  {
    "name": "launch_template",
    "type": "object",
    "description": "Information used to specify the launch template and version to use to launch instances. You can alternatively associate a launch template to the Auto Scaling group by specifying a &#96;&#96;MixedInstancesPolicy&#96;&#96;. For more information about creating launch templates, see &#91;Create a launch template for an Auto Scaling group&#93;(https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-template.html) in the &#42;Amazon EC2 Auto Scaling User Guide&#42;.<br />If you omit this property, you must specify &#96;&#96;MixedInstancesPolicy&#96;&#96;, &#96;&#96;LaunchConfigurationName&#96;&#96;, or &#96;&#96;InstanceId&#96;&#96;.",
    "children": [
      {
        "name": "launch_template_name",
        "type": "string",
        "description": "The name of the launch template.<br />You must specify the &#96;&#96;LaunchTemplateName&#96;&#96; or the &#96;&#96;LaunchTemplateID&#96;&#96;, but not both."
      },
      {
        "name": "version",
        "type": "string",
        "description": "The version number of the launch template.<br />Specifying &#96;&#96;$Latest&#96;&#96; or &#96;&#96;$Default&#96;&#96; for the template version number is not supported. However, you can specify &#96;&#96;LatestVersionNumber&#96;&#96; or &#96;&#96;DefaultVersionNumber&#96;&#96; using the &#96;&#96;Fn::GetAtt&#96;&#96; intrinsic function. For more information, see &#91;Fn::GetAtt&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).<br />For an example of using the &#96;&#96;Fn::GetAtt&#96;&#96; function, see the &#91;Examples&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#aws-resource-autoscaling-autoscalinggroup--examples) section of the &#96;&#96;AWS::AutoScaling::AutoScalingGroup&#96;&#96; resource."
      },
      {
        "name": "launch_template_id",
        "type": "string",
        "description": "The ID of the launch template.<br />You must specify the &#96;&#96;LaunchTemplateID&#96;&#96; or the &#96;&#96;LaunchTemplateName&#96;&#96;, but not both."
      }
    ]
  },
  {
    "name": "mixed_instances_policy",
    "type": "object",
    "description": "An embedded object that specifies a mixed instances policy.<br />The policy includes properties that not only define the distribution of On-Demand Instances and Spot Instances, the maximum price to pay for Spot Instances (optional), and how the Auto Scaling group allocates instance types to fulfill On-Demand and Spot capacities, but also the properties that specify the instance configuration information—the launch template and instance types. The policy can also include a weight for each instance type and different launch templates for individual instance types.<br />For more information, see &#91;Auto Scaling groups with multiple instance types and purchase options&#93;(https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html) in the &#42;Amazon EC2 Auto Scaling User Guide&#42;.",
    "children": [
      {
        "name": "instances_distribution",
        "type": "object",
        "description": "The instances distribution.",
        "children": [
          {
            "name": "on_demand_allocation_strategy",
            "type": "string",
            "description": "The allocation strategy to apply to your On-Demand Instances when they are launched. Possible instance types are determined by the launch template overrides that you specify.<br />The following lists the valid values:<br />+ lowest-price Uses price to determine which instance types are the highest priority, launching the lowest priced instance types within an Availability Zone first. This is the default value for Auto Scaling groups that specify InstanceRequirements. + prioritized You set the order of instance types for the launch template overrides from highest to lowest priority (from first to last in the list). Amazon EC2 Auto Scaling launches your highest priority instance types first. If all your On-Demand capacity cannot be fulfilled using your highest priority instance type, then Amazon EC2 Auto Scaling launches the remaining capacity using the second priority instance type, and so on. This is the default value for Auto Scaling groups that don't specify InstanceRequirements and cannot be used for groups that do."
          },
          {
            "name": "on_demand_base_capacity",
            "type": "integer",
            "description": "The minimum amount of the Auto Scaling group's capacity that must be fulfilled by On-Demand Instances. This base portion is launched first as your group scales.<br />This number has the same unit of measurement as the group's desired capacity. If you change the default unit of measurement (number of instances) by specifying weighted capacity values in your launch template overrides list, or by changing the default desired capacity type setting of the group, you must specify this number using the same unit of measurement.<br />Default: 0<br />An update to this setting means a gradual replacement of instances to adjust the current On-Demand Instance levels. When replacing instances, Amazon EC2 Auto Scaling launches new instances before terminating the previous ones."
          },
          {
            "name": "on_demand_percentage_above_base_capacity",
            "type": "integer",
            "description": "Controls the percentages of On-Demand Instances and Spot Instances for your additional capacity beyond &#96;&#96;OnDemandBaseCapacity&#96;&#96;. Expressed as a number (for example, 20 specifies 20% On-Demand Instances, 80% Spot Instances). If set to 100, only On-Demand Instances are used.<br />Default: 100<br />An update to this setting means a gradual replacement of instances to adjust the current On-Demand and Spot Instance levels for your additional capacity higher than the base capacity. When replacing instances, Amazon EC2 Auto Scaling launches new instances before terminating the previous ones."
          },
          {
            "name": "spot_instance_pools",
            "type": "integer",
            "description": "The number of Spot Instance pools across which to allocate your Spot Instances. The Spot pools are determined from the different instance types in the overrides. Valid only when the &#96;&#96;SpotAllocationStrategy&#96;&#96; is &#96;&#96;lowest-price&#96;&#96;. Value must be in the range of 1–20.<br />Default: 2"
          },
          {
            "name": "spot_allocation_strategy",
            "type": "string",
            "description": "The allocation strategy to apply to your Spot Instances when they are launched. Possible instance types are determined by the launch template overrides that you specify.<br />The following lists the valid values:<br />+ capacity-optimized Requests Spot Instances using pools that are optimally chosen based on the available Spot capacity. This strategy has the lowest risk of interruption. To give certain instance types a higher chance of launching first, use capacity-optimized-prioritized. + capacity-optimized-prioritized You set the order of instance types for the launch template overrides from highest to lowest priority (from first to last in the list). Amazon EC2 Auto Scaling honors the instance type priorities on a best effort basis but optimizes for capacity first. Note that if the On-Demand allocation strategy is set to prioritized, the same priority is applied when fulfilling On-Demand capacity. This is not a valid value for Auto Scaling groups that specify InstanceRequirements. + lowest-price Requests Spot Instances using the lowest priced pools within an Availability Zone, across the number of Spot pools that you specify for the SpotInstancePools property. To ensure that your desired capacity is met, you might receive Spot Instances from several pools. This is the default value, but it might lead to high interruption rates because this strategy only considers instance price and not available capacity. + price-capacity-optimized (recommended) The price and capacity optimized allocation strategy looks at both price and capacity to select the Spot Instance pools that are the least likely to be interrupted and have the lowest possible price."
          },
          {
            "name": "spot_max_price",
            "type": "string",
            "description": "The maximum price per unit hour that you are willing to pay for a Spot Instance. If your maximum price is lower than the Spot price for the instance types that you selected, your Spot Instances are not launched. We do not recommend specifying a maximum price because it can lead to increased interruptions. When Spot Instances launch, you pay the current Spot price. To remove a maximum price that you previously set, include the property but specify an empty string (\"\") for the value.<br />If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify one.<br />Valid Range: Minimum value of 0.001"
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
                "description": "If you provide a list of instance types to use, you can specify the number of capacity units provided by each instance type in terms of virtual CPUs, memory, storage, throughput, or other relative performance characteristic. When a Spot or On-Demand Instance is launched, the capacity units count toward the desired capacity. Amazon EC2 Auto Scaling launches instances until the desired capacity is totally fulfilled, even if this results in an overage. For example, if there are two units remaining to fulfill capacity, and Amazon EC2 Auto Scaling can only launch an instance with a &#96;&#96;WeightedCapacity&#96;&#96; of five units, the instance is launched, and the desired capacity is exceeded by three units. For more information, see &#91;Configure instance weighting for Amazon EC2 Auto Scaling&#93;(https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups-instance-weighting.html) in the &#42;Amazon EC2 Auto Scaling User Guide&#42;. Value must be in the range of 1-999. <br />If you specify a value for &#96;&#96;WeightedCapacity&#96;&#96; for one instance type, you must specify a value for &#96;&#96;WeightedCapacity&#96;&#96; for all of them.<br />Every Auto Scaling group has three size parameters (&#96;&#96;DesiredCapacity&#96;&#96;, &#96;&#96;MaxSize&#96;&#96;, and &#96;&#96;MinSize&#96;&#96;). Usually, you set these sizes based on a specific number of instances. However, if you configure a mixed instances policy that defines weights for the instance types, you must specify these sizes with the same units that you use for weighting instances."
              },
              {
                "name": "instance_requirements",
                "type": "object",
                "description": "The instance requirements. Amazon EC2 Auto Scaling uses your specified requirements to identify instance types. Then, it uses your On-Demand and Spot allocation strategies to launch instances from these instance types.<br />You can specify up to four separate sets of instance requirements per Auto Scaling group. This is useful for provisioning instances from different Amazon Machine Images (AMIs) in the same Auto Scaling group. To do this, create the AMIs and create a new launch template for each AMI. Then, create a compatible set of instance requirements for each launch template. <br />If you specify &#96;&#96;InstanceRequirements&#96;&#96;, you can't specify &#96;&#96;InstanceType&#96;&#96;."
              },
              {
                "name": "instance_type",
                "type": "string",
                "description": "The instance type, such as &#96;&#96;m3.xlarge&#96;&#96;. You must specify an instance type that is supported in your requested Region and Availability Zones. For more information, see &#91;Instance types&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) in the &#42;Amazon EC2 User Guide&#42;.<br />You can specify up to 40 instance types per Auto Scaling group."
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
    "description": "A list of subnet IDs for a virtual private cloud (VPC) where instances in the Auto Scaling group can be created.<br />If this resource specifies public subnets and is also in a VPC that is defined in the same stack template, you must use the &#91;DependsOn attribute&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) to declare a dependency on the &#91;VPC-gateway attachment&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc-gateway-attachment.html).<br />When you update &#96;&#96;VPCZoneIdentifier&#96;&#96;, this retains the same Auto Scaling group and replaces old instances with new ones, according to the specified subnets. You can optionally specify how CloudFormation handles these updates by using an &#91;UpdatePolicy attribute&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html).<br />Required to launch instances into a nondefault VPC. If you specify &#96;&#96;VPCZoneIdentifier&#96;&#96; with &#96;&#96;AvailabilityZones&#96;&#96;, the subnets that you specify for this property must reside in those Availability Zones."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "One or more tags. You can tag your Auto Scaling group and propagate the tags to the Amazon EC2 instances it launches. Tags are not propagated to Amazon EBS volumes. To add tags to Amazon EBS volumes, specify the tags in a launch template but use caution. If the launch template specifies an instance tag with a key that is also specified for the Auto Scaling group, Amazon EC2 Auto Scaling overrides the value of that instance tag with the value specified by the Auto Scaling group. For more information, see &#91;Tag Auto Scaling groups and instances&#93;(https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-tagging.html) in the &#42;Amazon EC2 Auto Scaling User Guide&#42;.",
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
        "description": "Set to &#96;&#96;true&#96;&#96; if you want CloudFormation to copy the tag to EC2 instances that are launched as part of the Auto Scaling group. Set to &#96;&#96;false&#96;&#96; if you want the tag attached only to the Auto Scaling group and not copied to any instances launched as part of the Auto Scaling group."
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
    "description": "Indicates whether Capacity Rebalancing is enabled. Otherwise, Capacity Rebalancing is disabled. When you turn on Capacity Rebalancing, Amazon EC2 Auto Scaling attempts to launch a Spot Instance whenever Amazon EC2 notifies that a Spot Instance is at an elevated risk of interruption. After launching a new instance, it then terminates an old instance. For more information, see &#91;Use Capacity Rebalancing to handle Amazon EC2 Spot Interruptions&#93;(https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-capacity-rebalancing.html) in the in the &#42;Amazon EC2 Auto Scaling User Guide&#42;."
  },
  {
    "name": "instance_id",
    "type": "string",
    "description": "The ID of the instance used to base the launch configuration on. For more information, see &#91;Create an Auto Scaling group using an EC2 instance&#93;(https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-asg-from-instance.html) in the &#42;Amazon EC2 Auto Scaling User Guide&#42;.<br />If you specify &#96;&#96;LaunchTemplate&#96;&#96;, &#96;&#96;MixedInstancesPolicy&#96;&#96;, or &#96;&#96;LaunchConfigurationName&#96;&#96;, don't specify &#96;&#96;InstanceId&#96;&#96;."
  },
  {
    "name": "auto_scaling_group_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "availability_zones",
    "type": "array",
    "description": "A list of Availability Zones where instances in the Auto Scaling group can be created. Used for launching into the default VPC subnet in each Availability Zone when not using the &#96;&#96;VPCZoneIdentifier&#96;&#96; property, or for attaching a network interface when an existing network interface ID is specified in a launch template."
  },
  {
    "name": "availability_zone_distribution",
    "type": "object",
    "description": "The instance capacity distribution across Availability Zones.",
    "children": [
      {
        "name": "capacity_distribution_strategy",
        "type": "string",
        "description": "If launches fail in an Availability Zone, the following strategies are available. The default is &#96;&#96;balanced-best-effort&#96;&#96;. <br />+ &#96;&#96;balanced-only&#96;&#96; - If launches fail in an Availability Zone, Auto Scaling will continue to attempt to launch in the unhealthy zone to preserve a balanced distribution.<br />+ &#96;&#96;balanced-best-effort&#96;&#96; - If launches fail in an Availability Zone, Auto Scaling will attempt to launch in another healthy Availability Zone instead."
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
        "description": "Identifies the metrics to enable.<br />You can specify one or more of the following metrics:<br />+ &#96;&#96;GroupMinSize&#96;&#96; <br />+ &#96;&#96;GroupMaxSize&#96;&#96; <br />+ &#96;&#96;GroupDesiredCapacity&#96;&#96; <br />+ &#96;&#96;GroupInServiceInstances&#96;&#96; <br />+ &#96;&#96;GroupPendingInstances&#96;&#96; <br />+ &#96;&#96;GroupStandbyInstances&#96;&#96; <br />+ &#96;&#96;GroupTerminatingInstances&#96;&#96; <br />+ &#96;&#96;GroupTotalInstances&#96;&#96; <br />+ &#96;&#96;GroupInServiceCapacity&#96;&#96; <br />+ &#96;&#96;GroupPendingCapacity&#96;&#96; <br />+ &#96;&#96;GroupStandbyCapacity&#96;&#96; <br />+ &#96;&#96;GroupTerminatingCapacity&#96;&#96; <br />+ &#96;&#96;GroupTotalCapacity&#96;&#96; <br />+ &#96;&#96;WarmPoolDesiredCapacity&#96;&#96; <br />+ &#96;&#96;WarmPoolWarmedCapacity&#96;&#96; <br />+ &#96;&#96;WarmPoolPendingCapacity&#96;&#96; <br />+ &#96;&#96;WarmPoolTerminatingCapacity&#96;&#96; <br />+ &#96;&#96;WarmPoolTotalCapacity&#96;&#96; <br />+ &#96;&#96;GroupAndWarmPoolDesiredCapacity&#96;&#96; <br />+ &#96;&#96;GroupAndWarmPoolTotalCapacity&#96;&#96; <br /><br />If you specify &#96;&#96;Granularity&#96;&#96; and don't specify any metrics, all metrics are enabled.<br />For more information, see &#91;Amazon CloudWatch metrics for Amazon EC2 Auto Scaling&#93;(https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-metrics.html) in the &#42;Amazon EC2 Auto Scaling User Guide&#42;."
      },
      {
        "name": "granularity",
        "type": "string",
        "description": "The frequency at which Amazon EC2 Auto Scaling sends aggregated data to CloudWatch. The only valid value is &#96;&#96;1Minute&#96;&#96;."
      }
    ]
  },
  {
    "name": "instance_maintenance_policy",
    "type": "object",
    "description": "An instance maintenance policy. For more information, see &#91;Set instance maintenance policy&#93;(https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-maintenance-policy.html) in the &#42;Amazon EC2 Auto Scaling User Guide&#42;.",
    "children": [
      {
        "name": "max_healthy_percentage",
        "type": "integer",
        "description": "Specifies the upper threshold as a percentage of the desired capacity of the Auto Scaling group. It represents the maximum percentage of the group that can be in service and healthy, or pending, to support your workload when replacing instances. Value range is 100 to 200. To clear a previously set value, specify a value of &#96;&#96;-1&#96;&#96;.<br />Both &#96;&#96;MinHealthyPercentage&#96;&#96; and &#96;&#96;MaxHealthyPercentage&#96;&#96; must be specified, and the difference between them cannot be greater than 100. A large range increases the number of instances that can be replaced at the same time."
      },
      {
        "name": "min_healthy_percentage",
        "type": "integer",
        "description": "Specifies the lower threshold as a percentage of the desired capacity of the Auto Scaling group. It represents the minimum percentage of the group to keep in service, healthy, and ready to use to support your workload when replacing instances. Value range is 0 to 100. To clear a previously set value, specify a value of &#96;&#96;-1&#96;&#96;."
      }
    ]
  },
  {
    "name": "max_size",
    "type": "string",
    "description": "The maximum size of the group.<br />With a mixed instances policy that uses instance weighting, Amazon EC2 Auto Scaling may need to go above &#96;&#96;MaxSize&#96;&#96; to meet your capacity requirements. In this event, Amazon EC2 Auto Scaling will never go above &#96;&#96;MaxSize&#96;&#96; by more than your largest instance weight (weights that define how many units each instance contributes to the desired capacity of the group)."
  },
  {
    "name": "min_size",
    "type": "string",
    "description": "The minimum size of the group."
  },
  {
    "name": "termination_policies",
    "type": "array",
    "description": "A policy or a list of policies that are used to select the instance to terminate. These policies are executed in the order that you list them. For more information, see &#91;Configure termination policies for Amazon EC2 Auto Scaling&#93;(https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-termination-policies.html) in the &#42;Amazon EC2 Auto Scaling User Guide&#42;.<br />Valid values: &#96;&#96;Default&#96;&#96; &#124; &#96;&#96;AllocationStrategy&#96;&#96; &#124; &#96;&#96;ClosestToNextInstanceHour&#96;&#96; &#124; &#96;&#96;NewestInstance&#96;&#96; &#124; &#96;&#96;OldestInstance&#96;&#96; &#124; &#96;&#96;OldestLaunchConfiguration&#96;&#96; &#124; &#96;&#96;OldestLaunchTemplate&#96;&#96; &#124; &#96;&#96;arn:aws:lambda:region:account-id:function:my-function:my-alias&#96;&#96;"
  },
  {
    "name": "auto_scaling_group_name",
    "type": "string",
    "description": "The name of the Auto Scaling group. This name must be unique per Region per account.<br />The name can contain any ASCII character 33 to 126 including most punctuation characters, digits, and upper and lowercased letters.<br />You cannot use a colon (:) in the name."
  },
  {
    "name": "traffic_sources",
    "type": "array",
    "description": "The traffic sources associated with this Auto Scaling group.",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": "Provides additional context for the value of &#96;&#96;Identifier&#96;&#96;.<br />The following lists the valid values:<br />+ &#96;&#96;elb&#96;&#96; if &#96;&#96;Identifier&#96;&#96; is the name of a Classic Load Balancer.<br />+ &#96;&#96;elbv2&#96;&#96; if &#96;&#96;Identifier&#96;&#96; is the ARN of an Application Load Balancer, Gateway Load Balancer, or Network Load Balancer target group.<br />+ &#96;&#96;vpc-lattice&#96;&#96; if &#96;&#96;Identifier&#96;&#96; is the ARN of a VPC Lattice target group.<br /><br />Required if the identifier is the name of a Classic Load Balancer."
      },
      {
        "name": "identifier",
        "type": "string",
        "description": "Identifies the traffic source.<br />For Application Load Balancers, Gateway Load Balancers, Network Load Balancers, and VPC Lattice, this will be the Amazon Resource Name (ARN) for a target group in this account and Region. For Classic Load Balancers, this will be the name of the Classic Load Balancer in this account and Region.<br />For example: <br />+ Application Load Balancer ARN: &#96;&#96;arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/1234567890123456&#96;&#96;<br />+ Classic Load Balancer name: &#96;&#96;my-classic-load-balancer&#96;&#96;<br />+ VPC Lattice ARN: &#96;&#96;arn:aws:vpc-lattice:us-west-2:123456789012:targetgroup/tg-1234567890123456&#96;&#96;<br /><br />To get the ARN of a target group for a Application Load Balancer, Gateway Load Balancer, or Network Load Balancer, or the name of a Classic Load Balancer, use the Elastic Load Balancing &#91;DescribeTargetGroups&#93;(https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API&#95;DescribeTargetGroups.html) and &#91;DescribeLoadBalancers&#93;(https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API&#95;DescribeLoadBalancers.html) API operations.<br />To get the ARN of a target group for VPC Lattice, use the VPC Lattice &#91;GetTargetGroup&#93;(https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API&#95;GetTargetGroup.html) API operation."
      }
    ]
  },
  {
    "name": "desired_capacity_type",
    "type": "string",
    "description": "The unit of measurement for the value specified for desired capacity. Amazon EC2 Auto Scaling supports &#96;&#96;DesiredCapacityType&#96;&#96; for attribute-based instance type selection only. For more information, see &#91;Create a mixed instances group using attribute-based instance type selection&#93;(https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-mixed-instances-group-attribute-based-instance-type-selection.html) in the &#42;Amazon EC2 Auto Scaling User Guide&#42;.<br />By default, Amazon EC2 Auto Scaling specifies &#96;&#96;units&#96;&#96;, which translates into number of instances.<br />Valid values: &#96;&#96;units&#96;&#96; &#124; &#96;&#96;vcpu&#96;&#96; &#124; &#96;&#96;memory-mib&#96;&#96;"
  },
  {
    "name": "placement_group",
    "type": "string",
    "description": "The name of the placement group into which to launch your instances. For more information, see &#91;Placement groups&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html) in the &#42;Amazon EC2 User Guide&#42;.<br />A &#42;cluster&#42; placement group is a logical grouping of instances within a single Availability Zone. You cannot specify multiple Availability Zones and a cluster placement group."
  },
  {
    "name": "capacity_reservation_specification",
    "type": "object",
    "description": "The capacity reservation specification.",
    "children": [
      {
        "name": "capacity_reservation_preference",
        "type": "string",
        "description": "The capacity reservation preference. The following options are available: <br />+ &#96;&#96;capacity-reservations-only&#96;&#96; - Auto Scaling will only launch instances into a Capacity Reservation or Capacity Reservation resource group. If capacity isn't available, instances will fail to launch.<br />+ &#96;&#96;capacity-reservations-first&#96;&#96; - Auto Scaling will try to launch instances into a Capacity Reservation or Capacity Reservation resource group first. If capacity isn't available, instances will run in On-Demand capacity.<br />+ &#96;&#96;none&#96;&#96; - Auto Scaling will not launch instances into a Capacity Reservation. Instances will run in On-Demand capacity. <br />+ &#96;&#96;default&#96;&#96; - Auto Scaling uses the Capacity Reservation preference from your launch template or an open Capacity Reservation."
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
    "description": "A comma-separated value string of one or more health check types.<br />The valid values are &#96;&#96;EC2&#96;&#96;, &#96;&#96;EBS&#96;&#96;, &#96;&#96;ELB&#96;&#96;, and &#96;&#96;VPC&#95;LATTICE&#96;&#96;. &#96;&#96;EC2&#96;&#96; is the default health check and cannot be disabled. For more information, see &#91;Health checks for instances in an Auto Scaling group&#93;(https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-health-checks.html) in the &#42;Amazon EC2 Auto Scaling User Guide&#42;.<br />Only specify &#96;&#96;EC2&#96;&#96; if you must clear a value that was previously set."
  },
  {
    "name": "max_instance_lifetime",
    "type": "integer",
    "description": "The maximum amount of time, in seconds, that an instance can be in service. The default is null. If specified, the value must be either 0 or a number equal to or greater than 86,400 seconds (1 day). For more information, see &#91;Replace Auto Scaling instances based on maximum instance lifetime&#93;(https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-max-instance-lifetime.html) in the &#42;Amazon EC2 Auto Scaling User Guide&#42;."
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
    "description": "The name of the Auto Scaling group. This name must be unique per Region per account.<br />The name can contain any ASCII character 33 to 126 including most punctuation characters, digits, and upper and lowercased letters.<br />You cannot use a colon (:) in the name."
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
WHERE region = 'us-east-1' AND Identifier = '<AutoScalingGroupName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>auto_scaling_groups</code> in a region.
```sql
SELECT
region,
auto_scaling_group_name
FROM awscc.autoscaling.auto_scaling_groups_list_only
WHERE region = 'us-east-1';
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
'{{ MaxSize }}',
 '{{ MinSize }}',
'{{ region }}';
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
 '{{ LifecycleHookSpecificationList }}',
 '{{ LoadBalancerNames }}',
 '{{ LaunchConfigurationName }}',
 '{{ ServiceLinkedRoleARN }}',
 '{{ AvailabilityZoneImpairmentPolicy }}',
 '{{ TargetGroupARNs }}',
 '{{ Cooldown }}',
 '{{ NotificationConfigurations }}',
 '{{ DesiredCapacity }}',
 '{{ HealthCheckGracePeriod }}',
 '{{ DefaultInstanceWarmup }}',
 '{{ SkipZonalShiftValidation }}',
 '{{ NewInstancesProtectedFromScaleIn }}',
 '{{ LaunchTemplate }}',
 '{{ MixedInstancesPolicy }}',
 '{{ VPCZoneIdentifier }}',
 '{{ Tags }}',
 '{{ Context }}',
 '{{ CapacityRebalance }}',
 '{{ InstanceId }}',
 '{{ AvailabilityZones }}',
 '{{ NotificationConfiguration }}',
 '{{ AvailabilityZoneDistribution }}',
 '{{ MetricsCollection }}',
 '{{ InstanceMaintenancePolicy }}',
 '{{ MaxSize }}',
 '{{ MinSize }}',
 '{{ TerminationPolicies }}',
 '{{ AutoScalingGroupName }}',
 '{{ TrafficSources }}',
 '{{ DesiredCapacityType }}',
 '{{ PlacementGroup }}',
 '{{ CapacityReservationSpecification }}',
 '{{ HealthCheckType }}',
 '{{ MaxInstanceLifetime }}',
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
  - name: auto_scaling_group
    props:
      - name: LifecycleHookSpecificationList
        value:
          - LifecycleHookName: '{{ LifecycleHookName }}'
            LifecycleTransition: '{{ LifecycleTransition }}'
            HeartbeatTimeout: '{{ HeartbeatTimeout }}'
            NotificationMetadata: '{{ NotificationMetadata }}'
            DefaultResult: '{{ DefaultResult }}'
            NotificationTargetARN: '{{ NotificationTargetARN }}'
            RoleARN: '{{ RoleARN }}'
      - name: LoadBalancerNames
        value:
          - '{{ LoadBalancerNames[0] }}'
      - name: LaunchConfigurationName
        value: '{{ LaunchConfigurationName }}'
      - name: ServiceLinkedRoleARN
        value: '{{ ServiceLinkedRoleARN }}'
      - name: AvailabilityZoneImpairmentPolicy
        value:
          ZonalShiftEnabled: '{{ ZonalShiftEnabled }}'
          ImpairedZoneHealthCheckBehavior: '{{ ImpairedZoneHealthCheckBehavior }}'
      - name: TargetGroupARNs
        value:
          - '{{ TargetGroupARNs[0] }}'
      - name: Cooldown
        value: '{{ Cooldown }}'
      - name: NotificationConfigurations
        value:
          - TopicARN:
              - '{{ TopicARN[0] }}'
            NotificationTypes:
              - '{{ NotificationTypes[0] }}'
      - name: DesiredCapacity
        value: '{{ DesiredCapacity }}'
      - name: HealthCheckGracePeriod
        value: '{{ HealthCheckGracePeriod }}'
      - name: DefaultInstanceWarmup
        value: '{{ DefaultInstanceWarmup }}'
      - name: SkipZonalShiftValidation
        value: '{{ SkipZonalShiftValidation }}'
      - name: NewInstancesProtectedFromScaleIn
        value: '{{ NewInstancesProtectedFromScaleIn }}'
      - name: LaunchTemplate
        value:
          LaunchTemplateName: '{{ LaunchTemplateName }}'
          Version: '{{ Version }}'
          LaunchTemplateId: '{{ LaunchTemplateId }}'
      - name: MixedInstancesPolicy
        value:
          InstancesDistribution:
            OnDemandAllocationStrategy: '{{ OnDemandAllocationStrategy }}'
            OnDemandBaseCapacity: '{{ OnDemandBaseCapacity }}'
            OnDemandPercentageAboveBaseCapacity: '{{ OnDemandPercentageAboveBaseCapacity }}'
            SpotInstancePools: '{{ SpotInstancePools }}'
            SpotAllocationStrategy: '{{ SpotAllocationStrategy }}'
            SpotMaxPrice: '{{ SpotMaxPrice }}'
          LaunchTemplate:
            LaunchTemplateSpecification: null
            Overrides:
              - LaunchTemplateSpecification: null
                WeightedCapacity: '{{ WeightedCapacity }}'
                InstanceRequirements:
                  InstanceGenerations:
                    - '{{ InstanceGenerations[0] }}'
                  AcceleratorTypes:
                    - '{{ AcceleratorTypes[0] }}'
                  MemoryGiBPerVCpu:
                    Min: null
                    Max: null
                  AcceleratorManufacturers:
                    - '{{ AcceleratorManufacturers[0] }}'
                  VCpuCount:
                    Min: '{{ Min }}'
                    Max: '{{ Max }}'
                  LocalStorage: '{{ LocalStorage }}'
                  CpuManufacturers:
                    - '{{ CpuManufacturers[0] }}'
                  BareMetal: '{{ BareMetal }}'
                  RequireHibernateSupport: '{{ RequireHibernateSupport }}'
                  MaxSpotPriceAsPercentageOfOptimalOnDemandPrice: '{{ MaxSpotPriceAsPercentageOfOptimalOnDemandPrice }}'
                  OnDemandMaxPricePercentageOverLowestPrice: '{{ OnDemandMaxPricePercentageOverLowestPrice }}'
                  MemoryMiB:
                    Min: '{{ Min }}'
                    Max: '{{ Max }}'
                  LocalStorageTypes:
                    - '{{ LocalStorageTypes[0] }}'
                  NetworkInterfaceCount:
                    Min: '{{ Min }}'
                    Max: '{{ Max }}'
                  ExcludedInstanceTypes:
                    - '{{ ExcludedInstanceTypes[0] }}'
                  AllowedInstanceTypes:
                    - '{{ AllowedInstanceTypes[0] }}'
                  AcceleratorCount:
                    Min: '{{ Min }}'
                    Max: '{{ Max }}'
                  NetworkBandwidthGbps:
                    Min: null
                    Max: null
                  BaselinePerformanceFactors:
                    Cpu:
                      References:
                        - InstanceFamily: '{{ InstanceFamily }}'
                  BaselineEbsBandwidthMbps:
                    Min: '{{ Min }}'
                    Max: '{{ Max }}'
                  SpotMaxPricePercentageOverLowestPrice: '{{ SpotMaxPricePercentageOverLowestPrice }}'
                  AcceleratorNames:
                    - '{{ AcceleratorNames[0] }}'
                  AcceleratorTotalMemoryMiB:
                    Min: '{{ Min }}'
                    Max: '{{ Max }}'
                  BurstablePerformance: '{{ BurstablePerformance }}'
                  TotalLocalStorageGB:
                    Min: null
                    Max: null
                InstanceType: '{{ InstanceType }}'
      - name: VPCZoneIdentifier
        value:
          - '{{ VPCZoneIdentifier[0] }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'
            PropagateAtLaunch: '{{ PropagateAtLaunch }}'
      - name: Context
        value: '{{ Context }}'
      - name: CapacityRebalance
        value: '{{ CapacityRebalance }}'
      - name: InstanceId
        value: '{{ InstanceId }}'
      - name: AvailabilityZones
        value:
          - '{{ AvailabilityZones[0] }}'
      - name: NotificationConfiguration
        value: null
      - name: AvailabilityZoneDistribution
        value:
          CapacityDistributionStrategy: '{{ CapacityDistributionStrategy }}'
      - name: MetricsCollection
        value:
          - Metrics:
              - '{{ Metrics[0] }}'
            Granularity: '{{ Granularity }}'
      - name: InstanceMaintenancePolicy
        value:
          MaxHealthyPercentage: '{{ MaxHealthyPercentage }}'
          MinHealthyPercentage: '{{ MinHealthyPercentage }}'
      - name: MaxSize
        value: '{{ MaxSize }}'
      - name: MinSize
        value: '{{ MinSize }}'
      - name: TerminationPolicies
        value:
          - '{{ TerminationPolicies[0] }}'
      - name: AutoScalingGroupName
        value: '{{ AutoScalingGroupName }}'
      - name: TrafficSources
        value:
          - Type: '{{ Type }}'
            Identifier: '{{ Identifier }}'
      - name: DesiredCapacityType
        value: '{{ DesiredCapacityType }}'
      - name: PlacementGroup
        value: '{{ PlacementGroup }}'
      - name: CapacityReservationSpecification
        value:
          CapacityReservationPreference: '{{ CapacityReservationPreference }}'
          CapacityReservationTarget:
            CapacityReservationIds:
              - '{{ CapacityReservationIds[0] }}'
            CapacityReservationResourceGroupArns:
              - '{{ CapacityReservationResourceGroupArns[0] }}'
      - name: HealthCheckType
        value: '{{ HealthCheckType }}'
      - name: MaxInstanceLifetime
        value: '{{ MaxInstanceLifetime }}'

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
WHERE region = '{{ region }}'
AND Identifier = '<AutoScalingGroupName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.autoscaling.auto_scaling_groups
WHERE Identifier = '<AutoScalingGroupName>'
AND region = 'us-east-1';
```

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