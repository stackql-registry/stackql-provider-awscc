---
title: option_groups_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - option_groups_list_only
  - rds
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

Lists <code>option_groups</code> in a region or regions, for all properties use <a href="/services/rds/option_groups/"><code>option_groups</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>option_groups_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::RDS::OptionGroup&#96;&#96; resource creates or updates an option group, to enable and configure features that are specific to a particular DB engine.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.rds.option_groups_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "option_group_name",
    "type": "string",
    "description": "The name of the option group to be created.<br />Constraints:<br />+ Must be 1 to 255 letters, numbers, or hyphens<br />+ First character must be a letter<br />+ Can't end with a hyphen or contain two consecutive hyphens<br /><br />Example: &#96;&#96;myoptiongroup&#96;&#96;<br />If you don't specify a value for &#96;&#96;OptionGroupName&#96;&#96; property, a name is automatically created for the option group.<br />This value is stored as a lowercase string."
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
Lists all <code>option_groups</code> in a region.
```sql
SELECT
region,
option_group_name
FROM awscc.rds.option_groups_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>option_groups_list_only</code> resource, see <a href="/services/rds/option_groups/#permissions"><code>option_groups</code></a>

