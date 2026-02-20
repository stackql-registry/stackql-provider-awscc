---
title: recovery_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - recovery_groups
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

Creates, updates, deletes or gets a <code>recovery_group</code> resource or lists <code>recovery_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>recovery_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>AWS Route53 Recovery Readiness Recovery Group Schema and API specifications.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.route53recoveryreadiness.recovery_groups" /></td></tr>
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
    "name": "recovery_group_name",
    "type": "string",
    "description": "The name of the recovery group to create."
  },
  {
    "name": "cells",
    "type": "array",
    "description": "A list of the cell Amazon Resource Names (ARNs) in the recovery group."
  },
  {
    "name": "recovery_group_arn",
    "type": "string",
    "description": "A collection of tags associated with a resource."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A collection of tags associated with a resource.",
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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "recovery_group_name",
    "type": "string",
    "description": "The name of the recovery group to create."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-recoverygroup.html"><code>AWS::Route53RecoveryReadiness::RecoveryGroup</code></a>.

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
    <td><code>recovery_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>recovery_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>recovery_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>recovery_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>recovery_groups</code></td>
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

Gets all properties from an individual <code>recovery_group</code>.
```sql
SELECT
region,
recovery_group_name,
cells,
recovery_group_arn,
tags
FROM awscc.route53recoveryreadiness.recovery_groups
WHERE region = 'us-east-1' AND data__Identifier = '<RecoveryGroupName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>recovery_groups</code> in a region.
```sql
SELECT
region,
recovery_group_name
FROM awscc.route53recoveryreadiness.recovery_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>recovery_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.route53recoveryreadiness.recovery_groups (
 RecoveryGroupName,
 Cells,
 Tags,
 region
)
SELECT 
'{{ RecoveryGroupName }}',
 '{{ Cells }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.route53recoveryreadiness.recovery_groups (
 RecoveryGroupName,
 Cells,
 Tags,
 region
)
SELECT 
 '{{ RecoveryGroupName }}',
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
  - name: recovery_group
    props:
      - name: RecoveryGroupName
        value: '{{ RecoveryGroupName }}'
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

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.route53recoveryreadiness.recovery_groups
SET data__PatchDocument = string('{{ {
    "Cells": cells,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<RecoveryGroupName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.route53recoveryreadiness.recovery_groups
WHERE data__Identifier = '<RecoveryGroupName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>recovery_groups</code> resource, the following permissions are required:

### Create
```json
route53-recovery-readiness:CreateRecoveryGroup,
route53-recovery-readiness:GetRecoveryGroup,
route53-recovery-readiness:GetCell,
route53-recovery-readiness:ListTagsForResources,
route53-recovery-readiness:TagResource
```

### Read
```json
route53-recovery-readiness:GetRecoveryGroup,
route53-recovery-readiness:ListTagsForResources
```

### Update
```json
route53-recovery-readiness:UpdateRecoveryGroup,
route53-recovery-readiness:GetRecoveryGroup,
route53-recovery-readiness:GetCell,
route53-recovery-readiness:ListTagsForResources,
route53-recovery-readiness:TagResource,
route53-recovery-readiness:UntagResource
```

### Delete
```json
route53-recovery-readiness:DeleteRecoveryGroup,
route53-recovery-readiness:GetRecoveryGroup
```

### List
```json
route53-recovery-readiness:ListRecoveryGroups
```
