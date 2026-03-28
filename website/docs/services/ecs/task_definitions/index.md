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

import CodeBlock from '@theme/CodeBlock';
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
<tr><td><b>Description</b></td><td><details><summary>Registers a new task definition from the supplied <code>family</code> and <code>containerDefinitions</code>. Optionally, you can add data volumes to your containers with the <code>volumes</code> parameter. For more information about task definition parameters and defaults, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html">Amazon ECS Task Definitions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</summary>You can specify a role for your task with the <code>taskRoleArn</code> parameter. When you specify a role for a task, its containers can then use the latest versions of the CLI or SDKs to make API requests to the AWS services that are specified in the policy that's associated with the role. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">IAM Roles for Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.<br />You can specify a Docker networking mode for the containers in your task definition with the <code>networkMode</code> parameter. If you specify the <code>awsvpc</code> network mode, the task is allocated an elastic network interface, and you must specify a <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_NetworkConfiguration.html">NetworkConfiguration</a> when you create a service or run a task with the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Task Networking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.<br />In the following example or examples, the Authorization header contents (<code>AUTHPARAMS</code>) must be replaced with an AWS Signature Version 4 signature. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a> in the <i>General Reference</i>.<br />You only need to learn how to sign HTTP requests if you intend to create them manually. When you use the [](https://docs.aws.amazon.com/cli/) or one of the <a href="https://docs.aws.amazon.com/tools/">SDKs</a> to make requests to AWS, these tools automatically sign the requests for you, with the access key that you specify when you configure the tools. When you use these tools, you don't have to sign requests yourself.</details></td></tr>
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
    "description": "<details><summary>The short name or full Amazon Resource Name (ARN) of the IAMlong role that grants containers in the task permission to call AWS APIs on your behalf. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html\">Amazon ECS Task Role</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</summary>IAM roles for tasks on Windows require that the <code>-EnableTaskIAMRole</code> option is set when you launch the Amazon ECS-optimized Windows AMI. Your containers must also run some configuration code to use the feature. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/windows_task_IAM_roles.html\">Windows IAM roles for tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.<br />String validation is done on the ECS side. If an invalid string value is given for <code>TaskRoleArn</code>, it may cause the Cloudformation job to hang.</details>"
  },
  {
    "name": "ipc_mode",
    "type": "string",
    "description": "<details><summary>The IPC resource namespace to use for the containers in the task. The valid values are <code>host</code>, <code>task</code>, or <code>none</code>. If <code>host</code> is specified, then all containers within the tasks that specified the <code>host</code> IPC mode on the same container instance share the same IPC resources with the host Amazon EC2 instance. If <code>task</code> is specified, all containers within the specified task share the same IPC resources. If <code>none</code> is specified, then IPC resources within the containers of a task are private and not shared with other containers in a task or on the container instance. If no value is specified, then the IPC resource namespace sharing depends on the Docker daemon setting on the container instance.</summary>If the <code>host</code> IPC mode is used, be aware that there is a heightened risk of undesired IPC namespace expose.<br />If you are setting namespaced kernel parameters using <code>systemControls</code> for the containers in the task, the following will apply to your IPC resource namespace. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html\">System Controls</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.<br />+  For tasks that use the <code>host</code> IPC mode, IPC namespace related <code>systemControls</code> are not supported.<br />+  For tasks that use the <code>task</code> IPC mode, IPC namespace related <code>systemControls</code> will apply to all containers within a task.<br />This parameter is not supported for Windows containers or tasks run on FARGATElong.</details>"
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
    "description": "<details><summary>The amount (in MiB) of memory used by the task.</summary>If your tasks runs on Amazon EC2 instances, you must specify either a task-level memory value or a container-level memory value. This field is optional and any value can be used. If a task-level memory value is specified, the container-level memory value is optional. For more information regarding container-level memory and memory reservation, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html\">ContainerDefinition</a>.<br />If your tasks runs on FARGATElong, this field is required. You must use one of the following values. The value you choose determines your range of valid values for the <code>cpu</code> parameter.<br />+  512 (0.5 GB), 1024 (1 GB), 2048 (2 GB) - Available <code>cpu</code> values: 256 (.25 vCPU)<br />+  1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB) - Available <code>cpu</code> values: 512 (.5 vCPU)<br />+  2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB) - Available <code>cpu</code> values: 1024 (1 vCPU)<br />+  Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB) - Available <code>cpu</code> values: 2048 (2 vCPU)<br />+  Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB) - Available <code>cpu</code> values: 4096 (4 vCPU)<br />+  Between 16 GB and 60 GB in 4 GB increments - Available <code>cpu</code> values: 8192 (8 vCPU)<br />This option requires Linux platform <code>1.4.0</code> or later.<br />+  Between 32GB and 120 GB in 8 GB increments - Available <code>cpu</code> values: 16384 (16 vCPU)<br />This option requires Linux platform <code>1.4.0</code> or later.</details>"
  },
  {
    "name": "placement_constraints",
    "type": "array",
    "description": "<details><summary>An array of placement constraint objects to use for tasks.</summary>This parameter isn't supported for tasks run on FARGATElong.</details>",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": "The type of constraint. The <code>MemberOf</code> constraint restricts selection to be from a group of valid candidates."
      },
      {
        "name": "expression",
        "type": "string",
        "description": "A cluster query language expression to apply to the constraint. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html\">Cluster query language</a> in the <i>Amazon Elastic Container Service Developer Guide</i>."
      }
    ]
  },
  {
    "name": "cpu",
    "type": "string",
    "description": "<details><summary>The number of <code>cpu</code> units used by the task. If you use the EC2 launch type, this field is optional. Any value can be used. If you use the Fargate launch type, this field is required. You must use one of the following values. The value that you choose determines your range of valid values for the <code>memory</code> parameter.</summary>If you're using the EC2 launch type or the external launch type, this field is optional. Supported values are between <code>128</code> CPU units (<code>0.125</code> vCPUs) and <code>196608</code> CPU units (<code>192</code> vCPUs).<br />This field is required for Fargate. For information about the valid values, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#task_size\">Task size</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</details>"
  },
  {
    "name": "requires_compatibilities",
    "type": "array",
    "description": "The task launch types the task definition was validated against. The valid values are <code>EC2</code>, <code>FARGATE</code>, and <code>EXTERNAL</code>. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html\">Amazon ECS launch types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>."
  },
  {
    "name": "network_mode",
    "type": "string",
    "description": "<details><summary>The Docker networking mode to use for the containers in the task. The valid values are <code>none</code>, <code>bridge</code>, <code>awsvpc</code>, and <code>host</code>. If no network mode is specified, the default is <code>bridge</code>.</summary>For Amazon ECS tasks on Fargate, the <code>awsvpc</code> network mode is required. For Amazon ECS tasks on Amazon EC2 Linux instances, any network mode can be used. For Amazon ECS tasks on Amazon EC2 Windows instances, <code><default></code> or <code>awsvpc</code> can be used. If the network mode is set to <code>none</code>, you cannot specify port mappings in your container definitions, and the tasks containers do not have external connectivity. The <code>host</code> and <code>awsvpc</code> network modes offer the highest networking performance for containers because they use the EC2 network stack instead of the virtualized network stack provided by the <code>bridge</code> mode.<br />With the <code>host</code> and <code>awsvpc</code> network modes, exposed container ports are mapped directly to the corresponding host port (for the <code>host</code> network mode) or the attached elastic network interface port (for the <code>awsvpc</code> network mode), so you cannot take advantage of dynamic host port mappings.<br />When using the <code>host</code> network mode, you should not run containers using the root user (UID 0). It is considered best practice to use a non-root user.<br />If the network mode is <code>awsvpc</code>, the task is allocated an elastic network interface, and you must specify a <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_NetworkConfiguration.html\">NetworkConfiguration</a> value when you create a service or run a task with the task definition. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html\">Task Networking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.<br />If the network mode is <code>host</code>, you cannot run multiple instantiations of the same task on a single container instance when port mappings are used.</details>"
  },
  {
    "name": "pid_mode",
    "type": "string",
    "description": "<details><summary>The process namespace to use for the containers in the task. The valid values are <code>host</code> or <code>task</code>. On Fargate for Linux containers, the only valid value is <code>task</code>. For example, monitoring sidecars might need <code>pidMode</code> to access information about other containers running in the same task.</summary>If <code>host</code> is specified, all containers within the tasks that specified the <code>host</code> PID mode on the same container instance share the same process namespace with the host Amazon EC2 instance.<br />If <code>task</code> is specified, all containers within the specified task share the same process namespace.<br />If no value is specified, the default is a private namespace for each container.<br />If the <code>host</code> PID mode is used, there's a heightened risk of undesired process namespace exposure.<br />This parameter is not supported for Windows containers.<br />This parameter is only supported for tasks that are hosted on FARGATElong if the tasks are using platform version <code>1.4.0</code> or later (Linux). This isn't supported for Windows containers on Fargate.</details>"
  },
  {
    "name": "enable_fault_injection",
    "type": "boolean",
    "description": "Enables fault injection and allows for fault injection requests to be accepted from the task's containers. The default value is <code>false</code>."
  },
  {
    "name": "execution_role_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the task execution role that grants the Amazon ECS container agent permission to make AWS API calls on your behalf. For informationabout the required IAM roles for Amazon ECS, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security-ecs-iam-role-overview.html\">IAM roles for Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>."
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
        "description": "<details><summary>The CPU architecture.</summary>You can run your Linux tasks on an ARM-based platform by setting the value to <code>ARM64</code>. This option is available for tasks that run on Linux Amazon EC2 instance or Linux containers on Fargate.</details>"
      }
    ]
  },
  {
    "name": "proxy_configuration",
    "type": "object",
    "description": "<details><summary>The configuration details for the App Mesh proxy.</summary>Your Amazon ECS container instances require at least version 1.26.0 of the container agent and at least version 1.26.0-1 of the <code>ecs-init</code> package to use a proxy configuration. If your container instances are launched from the Amazon ECS optimized AMI version <code>20190301</code> or later, they contain the required versions of the container agent and <code>ecs-init</code>. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html\">Amazon ECS-optimized Linux AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</details>",
    "children": [
      {
        "name": "proxy_configuration_properties",
        "type": "array",
        "description": "<details><summary>The set of network configuration parameters to provide the Container Network Interface (CNI) plugin, specified as key-value pairs.</summary>+  <code>IgnoredUID</code> - (Required) The user ID (UID) of the proxy container as defined by the <code>user</code> parameter in a container definition. This is used to ensure the proxy ignores its own traffic. If <code>IgnoredGID</code> is specified, this field can be empty.<br />+  <code>IgnoredGID</code> - (Required) The group ID (GID) of the proxy container as defined by the <code>user</code> parameter in a container definition. This is used to ensure the proxy ignores its own traffic. If <code>IgnoredUID</code> is specified, this field can be empty.<br />+  <code>AppPorts</code> - (Required) The list of ports that the application uses. Network traffic to these ports is forwarded to the <code>ProxyIngressPort</code> and <code>ProxyEgressPort</code>.<br />+  <code>ProxyIngressPort</code> - (Required) Specifies the port that incoming traffic to the <code>AppPorts</code> is directed to.<br />+  <code>ProxyEgressPort</code> - (Required) Specifies the port that outgoing traffic from the <code>AppPorts</code> is directed to.<br />+  <code>EgressIgnoredPorts</code> - (Required) The egress traffic going to the specified ports is ignored and not redirected to the <code>ProxyEgressPort</code>. It can be an empty list.<br />+  <code>EgressIgnoredIPs</code> - (Required) The egress traffic going to the specified IP addresses is ignored and not redirected to the <code>ProxyEgressPort</code>. It can be an empty list.</details>",
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
        "description": "The proxy type. The only supported value is <code>APPMESH</code>."
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
    "description": "<details><summary>The list of data volume definitions for the task. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_data_volumes.html\">Using data volumes in tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</summary>The <code>host</code> and <code>sourcePath</code> parameters aren't supported for tasks run on FARGATElong.</details>",
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
            "description": "Determines whether to use encryption for Amazon EFS data in transit between the Amazon ECS host and the Amazon EFS server. Transit encryption must be turned on if Amazon EFS IAM authorization is used. If this parameter is omitted, the default value of <code>DISABLED</code> is used. For more information, see <a href=\"https://docs.aws.amazon.com/efs/latest/ug/encryption-in-transit.html\">Encrypting data in transit</a> in the <i>Amazon Elastic File System User Guide</i>."
          },
          {
            "name": "authorization_config",
            "type": "object",
            "description": "The authorization configuration details for the Amazon EFS file system.",
            "children": [
              {
                "name": "iam",
                "type": "string",
                "description": "Determines whether to use the Amazon ECS task role defined in a task definition when mounting the Amazon EFS file system. If it is turned on, transit encryption must be turned on in the <code>EFSVolumeConfiguration</code>. If this parameter is omitted, the default value of <code>DISABLED</code> is used. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html#efs-volume-accesspoints\">Using Amazon EFS access points</a> in the <i>Amazon Elastic Container Service Developer Guide</i>."
              },
              {
                "name": "access_point_id",
                "type": "string",
                "description": "The Amazon EFS access point ID to use. If an access point is specified, the root directory value specified in the <code>EFSVolumeConfiguration</code> must either be omitted or set to <code>/</code> which will enforce the path set on the EFS access point. If an access point is used, transit encryption must be on in the <code>EFSVolumeConfiguration</code>. For more information, see <a href=\"https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html\">Working with Amazon EFS access points</a> in the <i>Amazon Elastic File System User Guide</i>."
              }
            ]
          },
          {
            "name": "root_directory",
            "type": "string",
            "description": "<details><summary>The directory within the Amazon EFS file system to mount as the root directory inside the host. If this parameter is omitted, the root of the Amazon EFS volume will be used. Specifying <code>/</code> will have the same effect as omitting this parameter.</summary>If an EFS access point is specified in the <code>authorizationConfig</code>, the root directory parameter must either be omitted or set to <code>/</code> which will enforce the path set on the EFS access point.</details>"
          },
          {
            "name": "transit_encryption_port",
            "type": "integer",
            "description": "The port to use when sending encrypted data between the Amazon ECS host and the Amazon EFS server. If you do not specify a transit encryption port, it will use the port selection strategy that the Amazon EFS mount helper uses. For more information, see <a href=\"https://docs.aws.amazon.com/efs/latest/ug/efs-mount-helper.html\">EFS mount helper</a> in the <i>Amazon Elastic File System User Guide</i>."
          }
        ]
      },
      {
        "name": "host",
        "type": "object",
        "description": "<details><summary>This parameter is specified when you use bind mount host volumes. The contents of the <code>host</code> parameter determine whether your bind mount host volume persists on the host container instance and where it's stored. If the <code>host</code> parameter is empty, then the Docker daemon assigns a host path for your data volume. However, the data isn't guaranteed to persist after the containers that are associated with it stop running.</summary>Windows containers can mount whole directories on the same drive as <code>$env:ProgramData</code>. Windows containers can't mount directories on a different drive, and mount point can't be across drives. For example, you can mount <code>C:\\my\\path:C:\\my\\path</code> and <code>D:\\:D:\\</code>, but not <code>D:\\my\\path:C:\\my\\path</code> or <code>D:\\:C:\\my\\path</code>.</details>",
        "children": [
          {
            "name": "source_path",
            "type": "string",
            "description": "<details><summary>When the <code>host</code> parameter is used, specify a <code>sourcePath</code> to declare the path on the host container instance that's presented to the container. If this parameter is empty, then the Docker daemon has assigned a host path for you. If the <code>host</code> parameter contains a <code>sourcePath</code> file location, then the data volume persists at the specified location on the host container instance until you delete it manually. If the <code>sourcePath</code> value doesn't exist on the host container instance, the Docker daemon creates it. If the location does exist, the contents of the source path folder are exported.</summary>If you're using the Fargate launch type, the <code>sourcePath</code> parameter is not supported.</details>"
          }
        ]
      },
      {
        "name": "configured_at_launch",
        "type": "boolean",
        "description": "<details><summary>Indicates whether the volume should be configured at launch time. This is used to create Amazon EBS volumes for standalone tasks or tasks created as part of a service. Each task definition revision may only have one volume configured at launch in the volume configuration.</summary>To configure a volume at launch time, use this task definition revision and specify a <code>volumeConfigurations</code> object when calling the <code>CreateService</code>, <code>UpdateService</code>, <code>RunTask</code> or <code>StartTask</code> APIs.</details>"
      },
      {
        "name": "docker_volume_configuration",
        "type": "object",
        "description": "<details><summary>This parameter is specified when you use Docker volumes.</summary>Windows containers only support the use of the <code>local</code> driver. To use bind mounts, specify the <code>host</code> parameter instead.<br />Docker volumes aren't supported by tasks run on FARGATElong.</details>",
        "children": [
          {
            "name": "driver_opts",
            "type": "object",
            "description": "A map of Docker driver-specific options passed through. This parameter maps to <code>DriverOpts</code> in the docker create-volume command and the <code>xxopt</code> option to docker volume create."
          },
          {
            "name": "scope",
            "type": "string",
            "description": "The scope for the Docker volume that determines its lifecycle. Docker volumes that are scoped to a <code>task</code> are automatically provisioned when the task starts and destroyed when the task stops. Docker volumes that are scoped as <code>shared</code> persist after the task stops."
          },
          {
            "name": "autoprovision",
            "type": "boolean",
            "description": "<details><summary>If this value is <code>true</code>, the Docker volume is created if it doesn't already exist.</summary>This field is only used if the <code>scope</code> is <code>shared</code>.</details>"
          },
          {
            "name": "driver",
            "type": "string",
            "description": "The Docker volume driver to use. The driver value must match the driver name provided by Docker because it is used for task placement. If the driver was installed using the Docker plugin CLI, use <code>docker plugin ls</code> to retrieve the driver name from your container instance. If the driver was installed using another method, use Docker plugin discovery to retrieve the driver name. This parameter maps to <code>Driver</code> in the docker container create command and the <code>xxdriver</code> option to docker volume create."
          },
          {
            "name": "labels",
            "type": "object",
            "description": "Custom metadata to add to your Docker volume. This parameter maps to <code>Labels</code> in the docker container create command and the <code>xxlabel</code> option to docker volume create."
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
                "description": "A fully qualified domain name hosted by an [](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html) Managed Microsoft AD (Active Directory) or self-hosted AD on Amazon EC2."
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
        "description": "<details><summary>The name of the volume. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.</summary>When using a volume configured at launch, the <code>name</code> is required and must also be specified as the volume name in the <code>ServiceVolumeConfiguration</code> or <code>TaskVolumeConfiguration</code> parameter when creating your service or standalone task.<br />For all other types of volumes, this name is referenced in the <code>sourceVolume</code> parameter of the <code>mountPoints</code> object in the container definition.<br />When a volume is using the <code>efsVolumeConfiguration</code>, the name is required.</details>"
      }
    ]
  },
  {
    "name": "container_definitions",
    "type": "array",
    "description": "A list of container definitions in JSON format that describe the different containers that make up your task. For more information about container definition parameters and defaults, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html\">Amazon ECS Task Definitions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.",
    "children": [
      {
        "name": "user",
        "type": "string",
        "description": "<details><summary>The user to use inside the container. This parameter maps to <code>User</code> in the docker container create command and the <code>--user</code> option to docker run.</summary>When running tasks using the <code>host</code> network mode, don't run containers using the root user (UID 0). We recommend using a non-root user for better security.<br />You can specify the <code>user</code> using the following formats. If specifying a UID or GID, you must specify it as a positive integer.<br />+   <code>user</code><br />+   <code>user:group</code><br />+   <code>uid</code><br />+   <code>uid:gid</code><br />+   <code>user:gid</code><br />+   <code>uid:group</code><br />This parameter is not supported for Windows containers.</details>"
      },
      {
        "name": "secrets",
        "type": "array",
        "description": "The secrets to pass to the container. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html\">Specifying Sensitive Data</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.",
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
        "name": "memory",
        "type": "integer",
        "description": "<details><summary>The amount (in MiB) of memory to present to the container. If your container attempts to exceed the memory specified here, the container is killed. The total amount of memory reserved for all containers within a task must be lower than the task <code>memory</code> value, if one is specified. This parameter maps to <code>Memory</code> in the <a href=\"https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--memory</code> option to <a href=\"https://docs.aws.amazon.com/https://docs.docker.com/engine/reference/run/#security-configuration\">docker run</a>.</summary>If using the Fargate launch type, this parameter is optional.<br />If using the EC2 launch type, you must specify either a task-level memory value or a container-level memory value. If you specify both a container-level <code>memory</code> and <code>memoryReservation</code> value, <code>memory</code> must be greater than <code>memoryReservation</code>. If you specify <code>memoryReservation</code>, then that value is subtracted from the available memory resources for the container instance where the container is placed. Otherwise, the value of <code>memory</code> is used.<br />The Docker 20.10.0 or later daemon reserves a minimum of 6 MiB of memory for a container, so you should not specify fewer than 6 MiB of memory for your containers.<br />The Docker 19.03.13-ce or earlier daemon reserves a minimum of 4 MiB of memory for a container, so you should not specify fewer than 4 MiB of memory for your containers.</details>"
      },
      {
        "name": "privileged",
        "type": "boolean",
        "description": "<details><summary>When this parameter is true, the container is given elevated privileges on the host container instance (similar to the <code>root</code> user). This parameter maps to <code>Privileged</code> in the docker container create command and the <code>--privileged</code> option to docker run</summary>This parameter is not supported for Windows containers or tasks run on FARGATElong.</details>"
      },
      {
        "name": "health_check",
        "type": "object",
        "description": "The container health check command and associated configuration parameters for the container. This parameter maps to <code>HealthCheck</code> in the docker container create command and the <code>HEALTHCHECK</code> parameter of docker run.",
        "children": [
          {
            "name": "command",
            "type": "array",
            "description": "<details><summary>A string array representing the command that the container runs to determine if it is healthy. The string array must start with <code>CMD</code> to run the command arguments directly, or <code>CMD-SHELL</code> to run the command with the container's default shell.</summary>When you use the AWS Management Console JSON panel, the CLIlong, or the APIs, enclose the list of commands in double quotes and brackets.<br /><code>[ \"CMD-SHELL\", \"curl -f http://localhost/ || exit 1\" ]</code><br />You don't include the double quotes and brackets when you use the AWS Management Console.<br /><code>CMD-SHELL, curl -f http://localhost/ || exit 1</code><br />An exit code of 0 indicates success, and non-zero exit code indicates failure. For more information, see <code>HealthCheck</code> in the docker container create command.</details>"
          },
          {
            "name": "timeout",
            "type": "integer",
            "description": "The time period in seconds to wait for a health check to succeed before it is considered a failure. You may specify between 2 and 60 seconds. The default value is 5. This value applies only when you specify a <code>command</code>."
          },
          {
            "name": "retries",
            "type": "integer",
            "description": "The number of times to retry a failed health check before the container is considered unhealthy. You may specify between 1 and 10 retries. The default value is 3. This value applies only when you specify a <code>command</code>."
          },
          {
            "name": "interval",
            "type": "integer",
            "description": "The time period in seconds between each health check execution. You may specify between 5 and 300 seconds. The default value is 30 seconds. This value applies only when you specify a <code>command</code>."
          },
          {
            "name": "start_period",
            "type": "integer",
            "description": "<details><summary>The optional grace period to provide containers time to bootstrap before failed health checks count towards the maximum number of retries. You can specify between 0 and 300 seconds. By default, the <code>startPeriod</code> is off. This value applies only when you specify a <code>command</code>.</summary>If a health check succeeds within the <code>startPeriod</code>, then the container is considered healthy and any subsequent failures count toward the maximum number of retries.</details>"
          }
        ]
      },
      {
        "name": "start_timeout",
        "type": "integer",
        "description": "<details><summary>Time duration (in seconds) to wait before giving up on resolving dependencies for a container. For example, you specify two containers in a task definition with containerA having a dependency on containerB reaching a <code>COMPLETE</code>, <code>SUCCESS</code>, or <code>HEALTHY</code> status. If a <code>startTimeout</code> value is specified for containerB and it doesn't reach the desired status within that time then containerA gives up and not start. This results in the task transitioning to a <code>STOPPED</code> state.</summary>When the <code>ECS_CONTAINER_START_TIMEOUT</code> container agent configuration variable is used, it's enforced independently from this start timeout value.<br />For tasks using the Fargate launch type, the task or service requires the following platforms:<br />+  Linux platform version <code>1.3.0</code> or later.<br />+  Windows platform version <code>1.0.0</code> or later.<br />For tasks using the EC2 launch type, your container instances require at least version <code>1.26.0</code> of the container agent to use a container start timeout value. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html\">Updating the Amazon ECS Container Agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. If you're using an Amazon ECS-optimized Linux AMI, your instance needs at least version <code>1.26.0-1</code> of the <code>ecs-init</code> package. If your container instances are launched from version <code>20190301</code> or later, then they contain the required versions of the container agent and <code>ecs-init</code>. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html\">Amazon ECS-optimized Linux AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.<br />The valid values for Fargate are 2-120 seconds.</details>"
      },
      {
        "name": "volumes_from",
        "type": "array",
        "description": "Data volumes to mount from another container. This parameter maps to <code>VolumesFrom</code> in the docker container create command and the <code>--volumes-from</code> option to docker run.",
        "children": [
          {
            "name": "read_only",
            "type": "boolean",
            "description": "If this value is <code>true</code>, the container has read-only access to the volume. If this value is <code>false</code>, then the container can write to the volume. The default value is <code>false</code>."
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
        "description": "<details><summary>The number of <code>cpu</code> units reserved for the container. This parameter maps to <code>CpuShares</code> in the docker container create commandand the <code>--cpu-shares</code> option to docker run.</summary>This field is optional for tasks using the Fargate launch type, and the only requirement is that the total amount of CPU reserved for all containers within a task be lower than the task-level <code>cpu</code> value.<br />You can determine the number of CPU units that are available per EC2 instance type by multiplying the vCPUs listed for that instance type on the <a href=\"https://docs.aws.amazon.com/ec2/instance-types/\">Amazon EC2 Instances</a> detail page by 1,024.<br />Linux containers share unallocated CPU units with other containers on the container instance with the same ratio as their allocated amount. For example, if you run a single-container task on a single-core instance type with 512 CPU units specified for that container, and that's the only task running on the container instance, that container could use the full 1,024 CPU unit share at any given time. However, if you launched another copy of the same task on that container instance, each task is guaranteed a minimum of 512 CPU units when needed. Moreover, each container could float to higher CPU usage if the other container was not using it. If both tasks were 100% active all of the time, they would be limited to 512 CPU units.<br />On Linux container instances, the Docker daemon on the container instance uses the CPU value to calculate the relative CPU share ratios for running containers. The minimum valid CPU share value that the Linux kernel allows is 2, and the maximum valid CPU share value that the Linux kernel allows is 262144. However, the CPU parameter isn't required, and you can use CPU values below 2 or above 262144 in your container definitions. For CPU values below 2 (including null) or above 262144, the behavior varies based on your Amazon ECS container agent version:<br />+  <i>Agent versions less than or equal to 1.1.0:</i> Null and zero CPU values are passed to Docker as 0, which Docker then converts to 1,024 CPU shares. CPU values of 1 are passed to Docker as 1, which the Linux kernel converts to two CPU shares.<br />+  <i>Agent versions greater than or equal to 1.2.0:</i> Null, zero, and CPU values of 1 are passed to Docker as 2.<br />+  <i>Agent versions greater than or equal to 1.84.0:</i> CPU values greater than 256 vCPU are passed to Docker as 256, which is equivalent to 262144 CPU shares.<br />On Windows container instances, the CPU limit is enforced as an absolute limit, or a quota. Windows containers only have access to the specified amount of CPU that's described in the task definition. A null or zero CPU value is passed to Docker as <code>0</code>, which Windows interprets as 1% of one CPU.</details>"
      },
      {
        "name": "entry_point",
        "type": "array",
        "description": "<details><summary>Early versions of the Amazon ECS container agent don't properly handle <code>entryPoint</code> parameters. If you have problems using <code>entryPoint</code>, update your container agent or enter your commands and arguments as <code>command</code> array items instead.</summary>The entry point that's passed to the container. This parameter maps to <code>Entrypoint</code> in the docker container create command and the <code>--entrypoint</code> option to docker run.</details>"
      },
      {
        "name": "dns_servers",
        "type": "array",
        "description": "<details><summary>A list of DNS servers that are presented to the container. This parameter maps to <code>Dns</code> in the docker container create command and the <code>--dns</code> option to docker run.</summary>This parameter is not supported for Windows containers.</details>"
      },
      {
        "name": "readonly_root_filesystem",
        "type": "boolean",
        "description": "<details><summary>When this parameter is true, the container is given read-only access to its root file system. This parameter maps to <code>ReadonlyRootfs</code> in the docker container create command and the <code>--read-only</code> option to docker run.</summary>This parameter is not supported for Windows containers.</details>"
      },
      {
        "name": "image",
        "type": "string",
        "description": "<details><summary>The image used to start a container. This string is passed directly to the Docker daemon. By default, images in the Docker Hub registry are available. Other repositories are specified with either <code>repository-url/image:tag</code> or <code>repository-url/image@digest</code>. For images using tags (repository-url/image:tag), up to 255 characters total are allowed, including letters (uppercase and lowercase), numbers, hyphens, underscores, colons, periods, forward slashes, and number signs (#). For images using digests (repository-url/image@digest), the 255 character limit applies only to the repository URL and image name (everything before the @ sign). The only supported hash function is sha256, and the hash value after sha256: must be exactly 64 characters (only letters A-F, a-f, and numbers 0-9 are allowed). This parameter maps to <code>Image</code> in the docker container create command and the <code>IMAGE</code> parameter of docker run.</summary>+  When a new task starts, the Amazon ECS container agent pulls the latest version of the specified image and tag for the container to use. However, subsequent updates to a repository image aren't propagated to already running tasks.<br />+  Images in Amazon ECR repositories can be specified by either using the full <code>registry/repository:tag</code> or <code>registry/repository@digest</code>. For example, <code>012345678910.dkr.ecr.<region-name>.amazonaws.com/<repository-name>:latest</code> or <code>012345678910.dkr.ecr.<region-name>.amazonaws.com/<repository-name>@sha256:94afd1f2e64d908bc90dbca0035a5b567EXAMPLE</code>.<br />+  Images in official repositories on Docker Hub use a single name (for example, <code>ubuntu</code> or <code>mongo</code>).<br />+  Images in other repositories on Docker Hub are qualified with an organization name (for example, <code>amazon/amazon-ecs-agent</code>).<br />+  Images in other online repositories are qualified further by a domain name (for example, <code>quay.io/assemblyline/ubuntu</code>).</details>"
      },
      {
        "name": "essential",
        "type": "boolean",
        "description": "<details><summary>If the <code>essential</code> parameter of a container is marked as <code>true</code>, and that container fails or stops for any reason, all other containers that are part of the task are stopped. If the <code>essential</code> parameter of a container is marked as <code>false</code>, its failure doesn't affect the rest of the containers in a task. If this parameter is omitted, a container is assumed to be essential.</summary>All tasks must have at least one essential container. If you have an application that's composed of multiple containers, group containers that are used for a common purpose into components, and separate the different components into multiple task definitions. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/application_architecture.html\">Application Architecture</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</details>"
      },
      {
        "name": "log_configuration",
        "type": "object",
        "description": "<details><summary>The log configuration specification for the container.</summary>This parameter maps to <code>LogConfig</code> in the docker Create a container command and the <code>--log-driver</code> option to docker run. By default, containers use the same logging driver that the Docker daemon uses. However, the container may use a different logging driver than the Docker daemon by specifying a log driver with this parameter in the container definition. To use a different logging driver for a container, the log system must be configured properly on the container instance (or on a different log server for remote logging options). For more information on the options for different supported log drivers, see <a href=\"https://docs.aws.amazon.com/https://docs.docker.com/engine/admin/logging/overview/\">Configure logging drivers</a> in the Docker documentation.<br />Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon (shown in the <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_LogConfiguration.html\">LogConfiguration</a> data type). Additional log drivers may be available in future releases of the Amazon ECS container agent.<br />This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version --format '&#123;&#123;.Server.APIVersion&#125;&#125;'</code><br />The Amazon ECS container agent running on a container instance must register the logging drivers available on that instance with the <code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment variable before containers placed on that instance can use these log configuration options. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html\">Container Agent Configuration</a> in the <i>Developer Guide</i>.</details>",
        "children": [
          {
            "name": "secret_options",
            "type": "array",
            "description": "The secrets to pass to the log configuration. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html\">Specifying sensitive data</a> in the <i>Amazon Elastic Container Service Developer Guide</i>."
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
            "description": "<details><summary>The value for the specified resource type.</summary>When the type is <code>GPU</code>, the value is the number of physical <code>GPUs</code> the Amazon ECS container agent reserves for the container. The number of GPUs that's reserved for all containers in a task can't exceed the number of available GPUs on the container instance that the task is launched on.<br />When the type is <code>InferenceAccelerator</code>, the <code>value</code> matches the <code>deviceName</code> for an <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_InferenceAccelerator.html\">InferenceAccelerator</a> specified in a task definition.</details>"
          }
        ]
      },
      {
        "name": "environment_files",
        "type": "array",
        "description": "<details><summary>A list of files containing the environment variables to pass to a container. This parameter maps to the <code>--env-file</code> option to docker run.</summary>You can specify up to ten environment files. The file must have a <code>.env</code> file extension. Each line in an environment file contains an environment variable in <code>VARIABLE=VALUE</code> format. Lines beginning with <code>#</code> are treated as comments and are ignored.<br />If there are environment variables specified using the <code>environment</code> parameter in a container definition, they take precedence over the variables contained within an environment file. If multiple environment files are specified that contain the same variable, they're processed from the top down. We recommend that you use unique variable names. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/taskdef-envfiles.html\">Specifying Environment Variables</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</details>",
        "children": [
          {
            "name": "type",
            "type": "string",
            "description": "The file type to use. Environment files are objects in Amazon S3. The only supported value is <code>s3</code>."
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
        "description": "The name of a container. If you're linking multiple containers together in a task definition, the <code>name</code> of one container can be entered in the <code>links</code> of another container to connect the containers. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed. This parameter maps to <code>name</code> in the docker container create command and the <code>--name</code> option to docker run."
      },
      {
        "name": "firelens_configuration",
        "type": "object",
        "description": "The FireLens configuration for the container. This is used to specify and configure a log router for container logs. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html\">Custom Log Routing</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.",
        "children": [
          {
            "name": "options",
            "type": "object",
            "description": "<details><summary>The options to use when configuring the log router. This field is optional and can be used to add additional metadata, such as the task, task definition, cluster, and container instance details to the log event.</summary>If specified, valid option keys are:<br />+  <code>enable-ecs-log-metadata</code>, which can be <code>true</code> or <code>false</code><br />+  <code>config-file-type</code>, which can be <code>s3</code> or <code>file</code><br />+  <code>config-file-value</code>, which is either an S3 ARN or a file path</details>"
          },
          {
            "name": "type",
            "type": "string",
            "description": "The log router to use. The valid values are <code>fluentd</code> or <code>fluentbit</code>."
          }
        ]
      },
      {
        "name": "docker_security_options",
        "type": "array",
        "description": "<details><summary>A list of strings to provide custom configuration for multiple security systems. This field isn't valid for containers in tasks using the Fargate launch type.</summary>For Linux tasks on EC2, this parameter can be used to reference custom labels for SELinux and AppArmor multi-level security systems.<br />For any tasks on EC2, this parameter can be used to reference a credential spec file that configures a container for Active Directory authentication. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/windows-gmsa.html\">Using gMSAs for Windows Containers</a> and <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/linux-gmsa.html\">Using gMSAs for Linux Containers</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.<br />This parameter maps to <code>SecurityOpt</code> in the docker container create command and the <code>--security-opt</code> option to docker run.<br />The Amazon ECS container agent running on a container instance must register with the <code>ECS_SELINUX_CAPABLE=true</code> or <code>ECS_APPARMOR_CAPABLE=true</code> environment variables before containers placed on that instance can use these security options. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html\">Amazon ECS Container Agent Configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.<br />Valid values: \"no-new-privileges\" | \"apparmor:PROFILE\" | \"label:value\" | \"credentialspec:CredentialSpecFilePath\"</details>"
      },
      {
        "name": "system_controls",
        "type": "array",
        "description": "A list of namespaced kernel parameters to set in the container. This parameter maps to <code>Sysctls</code> in the docker container create command and the <code>--sysctl</code> option to docker run. For example, you can configure <code>net.ipv4.tcp_keepalive_time</code> setting to maintain longer lived connections.",
        "children": [
          {
            "name": "value",
            "type": "string",
            "description": "<details><summary>The namespaced kernel parameter to set a <code>value</code> for.</summary>Valid IPC namespace values: <code>\"kernel.msgmax\" | \"kernel.msgmnb\" | \"kernel.msgmni\" | \"kernel.sem\" | \"kernel.shmall\" | \"kernel.shmmax\" | \"kernel.shmmni\" | \"kernel.shm_rmid_forced\"</code>, and <code>Sysctls</code> that start with <code>\"fs.mqueue.*\"</code><br />Valid network namespace values: <code>Sysctls</code> that start with <code>\"net.<i>\"</code>. Only namespaced <code>Sysctls</code> that exist within the container starting with \"net.</i> are accepted.<br />All of these values are supported by Fargate.</details>"
          },
          {
            "name": "namespace",
            "type": "string",
            "description": "The namespaced kernel parameter to set a <code>value</code> for."
          }
        ]
      },
      {
        "name": "interactive",
        "type": "boolean",
        "description": "When this parameter is <code>true</code>, you can deploy containerized applications that require <code>stdin</code> or a <code>tty</code> to be allocated. This parameter maps to <code>OpenStdin</code> in the docker container create command and the <code>--interactive</code> option to docker run."
      },
      {
        "name": "dns_search_domains",
        "type": "array",
        "description": "<details><summary>A list of DNS search domains that are presented to the container. This parameter maps to <code>DnsSearch</code> in the docker container create command and the <code>--dns-search</code> option to docker run.</summary>This parameter is not supported for Windows containers.</details>"
      },
      {
        "name": "credential_specs",
        "type": "array",
        "description": "<details><summary>A list of ARNs in SSM or Amazon S3 to a credential spec (<code>CredSpec</code>) file that configures the container for Active Directory authentication. We recommend that you use this parameter instead of the <code>dockerSecurityOptions</code>. The maximum number of ARNs is 1.</summary>There are two formats for each ARN.<br />+ credentialspecdomainless:MyARN You use credentialspecdomainless:MyARN to provide a CredSpec with an additional section for a secret in . You provide the login credentials to the domain in the secret. Each task that runs on any container instance can join different domains. You can use this format without joining the container instance to a domain. + credentialspec:MyARN You use credentialspec:MyARN to provide a CredSpec for a single domain. You must join the container instance to the domain before you start any tasks that use this task definition.<br />In both formats, replace <code>MyARN</code> with the ARN in SSM or Amazon S3.<br />If you provide a <code>credentialspecdomainless:MyARN</code>, the <code>credspec</code> must provide a ARN in ASMlong for a secret containing the username, password, and the domain to connect to. For better security, the instance isn't joined to the domain for domainless authentication. Other applications on the instance can't use the domainless credentials. You can use this parameter to run tasks on the same instance, even it the tasks need to join different domains. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/windows-gmsa.html\">Using gMSAs for Windows Containers</a> and <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/linux-gmsa.html\">Using gMSAs for Linux Containers</a>.</details>"
      },
      {
        "name": "ulimits",
        "type": "array",
        "description": "<details><summary>A list of <code>ulimits</code> to set in the container. This parameter maps to <code>Ulimits</code> in the <a href=\"https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--ulimit</code> option to <a href=\"https://docs.aws.amazon.com/https://docs.docker.com/engine/reference/run/\">docker run</a>. Valid naming values are displayed in the <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_Ulimit.html\">Ulimit</a> data type. This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version --format '&#123;&#123;.Server.APIVersion&#125;&#125;'</code></summary>This parameter is not supported for Windows containers.</details>",
        "children": [
          {
            "name": "soft_limit",
            "type": "integer",
            "description": "The soft limit for the <code>ulimit</code> type. The value can be specified in bytes, seconds, or as a count, depending on the <code>type</code> of the <code>ulimit</code>."
          },
          {
            "name": "hard_limit",
            "type": "integer",
            "description": "The hard limit for the <code>ulimit</code> type. The value can be specified in bytes, seconds, or as a count, depending on the <code>type</code> of the <code>ulimit</code>."
          },
          {
            "name": "name",
            "type": "string",
            "description": "The <code>type</code> of the <code>ulimit</code>."
          }
        ]
      },
      {
        "name": "stop_timeout",
        "type": "integer",
        "description": "<details><summary>Time duration (in seconds) to wait before the container is forcefully killed if it doesn't exit normally on its own.</summary>For tasks using the Fargate launch type, the task or service requires the following platforms:<br />+  Linux platform version <code>1.3.0</code> or later.<br />+  Windows platform version <code>1.0.0</code> or later.<br />For tasks that use the Fargate launch type, the max stop timeout value is 120 seconds and if the parameter is not specified, the default value of 30 seconds is used.<br />For tasks that use the EC2 launch type, if the <code>stopTimeout</code> parameter isn't specified, the value set for the Amazon ECS container agent configuration variable <code>ECS_CONTAINER_STOP_TIMEOUT</code> is used. If neither the <code>stopTimeout</code> parameter or the <code>ECS_CONTAINER_STOP_TIMEOUT</code> agent configuration variable are set, then the default values of 30 seconds for Linux containers and 30 seconds on Windows containers are used. Your container instances require at least version 1.26.0 of the container agent to use a container stop timeout value. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html\">Updating the Amazon ECS Container Agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. If you're using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the <code>ecs-init</code> package. If your container instances are launched from version <code>20190301</code> or later, then they contain the required versions of the container agent and <code>ecs-init</code>. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html\">Amazon ECS-optimized Linux AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.<br />The valid values for Fargate are 2-120 seconds.</details>"
      },
      {
        "name": "working_directory",
        "type": "string",
        "description": "The working directory to run commands inside the container in. This parameter maps to <code>WorkingDir</code> in the docker container create command and the <code>--workdir</code> option to docker run."
      },
      {
        "name": "memory_reservation",
        "type": "integer",
        "description": "<details><summary>The soft limit (in MiB) of memory to reserve for the container. When system memory is under heavy contention, Docker attempts to keep the container memory to this soft limit. However, your container can consume more memory when it needs to, up to either the hard limit specified with the <code>memory</code> parameter (if applicable), or all of the available memory on the container instance, whichever comes first. This parameter maps to <code>MemoryReservation</code> in the docker container create command and the <code>--memory-reservation</code> option to docker run.</summary>If a task-level memory value is not specified, you must specify a non-zero integer for one or both of <code>memory</code> or <code>memoryReservation</code> in a container definition. If you specify both, <code>memory</code> must be greater than <code>memoryReservation</code>. If you specify <code>memoryReservation</code>, then that value is subtracted from the available memory resources for the container instance where the container is placed. Otherwise, the value of <code>memory</code> is used.<br />For example, if your container normally uses 128 MiB of memory, but occasionally bursts to 256 MiB of memory for short periods of time, you can set a <code>memoryReservation</code> of 128 MiB, and a <code>memory</code> hard limit of 300 MiB. This configuration would allow the container to only reserve 128 MiB of memory from the remaining resources on the container instance, but also allow the container to consume more memory resources when needed.<br />The Docker 20.10.0 or later daemon reserves a minimum of 6 MiB of memory for a container. So, don't specify less than 6 MiB of memory for your containers.<br />The Docker 19.03.13-ce or earlier daemon reserves a minimum of 4 MiB of memory for a container. So, don't specify less than 4 MiB of memory for your containers.</details>"
      },
      {
        "name": "repository_credentials",
        "type": "object",
        "description": "The private repository authentication credentials to use.",
        "children": [
          {
            "name": "credentials_parameter",
            "type": "string",
            "description": "<details><summary>The Amazon Resource Name (ARN) of the secret containing the private repository credentials.</summary>When you use the Amazon ECS API, CLI, or AWS SDK, if the secret exists in the same Region as the task that you're launching then you can use either the full ARN or the name of the secret. When you use the AWS Management Console, you must specify the full ARN of the secret.</details>"
          }
        ]
      },
      {
        "name": "extra_hosts",
        "type": "array",
        "description": "<details><summary>A list of hostnames and IP address mappings to append to the <code>/etc/hosts</code> file on the container. This parameter maps to <code>ExtraHosts</code> in the docker container create command and the <code>--add-host</code> option to docker run.</summary>This parameter isn't supported for Windows containers or tasks that use the <code>awsvpc</code> network mode.</details>",
        "children": [
          {
            "name": "hostname",
            "type": "string",
            "description": "The hostname to use in the <code>/etc/hosts</code> entry."
          },
          {
            "name": "ip_address",
            "type": "string",
            "description": "The IP address to use in the <code>/etc/hosts</code> entry."
          }
        ]
      },
      {
        "name": "hostname",
        "type": "string",
        "description": "<details><summary>The hostname to use for your container. This parameter maps to <code>Hostname</code> in the docker container create command and the <code>--hostname</code> option to docker run.</summary>The <code>hostname</code> parameter is not supported if you're using the <code>awsvpc</code> network mode.</details>"
      },
      {
        "name": "linux_parameters",
        "type": "object",
        "description": "<details><summary>Linux-specific modifications that are applied to the container, such as Linux kernel capabilities. For more information see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_KernelCapabilities.html\">KernelCapabilities</a>.</summary>This parameter is not supported for Windows containers.</details>",
        "children": [
          {
            "name": "capabilities",
            "type": "object",
            "description": "<details><summary>The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.</summary>For tasks that use the Fargate launch type, <code>capabilities</code> is supported for all platform versions but the <code>add</code> parameter is only supported if using platform version 1.4.0 or later.</details>",
            "children": [
              {
                "name": "add",
                "type": "array",
                "description": "<details><summary>The Linux capabilities for the container that have been added to the default configuration provided by Docker. This parameter maps to <code>CapAdd</code> in the docker container create command and the <code>--cap-add</code> option to docker run.</summary>Tasks launched on FARGATElong only support adding the <code>SYS_PTRACE</code> kernel capability.<br />Valid values: <code>\"ALL\" | \"AUDIT_CONTROL\" | \"AUDIT_WRITE\" | \"BLOCK_SUSPEND\" | \"CHOWN\" | \"DAC_OVERRIDE\" | \"DAC_READ_SEARCH\" | \"FOWNER\" | \"FSETID\" | \"IPC_LOCK\" | \"IPC_OWNER\" | \"KILL\" | \"LEASE\" | \"LINUX_IMMUTABLE\" | \"MAC_ADMIN\" | \"MAC_OVERRIDE\" | \"MKNOD\" | \"NET_ADMIN\" | \"NET_BIND_SERVICE\" | \"NET_BROADCAST\" | \"NET_RAW\" | \"SETFCAP\" | \"SETGID\" | \"SETPCAP\" | \"SETUID\" | \"SYS_ADMIN\" | \"SYS_BOOT\" | \"SYS_CHROOT\" | \"SYS_MODULE\" | \"SYS_NICE\" | \"SYS_PACCT\" | \"SYS_PTRACE\" | \"SYS_RAWIO\" | \"SYS_RESOURCE\" | \"SYS_TIME\" | \"SYS_TTY_CONFIG\" | \"SYSLOG\" | \"WAKE_ALARM\"</code></details>"
              },
              {
                "name": "drop",
                "type": "array",
                "description": "<details><summary>The Linux capabilities for the container that have been removed from the default configuration provided by Docker. This parameter maps to <code>CapDrop</code> in the docker container create command and the <code>--cap-drop</code> option to docker run.</summary>Valid values: <code>\"ALL\" | \"AUDIT_CONTROL\" | \"AUDIT_WRITE\" | \"BLOCK_SUSPEND\" | \"CHOWN\" | \"DAC_OVERRIDE\" | \"DAC_READ_SEARCH\" | \"FOWNER\" | \"FSETID\" | \"IPC_LOCK\" | \"IPC_OWNER\" | \"KILL\" | \"LEASE\" | \"LINUX_IMMUTABLE\" | \"MAC_ADMIN\" | \"MAC_OVERRIDE\" | \"MKNOD\" | \"NET_ADMIN\" | \"NET_BIND_SERVICE\" | \"NET_BROADCAST\" | \"NET_RAW\" | \"SETFCAP\" | \"SETGID\" | \"SETPCAP\" | \"SETUID\" | \"SYS_ADMIN\" | \"SYS_BOOT\" | \"SYS_CHROOT\" | \"SYS_MODULE\" | \"SYS_NICE\" | \"SYS_PACCT\" | \"SYS_PTRACE\" | \"SYS_RAWIO\" | \"SYS_RESOURCE\" | \"SYS_TIME\" | \"SYS_TTY_CONFIG\" | \"SYSLOG\" | \"WAKE_ALARM\"</code></details>"
              }
            ]
          },
          {
            "name": "swappiness",
            "type": "integer",
            "description": "<details><summary>This allows you to tune a container's memory swappiness behavior. A <code>swappiness</code> value of <code>0</code> will cause swapping to not happen unless absolutely necessary. A <code>swappiness</code> value of <code>100</code> will cause pages to be swapped very aggressively. Accepted values are whole numbers between <code>0</code> and <code>100</code>. If the <code>swappiness</code> parameter is not specified, a default value of <code>60</code> is used. If a value is not specified for <code>maxSwap</code> then this parameter is ignored. This parameter maps to the <code>--memory-swappiness</code> option to docker run.</summary>If you're using tasks that use the Fargate launch type, the <code>swappiness</code> parameter isn't supported.<br />If you're using tasks on Amazon Linux 2023 the <code>swappiness</code> parameter isn't supported.</details>"
          },
          {
            "name": "tmpfs",
            "type": "array",
            "description": "<details><summary>The container path, mount options, and size (in MiB) of the tmpfs mount. This parameter maps to the <code>--tmpfs</code> option to docker run.</summary>If you're using tasks that use the Fargate launch type, the <code>tmpfs</code> parameter isn't supported.</details>",
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
                "description": "<details><summary>The list of tmpfs volume mount options.</summary>Valid values: <code>\"defaults\" | \"ro\" | \"rw\" | \"suid\" | \"nosuid\" | \"dev\" | \"nodev\" | \"exec\" | \"noexec\" | \"sync\" | \"async\" | \"dirsync\" | \"remount\" | \"mand\" | \"nomand\" | \"atime\" | \"noatime\" | \"diratime\" | \"nodiratime\" | \"bind\" | \"rbind\" | \"unbindable\" | \"runbindable\" | \"private\" | \"rprivate\" | \"shared\" | \"rshared\" | \"slave\" | \"rslave\" | \"relatime\" | \"norelatime\" | \"strictatime\" | \"nostrictatime\" | \"mode\" | \"uid\" | \"gid\" | \"nr_inodes\" | \"nr_blocks\" | \"mpol\"</code></details>"
              }
            ]
          },
          {
            "name": "shared_memory_size",
            "type": "integer",
            "description": "<details><summary>The value for the size (in MiB) of the <code>/dev/shm</code> volume. This parameter maps to the <code>--shm-size</code> option to docker run.</summary>If you are using tasks that use the Fargate launch type, the <code>sharedMemorySize</code> parameter is not supported.</details>"
          },
          {
            "name": "devices",
            "type": "array",
            "description": "<details><summary>Any host devices to expose to the container. This parameter maps to <code>Devices</code> in the docker container create command and the <code>--device</code> option to docker run.</summary>If you're using tasks that use the Fargate launch type, the <code>devices</code> parameter isn't supported.</details>",
            "children": [
              {
                "name": "host_path",
                "type": "string",
                "description": "The path for the device on the host container instance."
              },
              {
                "name": "permissions",
                "type": "array",
                "description": "The explicit permissions to provide to the container for the device. By default, the container has permissions for <code>read</code>, <code>write</code>, and <code>mknod</code> for the device."
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
            "description": "Run an <code>init</code> process inside the container that forwards signals and reaps processes. This parameter maps to the <code>--init</code> option to docker run. This parameter requires version 1.25 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version --format '&#123;&#123;.Server.APIVersion&#125;&#125;'</code>"
          },
          {
            "name": "max_swap",
            "type": "integer",
            "description": "<details><summary>The total amount of swap memory (in MiB) a container can use. This parameter will be translated to the <code>--memory-swap</code> option to docker run where the value would be the sum of the container memory plus the <code>maxSwap</code> value.</summary>If a <code>maxSwap</code> value of <code>0</code> is specified, the container will not use swap. Accepted values are <code>0</code> or any positive integer. If the <code>maxSwap</code> parameter is omitted, the container will use the swap configuration for the container instance it is running on. A <code>maxSwap</code> value must be set for the <code>swappiness</code> parameter to be used.<br />If you're using tasks that use the Fargate launch type, the <code>maxSwap</code> parameter isn't supported.<br />If you're using tasks on Amazon Linux 2023 the <code>swappiness</code> parameter isn't supported.</details>"
          }
        ]
      },
      {
        "name": "version_consistency",
        "type": "string",
        "description": "Specifies whether Amazon ECS will resolve the container image tag provided in the container definition to an image digest. By default, the value is <code>enabled</code>. If you set the value for a container as <code>disabled</code>, Amazon ECS will not resolve the provided container image tag to a digest and will use the original image URI specified in the container definition for deployment. For more information about container image resolution, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html#deployment-container-image-stability\">Container image resolution</a> in the <i>Amazon ECS Developer Guide</i>."
      },
      {
        "name": "restart_policy",
        "type": "object",
        "description": "The restart policy for a container. When you set up a restart policy, Amazon ECS can restart the container without needing to replace the task. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-restart-policy.html\">Restart individual containers in Amazon ECS tasks with container restart policies</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.",
        "children": [
          {
            "name": "ignored_exit_codes",
            "type": "array",
            "description": "A list of exit codes that Amazon ECS will ignore and not attempt a restart on. You can specify a maximum of 50 container exit codes. By default, Amazon ECS does not ignore any exit codes."
          },
          {
            "name": "restart_attempt_period",
            "type": "integer",
            "description": "A period of time (in seconds) that the container must run for before a restart can be attempted. A container can be restarted only once every <code>restartAttemptPeriod</code> seconds. If a container isn't able to run for this time period and exits early, it will not be restarted. You can set a minimum <code>restartAttemptPeriod</code> of 60 seconds and a maximum <code>restartAttemptPeriod</code> of 1800 seconds. By default, a container must run for 300 seconds before it can be restarted."
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
        "description": "<details><summary>When this parameter is true, networking is off within the container. This parameter maps to <code>NetworkDisabled</code> in the docker container create command.</summary>This parameter is not supported for Windows containers.</details>"
      },
      {
        "name": "pseudo_terminal",
        "type": "boolean",
        "description": "When this parameter is <code>true</code>, a TTY is allocated. This parameter maps to <code>Tty</code> in the docker container create command and the <code>--tty</code> option to docker run."
      },
      {
        "name": "mount_points",
        "type": "array",
        "description": "<details><summary>The mount points for data volumes in your container.</summary>This parameter maps to <code>Volumes</code> in the docker container create command and the <code>--volume</code> option to docker run.<br />Windows containers can mount whole directories on the same drive as <code>$env:ProgramData</code>. Windows containers can't mount directories on a different drive, and mount point can't be across drives.</details>",
        "children": [
          {
            "name": "read_only",
            "type": "boolean",
            "description": "If this value is <code>true</code>, the container has read-only access to the volume. If this value is <code>false</code>, then the container can write to the volume. The default value is <code>false</code>."
          },
          {
            "name": "source_volume",
            "type": "string",
            "description": "The name of the volume to mount. Must be a volume name referenced in the <code>name</code> parameter of task definition <code>volume</code>."
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
        "description": "<details><summary>The dependencies defined for container startup and shutdown. A container can contain multiple dependencies. When a dependency is defined for container startup, for container shutdown it is reversed.</summary>For tasks using the EC2 launch type, the container instances require at least version 1.26.0 of the container agent to turn on container dependencies. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html\">Updating the Amazon ECS Container Agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. If you're using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the <code>ecs-init</code> package. If your container instances are launched from version <code>20190301</code> or later, then they contain the required versions of the container agent and <code>ecs-init</code>. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html\">Amazon ECS-optimized Linux AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.<br />For tasks using the Fargate launch type, the task or service requires the following platforms:<br />+  Linux platform version <code>1.3.0</code> or later.<br />+  Windows platform version <code>1.0.0</code> or later.<br />If the task definition is used in a blue/green deployment that uses <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-bluegreendeploymentconfiguration.html\">AWS::CodeDeploy::DeploymentGroup BlueGreenDeploymentConfiguration</a>, the <code>dependsOn</code> parameter is not supported.</details>",
        "children": [
          {
            "name": "condition",
            "type": "string",
            "description": "<details><summary>The dependency condition of the container. The following are the available conditions and their behavior:</summary>+  <code>START</code> - This condition emulates the behavior of links and volumes today. It validates that a dependent container is started before permitting other containers to start.<br />+  <code>COMPLETE</code> - This condition validates that a dependent container runs to completion (exits) before permitting other containers to start. This can be useful for nonessential containers that run a script and then exit. This condition can't be set on an essential container.<br />+  <code>SUCCESS</code> - This condition is the same as <code>COMPLETE</code>, but it also requires that the container exits with a <code>zero</code> status. This condition can't be set on an essential container.<br />+  <code>HEALTHY</code> - This condition validates that the dependent container passes its Docker health check before permitting other containers to start. This requires that the dependent container has health checks configured. This condition is confirmed only at task startup.</details>"
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
        "description": "A key/value map of labels to add to the container. This parameter maps to <code>Labels</code> in the docker container create command and the <code>--label</code> option to docker run. This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version --format '&#123;&#123;.Server.APIVersion&#125;&#125;'</code>"
      },
      {
        "name": "port_mappings",
        "type": "array",
        "description": "<details><summary>The list of port mappings for the container. Port mappings allow containers to access ports on the host container instance to send or receive traffic.</summary>For task definitions that use the <code>awsvpc</code> network mode, you should only specify the <code>containerPort</code>. The <code>hostPort</code> can be left blank or it must be the same value as the <code>containerPort</code>.<br />Port mappings on Windows use the <code>NetNAT</code> gateway address rather than <code>localhost</code>. There is no loopback for port mappings on Windows, so you cannot access a container's mapped port from the host itself.<br />This parameter maps to <code>PortBindings</code> in the <a href=\"https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate\">Create a container</a> section of the <a href=\"https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/\">Docker Remote API</a> and the <code>--publish</code> option to <a href=\"https://docs.aws.amazon.com/https://docs.docker.com/engine/reference/run/\">docker run</a>. If the network mode of a task definition is set to <code>none</code>, then you can't specify port mappings. If the network mode of a task definition is set to <code>host</code>, then host ports must either be undefined or they must match the container port in the port mapping.<br />After a task reaches the <code>RUNNING</code> status, manual and automatic host and container port assignments are visible in the <i>Network Bindings</i> section of a container description for a selected task in the Amazon ECS console. The assignments are also visible in the <code>networkBindings</code> section <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html\">DescribeTasks</a> responses.</details>",
        "children": [
          {
            "name": "app_protocol",
            "type": "string",
            "description": "<details><summary>The application protocol that's used for the port mapping. This parameter only applies to Service Connect. We recommend that you set this parameter to be consistent with the protocol that your application uses. If you set this parameter, Amazon ECS adds protocol-specific connection handling to the Service Connect proxy. If you set this parameter, Amazon ECS adds protocol-specific telemetry in the Amazon ECS console and CloudWatch.</summary>If you don't set a value for this parameter, then TCP is used. However, Amazon ECS doesn't add protocol-specific telemetry for TCP.<br /><code>appProtocol</code> is immutable in a Service Connect service. Updating this field requires a service deletion and redeployment.<br />Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html\">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</details>"
          },
          {
            "name": "container_port_range",
            "type": "string",
            "description": "<details><summary>The port number range on the container that's bound to the dynamically mapped host port range.</summary>The following rules apply when you specify a <code>containerPortRange</code>:<br />+  You must use either the <code>bridge</code> network mode or the <code>awsvpc</code> network mode.<br />+  This parameter is available for both the EC2 and FARGATElong launch types.<br />+  This parameter is available for both the Linux and Windows operating systems.<br />+  The container instance must have at least version 1.67.0 of the container agent and at least version 1.67.0-1 of the <code>ecs-init</code> package<br />+  You can specify a maximum of 100 port ranges per container.<br />+  You do not specify a <code>hostPortRange</code>. The value of the <code>hostPortRange</code> is set as follows:<br />+  For containers in a task with the <code>awsvpc</code> network mode, the <code>hostPortRange</code> is set to the same value as the <code>containerPortRange</code>. This is a static mapping strategy.<br />+  For containers in a task with the <code>bridge</code> network mode, the Amazon ECS agent finds open host ports from the default ephemeral range and passes it to docker to bind them to the container ports.<br />+  The <code>containerPortRange</code> valid values are between 1 and 65535.<br />+  A port can only be included in one port mapping per container.<br />+  You cannot specify overlapping port ranges.<br />+  The first port in the range must be less than last port in the range.<br />+  Docker recommends that you turn off the docker-proxy in the Docker daemon config file when you have a large number of ports.<br />For more information, see <a href=\"https://docs.aws.amazon.com/https://github.com/moby/moby/issues/11185\">Issue #11185</a> on the Github website.<br />For information about how to turn off the docker-proxy in the Docker daemon config file, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/bootstrap_container_instance.html#bootstrap_docker_daemon\">Docker daemon</a> in the <i>Amazon ECS Developer Guide</i>.<br />You can call <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html\">DescribeTasks</a> to view the <code>hostPortRange</code> which are the host ports that are bound to the container ports.</details>"
          },
          {
            "name": "host_port",
            "type": "integer",
            "description": "<details><summary>The port number on the container instance to reserve for your container.</summary>If you specify a <code>containerPortRange</code>, leave this field empty and the value of the <code>hostPort</code> is set as follows:<br />+  For containers in a task with the <code>awsvpc</code> network mode, the <code>hostPort</code> is set to the same value as the <code>containerPort</code>. This is a static mapping strategy.<br />+  For containers in a task with the <code>bridge</code> network mode, the Amazon ECS agent finds open ports on the host and automatically binds them to the container ports. This is a dynamic mapping strategy.<br />If you use containers in a task with the <code>awsvpc</code> or <code>host</code> network mode, the <code>hostPort</code> can either be left blank or set to the same value as the <code>containerPort</code>.<br />If you use containers in a task with the <code>bridge</code> network mode, you can specify a non-reserved host port for your container port mapping, or you can omit the <code>hostPort</code> (or set it to <code>0</code>) while specifying a <code>containerPort</code> and your container automatically receives a port in the ephemeral port range for your container instance operating system and Docker version.<br />The default ephemeral port range for Docker version 1.6.0 and later is listed on the instance under <code>/proc/sys/net/ipv4/ip_local_port_range</code>. If this kernel parameter is unavailable, the default ephemeral port range from 49153 through 65535 (Linux) or 49152 through 65535 (Windows) is used. Do not attempt to specify a host port in the ephemeral port range as these are reserved for automatic assignment. In general, ports below 32768 are outside of the ephemeral port range.<br />The default reserved ports are 22 for SSH, the Docker ports 2375 and 2376, and the Amazon ECS container agent ports 51678-51680. Any host port that was previously specified in a running task is also reserved while the task is running. That is, after a task stops, the host port is released. The current reserved ports are displayed in the <code>remainingResources</code> of <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeContainerInstances.html\">DescribeContainerInstances</a> output. A container instance can have up to 100 reserved ports at a time. This number includes the default reserved ports. Automatically assigned ports aren't included in the 100 reserved ports quota.</details>"
          },
          {
            "name": "container_port",
            "type": "integer",
            "description": "<details><summary>The port number on the container that's bound to the user-specified or automatically assigned host port.</summary>If you use containers in a task with the <code>awsvpc</code> or <code>host</code> network mode, specify the exposed ports using <code>containerPort</code>.<br />If you use containers in a task with the <code>bridge</code> network mode and you specify a container port and not a host port, your container automatically receives a host port in the ephemeral port range. For more information, see <code>hostPort</code>. Port mappings that are automatically assigned in this way do not count toward the 100 reserved ports limit of a container instance.</details>"
          },
          {
            "name": "protocol",
            "type": "string",
            "description": "The protocol used for the port mapping. Valid values are <code>tcp</code> and <code>udp</code>. The default is <code>tcp</code>. <code>protocol</code> is immutable in a Service Connect service. Updating this field requires a service deletion and redeployment."
          },
          {
            "name": "name",
            "type": "string",
            "description": "The name that's used for the port mapping. This parameter is the name that you use in the <code>serviceConnectConfiguration</code> and the <code>vpcLatticeConfigurations</code> of a service. The name can include up to 64 characters. The characters can include lowercase letters, numbers, underscores (_), and hyphens (-). The name can't start with a hyphen."
          }
        ]
      },
      {
        "name": "command",
        "type": "array",
        "description": "The command that's passed to the container. This parameter maps to <code>Cmd</code> in the docker container create command and the <code>COMMAND</code> parameter to docker run. If there are multiple arguments, each argument is a separated string in the array."
      },
      {
        "name": "environment",
        "type": "array",
        "description": "<details><summary>The environment variables to pass to a container. This parameter maps to <code>Env</code> in the docker container create command and the <code>--env</code> option to docker run.</summary>We don't recommend that you use plaintext environment variables for sensitive information, such as credential data.</details>",
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
        "description": "<details><summary>The <code>links</code> parameter allows containers to communicate with each other without the need for port mappings. This parameter is only supported if the network mode of a task definition is <code>bridge</code>. The <code>name:internalName</code> construct is analogous to <code>name:alias</code> in Docker links. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.. This parameter maps to <code>Links</code> in the docker container create command and the <code>--link</code> option to docker run.</summary>This parameter is not supported for Windows containers.<br />Containers that are collocated on a single container instance may be able to communicate with each other without requiring links or host port mappings. Network isolation is achieved on the container instance using security groups and VPC settings.</details>"
      }
    ]
  },
  {
    "name": "family",
    "type": "string",
    "description": "<details><summary>The name of a family that this task definition is registered to. Up to 255 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed.</summary>A family groups multiple versions of a task definition. Amazon ECS gives the first task definition that you registered to a family a revision number of 1. Amazon ECS gives sequential revision numbers to each task definition that you add.<br />To use revision numbers when you update a task definition, specify this property. If you don't specify a value, CFNlong generates a new task definition each time that you update it.</details>"
  },
  {
    "name": "ephemeral_storage",
    "type": "object",
    "description": "The ephemeral storage settings to use for tasks run with the task definition.",
    "children": [
      {
        "name": "size_in_gi_b",
        "type": "integer",
        "description": "The total amount, in GiB, of ephemeral storage to set for the task. The minimum supported value is <code>21</code> GiB and the maximum supported value is <code>200</code> GiB."
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "<details><summary>The metadata that you apply to the task definition to help you categorize and organize them. Each tag consists of a key and an optional value. You define both of them.</summary>The following basic restrictions apply to tags:<br />+  Maximum number of tags per resource - 50<br />+  For each resource, each tag key must be unique, and each tag key can have only one value.<br />+  Maximum key length - 128 Unicode characters in UTF-8<br />+  Maximum value length - 256 Unicode characters in UTF-8<br />+  If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.<br />+  Tag keys and values are case-sensitive.<br />+  Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.</details>",
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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ task_definition_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>task_definitions</code> in a region.
```sql
SELECT
  region,
  task_definition_arn
FROM awscc.ecs.task_definitions_list_only
WHERE
  region = '{{ region }}';
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
  '{{ task_role_arn }}',
  '{{ ipc_mode }}',
  '{{ inference_accelerators }}',
  '{{ memory }}',
  '{{ placement_constraints }}',
  '{{ cpu }}',
  '{{ requires_compatibilities }}',
  '{{ network_mode }}',
  '{{ pid_mode }}',
  '{{ enable_fault_injection }}',
  '{{ execution_role_arn }}',
  '{{ runtime_platform }}',
  '{{ proxy_configuration }}',
  '{{ volumes }}',
  '{{ container_definitions }}',
  '{{ family }}',
  '{{ ephemeral_storage }}',
  '{{ tags }}',
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
  '{{ task_role_arn }}',
  '{{ ipc_mode }}',
  '{{ inference_accelerators }}',
  '{{ memory }}',
  '{{ placement_constraints }}',
  '{{ cpu }}',
  '{{ requires_compatibilities }}',
  '{{ network_mode }}',
  '{{ pid_mode }}',
  '{{ enable_fault_injection }}',
  '{{ execution_role_arn }}',
  '{{ runtime_platform }}',
  '{{ proxy_configuration }}',
  '{{ volumes }}',
  '{{ container_definitions }}',
  '{{ family }}',
  '{{ ephemeral_storage }}',
  '{{ tags }}',
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
  - name: task_definition
    props:
      - name: task_role_arn
        value: '{{ task_role_arn }}'
      - name: ipc_mode
        value: '{{ ipc_mode }}'
      - name: inference_accelerators
        value:
          - device_type: '{{ device_type }}'
            device_name: '{{ device_name }}'
      - name: memory
        value: '{{ memory }}'
      - name: placement_constraints
        value:
          - type: '{{ type }}'
            expression: '{{ expression }}'
      - name: cpu
        value: '{{ cpu }}'
      - name: requires_compatibilities
        value:
          - '{{ requires_compatibilities[0] }}'
      - name: network_mode
        value: '{{ network_mode }}'
      - name: pid_mode
        value: '{{ pid_mode }}'
      - name: enable_fault_injection
        value: '{{ enable_fault_injection }}'
      - name: execution_role_arn
        value: '{{ execution_role_arn }}'
      - name: runtime_platform
        value:
          operating_system_family: '{{ operating_system_family }}'
          cpu_architecture: '{{ cpu_architecture }}'
      - name: proxy_configuration
        value:
          proxy_configuration_properties:
            - value: '{{ value }}'
              name: '{{ name }}'
          type: '{{ type }}'
          container_name: '{{ container_name }}'
      - name: volumes
        value:
          - e_fs_volume_configuration:
              filesystem_id: '{{ filesystem_id }}'
              transit_encryption: '{{ transit_encryption }}'
              authorization_config:
                iam: '{{ iam }}'
                access_point_id: '{{ access_point_id }}'
              root_directory: '{{ root_directory }}'
              transit_encryption_port: '{{ transit_encryption_port }}'
            host:
              source_path: '{{ source_path }}'
            configured_at_launch: '{{ configured_at_launch }}'
            docker_volume_configuration:
              driver_opts: {}
              scope: '{{ scope }}'
              autoprovision: '{{ autoprovision }}'
              driver: '{{ driver }}'
              labels: {}
            f_sx_windows_file_server_volume_configuration:
              authorization_config:
                credentials_parameter: '{{ credentials_parameter }}'
                domain: '{{ domain }}'
              file_system_id: '{{ file_system_id }}'
              root_directory: '{{ root_directory }}'
            name: '{{ name }}'
      - name: container_definitions
        value:
          - user: '{{ user }}'
            secrets:
              - value_from: '{{ value_from }}'
                name: '{{ name }}'
            memory: '{{ memory }}'
            privileged: '{{ privileged }}'
            health_check:
              command:
                - '{{ command[0] }}'
              timeout: '{{ timeout }}'
              retries: '{{ retries }}'
              interval: '{{ interval }}'
              start_period: '{{ start_period }}'
            start_timeout: '{{ start_timeout }}'
            volumes_from:
              - read_only: '{{ read_only }}'
                source_container: '{{ source_container }}'
            cpu: '{{ cpu }}'
            entry_point:
              - '{{ entry_point[0] }}'
            dns_servers:
              - '{{ dns_servers[0] }}'
            readonly_root_filesystem: '{{ readonly_root_filesystem }}'
            image: '{{ image }}'
            essential: '{{ essential }}'
            log_configuration:
              secret_options:
                - null
              options: {}
              log_driver: '{{ log_driver }}'
            resource_requirements:
              - type: '{{ type }}'
                value: '{{ value }}'
            environment_files:
              - type: '{{ type }}'
                value: '{{ value }}'
            name: '{{ name }}'
            firelens_configuration:
              options: {}
              type: '{{ type }}'
            docker_security_options:
              - '{{ docker_security_options[0] }}'
            system_controls:
              - value: '{{ value }}'
                namespace: '{{ namespace }}'
            interactive: '{{ interactive }}'
            dns_search_domains:
              - '{{ dns_search_domains[0] }}'
            credential_specs:
              - '{{ credential_specs[0] }}'
            ulimits:
              - soft_limit: '{{ soft_limit }}'
                hard_limit: '{{ hard_limit }}'
                name: '{{ name }}'
            stop_timeout: '{{ stop_timeout }}'
            working_directory: '{{ working_directory }}'
            memory_reservation: '{{ memory_reservation }}'
            repository_credentials:
              credentials_parameter: '{{ credentials_parameter }}'
            extra_hosts:
              - hostname: '{{ hostname }}'
                ip_address: '{{ ip_address }}'
            hostname: '{{ hostname }}'
            linux_parameters:
              capabilities:
                add:
                  - '{{ add[0] }}'
                drop:
                  - '{{ drop[0] }}'
              swappiness: '{{ swappiness }}'
              tmpfs:
                - size: '{{ size }}'
                  container_path: '{{ container_path }}'
                  mount_options:
                    - '{{ mount_options[0] }}'
              shared_memory_size: '{{ shared_memory_size }}'
              devices:
                - host_path: '{{ host_path }}'
                  permissions:
                    - '{{ permissions[0] }}'
                  container_path: '{{ container_path }}'
              init_process_enabled: '{{ init_process_enabled }}'
              max_swap: '{{ max_swap }}'
            version_consistency: '{{ version_consistency }}'
            restart_policy:
              ignored_exit_codes:
                - '{{ ignored_exit_codes[0] }}'
              restart_attempt_period: '{{ restart_attempt_period }}'
              enabled: '{{ enabled }}'
            disable_networking: '{{ disable_networking }}'
            pseudo_terminal: '{{ pseudo_terminal }}'
            mount_points:
              - read_only: '{{ read_only }}'
                source_volume: '{{ source_volume }}'
                container_path: '{{ container_path }}'
            depends_on:
              - condition: '{{ condition }}'
                container_name: '{{ container_name }}'
            docker_labels: {}
            port_mappings:
              - app_protocol: '{{ app_protocol }}'
                container_port_range: '{{ container_port_range }}'
                host_port: '{{ host_port }}'
                container_port: '{{ container_port }}'
                protocol: '{{ protocol }}'
                name: '{{ name }}'
            command:
              - '{{ command[0] }}'
            environment:
              - null
            links:
              - '{{ links[0] }}'
      - name: family
        value: '{{ family }}'
      - name: ephemeral_storage
        value:
          size_in_gi_b: '{{ size_in_gi_b }}'
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'`}</CodeBlock>

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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ task_definition_arn }}'
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
DELETE FROM awscc.ecs.task_definitions
WHERE
  Identifier = '{{ task_definition_arn }}' AND
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