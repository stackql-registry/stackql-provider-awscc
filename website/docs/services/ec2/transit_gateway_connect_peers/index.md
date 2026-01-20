---
title: transit_gateway_connect_peers
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_connect_peers
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

Creates, updates, deletes or gets a <code>transit_gateway_connect_peer</code> resource or lists <code>transit_gateway_connect_peers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>transit_gateway_connect_peers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::EC2::TransitGatewayConnectPeer</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.transit_gateway_connect_peers" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "transit_gateway_attachment_id",
    "type": "string",
    "description": "The ID of the Connect attachment."
  },
  {
    "name": "transit_gateway_connect_peer_id",
    "type": "string",
    "description": "The ID of the Connect peer."
  },
  {
    "name": "state",
    "type": "string",
    "description": "The state of the Connect peer."
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": "The creation time."
  },
  {
    "name": "connect_peer_configuration",
    "type": "object",
    "description": "The Connect peer details.",
    "children": [
      {
        "name": "transit_gateway_address",
        "type": "string",
        "description": "The Connect peer IP address on the transit gateway side of the tunnel."
      },
      {
        "name": "peer_address",
        "type": "string",
        "description": "The peer IP address (GRE outer IP address) on the appliance side of the Connect peer."
      },
      {
        "name": "inside_cidr_blocks",
        "type": "array",
        "description": "The range of interior BGP peer IP addresses."
      },
      {
        "name": "protocol",
        "type": "string",
        "description": "The tunnel protocol."
      },
      {
        "name": "bgp_configurations",
        "type": "array",
        "description": "The BGP configuration details.",
        "children": [
          {
            "name": "transit_gateway_asn",
            "type": "number",
            "description": "The transit gateway Autonomous System Number (ASN)."
          },
          {
            "name": "peer_asn",
            "type": "number",
            "description": "The peer Autonomous System Number (ASN)."
          },
          {
            "name": "transit_gateway_address",
            "type": "string",
            "description": "The interior BGP peer IP address for the transit gateway."
          },
          {
            "name": "peer_address",
            "type": "string",
            "description": "The interior BGP peer IP address for the appliance."
          },
          {
            "name": "bgp_status",
            "type": "string",
            "description": "The BGP status."
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags for the Connect Peer.",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayconnectpeer.html"><code>AWS::EC2::TransitGatewayConnectPeer</code></a>.

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
    <td><CopyableCode code="TransitGatewayAttachmentId, ConnectPeerConfiguration, region" /></td>
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

Gets all properties from an individual <code>transit_gateway_connect_peer</code>.
```sql
SELECT
region,
transit_gateway_attachment_id,
transit_gateway_connect_peer_id,
state,
creation_time,
connect_peer_configuration,
tags
FROM awscc.ec2.transit_gateway_connect_peers
WHERE region = 'us-east-1' AND data__Identifier = '<TransitGatewayConnectPeerId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>transit_gateway_connect_peer</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.transit_gateway_connect_peers (
 TransitGatewayAttachmentId,
 ConnectPeerConfiguration,
 region
)
SELECT 
'{{ TransitGatewayAttachmentId }}',
 '{{ ConnectPeerConfiguration }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.transit_gateway_connect_peers (
 TransitGatewayAttachmentId,
 ConnectPeerConfiguration,
 Tags,
 region
)
SELECT 
 '{{ TransitGatewayAttachmentId }}',
 '{{ ConnectPeerConfiguration }}',
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
  - name: transit_gateway_connect_peer
    props:
      - name: TransitGatewayAttachmentId
        value: '{{ TransitGatewayAttachmentId }}'
      - name: ConnectPeerConfiguration
        value:
          TransitGatewayAddress: '{{ TransitGatewayAddress }}'
          PeerAddress: '{{ PeerAddress }}'
          InsideCidrBlocks:
            - '{{ InsideCidrBlocks[0] }}'
          Protocol: '{{ Protocol }}'
          BgpConfigurations:
            - TransitGatewayAsn: null
              PeerAsn: null
              TransitGatewayAddress: '{{ TransitGatewayAddress }}'
              PeerAddress: '{{ PeerAddress }}'
              BgpStatus: '{{ BgpStatus }}'
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
DELETE FROM awscc.ec2.transit_gateway_connect_peers
WHERE data__Identifier = '<TransitGatewayConnectPeerId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>transit_gateway_connect_peers</code> resource, the following permissions are required:

### Create
```json
ec2:CreateTransitGatewayConnectPeer,
ec2:DescribeTransitGatewayConnectPeers,
ec2:CreateTags,
ec2:DescribeTags
```

### Read
```json
ec2:DescribeTransitGatewayConnectPeers,
ec2:DescribeTags
```

### Update
```json
ec2:DescribeTransitGatewayConnectPeers,
ec2:DeleteTags,
ec2:CreateTags
```

### Delete
```json
ec2:DeleteTransitGatewayConnectPeer,
ec2:DescribeTransitGatewayConnectPeers,
ec2:DeleteTags,
ec2:DescribeTags
```

### List
```json
ec2:DescribeTransitGatewayConnectPeers,
ec2:DescribeTags
```
