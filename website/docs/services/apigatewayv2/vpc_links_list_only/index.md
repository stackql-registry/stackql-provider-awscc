---
title: vpc_links_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_links_list_only
  - apigatewayv2
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

Lists <code>vpc_links</code> in a region or regions, for all properties use <a href="/services/apigatewayv2/vpc_links/"><code>vpc_links</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vpc_links_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApiGatewayV2::VpcLink&#96;&#96; resource creates a VPC link. Supported only for HTTP APIs. The VPC link status must transition from &#96;&#96;PENDING&#96;&#96; to &#96;&#96;AVAILABLE&#96;&#96; to successfully create a VPC link, which can take up to 10 minutes. To learn more, see &#91;Working with VPC Links for HTTP APIs&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vpc-links.html) in the &#42;API Gateway Developer Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigatewayv2.vpc_links_list_only" /></td></tr>
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
FROM awscc.apigatewayv2.vpc_links_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>vpc_links_list_only</code> resource, see <a href="/services/apigatewayv2/vpc_links/#permissions"><code>vpc_links</code></a>

