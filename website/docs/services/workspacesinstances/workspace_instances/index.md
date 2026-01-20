---
title: workspace_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - workspace_instances
  - workspacesinstances
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

Creates, updates, deletes or gets a <code>workspace_instance</code> resource or lists <code>workspace_instances</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>workspace_instances</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::WorkspacesInstances::WorkspaceInstance</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.workspacesinstances.workspace_instances" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "managed_instance",
    "type": "object",
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
            "description": "",
            "children": [
              {
                "name": "volume_type",
                "type": "string",
                "description": ""
              },
              {
                "name": "encrypted",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "kms_key_id",
                "type": "string",
                "description": ""
              },
              {
                "name": "iops",
                "type": "integer",
                "description": ""
              },
              {
                "name": "throughput",
                "type": "integer",
                "description": ""
              },
              {
                "name": "volume_size",
                "type": "integer",
                "description": ""
              }
            ]
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
        "name": "capacity_reservation_specification",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "capacity_reservation_preference",
            "type": "string",
            "description": ""
          },
          {
            "name": "capacity_reservation_target",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "capacity_reservation_id",
                "type": "string",
                "description": ""
              },
              {
                "name": "capacity_reservation_resource_group_arn",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "cpu_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "core_count",
            "type": "integer",
            "description": ""
          },
          {
            "name": "threads_per_core",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "credit_specification",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "cpu_credits",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "disable_api_stop",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "ebs_optimized",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "enable_primary_ipv6",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "enclave_options",
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
        "name": "hibernation_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "configured",
            "type": "boolean",
            "description": ""
          }
        ]
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
          },
          {
            "name": "name",
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
        "name": "instance_market_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "market_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "spot_options",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "instance_interruption_behavior",
                "type": "string",
                "description": ""
              },
              {
                "name": "max_price",
                "type": "string",
                "description": ""
              },
              {
                "name": "spot_instance_type",
                "type": "string",
                "description": ""
              },
              {
                "name": "valid_until_utc",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "instance_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "ipv6_address_count",
        "type": "integer",
        "description": ""
      },
      {
        "name": "key_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "license_specifications",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "license_configuration_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "maintenance_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "auto_recovery",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "metadata_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "http_endpoint",
            "type": "string",
            "description": ""
          },
          {
            "name": "http_protocol_ipv6",
            "type": "string",
            "description": ""
          },
          {
            "name": "http_put_response_hop_limit",
            "type": "integer",
            "description": ""
          },
          {
            "name": "http_tokens",
            "type": "string",
            "description": ""
          },
          {
            "name": "instance_metadata_tags",
            "type": "string",
            "description": ""
          }
        ]
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
            "name": "subnet_id",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "network_performance_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "bandwidth_weighting",
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
            "name": "group_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "group_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "partition_number",
            "type": "integer",
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
        "name": "private_dns_name_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "hostname_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "enable_resource_name_dns_arecord",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "enable_resource_name_dns_aa_aa_record",
            "type": "boolean",
            "description": ""
          }
        ]
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
            "description": "",
            "children": [
              {
                "name": "key",
                "type": "string",
                "description": ""
              },
              {
                "name": "value",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "user_data",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "workspace_instance_id",
    "type": "string",
    "description": "Unique identifier for the workspace instance"
  },
  {
    "name": "provision_state",
    "type": "string",
    "description": "The current state of the workspace instance"
  },
  {
    "name": "e_c2_managed_instance",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "instance_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesinstances-workspaceinstance.html"><code>AWS::WorkspacesInstances::WorkspaceInstance</code></a>.

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
    <td><CopyableCode code=", region" /></td>
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

Gets all properties from an individual <code>workspace_instance</code>.
```sql
SELECT
region,
managed_instance,
tags,
workspace_instance_id,
provision_state,
e_c2_managed_instance
FROM awscc.workspacesinstances.workspace_instances
WHERE region = 'us-east-1' AND data__Identifier = '<WorkspaceInstanceId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>workspace_instance</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.workspacesinstances.workspace_instances (
 ,
 region
)
SELECT 
'{{  }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.workspacesinstances.workspace_instances (
 ManagedInstance,
 Tags,
 region
)
SELECT 
 '{{ ManagedInstance }}',
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
  - name: workspace_instance
    props:
      - name: ManagedInstance
        value:
          BlockDeviceMappings:
            - DeviceName: '{{ DeviceName }}'
              Ebs:
                VolumeType: '{{ VolumeType }}'
                Encrypted: '{{ Encrypted }}'
                KmsKeyId: '{{ KmsKeyId }}'
                Iops: '{{ Iops }}'
                Throughput: '{{ Throughput }}'
                VolumeSize: '{{ VolumeSize }}'
              NoDevice: '{{ NoDevice }}'
              VirtualName: '{{ VirtualName }}'
          CapacityReservationSpecification:
            CapacityReservationPreference: '{{ CapacityReservationPreference }}'
            CapacityReservationTarget:
              CapacityReservationId: '{{ CapacityReservationId }}'
              CapacityReservationResourceGroupArn: '{{ CapacityReservationResourceGroupArn }}'
          CpuOptions:
            CoreCount: '{{ CoreCount }}'
            ThreadsPerCore: '{{ ThreadsPerCore }}'
          CreditSpecification:
            CpuCredits: '{{ CpuCredits }}'
          DisableApiStop: '{{ DisableApiStop }}'
          EbsOptimized: '{{ EbsOptimized }}'
          EnablePrimaryIpv6: '{{ EnablePrimaryIpv6 }}'
          EnclaveOptions:
            Enabled: '{{ Enabled }}'
          HibernationOptions:
            Configured: '{{ Configured }}'
          IamInstanceProfile:
            Arn: '{{ Arn }}'
            Name: '{{ Name }}'
          ImageId: '{{ ImageId }}'
          InstanceMarketOptions:
            MarketType: '{{ MarketType }}'
            SpotOptions:
              InstanceInterruptionBehavior: '{{ InstanceInterruptionBehavior }}'
              MaxPrice: '{{ MaxPrice }}'
              SpotInstanceType: '{{ SpotInstanceType }}'
              ValidUntilUtc: '{{ ValidUntilUtc }}'
          InstanceType: '{{ InstanceType }}'
          Ipv6AddressCount: '{{ Ipv6AddressCount }}'
          KeyName: '{{ KeyName }}'
          LicenseSpecifications:
            - LicenseConfigurationArn: '{{ LicenseConfigurationArn }}'
          MaintenanceOptions:
            AutoRecovery: '{{ AutoRecovery }}'
          MetadataOptions:
            HttpEndpoint: '{{ HttpEndpoint }}'
            HttpProtocolIpv6: '{{ HttpProtocolIpv6 }}'
            HttpPutResponseHopLimit: '{{ HttpPutResponseHopLimit }}'
            HttpTokens: '{{ HttpTokens }}'
            InstanceMetadataTags: '{{ InstanceMetadataTags }}'
          Monitoring:
            Enabled: '{{ Enabled }}'
          NetworkInterfaces:
            - Description: '{{ Description }}'
              DeviceIndex: '{{ DeviceIndex }}'
              Groups:
                - '{{ Groups[0] }}'
              SubnetId: '{{ SubnetId }}'
          NetworkPerformanceOptions:
            BandwidthWeighting: '{{ BandwidthWeighting }}'
          Placement:
            AvailabilityZone: '{{ AvailabilityZone }}'
            GroupId: '{{ GroupId }}'
            GroupName: '{{ GroupName }}'
            PartitionNumber: '{{ PartitionNumber }}'
            Tenancy: '{{ Tenancy }}'
          PrivateDnsNameOptions:
            HostnameType: '{{ HostnameType }}'
            EnableResourceNameDnsARecord: '{{ EnableResourceNameDnsARecord }}'
            EnableResourceNameDnsAAAARecord: '{{ EnableResourceNameDnsAAAARecord }}'
          SubnetId: '{{ SubnetId }}'
          TagSpecifications:
            - ResourceType: '{{ ResourceType }}'
              Tags:
                - Key: '{{ Key }}'
                  Value: '{{ Value }}'
          UserData: '{{ UserData }}'
      - name: Tags
        value:
          - null

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.workspacesinstances.workspace_instances
WHERE data__Identifier = '<WorkspaceInstanceId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>workspace_instances</code> resource, the following permissions are required:

### Create
```json
workspaces-instances:CreateWorkspaceInstance,
workspaces-instances:GetWorkspaceInstance,
workspaces-instances:TagResource,
ec2:RunInstances,
ec2:DescribeInstances,
ec2:DescribeInstanceStatus,
ec2:CreateTags,
iam:PassRole
```

### Read
```json
workspaces-instances:GetWorkspaceInstance,
workspaces-instances:ListTagsForResource
```

### Update
```json
workspaces-instances:TagResource,
workspaces-instances:UntagResource,
workspaces-instances:ListTagsForResource,
workspaces-instances:GetWorkspaceInstance
```

### Delete
```json
workspaces-instances:DeleteWorkspaceInstance,
workspaces-instances:GetWorkspaceInstance,
ec2:TerminateInstances,
ec2:DescribeInstances,
ec2:DescribeInstanceStatus
```

### List
```json
workspaces-instances:ListWorkspaceInstances
```
