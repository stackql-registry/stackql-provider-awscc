---
title: launch_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - launch_configurations
  - autoscaling
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

Creates, updates, deletes or gets a <code>launch_configuration</code> resource or lists <code>launch_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>launch_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::AutoScaling::LaunchConfiguration resource specifies the launch configuration that can be used by an Auto Scaling group to configure Amazon EC2 instances.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.autoscaling.launch_configurations" /></td></tr>
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
    "name": "placement_tenancy",
    "type": "string",
    "description": "The tenancy of the instance, either default or dedicated."
  },
  {
    "name": "security_groups",
    "type": "array",
    "description": "A list that contains the security groups to assign to the instances in the Auto Scaling group."
  },
  {
    "name": "launch_configuration_name",
    "type": "string",
    "description": "The name of the launch configuration. This name must be unique per Region per account."
  },
  {
    "name": "metadata_options",
    "type": "object",
    "description": "The metadata options for the instances.",
    "children": [
      {
        "name": "http_put_response_hop_limit",
        "type": "integer",
        "description": "The desired HTTP PUT response hop limit for instance metadata requests."
      },
      {
        "name": "http_tokens",
        "type": "string",
        "description": "The state of token usage for your instance metadata requests."
      },
      {
        "name": "http_endpoint",
        "type": "string",
        "description": "This parameter enables or disables the HTTP metadata endpoint on your instances."
      }
    ]
  },
  {
    "name": "instance_id",
    "type": "string",
    "description": "The ID of the Amazon EC2 instance you want to use to create the launch configuration."
  },
  {
    "name": "user_data",
    "type": "string",
    "description": "The Base64-encoded user data to make available to the launched EC2 instances."
  },
  {
    "name": "classic_link_vpc_security_groups",
    "type": "array",
    "description": "The IDs of one or more security groups for the VPC that you specified in the ClassicLinkVPCId property."
  },
  {
    "name": "block_device_mappings",
    "type": "array",
    "description": "Specifies how block devices are exposed to the instance. You can specify virtual devices and EBS volumes.",
    "children": [
      {
        "name": "ebs",
        "type": "object",
        "description": "Parameters used to automatically set up EBS volumes when an instance is launched.",
        "children": [
          {
            "name": "snapshot_id",
            "type": "string",
            "description": "The snapshot ID of the volume to use."
          },
          {
            "name": "volume_type",
            "type": "string",
            "description": "The volume type."
          },
          {
            "name": "encrypted",
            "type": "boolean",
            "description": "Specifies whether the volume should be encrypted."
          },
          {
            "name": "throughput",
            "type": "integer",
            "description": "The throughput (MiBps) to provision for a gp3 volume."
          },
          {
            "name": "iops",
            "type": "integer",
            "description": "The number of input/output (I/O) operations per second (IOPS) to provision for the volume."
          },
          {
            "name": "volume_size",
            "type": "integer",
            "description": "The volume size, in GiBs."
          },
          {
            "name": "delete_on_termination",
            "type": "boolean",
            "description": "Indicates whether the volume is deleted on instance termination."
          }
        ]
      },
      {
        "name": "no_device",
        "type": "boolean",
        "description": "Setting this value to true suppresses the specified device included in the block device mapping of the AMI."
      },
      {
        "name": "virtual_name",
        "type": "string",
        "description": "The name of the virtual device."
      },
      {
        "name": "device_name",
        "type": "string",
        "description": "The device name exposed to the EC2 instance (for example, /dev/sdh or xvdh)."
      }
    ]
  },
  {
    "name": "iam_instance_profile",
    "type": "string",
    "description": "Provides the name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance. The instance profile contains the IAM role."
  },
  {
    "name": "kernel_id",
    "type": "string",
    "description": "Provides the ID of the kernel associated with the EC2 AMI."
  },
  {
    "name": "associate_public_ip_address",
    "type": "boolean",
    "description": "For Auto Scaling groups that are running in a virtual private cloud (VPC), specifies whether to assign a public IP address to the group's instances."
  },
  {
    "name": "classic_link_vpc_id",
    "type": "string",
    "description": "The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to."
  },
  {
    "name": "ebs_optimized",
    "type": "boolean",
    "description": "Specifies whether the launch configuration is optimized for EBS I/O (true) or not (false)."
  },
  {
    "name": "key_name",
    "type": "string",
    "description": "Provides the name of the EC2 key pair."
  },
  {
    "name": "spot_price",
    "type": "string",
    "description": "The maximum hourly price you are willing to pay for any Spot Instances launched to fulfill the request."
  },
  {
    "name": "image_id",
    "type": "string",
    "description": "Provides the unique ID of the Amazon Machine Image (AMI) that was assigned during registration."
  },
  {
    "name": "instance_type",
    "type": "string",
    "description": "Specifies the instance type of the EC2 instance."
  },
  {
    "name": "ram_disk_id",
    "type": "string",
    "description": "The ID of the RAM disk to select."
  },
  {
    "name": "instance_monitoring",
    "type": "boolean",
    "description": "Controls whether instances in this group are launched with detailed (true) or basic (false) monitoring."
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
    "name": "launch_configuration_name",
    "type": "string",
    "description": "The name of the launch configuration. This name must be unique per Region per account."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-launchconfiguration.html"><code>AWS::AutoScaling::LaunchConfiguration</code></a>.

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
    <td><code>launch_configurations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ImageId, InstanceType, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>launch_configurations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>launch_configurations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>launch_configurations</code></td>
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

Gets all properties from an individual <code>launch_configuration</code>.
```sql
SELECT
region,
placement_tenancy,
security_groups,
launch_configuration_name,
metadata_options,
instance_id,
user_data,
classic_link_vpc_security_groups,
block_device_mappings,
iam_instance_profile,
kernel_id,
associate_public_ip_address,
classic_link_vpc_id,
ebs_optimized,
key_name,
spot_price,
image_id,
instance_type,
ram_disk_id,
instance_monitoring
FROM awscc.autoscaling.launch_configurations
WHERE region = 'us-east-1' AND Identifier = '<LaunchConfigurationName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>launch_configurations</code> in a region.
```sql
SELECT
region,
launch_configuration_name
FROM awscc.autoscaling.launch_configurations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>launch_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.autoscaling.launch_configurations (
 ImageId,
 InstanceType,
 region
)
SELECT 
'{{ ImageId }}',
 '{{ InstanceType }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.autoscaling.launch_configurations (
 PlacementTenancy,
 SecurityGroups,
 LaunchConfigurationName,
 MetadataOptions,
 InstanceId,
 UserData,
 ClassicLinkVPCSecurityGroups,
 BlockDeviceMappings,
 IamInstanceProfile,
 KernelId,
 AssociatePublicIpAddress,
 ClassicLinkVPCId,
 EbsOptimized,
 KeyName,
 SpotPrice,
 ImageId,
 InstanceType,
 RamDiskId,
 InstanceMonitoring,
 region
)
SELECT 
 '{{ PlacementTenancy }}',
 '{{ SecurityGroups }}',
 '{{ LaunchConfigurationName }}',
 '{{ MetadataOptions }}',
 '{{ InstanceId }}',
 '{{ UserData }}',
 '{{ ClassicLinkVPCSecurityGroups }}',
 '{{ BlockDeviceMappings }}',
 '{{ IamInstanceProfile }}',
 '{{ KernelId }}',
 '{{ AssociatePublicIpAddress }}',
 '{{ ClassicLinkVPCId }}',
 '{{ EbsOptimized }}',
 '{{ KeyName }}',
 '{{ SpotPrice }}',
 '{{ ImageId }}',
 '{{ InstanceType }}',
 '{{ RamDiskId }}',
 '{{ InstanceMonitoring }}',
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
  - name: launch_configuration
    props:
      - name: PlacementTenancy
        value: '{{ PlacementTenancy }}'
      - name: SecurityGroups
        value:
          - '{{ SecurityGroups[0] }}'
      - name: LaunchConfigurationName
        value: '{{ LaunchConfigurationName }}'
      - name: MetadataOptions
        value:
          HttpPutResponseHopLimit: '{{ HttpPutResponseHopLimit }}'
          HttpTokens: '{{ HttpTokens }}'
          HttpEndpoint: '{{ HttpEndpoint }}'
      - name: InstanceId
        value: '{{ InstanceId }}'
      - name: UserData
        value: '{{ UserData }}'
      - name: ClassicLinkVPCSecurityGroups
        value:
          - '{{ ClassicLinkVPCSecurityGroups[0] }}'
      - name: BlockDeviceMappings
        value:
          - Ebs:
              SnapshotId: '{{ SnapshotId }}'
              VolumeType: '{{ VolumeType }}'
              Encrypted: '{{ Encrypted }}'
              Throughput: '{{ Throughput }}'
              Iops: '{{ Iops }}'
              VolumeSize: '{{ VolumeSize }}'
              DeleteOnTermination: '{{ DeleteOnTermination }}'
            NoDevice: '{{ NoDevice }}'
            VirtualName: '{{ VirtualName }}'
            DeviceName: '{{ DeviceName }}'
      - name: IamInstanceProfile
        value: '{{ IamInstanceProfile }}'
      - name: KernelId
        value: '{{ KernelId }}'
      - name: AssociatePublicIpAddress
        value: '{{ AssociatePublicIpAddress }}'
      - name: ClassicLinkVPCId
        value: '{{ ClassicLinkVPCId }}'
      - name: EbsOptimized
        value: '{{ EbsOptimized }}'
      - name: KeyName
        value: '{{ KeyName }}'
      - name: SpotPrice
        value: '{{ SpotPrice }}'
      - name: ImageId
        value: '{{ ImageId }}'
      - name: InstanceType
        value: '{{ InstanceType }}'
      - name: RamDiskId
        value: '{{ RamDiskId }}'
      - name: InstanceMonitoring
        value: '{{ InstanceMonitoring }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.autoscaling.launch_configurations
WHERE Identifier = '<LaunchConfigurationName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>launch_configurations</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="read">

```json
autoscaling:DescribeLaunchConfigurations
```

</TabItem>
<TabItem value="create">

```json
autoscaling:CreateLaunchConfiguration,
autoscaling:DescribeLaunchConfigurations,
iam:PassRole
```

</TabItem>
<TabItem value="list">

```json
autoscaling:DescribeLaunchConfigurations
```

</TabItem>
<TabItem value="delete">

```json
autoscaling:DeleteLaunchConfiguration,
autoscaling:DescribeLaunchConfigurations
```

</TabItem>
</Tabs>