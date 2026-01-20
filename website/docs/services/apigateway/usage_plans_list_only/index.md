---
title: usage_plans_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - usage_plans_list_only
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

Lists <code>usage_plans</code> in a region or regions, for all properties use <a href="/services/apigateway/usage_plans/"><code>usage_plans</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>usage_plans_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApiGateway::UsagePlan&#96;&#96; resource creates a usage plan for deployed APIs. A usage plan sets a target for the throttling and quota limits on individual client API keys. For more information, see &#91;Creating and Using API Usage Plans in Amazon API Gateway&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html) in the &#42;API Gateway Developer Guide&#42;.<br />In some cases clients can exceed the targets that you set. Don’t rely on usage plans to control costs. Consider using &#91;&#93;(https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) to monitor costs and &#91;&#93;(https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) to manage API requests.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigateway.usage_plans_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "id",
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
Lists all <code>usage_plans</code> in a region.
```sql
SELECT
region,
id
FROM awscc.apigateway.usage_plans_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>usage_plans_list_only</code> resource, see <a href="/services/apigateway/usage_plans/#permissions"><code>usage_plans</code></a>

