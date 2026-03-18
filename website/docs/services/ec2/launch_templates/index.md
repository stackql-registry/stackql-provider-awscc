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
<tr><td><b>Description</b></td><td><details><summary>Specifies the properties for creating a launch template.</summary>The minimum required properties for specifying a launch template are as follows:<br />+  You must specify at least one property for the launch template data.<br />+  You can optionally specify a name for the launch template. If you do not specify a name, CFN creates a name for you.<br />A launch template can contain some or all of the configuration information to launch an instance. When you launch an instance using a launch template, instance properties that are not specified in the launch template use default values, except the <code>ImageId</code> property, which has no default value. If you do not specify an AMI ID for the launch template <code>ImageId</code> property, you must specify an AMI ID for the instance <code>ImageId</code> property.<br />For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">Launch an instance from a launch template</a> in the <i>Amazon EC2 User Guide</i>.</details></td></tr>
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
        "description": "<details><summary>The names of the security groups. For a nondefault VPC, you must use security group IDs instead.</summary>If you specify a network interface, you must specify any security groups as part of the network interface instead of using this parameter.</details>"
      },
      {
        "name": "tag_specifications",
        "type": "array",
        "description": "<details><summary>The tags to apply to resources that are created during instance launch.</summary>To tag the launch template itself, use <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-tagspecifications\">TagSpecifications</a>.</details>",
        "children": [
          {
            "name": "resource_type",
            "type": "string",
            "description": "<details><summary>The type of resource to tag. You can specify tags for the following resource types only: <code>instance</code> | <code>volume</code> | <code>network-interface</code> | <code>spot-instances-request</code>. If the instance does not include the resource type that you specify, the instance launch fails. For example, not all instance types include a volume.</summary>To tag a resource after it has been created, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html\">CreateTags</a>.</details>"
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
        "description": "The settings for the network performance options for the instance. For more information, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configure-bandwidth-weighting.html\">EC2 instance bandwidth weighting configuration</a>.",
        "children": [
          {
            "name": "bandwidth_weighting",
            "type": "string",
            "description": "<details><summary>Specify the bandwidth weighting option to boost the associated type of baseline bandwidth, as follows:</summary>+ default This option uses the standard bandwidth configuration for your instance type. + vpc-1 This option boosts your networking baseline bandwidth and reduces your EBS baseline bandwidth. + ebs-1 This option boosts your EBS baseline bandwidth and reduces your networking baseline bandwidth.</details>"
          }
        ]
      },
      {
        "name": "user_data",
        "type": "string",
        "description": "<details><summary>The user data to make available to the instance. You must provide base64-encoded text. User data is limited to 16 KB. For more information, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html\">Run commands when you launch an EC2 instance with user data input</a> in the <i>Amazon EC2 User Guide</i>.</summary>If you are creating the launch template for use with BATCH, the user data must be provided in the <a href=\"https://docs.aws.amazon.com/https://cloudinit.readthedocs.io/en/latest/topics/format.html#mime-multi-part-archive\">MIME multi-part archive format</a>. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/launch-templates.html#lt-user-data\">Amazon EC2 user data in launch templates</a> in the <i>User Guide</i>.</details>"
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
        "description": "<details><summary>The ID of the kernel.</summary>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html\">User Provided Kernels</a> in the <i>Amazon EC2 User Guide</i>.</details>"
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
            "description": "The number of the partition the instance should launch in. Valid only if the placement group strategy is set to <code>partition</code>."
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
            "description": "The ARN of the host resource group in which to launch the instances. If you specify a host resource group ARN, omit the <i>Tenancy</i> parameter or set it to <code>host</code>."
          },
          {
            "name": "group_id",
            "type": "string",
            "description": "The Group Id of a placement group. You must specify the Placement Group <i>Group Id</i> to launch an instance in a shared placement group."
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
        "description": "<details><summary>Indicates whether the instance is enabled for AWS Nitro Enclaves. For more information, see <a href=\"https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html\">What is Nitro Enclaves?</a> in the <i>Nitro Enclaves User Guide</i>.</summary>You can't enable AWS Nitro Enclaves and hibernation on the same instance.</details>",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": "If this parameter is set to <code>true</code>, the instance is enabled for AWS Nitro Enclaves; otherwise, it is not enabled for AWS Nitro Enclaves."
          }
        ]
      },
      {
        "name": "image_id",
        "type": "string",
        "description": "<details><summary>The ID of the AMI. Alternatively, you can specify a Systems Manager parameter, which will resolve to an AMI ID on launch.</summary>Valid formats:<br />+   <code>ami-0ac394d6a3example</code><br />+   <code>resolve:ssm:parameter-name</code><br />+   <code>resolve:ssm:parameter-name:version-number</code><br />+   <code>resolve:ssm:parameter-name:label</code><br />For more information, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/finding-an-ami.html#using-systems-manager-parameter-to-find-AMI\">Use a Systems Manager parameter to find an AMI</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</details>"
      },
      {
        "name": "instance_type",
        "type": "string",
        "description": "<details><summary>The instance type. For more information, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html\">Amazon EC2 instance types</a> in the <i>Amazon EC2 User Guide</i>.</summary>If you specify <code>InstanceType</code>, you can't specify <code>InstanceRequirements</code>.</details>"
      },
      {
        "name": "monitoring",
        "type": "object",
        "description": "The monitoring for the instance.",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": "Specify <code>true</code> to enable detailed monitoring. Otherwise, basic monitoring is enabled."
          }
        ]
      },
      {
        "name": "hibernation_options",
        "type": "object",
        "description": "Indicates whether an instance is enabled for hibernation. This parameter is valid only if the instance meets the <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html\">hibernation prerequisites</a>. For more information, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html\">Hibernate your Amazon EC2 instance</a> in the <i>Amazon EC2 User Guide</i>.",
        "children": [
          {
            "name": "configured",
            "type": "boolean",
            "description": "<details><summary>If you set this parameter to <code>true</code>, the instance is enabled for hibernation.</summary>Default: <code>false</code></details>"
          }
        ]
      },
      {
        "name": "metadata_options",
        "type": "object",
        "description": "The metadata options for the instance. For more information, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html\">Configure the Instance Metadata Service options</a> in the <i>Amazon EC2 User Guide</i>.",
        "children": [
          {
            "name": "http_put_response_hop_limit",
            "type": "integer",
            "description": "<details><summary>The desired HTTP PUT response hop limit for instance metadata requests. The larger the number, the further instance metadata requests can travel.</summary>Default: <code>1</code><br />Possible values: Integers from 1 to 64</details>"
          },
          {
            "name": "http_tokens",
            "type": "string",
            "description": "<details><summary>Indicates whether IMDSv2 is required.</summary>+  <code>optional</code> - IMDSv2 is optional. You can choose whether to send a session token in your instance metadata retrieval requests. If you retrieve IAM role credentials without a session token, you receive the IMDSv1 role credentials. If you retrieve IAM role credentials using a valid session token, you receive the IMDSv2 role credentials.<br />+  <code>required</code> - IMDSv2 is required. You must send a session token in your instance metadata retrieval requests. With this option, retrieving the IAM role credentials always returns IMDSv2 credentials; IMDSv1 credentials are not available.<br />Default: If the value of <code>ImdsSupport</code> for the Amazon Machine Image (AMI) for your instance is <code>v2.0</code>, the default is <code>required</code>.</details>"
          },
          {
            "name": "http_protocol_ipv6",
            "type": "string",
            "description": "<details><summary>Enables or disables the IPv6 endpoint for the instance metadata service.</summary>Default: <code>disabled</code></details>"
          },
          {
            "name": "instance_metadata_tags",
            "type": "string",
            "description": "<details><summary>Set to <code>enabled</code> to allow access to instance tags from the instance metadata. Set to <code>disabled</code> to turn off access to instance tags from the instance metadata. For more information, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/work-with-tags-in-IMDS.html\">View tags for your EC2 instances using instance metadata</a>.</summary>Default: <code>disabled</code></details>"
          },
          {
            "name": "http_endpoint",
            "type": "string",
            "description": "<details><summary>Enables or disables the HTTP metadata endpoint on your instances. If the parameter is not specified, the default state is <code>enabled</code>.</summary>If you specify a value of <code>disabled</code>, you will not be able to access your instance metadata.</details>"
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
        "description": "<details><summary>Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).</summary>Default: <code>stop</code></details>"
      },
      {
        "name": "disable_api_stop",
        "type": "boolean",
        "description": "Indicates whether to enable the instance for stop protection. For more information, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-stop-protection.html\">Enable stop protection for your EC2 instances</a> in the <i>Amazon EC2 User Guide</i>."
      },
      {
        "name": "cpu_options",
        "type": "object",
        "description": "The CPU options for the instance. For more information, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html\">CPU options for Amazon EC2 instances</a> in the <i>Amazon EC2 User Guide</i>.",
        "children": [
          {
            "name": "threads_per_core",
            "type": "integer",
            "description": "The number of threads per CPU core. To disable multithreading for the instance, specify a value of <code>1</code>. Otherwise, specify the default value of <code>2</code>."
          },
          {
            "name": "amd_sev_snp",
            "type": "string",
            "description": "Indicates whether to enable the instance for AMD SEV-SNP. AMD SEV-SNP is supported with M6a, R6a, and C6a instance types only. For more information, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sev-snp.html\">AMD SEV-SNP for Amazon EC2 instances</a>."
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
        "description": "The hostname type for EC2 instances launched into this subnet and how DNS A and AAAA record queries should be handled. For more information, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html\">Amazon EC2 instance hostname types</a> in the <i>User Guide</i>.",
        "children": [
          {
            "name": "enable_resource_name_dns_arecord",
            "type": "boolean",
            "description": "Indicates whether to respond to DNS queries for instance hostnames with DNS A records."
          },
          {
            "name": "hostname_type",
            "type": "string",
            "description": "The type of hostname for EC2 instances. For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. For more information, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html\">Amazon EC2 instance hostname types</a> in the <i>User Guide</i>."
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
        "description": "<details><summary>The IDs of the security groups. You can specify the IDs of existing security groups and references to resources created by the stack template.</summary>If you specify a network interface, you must specify any security groups as part of the network interface instead.</details>"
      },
      {
        "name": "key_name",
        "type": "string",
        "description": "<details><summary>The name of the key pair. You can create a key pair using <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateKeyPair.html\">CreateKeyPair</a> or <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportKeyPair.html\">ImportKeyPair</a>.</summary>If you do not specify a key pair, you can't connect to the instance unless you choose an AMI that is configured to allow users another way to log in.</details>"
      },
      {
        "name": "disable_api_termination",
        "type": "boolean",
        "description": "Indicates whether termination protection is enabled for the instance. The default is <code>false</code>, which means that you can terminate the instance using the Amazon EC2 console, command line tools, or API. You can enable termination protection when you launch an instance, while the instance is running, or while the instance is stopped."
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
                "description": "<details><summary>The Spot Instance request type.</summary>If you are using Spot Instances with an Auto Scaling group, use <code>one-time</code> requests, as the ASlong service handles requesting new Spot Instances whenever the group is below its desired capacity.</details>"
              },
              {
                "name": "instance_interruption_behavior",
                "type": "string",
                "description": "The behavior when a Spot Instance is interrupted. The default is <code>terminate</code>."
              },
              {
                "name": "max_price",
                "type": "string",
                "description": "<details><summary>The maximum hourly price you're willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price. If you do specify this parameter, it must be more than USD $0.001. Specifying a value below USD $0.001 will result in an <code>InvalidParameterValue</code> error message when the launch template is used to launch an instance.</summary>If you specify a maximum price, your Spot Instances will be interrupted more frequently than if you do not specify this parameter.</details>"
              },
              {
                "name": "block_duration_minutes",
                "type": "integer",
                "description": "Deprecated."
              },
              {
                "name": "valid_until",
                "type": "string",
                "description": "<details><summary>The end date of the request, in UTC format (<i>YYYY-MM-DD</i>T<i>HH:MM:SS</i>Z). Supported only for persistent requests.</summary>+  For a persistent request, the request remains active until the <code>ValidUntil</code> date and time is reached. Otherwise, the request remains active until you cancel it.<br />+  For a one-time request, <code>ValidUntil</code> is not supported. The request remains active until all instances launch or you cancel the request.<br />Default: 7 days from the current date</details>"
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
        "description": "<details><summary>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will identify instance types with these attributes.</summary>You must specify <code>VCpuCount</code> and <code>MemoryMiB</code>. All other attributes are optional. Any unspecified optional attribute is set to its default.<br />When you specify multiple attributes, you get instance types that satisfy all of the specified attributes. If you specify multiple values for an attribute, you get instance types that satisfy any of the specified values.<br />To limit the list of instance types from which Amazon EC2 can identify matching instance types, you can use one of the following parameters, but not both in the same request:<br />+  <code>AllowedInstanceTypes</code> - The instance types to include in the list. All other instance types are ignored, even if they match your specified attributes.<br />+  <code>ExcludedInstanceTypes</code> - The instance types to exclude from the list, even if they match your specified attributes.<br />If you specify <code>InstanceRequirements</code>, you can't specify <code>InstanceType</code>.<br />Attribute-based instance type selection is only supported when using Auto Scaling groups, EC2 Fleet, and Spot Fleet to launch instances. If you plan to use the launch template in the <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-instance-wizard.html\">launch instance wizard</a>, or with the <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html\">RunInstances</a> API or <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html\">AWS::EC2::Instance</a>AWS CloudFormation resource, you can't specify <code>InstanceRequirements</code>.<br />For more information, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html\">Specify attributes for instance type selection for EC2 Fleet or Spot Fleet</a> and <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html\">Spot placement score</a> in the <i>Amazon EC2 User Guide</i>.</details>",
        "children": [
          {
            "name": "instance_generations",
            "type": "array",
            "description": "<details><summary>Indicates whether current or previous generation instance types are included. The current generation instance types are recommended for use. Current generation instance types are typically the latest two to three generations in each instance family. For more information, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html\">Instance types</a> in the <i>Amazon EC2 User Guide</i>.</summary>For current generation instance types, specify <code>current</code>.<br />For previous generation instance types, specify <code>previous</code>.<br />Default: Current and previous generation instance types</details>"
          },
          {
            "name": "memory_gi_bper_vcpu",
            "type": "object",
            "description": "<details><summary>The minimum and maximum amount of memory per vCPU, in GiB.</summary>Default: No minimum or maximum limits</details>",
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
            "description": "<details><summary>The accelerator types that must be on the instance type.</summary>+  For instance types with FPGA accelerators, specify <code>fpga</code>.<br />+  For instance types with GPU accelerators, specify <code>gpu</code>.<br />+  For instance types with Inference accelerators, specify <code>inference</code>.<br />Default: Any accelerator type</details>"
          },
          {
            "name": "v_cpu_count",
            "type": "object",
            "description": "The minimum and maximum number of vCPUs.",
            "children": [
              {
                "name": "min",
                "type": "integer",
                "description": "The minimum number of vCPUs. To specify no minimum limit, specify <code>0</code>."
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
            "description": "<details><summary>Indicates whether instance types must have accelerators by specific manufacturers.</summary>+  For instance types with AWS devices, specify <code>amazon-web-services</code>.<br />+  For instance types with AMD devices, specify <code>amd</code>.<br />+  For instance types with Habana devices, specify <code>habana</code>.<br />+  For instance types with NVIDIA devices, specify <code>nvidia</code>.<br />+  For instance types with Xilinx devices, specify <code>xilinx</code>.<br />Default: Any manufacturer</details>"
          },
          {
            "name": "local_storage",
            "type": "string",
            "description": "<details><summary>Indicates whether instance types with instance store volumes are included, excluded, or required. For more information, <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html\">Amazon EC2 instance store</a> in the <i>Amazon EC2 User Guide</i>.</summary>+  To include instance types with instance store volumes, specify <code>included</code>.<br />+  To require only instance types with instance store volumes, specify <code>required</code>.<br />+  To exclude instance types with instance store volumes, specify <code>excluded</code>.<br />Default: <code>included</code></details>"
          },
          {
            "name": "cpu_manufacturers",
            "type": "array",
            "description": "<details><summary>The CPU manufacturers to include.</summary>+  For instance types with Intel CPUs, specify <code>intel</code>.<br />+  For instance types with AMD CPUs, specify <code>amd</code>.<br />+  For instance types with AWS CPUs, specify <code>amazon-web-services</code>.<br />+  For instance types with Apple CPUs, specify <code>apple</code>.<br />Don't confuse the CPU manufacturer with the CPU architecture. Instances will be launched with a compatible CPU architecture based on the Amazon Machine Image (AMI) that you specify in your launch template.<br />Default: Any manufacturer</details>"
          },
          {
            "name": "bare_metal",
            "type": "string",
            "description": "<details><summary>Indicates whether bare metal instance types must be included, excluded, or required.</summary>+  To include bare metal instance types, specify <code>included</code>.<br />+  To require only bare metal instance types, specify <code>required</code>.<br />+  To exclude bare metal instance types, specify <code>excluded</code>.<br />Default: <code>excluded</code></details>"
          },
          {
            "name": "require_hibernate_support",
            "type": "boolean",
            "description": "<details><summary>Indicates whether instance types must support hibernation for On-Demand Instances.</summary>This parameter is not supported for <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html\">GetSpotPlacementScores</a>.<br />Default: <code>false</code></details>"
          },
          {
            "name": "max_spot_price_as_percentage_of_optimal_on_demand_price",
            "type": "integer",
            "description": "<details><summary>[Price protection] The price protection threshold for Spot Instances, as a percentage of an identified On-Demand price. The identified On-Demand price is the price of the lowest priced current generation C, M, or R instance type with your specified attributes. If no current generation C, M, or R instance type matches your attributes, then the identified price is from the lowest priced current generation instance types, and failing that, from the lowest priced previous generation instance types that match your attributes. When Amazon EC2 selects instance types with your attributes, it will exclude instance types whose price exceeds your specified threshold.</summary>The parameter accepts an integer, which Amazon EC2 interprets as a percentage.<br />If you set <code>TargetCapacityUnitType</code> to <code>vcpu</code> or <code>memory-mib</code>, the price protection threshold is based on the per vCPU or per memory price instead of the per instance price.<br />Only one of <code>SpotMaxPricePercentageOverLowestPrice</code> or <code>MaxSpotPriceAsPercentageOfOptimalOnDemandPrice</code> can be specified. If you don't specify either, Amazon EC2 will automatically apply optimal price protection to consistently select from a wide range of instance types. To indicate no price protection threshold for Spot Instances, meaning you want to consider all instance types that match your attributes, include one of these parameters and specify a high value, such as <code>999999</code>.</details>"
          },
          {
            "name": "on_demand_max_price_percentage_over_lowest_price",
            "type": "integer",
            "description": "<details><summary>[Price protection] The price protection threshold for On-Demand Instances, as a percentage higher than an identified On-Demand price. The identified On-Demand price is the price of the lowest priced current generation C, M, or R instance type with your specified attributes. When Amazon EC2 selects instance types with your attributes, it will exclude instance types whose price exceeds your specified threshold.</summary>The parameter accepts an integer, which Amazon EC2 interprets as a percentage.<br />To turn off price protection, specify a high value, such as <code>999999</code>.<br />This parameter is not supported for <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html\">GetSpotPlacementScores</a> and <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements.html\">GetInstanceTypesFromInstanceRequirements</a>.<br />If you set <code>TargetCapacityUnitType</code> to <code>vcpu</code> or <code>memory-mib</code>, the price protection threshold is applied based on the per-vCPU or per-memory price instead of the per-instance price.<br />Default: <code>20</code></details>"
          },
          {
            "name": "memory_mi_b",
            "type": "object",
            "description": "The minimum and maximum amount of memory, in MiB.",
            "children": [
              {
                "name": "min",
                "type": "integer",
                "description": "The minimum amount of memory, in MiB. To specify no minimum limit, specify <code>0</code>."
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
            "description": "<details><summary>The type of local storage that is required.</summary>+  For instance types with hard disk drive (HDD) storage, specify <code>hdd</code>.<br />+  For instance types with solid state drive (SSD) storage, specify <code>ssd</code>.<br />Default: <code>hdd</code> and <code>ssd</code></details>"
          },
          {
            "name": "network_interface_count",
            "type": "object",
            "description": "<details><summary>The minimum and maximum number of network interfaces.</summary>Default: No minimum or maximum limits</details>",
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
            "description": "<details><summary>The instance types to exclude.</summary>You can use strings with one or more wild cards, represented by an asterisk (<code><i></code>), to exclude an instance type, size, or generation. The following are examples: <code>m5.8xlarge</code>, <code>c5</i>.<i></code>, <code>m5a.</i></code>, <code>r<i></code>, <code></i>3*</code>.<br />For example, if you specify <code>c5<i></code>,Amazon EC2 will exclude the entire C5 instance family, which includes all C5a and C5n instance types. If you specify <code>m5a.</i></code>, Amazon EC2 will exclude all the M5a instance types, but not the M5n instance types.<br />If you specify <code>ExcludedInstanceTypes</code>, you can't specify <code>AllowedInstanceTypes</code>.<br />Default: No excluded instance types</details>"
          },
          {
            "name": "allowed_instance_types",
            "type": "array",
            "description": "<details><summary>The instance types to apply your specified attributes against. All other instance types are ignored, even if they match your specified attributes.</summary>You can use strings with one or more wild cards, represented by an asterisk (<code><i></code>), to allow an instance type, size, or generation. The following are examples: <code>m5.8xlarge</code>, <code>c5</i>.<i></code>, <code>m5a.</i></code>, <code>r<i></code>, <code></i>3*</code>.<br />For example, if you specify <code>c5<i></code>,Amazon EC2 will allow the entire C5 instance family, which includes all C5a and C5n instance types. If you specify <code>m5a.</i></code>, Amazon EC2 will allow all the M5a instance types, but not the M5n instance types.<br />If you specify <code>AllowedInstanceTypes</code>, you can't specify <code>ExcludedInstanceTypes</code>.<br />Default: All instance types</details>"
          },
          {
            "name": "accelerator_count",
            "type": "object",
            "description": "<details><summary>The minimum and maximum number of accelerators (GPUs, FPGAs, or AWS Inferentia chips) on an instance.</summary>To exclude accelerator-enabled instance types, set <code>Max</code> to <code>0</code>.<br />Default: No minimum or maximum limits</details>",
            "children": [
              {
                "name": "min",
                "type": "integer",
                "description": "The minimum number of accelerators. To specify no minimum limit, omit this parameter."
              },
              {
                "name": "max",
                "type": "integer",
                "description": "The maximum number of accelerators. To specify no maximum limit, omit this parameter. To exclude accelerator-enabled instance types, set <code>Max</code> to <code>0</code>."
              }
            ]
          },
          {
            "name": "network_bandwidth_gbps",
            "type": "object",
            "description": "<details><summary>The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps).</summary>Default: No minimum or maximum limits</details>",
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
            "description": "The baseline performance to consider, using an instance family as a baseline reference. The instance family establishes the lowest acceptable level of performance. Amazon EC2 uses this baseline to guide instance type selection, but there is no guarantee that the selected instance types will always exceed the baseline for every application. Currently, this parameter only supports CPU performance as a baseline performance factor. For more information, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html#ec2fleet-abis-performance-protection\">Performance protection</a> in the <i>Amazon EC2 User Guide</i>.",
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
            "description": "<details><summary>[Price protection] The price protection threshold for Spot Instances, as a percentage higher than an identified Spot price. The identified Spot price is the Spot price of the lowest priced current generation C, M, or R instance type with your specified attributes. If no current generation C, M, or R instance type matches your attributes, then the identified Spot price is from the lowest priced current generation instance types, and failing that, from the lowest priced previous generation instance types that match your attributes. When Amazon EC2 selects instance types with your attributes, it will exclude instance types whose Spot price exceeds your specified threshold.</summary>The parameter accepts an integer, which Amazon EC2 interprets as a percentage.<br />If you set <code>TargetCapacityUnitType</code> to <code>vcpu</code> or <code>memory-mib</code>, the price protection threshold is applied based on the per-vCPU or per-memory price instead of the per-instance price.<br />This parameter is not supported for <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html\">GetSpotPlacementScores</a> and <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements.html\">GetInstanceTypesFromInstanceRequirements</a>.<br />Only one of <code>SpotMaxPricePercentageOverLowestPrice</code> or <code>MaxSpotPriceAsPercentageOfOptimalOnDemandPrice</code> can be specified. If you don't specify either, Amazon EC2 will automatically apply optimal price protection to consistently select from a wide range of instance types. To indicate no price protection threshold for Spot Instances, meaning you want to consider all instance types that match your attributes, include one of these parameters and specify a high value, such as <code>999999</code>.<br />Default: <code>100</code></details>"
          },
          {
            "name": "baseline_ebs_bandwidth_mbps",
            "type": "object",
            "description": "<details><summary>The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html\">Amazon EBS–optimized instances</a> in the <i>Amazon EC2 User Guide</i>.</summary>Default: No minimum or maximum limits</details>",
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
            "description": "<details><summary>The accelerators that must be on the instance type.</summary>+  For instance types with NVIDIA A10G GPUs, specify <code>a10g</code>.<br />+  For instance types with NVIDIA A100 GPUs, specify <code>a100</code>.<br />+  For instance types with NVIDIA H100 GPUs, specify <code>h100</code>.<br />+  For instance types with AWS Inferentia chips, specify <code>inferentia</code>.<br />+  For instance types with NVIDIA GRID K520 GPUs, specify <code>k520</code>.<br />+  For instance types with NVIDIA K80 GPUs, specify <code>k80</code>.<br />+  For instance types with NVIDIA M60 GPUs, specify <code>m60</code>.<br />+  For instance types with AMD Radeon Pro V520 GPUs, specify <code>radeon-pro-v520</code>.<br />+  For instance types with NVIDIA T4 GPUs, specify <code>t4</code>.<br />+  For instance types with NVIDIA T4G GPUs, specify <code>t4g</code>.<br />+  For instance types with Xilinx VU9P FPGAs, specify <code>vu9p</code>.<br />+  For instance types with NVIDIA V100 GPUs, specify <code>v100</code>.<br />Default: Any accelerator</details>"
          },
          {
            "name": "accelerator_total_memory_mi_b",
            "type": "object",
            "description": "<details><summary>The minimum and maximum amount of total accelerator memory, in MiB.</summary>Default: No minimum or maximum limits</details>",
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
            "description": "<details><summary>Indicates whether burstable performance T instance types are included, excluded, or required. For more information, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html\">Burstable performance instances</a>.</summary>+  To include burstable performance instance types, specify <code>included</code>.<br />+  To require only burstable performance instance types, specify <code>required</code>.<br />+  To exclude burstable performance instance types, specify <code>excluded</code>.<br />Default: <code>excluded</code></details>"
          },
          {
            "name": "total_local_storage_gb",
            "type": "object",
            "description": "<details><summary>The minimum and maximum amount of total local storage, in GB.</summary>Default: No minimum or maximum limits</details>",
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
        "description": "<details><summary>The ID of the RAM disk.</summary>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html\">User provided kernels</a> in the <i>Amazon EC2 User Guide</i>.</details>"
      },
      {
        "name": "capacity_reservation_specification",
        "type": "object",
        "description": "The Capacity Reservation targeting option. If you do not specify this parameter, the instance's Capacity Reservation preference defaults to <code>open</code>, which enables it to run in any open Capacity Reservation that has matching attributes (instance type, platform, Availability Zone).",
        "children": [
          {
            "name": "capacity_reservation_preference",
            "type": "string",
            "description": "<details><summary>Indicates the instance's Capacity Reservation preferences. Possible preferences include:</summary>+  <code>capacity-reservations-only</code> - The instance will only run in a Capacity Reservation or Capacity Reservation group. If capacity isn't available, the instance will fail to launch.<br />+  <code>open</code> - The instance can run in any <code>open</code> Capacity Reservation that has matching attributes (instance type, platform, Availability Zone, tenancy).<br />+  <code>none</code> - The instance avoids running in a Capacity Reservation even if one is available. The instance runs in On-Demand capacity.</details>"
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
            "description": "<details><summary>The credit option for CPU usage of a T instance.</summary>Valid values: <code>standard</code> | <code>unlimited</code></details>"
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
    "description": "<details><summary>The tags to apply to the launch template on creation. To tag the launch template, the resource type must be <code>launch-template</code>.</summary>To specify the tags for resources that are created during instance launch, use <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html#cfn-ec2-launchtemplate-launchtemplatedata-tagspecifications\">TagSpecifications</a>.</details>",
    "children": [
      {
        "name": "resource_type",
        "type": "string",
        "description": "The type of resource. To tag a launch template, <code>ResourceType</code> must be <code>launch-template</code>."
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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ launch_template_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>launch_templates</code> in a region.
```sql
SELECT
  region,
  launch_template_id
FROM awscc.ec2.launch_templates_list_only
WHERE
  region = '{{ region }}';
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
  '{{ launch_template_data }}',
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
INSERT INTO awscc.ec2.launch_templates (
  LaunchTemplateName,
  LaunchTemplateData,
  VersionDescription,
  TagSpecifications,
  region
)
SELECT
  '{{ launch_template_name }}',
  '{{ launch_template_data }}',
  '{{ version_description }}',
  '{{ tag_specifications }}',
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
      - name: launch_template_name
        value: '{{ launch_template_name }}'
      - name: launch_template_data
        value:
          security_groups:
            - '{{ security_groups[0] }}'
          tag_specifications:
            - resource_type: '{{ resource_type }}'
              tags:
                - key: '{{ key }}'
                  value: '{{ value }}'
          network_performance_options:
            bandwidth_weighting: '{{ bandwidth_weighting }}'
          user_data: '{{ user_data }}'
          block_device_mappings:
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
          maintenance_options:
            auto_recovery: '{{ auto_recovery }}'
          iam_instance_profile:
            arn: '{{ arn }}'
            name: '{{ name }}'
          kernel_id: '{{ kernel_id }}'
          ebs_optimized: '{{ ebs_optimized }}'
          placement:
            group_name: '{{ group_name }}'
            tenancy: '{{ tenancy }}'
            spread_domain: '{{ spread_domain }}'
            partition_number: '{{ partition_number }}'
            availability_zone: '{{ availability_zone }}'
            affinity: '{{ affinity }}'
            host_id: '{{ host_id }}'
            host_resource_group_arn: '{{ host_resource_group_arn }}'
            group_id: '{{ group_id }}'
          network_interfaces:
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
                - ipv6_address: '{{ ipv6_address }}'
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
          enclave_options:
            enabled: '{{ enabled }}'
          image_id: '{{ image_id }}'
          instance_type: '{{ instance_type }}'
          monitoring:
            enabled: '{{ enabled }}'
          hibernation_options:
            configured: '{{ configured }}'
          metadata_options:
            http_put_response_hop_limit: '{{ http_put_response_hop_limit }}'
            http_tokens: '{{ http_tokens }}'
            http_protocol_ipv6: '{{ http_protocol_ipv6 }}'
            instance_metadata_tags: '{{ instance_metadata_tags }}'
            http_endpoint: '{{ http_endpoint }}'
          license_specifications:
            - license_configuration_arn: '{{ license_configuration_arn }}'
          instance_initiated_shutdown_behavior: '{{ instance_initiated_shutdown_behavior }}'
          disable_api_stop: '{{ disable_api_stop }}'
          cpu_options:
            threads_per_core: '{{ threads_per_core }}'
            amd_sev_snp: '{{ amd_sev_snp }}'
            core_count: '{{ core_count }}'
          private_dns_name_options:
            enable_resource_name_dns_arecord: '{{ enable_resource_name_dns_arecord }}'
            hostname_type: '{{ hostname_type }}'
            enable_resource_name_dns_aa_aa_record: '{{ enable_resource_name_dns_aa_aa_record }}'
          security_group_ids:
            - '{{ security_group_ids[0] }}'
          key_name: '{{ key_name }}'
          disable_api_termination: '{{ disable_api_termination }}'
          instance_market_options:
            spot_options:
              spot_instance_type: '{{ spot_instance_type }}'
              instance_interruption_behavior: '{{ instance_interruption_behavior }}'
              max_price: '{{ max_price }}'
              block_duration_minutes: '{{ block_duration_minutes }}'
              valid_until: '{{ valid_until }}'
            market_type: '{{ market_type }}'
          instance_requirements:
            instance_generations:
              - '{{ instance_generations[0] }}'
            memory_gi_bper_vcpu:
              min: null
              max: null
            accelerator_types:
              - '{{ accelerator_types[0] }}'
            v_cpu_count:
              min: '{{ min }}'
              max: '{{ max }}'
            accelerator_manufacturers:
              - '{{ accelerator_manufacturers[0] }}'
            local_storage: '{{ local_storage }}'
            cpu_manufacturers:
              - '{{ cpu_manufacturers[0] }}'
            bare_metal: '{{ bare_metal }}'
            require_hibernate_support: '{{ require_hibernate_support }}'
            max_spot_price_as_percentage_of_optimal_on_demand_price: '{{ max_spot_price_as_percentage_of_optimal_on_demand_price }}'
            on_demand_max_price_percentage_over_lowest_price: '{{ on_demand_max_price_percentage_over_lowest_price }}'
            memory_mi_b:
              min: '{{ min }}'
              max: '{{ max }}'
            local_storage_types:
              - '{{ local_storage_types[0] }}'
            network_interface_count:
              min: '{{ min }}'
              max: '{{ max }}'
            excluded_instance_types:
              - '{{ excluded_instance_types[0] }}'
            allowed_instance_types:
              - '{{ allowed_instance_types[0] }}'
            accelerator_count:
              min: '{{ min }}'
              max: '{{ max }}'
            network_bandwidth_gbps:
              min: null
              max: null
            baseline_performance_factors:
              cpu:
                references:
                  - instance_family: '{{ instance_family }}'
            spot_max_price_percentage_over_lowest_price: '{{ spot_max_price_percentage_over_lowest_price }}'
            baseline_ebs_bandwidth_mbps:
              min: '{{ min }}'
              max: '{{ max }}'
            accelerator_names:
              - '{{ accelerator_names[0] }}'
            accelerator_total_memory_mi_b:
              min: '{{ min }}'
              max: '{{ max }}'
            burstable_performance: '{{ burstable_performance }}'
            total_local_storage_gb:
              min: null
              max: null
          ram_disk_id: '{{ ram_disk_id }}'
          capacity_reservation_specification:
            capacity_reservation_preference: '{{ capacity_reservation_preference }}'
            capacity_reservation_target:
              capacity_reservation_resource_group_arn: '{{ capacity_reservation_resource_group_arn }}'
              capacity_reservation_id: '{{ capacity_reservation_id }}'
          credit_specification:
            cpu_credits: '{{ cpu_credits }}'
      - name: version_description
        value: '{{ version_description }}'
      - name: tag_specifications
        value:
          - resource_type: '{{ resource_type }}'
            tags:
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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ launch_template_id }}'
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
DELETE FROM awscc.ec2.launch_templates
WHERE
  Identifier = '{{ launch_template_id }}' AND
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