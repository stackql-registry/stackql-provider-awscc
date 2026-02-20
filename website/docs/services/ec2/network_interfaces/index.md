---
title: network_interfaces
hide_title: false
hide_table_of_contents: false
keywords:
  - network_interfaces
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

Creates, updates, deletes or gets a <code>network_interface</code> resource or lists <code>network_interfaces</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>network_interfaces</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::EC2::NetworkInterface resource creates network interface</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.network_interfaces" /></td></tr>
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
    "description": "Network interface id."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html"><code>AWS::EC2::NetworkInterface</code></a>.

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
    <td><code>network_interfaces</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="SubnetId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>network_interfaces</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>network_interfaces</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>network_interfaces_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>network_interfaces</code></td>
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

Gets all properties from an individual <code>network_interface</code>.
```sql
SELECT
region,
description,
private_ip_address,
primary_ipv6_address,
private_ip_addresses,
secondary_private_ip_address_count,
ipv6_prefix_count,
primary_private_ip_address,
ipv4_prefixes,
ipv4_prefix_count,
enable_primary_ipv6,
group_set,
ipv6_addresses,
ipv6_prefixes,
subnet_id,
source_dest_check,
interface_type,
secondary_private_ip_addresses,
vpc_id,
ipv6_address_count,
id,
tags,
connection_tracking_specification
FROM awscc.ec2.network_interfaces
WHERE region = 'us-east-1' AND Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>network_interfaces</code> in a region.
```sql
SELECT
region,
id
FROM awscc.ec2.network_interfaces_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>network_interface</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.network_interfaces (
 SubnetId,
 region
)
SELECT 
'{{ SubnetId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.network_interfaces (
 Description,
 PrivateIpAddress,
 PrivateIpAddresses,
 SecondaryPrivateIpAddressCount,
 Ipv6PrefixCount,
 Ipv4Prefixes,
 Ipv4PrefixCount,
 EnablePrimaryIpv6,
 GroupSet,
 Ipv6Addresses,
 Ipv6Prefixes,
 SubnetId,
 SourceDestCheck,
 InterfaceType,
 Ipv6AddressCount,
 Tags,
 ConnectionTrackingSpecification,
 region
)
SELECT 
 '{{ Description }}',
 '{{ PrivateIpAddress }}',
 '{{ PrivateIpAddresses }}',
 '{{ SecondaryPrivateIpAddressCount }}',
 '{{ Ipv6PrefixCount }}',
 '{{ Ipv4Prefixes }}',
 '{{ Ipv4PrefixCount }}',
 '{{ EnablePrimaryIpv6 }}',
 '{{ GroupSet }}',
 '{{ Ipv6Addresses }}',
 '{{ Ipv6Prefixes }}',
 '{{ SubnetId }}',
 '{{ SourceDestCheck }}',
 '{{ InterfaceType }}',
 '{{ Ipv6AddressCount }}',
 '{{ Tags }}',
 '{{ ConnectionTrackingSpecification }}',
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
  - name: network_interface
    props:
      - name: Description
        value: '{{ Description }}'
      - name: PrivateIpAddress
        value: '{{ PrivateIpAddress }}'
      - name: PrivateIpAddresses
        value:
          - Primary: '{{ Primary }}'
            PrivateIpAddress: '{{ PrivateIpAddress }}'
      - name: SecondaryPrivateIpAddressCount
        value: '{{ SecondaryPrivateIpAddressCount }}'
      - name: Ipv6PrefixCount
        value: '{{ Ipv6PrefixCount }}'
      - name: Ipv4Prefixes
        value:
          - Ipv4Prefix: '{{ Ipv4Prefix }}'
      - name: Ipv4PrefixCount
        value: '{{ Ipv4PrefixCount }}'
      - name: EnablePrimaryIpv6
        value: '{{ EnablePrimaryIpv6 }}'
      - name: GroupSet
        value:
          - '{{ GroupSet[0] }}'
      - name: Ipv6Addresses
        value:
          - Ipv6Address: '{{ Ipv6Address }}'
      - name: Ipv6Prefixes
        value:
          - Ipv6Prefix: '{{ Ipv6Prefix }}'
      - name: SubnetId
        value: '{{ SubnetId }}'
      - name: SourceDestCheck
        value: '{{ SourceDestCheck }}'
      - name: InterfaceType
        value: '{{ InterfaceType }}'
      - name: Ipv6AddressCount
        value: '{{ Ipv6AddressCount }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: ConnectionTrackingSpecification
        value:
          UdpTimeout: '{{ UdpTimeout }}'
          TcpEstablishedTimeout: '{{ TcpEstablishedTimeout }}'
          UdpStreamTimeout: '{{ UdpStreamTimeout }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.ec2.network_interfaces
SET PatchDocument = string('{{ {
    "Description": description,
    "PrivateIpAddresses": private_ip_addresses,
    "SecondaryPrivateIpAddressCount": secondary_private_ip_address_count,
    "Ipv6PrefixCount": ipv6_prefix_count,
    "Ipv4Prefixes": ipv4_prefixes,
    "Ipv4PrefixCount": ipv4_prefix_count,
    "EnablePrimaryIpv6": enable_primary_ipv6,
    "GroupSet": group_set,
    "Ipv6Addresses": ipv6_addresses,
    "Ipv6Prefixes": ipv6_prefixes,
    "SourceDestCheck": source_dest_check,
    "Ipv6AddressCount": ipv6_address_count,
    "Tags": tags,
    "ConnectionTrackingSpecification": connection_tracking_specification
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.network_interfaces
WHERE Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>network_interfaces</code> resource, the following permissions are required:

### Read
```json
ec2:DescribeNetworkInterfaces
```

### Create
```json
ec2:CreateNetworkInterface,
ec2:DescribeNetworkInterfaces,
ec2:CreateTags,
ec2:ModifyNetworkInterfaceAttribute,
ec2:ModifyPublicIpDnsNameOptions
```

### Update
```json
ec2:DescribeNetworkInterfaces,
ec2:ModifyNetworkInterfaceAttribute,
ec2:UnassignIpv6Addresses,
ec2:AssignIpv6Addresses,
ec2:DeleteTags,
ec2:CreateTags,
ec2:UnassignPrivateIpAddresses,
ec2:AssignPrivateIpAddresses,
ec2:ModifyPublicIpDnsNameOptions
```

### List
```json
ec2:DescribeNetworkInterfaces
```

### Delete
```json
ec2:DescribeNetworkInterfaces,
ec2:DeleteNetworkInterface
```
