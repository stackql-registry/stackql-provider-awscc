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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-spotfleet.html"><code>AWS::EC2::SpotFleet</code></a>.

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
    <td><code>spot_fleets</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="SpotFleetRequestConfigData, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>spot_fleets</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>spot_fleets</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>spot_fleets_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>spot_fleets</code></td>
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

Gets all properties from an individual <code>spot_fleet</code>.
```sql
SELECT
region,
id,
spot_fleet_request_config_data
FROM awscc.ec2.spot_fleets
WHERE region = 'us-east-1' AND Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>spot_fleets</code> in a region.
```sql
SELECT
region,
id
FROM awscc.ec2.spot_fleets_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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
'{{ spot_fleet_request_config_data }}',
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
 '{{ spot_fleet_request_config_data }}',
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
      - name: spot_fleet_request_config_data
        value:
          allocation_strategy: '{{ allocation_strategy }}'
          context: '{{ context }}'
          excess_capacity_termination_policy: '{{ excess_capacity_termination_policy }}'
          iam_fleet_role: '{{ iam_fleet_role }}'
          instance_interruption_behavior: '{{ instance_interruption_behavior }}'
          instance_pools_to_use_count: '{{ instance_pools_to_use_count }}'
          launch_specifications:
            - block_device_mappings:
                - device_name: '{{ device_name }}'
                  ebs:
                    delete_on_termination: '{{ delete_on_termination }}'
                    encrypted: '{{ encrypted }}'
                    iops: '{{ iops }}'
                    snapshot_id: '{{ snapshot_id }}'
                    volume_size: '{{ volume_size }}'
                    volume_type: '{{ volume_type }}'
                  no_device: '{{ no_device }}'
                  virtual_name: '{{ virtual_name }}'
              ebs_optimized: '{{ ebs_optimized }}'
              iam_instance_profile:
                arn: '{{ arn }}'
              image_id: '{{ image_id }}'
              instance_type: '{{ instance_type }}'
              kernel_id: '{{ kernel_id }}'
              key_name: '{{ key_name }}'
              monitoring:
                enabled: '{{ enabled }}'
              network_interfaces:
                - associate_public_ip_address: '{{ associate_public_ip_address }}'
                  delete_on_termination: '{{ delete_on_termination }}'
                  description: '{{ description }}'
                  device_index: '{{ device_index }}'
                  groups:
                    - '{{ groups[0] }}'
                  ipv6_address_count: '{{ ipv6_address_count }}'
                  ipv6_addresses:
                    - ipv6_address: '{{ ipv6_address }}'
                  network_interface_id: '{{ network_interface_id }}'
                  private_ip_addresses:
                    - primary: '{{ primary }}'
                      private_ip_address: '{{ private_ip_address }}'
                  secondary_private_ip_address_count: '{{ secondary_private_ip_address_count }}'
                  subnet_id: '{{ subnet_id }}'
              placement:
                availability_zone: '{{ availability_zone }}'
                group_name: '{{ group_name }}'
                tenancy: '{{ tenancy }}'
              ramdisk_id: '{{ ramdisk_id }}'
              security_groups:
                - group_id: '{{ group_id }}'
              spot_price: '{{ spot_price }}'
              subnet_id: '{{ subnet_id }}'
              tag_specifications:
                - resource_type: '{{ resource_type }}'
                  tags:
                    - key: '{{ key }}'
                      value: '{{ value }}'
              user_data: '{{ user_data }}'
              weighted_capacity: null
              instance_requirements:
                v_cpu_count:
                  min: '{{ min }}'
                  max: '{{ max }}'
                memory_mi_b:
                  min: '{{ min }}'
                  max: '{{ max }}'
                cpu_manufacturers:
                  - '{{ cpu_manufacturers[0] }}'
                memory_gi_bper_vcpu:
                  min: null
                  max: null
                allowed_instance_types:
                  - '{{ allowed_instance_types[0] }}'
                excluded_instance_types:
                  - '{{ excluded_instance_types[0] }}'
                instance_generations:
                  - '{{ instance_generations[0] }}'
                spot_max_price_percentage_over_lowest_price: '{{ spot_max_price_percentage_over_lowest_price }}'
                on_demand_max_price_percentage_over_lowest_price: '{{ on_demand_max_price_percentage_over_lowest_price }}'
                max_spot_price_as_percentage_of_optimal_on_demand_price: '{{ max_spot_price_as_percentage_of_optimal_on_demand_price }}'
                bare_metal: '{{ bare_metal }}'
                burstable_performance: '{{ burstable_performance }}'
                require_hibernate_support: '{{ require_hibernate_support }}'
                network_bandwidth_gbps:
                  min: null
                  max: null
                network_interface_count:
                  min: '{{ min }}'
                  max: '{{ max }}'
                local_storage: '{{ local_storage }}'
                local_storage_types:
                  - '{{ local_storage_types[0] }}'
                total_local_storage_gb:
                  min: null
                  max: null
                baseline_ebs_bandwidth_mbps:
                  min: '{{ min }}'
                  max: '{{ max }}'
                accelerator_types:
                  - '{{ accelerator_types[0] }}'
                accelerator_count:
                  min: '{{ min }}'
                  max: '{{ max }}'
                accelerator_manufacturers:
                  - '{{ accelerator_manufacturers[0] }}'
                accelerator_names:
                  - '{{ accelerator_names[0] }}'
                accelerator_total_memory_mi_b:
                  min: '{{ min }}'
                  max: '{{ max }}'
                baseline_performance_factors:
                  cpu:
                    references:
                      - instance_family: '{{ instance_family }}'
          launch_template_configs:
            - launch_template_specification:
                launch_template_id: '{{ launch_template_id }}'
                launch_template_name: '{{ launch_template_name }}'
                version: '{{ version }}'
              overrides:
                - availability_zone: '{{ availability_zone }}'
                  instance_type: '{{ instance_type }}'
                  spot_price: '{{ spot_price }}'
                  subnet_id: '{{ subnet_id }}'
                  weighted_capacity: null
                  instance_requirements: null
                  priority: null
          load_balancers_config:
            classic_load_balancers_config:
              classic_load_balancers:
                - name: '{{ name }}'
            target_groups_config:
              target_groups:
                - arn: '{{ arn }}'
          on_demand_allocation_strategy: '{{ on_demand_allocation_strategy }}'
          on_demand_max_total_price: '{{ on_demand_max_total_price }}'
          on_demand_target_capacity: '{{ on_demand_target_capacity }}'
          replace_unhealthy_instances: '{{ replace_unhealthy_instances }}'
          spot_maintenance_strategies:
            capacity_rebalance:
              replacement_strategy: '{{ replacement_strategy }}'
              termination_delay: '{{ termination_delay }}'
          spot_max_total_price: '{{ spot_max_total_price }}'
          spot_price: '{{ spot_price }}'
          target_capacity: '{{ target_capacity }}'
          terminate_instances_with_expiration: '{{ terminate_instances_with_expiration }}'
          type: '{{ type }}'
          valid_from: '{{ valid_from }}'
          valid_until: '{{ valid_until }}'
          tag_specifications:
            - null
          target_capacity_unit_type: '{{ target_capacity_unit_type }}'
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.spot_fleets
WHERE Identifier = '{{ id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>spot_fleets</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

```json
iam:PassRole,
ec2:CreateTags,
ec2:RequestSpotFleet,
ec2:DescribeSpotFleetRequests,
ec2:RunInstances
```

</TabItem>
<TabItem value="delete">

```json
ec2:DescribeSpotFleetRequests,
ec2:CancelSpotFleetRequests
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeSpotFleetRequests
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeSpotFleetRequests
```

</TabItem>
<TabItem value="update">

```json
ec2:ModifySpotFleetRequest,
ec2:DescribeSpotFleetRequests
```

</TabItem>
</Tabs>