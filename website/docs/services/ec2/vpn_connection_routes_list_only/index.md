---
title: vpn_connection_routes_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - vpn_connection_routes_list_only
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

Lists <code>vpn_connection_routes</code> in a region or regions, for all properties use <a href="/services/ec2/vpn_connection_routes/"><code>vpn_connection_routes</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vpn_connection_routes_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Specifies a static route for a VPN connection between an existing virtual private gateway and a VPN customer gateway. The static route allows traffic to be routed from the virtual private gateway to the VPN customer gateway.<br />For more information, see &#91;&#93;(https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC&#95;VPN.html) in the &#42;User Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.vpn_connection_routes_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "destination_cidr_block",
    "type": "string",
    "description": "The CIDR block associated with the local subnet of the customer network."
  },
  {
    "name": "vpn_connection_id",
    "type": "string",
    "description": "The ID of the VPN connection."
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
Lists all <code>vpn_connection_routes</code> in a region.
```sql
SELECT
region,
destination_cidr_block,
vpn_connection_id
FROM awscc.ec2.vpn_connection_routes_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>vpn_connection_routes_list_only</code> resource, see <a href="/services/ec2/vpn_connection_routes/#permissions"><code>vpn_connection_routes</code></a>

