---
title: table_buckets_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - table_buckets_list_only
  - s3tables
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

Lists <code>table_buckets</code> in a region or regions, for all properties use <a href="/services/s3tables/table_buckets/"><code>table_buckets</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>table_buckets_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Creates an Amazon S3 Tables table bucket in the same AWS Region where you create the AWS CloudFormation stack.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.s3tables.table_buckets_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "table_bucket_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the specified table bucket."
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
Lists all <code>table_buckets</code> in a region.
```sql
SELECT
region,
table_bucket_arn
FROM awscc.s3tables.table_buckets_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>table_buckets_list_only</code> resource, see <a href="/services/s3tables/table_buckets/#permissions"><code>table_buckets</code></a>

