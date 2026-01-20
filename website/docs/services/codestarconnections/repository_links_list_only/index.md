---
title: repository_links_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - repository_links_list_only
  - codestarconnections
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

Lists <code>repository_links</code> in a region or regions, for all properties use <a href="/services/codestarconnections/repository_links/"><code>repository_links</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>repository_links_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Schema for AWS::CodeStarConnections::RepositoryLink resource which is used to aggregate repository metadata relevant to synchronizing source provider content to AWS Resources.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.codestarconnections.repository_links_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "repository_link_arn",
    "type": "string",
    "description": "A unique Amazon Resource Name (ARN) to designate the repository link."
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
Lists all <code>repository_links</code> in a region.
```sql
SELECT
region,
repository_link_arn
FROM awscc.codestarconnections.repository_links_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>repository_links_list_only</code> resource, see <a href="/services/codestarconnections/repository_links/#permissions"><code>repository_links</code></a>

