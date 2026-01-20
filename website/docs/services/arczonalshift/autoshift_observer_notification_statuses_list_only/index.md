---
title: autoshift_observer_notification_statuses_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - autoshift_observer_notification_statuses_list_only
  - arczonalshift
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

Lists <code>autoshift_observer_notification_statuses</code> in a region or regions, for all properties use <a href="/services/arczonalshift/autoshift_observer_notification_statuses/"><code>autoshift_observer_notification_statuses</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>autoshift_observer_notification_statuses_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::ARCZonalShift::AutoshiftObserverNotificationStatus Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.arczonalshift.autoshift_observer_notification_statuses_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "account_id",
    "type": "string",
    "description": "User account id, used as part of the primary identifier for the resource"
  },
  {
    "name": "region",
    "type": "string",
    "description": "Region, used as part of the primary identifier for the resource"
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
Lists all <code>autoshift_observer_notification_statuses</code> in a region.
```sql
SELECT
region,
account_id,
region
FROM awscc.arczonalshift.autoshift_observer_notification_statuses_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>autoshift_observer_notification_statuses_list_only</code> resource, see <a href="/services/arczonalshift/autoshift_observer_notification_statuses/#permissions"><code>autoshift_observer_notification_statuses</code></a>

