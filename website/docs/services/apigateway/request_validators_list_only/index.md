---
title: request_validators_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - request_validators_list_only
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

Lists <code>request_validators</code> in a region or regions, for all properties use <a href="/services/apigateway/request_validators/"><code>request_validators</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>request_validators_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApiGateway::RequestValidator&#96;&#96; resource sets up basic validation rules for incoming requests to your API. For more information, see &#91;Enable Basic Request Validation for an API in API Gateway&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html) in the &#42;API Gateway Developer Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigateway.request_validators_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "request_validator_id",
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
Lists all <code>request_validators</code> in a region.
```sql
SELECT
region,
rest_api_id,
request_validator_id
FROM awscc.apigateway.request_validators_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>request_validators_list_only</code> resource, see <a href="/services/apigateway/request_validators/#permissions"><code>request_validators</code></a>

