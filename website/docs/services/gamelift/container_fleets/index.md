---
title: container_fleets
hide_title: false
hide_table_of_contents: false
keywords:
  - container_fleets
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

Creates, updates, deletes or gets a <code>container_fleet</code> resource or lists <code>container_fleets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>container_fleets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::GameLift::ContainerFleet resource creates an Amazon GameLift (GameLift) container fleet to host game servers.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.gamelift.container_fleets" /></td></tr>
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
    "name": "fleet_id",
    "type": "string",
    "description": "Unique fleet ID"
  },
  {
    "name": "fleet_role_arn",
    "type": "string",
    "description": "A unique identifier for an AWS IAM role that manages access to your AWS services. Create a role or look up a role's ARN from the IAM dashboard in the AWS Management Console."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A human-readable description of a fleet."
  },
  {
    "name": "game_server_container_group_definition_name",
    "type": "string",
    "description": "The name of the container group definition that will be created per game server. You must specify GAME&#95;SERVER container group. You have the option to also specify one PER&#95;INSTANCE container group."
  },
  {
    "name": "game_server_container_group_definition_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the game server container group definition. This field will be empty if GameServerContainerGroupDefinitionName is not specified."
  },
  {
    "name": "per_instance_container_group_definition_name",
    "type": "string",
    "description": "The name of the container group definition that will be created per instance. This field is optional if you specify GameServerContainerGroupDefinitionName."
  },
  {
    "name": "per_instance_container_group_definition_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the per instance container group definition. This field will be empty if PerInstanceContainerGroupDefinitionName is not specified."
  },
  {
    "name": "instance_connection_port_range",
    "type": "object",
    "description": "Defines the range of ports on the instance that allow inbound traffic to connect with containers in a fleet.",
    "children": [
      {
        "name": "from_port",
        "type": "integer",
        "description": "A starting value for a range of allowed port numbers."
      },
      {
        "name": "to_port",
        "type": "integer",
        "description": "An ending value for a range of allowed port numbers. Port numbers are end-inclusive. This value must be higher than FromPort."
      }
    ]
  },
  {
    "name": "instance_inbound_permissions",
    "type": "array",
    "description": "A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server.",
    "children": [
      {
        "name": "from_port",
        "type": "integer",
        "description": "A starting value for a range of allowed port numbers."
      },
      {
        "name": "ip_range",
        "type": "string",
        "description": "A range of allowed IP addresses. This value must be expressed in CIDR notation. Example: \"000.000.000.000/&#91;subnet mask&#93;\" or optionally the shortened version \"0.0.0.0/&#91;subnet mask&#93;\"."
      },
      {
        "name": "protocol",
        "type": "string",
        "description": "The network communication protocol used by the fleet."
      },
      {
        "name": "to_port",
        "type": "integer",
        "description": "An ending value for a range of allowed port numbers. Port numbers are end-inclusive. This value must be higher than FromPort."
      }
    ]
  },
  {
    "name": "game_server_container_groups_per_instance",
    "type": "integer",
    "description": "The number of desired game server container groups per instance, a number between 1-5000."
  },
  {
    "name": "maximum_game_server_container_groups_per_instance",
    "type": "integer",
    "description": "The maximum number of game server container groups per instance, a number between 1-5000."
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": "A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example \"1469498468.057\")."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The current status of the container fleet."
  },
  {
    "name": "deployment_details",
    "type": "object",
    "description": "Provides information about the last deployment ID and its status.",
    "children": [
      {
        "name": "latest_deployment_id",
        "type": "string",
        "description": "The ID of the last deployment on the container fleet. This field will be empty if the container fleet does not have a ContainerGroupDefinition attached."
      }
    ]
  },
  {
    "name": "deployment_configuration",
    "type": "object",
    "description": "Provides details about how to drain old tasks and replace them with new updated tasks.",
    "children": [
      {
        "name": "protection_strategy",
        "type": "string",
        "description": "The protection strategy for deployment on the container fleet; defaults to WITH&#95;PROTECTION."
      },
      {
        "name": "minimum_healthy_percentage",
        "type": "integer",
        "description": "The minimum percentage of healthy required; defaults to 75."
      },
      {
        "name": "impairment_strategy",
        "type": "string",
        "description": "The strategy to apply in case of impairment; defaults to MAINTAIN."
      }
    ]
  },
  {
    "name": "instance_type",
    "type": "string",
    "description": "The name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions."
  },
  {
    "name": "billing_type",
    "type": "string",
    "description": "Indicates whether to use On-Demand instances or Spot instances for this fleet. If empty, the default is ON&#95;DEMAND. Both categories of instances use identical hardware and configurations based on the instance type selected for this fleet."
  },
  {
    "name": "locations",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "location",
        "type": "object",
        "description": "The AWS::GameLift::Location resource creates an Amazon GameLift (GameLift) custom location.",
        "children": [
          {
            "name": "location_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "location_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "tags",
            "type": "array",
            "description": "An array of key-value pairs to apply to this resource.",
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
          }
        ]
      },
      {
        "name": "location_capacity",
        "type": "object",
        "description": "Current resource capacity settings in a specified fleet or location. The location value might refer to a fleet's remote location or its home Region.",
        "children": [
          {
            "name": "desired_ec2_instances",
            "type": "integer",
            "description": "The number of EC2 instances you want to maintain in the specified fleet location. This value must fall between the minimum and maximum size limits."
          },
          {
            "name": "min_size",
            "type": "integer",
            "description": "The minimum value allowed for the fleet's instance count for a location. When creating a new fleet, GameLift automatically sets this value to \"0\". After the fleet is active, you can change this value."
          },
          {
            "name": "max_size",
            "type": "integer",
            "description": "The maximum value that is allowed for the fleet's instance count for a location. When creating a new fleet, GameLift automatically sets this value to \"1\". Once the fleet is active, you can change this value."
          }
        ]
      }
    ]
  },
  {
    "name": "scaling_policies",
    "type": "array",
    "description": "A list of rules that control how a fleet is scaled.",
    "children": [
      {
        "name": "comparison_operator",
        "type": "string",
        "description": "Comparison operator to use when measuring a metric against the threshold value."
      },
      {
        "name": "evaluation_periods",
        "type": "integer",
        "description": "Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered."
      },
      {
        "name": "location",
        "type": "object",
        "description": "The AWS::GameLift::Location resource creates an Amazon GameLift (GameLift) custom location.",
        "children": [
          {
            "name": "location_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "location_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "tags",
            "type": "array",
            "description": "An array of key-value pairs to apply to this resource.",
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
          }
        ]
      },
      {
        "name": "metric_name",
        "type": "string",
        "description": "Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment."
      },
      {
        "name": "name",
        "type": "string",
        "description": "A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique."
      },
      {
        "name": "policy_type",
        "type": "string",
        "description": "The type of scaling policy to create. For a target-based policy, set the parameter MetricName to 'PercentAvailableGameSessions' and specify a TargetConfiguration. For a rule-based policy set the following parameters: MetricName, ComparisonOperator, Threshold, EvaluationPeriods, ScalingAdjustmentType, and ScalingAdjustment."
      },
      {
        "name": "scaling_adjustment",
        "type": "integer",
        "description": "Amount of adjustment to make, based on the scaling adjustment type."
      },
      {
        "name": "scaling_adjustment_type",
        "type": "string",
        "description": "The type of adjustment to make to a fleet's instance count."
      },
      {
        "name": "status",
        "type": "string",
        "description": "Current status of the scaling policy. The scaling policy can be in force only when in an ACTIVE status. Scaling policies can be suspended for individual fleets. If the policy is suspended for a fleet, the policy status does not change."
      },
      {
        "name": "target_configuration",
        "type": "object",
        "description": "An object that contains settings for a target-based scaling policy.",
        "children": [
          {
            "name": "target_value",
            "type": "number",
            "description": "Desired value to use with a target-based scaling policy. The value must be relevant for whatever metric the scaling policy is using. For example, in a policy using the metric PercentAvailableGameSessions, the target value should be the preferred size of the fleet's buffer (the percent of capacity that should be idle and ready for new game sessions)."
          }
        ]
      },
      {
        "name": "threshold",
        "type": "number",
        "description": "Metric value used to trigger a scaling event."
      },
      {
        "name": "update_status",
        "type": "string",
        "description": "The current status of the fleet's scaling policies in a requested fleet location. The status PENDING&#95;UPDATE indicates that an update was requested for the fleet but has not yet been completed for the location."
      }
    ]
  },
  {
    "name": "metric_groups",
    "type": "array",
    "description": "The name of an Amazon CloudWatch metric group. A metric group aggregates the metrics for all fleets in the group. Specify a string containing the metric group name. You can use an existing name or use a new name to create a new metric group. Currently, this parameter can have only one string."
  },
  {
    "name": "new_game_session_protection_policy",
    "type": "string",
    "description": "A game session protection policy to apply to all game sessions hosted on instances in this fleet. When protected, active game sessions cannot be terminated during a scale-down event. If this parameter is not set, instances in this fleet default to no protection. You can change a fleet's protection policy to affect future game sessions on the fleet. You can also set protection for individual game sessions."
  },
  {
    "name": "game_session_creation_limit_policy",
    "type": "object",
    "description": "A policy that limits the number of game sessions an individual player can create over a span of time for this fleet.",
    "children": [
      {
        "name": "new_game_sessions_per_creator",
        "type": "integer",
        "description": "The maximum number of game sessions that an individual can create during the policy period."
      },
      {
        "name": "policy_period_in_minutes",
        "type": "integer",
        "description": "The time span used in evaluating the resource creation limit policy."
      }
    ]
  },
  {
    "name": "log_configuration",
    "type": "object",
    "description": "A policy the location and provider of logs from the fleet.",
    "children": [
      {
        "name": "log_destination",
        "type": "string",
        "description": "Configures the service that provides logs."
      },
      {
        "name": "log_group_arn",
        "type": "string",
        "description": "If log destination is CLOUDWATCH, logs are sent to the specified log group in Amazon CloudWatch."
      },
      {
        "name": "s3_bucket_name",
        "type": "string",
        "description": "The name of the S3 bucket to pull logs from if S3 is the LogDestination"
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
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
    "name": "fleet_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift container fleet resource and uniquely identifies it across all AWS Regions."
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
    "name": "fleet_id",
    "type": "string",
    "description": "Unique fleet ID"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containerfleet.html"><code>AWS::GameLift::ContainerFleet</code></a>.

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
    <td><code>container_fleets</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="FleetRoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>container_fleets</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>container_fleets</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>container_fleets_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>container_fleets</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>container_fleet</code>.
```sql
SELECT
region,
fleet_id,
fleet_role_arn,
description,
game_server_container_group_definition_name,
game_server_container_group_definition_arn,
per_instance_container_group_definition_name,
per_instance_container_group_definition_arn,
instance_connection_port_range,
instance_inbound_permissions,
game_server_container_groups_per_instance,
maximum_game_server_container_groups_per_instance,
creation_time,
status,
deployment_details,
deployment_configuration,
instance_type,
billing_type,
locations,
scaling_policies,
metric_groups,
new_game_session_protection_policy,
game_session_creation_limit_policy,
log_configuration,
tags,
fleet_arn
FROM awscc.gamelift.container_fleets
WHERE region = 'us-east-1' AND data__Identifier = '<FleetId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>container_fleets</code> in a region.
```sql
SELECT
region,
fleet_id
FROM awscc.gamelift.container_fleets_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>container_fleet</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.gamelift.container_fleets (
 FleetRoleArn,
 region
)
SELECT 
'{{ FleetRoleArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.gamelift.container_fleets (
 FleetRoleArn,
 Description,
 GameServerContainerGroupDefinitionName,
 PerInstanceContainerGroupDefinitionName,
 InstanceConnectionPortRange,
 InstanceInboundPermissions,
 GameServerContainerGroupsPerInstance,
 DeploymentConfiguration,
 InstanceType,
 BillingType,
 Locations,
 ScalingPolicies,
 MetricGroups,
 NewGameSessionProtectionPolicy,
 GameSessionCreationLimitPolicy,
 LogConfiguration,
 Tags,
 region
)
SELECT 
 '{{ FleetRoleArn }}',
 '{{ Description }}',
 '{{ GameServerContainerGroupDefinitionName }}',
 '{{ PerInstanceContainerGroupDefinitionName }}',
 '{{ InstanceConnectionPortRange }}',
 '{{ InstanceInboundPermissions }}',
 '{{ GameServerContainerGroupsPerInstance }}',
 '{{ DeploymentConfiguration }}',
 '{{ InstanceType }}',
 '{{ BillingType }}',
 '{{ Locations }}',
 '{{ ScalingPolicies }}',
 '{{ MetricGroups }}',
 '{{ NewGameSessionProtectionPolicy }}',
 '{{ GameSessionCreationLimitPolicy }}',
 '{{ LogConfiguration }}',
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
  - name: container_fleet
    props:
      - name: FleetRoleArn
        value: '{{ FleetRoleArn }}'
      - name: Description
        value: '{{ Description }}'
      - name: GameServerContainerGroupDefinitionName
        value: '{{ GameServerContainerGroupDefinitionName }}'
      - name: PerInstanceContainerGroupDefinitionName
        value: '{{ PerInstanceContainerGroupDefinitionName }}'
      - name: InstanceConnectionPortRange
        value:
          FromPort: '{{ FromPort }}'
          ToPort: '{{ ToPort }}'
      - name: InstanceInboundPermissions
        value:
          - FromPort: '{{ FromPort }}'
            IpRange: '{{ IpRange }}'
            Protocol: '{{ Protocol }}'
            ToPort: '{{ ToPort }}'
      - name: GameServerContainerGroupsPerInstance
        value: '{{ GameServerContainerGroupsPerInstance }}'
      - name: DeploymentConfiguration
        value:
          ProtectionStrategy: '{{ ProtectionStrategy }}'
          MinimumHealthyPercentage: '{{ MinimumHealthyPercentage }}'
          ImpairmentStrategy: '{{ ImpairmentStrategy }}'
      - name: InstanceType
        value: '{{ InstanceType }}'
      - name: BillingType
        value: '{{ BillingType }}'
      - name: Locations
        value:
          - Location:
              LocationName: '{{ LocationName }}'
              Tags:
                - Key: '{{ Key }}'
                  Value: '{{ Value }}'
            LocationCapacity:
              DesiredEC2Instances: '{{ DesiredEC2Instances }}'
              MinSize: '{{ MinSize }}'
              MaxSize: '{{ MaxSize }}'
      - name: ScalingPolicies
        value:
          - ComparisonOperator: '{{ ComparisonOperator }}'
            EvaluationPeriods: '{{ EvaluationPeriods }}'
            Location: null
            MetricName: '{{ MetricName }}'
            Name: '{{ Name }}'
            PolicyType: '{{ PolicyType }}'
            ScalingAdjustment: '{{ ScalingAdjustment }}'
            ScalingAdjustmentType: '{{ ScalingAdjustmentType }}'
            Status: '{{ Status }}'
            TargetConfiguration:
              TargetValue: null
            Threshold: null
            UpdateStatus: '{{ UpdateStatus }}'
      - name: MetricGroups
        value:
          - '{{ MetricGroups[0] }}'
      - name: NewGameSessionProtectionPolicy
        value: '{{ NewGameSessionProtectionPolicy }}'
      - name: GameSessionCreationLimitPolicy
        value:
          NewGameSessionsPerCreator: '{{ NewGameSessionsPerCreator }}'
          PolicyPeriodInMinutes: '{{ PolicyPeriodInMinutes }}'
      - name: LogConfiguration
        value:
          LogDestination: '{{ LogDestination }}'
          LogGroupArn: '{{ LogGroupArn }}'
          S3BucketName: '{{ S3BucketName }}'
      - name: Tags
        value:
          - null

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.gamelift.container_fleets
SET data__PatchDocument = string('{{ {
    "FleetRoleArn": fleet_role_arn,
    "Description": description,
    "GameServerContainerGroupDefinitionName": game_server_container_group_definition_name,
    "PerInstanceContainerGroupDefinitionName": per_instance_container_group_definition_name,
    "InstanceConnectionPortRange": instance_connection_port_range,
    "InstanceInboundPermissions": instance_inbound_permissions,
    "GameServerContainerGroupsPerInstance": game_server_container_groups_per_instance,
    "DeploymentConfiguration": deployment_configuration,
    "Locations": locations,
    "ScalingPolicies": scaling_policies,
    "MetricGroups": metric_groups,
    "NewGameSessionProtectionPolicy": new_game_session_protection_policy,
    "GameSessionCreationLimitPolicy": game_session_creation_limit_policy,
    "LogConfiguration": log_configuration,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<FleetId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.gamelift.container_fleets
WHERE data__Identifier = '<FleetId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>container_fleets</code> resource, the following permissions are required:

### Create
```json
gamelift:CreateContainerFleet,
gamelift:DescribeContainerFleet,
gamelift:DescribeFleetDeployment,
gamelift:DescribeFleetLocationAttributes,
gamelift:DescribeFleetLocationCapacity,
gamelift:DescribeScalingPolicies,
gamelift:ListTagsForResource,
gamelift:PutScalingPolicy,
gamelift:StopFleetActions,
gamelift:TagResource,
gamelift:UpdateFleetCapacity,
iam:PassRole
```

### Read
```json
gamelift:DescribeContainerFleet,
gamelift:DescribeFleetLocationAttributes,
gamelift:DescribeFleetLocationCapacity,
gamelift:DescribeScalingPolicies,
gamelift:ListTagsForResource
```

### Delete
```json
gamelift:DeleteContainerFleet,
gamelift:DescribeContainerFleet
```

### List
```json
gamelift:ListContainerFleets
```

### Update
```json
gamelift:CreateFleetLocations,
gamelift:DeleteFleetLocations,
gamelift:DeleteScalingPolicy,
gamelift:DescribeContainerFleet,
gamelift:DescribeFleetDeployment,
gamelift:DescribeFleetLocationAttributes,
gamelift:DescribeFleetLocationCapacity,
gamelift:DescribeScalingPolicies,
gamelift:ListTagsForResource,
gamelift:PutScalingPolicy,
gamelift:StartFleetActions,
gamelift:StopFleetActions,
gamelift:TagResource,
gamelift:UntagResource,
gamelift:UpdateContainerFleet,
gamelift:UpdateFleetCapacity,
iam:PassRole
```
