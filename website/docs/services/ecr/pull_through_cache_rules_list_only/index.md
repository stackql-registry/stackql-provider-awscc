---
title: pull_through_cache_rules_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - pull_through_cache_rules_list_only
  - ecr
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

Lists <code>pull_through_cache_rules</code> in a region or regions, for all properties use <a href="/services/ecr/pull_through_cache_rules/"><code>pull_through_cache_rules</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>pull_through_cache_rules_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ECR::PullThroughCacheRule&#96;&#96; resource creates or updates a pull through cache rule. A pull through cache rule provides a way to cache images from an upstream registry in your Amazon ECR private registry.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ecr.pull_through_cache_rules_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "ecr_repository_prefix",
    "type": "string",
    "description": "The Amazon ECR repository prefix associated with the pull through cache rule."
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
Lists all <code>pull_through_cache_rules</code> in a region.
```sql
SELECT
region,
ecr_repository_prefix
FROM awscc.ecr.pull_through_cache_rules_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>pull_through_cache_rules_list_only</code> resource, see <a href="/services/ecr/pull_through_cache_rules/#permissions"><code>pull_through_cache_rules</code></a>

