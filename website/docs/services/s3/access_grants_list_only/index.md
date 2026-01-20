---
title: access_grants_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - access_grants_list_only
  - s3
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

Lists <code>access_grants</code> in a region or regions, for all properties use <a href="/services/s3/access_grants/"><code>access_grants</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>access_grants_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::S3::AccessGrant resource is an Amazon S3 resource type representing permissions to a specific S3 bucket or prefix hosted in an S3 Access Grants instance.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.s3.access_grants_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "access_grant_id",
    "type": "string",
    "description": "The ID assigned to this access grant."
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
Lists all <code>access_grants</code> in a region.
```sql
SELECT
region,
access_grant_id
FROM awscc.s3.access_grants_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>access_grants_list_only</code> resource, see <a href="/services/s3/access_grants/#permissions"><code>access_grants</code></a>

