---
title: volume_associations_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - volume_associations_list_only
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
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Lists <code>volume_associations</code> in a region or regions, for all properties use <a href="/services/workspacesinstances/volume_associations/"><code>volume_associations</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>volume_associations_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::WorkspacesInstances::VolumeAssociation</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.workspacesinstances.volume_associations_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "workspace_instance_id",
    "type": "string",
    "description": "ID of the workspace instance to associate with the volume"
  },
  {
    "name": "volume_id",
    "type": "string",
    "description": "ID of the volume to attach to the workspace instance"
  },
  {
    "name": "device",
    "type": "string",
    "description": "The device name for the volume attachment"
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
Lists all <code>volume_associations</code> in a region.
```sql
SELECT
region,
workspace_instance_id,
volume_id,
device
FROM awscc.workspacesinstances.volume_associations_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>volume_associations_list_only</code> resource, see <a href="/services/workspacesinstances/volume_associations/#permissions"><code>volume_associations</code></a>

