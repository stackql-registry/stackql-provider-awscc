---
title: access_policies_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - access_policies_list_only
  - iotsitewise
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

Lists <code>access_policies</code> in a region or regions, for all properties use <a href="/services/iotsitewise/access_policies/"><code>access_policies</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>access_policies_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::IoTSiteWise::AccessPolicy</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotsitewise.access_policies_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "access_policy_id",
    "type": "string",
    "description": "The ID of the access policy."
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
Lists all <code>access_policies</code> in a region.
```sql
SELECT
region,
access_policy_id
FROM awscc.iotsitewise.access_policies_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>access_policies_list_only</code> resource, see <a href="/services/iotsitewise/access_policies/#permissions"><code>access_policies</code></a>

