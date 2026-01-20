---
title: custom_metrics_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_metrics_list_only
  - iot
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

Lists <code>custom_metrics</code> in a region or regions, for all properties use <a href="/services/iot/custom_metrics/"><code>custom_metrics</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>custom_metrics_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A custom metric published by your devices to Device Defender.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iot.custom_metrics_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "metric_name",
    "type": "string",
    "description": "The name of the custom metric. This will be used in the metric report submitted from the device/thing. Shouldn't begin with aws: . Cannot be updated once defined."
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
Lists all <code>custom_metrics</code> in a region.
```sql
SELECT
region,
metric_name
FROM awscc.iot.custom_metrics_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>custom_metrics_list_only</code> resource, see <a href="/services/iot/custom_metrics/#permissions"><code>custom_metrics</code></a>

