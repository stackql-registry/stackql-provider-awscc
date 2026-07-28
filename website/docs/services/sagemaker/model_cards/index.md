---
title: model_cards
hide_title: false
hide_table_of_contents: false
keywords:
  - model_cards
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

import CodeBlock from '@theme/CodeBlock';
import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>model_card</code> resource or lists <code>model_cards</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>model_cards</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SageMaker::ModelCard.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sagemaker.model_cards" /></td></tr>
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
    "name": "model_card_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the successfully created model card."
  },
  {
    "name": "model_card_version",
    "type": "integer",
    "description": "A version of the model card."
  },
  {
    "name": "model_card_name",
    "type": "string",
    "description": "The unique name of the model card."
  },
  {
    "name": "security_config",
    "type": "object",
    "description": "An optional Key Management Service key to encrypt, decrypt, and re-encrypt model card content for regulated workloads with highly sensitive data.",
    "children": [
      {
        "name": "kms_key_id",
        "type": "string",
        "description": "A Key Management Service key ID to use for encrypting a model card."
      }
    ]
  },
  {
    "name": "model_card_status",
    "type": "string",
    "description": "The approval status of the model card within your organization. Different organizations might have different criteria for model card review and approval."
  },
  {
    "name": "content",
    "type": "object",
    "description": "The content of the model card.",
    "children": [
      {
        "name": "model_overview",
        "type": "object",
        "description": "Overview about the model.",
        "children": [
          {
            "name": "model_description",
            "type": "string",
            "description": "description of model."
          },
          {
            "name": "model_owner",
            "type": "string",
            "description": "Owner of model."
          },
          {
            "name": "model_creator",
            "type": "string",
            "description": "Creator of model."
          },
          {
            "name": "problem_type",
            "type": "string",
            "description": "Problem being solved with the model."
          },
          {
            "name": "algorithm_type",
            "type": "string",
            "description": "Algorithm used to solve the problem."
          },
          {
            "name": "model_id",
            "type": "string",
            "description": "SageMaker Model Arn or Non SageMaker Model id."
          },
          {
            "name": "model_artifact",
            "type": "array",
            "description": "Location of the model artifact."
          },
          {
            "name": "model_name",
            "type": "string",
            "description": "Name of the model."
          },
          {
            "name": "model_version",
            "type": "number",
            "description": "Version of the model."
          },
          {
            "name": "inference_environment",
            "type": "object",
            "description": "Overview about the inference.",
            "children": [
              {
                "name": "container_image",
                "type": "array",
                "description": "SageMaker inference image uri."
              }
            ]
          }
        ]
      },
      {
        "name": "model_package_details",
        "type": "object",
        "description": "Metadata information related to model package version",
        "children": [
          {
            "name": "model_package_description",
            "type": "string",
            "description": "A brief summary of the model package"
          },
          {
            "name": "model_package_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the model package"
          },
          {
            "name": "created_by",
            "type": "object",
            "description": "Information about the user who created model package.",
            "children": [
              {
                "name": "user_profile_name",
                "type": "string",
                "description": "The name of the user's profile in Studio"
              }
            ]
          },
          {
            "name": "model_package_status",
            "type": "string",
            "description": "Current status of model package"
          },
          {
            "name": "model_approval_status",
            "type": "string",
            "description": "Current approval status of model package"
          },
          {
            "name": "approval_description",
            "type": "string",
            "description": "A description provided for the model approval"
          },
          {
            "name": "model_package_group_name",
            "type": "string",
            "description": "If the model is a versioned model, the name of the model group that the versioned model belongs to."
          },
          {
            "name": "model_package_name",
            "type": "string",
            "description": "Name of the model package"
          },
          {
            "name": "model_package_version",
            "type": "number",
            "description": "Version of the model package"
          },
          {
            "name": "domain",
            "type": "string",
            "description": "The machine learning domain of the model package you specified. Common machine learning domains include computer vision and natural language processing."
          },
          {
            "name": "task",
            "type": "string",
            "description": "The machine learning task you specified that your model package accomplishes. Common machine learning tasks include object detection and image classification."
          },
          {
            "name": "source_algorithms",
            "type": "array",
            "description": "A list of algorithms that were used to create a model package.",
            "children": [
              {
                "name": "algorithm_name",
                "type": "string",
                "description": "The name of an algorithm that was used to create the model package. The algorithm must be either an algorithm resource in your SageMaker account or an algorithm in AWS Marketplace that you are subscribed to."
              },
              {
                "name": "model_data_url",
                "type": "string",
                "description": "The Amazon S3 path where the model artifacts, which result from model training, are stored."
              }
            ]
          },
          {
            "name": "inference_specification",
            "type": "object",
            "description": "Details about inference jobs that can be run with models based on this model package.",
            "children": [
              {
                "name": "containers",
                "type": "array",
                "description": "Contains inference related information which were used to create model package."
              }
            ]
          }
        ]
      },
      {
        "name": "intended_uses",
        "type": "object",
        "description": "Intended usage of model.",
        "children": [
          {
            "name": "purpose_of_model",
            "type": "string",
            "description": "Why the model was developed?"
          },
          {
            "name": "intended_uses",
            "type": "string",
            "description": "intended use cases."
          },
          {
            "name": "factors_affecting_model_efficiency",
            "type": "string",
            "description": ""
          },
          {
            "name": "risk_rating",
            "type": "string",
            "description": "Risk rating of model."
          },
          {
            "name": "explanations_for_risk_rating",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "business_details",
        "type": "object",
        "description": "Business details.",
        "children": [
          {
            "name": "business_problem",
            "type": "string",
            "description": "What business problem does the model solve?"
          },
          {
            "name": "business_stakeholders",
            "type": "string",
            "description": "Business stakeholders."
          },
          {
            "name": "line_of_business",
            "type": "string",
            "description": "Line of business."
          }
        ]
      },
      {
        "name": "training_details",
        "type": "object",
        "description": "Overview about the training.",
        "children": [
          {
            "name": "objective_function",
            "type": "object",
            "description": "the objective function the model will optimize for.",
            "children": [
              {
                "name": "function",
                "type": "object",
                "description": "objective function that training job is optimized for."
              },
              {
                "name": "notes",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "training_observations",
            "type": "string",
            "description": ""
          },
          {
            "name": "training_job_details",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "training_arn",
                "type": "string",
                "description": "SageMaker Training job arn."
              },
              {
                "name": "training_datasets",
                "type": "array",
                "description": "Location of the model datasets."
              },
              {
                "name": "training_environment",
                "type": "object",
                "description": ""
              },
              {
                "name": "training_metrics",
                "type": "array",
                "description": ""
              },
              {
                "name": "user_provided_training_metrics",
                "type": "array",
                "description": ""
              },
              {
                "name": "hyper_parameters",
                "type": "array",
                "description": ""
              },
              {
                "name": "user_provided_hyper_parameters",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "evaluation_details",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": ""
          },
          {
            "name": "evaluation_observation",
            "type": "string",
            "description": ""
          },
          {
            "name": "evaluation_job_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "datasets",
            "type": "array",
            "description": ""
          },
          {
            "name": "metadata",
            "type": "object",
            "description": "additional attributes associated with the evaluation results."
          },
          {
            "name": "metric_groups",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "name",
                "type": "string",
                "description": ""
              },
              {
                "name": "metric_data",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "additional_information",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "ethical_considerations",
            "type": "string",
            "description": "Any ethical considerations that the author wants to provide."
          },
          {
            "name": "caveats_and_recommendations",
            "type": "string",
            "description": "Caveats and recommendations for people who might use this model in their applications."
          },
          {
            "name": "custom_details",
            "type": "object",
            "description": "customer details."
          }
        ]
      }
    ]
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": "The date and time the model card was created."
  },
  {
    "name": "created_by",
    "type": "object",
    "description": "Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.",
    "children": [
      {
        "name": "user_profile_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the user's profile."
      },
      {
        "name": "user_profile_name",
        "type": "string",
        "description": "The name of the user's profile."
      },
      {
        "name": "domain_id",
        "type": "string",
        "description": "The domain associated with the user."
      }
    ]
  },
  {
    "name": "last_modified_time",
    "type": "string",
    "description": "The date and time the model card was last modified."
  },
  {
    "name": "model_card_processing_status",
    "type": "string",
    "description": "The processing status of model card deletion. The ModelCardProcessingStatus updates throughout the different deletion steps."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Key-value pairs used to manage metadata for model cards.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The tag key. Tag keys must be unique per resource."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The tag value."
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
    "name": "model_card_name",
    "type": "string",
    "description": "The unique name of the model card."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html"><code>AWS::SageMaker::ModelCard</code></a>.

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
    <td><code>model_cards</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ModelCardName, Content, ModelCardStatus, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>model_cards</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>model_cards</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>model_cards_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>model_cards</code></td>
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

Gets all properties from an individual <code>model_card</code>.
```sql
SELECT
  region,
  model_card_arn,
  model_card_version,
  model_card_name,
  security_config,
  model_card_status,
  content,
  creation_time,
  created_by,
  last_modified_time,
  last_modified_by,
  model_card_processing_status,
  tags
FROM awscc.sagemaker.model_cards
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ model_card_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>model_cards</code> in a region.
```sql
SELECT
  region,
  model_card_name
FROM awscc.sagemaker.model_cards_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>model_card</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.sagemaker.model_cards (
  ModelCardName,
  ModelCardStatus,
  Content,
  region
)
SELECT
  '{{ model_card_name }}',
  '{{ model_card_status }}',
  '{{ content }}',
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
INSERT INTO awscc.sagemaker.model_cards (
  ModelCardName,
  SecurityConfig,
  ModelCardStatus,
  Content,
  CreatedBy,
  LastModifiedBy,
  Tags,
  region
)
SELECT
  '{{ model_card_name }}',
  '{{ security_config }}',
  '{{ model_card_status }}',
  '{{ content }}',
  '{{ created_by }}',
  '{{ last_modified_by }}',
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

<CodeBlock language="yaml">{`version: 1
name: stack name
description: stack description
providers:
  - aws
globals:
  - name: region
    value: '{{ vars.AWS_REGION }}'
resources:
  - name: model_card
    props:
      - name: model_card_name
        value: '{{ model_card_name }}'
      - name: security_config
        value:
          kms_key_id: '{{ kms_key_id }}'
      - name: model_card_status
        value: '{{ model_card_status }}'
      - name: content
        value:
          model_overview:
            model_description: '{{ model_description }}'
            model_owner: '{{ model_owner }}'
            model_creator: '{{ model_creator }}'
            problem_type: '{{ problem_type }}'
            algorithm_type: '{{ algorithm_type }}'
            model_id: '{{ model_id }}'
            model_artifact:
              - '{{ model_artifact[0] }}'
            model_name: '{{ model_name }}'
            model_version: null
            inference_environment:
              container_image:
                - '{{ container_image[0] }}'
          model_package_details:
            model_package_description: '{{ model_package_description }}'
            model_package_arn: '{{ model_package_arn }}'
            created_by:
              user_profile_name: '{{ user_profile_name }}'
            model_package_status: '{{ model_package_status }}'
            model_approval_status: '{{ model_approval_status }}'
            approval_description: '{{ approval_description }}'
            model_package_group_name: '{{ model_package_group_name }}'
            model_package_name: '{{ model_package_name }}'
            model_package_version: null
            domain: '{{ domain }}'
            task: '{{ task }}'
            source_algorithms:
              - algorithm_name: '{{ algorithm_name }}'
                model_data_url: '{{ model_data_url }}'
            inference_specification:
              containers:
                - model_data_url: '{{ model_data_url }}'
                  image: '{{ image }}'
                  nearest_model_name: '{{ nearest_model_name }}'
          intended_uses:
            purpose_of_model: '{{ purpose_of_model }}'
            intended_uses: '{{ intended_uses }}'
            factors_affecting_model_efficiency: '{{ factors_affecting_model_efficiency }}'
            risk_rating: '{{ risk_rating }}'
            explanations_for_risk_rating: '{{ explanations_for_risk_rating }}'
          business_details:
            business_problem: '{{ business_problem }}'
            business_stakeholders: '{{ business_stakeholders }}'
            line_of_business: '{{ line_of_business }}'
          training_details:
            objective_function:
              function:
                function: '{{ function }}'
                facet: '{{ facet }}'
                condition: '{{ condition }}'
              notes: '{{ notes }}'
            training_observations: '{{ training_observations }}'
            training_job_details:
              training_arn: '{{ training_arn }}'
              training_datasets:
                - '{{ training_datasets[0] }}'
              training_environment:
                container_image:
                  - '{{ container_image[0] }}'
              training_metrics:
                - name: '{{ name }}'
                  notes: '{{ notes }}'
                  value: null
              user_provided_training_metrics:
                - null
              hyper_parameters:
                - name: '{{ name }}'
                  value: '{{ value }}'
              user_provided_hyper_parameters:
                - null
          evaluation_details:
            - name: '{{ name }}'
              evaluation_observation: '{{ evaluation_observation }}'
              evaluation_job_arn: '{{ evaluation_job_arn }}'
              datasets:
                - '{{ datasets[0] }}'
              metadata: {}
              metric_groups:
                - name: '{{ name }}'
                  metric_data:
                    - null
          additional_information:
            ethical_considerations: '{{ ethical_considerations }}'
            caveats_and_recommendations: '{{ caveats_and_recommendations }}'
            custom_details: {}
      - name: created_by
        value:
          user_profile_arn: '{{ user_profile_arn }}'
          user_profile_name: '{{ user_profile_name }}'
          domain_id: '{{ domain_id }}'
      - name: last_modified_by
        value: null
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>model_card</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.sagemaker.model_cards
SET PatchDocument = string('{{ {
    "ModelCardStatus": model_card_status,
    "Content": content,
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ model_card_name }}'
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
DELETE FROM awscc.sagemaker.model_cards
WHERE
  Identifier = '{{ model_card_name }}' AND
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

To operate on the <code>model_cards</code> resource, the following permissions are required:

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
sagemaker:CreateModelCard,
sagemaker:DescribeModel,
kms:DescribeKey,
kms:GenerateDataKey,
kms:CreateGrant,
sagemaker:DescribeModelPackageGroup,
sagemaker:DescribeModelPackage,
sagemaker:AddTags
```

</TabItem>
<TabItem value="read">

```json
sagemaker:DescribeModelCard,
sagemaker:DescribeModelPackageGroup,
sagemaker:DescribeModelPackage,
kms:Decrypt,
sagemaker:ListTags
```

</TabItem>
<TabItem value="update">

```json
sagemaker:UpdateModelCard,
sagemaker:DescribeModelCard,
sagemaker:DescribeModel,
kms:GenerateDataKey,
kms:Decrypt,
sagemaker:DescribeModelPackageGroup,
sagemaker:DescribeModelPackage,
sagemaker:ListTags,
sagemaker:AddTags,
sagemaker:DeleteTags
```

</TabItem>
<TabItem value="delete">

```json
sagemaker:DescribeModelCard,
sagemaker:DeleteModelCard,
sagemaker:DescribeModelPackageGroup,
sagemaker:DescribeModelPackage,
kms:RetireGrant,
kms:Decrypt,
sagemaker:ListTags,
sagemaker:DeleteTags
```

</TabItem>
<TabItem value="list">

```json
sagemaker:ListModelCards,
sagemaker:ListModelCardVersions
```

</TabItem>
</Tabs>