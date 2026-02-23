---
title: vpc_gateway_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_gateway_attachments
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

Creates, updates, deletes or gets a <code>vpc_gateway_attachment</code> resource or lists <code>vpc_gateway_attachments</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vpc_gateway_attachments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::EC2::VPCGatewayAttachment</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.vpc_gateway_attachments" /></td></tr>
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
    "name": "attachment_type",
    "type": "string",
    "description": "Used to identify if this resource is an Internet Gateway or Vpn Gateway Attachment"
  },
  {
    "name": "internet_gateway_id",
    "type": "string",
    "description": "The ID of the internet gateway. You must specify either InternetGatewayId or VpnGatewayId, but not both."
  },
  {
    "name": "vpc_id",
    "type": "string",
    "description": "The ID of the VPC."
  },
  {
    "name": "vpn_gateway_id",
    "type": "string",
    "description": "The ID of the virtual private gateway. You must specify either InternetGatewayId or VpnGatewayId, but not both."
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
    "name": "attachment_type",
    "type": "string",
    "description": "Used to identify if this resource is an Internet Gateway or Vpn Gateway Attachment"
  },
  {
    "name": "vpc_id",
    "type": "string",
    "description": "The ID of the VPC."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcgatewayattachment.html"><code>AWS::EC2::VPCGatewayAttachment</code></a>.

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
    <td><code>vpc_gateway_attachments</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="VpcId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>vpc_gateway_attachments</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>vpc_gateway_attachments</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>vpc_gateway_attachments_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>vpc_gateway_attachments</code></td>
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

Gets all properties from an individual <code>vpc_gateway_attachment</code>.
```sql
SELECT
region,
attachment_type,
internet_gateway_id,
vpc_id,
vpn_gateway_id
FROM awscc.ec2.vpc_gateway_attachments
WHERE region = 'us-east-1' AND Identifier = '{{ attachment_type }}|{{ vpc_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>vpc_gateway_attachments</code> in a region.
```sql
SELECT
region,
attachment_type,
vpc_id
FROM awscc.ec2.vpc_gateway_attachments_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>vpc_gateway_attachment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.vpc_gateway_attachments (
 VpcId,
 region
)
SELECT
'{{ vpc_id }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.vpc_gateway_attachments (
 InternetGatewayId,
 VpcId,
 VpnGatewayId,
 region
)
SELECT
 '{{ internet_gateway_id }}',
 '{{ vpc_id }}',
 '{{ vpn_gateway_id }}',
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
  - name: vpc_gateway_attachment
    props:
      - name: internet_gateway_id
        value: '{{ internet_gateway_id }}'
      - name: vpc_id
        value: '{{ vpc_id }}'
      - name: vpn_gateway_id
        value: '{{ vpn_gateway_id }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>vpc_gateway_attachment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.vpc_gateway_attachments
SET PatchDocument = string('{{ {
    "InternetGatewayId": internet_gateway_id,
    "VpnGatewayId": vpn_gateway_id
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ attachment_type }}|{{ vpc_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.vpc_gateway_attachments
WHERE Identifier = '{{ attachment_type }}|{{ vpc_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>vpc_gateway_attachments</code> resource, the following permissions are required:

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
ec2:AttachInternetGateway,
ec2:AttachVpnGateway,
ec2:DescribeInternetGateways,
ec2:DescribeVpnGateways
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeInternetGateways,
ec2:DescribeVpnGateways
```

</TabItem>
<TabItem value="update">

```json
ec2:AttachInternetGateway,
ec2:AttachVpnGateway,
ec2:DetachInternetGateway,
ec2:DetachVpnGateway,
ec2:DescribeInternetGateways,
ec2:DescribeVpnGateways
```

</TabItem>
<TabItem value="delete">

```json
ec2:DetachInternetGateway,
ec2:DetachVpnGateway,
ec2:DescribeInternetGateways,
ec2:DescribeVpnGateways
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeInternetGateways,
ec2:DescribeVpnGateways
```

</TabItem>
</Tabs>