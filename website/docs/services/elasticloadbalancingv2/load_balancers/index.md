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
<SchemaTable fields={[
  {
    "name": "ip_address_type",
    "type": "string",
    "description": "The IP address type. Internal load balancers must use &#96;&#96;ipv4&#96;&#96;.<br />&#91;Application Load Balancers&#93; The possible values are &#96;&#96;ipv4&#96;&#96; (IPv4 addresses), &#96;&#96;dualstack&#96;&#96; (IPv4 and IPv6 addresses), and &#96;&#96;dualstack-without-public-ipv4&#96;&#96; (public IPv6 addresses and private IPv4 and IPv6 addresses).<br />Application Load Balancer authentication supports IPv4 addresses only when connecting to an Identity Provider (IdP) or Amazon Cognito endpoint. Without a public IPv4 address the load balancer can't complete the authentication process, resulting in HTTP 500 errors.<br />&#91;Network Load Balancers and Gateway Load Balancers&#93; The possible values are &#96;&#96;ipv4&#96;&#96; (IPv4 addresses) and &#96;&#96;dualstack&#96;&#96; (IPv4 and IPv6 addresses)."
  },
  {
    "name": "enable_prefix_for_ipv6_source_nat",
    "type": "string",
    "description": "&#91;Network Load Balancers with UDP listeners&#93; Indicates whether to use an IPv6 prefix from each subnet for source NAT. The IP address type must be &#96;&#96;dualstack&#96;&#96;. The default value is &#96;&#96;off&#96;&#96;."
  },
  {
    "name": "security_groups",
    "type": "array",
    "description": "&#91;Application Load Balancers and Network Load Balancers&#93; The IDs of the security groups for the load balancer."
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
        "description": "The name of the attribute.<br />The following attributes are supported by all load balancers:<br />+ &#96;&#96;deletion&#95;protection.enabled&#96;&#96; - Indicates whether deletion protection is enabled. The value is &#96;&#96;true&#96;&#96; or &#96;&#96;false&#96;&#96;. The default is &#96;&#96;false&#96;&#96;.<br />+ &#96;&#96;load&#95;balancing.cross&#95;zone.enabled&#96;&#96; - Indicates whether cross-zone load balancing is enabled. The possible values are &#96;&#96;true&#96;&#96; and &#96;&#96;false&#96;&#96;. The default for Network Load Balancers and Gateway Load Balancers is &#96;&#96;false&#96;&#96;. The default for Application Load Balancers is &#96;&#96;true&#96;&#96;, and can't be changed.<br /><br />The following attributes are supported by both Application Load Balancers and Network Load Balancers:<br />+ &#96;&#96;access&#95;logs.s3.enabled&#96;&#96; - Indicates whether access logs are enabled. The value is &#96;&#96;true&#96;&#96; or &#96;&#96;false&#96;&#96;. The default is &#96;&#96;false&#96;&#96;.<br />+ &#96;&#96;access&#95;logs.s3.bucket&#96;&#96; - The name of the S3 bucket for the access logs. This attribute is required if access logs are enabled. The bucket must exist in the same region as the load balancer and have a bucket policy that grants Elastic Load Balancing permissions to write to the bucket.<br />+ &#96;&#96;access&#95;logs.s3.prefix&#96;&#96; - The prefix for the location in the S3 bucket for the access logs.<br />+ &#96;&#96;ipv6.deny&#95;all&#95;igw&#95;traffic&#96;&#96; - Blocks internet gateway (IGW) access to the load balancer. It is set to &#96;&#96;false&#96;&#96; for internet-facing load balancers and &#96;&#96;true&#96;&#96; for internal load balancers, preventing unintended access to your internal load balancer through an internet gateway.<br />+ &#96;&#96;zonal&#95;shift.config.enabled&#96;&#96; - Indicates whether zonal shift is enabled. The possible values are &#96;&#96;true&#96;&#96; and &#96;&#96;false&#96;&#96;. The default is &#96;&#96;false&#96;&#96;.<br /><br />The following attributes are supported by only Application Load Balancers:<br />+ &#96;&#96;idle&#95;timeout.timeout&#95;seconds&#96;&#96; - The idle timeout value, in seconds. The valid range is 1-4000 seconds. The default is 60 seconds.<br />+ &#96;&#96;client&#95;keep&#95;alive.seconds&#96;&#96; - The client keep alive value, in seconds. The valid range is 60-604800 seconds. The default is 3600 seconds.<br />+ &#96;&#96;connection&#95;logs.s3.enabled&#96;&#96; - Indicates whether connection logs are enabled. The value is &#96;&#96;true&#96;&#96; or &#96;&#96;false&#96;&#96;. The default is &#96;&#96;false&#96;&#96;.<br />+ &#96;&#96;connection&#95;logs.s3.bucket&#96;&#96; - The name of the S3 bucket for the connection logs. This attribute is required if connection logs are enabled. The bucket must exist in the same region as the load balancer and have a bucket policy that grants Elastic Load Balancing permissions to write to the bucket.<br />+ &#96;&#96;connection&#95;logs.s3.prefix&#96;&#96; - The prefix for the location in the S3 bucket for the connection logs.<br />+ &#96;&#96;routing.http.desync&#95;mitigation&#95;mode&#96;&#96; - Determines how the load balancer handles requests that might pose a security risk to your application. The possible values are &#96;&#96;monitor&#96;&#96;, &#96;&#96;defensive&#96;&#96;, and &#96;&#96;strictest&#96;&#96;. The default is &#96;&#96;defensive&#96;&#96;.<br />+ &#96;&#96;routing.http.drop&#95;invalid&#95;header&#95;fields.enabled&#96;&#96; - Indicates whether HTTP headers with invalid header fields are removed by the load balancer (&#96;&#96;true&#96;&#96;) or routed to targets (&#96;&#96;false&#96;&#96;). The default is &#96;&#96;false&#96;&#96;.<br />+ &#96;&#96;routing.http.preserve&#95;host&#95;header.enabled&#96;&#96; - Indicates whether the Application Load Balancer should preserve the &#96;&#96;Host&#96;&#96; header in the HTTP request and send it to the target without any change. The possible values are &#96;&#96;true&#96;&#96; and &#96;&#96;false&#96;&#96;. The default is &#96;&#96;false&#96;&#96;.<br />+ &#96;&#96;routing.http.x&#95;amzn&#95;tls&#95;version&#95;and&#95;cipher&#95;suite.enabled&#96;&#96; - Indicates whether the two headers (&#96;&#96;x-amzn-tls-version&#96;&#96; and &#96;&#96;x-amzn-tls-cipher-suite&#96;&#96;), which contain information about the negotiated TLS version and cipher suite, are added to the client request before sending it to the target. The &#96;&#96;x-amzn-tls-version&#96;&#96; header has information about the TLS protocol version negotiated with the client, and the &#96;&#96;x-amzn-tls-cipher-suite&#96;&#96; header has information about the cipher suite negotiated with the client. Both headers are in OpenSSL format. The possible values for the attribute are &#96;&#96;true&#96;&#96; and &#96;&#96;false&#96;&#96;. The default is &#96;&#96;false&#96;&#96;.<br />+ &#96;&#96;routing.http.xff&#95;client&#95;port.enabled&#96;&#96; - Indicates whether the &#96;&#96;X-Forwarded-For&#96;&#96; header should preserve the source port that the client used to connect to the load balancer. The possible values are &#96;&#96;true&#96;&#96; and &#96;&#96;false&#96;&#96;. The default is &#96;&#96;false&#96;&#96;.<br />+ &#96;&#96;routing.http.xff&#95;header&#95;processing.mode&#96;&#96; - Enables you to modify, preserve, or remove the &#96;&#96;X-Forwarded-For&#96;&#96; header in the HTTP request before the Application Load Balancer sends the request to the target. The possible values are &#96;&#96;append&#96;&#96;, &#96;&#96;preserve&#96;&#96;, and &#96;&#96;remove&#96;&#96;. The default is &#96;&#96;append&#96;&#96;.<br />+ If the value is &#96;&#96;append&#96;&#96;, the Application Load Balancer adds the client IP address (of the last hop) to the &#96;&#96;X-Forwarded-For&#96;&#96; header in the HTTP request before it sends it to targets.<br />+ If the value is &#96;&#96;preserve&#96;&#96; the Application Load Balancer preserves the &#96;&#96;X-Forwarded-For&#96;&#96; header in the HTTP request, and sends it to targets without any change.<br />+ If the value is &#96;&#96;remove&#96;&#96;, the Application Load Balancer removes the &#96;&#96;X-Forwarded-For&#96;&#96; header in the HTTP request before it sends it to targets.<br /><br />+ &#96;&#96;routing.http2.enabled&#96;&#96; - Indicates whether HTTP/2 is enabled. The possible values are &#96;&#96;true&#96;&#96; and &#96;&#96;false&#96;&#96;. The default is &#96;&#96;true&#96;&#96;. Elastic Load Balancing requires that message header names contain only alphanumeric characters and hyphens.<br />+ &#96;&#96;waf.fail&#95;open.enabled&#96;&#96; - Indicates whether to allow a WAF-enabled load balancer to route requests to targets if it is unable to forward the request to AWS WAF. The possible values are &#96;&#96;true&#96;&#96; and &#96;&#96;false&#96;&#96;. The default is &#96;&#96;false&#96;&#96;.<br /><br />The following attributes are supported by only Network Load Balancers:<br />+ &#96;&#96;dns&#95;record.client&#95;routing&#95;policy&#96;&#96; - Indicates how traffic is distributed among the load balancer Availability Zones. The possible values are &#96;&#96;availability&#95;zone&#95;affinity&#96;&#96; with 100 percent zonal affinity, &#96;&#96;partial&#95;availability&#95;zone&#95;affinity&#96;&#96; with 85 percent zonal affinity, and &#96;&#96;any&#95;availability&#95;zone&#96;&#96; with 0 percent zonal affinity."
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
    "description": "The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the internet.<br />The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can route requests only from clients with access to the VPC for the load balancer.<br />The default is an Internet-facing load balancer.<br />You can't specify a scheme for a Gateway Load Balancer."
  },
  {
    "name": "dns_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the load balancer. This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, must not begin or end with a hyphen, and must not begin with \"internal-\".<br />If you don't specify a name, AWS CloudFormation generates a unique physical ID for the load balancer. If you specify a name, you cannot perform updates that require replacement of this resource, but you can perform other updates. To replace the resource, specify a new name."
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
    "description": "The IDs of the subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both. To specify an Elastic IP address, specify subnet mappings instead of subnets.<br />&#91;Application Load Balancers&#93; You must specify subnets from at least two Availability Zones.<br />&#91;Application Load Balancers on Outposts&#93; You must specify one Outpost subnet.<br />&#91;Application Load Balancers on Local Zones&#93; You can specify subnets from one or more Local Zones.<br />&#91;Network Load Balancers and Gateway Load Balancers&#93; You can specify subnets from one or more Availability Zones."
  },
  {
    "name": "type",
    "type": "string",
    "description": "The type of load balancer. The default is &#96;&#96;application&#96;&#96;."
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
    "description": "The IDs of the subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both.<br />&#91;Application Load Balancers&#93; You must specify subnets from at least two Availability Zones. You can't specify Elastic IP addresses for your subnets.<br />&#91;Application Load Balancers on Outposts&#93; You must specify one Outpost subnet.<br />&#91;Application Load Balancers on Local Zones&#93; You can specify subnets from one or more Local Zones.<br />&#91;Network Load Balancers&#93; You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet if you need static IP addresses for your internet-facing load balancer. For internal load balancers, you can specify one private IP address per subnet from the IPv4 range of the subnet. For internet-facing load balancer, you can specify one IPv6 address per subnet.<br />&#91;Gateway Load Balancers&#93; You can specify subnets from one or more Availability Zones. You can't specify Elastic IP addresses for your subnets.",
    "children": [
      {
        "name": "subnet_id",
        "type": "string",
        "description": "The ID of the subnet."
      },
      {
        "name": "allocation_id",
        "type": "string",
        "description": "&#91;Network Load Balancers&#93; The allocation ID of the Elastic IP address for an internet-facing load balancer."
      },
      {
        "name": "private_ipv4_address",
        "type": "string",
        "description": "&#91;Network Load Balancers&#93; The private IPv4 address for an internal load balancer."
      },
      {
        "name": "ipv6_address",
        "type": "string",
        "description": "&#91;Network Load Balancers&#93; The IPv6 address."
      },
      {
        "name": "source_nat_ipv6_prefix",
        "type": "string",
        "description": "&#91;Network Load Balancers with UDP listeners&#93; The IPv6 prefix to use for source NAT. Specify an IPv6 prefix (/80 netmask) from the subnet CIDR block or &#96;&#96;auto&#95;assigned&#96;&#96; to use an IPv6 prefix selected at random from the subnet CIDR block."
      }
    ]
  },
  {
    "name": "enforce_security_group_inbound_rules_on_private_link_traffic",
    "type": "string",
    "description": "Indicates whether to evaluate inbound security group rules for traffic sent to a Network Load Balancer through privatelink. The default is &#96;&#96;on&#96;&#96;.<br />You can't configure this property on a Network Load Balancer unless you associated a security group with the load balancer when you created it."
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html"><code>AWS::ElasticLoadBalancingV2::LoadBalancer</code></a>.

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
    <td><CopyableCode code="region" /></td>
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
WHERE region = 'us-east-1' AND data__Identifier = '<LoadBalancerArn>';
```

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
'{{ IpAddressType }}',
 '{{ EnablePrefixForIpv6SourceNat }}',
 '{{ SecurityGroups }}',
 '{{ LoadBalancerAttributes }}',
 '{{ MinimumLoadBalancerCapacity }}',
 '{{ Scheme }}',
 '{{ Name }}',
 '{{ Subnets }}',
 '{{ Type }}',
 '{{ Tags }}',
 '{{ SubnetMappings }}',
 '{{ EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic }}',
 '{{ Ipv4IpamPoolId }}',
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
 '{{ IpAddressType }}',
 '{{ EnablePrefixForIpv6SourceNat }}',
 '{{ SecurityGroups }}',
 '{{ LoadBalancerAttributes }}',
 '{{ MinimumLoadBalancerCapacity }}',
 '{{ Scheme }}',
 '{{ Name }}',
 '{{ Subnets }}',
 '{{ Type }}',
 '{{ Tags }}',
 '{{ SubnetMappings }}',
 '{{ EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic }}',
 '{{ Ipv4IpamPoolId }}',
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
      - name: IpAddressType
        value: '{{ IpAddressType }}'
      - name: EnablePrefixForIpv6SourceNat
        value: '{{ EnablePrefixForIpv6SourceNat }}'
      - name: SecurityGroups
        value:
          - '{{ SecurityGroups[0] }}'
      - name: LoadBalancerAttributes
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'
      - name: MinimumLoadBalancerCapacity
        value:
          CapacityUnits: '{{ CapacityUnits }}'
      - name: Scheme
        value: '{{ Scheme }}'
      - name: Name
        value: '{{ Name }}'
      - name: Subnets
        value:
          - '{{ Subnets[0] }}'
      - name: Type
        value: '{{ Type }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'
      - name: SubnetMappings
        value:
          - SubnetId: '{{ SubnetId }}'
            AllocationId: '{{ AllocationId }}'
            PrivateIPv4Address: '{{ PrivateIPv4Address }}'
            IPv6Address: '{{ IPv6Address }}'
            SourceNatIpv6Prefix: '{{ SourceNatIpv6Prefix }}'
      - name: EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic
        value: '{{ EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic }}'
      - name: Ipv4IpamPoolId
        value: '{{ Ipv4IpamPoolId }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.elasticloadbalancingv2.load_balancers
WHERE data__Identifier = '<LoadBalancerArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>load_balancers</code> resource, the following permissions are required:

### Create
```json
elasticloadbalancing:CreateLoadBalancer,
elasticloadbalancing:DescribeLoadBalancers,
elasticloadbalancing:ModifyLoadBalancerAttributes,
elasticloadbalancing:AddTags,
ec2:DescribeIpamPools
```

### Delete
```json
elasticloadbalancing:DescribeLoadBalancers,
elasticloadbalancing:DeleteLoadBalancer
```

### List
```json
elasticloadbalancing:DescribeLoadBalancers
```

### Read
```json
elasticloadbalancing:DescribeLoadBalancers,
elasticloadbalancing:DescribeLoadBalancerAttributes,
elasticloadbalancing:DescribeCapacityReservation,
elasticloadbalancing:DescribeTags
```

### Update
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
