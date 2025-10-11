---
title: resolver_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - resolver_endpoints
  - route53resolver
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

Creates, updates, deletes or gets a <code>resolver_endpoint</code> resource or lists <code>resolver_endpoints</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>resolver_endpoints</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource type definition for AWS::Route53Resolver::ResolverEndpoint</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.route53resolver.resolver_endpoints" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the resolver endpoint, such as arn:aws:route53resolver:us-east-1:123456789012:resolver-endpoint/resolver-endpoint-a1bzhi.</td></tr>
<tr><td><CopyableCode code="direction" /></td><td><code>string</code></td><td>Indicates whether the Resolver endpoint allows inbound or outbound DNS queries:<br />- INBOUND: allows DNS queries to your VPC from your network <br />- OUTBOUND: allows DNS queries from your VPC to your network <br />- INBOUND_DELEGATION: allows DNS queries to your VPC from your network with authoritative answers from private hosted zones</td></tr>
<tr><td><CopyableCode code="host_vpc_id" /></td><td><code>string</code></td><td>The ID of the VPC that you want to create the resolver endpoint in.</td></tr>
<tr><td><CopyableCode code="ip_address_count" /></td><td><code>string</code></td><td>The number of IP addresses that the resolver endpoint can use for DNS queries.</td></tr>
<tr><td><CopyableCode code="ip_addresses" /></td><td><code>array</code></td><td>The subnets and IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints). The subnet ID uniquely identifies a VPC.</td></tr>
<tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console.</td></tr>
<tr><td><CopyableCode code="outpost_arn" /></td><td><code>string</code></td><td>The ARN (Amazon Resource Name) for the Outpost.</td></tr>
<tr><td><CopyableCode code="preferred_instance_type" /></td><td><code>string</code></td><td>The Amazon EC2 instance type.</td></tr>
<tr><td><CopyableCode code="protocols" /></td><td><code>array</code></td><td>Protocols used for the endpoint. DoH-FIPS is applicable for inbound endpoints only.</td></tr>
<tr><td><CopyableCode code="resolver_endpoint_id" /></td><td><code>string</code></td><td>The ID of the resolver endpoint.</td></tr>
<tr><td><CopyableCode code="resolver_endpoint_type" /></td><td><code>string</code></td><td>The Resolver endpoint IP address type.</td></tr>
<tr><td><CopyableCode code="security_group_ids" /></td><td><code>array</code></td><td>The ID of one or more security groups that control access to this VPC. The security group must include one or more inbound rules (for inbound endpoints) or outbound rules (for outbound endpoints). Inbound and outbound rules must allow TCP and UDP access. For inbound access, open port 53. For outbound access, open the port that you're using for DNS queries on your network.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html"><code>AWS::Route53Resolver::ResolverEndpoint</code></a>.

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
    <td><CopyableCode code="Direction, IpAddresses, SecurityGroupIds, region" /></td>
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
Gets all <code>resolver_endpoints</code> in a region.
```sql
SELECT
region,
arn,
direction,
host_vpc_id,
ip_address_count,
ip_addresses,
name,
outpost_arn,
preferred_instance_type,
protocols,
resolver_endpoint_id,
resolver_endpoint_type,
security_group_ids,
tags
FROM awscc.route53resolver.resolver_endpoints
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>resolver_endpoint</code>.
```sql
SELECT
region,
arn,
direction,
host_vpc_id,
ip_address_count,
ip_addresses,
name,
outpost_arn,
preferred_instance_type,
protocols,
resolver_endpoint_id,
resolver_endpoint_type,
security_group_ids,
tags
FROM awscc.route53resolver.resolver_endpoints
WHERE region = 'us-east-1' AND data__Identifier = '<ResolverEndpointId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>resolver_endpoint</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.route53resolver.resolver_endpoints (
 Direction,
 IpAddresses,
 SecurityGroupIds,
 region
)
SELECT 
'{{ Direction }}',
 '{{ IpAddresses }}',
 '{{ SecurityGroupIds }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.route53resolver.resolver_endpoints (
 Direction,
 IpAddresses,
 Name,
 OutpostArn,
 PreferredInstanceType,
 Protocols,
 ResolverEndpointType,
 SecurityGroupIds,
 Tags,
 region
)
SELECT 
 '{{ Direction }}',
 '{{ IpAddresses }}',
 '{{ Name }}',
 '{{ OutpostArn }}',
 '{{ PreferredInstanceType }}',
 '{{ Protocols }}',
 '{{ ResolverEndpointType }}',
 '{{ SecurityGroupIds }}',
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
  - name: resolver_endpoint
    props:
      - name: Direction
        value: '{{ Direction }}'
      - name: IpAddresses
        value:
          - Ip: '{{ Ip }}'
            Ipv6: '{{ Ipv6 }}'
            SubnetId: '{{ SubnetId }}'
      - name: Name
        value: '{{ Name }}'
      - name: OutpostArn
        value: '{{ OutpostArn }}'
      - name: PreferredInstanceType
        value: '{{ PreferredInstanceType }}'
      - name: Protocols
        value:
          - '{{ Protocols[0] }}'
      - name: ResolverEndpointType
        value: '{{ ResolverEndpointType }}'
      - name: SecurityGroupIds
        value:
          - '{{ SecurityGroupIds[0] }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.route53resolver.resolver_endpoints
WHERE data__Identifier = '<ResolverEndpointId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>resolver_endpoints</code> resource, the following permissions are required:

### Create
```json
route53resolver:CreateResolverEndpoint,
route53resolver:GetResolverEndpoint,
route53resolver:ListResolverEndpointIpAddresses,
route53resolver:ListTagsForResource,
route53resolver:TagResource,
route53resolver:UntagResource,
ec2:CreateNetworkInterface,
ec2:DescribeNetworkInterfaces,
ec2:DescribeSubnets,
ec2:DescribeSecurityGroups,
ec2:DescribeVpcs
```

### Read
```json
route53resolver:GetResolverEndpoint,
route53resolver:ListResolverEndpointIpAddresses,
route53resolver:ListTagsForResource
```

### Update
```json
route53resolver:AssociateResolverEndpointIpAddress,
route53resolver:DisassociateResolverEndpointIpAddress,
route53resolver:GetResolverEndpoint,
route53resolver:ListResolverEndpointIpAddresses,
route53resolver:ListTagsForResource,
route53resolver:TagResource,
route53resolver:UntagResource,
route53resolver:UpdateResolverEndpoint,
ec2:AssignIpv6Addresses,
ec2:CreateNetworkInterface,
ec2:DeleteNetworkInterface,
ec2:DescribeNetworkInterfaces,
ec2:DescribeSecurityGroups,
ec2:DescribeSubnets,
ec2:DescribeVpcs,
ec2:ModifyNetworkInterfaceAttribute,
ec2:UnassignIpv6Addresses
```

### Delete
```json
route53resolver:DeleteResolverEndpoint,
route53resolver:GetResolverEndpoint,
ec2:DeleteNetworkInterface,
ec2:DescribeNetworkInterfaces
```

### List
```json
route53resolver:ListResolverEndpoints
```
