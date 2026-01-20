---
title: snapshots_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - snapshots_list_only
  - redshiftserverless
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

Lists <code>snapshots</code> in a region or regions, for all properties use <a href="/services/redshiftserverless/snapshots/"><code>snapshots</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>snapshots_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::RedshiftServerless::Snapshot Resource Type.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.redshiftserverless.snapshots_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "snapshot_name",
    "type": "string",
    "description": "The name of the snapshot."
  },
  {
    "name": "snapshot",
    "type": "object",
    "description": "Definition for snapshot resource",
    "children": [
      {
        "name": "snapshot_name",
        "type": "string",
        "description": "The name of the snapshot."
      },
      {
        "name": "namespace_name",
        "type": "string",
        "description": "The namespace the snapshot is associated with."
      },
      {
        "name": "owner_account",
        "type": "string",
        "description": "The owner account of the snapshot."
      },
      {
        "name": "retention_period",
        "type": "integer",
        "description": "The retention period of the snapshot."
      },
      {
        "name": "tags",
        "type": "array",
        "description": "An array of key-value pairs to apply to this resource."
      }
    ]
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
Lists all <code>snapshots</code> in a region.
```sql
SELECT
region,
snapshot_name
FROM awscc.redshiftserverless.snapshots_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>snapshots_list_only</code> resource, see <a href="/services/redshiftserverless/snapshots/#permissions"><code>snapshots</code></a>

