---
title: readiness_checks_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - readiness_checks_list_only
  - route53recoveryreadiness
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

Lists <code>readiness_checks</code> in a region or regions, for all properties use <a href="/services/route53recoveryreadiness/readiness_checks/"><code>readiness_checks</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>readiness_checks_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Aws Route53 Recovery Readiness Check Schema and API specification.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.route53recoveryreadiness.readiness_checks_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "readiness_check_name",
    "type": "string",
    "description": "Name of the ReadinessCheck to create."
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
Lists all <code>readiness_checks</code> in a region.
```sql
SELECT
region,
readiness_check_name
FROM awscc.route53recoveryreadiness.readiness_checks_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>readiness_checks_list_only</code> resource, see <a href="/services/route53recoveryreadiness/readiness_checks/#permissions"><code>readiness_checks</code></a>

