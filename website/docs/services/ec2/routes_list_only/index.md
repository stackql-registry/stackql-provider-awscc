---
title: routes_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - routes_list_only
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

Lists <code>routes</code> in a region or regions, for all properties use <a href="/services/ec2/routes/"><code>routes</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>routes_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Specifies a route in a route table. For more information, see &#91;Routes&#93;(https://docs.aws.amazon.com/vpc/latest/userguide/VPC&#95;Route&#95;Tables.html#route-table-routes) in the &#42;Amazon VPC User Guide&#42;.<br />You must specify either a destination CIDR block or prefix list ID. You must also specify exactly one of the resources as the target.<br />If you create a route that references a transit gateway in the same template where you create the transit gateway, you must declare a dependency on the transit gateway attachment. The route table cannot use the transit gateway until it has successfully attached to the VPC. Add a &#91;DependsOn Attribute&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) in the &#96;&#96;AWS::EC2::Route&#96;&#96; resource to explicitly declare a dependency on the &#96;&#96;AWS::EC2::TransitGatewayAttachment&#96;&#96; resource.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.routes_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "cidr_block",
    "type": "string",
    "description": ""
  },
  {
    "name": "route_table_id",
    "type": "string",
    "description": "The ID of the route table for the route."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples
Lists all <code>routes</code> in a region.
```sql
SELECT
region,
route_table_id,
cidr_block
FROM awscc.ec2.routes_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>routes_list_only</code> resource, see <a href="/services/ec2/routes/#permissions"><code>routes</code></a>

