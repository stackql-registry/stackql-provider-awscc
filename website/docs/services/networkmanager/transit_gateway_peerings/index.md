---
title: transit_gateway_peerings
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_peerings
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

Creates, updates, deletes or gets a <code>transit_gateway_peering</code> resource or lists <code>transit_gateway_peerings</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>transit_gateway_peerings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>AWS::NetworkManager::TransitGatewayPeering Resoruce Type.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.networkmanager.transit_gateway_peerings" /></td></tr>
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
    "name": "core_network_id",
    "type": "string",
    "description": "The Id of the core network that you want to peer a transit gateway to."
  },
  {
    "name": "core_network_arn",
    "type": "string",
    "description": "The ARN (Amazon Resource Name) of the core network that you want to peer a transit gateway to."
  },
  {
    "name": "transit_gateway_arn",
    "type": "string",
    "description": "The ARN (Amazon Resource Name) of the transit gateway that you will peer to a core network"
  },
  {
    "name": "transit_gateway_peering_attachment_id",
    "type": "string",
    "description": "The ID of the TransitGatewayPeeringAttachment"
  },
  {
    "name": "peering_id",
    "type": "string",
    "description": "The Id of the transit gateway peering"
  },
  {
    "name": "state",
    "type": "string",
    "description": "The state of the transit gateway peering"
  },
  {
    "name": "edge_location",
    "type": "string",
    "description": "The location of the transit gateway peering"
  },
  {
    "name": "resource_arn",
    "type": "string",
    "description": "The ARN (Amazon Resource Name) of the resource that you will peer to a core network"
  },
  {
    "name": "owner_account_id",
    "type": "string",
    "description": "Peering owner account Id"
  },
  {
    "name": "peering_type",
    "type": "string",
    "description": "Peering type (TransitGatewayPeering)"
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The creation time of the transit gateway peering"
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
    "name": "peering_id",
    "type": "string",
    "description": "The Id of the transit gateway peering"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewaypeering.html"><code>AWS::NetworkManager::TransitGatewayPeering</code></a>.

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
    <td><code>transit_gateway_peerings</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="CoreNetworkId, TransitGatewayArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>transit_gateway_peerings</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>transit_gateway_peerings</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>transit_gateway_peerings_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>transit_gateway_peerings</code></td>
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

Gets all properties from an individual <code>transit_gateway_peering</code>.
```sql
SELECT
region,
core_network_id,
core_network_arn,
transit_gateway_arn,
transit_gateway_peering_attachment_id,
peering_id,
state,
edge_location,
resource_arn,
owner_account_id,
peering_type,
created_at,
tags
FROM awscc.networkmanager.transit_gateway_peerings
WHERE region = 'us-east-1' AND Identifier = '{{ peering_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>transit_gateway_peerings</code> in a region.
```sql
SELECT
region,
peering_id
FROM awscc.networkmanager.transit_gateway_peerings_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>transit_gateway_peering</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.networkmanager.transit_gateway_peerings (
 CoreNetworkId,
 TransitGatewayArn,
 region
)
SELECT
'{{ core_network_id }}',
 '{{ transit_gateway_arn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.networkmanager.transit_gateway_peerings (
 CoreNetworkId,
 TransitGatewayArn,
 Tags,
 region
)
SELECT
 '{{ core_network_id }}',
 '{{ transit_gateway_arn }}',
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
  - name: transit_gateway_peering
    props:
      - name: core_network_id
        value: '{{ core_network_id }}'
      - name: transit_gateway_arn
        value: '{{ transit_gateway_arn }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>transit_gateway_peering</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.networkmanager.transit_gateway_peerings
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ peering_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.networkmanager.transit_gateway_peerings
WHERE Identifier = '{{ peering_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>transit_gateway_peerings</code> resource, the following permissions are required:

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
networkmanager:CreateTransitGatewayPeering,
networkmanager:TagResource,
networkmanager:GetTransitGatewayPeering,
iam:CreateServiceLinkedRole,
ec2:CreateTransitGatewayPeeringAttachment,
ec2:AcceptTransitGatewayPeeringAttachment,
ec2:DescribeRegions
```

</TabItem>
<TabItem value="read">

```json
networkmanager:GetTransitGatewayPeering
```

</TabItem>
<TabItem value="update">

```json
networkmanager:TagResource,
networkmanager:UntagResource,
networkmanager:ListTagsForResource,
networkmanager:GetTransitGatewayPeering,
ec2:DescribeRegions
```

</TabItem>
<TabItem value="delete">

```json
networkmanager:DeletePeering,
networkmanager:GetTransitGatewayPeering,
ec2:DescribeRegions
```

</TabItem>
<TabItem value="list">

```json
networkmanager:ListPeerings
```

</TabItem>
</Tabs>