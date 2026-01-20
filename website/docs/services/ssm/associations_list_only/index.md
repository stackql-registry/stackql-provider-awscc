---
title: associations_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - associations_list_only
  - ssm
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

Lists <code>associations</code> in a region or regions, for all properties use <a href="/services/ssm/associations/"><code>associations</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>associations_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::SSM::Association resource associates an SSM document in AWS Systems Manager with EC2 instances that contain a configuration agent to process the document.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ssm.associations_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "association_id",
    "type": "string",
    "description": "Unique identifier of the association."
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
Lists all <code>associations</code> in a region.
```sql
SELECT
region,
association_id
FROM awscc.ssm.associations_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>associations_list_only</code> resource, see <a href="/services/ssm/associations/#permissions"><code>associations</code></a>

