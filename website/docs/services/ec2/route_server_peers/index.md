---
title: route_server_peers
hide_title: false
hide_table_of_contents: false
keywords:
  - route_server_peers
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

Creates, updates, deletes or gets a <code>route_server_peer</code> resource or lists <code>route_server_peers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>route_server_peers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>VPC Route Server Peer</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.route_server_peers" /></td></tr>
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
    "name": "route_server_id",
    "type": "string",
    "description": "Route Server ID"
  },
  {
    "name": "route_server_endpoint_id",
    "type": "string",
    "description": "Route Server Endpoint ID"
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the Route Server Peer."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The ID of the Route Server Peer."
  },
  {
    "name": "subnet_id",
    "type": "string",
    "description": "Subnet ID"
  },
  {
    "name": "vpc_id",
    "type": "string",
    "description": "VPC ID"
  },
  {
    "name": "endpoint_eni_id",
    "type": "string",
    "description": "Elastic Network Interface ID owned by the Route Server Endpoint"
  },
  {
    "name": "endpoint_eni_address",
    "type": "string",
    "description": "Elastic Network Interface IP address owned by the Route Server Endpoint"
  },
  {
    "name": "peer_address",
    "type": "string",
    "description": "IP address of the Route Server Peer"
  },
  {
    "name": "bgp_options",
    "type": "object",
    "description": "BGP Options",
    "children": [
      {
        "name": "peer_asn",
        "type": "integer",
        "description": "BGP ASN of the Route Server Peer"
      },
      {
        "name": "peer_liveness_detection",
        "type": "string",
        "description": "BGP Liveness Detection"
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
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
    "name": "id",
    "type": "string",
    "description": "The ID of the Route Server Peer."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserverpeer.html"><code>AWS::EC2::RouteServerPeer</code></a>.

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
    <td><code>route_server_peers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="RouteServerEndpointId, PeerAddress, BgpOptions, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>route_server_peers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>route_server_peers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>route_server_peers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>route_server_peers</code></td>
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

Gets all properties from an individual <code>route_server_peer</code>.
```sql
SELECT
region,
route_server_id,
route_server_endpoint_id,
arn,
id,
subnet_id,
vpc_id,
endpoint_eni_id,
endpoint_eni_address,
peer_address,
bgp_options,
tags
FROM awscc.ec2.route_server_peers
WHERE region = 'us-east-1' AND Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>route_server_peers</code> in a region.
```sql
SELECT
region,
id
FROM awscc.ec2.route_server_peers_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>route_server_peer</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.route_server_peers (
 RouteServerEndpointId,
 PeerAddress,
 BgpOptions,
 region
)
SELECT
'{{ route_server_endpoint_id }}',
 '{{ peer_address }}',
 '{{ bgp_options }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.route_server_peers (
 RouteServerEndpointId,
 PeerAddress,
 BgpOptions,
 Tags,
 region
)
SELECT
 '{{ route_server_endpoint_id }}',
 '{{ peer_address }}',
 '{{ bgp_options }}',
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
  - name: route_server_peer
    props:
      - name: route_server_endpoint_id
        value: '{{ route_server_endpoint_id }}'
      - name: peer_address
        value: '{{ peer_address }}'
      - name: bgp_options
        value:
          peer_asn: '{{ peer_asn }}'
          peer_liveness_detection: '{{ peer_liveness_detection }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>route_server_peer</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.route_server_peers
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.route_server_peers
WHERE Identifier = '{{ id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>route_server_peers</code> resource, the following permissions are required:

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
ec2:CreateRouteServerPeer,
ec2:CreateTags,
ec2:DescribeRouteServerPeers,
ec2:AuthorizeSecurityGroupIngress
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeRouteServerPeers,
ec2:DescribeTags
```

</TabItem>
<TabItem value="update">

```json
ec2:CreateTags,
ec2:DeleteTags,
ec2:DescribeRouteServerPeers,
ec2:DescribeTags,
ec2:ModifyRouteServerPeer
```

</TabItem>
<TabItem value="delete">

```json
ec2:DescribeTags,
ec2:DescribeRouteServerPeers,
ec2:DeleteRouteServerPeer,
ec2:DeleteTags,
ec2:RevokeSecurityGroupIngress
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeTags,
ec2:DescribeRouteServerPeers
```

</TabItem>
</Tabs>