---
title: transit_gateway_route_tables
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_route_tables
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

Creates, updates, deletes or gets a <code>transit_gateway_route_table</code> resource or lists <code>transit_gateway_route_tables</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>transit_gateway_route_tables</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::EC2::TransitGatewayRouteTable</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.transit_gateway_route_tables" /></td></tr>
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
    "description": "Transit Gateway Route Table primary identifier"
  },
  {
    "name": "transit_gateway_id",
    "type": "string",
    "description": "The ID of the transit gateway."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags are composed of a Key/Value pair. You can use tags to categorize and track each parameter group. The tag value null is permitted.",
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
    "name": "transit_gateway_route_table_id",
    "type": "string",
    "description": "Transit Gateway Route Table primary identifier"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetable.html"><code>AWS::EC2::TransitGatewayRouteTable</code></a>.

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
    <td><code>transit_gateway_route_tables</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="TransitGatewayId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>transit_gateway_route_tables</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>transit_gateway_route_tables</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>transit_gateway_route_tables_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>transit_gateway_route_tables</code></td>
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

Gets all properties from an individual <code>transit_gateway_route_table</code>.
```sql
SELECT
region,
transit_gateway_route_table_id,
transit_gateway_id,
tags
FROM awscc.ec2.transit_gateway_route_tables
WHERE region = 'us-east-1' AND Identifier = '<TransitGatewayRouteTableId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>transit_gateway_route_tables</code> in a region.
```sql
SELECT
region,
transit_gateway_route_table_id
FROM awscc.ec2.transit_gateway_route_tables_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>transit_gateway_route_table</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.transit_gateway_route_tables (
 TransitGatewayId,
 region
)
SELECT 
'{{ TransitGatewayId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.transit_gateway_route_tables (
 TransitGatewayId,
 Tags,
 region
)
SELECT 
 '{{ TransitGatewayId }}',
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
  - name: transit_gateway_route_table
    props:
      - name: TransitGatewayId
        value: '{{ TransitGatewayId }}'
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
UPDATE awscc.ec2.transit_gateway_route_tables
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<TransitGatewayRouteTableId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.transit_gateway_route_tables
WHERE Identifier = '<TransitGatewayRouteTableId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>transit_gateway_route_tables</code> resource, the following permissions are required:

### Read
```json
ec2:DescribeTransitGatewayRouteTables
```

### Create
```json
ec2:CreateTransitGatewayRouteTable,
ec2:CreateTags,
ec2:DescribeTransitGatewayRouteTables
```

### Update
```json
ec2:DescribeTransitGatewayRouteTables,
ec2:CreateTags,
ec2:DeleteTags
```

### List
```json
ec2:DescribeTransitGatewayRouteTables
```

### Delete
```json
ec2:DeleteTransitGatewayRouteTable,
ec2:DescribeTransitGatewayRouteTables,
ec2:GetTransitGatewayRouteTableAssociations,
ec2:DisassociateTransitGatewayRouteTable
```
