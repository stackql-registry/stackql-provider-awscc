---
title: policy_grants_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - policy_grants_list_only
  - datazone
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

Lists <code>policy_grants</code> in a region or regions, for all properties use <a href="/services/datazone/policy_grants/"><code>policy_grants</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>policy_grants_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Policy Grant in AWS DataZone is an explicit authorization assignment that allows a specific principal (user, group, or project) to perform particular actions (such as creating glossary terms, managing projects, or accessing resources) on governed resources within a certain scope (like a Domain Unit or Project). Policy Grants are essentially the mechanism by which DataZone enforces fine-grained, role-based access control beyond what is possible through AWS IAM alone.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.datazone.policy_grants_list_only" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="entity_type" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="policy_type" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="grant_id" /></td><td><code>string</code></td><td>The unique identifier of the policy grant returned by the AddPolicyGrant API</td></tr>
<tr><td><CopyableCode code="entity_identifier" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="domain_identifier" /></td><td><code>string</code></td><td></td></tr>
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
Lists all <code>policy_grants</code> in a region.
```sql
SELECT
region,
domain_identifier,
grant_id,
entity_identifier,
entity_type,
policy_type
FROM awscc.datazone.policy_grants_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>policy_grants_list_only</code> resource, see <a href="/services/datazone/policy_grants/#permissions"><code>policy_grants</code></a>

