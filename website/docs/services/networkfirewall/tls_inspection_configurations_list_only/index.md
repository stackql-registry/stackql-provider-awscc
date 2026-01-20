---
title: tls_inspection_configurations_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - tls_inspection_configurations_list_only
  - networkfirewall
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

Lists <code>tls_inspection_configurations</code> in a region or regions, for all properties use <a href="/services/networkfirewall/tls_inspection_configurations/"><code>tls_inspection_configurations</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>tls_inspection_configurations_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource type definition for AWS::NetworkFirewall::TLSInspectionConfiguration</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.networkfirewall.tls_inspection_configurations_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "tls_inspection_configuration_arn",
    "type": "string",
    "description": "A resource ARN."
  },
  {
    "name": "tls_inspection_configuration",
    "type": "object",
    "description": "Resource type definition for AWS::NetworkFirewall::TLSInspectionConfiguration",
    "children": [
      {
        "name": "tls_inspection_configuration_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "tls_inspection_configuration_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "description",
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
Lists all <code>tls_inspection_configurations</code> in a region.
```sql
SELECT
region,
tls_inspection_configuration_arn
FROM awscc.networkfirewall.tls_inspection_configurations_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>tls_inspection_configurations_list_only</code> resource, see <a href="/services/networkfirewall/tls_inspection_configurations/#permissions"><code>tls_inspection_configurations</code></a>

