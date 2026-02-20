---
title: restore_testing_selections
hide_title: false
hide_table_of_contents: false
keywords:
  - restore_testing_selections
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

Creates, updates, deletes or gets a <code>restore_testing_selection</code> resource or lists <code>restore_testing_selections</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>restore_testing_selections</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Backup::RestoreTestingSelection</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.backup.restore_testing_selections" /></td></tr>
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
    "name": "iam_role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "protected_resource_arns",
    "type": "array",
    "description": ""
  },
  {
    "name": "protected_resource_conditions",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "string_equals",
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
        "name": "string_not_equals",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "protected_resource_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "restore_metadata_overrides",
    "type": "object",
    "description": ""
  },
  {
    "name": "restore_testing_plan_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "restore_testing_selection_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "validation_window_hours",
    "type": "integer",
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
    "name": "restore_testing_plan_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "restore_testing_selection_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingselection.html"><code>AWS::Backup::RestoreTestingSelection</code></a>.

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
    <td><code>restore_testing_selections</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="IamRoleArn, ProtectedResourceType, RestoreTestingPlanName, RestoreTestingSelectionName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>restore_testing_selections</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>restore_testing_selections</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>restore_testing_selections_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>restore_testing_selections</code></td>
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

Gets all properties from an individual <code>restore_testing_selection</code>.
```sql
SELECT
region,
iam_role_arn,
protected_resource_arns,
protected_resource_conditions,
protected_resource_type,
restore_metadata_overrides,
restore_testing_plan_name,
restore_testing_selection_name,
validation_window_hours
FROM awscc.backup.restore_testing_selections
WHERE region = 'us-east-1' AND Identifier = '<RestoreTestingPlanName>|<RestoreTestingSelectionName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>restore_testing_selections</code> in a region.
```sql
SELECT
region,
restore_testing_plan_name,
restore_testing_selection_name
FROM awscc.backup.restore_testing_selections_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>restore_testing_selection</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.backup.restore_testing_selections (
 IamRoleArn,
 ProtectedResourceType,
 RestoreTestingPlanName,
 RestoreTestingSelectionName,
 region
)
SELECT 
'{{ IamRoleArn }}',
 '{{ ProtectedResourceType }}',
 '{{ RestoreTestingPlanName }}',
 '{{ RestoreTestingSelectionName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.backup.restore_testing_selections (
 IamRoleArn,
 ProtectedResourceArns,
 ProtectedResourceConditions,
 ProtectedResourceType,
 RestoreMetadataOverrides,
 RestoreTestingPlanName,
 RestoreTestingSelectionName,
 ValidationWindowHours,
 region
)
SELECT 
 '{{ IamRoleArn }}',
 '{{ ProtectedResourceArns }}',
 '{{ ProtectedResourceConditions }}',
 '{{ ProtectedResourceType }}',
 '{{ RestoreMetadataOverrides }}',
 '{{ RestoreTestingPlanName }}',
 '{{ RestoreTestingSelectionName }}',
 '{{ ValidationWindowHours }}',
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
  - name: restore_testing_selection
    props:
      - name: IamRoleArn
        value: '{{ IamRoleArn }}'
      - name: ProtectedResourceArns
        value:
          - '{{ ProtectedResourceArns[0] }}'
      - name: ProtectedResourceConditions
        value:
          StringEquals:
            - Key: '{{ Key }}'
              Value: '{{ Value }}'
          StringNotEquals:
            - null
      - name: ProtectedResourceType
        value: '{{ ProtectedResourceType }}'
      - name: RestoreMetadataOverrides
        value: {}
      - name: RestoreTestingPlanName
        value: '{{ RestoreTestingPlanName }}'
      - name: RestoreTestingSelectionName
        value: '{{ RestoreTestingSelectionName }}'
      - name: ValidationWindowHours
        value: '{{ ValidationWindowHours }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>restore_testing_selection</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.backup.restore_testing_selections
SET PatchDocument = string('{{ {
    "IamRoleArn": iam_role_arn,
    "ProtectedResourceArns": protected_resource_arns,
    "ProtectedResourceConditions": protected_resource_conditions,
    "RestoreMetadataOverrides": restore_metadata_overrides,
    "ValidationWindowHours": validation_window_hours
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<RestoreTestingPlanName>|<RestoreTestingSelectionName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.backup.restore_testing_selections
WHERE Identifier = '<RestoreTestingPlanName|RestoreTestingSelectionName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>restore_testing_selections</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
backup:CreateRestoreTestingSelection,
backup:GetRestoreTestingSelection,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
backup:GetRestoreTestingSelection
```

</TabItem>
<TabItem value="update">

```json
backup:UpdateRestoreTestingSelection,
backup:GetRestoreTestingSelection,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
backup:DeleteRestoreTestingSelection,
backup:GetRestoreTestingSelection
```

</TabItem>
<TabItem value="list">

```json
backup:ListRestoreTestingSelections,
backup:ListRestoreTestingPlans
```

</TabItem>
</Tabs>