---
title: trust_store_revocations_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - trust_store_revocations_list_only
  - elasticloadbalancingv2
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

Lists <code>trust_store_revocations</code> in a region or regions, for all properties use <a href="/services/elasticloadbalancingv2/trust_store_revocations/"><code>trust_store_revocations</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>trust_store_revocations_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::ElasticLoadBalancingV2::TrustStoreRevocation</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.elasticloadbalancingv2.trust_store_revocations_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "trust_store_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the trust store."
  },
  {
    "name": "revocation_id",
    "type": "integer",
    "description": "The ID associated with the revocation."
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
Lists all <code>trust_store_revocations</code> in a region.
```sql
SELECT
region,
revocation_id,
trust_store_arn
FROM awscc.elasticloadbalancingv2.trust_store_revocations_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>trust_store_revocations_list_only</code> resource, see <a href="/services/elasticloadbalancingv2/trust_store_revocations/#permissions"><code>trust_store_revocations</code></a>

