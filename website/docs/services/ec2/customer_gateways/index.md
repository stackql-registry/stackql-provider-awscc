---
title: customer_gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - customer_gateways
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

Creates, updates, deletes or gets a <code>customer_gateway</code> resource or lists <code>customer_gateways</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>customer_gateways</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Specifies a customer gateway.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.customer_gateways" /></td></tr>
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
    "name": "type",
    "type": "string",
    "description": "The type of VPN connection that this customer gateway supports (&#96;&#96;ipsec.1&#96;&#96;)."
  },
  {
    "name": "customer_gateway_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "ip_address",
    "type": "string",
    "description": "The IP address for the customer gateway device's outside interface. The address must be static. If &#96;&#96;OutsideIpAddressType&#96;&#96; in your VPN connection options is set to &#96;&#96;PrivateIpv4&#96;&#96;, you can use an RFC6598 or RFC1918 private IPv4 address. If &#96;&#96;OutsideIpAddressType&#96;&#96; is set to &#96;&#96;Ipv6&#96;&#96;, you can use an IPv6 address."
  },
  {
    "name": "bgp_asn_extended",
    "type": "number",
    "description": "For customer gateway devices that support BGP, specify the device's ASN. You must specify either &#96;&#96;BgpAsn&#96;&#96; or &#96;&#96;BgpAsnExtended&#96;&#96; when creating the customer gateway. If the ASN is larger than &#96;&#96;2,147,483,647&#96;&#96;, you must use &#96;&#96;BgpAsnExtended&#96;&#96;.<br />Valid values: &#96;&#96;2,147,483,648&#96;&#96; to &#96;&#96;4,294,967,295&#96;&#96;"
  },
  {
    "name": "bgp_asn",
    "type": "integer",
    "description": "For customer gateway devices that support BGP, specify the device's ASN. You must specify either &#96;&#96;BgpAsn&#96;&#96; or &#96;&#96;BgpAsnExtended&#96;&#96; when creating the customer gateway. If the ASN is larger than &#96;&#96;2,147,483,647&#96;&#96;, you must use &#96;&#96;BgpAsnExtended&#96;&#96;.<br />Default: 65000<br />Valid values: &#96;&#96;1&#96;&#96; to &#96;&#96;2,147,483,647&#96;&#96;"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "One or more tags for the customer gateway.",
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
    "name": "certificate_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the customer gateway certificate."
  },
  {
    "name": "device_name",
    "type": "string",
    "description": "The name of customer gateway device."
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
    "name": "customer_gateway_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customergateway.html"><code>AWS::EC2::CustomerGateway</code></a>.

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
    <td><code>customer_gateways</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="IpAddress, Type, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>customer_gateways</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>customer_gateways</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>customer_gateways_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>customer_gateways</code></td>
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

Gets all properties from an individual <code>customer_gateway</code>.
```sql
SELECT
region,
type,
customer_gateway_id,
ip_address,
bgp_asn_extended,
bgp_asn,
tags,
certificate_arn,
device_name
FROM awscc.ec2.customer_gateways
WHERE region = 'us-east-1' AND Identifier = '<CustomerGatewayId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>customer_gateways</code> in a region.
```sql
SELECT
region,
customer_gateway_id
FROM awscc.ec2.customer_gateways_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>customer_gateway</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.customer_gateways (
 Type,
 IpAddress,
 region
)
SELECT 
'{{ Type }}',
 '{{ IpAddress }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.customer_gateways (
 Type,
 IpAddress,
 BgpAsnExtended,
 BgpAsn,
 Tags,
 CertificateArn,
 DeviceName,
 region
)
SELECT 
 '{{ Type }}',
 '{{ IpAddress }}',
 '{{ BgpAsnExtended }}',
 '{{ BgpAsn }}',
 '{{ Tags }}',
 '{{ CertificateArn }}',
 '{{ DeviceName }}',
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
  - name: customer_gateway
    props:
      - name: Type
        value: '{{ Type }}'
      - name: IpAddress
        value: '{{ IpAddress }}'
      - name: BgpAsnExtended
        value: null
      - name: BgpAsn
        value: '{{ BgpAsn }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: CertificateArn
        value: '{{ CertificateArn }}'
      - name: DeviceName
        value: '{{ DeviceName }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.ec2.customer_gateways
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<CustomerGatewayId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.customer_gateways
WHERE Identifier = '<CustomerGatewayId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>customer_gateways</code> resource, the following permissions are required:

### Read
```json
ec2:DescribeCustomerGateways
```

### Create
```json
ec2:CreateCustomerGateway,
ec2:DescribeCustomerGateways,
ec2:CreateTags
```

### Update
```json
ec2:CreateTags,
ec2:DeleteTags,
ec2:DescribeCustomerGateways
```

### List
```json
ec2:DescribeCustomerGateways
```

### Delete
```json
ec2:DeleteCustomerGateway,
ec2:DescribeCustomerGateways
```
