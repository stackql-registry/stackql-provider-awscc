---
title: task_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - task_sets
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

Creates, updates, deletes or gets a <code>task_set</code> resource or lists <code>task_sets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>task_sets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Create a task set in the specified cluster and service. This is used when a service uses the EXTERNAL deployment controller type. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.htmlin the Amazon Elastic Container Service Developer Guide.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ecs.task_sets" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "platform_version",
    "type": "string",
    "description": "The platform version that the tasks in the task set should use. A platform version is specified only for tasks using the Fargate launch type. If one isn't specified, the LATEST platform version is used by default."
  },
  {
    "name": "external_id",
    "type": "string",
    "description": "An optional non-unique tag that identifies this task set in external systems. If the task set is associated with a service discovery registry, the tasks in this task set will have the ECS&#95;TASK&#95;SET&#95;EXTERNAL&#95;ID AWS Cloud Map attribute set to the provided value."
  },
  {
    "name": "cluster",
    "type": "string",
    "description": "The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the task set in."
  },
  {
    "name": "load_balancers",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "target_group_arn",
        "type": "string",
        "description": "The full Amazon Resource Name (ARN) of the Elastic Load Balancing target group or groups associated with a service or task set. A target group ARN is only specified when using an Application Load Balancer or Network Load Balancer. If you are using a Classic Load Balancer this should be omitted. For services using the ECS deployment controller, you can specify one or multiple target groups. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/register-multiple-targetgroups.html in the Amazon Elastic Container Service Developer Guide. For services using the CODE&#95;DEPLOY deployment controller, you are required to define two target groups for the load balancer. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-bluegreen.html in the Amazon Elastic Container Service Developer Guide. If your service's task definition uses the awsvpc network mode (which is required for the Fargate launch type), you must choose ip as the target type, not instance, when creating your target groups because tasks that use the awsvpc network mode are associated with an elastic network interface, not an Amazon EC2 instance."
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
    "name": "service",
    "type": "string",
    "description": "The short name or full Amazon Resource Name (ARN) of the service to create the task set in."
  },
  {
    "name": "scale",
    "type": "object",
    "description": "A floating-point percentage of the desired number of tasks to place and keep running in the task set.",
    "children": [
      {
        "name": "value",
        "type": "number",
        "description": "The value, specified as a percent total of a service's desiredCount, to scale the task set. Accepted values are numbers between 0 and 100."
      },
      {
        "name": "unit",
        "type": "string",
        "description": "The unit of measure for the scale value."
      }
    ]
  },
  {
    "name": "service_registries",
    "type": "array",
    "description": "The details of the service discovery registries to assign to this task set. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html.",
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
        "description": "The Amazon Resource Name (ARN) of the service registry. The currently supported service registry is AWS Cloud Map. For more information, see https://docs.aws.amazon.com/cloud-map/latest/api/API&#95;CreateService.html"
      }
    ]
  },
  {
    "name": "capacity_provider_strategy",
    "type": "array",
    "description": "",
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
    "description": "The launch type that new tasks in the task set will use. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch&#95;types.html in the Amazon Elastic Container Service Developer Guide."
  },
  {
    "name": "task_definition",
    "type": "string",
    "description": "The short name or full Amazon Resource Name (ARN) of the task definition for the tasks in the task set to use."
  },
  {
    "name": "network_configuration",
    "type": "object",
    "description": "An object representing the network configuration for a task or service.",
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
    "name": "id",
    "type": "string",
    "description": "The ID of the task set."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html"><code>AWS::ECS::TaskSet</code></a>.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="create_resource" /></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Cluster, Service, TaskDefinition, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>task_set</code>.
```sql
SELECT
region,
platform_version,
external_id,
cluster,
load_balancers,
service,
scale,
service_registries,
capacity_provider_strategy,
launch_type,
task_definition,
network_configuration,
id,
tags
FROM awscc.ecs.task_sets
WHERE region = 'us-east-1' AND Identifier = '<Cluster>|<Service>|<Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>task_set</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ecs.task_sets (
 Cluster,
 Service,
 TaskDefinition,
 region
)
SELECT 
'{{ Cluster }}',
 '{{ Service }}',
 '{{ TaskDefinition }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ecs.task_sets (
 PlatformVersion,
 ExternalId,
 Cluster,
 LoadBalancers,
 Service,
 Scale,
 ServiceRegistries,
 CapacityProviderStrategy,
 LaunchType,
 TaskDefinition,
 NetworkConfiguration,
 Tags,
 region
)
SELECT 
 '{{ PlatformVersion }}',
 '{{ ExternalId }}',
 '{{ Cluster }}',
 '{{ LoadBalancers }}',
 '{{ Service }}',
 '{{ Scale }}',
 '{{ ServiceRegistries }}',
 '{{ CapacityProviderStrategy }}',
 '{{ LaunchType }}',
 '{{ TaskDefinition }}',
 '{{ NetworkConfiguration }}',
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
  - name: task_set
    props:
      - name: PlatformVersion
        value: '{{ PlatformVersion }}'
      - name: ExternalId
        value: '{{ ExternalId }}'
      - name: Cluster
        value: '{{ Cluster }}'
      - name: LoadBalancers
        value:
          - TargetGroupArn: '{{ TargetGroupArn }}'
            ContainerName: '{{ ContainerName }}'
            ContainerPort: '{{ ContainerPort }}'
      - name: Service
        value: '{{ Service }}'
      - name: Scale
        value:
          Value: null
          Unit: '{{ Unit }}'
      - name: ServiceRegistries
        value:
          - ContainerName: '{{ ContainerName }}'
            Port: '{{ Port }}'
            ContainerPort: '{{ ContainerPort }}'
            RegistryArn: '{{ RegistryArn }}'
      - name: CapacityProviderStrategy
        value:
          - CapacityProvider: '{{ CapacityProvider }}'
            Base: '{{ Base }}'
            Weight: '{{ Weight }}'
      - name: LaunchType
        value: '{{ LaunchType }}'
      - name: TaskDefinition
        value: '{{ TaskDefinition }}'
      - name: NetworkConfiguration
        value:
          AwsVpcConfiguration:
            SecurityGroups:
              - '{{ SecurityGroups[0] }}'
            Subnets:
              - '{{ Subnets[0] }}'
            AssignPublicIp: '{{ AssignPublicIp }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.ecs.task_sets
SET PatchDocument = string('{{ {
    "Scale": scale,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Cluster>|<Service>|<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ecs.task_sets
WHERE Identifier = '<Cluster|Service|Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>task_sets</code> resource, the following permissions are required:

### Read
```json
ecs:DescribeTaskSets
```

### Create
```json
ecs:CreateTaskSet,
ecs:DescribeTaskSets,
ecs:TagResource
```

### Update
```json
ecs:DescribeTaskSets,
ecs:TagResource,
ecs:UntagResource,
ecs:UpdateTaskSet
```

### Delete
```json
ecs:DeleteTaskSet,
ecs:DescribeTaskSets
```
