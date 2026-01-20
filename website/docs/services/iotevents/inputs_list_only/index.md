---
title: inputs_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - inputs_list_only
  - iotevents
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

Lists <code>inputs</code> in a region or regions, for all properties use <a href="/services/iotevents/inputs/"><code>inputs</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>inputs_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::IoTEvents::Input resource creates an input. To monitor your devices and processes, they must have a way to get telemetry data into ITE. This is done by sending messages as &#42;inputs&#42; to ITE. For more information, see &#91;How to Use&#93;(https://docs.aws.amazon.com/iotevents/latest/developerguide/how-to-use-iotevents.html) in the &#42;Developer Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotevents.inputs_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "input_name",
    "type": "string",
    "description": "The name of the input."
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
Lists all <code>inputs</code> in a region.
```sql
SELECT
region,
input_name
FROM awscc.iotevents.inputs_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>inputs_list_only</code> resource, see <a href="/services/iotevents/inputs/#permissions"><code>inputs</code></a>

