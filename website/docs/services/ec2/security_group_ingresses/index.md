---
title: security_group_ingresses
hide_title: false
hide_table_of_contents: false
keywords:
  - security_group_ingresses
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

Creates, updates, deletes or gets a <code>security_group_ingress</code> resource or lists <code>security_group_ingresses</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>security_group_ingresses</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::EC2::SecurityGroupIngress</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.security_group_ingresses" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": "The Security Group Rule Id"
  },
  {
    "name": "cidr_ip",
    "type": "string",
    "description": "The IPv4 ranges"
  },
  {
    "name": "cidr_ipv6",
    "type": "string",
    "description": "[VPC only] The IPv6 ranges"
  },
  {
    "name": "description",
    "type": "string",
    "description": "Updates the description of an ingress (inbound) security group rule. You can replace an existing description, or add a description to a rule that did not have one previously"
  },
  {
    "name": "from_port",
    "type": "integer",
    "description": "<details><summary>The start of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type number. A value of -1 indicates all ICMP/ICMPv6 types. If you specify all ICMP/ICMPv6 types, you must specify all codes.</summary>Use this for ICMP and any protocol that uses ports.</details>"
  },
  {
    "name": "group_id",
    "type": "string",
    "description": "<details><summary>The ID of the security group. You must specify either the security group ID or the security group name in the request. For security groups in a nondefault VPC, you must specify the security group ID.</summary>You must specify the GroupName property or the GroupId property. For security groups that are in a VPC, you must use the GroupId property.</details>"
  },
  {
    "name": "group_name",
    "type": "string",
    "description": "The name of the security group."
  },
  {
    "name": "ip_protocol",
    "type": "string",
    "description": "<details><summary>The IP protocol name (tcp, udp, icmp, icmpv6) or number (see Protocol Numbers).</summary>[VPC only] Use -1 to specify all protocols. When authorizing security group rules, specifying -1 or a protocol number other than tcp, udp, icmp, or icmpv6 allows traffic on all ports, regardless of any port range you specify. For tcp, udp, and icmp, you must specify a port range. For icmpv6, the port range is optional; if you omit the port range, traffic for all types and codes is allowed.</details>"
  },
  {
    "name": "source_prefix_list_id",
    "type": "string",
    "description": "[EC2-VPC only] The ID of a prefix list."
  },
  {
    "name": "source_security_group_id",
    "type": "string",
    "description": "The ID of the security group. You must specify either the security group ID or the security group name. For security groups in a nondefault VPC, you must specify the security group ID."
  },
  {
    "name": "source_security_group_name",
    "type": "string",
    "description": "<details><summary>[EC2-Classic, default VPC] The name of the source security group.</summary>You must specify the GroupName property or the GroupId property. For security groups that are in a VPC, you must use the GroupId property.</details>"
  },
  {
    "name": "source_security_group_owner_id",
    "type": "string",
    "description": "<details><summary>[nondefault VPC] The AWS account ID that owns the source security group. You can't specify this property with an IP address range.</summary>If you specify SourceSecurityGroupName or SourceSecurityGroupId and that security group is owned by a different account than the account creating the stack, you must specify the SourceSecurityGroupOwnerId; otherwise, this property is optional.</details>"
  },
  {
    "name": "to_port",
    "type": "integer",
    "description": "<details><summary>The end of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code. A value of -1 indicates all ICMP/ICMPv6 codes for the specified ICMP type. If you specify all ICMP/ICMPv6 types, you must specify all codes.</summary>Use this for ICMP and any protocol that uses ports.</details>"
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
    "description": "The Security Group Rule Id"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroupingress.html"><code>AWS::EC2::SecurityGroupIngress</code></a>.

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
    <td><code>security_group_ingresses</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="IpProtocol, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>security_group_ingresses</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>security_group_ingresses</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>security_group_ingresses_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>security_group_ingresses</code></td>
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

Gets all properties from an individual <code>security_group_ingress</code>.
```sql
SELECT
  region,
  id,
  cidr_ip,
  cidr_ipv6,
  description,
  from_port,
  group_id,
  group_name,
  ip_protocol,
  source_prefix_list_id,
  source_security_group_id,
  source_security_group_name,
  source_security_group_owner_id,
  to_port
FROM awscc.ec2.security_group_ingresses
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>security_group_ingresses</code> in a region.
```sql
SELECT
  region,
  id
FROM awscc.ec2.security_group_ingresses_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>security_group_ingress</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.security_group_ingresses (
  IpProtocol,
  region
)
SELECT
  '{{ ip_protocol }}',
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
INSERT INTO awscc.ec2.security_group_ingresses (
  CidrIp,
  CidrIpv6,
  Description,
  FromPort,
  GroupId,
  GroupName,
  IpProtocol,
  SourcePrefixListId,
  SourceSecurityGroupId,
  SourceSecurityGroupName,
  SourceSecurityGroupOwnerId,
  ToPort,
  region
)
SELECT
  '{{ cidr_ip }}',
  '{{ cidr_ipv6 }}',
  '{{ description }}',
  '{{ from_port }}',
  '{{ group_id }}',
  '{{ group_name }}',
  '{{ ip_protocol }}',
  '{{ source_prefix_list_id }}',
  '{{ source_security_group_id }}',
  '{{ source_security_group_name }}',
  '{{ source_security_group_owner_id }}',
  '{{ to_port }}',
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
  - name: security_group_ingress
    props:
      - name: cidr_ip
        value: '{{ cidr_ip }}'
      - name: cidr_ipv6
        value: '{{ cidr_ipv6 }}'
      - name: description
        value: '{{ description }}'
      - name: from_port
        value: '{{ from_port }}'
      - name: group_id
        value: '{{ group_id }}'
      - name: group_name
        value: '{{ group_name }}'
      - name: ip_protocol
        value: '{{ ip_protocol }}'
      - name: source_prefix_list_id
        value: '{{ source_prefix_list_id }}'
      - name: source_security_group_id
        value: '{{ source_security_group_id }}'
      - name: source_security_group_name
        value: '{{ source_security_group_name }}'
      - name: source_security_group_owner_id
        value: '{{ source_security_group_owner_id }}'
      - name: to_port
        value: '{{ to_port }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>security_group_ingress</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.security_group_ingresses
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
DELETE FROM awscc.ec2.security_group_ingresses
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

To operate on the <code>security_group_ingresses</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
      { label: 'Read', value: 'read', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
ec2:DescribeSecurityGroupRules,
ec2:AuthorizeSecurityGroupIngress
```

</TabItem>
<TabItem value="update">

```json
ec2:UpdateSecurityGroupRuleDescriptionsIngress
```

</TabItem>
<TabItem value="delete">

```json
ec2:DescribeSecurityGroupRules,
ec2:RevokeSecurityGroupIngress
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeSecurityGroups,
ec2:DescribeSecurityGroupRules
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeSecurityGroupRules
```

</TabItem>
</Tabs>