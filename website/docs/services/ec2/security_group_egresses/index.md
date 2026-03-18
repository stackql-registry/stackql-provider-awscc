---
title: security_group_egresses
hide_title: false
hide_table_of_contents: false
keywords:
  - security_group_egresses
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

Creates, updates, deletes or gets a <code>security_group_egress</code> resource or lists <code>security_group_egresses</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>security_group_egresses</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td><details><summary>Adds the specified outbound (egress) rule to a security group.</summary>An outbound rule permits instances to send traffic to the specified IPv4 or IPv6 address range, the IP addresses that are specified by a prefix list, or the instances that are associated with a destination security group. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/security-group-rules.html">Security group rules</a>.<br />You must specify exactly one of the following destinations: an IPv4 address range, an IPv6 address range, a prefix list, or a security group.<br />You must specify a protocol for each rule (for example, TCP). If the protocol is TCP or UDP, you must also specify a port or port range. If the protocol is ICMP or ICMPv6, you must also specify the ICMP/ICMPv6 type and code. To specify all types or all codes, use -1.<br />Rule changes are propagated to instances associated with the security group as quickly as possible. However, a small delay might occur.</details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.security_group_egresses" /></td></tr>
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
    "name": "cidr_ip",
    "type": "string",
    "description": "<details><summary>The IPv4 address range, in CIDR format.</summary>You must specify exactly one of the following: <code>CidrIp</code>, <code>CidrIpv6</code>, <code>DestinationPrefixListId</code>, or <code>DestinationSecurityGroupId</code>.<br />For examples of rules that you can add to security groups for specific access scenarios, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules-reference.html\">Security group rules for different use cases</a> in the <i>User Guide</i>.</details>"
  },
  {
    "name": "cidr_ipv6",
    "type": "string",
    "description": "<details><summary>The IPv6 address range, in CIDR format.</summary>You must specify exactly one of the following: <code>CidrIp</code>, <code>CidrIpv6</code>, <code>DestinationPrefixListId</code>, or <code>DestinationSecurityGroupId</code>.<br />For examples of rules that you can add to security groups for specific access scenarios, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules-reference.html\">Security group rules for different use cases</a> in the <i>User Guide</i>.</details>"
  },
  {
    "name": "description",
    "type": "string",
    "description": "<details><summary>The description of an egress (outbound) security group rule.</summary>Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=;&#123;&#125;!$*</details>"
  },
  {
    "name": "from_port",
    "type": "integer",
    "description": "If the protocol is TCP or UDP, this is the start of the port range. If the protocol is ICMP or ICMPv6, this is the ICMP type or -1 (all ICMP types)."
  },
  {
    "name": "to_port",
    "type": "integer",
    "description": "If the protocol is TCP or UDP, this is the end of the port range. If the protocol is ICMP or ICMPv6, this is the ICMP code or -1 (all ICMP codes). If the start port is -1 (all ICMP types), then the end port must be -1 (all ICMP codes)."
  },
  {
    "name": "ip_protocol",
    "type": "string",
    "description": "<details><summary>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>, <code>icmpv6</code>) or number (see <a href=\"https://docs.aws.amazon.com/http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml\">Protocol Numbers</a>).</summary>Use <code>-1</code> to specify all protocols. When authorizing security group rules, specifying <code>-1</code> or a protocol number other than <code>tcp</code>, <code>udp</code>, <code>icmp</code>, or <code>icmpv6</code> allows traffic on all ports, regardless of any port range you specify. For <code>tcp</code>, <code>udp</code>, and <code>icmp</code>, you must specify a port range. For <code>icmpv6</code>, the port range is optional; if you omit the port range, traffic for all types and codes is allowed.</details>"
  },
  {
    "name": "destination_security_group_id",
    "type": "string",
    "description": "<details><summary>The ID of the security group.</summary>You must specify exactly one of the following: <code>CidrIp</code>, <code>CidrIpv6</code>, <code>DestinationPrefixListId</code>, or <code>DestinationSecurityGroupId</code>.</details>"
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "destination_prefix_list_id",
    "type": "string",
    "description": "<details><summary>The prefix list IDs for an AWS service. This is the AWS service to access through a VPC endpoint from instances associated with the security group.</summary>You must specify exactly one of the following: <code>CidrIp</code>, <code>CidrIpv6</code>, <code>DestinationPrefixListId</code>, or <code>DestinationSecurityGroupId</code>.</details>"
  },
  {
    "name": "group_id",
    "type": "string",
    "description": "The ID of the security group. You must specify either the security group ID or the security group name in the request. For security groups in a nondefault VPC, you must specify the security group ID."
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroupegress.html"><code>AWS::EC2::SecurityGroupEgress</code></a>.

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
    <td><code>security_group_egresses</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="IpProtocol, GroupId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>security_group_egresses</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>security_group_egresses</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>security_group_egresses_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>security_group_egresses</code></td>
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

Gets all properties from an individual <code>security_group_egress</code>.
```sql
SELECT
  region,
  cidr_ip,
  cidr_ipv6,
  description,
  from_port,
  to_port,
  ip_protocol,
  destination_security_group_id,
  id,
  destination_prefix_list_id,
  group_id
FROM awscc.ec2.security_group_egresses
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>security_group_egresses</code> in a region.
```sql
SELECT
  region,
  id
FROM awscc.ec2.security_group_egresses_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>security_group_egress</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.security_group_egresses (
  IpProtocol,
  GroupId,
  region
)
SELECT
  '{{ ip_protocol }}',
  '{{ group_id }}',
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
INSERT INTO awscc.ec2.security_group_egresses (
  CidrIp,
  CidrIpv6,
  Description,
  FromPort,
  ToPort,
  IpProtocol,
  DestinationSecurityGroupId,
  DestinationPrefixListId,
  GroupId,
  region
)
SELECT
  '{{ cidr_ip }}',
  '{{ cidr_ipv6 }}',
  '{{ description }}',
  '{{ from_port }}',
  '{{ to_port }}',
  '{{ ip_protocol }}',
  '{{ destination_security_group_id }}',
  '{{ destination_prefix_list_id }}',
  '{{ group_id }}',
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
  - name: security_group_egress
    props:
      - name: cidr_ip
        value: '{{ cidr_ip }}'
      - name: cidr_ipv6
        value: '{{ cidr_ipv6 }}'
      - name: description
        value: '{{ description }}'
      - name: from_port
        value: '{{ from_port }}'
      - name: to_port
        value: '{{ to_port }}'
      - name: ip_protocol
        value: '{{ ip_protocol }}'
      - name: destination_security_group_id
        value: '{{ destination_security_group_id }}'
      - name: destination_prefix_list_id
        value: '{{ destination_prefix_list_id }}'
      - name: group_id
        value: '{{ group_id }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>security_group_egress</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.security_group_egresses
SET PatchDocument = string('{{ {
    "Description": description
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ id }}'
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
DELETE FROM awscc.ec2.security_group_egresses
WHERE
  Identifier = '{{ id }}' AND
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

To operate on the <code>security_group_egresses</code> resource, the following permissions are required:

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
ec2:DescribeSecurityGroupRules
```

</TabItem>
<TabItem value="create">

```json
ec2:AuthorizeSecurityGroupEgress,
ec2:RevokeSecurityGroupEgress,
ec2:DescribeSecurityGroupRules
```

</TabItem>
<TabItem value="update">

```json
ec2:UpdateSecurityGroupRuleDescriptionsEgress
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeSecurityGroupRules
```

</TabItem>
<TabItem value="delete">

```json
ec2:RevokeSecurityGroupEgress,
ec2:DescribeSecurityGroupRules
```

</TabItem>
</Tabs>