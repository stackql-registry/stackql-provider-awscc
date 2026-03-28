---
title: tagged_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - tagged_resources
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

Creates, updates, deletes or gets a <code>tagged_resource</code> resource or lists <code>tagged_resources</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>tagged_resources</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A list of resource ARNs and the tags (keys and values) that are associated with each.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.tagging.tagged_resources" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "resource_arn",
    "type": "string",
    "description": "The ARN of the resource."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags that have been applied to one or more Amazon Web Services resources.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "One part of a key-value pair that makes up a tag. A key is a general label that acts like a category for more specific tag values."
      },
      {
        "name": "value",
        "type": "string",
        "description": "One part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key). The value can be empty or null."
      }
    ]
  },
  {
    "name": "compliance_details",
    "type": "object",
    "description": "Information that shows whether a resource is compliant with the effective tag policy, including details on any noncompliant tag keys.",
    "children": [
      {
        "name": "noncompliant_keys",
        "type": "array",
        "description": "These tag keys on the resource are noncompliant with the effective tag policy."
      },
      {
        "name": "keys_with_noncompliant_values",
        "type": "object",
        "description": "These are keys defined in the effective policy that are on the resource with either incorrect case treatment or noncompliant values."
      },
      {
        "name": "compliance_status",
        "type": "boolean",
        "description": "Whether a resource is compliant with the effective tag policy."
      }
    ]
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
    <td><CopyableCode code="get_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

```sql
SELECT
  region
FROM awscc.tagging.tagged_resources
WHERE
  region = '{{ region }}';
```






