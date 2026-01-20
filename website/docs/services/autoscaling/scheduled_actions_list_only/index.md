---
title: scheduled_actions_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - scheduled_actions_list_only
  - autoscaling
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

Lists <code>scheduled_actions</code> in a region or regions, for all properties use <a href="/services/autoscaling/scheduled_actions/"><code>scheduled_actions</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>scheduled_actions_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::AutoScaling::ScheduledAction resource specifies an Amazon EC2 Auto Scaling scheduled action so that the Auto Scaling group can change the number of instances available for your application in response to predictable load changes.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.autoscaling.scheduled_actions_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "scheduled_action_name",
    "type": "string",
    "description": "Auto-generated unique identifier"
  },
  {
    "name": "auto_scaling_group_name",
    "type": "string",
    "description": "The name of the Auto Scaling group."
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
Lists all <code>scheduled_actions</code> in a region.
```sql
SELECT
region,
scheduled_action_name,
auto_scaling_group_name
FROM awscc.autoscaling.scheduled_actions_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>scheduled_actions_list_only</code> resource, see <a href="/services/autoscaling/scheduled_actions/#permissions"><code>scheduled_actions</code></a>

