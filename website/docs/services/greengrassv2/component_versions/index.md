---
title: component_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - component_versions
  - greengrassv2
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

Creates, updates, deletes or gets a <code>component_version</code> resource or lists <code>component_versions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>component_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource for Greengrass component version.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.greengrassv2.component_versions" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "component_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "component_version",
    "type": "string",
    "description": ""
  },
  {
    "name": "inline_recipe",
    "type": "string",
    "description": ""
  },
  {
    "name": "lambda_function",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "lambda_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "component_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "component_version",
        "type": "string",
        "description": ""
      },
      {
        "name": "component_platforms",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": ""
          },
          {
            "name": "attributes",
            "type": "object",
            "description": ""
          }
        ]
      },
      {
        "name": "component_dependencies",
        "type": "object",
        "description": ""
      },
      {
        "name": "component_lambda_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "event_sources",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "topic",
                "type": "string",
                "description": ""
              },
              {
                "name": "type",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "max_queue_size",
            "type": "integer",
            "description": ""
          },
          {
            "name": "max_instances_count",
            "type": "integer",
            "description": ""
          },
          {
            "name": "max_idle_time_in_seconds",
            "type": "integer",
            "description": ""
          },
          {
            "name": "timeout_in_seconds",
            "type": "integer",
            "description": ""
          },
          {
            "name": "status_timeout_in_seconds",
            "type": "integer",
            "description": ""
          },
          {
            "name": "pinned",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "input_payload_encoding_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "exec_args",
            "type": "array",
            "description": ""
          },
          {
            "name": "environment_variables",
            "type": "object",
            "description": ""
          },
          {
            "name": "linux_process_params",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "isolation_mode",
                "type": "string",
                "description": ""
              },
              {
                "name": "container_params",
                "type": "object",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html"><code>AWS::GreengrassV2::ComponentVersion</code></a>.

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
    <td><code>component_versions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>component_versions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>component_versions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>component_versions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>component_versions</code></td>
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

Gets all properties from an individual <code>component_version</code>.
```sql
SELECT
  region,
  arn,
  component_name,
  component_version,
  inline_recipe,
  lambda_function,
  tags
FROM awscc.greengrassv2.component_versions
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>component_versions</code> in a region.
```sql
SELECT
  region,
  arn
FROM awscc.greengrassv2.component_versions_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>component_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.greengrassv2.component_versions (
  InlineRecipe,
  LambdaFunction,
  Tags,
  region
)
SELECT
  '{{ inline_recipe }}',
  '{{ lambda_function }}',
  '{{ tags }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.greengrassv2.component_versions (
  InlineRecipe,
  LambdaFunction,
  Tags,
  region
)
SELECT
  '{{ inline_recipe }}',
  '{{ lambda_function }}',
  '{{ tags }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
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
  - name: component_version
    props:
      - name: inline_recipe
        value: '{{ inline_recipe }}'
      - name: lambda_function
        value:
          lambda_arn: '{{ lambda_arn }}'
          component_name: '{{ component_name }}'
          component_version: '{{ component_version }}'
          component_platforms:
            - name: '{{ name }}'
              attributes: {}
          component_dependencies: {}
          component_lambda_parameters:
            event_sources:
              - topic: '{{ topic }}'
                type: '{{ type }}'
            max_queue_size: '{{ max_queue_size }}'
            max_instances_count: '{{ max_instances_count }}'
            max_idle_time_in_seconds: '{{ max_idle_time_in_seconds }}'
            timeout_in_seconds: '{{ timeout_in_seconds }}'
            status_timeout_in_seconds: '{{ status_timeout_in_seconds }}'
            pinned: '{{ pinned }}'
            input_payload_encoding_type: '{{ input_payload_encoding_type }}'
            exec_args:
              - '{{ exec_args[0] }}'
            environment_variables: {}
            linux_process_params:
              isolation_mode: '{{ isolation_mode }}'
              container_params:
                memory_size_in_kb: '{{ memory_size_in_kb }}'
                mount_ro_sysfs: '{{ mount_ro_sysfs }}'
                volumes:
                  - source_path: '{{ source_path }}'
                    destination_path: null
                    permission: '{{ permission }}'
                    add_group_owner: '{{ add_group_owner }}'
                devices:
                  - path: null
                    permission: null
                    add_group_owner: null
      - name: tags
        value: {}
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>component_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.greengrassv2.component_versions
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ arn }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.greengrassv2.component_versions
WHERE
  Identifier = '{{ arn }}' AND
  region = '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

## Permissions

To operate on the <code>component_versions</code> resource, the following permissions are required:

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
greengrass:CreateComponentVersion,
greengrass:DescribeComponent,
greengrass:ListTagsForResource,
greengrass:TagResource,
lambda:GetFunction,
s3:GetObject
```

</TabItem>
<TabItem value="read">

```json
greengrass:DescribeComponent,
greengrass:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
greengrass:DescribeComponent,
greengrass:ListTagsForResource,
greengrass:TagResource,
greengrass:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
greengrass:DeleteComponent
```

</TabItem>
<TabItem value="list">

```json
greengrass:ListComponentVersions
```

</TabItem>
</Tabs>