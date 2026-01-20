---
title: trails_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - trails_list_only
  - cloudtrail
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

Lists <code>trails</code> in a region or regions, for all properties use <a href="/services/cloudtrail/trails/"><code>trails</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>trails_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket. A maximum of five trails can exist in a region, irrespective of the region in which they were created.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudtrail.trails_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "trail_name",
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
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples
Lists all <code>trails</code> in a region.
```sql
SELECT
region,
trail_name
FROM awscc.cloudtrail.trails_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>trails_list_only</code> resource, see <a href="/services/cloudtrail/trails/#permissions"><code>trails</code></a>

