---
title: custom_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_actions
  - chatbot
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

Creates, updates, deletes or gets a <code>custom_action</code> resource or lists <code>custom_actions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>custom_actions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Chatbot::CustomAction Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.chatbot.custom_actions" /></td></tr>
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
    "name": "action_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "alias_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "attachments",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "notification_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "button_text",
        "type": "string",
        "description": ""
      },
      {
        "name": "criteria",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "operator",
            "type": "string",
            "description": ""
          },
          {
            "name": "variable_name",
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
        "name": "variables",
        "type": "object",
        "description": ""
      }
    ]
  },
  {
    "name": "custom_action_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "definition",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "command_text",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
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
    "name": "custom_action_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-customaction.html"><code>AWS::Chatbot::CustomAction</code></a>.

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
    <td><code>custom_actions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ActionName, Definition, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>custom_actions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>custom_actions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>custom_actions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>custom_actions</code></td>
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

Gets all properties from an individual <code>custom_action</code>.
```sql
SELECT
region,
action_name,
alias_name,
attachments,
custom_action_arn,
definition,
tags
FROM awscc.chatbot.custom_actions
WHERE region = 'us-east-1' AND Identifier = '<CustomActionArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>custom_actions</code> in a region.
```sql
SELECT
region,
custom_action_arn
FROM awscc.chatbot.custom_actions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>custom_action</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.chatbot.custom_actions (
 ActionName,
 Definition,
 region
)
SELECT 
'{{ ActionName }}',
 '{{ Definition }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.chatbot.custom_actions (
 ActionName,
 AliasName,
 Attachments,
 Definition,
 Tags,
 region
)
SELECT 
 '{{ ActionName }}',
 '{{ AliasName }}',
 '{{ Attachments }}',
 '{{ Definition }}',
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
  - name: custom_action
    props:
      - name: ActionName
        value: '{{ ActionName }}'
      - name: AliasName
        value: '{{ AliasName }}'
      - name: Attachments
        value:
          - NotificationType: '{{ NotificationType }}'
            ButtonText: '{{ ButtonText }}'
            Criteria:
              - Operator: '{{ Operator }}'
                VariableName: '{{ VariableName }}'
                Value: '{{ Value }}'
            Variables: {}
      - name: Definition
        value:
          CommandText: '{{ CommandText }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>custom_action</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.chatbot.custom_actions
SET PatchDocument = string('{{ {
    "AliasName": alias_name,
    "Attachments": attachments,
    "Definition": definition,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<CustomActionArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.chatbot.custom_actions
WHERE Identifier = '<CustomActionArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>custom_actions</code> resource, the following permissions are required:

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
chatbot:CreateCustomAction,
chatbot:GetCustomAction,
chatbot:TagResource,
chatbot:ListTagsForResource
```

</TabItem>
<TabItem value="read">

```json
chatbot:GetCustomAction,
chatbot:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
chatbot:UpdateCustomAction,
chatbot:GetCustomAction,
chatbot:TagResource,
chatbot:UntagResource,
chatbot:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
chatbot:DeleteCustomAction
```

</TabItem>
<TabItem value="list">

```json
chatbot:ListCustomActions
```

</TabItem>
</Tabs>