---
title: conformance_packs_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - conformance_packs_list_only
  - config
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

Lists <code>conformance_packs</code> in a region or regions, for all properties use <a href="/services/config/conformance_packs/"><code>conformance_packs</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>conformance_packs_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A conformance pack is a collection of AWS Config rules and remediation actions that can be easily deployed as a single entity in an account and a region or across an entire AWS Organization.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.config.conformance_packs_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "conformance_pack_name",
    "type": "string",
    "description": "Name of the conformance pack which will be assigned as the unique identifier."
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
Lists all <code>conformance_packs</code> in a region.
```sql
SELECT
region,
conformance_pack_name
FROM awscc.config.conformance_packs_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>conformance_packs_list_only</code> resource, see <a href="/services/config/conformance_packs/#permissions"><code>conformance_packs</code></a>

