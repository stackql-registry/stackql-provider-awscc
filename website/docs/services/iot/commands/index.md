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
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>commands</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
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
WHERE region = 'us-east-1' AND Identifier = '{{ command_id }}';
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
'{{ command_id }}',
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
 '{{ command_id }}',
 '{{ created_at }}',
 '{{ deprecated }}',
 '{{ description }}',
 '{{ display_name }}',
 '{{ last_updated_at }}',
 '{{ mandatory_parameters }}',
 '{{ namespace }}',
 '{{ role_arn }}',
 '{{ payload }}',
 '{{ pending_deletion }}',
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
  - name: command
    props:
      - name: command_id
        value: '{{ command_id }}'
      - name: created_at
        value: '{{ created_at }}'
      - name: deprecated
        value: '{{ deprecated }}'
      - name: description
        value: '{{ description }}'
      - name: display_name
        value: '{{ display_name }}'
      - name: last_updated_at
        value: '{{ last_updated_at }}'
      - name: mandatory_parameters
        value:
          - name: '{{ name }}'
            value:
              s: '{{ s }}'
              b: '{{ b }}'
              i: '{{ i }}'
              l: '{{ l }}'
              d: null
              b_in: '{{ b_in }}'
              u_l: '{{ u_l }}'
            default_value: null
            description: '{{ description }}'
      - name: namespace
        value: '{{ namespace }}'
      - name: role_arn
        value: '{{ role_arn }}'
      - name: payload
        value:
          content: '{{ content }}'
          content_type: '{{ content_type }}'
      - name: pending_deletion
        value: '{{ pending_deletion }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>command</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iot.commands
SET PatchDocument = string('{{ {
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
AND Identifier = '{{ command_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iot.commands
WHERE Identifier = '{{ command_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>commands</code> resource, the following permissions are required:

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
iam:PassRole,
iot:CreateCommand,
iot:TagResource
```

</TabItem>
<TabItem value="read">

```json
iot:GetCommand,
iot:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
iam:PassRole,
iot:UpdateCommand,
iot:GetCommand,
iot:TagResource,
iot:UntagResource,
iot:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
iot:GetCommand,
iot:UpdateCommand,
iot:DeleteCommand
```

</TabItem>
<TabItem value="list">

```json
iot:ListCommands
```

</TabItem>
</Tabs>