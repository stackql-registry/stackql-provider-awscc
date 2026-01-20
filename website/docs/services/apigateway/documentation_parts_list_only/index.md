---
title: documentation_parts_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - documentation_parts_list_only
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

Lists <code>documentation_parts</code> in a region or regions, for all properties use <a href="/services/apigateway/documentation_parts/"><code>documentation_parts</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>documentation_parts_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApiGateway::DocumentationPart&#96;&#96; resource creates a documentation part for an API. For more information, see &#91;Representation of API Documentation in API Gateway&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api-content-representation.html) in the &#42;API Gateway Developer Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigateway.documentation_parts_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "documentation_part_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "rest_api_id",
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
Lists all <code>documentation_parts</code> in a region.
```sql
SELECT
region,
documentation_part_id,
rest_api_id
FROM awscc.apigateway.documentation_parts_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>documentation_parts_list_only</code> resource, see <a href="/services/apigateway/documentation_parts/#permissions"><code>documentation_parts</code></a>

