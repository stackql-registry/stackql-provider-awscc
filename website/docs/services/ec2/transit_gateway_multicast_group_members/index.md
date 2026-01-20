---
title: transit_gateway_multicast_group_members
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_multicast_group_members
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

Creates, updates, deletes or gets a <code>transit_gateway_multicast_group_member</code> resource or lists <code>transit_gateway_multicast_group_members</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>transit_gateway_multicast_group_members</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::EC2::TransitGatewayMulticastGroupMember registers and deregisters members and sources (network interfaces) with the transit gateway multicast group</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.transit_gateway_multicast_group_members" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "group_ip_address",
    "type": "string",
    "description": "The IP address assigned to the transit gateway multicast group."
  },
  {
    "name": "transit_gateway_attachment_id",
    "type": "string",
    "description": "The ID of the transit gateway attachment."
  },
  {
    "name": "transit_gateway_multicast_domain_id",
    "type": "string",
    "description": "The ID of the transit gateway multicast domain."
  },
  {
    "name": "subnet_id",
    "type": "string",
    "description": "The ID of the subnet."
  },
  {
    "name": "resource_id",
    "type": "string",
    "description": "The ID of the resource."
  },
  {
    "name": "resource_type",
    "type": "string",
    "description": "The type of resource, for example a VPC attachment."
  },
  {
    "name": "network_interface_id",
    "type": "string",
    "description": "The ID of the transit gateway attachment."
  },
  {
    "name": "group_member",
    "type": "boolean",
    "description": "Indicates that the resource is a transit gateway multicast group member."
  },
  {
    "name": "group_source",
    "type": "boolean",
    "description": "Indicates that the resource is a transit gateway multicast group member."
  },
  {
    "name": "member_type",
    "type": "string",
    "description": "The member type (for example, static)."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastgroupmember.html"><code>AWS::EC2::TransitGatewayMulticastGroupMember</code></a>.

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
    <td><CopyableCode code="GroupIpAddress, NetworkInterfaceId, TransitGatewayMulticastDomainId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>transit_gateway_multicast_group_member</code>.
```sql
SELECT
region,
group_ip_address,
transit_gateway_attachment_id,
transit_gateway_multicast_domain_id,
subnet_id,
resource_id,
resource_type,
network_interface_id,
group_member,
group_source,
member_type
FROM awscc.ec2.transit_gateway_multicast_group_members
WHERE region = 'us-east-1' AND data__Identifier = '<TransitGatewayMulticastDomainId>|<GroupIpAddress>|<NetworkInterfaceId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>transit_gateway_multicast_group_member</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.transit_gateway_multicast_group_members (
 GroupIpAddress,
 TransitGatewayMulticastDomainId,
 NetworkInterfaceId,
 region
)
SELECT 
'{{ GroupIpAddress }}',
 '{{ TransitGatewayMulticastDomainId }}',
 '{{ NetworkInterfaceId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.transit_gateway_multicast_group_members (
 GroupIpAddress,
 TransitGatewayMulticastDomainId,
 NetworkInterfaceId,
 region
)
SELECT 
 '{{ GroupIpAddress }}',
 '{{ TransitGatewayMulticastDomainId }}',
 '{{ NetworkInterfaceId }}',
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
  - name: transit_gateway_multicast_group_member
    props:
      - name: GroupIpAddress
        value: '{{ GroupIpAddress }}'
      - name: TransitGatewayMulticastDomainId
        value: '{{ TransitGatewayMulticastDomainId }}'
      - name: NetworkInterfaceId
        value: '{{ NetworkInterfaceId }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.transit_gateway_multicast_group_members
WHERE data__Identifier = '<TransitGatewayMulticastDomainId|GroupIpAddress|NetworkInterfaceId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>transit_gateway_multicast_group_members</code> resource, the following permissions are required:

### Create
```json
ec2:RegisterTransitGatewayMulticastGroupMembers,
ec2:SearchTransitGatewayMulticastGroups
```

### Read
```json
ec2:SearchTransitGatewayMulticastGroups
```

### Delete
```json
ec2:DeregisterTransitGatewayMulticastGroupMembers,
ec2:SearchTransitGatewayMulticastGroups
```

### List
```json
ec2:SearchTransitGatewayMulticastGroups
```
