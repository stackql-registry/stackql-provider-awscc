---
title: transit_gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateways
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

Creates, updates, deletes or gets a <code>transit_gateway</code> resource or lists <code>transit_gateways</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>transit_gateways</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::EC2::TransitGateway</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.transit_gateways" /></td></tr>
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
    "name": "default_route_table_propagation",
    "type": "string",
    "description": ""
  },
  {
    "name": "transit_gateway_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "auto_accept_shared_attachments",
    "type": "string",
    "description": ""
  },
  {
    "name": "default_route_table_association",
    "type": "string",
    "description": ""
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "vpn_ecmp_support",
    "type": "string",
    "description": ""
  },
  {
    "name": "dns_support",
    "type": "string",
    "description": ""
  },
  {
    "name": "security_group_referencing_support",
    "type": "string",
    "description": ""
  },
  {
    "name": "multicast_support",
    "type": "string",
    "description": ""
  },
  {
    "name": "amazon_side_asn",
    "type": "integer",
    "description": ""
  },
  {
    "name": "transit_gateway_cidr_blocks",
    "type": "array",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
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
    "name": "association_default_route_table_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "propagation_default_route_table_id",
    "type": "string",
    "description": ""
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
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgateway.html"><code>AWS::EC2::TransitGateway</code></a>.

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
    <td><code>transit_gateways</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>transit_gateways</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>transit_gateways</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>transit_gateways_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>transit_gateways</code></td>
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

Gets all properties from an individual <code>transit_gateway</code>.
```sql
SELECT
region,
default_route_table_propagation,
transit_gateway_arn,
description,
auto_accept_shared_attachments,
default_route_table_association,
id,
vpn_ecmp_support,
dns_support,
security_group_referencing_support,
multicast_support,
amazon_side_asn,
transit_gateway_cidr_blocks,
tags,
association_default_route_table_id,
propagation_default_route_table_id
FROM awscc.ec2.transit_gateways
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>transit_gateways</code> in a region.
```sql
SELECT
region,
id
FROM awscc.ec2.transit_gateways_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>transit_gateway</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.transit_gateways (
 DefaultRouteTablePropagation,
 Description,
 AutoAcceptSharedAttachments,
 DefaultRouteTableAssociation,
 VpnEcmpSupport,
 DnsSupport,
 SecurityGroupReferencingSupport,
 MulticastSupport,
 AmazonSideAsn,
 TransitGatewayCidrBlocks,
 Tags,
 AssociationDefaultRouteTableId,
 PropagationDefaultRouteTableId,
 region
)
SELECT 
'{{ DefaultRouteTablePropagation }}',
 '{{ Description }}',
 '{{ AutoAcceptSharedAttachments }}',
 '{{ DefaultRouteTableAssociation }}',
 '{{ VpnEcmpSupport }}',
 '{{ DnsSupport }}',
 '{{ SecurityGroupReferencingSupport }}',
 '{{ MulticastSupport }}',
 '{{ AmazonSideAsn }}',
 '{{ TransitGatewayCidrBlocks }}',
 '{{ Tags }}',
 '{{ AssociationDefaultRouteTableId }}',
 '{{ PropagationDefaultRouteTableId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.transit_gateways (
 DefaultRouteTablePropagation,
 Description,
 AutoAcceptSharedAttachments,
 DefaultRouteTableAssociation,
 VpnEcmpSupport,
 DnsSupport,
 SecurityGroupReferencingSupport,
 MulticastSupport,
 AmazonSideAsn,
 TransitGatewayCidrBlocks,
 Tags,
 AssociationDefaultRouteTableId,
 PropagationDefaultRouteTableId,
 region
)
SELECT 
 '{{ DefaultRouteTablePropagation }}',
 '{{ Description }}',
 '{{ AutoAcceptSharedAttachments }}',
 '{{ DefaultRouteTableAssociation }}',
 '{{ VpnEcmpSupport }}',
 '{{ DnsSupport }}',
 '{{ SecurityGroupReferencingSupport }}',
 '{{ MulticastSupport }}',
 '{{ AmazonSideAsn }}',
 '{{ TransitGatewayCidrBlocks }}',
 '{{ Tags }}',
 '{{ AssociationDefaultRouteTableId }}',
 '{{ PropagationDefaultRouteTableId }}',
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
  - name: transit_gateway
    props:
      - name: DefaultRouteTablePropagation
        value: '{{ DefaultRouteTablePropagation }}'
      - name: Description
        value: '{{ Description }}'
      - name: AutoAcceptSharedAttachments
        value: '{{ AutoAcceptSharedAttachments }}'
      - name: DefaultRouteTableAssociation
        value: '{{ DefaultRouteTableAssociation }}'
      - name: VpnEcmpSupport
        value: '{{ VpnEcmpSupport }}'
      - name: DnsSupport
        value: '{{ DnsSupport }}'
      - name: SecurityGroupReferencingSupport
        value: '{{ SecurityGroupReferencingSupport }}'
      - name: MulticastSupport
        value: '{{ MulticastSupport }}'
      - name: AmazonSideAsn
        value: '{{ AmazonSideAsn }}'
      - name: TransitGatewayCidrBlocks
        value:
          - '{{ TransitGatewayCidrBlocks[0] }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: AssociationDefaultRouteTableId
        value: '{{ AssociationDefaultRouteTableId }}'
      - name: PropagationDefaultRouteTableId
        value: '{{ PropagationDefaultRouteTableId }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.ec2.transit_gateways
SET data__PatchDocument = string('{{ {
    "DefaultRouteTablePropagation": default_route_table_propagation,
    "Description": description,
    "AutoAcceptSharedAttachments": auto_accept_shared_attachments,
    "DefaultRouteTableAssociation": default_route_table_association,
    "VpnEcmpSupport": vpn_ecmp_support,
    "DnsSupport": dns_support,
    "SecurityGroupReferencingSupport": security_group_referencing_support,
    "TransitGatewayCidrBlocks": transit_gateway_cidr_blocks,
    "Tags": tags,
    "AssociationDefaultRouteTableId": association_default_route_table_id,
    "PropagationDefaultRouteTableId": propagation_default_route_table_id
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.transit_gateways
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>transit_gateways</code> resource, the following permissions are required:

### Create
```json
ec2:CreateTransitGateway,
ec2:CreateTags,
ec2:DescribeTransitGateways,
ec2:DescribeTags
```

### Read
```json
ec2:DescribeTransitGateways,
ec2:DescribeTags
```

### Delete
```json
ec2:DescribeTransitGateways,
ec2:DescribeTags,
ec2:DeleteTransitGateway,
ec2:DeleteTags
```

### Update
```json
ec2:CreateTransitGateway,
ec2:CreateTags,
ec2:DescribeTransitGateways,
ec2:DescribeTags,
ec2:DeleteTransitGateway,
ec2:DeleteTags,
ec2:ModifyTransitGateway,
ec2:ModifyTransitGatewayOptions
```

### List
```json
ec2:DescribeTransitGateways,
ec2:DescribeTags
```
