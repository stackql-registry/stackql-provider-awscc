---
title: game_server_groups_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - game_server_groups_list_only
  - gamelift
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

Lists <code>game_server_groups</code> in a region or regions, for all properties use <a href="/services/gamelift/game_server_groups/"><code>game_server_groups</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>game_server_groups_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::GameLift::GameServerGroup resource creates an Amazon GameLift (GameLift) GameServerGroup.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.gamelift.game_server_groups_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "game_server_group_arn",
    "type": "string",
    "description": "A generated unique ID for the game server group."
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
Lists all <code>game_server_groups</code> in a region.
```sql
SELECT
region,
game_server_group_arn
FROM awscc.gamelift.game_server_groups_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>game_server_groups_list_only</code> resource, see <a href="/services/gamelift/game_server_groups/#permissions"><code>game_server_groups</code></a>

