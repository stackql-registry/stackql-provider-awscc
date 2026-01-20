---
title: integration_responses_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - integration_responses_list_only
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

Lists <code>integration_responses</code> in a region or regions, for all properties use <a href="/services/apigatewayv2/integration_responses/"><code>integration_responses</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>integration_responses_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApiGatewayV2::IntegrationResponse&#96;&#96; resource updates an integration response for an WebSocket API. For more information, see &#91;Set up WebSocket API Integration Responses in API Gateway&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-integration-responses.html) in the &#42;API Gateway Developer Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigatewayv2.integration_responses_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "integration_response_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "integration_id",
    "type": "string",
    "description": "The integration ID."
  },
  {
    "name": "api_id",
    "type": "string",
    "description": "The API identifier."
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
Lists all <code>integration_responses</code> in a region.
```sql
SELECT
region,
api_id,
integration_id,
integration_response_id
FROM awscc.apigatewayv2.integration_responses_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>integration_responses_list_only</code> resource, see <a href="/services/apigatewayv2/integration_responses/#permissions"><code>integration_responses</code></a>

