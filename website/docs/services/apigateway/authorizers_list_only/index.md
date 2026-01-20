---
title: authorizers_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - authorizers_list_only
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

Lists <code>authorizers</code> in a region or regions, for all properties use <a href="/services/apigateway/authorizers/"><code>authorizers</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>authorizers_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApiGateway::Authorizer&#96;&#96; resource creates an authorization layer that API Gateway activates for methods that have authorization enabled. API Gateway activates the authorizer when a client calls those methods.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigateway.authorizers_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "rest_api_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "authorizer_id",
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
Lists all <code>authorizers</code> in a region.
```sql
SELECT
region,
rest_api_id,
authorizer_id
FROM awscc.apigateway.authorizers_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>authorizers_list_only</code> resource, see <a href="/services/apigateway/authorizers/#permissions"><code>authorizers</code></a>

