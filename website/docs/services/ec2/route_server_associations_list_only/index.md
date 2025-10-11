---
title: route_server_associations_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - route_server_associations_list_only
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

Lists <code>route_server_associations</code> in a region or regions, for all properties use <a href="/services/ec2/route_server_associations/"><code>route_server_associations</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>route_server_associations_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>VPC Route Server Association</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.route_server_associations_list_only" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="route_server_id" /></td><td><code>string</code></td><td>Route Server ID</td></tr>
<tr><td><CopyableCode code="vpc_id" /></td><td><code>string</code></td><td>VPC ID</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

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
Lists all <code>route_server_associations</code> in a region.
```sql
SELECT
region,
route_server_id,
vpc_id
FROM awscc.ec2.route_server_associations_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>route_server_associations_list_only</code> resource, see <a href="/services/ec2/route_server_associations/#permissions"><code>route_server_associations</code></a>

