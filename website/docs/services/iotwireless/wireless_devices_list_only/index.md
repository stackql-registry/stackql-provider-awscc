---
title: wireless_devices_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - wireless_devices_list_only
  - iotwireless
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

Lists <code>wireless_devices</code> in a region or regions, for all properties use <a href="/services/iotwireless/wireless_devices/"><code>wireless_devices</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>wireless_devices_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Create and manage wireless gateways, including LoRa gateways.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotwireless.wireless_devices_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "id",
    "type": "string",
    "description": "Wireless device Id. Returned after successful create."
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
Lists all <code>wireless_devices</code> in a region.
```sql
SELECT
region,
id
FROM awscc.iotwireless.wireless_devices_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>wireless_devices_list_only</code> resource, see <a href="/services/iotwireless/wireless_devices/#permissions"><code>wireless_devices</code></a>

