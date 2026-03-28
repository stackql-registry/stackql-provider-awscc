---
title: tag_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - tag_keys
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

import CodeBlock from '@theme/CodeBlock';
import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>tag_key</code> resource or lists <code>tag_keys</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>tag_keys</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>tag_keys</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.tagging.tag_keys" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "pagination_token",
    "type": "string",
    "description": "A string that indicates that there is more data available than this response contains. To receive the next part of the response, specify this response value as the <code>PaginationToken</code> value in the request for the next page."
  },
  {
    "name": "tag_keys",
    "type": "array",
    "description": "A list of all tag keys in the Amazon Web Services account."
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
    <td><CopyableCode code="get_tag_keys" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

```sql
SELECT
  region
FROM awscc.tagging.tag_keys
WHERE
  region = '{{ region }}';
```






