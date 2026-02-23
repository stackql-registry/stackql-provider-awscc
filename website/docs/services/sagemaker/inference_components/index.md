---
title: inference_components
hide_title: false
hide_table_of_contents: false
keywords:
  - inference_components
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

Creates, updates, deletes or gets an <code>inference_component</code> resource or lists <code>inference_components</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>inference_components</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SageMaker::InferenceComponent</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sagemaker.inference_components" /></td></tr>
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
    "name": "inference_component_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the inference component"
  },
  {
    "name": "inference_component_name",
    "type": "string",
    "description": "The name of the inference component"
  },
  {
    "name": "endpoint_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the endpoint the inference component is associated with"
  },
  {
    "name": "endpoint_name",
    "type": "string",
    "description": "The name of the endpoint used to run the monitoring job."
  },
  {
    "name": "variant_name",
    "type": "string",
    "description": "The name of the endpoint variant the inference component is associated with"
  },
  {
    "name": "failure_reason",
    "type": "string",
    "description": "The failure reason if the inference component is in a failed state"
  },
  {
    "name": "specification",
    "type": "object",
    "description": "The specification for the inference component",
    "children": [
      {
        "name": "model_name",
        "type": "string",
        "description": "The name of the model to use with the inference component"
      },
      {
        "name": "base_inference_component_name",
        "type": "string",
        "description": "The name of the base inference component"
      },
      {
        "name": "container",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "deployed_image",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "specified_image",
                "type": "string",
                "description": "The image to use for the container that will be materialized for the inference component"
              },
              {
                "name": "resolution_time",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "image",
            "type": "string",
            "description": "The image to use for the container that will be materialized for the inference component"
          },
          {
            "name": "artifact_url",
            "type": "string",
            "description": ""
          },
          {
            "name": "environment",
            "type": "object",
            "description": "Environment variables to specify on the container"
          }
        ]
      },
      {
        "name": "startup_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "model_data_download_timeout_in_seconds",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "compute_resource_requirements",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "number_of_cpu_cores_required",
            "type": "number",
            "description": ""
          },
          {
            "name": "number_of_accelerator_devices_required",
            "type": "number",
            "description": ""
          },
          {
            "name": "min_memory_required_in_mb",
            "type": "integer",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "runtime_config",
    "type": "object",
    "description": "The runtime config for the inference component",
    "children": [
      {
        "name": "copy_count",
        "type": "integer",
        "description": "The number of copies for the inference component"
      }
    ]
  },
  {
    "name": "deployment_config",
    "type": "object",
    "description": "The deployment config for the inference component",
    "children": [
      {
        "name": "rolling_update_policy",
        "type": "object",
        "description": "The rolling update policy for the inference component",
        "children": [
          {
            "name": "maximum_batch_size",
            "type": "object",
            "description": "Capacity size configuration for the inference component",
            "children": [
              {
                "name": "type",
                "type": "string",
                "description": ""
              },
              {
                "name": "value",
                "type": "integer",
                "description": "The number of copies for the inference component"
              }
            ]
          },
          {
            "name": "wait_interval_in_seconds",
            "type": "integer",
            "description": ""
          },
          {
            "name": "maximum_execution_timeout_in_seconds",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "auto_rollback_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "alarms",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "alarm_name",
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
    "name": "inference_component_status",
    "type": "string",
    "description": ""
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of tags to apply to the resource",
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
    "name": "inference_component_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the inference component"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html"><code>AWS::SageMaker::InferenceComponent</code></a>.

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
    <td><code>inference_components</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="EndpointName, Specification, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>inference_components</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>inference_components</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>inference_components_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>inference_components</code></td>
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

Gets all properties from an individual <code>inference_component</code>.
```sql
SELECT
region,
inference_component_arn,
inference_component_name,
endpoint_arn,
endpoint_name,
variant_name,
failure_reason,
specification,
runtime_config,
deployment_config,
inference_component_status,
creation_time,
last_modified_time,
tags
FROM awscc.sagemaker.inference_components
WHERE region = 'us-east-1' AND Identifier = '{{ inference_component_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>inference_components</code> in a region.
```sql
SELECT
region,
inference_component_arn
FROM awscc.sagemaker.inference_components_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>inference_component</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.sagemaker.inference_components (
 EndpointName,
 Specification,
 region
)
SELECT
'{{ endpoint_name }}',
 '{{ specification }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.sagemaker.inference_components (
 InferenceComponentName,
 EndpointArn,
 EndpointName,
 VariantName,
 Specification,
 RuntimeConfig,
 DeploymentConfig,
 Tags,
 region
)
SELECT
 '{{ inference_component_name }}',
 '{{ endpoint_arn }}',
 '{{ endpoint_name }}',
 '{{ variant_name }}',
 '{{ specification }}',
 '{{ runtime_config }}',
 '{{ deployment_config }}',
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
  - name: inference_component
    props:
      - name: inference_component_name
        value: '{{ inference_component_name }}'
      - name: endpoint_arn
        value: '{{ endpoint_arn }}'
      - name: endpoint_name
        value: '{{ endpoint_name }}'
      - name: variant_name
        value: '{{ variant_name }}'
      - name: specification
        value:
          model_name: '{{ model_name }}'
          base_inference_component_name: '{{ base_inference_component_name }}'
          container:
            deployed_image:
              specified_image: '{{ specified_image }}'
              resolved_image: null
              resolution_time: '{{ resolution_time }}'
            image: null
            artifact_url: '{{ artifact_url }}'
            environment: {}
          startup_parameters:
            model_data_download_timeout_in_seconds: '{{ model_data_download_timeout_in_seconds }}'
            container_startup_health_check_timeout_in_seconds: null
          compute_resource_requirements:
            number_of_cpu_cores_required: null
            number_of_accelerator_devices_required: null
            min_memory_required_in_mb: '{{ min_memory_required_in_mb }}'
            max_memory_required_in_mb: null
      - name: runtime_config
        value:
          copy_count: '{{ copy_count }}'
          desired_copy_count: null
          current_copy_count: null
      - name: deployment_config
        value:
          rolling_update_policy:
            maximum_batch_size:
              type: '{{ type }}'
              value: '{{ value }}'
            wait_interval_in_seconds: '{{ wait_interval_in_seconds }}'
            rollback_maximum_batch_size: null
            maximum_execution_timeout_in_seconds: '{{ maximum_execution_timeout_in_seconds }}'
          auto_rollback_configuration:
            alarms:
              - alarm_name: '{{ alarm_name }}'
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>inference_component</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.sagemaker.inference_components
SET PatchDocument = string('{{ {
    "InferenceComponentName": inference_component_name,
    "EndpointArn": endpoint_arn,
    "EndpointName": endpoint_name,
    "VariantName": variant_name,
    "DeploymentConfig": deployment_config,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ inference_component_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.sagemaker.inference_components
WHERE Identifier = '{{ inference_component_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>inference_components</code> resource, the following permissions are required:

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
sagemaker:AddTags,
sagemaker:ListTags,
sagemaker:CreateInferenceComponent,
sagemaker:DescribeInferenceComponent
```

</TabItem>
<TabItem value="update">

```json
sagemaker:UpdateInferenceComponent,
sagemaker:UpdateInferenceComponentRuntimeConfig,
sagemaker:DescribeInferenceComponent,
sagemaker:AddTags,
sagemaker:ListTags,
sagemaker:DeleteTags
```

</TabItem>
<TabItem value="delete">

```json
sagemaker:DescribeInferenceComponent,
sagemaker:DeleteInferenceComponent,
sagemaker:DeleteTags
```

</TabItem>
<TabItem value="read">

```json
sagemaker:DescribeInferenceComponent,
sagemaker:ListTags
```

</TabItem>
<TabItem value="list">

```json
sagemaker:ListInferenceComponents,
sagemaker:DescribeInferenceComponent,
sagemaker:ListTags
```

</TabItem>
</Tabs>