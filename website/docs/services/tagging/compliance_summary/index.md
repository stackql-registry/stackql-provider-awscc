---
title: compliance_summary
hide_title: false
hide_table_of_contents: false
keywords:
  - compliance_summary
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

Creates, updates, deletes or gets a <code>compliance_summary</code> resource or lists <code>compliance_summary</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>compliance_summary</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>compliance_summary</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.tagging.compliance_summary" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "summary_list",
    "type": "array",
    "description": "A table that shows counts of noncompliant resources.",
    "children": [
      {
        "name": "last_updated",
        "type": "string",
        "description": "The timestamp that shows when this summary was generated in this Region."
      },
      {
        "name": "target_id",
        "type": "string",
        "description": "The account identifier or the root identifier of the organization. If you don't know the root ID, you can call the Organizations &lt;a href=\"https://docs.aws.amazon.com/organizations/latest/APIReference/API&#95;ListRoots.html\"&gt;ListRoots&lt;/a&gt; API."
      },
      {
        "name": "target_id_type",
        "type": "string",
        "description": "Whether the target is an account, an OU, or the organization root."
      },
      {
        "name": "region",
        "type": "string",
        "description": "The Amazon Web Services Region that the summary applies to."
      },
      {
        "name": "resource_type",
        "type": "string",
        "description": "The Amazon Web Services resource type."
      },
      {
        "name": "non_compliant_resources",
        "type": "integer",
        "description": "The count of noncompliant resources."
      }
    ]
  },
  {
    "name": "pagination_token",
    "type": "string",
    "description": "A string that indicates that there is more data available than this response contains. To receive the next part of the response, specify this response value as the <code>PaginationToken</code> value in the request for the next page."
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
    <td><CopyableCode code="get_compliance_summary" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

```sql
SELECT
  region
FROM awscc.tagging.compliance_summary
WHERE
  region = 'us-east-1';
```





