---
title: topics_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - topics_list_only
  - sns
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

Lists <code>topics</code> in a region or regions, for all properties use <a href="/services/sns/topics/"><code>topics</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>topics_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::SNS::Topic&#96;&#96; resource creates a topic to which notifications can be published.<br />One account can create a maximum of 100,000 standard topics and 1,000 FIFO topics. For more information, see &#91;endpoints and quotas&#93;(https://docs.aws.amazon.com/general/latest/gr/sns.html) in the &#42;General Reference&#42;.<br />The structure of &#96;&#96;AUTHPARAMS&#96;&#96; depends on the .signature of the API request. For more information, see &#91;Examples of the complete Signature Version 4 signing process&#93;(https://docs.aws.amazon.com/general/latest/gr/sigv4-signed-request-examples.html) in the &#42;General Reference&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sns.topics_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "topic_arn",
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
Lists all <code>topics</code> in a region.
```sql
SELECT
region,
topic_arn
FROM awscc.sns.topics_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>topics_list_only</code> resource, see <a href="/services/sns/topics/#permissions"><code>topics</code></a>

