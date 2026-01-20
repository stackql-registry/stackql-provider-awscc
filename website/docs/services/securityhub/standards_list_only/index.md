---
title: standards_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - standards_list_only
  - securityhub
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

Lists <code>standards</code> in a region or regions, for all properties use <a href="/services/securityhub/standards/"><code>standards</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>standards_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::SecurityHub::Standard&#96;&#96; resource specifies the enablement of a security standard. The standard is identified by the &#96;&#96;StandardsArn&#96;&#96; property. To view a list of ASH standards and their Amazon Resource Names (ARNs), use the &#91;DescribeStandards&#93;(https://docs.aws.amazon.com/securityhub/1.0/APIReference/API&#95;DescribeStandards.html) API operation.<br />You must create a separate &#96;&#96;AWS::SecurityHub::Standard&#96;&#96; resource for each standard that you want to enable.<br />For more information about ASH standards, see &#91;standards reference&#93;(https://docs.aws.amazon.com/securityhub/latest/userguide/standards-reference.html) in the &#42;User Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.securityhub.standards_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "standards_subscription_arn",
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
Lists all <code>standards</code> in a region.
```sql
SELECT
region,
standards_subscription_arn
FROM awscc.securityhub.standards_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>standards_list_only</code> resource, see <a href="/services/securityhub/standards/#permissions"><code>standards</code></a>

