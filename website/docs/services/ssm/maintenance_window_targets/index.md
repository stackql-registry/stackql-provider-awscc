---
title: maintenance_window_targets
hide_title: false
hide_table_of_contents: false
keywords:
  - maintenance_window_targets
  - ssm
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

Creates, updates, deletes or gets a <code>maintenance_window_target</code> resource or lists <code>maintenance_window_targets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>maintenance_window_targets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SSM::MaintenanceWindowTarget</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ssm.maintenance_window_targets" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "owner_information",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "window_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "resource_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "targets",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "values",
        "type": "array",
        "description": ""
      },
      {
        "name": "key",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtarget.html"><code>AWS::SSM::MaintenanceWindowTarget</code></a>.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
</tbody>
</table>







