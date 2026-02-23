---
title: model_packages
hide_title: false
hide_table_of_contents: false
keywords:
  - model_packages
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

Creates, updates, deletes or gets a <code>model_package</code> resource or lists <code>model_packages</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>model_packages</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SageMaker::ModelPackage</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sagemaker.model_packages" /></td></tr>
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
    "name": "additional_inference_specifications",
    "type": "array",
    "description": "An array of additional Inference Specification objects.",
    "children": [
      {
        "name": "containers",
        "type": "array",
        "description": "The Amazon ECR registry path of the Docker image that contains the inference code.",
        "children": [
          {
            "name": "container_hostname",
            "type": "string",
            "description": "The DNS host name for the Docker container."
          },
          {
            "name": "environment",
            "type": "object",
            "description": "Sets the environment variables in the Docker container"
          },
          {
            "name": "model_input",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "data_input_config",
                "type": "string",
                "description": "The input configuration object for the model."
              }
            ]
          },
          {
            "name": "image",
            "type": "string",
            "description": "The Amazon EC2 Container Registry (Amazon ECR) path where inference code is stored."
          },
          {
            "name": "image_digest",
            "type": "string",
            "description": "An MD5 hash of the training algorithm that identifies the Docker image used for training."
          },
          {
            "name": "model_data_url",
            "type": "string",
            "description": "A structure with Model Input details."
          },
          {
            "name": "model_data_source",
            "type": "object",
            "description": "Specifies the location of ML model data to deploy during endpoint creation.",
            "children": [
              {
                "name": "s3_data_source",
                "type": "object",
                "description": "Specifies the S3 location of ML model data to deploy."
              }
            ]
          },
          {
            "name": "framework",
            "type": "string",
            "description": "The machine learning framework of the model package container image."
          },
          {
            "name": "framework_version",
            "type": "string",
            "description": "The framework version of the Model Package Container Image."
          },
          {
            "name": "nearest_model_name",
            "type": "string",
            "description": "The name of a pre-trained machine learning benchmarked by Amazon SageMaker Inference Recommender model that matches your model."
          }
        ]
      },
      {
        "name": "description",
        "type": "string",
        "description": "A description of the additional Inference specification."
      },
      {
        "name": "name",
        "type": "string",
        "description": "A unique name to identify the additional inference specification. The name must be unique within the list of your additional inference specifications for a particular model package."
      },
      {
        "name": "supported_content_types",
        "type": "array",
        "description": "The supported MIME types for the input data."
      },
      {
        "name": "supported_realtime_inference_instance_types",
        "type": "array",
        "description": "A list of the instance types that are used to generate inferences in real-time"
      },
      {
        "name": "supported_response_mi_me_types",
        "type": "array",
        "description": "The supported MIME types for the output data."
      },
      {
        "name": "supported_transform_instance_types",
        "type": "array",
        "description": "A list of the instance types on which a transformation job can be run or on which an endpoint can be deployed."
      }
    ]
  },
  {
    "name": "certify_for_marketplace",
    "type": "boolean",
    "description": "Whether to certify the model package for listing on AWS Marketplace."
  },
  {
    "name": "client_token",
    "type": "string",
    "description": "A unique token that guarantees that the call to this API is idempotent."
  },
  {
    "name": "customer_metadata_properties",
    "type": "object",
    "description": "The metadata properties associated with the model package versions."
  },
  {
    "name": "domain",
    "type": "string",
    "description": "The machine learning domain of the model package you specified."
  },
  {
    "name": "drift_check_baselines",
    "type": "object",
    "description": "Represents the drift check baselines that can be used when the model monitor is set using the model package.",
    "children": [
      {
        "name": "bias",
        "type": "object",
        "description": "Represents the drift check bias baselines that can be used when the model monitor is set using the model package.",
        "children": [
          {
            "name": "post_training_constraints",
            "type": "object",
            "description": "Represents a Metric Source Object.",
            "children": [
              {
                "name": "content_digest",
                "type": "string",
                "description": "The digest of the metric source."
              },
              {
                "name": "content_type",
                "type": "string",
                "description": "The type of content stored in the metric source."
              },
              {
                "name": "s3_uri",
                "type": "string",
                "description": "The Amazon S3 URI for the metric source."
              }
            ]
          },
          {
            "name": "config_file",
            "type": "object",
            "description": "Represents a File Source Object.",
            "children": [
              {
                "name": "content_digest",
                "type": "string",
                "description": "The digest of the file source."
              },
              {
                "name": "content_type",
                "type": "string",
                "description": "The type of content stored in the file source."
              },
              {
                "name": "s3_uri",
                "type": "string",
                "description": "The Amazon S3 URI for the file source."
              }
            ]
          }
        ]
      },
      {
        "name": "explainability",
        "type": "object",
        "description": "Contains explainability metrics for a model.",
        "children": [
          {
            "name": "constraints",
            "type": "object",
            "description": "Represents a Metric Source Object.",
            "children": [
              {
                "name": "content_digest",
                "type": "string",
                "description": "The digest of the metric source."
              },
              {
                "name": "content_type",
                "type": "string",
                "description": "The type of content stored in the metric source."
              },
              {
                "name": "s3_uri",
                "type": "string",
                "description": "The Amazon S3 URI for the metric source."
              }
            ]
          },
          {
            "name": "config_file",
            "type": "object",
            "description": "Represents a File Source Object.",
            "children": [
              {
                "name": "content_digest",
                "type": "string",
                "description": "The digest of the file source."
              },
              {
                "name": "content_type",
                "type": "string",
                "description": "The type of content stored in the file source."
              },
              {
                "name": "s3_uri",
                "type": "string",
                "description": "The Amazon S3 URI for the file source."
              }
            ]
          }
        ]
      },
      {
        "name": "model_data_quality",
        "type": "object",
        "description": "Represents the drift check data quality baselines that can be used when the model monitor is set using the model package.",
        "children": [
          {
            "name": "constraints",
            "type": "object",
            "description": "Represents a Metric Source Object.",
            "children": [
              {
                "name": "content_digest",
                "type": "string",
                "description": "The digest of the metric source."
              },
              {
                "name": "content_type",
                "type": "string",
                "description": "The type of content stored in the metric source."
              },
              {
                "name": "s3_uri",
                "type": "string",
                "description": "The Amazon S3 URI for the metric source."
              }
            ]
          }
        ]
      },
      {
        "name": "model_quality",
        "type": "object",
        "description": "Represents the drift check model quality baselines that can be used when the model monitor is set using the model package.",
        "children": [
          {
            "name": "constraints",
            "type": "object",
            "description": "Represents a Metric Source Object.",
            "children": [
              {
                "name": "content_digest",
                "type": "string",
                "description": "The digest of the metric source."
              },
              {
                "name": "content_type",
                "type": "string",
                "description": "The type of content stored in the metric source."
              },
              {
                "name": "s3_uri",
                "type": "string",
                "description": "The Amazon S3 URI for the metric source."
              }
            ]
          }
        ]
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
        "description": "The Amazon ECR registry path of the Docker image that contains the inference code.",
        "children": [
          {
            "name": "container_hostname",
            "type": "string",
            "description": "The DNS host name for the Docker container."
          },
          {
            "name": "environment",
            "type": "object",
            "description": "Sets the environment variables in the Docker container"
          },
          {
            "name": "model_input",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "data_input_config",
                "type": "string",
                "description": "The input configuration object for the model."
              }
            ]
          },
          {
            "name": "image",
            "type": "string",
            "description": "The Amazon EC2 Container Registry (Amazon ECR) path where inference code is stored."
          },
          {
            "name": "image_digest",
            "type": "string",
            "description": "An MD5 hash of the training algorithm that identifies the Docker image used for training."
          },
          {
            "name": "model_data_url",
            "type": "string",
            "description": "A structure with Model Input details."
          },
          {
            "name": "model_data_source",
            "type": "object",
            "description": "Specifies the location of ML model data to deploy during endpoint creation.",
            "children": [
              {
                "name": "s3_data_source",
                "type": "object",
                "description": "Specifies the S3 location of ML model data to deploy."
              }
            ]
          },
          {
            "name": "framework",
            "type": "string",
            "description": "The machine learning framework of the model package container image."
          },
          {
            "name": "framework_version",
            "type": "string",
            "description": "The framework version of the Model Package Container Image."
          },
          {
            "name": "nearest_model_name",
            "type": "string",
            "description": "The name of a pre-trained machine learning benchmarked by Amazon SageMaker Inference Recommender model that matches your model."
          }
        ]
      },
      {
        "name": "supported_content_types",
        "type": "array",
        "description": "The supported MIME types for the input data."
      },
      {
        "name": "supported_realtime_inference_instance_types",
        "type": "array",
        "description": "A list of the instance types that are used to generate inferences in real-time"
      },
      {
        "name": "supported_response_mi_me_types",
        "type": "array",
        "description": "The supported MIME types for the output data."
      },
      {
        "name": "supported_transform_instance_types",
        "type": "array",
        "description": "A list of the instance types on which a transformation job can be run or on which an endpoint can be deployed."
      }
    ]
  },
  {
    "name": "metadata_properties",
    "type": "object",
    "description": "Metadata properties of the tracking entity, trial, or trial component.",
    "children": [
      {
        "name": "commit_id",
        "type": "string",
        "description": "The commit ID."
      },
      {
        "name": "generated_by",
        "type": "string",
        "description": "The entity this entity was generated by."
      },
      {
        "name": "project_id",
        "type": "string",
        "description": "The project ID metadata."
      },
      {
        "name": "repository",
        "type": "string",
        "description": "The repository metadata."
      }
    ]
  },
  {
    "name": "model_approval_status",
    "type": "string",
    "description": "The approval status of the model package."
  },
  {
    "name": "model_metrics",
    "type": "object",
    "description": "A structure that contains model metrics reports.",
    "children": [
      {
        "name": "bias",
        "type": "object",
        "description": "Contains bias metrics for a model.",
        "children": [
          {
            "name": "report",
            "type": "object",
            "description": "Represents a Metric Source Object.",
            "children": [
              {
                "name": "content_digest",
                "type": "string",
                "description": "The digest of the metric source."
              },
              {
                "name": "content_type",
                "type": "string",
                "description": "The type of content stored in the metric source."
              },
              {
                "name": "s3_uri",
                "type": "string",
                "description": "The Amazon S3 URI for the metric source."
              }
            ]
          }
        ]
      },
      {
        "name": "explainability",
        "type": "object",
        "description": "Contains explainability metrics for a model.",
        "children": [
          {
            "name": "report",
            "type": "object",
            "description": "Represents a Metric Source Object.",
            "children": [
              {
                "name": "content_digest",
                "type": "string",
                "description": "The digest of the metric source."
              },
              {
                "name": "content_type",
                "type": "string",
                "description": "The type of content stored in the metric source."
              },
              {
                "name": "s3_uri",
                "type": "string",
                "description": "The Amazon S3 URI for the metric source."
              }
            ]
          }
        ]
      },
      {
        "name": "model_data_quality",
        "type": "object",
        "description": "Metrics that measure the quality of the input data for a model.",
        "children": [
          {
            "name": "constraints",
            "type": "object",
            "description": "Represents a Metric Source Object.",
            "children": [
              {
                "name": "content_digest",
                "type": "string",
                "description": "The digest of the metric source."
              },
              {
                "name": "content_type",
                "type": "string",
                "description": "The type of content stored in the metric source."
              },
              {
                "name": "s3_uri",
                "type": "string",
                "description": "The Amazon S3 URI for the metric source."
              }
            ]
          }
        ]
      },
      {
        "name": "model_quality",
        "type": "object",
        "description": "Metrics that measure the quality of a model.",
        "children": [
          {
            "name": "constraints",
            "type": "object",
            "description": "Represents a Metric Source Object.",
            "children": [
              {
                "name": "content_digest",
                "type": "string",
                "description": "The digest of the metric source."
              },
              {
                "name": "content_type",
                "type": "string",
                "description": "The type of content stored in the metric source."
              },
              {
                "name": "s3_uri",
                "type": "string",
                "description": "The Amazon S3 URI for the metric source."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "model_package_description",
    "type": "string",
    "description": "The description of the model package."
  },
  {
    "name": "model_package_group_name",
    "type": "string",
    "description": "The name of the model package group."
  },
  {
    "name": "model_package_name",
    "type": "string",
    "description": "The name or arn of the model package."
  },
  {
    "name": "sample_payload_url",
    "type": "string",
    "description": "The Amazon Simple Storage Service (Amazon S3) path where the sample payload are stored pointing to single gzip compressed tar archive."
  },
  {
    "name": "skip_model_validation",
    "type": "string",
    "description": "Indicates if you want to skip model validation."
  },
  {
    "name": "source_algorithm_specification",
    "type": "object",
    "description": "Details about the algorithm that was used to create the model package.",
    "children": [
      {
        "name": "source_algorithms",
        "type": "array",
        "description": "A list of algorithms that were used to create a model package.",
        "children": [
          {
            "name": "algorithm_name",
            "type": "string",
            "description": "The name of an algorithm that was used to create the model package. The algorithm must be either an algorithm resource in your Amazon SageMaker account or an algorithm in AWS Marketplace that you are subscribed to."
          },
          {
            "name": "model_data_url",
            "type": "string",
            "description": "The Amazon S3 path where the model artifacts, which result from model training, are stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix)."
          }
        ]
      }
    ]
  },
  {
    "name": "task",
    "type": "string",
    "description": "The machine learning task your model package accomplishes."
  },
  {
    "name": "validation_specification",
    "type": "object",
    "description": "Specifies configurations for one or more transform jobs that Amazon SageMaker runs to test the model package.",
    "children": [
      {
        "name": "validation_profiles",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "transform_job_definition",
            "type": "object",
            "description": "Defines the input needed to run a transform job using the inference specification specified in the algorithm.",
            "children": [
              {
                "name": "environment",
                "type": "object",
                "description": "Sets the environment variables in the Docker container"
              },
              {
                "name": "batch_strategy",
                "type": "string",
                "description": "A string that determines the number of records included in a single mini-batch."
              },
              {
                "name": "max_concurrent_transforms",
                "type": "integer",
                "description": "The maximum number of parallel requests that can be sent to each instance in a transform job. The default value is 1."
              },
              {
                "name": "max_payload_in_mb",
                "type": "integer",
                "description": "The maximum payload size allowed, in MB. A payload is the data portion of a record (without metadata)."
              },
              {
                "name": "transform_input",
                "type": "object",
                "description": "Describes the input source of a transform job and the way the transform job consumes it."
              },
              {
                "name": "transform_output",
                "type": "object",
                "description": "Describes the results of a transform job."
              },
              {
                "name": "transform_resources",
                "type": "object",
                "description": "Describes the resources, including ML instance types and ML instance count, to use for transform job."
              }
            ]
          },
          {
            "name": "profile_name",
            "type": "string",
            "description": "The name of the profile for the model package."
          }
        ]
      },
      {
        "name": "validation_role",
        "type": "string",
        "description": "The IAM roles to be used for the validation of the model package."
      }
    ]
  },
  {
    "name": "model_package_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the model package group."
  },
  {
    "name": "approval_description",
    "type": "string",
    "description": "A description provided for the model approval."
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": "The time at which the model package was created."
  },
  {
    "name": "last_modified_time",
    "type": "string",
    "description": "The time at which the model package was last modified."
  },
  {
    "name": "model_package_status",
    "type": "string",
    "description": "The current status of the model package."
  },
  {
    "name": "model_package_version",
    "type": "integer",
    "description": "The version of the model package."
  },
  {
    "name": "model_package_status_details",
    "type": "object",
    "description": "Details about the current status of the model package.",
    "children": [
      {
        "name": "validation_statuses",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "failure_reason",
            "type": "string",
            "description": "If the overall status is Failed, the reason for the failure."
          },
          {
            "name": "name",
            "type": "string",
            "description": "The name of the model package for which the overall status is being reported."
          },
          {
            "name": "status",
            "type": "string",
            "description": "The current status."
          }
        ]
      }
    ]
  },
  {
    "name": "source_uri",
    "type": "string",
    "description": "The URI of the source for the model package."
  },
  {
    "name": "model_card",
    "type": "object",
    "description": "The model card associated with the model package.",
    "children": [
      {
        "name": "model_card_content",
        "type": "string",
        "description": "The content of the model card."
      },
      {
        "name": "model_card_status",
        "type": "string",
        "description": "The approval status of the model card within your organization."
      }
    ]
  },
  {
    "name": "security_config",
    "type": "object",
    "description": "An optional AWS Key Management Service key to encrypt, decrypt, and re-encrypt model package information for regulated workloads with highly sensitive data.",
    "children": [
      {
        "name": "kms_key_id",
        "type": "string",
        "description": "The AWS KMS Key ID (KMSKeyId) used for encryption of model package information."
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
    "name": "model_package_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the model package group."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html"><code>AWS::SageMaker::ModelPackage</code></a>.

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
    <td><code>model_packages</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>model_packages</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>model_packages</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>model_packages_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>model_packages</code></td>
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

Gets all properties from an individual <code>model_package</code>.
```sql
SELECT
region,
tags,
additional_inference_specifications,
certify_for_marketplace,
client_token,
customer_metadata_properties,
domain,
drift_check_baselines,
inference_specification,
metadata_properties,
model_approval_status,
model_metrics,
model_package_description,
model_package_group_name,
model_package_name,
sample_payload_url,
skip_model_validation,
source_algorithm_specification,
task,
validation_specification,
model_package_arn,
approval_description,
creation_time,
last_modified_time,
model_package_status,
model_package_version,
additional_inference_specifications_to_add,
model_package_status_details,
source_uri,
model_card,
security_config
FROM awscc.sagemaker.model_packages
WHERE region = 'us-east-1' AND Identifier = '{{ model_package_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>model_packages</code> in a region.
```sql
SELECT
region,
model_package_arn
FROM awscc.sagemaker.model_packages_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>model_package</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.sagemaker.model_packages (
 Tags,
 AdditionalInferenceSpecifications,
 CertifyForMarketplace,
 ClientToken,
 CustomerMetadataProperties,
 Domain,
 DriftCheckBaselines,
 InferenceSpecification,
 MetadataProperties,
 ModelApprovalStatus,
 ModelMetrics,
 ModelPackageDescription,
 ModelPackageGroupName,
 ModelPackageName,
 SamplePayloadUrl,
 SkipModelValidation,
 SourceAlgorithmSpecification,
 Task,
 ValidationSpecification,
 ApprovalDescription,
 LastModifiedTime,
 ModelPackageVersion,
 AdditionalInferenceSpecificationsToAdd,
 ModelPackageStatusDetails,
 SourceUri,
 ModelCard,
 SecurityConfig,
 region
)
SELECT
'{{ tags }}',
 '{{ additional_inference_specifications }}',
 '{{ certify_for_marketplace }}',
 '{{ client_token }}',
 '{{ customer_metadata_properties }}',
 '{{ domain }}',
 '{{ drift_check_baselines }}',
 '{{ inference_specification }}',
 '{{ metadata_properties }}',
 '{{ model_approval_status }}',
 '{{ model_metrics }}',
 '{{ model_package_description }}',
 '{{ model_package_group_name }}',
 '{{ model_package_name }}',
 '{{ sample_payload_url }}',
 '{{ skip_model_validation }}',
 '{{ source_algorithm_specification }}',
 '{{ task }}',
 '{{ validation_specification }}',
 '{{ approval_description }}',
 '{{ last_modified_time }}',
 '{{ model_package_version }}',
 '{{ additional_inference_specifications_to_add }}',
 '{{ model_package_status_details }}',
 '{{ source_uri }}',
 '{{ model_card }}',
 '{{ security_config }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.sagemaker.model_packages (
 Tags,
 AdditionalInferenceSpecifications,
 CertifyForMarketplace,
 ClientToken,
 CustomerMetadataProperties,
 Domain,
 DriftCheckBaselines,
 InferenceSpecification,
 MetadataProperties,
 ModelApprovalStatus,
 ModelMetrics,
 ModelPackageDescription,
 ModelPackageGroupName,
 ModelPackageName,
 SamplePayloadUrl,
 SkipModelValidation,
 SourceAlgorithmSpecification,
 Task,
 ValidationSpecification,
 ApprovalDescription,
 LastModifiedTime,
 ModelPackageVersion,
 AdditionalInferenceSpecificationsToAdd,
 ModelPackageStatusDetails,
 SourceUri,
 ModelCard,
 SecurityConfig,
 region
)
SELECT
 '{{ tags }}',
 '{{ additional_inference_specifications }}',
 '{{ certify_for_marketplace }}',
 '{{ client_token }}',
 '{{ customer_metadata_properties }}',
 '{{ domain }}',
 '{{ drift_check_baselines }}',
 '{{ inference_specification }}',
 '{{ metadata_properties }}',
 '{{ model_approval_status }}',
 '{{ model_metrics }}',
 '{{ model_package_description }}',
 '{{ model_package_group_name }}',
 '{{ model_package_name }}',
 '{{ sample_payload_url }}',
 '{{ skip_model_validation }}',
 '{{ source_algorithm_specification }}',
 '{{ task }}',
 '{{ validation_specification }}',
 '{{ approval_description }}',
 '{{ last_modified_time }}',
 '{{ model_package_version }}',
 '{{ additional_inference_specifications_to_add }}',
 '{{ model_package_status_details }}',
 '{{ source_uri }}',
 '{{ model_card }}',
 '{{ security_config }}',
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
  - name: model_package
    props:
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
      - name: additional_inference_specifications
        value:
          - containers:
              - container_hostname: '{{ container_hostname }}'
                environment: {}
                model_input:
                  data_input_config: '{{ data_input_config }}'
                image: '{{ image }}'
                image_digest: '{{ image_digest }}'
                model_data_url: '{{ model_data_url }}'
                model_data_source:
                  s3_data_source:
                    s3_data_type: '{{ s3_data_type }}'
                    s3_uri: '{{ s3_uri }}'
                    compression_type: '{{ compression_type }}'
                    model_access_config:
                      accept_eula: '{{ accept_eula }}'
                framework: '{{ framework }}'
                framework_version: '{{ framework_version }}'
                nearest_model_name: '{{ nearest_model_name }}'
            description: '{{ description }}'
            name: '{{ name }}'
            supported_content_types:
              - '{{ supported_content_types[0] }}'
            supported_realtime_inference_instance_types:
              - '{{ supported_realtime_inference_instance_types[0] }}'
            supported_response_mi_me_types:
              - '{{ supported_response_mi_me_types[0] }}'
            supported_transform_instance_types:
              - '{{ supported_transform_instance_types[0] }}'
      - name: certify_for_marketplace
        value: '{{ certify_for_marketplace }}'
      - name: client_token
        value: '{{ client_token }}'
      - name: customer_metadata_properties
        value: {}
      - name: domain
        value: '{{ domain }}'
      - name: drift_check_baselines
        value:
          bias:
            post_training_constraints:
              content_digest: '{{ content_digest }}'
              content_type: '{{ content_type }}'
              s3_uri: '{{ s3_uri }}'
            pre_training_constraints: null
            config_file:
              content_digest: '{{ content_digest }}'
              content_type: '{{ content_type }}'
              s3_uri: '{{ s3_uri }}'
          explainability:
            constraints: null
            config_file: null
          model_data_quality:
            constraints: null
            statistics: null
          model_quality:
            constraints: null
            statistics: null
      - name: inference_specification
        value:
          containers:
            - null
          supported_content_types:
            - null
          supported_realtime_inference_instance_types:
            - null
          supported_response_mi_me_types:
            - null
          supported_transform_instance_types:
            - null
      - name: metadata_properties
        value:
          commit_id: '{{ commit_id }}'
          generated_by: '{{ generated_by }}'
          project_id: '{{ project_id }}'
          repository: '{{ repository }}'
      - name: model_approval_status
        value: '{{ model_approval_status }}'
      - name: model_metrics
        value:
          bias:
            report: null
            pre_training_report: null
            post_training_report: null
          explainability:
            report: null
          model_data_quality:
            constraints: null
            statistics: null
          model_quality:
            constraints: null
            statistics: null
      - name: model_package_description
        value: '{{ model_package_description }}'
      - name: model_package_group_name
        value: '{{ model_package_group_name }}'
      - name: model_package_name
        value: '{{ model_package_name }}'
      - name: sample_payload_url
        value: '{{ sample_payload_url }}'
      - name: skip_model_validation
        value: '{{ skip_model_validation }}'
      - name: source_algorithm_specification
        value:
          source_algorithms:
            - algorithm_name: '{{ algorithm_name }}'
              model_data_url: '{{ model_data_url }}'
      - name: task
        value: '{{ task }}'
      - name: validation_specification
        value:
          validation_profiles:
            - transform_job_definition:
                environment: null
                batch_strategy: '{{ batch_strategy }}'
                max_concurrent_transforms: '{{ max_concurrent_transforms }}'
                max_payload_in_mb: '{{ max_payload_in_mb }}'
                transform_input:
                  compression_type: '{{ compression_type }}'
                  content_type: '{{ content_type }}'
                  data_source:
                    s3_data_source:
                      s3_data_type: '{{ s3_data_type }}'
                      s3_uri: '{{ s3_uri }}'
                  split_type: '{{ split_type }}'
                transform_output:
                  accept: '{{ accept }}'
                  kms_key_id: '{{ kms_key_id }}'
                  s3_output_path: '{{ s3_output_path }}'
                  assemble_with: '{{ assemble_with }}'
                transform_resources:
                  instance_count: '{{ instance_count }}'
                  instance_type: '{{ instance_type }}'
                  volume_kms_key_id: '{{ volume_kms_key_id }}'
              profile_name: '{{ profile_name }}'
          validation_role: '{{ validation_role }}'
      - name: approval_description
        value: '{{ approval_description }}'
      - name: last_modified_time
        value: '{{ last_modified_time }}'
      - name: model_package_version
        value: '{{ model_package_version }}'
      - name: additional_inference_specifications_to_add
        value: null
      - name: model_package_status_details
        value:
          validation_statuses:
            - failure_reason: '{{ failure_reason }}'
              name: '{{ name }}'
              status: '{{ status }}'
      - name: source_uri
        value: '{{ source_uri }}'
      - name: model_card
        value:
          model_card_content: '{{ model_card_content }}'
          model_card_status: '{{ model_card_status }}'
      - name: security_config
        value:
          kms_key_id: '{{ kms_key_id }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>model_package</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.sagemaker.model_packages
SET PatchDocument = string('{{ {
    "Tags": tags,
    "AdditionalInferenceSpecifications": additional_inference_specifications,
    "CertifyForMarketplace": certify_for_marketplace,
    "CustomerMetadataProperties": customer_metadata_properties,
    "ModelApprovalStatus": model_approval_status,
    "ModelPackageName": model_package_name,
    "SkipModelValidation": skip_model_validation,
    "ApprovalDescription": approval_description,
    "LastModifiedTime": last_modified_time,
    "ModelPackageVersion": model_package_version,
    "AdditionalInferenceSpecificationsToAdd": additional_inference_specifications_to_add,
    "ModelPackageStatusDetails": model_package_status_details,
    "SourceUri": source_uri,
    "ModelCard": model_card
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ model_package_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.sagemaker.model_packages
WHERE Identifier = '{{ model_package_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>model_packages</code> resource, the following permissions are required:

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
ecr:BatchGetImage,
ecr:DescribeImages,
ecr:StartImageScan,
ecr:DescribeImageScanFindings,
sagemaker:AddTags,
sagemaker:CreateModel,
sagemaker:CreateModelPackage,
sagemaker:CreateTrainingJob,
sagemaker:CreateTransformJob,
sagemaker:DescribeTransformJob,
sagemaker:DescribeModelPackage,
sagemaker:ListTags,
sagemaker:UpdateModelPackage,
iam:PassRole,
s3:GetObject,
s3:ListBucket,
kms:CreateGrant,
kms:DescribeKey,
kms:GenerateDataKey,
kms:Decrypt
```

</TabItem>
<TabItem value="read">

```json
sagemaker:DescribeModelPackage,
sagemaker:ListTags,
kms:DescribeKey,
kms:Decrypt
```

</TabItem>
<TabItem value="update">

```json
ecr:BatchGetImage,
sagemaker:UpdateModelPackage,
sagemaker:DescribeModelPackage,
sagemaker:ListTags,
sagemaker:AddTags,
sagemaker:DeleteTags,
s3:GetObject,
s3:ListBucket,
kms:CreateGrant,
kms:DescribeKey,
kms:GenerateDataKey,
kms:Decrypt
```

</TabItem>
<TabItem value="delete">

```json
sagemaker:DeleteModelPackage,
sagemaker:DescribeModelPackage,
kms:DescribeKey,
kms:Decrypt
```

</TabItem>
<TabItem value="list">

```json
sagemaker:ListModelPackages
```

</TabItem>
</Tabs>