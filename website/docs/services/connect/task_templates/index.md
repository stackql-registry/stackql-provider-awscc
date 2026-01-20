---
title: task_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - task_templates
  - connect
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

Creates, updates, deletes or gets a <code>task_template</code> resource or lists <code>task_templates</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>task_templates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Connect::TaskTemplate.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.connect.task_templates" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": "The identifier (arn) of the task template."
  },
  {
    "name": "instance_arn",
    "type": "string",
    "description": "The identifier (arn) of the instance."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the task template."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the task template."
  },
  {
    "name": "contact_flow_arn",
    "type": "string",
    "description": "The identifier of the contact flow."
  },
  {
    "name": "self_assign_contact_flow_arn",
    "type": "string",
    "description": "The identifier of the contact flow."
  },
  {
    "name": "constraints",
    "type": "object",
    "description": "The constraints for the task template",
    "children": [
      {
        "name": "invisible_fields",
        "type": "array",
        "description": "The list of the task template's invisible fields",
        "children": [
          {
            "name": "id",
            "type": "object",
            "description": "the identifier (name) for the task template field",
            "children": [
              {
                "name": "name",
                "type": "string",
                "description": "The name of the task template field"
              }
            ]
          }
        ]
      },
      {
        "name": "required_fields",
        "type": "array",
        "description": "The list of the task template's required fields",
        "children": [
          {
            "name": "id",
            "type": "object",
            "description": "the identifier (name) for the task template field",
            "children": [
              {
                "name": "name",
                "type": "string",
                "description": "The name of the task template field"
              }
            ]
          }
        ]
      },
      {
        "name": "read_only_fields",
        "type": "array",
        "description": "The list of the task template's read only fields",
        "children": [
          {
            "name": "id",
            "type": "object",
            "description": "the identifier (name) for the task template field",
            "children": [
              {
                "name": "name",
                "type": "string",
                "description": "The name of the task template field"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "defaults",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "id",
        "type": "object",
        "description": "the identifier (name) for the task template field",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": "The name of the task template field"
          }
        ]
      },
      {
        "name": "default_value",
        "type": "string",
        "description": "the default value for the task template's field"
      }
    ]
  },
  {
    "name": "fields",
    "type": "array",
    "description": "The list of task template's fields",
    "children": [
      {
        "name": "id",
        "type": "object",
        "description": "the identifier (name) for the task template field",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": "The name of the task template field"
          }
        ]
      },
      {
        "name": "description",
        "type": "string",
        "description": "The description of the task template's field"
      },
      {
        "name": "type",
        "type": "string",
        "description": "The type of the task template's field"
      },
      {
        "name": "single_select_options",
        "type": "array",
        "description": "list of field options to be used with single select"
      }
    ]
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of the task template"
  },
  {
    "name": "client_token",
    "type": "string",
    "description": "the client token string in uuid format"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "One or more tags.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters"
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. . You can specify a value that is maximum of 256 Unicode characters"
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html"><code>AWS::Connect::TaskTemplate</code></a>.

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
    <td><CopyableCode code="InstanceArn, region" /></td>
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

Gets all properties from an individual <code>task_template</code>.
```sql
SELECT
region,
arn,
instance_arn,
name,
description,
contact_flow_arn,
self_assign_contact_flow_arn,
constraints,
defaults,
fields,
status,
client_token,
tags
FROM awscc.connect.task_templates
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>task_template</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.connect.task_templates (
 InstanceArn,
 region
)
SELECT 
'{{ InstanceArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.connect.task_templates (
 InstanceArn,
 Name,
 Description,
 ContactFlowArn,
 SelfAssignContactFlowArn,
 Constraints,
 Defaults,
 Fields,
 Status,
 ClientToken,
 Tags,
 region
)
SELECT 
 '{{ InstanceArn }}',
 '{{ Name }}',
 '{{ Description }}',
 '{{ ContactFlowArn }}',
 '{{ SelfAssignContactFlowArn }}',
 '{{ Constraints }}',
 '{{ Defaults }}',
 '{{ Fields }}',
 '{{ Status }}',
 '{{ ClientToken }}',
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
  - name: task_template
    props:
      - name: InstanceArn
        value: '{{ InstanceArn }}'
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: ContactFlowArn
        value: '{{ ContactFlowArn }}'
      - name: SelfAssignContactFlowArn
        value: '{{ SelfAssignContactFlowArn }}'
      - name: Constraints
        value:
          InvisibleFields:
            - Id:
                Name: '{{ Name }}'
          RequiredFields:
            - Id: null
          ReadOnlyFields:
            - Id: null
      - name: Defaults
        value:
          - Id: null
            DefaultValue: '{{ DefaultValue }}'
      - name: Fields
        value:
          - Id: null
            Description: '{{ Description }}'
            Type: '{{ Type }}'
            SingleSelectOptions:
              - '{{ SingleSelectOptions[0] }}'
      - name: Status
        value: '{{ Status }}'
      - name: ClientToken
        value: '{{ ClientToken }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.connect.task_templates
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>task_templates</code> resource, the following permissions are required:

### Create
```json
connect:CreateTaskTemplate,
connect:TagResource
```

### Read
```json
connect:GetTaskTemplate
```

### List
```json
connect:ListTaskTemplates
```

### Update
```json
connect:UpdateTaskTemplate,
connect:TagResource,
connect:UntagResource
```

### Delete
```json
connect:DeleteTaskTemplate,
connect:UntagResource,
connect:GetTaskTemplate
```
