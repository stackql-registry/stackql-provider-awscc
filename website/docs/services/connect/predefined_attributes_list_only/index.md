---
title: predefined_attributes_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - predefined_attributes_list_only
  - connect
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

Lists <code>predefined_attributes</code> in a region or regions, for all properties use <a href="/services/connect/predefined_attributes/"><code>predefined_attributes</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>predefined_attributes_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Connect::PredefinedAttribute</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.connect.predefined_attributes_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "instance_arn",
    "type": "string",
    "description": "The identifier of the Amazon Connect instance."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the predefined attribute."
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
Lists all <code>predefined_attributes</code> in a region.
```sql
SELECT
region,
instance_arn,
name
FROM awscc.connect.predefined_attributes_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>predefined_attributes_list_only</code> resource, see <a href="/services/connect/predefined_attributes/#permissions"><code>predefined_attributes</code></a>

