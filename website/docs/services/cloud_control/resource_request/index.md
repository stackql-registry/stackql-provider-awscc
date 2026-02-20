---
title: resource_request
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_request
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

For more information about Amazon Web Services Cloud Control API, see the <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/what-is-cloudcontrolapi.html">Amazon Web Services Cloud Control API User Guide</a>.

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>resource_request</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>resource_request</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloud_control.resource_request" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "error_code",
    "type": "string",
    "description": ""
  },
  {
    "name": "event_time",
    "type": "number",
    "description": ""
  },
  {
    "name": "identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "operation",
    "type": "string",
    "description": ""
  },
  {
    "name": "operation_status",
    "type": "string",
    "description": ""
  },
  {
    "name": "request_token",
    "type": "string",
    "description": ""
  },
  {
    "name": "resource_model",
    "type": "string",
    "description": ""
  },
  {
    "name": "retry_after",
    "type": "number",
    "description": ""
  },
  {
    "name": "status_message",
    "type": "string",
    "description": ""
  },
  {
    "name": "type_name",
    "type": "string",
    "description": ""
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
    <td><CopyableCode code="get_resource_request" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>







