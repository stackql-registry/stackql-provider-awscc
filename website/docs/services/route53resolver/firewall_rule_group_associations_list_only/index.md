---
title: firewall_rule_group_associations_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_rule_group_associations_list_only
  - route53resolver
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

Lists <code>firewall_rule_group_associations</code> in a region or regions, for all properties use <a href="/services/route53resolver/firewall_rule_group_associations/"><code>firewall_rule_group_associations</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>firewall_rule_group_associations_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::Route53Resolver::FirewallRuleGroupAssociation.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.route53resolver.firewall_rule_group_associations_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "id",
    "type": "string",
    "description": "Id"
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
Lists all <code>firewall_rule_group_associations</code> in a region.
```sql
SELECT
region,
id
FROM awscc.route53resolver.firewall_rule_group_associations_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>firewall_rule_group_associations_list_only</code> resource, see <a href="/services/route53resolver/firewall_rule_group_associations/#permissions"><code>firewall_rule_group_associations</code></a>

