---
title: task_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - task_definitions
  - iotwireless
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

Creates, updates, deletes or gets a <code>task_definition</code> resource or lists <code>task_definitions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>task_definitions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Creates a gateway task definition.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotwireless.task_definitions" /></td></tr>
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
    "description": "The name of the new resource."
  },
  {
    "name": "auto_create_tasks",
    "type": "boolean",
    "description": "Whether to automatically create tasks using this task definition for all gateways with the specified current version. If false, the task must me created by calling CreateWirelessGatewayTask."
  },
  {
    "name": "update",
    "type": "object",
    "description": "Information about the gateways to update.",
    "children": [
      {
        "name": "update_data_source",
        "type": "string",
        "description": ""
      },
      {
        "name": "update_data_role",
        "type": "string",
        "description": ""
      },
      {
        "name": "lo_ra_wan",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "update_signature",
            "type": "string",
            "description": ""
          },
          {
            "name": "sig_key_crc",
            "type": "integer",
            "description": ""
          },
          {
            "name": "current_version",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "package_version",
                "type": "string",
                "description": ""
              },
              {
                "name": "model",
                "type": "string",
                "description": ""
              },
              {
                "name": "station",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "lo_ra_wan_update_gateway_task_entry",
    "type": "object",
    "description": "The list of task definitions.",
    "children": [
      {
        "name": "current_version",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "package_version",
            "type": "string",
            "description": ""
          },
          {
            "name": "model",
            "type": "string",
            "description": ""
          },
          {
            "name": "station",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "id",
    "type": "string",
    "description": "The ID of the new wireless gateway task definition"
  },
  {
    "name": "task_definition_type",
    "type": "string",
    "description": "A filter to list only the wireless gateway task definitions that use this task definition type"
  },
  {
    "name": "arn",
    "type": "string",
    "description": "TaskDefinition arn. Returned after successful create."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of key-value pairs that contain metadata for the destination.",
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
    "name": "id",
    "type": "string",
    "description": "The ID of the new wireless gateway task definition"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html"><code>AWS::IoTWireless::TaskDefinition</code></a>.

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
    <td><code>task_definitions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AutoCreateTasks, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>task_definitions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>task_definitions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>task_definitions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>task_definitions</code></td>
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

Gets all properties from an individual <code>task_definition</code>.
```sql
SELECT
region,
name,
auto_create_tasks,
update,
lo_ra_wan_update_gateway_task_entry,
id,
task_definition_type,
arn,
tags
FROM awscc.iotwireless.task_definitions
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>task_definitions</code> in a region.
```sql
SELECT
region,
id
FROM awscc.iotwireless.task_definitions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>task_definition</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iotwireless.task_definitions (
 AutoCreateTasks,
 region
)
SELECT 
'{{ AutoCreateTasks }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iotwireless.task_definitions (
 Name,
 AutoCreateTasks,
 Update,
 LoRaWANUpdateGatewayTaskEntry,
 TaskDefinitionType,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ AutoCreateTasks }}',
 '{{ Update }}',
 '{{ LoRaWANUpdateGatewayTaskEntry }}',
 '{{ TaskDefinitionType }}',
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
  - name: task_definition
    props:
      - name: Name
        value: '{{ Name }}'
      - name: AutoCreateTasks
        value: '{{ AutoCreateTasks }}'
      - name: Update
        value:
          UpdateDataSource: '{{ UpdateDataSource }}'
          UpdateDataRole: '{{ UpdateDataRole }}'
          LoRaWAN:
            UpdateSignature: '{{ UpdateSignature }}'
            SigKeyCrc: '{{ SigKeyCrc }}'
            CurrentVersion:
              PackageVersion: '{{ PackageVersion }}'
              Model: '{{ Model }}'
              Station: '{{ Station }}'
            UpdateVersion: null
      - name: LoRaWANUpdateGatewayTaskEntry
        value:
          CurrentVersion: null
          UpdateVersion: null
      - name: TaskDefinitionType
        value: '{{ TaskDefinitionType }}'
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
UPDATE awscc.iotwireless.task_definitions
SET data__PatchDocument = string('{{ {
    "Name": name,
    "AutoCreateTasks": auto_create_tasks,
    "Update": update,
    "LoRaWANUpdateGatewayTaskEntry": lo_ra_wan_update_gateway_task_entry,
    "TaskDefinitionType": task_definition_type,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotwireless.task_definitions
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>task_definitions</code> resource, the following permissions are required:

### Create
```json
iotwireless:CreateWirelessGatewayTaskDefinition,
iotwireless:TagResource,
iam:GetRole,
iam:PassRole
```

### Update
```json
iotwireless:GetWirelessGatewayTaskDefinition,
iotwireless:TagResource,
iotwireless:UntagResource
```

### Read
```json
iotwireless:GetWirelessGatewayTaskDefinition,
iotwireless:ListTagsForResource
```

### Delete
```json
iotwireless:DeleteWirelessGatewayTaskDefinition
```

### List
```json
iotwireless:ListWirelessGatewayTaskDefinitions,
iotwireless:ListTagsForResource
```
