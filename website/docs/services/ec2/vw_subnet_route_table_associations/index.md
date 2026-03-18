---
title: vw_subnet_route_table_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - vw_subnet_route_table_associations
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

Custom view of <code>subnet_route_table_associations</code> resources in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vw_subnet_route_table_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>vw_subnet_route_table_associations</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.vw_subnet_route_table_associations" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "route_table_id",
    "type": "string",
    "description": "The ID of the route table associated with the subnet."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The unique identifier for the subnet route table association."
  },
  {
    "name": "subnet_id",
    "type": "string",
    "description": "The ID of the subnet."
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
    <td><CopyableCode code="view" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples
Lists all <code>vw_subnet_route_table_associations</code> in a region.
```sql
SELECT
  region,
  route_table_id,
  id,
  subnet_id
FROM awscc.ec2.vw_subnet_route_table_associations
WHERE
  region = '{{ region }}';
```






