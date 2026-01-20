---
title: code_security_scan_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - code_security_scan_configurations
  - inspectorv2
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

Creates, updates, deletes or gets a <code>code_security_scan_configuration</code> resource or lists <code>code_security_scan_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>code_security_scan_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Inspector CodeSecurityScanConfiguration resource schema</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.inspectorv2.code_security_scan_configurations" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "name",
    "type": "string",
    "description": "Code Security Scan Configuration name"
  },
  {
    "name": "level",
    "type": "string",
    "description": "Configuration Level"
  },
  {
    "name": "configuration",
    "type": "object",
    "description": "Code Security Scan Configuration",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": "Code Security Scan Configuration name"
      },
      {
        "name": "scope_settings",
        "type": "object",
        "description": "Scope Settings",
        "children": [
          {
            "name": "project_selection_scope",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "arn",
        "type": "string",
        "description": "Code Security Scan Configuration ARN"
      },
      {
        "name": "tags",
        "type": "object",
        "description": ""
      }
    ]
  },
  {
    "name": "scope_settings",
    "type": "object",
    "description": "Scope Settings",
    "children": [
      {
        "name": "project_selection_scope",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": "Code Security Scan Configuration ARN"
  },
  {
    "name": "tags",
    "type": "object",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-codesecurityscanconfiguration.html"><code>AWS::InspectorV2::CodeSecurityScanConfiguration</code></a>.

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

Gets all properties from an individual <code>code_security_scan_configuration</code>.
```sql
SELECT
region,
name,
level,
configuration,
scope_settings,
arn,
tags
FROM awscc.inspectorv2.code_security_scan_configurations
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>code_security_scan_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.inspectorv2.code_security_scan_configurations (
 Name,
 Level,
 Configuration,
 ScopeSettings,
 Tags,
 region
)
SELECT 
'{{ Name }}',
 '{{ Level }}',
 '{{ Configuration }}',
 '{{ ScopeSettings }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.inspectorv2.code_security_scan_configurations (
 Name,
 Level,
 Configuration,
 ScopeSettings,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Level }}',
 '{{ Configuration }}',
 '{{ ScopeSettings }}',
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
  - name: code_security_scan_configuration
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Level
        value: '{{ Level }}'
      - name: Configuration
        value:
          Name: '{{ Name }}'
          Level: null
          Configuration: null
          ScopeSettings:
            projectSelectionScope: '{{ projectSelectionScope }}'
          Tags: {}
      - name: ScopeSettings
        value: null
      - name: Tags
        value: null

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.inspectorv2.code_security_scan_configurations
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>code_security_scan_configurations</code> resource, the following permissions are required:

### Create
```json
inspector2:CreateCodeSecurityScanConfiguration,
inspector2:GetCodeSecurityScanConfiguration,
inspector2:TagResource
```

### Read
```json
inspector2:GetCodeSecurityScanConfiguration,
inspector2:ListTagsForResource
```

### Update
```json
inspector2:UpdateCodeSecurityScanConfiguration,
inspector2:GetCodeSecurityScanConfiguration,
inspector2:TagResource,
inspector2:UntagResource,
inspector2:ListTagsForResource
```

### Delete
```json
inspector2:DeleteCodeSecurityScanConfiguration,
inspector2:GetCodeSecurityScanConfiguration
```

### List
```json
inspector2:ListCodeSecurityScanConfigurations
```
