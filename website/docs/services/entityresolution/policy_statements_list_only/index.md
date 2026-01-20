---
title: policy_statements_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - policy_statements_list_only
  - entityresolution
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

Lists <code>policy_statements</code> in a region or regions, for all properties use <a href="/services/entityresolution/policy_statements/"><code>policy_statements</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>policy_statements_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Policy Statement defined in AWS Entity Resolution Service</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.entityresolution.policy_statements_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": "Arn of the resource to which the policy statement is being attached."
  },
  {
    "name": "statement_id",
    "type": "string",
    "description": "The Statement Id of the policy statement that is being attached."
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
Lists all <code>policy_statements</code> in a region.
```sql
SELECT
region,
arn,
statement_id
FROM awscc.entityresolution.policy_statements_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>policy_statements_list_only</code> resource, see <a href="/services/entityresolution/policy_statements/#permissions"><code>policy_statements</code></a>

