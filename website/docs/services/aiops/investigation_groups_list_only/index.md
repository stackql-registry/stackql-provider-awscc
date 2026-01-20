---
title: investigation_groups_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - investigation_groups_list_only
  - aiops
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

Lists <code>investigation_groups</code> in a region or regions, for all properties use <a href="/services/aiops/investigation_groups/"><code>investigation_groups</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>investigation_groups_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::AIOps::InvestigationGroup Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.aiops.investigation_groups_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": "The Investigation Group's ARN."
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
Lists all <code>investigation_groups</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.aiops.investigation_groups_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>investigation_groups_list_only</code> resource, see <a href="/services/aiops/investigation_groups/#permissions"><code>investigation_groups</code></a>

