---
title: vw_pending_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - vw_pending_requests
  - cloud_control
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CodeBlock from '@theme/CodeBlock';
import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

View of <code>resource_requests</code> filtered by the SQL WHERE clause; see <a href="/services/cloud_control/resource_requests/"><code>resource_requests</code></a> for the full resource.

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vw_pending_requests</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>vw_pending_requests</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloud_control.vw_pending_requests" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "error_code",
    "type": "string",
    "description": ""
  },
  {
    "name": "event_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "operation",
    "type": "string",
    "description": ""
  },
  {
    "name": "operation_status",
    "type": "string",
    "description": ""
  },
  {
    "name": "request_token",
    "type": "string",
    "description": ""
  },
  {
    "name": "resource_model",
    "type": "string",
    "description": ""
  },
  {
    "name": "status_message",
    "type": "string",
    "description": ""
  },
  {
    "name": "type_name",
    "type": "string",
    "description": ""
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
    <td><CopyableCode code="view" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples
Lists all <code>vw_pending_requests</code> in a region.
```sql
SELECT
  region
FROM awscc.cloud_control.vw_pending_requests
WHERE
  region = '{{ region }}';
```






