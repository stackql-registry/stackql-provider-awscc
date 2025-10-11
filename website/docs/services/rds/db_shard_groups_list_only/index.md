---
title: db_shard_groups_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - db_shard_groups_list_only
  - rds
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

Lists <code>db_shard_groups</code> in a region or regions, for all properties use <a href="/services/rds/db_shard_groups/"><code>db_shard_groups</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>db_shard_groups_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Creates a new DB shard group for Aurora Limitless Database. You must enable Aurora Limitless Database to create a DB shard group.<br />Valid for: Aurora DB clusters only</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.rds.db_shard_groups_list_only" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="db_shard_group_identifier" /></td><td><code>string</code></td><td>The name of the DB shard group.</td></tr>
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
Lists all <code>db_shard_groups</code> in a region.
```sql
SELECT
region,
db_shard_group_identifier
FROM awscc.rds.db_shard_groups_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>db_shard_groups_list_only</code> resource, see <a href="/services/rds/db_shard_groups/#permissions"><code>db_shard_groups</code></a>

