---
title: ip_pool_route_table_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - ip_pool_route_table_associations
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

Creates, updates, deletes or gets an <code>ip_pool_route_table_association</code> resource or lists <code>ip_pool_route_table_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>ip_pool_route_table_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::EC2::IpPoolRouteTableAssociation</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.ip_pool_route_table_associations" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "association_id",
    "type": "string",
    "description": "The route table association ID."
  },
  {
    "name": "public_ipv4_pool",
    "type": "string",
    "description": "The ID of the public IPv4 pool."
  },
  {
    "name": "route_table_id",
    "type": "string",
    "description": "The ID of the route table."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ippoolroutetableassociation.html"><code>AWS::EC2::IpPoolRouteTableAssociation</code></a>.

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
    <td><CopyableCode code="PublicIpv4Pool, RouteTableId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>ip_pool_route_table_association</code>.
```sql
SELECT
region,
association_id,
public_ipv4_pool,
route_table_id
FROM awscc.ec2.ip_pool_route_table_associations
WHERE region = 'us-east-1' AND data__Identifier = '<AssociationId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>ip_pool_route_table_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.ip_pool_route_table_associations (
 PublicIpv4Pool,
 RouteTableId,
 region
)
SELECT 
'{{ PublicIpv4Pool }}',
 '{{ RouteTableId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.ip_pool_route_table_associations (
 PublicIpv4Pool,
 RouteTableId,
 region
)
SELECT 
 '{{ PublicIpv4Pool }}',
 '{{ RouteTableId }}',
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
  - name: ip_pool_route_table_association
    props:
      - name: PublicIpv4Pool
        value: '{{ PublicIpv4Pool }}'
      - name: RouteTableId
        value: '{{ RouteTableId }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.ip_pool_route_table_associations
WHERE data__Identifier = '<AssociationId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>ip_pool_route_table_associations</code> resource, the following permissions are required:

### Create
```json
ec2:AssociateRouteTable,
ec2:DescribeRouteTables
```

### Read
```json
ec2:DescribeRouteTables
```

### Delete
```json
ec2:DisassociateRouteTable,
ec2:DescribeRouteTables
```

### List
```json
ec2:DescribeRouteTables
```
