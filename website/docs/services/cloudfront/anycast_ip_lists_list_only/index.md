---
title: anycast_ip_lists_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - anycast_ip_lists_list_only
  - cloudfront
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

Lists <code>anycast_ip_lists</code> in a region or regions, for all properties use <a href="/services/cloudfront/anycast_ip_lists/"><code>anycast_ip_lists</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>anycast_ip_lists_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An Anycast static IP list. For more information, see &#91;Request Anycast static IPs to use for allowlisting&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/request-static-ips.html) in the &#42;Amazon CloudFront Developer Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudfront.anycast_ip_lists_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "id",
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
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples
Lists all <code>anycast_ip_lists</code> in a region.
```sql
SELECT
region,
id
FROM awscc.cloudfront.anycast_ip_lists_list_only
;
```


## Permissions

For permissions required to operate on the <code>anycast_ip_lists_list_only</code> resource, see <a href="/services/cloudfront/anycast_ip_lists/#permissions"><code>anycast_ip_lists</code></a>

