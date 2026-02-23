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
        "name": "multi_attach_enabled",
        "type": "boolean",
        "description": "Indicates whether Amazon EBS Multi-Attach is enabled.<br />CFNlong does not currently support updating a single-attach volume to be multi-attach enabled, updating a multi-attach enabled volume to be single-attach, or updating the size or number of I/O operations per second (IOPS) of a multi-attach enabled volume."
      },
      {
        "name": "kms_key_id",
        "type": "string",
        "description": "The identifier of the kms-key-long to use for Amazon EBS encryption. If &#96;&#96;KmsKeyId&#96;&#96; is specified, the encrypted state must be &#96;&#96;true&#96;&#96;.<br />If you omit this property and your account is enabled for encryption by default, or &#42;Encrypted&#42; is set to &#96;&#96;true&#96;&#96;, then the volume is encrypted using the default key specified for your account. If your account does not have a default key, then the volume is encrypted using the aws-managed-key.<br />Alternatively, if you want to specify a different key, you can specify one of the following:<br />+ Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab.<br />+ Key alias. Specify the alias for the key, prefixed with &#96;&#96;alias/&#96;&#96;. For example, for a key with the alias &#96;&#96;my&#95;cmk&#96;&#96;, use &#96;&#96;alias/my&#95;cmk&#96;&#96;. Or to specify the aws-managed-key, use &#96;&#96;alias/aws/ebs&#96;&#96;.<br />+ Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab.<br />+ Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias."
      },
      {
        "name": "encrypted",
        "type": "boolean",
        "description": "Indicates whether the volume should be encrypted. The effect of setting the encryption state to &#96;&#96;true&#96;&#96; depends on the volume origin (new or from a snapshot), starting encryption state, ownership, and whether encryption by default is enabled. For more information, see &#91;Encryption by default&#93;(https://docs.aws.amazon.com/ebs/latest/userguide/work-with-ebs-encr.html#encryption-by-default) in the &#42;Amazon EBS User Guide&#42;.<br />Encrypted Amazon EBS volumes must be attached to instances that support Amazon EBS encryption. For more information, see &#91;Supported instance types&#93;(https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption-requirements.html#ebs-encryption&#95;supported&#95;instances)."
      },
      {
        "name": "size",
        "type": "integer",
        "description": "The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size. If you specify a snapshot, the default is the snapshot size. You can specify a volume size that is equal to or larger than the snapshot size.<br />The following are the supported volumes sizes for each volume type:<br />+ &#96;&#96;gp2&#96;&#96; and &#96;&#96;gp3&#96;&#96;: 1 - 16,384 GiB<br />+ &#96;&#96;io1&#96;&#96;: 4 - 16,384 GiB<br />+ &#96;&#96;io2&#96;&#96;: 4 - 65,536 GiB<br />+ &#96;&#96;st1&#96;&#96; and &#96;&#96;sc1&#96;&#96;: 125 - 16,384 GiB<br />+ &#96;&#96;standard&#96;&#96;: 1 - 1024 GiB"
      },
      {
        "name": "auto_enable_io",
        "type": "boolean",
        "description": "Indicates whether the volume is auto-enabled for I/O operations. By default, Amazon EBS disables I/O to the volume from attached EC2 instances when it determines that a volume's data is potentially inconsistent. If the consistency of the volume is not a concern, and you prefer that the volume be made available immediately if it's impaired, you can configure the volume to automatically enable I/O."
      },
      {
        "name": "outpost_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the Outpost."
      },
      {
        "name": "availability_zone",
        "type": "string",
        "description": "The ID of the Availability Zone in which to create the volume. For example, &#96;&#96;us-east-1a&#96;&#96;.<br />Either &#96;&#96;AvailabilityZone&#96;&#96; or &#96;&#96;AvailabilityZoneId&#96;&#96; must be specified, but not both."
      },
      {
        "name": "throughput",
        "type": "integer",
        "description": "The throughput to provision for a volume, with a maximum of 1,000 MiB/s.<br />This parameter is valid only for &#96;&#96;gp3&#96;&#96; volumes. The default value is 125.<br />Valid Range: Minimum value of 125. Maximum value of 1000."
      },
      {
        "name": "iops",
        "type": "integer",
        "description": "The number of I/O operations per second (IOPS). For &#96;&#96;gp3&#96;&#96;, &#96;&#96;io1&#96;&#96;, and &#96;&#96;io2&#96;&#96; volumes, this represents the number of IOPS that are provisioned for the volume. For &#96;&#96;gp2&#96;&#96; volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.<br />The following are the supported values for each volume type:<br />+ &#96;&#96;gp3&#96;&#96;: 3,000 - 16,000 IOPS<br />+ &#96;&#96;io1&#96;&#96;: 100 - 64,000 IOPS<br />+ &#96;&#96;io2&#96;&#96;: 100 - 256,000 IOPS<br /><br />For &#96;&#96;io2&#96;&#96; volumes, you can achieve up to 256,000 IOPS on &#91;instances built on the Nitro System&#93;(https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-nitro-instances.html). On other instances, you can achieve performance up to 32,000 IOPS.<br />This parameter is required for &#96;&#96;io1&#96;&#96; and &#96;&#96;io2&#96;&#96; volumes. The default for &#96;&#96;gp3&#96;&#96; volumes is 3,000 IOPS. This parameter is not supported for &#96;&#96;gp2&#96;&#96;, &#96;&#96;st1&#96;&#96;, &#96;&#96;sc1&#96;&#96;, or &#96;&#96;standard&#96;&#96; volumes."
      },
      {
        "name": "volume_initialization_rate",
        "type": "integer",
        "description": "Specifies the Amazon EBS Provisioned Rate for Volume Initialization (volume initialization rate), in MiB/s, at which to download the snapshot blocks from Amazon S3 to the volume. This is also known as &#42;volume initialization&#42;. Specifying a volume initialization rate ensures that the volume is initialized at a predictable and consistent rate after creation.<br />This parameter is supported only for volumes created from snapshots. Omit this parameter if:<br />+ You want to create the volume using fast snapshot restore. You must specify a snapshot that is enabled for fast snapshot restore. In this case, the volume is fully initialized at creation.<br />If you specify a snapshot that is enabled for fast snapshot restore and a volume initialization rate, the volume will be initialized at the specified rate instead of fast snapshot restore.<br />+ You want to create a volume that is initialized at the default rate.<br /><br />For more information, see &#91;Initialize Amazon EBS volumes&#93;(https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html) in the &#42;Amazon EC2 User Guide&#42;.<br />Valid range: 100 - 300 MiB/s"
      },
      {
        "name": "snapshot_id",
        "type": "string",
        "description": "The snapshot from which to create the volume. You must specify either a snapshot ID or a volume size."
      },
      {
        "name": "volume_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "volume_type",
        "type": "string",
        "description": "The volume type. This parameter can be one of the following values:<br />+ General Purpose SSD: &#96;&#96;gp2&#96;&#96; &#124; &#96;&#96;gp3&#96;&#96;<br />+ Provisioned IOPS SSD: &#96;&#96;io1&#96;&#96; &#124; &#96;&#96;io2&#96;&#96;<br />+ Throughput Optimized HDD: &#96;&#96;st1&#96;&#96;<br />+ Cold HDD: &#96;&#96;sc1&#96;&#96;<br />+ Magnetic: &#96;&#96;standard&#96;&#96;<br /><br />For more information, see &#91;Amazon EBS volume types&#93;(https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html).<br />Default: &#96;&#96;gp2&#96;&#96;"
      },
      {
        "name": "tags",
        "type": "array",
        "description": "The tags to apply to the volume during creation.",
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
  },
  {
    "name": "additional_info",
    "type": "string",
    "description": "This property is reserved for internal use. If you use it, the stack fails with this error: Bad property set: &#91;Testing this property&#93; (Service: AmazonEC2; Status Code: 400; Error Code: InvalidParameterCombination; Request ID: 0XXXXXX-49c7-4b40-8bcc-76885dcXXXXX)."
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
        "description": "The desired HTTP PUT response hop limit for instance metadata requests. The larger the number, the further instance metadata requests can travel.<br />Default: &#96;&#96;1&#96;&#96;<br />Possible values: Integers from 1 to 64"
      },
      {
        "name": "http_tokens",
        "type": "string",
        "description": "Indicates whether IMDSv2 is required.<br />+ &#96;&#96;optional&#96;&#96; - IMDSv2 is optional. You can choose whether to send a session token in your instance metadata retrieval requests. If you retrieve IAM role credentials without a session token, you receive the IMDSv1 role credentials. If you retrieve IAM role credentials using a valid session token, you receive the IMDSv2 role credentials.<br />+ &#96;&#96;required&#96;&#96; - IMDSv2 is required. You must send a session token in your instance metadata retrieval requests. With this option, retrieving the IAM role credentials always returns IMDSv2 credentials; IMDSv1 credentials are not available.<br /><br />Default: If the value of &#96;&#96;ImdsSupport&#96;&#96; for the Amazon Machine Image (AMI) for your instance is &#96;&#96;v2.0&#96;&#96;, the default is &#96;&#96;required&#96;&#96;."
      },
      {
        "name": "http_protocol_ipv6",
        "type": "string",
        "description": "Enables or disables the IPv6 endpoint for the instance metadata service.<br />Default: &#96;&#96;disabled&#96;&#96;"
      },
      {
        "name": "instance_metadata_tags",
        "type": "string",
        "description": "Set to &#96;&#96;enabled&#96;&#96; to allow access to instance tags from the instance metadata. Set to &#96;&#96;disabled&#96;&#96; to turn off access to instance tags from the instance metadata. For more information, see &#91;View tags for your EC2 instances using instance metadata&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/work-with-tags-in-IMDS.html).<br />Default: &#96;&#96;disabled&#96;&#96;"
      },
      {
        "name": "http_endpoint",
        "type": "string",
        "description": "Enables or disables the HTTP metadata endpoint on your instances. If the parameter is not specified, the default state is &#96;&#96;enabled&#96;&#96;.<br />If you specify a value of &#96;&#96;disabled&#96;&#96;, you will not be able to access your instance metadata."
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
        "description": "Indicates whether to respond to DNS queries for instance hostnames with DNS A records."
      },
      {
        "name": "hostname_type",
        "type": "string",
        "description": "The type of hostname for EC2 instances. For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. For more information, see &#91;Amazon EC2 instance hostname types&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the &#42;User Guide&#42;."
      },
      {
        "name": "enable_resource_name_dns_aa_aa_record",
        "type": "boolean",
        "description": "Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records."
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
    "description": "The name of an existing placement group that you want to launch the instance into (cluster &#124; partition &#124; spread)."
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
    "description": "&#91;EC2-VPC&#93; The primary IPv4 address. You must specify a value from the IPv4 address range of the subnet."
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
            "name": "delete_on_termination",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "encrypted",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "iops",
            "type": "integer",
            "description": ""
          },
          {
            "name": "snapshot_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "volume_size",
            "type": "integer",
            "description": ""
          },
          {
            "name": "volume_type",
            "type": "string",
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
    "name": "iam_instance_profile",
    "type": "string",
    "description": "The IAM instance profile."
  },
  {
    "name": "ipv6_addresses",
    "type": "array",
    "description": "&#91;EC2-VPC&#93; The IPv6 addresses from the range of the subnet to associate with the primary network interface.",
    "children": [
      {
        "name": "ipv6_address",
        "type": "string",
        "description": ""
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
    "description": "&#91;EC2-VPC&#93; The ID of the subnet to launch the instance into.<br />"
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
    "description": "&#91;EC2-VPC&#93; The number of IPv6 addresses to associate with the primary network interface. Amazon EC2 chooses the IPv6 addresses from the range of your subnet."
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
        "description": "A description for the network interface."
      },
      {
        "name": "private_ip_address",
        "type": "string",
        "description": "Assigns a single private IP address to the network interface, which is used as the primary private IP address. If you want to specify multiple private IP address, use the PrivateIpAddresses property."
      },
      {
        "name": "primary_ipv6_address",
        "type": "string",
        "description": "The primary IPv6 address"
      },
      {
        "name": "private_ip_addresses",
        "type": "array",
        "description": "Assigns a list of private IP addresses to the network interface. You can specify a primary private IP address by setting the value of the Primary property to true in the PrivateIpAddressSpecification property. If you want EC2 to automatically assign private IP addresses, use the SecondaryPrivateIpAddressCount property and do not specify this property.",
        "children": [
          {
            "name": "primary",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "private_ip_address",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "secondary_private_ip_address_count",
        "type": "integer",
        "description": "The number of secondary private IPv4 addresses to assign to a network interface. When you specify a number of secondary IPv4 addresses, Amazon EC2 selects these IP addresses within the subnet's IPv4 CIDR range. You can't specify this option and specify more than one private IP address using privateIpAddresses"
      },
      {
        "name": "ipv6_prefix_count",
        "type": "integer",
        "description": "The number of IPv6 prefixes to assign to a network interface. When you specify a number of IPv6 prefixes, Amazon EC2 selects these prefixes from your existing subnet CIDR reservations, if available, or from free spaces in the subnet. By default, these will be /80 prefixes. You can't specify a count of IPv6 prefixes if you've specified one of the following: specific IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses."
      },
      {
        "name": "primary_private_ip_address",
        "type": "string",
        "description": "Returns the primary private IP address of the network interface."
      },
      {
        "name": "ipv4_prefixes",
        "type": "array",
        "description": "Assigns a list of IPv4 prefixes to the network interface. If you want EC2 to automatically assign IPv4 prefixes, use the Ipv4PrefixCount property and do not specify this property. Presently, only /28 prefixes are supported. You can't specify IPv4 prefixes if you've specified one of the following: a count of IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4 addresses.",
        "children": [
          {
            "name": "ipv4_prefix",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "ipv4_prefix_count",
        "type": "integer",
        "description": "The number of IPv4 prefixes to assign to a network interface. When you specify a number of IPv4 prefixes, Amazon EC2 selects these prefixes from your existing subnet CIDR reservations, if available, or from free spaces in the subnet. By default, these will be /28 prefixes. You can't specify a count of IPv4 prefixes if you've specified one of the following: specific IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4 addresses."
      },
      {
        "name": "enable_primary_ipv6",
        "type": "boolean",
        "description": "If you have instances or ENIs that rely on the IPv6 address not changing, to avoid disrupting traffic to instances or ENIs, you can enable a primary IPv6 address. Enable this option to automatically assign an IPv6 associated with the ENI attached to your instance to be the primary IPv6 address. When you enable an IPv6 address to be a primary IPv6, you cannot disable it. Traffic will be routed to the primary IPv6 address until the instance is terminated or the ENI is detached. If you have multiple IPv6 addresses associated with an ENI and you enable a primary IPv6 address, the first IPv6 address associated with the ENI becomes the primary IPv6 address."
      },
      {
        "name": "group_set",
        "type": "array",
        "description": "A list of security group IDs associated with this network interface."
      },
      {
        "name": "ipv6_addresses",
        "type": "array",
        "description": "One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet to associate with the network interface. If you're specifying a number of IPv6 addresses, use the Ipv6AddressCount property and don't specify this property."
      },
      {
        "name": "ipv6_prefixes",
        "type": "array",
        "description": "Assigns a list of IPv6 prefixes to the network interface. If you want EC2 to automatically assign IPv6 prefixes, use the Ipv6PrefixCount property and do not specify this property. Presently, only /80 prefixes are supported. You can't specify IPv6 prefixes if you've specified one of the following: a count of IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses.",
        "children": [
          {
            "name": "ipv6_prefix",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "subnet_id",
        "type": "string",
        "description": "The ID of the subnet to associate with the network interface."
      },
      {
        "name": "source_dest_check",
        "type": "boolean",
        "description": "Indicates whether traffic to or from the instance is validated."
      },
      {
        "name": "interface_type",
        "type": "string",
        "description": "Indicates the type of network interface."
      },
      {
        "name": "secondary_private_ip_addresses",
        "type": "array",
        "description": "Returns the secondary private IP addresses of the network interface."
      },
      {
        "name": "vpc_id",
        "type": "string",
        "description": "The ID of the VPC"
      },
      {
        "name": "ipv6_address_count",
        "type": "integer",
        "description": "The number of IPv6 addresses to assign to a network interface. Amazon EC2 automatically selects the IPv6 addresses from the subnet range. To specify specific IPv6 addresses, use the Ipv6Addresses property and don't specify this property."
      },
      {
        "name": "id",
        "type": "string",
        "description": "Network interface id."
      },
      {
        "name": "tags",
        "type": "array",
        "description": "An arbitrary set of tags (key-value pairs) for this network interface."
      },
      {
        "name": "connection_tracking_specification",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "udp_timeout",
            "type": "integer",
            "description": ""
          },
          {
            "name": "tcp_established_timeout",
            "type": "integer",
            "description": ""
          },
          {
            "name": "udp_stream_timeout",
            "type": "integer",
            "description": ""
          }
        ]
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
WHERE region = 'us-east-1' AND Identifier = '{{ instance_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>instances</code> in a region.
```sql
SELECT
region,
instance_id
FROM awscc.ec2.instances_list_only
WHERE region = 'us-east-1';
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
'{{ region }}';
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
  - name: instance
    props:
      - name: volumes
        value:
          - multi_attach_enabled: '{{ multi_attach_enabled }}'
            kms_key_id: '{{ kms_key_id }}'
            encrypted: '{{ encrypted }}'
            size: '{{ size }}'
            auto_enable_io: '{{ auto_enable_io }}'
            outpost_arn: '{{ outpost_arn }}'
            availability_zone: '{{ availability_zone }}'
            throughput: '{{ throughput }}'
            iops: '{{ iops }}'
            volume_initialization_rate: '{{ volume_initialization_rate }}'
            snapshot_id: '{{ snapshot_id }}'
            volume_type: '{{ volume_type }}'
            tags:
              - key: '{{ key }}'
                value: '{{ value }}'
      - name: enclave_options
        value:
          enabled: '{{ enabled }}'
      - name: image_id
        value: '{{ image_id }}'
      - name: tags
        value:
          - null
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
          http_tokens: '{{ http_tokens }}'
          http_protocol_ipv6: '{{ http_protocol_ipv6 }}'
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
              - primary: '{{ primary }}'
                private_ip_address: '{{ private_ip_address }}'
            secondary_private_ip_address_count: '{{ secondary_private_ip_address_count }}'
            ipv6_prefix_count: '{{ ipv6_prefix_count }}'
            ipv4_prefixes:
              - ipv4_prefix: '{{ ipv4_prefix }}'
            ipv4_prefix_count: '{{ ipv4_prefix_count }}'
            enable_primary_ipv6: '{{ enable_primary_ipv6 }}'
            group_set:
              - '{{ group_set[0] }}'
            ipv6_addresses:
              - null
            ipv6_prefixes:
              - ipv6_prefix: '{{ ipv6_prefix }}'
            subnet_id: '{{ subnet_id }}'
            source_dest_check: '{{ source_dest_check }}'
            interface_type: '{{ interface_type }}'
            ipv6_address_count: '{{ ipv6_address_count }}'
            tags:
              - null
            connection_tracking_specification:
              udp_timeout: '{{ udp_timeout }}'
              tcp_established_timeout: '{{ tcp_established_timeout }}'
              udp_stream_timeout: '{{ udp_stream_timeout }}'
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
          c_pu_credits: '{{ c_pu_credits }}'
```
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
WHERE region = '{{ region }}'
AND Identifier = '{{ instance_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.instances
WHERE Identifier = '{{ instance_id }}'
AND region = 'us-east-1';
```

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