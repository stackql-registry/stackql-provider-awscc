---
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
  - ecs
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

Creates, updates, deletes or gets a <code>service</code> resource or lists <code>services</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>services</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td><details><summary>The <code>AWS::ECS::Service</code> resource creates an Amazon Elastic Container Service (Amazon ECS) service that runs and maintains the requested number of tasks and associated load balancers.</summary>The stack update fails if you change any properties that require replacement and at least one ECS Service Connect <code>ServiceConnectConfiguration</code> property is configured. This is because AWS CloudFormation creates the replacement service first, but each <code>ServiceConnectService</code> must have a name that is unique in the namespace.<br />Starting April 15, 2023, AWS; will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, ECS, or EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service.<br />On June 12, 2025, Amazon ECS launched support for updating capacity provider configuration for ECS services. With this launch, ECS also aligned the CFN update behavior for <code>CapacityProviderStrategy</code> parameter with the standard practice. For more information, see <a href="https://docs.aws.amazon.com/about-aws/whats-new/2025/05/amazon-ecs-capacity-provider-configuration-ecs/">adds support for updating capacity provider configuration for ECS services</a>. Previously ECS ignored the <code>CapacityProviderStrategy</code> property if it was set to an empty list for example, <code>[]</code> in CFN, because updating capacity provider configuration was not supported. Now, with support for capacity provider updates, customers can remove capacity providers from a service by passing an empty list. When you specify an empty list (<code>[]</code>) for the <code>CapacityProviderStrategy</code> property in your CFN template, ECS will remove any capacity providers associated with the service, as follows:<br />+  For services created with a capacity provider strategy after the launch:<br />+  If there's a cluster default strategy set, the service will revert to using that default strategy.<br />+  If no cluster default strategy exists, you will receive the following error:<br />No launch type to fall back to for empty capacity provider strategy. Your service was not created with a launch type.<br />+  For services created with a capacity provider strategy prior to the launch:<br />+  If <code>CapacityProviderStrategy</code> had <code>FARGATE_SPOT</code> or <code>FARGATE</code> capacity providers, the launch type will be updated to <code>FARGATE</code> and the capacity provider will be removed.<br />+  If the strategy included Auto Scaling group capacity providers, the service will revert to EC2 launch type, and the Auto Scaling group capacity providers will not be used.<br />Recommended Actions<br />If you are currently using <code>CapacityProviderStrategy: []</code> in your CFN templates, you should take one of the following actions:<br />+  If you do not intend to update the Capacity Provider Strategy:<br />+  Remove the <code>CapacityProviderStrategy</code> property entirely from your CFN template<br />+  Alternatively, use <code>!Ref ::NoValue</code> for the <code>CapacityProviderStrategy</code> property in your template<br />+  If you intend to maintain or update the Capacity Provider Strategy, specify the actual Capacity Provider Strategy for the service in your CFN template.<br />If your CFN template had an empty list ([]) for <code>CapacityProviderStrategy</code> prior to the aforementioned launch on June 12, and you are using the same template with <code>CapacityProviderStrategy: []</code>, you might encounter the following error:<br />Invalid request provided: When switching from launch type to capacity provider strategy on an existing service, or making a change to a capacity provider strategy on a service that is already using one, you must force a new deployment. (Service: Ecs, Status Code: 400, Request ID: xxx) (SDK Attempt Count: 1)" (RequestToken: xxx HandlerErrorCode: InvalidRequest)<br />Note that CFN automatically initiates a new deployment when it detects a parameter change, but customers cannot choose to force a deployment through CFN. This is an invalid input scenario that requires one of the remediation actions listed above.<br />If you are experiencing active production issues related to this change, contact AWS Support or your Technical Account Manager.</details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ecs.services" /></td></tr>
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
    "name": "platform_version",
    "type": "string",
    "description": "The platform version that your tasks in the service are running on. A platform version is specified only for tasks using the Fargate launch type. If one isn't specified, the <code>LATEST</code> platform version is used. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html\">platform versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>."
  },
  {
    "name": "propagate_tags",
    "type": "string",
    "description": "<details><summary>Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html\">TagResource</a> API action.</summary>You must set this to a value other than <code>NONE</code> when you use Cost Explorer. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/usage-reports.html\">Amazon ECS usage reports</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.<br />The default is <code>NONE</code>.</details>"
  },
  {
    "name": "service_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "placement_strategies",
    "type": "array",
    "description": "<details><summary>The placement strategy objects to use for tasks in your service. You can specify a maximum of 5 strategy rules for each service.</summary>To remove this property from your service resource, specify an empty <code>PlacementStrategy</code> array.</details>",
    "children": [
      {
        "name": "field",
        "type": "string",
        "description": "The field to apply the placement strategy against. For the <code>spread</code> placement strategy, valid values are <code>instanceId</code> (or <code>host</code>, which has the same effect), or any platform or custom attribute that's applied to a container instance, such as <code>attribute:ecs.availability-zone</code>. For the <code>binpack</code> placement strategy, valid values are <code>cpu</code> and <code>memory</code>. For the <code>random</code> placement strategy, this field is not used."
      },
      {
        "name": "type",
        "type": "string",
        "description": "The type of placement strategy. The <code>random</code> placement strategy randomly places tasks on available candidates. The <code>spread</code> placement strategy spreads placement across available candidates evenly based on the <code>field</code> parameter. The <code>binpack</code> strategy places tasks on available candidates that have the least available amount of the resource that's specified with the <code>field</code> parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory but still enough to run the task."
      }
    ]
  },
  {
    "name": "service_registries",
    "type": "array",
    "description": "<details><summary>The details of the service discovery registry to associate with this service. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html\">Service discovery</a>.</summary>Each service may be associated with one service registry. Multiple service registries for each service isn't supported.<br />To remove this property from your service resource, specify an empty <code>ServiceRegistry</code> array.</details>",
    "children": [
      {
        "name": "container_name",
        "type": "string",
        "description": "The container name value, already specified in the task definition, to be used for your service discovery service. If the task definition that your service task specifies uses the bridge or host network mode, you must specify a containerName and containerPort combination from the task definition. If the task definition that your service task specifies uses the awsvpc network mode and a type SRV DNS record is used, you must specify either a containerName and containerPort combination or a port value, but not both."
      },
      {
        "name": "port",
        "type": "integer",
        "description": "The port value used if your service discovery service specified an SRV record. This field may be used if both the awsvpc network mode and SRV records are used."
      },
      {
        "name": "container_port",
        "type": "integer",
        "description": "The port value, already specified in the task definition, to be used for your service discovery service. If the task definition your service task specifies uses the bridge or host network mode, you must specify a containerName and containerPort combination from the task definition. If the task definition your service task specifies uses the awsvpc network mode and a type SRV DNS record is used, you must specify either a containerName and containerPort combination or a port value, but not both."
      },
      {
        "name": "registry_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the service registry. The currently supported service registry is AWS Cloud Map. For more information, see https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html"
      }
    ]
  },
  {
    "name": "volume_configurations",
    "type": "array",
    "description": "<details><summary>The configuration for a volume specified in the task definition as a volume that is configured at launch time. Currently, the only supported volume type is an Amazon EBS volume.</summary>To remove this property from your service resource, specify an empty <code>ServiceVolumeConfiguration</code> array.</details>",
    "children": [
      {
        "name": "managed_ebs_volume",
        "type": "object",
        "description": "The configuration for the Amazon EBS volume that Amazon ECS creates and manages on your behalf. These settings are used to create each Amazon EBS volume, with one volume created for each task in the service. The Amazon EBS volumes are visible in your account in the Amazon EC2 console once they are created.",
        "children": [
          {
            "name": "snapshot_id",
            "type": "string",
            "description": "The snapshot that Amazon ECS uses to create volumes for attachment to tasks maintained by the service. You must specify either <code>snapshotId</code> or <code>sizeInGiB</code> in your volume configuration. This parameter maps 1:1 with the <code>SnapshotId</code> parameter of the <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html\">CreateVolume API</a> in the <i>Amazon EC2 API Reference</i>."
          },
          {
            "name": "volume_type",
            "type": "string",
            "description": "<details><summary>The volume type. This parameter maps 1:1 with the <code>VolumeType</code> parameter of the <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html\">CreateVolume API</a> in the <i>Amazon EC2 API Reference</i>. For more information, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html\">Amazon EBS volume types</a> in the <i>Amazon EC2 User Guide</i>.</summary>The following are the supported volume types.<br />+  General Purpose SSD: <code>gp2</code>|<code>gp3</code><br />+  Provisioned IOPS SSD: <code>io1</code>|<code>io2</code><br />+  Throughput Optimized HDD: <code>st1</code><br />+  Cold HDD: <code>sc1</code><br />+  Magnetic: <code>standard</code><br />The magnetic volume type is not supported on Fargate.</details>"
          },
          {
            "name": "kms_key_id",
            "type": "string",
            "description": "<details><summary>The Amazon Resource Name (ARN) identifier of the AWS Key Management Service key to use for Amazon EBS encryption. When a key is specified using this parameter, it overrides Amazon EBS default encryption or any KMS key that you specified for cluster-level managed storage encryption. This parameter maps 1:1 with the <code>KmsKeyId</code> parameter of the <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html\">CreateVolume API</a> in the <i>Amazon EC2 API Reference</i>. For more information about encrypting Amazon EBS volumes attached to tasks, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-kms-encryption.html\">Encrypt data stored in Amazon EBS volumes attached to Amazon ECS tasks</a>.</summary>AWS authenticates the AWS Key Management Service key asynchronously. Therefore, if you specify an ID, alias, or ARN that is invalid, the action can appear to complete, but eventually fails.</details>"
          },
          {
            "name": "tag_specifications",
            "type": "array",
            "description": "The tags to apply to the volume. Amazon ECS applies service-managed tags by default. This parameter maps 1:1 with the <code>TagSpecifications.N</code> parameter of the <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html\">CreateVolume API</a> in the <i>Amazon EC2 API Reference</i>.",
            "children": [
              {
                "name": "propagate_tags",
                "type": "string",
                "description": "Determines whether to propagate the tags from the task definition to  the Amazon EBS volume. Tags can only propagate to a <code>SERVICE</code> specified in  <code>ServiceVolumeConfiguration</code>. If no value is specified, the tags aren't  propagated."
              },
              {
                "name": "resource_type",
                "type": "string",
                "description": "The type of volume resource."
              },
              {
                "name": "tags",
                "type": "array",
                "description": "The tags applied to this Amazon EBS volume. <code>AmazonECSCreated</code> and <code>AmazonECSManaged</code> are reserved tags that can't be used."
              }
            ]
          },
          {
            "name": "filesystem_type",
            "type": "string",
            "description": "<details><summary>The filesystem type for the volume. For volumes created from a snapshot, you must specify the same filesystem type that the volume was using when the snapshot was created. If there is a filesystem type mismatch, the tasks will fail to start.</summary>The available Linux filesystem types are  <code>ext3</code>, <code>ext4</code>, and <code>xfs</code>. If no value is specified, the <code>xfs</code> filesystem type is used by default.<br />The available Windows filesystem types are <code>NTFS</code>.</details>"
          },
          {
            "name": "encrypted",
            "type": "boolean",
            "description": "Indicates whether the volume should be encrypted. If you turn on Region-level Amazon EBS encryption by default but set this value as <code>false</code>, the setting is overridden and the volume is encrypted with the KMS key specified for Amazon EBS encryption by default. This parameter maps 1:1 with the <code>Encrypted</code> parameter of the <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html\">CreateVolume API</a> in the <i>Amazon EC2 API Reference</i>."
          },
          {
            "name": "throughput",
            "type": "integer",
            "description": "<details><summary>The throughput to provision for a volume, in MiB/s, with a maximum of 1,000 MiB/s. This parameter maps 1:1 with the <code>Throughput</code> parameter of the <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html\">CreateVolume API</a> in the <i>Amazon EC2 API Reference</i>.</summary>This parameter is only supported for the <code>gp3</code> volume type.</details>"
          },
          {
            "name": "volume_initialization_rate",
            "type": "integer",
            "description": "The rate, in MiB/s, at which data is fetched from a snapshot of an existing EBS volume to create new volumes for attachment to the tasks maintained by the service. This property can be specified only if you specify a <code>snapshotId</code>. For more information, see <a href=\"https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html\">Initialize Amazon EBS volumes</a> in the <i>Amazon EBS User Guide</i>."
          },
          {
            "name": "iops",
            "type": "integer",
            "description": "<details><summary>The number of I/O operations per second (IOPS). For <code>gp3</code>, <code>io1</code>, and <code>io2</code> volumes, this represents the number of IOPS that are provisioned for the volume. For <code>gp2</code> volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.</summary>The following are the supported values for each volume type.<br />+  <code>gp3</code>: 3,000 - 16,000 IOPS<br />+  <code>io1</code>: 100 - 64,000 IOPS<br />+  <code>io2</code>: 100 - 256,000 IOPS<br />This parameter is required for <code>io1</code> and <code>io2</code> volume types. The default for <code>gp3</code> volumes is <code>3,000 IOPS</code>. This parameter is not supported for <code>st1</code>, <code>sc1</code>, or <code>standard</code> volume types.<br />This parameter maps 1:1 with the <code>Iops</code> parameter of the <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html\">CreateVolume API</a> in the <i>Amazon EC2 API Reference</i>.</details>"
          },
          {
            "name": "size_in_gi_b",
            "type": "integer",
            "description": "<details><summary>The size of the volume in GiB. You must specify either a volume size or a snapshot ID. If you specify a snapshot ID, the snapshot size is used for the volume size by default. You can optionally specify a volume size greater than or equal to the snapshot size. This parameter maps 1:1 with the <code>Size</code> parameter of the <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html\">CreateVolume API</a> in the <i>Amazon EC2 API Reference</i>.</summary>The following are the supported volume size values for each volume type.<br />+  <code>gp2</code> and <code>gp3</code>: 1-16,384<br />+  <code>io1</code> and <code>io2</code>: 4-16,384<br />+  <code>st1</code> and <code>sc1</code>: 125-16,384<br />+  <code>standard</code>: 1-1,024</details>"
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": "The ARN of the IAM role to associate with this volume. This is the Amazon ECS infrastructure IAM role that is used to manage your AWS infrastructure. We recommend using the Amazon ECS-managed <code>AmazonECSInfrastructureRolePolicyForVolumes</code> IAM policy with this role. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/infrastructure_IAM_role.html\">Amazon ECS infrastructure IAM role</a> in the <i>Amazon ECS Developer Guide</i>."
          }
        ]
      },
      {
        "name": "name",
        "type": "string",
        "description": "The name of the volume. This value must match the volume name from the <code>Volume</code> object in the task definition."
      }
    ]
  },
  {
    "name": "capacity_provider_strategy",
    "type": "array",
    "description": "<details><summary>The capacity provider strategy to use for the service.</summary>If a <code>capacityProviderStrategy</code> is specified, the <code>launchType</code> parameter must be omitted. If no <code>capacityProviderStrategy</code> or <code>launchType</code> is specified, the <code>defaultCapacityProviderStrategy</code> for the cluster is used.<br />A capacity provider strategy can contain a maximum of 20 capacity providers.<br />To remove this property from your service resource, specify an empty <code>CapacityProviderStrategyItem</code> array.</details>",
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
    "description": "The launch type on which to run your service. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html\">Amazon ECS Launch Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>."
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "availability_zone_rebalancing",
    "type": "string",
    "description": "<details><summary>Indicates whether to use Availability Zone rebalancing for the service.</summary>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-rebalancing.html\">Balancing an Amazon ECS service across Availability Zones</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</details>"
  },
  {
    "name": "scheduling_strategy",
    "type": "string",
    "description": "<details><summary>The scheduling strategy to use for the service. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html\">Services</a>.</summary>There are two service scheduler strategies available:<br />+  <code>REPLICA</code>-The replica scheduling strategy places and maintains the desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions. This scheduler strategy is required if the service uses the <code>CODE_DEPLOY</code> or <code>EXTERNAL</code> deployment controller types.<br />+  <code>DAEMON</code>-The daemon scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that you specify in your cluster. The service scheduler also evaluates the task placement constraints for running tasks and will stop tasks that don't meet the placement constraints. When you're using this strategy, you don't need to specify a desired number of tasks, a task placement strategy, or use Service Auto Scaling policies.<br />Tasks using the Fargate launch type or the <code>CODE_DEPLOY</code> or <code>EXTERNAL</code> deployment controller types don't support the <code>DAEMON</code> scheduling strategy.</details>"
  },
  {
    "name": "network_configuration",
    "type": "object",
    "description": "The network configuration for the service. This parameter is required for task definitions that use the <code>awsvpc</code> network mode to receive their own elastic network interface, and it is not supported for other network modes. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html\">Task Networking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.",
    "children": [
      {
        "name": "aws_vpc_configuration",
        "type": "object",
        "description": "The VPC subnets and security groups associated with a task. All specified subnets and security groups must be from the same VPC.",
        "children": [
          {
            "name": "security_groups",
            "type": "array",
            "description": "The security groups associated with the task or service. If you do not specify a security group, the default security group for the VPC is used. There is a limit of 5 security groups that can be specified per AwsVpcConfiguration."
          },
          {
            "name": "subnets",
            "type": "array",
            "description": "The subnets associated with the task or service. There is a limit of 16 subnets that can be specified per AwsVpcConfiguration."
          },
          {
            "name": "assign_public_ip",
            "type": "string",
            "description": "Whether the task's elastic network interface receives a public IP address. The default value is DISABLED."
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "<details><summary>The metadata that you apply to the service to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. When a service is deleted, the tags are deleted as well.</summary>The following basic restrictions apply to tags:<br />+  Maximum number of tags per resource - 50<br />+  For each resource, each tag key must be unique, and each tag key can have only one value.<br />+  Maximum key length - 128 Unicode characters in UTF-8<br />+  Maximum value length - 256 Unicode characters in UTF-8<br />+  If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.<br />+  Tag keys and values are case-sensitive.<br />+  Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.</details>",
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
    "name": "force_new_deployment",
    "type": "object",
    "description": "Determines whether to force a new deployment of the service. By default, deployments aren't forced. You can use this option to start a new deployment with no service definition changes. For example, you can update a service's tasks to use a newer Docker image with the same image/tag combination (<code>my_image:latest</code>) or to roll Fargate tasks onto a newer platform version.",
    "children": [
      {
        "name": "enable_force_new_deployment",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "force_new_deployment_nonce",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "health_check_grace_period_seconds",
    "type": "integer",
    "description": "<details><summary>The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing, VPC Lattice, and container health checks after a task has first started. If you don't specify a health check grace period value, the default value of <code>0</code> is used. If you don't use any of the health checks, then <code>healthCheckGracePeriodSeconds</code> is unused.</summary>If your service's tasks take a while to start and respond to health checks, you can specify a health check grace period of up to 2,147,483,647 seconds (about 69 years). During that time, the Amazon ECS service scheduler ignores health check status. This grace period can prevent the service scheduler from marking tasks as unhealthy and stopping them before they have time to come up.</details>"
  },
  {
    "name": "enable_ecs_managed_tags",
    "type": "boolean",
    "description": "<details><summary>Specifies whether to turn on Amazon ECS managed tags for the tasks within the service. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html\">Tagging your Amazon ECS resources</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</summary>When you use Amazon ECS managed tags, you must set the <code>propagateTags</code> request parameter.</details>"
  },
  {
    "name": "enable_execute_command",
    "type": "boolean",
    "description": "Determines whether the execute command functionality is turned on for the service. If <code>true</code>, the execute command functionality is turned on for all containers in tasks as part of the service."
  },
  {
    "name": "placement_constraints",
    "type": "array",
    "description": "<details><summary>An array of placement constraint objects to use for tasks in your service. You can specify a maximum of 10 constraints for each task. This limit includes constraints in the task definition and those specified at runtime.</summary>To remove this property from your service resource, specify an empty <code>PlacementConstraint</code> array.</details>",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": "The type of constraint. Use <code>distinctInstance</code> to ensure that each task in a particular group is running on a different container instance. Use <code>memberOf</code> to restrict the selection to a group of valid candidates."
      },
      {
        "name": "expression",
        "type": "string",
        "description": "A cluster query language expression to apply to the constraint. The expression can have a maximum length of 2000 characters. You can't specify an expression if the constraint type is <code>distinctInstance</code>. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html\">Cluster query language</a> in the <i>Amazon Elastic Container Service Developer Guide</i>."
      }
    ]
  },
  {
    "name": "cluster",
    "type": "string",
    "description": "The short name or full Amazon Resource Name (ARN) of the cluster that you run your service on. If you do not specify a cluster, the default cluster is assumed."
  },
  {
    "name": "load_balancers",
    "type": "array",
    "description": "<details><summary>A list of load balancer objects to associate with the service. If you specify the <code>Role</code> property, <code>LoadBalancers</code> must be specified as well. For information about the number of load balancers that you can specify per service, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-load-balancing.html\">Service Load Balancing</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</summary>To remove this property from your service resource, specify an empty <code>LoadBalancer</code> array.</details>",
    "children": [
      {
        "name": "target_group_arn",
        "type": "string",
        "description": "The full Amazon Resource Name (ARN) of the Elastic Load Balancing target group or groups associated with a service or task set. A target group ARN is only specified when using an Application Load Balancer or Network Load Balancer. If you are using a Classic Load Balancer this should be omitted. For services using the ECS deployment controller, you can specify one or multiple target groups. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/register-multiple-targetgroups.html in the Amazon Elastic Container Service Developer Guide. For services using the CODE_DEPLOY deployment controller, you are required to define two target groups for the load balancer. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-bluegreen.html in the Amazon Elastic Container Service Developer Guide. If your service's task definition uses the awsvpc network mode (which is required for the Fargate launch type), you must choose ip as the target type, not instance, when creating your target groups because tasks that use the awsvpc network mode are associated with an elastic network interface, not an Amazon EC2 instance."
      },
      {
        "name": "container_name",
        "type": "string",
        "description": "The name of the container (as it appears in a container definition) to associate with the load balancer."
      },
      {
        "name": "container_port",
        "type": "integer",
        "description": "The port on the container to associate with the load balancer. This port must correspond to a containerPort in the task definition the tasks in the service are using. For tasks that use the EC2 launch type, the container instance they are launched on must allow ingress traffic on the hostPort of the port mapping."
      }
    ]
  },
  {
    "name": "service_connect_configuration",
    "type": "object",
    "description": "<details><summary>The configuration for this service to discover and connect to services, and be discovered by, and connected from, other services within a namespace.</summary>Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html\">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</details>",
    "children": [
      {
        "name": "services",
        "type": "array",
        "description": "<details><summary>The list of Service Connect service objects. These are names and aliases (also known as endpoints) that are used by other Amazon ECS services to connect to this service.</summary>This field is not required for a \"client\" Amazon ECS service that's a member of a namespace only to connect to other services within the namespace. An example of this would be a frontend application that accepts incoming requests from either a load balancer that's attached to the service or by other means.<br />An object selects a port from the task definition, assigns a name for the CMAPlong service, and a list of aliases (endpoints) and ports for client applications to refer to this service.</details>",
        "children": [
          {
            "name": "timeout",
            "type": "object",
            "description": "A reference to an object that represents the configured timeouts for Service Connect.",
            "children": [
              {
                "name": "per_request_timeout_seconds",
                "type": "integer",
                "description": "The amount of time waiting for the upstream to respond with a complete response per request. A value of <code>0</code> can be set to disable <code>perRequestTimeout</code>. <code>perRequestTimeout</code> can only be set if Service Connect <code>appProtocol</code> isn't <code>TCP</code>. Only <code>idleTimeout</code> is allowed for <code>TCP</code><code>appProtocol</code>."
              },
              {
                "name": "idle_timeout_seconds",
                "type": "integer",
                "description": "<details><summary>The amount of time in seconds a connection will stay active while idle. A value of <code>0</code> can be set to disable <code>idleTimeout</code>.</summary>The <code>idleTimeout</code> default for <code>HTTP</code>/<code>HTTP2</code>/<code>GRPC</code> is 5 minutes.<br />The <code>idleTimeout</code> default for <code>TCP</code> is 1 hour.</details>"
              }
            ]
          },
          {
            "name": "ingress_port_override",
            "type": "integer",
            "description": "<details><summary>The port number for the Service Connect proxy to listen on.</summary>Use the value of this field to bypass the proxy for traffic on the port number specified in the named <code>portMapping</code> in the task definition of this application, and then use it in your VPC security groups to allow traffic into the proxy for this Amazon ECS service.<br />In <code>awsvpc</code> mode and Fargate, the default value is the container port number. The container port number is in the <code>portMapping</code> in the task definition. In bridge mode, the default value is the ephemeral port of the Service Connect proxy.</details>"
          },
          {
            "name": "client_aliases",
            "type": "array",
            "description": "<details><summary>The list of client aliases for this Service Connect service. You use these to assign names that can be used by client applications. The maximum number of client aliases that you can have in this list is 1.</summary>Each alias (\"endpoint\") is a fully-qualified name and port number that other Amazon ECS tasks (\"clients\") can use to connect to this service.<br />Each name and port mapping must be unique within the namespace.<br />For each <code>ServiceConnectService</code>, you must provide at least one <code>clientAlias</code> with one <code>port</code>.</details>",
            "children": [
              {
                "name": "dns_name",
                "type": "string",
                "description": "<details><summary>The <code>dnsName</code> is the name that you use in the applications of client tasks to connect to this service. The name must be a valid DNS name but doesn't need to be fully-qualified. The name can include up to 127 characters. The name can include lowercase letters, numbers, underscores (_), hyphens (-), and periods (.). The name can't start with a hyphen.</summary>If this parameter isn't specified, the default value of <code>discoveryName.namespace</code> is used. If the <code>discoveryName</code> isn't specified, the port mapping name from the task definition is used in <code>portName.namespace</code>.<br />To avoid changing your applications in client Amazon ECS services, set this to the same name that the client application uses by default. For example, a few common names are <code>database</code>, <code>db</code>, or the lowercase name of a database, such as <code>mysql</code> or <code>redis</code>. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html\">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</details>"
              },
              {
                "name": "test_traffic_rules",
                "type": "object",
                "description": "The configuration for test traffic routing rules used during blue/green deployments with Amazon ECS Service Connect. This allows you to route a portion of traffic to the new service revision of your service for testing before shifting all production traffic."
              },
              {
                "name": "port",
                "type": "integer",
                "description": "<details><summary>The listening port number for the Service Connect proxy. This port is available inside of all of the tasks within the same namespace.</summary>To avoid changing your applications in client Amazon ECS services, set this to the same port that the client application uses by default. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html\">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</details>"
              }
            ]
          },
          {
            "name": "tls",
            "type": "object",
            "description": "A reference to an object that represents a Transport Layer Security (TLS) configuration.",
            "children": [
              {
                "name": "issuer_certificate_authority",
                "type": "object",
                "description": "The signer certificate authority."
              },
              {
                "name": "kms_key",
                "type": "string",
                "description": "The AWS Key Management Service key."
              },
              {
                "name": "role_arn",
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the IAM role that's associated with the Service Connect TLS."
              }
            ]
          },
          {
            "name": "discovery_name",
            "type": "string",
            "description": "<details><summary>The <code>discoveryName</code> is the name of the new CMAP service that Amazon ECS creates for this Amazon ECS service. This must be unique within the CMAP namespace. The name can contain up to 64 characters. The name can include lowercase letters, numbers, underscores (_), and hyphens (-). The name can't start with a hyphen.</summary>If the <code>discoveryName</code> isn't specified, the port mapping name from the task definition is used in <code>portName.namespace</code>.</details>"
          },
          {
            "name": "port_name",
            "type": "string",
            "description": "The <code>portName</code> must match the name of one of the <code>portMappings</code> from all the containers in the task definition of this Amazon ECS service."
          }
        ]
      },
      {
        "name": "enabled",
        "type": "boolean",
        "description": "Specifies whether to use Service Connect with this service."
      },
      {
        "name": "log_configuration",
        "type": "object",
        "description": "<details><summary>The log configuration for the container. This parameter maps to <code>LogConfig</code> in the docker container create command and the <code>--log-driver</code> option to docker run.</summary>By default, containers use the same logging driver that the Docker daemon uses. However, the container might use a different logging driver than the Docker daemon by specifying a log driver configuration in the container definition.<br />Understand the following when specifying a log configuration for your containers.<br />+  Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon. Additional log drivers may be available in future releases of the Amazon ECS container agent.<br />For tasks on FARGATElong, the supported log drivers are <code>awslogs</code>, <code>splunk</code>, and <code>awsfirelens</code>.<br />For tasks hosted on Amazon EC2 instances, the supported log drivers are <code>awslogs</code>, <code>fluentd</code>, <code>gelf</code>, <code>json-file</code>, <code>journald</code>,<code>syslog</code>, <code>splunk</code>, and <code>awsfirelens</code>.<br />+  This parameter requires version 1.18 of the Docker Remote API or greater on your container instance.<br />+  For tasks that are hosted on Amazon EC2 instances, the Amazon ECS container agent must register the available logging drivers with the <code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment variable before containers placed on that instance can use these log configuration options. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html\">Amazon ECS container agent configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.<br />+  For tasks that are on FARGATElong, because you don't have access to the underlying infrastructure your tasks are hosted on, any additional software needed must be installed outside of the task. For example, the Fluentd output aggregators or a remote host running Logstash to send Gelf logs to.</details>",
        "children": [
          {
            "name": "secret_options",
            "type": "array",
            "description": "The secrets to pass to the log configuration. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html\">Specifying sensitive data</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.",
            "children": [
              {
                "name": "value_from",
                "type": "string",
                "description": "<details><summary>The secret to expose to the container. The supported values are either the full ARN of the ASMlong secret or the full ARN of the parameter in the SSM Parameter Store.</summary>For information about the require IAMlong permissions, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data-secrets.html#secrets-iam\">Required IAM permissions for Amazon ECS secrets</a> (for Secrets Manager) or <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data-parameters.html\">Required IAM permissions for Amazon ECS secrets</a> (for Systems Manager Parameter store) in the <i>Amazon Elastic Container Service Developer Guide</i>.<br />If the SSM Parameter Store parameter exists in the same Region as the task you're launching, then you can use either the full ARN or name of the parameter. If the parameter exists in a different Region, then the full ARN must be specified.</details>"
              },
              {
                "name": "name",
                "type": "string",
                "description": "The name of the secret."
              }
            ]
          },
          {
            "name": "options",
            "type": "object",
            "description": "<details><summary>The configuration options to send to the log driver.</summary>The options you can specify depend on the log driver. Some of the options you can specify when you use the <code>awslogs</code> log driver to route logs to Amazon CloudWatch include the following:<br />+ awslogs-create-group Required: No Specify whether you want the log group to be created automatically. If this option isn't specified, it defaults to false. Your IAM policy must include the logs:CreateLogGroup permission before you attempt to use awslogs-create-group. + awslogs-region Required: Yes Specify the Region that the awslogs log driver is to send your Docker logs to. You can choose to send all of your logs from clusters in different Regions to a single region in CloudWatch Logs. This is so that they're all visible in one location. Otherwise, you can separate them by Region for more granularity. Make sure that the specified log group exists in the Region that you specify with this option. + awslogs-group Required: Yes Make sure to specify a log group that the awslogs log driver sends its log streams to. + awslogs-stream-prefix Required: Yes, when using Fargate.Optional when using EC2. Use the awslogs-stream-prefix option to associate a log stream with the specified prefix, the container name, and the ID of the Amazon ECS task that the container belongs to. If you specify a prefix with this option, then the log stream takes the format prefix-name/container-name/ecs-task-id. If you don't specify a prefix with this option, then the log stream is named after the container ID that's assigned by the Docker daemon on the container instance. Because it's difficult to trace logs back to the container that sent them with just the Docker container ID (which is only available on the container instance), we recommend that you specify a prefix with this option. For Amazon ECS services, you can use the service name as the prefix. Doing so, you can trace log streams to the service that the container belongs to, the name of the container that sent them, and the ID of the task that the container belongs to. You must specify a stream-prefix for your logs to have your logs appear in the Log pane when using the Amazon ECS console. + awslogs-datetime-format Required: No This option defines a multiline start pattern in Python strftime format. A log message consists of a line that matches the pattern and any following lines that don’t match the pattern. The matched line is the delimiter between log messages. One example of a use case for using this format is for parsing output such as a stack dump, which might otherwise be logged in multiple entries. The correct pattern allows it to be captured in a single entry. For more information, see awslogs-datetime-format. You cannot configure both the awslogs-datetime-format and awslogs-multiline-pattern options. Multiline logging performs regular expression parsing and matching of all log messages. This might have a negative impact on logging performance. + awslogs-multiline-pattern Required: No This option defines a multiline start pattern that uses a regular expression. A log message consists of a line that matches the pattern and any following lines that don’t match the pattern. The matched line is the delimiter between log messages. For more information, see awslogs-multiline-pattern. This option is ignored if awslogs-datetime-format is also configured. You cannot configure both the awslogs-datetime-format and awslogs-multiline-pattern options. Multiline logging performs regular expression parsing and matching of all log messages. This might have a negative impact on logging performance.<br />The following options apply to all supported log drivers.<br />+ mode Required: No Valid values: non-blocking | blocking This option defines the delivery mode of log messages from the container to the log driver specified using logDriver. The delivery mode you choose affects application availability when the flow of logs from container is interrupted. If you use the blocking mode and the flow of logs is interrupted, calls from container code to write to the stdout and stderr streams will block. The logging thread of the application will block as a result. This may cause the application to become unresponsive and lead to container healthcheck failure. If you use the non-blocking mode, the container's logs are instead stored in an in-memory intermediate buffer configured with the max-buffer-size option. This prevents the application from becoming unresponsive when logs cannot be sent. We recommend using this mode if you want to ensure service availability and are okay with some log loss. For more information, see Preventing log loss with non-blocking mode in the awslogs container log driver. You can set a default mode for all containers in a specific Region by using the defaultLogDriverMode account setting. If you don't specify the mode option or configure the account setting, Amazon ECS will default to the non-blocking mode. For more information about the account setting, see Default log driver mode in the Amazon Elastic Container Service Developer Guide. On June 25, 2025, Amazon ECS changed the default log driver mode from blocking to non-blocking to prioritize task availability over logging. To continue using the blocking mode after this change, do one of the following: Set the mode option in your container definition's logConfiguration as blocking. Set the defaultLogDriverMode account setting to blocking. + max-buffer-size Required: No Default value: 10m When non-blocking mode is used, the max-buffer-size log option controls the size of the buffer that's used for intermediate message storage. Make sure to specify an adequate buffer size based on your application. When the buffer fills up, further logs cannot be stored. Logs that cannot be stored are lost.<br />To route logs using the <code>splunk</code> log router, you need to specify a <code>splunk-token</code> and a <code>splunk-url</code>.<br />When you use the <code>awsfirelens</code> log router to route logs to an AWS Service or AWS Partner Network destination for log storage and analytics, you can set the <code>log-driver-buffer-limit</code> option to limit the number of events that are buffered in memory, before being sent to the log router container. It can help to resolve potential log loss issue because high throughput might result in memory running out for the buffer inside of Docker.<br />Other options you can specify when using <code>awsfirelens</code> to route logs depend on the destination. When you export logs to Amazon Data Firehose, you can specify the AWS Region with <code>region</code> and a name for the log stream with <code>delivery_stream</code>.<br />When you export logs to Amazon Kinesis Data Streams, you can specify an AWS Region with <code>region</code> and a data stream name with <code>stream</code>.<br />When you export logs to Amazon OpenSearch Service, you can specify options like <code>Name</code>, <code>Host</code> (OpenSearch Service endpoint without protocol), <code>Port</code>, <code>Index</code>, <code>Type</code>, <code>Aws_auth</code>, <code>Aws_region</code>, <code>Suppress_Type_Name</code>, and <code>tls</code>. For more information, see <a href=\"https://docs.aws.amazon.com/containers/under-the-hood-firelens-for-amazon-ecs-tasks/\">Under the hood: FireLens for Amazon ECS Tasks</a>.<br />When you export logs to Amazon S3, you can specify the bucket using the <code>bucket</code> option. You can also specify <code>region</code>, <code>total_file_size</code>, <code>upload_timeout</code>, and <code>use_put_object</code> as options.<br />This parameter requires version 1.19 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version --format '&#123;&#123;.Server.APIVersion&#125;&#125;'</code></details>"
          },
          {
            "name": "log_driver",
            "type": "string",
            "description": "<details><summary>The log driver to use for the container.</summary>For tasks on FARGATElong, the supported log drivers are <code>awslogs</code>, <code>splunk</code>, and <code>awsfirelens</code>.<br />For tasks hosted on Amazon EC2 instances, the supported log drivers are <code>awslogs</code>, <code>fluentd</code>, <code>gelf</code>, <code>json-file</code>, <code>journald</code>, <code>syslog</code>, <code>splunk</code>, and <code>awsfirelens</code>.<br />For more information about using the <code>awslogs</code> log driver, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_awslogs.html\">Send Amazon ECS logs to CloudWatch</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.<br />For more information about using the <code>awsfirelens</code> log driver, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html\">Send Amazon ECS logs to an service or Partner</a>.<br />If you have a custom driver that isn't listed, you can fork the Amazon ECS container agent project that's <a href=\"https://docs.aws.amazon.com/https://github.com/aws/amazon-ecs-agent\">available on GitHub</a> and customize it to work with that driver. We encourage you to submit pull requests for changes that you would like to have included. However, we don't currently provide support for running modified copies of this software.</details>"
          }
        ]
      },
      {
        "name": "namespace",
        "type": "string",
        "description": "The namespace name or full Amazon Resource Name (ARN) of the CMAPlong namespace for use with Service Connect. The namespace must be in the same AWS Region as the Amazon ECS service and cluster. The type of namespace doesn't affect Service Connect. For more information about CMAPlong, see <a href=\"https://docs.aws.amazon.com/cloud-map/latest/dg/working-with-services.html\">Working with Services</a> in the <i>Developer Guide</i>."
      }
    ]
  },
  {
    "name": "desired_count",
    "type": "integer",
    "description": "<details><summary>The number of instantiations of the specified task definition to place and keep running in your service.</summary>For new services, if a desired count is not specified, a default value of <code>1</code> is used. When using the <code>DAEMON</code> scheduling strategy, the desired count is not required.<br />For existing services, if a desired count is not specified, it is omitted from the operation.</details>"
  },
  {
    "name": "vpc_lattice_configurations",
    "type": "array",
    "description": "The VPC Lattice configuration for the service being created.",
    "children": [
      {
        "name": "target_group_arn",
        "type": "string",
        "description": "The full Amazon Resource Name (ARN) of the target group or groups associated with the VPC Lattice configuration that the Amazon ECS tasks will be registered to."
      },
      {
        "name": "port_name",
        "type": "string",
        "description": "The name of the port mapping to register in the VPC Lattice target group. This is the name of the <code>portMapping</code> you defined in your task definition."
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": "The ARN of the IAM role to associate with this VPC Lattice configuration. This is the Amazon ECS  infrastructure IAM role that is used to manage your VPC Lattice infrastructure."
      }
    ]
  },
  {
    "name": "deployment_controller",
    "type": "object",
    "description": "The deployment controller to use for the service.",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": "<details><summary>The deployment controller type to use.</summary>The deployment controller is the mechanism that determines how tasks are deployed for your service. The valid options are:<br />+  ECS<br />When you create a service which uses the <code>ECS</code> deployment controller, you can choose between the following deployment strategies:<br />+  <code>ROLLING</code>: When you create a service which uses the <i>rolling update</i> (<code>ROLLING</code>) deployment strategy, the ECS service scheduler replaces the currently running tasks with new tasks. The number of tasks that ECS adds or removes from the service during a rolling update is controlled by the service deployment configuration.<br />Rolling update deployments are best suited for the following scenarios:<br />+  Gradual service updates: You need to update your service incrementally without taking the entire service offline at once.<br />+  Limited resource requirements: You want to avoid the additional resource costs of running two complete environments simultaneously (as required by blue/green deployments).<br />+  Acceptable deployment time: Your application can tolerate a longer deployment process, as rolling updates replace tasks one by one.<br />+  No need for instant roll back: Your service can tolerate a rollback process that takes minutes rather than seconds.<br />+  Simple deployment process: You prefer a straightforward deployment approach without the complexity of managing multiple environments, target groups, and listeners.<br />+  No load balancer requirement: Your service doesn't use or require a load balancer, ALB, NLB, or Service Connect (which are required for blue/green deployments).<br />+  Stateful applications: Your application maintains state that makes it difficult to run two parallel environments.<br />+  Cost sensitivity: You want to minimize deployment costs by not running duplicate environments during deployment.<br />Rolling updates are the default deployment strategy for services and provide a balance between deployment safety and resource efficiency for many common application scenarios.<br />+  <code>BLUE_GREEN</code>: A <i>blue/green</i> deployment strategy (<code>BLUE_GREEN</code>) is a release methodology that reduces downtime and risk by running two identical production environments called blue and green. With ECS blue/green deployments, you can validate new service revisions before directing production traffic to them. This approach provides a safer way to deploy changes with the ability to quickly roll back if needed.<br />ECS blue/green deployments are best suited for the following scenarios:<br />+  Service validation: When you need to validate new service revisions before directing production traffic to them<br />+  Zero downtime: When your service requires zero-downtime deployments<br />+  Instant roll back: When you need the ability to quickly roll back if issues are detected<br />+  Load balancer requirement: When your service uses ALB, NLB, or Service Connect<br />+  External<br />Use a third-party deployment controller.<br />+  Blue/green deployment (powered by ACD)<br />ACD installs an updated version of the application as a new replacement task set and reroutes production traffic from the original application task set to the replacement task set. The original task set is terminated after a successful deployment. Use this deployment controller to verify a new deployment of a service before sending production traffic to it.<br />When updating the deployment controller for a service, consider the following depending on the type of migration you're performing.<br />+  If you have a template that contains the <code>EXTERNAL</code> deployment controller information as well as <code>TaskSet</code> and <code>PrimaryTaskSet</code> resources, and you remove the task set resources from the template when updating from <code>EXTERNAL</code> to <code>ECS</code>, the <code>DescribeTaskSet</code> and <code>DeleteTaskSet</code> API calls will return a 400 error after the deployment controller is updated to <code>ECS</code>. This results in a delete failure on the task set resources, even though the stack transitions to <code>UPDATE_COMPLETE</code> status. For more information, see <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-resource-removed-not-deleted\">Resource removed from stack but not deleted</a> in the CFNlong User Guide. To fix this issue, delete the task sets directly using the ECS<code>DeleteTaskSet</code> API. For more information about how to delete a task set, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteTaskSet.html\">DeleteTaskSet</a> in the ECSlong API Reference.<br />+  If you're migrating from <code>CODE_DEPLOY</code> to <code>ECS</code> with a new task definition and CFN performs a rollback operation, the ECS<code>UpdateService</code> request fails with the following error:<br />Resource handler returned message: \"Invalid request provided: Unable to update task definition on services with a CODE_DEPLOY deployment controller.<br />+  After a successful migration from <code>ECS</code> to <code>EXTERNAL</code> deployment controller, you need to manually remove the <code>ACTIVE</code> task set, because ECS no longer manages the deployment. For information about how to delete a task set, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteTaskSet.html\">DeleteTaskSet</a> in the ECSlong API Reference.</details>"
      }
    ]
  },
  {
    "name": "role",
    "type": "string",
    "description": "<details><summary>The name or full Amazon Resource Name (ARN) of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is only permitted if you are using a load balancer with your service and your task definition doesn't use the <code>awsvpc</code> network mode. If you specify the <code>role</code> parameter, you must also specify a load balancer object with the <code>loadBalancers</code> parameter.</summary>If your account has already created the Amazon ECS service-linked role, that role is used for your service unless you specify a role here. The service-linked role is required if your task definition uses the <code>awsvpc</code> network mode or if the service is configured to use service discovery, an external deployment controller, multiple target groups, or Elastic Inference accelerators in which case you don't specify a role here. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html\">Using service-linked roles for Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.<br />If your specified role has a path other than <code>/</code>, then you must either specify the full role ARN (this is recommended) or prefix the role name with the path. For example, if a role with the name <code>bar</code> has a path of <code>/foo/</code> then you would specify <code>/foo/bar</code> as the role name. For more information, see <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names\">Friendly names and paths</a> in the <i>IAM User Guide</i>.</details>"
  },
  {
    "name": "task_definition",
    "type": "string",
    "description": "<details><summary>The <code>family</code> and <code>revision</code> (<code>family:revision</code>) or full ARN of the task definition to run in your service. If a <code>revision</code> isn't specified, the latest <code>ACTIVE</code> revision is used.</summary>A task definition must be specified if the service uses either the <code>ECS</code> or <code>CODE_DEPLOY</code> deployment controllers.<br />For more information about deployment types, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html\">Amazon ECS deployment types</a>.</details>"
  },
  {
    "name": "service_name",
    "type": "string",
    "description": "<details><summary>The name of your service. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed. Service names must be unique within a cluster, but you can have similarly named services in multiple clusters within a Region or across multiple Regions.</summary>The stack update fails if you change any properties that require replacement and the <code>ServiceName</code> is configured. This is because AWS CloudFormation creates the replacement service first, but each <code>ServiceName</code> must be unique in the cluster.</details>"
  },
  {
    "name": "deployment_configuration",
    "type": "object",
    "description": "Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.",
    "children": [
      {
        "name": "bake_time_in_minutes",
        "type": "integer",
        "description": "<details><summary>The duration when both blue and green service revisions are running simultaneously after the production traffic has shifted.</summary>The following rules apply when you don't specify a value:<br />+  For rolling deployments, the value is set to 3 hours (180 minutes).<br />+  When you use an external deployment controller (<code>EXTERNAL</code>), or the ACD blue/green deployment controller (<code>CODE_DEPLOY</code>), the value is set to 3 hours (180 minutes).<br />+  For all other cases, the value is set to 36 hours (2160 minutes).</details>"
      },
      {
        "name": "lifecycle_hooks",
        "type": "array",
        "description": "An array of deployment lifecycle hook objects to run custom logic at specific stages of the deployment lifecycle.",
        "children": [
          {
            "name": "lifecycle_stages",
            "type": "array",
            "description": "<details><summary>The lifecycle stages at which to run the hook. Choose from these valid values:</summary>+  RECONCILE_SERVICE<br />The reconciliation stage that only happens when you start a new service deployment with more than 1 service revision in an ACTIVE state.<br />You can use a lifecycle hook for this stage.<br />+  PRE_SCALE_UP<br />The green service revision has not started. The blue service revision is handling 100% of the production traffic. There is no test traffic.<br />You can use a lifecycle hook for this stage.<br />+  POST_SCALE_UP<br />The green service revision has started. The blue service revision is handling 100% of the production traffic. There is no test traffic.<br />You can use a lifecycle hook for this stage.<br />+  TEST_TRAFFIC_SHIFT<br />The blue and green service revisions are running. The blue service revision handles 100% of the production traffic. The green service revision is migrating from 0% to 100% of test traffic.<br />You can use a lifecycle hook for this stage.<br />+  POST_TEST_TRAFFIC_SHIFT<br />The test traffic shift is complete. The green service revision handles 100% of the test traffic.<br />You can use a lifecycle hook for this stage.<br />+  PRODUCTION_TRAFFIC_SHIFT<br />Production traffic is shifting to the green service revision. The green service revision is migrating from 0% to 100% of production traffic.<br />You can use a lifecycle hook for this stage.<br />+  POST_PRODUCTION_TRAFFIC_SHIFT<br />The production traffic shift is complete.<br />You can use a lifecycle hook for this stage.<br />You must provide this parameter when configuring a deployment lifecycle hook.</details>"
          },
          {
            "name": "hook_target_arn",
            "type": "string",
            "description": "<details><summary>The Amazon Resource Name (ARN) of the hook target. Currently, only Lambda function ARNs are supported.</summary>You must provide this parameter when configuring a deployment lifecycle hook.</details>"
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": "<details><summary>The Amazon Resource Name (ARN) of the IAM role that grants Amazon ECS permission to call Lambda functions on your behalf.</summary>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/blue-green-permissions.html\">Permissions required for Lambda functions in Amazon ECS blue/green deployments</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</details>"
          }
        ]
      },
      {
        "name": "alarms",
        "type": "object",
        "description": "Information about the CloudWatch alarms.",
        "children": [
          {
            "name": "alarm_names",
            "type": "array",
            "description": "One or more CloudWatch alarm names. Use a \",\" to separate the alarms."
          },
          {
            "name": "enable",
            "type": "boolean",
            "description": "Determines whether to use the CloudWatch alarm option in the service deployment process."
          },
          {
            "name": "rollback",
            "type": "boolean",
            "description": "Determines whether to configure Amazon ECS to roll back the service if a service deployment fails. If rollback is used, when a service deployment fails, the service is rolled back to the last deployment that completed successfully."
          }
        ]
      },
      {
        "name": "strategy",
        "type": "string",
        "description": "<details><summary>The deployment strategy for the service. Choose from these valid values:</summary>+  <code>ROLLING</code> - When you create a service which uses the rolling update (<code>ROLLING</code>) deployment strategy, the Amazon ECS service scheduler replaces the currently running tasks with new tasks. The number of tasks that Amazon ECS adds or removes from the service during a rolling update is controlled by the service deployment configuration.<br />+  <code>BLUE_GREEN</code> - A blue/green deployment strategy (<code>BLUE_GREEN</code>) is a release methodology that reduces downtime and risk by running two identical production environments called blue and green. With Amazon ECS blue/green deployments, you can validate new service revisions before directing production traffic to them. This approach provides a safer way to deploy changes with the ability to quickly roll back if needed.</details>"
      },
      {
        "name": "deployment_circuit_breaker",
        "type": "object",
        "description": "<details><summary>The deployment circuit breaker can only be used for services using the rolling update (<code>ECS</code>) deployment type.</summary>The <i>deployment circuit breaker</i> determines whether a service deployment will fail if the service can't reach a steady state. If you use the deployment circuit breaker, a service deployment will transition to a failed state and stop launching new tasks. If you use the rollback option, when a service deployment fails, the service is rolled back to the last deployment that completed successfully. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html\">Rolling update</a> in the <i>Amazon Elastic Container Service Developer Guide</i></details>",
        "children": [
          {
            "name": "enable",
            "type": "boolean",
            "description": "Determines whether to use the deployment circuit breaker logic for the service."
          },
          {
            "name": "rollback",
            "type": "boolean",
            "description": "Determines whether to configure Amazon ECS to roll back the service if a service deployment fails. If rollback is on, when a service deployment fails, the service is rolled back to the last deployment that completed successfully."
          }
        ]
      },
      {
        "name": "maximum_percent",
        "type": "integer",
        "description": "<details><summary>If a service is using the rolling update (<code>ECS</code>) deployment type, the <code>maximumPercent</code> parameter represents an upper limit on the number of your service's tasks that are allowed in the <code>RUNNING</code> or <code>PENDING</code> state during a deployment, as a percentage of the <code>desiredCount</code> (rounded down to the nearest integer). This parameter enables you to define the deployment batch size. For example, if your service is using the <code>REPLICA</code> service scheduler and has a <code>desiredCount</code> of four tasks and a <code>maximumPercent</code> value of 200%, the scheduler may start four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available). The default <code>maximumPercent</code> value for a service using the <code>REPLICA</code> service scheduler is 200%.</summary>The Amazon ECS scheduler uses this parameter to replace unhealthy tasks by starting replacement tasks first and then stopping the unhealthy tasks, as long as cluster resources for starting replacement tasks are available. For more information about how the scheduler replaces unhealthy tasks, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html\">Amazon ECS services</a>.<br />If a service is using either the blue/green (<code>CODE_DEPLOY</code>) or <code>EXTERNAL</code> deployment types, and tasks in the service use the EC2 launch type, the <i>maximum percent</i> value is set to the default value. The <i>maximum percent</i> value is used to define the upper limit on the number of the tasks in the service that remain in the <code>RUNNING</code> state while the container instances are in the <code>DRAINING</code> state.<br />You can't specify a custom <code>maximumPercent</code> value for a service that uses either the blue/green (<code>CODE_DEPLOY</code>) or <code>EXTERNAL</code> deployment types and has tasks that use the EC2 launch type.<br />If the service uses either the blue/green (<code>CODE_DEPLOY</code>) or <code>EXTERNAL</code> deployment types, and the tasks in the service use the Fargate launch type, the maximum percent value is not used. The value is still returned when describing your service.</details>"
      },
      {
        "name": "minimum_healthy_percent",
        "type": "integer",
        "description": "<details><summary>If a service is using the rolling update (<code>ECS</code>) deployment type, the <code>minimumHealthyPercent</code> represents a lower limit on the number of your service's tasks that must remain in the <code>RUNNING</code> state during a deployment, as a percentage of the <code>desiredCount</code> (rounded up to the nearest integer). This parameter enables you to deploy without using additional cluster capacity. For example, if your service has a <code>desiredCount</code> of four tasks and a <code>minimumHealthyPercent</code> of 50%, the service scheduler may stop two existing tasks to free up cluster capacity before starting two new tasks.</summary>If any tasks are unhealthy and if <code>maximumPercent</code> doesn't allow the Amazon ECS scheduler to start replacement tasks, the scheduler stops the unhealthy tasks one-by-one — using the <code>minimumHealthyPercent</code> as a constraint — to clear up capacity to launch replacement tasks. For more information about how the scheduler replaces unhealthy tasks, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html\">Amazon ECS services</a> .<br />For services that <i>do not</i> use a load balancer, the following should be noted:<br />+  A service is considered healthy if all essential containers within the tasks in the service pass their health checks.<br />+  If a task has no essential containers with a health check defined, the service scheduler will wait for 40 seconds after a task reaches a <code>RUNNING</code> state before the task is counted towards the minimum healthy percent total.<br />+  If a task has one or more essential containers with a health check defined, the service scheduler will wait for the task to reach a healthy status before counting it towards the minimum healthy percent total. A task is considered healthy when all essential containers within the task have passed their health checks. The amount of time the service scheduler can wait for is determined by the container health check settings.<br />For services that <i>do</i> use a load balancer, the following should be noted:<br />+  If a task has no essential containers with a health check defined, the service scheduler will wait for the load balancer target group health check to return a healthy status before counting the task towards the minimum healthy percent total.<br />+  If a task has an essential container with a health check defined, the service scheduler will wait for both the task to reach a healthy status and the load balancer target group health check to return a healthy status before counting the task towards the minimum healthy percent total.<br />The default value for a replica service for <code>minimumHealthyPercent</code> is 100%. The default <code>minimumHealthyPercent</code> value for a service using the <code>DAEMON</code> service schedule is 0% for the CLI, the AWS SDKs, and the APIs and 50% for the AWS Management Console.<br />The minimum number of healthy tasks during a deployment is the <code>desiredCount</code> multiplied by the <code>minimumHealthyPercent</code>/100, rounded up to the nearest integer value.<br />If a service is using either the blue/green (<code>CODE_DEPLOY</code>) or <code>EXTERNAL</code> deployment types and is running tasks that use the EC2 launch type, the <i>minimum healthy percent</i> value is set to the default value. The <i>minimum healthy percent</i> value is used to define the lower limit on the number of the tasks in the service that remain in the <code>RUNNING</code> state while the container instances are in the <code>DRAINING</code> state.<br />You can't specify a custom <code>minimumHealthyPercent</code> value for a service that uses either the blue/green (<code>CODE_DEPLOY</code>) or <code>EXTERNAL</code> deployment types and has tasks that use the EC2 launch type.<br />If a service is using either the blue/green (<code>CODE_DEPLOY</code>) or <code>EXTERNAL</code> deployment types and is running tasks that use the Fargate launch type, the minimum healthy percent value is not used, although it is returned when describing your service.</details>"
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
    "name": "service_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "cluster",
    "type": "string",
    "description": "The short name or full Amazon Resource Name (ARN) of the cluster that you run your service on. If you do not specify a cluster, the default cluster is assumed."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html"><code>AWS::ECS::Service</code></a>.

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
    <td><code>services</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>services</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>services</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>services_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>services</code></td>
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

Gets all properties from an individual <code>service</code>.
```sql
SELECT
  region,
  platform_version,
  propagate_tags,
  service_arn,
  placement_strategies,
  service_registries,
  volume_configurations,
  capacity_provider_strategy,
  launch_type,
  name,
  availability_zone_rebalancing,
  scheduling_strategy,
  network_configuration,
  tags,
  force_new_deployment,
  health_check_grace_period_seconds,
  enable_ecs_managed_tags,
  enable_execute_command,
  placement_constraints,
  cluster,
  load_balancers,
  service_connect_configuration,
  desired_count,
  vpc_lattice_configurations,
  deployment_controller,
  role,
  task_definition,
  service_name,
  deployment_configuration
FROM awscc.ecs.services
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ service_arn }}|{{ cluster }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>services</code> in a region.
```sql
SELECT
  region,
  service_arn,
  cluster
FROM awscc.ecs.services_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>service</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ecs.services (
  PlatformVersion,
  PropagateTags,
  PlacementStrategies,
  ServiceRegistries,
  VolumeConfigurations,
  CapacityProviderStrategy,
  LaunchType,
  AvailabilityZoneRebalancing,
  SchedulingStrategy,
  NetworkConfiguration,
  Tags,
  ForceNewDeployment,
  HealthCheckGracePeriodSeconds,
  EnableECSManagedTags,
  EnableExecuteCommand,
  PlacementConstraints,
  Cluster,
  LoadBalancers,
  ServiceConnectConfiguration,
  DesiredCount,
  VpcLatticeConfigurations,
  DeploymentController,
  Role,
  TaskDefinition,
  ServiceName,
  DeploymentConfiguration,
  region
)
SELECT
  '{{ platform_version }}',
  '{{ propagate_tags }}',
  '{{ placement_strategies }}',
  '{{ service_registries }}',
  '{{ volume_configurations }}',
  '{{ capacity_provider_strategy }}',
  '{{ launch_type }}',
  '{{ availability_zone_rebalancing }}',
  '{{ scheduling_strategy }}',
  '{{ network_configuration }}',
  '{{ tags }}',
  '{{ force_new_deployment }}',
  '{{ health_check_grace_period_seconds }}',
  '{{ enable_ecs_managed_tags }}',
  '{{ enable_execute_command }}',
  '{{ placement_constraints }}',
  '{{ cluster }}',
  '{{ load_balancers }}',
  '{{ service_connect_configuration }}',
  '{{ desired_count }}',
  '{{ vpc_lattice_configurations }}',
  '{{ deployment_controller }}',
  '{{ role }}',
  '{{ task_definition }}',
  '{{ service_name }}',
  '{{ deployment_configuration }}',
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
INSERT INTO awscc.ecs.services (
  PlatformVersion,
  PropagateTags,
  PlacementStrategies,
  ServiceRegistries,
  VolumeConfigurations,
  CapacityProviderStrategy,
  LaunchType,
  AvailabilityZoneRebalancing,
  SchedulingStrategy,
  NetworkConfiguration,
  Tags,
  ForceNewDeployment,
  HealthCheckGracePeriodSeconds,
  EnableECSManagedTags,
  EnableExecuteCommand,
  PlacementConstraints,
  Cluster,
  LoadBalancers,
  ServiceConnectConfiguration,
  DesiredCount,
  VpcLatticeConfigurations,
  DeploymentController,
  Role,
  TaskDefinition,
  ServiceName,
  DeploymentConfiguration,
  region
)
SELECT
  '{{ platform_version }}',
  '{{ propagate_tags }}',
  '{{ placement_strategies }}',
  '{{ service_registries }}',
  '{{ volume_configurations }}',
  '{{ capacity_provider_strategy }}',
  '{{ launch_type }}',
  '{{ availability_zone_rebalancing }}',
  '{{ scheduling_strategy }}',
  '{{ network_configuration }}',
  '{{ tags }}',
  '{{ force_new_deployment }}',
  '{{ health_check_grace_period_seconds }}',
  '{{ enable_ecs_managed_tags }}',
  '{{ enable_execute_command }}',
  '{{ placement_constraints }}',
  '{{ cluster }}',
  '{{ load_balancers }}',
  '{{ service_connect_configuration }}',
  '{{ desired_count }}',
  '{{ vpc_lattice_configurations }}',
  '{{ deployment_controller }}',
  '{{ role }}',
  '{{ task_definition }}',
  '{{ service_name }}',
  '{{ deployment_configuration }}',
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
  - name: service
    props:
      - name: platform_version
        value: '{{ platform_version }}'
      - name: propagate_tags
        value: '{{ propagate_tags }}'
      - name: placement_strategies
        value:
          - field: '{{ field }}'
            type: '{{ type }}'
      - name: service_registries
        value:
          - container_name: '{{ container_name }}'
            port: '{{ port }}'
            container_port: '{{ container_port }}'
            registry_arn: '{{ registry_arn }}'
      - name: volume_configurations
        value:
          - managed_ebs_volume:
              snapshot_id: '{{ snapshot_id }}'
              volume_type: '{{ volume_type }}'
              kms_key_id: '{{ kms_key_id }}'
              tag_specifications:
                - propagate_tags: '{{ propagate_tags }}'
                  resource_type: '{{ resource_type }}'
                  tags:
                    - value: '{{ value }}'
                      key: '{{ key }}'
              filesystem_type: '{{ filesystem_type }}'
              encrypted: '{{ encrypted }}'
              throughput: '{{ throughput }}'
              volume_initialization_rate: '{{ volume_initialization_rate }}'
              iops: '{{ iops }}'
              size_in_gi_b: '{{ size_in_gi_b }}'
              role_arn: '{{ role_arn }}'
            name: '{{ name }}'
      - name: capacity_provider_strategy
        value:
          - capacity_provider: '{{ capacity_provider }}'
            base: '{{ base }}'
            weight: '{{ weight }}'
      - name: launch_type
        value: '{{ launch_type }}'
      - name: availability_zone_rebalancing
        value: '{{ availability_zone_rebalancing }}'
      - name: scheduling_strategy
        value: '{{ scheduling_strategy }}'
      - name: network_configuration
        value:
          aws_vpc_configuration:
            security_groups:
              - '{{ security_groups[0] }}'
            subnets:
              - '{{ subnets[0] }}'
            assign_public_ip: '{{ assign_public_ip }}'
      - name: tags
        value:
          - null
      - name: force_new_deployment
        value:
          enable_force_new_deployment: '{{ enable_force_new_deployment }}'
          force_new_deployment_nonce: '{{ force_new_deployment_nonce }}'
      - name: health_check_grace_period_seconds
        value: '{{ health_check_grace_period_seconds }}'
      - name: enable_ecs_managed_tags
        value: '{{ enable_ecs_managed_tags }}'
      - name: enable_execute_command
        value: '{{ enable_execute_command }}'
      - name: placement_constraints
        value:
          - type: '{{ type }}'
            expression: '{{ expression }}'
      - name: cluster
        value: '{{ cluster }}'
      - name: load_balancers
        value:
          - target_group_arn: '{{ target_group_arn }}'
            container_name: '{{ container_name }}'
            container_port: '{{ container_port }}'
      - name: service_connect_configuration
        value:
          services:
            - timeout:
                per_request_timeout_seconds: '{{ per_request_timeout_seconds }}'
                idle_timeout_seconds: '{{ idle_timeout_seconds }}'
              ingress_port_override: '{{ ingress_port_override }}'
              client_aliases:
                - dns_name: '{{ dns_name }}'
                  test_traffic_rules:
                    header:
                      value:
                        exact: '{{ exact }}'
                      name: '{{ name }}'
                  port: '{{ port }}'
              tls:
                issuer_certificate_authority:
                  aws_pca_authority_arn: '{{ aws_pca_authority_arn }}'
                kms_key: '{{ kms_key }}'
                role_arn: '{{ role_arn }}'
              discovery_name: '{{ discovery_name }}'
              port_name: '{{ port_name }}'
          enabled: '{{ enabled }}'
          log_configuration:
            secret_options:
              - value_from: '{{ value_from }}'
                name: '{{ name }}'
            options: {}
            log_driver: '{{ log_driver }}'
          namespace: '{{ namespace }}'
      - name: desired_count
        value: '{{ desired_count }}'
      - name: vpc_lattice_configurations
        value:
          - target_group_arn: '{{ target_group_arn }}'
            port_name: '{{ port_name }}'
            role_arn: '{{ role_arn }}'
      - name: deployment_controller
        value:
          type: '{{ type }}'
      - name: role
        value: '{{ role }}'
      - name: task_definition
        value: '{{ task_definition }}'
      - name: service_name
        value: '{{ service_name }}'
      - name: deployment_configuration
        value:
          bake_time_in_minutes: '{{ bake_time_in_minutes }}'
          lifecycle_hooks:
            - lifecycle_stages:
                - '{{ lifecycle_stages[0] }}'
              hook_target_arn: '{{ hook_target_arn }}'
              role_arn: '{{ role_arn }}'
          alarms:
            alarm_names:
              - '{{ alarm_names[0] }}'
            enable: '{{ enable }}'
            rollback: '{{ rollback }}'
          strategy: '{{ strategy }}'
          deployment_circuit_breaker:
            enable: '{{ enable }}'
            rollback: '{{ rollback }}'
          maximum_percent: '{{ maximum_percent }}'
          minimum_healthy_percent: '{{ minimum_healthy_percent }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>service</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ecs.services
SET PatchDocument = string('{{ {
    "PlatformVersion": platform_version,
    "PropagateTags": propagate_tags,
    "PlacementStrategies": placement_strategies,
    "ServiceRegistries": service_registries,
    "VolumeConfigurations": volume_configurations,
    "CapacityProviderStrategy": capacity_provider_strategy,
    "AvailabilityZoneRebalancing": availability_zone_rebalancing,
    "NetworkConfiguration": network_configuration,
    "Tags": tags,
    "ForceNewDeployment": force_new_deployment,
    "HealthCheckGracePeriodSeconds": health_check_grace_period_seconds,
    "EnableECSManagedTags": enable_ecs_managed_tags,
    "EnableExecuteCommand": enable_execute_command,
    "PlacementConstraints": placement_constraints,
    "LoadBalancers": load_balancers,
    "ServiceConnectConfiguration": service_connect_configuration,
    "DesiredCount": desired_count,
    "VpcLatticeConfigurations": vpc_lattice_configurations,
    "DeploymentController": deployment_controller,
    "TaskDefinition": task_definition,
    "DeploymentConfiguration": deployment_configuration
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ service_arn }}|{{ cluster }}'
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
DELETE FROM awscc.ecs.services
WHERE
  Identifier = '{{ service_arn }}|{{ cluster }}' AND
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

To operate on the <code>services</code> resource, the following permissions are required:

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
ecs:DescribeServices
```

</TabItem>
<TabItem value="create">

```json
ecs:CreateService,
ecs:DescribeServiceDeployments,
ecs:DescribeServices,
ecs:ListServiceDeployments,
iam:PassRole,
ecs:TagResource
```

</TabItem>
<TabItem value="update">

```json
ecs:DescribeServiceDeployments,
ecs:DescribeServices,
ecs:ListServiceDeployments,
ecs:ListTagsForResource,
ecs:StopServiceDeployment,
ecs:TagResource,
ecs:UntagResource,
ecs:UpdateService
```

</TabItem>
<TabItem value="list">

```json
ecs:DescribeServices,
ecs:ListClusters,
ecs:ListServices
```

</TabItem>
<TabItem value="delete">

```json
ecs:DeleteService,
ecs:DescribeServices
```

</TabItem>
</Tabs>