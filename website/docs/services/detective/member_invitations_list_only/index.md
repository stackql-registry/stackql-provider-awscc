---
title: member_invitations_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - member_invitations_list_only
  - detective
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

Lists <code>member_invitations</code> in a region or regions, for all properties use <a href="/services/detective/member_invitations/"><code>member_invitations</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>member_invitations_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::Detective::MemberInvitation</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.detective.member_invitations_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "graph_arn",
    "type": "string",
    "description": "The ARN of the graph to which the member account will be invited"
  },
  {
    "name": "member_id",
    "type": "string",
    "description": "The AWS account ID to be invited to join the graph as a member"
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
Lists all <code>member_invitations</code> in a region.
```sql
SELECT
region,
graph_arn,
member_id
FROM awscc.detective.member_invitations_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>member_invitations_list_only</code> resource, see <a href="/services/detective/member_invitations/#permissions"><code>member_invitations</code></a>

