---
title: deliveries_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - deliveries_list_only
  - logs
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

Lists <code>deliveries</code> in a region or regions, for all properties use <a href="/services/logs/deliveries/"><code>deliveries</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>deliveries_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>This structure contains information about one delivery in your account.<br />A delivery is a connection between a logical delivery source and a logical delivery destination.<br />For more information, see &#91;CreateDelivery&#93;(https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API&#95;CreateDelivery.html).</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.logs.deliveries_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "delivery_id",
    "type": "string",
    "description": "The unique ID that identifies this delivery in your account."
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
Lists all <code>deliveries</code> in a region.
```sql
SELECT
region,
delivery_id
FROM awscc.logs.deliveries_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>deliveries_list_only</code> resource, see <a href="/services/logs/deliveries/#permissions"><code>deliveries</code></a>

