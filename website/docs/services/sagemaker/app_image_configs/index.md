---
title: app_image_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - app_image_configs
  - sagemaker
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

Creates, updates, deletes or gets an <code>app_image_config</code> resource or lists <code>app_image_configs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>app_image_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SageMaker::AppImageConfig</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sagemaker.app_image_configs" /></td></tr>
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
    "name": "app_image_config_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the AppImageConfig."
  },
  {
    "name": "app_image_config_name",
    "type": "string",
    "description": "The Name of the AppImageConfig."
  },
  {
    "name": "kernel_gateway_image_config",
    "type": "object",
    "description": "The KernelGatewayImageConfig.",
    "children": [
      {
        "name": "file_system_config",
        "type": "object",
        "description": "The Amazon Elastic File System (EFS) storage configuration for a SageMaker image.",
        "children": [
          {
            "name": "default_gid",
            "type": "integer",
            "description": "The default POSIX group ID (GID). If not specified, defaults to 100."
          },
          {
            "name": "default_uid",
            "type": "integer",
            "description": "The default POSIX user ID (UID). If not specified, defaults to 1000."
          },
          {
            "name": "mount_path",
            "type": "string",
            "description": "The path within the image to mount the user's EFS home directory. The directory should be empty. If not specified, defaults to /home/sagemaker-user."
          }
        ]
      },
      {
        "name": "kernel_specs",
        "type": "array",
        "description": "The specification of the Jupyter kernels in the image.",
        "children": [
          {
            "name": "display_name",
            "type": "string",
            "description": "The display name of the kernel."
          },
          {
            "name": "name",
            "type": "string",
            "description": "The name of the kernel."
          }
        ]
      }
    ]
  },
  {
    "name": "jupyter_lab_app_image_config",
    "type": "object",
    "description": "The JupyterLabAppImageConfig.",
    "children": [
      {
        "name": "container_config",
        "type": "object",
        "description": "The container configuration for a SageMaker image.",
        "children": [
          {
            "name": "container_arguments",
            "type": "array",
            "description": "A list of arguments to apply to the container."
          },
          {
            "name": "container_entrypoint",
            "type": "array",
            "description": "The custom entry point to use on container."
          },
          {
            "name": "container_environment_variables",
            "type": "array",
            "description": "A list of variables to apply to the custom container.",
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
          }
        ]
      }
    ]
  },
  {
    "name": "code_editor_app_image_config",
    "type": "object",
    "description": "The CodeEditorAppImageConfig.",
    "children": [
      {
        "name": "container_config",
        "type": "object",
        "description": "The container configuration for a SageMaker image.",
        "children": [
          {
            "name": "container_arguments",
            "type": "array",
            "description": "A list of arguments to apply to the container."
          },
          {
            "name": "container_entrypoint",
            "type": "array",
            "description": "The custom entry point to use on container."
          },
          {
            "name": "container_environment_variables",
            "type": "array",
            "description": "A list of variables to apply to the custom container.",
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
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of tags to apply to the AppImageConfig.",
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
    "name": "app_image_config_name",
    "type": "string",
    "description": "The Name of the AppImageConfig."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-appimageconfig.html"><code>AWS::SageMaker::AppImageConfig</code></a>.

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
    <td><code>app_image_configs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AppImageConfigName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>app_image_configs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>app_image_configs</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>app_image_configs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>app_image_configs</code></td>
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

Gets all properties from an individual <code>app_image_config</code>.
```sql
SELECT
  region,
  app_image_config_arn,
  app_image_config_name,
  kernel_gateway_image_config,
  jupyter_lab_app_image_config,
  code_editor_app_image_config,
  tags
FROM awscc.sagemaker.app_image_configs
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ app_image_config_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>app_image_configs</code> in a region.
```sql
SELECT
  region,
  app_image_config_name
FROM awscc.sagemaker.app_image_configs_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>app_image_config</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.sagemaker.app_image_configs (
  AppImageConfigName,
  region
)
SELECT
  '{{ app_image_config_name }}',
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
INSERT INTO awscc.sagemaker.app_image_configs (
  AppImageConfigName,
  KernelGatewayImageConfig,
  JupyterLabAppImageConfig,
  CodeEditorAppImageConfig,
  Tags,
  region
)
SELECT
  '{{ app_image_config_name }}',
  '{{ kernel_gateway_image_config }}',
  '{{ jupyter_lab_app_image_config }}',
  '{{ code_editor_app_image_config }}',
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
  - name: app_image_config
    props:
      - name: app_image_config_name
        value: '{{ app_image_config_name }}'
      - name: kernel_gateway_image_config
        value:
          file_system_config:
            default_gid: '{{ default_gid }}'
            default_uid: '{{ default_uid }}'
            mount_path: '{{ mount_path }}'
          kernel_specs:
            - display_name: '{{ display_name }}'
              name: '{{ name }}'
      - name: jupyter_lab_app_image_config
        value:
          container_config:
            container_arguments:
              - '{{ container_arguments[0] }}'
            container_entrypoint:
              - '{{ container_entrypoint[0] }}'
            container_environment_variables:
              - value: '{{ value }}'
                key: '{{ key }}'
      - name: code_editor_app_image_config
        value:
          container_config: null
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>app_image_config</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.sagemaker.app_image_configs
SET PatchDocument = string('{{ {
    "KernelGatewayImageConfig": kernel_gateway_image_config,
    "JupyterLabAppImageConfig": jupyter_lab_app_image_config,
    "CodeEditorAppImageConfig": code_editor_app_image_config,
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ app_image_config_name }}'
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
DELETE FROM awscc.sagemaker.app_image_configs
WHERE
  Identifier = '{{ app_image_config_name }}' AND
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

To operate on the <code>app_image_configs</code> resource, the following permissions are required:

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
sagemaker:CreateAppImageConfig,
sagemaker:DescribeAppImageConfig,
sagemaker:AddTags,
sagemaker:ListTags
```

</TabItem>
<TabItem value="read">

```json
sagemaker:DescribeAppImageConfig,
sagemaker:ListTags
```

</TabItem>
<TabItem value="update">

```json
sagemaker:UpdateAppImageConfig,
sagemaker:DescribeAppImageConfig,
sagemaker:AddTags,
sagemaker:DeleteTags,
sagemaker:ListTags
```

</TabItem>
<TabItem value="delete">

```json
sagemaker:DeleteAppImageConfig,
sagemaker:DescribeAppImageConfig,
sagemaker:DeleteTags
```

</TabItem>
<TabItem value="list">

```json
sagemaker:ListAppImageConfigs,
sagemaker:ListTags
```

</TabItem>
</Tabs>