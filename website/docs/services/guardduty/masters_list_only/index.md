---
title: masters_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - masters_list_only
  - guardduty
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

Lists <code>masters</code> in a region or regions, for all properties use <a href="/services/guardduty/masters/"><code>masters</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>masters_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>GuardDuty Master resource schema</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.guardduty.masters_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "master_id",
    "type": "string",
    "description": "ID of the account used as the master account."
  },
  {
    "name": "detector_id",
    "type": "string",
    "description": "Unique ID of the detector of the GuardDuty member account."
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
Lists all <code>masters</code> in a region.
```sql
SELECT
region,
detector_id,
master_id
FROM awscc.guardduty.masters_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>masters_list_only</code> resource, see <a href="/services/guardduty/masters/#permissions"><code>masters</code></a>

