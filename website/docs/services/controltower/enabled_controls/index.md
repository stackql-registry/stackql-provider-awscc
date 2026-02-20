---
title: enabled_controls
hide_title: false
hide_table_of_contents: false
keywords:
  - enabled_controls
  - controltower
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

Creates, updates, deletes or gets an <code>enabled_control</code> resource or lists <code>enabled_controls</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>enabled_controls</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Enables a control on a specified target.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.controltower.enabled_controls" /></td></tr>
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
    "name": "control_identifier",
    "type": "string",
    "description": "Arn of the control."
  },
  {
    "name": "target_identifier",
    "type": "string",
    "description": "Arn for Organizational unit to which the control needs to be applied"
  },
  {
    "name": "parameters",
    "type": "array",
    "description": "Parameters to configure the enabled control behavior.",
    "children": [
      {
        "name": "value",
        "type": "object",
        "description": ""
      },
      {
        "name": "key",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A set of tags to assign to the enabled control.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": ""
      },
      {
        "name": "key",
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
    "name": "control_identifier",
    "type": "string",
    "description": "Arn of the control."
  },
  {
    "name": "target_identifier",
    "type": "string",
    "description": "Arn for Organizational unit to which the control needs to be applied"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledcontrol.html"><code>AWS::ControlTower::EnabledControl</code></a>.

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
    <td><code>enabled_controls</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="TargetIdentifier, ControlIdentifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>enabled_controls</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>enabled_controls</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>enabled_controls_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>enabled_controls</code></td>
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

Gets all properties from an individual <code>enabled_control</code>.
```sql
SELECT
region,
control_identifier,
target_identifier,
parameters,
tags
FROM awscc.controltower.enabled_controls
WHERE region = 'us-east-1' AND data__Identifier = '<TargetIdentifier>|<ControlIdentifier>';
```
</TabItem>
<TabItem value="list">

Lists all <code>enabled_controls</code> in a region.
```sql
SELECT
region,
target_identifier,
control_identifier
FROM awscc.controltower.enabled_controls_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>enabled_control</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.controltower.enabled_controls (
 ControlIdentifier,
 TargetIdentifier,
 region
)
SELECT 
'{{ ControlIdentifier }}',
 '{{ TargetIdentifier }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.controltower.enabled_controls (
 ControlIdentifier,
 TargetIdentifier,
 Parameters,
 Tags,
 region
)
SELECT 
 '{{ ControlIdentifier }}',
 '{{ TargetIdentifier }}',
 '{{ Parameters }}',
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
  - name: enabled_control
    props:
      - name: ControlIdentifier
        value: '{{ ControlIdentifier }}'
      - name: TargetIdentifier
        value: '{{ TargetIdentifier }}'
      - name: Parameters
        value:
          - Value: null
            Key: '{{ Key }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.controltower.enabled_controls
SET data__PatchDocument = string('{{ {
    "Parameters": parameters,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<TargetIdentifier>|<ControlIdentifier>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.controltower.enabled_controls
WHERE data__Identifier = '<TargetIdentifier|ControlIdentifier>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>enabled_controls</code> resource, the following permissions are required:

### Create
```json
controltower:ListEnabledControls,
controltower:GetEnabledControl,
controltower:GetControlOperation,
controltower:EnableControl,
controltower:TagResource,
organizations:UpdatePolicy,
organizations:CreatePolicy,
organizations:AttachPolicy,
organizations:DetachPolicy,
organizations:ListPoliciesForTarget,
organizations:ListTargetsForPolicy,
organizations:DescribePolicy,
controltower:ListTagsForResource
```

### Update
```json
controltower:ListEnabledControls,
controltower:GetEnabledControl,
controltower:GetControlOperation,
controltower:UpdateEnabledControl,
controltower:UntagResource,
controltower:TagResource,
organizations:UpdatePolicy,
organizations:CreatePolicy,
organizations:AttachPolicy,
organizations:DetachPolicy,
organizations:ListPoliciesForTarget,
organizations:ListTargetsForPolicy,
organizations:DescribePolicy,
controltower:ListTagsForResource
```

### Delete
```json
controltower:ListEnabledControls,
controltower:GetEnabledControl,
controltower:GetControlOperation,
controltower:DisableControl,
organizations:UpdatePolicy,
organizations:DeletePolicy,
organizations:CreatePolicy,
organizations:AttachPolicy,
organizations:DetachPolicy,
organizations:ListPoliciesForTarget,
organizations:ListTargetsForPolicy,
organizations:DescribePolicy,
controltower:ListTagsForResource
```

### Read
```json
controltower:ListEnabledControls,
controltower:GetEnabledControl,
controltower:ListTagsForResource
```

### List
```json
controltower:ListEnabledControls
```
