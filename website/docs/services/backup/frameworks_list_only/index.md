---
title: frameworks_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - frameworks_list_only
  - backup
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

Lists <code>frameworks</code> in a region or regions, for all properties use <a href="/services/backup/frameworks/"><code>frameworks</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>frameworks_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Contains detailed information about a framework. Frameworks contain controls, which evaluate and report on your backup events and resources. Frameworks generate daily compliance results.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.backup.frameworks_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "framework_arn",
    "type": "string",
    "description": "An Amazon Resource Name (ARN) that uniquely identifies Framework as a resource"
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
Lists all <code>frameworks</code> in a region.
```sql
SELECT
region,
framework_arn
FROM awscc.backup.frameworks_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>frameworks_list_only</code> resource, see <a href="/services/backup/frameworks/#permissions"><code>frameworks</code></a>

