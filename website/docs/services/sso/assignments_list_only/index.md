---
title: assignments_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - assignments_list_only
  - sso
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

Lists <code>assignments</code> in a region or regions, for all properties use <a href="/services/sso/assignments/"><code>assignments</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>assignments_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for SSO assignmet</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sso.assignments_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "instance_arn",
    "type": "string",
    "description": "The sso instance that the permission set is owned."
  },
  {
    "name": "target_id",
    "type": "string",
    "description": "The account id to be provisioned."
  },
  {
    "name": "target_type",
    "type": "string",
    "description": "The type of resource to be provsioned to, only aws account now"
  },
  {
    "name": "permission_set_arn",
    "type": "string",
    "description": "The permission set that the assignemt will be assigned"
  },
  {
    "name": "principal_type",
    "type": "string",
    "description": "The assignee's type, user/group"
  },
  {
    "name": "principal_id",
    "type": "string",
    "description": "The assignee's identifier, user id/group id"
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
Lists all <code>assignments</code> in a region.
```sql
SELECT
region,
instance_arn,
target_id,
target_type,
permission_set_arn,
principal_type,
principal_id
FROM awscc.sso.assignments_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>assignments_list_only</code> resource, see <a href="/services/sso/assignments/#permissions"><code>assignments</code></a>

