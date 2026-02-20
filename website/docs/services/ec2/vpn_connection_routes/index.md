---
title: vpn_connection_routes
hide_title: false
hide_table_of_contents: false
keywords:
  - vpn_connection_routes
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

Creates, updates, deletes or gets a <code>vpn_connection_route</code> resource or lists <code>vpn_connection_routes</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vpn_connection_routes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Specifies a static route for a VPN connection between an existing virtual private gateway and a VPN customer gateway. The static route allows traffic to be routed from the virtual private gateway to the VPN customer gateway.<br />For more information, see &#91;&#93;(https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC&#95;VPN.html) in the &#42;User Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.vpn_connection_routes" /></td></tr>
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
    "name": "destination_cidr_block",
    "type": "string",
    "description": "The CIDR block associated with the local subnet of the customer network."
  },
  {
    "name": "vpn_connection_id",
    "type": "string",
    "description": "The ID of the VPN connection."
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
    "name": "destination_cidr_block",
    "type": "string",
    "description": "The CIDR block associated with the local subnet of the customer network."
  },
  {
    "name": "vpn_connection_id",
    "type": "string",
    "description": "The ID of the VPN connection."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnectionroute.html"><code>AWS::EC2::VPNConnectionRoute</code></a>.

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
    <td><code>vpn_connection_routes</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DestinationCidrBlock, VpnConnectionId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>vpn_connection_routes</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>vpn_connection_routes_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>vpn_connection_routes</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>vpn_connection_route</code>.
```sql
SELECT
region,
destination_cidr_block,
vpn_connection_id
FROM awscc.ec2.vpn_connection_routes
WHERE region = 'us-east-1' AND data__Identifier = '<DestinationCidrBlock>|<VpnConnectionId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>vpn_connection_routes</code> in a region.
```sql
SELECT
region,
destination_cidr_block,
vpn_connection_id
FROM awscc.ec2.vpn_connection_routes_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>vpn_connection_route</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.vpn_connection_routes (
 DestinationCidrBlock,
 VpnConnectionId,
 region
)
SELECT 
'{{ DestinationCidrBlock }}',
 '{{ VpnConnectionId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.vpn_connection_routes (
 DestinationCidrBlock,
 VpnConnectionId,
 region
)
SELECT 
 '{{ DestinationCidrBlock }}',
 '{{ VpnConnectionId }}',
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
  - name: vpn_connection_route
    props:
      - name: DestinationCidrBlock
        value: '{{ DestinationCidrBlock }}'
      - name: VpnConnectionId
        value: '{{ VpnConnectionId }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.vpn_connection_routes
WHERE data__Identifier = '<DestinationCidrBlock|VpnConnectionId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>vpn_connection_routes</code> resource, the following permissions are required:

### Read
```json
ec2:DescribeVpnConnections
```

### Create
```json
ec2:CreateVpnConnectionRoute,
ec2:DescribeVpnConnections
```

### List
```json
ec2:DescribeVpnConnections
```

### Delete
```json
ec2:DeleteVpnConnectionRoute,
ec2:DescribeVpnConnections
```
