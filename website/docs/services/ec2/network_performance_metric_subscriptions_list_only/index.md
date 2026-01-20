---
title: network_performance_metric_subscriptions_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - network_performance_metric_subscriptions_list_only
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

Lists <code>network_performance_metric_subscriptions</code> in a region or regions, for all properties use <a href="/services/ec2/network_performance_metric_subscriptions/"><code>network_performance_metric_subscriptions</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>network_performance_metric_subscriptions_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::EC2::NetworkPerformanceMetricSubscription</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.network_performance_metric_subscriptions_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "source",
    "type": "string",
    "description": "The starting Region or Availability Zone for metric to subscribe to."
  },
  {
    "name": "destination",
    "type": "string",
    "description": "The target Region or Availability Zone for the metric to subscribe to."
  },
  {
    "name": "metric",
    "type": "string",
    "description": "The metric type to subscribe to."
  },
  {
    "name": "statistic",
    "type": "string",
    "description": "The statistic to subscribe to."
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
Lists all <code>network_performance_metric_subscriptions</code> in a region.
```sql
SELECT
region,
source,
destination,
metric,
statistic
FROM awscc.ec2.network_performance_metric_subscriptions_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>network_performance_metric_subscriptions_list_only</code> resource, see <a href="/services/ec2/network_performance_metric_subscriptions/#permissions"><code>network_performance_metric_subscriptions</code></a>

