---
title: transit_gateway_registrations_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_registrations_list_only
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

Lists <code>transit_gateway_registrations</code> in a region or regions, for all properties use <a href="/services/networkmanager/transit_gateway_registrations/"><code>transit_gateway_registrations</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>transit_gateway_registrations_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::NetworkManager::TransitGatewayRegistration type registers a transit gateway in your global network. The transit gateway can be in any AWS Region, but it must be owned by the same AWS account that owns the global network. You cannot register a transit gateway in more than one global network.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.networkmanager.transit_gateway_registrations_list_only" /></td></tr>
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
    "name": "transit_gateway_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the transit gateway."
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
Lists all <code>transit_gateway_registrations</code> in a region.
```sql
SELECT
region,
global_network_id,
transit_gateway_arn
FROM awscc.networkmanager.transit_gateway_registrations_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>transit_gateway_registrations_list_only</code> resource, see <a href="/services/networkmanager/transit_gateway_registrations/#permissions"><code>transit_gateway_registrations</code></a>

