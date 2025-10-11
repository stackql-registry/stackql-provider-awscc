---
title: volumes_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - volumes_list_only
  - workspacesinstances
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

Lists <code>volumes</code> in a region or regions, for all properties use <a href="/services/workspacesinstances/volumes/"><code>volumes</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>volumes_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::WorkspacesInstances::Volume - Manages WorkSpaces Volume resources</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.workspacesinstances.volumes_list_only" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="volume_id" /></td><td><code>string</code></td><td>Unique identifier for the volume</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

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
Lists all <code>volumes</code> in a region.
```sql
SELECT
region,
volume_id
FROM awscc.workspacesinstances.volumes_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>volumes_list_only</code> resource, see <a href="/services/workspacesinstances/volumes/#permissions"><code>volumes</code></a>

