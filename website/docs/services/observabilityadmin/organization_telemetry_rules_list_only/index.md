---
title: organization_telemetry_rules_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - organization_telemetry_rules_list_only
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
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Lists <code>organization_telemetry_rules</code> in a region or regions, for all properties use <a href="/services/observabilityadmin/organization_telemetry_rules/"><code>organization_telemetry_rules</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>organization_telemetry_rules_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::ObservabilityAdmin::OrganizationTelemetryRule resource defines a CloudWatch Observability Admin Organization Telemetry Rule.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.observabilityadmin.organization_telemetry_rules_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "rule",
    "type": "object",
    "description": "The AWS::ObservabilityAdmin::TelemetryRule resource defines a CloudWatch Observability Admin Telemetry Rule.",
    "children": [
      {
        "name": "rule_name",
        "type": "string",
        "description": "The name of the telemetry rule"
      },
      {
        "name": "rule_arn",
        "type": "string",
        "description": "The arn of the telemetry rule"
      },
      {
        "name": "tags",
        "type": "array",
        "description": "An array of key-value pairs to apply to this resource",
        "children": [
          {
            "name": "key",
            "type": "string",
            "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
          },
          {
            "name": "value",
            "type": "string",
            "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
          }
        ]
      }
    ]
  },
  {
    "name": "rule_arn",
    "type": "string",
    "description": "The arn of the organization telemetry rule"
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
Lists all <code>organization_telemetry_rules</code> in a region.
```sql
SELECT
region,
rule_arn
FROM awscc.observabilityadmin.organization_telemetry_rules_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>organization_telemetry_rules_list_only</code> resource, see <a href="/services/observabilityadmin/organization_telemetry_rules/#permissions"><code>organization_telemetry_rules</code></a>

