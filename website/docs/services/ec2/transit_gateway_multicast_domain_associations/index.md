---
title: transit_gateway_multicast_domain_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_multicast_domain_associations
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

Creates, updates, deletes or gets a <code>transit_gateway_multicast_domain_association</code> resource or lists <code>transit_gateway_multicast_domain_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>transit_gateway_multicast_domain_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::EC2::TransitGatewayMulticastDomainAssociation type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.transit_gateway_multicast_domain_associations" /></td></tr>
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
    "name": "transit_gateway_multicast_domain_id",
    "type": "string",
    "description": "The ID of the transit gateway multicast domain."
  },
  {
    "name": "transit_gateway_attachment_id",
    "type": "string",
    "description": "The ID of the transit gateway attachment."
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
    "name": "state",
    "type": "string",
    "description": "The state of the subnet association."
  },
  {
    "name": "subnet_id",
    "type": "string",
    "description": "The IDs of the subnets to associate with the transit gateway multicast domain."
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
    "name": "transit_gateway_multicast_domain_id",
    "type": "string",
    "description": "The ID of the transit gateway multicast domain."
  },
  {
    "name": "transit_gateway_attachment_id",
    "type": "string",
    "description": "The ID of the transit gateway attachment."
  },
  {
    "name": "subnet_id",
    "type": "string",
    "description": "The IDs of the subnets to associate with the transit gateway multicast domain."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomainassociation.html"><code>AWS::EC2::TransitGatewayMulticastDomainAssociation</code></a>.

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
    <td><code>transit_gateway_multicast_domain_associations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="TransitGatewayMulticastDomainId, TransitGatewayAttachmentId, SubnetId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>transit_gateway_multicast_domain_associations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>transit_gateway_multicast_domain_associations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>transit_gateway_multicast_domain_associations</code></td>
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

Gets all properties from an individual <code>transit_gateway_multicast_domain_association</code>.
```sql
SELECT
region,
transit_gateway_multicast_domain_id,
transit_gateway_attachment_id,
resource_id,
resource_type,
state,
subnet_id
FROM awscc.ec2.transit_gateway_multicast_domain_associations
WHERE region = 'us-east-1' AND data__Identifier = '<TransitGatewayMulticastDomainId>|<TransitGatewayAttachmentId>|<SubnetId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>transit_gateway_multicast_domain_associations</code> in a region.
```sql
SELECT
region,
transit_gateway_multicast_domain_id,
transit_gateway_attachment_id,
subnet_id
FROM awscc.ec2.transit_gateway_multicast_domain_associations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>transit_gateway_multicast_domain_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.transit_gateway_multicast_domain_associations (
 TransitGatewayMulticastDomainId,
 TransitGatewayAttachmentId,
 SubnetId,
 region
)
SELECT 
'{{ TransitGatewayMulticastDomainId }}',
 '{{ TransitGatewayAttachmentId }}',
 '{{ SubnetId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.transit_gateway_multicast_domain_associations (
 TransitGatewayMulticastDomainId,
 TransitGatewayAttachmentId,
 SubnetId,
 region
)
SELECT 
 '{{ TransitGatewayMulticastDomainId }}',
 '{{ TransitGatewayAttachmentId }}',
 '{{ SubnetId }}',
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
  - name: transit_gateway_multicast_domain_association
    props:
      - name: TransitGatewayMulticastDomainId
        value: '{{ TransitGatewayMulticastDomainId }}'
      - name: TransitGatewayAttachmentId
        value: '{{ TransitGatewayAttachmentId }}'
      - name: SubnetId
        value: '{{ SubnetId }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.transit_gateway_multicast_domain_associations
WHERE data__Identifier = '<TransitGatewayMulticastDomainId|TransitGatewayAttachmentId|SubnetId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>transit_gateway_multicast_domain_associations</code> resource, the following permissions are required:

### Create
```json
ec2:AssociateTransitGatewayMulticastDomain,
ec2:GetTransitGatewayMulticastDomainAssociations
```

### Read
```json
ec2:GetTransitGatewayMulticastDomainAssociations
```

### Delete
```json
ec2:DisassociateTransitGatewayMulticastDomain,
ec2:GetTransitGatewayMulticastDomainAssociations
```

### List
```json
ec2:GetTransitGatewayMulticastDomainAssociations
```
