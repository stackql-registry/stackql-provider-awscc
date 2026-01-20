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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html"><code>AWS::SageMaker::InferenceComponent</code></a>.

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
    <td><CopyableCode code="EndpointName, Specification, region" /></td>
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
WHERE region = 'us-east-1' AND data__Identifier = '<InferenceComponentArn>';
```

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
'{{ EndpointName }}',
 '{{ Specification }}',
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
 '{{ InferenceComponentName }}',
 '{{ EndpointArn }}',
 '{{ EndpointName }}',
 '{{ VariantName }}',
 '{{ Specification }}',
 '{{ RuntimeConfig }}',
 '{{ DeploymentConfig }}',
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
  - name: inference_component
    props:
      - name: InferenceComponentName
        value: '{{ InferenceComponentName }}'
      - name: EndpointArn
        value: '{{ EndpointArn }}'
      - name: EndpointName
        value: '{{ EndpointName }}'
      - name: VariantName
        value: '{{ VariantName }}'
      - name: Specification
        value:
          ModelName: '{{ ModelName }}'
          BaseInferenceComponentName: '{{ BaseInferenceComponentName }}'
          Container:
            DeployedImage:
              SpecifiedImage: '{{ SpecifiedImage }}'
              ResolvedImage: null
              ResolutionTime: '{{ ResolutionTime }}'
            Image: null
            ArtifactUrl: '{{ ArtifactUrl }}'
            Environment: {}
          StartupParameters:
            ModelDataDownloadTimeoutInSeconds: '{{ ModelDataDownloadTimeoutInSeconds }}'
            ContainerStartupHealthCheckTimeoutInSeconds: null
          ComputeResourceRequirements:
            NumberOfCpuCoresRequired: null
            NumberOfAcceleratorDevicesRequired: null
            MinMemoryRequiredInMb: '{{ MinMemoryRequiredInMb }}'
            MaxMemoryRequiredInMb: null
      - name: RuntimeConfig
        value:
          CopyCount: '{{ CopyCount }}'
          DesiredCopyCount: null
          CurrentCopyCount: null
      - name: DeploymentConfig
        value:
          RollingUpdatePolicy:
            MaximumBatchSize:
              Type: '{{ Type }}'
              Value: '{{ Value }}'
            WaitIntervalInSeconds: '{{ WaitIntervalInSeconds }}'
            RollbackMaximumBatchSize: null
            MaximumExecutionTimeoutInSeconds: '{{ MaximumExecutionTimeoutInSeconds }}'
          AutoRollbackConfiguration:
            Alarms:
              - AlarmName: '{{ AlarmName }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.sagemaker.inference_components
WHERE data__Identifier = '<InferenceComponentArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>inference_components</code> resource, the following permissions are required:

### Create
```json
sagemaker:AddTags,
sagemaker:ListTags,
sagemaker:CreateInferenceComponent,
sagemaker:DescribeInferenceComponent
```

### Update
```json
sagemaker:UpdateInferenceComponent,
sagemaker:UpdateInferenceComponentRuntimeConfig,
sagemaker:DescribeInferenceComponent,
sagemaker:AddTags,
sagemaker:ListTags,
sagemaker:DeleteTags
```

### Delete
```json
sagemaker:DescribeInferenceComponent,
sagemaker:DeleteInferenceComponent,
sagemaker:DeleteTags
```

### Read
```json
sagemaker:DescribeInferenceComponent,
sagemaker:ListTags
```

### List
```json
sagemaker:ListInferenceComponents,
sagemaker:DescribeInferenceComponent,
sagemaker:ListTags
```
