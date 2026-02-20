---
title: task_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - task_definitions
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

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>task_definition</code> resource or lists <code>task_definitions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>task_definitions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Registers a new task definition from the supplied &#96;&#96;family&#96;&#96; and &#96;&#96;containerDefinitions&#96;&#96;. Optionally, you can add data volumes to your containers with the &#96;&#96;volumes&#96;&#96; parameter. For more information about task definition parameters and defaults, see &#91;Amazon ECS Task Definitions&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task&#95;defintions.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;.<br />You can specify a role for your task with the &#96;&#96;taskRoleArn&#96;&#96; parameter. When you specify a role for a task, its containers can then use the latest versions of the CLI or SDKs to make API requests to the AWS services that are specified in the policy that's associated with the role. For more information, see &#91;IAM Roles for Tasks&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;.<br />You can specify a Docker networking mode for the containers in your task definition with the &#96;&#96;networkMode&#96;&#96; parameter. If you specify the &#96;&#96;awsvpc&#96;&#96; network mode, the task is allocated an elastic network interface, and you must specify a &#91;NetworkConfiguration&#93;(https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API&#95;NetworkConfiguration.html) when you create a service or run a task with the task definition. For more information, see &#91;Task Networking&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;.<br />In the following example or examples, the Authorization header contents (&#96;&#96;AUTHPARAMS&#96;&#96;) must be replaced with an AWS Signature Version 4 signature. For more information, see &#91;Signature Version 4 Signing Process&#93;(https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html) in the &#42;General Reference&#42;.<br />You only need to learn how to sign HTTP requests if you intend to create them manually. When you use the &#91;&#93;(https://docs.aws.amazon.com/cli/) or one of the &#91;SDKs&#93;(https://docs.aws.amazon.com/tools/) to make requests to AWS, these tools automatically sign the requests for you, with the access key that you specify when you configure the tools. When you use these tools, you don't have to sign requests yourself.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ecs.task_definitions" /></td></tr>
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
    "name": "task_role_arn",
    "type": "string",
    "description": "The short name or full Amazon Resource Name (ARN) of the IAMlong role that grants containers in the task permission to call AWS APIs on your behalf. For more information, see &#91;Amazon ECS Task Role&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;.<br />IAM roles for tasks on Windows require that the &#96;&#96;-EnableTaskIAMRole&#96;&#96; option is set when you launch the Amazon ECS-optimized Windows AMI. Your containers must also run some configuration code to use the feature. For more information, see &#91;Windows IAM roles for tasks&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/windows&#95;task&#95;IAM&#95;roles.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;.<br />String validation is done on the ECS side. If an invalid string value is given for &#96;&#96;TaskRoleArn&#96;&#96;, it may cause the Cloudformation job to hang."
  },
  {
    "name": "ipc_mode",
    "type": "string",
    "description": "The IPC resource namespace to use for the containers in the task. The valid values are &#96;&#96;host&#96;&#96;, &#96;&#96;task&#96;&#96;, or &#96;&#96;none&#96;&#96;. If &#96;&#96;host&#96;&#96; is specified, then all containers within the tasks that specified the &#96;&#96;host&#96;&#96; IPC mode on the same container instance share the same IPC resources with the host Amazon EC2 instance. If &#96;&#96;task&#96;&#96; is specified, all containers within the specified task share the same IPC resources. If &#96;&#96;none&#96;&#96; is specified, then IPC resources within the containers of a task are private and not shared with other containers in a task or on the container instance. If no value is specified, then the IPC resource namespace sharing depends on the Docker daemon setting on the container instance.<br />If the &#96;&#96;host&#96;&#96; IPC mode is used, be aware that there is a heightened risk of undesired IPC namespace expose.<br />If you are setting namespaced kernel parameters using &#96;&#96;systemControls&#96;&#96; for the containers in the task, the following will apply to your IPC resource namespace. For more information, see &#91;System Controls&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task&#95;definition&#95;parameters.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;.<br />+ For tasks that use the &#96;&#96;host&#96;&#96; IPC mode, IPC namespace related &#96;&#96;systemControls&#96;&#96; are not supported.<br />+ For tasks that use the &#96;&#96;task&#96;&#96; IPC mode, IPC namespace related &#96;&#96;systemControls&#96;&#96; will apply to all containers within a task.<br /><br />This parameter is not supported for Windows containers or tasks run on FARGATElong."
  },
  {
    "name": "inference_accelerators",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "device_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "device_name",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "memory",
    "type": "string",
    "description": "The amount (in MiB) of memory used by the task.<br />If your tasks runs on Amazon EC2 instances, you must specify either a task-level memory value or a container-level memory value. This field is optional and any value can be used. If a task-level memory value is specified, the container-level memory value is optional. For more information regarding container-level memory and memory reservation, see &#91;ContainerDefinition&#93;(https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API&#95;ContainerDefinition.html).<br />If your tasks runs on FARGATElong, this field is required. You must use one of the following values. The value you choose determines your range of valid values for the &#96;&#96;cpu&#96;&#96; parameter.<br />+ 512 (0.5 GB), 1024 (1 GB), 2048 (2 GB) - Available &#96;&#96;cpu&#96;&#96; values: 256 (.25 vCPU)<br />+ 1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB) - Available &#96;&#96;cpu&#96;&#96; values: 512 (.5 vCPU)<br />+ 2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB) - Available &#96;&#96;cpu&#96;&#96; values: 1024 (1 vCPU)<br />+ Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB) - Available &#96;&#96;cpu&#96;&#96; values: 2048 (2 vCPU)<br />+ Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB) - Available &#96;&#96;cpu&#96;&#96; values: 4096 (4 vCPU)<br />+ Between 16 GB and 60 GB in 4 GB increments - Available &#96;&#96;cpu&#96;&#96; values: 8192 (8 vCPU)<br />This option requires Linux platform &#96;&#96;1.4.0&#96;&#96; or later.<br />+ Between 32GB and 120 GB in 8 GB increments - Available &#96;&#96;cpu&#96;&#96; values: 16384 (16 vCPU)<br />This option requires Linux platform &#96;&#96;1.4.0&#96;&#96; or later."
  },
  {
    "name": "placement_constraints",
    "type": "array",
    "description": "An array of placement constraint objects to use for tasks.<br />This parameter isn't supported for tasks run on FARGATElong.",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": "The type of constraint. The &#96;&#96;MemberOf&#96;&#96; constraint restricts selection to be from a group of valid candidates."
      },
      {
        "name": "expression",
        "type": "string",
        "description": "A cluster query language expression to apply to the constraint. For more information, see &#91;Cluster query language&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;."
      }
    ]
  },
  {
    "name": "cpu",
    "type": "string",
    "description": "The number of &#96;&#96;cpu&#96;&#96; units used by the task. If you use the EC2 launch type, this field is optional. Any value can be used. If you use the Fargate launch type, this field is required. You must use one of the following values. The value that you choose determines your range of valid values for the &#96;&#96;memory&#96;&#96; parameter.<br />If you're using the EC2 launch type or the external launch type, this field is optional. Supported values are between &#96;&#96;128&#96;&#96; CPU units (&#96;&#96;0.125&#96;&#96; vCPUs) and &#96;&#96;196608&#96;&#96; CPU units (&#96;&#96;192&#96;&#96; vCPUs). <br />This field is required for Fargate. For information about the valid values, see &#91;Task size&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task&#95;definition&#95;parameters.html#task&#95;size) in the &#42;Amazon Elastic Container Service Developer Guide&#42;."
  },
  {
    "name": "requires_compatibilities",
    "type": "array",
    "description": "The task launch types the task definition was validated against. The valid values are &#96;&#96;EC2&#96;&#96;, &#96;&#96;FARGATE&#96;&#96;, and &#96;&#96;EXTERNAL&#96;&#96;. For more information, see &#91;Amazon ECS launch types&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch&#95;types.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;."
  },
  {
    "name": "network_mode",
    "type": "string",
    "description": "The Docker networking mode to use for the containers in the task. The valid values are &#96;&#96;none&#96;&#96;, &#96;&#96;bridge&#96;&#96;, &#96;&#96;awsvpc&#96;&#96;, and &#96;&#96;host&#96;&#96;. If no network mode is specified, the default is &#96;&#96;bridge&#96;&#96;.<br />For Amazon ECS tasks on Fargate, the &#96;&#96;awsvpc&#96;&#96; network mode is required. For Amazon ECS tasks on Amazon EC2 Linux instances, any network mode can be used. For Amazon ECS tasks on Amazon EC2 Windows instances, &#96;&#96;&lt;default&gt;&#96;&#96; or &#96;&#96;awsvpc&#96;&#96; can be used. If the network mode is set to &#96;&#96;none&#96;&#96;, you cannot specify port mappings in your container definitions, and the tasks containers do not have external connectivity. The &#96;&#96;host&#96;&#96; and &#96;&#96;awsvpc&#96;&#96; network modes offer the highest networking performance for containers because they use the EC2 network stack instead of the virtualized network stack provided by the &#96;&#96;bridge&#96;&#96; mode.<br />With the &#96;&#96;host&#96;&#96; and &#96;&#96;awsvpc&#96;&#96; network modes, exposed container ports are mapped directly to the corresponding host port (for the &#96;&#96;host&#96;&#96; network mode) or the attached elastic network interface port (for the &#96;&#96;awsvpc&#96;&#96; network mode), so you cannot take advantage of dynamic host port mappings. <br />When using the &#96;&#96;host&#96;&#96; network mode, you should not run containers using the root user (UID 0). It is considered best practice to use a non-root user.<br />If the network mode is &#96;&#96;awsvpc&#96;&#96;, the task is allocated an elastic network interface, and you must specify a &#91;NetworkConfiguration&#93;(https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API&#95;NetworkConfiguration.html) value when you create a service or run a task with the task definition. For more information, see &#91;Task Networking&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;.<br />If the network mode is &#96;&#96;host&#96;&#96;, you cannot run multiple instantiations of the same task on a single container instance when port mappings are used."
  },
  {
    "name": "pid_mode",
    "type": "string",
    "description": "The process namespace to use for the containers in the task. The valid values are &#96;&#96;host&#96;&#96; or &#96;&#96;task&#96;&#96;. On Fargate for Linux containers, the only valid value is &#96;&#96;task&#96;&#96;. For example, monitoring sidecars might need &#96;&#96;pidMode&#96;&#96; to access information about other containers running in the same task.<br />If &#96;&#96;host&#96;&#96; is specified, all containers within the tasks that specified the &#96;&#96;host&#96;&#96; PID mode on the same container instance share the same process namespace with the host Amazon EC2 instance.<br />If &#96;&#96;task&#96;&#96; is specified, all containers within the specified task share the same process namespace.<br />If no value is specified, the default is a private namespace for each container.<br />If the &#96;&#96;host&#96;&#96; PID mode is used, there's a heightened risk of undesired process namespace exposure.<br />This parameter is not supported for Windows containers.<br />This parameter is only supported for tasks that are hosted on FARGATElong if the tasks are using platform version &#96;&#96;1.4.0&#96;&#96; or later (Linux). This isn't supported for Windows containers on Fargate."
  },
  {
    "name": "enable_fault_injection",
    "type": "boolean",
    "description": "Enables fault injection and allows for fault injection requests to be accepted from the task's containers. The default value is &#96;&#96;false&#96;&#96;."
  },
  {
    "name": "execution_role_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the task execution role that grants the Amazon ECS container agent permission to make AWS API calls on your behalf. For informationabout the required IAM roles for Amazon ECS, see &#91;IAM roles for Amazon ECS&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security-ecs-iam-role-overview.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;."
  },
  {
    "name": "runtime_platform",
    "type": "object",
    "description": "The operating system that your tasks definitions run on. A platform family is specified only for tasks using the Fargate launch type.",
    "children": [
      {
        "name": "operating_system_family",
        "type": "string",
        "description": "The operating system."
      },
      {
        "name": "cpu_architecture",
        "type": "string",
        "description": "The CPU architecture.<br />You can run your Linux tasks on an ARM-based platform by setting the value to &#96;&#96;ARM64&#96;&#96;. This option is available for tasks that run on Linux Amazon EC2 instance or Linux containers on Fargate."
      }
    ]
  },
  {
    "name": "proxy_configuration",
    "type": "object",
    "description": "The configuration details for the App Mesh proxy.<br />Your Amazon ECS container instances require at least version 1.26.0 of the container agent and at least version 1.26.0-1 of the &#96;&#96;ecs-init&#96;&#96; package to use a proxy configuration. If your container instances are launched from the Amazon ECS optimized AMI version &#96;&#96;20190301&#96;&#96; or later, they contain the required versions of the container agent and &#96;&#96;ecs-init&#96;&#96;. For more information, see &#91;Amazon ECS-optimized Linux AMI&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized&#95;AMI.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;.",
    "children": [
      {
        "name": "proxy_configuration_properties",
        "type": "array",
        "description": "The set of network configuration parameters to provide the Container Network Interface (CNI) plugin, specified as key-value pairs.<br />+ &#96;&#96;IgnoredUID&#96;&#96; - (Required) The user ID (UID) of the proxy container as defined by the &#96;&#96;user&#96;&#96; parameter in a container definition. This is used to ensure the proxy ignores its own traffic. If &#96;&#96;IgnoredGID&#96;&#96; is specified, this field can be empty.<br />+ &#96;&#96;IgnoredGID&#96;&#96; - (Required) The group ID (GID) of the proxy container as defined by the &#96;&#96;user&#96;&#96; parameter in a container definition. This is used to ensure the proxy ignores its own traffic. If &#96;&#96;IgnoredUID&#96;&#96; is specified, this field can be empty.<br />+ &#96;&#96;AppPorts&#96;&#96; - (Required) The list of ports that the application uses. Network traffic to these ports is forwarded to the &#96;&#96;ProxyIngressPort&#96;&#96; and &#96;&#96;ProxyEgressPort&#96;&#96;.<br />+ &#96;&#96;ProxyIngressPort&#96;&#96; - (Required) Specifies the port that incoming traffic to the &#96;&#96;AppPorts&#96;&#96; is directed to.<br />+ &#96;&#96;ProxyEgressPort&#96;&#96; - (Required) Specifies the port that outgoing traffic from the &#96;&#96;AppPorts&#96;&#96; is directed to.<br />+ &#96;&#96;EgressIgnoredPorts&#96;&#96; - (Required) The egress traffic going to the specified ports is ignored and not redirected to the &#96;&#96;ProxyEgressPort&#96;&#96;. It can be an empty list.<br />+ &#96;&#96;EgressIgnoredIPs&#96;&#96; - (Required) The egress traffic going to the specified IP addresses is ignored and not redirected to the &#96;&#96;ProxyEgressPort&#96;&#96;. It can be an empty list.",
        "children": [
          {
            "name": "value",
            "type": "string",
            "description": "The value of the key-value pair. For environment variables, this is the value of the environment variable."
          },
          {
            "name": "name",
            "type": "string",
            "description": "The name of the key-value pair. For environment variables, this is the name of the environment variable."
          }
        ]
      },
      {
        "name": "type",
        "type": "string",
        "description": "The proxy type. The only supported value is &#96;&#96;APPMESH&#96;&#96;."
      },
      {
        "name": "container_name",
        "type": "string",
        "description": "The name of the container that will serve as the App Mesh proxy."
      }
    ]
  },
  {
    "name": "volumes",
    "type": "array",
    "description": "The list of data volume definitions for the task. For more information, see &#91;Using data volumes in tasks&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using&#95;data&#95;volumes.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;.<br />The &#96;&#96;host&#96;&#96; and &#96;&#96;sourcePath&#96;&#96; parameters aren't supported for tasks run on FARGATElong.",
    "children": [
      {
        "name": "e_fs_volume_configuration",
        "type": "object",
        "description": "This parameter is specified when you use an Amazon Elastic File System file system for task storage.",
        "children": [
          {
            "name": "filesystem_id",
            "type": "string",
            "description": "The Amazon EFS file system ID to use."
          },
          {
            "name": "transit_encryption",
            "type": "string",
            "description": "Determines whether to use encryption for Amazon EFS data in transit between the Amazon ECS host and the Amazon EFS server. Transit encryption must be turned on if Amazon EFS IAM authorization is used. If this parameter is omitted, the default value of &#96;&#96;DISABLED&#96;&#96; is used. For more information, see &#91;Encrypting data in transit&#93;(https://docs.aws.amazon.com/efs/latest/ug/encryption-in-transit.html) in the &#42;Amazon Elastic File System User Guide&#42;."
          },
          {
            "name": "authorization_config",
            "type": "object",
            "description": "The authorization configuration details for the Amazon EFS file system.",
            "children": [
              {
                "name": "iam",
                "type": "string",
                "description": "Determines whether to use the Amazon ECS task role defined in a task definition when mounting the Amazon EFS file system. If it is turned on, transit encryption must be turned on in the &#96;&#96;EFSVolumeConfiguration&#96;&#96;. If this parameter is omitted, the default value of &#96;&#96;DISABLED&#96;&#96; is used. For more information, see &#91;Using Amazon EFS access points&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html#efs-volume-accesspoints) in the &#42;Amazon Elastic Container Service Developer Guide&#42;."
              },
              {
                "name": "access_point_id",
                "type": "string",
                "description": "The Amazon EFS access point ID to use. If an access point is specified, the root directory value specified in the &#96;&#96;EFSVolumeConfiguration&#96;&#96; must either be omitted or set to &#96;&#96;/&#96;&#96; which will enforce the path set on the EFS access point. If an access point is used, transit encryption must be on in the &#96;&#96;EFSVolumeConfiguration&#96;&#96;. For more information, see &#91;Working with Amazon EFS access points&#93;(https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html) in the &#42;Amazon Elastic File System User Guide&#42;."
              }
            ]
          },
          {
            "name": "root_directory",
            "type": "string",
            "description": "The directory within the Amazon EFS file system to mount as the root directory inside the host. If this parameter is omitted, the root of the Amazon EFS volume will be used. Specifying &#96;&#96;/&#96;&#96; will have the same effect as omitting this parameter.<br />If an EFS access point is specified in the &#96;&#96;authorizationConfig&#96;&#96;, the root directory parameter must either be omitted or set to &#96;&#96;/&#96;&#96; which will enforce the path set on the EFS access point."
          },
          {
            "name": "transit_encryption_port",
            "type": "integer",
            "description": "The port to use when sending encrypted data between the Amazon ECS host and the Amazon EFS server. If you do not specify a transit encryption port, it will use the port selection strategy that the Amazon EFS mount helper uses. For more information, see &#91;EFS mount helper&#93;(https://docs.aws.amazon.com/efs/latest/ug/efs-mount-helper.html) in the &#42;Amazon Elastic File System User Guide&#42;."
          }
        ]
      },
      {
        "name": "host",
        "type": "object",
        "description": "This parameter is specified when you use bind mount host volumes. The contents of the &#96;&#96;host&#96;&#96; parameter determine whether your bind mount host volume persists on the host container instance and where it's stored. If the &#96;&#96;host&#96;&#96; parameter is empty, then the Docker daemon assigns a host path for your data volume. However, the data isn't guaranteed to persist after the containers that are associated with it stop running.<br />Windows containers can mount whole directories on the same drive as &#96;&#96;$env:ProgramData&#96;&#96;. Windows containers can't mount directories on a different drive, and mount point can't be across drives. For example, you can mount &#96;&#96;C:\\my\\path:C:\\my\\path&#96;&#96; and &#96;&#96;D:\\:D:\\&#96;&#96;, but not &#96;&#96;D:\\my\\path:C:\\my\\path&#96;&#96; or &#96;&#96;D:\\:C:\\my\\path&#96;&#96;.",
        "children": [
          {
            "name": "source_path",
            "type": "string",
            "description": "When the &#96;&#96;host&#96;&#96; parameter is used, specify a &#96;&#96;sourcePath&#96;&#96; to declare the path on the host container instance that's presented to the container. If this parameter is empty, then the Docker daemon has assigned a host path for you. If the &#96;&#96;host&#96;&#96; parameter contains a &#96;&#96;sourcePath&#96;&#96; file location, then the data volume persists at the specified location on the host container instance until you delete it manually. If the &#96;&#96;sourcePath&#96;&#96; value doesn't exist on the host container instance, the Docker daemon creates it. If the location does exist, the contents of the source path folder are exported.<br />If you're using the Fargate launch type, the &#96;&#96;sourcePath&#96;&#96; parameter is not supported."
          }
        ]
      },
      {
        "name": "configured_at_launch",
        "type": "boolean",
        "description": "Indicates whether the volume should be configured at launch time. This is used to create Amazon EBS volumes for standalone tasks or tasks created as part of a service. Each task definition revision may only have one volume configured at launch in the volume configuration.<br />To configure a volume at launch time, use this task definition revision and specify a &#96;&#96;volumeConfigurations&#96;&#96; object when calling the &#96;&#96;CreateService&#96;&#96;, &#96;&#96;UpdateService&#96;&#96;, &#96;&#96;RunTask&#96;&#96; or &#96;&#96;StartTask&#96;&#96; APIs."
      },
      {
        "name": "docker_volume_configuration",
        "type": "object",
        "description": "This parameter is specified when you use Docker volumes.<br />Windows containers only support the use of the &#96;&#96;local&#96;&#96; driver. To use bind mounts, specify the &#96;&#96;host&#96;&#96; parameter instead.<br />Docker volumes aren't supported by tasks run on FARGATElong.",
        "children": [
          {
            "name": "driver_opts",
            "type": "object",
            "description": "A map of Docker driver-specific options passed through. This parameter maps to &#96;&#96;DriverOpts&#96;&#96; in the docker create-volume command and the &#96;&#96;xxopt&#96;&#96; option to docker volume create."
          },
          {
            "name": "scope",
            "type": "string",
            "description": "The scope for the Docker volume that determines its lifecycle. Docker volumes that are scoped to a &#96;&#96;task&#96;&#96; are automatically provisioned when the task starts and destroyed when the task stops. Docker volumes that are scoped as &#96;&#96;shared&#96;&#96; persist after the task stops."
          },
          {
            "name": "autoprovision",
            "type": "boolean",
            "description": "If this value is &#96;&#96;true&#96;&#96;, the Docker volume is created if it doesn't already exist.<br />This field is only used if the &#96;&#96;scope&#96;&#96; is &#96;&#96;shared&#96;&#96;."
          },
          {
            "name": "driver",
            "type": "string",
            "description": "The Docker volume driver to use. The driver value must match the driver name provided by Docker because it is used for task placement. If the driver was installed using the Docker plugin CLI, use &#96;&#96;docker plugin ls&#96;&#96; to retrieve the driver name from your container instance. If the driver was installed using another method, use Docker plugin discovery to retrieve the driver name. This parameter maps to &#96;&#96;Driver&#96;&#96; in the docker container create command and the &#96;&#96;xxdriver&#96;&#96; option to docker volume create."
          },
          {
            "name": "labels",
            "type": "object",
            "description": "Custom metadata to add to your Docker volume. This parameter maps to &#96;&#96;Labels&#96;&#96; in the docker container create command and the &#96;&#96;xxlabel&#96;&#96; option to docker volume create."
          }
        ]
      },
      {
        "name": "f_sx_windows_file_server_volume_configuration",
        "type": "object",
        "description": "This parameter is specified when you use Amazon FSx for Windows File Server file system for task storage.",
        "children": [
          {
            "name": "authorization_config",
            "type": "object",
            "description": "The authorization configuration details for the Amazon FSx for Windows File Server file system.",
            "children": [
              {
                "name": "credentials_parameter",
                "type": "string",
                "description": "The authorization credential option to use. The authorization credential options can be provided using either the Amazon Resource Name (ARN) of an ASMlong secret or SSM Parameter Store parameter. The ARN refers to the stored credentials."
              },
              {
                "name": "domain",
                "type": "string",
                "description": "A fully qualified domain name hosted by an &#91;&#93;(https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory&#95;microsoft&#95;ad.html) Managed Microsoft AD (Active Directory) or self-hosted AD on Amazon EC2."
              }
            ]
          },
          {
            "name": "file_system_id",
            "type": "string",
            "description": "The Amazon FSx for Windows File Server file system ID to use."
          },
          {
            "name": "root_directory",
            "type": "string",
            "description": "The directory within the Amazon FSx for Windows File Server file system to mount as the root directory inside the host."
          }
        ]
      },
      {
        "name": "name",
        "type": "string",
        "description": "The name of the volume. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.<br />When using a volume configured at launch, the &#96;&#96;name&#96;&#96; is required and must also be specified as the volume name in the &#96;&#96;ServiceVolumeConfiguration&#96;&#96; or &#96;&#96;TaskVolumeConfiguration&#96;&#96; parameter when creating your service or standalone task.<br />For all other types of volumes, this name is referenced in the &#96;&#96;sourceVolume&#96;&#96; parameter of the &#96;&#96;mountPoints&#96;&#96; object in the container definition.<br />When a volume is using the &#96;&#96;efsVolumeConfiguration&#96;&#96;, the name is required."
      }
    ]
  },
  {
    "name": "container_definitions",
    "type": "array",
    "description": "A list of container definitions in JSON format that describe the different containers that make up your task. For more information about container definition parameters and defaults, see &#91;Amazon ECS Task Definitions&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task&#95;defintions.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;.",
    "children": [
      {
        "name": "user",
        "type": "string",
        "description": "The user to use inside the container. This parameter maps to &#96;&#96;User&#96;&#96; in the docker container create command and the &#96;&#96;--user&#96;&#96; option to docker run.<br />When running tasks using the &#96;&#96;host&#96;&#96; network mode, don't run containers using the root user (UID 0). We recommend using a non-root user for better security.<br />You can specify the &#96;&#96;user&#96;&#96; using the following formats. If specifying a UID or GID, you must specify it as a positive integer.<br />+ &#96;&#96;user&#96;&#96; <br />+ &#96;&#96;user:group&#96;&#96; <br />+ &#96;&#96;uid&#96;&#96; <br />+ &#96;&#96;uid:gid&#96;&#96; <br />+ &#96;&#96;user:gid&#96;&#96; <br />+ &#96;&#96;uid:group&#96;&#96; <br /><br />This parameter is not supported for Windows containers."
      },
      {
        "name": "secrets",
        "type": "array",
        "description": "The secrets to pass to the container. For more information, see &#91;Specifying Sensitive Data&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;.",
        "children": [
          {
            "name": "value_from",
            "type": "string",
            "description": "The secret to expose to the container. The supported values are either the full ARN of the ASMlong secret or the full ARN of the parameter in the SSM Parameter Store.<br />For information about the require IAMlong permissions, see &#91;Required IAM permissions for Amazon ECS secrets&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data-secrets.html#secrets-iam) (for Secrets Manager) or &#91;Required IAM permissions for Amazon ECS secrets&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data-parameters.html) (for Systems Manager Parameter store) in the &#42;Amazon Elastic Container Service Developer Guide&#42;.<br />If the SSM Parameter Store parameter exists in the same Region as the task you're launching, then you can use either the full ARN or name of the parameter. If the parameter exists in a different Region, then the full ARN must be specified."
          },
          {
            "name": "name",
            "type": "string",
            "description": "The name of the secret."
          }
        ]
      },
      {
        "name": "memory",
        "type": "integer",
        "description": "The amount (in MiB) of memory to present to the container. If your container attempts to exceed the memory specified here, the container is killed. The total amount of memory reserved for all containers within a task must be lower than the task &#96;&#96;memory&#96;&#96; value, if one is specified. This parameter maps to &#96;&#96;Memory&#96;&#96; in the &#91;Create a container&#93;(https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate) section of the &#91;Docker Remote API&#93;(https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/) and the &#96;&#96;--memory&#96;&#96; option to &#91;docker run&#93;(https://docs.aws.amazon.com/https://docs.docker.com/engine/reference/run/#security-configuration).<br />If using the Fargate launch type, this parameter is optional.<br />If using the EC2 launch type, you must specify either a task-level memory value or a container-level memory value. If you specify both a container-level &#96;&#96;memory&#96;&#96; and &#96;&#96;memoryReservation&#96;&#96; value, &#96;&#96;memory&#96;&#96; must be greater than &#96;&#96;memoryReservation&#96;&#96;. If you specify &#96;&#96;memoryReservation&#96;&#96;, then that value is subtracted from the available memory resources for the container instance where the container is placed. Otherwise, the value of &#96;&#96;memory&#96;&#96; is used.<br />The Docker 20.10.0 or later daemon reserves a minimum of 6 MiB of memory for a container, so you should not specify fewer than 6 MiB of memory for your containers.<br />The Docker 19.03.13-ce or earlier daemon reserves a minimum of 4 MiB of memory for a container, so you should not specify fewer than 4 MiB of memory for your containers."
      },
      {
        "name": "privileged",
        "type": "boolean",
        "description": "When this parameter is true, the container is given elevated privileges on the host container instance (similar to the &#96;&#96;root&#96;&#96; user). This parameter maps to &#96;&#96;Privileged&#96;&#96; in the docker container create command and the &#96;&#96;--privileged&#96;&#96; option to docker run<br />This parameter is not supported for Windows containers or tasks run on FARGATElong."
      },
      {
        "name": "health_check",
        "type": "object",
        "description": "The container health check command and associated configuration parameters for the container. This parameter maps to &#96;&#96;HealthCheck&#96;&#96; in the docker container create command and the &#96;&#96;HEALTHCHECK&#96;&#96; parameter of docker run.",
        "children": [
          {
            "name": "command",
            "type": "array",
            "description": "A string array representing the command that the container runs to determine if it is healthy. The string array must start with &#96;&#96;CMD&#96;&#96; to run the command arguments directly, or &#96;&#96;CMD-SHELL&#96;&#96; to run the command with the container's default shell. <br />When you use the AWS Management Console JSON panel, the CLIlong, or the APIs, enclose the list of commands in double quotes and brackets.<br />&#96;&#96;&#91; \"CMD-SHELL\", \"curl -f http://localhost/ &#124;&#124; exit 1\" &#93;&#96;&#96; <br />You don't include the double quotes and brackets when you use the AWS Management Console.<br />&#96;&#96;CMD-SHELL, curl -f http://localhost/ &#124;&#124; exit 1&#96;&#96; <br />An exit code of 0 indicates success, and non-zero exit code indicates failure. For more information, see &#96;&#96;HealthCheck&#96;&#96; in the docker container create command."
          },
          {
            "name": "timeout",
            "type": "integer",
            "description": "The time period in seconds to wait for a health check to succeed before it is considered a failure. You may specify between 2 and 60 seconds. The default value is 5. This value applies only when you specify a &#96;&#96;command&#96;&#96;."
          },
          {
            "name": "retries",
            "type": "integer",
            "description": "The number of times to retry a failed health check before the container is considered unhealthy. You may specify between 1 and 10 retries. The default value is 3. This value applies only when you specify a &#96;&#96;command&#96;&#96;."
          },
          {
            "name": "interval",
            "type": "integer",
            "description": "The time period in seconds between each health check execution. You may specify between 5 and 300 seconds. The default value is 30 seconds. This value applies only when you specify a &#96;&#96;command&#96;&#96;."
          },
          {
            "name": "start_period",
            "type": "integer",
            "description": "The optional grace period to provide containers time to bootstrap before failed health checks count towards the maximum number of retries. You can specify between 0 and 300 seconds. By default, the &#96;&#96;startPeriod&#96;&#96; is off. This value applies only when you specify a &#96;&#96;command&#96;&#96;. <br />If a health check succeeds within the &#96;&#96;startPeriod&#96;&#96;, then the container is considered healthy and any subsequent failures count toward the maximum number of retries."
          }
        ]
      },
      {
        "name": "start_timeout",
        "type": "integer",
        "description": "Time duration (in seconds) to wait before giving up on resolving dependencies for a container. For example, you specify two containers in a task definition with containerA having a dependency on containerB reaching a &#96;&#96;COMPLETE&#96;&#96;, &#96;&#96;SUCCESS&#96;&#96;, or &#96;&#96;HEALTHY&#96;&#96; status. If a &#96;&#96;startTimeout&#96;&#96; value is specified for containerB and it doesn't reach the desired status within that time then containerA gives up and not start. This results in the task transitioning to a &#96;&#96;STOPPED&#96;&#96; state.<br />When the &#96;&#96;ECS&#95;CONTAINER&#95;START&#95;TIMEOUT&#96;&#96; container agent configuration variable is used, it's enforced independently from this start timeout value.<br />For tasks using the Fargate launch type, the task or service requires the following platforms:<br />+ Linux platform version &#96;&#96;1.3.0&#96;&#96; or later.<br />+ Windows platform version &#96;&#96;1.0.0&#96;&#96; or later.<br /><br />For tasks using the EC2 launch type, your container instances require at least version &#96;&#96;1.26.0&#96;&#96; of the container agent to use a container start timeout value. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see &#91;Updating the Amazon ECS Container Agent&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;. If you're using an Amazon ECS-optimized Linux AMI, your instance needs at least version &#96;&#96;1.26.0-1&#96;&#96; of the &#96;&#96;ecs-init&#96;&#96; package. If your container instances are launched from version &#96;&#96;20190301&#96;&#96; or later, then they contain the required versions of the container agent and &#96;&#96;ecs-init&#96;&#96;. For more information, see &#91;Amazon ECS-optimized Linux AMI&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized&#95;AMI.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;.<br />The valid values for Fargate are 2-120 seconds."
      },
      {
        "name": "volumes_from",
        "type": "array",
        "description": "Data volumes to mount from another container. This parameter maps to &#96;&#96;VolumesFrom&#96;&#96; in the docker container create command and the &#96;&#96;--volumes-from&#96;&#96; option to docker run.",
        "children": [
          {
            "name": "read_only",
            "type": "boolean",
            "description": "If this value is &#96;&#96;true&#96;&#96;, the container has read-only access to the volume. If this value is &#96;&#96;false&#96;&#96;, then the container can write to the volume. The default value is &#96;&#96;false&#96;&#96;."
          },
          {
            "name": "source_container",
            "type": "string",
            "description": "The name of another container within the same task definition to mount volumes from."
          }
        ]
      },
      {
        "name": "cpu",
        "type": "integer",
        "description": "The number of &#96;&#96;cpu&#96;&#96; units reserved for the container. This parameter maps to &#96;&#96;CpuShares&#96;&#96; in the docker container create commandand the &#96;&#96;--cpu-shares&#96;&#96; option to docker run.<br />This field is optional for tasks using the Fargate launch type, and the only requirement is that the total amount of CPU reserved for all containers within a task be lower than the task-level &#96;&#96;cpu&#96;&#96; value.<br />You can determine the number of CPU units that are available per EC2 instance type by multiplying the vCPUs listed for that instance type on the &#91;Amazon EC2 Instances&#93;(https://docs.aws.amazon.com/ec2/instance-types/) detail page by 1,024.<br />Linux containers share unallocated CPU units with other containers on the container instance with the same ratio as their allocated amount. For example, if you run a single-container task on a single-core instance type with 512 CPU units specified for that container, and that's the only task running on the container instance, that container could use the full 1,024 CPU unit share at any given time. However, if you launched another copy of the same task on that container instance, each task is guaranteed a minimum of 512 CPU units when needed. Moreover, each container could float to higher CPU usage if the other container was not using it. If both tasks were 100% active all of the time, they would be limited to 512 CPU units.<br />On Linux container instances, the Docker daemon on the container instance uses the CPU value to calculate the relative CPU share ratios for running containers. The minimum valid CPU share value that the Linux kernel allows is 2, and the maximum valid CPU share value that the Linux kernel allows is 262144. However, the CPU parameter isn't required, and you can use CPU values below 2 or above 262144 in your container definitions. For CPU values below 2 (including null) or above 262144, the behavior varies based on your Amazon ECS container agent version:<br />+ &#42;Agent versions less than or equal to 1.1.0:&#42; Null and zero CPU values are passed to Docker as 0, which Docker then converts to 1,024 CPU shares. CPU values of 1 are passed to Docker as 1, which the Linux kernel converts to two CPU shares.<br />+ &#42;Agent versions greater than or equal to 1.2.0:&#42; Null, zero, and CPU values of 1 are passed to Docker as 2.<br />+ &#42;Agent versions greater than or equal to 1.84.0:&#42; CPU values greater than 256 vCPU are passed to Docker as 256, which is equivalent to 262144 CPU shares.<br /><br />On Windows container instances, the CPU limit is enforced as an absolute limit, or a quota. Windows containers only have access to the specified amount of CPU that's described in the task definition. A null or zero CPU value is passed to Docker as &#96;&#96;0&#96;&#96;, which Windows interprets as 1% of one CPU."
      },
      {
        "name": "entry_point",
        "type": "array",
        "description": "Early versions of the Amazon ECS container agent don't properly handle &#96;&#96;entryPoint&#96;&#96; parameters. If you have problems using &#96;&#96;entryPoint&#96;&#96;, update your container agent or enter your commands and arguments as &#96;&#96;command&#96;&#96; array items instead.<br />The entry point that's passed to the container. This parameter maps to &#96;&#96;Entrypoint&#96;&#96; in the docker container create command and the &#96;&#96;--entrypoint&#96;&#96; option to docker run."
      },
      {
        "name": "dns_servers",
        "type": "array",
        "description": "A list of DNS servers that are presented to the container. This parameter maps to &#96;&#96;Dns&#96;&#96; in the docker container create command and the &#96;&#96;--dns&#96;&#96; option to docker run.<br />This parameter is not supported for Windows containers."
      },
      {
        "name": "readonly_root_filesystem",
        "type": "boolean",
        "description": "When this parameter is true, the container is given read-only access to its root file system. This parameter maps to &#96;&#96;ReadonlyRootfs&#96;&#96; in the docker container create command and the &#96;&#96;--read-only&#96;&#96; option to docker run.<br />This parameter is not supported for Windows containers."
      },
      {
        "name": "image",
        "type": "string",
        "description": "The image used to start a container. This string is passed directly to the Docker daemon. By default, images in the Docker Hub registry are available. Other repositories are specified with either &#96;&#96;repository-url/image:tag&#96;&#96; or &#96;&#96;repository-url/image@digest&#96;&#96;. For images using tags (repository-url/image:tag), up to 255 characters total are allowed, including letters (uppercase and lowercase), numbers, hyphens, underscores, colons, periods, forward slashes, and number signs (#). For images using digests (repository-url/image@digest), the 255 character limit applies only to the repository URL and image name (everything before the @ sign). The only supported hash function is sha256, and the hash value after sha256: must be exactly 64 characters (only letters A-F, a-f, and numbers 0-9 are allowed). This parameter maps to &#96;&#96;Image&#96;&#96; in the docker container create command and the &#96;&#96;IMAGE&#96;&#96; parameter of docker run.<br />+ When a new task starts, the Amazon ECS container agent pulls the latest version of the specified image and tag for the container to use. However, subsequent updates to a repository image aren't propagated to already running tasks.<br />+ Images in Amazon ECR repositories can be specified by either using the full &#96;&#96;registry/repository:tag&#96;&#96; or &#96;&#96;registry/repository@digest&#96;&#96;. For example, &#96;&#96;012345678910.dkr.ecr.&lt;region-name&gt;.amazonaws.com/&lt;repository-name&gt;:latest&#96;&#96; or &#96;&#96;012345678910.dkr.ecr.&lt;region-name&gt;.amazonaws.com/&lt;repository-name&gt;@sha256:94afd1f2e64d908bc90dbca0035a5b567EXAMPLE&#96;&#96;. <br />+ Images in official repositories on Docker Hub use a single name (for example, &#96;&#96;ubuntu&#96;&#96; or &#96;&#96;mongo&#96;&#96;).<br />+ Images in other repositories on Docker Hub are qualified with an organization name (for example, &#96;&#96;amazon/amazon-ecs-agent&#96;&#96;).<br />+ Images in other online repositories are qualified further by a domain name (for example, &#96;&#96;quay.io/assemblyline/ubuntu&#96;&#96;)."
      },
      {
        "name": "essential",
        "type": "boolean",
        "description": "If the &#96;&#96;essential&#96;&#96; parameter of a container is marked as &#96;&#96;true&#96;&#96;, and that container fails or stops for any reason, all other containers that are part of the task are stopped. If the &#96;&#96;essential&#96;&#96; parameter of a container is marked as &#96;&#96;false&#96;&#96;, its failure doesn't affect the rest of the containers in a task. If this parameter is omitted, a container is assumed to be essential.<br />All tasks must have at least one essential container. If you have an application that's composed of multiple containers, group containers that are used for a common purpose into components, and separate the different components into multiple task definitions. For more information, see &#91;Application Architecture&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/application&#95;architecture.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;."
      },
      {
        "name": "log_configuration",
        "type": "object",
        "description": "The log configuration specification for the container.<br />This parameter maps to &#96;&#96;LogConfig&#96;&#96; in the docker Create a container command and the &#96;&#96;--log-driver&#96;&#96; option to docker run. By default, containers use the same logging driver that the Docker daemon uses. However, the container may use a different logging driver than the Docker daemon by specifying a log driver with this parameter in the container definition. To use a different logging driver for a container, the log system must be configured properly on the container instance (or on a different log server for remote logging options). For more information on the options for different supported log drivers, see &#91;Configure logging drivers&#93;(https://docs.aws.amazon.com/https://docs.docker.com/engine/admin/logging/overview/) in the Docker documentation.<br />Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon (shown in the &#91;LogConfiguration&#93;(https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API&#95;LogConfiguration.html) data type). Additional log drivers may be available in future releases of the Amazon ECS container agent.<br />This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: &#96;&#96;sudo docker version --format '&#123;&#123;.Server.APIVersion&#125;&#125;'&#96;&#96;<br />The Amazon ECS container agent running on a container instance must register the logging drivers available on that instance with the &#96;&#96;ECS&#95;AVAILABLE&#95;LOGGING&#95;DRIVERS&#96;&#96; environment variable before containers placed on that instance can use these log configuration options. For more information, see &#91;Container Agent Configuration&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html) in the &#42;Developer Guide&#42;.",
        "children": [
          {
            "name": "secret_options",
            "type": "array",
            "description": "The secrets to pass to the log configuration. For more information, see &#91;Specifying sensitive data&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;."
          },
          {
            "name": "options",
            "type": "object",
            "description": "The configuration options to send to the log driver.<br />The options you can specify depend on the log driver. Some of the options you can specify when you use the &#96;&#96;awslogs&#96;&#96; log driver to route logs to Amazon CloudWatch include the following:<br />+ awslogs-create-group Required: No Specify whether you want the log group to be created automatically. If this option isn't specified, it defaults to false. Your IAM policy must include the logs:CreateLogGroup permission before you attempt to use awslogs-create-group. + awslogs-region Required: Yes Specify the Region that the awslogs log driver is to send your Docker logs to. You can choose to send all of your logs from clusters in different Regions to a single region in CloudWatch Logs. This is so that they're all visible in one location. Otherwise, you can separate them by Region for more granularity. Make sure that the specified log group exists in the Region that you specify with this option. + awslogs-group Required: Yes Make sure to specify a log group that the awslogs log driver sends its log streams to. + awslogs-stream-prefix Required: Yes, when using Fargate.Optional when using EC2. Use the awslogs-stream-prefix option to associate a log stream with the specified prefix, the container name, and the ID of the Amazon ECS task that the container belongs to. If you specify a prefix with this option, then the log stream takes the format prefix-name/container-name/ecs-task-id. If you don't specify a prefix with this option, then the log stream is named after the container ID that's assigned by the Docker daemon on the container instance. Because it's difficult to trace logs back to the container that sent them with just the Docker container ID (which is only available on the container instance), we recommend that you specify a prefix with this option. For Amazon ECS services, you can use the service name as the prefix. Doing so, you can trace log streams to the service that the container belongs to, the name of the container that sent them, and the ID of the task that the container belongs to. You must specify a stream-prefix for your logs to have your logs appear in the Log pane when using the Amazon ECS console. + awslogs-datetime-format Required: No This option defines a multiline start pattern in Python strftime format. A log message consists of a line that matches the pattern and any following lines that don’t match the pattern. The matched line is the delimiter between log messages. One example of a use case for using this format is for parsing output such as a stack dump, which might otherwise be logged in multiple entries. The correct pattern allows it to be captured in a single entry. For more information, see awslogs-datetime-format. You cannot configure both the awslogs-datetime-format and awslogs-multiline-pattern options. Multiline logging performs regular expression parsing and matching of all log messages. This might have a negative impact on logging performance. + awslogs-multiline-pattern Required: No This option defines a multiline start pattern that uses a regular expression. A log message consists of a line that matches the pattern and any following lines that don’t match the pattern. The matched line is the delimiter between log messages. For more information, see awslogs-multiline-pattern. This option is ignored if awslogs-datetime-format is also configured. You cannot configure both the awslogs-datetime-format and awslogs-multiline-pattern options. Multiline logging performs regular expression parsing and matching of all log messages. This might have a negative impact on logging performance. <br />The following options apply to all supported log drivers.<br />+ mode Required: No Valid values: non-blocking &#124; blocking This option defines the delivery mode of log messages from the container to the log driver specified using logDriver. The delivery mode you choose affects application availability when the flow of logs from container is interrupted. If you use the blocking mode and the flow of logs is interrupted, calls from container code to write to the stdout and stderr streams will block. The logging thread of the application will block as a result. This may cause the application to become unresponsive and lead to container healthcheck failure. If you use the non-blocking mode, the container's logs are instead stored in an in-memory intermediate buffer configured with the max-buffer-size option. This prevents the application from becoming unresponsive when logs cannot be sent. We recommend using this mode if you want to ensure service availability and are okay with some log loss. For more information, see Preventing log loss with non-blocking mode in the awslogs container log driver. You can set a default mode for all containers in a specific Region by using the defaultLogDriverMode account setting. If you don't specify the mode option or configure the account setting, Amazon ECS will default to the non-blocking mode. For more information about the account setting, see Default log driver mode in the Amazon Elastic Container Service Developer Guide. On June 25, 2025, Amazon ECS changed the default log driver mode from blocking to non-blocking to prioritize task availability over logging. To continue using the blocking mode after this change, do one of the following: Set the mode option in your container definition's logConfiguration as blocking. Set the defaultLogDriverMode account setting to blocking. + max-buffer-size Required: No Default value: 10m When non-blocking mode is used, the max-buffer-size log option controls the size of the buffer that's used for intermediate message storage. Make sure to specify an adequate buffer size based on your application. When the buffer fills up, further logs cannot be stored. Logs that cannot be stored are lost. <br />To route logs using the &#96;&#96;splunk&#96;&#96; log router, you need to specify a &#96;&#96;splunk-token&#96;&#96; and a &#96;&#96;splunk-url&#96;&#96;.<br />When you use the &#96;&#96;awsfirelens&#96;&#96; log router to route logs to an AWS Service or AWS Partner Network destination for log storage and analytics, you can set the &#96;&#96;log-driver-buffer-limit&#96;&#96; option to limit the number of events that are buffered in memory, before being sent to the log router container. It can help to resolve potential log loss issue because high throughput might result in memory running out for the buffer inside of Docker.<br />Other options you can specify when using &#96;&#96;awsfirelens&#96;&#96; to route logs depend on the destination. When you export logs to Amazon Data Firehose, you can specify the AWS Region with &#96;&#96;region&#96;&#96; and a name for the log stream with &#96;&#96;delivery&#95;stream&#96;&#96;.<br />When you export logs to Amazon Kinesis Data Streams, you can specify an AWS Region with &#96;&#96;region&#96;&#96; and a data stream name with &#96;&#96;stream&#96;&#96;.<br />When you export logs to Amazon OpenSearch Service, you can specify options like &#96;&#96;Name&#96;&#96;, &#96;&#96;Host&#96;&#96; (OpenSearch Service endpoint without protocol), &#96;&#96;Port&#96;&#96;, &#96;&#96;Index&#96;&#96;, &#96;&#96;Type&#96;&#96;, &#96;&#96;Aws&#95;auth&#96;&#96;, &#96;&#96;Aws&#95;region&#96;&#96;, &#96;&#96;Suppress&#95;Type&#95;Name&#96;&#96;, and &#96;&#96;tls&#96;&#96;. For more information, see &#91;Under the hood: FireLens for Amazon ECS Tasks&#93;(https://docs.aws.amazon.com/containers/under-the-hood-firelens-for-amazon-ecs-tasks/).<br />When you export logs to Amazon S3, you can specify the bucket using the &#96;&#96;bucket&#96;&#96; option. You can also specify &#96;&#96;region&#96;&#96;, &#96;&#96;total&#95;file&#95;size&#96;&#96;, &#96;&#96;upload&#95;timeout&#96;&#96;, and &#96;&#96;use&#95;put&#95;object&#96;&#96; as options.<br />This parameter requires version 1.19 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: &#96;&#96;sudo docker version --format '&#123;&#123;.Server.APIVersion&#125;&#125;'&#96;&#96;"
          },
          {
            "name": "log_driver",
            "type": "string",
            "description": "The log driver to use for the container.<br />For tasks on FARGATElong, the supported log drivers are &#96;&#96;awslogs&#96;&#96;, &#96;&#96;splunk&#96;&#96;, and &#96;&#96;awsfirelens&#96;&#96;.<br />For tasks hosted on Amazon EC2 instances, the supported log drivers are &#96;&#96;awslogs&#96;&#96;, &#96;&#96;fluentd&#96;&#96;, &#96;&#96;gelf&#96;&#96;, &#96;&#96;json-file&#96;&#96;, &#96;&#96;journald&#96;&#96;, &#96;&#96;syslog&#96;&#96;, &#96;&#96;splunk&#96;&#96;, and &#96;&#96;awsfirelens&#96;&#96;.<br />For more information about using the &#96;&#96;awslogs&#96;&#96; log driver, see &#91;Send Amazon ECS logs to CloudWatch&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using&#95;awslogs.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;.<br />For more information about using the &#96;&#96;awsfirelens&#96;&#96; log driver, see &#91;Send Amazon ECS logs to an service or Partner&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using&#95;firelens.html).<br />If you have a custom driver that isn't listed, you can fork the Amazon ECS container agent project that's &#91;available on GitHub&#93;(https://docs.aws.amazon.com/https://github.com/aws/amazon-ecs-agent) and customize it to work with that driver. We encourage you to submit pull requests for changes that you would like to have included. However, we don't currently provide support for running modified copies of this software."
          }
        ]
      },
      {
        "name": "resource_requirements",
        "type": "array",
        "description": "The type and amount of a resource to assign to a container. The only supported resource is a GPU.",
        "children": [
          {
            "name": "type",
            "type": "string",
            "description": "The type of resource to assign to a container."
          },
          {
            "name": "value",
            "type": "string",
            "description": "The value for the specified resource type.<br />When the type is &#96;&#96;GPU&#96;&#96;, the value is the number of physical &#96;&#96;GPUs&#96;&#96; the Amazon ECS container agent reserves for the container. The number of GPUs that's reserved for all containers in a task can't exceed the number of available GPUs on the container instance that the task is launched on.<br />When the type is &#96;&#96;InferenceAccelerator&#96;&#96;, the &#96;&#96;value&#96;&#96; matches the &#96;&#96;deviceName&#96;&#96; for an &#91;InferenceAccelerator&#93;(https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API&#95;InferenceAccelerator.html) specified in a task definition."
          }
        ]
      },
      {
        "name": "environment_files",
        "type": "array",
        "description": "A list of files containing the environment variables to pass to a container. This parameter maps to the &#96;&#96;--env-file&#96;&#96; option to docker run.<br />You can specify up to ten environment files. The file must have a &#96;&#96;.env&#96;&#96; file extension. Each line in an environment file contains an environment variable in &#96;&#96;VARIABLE=VALUE&#96;&#96; format. Lines beginning with &#96;&#96;#&#96;&#96; are treated as comments and are ignored.<br />If there are environment variables specified using the &#96;&#96;environment&#96;&#96; parameter in a container definition, they take precedence over the variables contained within an environment file. If multiple environment files are specified that contain the same variable, they're processed from the top down. We recommend that you use unique variable names. For more information, see &#91;Specifying Environment Variables&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/taskdef-envfiles.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;.",
        "children": [
          {
            "name": "type",
            "type": "string",
            "description": "The file type to use. Environment files are objects in Amazon S3. The only supported value is &#96;&#96;s3&#96;&#96;."
          },
          {
            "name": "value",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the Amazon S3 object containing the environment variable file."
          }
        ]
      },
      {
        "name": "name",
        "type": "string",
        "description": "The name of a container. If you're linking multiple containers together in a task definition, the &#96;&#96;name&#96;&#96; of one container can be entered in the &#96;&#96;links&#96;&#96; of another container to connect the containers. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed. This parameter maps to &#96;&#96;name&#96;&#96; in the docker container create command and the &#96;&#96;--name&#96;&#96; option to docker run."
      },
      {
        "name": "firelens_configuration",
        "type": "object",
        "description": "The FireLens configuration for the container. This is used to specify and configure a log router for container logs. For more information, see &#91;Custom Log Routing&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using&#95;firelens.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;.",
        "children": [
          {
            "name": "options",
            "type": "object",
            "description": "The options to use when configuring the log router. This field is optional and can be used to add additional metadata, such as the task, task definition, cluster, and container instance details to the log event.<br />If specified, valid option keys are:<br />+ &#96;&#96;enable-ecs-log-metadata&#96;&#96;, which can be &#96;&#96;true&#96;&#96; or &#96;&#96;false&#96;&#96;<br />+ &#96;&#96;config-file-type&#96;&#96;, which can be &#96;&#96;s3&#96;&#96; or &#96;&#96;file&#96;&#96;<br />+ &#96;&#96;config-file-value&#96;&#96;, which is either an S3 ARN or a file path"
          },
          {
            "name": "type",
            "type": "string",
            "description": "The log router to use. The valid values are &#96;&#96;fluentd&#96;&#96; or &#96;&#96;fluentbit&#96;&#96;."
          }
        ]
      },
      {
        "name": "docker_security_options",
        "type": "array",
        "description": "A list of strings to provide custom configuration for multiple security systems. This field isn't valid for containers in tasks using the Fargate launch type.<br />For Linux tasks on EC2, this parameter can be used to reference custom labels for SELinux and AppArmor multi-level security systems.<br />For any tasks on EC2, this parameter can be used to reference a credential spec file that configures a container for Active Directory authentication. For more information, see &#91;Using gMSAs for Windows Containers&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/windows-gmsa.html) and &#91;Using gMSAs for Linux Containers&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/linux-gmsa.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;.<br />This parameter maps to &#96;&#96;SecurityOpt&#96;&#96; in the docker container create command and the &#96;&#96;--security-opt&#96;&#96; option to docker run.<br />The Amazon ECS container agent running on a container instance must register with the &#96;&#96;ECS&#95;SELINUX&#95;CAPABLE=true&#96;&#96; or &#96;&#96;ECS&#95;APPARMOR&#95;CAPABLE=true&#96;&#96; environment variables before containers placed on that instance can use these security options. For more information, see &#91;Amazon ECS Container Agent Configuration&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;.<br />Valid values: \"no-new-privileges\" &#124; \"apparmor:PROFILE\" &#124; \"label:value\" &#124; \"credentialspec:CredentialSpecFilePath\""
      },
      {
        "name": "system_controls",
        "type": "array",
        "description": "A list of namespaced kernel parameters to set in the container. This parameter maps to &#96;&#96;Sysctls&#96;&#96; in the docker container create command and the &#96;&#96;--sysctl&#96;&#96; option to docker run. For example, you can configure &#96;&#96;net.ipv4.tcp&#95;keepalive&#95;time&#96;&#96; setting to maintain longer lived connections.",
        "children": [
          {
            "name": "value",
            "type": "string",
            "description": "The namespaced kernel parameter to set a &#96;&#96;value&#96;&#96; for.<br />Valid IPC namespace values: &#96;&#96;\"kernel.msgmax\" &#124; \"kernel.msgmnb\" &#124; \"kernel.msgmni\" &#124; \"kernel.sem\" &#124; \"kernel.shmall\" &#124; \"kernel.shmmax\" &#124; \"kernel.shmmni\" &#124; \"kernel.shm&#95;rmid&#95;forced\"&#96;&#96;, and &#96;&#96;Sysctls&#96;&#96; that start with &#96;&#96;\"fs.mqueue.&#42;\"&#96;&#96;<br />Valid network namespace values: &#96;&#96;Sysctls&#96;&#96; that start with &#96;&#96;\"net.&#42;\"&#96;&#96;. Only namespaced &#96;&#96;Sysctls&#96;&#96; that exist within the container starting with \"net.&#42; are accepted.<br />All of these values are supported by Fargate."
          },
          {
            "name": "namespace",
            "type": "string",
            "description": "The namespaced kernel parameter to set a &#96;&#96;value&#96;&#96; for."
          }
        ]
      },
      {
        "name": "interactive",
        "type": "boolean",
        "description": "When this parameter is &#96;&#96;true&#96;&#96;, you can deploy containerized applications that require &#96;&#96;stdin&#96;&#96; or a &#96;&#96;tty&#96;&#96; to be allocated. This parameter maps to &#96;&#96;OpenStdin&#96;&#96; in the docker container create command and the &#96;&#96;--interactive&#96;&#96; option to docker run."
      },
      {
        "name": "dns_search_domains",
        "type": "array",
        "description": "A list of DNS search domains that are presented to the container. This parameter maps to &#96;&#96;DnsSearch&#96;&#96; in the docker container create command and the &#96;&#96;--dns-search&#96;&#96; option to docker run.<br />This parameter is not supported for Windows containers."
      },
      {
        "name": "credential_specs",
        "type": "array",
        "description": "A list of ARNs in SSM or Amazon S3 to a credential spec (&#96;&#96;CredSpec&#96;&#96;) file that configures the container for Active Directory authentication. We recommend that you use this parameter instead of the &#96;&#96;dockerSecurityOptions&#96;&#96;. The maximum number of ARNs is 1.<br />There are two formats for each ARN.<br />+ credentialspecdomainless:MyARN You use credentialspecdomainless:MyARN to provide a CredSpec with an additional section for a secret in . You provide the login credentials to the domain in the secret. Each task that runs on any container instance can join different domains. You can use this format without joining the container instance to a domain. + credentialspec:MyARN You use credentialspec:MyARN to provide a CredSpec for a single domain. You must join the container instance to the domain before you start any tasks that use this task definition. <br />In both formats, replace &#96;&#96;MyARN&#96;&#96; with the ARN in SSM or Amazon S3.<br />If you provide a &#96;&#96;credentialspecdomainless:MyARN&#96;&#96;, the &#96;&#96;credspec&#96;&#96; must provide a ARN in ASMlong for a secret containing the username, password, and the domain to connect to. For better security, the instance isn't joined to the domain for domainless authentication. Other applications on the instance can't use the domainless credentials. You can use this parameter to run tasks on the same instance, even it the tasks need to join different domains. For more information, see &#91;Using gMSAs for Windows Containers&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/windows-gmsa.html) and &#91;Using gMSAs for Linux Containers&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/linux-gmsa.html)."
      },
      {
        "name": "ulimits",
        "type": "array",
        "description": "A list of &#96;&#96;ulimits&#96;&#96; to set in the container. This parameter maps to &#96;&#96;Ulimits&#96;&#96; in the &#91;Create a container&#93;(https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate) section of the &#91;Docker Remote API&#93;(https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/) and the &#96;&#96;--ulimit&#96;&#96; option to &#91;docker run&#93;(https://docs.aws.amazon.com/https://docs.docker.com/engine/reference/run/). Valid naming values are displayed in the &#91;Ulimit&#93;(https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API&#95;Ulimit.html) data type. This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: &#96;&#96;sudo docker version --format '&#123;&#123;.Server.APIVersion&#125;&#125;'&#96;&#96;<br />This parameter is not supported for Windows containers.",
        "children": [
          {
            "name": "soft_limit",
            "type": "integer",
            "description": "The soft limit for the &#96;&#96;ulimit&#96;&#96; type. The value can be specified in bytes, seconds, or as a count, depending on the &#96;&#96;type&#96;&#96; of the &#96;&#96;ulimit&#96;&#96;."
          },
          {
            "name": "hard_limit",
            "type": "integer",
            "description": "The hard limit for the &#96;&#96;ulimit&#96;&#96; type. The value can be specified in bytes, seconds, or as a count, depending on the &#96;&#96;type&#96;&#96; of the &#96;&#96;ulimit&#96;&#96;."
          },
          {
            "name": "name",
            "type": "string",
            "description": "The &#96;&#96;type&#96;&#96; of the &#96;&#96;ulimit&#96;&#96;."
          }
        ]
      },
      {
        "name": "stop_timeout",
        "type": "integer",
        "description": "Time duration (in seconds) to wait before the container is forcefully killed if it doesn't exit normally on its own.<br />For tasks using the Fargate launch type, the task or service requires the following platforms:<br />+ Linux platform version &#96;&#96;1.3.0&#96;&#96; or later.<br />+ Windows platform version &#96;&#96;1.0.0&#96;&#96; or later.<br /><br />For tasks that use the Fargate launch type, the max stop timeout value is 120 seconds and if the parameter is not specified, the default value of 30 seconds is used.<br />For tasks that use the EC2 launch type, if the &#96;&#96;stopTimeout&#96;&#96; parameter isn't specified, the value set for the Amazon ECS container agent configuration variable &#96;&#96;ECS&#95;CONTAINER&#95;STOP&#95;TIMEOUT&#96;&#96; is used. If neither the &#96;&#96;stopTimeout&#96;&#96; parameter or the &#96;&#96;ECS&#95;CONTAINER&#95;STOP&#95;TIMEOUT&#96;&#96; agent configuration variable are set, then the default values of 30 seconds for Linux containers and 30 seconds on Windows containers are used. Your container instances require at least version 1.26.0 of the container agent to use a container stop timeout value. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see &#91;Updating the Amazon ECS Container Agent&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;. If you're using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the &#96;&#96;ecs-init&#96;&#96; package. If your container instances are launched from version &#96;&#96;20190301&#96;&#96; or later, then they contain the required versions of the container agent and &#96;&#96;ecs-init&#96;&#96;. For more information, see &#91;Amazon ECS-optimized Linux AMI&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized&#95;AMI.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;.<br />The valid values for Fargate are 2-120 seconds."
      },
      {
        "name": "working_directory",
        "type": "string",
        "description": "The working directory to run commands inside the container in. This parameter maps to &#96;&#96;WorkingDir&#96;&#96; in the docker container create command and the &#96;&#96;--workdir&#96;&#96; option to docker run."
      },
      {
        "name": "memory_reservation",
        "type": "integer",
        "description": "The soft limit (in MiB) of memory to reserve for the container. When system memory is under heavy contention, Docker attempts to keep the container memory to this soft limit. However, your container can consume more memory when it needs to, up to either the hard limit specified with the &#96;&#96;memory&#96;&#96; parameter (if applicable), or all of the available memory on the container instance, whichever comes first. This parameter maps to &#96;&#96;MemoryReservation&#96;&#96; in the docker container create command and the &#96;&#96;--memory-reservation&#96;&#96; option to docker run.<br />If a task-level memory value is not specified, you must specify a non-zero integer for one or both of &#96;&#96;memory&#96;&#96; or &#96;&#96;memoryReservation&#96;&#96; in a container definition. If you specify both, &#96;&#96;memory&#96;&#96; must be greater than &#96;&#96;memoryReservation&#96;&#96;. If you specify &#96;&#96;memoryReservation&#96;&#96;, then that value is subtracted from the available memory resources for the container instance where the container is placed. Otherwise, the value of &#96;&#96;memory&#96;&#96; is used.<br />For example, if your container normally uses 128 MiB of memory, but occasionally bursts to 256 MiB of memory for short periods of time, you can set a &#96;&#96;memoryReservation&#96;&#96; of 128 MiB, and a &#96;&#96;memory&#96;&#96; hard limit of 300 MiB. This configuration would allow the container to only reserve 128 MiB of memory from the remaining resources on the container instance, but also allow the container to consume more memory resources when needed.<br />The Docker 20.10.0 or later daemon reserves a minimum of 6 MiB of memory for a container. So, don't specify less than 6 MiB of memory for your containers. <br />The Docker 19.03.13-ce or earlier daemon reserves a minimum of 4 MiB of memory for a container. So, don't specify less than 4 MiB of memory for your containers."
      },
      {
        "name": "repository_credentials",
        "type": "object",
        "description": "The private repository authentication credentials to use.",
        "children": [
          {
            "name": "credentials_parameter",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the secret containing the private repository credentials.<br />When you use the Amazon ECS API, CLI, or AWS SDK, if the secret exists in the same Region as the task that you're launching then you can use either the full ARN or the name of the secret. When you use the AWS Management Console, you must specify the full ARN of the secret."
          }
        ]
      },
      {
        "name": "extra_hosts",
        "type": "array",
        "description": "A list of hostnames and IP address mappings to append to the &#96;&#96;/etc/hosts&#96;&#96; file on the container. This parameter maps to &#96;&#96;ExtraHosts&#96;&#96; in the docker container create command and the &#96;&#96;--add-host&#96;&#96; option to docker run.<br />This parameter isn't supported for Windows containers or tasks that use the &#96;&#96;awsvpc&#96;&#96; network mode.",
        "children": [
          {
            "name": "hostname",
            "type": "string",
            "description": "The hostname to use in the &#96;&#96;/etc/hosts&#96;&#96; entry."
          },
          {
            "name": "ip_address",
            "type": "string",
            "description": "The IP address to use in the &#96;&#96;/etc/hosts&#96;&#96; entry."
          }
        ]
      },
      {
        "name": "hostname",
        "type": "string",
        "description": "The hostname to use for your container. This parameter maps to &#96;&#96;Hostname&#96;&#96; in the docker container create command and the &#96;&#96;--hostname&#96;&#96; option to docker run.<br />The &#96;&#96;hostname&#96;&#96; parameter is not supported if you're using the &#96;&#96;awsvpc&#96;&#96; network mode."
      },
      {
        "name": "linux_parameters",
        "type": "object",
        "description": "Linux-specific modifications that are applied to the container, such as Linux kernel capabilities. For more information see &#91;KernelCapabilities&#93;(https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API&#95;KernelCapabilities.html).<br />This parameter is not supported for Windows containers.",
        "children": [
          {
            "name": "capabilities",
            "type": "object",
            "description": "The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.<br />For tasks that use the Fargate launch type, &#96;&#96;capabilities&#96;&#96; is supported for all platform versions but the &#96;&#96;add&#96;&#96; parameter is only supported if using platform version 1.4.0 or later.",
            "children": [
              {
                "name": "add",
                "type": "array",
                "description": "The Linux capabilities for the container that have been added to the default configuration provided by Docker. This parameter maps to &#96;&#96;CapAdd&#96;&#96; in the docker container create command and the &#96;&#96;--cap-add&#96;&#96; option to docker run.<br />Tasks launched on FARGATElong only support adding the &#96;&#96;SYS&#95;PTRACE&#96;&#96; kernel capability.<br />Valid values: &#96;&#96;\"ALL\" &#124; \"AUDIT&#95;CONTROL\" &#124; \"AUDIT&#95;WRITE\" &#124; \"BLOCK&#95;SUSPEND\" &#124; \"CHOWN\" &#124; \"DAC&#95;OVERRIDE\" &#124; \"DAC&#95;READ&#95;SEARCH\" &#124; \"FOWNER\" &#124; \"FSETID\" &#124; \"IPC&#95;LOCK\" &#124; \"IPC&#95;OWNER\" &#124; \"KILL\" &#124; \"LEASE\" &#124; \"LINUX&#95;IMMUTABLE\" &#124; \"MAC&#95;ADMIN\" &#124; \"MAC&#95;OVERRIDE\" &#124; \"MKNOD\" &#124; \"NET&#95;ADMIN\" &#124; \"NET&#95;BIND&#95;SERVICE\" &#124; \"NET&#95;BROADCAST\" &#124; \"NET&#95;RAW\" &#124; \"SETFCAP\" &#124; \"SETGID\" &#124; \"SETPCAP\" &#124; \"SETUID\" &#124; \"SYS&#95;ADMIN\" &#124; \"SYS&#95;BOOT\" &#124; \"SYS&#95;CHROOT\" &#124; \"SYS&#95;MODULE\" &#124; \"SYS&#95;NICE\" &#124; \"SYS&#95;PACCT\" &#124; \"SYS&#95;PTRACE\" &#124; \"SYS&#95;RAWIO\" &#124; \"SYS&#95;RESOURCE\" &#124; \"SYS&#95;TIME\" &#124; \"SYS&#95;TTY&#95;CONFIG\" &#124; \"SYSLOG\" &#124; \"WAKE&#95;ALARM\"&#96;&#96;"
              },
              {
                "name": "drop",
                "type": "array",
                "description": "The Linux capabilities for the container that have been removed from the default configuration provided by Docker. This parameter maps to &#96;&#96;CapDrop&#96;&#96; in the docker container create command and the &#96;&#96;--cap-drop&#96;&#96; option to docker run.<br />Valid values: &#96;&#96;\"ALL\" &#124; \"AUDIT&#95;CONTROL\" &#124; \"AUDIT&#95;WRITE\" &#124; \"BLOCK&#95;SUSPEND\" &#124; \"CHOWN\" &#124; \"DAC&#95;OVERRIDE\" &#124; \"DAC&#95;READ&#95;SEARCH\" &#124; \"FOWNER\" &#124; \"FSETID\" &#124; \"IPC&#95;LOCK\" &#124; \"IPC&#95;OWNER\" &#124; \"KILL\" &#124; \"LEASE\" &#124; \"LINUX&#95;IMMUTABLE\" &#124; \"MAC&#95;ADMIN\" &#124; \"MAC&#95;OVERRIDE\" &#124; \"MKNOD\" &#124; \"NET&#95;ADMIN\" &#124; \"NET&#95;BIND&#95;SERVICE\" &#124; \"NET&#95;BROADCAST\" &#124; \"NET&#95;RAW\" &#124; \"SETFCAP\" &#124; \"SETGID\" &#124; \"SETPCAP\" &#124; \"SETUID\" &#124; \"SYS&#95;ADMIN\" &#124; \"SYS&#95;BOOT\" &#124; \"SYS&#95;CHROOT\" &#124; \"SYS&#95;MODULE\" &#124; \"SYS&#95;NICE\" &#124; \"SYS&#95;PACCT\" &#124; \"SYS&#95;PTRACE\" &#124; \"SYS&#95;RAWIO\" &#124; \"SYS&#95;RESOURCE\" &#124; \"SYS&#95;TIME\" &#124; \"SYS&#95;TTY&#95;CONFIG\" &#124; \"SYSLOG\" &#124; \"WAKE&#95;ALARM\"&#96;&#96;"
              }
            ]
          },
          {
            "name": "swappiness",
            "type": "integer",
            "description": "This allows you to tune a container's memory swappiness behavior. A &#96;&#96;swappiness&#96;&#96; value of &#96;&#96;0&#96;&#96; will cause swapping to not happen unless absolutely necessary. A &#96;&#96;swappiness&#96;&#96; value of &#96;&#96;100&#96;&#96; will cause pages to be swapped very aggressively. Accepted values are whole numbers between &#96;&#96;0&#96;&#96; and &#96;&#96;100&#96;&#96;. If the &#96;&#96;swappiness&#96;&#96; parameter is not specified, a default value of &#96;&#96;60&#96;&#96; is used. If a value is not specified for &#96;&#96;maxSwap&#96;&#96; then this parameter is ignored. This parameter maps to the &#96;&#96;--memory-swappiness&#96;&#96; option to docker run.<br />If you're using tasks that use the Fargate launch type, the &#96;&#96;swappiness&#96;&#96; parameter isn't supported.<br />If you're using tasks on Amazon Linux 2023 the &#96;&#96;swappiness&#96;&#96; parameter isn't supported."
          },
          {
            "name": "tmpfs",
            "type": "array",
            "description": "The container path, mount options, and size (in MiB) of the tmpfs mount. This parameter maps to the &#96;&#96;--tmpfs&#96;&#96; option to docker run.<br />If you're using tasks that use the Fargate launch type, the &#96;&#96;tmpfs&#96;&#96; parameter isn't supported.",
            "children": [
              {
                "name": "size",
                "type": "integer",
                "description": "The maximum size (in MiB) of the tmpfs volume."
              },
              {
                "name": "container_path",
                "type": "string",
                "description": "The absolute file path where the tmpfs volume is to be mounted."
              },
              {
                "name": "mount_options",
                "type": "array",
                "description": "The list of tmpfs volume mount options.<br />Valid values: &#96;&#96;\"defaults\" &#124; \"ro\" &#124; \"rw\" &#124; \"suid\" &#124; \"nosuid\" &#124; \"dev\" &#124; \"nodev\" &#124; \"exec\" &#124; \"noexec\" &#124; \"sync\" &#124; \"async\" &#124; \"dirsync\" &#124; \"remount\" &#124; \"mand\" &#124; \"nomand\" &#124; \"atime\" &#124; \"noatime\" &#124; \"diratime\" &#124; \"nodiratime\" &#124; \"bind\" &#124; \"rbind\" &#124; \"unbindable\" &#124; \"runbindable\" &#124; \"private\" &#124; \"rprivate\" &#124; \"shared\" &#124; \"rshared\" &#124; \"slave\" &#124; \"rslave\" &#124; \"relatime\" &#124; \"norelatime\" &#124; \"strictatime\" &#124; \"nostrictatime\" &#124; \"mode\" &#124; \"uid\" &#124; \"gid\" &#124; \"nr&#95;inodes\" &#124; \"nr&#95;blocks\" &#124; \"mpol\"&#96;&#96;"
              }
            ]
          },
          {
            "name": "shared_memory_size",
            "type": "integer",
            "description": "The value for the size (in MiB) of the &#96;&#96;/dev/shm&#96;&#96; volume. This parameter maps to the &#96;&#96;--shm-size&#96;&#96; option to docker run.<br />If you are using tasks that use the Fargate launch type, the &#96;&#96;sharedMemorySize&#96;&#96; parameter is not supported."
          },
          {
            "name": "devices",
            "type": "array",
            "description": "Any host devices to expose to the container. This parameter maps to &#96;&#96;Devices&#96;&#96; in the docker container create command and the &#96;&#96;--device&#96;&#96; option to docker run.<br />If you're using tasks that use the Fargate launch type, the &#96;&#96;devices&#96;&#96; parameter isn't supported.",
            "children": [
              {
                "name": "host_path",
                "type": "string",
                "description": "The path for the device on the host container instance."
              },
              {
                "name": "permissions",
                "type": "array",
                "description": "The explicit permissions to provide to the container for the device. By default, the container has permissions for &#96;&#96;read&#96;&#96;, &#96;&#96;write&#96;&#96;, and &#96;&#96;mknod&#96;&#96; for the device."
              },
              {
                "name": "container_path",
                "type": "string",
                "description": "The path inside the container at which to expose the host device."
              }
            ]
          },
          {
            "name": "init_process_enabled",
            "type": "boolean",
            "description": "Run an &#96;&#96;init&#96;&#96; process inside the container that forwards signals and reaps processes. This parameter maps to the &#96;&#96;--init&#96;&#96; option to docker run. This parameter requires version 1.25 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: &#96;&#96;sudo docker version --format '&#123;&#123;.Server.APIVersion&#125;&#125;'&#96;&#96;"
          },
          {
            "name": "max_swap",
            "type": "integer",
            "description": "The total amount of swap memory (in MiB) a container can use. This parameter will be translated to the &#96;&#96;--memory-swap&#96;&#96; option to docker run where the value would be the sum of the container memory plus the &#96;&#96;maxSwap&#96;&#96; value.<br />If a &#96;&#96;maxSwap&#96;&#96; value of &#96;&#96;0&#96;&#96; is specified, the container will not use swap. Accepted values are &#96;&#96;0&#96;&#96; or any positive integer. If the &#96;&#96;maxSwap&#96;&#96; parameter is omitted, the container will use the swap configuration for the container instance it is running on. A &#96;&#96;maxSwap&#96;&#96; value must be set for the &#96;&#96;swappiness&#96;&#96; parameter to be used.<br />If you're using tasks that use the Fargate launch type, the &#96;&#96;maxSwap&#96;&#96; parameter isn't supported.<br />If you're using tasks on Amazon Linux 2023 the &#96;&#96;swappiness&#96;&#96; parameter isn't supported."
          }
        ]
      },
      {
        "name": "version_consistency",
        "type": "string",
        "description": "Specifies whether Amazon ECS will resolve the container image tag provided in the container definition to an image digest. By default, the value is &#96;&#96;enabled&#96;&#96;. If you set the value for a container as &#96;&#96;disabled&#96;&#96;, Amazon ECS will not resolve the provided container image tag to a digest and will use the original image URI specified in the container definition for deployment. For more information about container image resolution, see &#91;Container image resolution&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html#deployment-container-image-stability) in the &#42;Amazon ECS Developer Guide&#42;."
      },
      {
        "name": "restart_policy",
        "type": "object",
        "description": "The restart policy for a container. When you set up a restart policy, Amazon ECS can restart the container without needing to replace the task. For more information, see &#91;Restart individual containers in Amazon ECS tasks with container restart policies&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-restart-policy.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;.",
        "children": [
          {
            "name": "ignored_exit_codes",
            "type": "array",
            "description": "A list of exit codes that Amazon ECS will ignore and not attempt a restart on. You can specify a maximum of 50 container exit codes. By default, Amazon ECS does not ignore any exit codes."
          },
          {
            "name": "restart_attempt_period",
            "type": "integer",
            "description": "A period of time (in seconds) that the container must run for before a restart can be attempted. A container can be restarted only once every &#96;&#96;restartAttemptPeriod&#96;&#96; seconds. If a container isn't able to run for this time period and exits early, it will not be restarted. You can set a minimum &#96;&#96;restartAttemptPeriod&#96;&#96; of 60 seconds and a maximum &#96;&#96;restartAttemptPeriod&#96;&#96; of 1800 seconds. By default, a container must run for 300 seconds before it can be restarted."
          },
          {
            "name": "enabled",
            "type": "boolean",
            "description": "Specifies whether a restart policy is enabled for the container."
          }
        ]
      },
      {
        "name": "disable_networking",
        "type": "boolean",
        "description": "When this parameter is true, networking is off within the container. This parameter maps to &#96;&#96;NetworkDisabled&#96;&#96; in the docker container create command.<br />This parameter is not supported for Windows containers."
      },
      {
        "name": "pseudo_terminal",
        "type": "boolean",
        "description": "When this parameter is &#96;&#96;true&#96;&#96;, a TTY is allocated. This parameter maps to &#96;&#96;Tty&#96;&#96; in the docker container create command and the &#96;&#96;--tty&#96;&#96; option to docker run."
      },
      {
        "name": "mount_points",
        "type": "array",
        "description": "The mount points for data volumes in your container.<br />This parameter maps to &#96;&#96;Volumes&#96;&#96; in the docker container create command and the &#96;&#96;--volume&#96;&#96; option to docker run.<br />Windows containers can mount whole directories on the same drive as &#96;&#96;$env:ProgramData&#96;&#96;. Windows containers can't mount directories on a different drive, and mount point can't be across drives.",
        "children": [
          {
            "name": "read_only",
            "type": "boolean",
            "description": "If this value is &#96;&#96;true&#96;&#96;, the container has read-only access to the volume. If this value is &#96;&#96;false&#96;&#96;, then the container can write to the volume. The default value is &#96;&#96;false&#96;&#96;."
          },
          {
            "name": "source_volume",
            "type": "string",
            "description": "The name of the volume to mount. Must be a volume name referenced in the &#96;&#96;name&#96;&#96; parameter of task definition &#96;&#96;volume&#96;&#96;."
          },
          {
            "name": "container_path",
            "type": "string",
            "description": "The path on the container to mount the host volume at."
          }
        ]
      },
      {
        "name": "depends_on",
        "type": "array",
        "description": "The dependencies defined for container startup and shutdown. A container can contain multiple dependencies. When a dependency is defined for container startup, for container shutdown it is reversed.<br />For tasks using the EC2 launch type, the container instances require at least version 1.26.0 of the container agent to turn on container dependencies. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see &#91;Updating the Amazon ECS Container Agent&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;. If you're using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the &#96;&#96;ecs-init&#96;&#96; package. If your container instances are launched from version &#96;&#96;20190301&#96;&#96; or later, then they contain the required versions of the container agent and &#96;&#96;ecs-init&#96;&#96;. For more information, see &#91;Amazon ECS-optimized Linux AMI&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized&#95;AMI.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;.<br />For tasks using the Fargate launch type, the task or service requires the following platforms:<br />+ Linux platform version &#96;&#96;1.3.0&#96;&#96; or later.<br />+ Windows platform version &#96;&#96;1.0.0&#96;&#96; or later.<br /><br />If the task definition is used in a blue/green deployment that uses &#91;AWS::CodeDeploy::DeploymentGroup BlueGreenDeploymentConfiguration&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-bluegreendeploymentconfiguration.html), the &#96;&#96;dependsOn&#96;&#96; parameter is not supported.",
        "children": [
          {
            "name": "condition",
            "type": "string",
            "description": "The dependency condition of the container. The following are the available conditions and their behavior:<br />+ &#96;&#96;START&#96;&#96; - This condition emulates the behavior of links and volumes today. It validates that a dependent container is started before permitting other containers to start.<br />+ &#96;&#96;COMPLETE&#96;&#96; - This condition validates that a dependent container runs to completion (exits) before permitting other containers to start. This can be useful for nonessential containers that run a script and then exit. This condition can't be set on an essential container.<br />+ &#96;&#96;SUCCESS&#96;&#96; - This condition is the same as &#96;&#96;COMPLETE&#96;&#96;, but it also requires that the container exits with a &#96;&#96;zero&#96;&#96; status. This condition can't be set on an essential container.<br />+ &#96;&#96;HEALTHY&#96;&#96; - This condition validates that the dependent container passes its Docker health check before permitting other containers to start. This requires that the dependent container has health checks configured. This condition is confirmed only at task startup."
          },
          {
            "name": "container_name",
            "type": "string",
            "description": "The name of a container."
          }
        ]
      },
      {
        "name": "docker_labels",
        "type": "object",
        "description": "A key/value map of labels to add to the container. This parameter maps to &#96;&#96;Labels&#96;&#96; in the docker container create command and the &#96;&#96;--label&#96;&#96; option to docker run. This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: &#96;&#96;sudo docker version --format '&#123;&#123;.Server.APIVersion&#125;&#125;'&#96;&#96;"
      },
      {
        "name": "port_mappings",
        "type": "array",
        "description": "The list of port mappings for the container. Port mappings allow containers to access ports on the host container instance to send or receive traffic.<br />For task definitions that use the &#96;&#96;awsvpc&#96;&#96; network mode, you should only specify the &#96;&#96;containerPort&#96;&#96;. The &#96;&#96;hostPort&#96;&#96; can be left blank or it must be the same value as the &#96;&#96;containerPort&#96;&#96;.<br />Port mappings on Windows use the &#96;&#96;NetNAT&#96;&#96; gateway address rather than &#96;&#96;localhost&#96;&#96;. There is no loopback for port mappings on Windows, so you cannot access a container's mapped port from the host itself. <br />This parameter maps to &#96;&#96;PortBindings&#96;&#96; in the &#91;Create a container&#93;(https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate) section of the &#91;Docker Remote API&#93;(https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/) and the &#96;&#96;--publish&#96;&#96; option to &#91;docker run&#93;(https://docs.aws.amazon.com/https://docs.docker.com/engine/reference/run/). If the network mode of a task definition is set to &#96;&#96;none&#96;&#96;, then you can't specify port mappings. If the network mode of a task definition is set to &#96;&#96;host&#96;&#96;, then host ports must either be undefined or they must match the container port in the port mapping.<br />After a task reaches the &#96;&#96;RUNNING&#96;&#96; status, manual and automatic host and container port assignments are visible in the &#42;Network Bindings&#42; section of a container description for a selected task in the Amazon ECS console. The assignments are also visible in the &#96;&#96;networkBindings&#96;&#96; section &#91;DescribeTasks&#93;(https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API&#95;DescribeTasks.html) responses.",
        "children": [
          {
            "name": "app_protocol",
            "type": "string",
            "description": "The application protocol that's used for the port mapping. This parameter only applies to Service Connect. We recommend that you set this parameter to be consistent with the protocol that your application uses. If you set this parameter, Amazon ECS adds protocol-specific connection handling to the Service Connect proxy. If you set this parameter, Amazon ECS adds protocol-specific telemetry in the Amazon ECS console and CloudWatch.<br />If you don't set a value for this parameter, then TCP is used. However, Amazon ECS doesn't add protocol-specific telemetry for TCP.<br />&#96;&#96;appProtocol&#96;&#96; is immutable in a Service Connect service. Updating this field requires a service deletion and redeployment.<br />Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see &#91;Service Connect&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;."
          },
          {
            "name": "container_port_range",
            "type": "string",
            "description": "The port number range on the container that's bound to the dynamically mapped host port range. <br />The following rules apply when you specify a &#96;&#96;containerPortRange&#96;&#96;:<br />+ You must use either the &#96;&#96;bridge&#96;&#96; network mode or the &#96;&#96;awsvpc&#96;&#96; network mode.<br />+ This parameter is available for both the EC2 and FARGATElong launch types.<br />+ This parameter is available for both the Linux and Windows operating systems.<br />+ The container instance must have at least version 1.67.0 of the container agent and at least version 1.67.0-1 of the &#96;&#96;ecs-init&#96;&#96; package <br />+ You can specify a maximum of 100 port ranges per container.<br />+ You do not specify a &#96;&#96;hostPortRange&#96;&#96;. The value of the &#96;&#96;hostPortRange&#96;&#96; is set as follows:<br />+ For containers in a task with the &#96;&#96;awsvpc&#96;&#96; network mode, the &#96;&#96;hostPortRange&#96;&#96; is set to the same value as the &#96;&#96;containerPortRange&#96;&#96;. This is a static mapping strategy.<br />+ For containers in a task with the &#96;&#96;bridge&#96;&#96; network mode, the Amazon ECS agent finds open host ports from the default ephemeral range and passes it to docker to bind them to the container ports.<br /><br />+ The &#96;&#96;containerPortRange&#96;&#96; valid values are between 1 and 65535.<br />+ A port can only be included in one port mapping per container.<br />+ You cannot specify overlapping port ranges.<br />+ The first port in the range must be less than last port in the range.<br />+ Docker recommends that you turn off the docker-proxy in the Docker daemon config file when you have a large number of ports.<br />For more information, see &#91;Issue #11185&#93;(https://docs.aws.amazon.com/https://github.com/moby/moby/issues/11185) on the Github website.<br />For information about how to turn off the docker-proxy in the Docker daemon config file, see &#91;Docker daemon&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/bootstrap&#95;container&#95;instance.html#bootstrap&#95;docker&#95;daemon) in the &#42;Amazon ECS Developer Guide&#42;.<br /><br />You can call &#91;DescribeTasks&#93;(https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API&#95;DescribeTasks.html) to view the &#96;&#96;hostPortRange&#96;&#96; which are the host ports that are bound to the container ports."
          },
          {
            "name": "host_port",
            "type": "integer",
            "description": "The port number on the container instance to reserve for your container.<br />If you specify a &#96;&#96;containerPortRange&#96;&#96;, leave this field empty and the value of the &#96;&#96;hostPort&#96;&#96; is set as follows:<br />+ For containers in a task with the &#96;&#96;awsvpc&#96;&#96; network mode, the &#96;&#96;hostPort&#96;&#96; is set to the same value as the &#96;&#96;containerPort&#96;&#96;. This is a static mapping strategy.<br />+ For containers in a task with the &#96;&#96;bridge&#96;&#96; network mode, the Amazon ECS agent finds open ports on the host and automatically binds them to the container ports. This is a dynamic mapping strategy.<br /><br />If you use containers in a task with the &#96;&#96;awsvpc&#96;&#96; or &#96;&#96;host&#96;&#96; network mode, the &#96;&#96;hostPort&#96;&#96; can either be left blank or set to the same value as the &#96;&#96;containerPort&#96;&#96;.<br />If you use containers in a task with the &#96;&#96;bridge&#96;&#96; network mode, you can specify a non-reserved host port for your container port mapping, or you can omit the &#96;&#96;hostPort&#96;&#96; (or set it to &#96;&#96;0&#96;&#96;) while specifying a &#96;&#96;containerPort&#96;&#96; and your container automatically receives a port in the ephemeral port range for your container instance operating system and Docker version.<br />The default ephemeral port range for Docker version 1.6.0 and later is listed on the instance under &#96;&#96;/proc/sys/net/ipv4/ip&#95;local&#95;port&#95;range&#96;&#96;. If this kernel parameter is unavailable, the default ephemeral port range from 49153 through 65535 (Linux) or 49152 through 65535 (Windows) is used. Do not attempt to specify a host port in the ephemeral port range as these are reserved for automatic assignment. In general, ports below 32768 are outside of the ephemeral port range.<br />The default reserved ports are 22 for SSH, the Docker ports 2375 and 2376, and the Amazon ECS container agent ports 51678-51680. Any host port that was previously specified in a running task is also reserved while the task is running. That is, after a task stops, the host port is released. The current reserved ports are displayed in the &#96;&#96;remainingResources&#96;&#96; of &#91;DescribeContainerInstances&#93;(https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API&#95;DescribeContainerInstances.html) output. A container instance can have up to 100 reserved ports at a time. This number includes the default reserved ports. Automatically assigned ports aren't included in the 100 reserved ports quota."
          },
          {
            "name": "container_port",
            "type": "integer",
            "description": "The port number on the container that's bound to the user-specified or automatically assigned host port.<br />If you use containers in a task with the &#96;&#96;awsvpc&#96;&#96; or &#96;&#96;host&#96;&#96; network mode, specify the exposed ports using &#96;&#96;containerPort&#96;&#96;.<br />If you use containers in a task with the &#96;&#96;bridge&#96;&#96; network mode and you specify a container port and not a host port, your container automatically receives a host port in the ephemeral port range. For more information, see &#96;&#96;hostPort&#96;&#96;. Port mappings that are automatically assigned in this way do not count toward the 100 reserved ports limit of a container instance."
          },
          {
            "name": "protocol",
            "type": "string",
            "description": "The protocol used for the port mapping. Valid values are &#96;&#96;tcp&#96;&#96; and &#96;&#96;udp&#96;&#96;. The default is &#96;&#96;tcp&#96;&#96;. &#96;&#96;protocol&#96;&#96; is immutable in a Service Connect service. Updating this field requires a service deletion and redeployment."
          },
          {
            "name": "name",
            "type": "string",
            "description": "The name that's used for the port mapping. This parameter is the name that you use in the &#96;&#96;serviceConnectConfiguration&#96;&#96; and the &#96;&#96;vpcLatticeConfigurations&#96;&#96; of a service. The name can include up to 64 characters. The characters can include lowercase letters, numbers, underscores (&#95;), and hyphens (-). The name can't start with a hyphen."
          }
        ]
      },
      {
        "name": "command",
        "type": "array",
        "description": "The command that's passed to the container. This parameter maps to &#96;&#96;Cmd&#96;&#96; in the docker container create command and the &#96;&#96;COMMAND&#96;&#96; parameter to docker run. If there are multiple arguments, each argument is a separated string in the array."
      },
      {
        "name": "environment",
        "type": "array",
        "description": "The environment variables to pass to a container. This parameter maps to &#96;&#96;Env&#96;&#96; in the docker container create command and the &#96;&#96;--env&#96;&#96; option to docker run.<br />We don't recommend that you use plaintext environment variables for sensitive information, such as credential data.",
        "children": [
          {
            "name": "value",
            "type": "string",
            "description": "The value of the key-value pair. For environment variables, this is the value of the environment variable."
          },
          {
            "name": "name",
            "type": "string",
            "description": "The name of the key-value pair. For environment variables, this is the name of the environment variable."
          }
        ]
      },
      {
        "name": "links",
        "type": "array",
        "description": "The &#96;&#96;links&#96;&#96; parameter allows containers to communicate with each other without the need for port mappings. This parameter is only supported if the network mode of a task definition is &#96;&#96;bridge&#96;&#96;. The &#96;&#96;name:internalName&#96;&#96; construct is analogous to &#96;&#96;name:alias&#96;&#96; in Docker links. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.. This parameter maps to &#96;&#96;Links&#96;&#96; in the docker container create command and the &#96;&#96;--link&#96;&#96; option to docker run.<br />This parameter is not supported for Windows containers.<br />Containers that are collocated on a single container instance may be able to communicate with each other without requiring links or host port mappings. Network isolation is achieved on the container instance using security groups and VPC settings."
      }
    ]
  },
  {
    "name": "family",
    "type": "string",
    "description": "The name of a family that this task definition is registered to. Up to 255 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed.<br />A family groups multiple versions of a task definition. Amazon ECS gives the first task definition that you registered to a family a revision number of 1. Amazon ECS gives sequential revision numbers to each task definition that you add.<br />To use revision numbers when you update a task definition, specify this property. If you don't specify a value, CFNlong generates a new task definition each time that you update it."
  },
  {
    "name": "ephemeral_storage",
    "type": "object",
    "description": "The ephemeral storage settings to use for tasks run with the task definition.",
    "children": [
      {
        "name": "size_in_gi_b",
        "type": "integer",
        "description": "The total amount, in GiB, of ephemeral storage to set for the task. The minimum supported value is &#96;&#96;21&#96;&#96; GiB and the maximum supported value is &#96;&#96;200&#96;&#96; GiB."
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The metadata that you apply to the task definition to help you categorize and organize them. Each tag consists of a key and an optional value. You define both of them.<br />The following basic restrictions apply to tags:<br />+ Maximum number of tags per resource - 50<br />+ For each resource, each tag key must be unique, and each tag key can have only one value.<br />+ Maximum key length - 128 Unicode characters in UTF-8<br />+ Maximum value length - 256 Unicode characters in UTF-8<br />+ If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . &#95; : / @.<br />+ Tag keys and values are case-sensitive.<br />+ Do not use &#96;&#96;aws:&#96;&#96;, &#96;&#96;AWS:&#96;&#96;, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.",
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
    "name": "task_definition_arn",
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "task_definition_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html"><code>AWS::ECS::TaskDefinition</code></a>.

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
    <td><code>task_definitions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>task_definitions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>task_definitions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>task_definitions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>task_definitions</code></td>
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

Gets all properties from an individual <code>task_definition</code>.
```sql
SELECT
region,
task_role_arn,
ipc_mode,
inference_accelerators,
memory,
placement_constraints,
cpu,
requires_compatibilities,
network_mode,
pid_mode,
enable_fault_injection,
execution_role_arn,
runtime_platform,
proxy_configuration,
volumes,
container_definitions,
family,
ephemeral_storage,
tags,
task_definition_arn
FROM awscc.ecs.task_definitions
WHERE region = 'us-east-1' AND Identifier = '<TaskDefinitionArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>task_definitions</code> in a region.
```sql
SELECT
region,
task_definition_arn
FROM awscc.ecs.task_definitions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>task_definition</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ecs.task_definitions (
 TaskRoleArn,
 IpcMode,
 InferenceAccelerators,
 Memory,
 PlacementConstraints,
 Cpu,
 RequiresCompatibilities,
 NetworkMode,
 PidMode,
 EnableFaultInjection,
 ExecutionRoleArn,
 RuntimePlatform,
 ProxyConfiguration,
 Volumes,
 ContainerDefinitions,
 Family,
 EphemeralStorage,
 Tags,
 region
)
SELECT 
'{{ TaskRoleArn }}',
 '{{ IpcMode }}',
 '{{ InferenceAccelerators }}',
 '{{ Memory }}',
 '{{ PlacementConstraints }}',
 '{{ Cpu }}',
 '{{ RequiresCompatibilities }}',
 '{{ NetworkMode }}',
 '{{ PidMode }}',
 '{{ EnableFaultInjection }}',
 '{{ ExecutionRoleArn }}',
 '{{ RuntimePlatform }}',
 '{{ ProxyConfiguration }}',
 '{{ Volumes }}',
 '{{ ContainerDefinitions }}',
 '{{ Family }}',
 '{{ EphemeralStorage }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ecs.task_definitions (
 TaskRoleArn,
 IpcMode,
 InferenceAccelerators,
 Memory,
 PlacementConstraints,
 Cpu,
 RequiresCompatibilities,
 NetworkMode,
 PidMode,
 EnableFaultInjection,
 ExecutionRoleArn,
 RuntimePlatform,
 ProxyConfiguration,
 Volumes,
 ContainerDefinitions,
 Family,
 EphemeralStorage,
 Tags,
 region
)
SELECT 
 '{{ TaskRoleArn }}',
 '{{ IpcMode }}',
 '{{ InferenceAccelerators }}',
 '{{ Memory }}',
 '{{ PlacementConstraints }}',
 '{{ Cpu }}',
 '{{ RequiresCompatibilities }}',
 '{{ NetworkMode }}',
 '{{ PidMode }}',
 '{{ EnableFaultInjection }}',
 '{{ ExecutionRoleArn }}',
 '{{ RuntimePlatform }}',
 '{{ ProxyConfiguration }}',
 '{{ Volumes }}',
 '{{ ContainerDefinitions }}',
 '{{ Family }}',
 '{{ EphemeralStorage }}',
 '{{ Tags }}',
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
  - name: task_definition
    props:
      - name: TaskRoleArn
        value: '{{ TaskRoleArn }}'
      - name: IpcMode
        value: '{{ IpcMode }}'
      - name: InferenceAccelerators
        value:
          - DeviceType: '{{ DeviceType }}'
            DeviceName: '{{ DeviceName }}'
      - name: Memory
        value: '{{ Memory }}'
      - name: PlacementConstraints
        value:
          - Type: '{{ Type }}'
            Expression: '{{ Expression }}'
      - name: Cpu
        value: '{{ Cpu }}'
      - name: RequiresCompatibilities
        value:
          - '{{ RequiresCompatibilities[0] }}'
      - name: NetworkMode
        value: '{{ NetworkMode }}'
      - name: PidMode
        value: '{{ PidMode }}'
      - name: EnableFaultInjection
        value: '{{ EnableFaultInjection }}'
      - name: ExecutionRoleArn
        value: '{{ ExecutionRoleArn }}'
      - name: RuntimePlatform
        value:
          OperatingSystemFamily: '{{ OperatingSystemFamily }}'
          CpuArchitecture: '{{ CpuArchitecture }}'
      - name: ProxyConfiguration
        value:
          ProxyConfigurationProperties:
            - Value: '{{ Value }}'
              Name: '{{ Name }}'
          Type: '{{ Type }}'
          ContainerName: '{{ ContainerName }}'
      - name: Volumes
        value:
          - EFSVolumeConfiguration:
              FilesystemId: '{{ FilesystemId }}'
              TransitEncryption: '{{ TransitEncryption }}'
              AuthorizationConfig:
                IAM: '{{ IAM }}'
                AccessPointId: '{{ AccessPointId }}'
              RootDirectory: '{{ RootDirectory }}'
              TransitEncryptionPort: '{{ TransitEncryptionPort }}'
            Host:
              SourcePath: '{{ SourcePath }}'
            ConfiguredAtLaunch: '{{ ConfiguredAtLaunch }}'
            DockerVolumeConfiguration:
              DriverOpts: {}
              Scope: '{{ Scope }}'
              Autoprovision: '{{ Autoprovision }}'
              Driver: '{{ Driver }}'
              Labels: {}
            FSxWindowsFileServerVolumeConfiguration:
              AuthorizationConfig:
                CredentialsParameter: '{{ CredentialsParameter }}'
                Domain: '{{ Domain }}'
              FileSystemId: '{{ FileSystemId }}'
              RootDirectory: '{{ RootDirectory }}'
            Name: '{{ Name }}'
      - name: ContainerDefinitions
        value:
          - User: '{{ User }}'
            Secrets:
              - ValueFrom: '{{ ValueFrom }}'
                Name: '{{ Name }}'
            Memory: '{{ Memory }}'
            Privileged: '{{ Privileged }}'
            HealthCheck:
              Command:
                - '{{ Command[0] }}'
              Timeout: '{{ Timeout }}'
              Retries: '{{ Retries }}'
              Interval: '{{ Interval }}'
              StartPeriod: '{{ StartPeriod }}'
            StartTimeout: '{{ StartTimeout }}'
            VolumesFrom:
              - ReadOnly: '{{ ReadOnly }}'
                SourceContainer: '{{ SourceContainer }}'
            Cpu: '{{ Cpu }}'
            EntryPoint:
              - '{{ EntryPoint[0] }}'
            DnsServers:
              - '{{ DnsServers[0] }}'
            ReadonlyRootFilesystem: '{{ ReadonlyRootFilesystem }}'
            Image: '{{ Image }}'
            Essential: '{{ Essential }}'
            LogConfiguration:
              SecretOptions:
                - null
              Options: {}
              LogDriver: '{{ LogDriver }}'
            ResourceRequirements:
              - Type: '{{ Type }}'
                Value: '{{ Value }}'
            EnvironmentFiles:
              - Type: '{{ Type }}'
                Value: '{{ Value }}'
            Name: '{{ Name }}'
            FirelensConfiguration:
              Options: {}
              Type: '{{ Type }}'
            DockerSecurityOptions:
              - '{{ DockerSecurityOptions[0] }}'
            SystemControls:
              - Value: '{{ Value }}'
                Namespace: '{{ Namespace }}'
            Interactive: '{{ Interactive }}'
            DnsSearchDomains:
              - '{{ DnsSearchDomains[0] }}'
            CredentialSpecs:
              - '{{ CredentialSpecs[0] }}'
            Ulimits:
              - SoftLimit: '{{ SoftLimit }}'
                HardLimit: '{{ HardLimit }}'
                Name: '{{ Name }}'
            StopTimeout: '{{ StopTimeout }}'
            WorkingDirectory: '{{ WorkingDirectory }}'
            MemoryReservation: '{{ MemoryReservation }}'
            RepositoryCredentials:
              CredentialsParameter: '{{ CredentialsParameter }}'
            ExtraHosts:
              - Hostname: '{{ Hostname }}'
                IpAddress: '{{ IpAddress }}'
            Hostname: '{{ Hostname }}'
            LinuxParameters:
              Capabilities:
                Add:
                  - '{{ Add[0] }}'
                Drop:
                  - '{{ Drop[0] }}'
              Swappiness: '{{ Swappiness }}'
              Tmpfs:
                - Size: '{{ Size }}'
                  ContainerPath: '{{ ContainerPath }}'
                  MountOptions:
                    - '{{ MountOptions[0] }}'
              SharedMemorySize: '{{ SharedMemorySize }}'
              Devices:
                - HostPath: '{{ HostPath }}'
                  Permissions:
                    - '{{ Permissions[0] }}'
                  ContainerPath: '{{ ContainerPath }}'
              InitProcessEnabled: '{{ InitProcessEnabled }}'
              MaxSwap: '{{ MaxSwap }}'
            VersionConsistency: '{{ VersionConsistency }}'
            RestartPolicy:
              IgnoredExitCodes:
                - '{{ IgnoredExitCodes[0] }}'
              RestartAttemptPeriod: '{{ RestartAttemptPeriod }}'
              Enabled: '{{ Enabled }}'
            DisableNetworking: '{{ DisableNetworking }}'
            PseudoTerminal: '{{ PseudoTerminal }}'
            MountPoints:
              - ReadOnly: '{{ ReadOnly }}'
                SourceVolume: '{{ SourceVolume }}'
                ContainerPath: '{{ ContainerPath }}'
            DependsOn:
              - Condition: '{{ Condition }}'
                ContainerName: '{{ ContainerName }}'
            DockerLabels: {}
            PortMappings:
              - AppProtocol: '{{ AppProtocol }}'
                ContainerPortRange: '{{ ContainerPortRange }}'
                HostPort: '{{ HostPort }}'
                ContainerPort: '{{ ContainerPort }}'
                Protocol: '{{ Protocol }}'
                Name: '{{ Name }}'
            Command:
              - '{{ Command[0] }}'
            Environment:
              - null
            Links:
              - '{{ Links[0] }}'
      - name: Family
        value: '{{ Family }}'
      - name: EphemeralStorage
        value:
          SizeInGiB: '{{ SizeInGiB }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>task_definition</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ecs.task_definitions
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<TaskDefinitionArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ecs.task_definitions
WHERE Identifier = '<TaskDefinitionArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>task_definitions</code> resource, the following permissions are required:

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
ecs:DescribeTaskDefinition
```

</TabItem>
<TabItem value="create">

```json
ecs:RegisterTaskDefinition,
ecs:DescribeTaskDefinition,
ecs:TagResource,
iam:GetRole,
iam:PassRole
```

</TabItem>
<TabItem value="update">

```json
ecs:TagResource,
ecs:UntagResource,
ecs:ListTagsForResource,
ecs:DescribeTaskDefinition,
iam:GetRole,
iam:PassRole
```

</TabItem>
<TabItem value="list">

```json
ecs:ListTaskDefinitions,
ecs:DescribeTaskDefinition
```

</TabItem>
<TabItem value="delete">

```json
ecs:DeregisterTaskDefinition,
ecs:DescribeTaskDefinition,
iam:GetRole,
iam:PassRole
```

</TabItem>
</Tabs>