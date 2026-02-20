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
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

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
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the resolver endpoint, such as arn:aws:route53resolver:us-east-1:123456789012:resolver-endpoint/resolver-endpoint-a1bzhi."
  },
  {
    "name": "direction",
    "type": "string",
    "description": "Indicates whether the Resolver endpoint allows inbound or outbound DNS queries:<br />- INBOUND: allows DNS queries to your VPC from your network <br />- OUTBOUND: allows DNS queries from your VPC to your network <br />- INBOUND&#95;DELEGATION: allows DNS queries to your VPC from your network with authoritative answers from private hosted zones"
  },
  {
    "name": "host_vpc_id",
    "type": "string",
    "description": "The ID of the VPC that you want to create the resolver endpoint in."
  },
  {
    "name": "ip_address_count",
    "type": "string",
    "description": "The number of IP addresses that the resolver endpoint can use for DNS queries."
  },
  {
    "name": "ip_addresses",
    "type": "array",
    "description": "The subnets and IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints). The subnet ID uniquely identifies a VPC.",
    "children": [
      {
        "name": "ip",
        "type": "string",
        "description": "The IPv4 address that you want to use for DNS queries."
      },
      {
        "name": "ipv6",
        "type": "string",
        "description": "The IPv6 address that you want to use for DNS queries."
      },
      {
        "name": "subnet_id",
        "type": "string",
        "description": "The ID of the subnet that contains the IP address."
      }
    ]
  },
  {
    "name": "name",
    "type": "string",
    "description": "A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console."
  },
  {
    "name": "outpost_arn",
    "type": "string",
    "description": "The ARN (Amazon Resource Name) for the Outpost."
  },
  {
    "name": "preferred_instance_type",
    "type": "string",
    "description": "The Amazon EC2 instance type."
  },
  {
    "name": "protocols",
    "type": "array",
    "description": "Protocols used for the endpoint. DoH-FIPS is applicable for inbound endpoints only."
  },
  {
    "name": "resolver_endpoint_id",
    "type": "string",
    "description": "The ID of the resolver endpoint."
  },
  {
    "name": "resolver_endpoint_type",
    "type": "string",
    "description": "The Resolver endpoint IP address type."
  },
  {
    "name": "security_group_ids",
    "type": "array",
    "description": "The ID of one or more security groups that control access to this VPC. The security group must include one or more inbound rules (for inbound endpoints) or outbound rules (for outbound endpoints). Inbound and outbound rules must allow TCP and UDP access. For inbound access, open port 53. For outbound access, open the port that you're using for DNS queries on your network."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
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
    "name": "resolver_endpoint_id",
    "type": "string",
    "description": "The ID of the resolver endpoint."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html"><code>AWS::Route53Resolver::ResolverEndpoint</code></a>.

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
    <td><code>resolver_endpoints</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Direction, IpAddresses, SecurityGroupIds, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>resolver_endpoints</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>resolver_endpoints</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>resolver_endpoints_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>resolver_endpoints</code></td>
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
WHERE region = 'us-east-1' AND Identifier = '<ResolverEndpointId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>resolver_endpoints</code> in a region.
```sql
SELECT
region,
resolver_endpoint_id
FROM awscc.route53resolver.resolver_endpoints_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.route53resolver.resolver_endpoints
SET PatchDocument = string('{{ {
    "IpAddresses": ip_addresses,
    "Name": name,
    "Protocols": protocols,
    "ResolverEndpointType": resolver_endpoint_type,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ResolverEndpointId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.route53resolver.resolver_endpoints
WHERE Identifier = '<ResolverEndpointId>'
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
