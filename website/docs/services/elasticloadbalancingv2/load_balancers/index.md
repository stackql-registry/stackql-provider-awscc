---
title: load_balancers
hide_title: false
hide_table_of_contents: false
keywords:
  - load_balancers
  - elasticloadbalancingv2
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

Creates, updates, deletes or gets a <code>load_balancer</code> resource or lists <code>load_balancers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>load_balancers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Specifies an Application Load Balancer, a Network Load Balancer, or a Gateway Load Balancer.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.elasticloadbalancingv2.load_balancers" /></td></tr>
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
    "name": "ip_address_type",
    "type": "string",
    "description": "<details><summary>The IP address type. Internal load balancers must use <code>ipv4</code>.</summary>[Application Load Balancers] The possible values are <code>ipv4</code> (IPv4 addresses), <code>dualstack</code> (IPv4 and IPv6 addresses), and <code>dualstack-without-public-ipv4</code> (public IPv6 addresses and private IPv4 and IPv6 addresses).<br />Application Load Balancer authentication supports IPv4 addresses only when connecting to an Identity Provider (IdP) or Amazon Cognito endpoint. Without a public IPv4 address the load balancer can't complete the authentication process, resulting in HTTP 500 errors.<br />[Network Load Balancers and Gateway Load Balancers] The possible values are <code>ipv4</code> (IPv4 addresses) and <code>dualstack</code> (IPv4 and IPv6 addresses).</details>"
  },
  {
    "name": "enable_prefix_for_ipv6_source_nat",
    "type": "string",
    "description": "[Network Load Balancers with UDP listeners] Indicates whether to use an IPv6 prefix from each subnet for source NAT. The IP address type must be <code>dualstack</code>. The default value is <code>off</code>."
  },
  {
    "name": "security_groups",
    "type": "array",
    "description": "[Application Load Balancers and Network Load Balancers] The IDs of the security groups for the load balancer."
  },
  {
    "name": "load_balancer_attributes",
    "type": "array",
    "description": "The load balancer attributes. Attributes that you do not modify retain their current values.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The value of the attribute."
      },
      {
        "name": "key",
        "type": "string",
        "description": "<details><summary>The name of the attribute.</summary>The following attributes are supported by all load balancers:<br />+  <code>deletion_protection.enabled</code> - Indicates whether deletion protection is enabled. The value is <code>true</code> or <code>false</code>. The default is <code>false</code>.<br />+  <code>load_balancing.cross_zone.enabled</code> - Indicates whether cross-zone load balancing is enabled. The possible values are <code>true</code> and <code>false</code>. The default for Network Load Balancers and Gateway Load Balancers is <code>false</code>. The default for Application Load Balancers is <code>true</code>, and can't be changed.<br />The following attributes are supported by both Application Load Balancers and Network Load Balancers:<br />+  <code>access_logs.s3.enabled</code> - Indicates whether access logs are enabled. The value is <code>true</code> or <code>false</code>. The default is <code>false</code>.<br />+  <code>access_logs.s3.bucket</code> - The name of the S3 bucket for the access logs. This attribute is required if access logs are enabled. The bucket must exist in the same region as the load balancer and have a bucket policy that grants Elastic Load Balancing permissions to write to the bucket.<br />+  <code>access_logs.s3.prefix</code> - The prefix for the location in the S3 bucket for the access logs.<br />+  <code>ipv6.deny_all_igw_traffic</code> - Blocks internet gateway (IGW) access to the load balancer. It is set to <code>false</code> for internet-facing load balancers and <code>true</code> for internal load balancers, preventing unintended access to your internal load balancer through an internet gateway.<br />+  <code>zonal_shift.config.enabled</code> - Indicates whether zonal shift is enabled. The possible values are <code>true</code> and <code>false</code>. The default is <code>false</code>.<br />The following attributes are supported by only Application Load Balancers:<br />+  <code>idle_timeout.timeout_seconds</code> - The idle timeout value, in seconds. The valid range is 1-4000 seconds. The default is 60 seconds.<br />+  <code>client_keep_alive.seconds</code> - The client keep alive value, in seconds. The valid range is 60-604800 seconds. The default is 3600 seconds.<br />+  <code>connection_logs.s3.enabled</code> - Indicates whether connection logs are enabled. The value is <code>true</code> or <code>false</code>. The default is <code>false</code>.<br />+  <code>connection_logs.s3.bucket</code> - The name of the S3 bucket for the connection logs. This attribute is required if connection logs are enabled. The bucket must exist in the same region as the load balancer and have a bucket policy that grants Elastic Load Balancing permissions to write to the bucket.<br />+  <code>connection_logs.s3.prefix</code> - The prefix for the location in the S3 bucket for the connection logs.<br />+  <code>routing.http.desync_mitigation_mode</code> - Determines how the load balancer handles requests that might pose a security risk to your application. The possible values are <code>monitor</code>, <code>defensive</code>, and <code>strictest</code>. The default is <code>defensive</code>.<br />+  <code>routing.http.drop_invalid_header_fields.enabled</code> - Indicates whether HTTP headers with invalid header fields are removed by the load balancer (<code>true</code>) or routed to targets (<code>false</code>). The default is <code>false</code>.<br />+  <code>routing.http.preserve_host_header.enabled</code> - Indicates whether the Application Load Balancer should preserve the <code>Host</code> header in the HTTP request and send it to the target without any change. The possible values are <code>true</code> and <code>false</code>. The default is <code>false</code>.<br />+  <code>routing.http.x_amzn_tls_version_and_cipher_suite.enabled</code> - Indicates whether the two headers (<code>x-amzn-tls-version</code> and <code>x-amzn-tls-cipher-suite</code>), which contain information about the negotiated TLS version and cipher suite, are added to the client request before sending it to the target. The <code>x-amzn-tls-version</code> header has information about the TLS protocol version negotiated with the client, and the <code>x-amzn-tls-cipher-suite</code> header has information about the cipher suite negotiated with the client. Both headers are in OpenSSL format. The possible values for the attribute are <code>true</code> and <code>false</code>. The default is <code>false</code>.<br />+  <code>routing.http.xff_client_port.enabled</code> - Indicates whether the <code>X-Forwarded-For</code> header should preserve the source port that the client used to connect to the load balancer. The possible values are <code>true</code> and <code>false</code>. The default is <code>false</code>.<br />+  <code>routing.http.xff_header_processing.mode</code> - Enables you to modify, preserve, or remove the <code>X-Forwarded-For</code> header in the HTTP request before the Application Load Balancer sends the request to the target. The possible values are <code>append</code>, <code>preserve</code>, and <code>remove</code>. The default is <code>append</code>.<br />+  If the value is <code>append</code>, the Application Load Balancer adds the client IP address (of the last hop) to the <code>X-Forwarded-For</code> header in the HTTP request before it sends it to targets.<br />+  If the value is <code>preserve</code> the Application Load Balancer preserves the <code>X-Forwarded-For</code> header in the HTTP request, and sends it to targets without any change.<br />+  If the value is <code>remove</code>, the Application Load Balancer removes the <code>X-Forwarded-For</code> header in the HTTP request before it sends it to targets.<br />+  <code>routing.http2.enabled</code> - Indicates whether HTTP/2 is enabled. The possible values are <code>true</code> and <code>false</code>. The default is <code>true</code>. Elastic Load Balancing requires that message header names contain only alphanumeric characters and hyphens.<br />+  <code>waf.fail_open.enabled</code> - Indicates whether to allow a WAF-enabled load balancer to route requests to targets if it is unable to forward the request to AWS WAF. The possible values are <code>true</code> and <code>false</code>. The default is <code>false</code>.<br />The following attributes are supported by only Network Load Balancers:<br />+  <code>dns_record.client_routing_policy</code> - Indicates how traffic is distributed among the load balancer Availability Zones. The possible values are <code>availability_zone_affinity</code> with 100 percent zonal affinity, <code>partial_availability_zone_affinity</code> with 85 percent zonal affinity, and <code>any_availability_zone</code> with 0 percent zonal affinity.</details>"
      }
    ]
  },
  {
    "name": "minimum_load_balancer_capacity",
    "type": "object",
    "description": "The minimum capacity for a load balancer.",
    "children": [
      {
        "name": "capacity_units",
        "type": "integer",
        "description": "The number of capacity units."
      }
    ]
  },
  {
    "name": "scheme",
    "type": "string",
    "description": "<details><summary>The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the internet.</summary>The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can route requests only from clients with access to the VPC for the load balancer.<br />The default is an Internet-facing load balancer.<br />You can't specify a scheme for a Gateway Load Balancer.</details>"
  },
  {
    "name": "dns_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": "<details><summary>The name of the load balancer. This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, must not begin or end with a hyphen, and must not begin with \"internal-\".</summary>If you don't specify a name, AWS CloudFormation generates a unique physical ID for the load balancer. If you specify a name, you cannot perform updates that require replacement of this resource, but you can perform other updates. To replace the resource, specify a new name.</details>"
  },
  {
    "name": "load_balancer_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "load_balancer_full_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "subnets",
    "type": "array",
    "description": "<details><summary>The IDs of the subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both. To specify an Elastic IP address, specify subnet mappings instead of subnets.</summary>[Application Load Balancers] You must specify subnets from at least two Availability Zones.<br />[Application Load Balancers on Outposts] You must specify one Outpost subnet.<br />[Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.<br />[Network Load Balancers and Gateway Load Balancers] You can specify subnets from one or more Availability Zones.</details>"
  },
  {
    "name": "type",
    "type": "string",
    "description": "The type of load balancer. The default is <code>application</code>."
  },
  {
    "name": "canonical_hosted_zone_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags to assign to the load balancer.",
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
    "name": "load_balancer_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "subnet_mappings",
    "type": "array",
    "description": "<details><summary>The IDs of the subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both.</summary>[Application Load Balancers] You must specify subnets from at least two Availability Zones. You can't specify Elastic IP addresses for your subnets.<br />[Application Load Balancers on Outposts] You must specify one Outpost subnet.<br />[Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.<br />[Network Load Balancers] You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet if you need static IP addresses for your internet-facing load balancer. For internal load balancers, you can specify one private IP address per subnet from the IPv4 range of the subnet. For internet-facing load balancer, you can specify one IPv6 address per subnet.<br />[Gateway Load Balancers] You can specify subnets from one or more Availability Zones. You can't specify Elastic IP addresses for your subnets.</details>",
    "children": [
      {
        "name": "subnet_id",
        "type": "string",
        "description": "The ID of the subnet."
      },
      {
        "name": "allocation_id",
        "type": "string",
        "description": "[Network Load Balancers] The allocation ID of the Elastic IP address for an internet-facing load balancer."
      },
      {
        "name": "private_ipv4_address",
        "type": "string",
        "description": "[Network Load Balancers] The private IPv4 address for an internal load balancer."
      },
      {
        "name": "ipv6_address",
        "type": "string",
        "description": "[Network Load Balancers] The IPv6 address."
      },
      {
        "name": "source_nat_ipv6_prefix",
        "type": "string",
        "description": "[Network Load Balancers with UDP listeners] The IPv6 prefix to use for source NAT. Specify an IPv6 prefix (/80 netmask) from the subnet CIDR block or <code>auto_assigned</code> to use an IPv6 prefix selected at random from the subnet CIDR block."
      }
    ]
  },
  {
    "name": "enforce_security_group_inbound_rules_on_private_link_traffic",
    "type": "string",
    "description": "<details><summary>Indicates whether to evaluate inbound security group rules for traffic sent to a Network Load Balancer through privatelink. The default is <code>on</code>.</summary>You can't configure this property on a Network Load Balancer unless you associated a security group with the load balancer when you created it.</details>"
  },
  {
    "name": "ipv4_ipam_pool_id",
    "type": "string",
    "description": "The ID of the IPv4 IPAM pool."
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
    "name": "load_balancer_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html"><code>AWS::ElasticLoadBalancingV2::LoadBalancer</code></a>.

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
    <td><code>load_balancers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>load_balancers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>load_balancers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>load_balancers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>load_balancers</code></td>
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

Gets all properties from an individual <code>load_balancer</code>.
```sql
SELECT
  region,
  ip_address_type,
  enable_prefix_for_ipv6_source_nat,
  security_groups,
  load_balancer_attributes,
  minimum_load_balancer_capacity,
  scheme,
  dns_name,
  name,
  load_balancer_name,
  load_balancer_full_name,
  subnets,
  type,
  canonical_hosted_zone_id,
  tags,
  load_balancer_arn,
  subnet_mappings,
  enforce_security_group_inbound_rules_on_private_link_traffic,
  ipv4_ipam_pool_id
FROM awscc.elasticloadbalancingv2.load_balancers
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ load_balancer_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>load_balancers</code> in a region.
```sql
SELECT
  region,
  load_balancer_arn
FROM awscc.elasticloadbalancingv2.load_balancers_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>load_balancer</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.elasticloadbalancingv2.load_balancers (
  IpAddressType,
  EnablePrefixForIpv6SourceNat,
  SecurityGroups,
  LoadBalancerAttributes,
  MinimumLoadBalancerCapacity,
  Scheme,
  Name,
  Subnets,
  Type,
  Tags,
  SubnetMappings,
  EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic,
  Ipv4IpamPoolId,
  region
)
SELECT
  '{{ ip_address_type }}',
  '{{ enable_prefix_for_ipv6_source_nat }}',
  '{{ security_groups }}',
  '{{ load_balancer_attributes }}',
  '{{ minimum_load_balancer_capacity }}',
  '{{ scheme }}',
  '{{ name }}',
  '{{ subnets }}',
  '{{ type }}',
  '{{ tags }}',
  '{{ subnet_mappings }}',
  '{{ enforce_security_group_inbound_rules_on_private_link_traffic }}',
  '{{ ipv4_ipam_pool_id }}',
  '{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.elasticloadbalancingv2.load_balancers (
  IpAddressType,
  EnablePrefixForIpv6SourceNat,
  SecurityGroups,
  LoadBalancerAttributes,
  MinimumLoadBalancerCapacity,
  Scheme,
  Name,
  Subnets,
  Type,
  Tags,
  SubnetMappings,
  EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic,
  Ipv4IpamPoolId,
  region
)
SELECT
  '{{ ip_address_type }}',
  '{{ enable_prefix_for_ipv6_source_nat }}',
  '{{ security_groups }}',
  '{{ load_balancer_attributes }}',
  '{{ minimum_load_balancer_capacity }}',
  '{{ scheme }}',
  '{{ name }}',
  '{{ subnets }}',
  '{{ type }}',
  '{{ tags }}',
  '{{ subnet_mappings }}',
  '{{ enforce_security_group_inbound_rules_on_private_link_traffic }}',
  '{{ ipv4_ipam_pool_id }}',
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
  - name: load_balancer
    props:
      - name: ip_address_type
        value: '{{ ip_address_type }}'
      - name: enable_prefix_for_ipv6_source_nat
        value: '{{ enable_prefix_for_ipv6_source_nat }}'
      - name: security_groups
        value:
          - '{{ security_groups[0] }}'
      - name: load_balancer_attributes
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
      - name: minimum_load_balancer_capacity
        value:
          capacity_units: '{{ capacity_units }}'
      - name: scheme
        value: '{{ scheme }}'
      - name: name
        value: '{{ name }}'
      - name: subnets
        value:
          - '{{ subnets[0] }}'
      - name: type
        value: '{{ type }}'
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
      - name: subnet_mappings
        value:
          - subnet_id: '{{ subnet_id }}'
            allocation_id: '{{ allocation_id }}'
            private_ipv4_address: '{{ private_ipv4_address }}'
            ipv6_address: '{{ ipv6_address }}'
            source_nat_ipv6_prefix: '{{ source_nat_ipv6_prefix }}'
      - name: enforce_security_group_inbound_rules_on_private_link_traffic
        value: '{{ enforce_security_group_inbound_rules_on_private_link_traffic }}'
      - name: ipv4_ipam_pool_id
        value: '{{ ipv4_ipam_pool_id }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>load_balancer</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.elasticloadbalancingv2.load_balancers
SET PatchDocument = string('{{ {
    "IpAddressType": ip_address_type,
    "EnablePrefixForIpv6SourceNat": enable_prefix_for_ipv6_source_nat,
    "SecurityGroups": security_groups,
    "LoadBalancerAttributes": load_balancer_attributes,
    "MinimumLoadBalancerCapacity": minimum_load_balancer_capacity,
    "Subnets": subnets,
    "Tags": tags,
    "SubnetMappings": subnet_mappings,
    "EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic": enforce_security_group_inbound_rules_on_private_link_traffic,
    "Ipv4IpamPoolId": ipv4_ipam_pool_id
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ load_balancer_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.elasticloadbalancingv2.load_balancers
WHERE
  Identifier = '{{ load_balancer_arn }}' AND
  region = '{{ region }}';
```

## Permissions

To operate on the <code>load_balancers</code> resource, the following permissions are required:

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
elasticloadbalancing:CreateLoadBalancer,
elasticloadbalancing:DescribeLoadBalancers,
elasticloadbalancing:ModifyLoadBalancerAttributes,
elasticloadbalancing:AddTags,
ec2:DescribeIpamPools
```

</TabItem>
<TabItem value="delete">

```json
elasticloadbalancing:DescribeLoadBalancers,
elasticloadbalancing:DeleteLoadBalancer
```

</TabItem>
<TabItem value="list">

```json
elasticloadbalancing:DescribeLoadBalancers
```

</TabItem>
<TabItem value="read">

```json
elasticloadbalancing:DescribeLoadBalancers,
elasticloadbalancing:DescribeLoadBalancerAttributes,
elasticloadbalancing:DescribeCapacityReservation,
elasticloadbalancing:DescribeTags
```

</TabItem>
<TabItem value="update">

```json
elasticloadbalancing:ModifyLoadBalancerAttributes,
elasticloadbalancing:ModifyCapacityReservation,
elasticloadbalancing:SetSubnets,
elasticloadbalancing:SetIpAddressType,
elasticloadbalancing:ModifyIpPools,
elasticloadbalancing:SetSecurityGroups,
elasticloadbalancing:AddTags,
elasticloadbalancing:RemoveTags
```

</TabItem>
</Tabs>