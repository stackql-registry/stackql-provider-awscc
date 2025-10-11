---
title: aggregator_v2s_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - aggregator_v2s_list_only
  - securityhub
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

Lists <code>aggregator_v2s</code> in a region or regions, for all properties use <a href="/services/securityhub/aggregator_v2s/"><code>aggregator_v2s</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>aggregator_v2s_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::SecurityHub::AggregatorV2 resource represents the AWS Security Hub AggregatorV2 in your account. One aggregatorv2 resource is created for each account in non opt-in region in which you configure region linking mode.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.securityhub.aggregator_v2s_list_only" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="aggregator_v2_arn" /></td><td><code>string</code></td><td>The ARN of the AggregatorV2 being created and assigned as the unique identifier</td></tr>
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
Lists all <code>aggregator_v2s</code> in a region.
```sql
SELECT
region,
aggregator_v2_arn
FROM awscc.securityhub.aggregator_v2s_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>aggregator_v2s_list_only</code> resource, see <a href="/services/securityhub/aggregator_v2s/#permissions"><code>aggregator_v2s</code></a>

