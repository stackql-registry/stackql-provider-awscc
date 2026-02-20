---
title: connect_peers
hide_title: false
hide_table_of_contents: false
keywords:
  - connect_peers
  - networkmanager
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

Creates, updates, deletes or gets a <code>connect_peer</code> resource or lists <code>connect_peers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>connect_peers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>AWS::NetworkManager::ConnectPeer Resource Type Definition.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.networkmanager.connect_peers" /></td></tr>
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
    "name": "peer_address",
    "type": "string",
    "description": "The IP address of the Connect peer."
  },
  {
    "name": "core_network_address",
    "type": "string",
    "description": "The IP address of a core network."
  },
  {
    "name": "bgp_options",
    "type": "object",
    "description": "Bgp options for connect peer.",
    "children": [
      {
        "name": "peer_asn",
        "type": "number",
        "description": ""
      }
    ]
  },
  {
    "name": "inside_cidr_blocks",
    "type": "array",
    "description": "The inside IP addresses used for a Connect peer configuration."
  },
  {
    "name": "core_network_id",
    "type": "string",
    "description": "The ID of the core network."
  },
  {
    "name": "connect_attachment_id",
    "type": "string",
    "description": "The ID of the attachment to connect."
  },
  {
    "name": "connect_peer_id",
    "type": "string",
    "description": "The ID of the Connect peer."
  },
  {
    "name": "edge_location",
    "type": "string",
    "description": "The Connect peer Regions where edges are located."
  },
  {
    "name": "state",
    "type": "string",
    "description": "State of the connect peer."
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "Connect peer creation time."
  },
  {
    "name": "configuration",
    "type": "object",
    "description": "Configuration of the connect peer.",
    "children": [
      {
        "name": "core_network_address",
        "type": "string",
        "description": "The IP address of a core network."
      },
      {
        "name": "peer_address",
        "type": "string",
        "description": "The IP address of the Connect peer."
      },
      {
        "name": "inside_cidr_blocks",
        "type": "array",
        "description": "The inside IP addresses used for a Connect peer configuration."
      },
      {
        "name": "protocol",
        "type": "string",
        "description": "The protocol used for a Connect peer configuration."
      },
      {
        "name": "bgp_configurations",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "core_network_asn",
            "type": "number",
            "description": "The ASN of the Coret Network."
          },
          {
            "name": "peer_asn",
            "type": "number",
            "description": "The ASN of the Connect peer."
          },
          {
            "name": "core_network_address",
            "type": "string",
            "description": "The address of a core network."
          },
          {
            "name": "peer_address",
            "type": "string",
            "description": "The address of a core network Connect peer."
          }
        ]
      }
    ]
  },
  {
    "name": "subnet_arn",
    "type": "string",
    "description": "The subnet ARN for the connect peer."
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
    "name": "connect_peer_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectpeer.html"><code>AWS::NetworkManager::ConnectPeer</code></a>.

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
    <td><code>connect_peers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ConnectAttachmentId, PeerAddress, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>connect_peers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>connect_peers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>connect_peers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>connect_peers</code></td>
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

Gets all properties from an individual <code>connect_peer</code>.
```sql
SELECT
region,
peer_address,
core_network_address,
bgp_options,
inside_cidr_blocks,
core_network_id,
connect_attachment_id,
connect_peer_id,
edge_location,
state,
created_at,
configuration,
subnet_arn,
tags
FROM awscc.networkmanager.connect_peers
WHERE region = 'us-east-1' AND Identifier = '<ConnectPeerId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>connect_peers</code> in a region.
```sql
SELECT
region,
connect_peer_id
FROM awscc.networkmanager.connect_peers_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>connect_peer</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.networkmanager.connect_peers (
 PeerAddress,
 ConnectAttachmentId,
 region
)
SELECT 
'{{ PeerAddress }}',
 '{{ ConnectAttachmentId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.networkmanager.connect_peers (
 PeerAddress,
 CoreNetworkAddress,
 BgpOptions,
 InsideCidrBlocks,
 ConnectAttachmentId,
 SubnetArn,
 Tags,
 region
)
SELECT 
 '{{ PeerAddress }}',
 '{{ CoreNetworkAddress }}',
 '{{ BgpOptions }}',
 '{{ InsideCidrBlocks }}',
 '{{ ConnectAttachmentId }}',
 '{{ SubnetArn }}',
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
  - name: connect_peer
    props:
      - name: PeerAddress
        value: '{{ PeerAddress }}'
      - name: CoreNetworkAddress
        value: '{{ CoreNetworkAddress }}'
      - name: BgpOptions
        value:
          PeerAsn: null
      - name: InsideCidrBlocks
        value:
          - '{{ InsideCidrBlocks[0] }}'
      - name: ConnectAttachmentId
        value: '{{ ConnectAttachmentId }}'
      - name: SubnetArn
        value: '{{ SubnetArn }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>connect_peer</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.networkmanager.connect_peers
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ConnectPeerId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.networkmanager.connect_peers
WHERE Identifier = '<ConnectPeerId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>connect_peers</code> resource, the following permissions are required:

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
networkmanager:GetConnectPeer,
networkmanager:CreateConnectPeer,
networkmanager:TagResource,
ec2:DescribeRegions
```

</TabItem>
<TabItem value="read">

```json
networkmanager:GetConnectPeer
```

</TabItem>
<TabItem value="update">

```json
networkmanager:GetConnectPeer,
networkmanager:ListTagsForResource,
networkmanager:TagResource,
networkmanager:UntagResource,
ec2:DescribeRegions
```

</TabItem>
<TabItem value="delete">

```json
networkmanager:GetConnectPeer,
networkmanager:DeleteConnectPeer,
ec2:DescribeRegions
```

</TabItem>
<TabItem value="list">

```json
networkmanager:ListConnectPeers
```

</TabItem>
</Tabs>