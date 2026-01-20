---
title: db_parameter_groups_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - db_parameter_groups_list_only
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

Lists <code>db_parameter_groups</code> in a region or regions, for all properties use <a href="/services/rds/db_parameter_groups/"><code>db_parameter_groups</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>db_parameter_groups_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::RDS::DBParameterGroup&#96;&#96; resource creates a custom parameter group for an RDS database family.<br />This type can be declared in a template and referenced in the &#96;&#96;DBParameterGroupName&#96;&#96; property of an &#96;&#96;AWS::RDS::DBInstance&#96;&#96; resource.<br />For information about configuring parameters for Amazon RDS DB instances, see &#91;Working with parameter groups&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER&#95;WorkingWithParamGroups.html) in the &#42;Amazon RDS User Guide&#42;.<br />For information about configuring parameters for Amazon Aurora DB instances, see &#91;Working with parameter groups&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER&#95;WorkingWithParamGroups.html) in the &#42;Amazon Aurora User Guide&#42;.<br />Applying a parameter group to a DB instance may require the DB instance to reboot, resulting in a database outage for the duration of the reboot.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.rds.db_parameter_groups_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "db_parameter_group_name",
    "type": "string",
    "description": "The name of the DB parameter group.<br />Constraints:<br />+ Must be 1 to 255 letters, numbers, or hyphens.<br />+ First character must be a letter<br />+ Can't end with a hyphen or contain two consecutive hyphens<br /><br />If you don't specify a value for &#96;&#96;DBParameterGroupName&#96;&#96; property, a name is automatically created for the DB parameter group.<br />This value is stored as a lowercase string."
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
Lists all <code>db_parameter_groups</code> in a region.
```sql
SELECT
region,
db_parameter_group_name
FROM awscc.rds.db_parameter_groups_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>db_parameter_groups_list_only</code> resource, see <a href="/services/rds/db_parameter_groups/#permissions"><code>db_parameter_groups</code></a>

