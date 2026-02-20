---
title: vw_pending_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - vw_pending_requests
  - cloud_control
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

Creates, updates, deletes or gets a <code>vw_pending_request</code> resource or lists <code>vw_pending_requests</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vw_pending_requests</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>vw_pending_requests</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloud_control.vw_pending_requests" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
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
</tbody>
</table>







