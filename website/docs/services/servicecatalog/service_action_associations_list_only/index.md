---
title: service_action_associations_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - service_action_associations_list_only
  - servicecatalog
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

Lists <code>service_action_associations</code> in a region or regions, for all properties use <a href="/services/servicecatalog/service_action_associations/"><code>service_action_associations</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>service_action_associations_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Schema for AWS::ServiceCatalog::ServiceActionAssociation</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.servicecatalog.service_action_associations_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "product_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "provisioning_artifact_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "service_action_id",
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
Lists all <code>service_action_associations</code> in a region.
```sql
SELECT
region,
product_id,
provisioning_artifact_id,
service_action_id
FROM awscc.servicecatalog.service_action_associations_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>service_action_associations_list_only</code> resource, see <a href="/services/servicecatalog/service_action_associations/#permissions"><code>service_action_associations</code></a>

