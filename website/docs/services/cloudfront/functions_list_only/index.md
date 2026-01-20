---
title: functions_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - functions_list_only
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

Lists <code>functions</code> in a region or regions, for all properties use <a href="/services/cloudfront/functions/"><code>functions</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>functions_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Creates a CF function.<br />To create a function, you provide the function code and some configuration information about the function. The response contains an Amazon Resource Name (ARN) that uniquely identifies the function, and the function’s stage.<br />By default, when you create a function, it’s in the &#96;&#96;DEVELOPMENT&#96;&#96; stage. In this stage, you can &#91;test the function&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/test-function.html) in the CF console (or with &#96;&#96;TestFunction&#96;&#96; in the CF API).<br />When you’re ready to use your function with a CF distribution, publish the function to the &#96;&#96;LIVE&#96;&#96; stage. You can do this in the CF console, with &#96;&#96;PublishFunction&#96;&#96; in the CF API, or by updating the &#96;&#96;AWS::CloudFront::Function&#96;&#96; resource with the &#96;&#96;AutoPublish&#96;&#96; property set to &#96;&#96;true&#96;&#96;. When the function is published to the &#96;&#96;LIVE&#96;&#96; stage, you can attach it to a distribution’s cache behavior, using the function’s ARN.<br />To automatically publish the function to the &#96;&#96;LIVE&#96;&#96; stage when it’s created, set the &#96;&#96;AutoPublish&#96;&#96; property to &#96;&#96;true&#96;&#96;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudfront.functions_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "function_arn",
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
Lists all <code>functions</code> in a region.
```sql
SELECT
region,
function_arn
FROM awscc.cloudfront.functions_list_only
;
```


## Permissions

For permissions required to operate on the <code>functions_list_only</code> resource, see <a href="/services/cloudfront/functions/#permissions"><code>functions</code></a>

