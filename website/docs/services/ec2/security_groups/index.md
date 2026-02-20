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
    "description": "&#91;VPC only&#93; The outbound rules associated with the security group. There is a short interruption during which you cannot connect to the security group.",
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
WHERE region = 'us-east-1' AND Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>security_groups</code> in a region.
```sql
SELECT
region,
id
FROM awscc.ec2.security_groups_list_only
WHERE region = 'us-east-1';
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
'{{ GroupDescription }}',
'{{ region }}';
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
 '{{ GroupDescription }}',
 '{{ GroupName }}',
 '{{ VpcId }}',
 '{{ SecurityGroupIngress }}',
 '{{ SecurityGroupEgress }}',
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
  - name: security_group
    props:
      - name: GroupDescription
        value: '{{ GroupDescription }}'
      - name: GroupName
        value: '{{ GroupName }}'
      - name: VpcId
        value: '{{ VpcId }}'
      - name: SecurityGroupIngress
        value:
          - CidrIp: '{{ CidrIp }}'
            CidrIpv6: '{{ CidrIpv6 }}'
            Description: '{{ Description }}'
            FromPort: '{{ FromPort }}'
            SourceSecurityGroupName: '{{ SourceSecurityGroupName }}'
            ToPort: '{{ ToPort }}'
            SourceSecurityGroupOwnerId: '{{ SourceSecurityGroupOwnerId }}'
            IpProtocol: '{{ IpProtocol }}'
            SourceSecurityGroupId: '{{ SourceSecurityGroupId }}'
            SourcePrefixListId: '{{ SourcePrefixListId }}'
      - name: SecurityGroupEgress
        value:
          - CidrIp: '{{ CidrIp }}'
            CidrIpv6: '{{ CidrIpv6 }}'
            Description: '{{ Description }}'
            FromPort: '{{ FromPort }}'
            ToPort: '{{ ToPort }}'
            IpProtocol: '{{ IpProtocol }}'
            DestinationSecurityGroupId: '{{ DestinationSecurityGroupId }}'
            DestinationPrefixListId: '{{ DestinationPrefixListId }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

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
WHERE region = '{{ region }}'
AND Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.security_groups
WHERE Identifier = '<Id>'
AND region = 'us-east-1';
```

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