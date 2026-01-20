---
title: configuration_managers_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_managers_list_only
  - ssmquicksetup
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

Lists <code>configuration_managers</code> in a region or regions, for all properties use <a href="/services/ssmquicksetup/configuration_managers/"><code>configuration_managers</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>configuration_managers_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::SSMQuickSetup::ConfigurationManager Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ssmquicksetup.configuration_managers_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "manager_arn",
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
Lists all <code>configuration_managers</code> in a region.
```sql
SELECT
region,
manager_arn
FROM awscc.ssmquicksetup.configuration_managers_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>configuration_managers_list_only</code> resource, see <a href="/services/ssmquicksetup/configuration_managers/#permissions"><code>configuration_managers</code></a>

