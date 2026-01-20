---
title: account_audit_configurations_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - account_audit_configurations_list_only
  - iot
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

Lists <code>account_audit_configurations</code> in a region or regions, for all properties use <a href="/services/iot/account_audit_configurations/"><code>account_audit_configurations</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>account_audit_configurations_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Configures the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iot.account_audit_configurations_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "account_id",
    "type": "string",
    "description": "Your 12-digit account ID (used as the primary identifier for the CloudFormation resource)."
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
Lists all <code>account_audit_configurations</code> in a region.
```sql
SELECT
region,
account_id
FROM awscc.iot.account_audit_configurations_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>account_audit_configurations_list_only</code> resource, see <a href="/services/iot/account_audit_configurations/#permissions"><code>account_audit_configurations</code></a>

