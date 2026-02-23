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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": "CIS Scan configuration unique identifier"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html"><code>AWS::InspectorV2::CisScanConfiguration</code></a>.

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
    <td><code>cis_scan_configurations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ScanName, SecurityLevel, Schedule, Targets, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>cis_scan_configurations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>cis_scan_configurations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>cis_scan_configurations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>cis_scan_configurations</code></td>
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
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>cis_scan_configurations</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.inspectorv2.cis_scan_configurations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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
'{{ scan_name }}',
 '{{ security_level }}',
 '{{ schedule }}',
 '{{ targets }}',
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
 '{{ scan_name }}',
 '{{ security_level }}',
 '{{ schedule }}',
 '{{ targets }}',
 '{{ tags }}',
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
      - name: scan_name
        value: '{{ scan_name }}'
      - name: security_level
        value: '{{ security_level }}'
      - name: schedule
        value: null
      - name: targets
        value: null
      - name: tags
        value: {}
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>cis_scan_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.inspectorv2.cis_scan_configurations
SET PatchDocument = string('{{ {
    "ScanName": scan_name,
    "SecurityLevel": security_level,
    "Schedule": schedule,
    "Targets": targets,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.inspectorv2.cis_scan_configurations
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>cis_scan_configurations</code> resource, the following permissions are required:

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
inspector2:CreateCisScanConfiguration,
inspector2:ListCisScanConfigurations,
inspector2:TagResource
```

</TabItem>
<TabItem value="read">

```json
inspector2:ListCisScanConfigurations,
inspector2:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
inspector2:ListCisScanConfigurations,
inspector2:UpdateCisScanConfiguration,
inspector2:TagResource,
inspector2:UntagResource,
inspector2:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
inspector2:ListCisScanConfigurations,
inspector2:DeleteCisScanConfiguration,
inspector2:UntagResource
```

</TabItem>
<TabItem value="list">

```json
inspector2:ListCisScanConfigurations,
inspector2:ListTagsForResource
```

</TabItem>
</Tabs>