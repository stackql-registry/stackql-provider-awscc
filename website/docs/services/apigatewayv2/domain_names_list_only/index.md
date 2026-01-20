---
title: domain_names_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_names_list_only
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

Lists <code>domain_names</code> in a region or regions, for all properties use <a href="/services/apigatewayv2/domain_names/"><code>domain_names</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>domain_names_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApiGatewayV2::DomainName&#96;&#96; resource specifies a custom domain name for your API in Amazon API Gateway (API Gateway). <br />You can use a custom domain name to provide a URL that's more intuitive and easier to recall. For more information about using custom domain names, see &#91;Set up Custom Domain Name for an API in API Gateway&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html) in the &#42;API Gateway Developer Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigatewayv2.domain_names_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "domain_name",
    "type": "string",
    "description": "The custom domain name for your API in Amazon API Gateway. Uppercase letters and the underscore (&#96;&#96;&#95;&#96;&#96;) character are not supported."
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
Lists all <code>domain_names</code> in a region.
```sql
SELECT
region,
domain_name
FROM awscc.apigatewayv2.domain_names_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>domain_names_list_only</code> resource, see <a href="/services/apigatewayv2/domain_names/#permissions"><code>domain_names</code></a>

