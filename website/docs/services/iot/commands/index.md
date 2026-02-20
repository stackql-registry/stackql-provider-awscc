---
title: commands
hide_title: false
hide_table_of_contents: false
keywords:
  - commands
  - iot
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

Creates, updates, deletes or gets a <code>command</code> resource or lists <code>commands</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>commands</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Represents the resource definition of AWS IoT Command.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iot.commands" /></td></tr>
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
    "name": "command_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the command."
  },
  {
    "name": "command_id",
    "type": "string",
    "description": "The unique identifier for the command."
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The date and time when the command was created."
  },
  {
    "name": "deprecated",
    "type": "boolean",
    "description": "A flag indicating whether the command is deprecated."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the command."
  },
  {
    "name": "display_name",
    "type": "string",
    "description": "The display name for the command."
  },
  {
    "name": "last_updated_at",
    "type": "string",
    "description": "The date and time when the command was last updated."
  },
  {
    "name": "mandatory_parameters",
    "type": "array",
    "description": "The list of mandatory parameters for the command.",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "s",
            "type": "string",
            "description": ""
          },
          {
            "name": "b",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "i",
            "type": "integer",
            "description": ""
          },
          {
            "name": "l",
            "type": "string",
            "description": ""
          },
          {
            "name": "d",
            "type": "number",
            "description": ""
          },
          {
            "name": "b_in",
            "type": "string",
            "description": ""
          },
          {
            "name": "u_l",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "description",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "namespace",
    "type": "string",
    "description": "The namespace to which the command belongs."
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "The customer role associated with the command."
  },
  {
    "name": "payload",
    "type": "object",
    "description": "The payload associated with the command.",
    "children": [
      {
        "name": "content",
        "type": "string",
        "description": ""
      },
      {
        "name": "content_type",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "pending_deletion",
    "type": "boolean",
    "description": "A flag indicating whether the command is pending deletion."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags to be associated with the command.",
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
    "name": "command_id",
    "type": "string",
    "description": "The unique identifier for the command."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-command.html"><code>AWS::IoT::Command</code></a>.

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
    <td><code>commands</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="CommandId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>commands</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>commands</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>commands_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>commands</code></td>
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

Gets all properties from an individual <code>command</code>.
```sql
SELECT
region,
command_arn,
command_id,
created_at,
deprecated,
description,
display_name,
last_updated_at,
mandatory_parameters,
namespace,
role_arn,
payload,
pending_deletion,
tags
FROM awscc.iot.commands
WHERE region = 'us-east-1' AND data__Identifier = '<CommandId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>commands</code> in a region.
```sql
SELECT
region,
command_id
FROM awscc.iot.commands_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>command</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iot.commands (
 CommandId,
 region
)
SELECT 
'{{ CommandId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iot.commands (
 CommandId,
 CreatedAt,
 Deprecated,
 Description,
 DisplayName,
 LastUpdatedAt,
 MandatoryParameters,
 Namespace,
 RoleArn,
 Payload,
 PendingDeletion,
 Tags,
 region
)
SELECT 
 '{{ CommandId }}',
 '{{ CreatedAt }}',
 '{{ Deprecated }}',
 '{{ Description }}',
 '{{ DisplayName }}',
 '{{ LastUpdatedAt }}',
 '{{ MandatoryParameters }}',
 '{{ Namespace }}',
 '{{ RoleArn }}',
 '{{ Payload }}',
 '{{ PendingDeletion }}',
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
  - name: command
    props:
      - name: CommandId
        value: '{{ CommandId }}'
      - name: CreatedAt
        value: '{{ CreatedAt }}'
      - name: Deprecated
        value: '{{ Deprecated }}'
      - name: Description
        value: '{{ Description }}'
      - name: DisplayName
        value: '{{ DisplayName }}'
      - name: LastUpdatedAt
        value: '{{ LastUpdatedAt }}'
      - name: MandatoryParameters
        value:
          - Name: '{{ Name }}'
            Value:
              S: '{{ S }}'
              B: '{{ B }}'
              I: '{{ I }}'
              L: '{{ L }}'
              D: null
              BIN: '{{ BIN }}'
              UL: '{{ UL }}'
            DefaultValue: null
            Description: '{{ Description }}'
      - name: Namespace
        value: '{{ Namespace }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: Payload
        value:
          Content: '{{ Content }}'
          ContentType: '{{ ContentType }}'
      - name: PendingDeletion
        value: '{{ PendingDeletion }}'
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
UPDATE awscc.iot.commands
SET data__PatchDocument = string('{{ {
    "CreatedAt": created_at,
    "Deprecated": deprecated,
    "Description": description,
    "DisplayName": display_name,
    "LastUpdatedAt": last_updated_at,
    "MandatoryParameters": mandatory_parameters,
    "Namespace": namespace,
    "RoleArn": role_arn,
    "Payload": payload,
    "PendingDeletion": pending_deletion,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<CommandId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iot.commands
WHERE data__Identifier = '<CommandId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>commands</code> resource, the following permissions are required:

### Create
```json
iam:PassRole,
iot:CreateCommand,
iot:TagResource
```

### Read
```json
iot:GetCommand,
iot:ListTagsForResource
```

### Update
```json
iam:PassRole,
iot:UpdateCommand,
iot:GetCommand,
iot:TagResource,
iot:UntagResource,
iot:ListTagsForResource
```

### Delete
```json
iot:GetCommand,
iot:UpdateCommand,
iot:DeleteCommand
```

### List
```json
iot:ListCommands
```
