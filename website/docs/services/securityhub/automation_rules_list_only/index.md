---
title: automation_rules_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - automation_rules_list_only
  - securityhub
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

Lists <code>automation_rules</code> in a region or regions, for all properties use <a href="/services/securityhub/automation_rules/"><code>automation_rules</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>automation_rules_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::SecurityHub::AutomationRule&#96;&#96; resource specifies an automation rule based on input parameters. For more information, see &#91;Automation rules&#93;(https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules.html) in the &#42;User Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.securityhub.automation_rules_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "rule_arn",
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
Lists all <code>automation_rules</code> in a region.
```sql
SELECT
region,
rule_arn
FROM awscc.securityhub.automation_rules_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>automation_rules_list_only</code> resource, see <a href="/services/securityhub/automation_rules/#permissions"><code>automation_rules</code></a>

