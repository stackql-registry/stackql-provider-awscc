---
title: security_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - security_groups
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

Creates, updates, deletes or gets a <code>security_group</code> resource or lists <code>security_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>security_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::EC2::SecurityGroup</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.security_groups" /></td></tr>
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
    "name": "group_description",
    "type": "string",
    "description": "A description for the security group."
  },
  {
    "name": "group_name",
    "type": "string",
    "description": "The name of the security group."
  },
  {
    "name": "vpc_id",
    "type": "string",
    "description": "The ID of the VPC for the security group."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The group name or group ID depending on whether the SG is created in default or specific VPC"
  },
  {
    "name": "security_group_ingress",
    "type": "array",
    "description": "The inbound rules associated with the security group. There is a short interruption during which you cannot connect to the security group.",
    "children": [
      {
        "name": "cidr_ip",
        "type": "string",
        "description": ""
      },
      {
        "name": "cidr_ipv6",
        "type": "string",
        "description": ""
      },
      {
        "name": "description",
        "type": "string",
        "description": ""
      },
      {
        "name": "from_port",
        "type": "integer",
        "description": ""
      },
      {
        "name": "source_security_group_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "to_port",
        "type": "integer",
        "description": ""
      },
      {
        "name": "source_security_group_owner_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "ip_protocol",
        "type": "string",
        "description": ""
      },
      {
        "name": "source_security_group_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "source_prefix_list_id",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "security_group_egress",
    "type": "array",
    "description": "[VPC only] The outbound rules associated with the security group. There is a short interruption during which you cannot connect to the security group.",
    "children": [
      {
        "name": "cidr_ip",
        "type": "string",
        "description": ""
      },
      {
        "name": "cidr_ipv6",
        "type": "string",
        "description": ""
      },
      {
        "name": "description",
        "type": "string",
        "description": ""
      },
      {
        "name": "from_port",
        "type": "integer",
        "description": ""
      },
      {
        "name": "to_port",
        "type": "integer",
        "description": ""
      },
      {
        "name": "ip_protocol",
        "type": "string",
        "description": ""
      },
      {
        "name": "destination_security_group_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "destination_prefix_list_id",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Any tags assigned to the security group.",
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
    "name": "group_id",
    "type": "string",
    "description": "The group ID of the specified security group."
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
    "description": "The group name or group ID depending on whether the SG is created in default or specific VPC"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html"><code>AWS::EC2::SecurityGroup</code></a>.

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
    <td><code>security_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="GroupDescription, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>security_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>security_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>security_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>security_groups</code></td>
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

Gets all properties from an individual <code>security_group</code>.
```sql
SELECT
  region,
  group_description,
  group_name,
  vpc_id,
  id,
  security_group_ingress,
  security_group_egress,
  tags,
  group_id
FROM awscc.ec2.security_groups
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>security_groups</code> in a region.
```sql
SELECT
  region,
  id
FROM awscc.ec2.security_groups_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>security_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.security_groups (
  GroupDescription,
  region
)
SELECT
  '{{ group_description }}',
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
INSERT INTO awscc.ec2.security_groups (
  GroupDescription,
  GroupName,
  VpcId,
  SecurityGroupIngress,
  SecurityGroupEgress,
  Tags,
  region
)
SELECT
  '{{ group_description }}',
  '{{ group_name }}',
  '{{ vpc_id }}',
  '{{ security_group_ingress }}',
  '{{ security_group_egress }}',
  '{{ tags }}',
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
  - name: security_group
    props:
      - name: group_description
        value: '{{ group_description }}'
      - name: group_name
        value: '{{ group_name }}'
      - name: vpc_id
        value: '{{ vpc_id }}'
      - name: security_group_ingress
        value:
          - cidr_ip: '{{ cidr_ip }}'
            cidr_ipv6: '{{ cidr_ipv6 }}'
            description: '{{ description }}'
            from_port: '{{ from_port }}'
            source_security_group_name: '{{ source_security_group_name }}'
            to_port: '{{ to_port }}'
            source_security_group_owner_id: '{{ source_security_group_owner_id }}'
            ip_protocol: '{{ ip_protocol }}'
            source_security_group_id: '{{ source_security_group_id }}'
            source_prefix_list_id: '{{ source_prefix_list_id }}'
      - name: security_group_egress
        value:
          - cidr_ip: '{{ cidr_ip }}'
            cidr_ipv6: '{{ cidr_ipv6 }}'
            description: '{{ description }}'
            from_port: '{{ from_port }}'
            to_port: '{{ to_port }}'
            ip_protocol: '{{ ip_protocol }}'
            destination_security_group_id: '{{ destination_security_group_id }}'
            destination_prefix_list_id: '{{ destination_prefix_list_id }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>security_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.security_groups
SET PatchDocument = string('{{ {
    "SecurityGroupIngress": security_group_ingress,
    "SecurityGroupEgress": security_group_egress,
    "Tags": tags
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
DELETE FROM awscc.ec2.security_groups
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

To operate on the <code>security_groups</code> resource, the following permissions are required:

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
ec2:DescribeSecurityGroups
```

</TabItem>
<TabItem value="create">

```json
ec2:CreateSecurityGroup,
ec2:DescribeSecurityGroups,
ec2:RevokeSecurityGroupEgress,
ec2:AuthorizeSecurityGroupEgress,
ec2:AuthorizeSecurityGroupIngress,
ec2:CreateTags
```

</TabItem>
<TabItem value="update">

```json
ec2:RevokeSecurityGroupEgress,
ec2:RevokeSecurityGroupIngress,
ec2:DescribeSecurityGroups,
ec2:AuthorizeSecurityGroupEgress,
ec2:AuthorizeSecurityGroupIngress,
ec2:UpdateSecurityGroupRuleDescriptionsIngress,
ec2:UpdateSecurityGroupRuleDescriptionsEgress,
ec2:CreateTags,
ec2:DeleteTags
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeSecurityGroups
```

</TabItem>
<TabItem value="delete">

```json
ec2:DescribeSecurityGroups,
ec2:DeleteSecurityGroup,
ec2:DescribeInstances
```

</TabItem>
</Tabs>