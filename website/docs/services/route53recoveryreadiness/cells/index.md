---
title: cells
hide_title: false
hide_table_of_contents: false
keywords:
  - cells
  - route53recoveryreadiness
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

Creates, updates, deletes or gets a <code>cell</code> resource or lists <code>cells</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>cells</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The API Schema for AWS Route53 Recovery Readiness Cells.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.route53recoveryreadiness.cells" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "cell_name",
    "type": "string",
    "description": "The name of the cell to create."
  },
  {
    "name": "cell_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the cell."
  },
  {
    "name": "cells",
    "type": "array",
    "description": "A list of cell Amazon Resource Names (ARNs) contained within this cell, for use in nested cells. For example, Availability Zones within specific Regions."
  },
  {
    "name": "parent_readiness_scopes",
    "type": "array",
    "description": "The readiness scope for the cell, which can be a cell Amazon Resource Name (ARN) or a recovery group ARN. This is a list but currently can have only one element."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A collection of tags associated with a resource",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-cell.html"><code>AWS::Route53RecoveryReadiness::Cell</code></a>.

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
    <td><CopyableCode code="region" /></td>
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

Gets all properties from an individual <code>cell</code>.
```sql
SELECT
region,
cell_name,
cell_arn,
cells,
parent_readiness_scopes,
tags
FROM awscc.route53recoveryreadiness.cells
WHERE region = 'us-east-1' AND data__Identifier = '<CellName>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>cell</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.route53recoveryreadiness.cells (
 CellName,
 Cells,
 Tags,
 region
)
SELECT 
'{{ CellName }}',
 '{{ Cells }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.route53recoveryreadiness.cells (
 CellName,
 Cells,
 Tags,
 region
)
SELECT 
 '{{ CellName }}',
 '{{ Cells }}',
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
  - name: cell
    props:
      - name: CellName
        value: '{{ CellName }}'
      - name: Cells
        value:
          - '{{ Cells[0] }}'
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
DELETE FROM awscc.route53recoveryreadiness.cells
WHERE data__Identifier = '<CellName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>cells</code> resource, the following permissions are required:

### Create
```json
route53-recovery-readiness:CreateCell,
route53-recovery-readiness:GetCell,
route53-recovery-readiness:ListTagsForResources,
route53-recovery-readiness:TagResource
```

### Read
```json
route53-recovery-readiness:GetCell,
route53-recovery-readiness:ListTagsForResources
```

### Update
```json
route53-recovery-readiness:GetCell,
route53-recovery-readiness:ListTagsForResources,
route53-recovery-readiness:TagResource,
route53-recovery-readiness:UntagResource,
route53-recovery-readiness:UpdateCell
```

### Delete
```json
route53-recovery-readiness:DeleteCell,
route53-recovery-readiness:GetCell
```

### List
```json
route53-recovery-readiness:ListCells
```
