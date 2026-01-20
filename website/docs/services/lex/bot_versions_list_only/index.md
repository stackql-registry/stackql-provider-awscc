---
title: bot_versions_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - bot_versions_list_only
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

Lists <code>bot_versions</code> in a region or regions, for all properties use <a href="/services/lex/bot_versions/"><code>bot_versions</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>bot_versions_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A version is a numbered snapshot of your work that you can publish for use in different parts of your workflow, such as development, beta deployment, and production.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lex.bot_versions_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "bot_id",
    "type": "string",
    "description": "Unique ID of resource"
  },
  {
    "name": "bot_version",
    "type": "object",
    "description": "A version is a numbered snapshot of your work that you can publish for use in different parts of your workflow, such as development, beta deployment, and production.",
    "children": [
      {
        "name": "description",
        "type": "string",
        "description": "A description of the version. Use the description to help identify the version in lists."
      },
      {
        "name": "bot_version_locale_specification",
        "type": "array",
        "description": "Specifies the locales that Amazon Lex adds to this version. You can choose the Draft version or any other previously published version for each locale.",
        "children": [
          {
            "name": "locale_id",
            "type": "string",
            "description": "The identifier of the language and locale that the bot will be used in."
          },
          {
            "name": "bot_version_locale_details",
            "type": "object",
            "description": "The version of a bot used for a bot locale."
          }
        ]
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
Lists all <code>bot_versions</code> in a region.
```sql
SELECT
region,
bot_id,
bot_version
FROM awscc.lex.bot_versions_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>bot_versions_list_only</code> resource, see <a href="/services/lex/bot_versions/#permissions"><code>bot_versions</code></a>

