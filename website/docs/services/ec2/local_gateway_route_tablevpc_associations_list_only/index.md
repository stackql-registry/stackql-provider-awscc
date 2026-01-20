---
title: local_gateway_route_tablevpc_associations_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - local_gateway_route_tablevpc_associations_list_only
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

Lists <code>local_gateway_route_tablevpc_associations</code> in a region or regions, for all properties use <a href="/services/ec2/local_gateway_route_tablevpc_associations/"><code>local_gateway_route_tablevpc_associations</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>local_gateway_route_tablevpc_associations_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for Local Gateway Route Table VPC Association which describes an association between a local gateway route table and a VPC.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.local_gateway_route_tablevpc_associations_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "local_gateway_route_table_vpc_association_id",
    "type": "string",
    "description": "The ID of the association."
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
Lists all <code>local_gateway_route_tablevpc_associations</code> in a region.
```sql
SELECT
region,
local_gateway_route_table_vpc_association_id
FROM awscc.ec2.local_gateway_route_tablevpc_associations_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>local_gateway_route_tablevpc_associations_list_only</code> resource, see <a href="/services/ec2/local_gateway_route_tablevpc_associations/#permissions"><code>local_gateway_route_tablevpc_associations</code></a>

