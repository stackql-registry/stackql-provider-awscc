---
title: connections_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - connections_list_only
  - datazone
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

Lists <code>connections</code> in a region or regions, for all properties use <a href="/services/datazone/connections/"><code>connections</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>connections_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Connections enables users to connect their DataZone resources (domains, projects, and environments) to external resources/services (data, compute, etc)</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.datazone.connections_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "connection_id",
    "type": "string",
    "description": "The ID of the connection."
  },
  {
    "name": "domain_id",
    "type": "string",
    "description": "The ID of the domain in which the connection is created."
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
Lists all <code>connections</code> in a region.
```sql
SELECT
region,
domain_id,
connection_id
FROM awscc.datazone.connections_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>connections_list_only</code> resource, see <a href="/services/datazone/connections/#permissions"><code>connections</code></a>

