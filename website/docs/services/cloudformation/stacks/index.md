---
title: stacks
hide_title: false
hide_table_of_contents: false
keywords:
  - stacks
  - cloudformation
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

Creates, updates, deletes or gets a <code>stack</code> resource or lists <code>stacks</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>stacks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::CloudFormation::Stack resource nests a stack as a resource in a top-level template.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudformation.stacks" /></td></tr>
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
    "name": "capabilities",
    "type": "array",
    "description": ""
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "outputs",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "description",
        "type": "string",
        "description": ""
      },
      {
        "name": "export_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "output_key",
        "type": "string",
        "description": ""
      },
      {
        "name": "output_value",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "disable_rollback",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "enable_termination_protection",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "notification_arns",
    "type": "array",
    "description": ""
  },
  {
    "name": "parameters",
    "type": "object",
    "description": ""
  },
  {
    "name": "parent_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "root_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "change_set_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "stack_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "stack_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "stack_policy_body",
    "type": "object",
    "description": ""
  },
  {
    "name": "stack_policy_url",
    "type": "string",
    "description": ""
  },
  {
    "name": "stack_status",
    "type": "string",
    "description": ""
  },
  {
    "name": "stack_status_reason",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "A string used to identify this tag. You can specify a maximum of 127 characters for a tag key."
      },
      {
        "name": "value",
        "type": "string",
        "description": "A string containing the value for this tag. You can specify a maximum of 256 characters for a tag value."
      }
    ]
  },
  {
    "name": "template_body",
    "type": "object",
    "description": ""
  },
  {
    "name": "template_url",
    "type": "string",
    "description": ""
  },
  {
    "name": "timeout_in_minutes",
    "type": "integer",
    "description": ""
  },
  {
    "name": "last_update_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "creation_time",
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "stack_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stack.html"><code>AWS::CloudFormation::Stack</code></a>.

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
    <td><code>stacks</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="StackName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>stacks</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>stacks</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>stacks_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>stacks</code></td>
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

Gets all properties from an individual <code>stack</code>.
```sql
SELECT
region,
capabilities,
role_arn,
outputs,
description,
disable_rollback,
enable_termination_protection,
notification_arns,
parameters,
parent_id,
root_id,
change_set_id,
stack_name,
stack_id,
stack_policy_body,
stack_policy_url,
stack_status,
stack_status_reason,
tags,
template_body,
template_url,
timeout_in_minutes,
last_update_time,
creation_time
FROM awscc.cloudformation.stacks
WHERE region = 'us-east-1' AND Identifier = '{{ stack_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>stacks</code> in a region.
```sql
SELECT
region,
stack_id
FROM awscc.cloudformation.stacks_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>stack</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cloudformation.stacks (
 StackName,
 region
)
SELECT
'{{ stack_name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cloudformation.stacks (
 Capabilities,
 RoleARN,
 Description,
 DisableRollback,
 EnableTerminationProtection,
 NotificationARNs,
 Parameters,
 StackName,
 StackPolicyBody,
 StackPolicyURL,
 StackStatusReason,
 Tags,
 TemplateBody,
 TemplateURL,
 TimeoutInMinutes,
 region
)
SELECT
 '{{ capabilities }}',
 '{{ role_arn }}',
 '{{ description }}',
 '{{ disable_rollback }}',
 '{{ enable_termination_protection }}',
 '{{ notification_arns }}',
 '{{ parameters }}',
 '{{ stack_name }}',
 '{{ stack_policy_body }}',
 '{{ stack_policy_url }}',
 '{{ stack_status_reason }}',
 '{{ tags }}',
 '{{ template_body }}',
 '{{ template_url }}',
 '{{ timeout_in_minutes }}',
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
  - name: stack
    props:
      - name: capabilities
        value:
          - '{{ capabilities[0] }}'
      - name: role_arn
        value: '{{ role_arn }}'
      - name: description
        value: '{{ description }}'
      - name: disable_rollback
        value: '{{ disable_rollback }}'
      - name: enable_termination_protection
        value: '{{ enable_termination_protection }}'
      - name: notification_arns
        value:
          - '{{ notification_arns[0] }}'
      - name: parameters
        value: {}
      - name: stack_name
        value: '{{ stack_name }}'
      - name: stack_policy_body
        value: {}
      - name: stack_policy_url
        value: '{{ stack_policy_url }}'
      - name: stack_status_reason
        value: '{{ stack_status_reason }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: template_body
        value: {}
      - name: template_url
        value: '{{ template_url }}'
      - name: timeout_in_minutes
        value: '{{ timeout_in_minutes }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>stack</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cloudformation.stacks
SET PatchDocument = string('{{ {
    "Capabilities": capabilities,
    "RoleARN": role_arn,
    "Description": description,
    "DisableRollback": disable_rollback,
    "EnableTerminationProtection": enable_termination_protection,
    "NotificationARNs": notification_arns,
    "Parameters": parameters,
    "StackPolicyBody": stack_policy_body,
    "StackPolicyURL": stack_policy_url,
    "StackStatusReason": stack_status_reason,
    "Tags": tags,
    "TemplateBody": template_body,
    "TemplateURL": template_url,
    "TimeoutInMinutes": timeout_in_minutes
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ stack_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudformation.stacks
WHERE Identifier = '{{ stack_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>stacks</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
      { label: 'Read', value: 'read', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
cloudformation:DescribeStacks,
cloudformation:CreateStack,
iam:PassRole
```

</TabItem>
<TabItem value="update">

```json
cloudformation:DescribeStacks,
cloudformation:UpdateStack,
cloudformation:UpdateTerminationProtection,
cloudformation:SetStackPolicy,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
cloudformation:DescribeStacks,
cloudformation:DeleteStack
```

</TabItem>
<TabItem value="read">

```json
cloudformation:DescribeStacks,
cloudformation:GetStackPolicy,
cloudformation:GetTemplate
```

</TabItem>
<TabItem value="list">

```json
cloudformation:ListStacks
```

</TabItem>
</Tabs>