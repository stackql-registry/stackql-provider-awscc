---
title: subscription_filters_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - subscription_filters_list_only
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

Lists <code>subscription_filters</code> in a region or regions, for all properties use <a href="/services/logs/subscription_filters/"><code>subscription_filters</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>subscription_filters_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::Logs::SubscriptionFilter&#96;&#96; resource specifies a subscription filter and associates it with the specified log group. Subscription filters allow you to subscribe to a real-time stream of log events and have them delivered to a specific destination. Currently, the supported destinations are:<br />+ An Amazon Kinesis data stream belonging to the same account as the subscription filter, for same-account delivery.<br />+ A logical destination that belongs to a different account, for cross-account delivery.<br />+ An Amazon Kinesis Firehose delivery stream that belongs to the same account as the subscription filter, for same-account delivery.<br />+ An LAMlong function that belongs to the same account as the subscription filter, for same-account delivery.<br /><br />There can be as many as two subscription filters associated with a log group.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.logs.subscription_filters_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "filter_name",
    "type": "string",
    "description": "The name of the subscription filter."
  },
  {
    "name": "log_group_name",
    "type": "string",
    "description": "The log group to associate with the subscription filter. All log events that are uploaded to this log group are filtered and delivered to the specified AWS resource if the filter pattern matches the log events."
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
Lists all <code>subscription_filters</code> in a region.
```sql
SELECT
region,
filter_name,
log_group_name
FROM awscc.logs.subscription_filters_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>subscription_filters_list_only</code> resource, see <a href="/services/logs/subscription_filters/#permissions"><code>subscription_filters</code></a>

