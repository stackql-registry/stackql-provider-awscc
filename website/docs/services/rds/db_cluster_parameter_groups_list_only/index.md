---
title: db_cluster_parameter_groups_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - db_cluster_parameter_groups_list_only
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

Lists <code>db_cluster_parameter_groups</code> in a region or regions, for all properties use <a href="/services/rds/db_cluster_parameter_groups/"><code>db_cluster_parameter_groups</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>db_cluster_parameter_groups_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::RDS::DBClusterParameterGroup&#96;&#96; resource creates a new Amazon RDS DB cluster parameter group.<br />For information about configuring parameters for Amazon Aurora DB clusters, see &#91;Working with parameter groups&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER&#95;WorkingWithParamGroups.html) in the &#42;Amazon Aurora User Guide&#42;.<br />If you apply a parameter group to a DB cluster, then its DB instances might need to reboot. This can result in an outage while the DB instances are rebooting.<br />If you apply a change to parameter group associated with a stopped DB cluster, then the updated stack waits until the DB cluster is started.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.rds.db_cluster_parameter_groups_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "db_cluster_parameter_group_name",
    "type": "string",
    "description": "The name of the DB cluster parameter group.<br />Constraints:<br />+ Must not match the name of an existing DB cluster parameter group.<br /><br />This value is stored as a lowercase string."
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
Lists all <code>db_cluster_parameter_groups</code> in a region.
```sql
SELECT
region,
db_cluster_parameter_group_name
FROM awscc.rds.db_cluster_parameter_groups_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>db_cluster_parameter_groups_list_only</code> resource, see <a href="/services/rds/db_cluster_parameter_groups/#permissions"><code>db_cluster_parameter_groups</code></a>

