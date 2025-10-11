---
title: owners_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - owners_list_only
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

Lists <code>owners</code> in a region or regions, for all properties use <a href="/services/datazone/owners/"><code>owners</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>owners_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A owner can set up authorization permissions on their resources.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.datazone.owners_list_only" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="entity_type" /></td><td><code>string</code></td><td>The type of an entity.</td></tr>
<tr><td><CopyableCode code="owner" /></td><td><code>object</code></td><td>The owner that you want to add to the entity.</td></tr>
<tr><td><CopyableCode code="entity_identifier" /></td><td><code>string</code></td><td>The ID of the entity to which you want to add an owner.</td></tr>
<tr><td><CopyableCode code="domain_identifier" /></td><td><code>string</code></td><td>The ID of the domain in which you want to add the entity owner.</td></tr>
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
Lists all <code>owners</code> in a region.
```sql
SELECT
region,
domain_identifier,
entity_type,
entity_identifier,
owner_type,
owner_identifier
FROM awscc.datazone.owners_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>owners_list_only</code> resource, see <a href="/services/datazone/owners/#permissions"><code>owners</code></a>

