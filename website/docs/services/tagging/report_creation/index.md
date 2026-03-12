---
title: report_creation
hide_title: false
hide_table_of_contents: false
keywords:
  - report_creation
  - tagging
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

Creates, updates, deletes or gets a <code>report_creation</code> resource or lists <code>report_creation</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>report_creation</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>report_creation</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.tagging.report_creation" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "status",
    "type": "string",
    "description": "<p>Reports the status of the operation.</p> <p>The operation status can be one of the following:</p> <ul> <li> <p> <code>RUNNING</code> - Report creation is in progress.</p> </li> <li> <p> <code>SUCCEEDED</code> - Report creation is complete. You can open the report from the Amazon S3 bucket that you specified when you ran <code>StartReportCreation</code>.</p> </li> <li> <p> <code>FAILED</code> - Report creation timed out or the Amazon S3 bucket is not accessible. </p> </li> <li> <p> <code>NO REPORT</code> - No report was generated in the last 90 days.</p> </li> </ul>"
  },
  {
    "name": "s3_location",
    "type": "string",
    "description": "The path to the Amazon S3 bucket where the report was stored on creation."
  },
  {
    "name": "error_message",
    "type": "string",
    "description": "Details of the common errors that all operations return."
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
    <td><CopyableCode code="describe_report_creation" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

```sql
SELECT
  region
FROM awscc.tagging.report_creation
WHERE
  region = 'us-east-1';
```





