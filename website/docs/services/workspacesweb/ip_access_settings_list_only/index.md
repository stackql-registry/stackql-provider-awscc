---
title: ip_access_settings_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - ip_access_settings_list_only
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

Lists <code>ip_access_settings</code> in a region or regions, for all properties use <a href="/services/workspacesweb/ip_access_settings/"><code>ip_access_settings</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>ip_access_settings_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::WorkSpacesWeb::IpAccessSettings Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.workspacesweb.ip_access_settings_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "ip_access_settings_arn",
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
Lists all <code>ip_access_settings</code> in a region.
```sql
SELECT
region,
ip_access_settings_arn
FROM awscc.workspacesweb.ip_access_settings_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>ip_access_settings_list_only</code> resource, see <a href="/services/workspacesweb/ip_access_settings/#permissions"><code>ip_access_settings</code></a>

