---
title: customdb_engine_versions_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - customdb_engine_versions_list_only
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
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Lists <code>customdb_engine_versions</code> in a region or regions, for all properties use <a href="/services/rds/customdb_engine_versions/"><code>customdb_engine_versions</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>customdb_engine_versions_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Creates a custom DB engine version (CEV).</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.rds.customdb_engine_versions_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "engine",
    "type": "string",
    "description": "The database engine to use for your custom engine version (CEV).<br />Valid values:<br />+ &#96;&#96;custom-oracle-ee&#96;&#96; <br />+ &#96;&#96;custom-oracle-ee-cdb&#96;&#96;"
  },
  {
    "name": "engine_version",
    "type": "string",
    "description": "The name of your CEV. The name format is &#96;&#96;major version.customized&#95;string&#96;&#96;. For example, a valid CEV name is &#96;&#96;19.my&#95;cev1&#96;&#96;. This setting is required for RDS Custom for Oracle, but optional for Amazon RDS. The combination of &#96;&#96;Engine&#96;&#96; and &#96;&#96;EngineVersion&#96;&#96; is unique per customer per Region.<br />&#42;Constraints:&#42; Minimum length is 1. Maximum length is 60.<br />&#42;Pattern:&#42;&#96;&#96;^&#91;a-z0-9&#95;.-&#93;&#123;1,60$&#96;&#96;&#125;"
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
Lists all <code>customdb_engine_versions</code> in a region.
```sql
SELECT
region,
engine,
engine_version
FROM awscc.rds.customdb_engine_versions_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>customdb_engine_versions_list_only</code> resource, see <a href="/services/rds/customdb_engine_versions/#permissions"><code>customdb_engine_versions</code></a>

