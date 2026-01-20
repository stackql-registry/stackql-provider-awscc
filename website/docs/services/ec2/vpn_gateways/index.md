---
title: vpn_gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - vpn_gateways
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

Creates, updates, deletes or gets a <code>vpn_gateway</code> resource or lists <code>vpn_gateways</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vpn_gateways</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Specifies a virtual private gateway. A virtual private gateway is the endpoint on the VPC side of your VPN connection. You can create a virtual private gateway before creating the VPC itself.<br />For more information, see &#91;&#93;(https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC&#95;VPN.html) in the &#42;User Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.vpn_gateways" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "v_pn_gateway_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "amazon_side_asn",
    "type": "integer",
    "description": "The private Autonomous System Number (ASN) for the Amazon side of a BGP session."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Any tags assigned to the virtual private gateway.",
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
    "name": "type",
    "type": "string",
    "description": "The type of VPN connection the virtual private gateway supports."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpngateway.html"><code>AWS::EC2::VPNGateway</code></a>.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="create_resource" /></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Type, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>vpn_gateway</code>.
```sql
SELECT
region,
v_pn_gateway_id,
amazon_side_asn,
tags,
type
FROM awscc.ec2.vpn_gateways
WHERE region = 'us-east-1' AND data__Identifier = '<VPNGatewayId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>vpn_gateway</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.vpn_gateways (
 Type,
 region
)
SELECT 
'{{ Type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.vpn_gateways (
 AmazonSideAsn,
 Tags,
 Type,
 region
)
SELECT 
 '{{ AmazonSideAsn }}',
 '{{ Tags }}',
 '{{ Type }}',
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
  - name: vpn_gateway
    props:
      - name: AmazonSideAsn
        value: '{{ AmazonSideAsn }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: Type
        value: '{{ Type }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.vpn_gateways
WHERE data__Identifier = '<VPNGatewayId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>vpn_gateways</code> resource, the following permissions are required:

### Create
```json
ec2:CreateVpnGateway,
ec2:DescribeVpnGateways,
ec2:CreateTags
```

### Read
```json
ec2:DescribeVpnGateways
```

### Update
```json
ec2:DescribeVpnGateways,
ec2:CreateTags,
ec2:DeleteTags
```

### Delete
```json
ec2:DeleteVpnGateway,
ec2:DescribeVpnGateways
```

### List
```json
ec2:DescribeVpnGateways
```
