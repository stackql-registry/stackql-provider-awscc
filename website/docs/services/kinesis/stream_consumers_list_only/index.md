---
title: stream_consumers_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - stream_consumers_list_only
  - kinesis
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

Lists <code>stream_consumers</code> in a region or regions, for all properties use <a href="/services/kinesis/stream_consumers/"><code>stream_consumers</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>stream_consumers_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Kinesis::StreamConsumer</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.kinesis.stream_consumers_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "consumer_arn",
    "type": "string",
    "description": "The ARN returned by Kinesis Data Streams when you registered the consumer. If you don't know the ARN of the consumer that you want to deregister, you can use the ListStreamConsumers operation to get a list of the descriptions of all the consumers that are currently registered with a given data stream. The description of a consumer contains its ARN."
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
Lists all <code>stream_consumers</code> in a region.
```sql
SELECT
region,
consumer_arn
FROM awscc.kinesis.stream_consumers_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>stream_consumers_list_only</code> resource, see <a href="/services/kinesis/stream_consumers/#permissions"><code>stream_consumers</code></a>

