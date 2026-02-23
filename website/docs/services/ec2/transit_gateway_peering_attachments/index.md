---
title: transit_gateway_peering_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_peering_attachments
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

Creates, updates, deletes or gets a <code>transit_gateway_peering_attachment</code> resource or lists <code>transit_gateway_peering_attachments</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>transit_gateway_peering_attachments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::EC2::TransitGatewayPeeringAttachment type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.transit_gateway_peering_attachments" /></td></tr>
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
    "name": "status",
    "type": "object",
    "description": "The status of the transit gateway peering attachment.",
    "children": [
      {
        "name": "message",
        "type": "string",
        "description": "The status message, if applicable."
      },
      {
        "name": "code",
        "type": "string",
        "description": "The status code."
      }
    ]
  },
  {
    "name": "transit_gateway_id",
    "type": "string",
    "description": "The ID of the transit gateway."
  },
  {
    "name": "peer_transit_gateway_id",
    "type": "string",
    "description": "The ID of the peer transit gateway."
  },
  {
    "name": "peer_account_id",
    "type": "string",
    "description": "The ID of the peer account"
  },
  {
    "name": "state",
    "type": "string",
    "description": "The state of the transit gateway peering attachment. Note that the initiating state has been deprecated."
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": "The time the transit gateway peering attachment was created."
  },
  {
    "name": "peer_region",
    "type": "string",
    "description": "Peer Region"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags for the transit gateway peering attachment.",
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
    "name": "transit_gateway_attachment_id",
    "type": "string",
    "description": "The ID of the transit gateway peering attachment."
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
    "name": "transit_gateway_attachment_id",
    "type": "string",
    "description": "The ID of the transit gateway peering attachment."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaypeeringattachment.html"><code>AWS::EC2::TransitGatewayPeeringAttachment</code></a>.

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
    <td><code>transit_gateway_peering_attachments</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="TransitGatewayId, PeerTransitGatewayId, PeerAccountId, PeerRegion, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>transit_gateway_peering_attachments</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>transit_gateway_peering_attachments</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>transit_gateway_peering_attachments_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>transit_gateway_peering_attachments</code></td>
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

Gets all properties from an individual <code>transit_gateway_peering_attachment</code>.
```sql
SELECT
region,
status,
transit_gateway_id,
peer_transit_gateway_id,
peer_account_id,
state,
creation_time,
peer_region,
tags,
transit_gateway_attachment_id
FROM awscc.ec2.transit_gateway_peering_attachments
WHERE region = 'us-east-1' AND Identifier = '{{ transit_gateway_attachment_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>transit_gateway_peering_attachments</code> in a region.
```sql
SELECT
region,
transit_gateway_attachment_id
FROM awscc.ec2.transit_gateway_peering_attachments_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>transit_gateway_peering_attachment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.transit_gateway_peering_attachments (
 TransitGatewayId,
 PeerTransitGatewayId,
 PeerAccountId,
 PeerRegion,
 region
)
SELECT
'{{ transit_gateway_id }}',
 '{{ peer_transit_gateway_id }}',
 '{{ peer_account_id }}',
 '{{ peer_region }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.transit_gateway_peering_attachments (
 TransitGatewayId,
 PeerTransitGatewayId,
 PeerAccountId,
 PeerRegion,
 Tags,
 region
)
SELECT
 '{{ transit_gateway_id }}',
 '{{ peer_transit_gateway_id }}',
 '{{ peer_account_id }}',
 '{{ peer_region }}',
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
  - name: transit_gateway_peering_attachment
    props:
      - name: transit_gateway_id
        value: '{{ transit_gateway_id }}'
      - name: peer_transit_gateway_id
        value: '{{ peer_transit_gateway_id }}'
      - name: peer_account_id
        value: '{{ peer_account_id }}'
      - name: peer_region
        value: '{{ peer_region }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>transit_gateway_peering_attachment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.transit_gateway_peering_attachments
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ transit_gateway_attachment_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.transit_gateway_peering_attachments
WHERE Identifier = '{{ transit_gateway_attachment_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>transit_gateway_peering_attachments</code> resource, the following permissions are required:

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
ec2:DescribeTransitGatewayPeeringAttachments,
ec2:DescribeTags
```

</TabItem>
<TabItem value="create">

```json
ec2:CreateTransitGatewayPeeringAttachment,
ec2:DescribeTransitGatewayPeeringAttachments,
ec2:CreateTags,
ec2:DescribeTags
```

</TabItem>
<TabItem value="update">

```json
ec2:DescribeTransitGatewayPeeringAttachments,
ec2:CreateTags,
ec2:DeleteTags,
ec2:DescribeTags
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeTransitGatewayPeeringAttachments,
ec2:DescribeTags
```

</TabItem>
<TabItem value="delete">

```json
ec2:DeleteTransitGatewayPeeringAttachment,
ec2:DescribeTransitGatewayPeeringAttachments,
ec2:DeleteTags,
ec2:DescribeTags
```

</TabItem>
</Tabs>