---
title: carrier_gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - carrier_gateways
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

Creates, updates, deletes or gets a <code>carrier_gateway</code> resource or lists <code>carrier_gateways</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>carrier_gateways</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for Carrier Gateway which describes the Carrier Gateway resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.carrier_gateways" /></td></tr>
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
    "name": "carrier_gateway_id",
    "type": "string",
    "description": "The ID of the carrier gateway."
  },
  {
    "name": "state",
    "type": "string",
    "description": "The state of the carrier gateway."
  },
  {
    "name": "vpc_id",
    "type": "string",
    "description": "The ID of the VPC."
  },
  {
    "name": "owner_id",
    "type": "string",
    "description": "The ID of the owner."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags for the carrier gateway.",
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
    "name": "carrier_gateway_id",
    "type": "string",
    "description": "The ID of the carrier gateway."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-carriergateway.html"><code>AWS::EC2::CarrierGateway</code></a>.

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
    <td><code>carrier_gateways</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="VpcId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>carrier_gateways</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>carrier_gateways</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>carrier_gateways_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>carrier_gateways</code></td>
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

Gets all properties from an individual <code>carrier_gateway</code>.
```sql
SELECT
region,
carrier_gateway_id,
state,
vpc_id,
owner_id,
tags
FROM awscc.ec2.carrier_gateways
WHERE region = 'us-east-1' AND Identifier = '<CarrierGatewayId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>carrier_gateways</code> in a region.
```sql
SELECT
region,
carrier_gateway_id
FROM awscc.ec2.carrier_gateways_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>carrier_gateway</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.carrier_gateways (
 VpcId,
 region
)
SELECT 
'{{ VpcId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.carrier_gateways (
 VpcId,
 Tags,
 region
)
SELECT 
 '{{ VpcId }}',
 '{{ Tags }}',
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
  - name: carrier_gateway
    props:
      - name: VpcId
        value: '{{ VpcId }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.ec2.carrier_gateways
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<CarrierGatewayId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.carrier_gateways
WHERE Identifier = '<CarrierGatewayId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>carrier_gateways</code> resource, the following permissions are required:

### Create
```json
ec2:CreateCarrierGateway,
ec2:DescribeCarrierGateways,
ec2:CreateTags
```

### Read
```json
ec2:DescribeCarrierGateways,
ec2:DescribeTags
```

### Update
```json
ec2:DescribeCarrierGateways,
ec2:CreateTags,
ec2:DeleteTags,
ec2:DescribeTags
```

### Delete
```json
ec2:DeleteCarrierGateway,
ec2:DescribeCarrierGateways,
ec2:DeleteTags
```

### List
```json
ec2:DescribeCarrierGateways
```
