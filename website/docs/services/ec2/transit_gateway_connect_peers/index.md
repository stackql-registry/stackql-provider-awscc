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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "transit_gateway_connect_peer_id",
    "type": "string",
    "description": "The ID of the Connect peer."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayconnectpeer.html"><code>AWS::EC2::TransitGatewayConnectPeer</code></a>.

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
    <td><code>transit_gateway_connect_peers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="TransitGatewayAttachmentId, ConnectPeerConfiguration, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>transit_gateway_connect_peers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>transit_gateway_connect_peers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>transit_gateway_connect_peers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>transit_gateway_connect_peers</code></td>
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
WHERE region = 'us-east-1' AND Identifier = '{{ transit_gateway_connect_peer_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>transit_gateway_connect_peers</code> in a region.
```sql
SELECT
region,
transit_gateway_connect_peer_id
FROM awscc.ec2.transit_gateway_connect_peers_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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
'{{ transit_gateway_attachment_id }}',
 '{{ connect_peer_configuration }}',
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
 '{{ transit_gateway_attachment_id }}',
 '{{ connect_peer_configuration }}',
 '{{ tags }}',
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
      - name: transit_gateway_attachment_id
        value: '{{ transit_gateway_attachment_id }}'
      - name: connect_peer_configuration
        value:
          transit_gateway_address: '{{ transit_gateway_address }}'
          peer_address: '{{ peer_address }}'
          inside_cidr_blocks:
            - '{{ inside_cidr_blocks[0] }}'
          protocol: '{{ protocol }}'
          bgp_configurations:
            - transit_gateway_asn: null
              peer_asn: null
              transit_gateway_address: '{{ transit_gateway_address }}'
              peer_address: '{{ peer_address }}'
              bgp_status: '{{ bgp_status }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>transit_gateway_connect_peer</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.transit_gateway_connect_peers
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ transit_gateway_connect_peer_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.transit_gateway_connect_peers
WHERE Identifier = '{{ transit_gateway_connect_peer_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>transit_gateway_connect_peers</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
ec2:CreateTransitGatewayConnectPeer,
ec2:DescribeTransitGatewayConnectPeers,
ec2:CreateTags,
ec2:DescribeTags
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeTransitGatewayConnectPeers,
ec2:DescribeTags
```

</TabItem>
<TabItem value="update">

```json
ec2:DescribeTransitGatewayConnectPeers,
ec2:DeleteTags,
ec2:CreateTags
```

</TabItem>
<TabItem value="delete">

```json
ec2:DeleteTransitGatewayConnectPeer,
ec2:DescribeTransitGatewayConnectPeers,
ec2:DeleteTags,
ec2:DescribeTags
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeTransitGatewayConnectPeers,
ec2:DescribeTags
```

</TabItem>
</Tabs>