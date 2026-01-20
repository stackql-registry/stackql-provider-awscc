---
title: exports_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - exports_list_only
  - bcmdataexports
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

Lists <code>exports</code> in a region or regions, for all properties use <a href="/services/bcmdataexports/exports/"><code>exports</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>exports_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::BCMDataExports::Export Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.bcmdataexports.exports_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "export",
    "type": "object",
    "description": "Definition of AWS::BCMDataExports::Export Resource Type",
    "children": [
      {
        "name": "export_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "tags",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "key",
            "type": "string",
            "description": ""
          },
          {
            "name": "value",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "export_arn",
    "type": "string",
    "description": ""
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
Lists all <code>exports</code> in a region.
```sql
SELECT
region,
export_arn
FROM awscc.bcmdataexports.exports_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>exports_list_only</code> resource, see <a href="/services/bcmdataexports/exports/#permissions"><code>exports</code></a>

