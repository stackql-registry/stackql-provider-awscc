---
title: vpc_links_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_links_list_only
  - apigateway
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

Lists <code>vpc_links</code> in a region or regions, for all properties use <a href="/services/apigateway/vpc_links/"><code>vpc_links</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vpc_links_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApiGateway::VpcLink&#96;&#96; resource creates an API Gateway VPC link for a REST API to access resources in an Amazon Virtual Private Cloud (VPC). For more information, see &#91;vpclink:create&#93;(https://docs.aws.amazon.com/apigateway/latest/api/API&#95;CreateVpcLink.html) in the &#96;&#96;Amazon API Gateway REST API Reference&#96;&#96;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigateway.vpc_links_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "vpc_link_id",
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
Lists all <code>vpc_links</code> in a region.
```sql
SELECT
region,
vpc_link_id
FROM awscc.apigateway.vpc_links_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>vpc_links_list_only</code> resource, see <a href="/services/apigateway/vpc_links/#permissions"><code>vpc_links</code></a>

