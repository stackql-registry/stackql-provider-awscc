---
title: transit_gateway_multicast_group_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_multicast_group_sources
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

Creates, updates, deletes or gets a <code>transit_gateway_multicast_group_source</code> resource or lists <code>transit_gateway_multicast_group_sources</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>transit_gateway_multicast_group_sources</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::EC2::TransitGatewayMulticastGroupSource registers and deregisters members and sources (network interfaces) with the transit gateway multicast group</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.transit_gateway_multicast_group_sources" /></td></tr>
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
    "name": "source_type",
    "type": "string",
    "description": "The source type."
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
    "name": "group_ip_address",
    "type": "string",
    "description": "The IP address assigned to the transit gateway multicast group."
  },
  {
    "name": "transit_gateway_multicast_domain_id",
    "type": "string",
    "description": "The ID of the transit gateway multicast domain."
  },
  {
    "name": "network_interface_id",
    "type": "string",
    "description": "The ID of the transit gateway attachment."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastgroupsource.html"><code>AWS::EC2::TransitGatewayMulticastGroupSource</code></a>.

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
    <td><code>transit_gateway_multicast_group_sources</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="TransitGatewayMulticastDomainId, NetworkInterfaceId, GroupIpAddress, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>transit_gateway_multicast_group_sources</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>transit_gateway_multicast_group_sources_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>transit_gateway_multicast_group_sources</code></td>
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

Gets all properties from an individual <code>transit_gateway_multicast_group_source</code>.
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
source_type
FROM awscc.ec2.transit_gateway_multicast_group_sources
WHERE region = 'us-east-1' AND Identifier = '<TransitGatewayMulticastDomainId>|<GroupIpAddress>|<NetworkInterfaceId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>transit_gateway_multicast_group_sources</code> in a region.
```sql
SELECT
region,
transit_gateway_multicast_domain_id,
group_ip_address,
network_interface_id
FROM awscc.ec2.transit_gateway_multicast_group_sources_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>transit_gateway_multicast_group_source</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.transit_gateway_multicast_group_sources (
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
INSERT INTO awscc.ec2.transit_gateway_multicast_group_sources (
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
  - name: transit_gateway_multicast_group_source
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
DELETE FROM awscc.ec2.transit_gateway_multicast_group_sources
WHERE Identifier = '<TransitGatewayMulticastDomainId|GroupIpAddress|NetworkInterfaceId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>transit_gateway_multicast_group_sources</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
ec2:RegisterTransitGatewayMulticastGroupSources,
ec2:SearchTransitGatewayMulticastGroups
```

</TabItem>
<TabItem value="read">

```json
ec2:SearchTransitGatewayMulticastGroups
```

</TabItem>
<TabItem value="delete">

```json
ec2:DeregisterTransitGatewayMulticastGroupSources,
ec2:SearchTransitGatewayMulticastGroups
```

</TabItem>
<TabItem value="list">

```json
ec2:SearchTransitGatewayMulticastGroups
```

</TabItem>
</Tabs>