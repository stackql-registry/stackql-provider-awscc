---
title: cloud_exadata_infrastructures_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_exadata_infrastructures_list_only
  - odb
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

Lists <code>cloud_exadata_infrastructures</code> in a region or regions, for all properties use <a href="/services/odb/cloud_exadata_infrastructures/"><code>cloud_exadata_infrastructures</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>cloud_exadata_infrastructures_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::ODB::CloudExadataInfrastructure resource creates an Exadata Infrastructure</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.odb.cloud_exadata_infrastructures_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "cloud_exadata_infrastructure_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the Exadata infrastructure."
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
Lists all <code>cloud_exadata_infrastructures</code> in a region.
```sql
SELECT
region,
cloud_exadata_infrastructure_arn
FROM awscc.odb.cloud_exadata_infrastructures_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>cloud_exadata_infrastructures_list_only</code> resource, see <a href="/services/odb/cloud_exadata_infrastructures/#permissions"><code>cloud_exadata_infrastructures</code></a>

