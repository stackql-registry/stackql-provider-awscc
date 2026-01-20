---
title: cis_scan_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - cis_scan_configurations
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

Creates, updates, deletes or gets a <code>cis_scan_configuration</code> resource or lists <code>cis_scan_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>cis_scan_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>CIS Scan Configuration resource schema</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.inspectorv2.cis_scan_configurations" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "scan_name",
    "type": "string",
    "description": "Name of the scan"
  },
  {
    "name": "security_level",
    "type": "string",
    "description": ""
  },
  {
    "name": "schedule",
    "type": "object",
    "description": "Choose a Schedule cadence",
    "children": [
      {
        "name": "one_time",
        "type": "object",
        "description": ""
      },
      {
        "name": "daily",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "start_time",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "time_of_day",
                "type": "string",
                "description": ""
              },
              {
                "name": "time_zone",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "weekly",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "start_time",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "time_of_day",
                "type": "string",
                "description": ""
              },
              {
                "name": "time_zone",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "days",
            "type": "array",
            "description": ""
          }
        ]
      },
      {
        "name": "monthly",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "start_time",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "time_of_day",
                "type": "string",
                "description": ""
              },
              {
                "name": "time_zone",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "day",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "targets",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "account_ids",
        "type": "array",
        "description": ""
      },
      {
        "name": "target_resource_tags",
        "type": "object",
        "description": ""
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": "CIS Scan configuration unique identifier"
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html"><code>AWS::InspectorV2::CisScanConfiguration</code></a>.

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
    <td><CopyableCode code="ScanName, SecurityLevel, Schedule, Targets, region" /></td>
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

Gets all properties from an individual <code>cis_scan_configuration</code>.
```sql
SELECT
region,
scan_name,
security_level,
schedule,
targets,
arn,
tags
FROM awscc.inspectorv2.cis_scan_configurations
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>cis_scan_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.inspectorv2.cis_scan_configurations (
 ScanName,
 SecurityLevel,
 Schedule,
 Targets,
 region
)
SELECT 
'{{ ScanName }}',
 '{{ SecurityLevel }}',
 '{{ Schedule }}',
 '{{ Targets }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.inspectorv2.cis_scan_configurations (
 ScanName,
 SecurityLevel,
 Schedule,
 Targets,
 Tags,
 region
)
SELECT 
 '{{ ScanName }}',
 '{{ SecurityLevel }}',
 '{{ Schedule }}',
 '{{ Targets }}',
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
  - name: cis_scan_configuration
    props:
      - name: ScanName
        value: '{{ ScanName }}'
      - name: SecurityLevel
        value: '{{ SecurityLevel }}'
      - name: Schedule
        value: null
      - name: Targets
        value: null
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.inspectorv2.cis_scan_configurations
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>cis_scan_configurations</code> resource, the following permissions are required:

### Create
```json
inspector2:CreateCisScanConfiguration,
inspector2:ListCisScanConfigurations,
inspector2:TagResource
```

### Read
```json
inspector2:ListCisScanConfigurations,
inspector2:ListTagsForResource
```

### Update
```json
inspector2:ListCisScanConfigurations,
inspector2:UpdateCisScanConfiguration,
inspector2:TagResource,
inspector2:UntagResource,
inspector2:ListTagsForResource
```

### Delete
```json
inspector2:ListCisScanConfigurations,
inspector2:DeleteCisScanConfiguration,
inspector2:UntagResource
```

### List
```json
inspector2:ListCisScanConfigurations,
inspector2:ListTagsForResource
```
