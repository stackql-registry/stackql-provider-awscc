---
title: builds_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - builds_list_only
  - gamelift
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

Lists <code>builds</code> in a region or regions, for all properties use <a href="/services/gamelift/builds/"><code>builds</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>builds_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::GameLift::Build</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.gamelift.builds_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "build_id",
    "type": "string",
    "description": "A unique identifier for a build to be deployed on the new fleet. If you are deploying the fleet with a custom game build, you must specify this property. The build must have been successfully uploaded to Amazon GameLift and be in a READY status. This fleet setting cannot be changed once the fleet is created."
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
Lists all <code>builds</code> in a region.
```sql
SELECT
region,
build_id
FROM awscc.gamelift.builds_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>builds_list_only</code> resource, see <a href="/services/gamelift/builds/#permissions"><code>builds</code></a>

