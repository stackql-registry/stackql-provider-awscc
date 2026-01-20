---
title: apis_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - apis_list_only
  - apigatewayv2
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

Lists <code>apis</code> in a region or regions, for all properties use <a href="/services/apigatewayv2/apis/"><code>apis</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>apis_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApiGatewayV2::Api&#96;&#96; resource creates an API. WebSocket APIs and HTTP APIs are supported. For more information about WebSocket APIs, see &#91;About WebSocket APIs in API Gateway&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-overview.html) in the &#42;API Gateway Developer Guide&#42;. For more information about HTTP APIs, see &#91;HTTP APIs&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api.html) in the &#42;API Gateway Developer Guide.&#42;</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigatewayv2.apis_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "api_id",
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
Lists all <code>apis</code> in a region.
```sql
SELECT
region,
api_id
FROM awscc.apigatewayv2.apis_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>apis_list_only</code> resource, see <a href="/services/apigatewayv2/apis/#permissions"><code>apis</code></a>

