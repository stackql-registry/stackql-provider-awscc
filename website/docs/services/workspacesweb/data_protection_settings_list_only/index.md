---
title: data_protection_settings_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - data_protection_settings_list_only
  - workspacesweb
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

Lists <code>data_protection_settings</code> in a region or regions, for all properties use <a href="/services/workspacesweb/data_protection_settings/"><code>data_protection_settings</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>data_protection_settings_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::WorkSpacesWeb::DataProtectionSettings Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.workspacesweb.data_protection_settings_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "data_protection_settings_arn",
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
Lists all <code>data_protection_settings</code> in a region.
```sql
SELECT
region,
data_protection_settings_arn
FROM awscc.workspacesweb.data_protection_settings_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>data_protection_settings_list_only</code> resource, see <a href="/services/workspacesweb/data_protection_settings/#permissions"><code>data_protection_settings</code></a>

