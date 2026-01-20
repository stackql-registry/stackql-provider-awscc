---
title: customer_gateway_associations_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - customer_gateway_associations_list_only
  - networkmanager
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

Lists <code>customer_gateway_associations</code> in a region or regions, for all properties use <a href="/services/networkmanager/customer_gateway_associations/"><code>customer_gateway_associations</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>customer_gateway_associations_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::NetworkManager::CustomerGatewayAssociation type associates a customer gateway with a device and optionally, with a link.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.networkmanager.customer_gateway_associations_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "global_network_id",
    "type": "string",
    "description": "The ID of the global network."
  },
  {
    "name": "customer_gateway_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the customer gateway."
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
Lists all <code>customer_gateway_associations</code> in a region.
```sql
SELECT
region,
global_network_id,
customer_gateway_arn
FROM awscc.networkmanager.customer_gateway_associations_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>customer_gateway_associations_list_only</code> resource, see <a href="/services/networkmanager/customer_gateway_associations/#permissions"><code>customer_gateway_associations</code></a>

