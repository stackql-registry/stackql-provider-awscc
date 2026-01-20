---
title: custom_action_types_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_action_types_list_only
  - codepipeline
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

Lists <code>custom_action_types</code> in a region or regions, for all properties use <a href="/services/codepipeline/custom_action_types/"><code>custom_action_types</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>custom_action_types_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::CodePipeline::CustomActionType resource creates a custom action for activities that aren't included in the CodePipeline default actions, such as running an internally developed build process or a test suite. You can use these custom actions in the stage of a pipeline.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.codepipeline.custom_action_types_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "category",
    "type": "string",
    "description": "The category of the custom action, such as a build action or a test action."
  },
  {
    "name": "provider",
    "type": "string",
    "description": "The provider of the service used in the custom action, such as AWS CodeDeploy."
  },
  {
    "name": "version",
    "type": "string",
    "description": "The version identifier of the custom action."
  },
  {
    "name": "id",
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
Lists all <code>custom_action_types</code> in a region.
```sql
SELECT
region,
category,
provider,
version
FROM awscc.codepipeline.custom_action_types_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>custom_action_types_list_only</code> resource, see <a href="/services/codepipeline/custom_action_types/#permissions"><code>custom_action_types</code></a>

