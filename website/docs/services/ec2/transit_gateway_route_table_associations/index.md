---
title: transit_gateway_route_table_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_route_table_associations
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

Creates, updates, deletes or gets a <code>transit_gateway_route_table_association</code> resource or lists <code>transit_gateway_route_table_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>transit_gateway_route_table_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::EC2::TransitGatewayRouteTableAssociation</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.transit_gateway_route_table_associations" /></td></tr>
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
    "name": "transit_gateway_route_table_id",
    "type": "string",
    "description": "The ID of transit gateway route table."
  },
  {
    "name": "transit_gateway_attachment_id",
    "type": "string",
    "description": "The ID of transit gateway attachment."
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
    "name": "transit_gateway_route_table_id",
    "type": "string",
    "description": "The ID of transit gateway route table."
  },
  {
    "name": "transit_gateway_attachment_id",
    "type": "string",
    "description": "The ID of transit gateway attachment."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetableassociation.html"><code>AWS::EC2::TransitGatewayRouteTableAssociation</code></a>.

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
    <td><code>transit_gateway_route_table_associations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="TransitGatewayRouteTableId, TransitGatewayAttachmentId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>transit_gateway_route_table_associations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>transit_gateway_route_table_associations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>transit_gateway_route_table_associations</code></td>
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

Gets all properties from an individual <code>transit_gateway_route_table_association</code>.
```sql
SELECT
region,
transit_gateway_route_table_id,
transit_gateway_attachment_id
FROM awscc.ec2.transit_gateway_route_table_associations
WHERE region = 'us-east-1' AND Identifier = '{{ transit_gateway_route_table_id }}|{{ transit_gateway_attachment_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>transit_gateway_route_table_associations</code> in a region.
```sql
SELECT
region,
transit_gateway_route_table_id,
transit_gateway_attachment_id
FROM awscc.ec2.transit_gateway_route_table_associations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>transit_gateway_route_table_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.transit_gateway_route_table_associations (
 TransitGatewayRouteTableId,
 TransitGatewayAttachmentId,
 region
)
SELECT
'{{ transit_gateway_route_table_id }}',
 '{{ transit_gateway_attachment_id }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.transit_gateway_route_table_associations (
 TransitGatewayRouteTableId,
 TransitGatewayAttachmentId,
 region
)
SELECT
 '{{ transit_gateway_route_table_id }}',
 '{{ transit_gateway_attachment_id }}',
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
  - name: transit_gateway_route_table_association
    props:
      - name: transit_gateway_route_table_id
        value: '{{ transit_gateway_route_table_id }}'
      - name: transit_gateway_attachment_id
        value: '{{ transit_gateway_attachment_id }}'
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.transit_gateway_route_table_associations
WHERE Identifier = '{{ transit_gateway_route_table_id }}|{{ transit_gateway_attachment_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>transit_gateway_route_table_associations</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="read">

```json
ec2:GetTransitGatewayRouteTableAssociations
```

</TabItem>
<TabItem value="create">

```json
ec2:AssociateTransitGatewayRouteTable,
ec2:GetTransitGatewayRouteTableAssociations
```

</TabItem>
<TabItem value="list">

```json
ec2:GetTransitGatewayRouteTableAssociations
```

</TabItem>
<TabItem value="delete">

```json
ec2:GetTransitGatewayRouteTableAssociations,
ec2:DisassociateTransitGatewayRouteTable
```

</TabItem>
</Tabs>