---
title: spot_fleets
hide_title: false
hide_table_of_contents: false
keywords:
  - spot_fleets
  - ec2
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

Creates, updates, deletes or gets a <code>spot_fleet</code> resource or lists <code>spot_fleets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>spot_fleets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::EC2::SpotFleet</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.spot_fleets" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "spot_fleet_request_config_data",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "allocation_strategy",
        "type": "string",
        "description": ""
      },
      {
        "name": "context",
        "type": "string",
        "description": ""
      },
      {
        "name": "excess_capacity_termination_policy",
        "type": "string",
        "description": ""
      },
      {
        "name": "iam_fleet_role",
        "type": "string",
        "description": ""
      },
      {
        "name": "instance_interruption_behavior",
        "type": "string",
        "description": ""
      },
      {
        "name": "instance_pools_to_use_count",
        "type": "integer",
        "description": ""
      },
      {
        "name": "launch_specifications",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "block_device_mappings",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "device_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "ebs",
                "type": "object",
                "description": ""
              },
              {
                "name": "no_device",
                "type": "string",
                "description": ""
              },
              {
                "name": "virtual_name",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "ebs_optimized",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "iam_instance_profile",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "arn",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "image_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "instance_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "kernel_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "key_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "monitoring",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "enabled",
                "type": "boolean",
                "description": ""
              }
            ]
          },
          {
            "name": "network_interfaces",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "associate_public_ip_address",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "delete_on_termination",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "description",
                "type": "string",
                "description": ""
              },
              {
                "name": "device_index",
                "type": "integer",
                "description": ""
              },
              {
                "name": "groups",
                "type": "array",
                "description": ""
              },
              {
                "name": "ipv6_address_count",
                "type": "integer",
                "description": ""
              },
              {
                "name": "ipv6_addresses",
                "type": "array",
                "description": ""
              },
              {
                "name": "network_interface_id",
                "type": "string",
                "description": ""
              },
              {
                "name": "private_ip_addresses",
                "type": "array",
                "description": ""
              },
              {
                "name": "secondary_private_ip_address_count",
                "type": "integer",
                "description": ""
              },
              {
                "name": "subnet_id",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "placement",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "availability_zone",
                "type": "string",
                "description": ""
              },
              {
                "name": "group_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "tenancy",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "ramdisk_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "security_groups",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "group_id",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "spot_price",
            "type": "string",
            "description": ""
          },
          {
            "name": "subnet_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "tag_specifications",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "resource_type",
                "type": "string",
                "description": ""
              },
              {
                "name": "tags",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "user_data",
            "type": "string",
            "description": ""
          },
          {
            "name": "weighted_capacity",
            "type": "number",
            "description": ""
          },
          {
            "name": "instance_requirements",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "v_cpu_count",
                "type": "object",
                "description": ""
              },
              {
                "name": "memory_mi_b",
                "type": "object",
                "description": ""
              },
              {
                "name": "cpu_manufacturers",
                "type": "array",
                "description": ""
              },
              {
                "name": "memory_gi_bper_vcpu",
                "type": "object",
                "description": ""
              },
              {
                "name": "allowed_instance_types",
                "type": "array",
                "description": ""
              },
              {
                "name": "excluded_instance_types",
                "type": "array",
                "description": ""
              },
              {
                "name": "instance_generations",
                "type": "array",
                "description": ""
              },
              {
                "name": "spot_max_price_percentage_over_lowest_price",
                "type": "integer",
                "description": ""
              },
              {
                "name": "on_demand_max_price_percentage_over_lowest_price",
                "type": "integer",
                "description": ""
              },
              {
                "name": "max_spot_price_as_percentage_of_optimal_on_demand_price",
                "type": "integer",
                "description": ""
              },
              {
                "name": "bare_metal",
                "type": "string",
                "description": ""
              },
              {
                "name": "burstable_performance",
                "type": "string",
                "description": ""
              },
              {
                "name": "require_hibernate_support",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "network_bandwidth_gbps",
                "type": "object",
                "description": ""
              },
              {
                "name": "network_interface_count",
                "type": "object",
                "description": ""
              },
              {
                "name": "local_storage",
                "type": "string",
                "description": ""
              },
              {
                "name": "local_storage_types",
                "type": "array",
                "description": ""
              },
              {
                "name": "total_local_storage_gb",
                "type": "object",
                "description": ""
              },
              {
                "name": "baseline_ebs_bandwidth_mbps",
                "type": "object",
                "description": ""
              },
              {
                "name": "accelerator_types",
                "type": "array",
                "description": ""
              },
              {
                "name": "accelerator_count",
                "type": "object",
                "description": ""
              },
              {
                "name": "accelerator_manufacturers",
                "type": "array",
                "description": ""
              },
              {
                "name": "accelerator_names",
                "type": "array",
                "description": ""
              },
              {
                "name": "accelerator_total_memory_mi_b",
                "type": "object",
                "description": ""
              },
              {
                "name": "baseline_performance_factors",
                "type": "object",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "launch_template_configs",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "launch_template_specification",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "launch_template_id",
                "type": "string",
                "description": ""
              },
              {
                "name": "launch_template_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "version",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "overrides",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "availability_zone",
                "type": "string",
                "description": ""
              },
              {
                "name": "instance_type",
                "type": "string",
                "description": ""
              },
              {
                "name": "spot_price",
                "type": "string",
                "description": ""
              },
              {
                "name": "subnet_id",
                "type": "string",
                "description": ""
              },
              {
                "name": "weighted_capacity",
                "type": "number",
                "description": ""
              },
              {
                "name": "instance_requirements",
                "type": "object",
                "description": ""
              },
              {
                "name": "priority",
                "type": "number",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "load_balancers_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "classic_load_balancers_config",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "classic_load_balancers",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "target_groups_config",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "target_groups",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "on_demand_allocation_strategy",
        "type": "string",
        "description": ""
      },
      {
        "name": "on_demand_max_total_price",
        "type": "string",
        "description": ""
      },
      {
        "name": "on_demand_target_capacity",
        "type": "integer",
        "description": ""
      },
      {
        "name": "replace_unhealthy_instances",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "spot_maintenance_strategies",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "capacity_rebalance",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "replacement_strategy",
                "type": "string",
                "description": ""
              },
              {
                "name": "termination_delay",
                "type": "integer",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "spot_max_total_price",
        "type": "string",
        "description": ""
      },
      {
        "name": "spot_price",
        "type": "string",
        "description": ""
      },
      {
        "name": "target_capacity",
        "type": "integer",
        "description": ""
      },
      {
        "name": "terminate_instances_with_expiration",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "type",
        "type": "string",
        "description": ""
      },
      {
        "name": "valid_from",
        "type": "string",
        "description": ""
      },
      {
        "name": "valid_until",
        "type": "string",
        "description": ""
      },
      {
        "name": "tag_specifications",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "resource_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "tags",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "key",
                "type": "string",
                "description": "The tag key."
              },
              {
                "name": "value",
                "type": "string",
                "description": "The tag value."
              }
            ]
          }
        ]
      },
      {
        "name": "target_capacity_unit_type",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-spotfleet.html"><code>AWS::EC2::SpotFleet</code></a>.

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
    <td><CopyableCode code="SpotFleetRequestConfigData, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>spot_fleet</code>.
```sql
SELECT
region,
id,
spot_fleet_request_config_data
FROM awscc.ec2.spot_fleets
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>spot_fleet</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.spot_fleets (
 SpotFleetRequestConfigData,
 region
)
SELECT 
'{{ SpotFleetRequestConfigData }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.spot_fleets (
 SpotFleetRequestConfigData,
 region
)
SELECT 
 '{{ SpotFleetRequestConfigData }}',
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
  - name: spot_fleet
    props:
      - name: SpotFleetRequestConfigData
        value:
          AllocationStrategy: '{{ AllocationStrategy }}'
          Context: '{{ Context }}'
          ExcessCapacityTerminationPolicy: '{{ ExcessCapacityTerminationPolicy }}'
          IamFleetRole: '{{ IamFleetRole }}'
          InstanceInterruptionBehavior: '{{ InstanceInterruptionBehavior }}'
          InstancePoolsToUseCount: '{{ InstancePoolsToUseCount }}'
          LaunchSpecifications:
            - BlockDeviceMappings:
                - DeviceName: '{{ DeviceName }}'
                  Ebs:
                    DeleteOnTermination: '{{ DeleteOnTermination }}'
                    Encrypted: '{{ Encrypted }}'
                    Iops: '{{ Iops }}'
                    SnapshotId: '{{ SnapshotId }}'
                    VolumeSize: '{{ VolumeSize }}'
                    VolumeType: '{{ VolumeType }}'
                  NoDevice: '{{ NoDevice }}'
                  VirtualName: '{{ VirtualName }}'
              EbsOptimized: '{{ EbsOptimized }}'
              IamInstanceProfile:
                Arn: '{{ Arn }}'
              ImageId: '{{ ImageId }}'
              InstanceType: '{{ InstanceType }}'
              KernelId: '{{ KernelId }}'
              KeyName: '{{ KeyName }}'
              Monitoring:
                Enabled: '{{ Enabled }}'
              NetworkInterfaces:
                - AssociatePublicIpAddress: '{{ AssociatePublicIpAddress }}'
                  DeleteOnTermination: '{{ DeleteOnTermination }}'
                  Description: '{{ Description }}'
                  DeviceIndex: '{{ DeviceIndex }}'
                  Groups:
                    - '{{ Groups[0] }}'
                  Ipv6AddressCount: '{{ Ipv6AddressCount }}'
                  Ipv6Addresses:
                    - Ipv6Address: '{{ Ipv6Address }}'
                  NetworkInterfaceId: '{{ NetworkInterfaceId }}'
                  PrivateIpAddresses:
                    - Primary: '{{ Primary }}'
                      PrivateIpAddress: '{{ PrivateIpAddress }}'
                  SecondaryPrivateIpAddressCount: '{{ SecondaryPrivateIpAddressCount }}'
                  SubnetId: '{{ SubnetId }}'
              Placement:
                AvailabilityZone: '{{ AvailabilityZone }}'
                GroupName: '{{ GroupName }}'
                Tenancy: '{{ Tenancy }}'
              RamdiskId: '{{ RamdiskId }}'
              SecurityGroups:
                - GroupId: '{{ GroupId }}'
              SpotPrice: '{{ SpotPrice }}'
              SubnetId: '{{ SubnetId }}'
              TagSpecifications:
                - ResourceType: '{{ ResourceType }}'
                  Tags:
                    - Key: '{{ Key }}'
                      Value: '{{ Value }}'
              UserData: '{{ UserData }}'
              WeightedCapacity: null
              InstanceRequirements:
                VCpuCount:
                  Min: '{{ Min }}'
                  Max: '{{ Max }}'
                MemoryMiB:
                  Min: '{{ Min }}'
                  Max: '{{ Max }}'
                CpuManufacturers:
                  - '{{ CpuManufacturers[0] }}'
                MemoryGiBPerVCpu:
                  Min: null
                  Max: null
                AllowedInstanceTypes:
                  - '{{ AllowedInstanceTypes[0] }}'
                ExcludedInstanceTypes:
                  - '{{ ExcludedInstanceTypes[0] }}'
                InstanceGenerations:
                  - '{{ InstanceGenerations[0] }}'
                SpotMaxPricePercentageOverLowestPrice: '{{ SpotMaxPricePercentageOverLowestPrice }}'
                OnDemandMaxPricePercentageOverLowestPrice: '{{ OnDemandMaxPricePercentageOverLowestPrice }}'
                MaxSpotPriceAsPercentageOfOptimalOnDemandPrice: '{{ MaxSpotPriceAsPercentageOfOptimalOnDemandPrice }}'
                BareMetal: '{{ BareMetal }}'
                BurstablePerformance: '{{ BurstablePerformance }}'
                RequireHibernateSupport: '{{ RequireHibernateSupport }}'
                NetworkBandwidthGbps:
                  Min: null
                  Max: null
                NetworkInterfaceCount:
                  Min: '{{ Min }}'
                  Max: '{{ Max }}'
                LocalStorage: '{{ LocalStorage }}'
                LocalStorageTypes:
                  - '{{ LocalStorageTypes[0] }}'
                TotalLocalStorageGB:
                  Min: null
                  Max: null
                BaselineEbsBandwidthMbps:
                  Min: '{{ Min }}'
                  Max: '{{ Max }}'
                AcceleratorTypes:
                  - '{{ AcceleratorTypes[0] }}'
                AcceleratorCount:
                  Min: '{{ Min }}'
                  Max: '{{ Max }}'
                AcceleratorManufacturers:
                  - '{{ AcceleratorManufacturers[0] }}'
                AcceleratorNames:
                  - '{{ AcceleratorNames[0] }}'
                AcceleratorTotalMemoryMiB:
                  Min: '{{ Min }}'
                  Max: '{{ Max }}'
                BaselinePerformanceFactors:
                  Cpu:
                    References:
                      - InstanceFamily: '{{ InstanceFamily }}'
          LaunchTemplateConfigs:
            - LaunchTemplateSpecification:
                LaunchTemplateId: '{{ LaunchTemplateId }}'
                LaunchTemplateName: '{{ LaunchTemplateName }}'
                Version: '{{ Version }}'
              Overrides:
                - AvailabilityZone: '{{ AvailabilityZone }}'
                  InstanceType: '{{ InstanceType }}'
                  SpotPrice: '{{ SpotPrice }}'
                  SubnetId: '{{ SubnetId }}'
                  WeightedCapacity: null
                  InstanceRequirements: null
                  Priority: null
          LoadBalancersConfig:
            ClassicLoadBalancersConfig:
              ClassicLoadBalancers:
                - Name: '{{ Name }}'
            TargetGroupsConfig:
              TargetGroups:
                - Arn: '{{ Arn }}'
          OnDemandAllocationStrategy: '{{ OnDemandAllocationStrategy }}'
          OnDemandMaxTotalPrice: '{{ OnDemandMaxTotalPrice }}'
          OnDemandTargetCapacity: '{{ OnDemandTargetCapacity }}'
          ReplaceUnhealthyInstances: '{{ ReplaceUnhealthyInstances }}'
          SpotMaintenanceStrategies:
            CapacityRebalance:
              ReplacementStrategy: '{{ ReplacementStrategy }}'
              TerminationDelay: '{{ TerminationDelay }}'
          SpotMaxTotalPrice: '{{ SpotMaxTotalPrice }}'
          SpotPrice: '{{ SpotPrice }}'
          TargetCapacity: '{{ TargetCapacity }}'
          TerminateInstancesWithExpiration: '{{ TerminateInstancesWithExpiration }}'
          Type: '{{ Type }}'
          ValidFrom: '{{ ValidFrom }}'
          ValidUntil: '{{ ValidUntil }}'
          TagSpecifications:
            - null
          TargetCapacityUnitType: '{{ TargetCapacityUnitType }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.spot_fleets
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>spot_fleets</code> resource, the following permissions are required:

### Create
```json
iam:PassRole,
ec2:CreateTags,
ec2:RequestSpotFleet,
ec2:DescribeSpotFleetRequests,
ec2:RunInstances
```

### Delete
```json
ec2:DescribeSpotFleetRequests,
ec2:CancelSpotFleetRequests
```

### List
```json
ec2:DescribeSpotFleetRequests
```

### Read
```json
ec2:DescribeSpotFleetRequests
```

### Update
```json
ec2:ModifySpotFleetRequest,
ec2:DescribeSpotFleetRequests
```
