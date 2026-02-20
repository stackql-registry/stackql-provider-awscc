---
title: run_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - run_groups
  - omics
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

Creates, updates, deletes or gets a <code>run_group</code> resource or lists <code>run_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>run_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Omics::RunGroup Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.omics.run_groups" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "max_cpus",
    "type": "number",
    "description": ""
  },
  {
    "name": "max_gpus",
    "type": "number",
    "description": ""
  },
  {
    "name": "max_duration",
    "type": "number",
    "description": ""
  },
  {
    "name": "max_runs",
    "type": "number",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A map of resource tags"
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
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-rungroup.html"><code>AWS::Omics::RunGroup</code></a>.

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
    <td><code>run_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>run_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>run_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>run_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>run_groups</code></td>
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

Gets all properties from an individual <code>run_group</code>.
```sql
SELECT
region,
arn,
creation_time,
id,
max_cpus,
max_gpus,
max_duration,
max_runs,
name,
tags
FROM awscc.omics.run_groups
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>run_groups</code> in a region.
```sql
SELECT
region,
id
FROM awscc.omics.run_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>run_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.omics.run_groups (
 MaxCpus,
 MaxGpus,
 MaxDuration,
 MaxRuns,
 Name,
 Tags,
 region
)
SELECT 
'{{ MaxCpus }}',
 '{{ MaxGpus }}',
 '{{ MaxDuration }}',
 '{{ MaxRuns }}',
 '{{ Name }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.omics.run_groups (
 MaxCpus,
 MaxGpus,
 MaxDuration,
 MaxRuns,
 Name,
 Tags,
 region
)
SELECT 
 '{{ MaxCpus }}',
 '{{ MaxGpus }}',
 '{{ MaxDuration }}',
 '{{ MaxRuns }}',
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
  - name: run_group
    props:
      - name: MaxCpus
        value: null
      - name: MaxGpus
        value: null
      - name: MaxDuration
        value: null
      - name: MaxRuns
        value: null
      - name: Name
        value: '{{ Name }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.omics.run_groups
SET data__PatchDocument = string('{{ {
    "MaxCpus": max_cpus,
    "MaxGpus": max_gpus,
    "MaxDuration": max_duration,
    "MaxRuns": max_runs,
    "Name": name,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.omics.run_groups
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>run_groups</code> resource, the following permissions are required:

### Create
```json
omics:CreateRunGroup,
omics:TagResource
```

### Read
```json
omics:GetRunGroup
```

### Update
```json
omics:UpdateRunGroup,
omics:TagResource,
omics:GetRunGroup,
omics:ListTagsForResource,
omics:UntagResource
```

### Delete
```json
omics:DeleteRunGroup,
omics:GetRunGroup
```

### List
```json
omics:ListRunGroups
```
