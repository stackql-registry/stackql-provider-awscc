---
title: flow_versions_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - flow_versions_list_only
  - bedrock
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

Lists <code>flow_versions</code> in a region or regions, for all properties use <a href="/services/bedrock/flow_versions/"><code>flow_versions</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>flow_versions_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Bedrock::FlowVersion Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.bedrock.flow_versions_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "flow_arn",
    "type": "string",
    "description": "Arn representation of the Flow"
  },
  {
    "name": "version",
    "type": "string",
    "description": "Numerical Version."
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
Lists all <code>flow_versions</code> in a region.
```sql
SELECT
region,
flow_arn,
version
FROM awscc.bedrock.flow_versions_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>flow_versions_list_only</code> resource, see <a href="/services/bedrock/flow_versions/#permissions"><code>flow_versions</code></a>

