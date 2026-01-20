---
title: schema_version_metadata_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - schema_version_metadata_list_only
  - glue
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

Lists <code>schema_version_metadata</code> in a region or regions, for all properties use <a href="/services/glue/schema_version_metadata/"><code>schema_version_metadata</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>schema_version_metadata_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>This resource adds Key-Value metadata to a Schema version of Glue Schema Registry.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.glue.schema_version_metadata_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "schema_version_id",
    "type": "string",
    "description": "Represents the version ID associated with the schema version."
  },
  {
    "name": "key",
    "type": "string",
    "description": "Metadata key"
  },
  {
    "name": "value",
    "type": "string",
    "description": "Metadata value"
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
Lists all <code>schema_version_metadata</code> in a region.
```sql
SELECT
region,
schema_version_id,
key,
value
FROM awscc.glue.schema_version_metadata_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>schema_version_metadata_list_only</code> resource, see <a href="/services/glue/schema_version_metadata/#permissions"><code>schema_version_metadata</code></a>

