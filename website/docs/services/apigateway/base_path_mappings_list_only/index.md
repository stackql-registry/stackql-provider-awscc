---
title: base_path_mappings_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - base_path_mappings_list_only
  - apigateway
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

Lists <code>base_path_mappings</code> in a region or regions, for all properties use <a href="/services/apigateway/base_path_mappings/"><code>base_path_mappings</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>base_path_mappings_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApiGateway::BasePathMapping&#96;&#96; resource creates a base path that clients who call your API must use in the invocation URL.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigateway.base_path_mappings_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "base_path",
    "type": "string",
    "description": ""
  },
  {
    "name": "domain_name",
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
Lists all <code>base_path_mappings</code> in a region.
```sql
SELECT
region,
domain_name,
base_path
FROM awscc.apigateway.base_path_mappings_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>base_path_mappings_list_only</code> resource, see <a href="/services/apigateway/base_path_mappings/#permissions"><code>base_path_mappings</code></a>

