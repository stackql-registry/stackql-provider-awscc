---
title: telemetry_rules_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - telemetry_rules_list_only
  - observabilityadmin
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

Lists <code>telemetry_rules</code> in a region or regions, for all properties use <a href="/services/observabilityadmin/telemetry_rules/"><code>telemetry_rules</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>telemetry_rules_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::ObservabilityAdmin::TelemetryRule resource defines a CloudWatch Observability Admin Telemetry Rule.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.observabilityadmin.telemetry_rules_list_only" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="rule" /></td><td><code>object</code></td><td>The AWS::ObservabilityAdmin::TelemetryRule resource defines a CloudWatch Observability Admin Telemetry Rule.</td></tr>
<tr><td><CopyableCode code="rule_arn" /></td><td><code>string</code></td><td>The arn of the telemetry rule</td></tr>
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
Lists all <code>telemetry_rules</code> in a region.
```sql
SELECT
region,
rule_arn
FROM awscc.observabilityadmin.telemetry_rules_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>telemetry_rules_list_only</code> resource, see <a href="/services/observabilityadmin/telemetry_rules/#permissions"><code>telemetry_rules</code></a>

