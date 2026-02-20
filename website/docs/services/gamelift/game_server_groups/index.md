---
title: game_server_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - game_server_groups
  - gamelift
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

Creates, updates, deletes or gets a <code>game_server_group</code> resource or lists <code>game_server_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>game_server_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::GameLift::GameServerGroup resource creates an Amazon GameLift (GameLift) GameServerGroup.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.gamelift.game_server_groups" /></td></tr>
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
    "name": "auto_scaling_group_arn",
    "type": "string",
    "description": "A generated unique ID for the EC2 Auto Scaling group that is associated with this game server group."
  },
  {
    "name": "auto_scaling_policy",
    "type": "object",
    "description": "Configuration settings to define a scaling policy for the Auto Scaling group that is optimized for game hosting. Updating this game server group property will not take effect for the created EC2 Auto Scaling group, please update the EC2 Auto Scaling group directly after creating the resource.",
    "children": [
      {
        "name": "estimated_instance_warmup",
        "type": "number",
        "description": "Length of time, in seconds, it takes for a new instance to start new game server processes and register with GameLift FleetIQ."
      },
      {
        "name": "target_tracking_configuration",
        "type": "object",
        "description": "Settings for a target-based scaling policy applied to Auto Scaling group.",
        "children": [
          {
            "name": "target_value",
            "type": "number",
            "description": "Desired value to use with a game server group target-based scaling policy."
          }
        ]
      }
    ]
  },
  {
    "name": "balancing_strategy",
    "type": "string",
    "description": "The fallback balancing method to use for the game server group when Spot Instances in a Region become unavailable or are not viable for game hosting."
  },
  {
    "name": "delete_option",
    "type": "string",
    "description": "The type of delete to perform."
  },
  {
    "name": "game_server_group_arn",
    "type": "string",
    "description": "A generated unique ID for the game server group."
  },
  {
    "name": "game_server_group_name",
    "type": "string",
    "description": "An identifier for the new game server group."
  },
  {
    "name": "game_server_protection_policy",
    "type": "string",
    "description": "A flag that indicates whether instances in the game server group are protected from early termination."
  },
  {
    "name": "instance_definitions",
    "type": "array",
    "description": "A set of EC2 instance types to use when creating instances in the group.",
    "children": [
      {
        "name": "instance_type",
        "type": "string",
        "description": "An EC2 instance type designation."
      },
      {
        "name": "weighted_capacity",
        "type": "string",
        "description": "Instance weighting that indicates how much this instance type contributes to the total capacity of a game server group."
      }
    ]
  },
  {
    "name": "launch_template",
    "type": "object",
    "description": "The EC2 launch template that contains configuration settings and game server code to be deployed to all instances in the game server group. Updating this game server group property will not take effect for the created EC2 Auto Scaling group, please update the EC2 Auto Scaling group directly after creating the resource.",
    "children": [
      {
        "name": "launch_template_id",
        "type": "string",
        "description": "A unique identifier for an existing EC2 launch template."
      },
      {
        "name": "launch_template_name",
        "type": "string",
        "description": "A readable identifier for an existing EC2 launch template."
      },
      {
        "name": "version",
        "type": "string",
        "description": "The version of the EC2 launch template to use."
      }
    ]
  },
  {
    "name": "max_size",
    "type": "number",
    "description": "The maximum number of instances allowed in the EC2 Auto Scaling group. Updating this game server group property will not take effect for the created EC2 Auto Scaling group, please update the EC2 Auto Scaling group directly after creating the resource."
  },
  {
    "name": "min_size",
    "type": "number",
    "description": "The minimum number of instances allowed in the EC2 Auto Scaling group. Updating this game server group property will not take effect for the created EC2 Auto Scaling group, please update the EC2 Auto Scaling group directly after creating the resource."
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for an IAM role that allows Amazon GameLift to access your EC2 Auto Scaling groups."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of labels to assign to the new game server group resource. Updating game server group tags with CloudFormation will not take effect. Please update this property using AWS GameLift APIs instead.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length."
      }
    ]
  },
  {
    "name": "vpc_subnets",
    "type": "array",
    "description": "A list of virtual private cloud (VPC) subnets to use with instances in the game server group. Updating this game server group property will not take effect for the created EC2 Auto Scaling group, please update the EC2 Auto Scaling group directly after creating the resource."
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
    "name": "game_server_group_arn",
    "type": "string",
    "description": "A generated unique ID for the game server group."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html"><code>AWS::GameLift::GameServerGroup</code></a>.

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
    <td><code>game_server_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="GameServerGroupName, InstanceDefinitions, RoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>game_server_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>game_server_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>game_server_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>game_server_groups</code></td>
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

Gets all properties from an individual <code>game_server_group</code>.
```sql
SELECT
region,
auto_scaling_group_arn,
auto_scaling_policy,
balancing_strategy,
delete_option,
game_server_group_arn,
game_server_group_name,
game_server_protection_policy,
instance_definitions,
launch_template,
max_size,
min_size,
role_arn,
tags,
vpc_subnets
FROM awscc.gamelift.game_server_groups
WHERE region = 'us-east-1' AND Identifier = '<GameServerGroupArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>game_server_groups</code> in a region.
```sql
SELECT
region,
game_server_group_arn
FROM awscc.gamelift.game_server_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>game_server_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.gamelift.game_server_groups (
 GameServerGroupName,
 InstanceDefinitions,
 RoleArn,
 region
)
SELECT 
'{{ GameServerGroupName }}',
 '{{ InstanceDefinitions }}',
 '{{ RoleArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.gamelift.game_server_groups (
 AutoScalingPolicy,
 BalancingStrategy,
 DeleteOption,
 GameServerGroupName,
 GameServerProtectionPolicy,
 InstanceDefinitions,
 LaunchTemplate,
 MaxSize,
 MinSize,
 RoleArn,
 Tags,
 VpcSubnets,
 region
)
SELECT 
 '{{ AutoScalingPolicy }}',
 '{{ BalancingStrategy }}',
 '{{ DeleteOption }}',
 '{{ GameServerGroupName }}',
 '{{ GameServerProtectionPolicy }}',
 '{{ InstanceDefinitions }}',
 '{{ LaunchTemplate }}',
 '{{ MaxSize }}',
 '{{ MinSize }}',
 '{{ RoleArn }}',
 '{{ Tags }}',
 '{{ VpcSubnets }}',
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
  - name: game_server_group
    props:
      - name: AutoScalingPolicy
        value:
          EstimatedInstanceWarmup: null
          TargetTrackingConfiguration:
            TargetValue: null
      - name: BalancingStrategy
        value: '{{ BalancingStrategy }}'
      - name: DeleteOption
        value: '{{ DeleteOption }}'
      - name: GameServerGroupName
        value: '{{ GameServerGroupName }}'
      - name: GameServerProtectionPolicy
        value: '{{ GameServerProtectionPolicy }}'
      - name: InstanceDefinitions
        value:
          - InstanceType: '{{ InstanceType }}'
            WeightedCapacity: '{{ WeightedCapacity }}'
      - name: LaunchTemplate
        value:
          LaunchTemplateId: '{{ LaunchTemplateId }}'
          LaunchTemplateName: '{{ LaunchTemplateName }}'
          Version: '{{ Version }}'
      - name: MaxSize
        value: null
      - name: MinSize
        value: null
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: VpcSubnets
        value:
          - '{{ VpcSubnets[0] }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.gamelift.game_server_groups
SET PatchDocument = string('{{ {
    "AutoScalingPolicy": auto_scaling_policy,
    "BalancingStrategy": balancing_strategy,
    "DeleteOption": delete_option,
    "GameServerGroupName": game_server_group_name,
    "GameServerProtectionPolicy": game_server_protection_policy,
    "InstanceDefinitions": instance_definitions,
    "LaunchTemplate": launch_template,
    "MaxSize": max_size,
    "MinSize": min_size,
    "RoleArn": role_arn,
    "Tags": tags,
    "VpcSubnets": vpc_subnets
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<GameServerGroupArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.gamelift.game_server_groups
WHERE Identifier = '<GameServerGroupArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>game_server_groups</code> resource, the following permissions are required:

### Create
```json
gamelift:CreateGameServerGroup,
gamelift:ListTagsForResource,
gamelift:TagResource,
gamelift:DescribeGameServerGroup,
iam:assumeRole,
iam:PassRole,
iam:CreateServiceLinkedRole,
ec2:DescribeAvailabilityZones,
ec2:DescribeSubnets,
ec2:RunInstances,
ec2:CreateTags,
ec2:DescribeLaunchTemplateVersions,
autoscaling:CreateAutoScalingGroup,
autoscaling:DescribeLifecycleHooks,
autoscaling:DescribeNotificationConfigurations,
autoscaling:CreateAutoScalingGroup,
autoscaling:CreateOrUpdateTags,
autoscaling:DescribeAutoScalingGroups,
autoscaling:ExitStandby,
autoscaling:PutLifecycleHook,
autoscaling:PutScalingPolicy,
autoscaling:ResumeProcesses,
autoscaling:SetInstanceProtection,
autoscaling:UpdateAutoScalingGroup,
events:PutRule,
events:PutTargets
```

### Read
```json
gamelift:DescribeGameServerGroup,
gamelift:ListTagsForResource
```

### Update
```json
gamelift:UpdateGameServerGroup,
gamelift:TagResource,
gamelift:UntagResource,
gamelift:ListTagsForResource,
iam:assumeRole,
iam:PassRole,
autoscaling:DescribeAutoScalingGroups,
autoscaling:UpdateAutoScalingGroup,
autoscaling:SetInstanceProtection
```

### Delete
```json
gamelift:DeleteGameServerGroup,
gamelift:DescribeGameServerGroup,
iam:assumeRole,
iam:PassRole,
iam:CreateServiceLinkedRole,
ec2:DescribeAvailabilityZones,
ec2:DescribeSubnets,
ec2:DescribeLaunchTemplateVersions,
autoscaling:CreateAutoScalingGroup,
autoscaling:DescribeLifecycleHooks,
autoscaling:DescribeNotificationConfigurations,
autoscaling:DescribeAutoScalingGroups,
autoscaling:ExitStandby,
autoscaling:PutLifecycleHook,
autoscaling:PutScalingPolicy,
autoscaling:ResumeProcesses,
autoscaling:SetInstanceProtection,
autoscaling:UpdateAutoScalingGroup,
autoscaling:DeleteAutoScalingGroup,
events:PutRule,
events:PutTargets
```

### List
```json
gamelift:ListGameServerGroups
```
