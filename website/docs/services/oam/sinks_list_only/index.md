---
title: sinks_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - sinks_list_only
  - oam
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

Lists <code>sinks</code> in a region or regions, for all properties use <a href="/services/oam/sinks/"><code>sinks</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>sinks_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Oam::Sink</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.oam.sinks_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon resource name (ARN) of the ObservabilityAccessManager Sink"
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
Lists all <code>sinks</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.oam.sinks_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>sinks_list_only</code> resource, see <a href="/services/oam/sinks/#permissions"><code>sinks</code></a>

