---
title: public_type_versions_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - public_type_versions_list_only
  - cloudformation
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

Lists <code>public_type_versions</code> in a region or regions, for all properties use <a href="/services/cloudformation/public_type_versions/"><code>public_type_versions</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>public_type_versions_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Test and Publish a resource that has been registered in the CloudFormation Registry.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudformation.public_type_versions_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Number (ARN) of the extension."
  },
  {
    "name": "public_type_arn",
    "type": "string",
    "description": "The Amazon Resource Number (ARN) assigned to the public extension upon publication"
  },
  {
    "name": "type",
    "type": "string",
    "description": "The kind of extension"
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
Lists all <code>public_type_versions</code> in a region.
```sql
SELECT
region,
public_type_arn
FROM awscc.cloudformation.public_type_versions_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>public_type_versions_list_only</code> resource, see <a href="/services/cloudformation/public_type_versions/#permissions"><code>public_type_versions</code></a>

