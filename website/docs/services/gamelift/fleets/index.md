---
title: fleets
hide_title: false
hide_table_of_contents: false
keywords:
  - fleets
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

Creates, updates, deletes or gets a <code>fleet</code> resource or lists <code>fleets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>fleets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::GameLift::Fleet resource creates an Amazon GameLift (GameLift) fleet to host game servers. A fleet is a set of EC2 or Anywhere instances, each of which can host multiple game sessions.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.gamelift.fleets" /></td></tr>
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
    "name": "anywhere_configuration",
    "type": "object",
    "description": "Configuration for Anywhere fleet.",
    "children": [
      {
        "name": "cost",
        "type": "string",
        "description": "Cost of compute can be specified on Anywhere Fleets to prioritize placement across Queue destinations based on Cost."
      }
    ]
  },
  {
    "name": "apply_capacity",
    "type": "string",
    "description": "Determines when and how to apply fleet or location capacities. Allowed options are ON&#95;UPDATE (default), ON&#95;CREATE&#95;AND&#95;UPDATE and ON&#95;CREATE&#95;AND&#95;UPDATE&#95;WITH&#95;AUTOSCALING. If you choose ON&#95;CREATE&#95;AND&#95;UPDATE&#95;WITH&#95;AUTOSCALING, MinSize and MaxSize will still be applied on creation and on updates, but DesiredEC2Instances will only be applied once on fleet creation and will be ignored during updates to prevent conflicts with auto-scaling. During updates with ON&#95;CREATE&#95;AND&#95;UPDATE&#95;WITH&#95;AUTOSCALING chosen, if current desired instance is lower than the new MinSize, it will be increased to the new MinSize; if current desired instance is larger than the new MaxSize, it will be decreased to the new MaxSize."
  },
  {
    "name": "certificate_configuration",
    "type": "object",
    "description": "Indicates whether to generate a TLS/SSL certificate for the new fleet. TLS certificates are used for encrypting traffic between game clients and game servers running on GameLift. If this parameter is not set, certificate generation is disabled. This fleet setting cannot be changed once the fleet is created.",
    "children": [
      {
        "name": "certificate_type",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "compute_type",
    "type": "string",
    "description": "ComputeType to differentiate EC2 hardware managed by GameLift and Anywhere hardware managed by the customer."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A human-readable description of a fleet."
  },
  {
    "name": "desired_ec2_instances",
    "type": "integer",
    "description": "&#91;DEPRECATED&#93; The number of EC2 instances that you want this fleet to host. When creating a new fleet, GameLift automatically sets this value to \"1\" and initiates a single instance. Once the fleet is active, update this value to trigger GameLift to add or remove instances from the fleet."
  },
  {
    "name": "e_c2_inbound_permissions",
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
    "name": "e_c2_instance_type",
    "type": "string",
    "description": "The name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions."
  },
  {
    "name": "fleet_type",
    "type": "string",
    "description": "Indicates whether to use On-Demand instances or Spot instances for this fleet. If empty, the default is ON&#95;DEMAND. Both categories of instances use identical hardware and configurations based on the instance type selected for this fleet."
  },
  {
    "name": "instance_role_arn",
    "type": "string",
    "description": "A unique identifier for an AWS IAM role that manages access to your AWS services. With an instance role ARN set, any application that runs on an instance in this fleet can assume the role, including install scripts, server processes, and daemons (background processes). Create a role or look up a role's ARN from the IAM dashboard in the AWS Management Console."
  },
  {
    "name": "instance_role_credentials_provider",
    "type": "string",
    "description": "Credentials provider implementation that loads credentials from the Amazon EC2 Instance Metadata Service."
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
    "name": "log_paths",
    "type": "array",
    "description": "This parameter is no longer used. When hosting a custom game build, specify where Amazon GameLift should store log files using the Amazon GameLift server API call ProcessReady()"
  },
  {
    "name": "max_size",
    "type": "integer",
    "description": "&#91;DEPRECATED&#93; The maximum value that is allowed for the fleet's instance count. When creating a new fleet, GameLift automatically sets this value to \"1\". Once the fleet is active, you can change this value."
  },
  {
    "name": "metric_groups",
    "type": "array",
    "description": "The name of an Amazon CloudWatch metric group. A metric group aggregates the metrics for all fleets in the group. Specify a string containing the metric group name. You can use an existing name or use a new name to create a new metric group. Currently, this parameter can have only one string."
  },
  {
    "name": "min_size",
    "type": "integer",
    "description": "&#91;DEPRECATED&#93; The minimum value allowed for the fleet's instance count. When creating a new fleet, GameLift automatically sets this value to \"0\". After the fleet is active, you can change this value."
  },
  {
    "name": "name",
    "type": "string",
    "description": "A descriptive label that is associated with a fleet. Fleet names do not need to be unique."
  },
  {
    "name": "new_game_session_protection_policy",
    "type": "string",
    "description": "A game session protection policy to apply to all game sessions hosted on instances in this fleet. When protected, active game sessions cannot be terminated during a scale-down event. If this parameter is not set, instances in this fleet default to no protection. You can change a fleet's protection policy to affect future game sessions on the fleet. You can also set protection for individual game sessions."
  },
  {
    "name": "peer_vpc_aws_account_id",
    "type": "string",
    "description": "A unique identifier for the AWS account with the VPC that you want to peer your Amazon GameLift fleet with. You can find your account ID in the AWS Management Console under account settings."
  },
  {
    "name": "peer_vpc_id",
    "type": "string",
    "description": "A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same Region as your fleet. To look up a VPC ID, use the VPC Dashboard in the AWS Management Console."
  },
  {
    "name": "resource_creation_limit_policy",
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
    "name": "fleet_id",
    "type": "string",
    "description": "Unique fleet ID"
  },
  {
    "name": "build_id",
    "type": "string",
    "description": "A unique identifier for a build to be deployed on the new fleet. If you are deploying the fleet with a custom game build, you must specify this property. The build must have been successfully uploaded to Amazon GameLift and be in a READY status. This fleet setting cannot be changed once the fleet is created."
  },
  {
    "name": "script_id",
    "type": "string",
    "description": "A unique identifier for a Realtime script to be deployed on a new Realtime Servers fleet. The script must have been successfully uploaded to Amazon GameLift. This fleet setting cannot be changed once the fleet is created.<br />Note: It is not currently possible to use the !Ref command to reference a script created with a CloudFormation template for the fleet property ScriptId. Instead, use Fn::GetAtt Script.Arn or Fn::GetAtt Script.Id to retrieve either of these properties as input for ScriptId. Alternatively, enter a ScriptId string manually."
  },
  {
    "name": "runtime_configuration",
    "type": "object",
    "description": "Instructions for launching server processes on each instance in the fleet. Server processes run either a custom game build executable or a Realtime script. The runtime configuration defines the server executables or launch script file, launch parameters, and the number of processes to run concurrently on each instance. When creating a fleet, the runtime configuration must have at least one server process configuration; otherwise the request fails with an invalid request exception.<br />This parameter is required unless the parameters ServerLaunchPath and ServerLaunchParameters are defined. Runtime configuration has replaced these parameters, but fleets that use them will continue to work.",
    "children": [
      {
        "name": "game_session_activation_timeout_seconds",
        "type": "integer",
        "description": "The maximum amount of time (in seconds) that a game session can remain in status ACTIVATING. If the game session is not active before the timeout, activation is terminated and the game session status is changed to TERMINATED."
      },
      {
        "name": "max_concurrent_game_session_activations",
        "type": "integer",
        "description": "The maximum number of game sessions with status ACTIVATING to allow on an instance simultaneously. This setting limits the amount of instance resources that can be used for new game activations at any one time."
      },
      {
        "name": "server_processes",
        "type": "array",
        "description": "A collection of server process configurations that describe which server processes to run on each instance in a fleet.",
        "children": [
          {
            "name": "concurrent_executions",
            "type": "integer",
            "description": "The number of server processes that use this configuration to run concurrently on an instance."
          },
          {
            "name": "launch_path",
            "type": "string",
            "description": "The location of the server executable in a custom game build or the name of the Realtime script file that contains the Init() function. Game builds and Realtime scripts are installed on instances at the root:<br />Windows (for custom game builds only): C:\\game. Example: \"C:\\game\\MyGame\\server.exe\"<br />Linux: /local/game. Examples: \"/local/game/MyGame/server.exe\" or \"/local/game/MyRealtimeScript.js\""
          },
          {
            "name": "parameters",
            "type": "string",
            "description": "An optional list of parameters to pass to the server executable or Realtime script on launch."
          }
        ]
      }
    ]
  },
  {
    "name": "server_launch_parameters",
    "type": "string",
    "description": "This parameter is no longer used but is retained for backward compatibility. Instead, specify server launch parameters in the RuntimeConfiguration parameter. A request must specify either a runtime configuration or values for both ServerLaunchParameters and ServerLaunchPath."
  },
  {
    "name": "server_launch_path",
    "type": "string",
    "description": "This parameter is no longer used. Instead, specify a server launch path using the RuntimeConfiguration parameter. Requests that specify a server launch path and launch parameters instead of a runtime configuration will continue to work."
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
    "description": "The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift Servers Fleet resource and uniquely identifies it. ARNs are unique across all Regions. In a GameLift Fleet ARN, the resource ID matches the FleetId value."
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html"><code>AWS::GameLift::Fleet</code></a>.

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
    <td><code>fleets</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>fleets</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>fleets</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>fleets_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>fleets</code></td>
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

Gets all properties from an individual <code>fleet</code>.
```sql
SELECT
region,
scaling_policies,
anywhere_configuration,
apply_capacity,
certificate_configuration,
compute_type,
description,
desired_ec2_instances,
e_c2_inbound_permissions,
e_c2_instance_type,
fleet_type,
instance_role_arn,
instance_role_credentials_provider,
locations,
log_paths,
max_size,
metric_groups,
min_size,
name,
new_game_session_protection_policy,
peer_vpc_aws_account_id,
peer_vpc_id,
resource_creation_limit_policy,
fleet_id,
build_id,
script_id,
runtime_configuration,
server_launch_parameters,
server_launch_path,
tags,
fleet_arn
FROM awscc.gamelift.fleets
WHERE region = 'us-east-1' AND Identifier = '<FleetId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>fleets</code> in a region.
```sql
SELECT
region,
fleet_id
FROM awscc.gamelift.fleets_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>fleet</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.gamelift.fleets (
 Name,
 region
)
SELECT 
'{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.gamelift.fleets (
 ScalingPolicies,
 AnywhereConfiguration,
 ApplyCapacity,
 CertificateConfiguration,
 ComputeType,
 Description,
 DesiredEC2Instances,
 EC2InboundPermissions,
 EC2InstanceType,
 FleetType,
 InstanceRoleARN,
 InstanceRoleCredentialsProvider,
 Locations,
 LogPaths,
 MaxSize,
 MetricGroups,
 MinSize,
 Name,
 NewGameSessionProtectionPolicy,
 PeerVpcAwsAccountId,
 PeerVpcId,
 ResourceCreationLimitPolicy,
 BuildId,
 ScriptId,
 RuntimeConfiguration,
 ServerLaunchParameters,
 ServerLaunchPath,
 Tags,
 region
)
SELECT 
 '{{ ScalingPolicies }}',
 '{{ AnywhereConfiguration }}',
 '{{ ApplyCapacity }}',
 '{{ CertificateConfiguration }}',
 '{{ ComputeType }}',
 '{{ Description }}',
 '{{ DesiredEC2Instances }}',
 '{{ EC2InboundPermissions }}',
 '{{ EC2InstanceType }}',
 '{{ FleetType }}',
 '{{ InstanceRoleARN }}',
 '{{ InstanceRoleCredentialsProvider }}',
 '{{ Locations }}',
 '{{ LogPaths }}',
 '{{ MaxSize }}',
 '{{ MetricGroups }}',
 '{{ MinSize }}',
 '{{ Name }}',
 '{{ NewGameSessionProtectionPolicy }}',
 '{{ PeerVpcAwsAccountId }}',
 '{{ PeerVpcId }}',
 '{{ ResourceCreationLimitPolicy }}',
 '{{ BuildId }}',
 '{{ ScriptId }}',
 '{{ RuntimeConfiguration }}',
 '{{ ServerLaunchParameters }}',
 '{{ ServerLaunchPath }}',
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
  - name: fleet
    props:
      - name: ScalingPolicies
        value:
          - ComparisonOperator: '{{ ComparisonOperator }}'
            EvaluationPeriods: '{{ EvaluationPeriods }}'
            Location:
              LocationName: '{{ LocationName }}'
              Tags:
                - Key: '{{ Key }}'
                  Value: '{{ Value }}'
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
      - name: AnywhereConfiguration
        value: null
      - name: ApplyCapacity
        value: '{{ ApplyCapacity }}'
      - name: CertificateConfiguration
        value:
          CertificateType: '{{ CertificateType }}'
      - name: ComputeType
        value: '{{ ComputeType }}'
      - name: Description
        value: '{{ Description }}'
      - name: DesiredEC2Instances
        value: '{{ DesiredEC2Instances }}'
      - name: EC2InboundPermissions
        value:
          - FromPort: '{{ FromPort }}'
            IpRange: '{{ IpRange }}'
            Protocol: '{{ Protocol }}'
            ToPort: '{{ ToPort }}'
      - name: EC2InstanceType
        value: '{{ EC2InstanceType }}'
      - name: FleetType
        value: '{{ FleetType }}'
      - name: InstanceRoleARN
        value: '{{ InstanceRoleARN }}'
      - name: InstanceRoleCredentialsProvider
        value: '{{ InstanceRoleCredentialsProvider }}'
      - name: Locations
        value:
          - Location: null
            LocationCapacity:
              DesiredEC2Instances: '{{ DesiredEC2Instances }}'
              MinSize: '{{ MinSize }}'
              MaxSize: '{{ MaxSize }}'
      - name: LogPaths
        value:
          - '{{ LogPaths[0] }}'
      - name: MaxSize
        value: '{{ MaxSize }}'
      - name: MetricGroups
        value:
          - '{{ MetricGroups[0] }}'
      - name: MinSize
        value: '{{ MinSize }}'
      - name: Name
        value: '{{ Name }}'
      - name: NewGameSessionProtectionPolicy
        value: '{{ NewGameSessionProtectionPolicy }}'
      - name: PeerVpcAwsAccountId
        value: '{{ PeerVpcAwsAccountId }}'
      - name: PeerVpcId
        value: '{{ PeerVpcId }}'
      - name: ResourceCreationLimitPolicy
        value:
          NewGameSessionsPerCreator: '{{ NewGameSessionsPerCreator }}'
          PolicyPeriodInMinutes: '{{ PolicyPeriodInMinutes }}'
      - name: BuildId
        value: '{{ BuildId }}'
      - name: ScriptId
        value: '{{ ScriptId }}'
      - name: RuntimeConfiguration
        value:
          GameSessionActivationTimeoutSeconds: '{{ GameSessionActivationTimeoutSeconds }}'
          MaxConcurrentGameSessionActivations: '{{ MaxConcurrentGameSessionActivations }}'
          ServerProcesses:
            - ConcurrentExecutions: '{{ ConcurrentExecutions }}'
              LaunchPath: '{{ LaunchPath }}'
              Parameters: '{{ Parameters }}'
      - name: ServerLaunchParameters
        value: '{{ ServerLaunchParameters }}'
      - name: ServerLaunchPath
        value: '{{ ServerLaunchPath }}'
      - name: Tags
        value:
          - null

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>fleet</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.gamelift.fleets
SET PatchDocument = string('{{ {
    "ScalingPolicies": scaling_policies,
    "AnywhereConfiguration": anywhere_configuration,
    "ApplyCapacity": apply_capacity,
    "Description": description,
    "DesiredEC2Instances": desired_ec2_instances,
    "EC2InboundPermissions": e_c2_inbound_permissions,
    "Locations": locations,
    "MaxSize": max_size,
    "MetricGroups": metric_groups,
    "MinSize": min_size,
    "Name": name,
    "NewGameSessionProtectionPolicy": new_game_session_protection_policy,
    "ResourceCreationLimitPolicy": resource_creation_limit_policy,
    "RuntimeConfiguration": runtime_configuration,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<FleetId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.gamelift.fleets
WHERE Identifier = '<FleetId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>fleets</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
gamelift:CreateFleet,
gamelift:CreateFleetLocations,
gamelift:DescribeFleetAttributes,
gamelift:DescribeFleetLocationAttributes,
gamelift:UpdateFleetCapacity,
gamelift:DescribeFleetLocationCapacity,
gamelift:DescribeFleetCapacity,
gamelift:DescribeFleetPortSettings,
gamelift:DescribeRuntimeConfiguration,
gamelift:PutScalingPolicy,
gamelift:DescribeScalingPolicies,
gamelift:ListTagsForResource,
gamelift:UpdateFleetCapacity,
gamelift:TagResource
```

</TabItem>
<TabItem value="read">

```json
gamelift:DescribeFleetAttributes,
gamelift:DescribeFleetLocationAttributes,
gamelift:DescribeFleetLocationCapacity,
gamelift:DescribeFleetCapacity,
gamelift:DescribeFleetPortSettings,
gamelift:DescribeRuntimeConfiguration,
gamelift:DescribeScalingPolicies,
gamelift:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
gamelift:UpdateFleetAttributes,
gamelift:CreateFleetLocations,
gamelift:DeleteFleetLocations,
gamelift:UpdateFleetCapacity,
gamelift:UpdateFleetPortSettings,
gamelift:UpdateRuntimeConfiguration,
gamelift:DescribeFleetLocationCapacity,
gamelift:DescribeFleetPortSettings,
gamelift:DescribeFleetLocationAttributes,
gamelift:PutScalingPolicy,
gamelift:DescribeScalingPolicies,
gamelift:DeleteScalingPolicy,
gamelift:DescribeFleetAttributes,
gamelift:DescribeFleetCapacity,
gamelift:DescribeRuntimeConfiguration,
gamelift:TagResource,
gamelift:UntagResource,
gamelift:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
gamelift:DeleteFleet,
gamelift:DescribeFleetLocationCapacity,
gamelift:DescribeFleetAttributes,
gamelift:DescribeFleetCapacity,
gamelift:DescribeFleetLocationCapacity,
gamelift:UpdateFleetCapacity,
gamelift:DescribeScalingPolicies,
gamelift:DeleteScalingPolicy
```

</TabItem>
<TabItem value="list">

```json
gamelift:ListFleets
```

</TabItem>
</Tabs>