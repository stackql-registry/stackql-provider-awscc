---
title: inference_experiments
hide_title: false
hide_table_of_contents: false
keywords:
  - inference_experiments
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

Creates, updates, deletes or gets an <code>inference_experiment</code> resource or lists <code>inference_experiments</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>inference_experiments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SageMaker::InferenceExperiment</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sagemaker.inference_experiments" /></td></tr>
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
    "description": "The Amazon Resource Name (ARN) of the inference experiment."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name for the inference experiment."
  },
  {
    "name": "type",
    "type": "string",
    "description": "The type of the inference experiment that you want to run."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the inference experiment."
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage Amazon SageMaker Inference endpoints for model deployment."
  },
  {
    "name": "endpoint_name",
    "type": "string",
    "description": "The name of the endpoint used to run the monitoring job."
  },
  {
    "name": "endpoint_metadata",
    "type": "object",
    "description": "The metadata of the endpoint on which the inference experiment ran.",
    "children": [
      {
        "name": "endpoint_config_name",
        "type": "string",
        "description": "The name of the endpoint configuration."
      },
      {
        "name": "endpoint_status",
        "type": "string",
        "description": "The status of the endpoint. For possible values of the status of an endpoint."
      }
    ]
  },
  {
    "name": "schedule",
    "type": "object",
    "description": "The duration for which you want the inference experiment to run.",
    "children": [
      {
        "name": "start_time",
        "type": "string",
        "description": "The timestamp at which the inference experiment started or will start."
      },
      {
        "name": "end_time",
        "type": "string",
        "description": "The timestamp at which the inference experiment ended or will end."
      }
    ]
  },
  {
    "name": "kms_key",
    "type": "string",
    "description": "The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint."
  },
  {
    "name": "data_storage_config",
    "type": "object",
    "description": "The Amazon S3 location and configuration for storing inference request and response data.",
    "children": [
      {
        "name": "destination",
        "type": "string",
        "description": "The Amazon S3 bucket where the inference request and response data is stored."
      },
      {
        "name": "kms_key",
        "type": "string",
        "description": "The AWS Key Management Service key that Amazon SageMaker uses to encrypt captured data at rest using Amazon S3 server-side encryption."
      },
      {
        "name": "content_type",
        "type": "object",
        "description": "Configuration specifying how to treat different headers. If no headers are specified SageMaker will by default base64 encode when capturing the data.",
        "children": [
          {
            "name": "csv_content_types",
            "type": "array",
            "description": "The list of all content type headers that SageMaker will treat as CSV and capture accordingly."
          },
          {
            "name": "json_content_types",
            "type": "array",
            "description": "The list of all content type headers that SageMaker will treat as JSON and capture accordingly."
          }
        ]
      }
    ]
  },
  {
    "name": "model_variants",
    "type": "array",
    "description": "An array of ModelVariantConfig objects. Each ModelVariantConfig object in the array describes the infrastructure configuration for the corresponding variant.",
    "children": [
      {
        "name": "model_name",
        "type": "string",
        "description": "The name of the Amazon SageMaker Model entity."
      },
      {
        "name": "variant_name",
        "type": "string",
        "description": "The name of the variant."
      },
      {
        "name": "infrastructure_config",
        "type": "object",
        "description": "The configuration for the infrastructure that the model will be deployed to.",
        "children": [
          {
            "name": "infrastructure_type",
            "type": "string",
            "description": "The type of the inference experiment that you want to run."
          },
          {
            "name": "real_time_inference_config",
            "type": "object",
            "description": "The infrastructure configuration for deploying the model to a real-time inference endpoint.",
            "children": [
              {
                "name": "instance_type",
                "type": "string",
                "description": "The instance type the model is deployed to."
              },
              {
                "name": "instance_count",
                "type": "integer",
                "description": "The number of instances of the type specified by InstanceType."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "shadow_mode_config",
    "type": "object",
    "description": "The configuration of ShadowMode inference experiment type. Use this field to specify a production variant which takes all the inference requests, and a shadow variant to which Amazon SageMaker replicates a percentage of the inference requests. For the shadow variant also specify the percentage of requests that Amazon SageMaker replicates.",
    "children": [
      {
        "name": "source_model_variant_name",
        "type": "string",
        "description": "The name of the production variant, which takes all the inference requests."
      },
      {
        "name": "shadow_model_variants",
        "type": "array",
        "description": "List of shadow variant configurations.",
        "children": [
          {
            "name": "shadow_model_variant_name",
            "type": "string",
            "description": "The name of the shadow variant."
          },
          {
            "name": "sampling_percentage",
            "type": "integer",
            "description": "The percentage of inference requests that Amazon SageMaker replicates from the production variant to the shadow variant."
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
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
    "name": "creation_time",
    "type": "string",
    "description": "The timestamp at which you created the inference experiment."
  },
  {
    "name": "last_modified_time",
    "type": "string",
    "description": "The timestamp at which you last modified the inference experiment."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of the inference experiment."
  },
  {
    "name": "status_reason",
    "type": "string",
    "description": "The error message or client-specified reason from the StopInferenceExperiment API, that explains the status of the inference experiment."
  },
  {
    "name": "desired_state",
    "type": "string",
    "description": "The desired state of the experiment after starting or stopping operation."
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
    "name": "name",
    "type": "string",
    "description": "The name for the inference experiment."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferenceexperiment.html"><code>AWS::SageMaker::InferenceExperiment</code></a>.

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
    <td><code>inference_experiments</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, Type, RoleArn, EndpointName, ModelVariants, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>inference_experiments</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>inference_experiments</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>inference_experiments_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>inference_experiments</code></td>
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

Gets all properties from an individual <code>inference_experiment</code>.
```sql
SELECT
region,
arn,
name,
type,
description,
role_arn,
endpoint_name,
endpoint_metadata,
schedule,
kms_key,
data_storage_config,
model_variants,
shadow_mode_config,
tags,
creation_time,
last_modified_time,
status,
status_reason,
desired_state
FROM awscc.sagemaker.inference_experiments
WHERE region = 'us-east-1' AND Identifier = '{{ name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>inference_experiments</code> in a region.
```sql
SELECT
region,
name
FROM awscc.sagemaker.inference_experiments_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>inference_experiment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.sagemaker.inference_experiments (
 Name,
 Type,
 RoleArn,
 EndpointName,
 ModelVariants,
 region
)
SELECT
'{{ name }}',
 '{{ type }}',
 '{{ role_arn }}',
 '{{ endpoint_name }}',
 '{{ model_variants }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.sagemaker.inference_experiments (
 Name,
 Type,
 Description,
 RoleArn,
 EndpointName,
 Schedule,
 KmsKey,
 DataStorageConfig,
 ModelVariants,
 ShadowModeConfig,
 Tags,
 StatusReason,
 DesiredState,
 region
)
SELECT
 '{{ name }}',
 '{{ type }}',
 '{{ description }}',
 '{{ role_arn }}',
 '{{ endpoint_name }}',
 '{{ schedule }}',
 '{{ kms_key }}',
 '{{ data_storage_config }}',
 '{{ model_variants }}',
 '{{ shadow_mode_config }}',
 '{{ tags }}',
 '{{ status_reason }}',
 '{{ desired_state }}',
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
  - name: inference_experiment
    props:
      - name: name
        value: '{{ name }}'
      - name: type
        value: '{{ type }}'
      - name: description
        value: '{{ description }}'
      - name: role_arn
        value: '{{ role_arn }}'
      - name: endpoint_name
        value: '{{ endpoint_name }}'
      - name: schedule
        value:
          start_time: '{{ start_time }}'
          end_time: '{{ end_time }}'
      - name: kms_key
        value: '{{ kms_key }}'
      - name: data_storage_config
        value:
          destination: '{{ destination }}'
          kms_key: '{{ kms_key }}'
          content_type:
            csv_content_types:
              - '{{ csv_content_types[0] }}'
            json_content_types:
              - '{{ json_content_types[0] }}'
      - name: model_variants
        value:
          - model_name: '{{ model_name }}'
            variant_name: '{{ variant_name }}'
            infrastructure_config:
              infrastructure_type: '{{ infrastructure_type }}'
              real_time_inference_config:
                instance_type: '{{ instance_type }}'
                instance_count: '{{ instance_count }}'
      - name: shadow_mode_config
        value:
          source_model_variant_name: '{{ source_model_variant_name }}'
          shadow_model_variants:
            - shadow_model_variant_name: '{{ shadow_model_variant_name }}'
              sampling_percentage: '{{ sampling_percentage }}'
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
      - name: status_reason
        value: '{{ status_reason }}'
      - name: desired_state
        value: '{{ desired_state }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>inference_experiment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.sagemaker.inference_experiments
SET PatchDocument = string('{{ {
    "Description": description,
    "Schedule": schedule,
    "DataStorageConfig": data_storage_config,
    "ModelVariants": model_variants,
    "ShadowModeConfig": shadow_mode_config,
    "Tags": tags,
    "StatusReason": status_reason,
    "DesiredState": desired_state
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.sagemaker.inference_experiments
WHERE Identifier = '{{ name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>inference_experiments</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

```json
sagemaker:CreateInferenceExperiment,
sagemaker:DescribeInferenceExperiment,
sagemaker:AddTags,
sagemaker:ListTags,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
sagemaker:DeleteInferenceExperiment,
sagemaker:DescribeInferenceExperiment,
sagemaker:StopInferenceExperiment,
sagemaker:ListTags
```

</TabItem>
<TabItem value="list">

```json
sagemaker:ListInferenceExperiments
```

</TabItem>
<TabItem value="read">

```json
sagemaker:DescribeInferenceExperiment,
sagemaker:ListTags
```

</TabItem>
<TabItem value="update">

```json
sagemaker:UpdateInferenceExperiment,
sagemaker:StartInferenceExperiment,
sagemaker:StopInferenceExperiment,
sagemaker:DescribeInferenceExperiment,
sagemaker:AddTags,
sagemaker:DeleteTags,
sagemaker:ListTags
```

</TabItem>
</Tabs>