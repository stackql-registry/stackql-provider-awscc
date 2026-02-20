---
title: backup_selections
hide_title: false
hide_table_of_contents: false
keywords:
  - backup_selections
  - backup
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

Creates, updates, deletes or gets a <code>backup_selection</code> resource or lists <code>backup_selections</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>backup_selections</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Backup::BackupSelection</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.backup.backup_selections" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "backup_plan_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "backup_selection",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "iam_role_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "list_of_tags",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "condition_key",
            "type": "string",
            "description": ""
          },
          {
            "name": "condition_value",
            "type": "string",
            "description": ""
          },
          {
            "name": "condition_type",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "resources",
        "type": "array",
        "description": ""
      },
      {
        "name": "selection_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "not_resources",
        "type": "array",
        "description": ""
      },
      {
        "name": "conditions",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "string_equals",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "condition_key",
                "type": "string",
                "description": ""
              },
              {
                "name": "condition_value",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "string_not_equals",
            "type": "array",
            "description": ""
          },
          {
            "name": "string_like",
            "type": "array",
            "description": ""
          },
          {
            "name": "string_not_like",
            "type": "array",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "selection_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html"><code>AWS::Backup::BackupSelection</code></a>.

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
    <td><code>backup_selections</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="BackupSelection, BackupPlanId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>backup_selections</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>backup_selections_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>backup_selections</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
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

Gets all properties from an individual <code>backup_selection</code>.
```sql
SELECT
region,
id,
backup_plan_id,
backup_selection,
selection_id
FROM awscc.backup.backup_selections
WHERE region = 'us-east-1' AND Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>backup_selections</code> in a region.
```sql
SELECT
region,
id
FROM awscc.backup.backup_selections_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>backup_selection</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.backup.backup_selections (
 BackupPlanId,
 BackupSelection,
 region
)
SELECT 
'{{ BackupPlanId }}',
 '{{ BackupSelection }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.backup.backup_selections (
 BackupPlanId,
 BackupSelection,
 region
)
SELECT 
 '{{ BackupPlanId }}',
 '{{ BackupSelection }}',
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
  - name: backup_selection
    props:
      - name: BackupPlanId
        value: '{{ BackupPlanId }}'
      - name: BackupSelection
        value:
          IamRoleArn: '{{ IamRoleArn }}'
          ListOfTags:
            - ConditionKey: '{{ ConditionKey }}'
              ConditionValue: '{{ ConditionValue }}'
              ConditionType: '{{ ConditionType }}'
          Resources:
            - '{{ Resources[0] }}'
          SelectionName: '{{ SelectionName }}'
          NotResources:
            - '{{ NotResources[0] }}'
          Conditions:
            StringEquals:
              - ConditionKey: '{{ ConditionKey }}'
                ConditionValue: '{{ ConditionValue }}'
            StringNotEquals:
              - null
            StringLike:
              - null
            StringNotLike:
              - null

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.backup.backup_selections
WHERE Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>backup_selections</code> resource, the following permissions are required:

<Tabs
    defaultValue="delete"
    values={[
      { label: 'Delete', value: 'delete', },
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="delete">

```json
backup:GetBackupSelection,
backup:DeleteBackupSelection
```

</TabItem>
<TabItem value="read">

```json
backup:GetBackupSelection
```

</TabItem>
<TabItem value="create">

```json
backup:CreateBackupSelection,
iam:GetRole,
iam:PassRole,
iam:CreateServiceLinkedRole
```

</TabItem>
<TabItem value="list">

```json
backup:ListBackupSelections,
backup:ListBackupPlans
```

</TabItem>
</Tabs>