---
title: filters
hide_title: false
hide_table_of_contents: false
keywords:
  - filters
  - guardduty
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

Creates, updates, deletes or gets a <code>filter</code> resource or lists <code>filters</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>filters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::GuardDuty::Filter</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.guardduty.filters" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "action",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "detector_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "finding_criteria",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "criterion",
        "type": "object",
        "description": ""
      }
    ]
  },
  {
    "name": "rank",
    "type": "integer",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-filter.html"><code>AWS::GuardDuty::Filter</code></a>.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="create_resource" /></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DetectorId, Name, FindingCriteria, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>filter</code>.
```sql
SELECT
region,
action,
description,
detector_id,
finding_criteria,
rank,
name,
tags
FROM awscc.guardduty.filters
WHERE region = 'us-east-1' AND data__Identifier = '<DetectorId>|<Name>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>filter</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

<Tabs
    defaultValue="required"
    values={[
      { label: 'Required Properties', value: 'required', },
      { label: 'All Properties', value: 'all', },
      { label: 'Manifest', value: 'manifest', },
    ]
}>
<TabItem value="required">

```sql
/*+ create */
INSERT INTO awscc.guardduty.filters (
 DetectorId,
 FindingCriteria,
 Name,
 region
)
SELECT 
'{{ DetectorId }}',
 '{{ FindingCriteria }}',
 '{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.guardduty.filters (
 Action,
 Description,
 DetectorId,
 FindingCriteria,
 Rank,
 Name,
 Tags,
 region
)
SELECT 
 '{{ Action }}',
 '{{ Description }}',
 '{{ DetectorId }}',
 '{{ FindingCriteria }}',
 '{{ Rank }}',
 '{{ Name }}',
 '{{ Tags }}',
 '{{ region }}';
```
</TabItem>
<TabItem value="manifest">

```yaml
version: 1
name: stack name
description: stack description
providers:
  - aws
globals:
  - name: region
    value: '{{ vars.AWS_REGION }}'
resources:
  - name: filter
    props:
      - name: Action
        value: '{{ Action }}'
      - name: Description
        value: '{{ Description }}'
      - name: DetectorId
        value: '{{ DetectorId }}'
      - name: FindingCriteria
        value:
          Criterion: {}
      - name: Rank
        value: '{{ Rank }}'
      - name: Name
        value: '{{ Name }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.guardduty.filters
WHERE data__Identifier = '<DetectorId|Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>filters</code> resource, the following permissions are required:

### Create
```json
guardduty:CreateFilter,
guardduty:GetFilter,
guardduty:TagResource
```

### Read
```json
guardduty:GetFilter,
guardduty:ListTagsForResource
```

### Delete
```json
guardduty:ListDetectors,
guardduty:ListFilters,
guardduty:GetFilter,
guardduty:DeleteFilter
```

### Update
```json
guardduty:UpdateFilter,
guardduty:GetFilter,
guardduty:ListFilters,
guardduty:TagResource,
guardduty:UntagResource
```

### List
```json
guardduty:ListFilters
```
