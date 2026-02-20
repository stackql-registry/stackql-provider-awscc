---
title: ec2fleets
hide_title: false
hide_table_of_contents: false
keywords:
  - ec2fleets
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

Creates, updates, deletes or gets an <code>ec2fleet</code> resource or lists <code>ec2fleets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>ec2fleets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::EC2::EC2Fleet</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.ec2fleets" /></td></tr>
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
    "name": "target_capacity_specification",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "default_target_capacity_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "target_capacity_unit_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "total_target_capacity",
        "type": "integer",
        "description": ""
      },
      {
        "name": "on_demand_target_capacity",
        "type": "integer",
        "description": ""
      },
      {
        "name": "spot_target_capacity",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "on_demand_options",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "single_availability_zone",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "allocation_strategy",
        "type": "string",
        "description": ""
      },
      {
        "name": "single_instance_type",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "min_target_capacity",
        "type": "integer",
        "description": ""
      },
      {
        "name": "max_total_price",
        "type": "string",
        "description": ""
      },
      {
        "name": "capacity_reservation_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "usage_strategy",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "type",
    "type": "string",
    "description": ""
  },
  {
    "name": "excess_capacity_termination_policy",
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
        "description": "The type of resource to tag. You can specify tags for the following resource types only: &#96;&#96;instance&#96;&#96; &#124; &#96;&#96;volume&#96;&#96; &#124; &#96;&#96;network-interface&#96;&#96; &#124; &#96;&#96;spot-instances-request&#96;&#96;. If the instance does not include the resource type that you specify, the instance launch fails. For example, not all instance types include a volume.<br />To tag a resource after it has been created, see &#91;CreateTags&#93;(https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API&#95;CreateTags.html)."
      },
      {
        "name": "tags",
        "type": "array",
        "description": "The tags to apply to the resource.",
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
    "name": "spot_options",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "maintenance_strategies",
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
        "name": "single_availability_zone",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "allocation_strategy",
        "type": "string",
        "description": ""
      },
      {
        "name": "single_instance_type",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "min_target_capacity",
        "type": "integer",
        "description": ""
      },
      {
        "name": "max_total_price",
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
      }
    ]
  },
  {
    "name": "valid_from",
    "type": "string",
    "description": ""
  },
  {
    "name": "replace_unhealthy_instances",
    "type": "boolean",
    "description": ""
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
            "name": "launch_template_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "launch_template_id",
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
            "name": "weighted_capacity",
            "type": "number",
            "description": ""
          },
          {
            "name": "placement",
            "type": "object",
            "description": "Specifies the placement of an instance.<br />&#96;&#96;Placement&#96;&#96; is a property of &#91;AWS::EC2::LaunchTemplate LaunchTemplateData&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).",
            "children": [
              {
                "name": "group_name",
                "type": "string",
                "description": "The name of the placement group for the instance."
              },
              {
                "name": "tenancy",
                "type": "string",
                "description": "The tenancy of the instance. An instance with a tenancy of dedicated runs on single-tenant hardware."
              },
              {
                "name": "spread_domain",
                "type": "string",
                "description": "Reserved for future use."
              },
              {
                "name": "partition_number",
                "type": "integer",
                "description": "The number of the partition the instance should launch in. Valid only if the placement group strategy is set to &#96;&#96;partition&#96;&#96;."
              },
              {
                "name": "availability_zone",
                "type": "string",
                "description": "The Availability Zone for the instance."
              },
              {
                "name": "affinity",
                "type": "string",
                "description": "The affinity setting for an instance on a Dedicated Host."
              },
              {
                "name": "host_id",
                "type": "string",
                "description": "The ID of the Dedicated Host for the instance."
              },
              {
                "name": "host_resource_group_arn",
                "type": "string",
                "description": "The ARN of the host resource group in which to launch the instances. If you specify a host resource group ARN, omit the &#42;Tenancy&#42; parameter or set it to &#96;&#96;host&#96;&#96;."
              },
              {
                "name": "group_id",
                "type": "string",
                "description": "The Group Id of a placement group. You must specify the Placement Group &#42;Group Id&#42; to launch an instance in a shared placement group."
              }
            ]
          },
          {
            "name": "priority",
            "type": "number",
            "description": ""
          },
          {
            "name": "availability_zone",
            "type": "string",
            "description": ""
          },
          {
            "name": "subnet_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "instance_type",
            "type": "string",
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
          },
          {
            "name": "max_price",
            "type": "string",
            "description": ""
          },
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
          }
        ]
      }
    ]
  },
  {
    "name": "fleet_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "terminate_instances_with_expiration",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "valid_until",
    "type": "string",
    "description": ""
  },
  {
    "name": "context",
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
    "name": "fleet_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ec2fleet.html"><code>AWS::EC2::EC2Fleet</code></a>.

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
    <td><code>ec2fleets</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="TargetCapacitySpecification, LaunchTemplateConfigs, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>ec2fleets</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>ec2fleets</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>ec2fleets_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>ec2fleets</code></td>
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

Gets all properties from an individual <code>ec2fleet</code>.
```sql
SELECT
region,
target_capacity_specification,
on_demand_options,
type,
excess_capacity_termination_policy,
tag_specifications,
spot_options,
valid_from,
replace_unhealthy_instances,
launch_template_configs,
fleet_id,
terminate_instances_with_expiration,
valid_until,
context
FROM awscc.ec2.ec2fleets
WHERE region = 'us-east-1' AND Identifier = '<FleetId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>ec2fleets</code> in a region.
```sql
SELECT
region,
fleet_id
FROM awscc.ec2.ec2fleets_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>ec2fleet</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.ec2fleets (
 TargetCapacitySpecification,
 LaunchTemplateConfigs,
 region
)
SELECT 
'{{ TargetCapacitySpecification }}',
 '{{ LaunchTemplateConfigs }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.ec2fleets (
 TargetCapacitySpecification,
 OnDemandOptions,
 Type,
 ExcessCapacityTerminationPolicy,
 TagSpecifications,
 SpotOptions,
 ValidFrom,
 ReplaceUnhealthyInstances,
 LaunchTemplateConfigs,
 TerminateInstancesWithExpiration,
 ValidUntil,
 Context,
 region
)
SELECT 
 '{{ TargetCapacitySpecification }}',
 '{{ OnDemandOptions }}',
 '{{ Type }}',
 '{{ ExcessCapacityTerminationPolicy }}',
 '{{ TagSpecifications }}',
 '{{ SpotOptions }}',
 '{{ ValidFrom }}',
 '{{ ReplaceUnhealthyInstances }}',
 '{{ LaunchTemplateConfigs }}',
 '{{ TerminateInstancesWithExpiration }}',
 '{{ ValidUntil }}',
 '{{ Context }}',
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
  - name: ec2fleet
    props:
      - name: TargetCapacitySpecification
        value:
          DefaultTargetCapacityType: '{{ DefaultTargetCapacityType }}'
          TargetCapacityUnitType: '{{ TargetCapacityUnitType }}'
          TotalTargetCapacity: '{{ TotalTargetCapacity }}'
          OnDemandTargetCapacity: '{{ OnDemandTargetCapacity }}'
          SpotTargetCapacity: '{{ SpotTargetCapacity }}'
      - name: OnDemandOptions
        value:
          SingleAvailabilityZone: '{{ SingleAvailabilityZone }}'
          AllocationStrategy: '{{ AllocationStrategy }}'
          SingleInstanceType: '{{ SingleInstanceType }}'
          MinTargetCapacity: '{{ MinTargetCapacity }}'
          MaxTotalPrice: '{{ MaxTotalPrice }}'
          CapacityReservationOptions:
            UsageStrategy: '{{ UsageStrategy }}'
      - name: Type
        value: '{{ Type }}'
      - name: ExcessCapacityTerminationPolicy
        value: '{{ ExcessCapacityTerminationPolicy }}'
      - name: TagSpecifications
        value:
          - ResourceType: '{{ ResourceType }}'
            Tags:
              - Key: '{{ Key }}'
                Value: '{{ Value }}'
      - name: SpotOptions
        value:
          MaintenanceStrategies:
            CapacityRebalance:
              ReplacementStrategy: '{{ ReplacementStrategy }}'
              TerminationDelay: '{{ TerminationDelay }}'
          SingleAvailabilityZone: '{{ SingleAvailabilityZone }}'
          AllocationStrategy: '{{ AllocationStrategy }}'
          SingleInstanceType: '{{ SingleInstanceType }}'
          MinTargetCapacity: '{{ MinTargetCapacity }}'
          MaxTotalPrice: '{{ MaxTotalPrice }}'
          InstanceInterruptionBehavior: '{{ InstanceInterruptionBehavior }}'
          InstancePoolsToUseCount: '{{ InstancePoolsToUseCount }}'
      - name: ValidFrom
        value: '{{ ValidFrom }}'
      - name: ReplaceUnhealthyInstances
        value: '{{ ReplaceUnhealthyInstances }}'
      - name: LaunchTemplateConfigs
        value:
          - LaunchTemplateSpecification:
              LaunchTemplateName: '{{ LaunchTemplateName }}'
              LaunchTemplateId: '{{ LaunchTemplateId }}'
              Version: '{{ Version }}'
            Overrides:
              - WeightedCapacity: null
                Placement:
                  GroupName: '{{ GroupName }}'
                  Tenancy: '{{ Tenancy }}'
                  SpreadDomain: '{{ SpreadDomain }}'
                  PartitionNumber: '{{ PartitionNumber }}'
                  AvailabilityZone: '{{ AvailabilityZone }}'
                  Affinity: '{{ Affinity }}'
                  HostId: '{{ HostId }}'
                  HostResourceGroupArn: '{{ HostResourceGroupArn }}'
                  GroupId: '{{ GroupId }}'
                Priority: null
                AvailabilityZone: '{{ AvailabilityZone }}'
                SubnetId: '{{ SubnetId }}'
                InstanceType: '{{ InstanceType }}'
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
                MaxPrice: '{{ MaxPrice }}'
                BlockDeviceMappings:
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
      - name: TerminateInstancesWithExpiration
        value: '{{ TerminateInstancesWithExpiration }}'
      - name: ValidUntil
        value: '{{ ValidUntil }}'
      - name: Context
        value: '{{ Context }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.ec2.ec2fleets
SET PatchDocument = string('{{ {
    "TargetCapacitySpecification": target_capacity_specification,
    "ExcessCapacityTerminationPolicy": excess_capacity_termination_policy,
    "Context": context
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<FleetId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.ec2fleets
WHERE Identifier = '<FleetId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>ec2fleets</code> resource, the following permissions are required:

### Create
```json
ec2:CreateFleet,
ec2:DescribeFleets
```

### Delete
```json
ec2:DescribeFleets,
ec2:DeleteFleets
```

### List
```json
ec2:DescribeFleets
```

### Read
```json
ec2:DescribeFleets
```

### Update
```json
ec2:ModifyFleet,
ec2:DescribeFleets
```
