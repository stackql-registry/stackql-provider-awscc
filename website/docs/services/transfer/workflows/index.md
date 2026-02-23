---
title: workflows
hide_title: false
hide_table_of_contents: false
keywords:
  - workflows
  - transfer
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

Creates, updates, deletes or gets a <code>workflow</code> resource or lists <code>workflows</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>workflows</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Transfer::Workflow</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.transfer.workflows" /></td></tr>
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
    "name": "on_exception_steps",
    "type": "array",
    "description": "Specifies the steps (actions) to take if any errors are encountered during execution of the workflow.",
    "children": [
      {
        "name": "copy_step_details",
        "type": "object",
        "description": "Details for a step that performs a file copy.",
        "children": [
          {
            "name": "destination_file_location",
            "type": "object",
            "description": "Specifies the location for the file being copied. Only applicable for the Copy type of workflow steps.",
            "children": [
              {
                "name": "s3_file_location",
                "type": "object",
                "description": "Specifies the details for a S3 file."
              }
            ]
          },
          {
            "name": "name",
            "type": "string",
            "description": "The name of the step, used as an identifier."
          },
          {
            "name": "overwrite_existing",
            "type": "string",
            "description": "A flag that indicates whether or not to overwrite an existing file of the same name. The default is FALSE."
          },
          {
            "name": "source_file_location",
            "type": "string",
            "description": "Specifies which file to use as input to the workflow step."
          }
        ]
      },
      {
        "name": "custom_step_details",
        "type": "object",
        "description": "Details for a step that invokes a lambda function.",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": "The name of the step, used as an identifier."
          },
          {
            "name": "target",
            "type": "string",
            "description": "The ARN for the lambda function that is being called."
          },
          {
            "name": "timeout_seconds",
            "type": "integer",
            "description": "Timeout, in seconds, for the step."
          },
          {
            "name": "source_file_location",
            "type": "string",
            "description": "Specifies which file to use as input to the workflow step."
          }
        ]
      },
      {
        "name": "decrypt_step_details",
        "type": "object",
        "description": "Details for a step that performs a file decryption.",
        "children": [
          {
            "name": "destination_file_location",
            "type": "object",
            "description": "Specifies the location for the file being decrypted. Only applicable for the Decrypt type of workflow steps.",
            "children": [
              {
                "name": "s3_file_location",
                "type": "object",
                "description": "Specifies the details for a S3 file."
              },
              {
                "name": "efs_file_location",
                "type": "object",
                "description": "Specifies the details for an EFS file."
              }
            ]
          },
          {
            "name": "name",
            "type": "string",
            "description": "The name of the step, used as an identifier."
          },
          {
            "name": "type",
            "type": "string",
            "description": "Specifies which encryption method to use."
          },
          {
            "name": "overwrite_existing",
            "type": "string",
            "description": "A flag that indicates whether or not to overwrite an existing file of the same name. The default is FALSE."
          },
          {
            "name": "source_file_location",
            "type": "string",
            "description": "Specifies which file to use as input to the workflow step."
          }
        ]
      },
      {
        "name": "delete_step_details",
        "type": "object",
        "description": "Details for a step that deletes the file.",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": "The name of the step, used as an identifier."
          },
          {
            "name": "source_file_location",
            "type": "string",
            "description": "Specifies which file to use as input to the workflow step."
          }
        ]
      },
      {
        "name": "tag_step_details",
        "type": "object",
        "description": "Details for a step that creates one or more tags.",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": "The name of the step, used as an identifier."
          },
          {
            "name": "tags",
            "type": "array",
            "description": "Array that contains from 1 to 10 key/value pairs.",
            "children": [
              {
                "name": "key",
                "type": "string",
                "description": "The name assigned to the tag that you create."
              },
              {
                "name": "value",
                "type": "string",
                "description": "The value that corresponds to the key."
              }
            ]
          },
          {
            "name": "source_file_location",
            "type": "string",
            "description": "Specifies which file to use as input to the workflow step."
          }
        ]
      },
      {
        "name": "type",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "steps",
    "type": "array",
    "description": "Specifies the details for the steps that are in the specified workflow."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Key-value pairs that can be used to group and search for workflows. Tags are metadata attached to workflows for any purpose.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The name assigned to the tag that you create."
      },
      {
        "name": "value",
        "type": "string",
        "description": "Contains one or more values that you assigned to the key name you create."
      }
    ]
  },
  {
    "name": "description",
    "type": "string",
    "description": "A textual description for the workflow."
  },
  {
    "name": "workflow_id",
    "type": "string",
    "description": "A unique identifier for the workflow."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "Specifies the unique Amazon Resource Name (ARN) for the workflow."
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
    "name": "workflow_id",
    "type": "string",
    "description": "A unique identifier for the workflow."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html"><code>AWS::Transfer::Workflow</code></a>.

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
    <td><code>workflows</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Steps, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>workflows</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>workflows</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>workflows_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>workflows</code></td>
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

Gets all properties from an individual <code>workflow</code>.
```sql
SELECT
region,
on_exception_steps,
steps,
tags,
description,
workflow_id,
arn
FROM awscc.transfer.workflows
WHERE region = 'us-east-1' AND Identifier = '{{ workflow_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>workflows</code> in a region.
```sql
SELECT
region,
workflow_id
FROM awscc.transfer.workflows_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>workflow</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.transfer.workflows (
 Steps,
 region
)
SELECT
'{{ steps }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.transfer.workflows (
 OnExceptionSteps,
 Steps,
 Tags,
 Description,
 region
)
SELECT
 '{{ on_exception_steps }}',
 '{{ steps }}',
 '{{ tags }}',
 '{{ description }}',
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
  - name: workflow
    props:
      - name: on_exception_steps
        value:
          - copy_step_details:
              destination_file_location:
                s3_file_location:
                  bucket: '{{ bucket }}'
                  key: '{{ key }}'
              name: '{{ name }}'
              overwrite_existing: '{{ overwrite_existing }}'
              source_file_location: '{{ source_file_location }}'
            custom_step_details:
              name: '{{ name }}'
              target: '{{ target }}'
              timeout_seconds: '{{ timeout_seconds }}'
              source_file_location: '{{ source_file_location }}'
            decrypt_step_details:
              destination_file_location:
                s3_file_location: null
                efs_file_location:
                  file_system_id: '{{ file_system_id }}'
                  path: '{{ path }}'
              name: '{{ name }}'
              type: '{{ type }}'
              overwrite_existing: '{{ overwrite_existing }}'
              source_file_location: '{{ source_file_location }}'
            delete_step_details:
              name: '{{ name }}'
              source_file_location: '{{ source_file_location }}'
            tag_step_details:
              name: '{{ name }}'
              tags:
                - key: '{{ key }}'
                  value: '{{ value }}'
              source_file_location: '{{ source_file_location }}'
            type: '{{ type }}'
      - name: steps
        value:
          - null
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: description
        value: '{{ description }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>workflow</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.transfer.workflows
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ workflow_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.transfer.workflows
WHERE Identifier = '{{ workflow_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>workflows</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

```json
transfer:CreateWorkflow,
transfer:TagResource
```

</TabItem>
<TabItem value="read">

```json
transfer:DescribeWorkflow
```

</TabItem>
<TabItem value="delete">

```json
transfer:DeleteWorkflow
```

</TabItem>
<TabItem value="list">

```json
transfer:ListWorkflows
```

</TabItem>
<TabItem value="update">

```json
transfer:UnTagResource,
transfer:TagResource
```

</TabItem>
</Tabs>