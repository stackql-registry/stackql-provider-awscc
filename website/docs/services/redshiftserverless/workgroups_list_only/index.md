---
title: workgroups_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - workgroups_list_only
  - redshiftserverless
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

Lists <code>workgroups</code> in a region or regions, for all properties use <a href="/services/redshiftserverless/workgroups/"><code>workgroups</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>workgroups_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::RedshiftServerless::Workgroup Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.redshiftserverless.workgroups_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "workgroup_name",
    "type": "string",
    "description": "The name of the workgroup."
  },
  {
    "name": "workgroup",
    "type": "object",
    "description": "Definition for workgroup resource",
    "children": [
      {
        "name": "workgroup_name",
        "type": "string",
        "description": "The name of the workgroup."
      },
      {
        "name": "namespace_name",
        "type": "string",
        "description": "The namespace the workgroup is associated with."
      },
      {
        "name": "base_capacity",
        "type": "integer",
        "description": "The base compute capacity of the workgroup in Redshift Processing Units (RPUs)."
      },
      {
        "name": "max_capacity",
        "type": "integer",
        "description": "The max compute capacity of the workgroup in Redshift Processing Units (RPUs)."
      },
      {
        "name": "enhanced_vpc_routing",
        "type": "boolean",
        "description": "The value that specifies whether to enable enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC."
      },
      {
        "name": "config_parameters",
        "type": "array",
        "description": "A list of parameters to set for finer control over a database. Available options are datestyle, enable&#95;user&#95;activity&#95;logging, query&#95;group, search&#95;path, max&#95;query&#95;execution&#95;time, and require&#95;ssl."
      },
      {
        "name": "security_group_ids",
        "type": "array",
        "description": "A list of security group IDs to associate with the workgroup."
      },
      {
        "name": "subnet_ids",
        "type": "array",
        "description": "A list of subnet IDs the workgroup is associated with."
      },
      {
        "name": "publicly_accessible",
        "type": "boolean",
        "description": "A value that specifies whether the workgroup can be accessible from a public network."
      },
      {
        "name": "port",
        "type": "integer",
        "description": "The custom port to use when connecting to a workgroup. Valid port ranges are 5431-5455 and 8191-8215. The default is 5439."
      },
      {
        "name": "snapshot_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the snapshot to restore from."
      },
      {
        "name": "snapshot_name",
        "type": "string",
        "description": "The snapshot name to restore from."
      },
      {
        "name": "snapshot_owner_account",
        "type": "string",
        "description": "The Amazon Web Services account that owns the snapshot."
      },
      {
        "name": "recovery_point_id",
        "type": "string",
        "description": "The recovery point id to restore from."
      },
      {
        "name": "tags",
        "type": "array",
        "description": "The map of the key-value pairs used to tag the workgroup."
      },
      {
        "name": "track_name",
        "type": "string",
        "description": ""
      }
    ]
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
Lists all <code>workgroups</code> in a region.
```sql
SELECT
region,
workgroup_name
FROM awscc.redshiftserverless.workgroups_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>workgroups_list_only</code> resource, see <a href="/services/redshiftserverless/workgroups/#permissions"><code>workgroups</code></a>

