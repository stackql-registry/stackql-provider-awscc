---
title: launch_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - launch_templates
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

Creates, updates, deletes or gets a <code>launch_template</code> resource or lists <code>launch_templates</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>launch_templates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Specifies the properties for creating a launch template.<br />The minimum required properties for specifying a launch template are as follows:<br />+ You must specify at least one property for the launch template data.<br />+ You can optionally specify a name for the launch template. If you do not specify a name, CFN creates a name for you.<br /><br />A launch template can contain some or all of the configuration information to launch an instance. When you launch an instance using a launch template, instance properties that are not specified in the launch template use default values, except the &#96;&#96;ImageId&#96;&#96; property, which has no default value. If you do not specify an AMI ID for the launch template &#96;&#96;ImageId&#96;&#96; property, you must specify an AMI ID for the instance &#96;&#96;ImageId&#96;&#96; property.<br />For more information, see &#91;Launch an instance from a launch template&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html) in the &#42;Amazon EC2 User Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.launch_templates" /></td></tr>
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
    "name": "launch_template_name",
    "type": "string",
    "description": "A name for the launch template."
  },
  {
    "name": "launch_template_data",
    "type": "object",
    "description": "The information for the launch template.",
    "children": [
      {
        "name": "security_groups",
        "type": "array",
        "description": "The names of the security groups. For a nondefault VPC, you must use security group IDs instead.<br />If you specify a network interface, you must specify any security groups as part of the network interface instead of using this parameter."
      },
      {
        "name": "tag_specifications",
        "type": "array",
        "description": "The tags to apply to resources that are created during instance launch.<br />To tag the launch template itself, use &#91;TagSpecifications&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-tagspecifications).",
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
        "name": "network_performance_options",
        "type": "object",
        "description": "The settings for the network performance options for the instance. For more information, see &#91;EC2 instance bandwidth weighting configuration&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configure-bandwidth-weighting.html).",
        "children": [
          {
            "name": "bandwidth_weighting",
            "type": "string",
            "description": "Specify the bandwidth weighting option to boost the associated type of baseline bandwidth, as follows:<br />+ default This option uses the standard bandwidth configuration for your instance type. + vpc-1 This option boosts your networking baseline bandwidth and reduces your EBS baseline bandwidth. + ebs-1 This option boosts your EBS baseline bandwidth and reduces your networking baseline bandwidth."
          }
        ]
      },
      {
        "name": "user_data",
        "type": "string",
        "description": "The user data to make available to the instance. You must provide base64-encoded text. User data is limited to 16 KB. For more information, see &#91;Run commands when you launch an EC2 instance with user data input&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html) in the &#42;Amazon EC2 User Guide&#42;.<br />If you are creating the launch template for use with BATCH, the user data must be provided in the &#91;MIME multi-part archive format&#93;(https://docs.aws.amazon.com/https://cloudinit.readthedocs.io/en/latest/topics/format.html#mime-multi-part-archive). For more information, see &#91;Amazon EC2 user data in launch templates&#93;(https://docs.aws.amazon.com/batch/latest/userguide/launch-templates.html#lt-user-data) in the &#42;User Guide&#42;."
      },
      {
        "name": "block_device_mappings",
        "type": "array",
        "description": "The block device mapping.",
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
        "name": "maintenance_options",
        "type": "object",
        "description": "The maintenance options of your instance.",
        "children": [
          {
            "name": "auto_recovery",
            "type": "string",
            "description": "Disables the automatic recovery behavior of your instance or sets it to default."
          }
        ]
      },
      {
        "name": "iam_instance_profile",
        "type": "object",
        "description": "The name or Amazon Resource Name (ARN) of an IAM instance profile.",
        "children": [
          {
            "name": "arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the instance profile."
          },
          {
            "name": "name",
            "type": "string",
            "description": "The name of the instance profile."
          }
        ]
      },
      {
        "name": "kernel_id",
        "type": "string",
        "description": "The ID of the kernel.<br />We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see &#91;User Provided Kernels&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html) in the &#42;Amazon EC2 User Guide&#42;."
      },
      {
        "name": "ebs_optimized",
        "type": "boolean",
        "description": "Indicates whether the instance is optimized for Amazon EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal Amazon EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS-optimized instance."
      },
      {
        "name": "placement",
        "type": "object",
        "description": "The placement for the instance.",
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
        "name": "network_interfaces",
        "type": "array",
        "description": "The network interfaces for the instance.",
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
            "description": "One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet to associate with the network interface. If you're specifying a number of IPv6 addresses, use the Ipv6AddressCount property and don't specify this property.",
            "children": [
              {
                "name": "ipv6_address",
                "type": "string",
                "description": ""
              }
            ]
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
            "description": "An arbitrary set of tags (key-value pairs) for this network interface.",
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
        "name": "enclave_options",
        "type": "object",
        "description": "Indicates whether the instance is enabled for AWS Nitro Enclaves. For more information, see &#91;What is Nitro Enclaves?&#93;(https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html) in the &#42;Nitro Enclaves User Guide&#42;.<br />You can't enable AWS Nitro Enclaves and hibernation on the same instance.",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": "If this parameter is set to &#96;&#96;true&#96;&#96;, the instance is enabled for AWS Nitro Enclaves; otherwise, it is not enabled for AWS Nitro Enclaves."
          }
        ]
      },
      {
        "name": "image_id",
        "type": "string",
        "description": "The ID of the AMI. Alternatively, you can specify a Systems Manager parameter, which will resolve to an AMI ID on launch.<br />Valid formats:<br />+ &#96;&#96;ami-0ac394d6a3example&#96;&#96; <br />+ &#96;&#96;resolve:ssm:parameter-name&#96;&#96; <br />+ &#96;&#96;resolve:ssm:parameter-name:version-number&#96;&#96; <br />+ &#96;&#96;resolve:ssm:parameter-name:label&#96;&#96; <br /><br />For more information, see &#91;Use a Systems Manager parameter to find an AMI&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/finding-an-ami.html#using-systems-manager-parameter-to-find-AMI) in the &#42;Amazon Elastic Compute Cloud User Guide&#42;."
      },
      {
        "name": "instance_type",
        "type": "string",
        "description": "The instance type. For more information, see &#91;Amazon EC2 instance types&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) in the &#42;Amazon EC2 User Guide&#42;.<br />If you specify &#96;&#96;InstanceType&#96;&#96;, you can't specify &#96;&#96;InstanceRequirements&#96;&#96;."
      },
      {
        "name": "monitoring",
        "type": "object",
        "description": "The monitoring for the instance.",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": "Specify &#96;&#96;true&#96;&#96; to enable detailed monitoring. Otherwise, basic monitoring is enabled."
          }
        ]
      },
      {
        "name": "hibernation_options",
        "type": "object",
        "description": "Indicates whether an instance is enabled for hibernation. This parameter is valid only if the instance meets the &#91;hibernation prerequisites&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html). For more information, see &#91;Hibernate your Amazon EC2 instance&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html) in the &#42;Amazon EC2 User Guide&#42;.",
        "children": [
          {
            "name": "configured",
            "type": "boolean",
            "description": "If you set this parameter to &#96;&#96;true&#96;&#96;, the instance is enabled for hibernation.<br />Default: &#96;&#96;false&#96;&#96;"
          }
        ]
      },
      {
        "name": "metadata_options",
        "type": "object",
        "description": "The metadata options for the instance. For more information, see &#91;Configure the Instance Metadata Service options&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html) in the &#42;Amazon EC2 User Guide&#42;.",
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
        "name": "instance_initiated_shutdown_behavior",
        "type": "string",
        "description": "Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).<br />Default: &#96;&#96;stop&#96;&#96;"
      },
      {
        "name": "disable_api_stop",
        "type": "boolean",
        "description": "Indicates whether to enable the instance for stop protection. For more information, see &#91;Enable stop protection for your EC2 instances&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-stop-protection.html) in the &#42;Amazon EC2 User Guide&#42;."
      },
      {
        "name": "cpu_options",
        "type": "object",
        "description": "The CPU options for the instance. For more information, see &#91;CPU options for Amazon EC2 instances&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html) in the &#42;Amazon EC2 User Guide&#42;.",
        "children": [
          {
            "name": "threads_per_core",
            "type": "integer",
            "description": "The number of threads per CPU core. To disable multithreading for the instance, specify a value of &#96;&#96;1&#96;&#96;. Otherwise, specify the default value of &#96;&#96;2&#96;&#96;."
          },
          {
            "name": "amd_sev_snp",
            "type": "string",
            "description": "Indicates whether to enable the instance for AMD SEV-SNP. AMD SEV-SNP is supported with M6a, R6a, and C6a instance types only. For more information, see &#91;AMD SEV-SNP for Amazon EC2 instances&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sev-snp.html)."
          },
          {
            "name": "core_count",
            "type": "integer",
            "description": "The number of CPU cores for the instance."
          }
        ]
      },
      {
        "name": "private_dns_name_options",
        "type": "object",
        "description": "The hostname type for EC2 instances launched into this subnet and how DNS A and AAAA record queries should be handled. For more information, see &#91;Amazon EC2 instance hostname types&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the &#42;User Guide&#42;.",
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
        "name": "security_group_ids",
        "type": "array",
        "description": "The IDs of the security groups. You can specify the IDs of existing security groups and references to resources created by the stack template.<br />If you specify a network interface, you must specify any security groups as part of the network interface instead."
      },
      {
        "name": "key_name",
        "type": "string",
        "description": "The name of the key pair. You can create a key pair using &#91;CreateKeyPair&#93;(https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API&#95;CreateKeyPair.html) or &#91;ImportKeyPair&#93;(https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API&#95;ImportKeyPair.html).<br />If you do not specify a key pair, you can't connect to the instance unless you choose an AMI that is configured to allow users another way to log in."
      },
      {
        "name": "disable_api_termination",
        "type": "boolean",
        "description": "Indicates whether termination protection is enabled for the instance. The default is &#96;&#96;false&#96;&#96;, which means that you can terminate the instance using the Amazon EC2 console, command line tools, or API. You can enable termination protection when you launch an instance, while the instance is running, or while the instance is stopped."
      },
      {
        "name": "instance_market_options",
        "type": "object",
        "description": "The market (purchasing) option for the instances.",
        "children": [
          {
            "name": "spot_options",
            "type": "object",
            "description": "The options for Spot Instances.",
            "children": [
              {
                "name": "spot_instance_type",
                "type": "string",
                "description": "The Spot Instance request type.<br />If you are using Spot Instances with an Auto Scaling group, use &#96;&#96;one-time&#96;&#96; requests, as the ASlong service handles requesting new Spot Instances whenever the group is below its desired capacity."
              },
              {
                "name": "instance_interruption_behavior",
                "type": "string",
                "description": "The behavior when a Spot Instance is interrupted. The default is &#96;&#96;terminate&#96;&#96;."
              },
              {
                "name": "max_price",
                "type": "string",
                "description": "The maximum hourly price you're willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price. If you do specify this parameter, it must be more than USD $0.001. Specifying a value below USD $0.001 will result in an &#96;&#96;InvalidParameterValue&#96;&#96; error message when the launch template is used to launch an instance.<br />If you specify a maximum price, your Spot Instances will be interrupted more frequently than if you do not specify this parameter."
              },
              {
                "name": "block_duration_minutes",
                "type": "integer",
                "description": "Deprecated."
              },
              {
                "name": "valid_until",
                "type": "string",
                "description": "The end date of the request, in UTC format (&#42;YYYY-MM-DD&#42;T&#42;HH:MM:SS&#42;Z). Supported only for persistent requests.<br />+ For a persistent request, the request remains active until the &#96;&#96;ValidUntil&#96;&#96; date and time is reached. Otherwise, the request remains active until you cancel it.<br />+ For a one-time request, &#96;&#96;ValidUntil&#96;&#96; is not supported. The request remains active until all instances launch or you cancel the request.<br /><br />Default: 7 days from the current date"
              }
            ]
          },
          {
            "name": "market_type",
            "type": "string",
            "description": "The market type."
          }
        ]
      },
      {
        "name": "instance_requirements",
        "type": "object",
        "description": "The attributes for the instance types. When you specify instance attributes, Amazon EC2 will identify instance types with these attributes.<br />You must specify &#96;&#96;VCpuCount&#96;&#96; and &#96;&#96;MemoryMiB&#96;&#96;. All other attributes are optional. Any unspecified optional attribute is set to its default.<br />When you specify multiple attributes, you get instance types that satisfy all of the specified attributes. If you specify multiple values for an attribute, you get instance types that satisfy any of the specified values.<br />To limit the list of instance types from which Amazon EC2 can identify matching instance types, you can use one of the following parameters, but not both in the same request:<br />+ &#96;&#96;AllowedInstanceTypes&#96;&#96; - The instance types to include in the list. All other instance types are ignored, even if they match your specified attributes.<br />+ &#96;&#96;ExcludedInstanceTypes&#96;&#96; - The instance types to exclude from the list, even if they match your specified attributes.<br /><br />If you specify &#96;&#96;InstanceRequirements&#96;&#96;, you can't specify &#96;&#96;InstanceType&#96;&#96;.<br />Attribute-based instance type selection is only supported when using Auto Scaling groups, EC2 Fleet, and Spot Fleet to launch instances. If you plan to use the launch template in the &#91;launch instance wizard&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-instance-wizard.html), or with the &#91;RunInstances&#93;(https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API&#95;RunInstances.html) API or &#91;AWS::EC2::Instance&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html)AWS CloudFormation resource, you can't specify &#96;&#96;InstanceRequirements&#96;&#96;.<br />For more information, see &#91;Specify attributes for instance type selection for EC2 Fleet or Spot Fleet&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html) and &#91;Spot placement score&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html) in the &#42;Amazon EC2 User Guide&#42;.",
        "children": [
          {
            "name": "instance_generations",
            "type": "array",
            "description": "Indicates whether current or previous generation instance types are included. The current generation instance types are recommended for use. Current generation instance types are typically the latest two to three generations in each instance family. For more information, see &#91;Instance types&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) in the &#42;Amazon EC2 User Guide&#42;.<br />For current generation instance types, specify &#96;&#96;current&#96;&#96;.<br />For previous generation instance types, specify &#96;&#96;previous&#96;&#96;.<br />Default: Current and previous generation instance types"
          },
          {
            "name": "memory_gi_bper_vcpu",
            "type": "object",
            "description": "The minimum and maximum amount of memory per vCPU, in GiB.<br />Default: No minimum or maximum limits",
            "children": [
              {
                "name": "min",
                "type": "number",
                "description": "The minimum amount of memory per vCPU, in GiB. To specify no minimum limit, omit this parameter."
              },
              {
                "name": "max",
                "type": "number",
                "description": "The maximum amount of memory per vCPU, in GiB. To specify no maximum limit, omit this parameter."
              }
            ]
          },
          {
            "name": "accelerator_types",
            "type": "array",
            "description": "The accelerator types that must be on the instance type.<br />+ For instance types with FPGA accelerators, specify &#96;&#96;fpga&#96;&#96;.<br />+ For instance types with GPU accelerators, specify &#96;&#96;gpu&#96;&#96;.<br />+ For instance types with Inference accelerators, specify &#96;&#96;inference&#96;&#96;.<br /><br />Default: Any accelerator type"
          },
          {
            "name": "v_cpu_count",
            "type": "object",
            "description": "The minimum and maximum number of vCPUs.",
            "children": [
              {
                "name": "min",
                "type": "integer",
                "description": "The minimum number of vCPUs. To specify no minimum limit, specify &#96;&#96;0&#96;&#96;."
              },
              {
                "name": "max",
                "type": "integer",
                "description": "The maximum number of vCPUs. To specify no maximum limit, omit this parameter."
              }
            ]
          },
          {
            "name": "accelerator_manufacturers",
            "type": "array",
            "description": "Indicates whether instance types must have accelerators by specific manufacturers.<br />+ For instance types with AWS devices, specify &#96;&#96;amazon-web-services&#96;&#96;.<br />+ For instance types with AMD devices, specify &#96;&#96;amd&#96;&#96;.<br />+ For instance types with Habana devices, specify &#96;&#96;habana&#96;&#96;.<br />+ For instance types with NVIDIA devices, specify &#96;&#96;nvidia&#96;&#96;.<br />+ For instance types with Xilinx devices, specify &#96;&#96;xilinx&#96;&#96;.<br /><br />Default: Any manufacturer"
          },
          {
            "name": "local_storage",
            "type": "string",
            "description": "Indicates whether instance types with instance store volumes are included, excluded, or required. For more information, &#91;Amazon EC2 instance store&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html) in the &#42;Amazon EC2 User Guide&#42;.<br />+ To include instance types with instance store volumes, specify &#96;&#96;included&#96;&#96;.<br />+ To require only instance types with instance store volumes, specify &#96;&#96;required&#96;&#96;.<br />+ To exclude instance types with instance store volumes, specify &#96;&#96;excluded&#96;&#96;.<br /><br />Default: &#96;&#96;included&#96;&#96;"
          },
          {
            "name": "cpu_manufacturers",
            "type": "array",
            "description": "The CPU manufacturers to include.<br />+ For instance types with Intel CPUs, specify &#96;&#96;intel&#96;&#96;.<br />+ For instance types with AMD CPUs, specify &#96;&#96;amd&#96;&#96;.<br />+ For instance types with AWS CPUs, specify &#96;&#96;amazon-web-services&#96;&#96;.<br />+ For instance types with Apple CPUs, specify &#96;&#96;apple&#96;&#96;.<br /><br />Don't confuse the CPU manufacturer with the CPU architecture. Instances will be launched with a compatible CPU architecture based on the Amazon Machine Image (AMI) that you specify in your launch template.<br />Default: Any manufacturer"
          },
          {
            "name": "bare_metal",
            "type": "string",
            "description": "Indicates whether bare metal instance types must be included, excluded, or required.<br />+ To include bare metal instance types, specify &#96;&#96;included&#96;&#96;.<br />+ To require only bare metal instance types, specify &#96;&#96;required&#96;&#96;.<br />+ To exclude bare metal instance types, specify &#96;&#96;excluded&#96;&#96;.<br /><br />Default: &#96;&#96;excluded&#96;&#96;"
          },
          {
            "name": "require_hibernate_support",
            "type": "boolean",
            "description": "Indicates whether instance types must support hibernation for On-Demand Instances.<br />This parameter is not supported for &#91;GetSpotPlacementScores&#93;(https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API&#95;GetSpotPlacementScores.html).<br />Default: &#96;&#96;false&#96;&#96;"
          },
          {
            "name": "max_spot_price_as_percentage_of_optimal_on_demand_price",
            "type": "integer",
            "description": "&#91;Price protection&#93; The price protection threshold for Spot Instances, as a percentage of an identified On-Demand price. The identified On-Demand price is the price of the lowest priced current generation C, M, or R instance type with your specified attributes. If no current generation C, M, or R instance type matches your attributes, then the identified price is from the lowest priced current generation instance types, and failing that, from the lowest priced previous generation instance types that match your attributes. When Amazon EC2 selects instance types with your attributes, it will exclude instance types whose price exceeds your specified threshold.<br />The parameter accepts an integer, which Amazon EC2 interprets as a percentage.<br />If you set &#96;&#96;TargetCapacityUnitType&#96;&#96; to &#96;&#96;vcpu&#96;&#96; or &#96;&#96;memory-mib&#96;&#96;, the price protection threshold is based on the per vCPU or per memory price instead of the per instance price.<br />Only one of &#96;&#96;SpotMaxPricePercentageOverLowestPrice&#96;&#96; or &#96;&#96;MaxSpotPriceAsPercentageOfOptimalOnDemandPrice&#96;&#96; can be specified. If you don't specify either, Amazon EC2 will automatically apply optimal price protection to consistently select from a wide range of instance types. To indicate no price protection threshold for Spot Instances, meaning you want to consider all instance types that match your attributes, include one of these parameters and specify a high value, such as &#96;&#96;999999&#96;&#96;."
          },
          {
            "name": "on_demand_max_price_percentage_over_lowest_price",
            "type": "integer",
            "description": "&#91;Price protection&#93; The price protection threshold for On-Demand Instances, as a percentage higher than an identified On-Demand price. The identified On-Demand price is the price of the lowest priced current generation C, M, or R instance type with your specified attributes. When Amazon EC2 selects instance types with your attributes, it will exclude instance types whose price exceeds your specified threshold.<br />The parameter accepts an integer, which Amazon EC2 interprets as a percentage.<br />To turn off price protection, specify a high value, such as &#96;&#96;999999&#96;&#96;.<br />This parameter is not supported for &#91;GetSpotPlacementScores&#93;(https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API&#95;GetSpotPlacementScores.html) and &#91;GetInstanceTypesFromInstanceRequirements&#93;(https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API&#95;GetInstanceTypesFromInstanceRequirements.html).<br />If you set &#96;&#96;TargetCapacityUnitType&#96;&#96; to &#96;&#96;vcpu&#96;&#96; or &#96;&#96;memory-mib&#96;&#96;, the price protection threshold is applied based on the per-vCPU or per-memory price instead of the per-instance price.<br />Default: &#96;&#96;20&#96;&#96;"
          },
          {
            "name": "memory_mi_b",
            "type": "object",
            "description": "The minimum and maximum amount of memory, in MiB.",
            "children": [
              {
                "name": "min",
                "type": "integer",
                "description": "The minimum amount of memory, in MiB. To specify no minimum limit, specify &#96;&#96;0&#96;&#96;."
              },
              {
                "name": "max",
                "type": "integer",
                "description": "The maximum amount of memory, in MiB. To specify no maximum limit, omit this parameter."
              }
            ]
          },
          {
            "name": "local_storage_types",
            "type": "array",
            "description": "The type of local storage that is required.<br />+ For instance types with hard disk drive (HDD) storage, specify &#96;&#96;hdd&#96;&#96;.<br />+ For instance types with solid state drive (SSD) storage, specify &#96;&#96;ssd&#96;&#96;.<br /><br />Default: &#96;&#96;hdd&#96;&#96; and &#96;&#96;ssd&#96;&#96;"
          },
          {
            "name": "network_interface_count",
            "type": "object",
            "description": "The minimum and maximum number of network interfaces.<br />Default: No minimum or maximum limits",
            "children": [
              {
                "name": "min",
                "type": "integer",
                "description": "The minimum number of network interfaces. To specify no minimum limit, omit this parameter."
              },
              {
                "name": "max",
                "type": "integer",
                "description": "The maximum number of network interfaces. To specify no maximum limit, omit this parameter."
              }
            ]
          },
          {
            "name": "excluded_instance_types",
            "type": "array",
            "description": "The instance types to exclude.<br />You can use strings with one or more wild cards, represented by an asterisk (&#96;&#96;&#42;&#96;&#96;), to exclude an instance type, size, or generation. The following are examples: &#96;&#96;m5.8xlarge&#96;&#96;, &#96;&#96;c5&#42;.&#42;&#96;&#96;, &#96;&#96;m5a.&#42;&#96;&#96;, &#96;&#96;r&#42;&#96;&#96;, &#96;&#96;&#42;3&#42;&#96;&#96;.<br />For example, if you specify &#96;&#96;c5&#42;&#96;&#96;,Amazon EC2 will exclude the entire C5 instance family, which includes all C5a and C5n instance types. If you specify &#96;&#96;m5a.&#42;&#96;&#96;, Amazon EC2 will exclude all the M5a instance types, but not the M5n instance types.<br />If you specify &#96;&#96;ExcludedInstanceTypes&#96;&#96;, you can't specify &#96;&#96;AllowedInstanceTypes&#96;&#96;.<br />Default: No excluded instance types"
          },
          {
            "name": "allowed_instance_types",
            "type": "array",
            "description": "The instance types to apply your specified attributes against. All other instance types are ignored, even if they match your specified attributes.<br />You can use strings with one or more wild cards, represented by an asterisk (&#96;&#96;&#42;&#96;&#96;), to allow an instance type, size, or generation. The following are examples: &#96;&#96;m5.8xlarge&#96;&#96;, &#96;&#96;c5&#42;.&#42;&#96;&#96;, &#96;&#96;m5a.&#42;&#96;&#96;, &#96;&#96;r&#42;&#96;&#96;, &#96;&#96;&#42;3&#42;&#96;&#96;.<br />For example, if you specify &#96;&#96;c5&#42;&#96;&#96;,Amazon EC2 will allow the entire C5 instance family, which includes all C5a and C5n instance types. If you specify &#96;&#96;m5a.&#42;&#96;&#96;, Amazon EC2 will allow all the M5a instance types, but not the M5n instance types.<br />If you specify &#96;&#96;AllowedInstanceTypes&#96;&#96;, you can't specify &#96;&#96;ExcludedInstanceTypes&#96;&#96;.<br />Default: All instance types"
          },
          {
            "name": "accelerator_count",
            "type": "object",
            "description": "The minimum and maximum number of accelerators (GPUs, FPGAs, or AWS Inferentia chips) on an instance.<br />To exclude accelerator-enabled instance types, set &#96;&#96;Max&#96;&#96; to &#96;&#96;0&#96;&#96;.<br />Default: No minimum or maximum limits",
            "children": [
              {
                "name": "min",
                "type": "integer",
                "description": "The minimum number of accelerators. To specify no minimum limit, omit this parameter."
              },
              {
                "name": "max",
                "type": "integer",
                "description": "The maximum number of accelerators. To specify no maximum limit, omit this parameter. To exclude accelerator-enabled instance types, set &#96;&#96;Max&#96;&#96; to &#96;&#96;0&#96;&#96;."
              }
            ]
          },
          {
            "name": "network_bandwidth_gbps",
            "type": "object",
            "description": "The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps).<br />Default: No minimum or maximum limits",
            "children": [
              {
                "name": "min",
                "type": "number",
                "description": "The minimum amount of network bandwidth, in Gbps. If this parameter is not specified, there is no minimum limit."
              },
              {
                "name": "max",
                "type": "number",
                "description": "The maximum amount of network bandwidth, in Gbps. To specify no maximum limit, omit this parameter."
              }
            ]
          },
          {
            "name": "baseline_performance_factors",
            "type": "object",
            "description": "The baseline performance to consider, using an instance family as a baseline reference. The instance family establishes the lowest acceptable level of performance. Amazon EC2 uses this baseline to guide instance type selection, but there is no guarantee that the selected instance types will always exceed the baseline for every application. Currently, this parameter only supports CPU performance as a baseline performance factor. For more information, see &#91;Performance protection&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html#ec2fleet-abis-performance-protection) in the &#42;Amazon EC2 User Guide&#42;.",
            "children": [
              {
                "name": "cpu",
                "type": "object",
                "description": "The CPU performance to consider, using an instance family as the baseline reference."
              }
            ]
          },
          {
            "name": "spot_max_price_percentage_over_lowest_price",
            "type": "integer",
            "description": "&#91;Price protection&#93; The price protection threshold for Spot Instances, as a percentage higher than an identified Spot price. The identified Spot price is the Spot price of the lowest priced current generation C, M, or R instance type with your specified attributes. If no current generation C, M, or R instance type matches your attributes, then the identified Spot price is from the lowest priced current generation instance types, and failing that, from the lowest priced previous generation instance types that match your attributes. When Amazon EC2 selects instance types with your attributes, it will exclude instance types whose Spot price exceeds your specified threshold.<br />The parameter accepts an integer, which Amazon EC2 interprets as a percentage.<br />If you set &#96;&#96;TargetCapacityUnitType&#96;&#96; to &#96;&#96;vcpu&#96;&#96; or &#96;&#96;memory-mib&#96;&#96;, the price protection threshold is applied based on the per-vCPU or per-memory price instead of the per-instance price.<br />This parameter is not supported for &#91;GetSpotPlacementScores&#93;(https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API&#95;GetSpotPlacementScores.html) and &#91;GetInstanceTypesFromInstanceRequirements&#93;(https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API&#95;GetInstanceTypesFromInstanceRequirements.html).<br />Only one of &#96;&#96;SpotMaxPricePercentageOverLowestPrice&#96;&#96; or &#96;&#96;MaxSpotPriceAsPercentageOfOptimalOnDemandPrice&#96;&#96; can be specified. If you don't specify either, Amazon EC2 will automatically apply optimal price protection to consistently select from a wide range of instance types. To indicate no price protection threshold for Spot Instances, meaning you want to consider all instance types that match your attributes, include one of these parameters and specify a high value, such as &#96;&#96;999999&#96;&#96;.<br />Default: &#96;&#96;100&#96;&#96;"
          },
          {
            "name": "baseline_ebs_bandwidth_mbps",
            "type": "object",
            "description": "The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see &#91;Amazon EBS–optimized instances&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html) in the &#42;Amazon EC2 User Guide&#42;.<br />Default: No minimum or maximum limits",
            "children": [
              {
                "name": "min",
                "type": "integer",
                "description": "The minimum baseline bandwidth, in Mbps. To specify no minimum limit, omit this parameter."
              },
              {
                "name": "max",
                "type": "integer",
                "description": "The maximum baseline bandwidth, in Mbps. To specify no maximum limit, omit this parameter."
              }
            ]
          },
          {
            "name": "accelerator_names",
            "type": "array",
            "description": "The accelerators that must be on the instance type.<br />+ For instance types with NVIDIA A10G GPUs, specify &#96;&#96;a10g&#96;&#96;.<br />+ For instance types with NVIDIA A100 GPUs, specify &#96;&#96;a100&#96;&#96;.<br />+ For instance types with NVIDIA H100 GPUs, specify &#96;&#96;h100&#96;&#96;.<br />+ For instance types with AWS Inferentia chips, specify &#96;&#96;inferentia&#96;&#96;.<br />+ For instance types with NVIDIA GRID K520 GPUs, specify &#96;&#96;k520&#96;&#96;.<br />+ For instance types with NVIDIA K80 GPUs, specify &#96;&#96;k80&#96;&#96;.<br />+ For instance types with NVIDIA M60 GPUs, specify &#96;&#96;m60&#96;&#96;.<br />+ For instance types with AMD Radeon Pro V520 GPUs, specify &#96;&#96;radeon-pro-v520&#96;&#96;.<br />+ For instance types with NVIDIA T4 GPUs, specify &#96;&#96;t4&#96;&#96;.<br />+ For instance types with NVIDIA T4G GPUs, specify &#96;&#96;t4g&#96;&#96;.<br />+ For instance types with Xilinx VU9P FPGAs, specify &#96;&#96;vu9p&#96;&#96;.<br />+ For instance types with NVIDIA V100 GPUs, specify &#96;&#96;v100&#96;&#96;.<br /><br />Default: Any accelerator"
          },
          {
            "name": "accelerator_total_memory_mi_b",
            "type": "object",
            "description": "The minimum and maximum amount of total accelerator memory, in MiB.<br />Default: No minimum or maximum limits",
            "children": [
              {
                "name": "min",
                "type": "integer",
                "description": "The minimum amount of accelerator memory, in MiB. To specify no minimum limit, omit this parameter."
              },
              {
                "name": "max",
                "type": "integer",
                "description": "The maximum amount of accelerator memory, in MiB. To specify no maximum limit, omit this parameter."
              }
            ]
          },
          {
            "name": "burstable_performance",
            "type": "string",
            "description": "Indicates whether burstable performance T instance types are included, excluded, or required. For more information, see &#91;Burstable performance instances&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html).<br />+ To include burstable performance instance types, specify &#96;&#96;included&#96;&#96;.<br />+ To require only burstable performance instance types, specify &#96;&#96;required&#96;&#96;.<br />+ To exclude burstable performance instance types, specify &#96;&#96;excluded&#96;&#96;.<br /><br />Default: &#96;&#96;excluded&#96;&#96;"
          },
          {
            "name": "total_local_storage_gb",
            "type": "object",
            "description": "The minimum and maximum amount of total local storage, in GB.<br />Default: No minimum or maximum limits",
            "children": [
              {
                "name": "min",
                "type": "number",
                "description": "The minimum amount of total local storage, in GB. To specify no minimum limit, omit this parameter."
              },
              {
                "name": "max",
                "type": "number",
                "description": "The maximum amount of total local storage, in GB. To specify no maximum limit, omit this parameter."
              }
            ]
          }
        ]
      },
      {
        "name": "ram_disk_id",
        "type": "string",
        "description": "The ID of the RAM disk.<br />We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see &#91;User provided kernels&#93;(https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html) in the &#42;Amazon EC2 User Guide&#42;."
      },
      {
        "name": "capacity_reservation_specification",
        "type": "object",
        "description": "The Capacity Reservation targeting option. If you do not specify this parameter, the instance's Capacity Reservation preference defaults to &#96;&#96;open&#96;&#96;, which enables it to run in any open Capacity Reservation that has matching attributes (instance type, platform, Availability Zone).",
        "children": [
          {
            "name": "capacity_reservation_preference",
            "type": "string",
            "description": "Indicates the instance's Capacity Reservation preferences. Possible preferences include:<br />+ &#96;&#96;capacity-reservations-only&#96;&#96; - The instance will only run in a Capacity Reservation or Capacity Reservation group. If capacity isn't available, the instance will fail to launch.<br />+ &#96;&#96;open&#96;&#96; - The instance can run in any &#96;&#96;open&#96;&#96; Capacity Reservation that has matching attributes (instance type, platform, Availability Zone, tenancy).<br />+ &#96;&#96;none&#96;&#96; - The instance avoids running in a Capacity Reservation even if one is available. The instance runs in On-Demand capacity."
          },
          {
            "name": "capacity_reservation_target",
            "type": "object",
            "description": "Information about the target Capacity Reservation or Capacity Reservation group.",
            "children": [
              {
                "name": "capacity_reservation_resource_group_arn",
                "type": "string",
                "description": "The ARN of the Capacity Reservation resource group in which to run the instance."
              },
              {
                "name": "capacity_reservation_id",
                "type": "string",
                "description": "The ID of the Capacity Reservation in which to run the instance."
              }
            ]
          }
        ]
      },
      {
        "name": "credit_specification",
        "type": "object",
        "description": "The credit option for CPU usage of the instance. Valid only for T instances.",
        "children": [
          {
            "name": "cpu_credits",
            "type": "string",
            "description": "The credit option for CPU usage of a T instance.<br />Valid values: &#96;&#96;standard&#96;&#96; &#124; &#96;&#96;unlimited&#96;&#96;"
          }
        ]
      }
    ]
  },
  {
    "name": "version_description",
    "type": "string",
    "description": "A description for the first version of the launch template."
  },
  {
    "name": "tag_specifications",
    "type": "array",
    "description": "The tags to apply to the launch template on creation. To tag the launch template, the resource type must be &#96;&#96;launch-template&#96;&#96;.<br />To specify the tags for resources that are created during instance launch, use &#91;TagSpecifications&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html#cfn-ec2-launchtemplate-launchtemplatedata-tagspecifications).",
    "children": [
      {
        "name": "resource_type",
        "type": "string",
        "description": "The type of resource. To tag a launch template, &#96;&#96;ResourceType&#96;&#96; must be &#96;&#96;launch-template&#96;&#96;."
      },
      {
        "name": "tags",
        "type": "array",
        "description": "The tags for the resource.",
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
    "name": "latest_version_number",
    "type": "string",
    "description": ""
  },
  {
    "name": "launch_template_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "default_version_number",
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
    "name": "launch_template_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html"><code>AWS::EC2::LaunchTemplate</code></a>.

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
    <td><code>launch_templates</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="LaunchTemplateData, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>launch_templates</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>launch_templates</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>launch_templates_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>launch_templates</code></td>
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

Gets all properties from an individual <code>launch_template</code>.
```sql
SELECT
region,
launch_template_name,
launch_template_data,
version_description,
tag_specifications,
latest_version_number,
launch_template_id,
default_version_number
FROM awscc.ec2.launch_templates
WHERE region = 'us-east-1' AND Identifier = '<LaunchTemplateId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>launch_templates</code> in a region.
```sql
SELECT
region,
launch_template_id
FROM awscc.ec2.launch_templates_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>launch_template</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.launch_templates (
 LaunchTemplateData,
 region
)
SELECT 
'{{ LaunchTemplateData }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.launch_templates (
 LaunchTemplateName,
 LaunchTemplateData,
 VersionDescription,
 TagSpecifications,
 region
)
SELECT 
 '{{ LaunchTemplateName }}',
 '{{ LaunchTemplateData }}',
 '{{ VersionDescription }}',
 '{{ TagSpecifications }}',
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
  - name: launch_template
    props:
      - name: LaunchTemplateName
        value: '{{ LaunchTemplateName }}'
      - name: LaunchTemplateData
        value:
          SecurityGroups:
            - '{{ SecurityGroups[0] }}'
          TagSpecifications:
            - ResourceType: '{{ ResourceType }}'
              Tags:
                - Key: '{{ Key }}'
                  Value: '{{ Value }}'
          NetworkPerformanceOptions:
            BandwidthWeighting: '{{ BandwidthWeighting }}'
          UserData: '{{ UserData }}'
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
          MaintenanceOptions:
            AutoRecovery: '{{ AutoRecovery }}'
          IamInstanceProfile:
            Arn: '{{ Arn }}'
            Name: '{{ Name }}'
          KernelId: '{{ KernelId }}'
          EbsOptimized: '{{ EbsOptimized }}'
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
          NetworkInterfaces:
            - Description: '{{ Description }}'
              PrivateIpAddress: '{{ PrivateIpAddress }}'
              PrivateIpAddresses:
                - Primary: '{{ Primary }}'
                  PrivateIpAddress: '{{ PrivateIpAddress }}'
              SecondaryPrivateIpAddressCount: '{{ SecondaryPrivateIpAddressCount }}'
              Ipv6PrefixCount: '{{ Ipv6PrefixCount }}'
              Ipv4Prefixes:
                - Ipv4Prefix: '{{ Ipv4Prefix }}'
              Ipv4PrefixCount: '{{ Ipv4PrefixCount }}'
              EnablePrimaryIpv6: '{{ EnablePrimaryIpv6 }}'
              GroupSet:
                - '{{ GroupSet[0] }}'
              Ipv6Addresses:
                - Ipv6Address: '{{ Ipv6Address }}'
              Ipv6Prefixes:
                - Ipv6Prefix: '{{ Ipv6Prefix }}'
              SubnetId: '{{ SubnetId }}'
              SourceDestCheck: '{{ SourceDestCheck }}'
              InterfaceType: '{{ InterfaceType }}'
              Ipv6AddressCount: '{{ Ipv6AddressCount }}'
              Tags:
                - null
              ConnectionTrackingSpecification:
                UdpTimeout: '{{ UdpTimeout }}'
                TcpEstablishedTimeout: '{{ TcpEstablishedTimeout }}'
                UdpStreamTimeout: '{{ UdpStreamTimeout }}'
          EnclaveOptions:
            Enabled: '{{ Enabled }}'
          ImageId: '{{ ImageId }}'
          InstanceType: '{{ InstanceType }}'
          Monitoring:
            Enabled: '{{ Enabled }}'
          HibernationOptions:
            Configured: '{{ Configured }}'
          MetadataOptions:
            HttpPutResponseHopLimit: '{{ HttpPutResponseHopLimit }}'
            HttpTokens: '{{ HttpTokens }}'
            HttpProtocolIpv6: '{{ HttpProtocolIpv6 }}'
            InstanceMetadataTags: '{{ InstanceMetadataTags }}'
            HttpEndpoint: '{{ HttpEndpoint }}'
          LicenseSpecifications:
            - LicenseConfigurationArn: '{{ LicenseConfigurationArn }}'
          InstanceInitiatedShutdownBehavior: '{{ InstanceInitiatedShutdownBehavior }}'
          DisableApiStop: '{{ DisableApiStop }}'
          CpuOptions:
            ThreadsPerCore: '{{ ThreadsPerCore }}'
            AmdSevSnp: '{{ AmdSevSnp }}'
            CoreCount: '{{ CoreCount }}'
          PrivateDnsNameOptions:
            EnableResourceNameDnsARecord: '{{ EnableResourceNameDnsARecord }}'
            HostnameType: '{{ HostnameType }}'
            EnableResourceNameDnsAAAARecord: '{{ EnableResourceNameDnsAAAARecord }}'
          SecurityGroupIds:
            - '{{ SecurityGroupIds[0] }}'
          KeyName: '{{ KeyName }}'
          DisableApiTermination: '{{ DisableApiTermination }}'
          InstanceMarketOptions:
            SpotOptions:
              SpotInstanceType: '{{ SpotInstanceType }}'
              InstanceInterruptionBehavior: '{{ InstanceInterruptionBehavior }}'
              MaxPrice: '{{ MaxPrice }}'
              BlockDurationMinutes: '{{ BlockDurationMinutes }}'
              ValidUntil: '{{ ValidUntil }}'
            MarketType: '{{ MarketType }}'
          InstanceRequirements:
            InstanceGenerations:
              - '{{ InstanceGenerations[0] }}'
            MemoryGiBPerVCpu:
              Min: null
              Max: null
            AcceleratorTypes:
              - '{{ AcceleratorTypes[0] }}'
            VCpuCount:
              Min: '{{ Min }}'
              Max: '{{ Max }}'
            AcceleratorManufacturers:
              - '{{ AcceleratorManufacturers[0] }}'
            LocalStorage: '{{ LocalStorage }}'
            CpuManufacturers:
              - '{{ CpuManufacturers[0] }}'
            BareMetal: '{{ BareMetal }}'
            RequireHibernateSupport: '{{ RequireHibernateSupport }}'
            MaxSpotPriceAsPercentageOfOptimalOnDemandPrice: '{{ MaxSpotPriceAsPercentageOfOptimalOnDemandPrice }}'
            OnDemandMaxPricePercentageOverLowestPrice: '{{ OnDemandMaxPricePercentageOverLowestPrice }}'
            MemoryMiB:
              Min: '{{ Min }}'
              Max: '{{ Max }}'
            LocalStorageTypes:
              - '{{ LocalStorageTypes[0] }}'
            NetworkInterfaceCount:
              Min: '{{ Min }}'
              Max: '{{ Max }}'
            ExcludedInstanceTypes:
              - '{{ ExcludedInstanceTypes[0] }}'
            AllowedInstanceTypes:
              - '{{ AllowedInstanceTypes[0] }}'
            AcceleratorCount:
              Min: '{{ Min }}'
              Max: '{{ Max }}'
            NetworkBandwidthGbps:
              Min: null
              Max: null
            BaselinePerformanceFactors:
              Cpu:
                References:
                  - InstanceFamily: '{{ InstanceFamily }}'
            SpotMaxPricePercentageOverLowestPrice: '{{ SpotMaxPricePercentageOverLowestPrice }}'
            BaselineEbsBandwidthMbps:
              Min: '{{ Min }}'
              Max: '{{ Max }}'
            AcceleratorNames:
              - '{{ AcceleratorNames[0] }}'
            AcceleratorTotalMemoryMiB:
              Min: '{{ Min }}'
              Max: '{{ Max }}'
            BurstablePerformance: '{{ BurstablePerformance }}'
            TotalLocalStorageGB:
              Min: null
              Max: null
          RamDiskId: '{{ RamDiskId }}'
          CapacityReservationSpecification:
            CapacityReservationPreference: '{{ CapacityReservationPreference }}'
            CapacityReservationTarget:
              CapacityReservationResourceGroupArn: '{{ CapacityReservationResourceGroupArn }}'
              CapacityReservationId: '{{ CapacityReservationId }}'
          CreditSpecification:
            CpuCredits: '{{ CpuCredits }}'
      - name: VersionDescription
        value: '{{ VersionDescription }}'
      - name: TagSpecifications
        value:
          - ResourceType: '{{ ResourceType }}'
            Tags:
              - null

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>launch_template</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.launch_templates
SET PatchDocument = string('{{ {
    "LaunchTemplateData": launch_template_data,
    "VersionDescription": version_description,
    "TagSpecifications": tag_specifications
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<LaunchTemplateId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.launch_templates
WHERE Identifier = '<LaunchTemplateId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>launch_templates</code> resource, the following permissions are required:

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
ec2:DescribeLaunchTemplates
```

</TabItem>
<TabItem value="create">

```json
ec2:CreateLaunchTemplate,
ec2:CreateTags
```

</TabItem>
<TabItem value="update">

```json
ec2:CreateLaunchTemplateVersion
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeLaunchTemplates
```

</TabItem>
<TabItem value="delete">

```json
ec2:DeleteLaunchTemplate,
ec2:DeleteTags,
ec2:DescribeLaunchTemplates
```

</TabItem>
</Tabs>