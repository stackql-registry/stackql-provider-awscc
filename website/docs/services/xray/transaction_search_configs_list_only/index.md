---
title: transaction_search_configs_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - transaction_search_configs_list_only
  - xray
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

Lists <code>transaction_search_configs</code> in a region or regions, for all properties use <a href="/services/xray/transaction_search_configs/"><code>transaction_search_configs</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>transaction_search_configs_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>This schema provides construct and validation rules for AWS-XRay TransactionSearchConfig resource parameters.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.xray.transaction_search_configs_list_only" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="account_id" /></td><td><code>string</code></td><td>User account id, used as the primary identifier for the resource</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

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
Lists all <code>transaction_search_configs</code> in a region.
```sql
SELECT
region,
account_id
FROM awscc.xray.transaction_search_configs_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>transaction_search_configs_list_only</code> resource, see <a href="/services/xray/transaction_search_configs/#permissions"><code>transaction_search_configs</code></a>

