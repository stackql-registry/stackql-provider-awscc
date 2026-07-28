---
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
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

import CodeBlock from '@theme/CodeBlock';
import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets an <code>instance</code> resource or lists <code>instances</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>instances</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::EC2::Instance</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.instances" /></td></tr>
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
    "name": "private_dns_name",
    "type": "string",
    "description": "The private DNS name of the specified instance. For example: ip-10-24-34-0.ec2.internal."
  },
  {
    "name": "volumes",
    "type": "array",
    "description": "The volumes to attach to the instance.",
    "children": [
      {
        "name": "volume_id",
        "type": "string",
        "description": "The ID of the EBS volume. The volume and instance must be within the same Availability Zone."
      },
      {
        "name": "device",
        "type": "string",
        "description": "The device name (for example, /dev/sdh or xvdh)."
      }
    ]
  },
  {
    "name": "private_ip",
    "type": "string",
    "description": "The private IP address of the specified instance. For example: 10.24.34.0."
  },
  {
    "name": "enclave_options",
    "type": "object",
    "description": "Indicates whether the instance is enabled for AWS Nitro Enclaves.",
    "children": [
      {
        "name": "enabled",
        "type": "boolean",
        "description": "If this parameter is set to true, the instance is enabled for AWS Nitro Enclaves; otherwise, it is not enabled for AWS Nitro Enclaves."
      }
    ]
  },
  {
    "name": "image_id",
    "type": "string",
    "description": "The ID of the AMI. An AMI ID is required to launch an instance and must be specified here or in a launch template."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags to add to the instance.",
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
    "name": "additional_info",
    "type": "string",
    "description": "This property is reserved for internal use. If you use it, the stack fails with this error: Bad property set: [Testing this property] (Service: AmazonEC2; Status Code: 400; Error Code: InvalidParameterCombination; Request ID: 0XXXXXX-49c7-4b40-8bcc-76885dcXXXXX)."
  },
  {
    "name": "hibernation_options",
    "type": "object",
    "description": "Indicates whether an instance is enabled for hibernation.",
    "children": [
      {
        "name": "configured",
        "type": "boolean",
        "description": "If you set this parameter to true, your instance is enabled for hibernation."
      }
    ]
  },
  {
    "name": "license_specifications",
    "type": "array",
    "description": "The license configurations.",
    "children": [
      {
        "name": "license_configuration_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the license configuration."
      }
    ]
  },
  {
    "name": "metadata_options",
    "type": "object",
    "description": "The metadata options for the instance",
    "children": [
      {
        "name": "http_put_response_hop_limit",
        "type": "integer",
        "description": "The number of network hops that the metadata token can travel. Maximum is 64."
      },
      {
        "name": "http_protocol_ipv6",
        "type": "string",
        "description": "Enables or disables the IPv6 endpoint for the instance metadata service. To use this option, the instance must be a Nitro-based instance launched in a subnet that supports IPv6."
      },
      {
        "name": "http_tokens",
        "type": "string",
        "description": "Indicates whether IMDSv2 is required."
      },
      {
        "name": "instance_metadata_tags",
        "type": "string",
        "description": "Indicates whether tags from the instance are propagated to the EBS volumes."
      },
      {
        "name": "http_endpoint",
        "type": "string",
        "description": "Enables or disables the HTTP metadata endpoint on your instances. If you specify a value of disabled, you cannot access your instance metadata."
      }
    ]
  },
  {
    "name": "instance_id",
    "type": "string",
    "description": "The EC2 Instance ID."
  },
  {
    "name": "cpu_options",
    "type": "object",
    "description": "The CPU options for the instance.",
    "children": [
      {
        "name": "threads_per_core",
        "type": "integer",
        "description": ""
      },
      {
        "name": "core_count",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "availability_zone",
    "type": "string",
    "description": "The Availability Zone of the instance."
  },
  {
    "name": "private_dns_name_options",
    "type": "object",
    "description": "The options for the instance hostname.",
    "children": [
      {
        "name": "enable_resource_name_dns_arecord",
        "type": "boolean",
        "description": "Indicates whether to respond to DNS queries for instance hostnames with DNS A records. For more information, see Amazon EC2 instance hostname types in the Amazon Elastic Compute Cloud User Guide."
      },
      {
        "name": "hostname_type",
        "type": "string",
        "description": "The type of hostnames to assign to instances in the subnet at launch. For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. For more information, see Amazon EC2 instance hostname types in the Amazon Elastic Compute Cloud User Guide."
      },
      {
        "name": "enable_resource_name_dns_aa_aa_record",
        "type": "boolean",
        "description": "Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records. For more information, see Amazon EC2 instance hostname types in the Amazon Elastic Compute Cloud User Guide."
      }
    ]
  },
  {
    "name": "host_id",
    "type": "string",
    "description": "If you specify host for the Affinity property, the ID of a dedicated host that the instance is associated with. If you don't specify an ID, Amazon EC2 launches the instance onto any available, compatible dedicated host in your account."
  },
  {
    "name": "public_dns_name",
    "type": "string",
    "description": "The public DNS name of the specified instance. For example: ec2-107-20-50-45.compute-1.amazonaws.com."
  },
  {
    "name": "security_group_ids",
    "type": "array",
    "description": "The IDs of the security groups."
  },
  {
    "name": "placement_group_name",
    "type": "string",
    "description": "The name of an existing placement group that you want to launch the instance into (cluster | partition | spread)."
  },
  {
    "name": "ssm_associations",
    "type": "array",
    "description": "The SSM document and parameter values in AWS Systems Manager to associate with this instance.",
    "children": [
      {
        "name": "association_parameters",
        "type": "array",
        "description": "The input parameter values to use with the associated SSM document.",
        "children": [
          {
            "name": "value",
            "type": "array",
            "description": "The value of an input parameter."
          },
          {
            "name": "key",
            "type": "string",
            "description": "The name of an input parameter that is in the associated SSM document."
          }
        ]
      },
      {
        "name": "document_name",
        "type": "string",
        "description": "The name of an SSM document to associate with the instance."
      }
    ]
  },
  {
    "name": "vpc_id",
    "type": "string",
    "description": "The ID of the VPC that the instance is running in."
  },
  {
    "name": "state",
    "type": "object",
    "description": "The current state of the instance.",
    "children": [
      {
        "name": "code",
        "type": "string",
        "description": "The state of the instance as a 16-bit unsigned integer."
      },
      {
        "name": "name",
        "type": "string",
        "description": "The current state of the instance."
      }
    ]
  },
  {
    "name": "affinity",
    "type": "string",
    "description": "Indicates whether the instance is associated with a dedicated host. If you want the instance to always restart on the same host on which it was launched, specify host. If you want the instance to restart on any available host, but try to launch onto the last host it ran on (on a best-effort basis), specify default."
  },
  {
    "name": "tenancy",
    "type": "string",
    "description": "The tenancy of the instance (if the instance is running in a VPC). An instance with a tenancy of dedicated runs on single-tenant hardware."
  },
  {
    "name": "security_groups",
    "type": "array",
    "description": "the names of the security groups. For a nondefault VPC, you must use security group IDs instead."
  },
  {
    "name": "private_ip_address",
    "type": "string",
    "description": "[EC2-VPC] The primary IPv4 address. You must specify a value from the IPv4 address range of the subnet."
  },
  {
    "name": "user_data",
    "type": "string",
    "description": "The user data to make available to the instance."
  },
  {
    "name": "block_device_mappings",
    "type": "array",
    "description": "The block device mapping entries that defines the block devices to attach to the instance at launch.",
    "children": [
      {
        "name": "ebs",
        "type": "object",
        "description": "Parameters used to automatically set up EBS volumes when the instance is launched.",
        "children": [
          {
            "name": "snapshot_id",
            "type": "string",
            "description": "The ID of the snapshot."
          },
          {
            "name": "volume_type",
            "type": "string",
            "description": "The volume type."
          },
          {
            "name": "kms_key_id",
            "type": "string",
            "description": "The identifier of the AWS Key Management Service (AWS KMS) customer managed CMK to use for Amazon EBS encryption. If KmsKeyId is specified, the encrypted state must be true. If the encrypted state is true but you do not specify KmsKeyId, your AWS managed CMK for EBS is used."
          },
          {
            "name": "encrypted",
            "type": "boolean",
            "description": "Indicates whether the volume should be encrypted."
          },
          {
            "name": "iops",
            "type": "integer",
            "description": "The number of I/O operations per second (IOPS). For gp3, io1, and io2 volumes, this represents the number of IOPS that are provisioned for the volume. For gp2 volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting."
          },
          {
            "name": "volume_size",
            "type": "integer",
            "description": "The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size. If you specify a snapshot, the default is the snapshot size. You can specify a volume size that is equal to or larger than the snapshot size."
          },
          {
            "name": "delete_on_termination",
            "type": "boolean",
            "description": "Indicates whether the EBS volume is deleted on instance termination."
          }
        ]
      },
      {
        "name": "no_device",
        "type": "object",
        "description": ""
      },
      {
        "name": "virtual_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "device_name",
        "type": "string",
        "description": "The device name (for example, /dev/sdh or xvdh)."
      }
    ]
  },
  {
    "name": "iam_instance_profile",
    "type": "string",
    "description": "The IAM instance profile."
  },
  {
    "name": "ipv6_addresses",
    "type": "array",
    "description": "[EC2-VPC] The IPv6 addresses from the range of the subnet to associate with the primary network interface.",
    "children": [
      {
        "name": "ipv6_address",
        "type": "string",
        "description": "The IPv6 address."
      }
    ]
  },
  {
    "name": "kernel_id",
    "type": "string",
    "description": "The ID of the kernel."
  },
  {
    "name": "subnet_id",
    "type": "string",
    "description": "[EC2-VPC] The ID of the subnet to launch the instance into."
  },
  {
    "name": "ebs_optimized",
    "type": "boolean",
    "description": "Indicates whether the instance is optimized for Amazon EBS I/O."
  },
  {
    "name": "propagate_tags_to_volume_on_creation",
    "type": "boolean",
    "description": "Indicates whether to assign the tags from the instance to all of the volumes attached to the instance at launch. If you specify true and you assign tags to the instance, those tags are automatically assigned to all of the volumes that you attach to the instance at launch. If you specify false, those tags are not assigned to the attached volumes."
  },
  {
    "name": "elastic_gpu_specifications",
    "type": "array",
    "description": "An elastic GPU to associate with the instance. Amazon Elastic Graphics is no longer available.",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": "The type of Elastic Graphics accelerator. Amazon Elastic Graphics is no longer available."
      }
    ]
  },
  {
    "name": "elastic_inference_accelerators",
    "type": "array",
    "description": "An elastic inference accelerator to associate with the instance. Amazon Elastic Inference is no longer available.",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": "The type of elastic inference accelerator. Amazon Elastic Inference is no longer available."
      },
      {
        "name": "count",
        "type": "integer",
        "description": "The number of elastic inference accelerators to attach to the instance. Amazon Elastic Inference is no longer available."
      }
    ]
  },
  {
    "name": "ipv6_address_count",
    "type": "integer",
    "description": "[EC2-VPC] The number of IPv6 addresses to associate with the primary network interface. Amazon EC2 chooses the IPv6 addresses from the range of your subnet."
  },
  {
    "name": "launch_template",
    "type": "object",
    "description": "The launch template to use to launch the instances.",
    "children": [
      {
        "name": "launch_template_name",
        "type": "string",
        "description": "The name of the launch template. You must specify the LaunchTemplateName or the LaunchTemplateId, but not both."
      },
      {
        "name": "version",
        "type": "string",
        "description": "The version number of the launch template."
      },
      {
        "name": "launch_template_id",
        "type": "string",
        "description": "The ID of the launch template. You must specify the LaunchTemplateName or the LaunchTemplateId, but not both."
      }
    ]
  },
  {
    "name": "network_interfaces",
    "type": "array",
    "description": "The network interfaces to associate with the instance.",
    "children": [
      {
        "name": "description",
        "type": "string",
        "description": "The description of the network interface."
      },
      {
        "name": "private_ip_address",
        "type": "string",
        "description": "The private IPv4 address of the network interface."
      },
      {
        "name": "private_ip_addresses",
        "type": "array",
        "description": "One or more private IPv4 addresses to assign to the network interface.",
        "children": [
          {
            "name": "private_ip_address",
            "type": "string",
            "description": "The private IPv4 addresses."
          },
          {
            "name": "primary",
            "type": "boolean",
            "description": "Indicates whether the private IPv4 address is the primary private IPv4 address. Only one IPv4 address can be designated as primary."
          }
        ]
      },
      {
        "name": "secondary_private_ip_address_count",
        "type": "integer",
        "description": "The number of secondary private IPv4 addresses."
      },
      {
        "name": "device_index",
        "type": "string",
        "description": "The position of the network interface in the attachment order. A primary network interface has a device index of 0."
      },
      {
        "name": "group_set",
        "type": "array",
        "description": "The IDs of the security groups for the network interface."
      },
      {
        "name": "ipv6_addresses",
        "type": "array",
        "description": "The IPv6 addresses associated with the network interface."
      },
      {
        "name": "subnet_id",
        "type": "string",
        "description": "The ID of the subnet."
      },
      {
        "name": "associate_public_ip_address",
        "type": "boolean",
        "description": "Indicates whether to assign a public IPv4 address to an instance you launch in a VPC."
      },
      {
        "name": "network_interface_id",
        "type": "string",
        "description": "The ID of the network interface."
      },
      {
        "name": "associate_carrier_ip_address",
        "type": "boolean",
        "description": "Not currently supported by AWS CloudFormation."
      },
      {
        "name": "ena_srd_specification",
        "type": "object",
        "description": "Specifies the ENA Express settings for the network interface that's attached to the instance.",
        "children": [
          {
            "name": "ena_srd_enabled",
            "type": "boolean",
            "description": "Specifies whether ENA Express is enabled for the network interface when you launch an instance."
          },
          {
            "name": "ena_srd_udp_specification",
            "type": "object",
            "description": "Contains ENA Express settings for UDP network traffic for the network interface that's attached to the instance.",
            "children": [
              {
                "name": "ena_srd_udp_enabled",
                "type": "boolean",
                "description": "Indicates whether UDP traffic uses ENA Express for your instance."
              }
            ]
          }
        ]
      },
      {
        "name": "ipv6_address_count",
        "type": "integer",
        "description": "A number of IPv6 addresses to assign to the network interface."
      },
      {
        "name": "delete_on_termination",
        "type": "boolean",
        "description": "If set to true, the interface is deleted when the instance is terminated."
      }
    ]
  },
  {
    "name": "instance_type",
    "type": "string",
    "description": "The instance type."
  },
  {
    "name": "monitoring",
    "type": "boolean",
    "description": "Specifies whether detailed monitoring is enabled for the instance."
  },
  {
    "name": "public_ip",
    "type": "string",
    "description": "The public IP address of the specified instance. For example: 192.0.2.0."
  },
  {
    "name": "instance_initiated_shutdown_behavior",
    "type": "string",
    "description": "Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown)."
  },
  {
    "name": "host_resource_group_arn",
    "type": "string",
    "description": "The ARN of the host resource group in which to launch the instances. If you specify a host resource group ARN, omit the Tenancy parameter or set it to host."
  },
  {
    "name": "disable_api_termination",
    "type": "boolean",
    "description": "If you set this parameter to true, you can't terminate the instance using the Amazon EC2 console, CLI, or API; otherwise, you can."
  },
  {
    "name": "key_name",
    "type": "string",
    "description": "The name of the key pair."
  },
  {
    "name": "ramdisk_id",
    "type": "string",
    "description": "The ID of the RAM disk to select."
  },
  {
    "name": "source_dest_check",
    "type": "boolean",
    "description": "Specifies whether to enable an instance launched in a VPC to perform NAT."
  },
  {
    "name": "credit_specification",
    "type": "object",
    "description": "The credit option for CPU usage of the burstable performance instance. Valid values are standard and unlimited.",
    "children": [
      {
        "name": "c_pu_credits",
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
    "name": "instance_id",
    "type": "string",
    "description": "The EC2 Instance ID."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html"><code>AWS::EC2::Instance</code></a>.

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
    <td><code>instances</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>instances</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>instances</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>instances_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>instances</code></td>
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

Gets all properties from an individual <code>instance</code>.
```sql
SELECT
  region,
  private_dns_name,
  volumes,
  private_ip,
  enclave_options,
  image_id,
  tags,
  additional_info,
  hibernation_options,
  license_specifications,
  metadata_options,
  instance_id,
  cpu_options,
  availability_zone,
  private_dns_name_options,
  host_id,
  public_dns_name,
  security_group_ids,
  placement_group_name,
  ssm_associations,
  vpc_id,
  state,
  affinity,
  tenancy,
  security_groups,
  private_ip_address,
  user_data,
  block_device_mappings,
  iam_instance_profile,
  ipv6_addresses,
  kernel_id,
  subnet_id,
  ebs_optimized,
  propagate_tags_to_volume_on_creation,
  elastic_gpu_specifications,
  elastic_inference_accelerators,
  ipv6_address_count,
  launch_template,
  network_interfaces,
  instance_type,
  monitoring,
  public_ip,
  instance_initiated_shutdown_behavior,
  host_resource_group_arn,
  disable_api_termination,
  key_name,
  ramdisk_id,
  source_dest_check,
  credit_specification
FROM awscc.ec2.instances
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ instance_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>instances</code> in a region.
```sql
SELECT
  region,
  instance_id
FROM awscc.ec2.instances_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>instance</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.instances (
  Volumes,
  EnclaveOptions,
  ImageId,
  Tags,
  AdditionalInfo,
  HibernationOptions,
  LicenseSpecifications,
  MetadataOptions,
  CpuOptions,
  AvailabilityZone,
  PrivateDnsNameOptions,
  HostId,
  SecurityGroupIds,
  PlacementGroupName,
  SsmAssociations,
  Affinity,
  Tenancy,
  SecurityGroups,
  PrivateIpAddress,
  UserData,
  BlockDeviceMappings,
  IamInstanceProfile,
  Ipv6Addresses,
  KernelId,
  SubnetId,
  EbsOptimized,
  PropagateTagsToVolumeOnCreation,
  ElasticGpuSpecifications,
  ElasticInferenceAccelerators,
  Ipv6AddressCount,
  LaunchTemplate,
  NetworkInterfaces,
  InstanceType,
  Monitoring,
  InstanceInitiatedShutdownBehavior,
  HostResourceGroupArn,
  DisableApiTermination,
  KeyName,
  RamdiskId,
  SourceDestCheck,
  CreditSpecification,
  region
)
SELECT
  '{{ volumes }}',
  '{{ enclave_options }}',
  '{{ image_id }}',
  '{{ tags }}',
  '{{ additional_info }}',
  '{{ hibernation_options }}',
  '{{ license_specifications }}',
  '{{ metadata_options }}',
  '{{ cpu_options }}',
  '{{ availability_zone }}',
  '{{ private_dns_name_options }}',
  '{{ host_id }}',
  '{{ security_group_ids }}',
  '{{ placement_group_name }}',
  '{{ ssm_associations }}',
  '{{ affinity }}',
  '{{ tenancy }}',
  '{{ security_groups }}',
  '{{ private_ip_address }}',
  '{{ user_data }}',
  '{{ block_device_mappings }}',
  '{{ iam_instance_profile }}',
  '{{ ipv6_addresses }}',
  '{{ kernel_id }}',
  '{{ subnet_id }}',
  '{{ ebs_optimized }}',
  '{{ propagate_tags_to_volume_on_creation }}',
  '{{ elastic_gpu_specifications }}',
  '{{ elastic_inference_accelerators }}',
  '{{ ipv6_address_count }}',
  '{{ launch_template }}',
  '{{ network_interfaces }}',
  '{{ instance_type }}',
  '{{ monitoring }}',
  '{{ instance_initiated_shutdown_behavior }}',
  '{{ host_resource_group_arn }}',
  '{{ disable_api_termination }}',
  '{{ key_name }}',
  '{{ ramdisk_id }}',
  '{{ source_dest_check }}',
  '{{ credit_specification }}',
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
INSERT INTO awscc.ec2.instances (
  Volumes,
  EnclaveOptions,
  ImageId,
  Tags,
  AdditionalInfo,
  HibernationOptions,
  LicenseSpecifications,
  MetadataOptions,
  CpuOptions,
  AvailabilityZone,
  PrivateDnsNameOptions,
  HostId,
  SecurityGroupIds,
  PlacementGroupName,
  SsmAssociations,
  Affinity,
  Tenancy,
  SecurityGroups,
  PrivateIpAddress,
  UserData,
  BlockDeviceMappings,
  IamInstanceProfile,
  Ipv6Addresses,
  KernelId,
  SubnetId,
  EbsOptimized,
  PropagateTagsToVolumeOnCreation,
  ElasticGpuSpecifications,
  ElasticInferenceAccelerators,
  Ipv6AddressCount,
  LaunchTemplate,
  NetworkInterfaces,
  InstanceType,
  Monitoring,
  InstanceInitiatedShutdownBehavior,
  HostResourceGroupArn,
  DisableApiTermination,
  KeyName,
  RamdiskId,
  SourceDestCheck,
  CreditSpecification,
  region
)
SELECT
  '{{ volumes }}',
  '{{ enclave_options }}',
  '{{ image_id }}',
  '{{ tags }}',
  '{{ additional_info }}',
  '{{ hibernation_options }}',
  '{{ license_specifications }}',
  '{{ metadata_options }}',
  '{{ cpu_options }}',
  '{{ availability_zone }}',
  '{{ private_dns_name_options }}',
  '{{ host_id }}',
  '{{ security_group_ids }}',
  '{{ placement_group_name }}',
  '{{ ssm_associations }}',
  '{{ affinity }}',
  '{{ tenancy }}',
  '{{ security_groups }}',
  '{{ private_ip_address }}',
  '{{ user_data }}',
  '{{ block_device_mappings }}',
  '{{ iam_instance_profile }}',
  '{{ ipv6_addresses }}',
  '{{ kernel_id }}',
  '{{ subnet_id }}',
  '{{ ebs_optimized }}',
  '{{ propagate_tags_to_volume_on_creation }}',
  '{{ elastic_gpu_specifications }}',
  '{{ elastic_inference_accelerators }}',
  '{{ ipv6_address_count }}',
  '{{ launch_template }}',
  '{{ network_interfaces }}',
  '{{ instance_type }}',
  '{{ monitoring }}',
  '{{ instance_initiated_shutdown_behavior }}',
  '{{ host_resource_group_arn }}',
  '{{ disable_api_termination }}',
  '{{ key_name }}',
  '{{ ramdisk_id }}',
  '{{ source_dest_check }}',
  '{{ credit_specification }}',
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
  - name: instance
    props:
      - name: volumes
        value:
          - volume_id: '{{ volume_id }}'
            device: '{{ device }}'
      - name: enclave_options
        value:
          enabled: '{{ enabled }}'
      - name: image_id
        value: '{{ image_id }}'
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
      - name: additional_info
        value: '{{ additional_info }}'
      - name: hibernation_options
        value:
          configured: '{{ configured }}'
      - name: license_specifications
        value:
          - license_configuration_arn: '{{ license_configuration_arn }}'
      - name: metadata_options
        value:
          http_put_response_hop_limit: '{{ http_put_response_hop_limit }}'
          http_protocol_ipv6: '{{ http_protocol_ipv6 }}'
          http_tokens: '{{ http_tokens }}'
          instance_metadata_tags: '{{ instance_metadata_tags }}'
          http_endpoint: '{{ http_endpoint }}'
      - name: cpu_options
        value:
          threads_per_core: '{{ threads_per_core }}'
          core_count: '{{ core_count }}'
      - name: availability_zone
        value: '{{ availability_zone }}'
      - name: private_dns_name_options
        value:
          enable_resource_name_dns_arecord: '{{ enable_resource_name_dns_arecord }}'
          hostname_type: '{{ hostname_type }}'
          enable_resource_name_dns_aa_aa_record: '{{ enable_resource_name_dns_aa_aa_record }}'
      - name: host_id
        value: '{{ host_id }}'
      - name: security_group_ids
        value:
          - '{{ security_group_ids[0] }}'
      - name: placement_group_name
        value: '{{ placement_group_name }}'
      - name: ssm_associations
        value:
          - association_parameters:
              - value:
                  - '{{ value[0] }}'
                key: '{{ key }}'
            document_name: '{{ document_name }}'
      - name: affinity
        value: '{{ affinity }}'
      - name: tenancy
        value: '{{ tenancy }}'
      - name: security_groups
        value:
          - '{{ security_groups[0] }}'
      - name: private_ip_address
        value: '{{ private_ip_address }}'
      - name: user_data
        value: '{{ user_data }}'
      - name: block_device_mappings
        value:
          - ebs:
              snapshot_id: '{{ snapshot_id }}'
              volume_type: '{{ volume_type }}'
              kms_key_id: '{{ kms_key_id }}'
              encrypted: '{{ encrypted }}'
              iops: '{{ iops }}'
              volume_size: '{{ volume_size }}'
              delete_on_termination: '{{ delete_on_termination }}'
            no_device: {}
            virtual_name: '{{ virtual_name }}'
            device_name: '{{ device_name }}'
      - name: iam_instance_profile
        value: '{{ iam_instance_profile }}'
      - name: ipv6_addresses
        value:
          - ipv6_address: '{{ ipv6_address }}'
      - name: kernel_id
        value: '{{ kernel_id }}'
      - name: subnet_id
        value: '{{ subnet_id }}'
      - name: ebs_optimized
        value: '{{ ebs_optimized }}'
      - name: propagate_tags_to_volume_on_creation
        value: '{{ propagate_tags_to_volume_on_creation }}'
      - name: elastic_gpu_specifications
        value:
          - type: '{{ type }}'
      - name: elastic_inference_accelerators
        value:
          - type: '{{ type }}'
            count: '{{ count }}'
      - name: ipv6_address_count
        value: '{{ ipv6_address_count }}'
      - name: launch_template
        value:
          launch_template_name: '{{ launch_template_name }}'
          version: '{{ version }}'
          launch_template_id: '{{ launch_template_id }}'
      - name: network_interfaces
        value:
          - description: '{{ description }}'
            private_ip_address: '{{ private_ip_address }}'
            private_ip_addresses:
              - private_ip_address: '{{ private_ip_address }}'
                primary: '{{ primary }}'
            secondary_private_ip_address_count: '{{ secondary_private_ip_address_count }}'
            device_index: '{{ device_index }}'
            group_set:
              - '{{ group_set[0] }}'
            ipv6_addresses:
              - null
            subnet_id: '{{ subnet_id }}'
            associate_public_ip_address: '{{ associate_public_ip_address }}'
            network_interface_id: '{{ network_interface_id }}'
            associate_carrier_ip_address: '{{ associate_carrier_ip_address }}'
            ena_srd_specification:
              ena_srd_enabled: '{{ ena_srd_enabled }}'
              ena_srd_udp_specification:
                ena_srd_udp_enabled: '{{ ena_srd_udp_enabled }}'
            ipv6_address_count: '{{ ipv6_address_count }}'
            delete_on_termination: '{{ delete_on_termination }}'
      - name: instance_type
        value: '{{ instance_type }}'
      - name: monitoring
        value: '{{ monitoring }}'
      - name: instance_initiated_shutdown_behavior
        value: '{{ instance_initiated_shutdown_behavior }}'
      - name: host_resource_group_arn
        value: '{{ host_resource_group_arn }}'
      - name: disable_api_termination
        value: '{{ disable_api_termination }}'
      - name: key_name
        value: '{{ key_name }}'
      - name: ramdisk_id
        value: '{{ ramdisk_id }}'
      - name: source_dest_check
        value: '{{ source_dest_check }}'
      - name: credit_specification
        value:
          c_pu_credits: '{{ c_pu_credits }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>instance</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.instances
SET PatchDocument = string('{{ {
    "Volumes": volumes,
    "Tags": tags,
    "AdditionalInfo": additional_info,
    "MetadataOptions": metadata_options,
    "PrivateDnsNameOptions": private_dns_name_options,
    "HostId": host_id,
    "SecurityGroupIds": security_group_ids,
    "SsmAssociations": ssm_associations,
    "Affinity": affinity,
    "Tenancy": tenancy,
    "UserData": user_data,
    "BlockDeviceMappings": block_device_mappings,
    "IamInstanceProfile": iam_instance_profile,
    "KernelId": kernel_id,
    "EbsOptimized": ebs_optimized,
    "PropagateTagsToVolumeOnCreation": propagate_tags_to_volume_on_creation,
    "InstanceType": instance_type,
    "Monitoring": monitoring,
    "InstanceInitiatedShutdownBehavior": instance_initiated_shutdown_behavior,
    "DisableApiTermination": disable_api_termination,
    "RamdiskId": ramdisk_id,
    "SourceDestCheck": source_dest_check,
    "CreditSpecification": credit_specification
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ instance_id }}'
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
DELETE FROM awscc.ec2.instances
WHERE
  Identifier = '{{ instance_id }}' AND
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

To operate on the <code>instances</code> resource, the following permissions are required:

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
ec2:DescribeNetworkInterfaces,
ec2:DescribeVolumes,
ec2:DescribeInstances,
ec2:DescribeInstanceAttribute,
ec2:DescribeInstanceCreditSpecifications,
ec2:DescribeLaunchTemplates,
ssm:DescribeAssociation,
ssm:ListAssociations
```

</TabItem>
<TabItem value="create">

```json
iam:PassRole,
ec2:ModifyPrivateDnsNameOptions,
ec2:DescribeNetworkInterfaces,
ec2:DescribeVolumes,
ec2:RunInstances,
ec2:AssociateIamInstanceProfile,
ec2:DescribeIamInstanceProfileAssociations,
ec2:DescribeInstances,
ec2:DescribeSubnets,
ec2:DescribeKeyPairs,
ec2:DescribeSecurityGroups,
ec2:DescribeVpcs,
ec2:DescribeInstanceAttribute,
ec2:DescribeInstanceCreditSpecifications,
ec2:DescribeLaunchTemplates,
ec2:DescribeLaunchTemplateVersions,
ec2:DetachVolume,
ec2:DisassociateIamInstanceProfile,
ec2:ModifyInstanceAttribute,
ec2:ModifyInstanceCreditSpecification,
ec2:ModifyInstancePlacement,
ec2:MonitorInstances,
ec2:AttachVolume,
ec2:CreateTags,
ec2:ReplaceIamInstanceProfileAssociation,
ec2:StartInstances,
ssm:CreateAssociation,
ssm:DescribeAssociation,
ssm:ListAssociations
```

</TabItem>
<TabItem value="update">

```json
ec2:ModifyPrivateDnsNameOptions,
ec2:DescribeNetworkInterfaces,
ec2:AssociateIamInstanceProfile,
ec2:DescribeIamInstanceProfileAssociations,
ec2:DescribeInstances,
ec2:DescribeSubnets,
ec2:DescribeKeyPairs,
ec2:DescribeSecurityGroups,
ec2:DescribeVpcs,
ec2:DescribeInstanceAttribute,
ec2:DescribeInstanceCreditSpecifications,
ec2:DescribeLaunchTemplates,
ec2:DetachVolume,
ec2:DisassociateIamInstanceProfile,
ec2:ModifyInstanceAttribute,
ec2:ModifyInstanceCreditSpecification,
ec2:ModifyInstanceMaintenanceOptions,
ec2:ModifyInstanceMetadataOptions,
ec2:ModifyInstancePlacement,
ec2:MonitorInstances,
ec2:AttachVolume,
ec2:CreateTags,
ec2:DeleteTags,
ec2:ReplaceIamInstanceProfileAssociation,
ec2:StartInstances,
ec2:StopInstances,
ec2:UnmonitorInstances,
ssm:CreateAssociation,
ssm:DeleteAssociation,
ssm:DescribeAssociation,
ssm:ListAssociations
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeInstances
```

</TabItem>
<TabItem value="delete">

```json
ec2:DescribeInstances,
ec2:TerminateInstances,
ec2:DescribeNetworkInterfaces,
ec2:DescribeVolumes,
ec2:DescribeInstances,
ec2:DescribeInstanceAttribute,
ec2:DescribeInstanceCreditSpecifications,
ec2:DescribeLaunchTemplates,
ssm:DescribeAssociation,
ssm:ListAssociations
```

</TabItem>
</Tabs>