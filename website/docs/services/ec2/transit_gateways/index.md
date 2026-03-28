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

import CodeBlock from '@theme/CodeBlock';
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
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>transit_gateways</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>transit_gateways</code> in a region.
```sql
SELECT
  region,
  id
FROM awscc.ec2.transit_gateways_list_only
WHERE
  region = '{{ region }}';
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
  '{{ default_route_table_propagation }}',
  '{{ description }}',
  '{{ auto_accept_shared_attachments }}',
  '{{ default_route_table_association }}',
  '{{ vpn_ecmp_support }}',
  '{{ dns_support }}',
  '{{ security_group_referencing_support }}',
  '{{ multicast_support }}',
  '{{ amazon_side_asn }}',
  '{{ transit_gateway_cidr_blocks }}',
  '{{ tags }}',
  '{{ association_default_route_table_id }}',
  '{{ propagation_default_route_table_id }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
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
  '{{ default_route_table_propagation }}',
  '{{ description }}',
  '{{ auto_accept_shared_attachments }}',
  '{{ default_route_table_association }}',
  '{{ vpn_ecmp_support }}',
  '{{ dns_support }}',
  '{{ security_group_referencing_support }}',
  '{{ multicast_support }}',
  '{{ amazon_side_asn }}',
  '{{ transit_gateway_cidr_blocks }}',
  '{{ tags }}',
  '{{ association_default_route_table_id }}',
  '{{ propagation_default_route_table_id }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`version: 1
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
      - name: default_route_table_propagation
        value: '{{ default_route_table_propagation }}'
      - name: description
        value: '{{ description }}'
      - name: auto_accept_shared_attachments
        value: '{{ auto_accept_shared_attachments }}'
      - name: default_route_table_association
        value: '{{ default_route_table_association }}'
      - name: vpn_ecmp_support
        value: '{{ vpn_ecmp_support }}'
      - name: dns_support
        value: '{{ dns_support }}'
      - name: security_group_referencing_support
        value: '{{ security_group_referencing_support }}'
      - name: multicast_support
        value: '{{ multicast_support }}'
      - name: amazon_side_asn
        value: '{{ amazon_side_asn }}'
      - name: transit_gateway_cidr_blocks
        value:
          - '{{ transit_gateway_cidr_blocks[0] }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: association_default_route_table_id
        value: '{{ association_default_route_table_id }}'
      - name: propagation_default_route_table_id
        value: '{{ propagation_default_route_table_id }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>transit_gateway</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.transit_gateways
SET PatchDocument = string('{{ {
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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ id }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.transit_gateways
WHERE
  Identifier = '{{ id }}' AND
  region = '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

## Permissions

To operate on the <code>transit_gateways</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
ec2:CreateTransitGateway,
ec2:CreateTags,
ec2:DescribeTransitGateways,
ec2:DescribeTags
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeTransitGateways,
ec2:DescribeTags
```

</TabItem>
<TabItem value="delete">

```json
ec2:DescribeTransitGateways,
ec2:DescribeTags,
ec2:DeleteTransitGateway,
ec2:DeleteTags
```

</TabItem>
<TabItem value="update">

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

</TabItem>
<TabItem value="list">

```json
ec2:DescribeTransitGateways,
ec2:DescribeTags
```

</TabItem>
</Tabs>