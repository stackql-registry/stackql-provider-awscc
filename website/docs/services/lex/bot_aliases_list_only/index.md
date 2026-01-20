---
title: bot_aliases_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - bot_aliases_list_only
  - lex
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

Lists <code>bot_aliases</code> in a region or regions, for all properties use <a href="/services/lex/bot_aliases/"><code>bot_aliases</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>bot_aliases_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A Bot Alias enables you to change the version of a bot without updating applications that use the bot</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lex.bot_aliases_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "bot_alias_id",
    "type": "string",
    "description": "Unique ID of resource"
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
Lists all <code>bot_aliases</code> in a region.
```sql
SELECT
region,
bot_alias_id,
bot_id
FROM awscc.lex.bot_aliases_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>bot_aliases_list_only</code> resource, see <a href="/services/lex/bot_aliases/#permissions"><code>bot_aliases</code></a>

