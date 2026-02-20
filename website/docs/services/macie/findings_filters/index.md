---
title: findings_filters
hide_title: false
hide_table_of_contents: false
keywords:
  - findings_filters
  - macie
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

Creates, updates, deletes or gets a <code>findings_filter</code> resource or lists <code>findings_filters</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>findings_filters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Macie FindingsFilter resource schema.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.macie.findings_filters" /></td></tr>
</tbody>
</table>

## Fields
<Tabs
    defaultValue="get"
    values={[
        { label: 'get (all properties)', value: 'get' },
        { label: 'list (identifiers only)', value: 'list' }
    ]}
>
<TabItem value="get">

<SchemaTable fields={[
  {
    "name": "name",
    "type": "string",
    "description": "Findings filter name"
  },
  {
    "name": "description",
    "type": "string",
    "description": "Findings filter description"
  },
  {
    "name": "finding_criteria",
    "type": "object",
    "description": "Findings filter criteria.",
    "children": [
      {
        "name": "criterion",
        "type": "object",
        "description": "Map of filter criteria."
      }
    ]
  },
  {
    "name": "action",
    "type": "string",
    "description": "Findings filter action."
  },
  {
    "name": "position",
    "type": "integer",
    "description": "Findings filter position."
  },
  {
    "name": "id",
    "type": "string",
    "description": "Findings filter ID."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "Findings filter ARN."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A collection of tags associated with a resource",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The tag's key."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The tag's value."
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "id",
    "type": "string",
    "description": "Findings filter ID."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html"><code>AWS::Macie::FindingsFilter</code></a>.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Resource</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="create_resource" /></td>
    <td><code>findings_filters</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, FindingCriteria, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>findings_filters</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>findings_filters</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>findings_filters_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>findings_filters</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get (all properties)', value: 'get' },
        { label: 'list (identifiers only)', value: 'list' }
    ]}
>
<TabItem value="get">

Gets all properties from an individual <code>findings_filter</code>.
```sql
SELECT
region,
name,
description,
finding_criteria,
action,
position,
id,
arn,
tags
FROM awscc.macie.findings_filters
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>findings_filters</code> in a region.
```sql
SELECT
region,
id
FROM awscc.macie.findings_filters_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>findings_filter</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.macie.findings_filters (
 Name,
 FindingCriteria,
 region
)
SELECT 
'{{ Name }}',
 '{{ FindingCriteria }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.macie.findings_filters (
 Name,
 Description,
 FindingCriteria,
 Action,
 Position,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Description }}',
 '{{ FindingCriteria }}',
 '{{ Action }}',
 '{{ Position }}',
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
  - name: findings_filter
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: FindingCriteria
        value:
          Criterion: {}
      - name: Action
        value: '{{ Action }}'
      - name: Position
        value: '{{ Position }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.macie.findings_filters
SET data__PatchDocument = string('{{ {
    "Name": name,
    "Description": description,
    "FindingCriteria": finding_criteria,
    "Action": action,
    "Position": position,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.macie.findings_filters
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>findings_filters</code> resource, the following permissions are required:

### Create
```json
macie2:GetFindingsFilter,
macie2:CreateFindingsFilter,
macie2:TagResource
```

### Read
```json
macie2:GetFindingsFilter
```

### Update
```json
macie2:GetFindingsFilter,
macie2:UpdateFindingsFilter,
macie2:TagResource,
macie2:UntagResource
```

### Delete
```json
macie2:DeleteFindingsFilter
```

### List
```json
macie2:ListFindingsFilters
```
