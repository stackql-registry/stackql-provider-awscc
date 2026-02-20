---
title: data_quality_job_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - data_quality_job_definitions
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

Creates, updates, deletes or gets a <code>data_quality_job_definition</code> resource or lists <code>data_quality_job_definitions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>data_quality_job_definitions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SageMaker::DataQualityJobDefinition</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sagemaker.data_quality_job_definitions" /></td></tr>
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
    "name": "job_definition_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of job definition."
  },
  {
    "name": "job_definition_name",
    "type": "string",
    "description": "The name of the job definition."
  },
  {
    "name": "data_quality_baseline_config",
    "type": "object",
    "description": "Baseline configuration used to validate that the data conforms to the specified constraints and statistics.",
    "children": [
      {
        "name": "baselining_job_name",
        "type": "string",
        "description": "The name of a processing job"
      },
      {
        "name": "constraints_resource",
        "type": "object",
        "description": "The baseline constraints resource for a monitoring job.",
        "children": [
          {
            "name": "s3_uri",
            "type": "string",
            "description": "The Amazon S3 URI for baseline constraint file in Amazon S3 that the current monitoring job should validated against."
          }
        ]
      },
      {
        "name": "statistics_resource",
        "type": "object",
        "description": "The baseline statistics resource for a monitoring job.",
        "children": [
          {
            "name": "s3_uri",
            "type": "string",
            "description": "The Amazon S3 URI for the baseline statistics file in Amazon S3 that the current monitoring job should be validated against."
          }
        ]
      }
    ]
  },
  {
    "name": "data_quality_app_specification",
    "type": "object",
    "description": "Container image configuration object for the monitoring job.",
    "children": [
      {
        "name": "container_arguments",
        "type": "array",
        "description": "An array of arguments for the container used to run the monitoring job."
      },
      {
        "name": "container_entrypoint",
        "type": "array",
        "description": "Specifies the entrypoint for a container used to run the monitoring job."
      },
      {
        "name": "image_uri",
        "type": "string",
        "description": "The container image to be run by the monitoring job."
      },
      {
        "name": "post_analytics_processor_source_uri",
        "type": "string",
        "description": "An Amazon S3 URI to a script that is called after analysis has been performed. Applicable only for the built-in (first party) containers."
      },
      {
        "name": "environment",
        "type": "object",
        "description": "Sets the environment variables in the Docker container"
      }
    ]
  },
  {
    "name": "data_quality_job_input",
    "type": "object",
    "description": "The inputs for a monitoring job.",
    "children": [
      {
        "name": "endpoint_input",
        "type": "object",
        "description": "The endpoint for a monitoring job.",
        "children": [
          {
            "name": "endpoint_name",
            "type": "string",
            "description": "The name of the endpoint used to run the monitoring job."
          },
          {
            "name": "local_path",
            "type": "string",
            "description": "Path to the filesystem where the endpoint data is available to the container."
          },
          {
            "name": "s3_data_distribution_type",
            "type": "string",
            "description": "Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated"
          },
          {
            "name": "s3_input_mode",
            "type": "string",
            "description": "Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File."
          },
          {
            "name": "exclude_features_attribute",
            "type": "string",
            "description": "Indexes or names of the features to be excluded from analysis"
          }
        ]
      },
      {
        "name": "batch_transform_input",
        "type": "object",
        "description": "The batch transform input for a monitoring job.",
        "children": [
          {
            "name": "data_captured_destination_s3_uri",
            "type": "string",
            "description": "A URI that identifies the Amazon S3 storage location where Batch Transform Job captures data."
          },
          {
            "name": "dataset_format",
            "type": "object",
            "description": "The dataset format of the data to monitor",
            "children": [
              {
                "name": "csv",
                "type": "object",
                "description": "The CSV format"
              },
              {
                "name": "json",
                "type": "object",
                "description": "The Json format"
              },
              {
                "name": "parquet",
                "type": "boolean",
                "description": "A flag indicating if the dataset format is Parquet"
              }
            ]
          },
          {
            "name": "local_path",
            "type": "string",
            "description": "Path to the filesystem where the endpoint data is available to the container."
          },
          {
            "name": "s3_data_distribution_type",
            "type": "string",
            "description": "Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated"
          },
          {
            "name": "s3_input_mode",
            "type": "string",
            "description": "Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File."
          },
          {
            "name": "exclude_features_attribute",
            "type": "string",
            "description": "Indexes or names of the features to be excluded from analysis"
          }
        ]
      }
    ]
  },
  {
    "name": "data_quality_job_output_config",
    "type": "object",
    "description": "The output configuration for monitoring jobs.",
    "children": [
      {
        "name": "kms_key_id",
        "type": "string",
        "description": "The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption."
      },
      {
        "name": "monitoring_outputs",
        "type": "array",
        "description": "Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded.",
        "children": [
          {
            "name": "s3_output",
            "type": "object",
            "description": "Configuration for uploading output data to Amazon S3 from the processing container.",
            "children": [
              {
                "name": "local_path",
                "type": "string",
                "description": "The local path of a directory where you want Amazon SageMaker to upload its contents to Amazon S3. LocalPath is an absolute path to a directory containing output files. This directory will be created by the platform and exist when your container's entrypoint is invoked."
              },
              {
                "name": "s3_upload_mode",
                "type": "string",
                "description": "Whether to upload the results of the processing job continuously or after the job completes."
              },
              {
                "name": "s3_uri",
                "type": "string",
                "description": "A URI that identifies the Amazon S3 bucket where you want Amazon SageMaker to save the results of a processing job."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "job_resources",
    "type": "object",
    "description": "Identifies the resources to deploy for a monitoring job.",
    "children": [
      {
        "name": "cluster_config",
        "type": "object",
        "description": "Configuration for the cluster used to run a processing job.",
        "children": [
          {
            "name": "instance_count",
            "type": "integer",
            "description": "The number of ML compute instances to use in the processing job. For distributed processing jobs, specify a value greater than 1. The default value is 1."
          },
          {
            "name": "instance_type",
            "type": "string",
            "description": "The ML compute instance type for the processing job."
          },
          {
            "name": "volume_size_in_gb",
            "type": "integer",
            "description": "The size of the ML storage volume in gigabytes that you want to provision. You must specify sufficient ML storage for your scenario."
          },
          {
            "name": "volume_kms_key_id",
            "type": "string",
            "description": "The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the processing job."
          }
        ]
      }
    ]
  },
  {
    "name": "network_config",
    "type": "object",
    "description": "Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.",
    "children": [
      {
        "name": "enable_inter_container_traffic_encryption",
        "type": "boolean",
        "description": "Whether to encrypt all communications between distributed processing jobs. Choose True to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer."
      },
      {
        "name": "enable_network_isolation",
        "type": "boolean",
        "description": "Whether to allow inbound and outbound network calls to and from the containers used for the processing job."
      },
      {
        "name": "vpc_config",
        "type": "object",
        "description": "Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html",
        "children": [
          {
            "name": "security_group_ids",
            "type": "array",
            "description": "The VPC security group IDs, in the form 'sg-xxxxxxxx'. Specify the security groups for the VPC that is specified in the 'Subnets' field."
          },
          {
            "name": "subnets",
            "type": "array",
            "description": "The ID of the subnets in the VPC to which you want to connect your training job or model. For information about the availability of specific instance types, see https://docs.aws.amazon.com/sagemaker/latest/dg/regions-quotas.html"
          }
        ]
      }
    ]
  },
  {
    "name": "endpoint_name",
    "type": "string",
    "description": "The name of the endpoint used to run the monitoring job."
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf."
  },
  {
    "name": "stopping_condition",
    "type": "object",
    "description": "Configures conditions under which the processing job should be stopped, such as how long the processing job has been running. After the condition is met, the processing job is stopped.",
    "children": [
      {
        "name": "max_runtime_in_seconds",
        "type": "integer",
        "description": "Specifies the maximum runtime in seconds."
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
    "description": "The time at which the job definition was created."
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
    "name": "job_definition_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of job definition."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-dataqualityjobdefinition.html"><code>AWS::SageMaker::DataQualityJobDefinition</code></a>.

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
    <td><code>data_quality_job_definitions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DataQualityAppSpecification, DataQualityJobInput, DataQualityJobOutputConfig, JobResources, RoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>data_quality_job_definitions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>data_quality_job_definitions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>data_quality_job_definitions</code></td>
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

Gets all properties from an individual <code>data_quality_job_definition</code>.
```sql
SELECT
region,
job_definition_arn,
job_definition_name,
data_quality_baseline_config,
data_quality_app_specification,
data_quality_job_input,
data_quality_job_output_config,
job_resources,
network_config,
endpoint_name,
role_arn,
stopping_condition,
tags,
creation_time
FROM awscc.sagemaker.data_quality_job_definitions
WHERE region = 'us-east-1' AND Identifier = '<JobDefinitionArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>data_quality_job_definitions</code> in a region.
```sql
SELECT
region,
job_definition_arn
FROM awscc.sagemaker.data_quality_job_definitions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>data_quality_job_definition</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.sagemaker.data_quality_job_definitions (
 DataQualityAppSpecification,
 DataQualityJobInput,
 DataQualityJobOutputConfig,
 JobResources,
 RoleArn,
 region
)
SELECT 
'{{ DataQualityAppSpecification }}',
 '{{ DataQualityJobInput }}',
 '{{ DataQualityJobOutputConfig }}',
 '{{ JobResources }}',
 '{{ RoleArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.sagemaker.data_quality_job_definitions (
 JobDefinitionName,
 DataQualityBaselineConfig,
 DataQualityAppSpecification,
 DataQualityJobInput,
 DataQualityJobOutputConfig,
 JobResources,
 NetworkConfig,
 EndpointName,
 RoleArn,
 StoppingCondition,
 Tags,
 region
)
SELECT 
 '{{ JobDefinitionName }}',
 '{{ DataQualityBaselineConfig }}',
 '{{ DataQualityAppSpecification }}',
 '{{ DataQualityJobInput }}',
 '{{ DataQualityJobOutputConfig }}',
 '{{ JobResources }}',
 '{{ NetworkConfig }}',
 '{{ EndpointName }}',
 '{{ RoleArn }}',
 '{{ StoppingCondition }}',
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
  - name: data_quality_job_definition
    props:
      - name: JobDefinitionName
        value: '{{ JobDefinitionName }}'
      - name: DataQualityBaselineConfig
        value:
          BaseliningJobName: '{{ BaseliningJobName }}'
          ConstraintsResource:
            S3Uri: '{{ S3Uri }}'
          StatisticsResource:
            S3Uri: null
      - name: DataQualityAppSpecification
        value:
          ContainerArguments:
            - '{{ ContainerArguments[0] }}'
          ContainerEntrypoint:
            - '{{ ContainerEntrypoint[0] }}'
          ImageUri: '{{ ImageUri }}'
          PostAnalyticsProcessorSourceUri: null
          RecordPreprocessorSourceUri: null
          Environment: {}
      - name: DataQualityJobInput
        value:
          EndpointInput:
            EndpointName: '{{ EndpointName }}'
            LocalPath: '{{ LocalPath }}'
            S3DataDistributionType: '{{ S3DataDistributionType }}'
            S3InputMode: '{{ S3InputMode }}'
            ExcludeFeaturesAttribute: '{{ ExcludeFeaturesAttribute }}'
          BatchTransformInput:
            DataCapturedDestinationS3Uri: '{{ DataCapturedDestinationS3Uri }}'
            DatasetFormat:
              Csv:
                Header: '{{ Header }}'
              Json:
                Line: '{{ Line }}'
              Parquet: '{{ Parquet }}'
            LocalPath: '{{ LocalPath }}'
            S3DataDistributionType: '{{ S3DataDistributionType }}'
            S3InputMode: '{{ S3InputMode }}'
            ExcludeFeaturesAttribute: '{{ ExcludeFeaturesAttribute }}'
      - name: DataQualityJobOutputConfig
        value:
          KmsKeyId: '{{ KmsKeyId }}'
          MonitoringOutputs:
            - S3Output:
                LocalPath: '{{ LocalPath }}'
                S3UploadMode: '{{ S3UploadMode }}'
                S3Uri: '{{ S3Uri }}'
      - name: JobResources
        value:
          ClusterConfig:
            InstanceCount: '{{ InstanceCount }}'
            InstanceType: '{{ InstanceType }}'
            VolumeSizeInGB: '{{ VolumeSizeInGB }}'
            VolumeKmsKeyId: '{{ VolumeKmsKeyId }}'
      - name: NetworkConfig
        value:
          EnableInterContainerTrafficEncryption: '{{ EnableInterContainerTrafficEncryption }}'
          EnableNetworkIsolation: '{{ EnableNetworkIsolation }}'
          VpcConfig:
            SecurityGroupIds:
              - '{{ SecurityGroupIds[0] }}'
            Subnets:
              - '{{ Subnets[0] }}'
      - name: EndpointName
        value: null
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: StoppingCondition
        value:
          MaxRuntimeInSeconds: '{{ MaxRuntimeInSeconds }}'
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
DELETE FROM awscc.sagemaker.data_quality_job_definitions
WHERE Identifier = '<JobDefinitionArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>data_quality_job_definitions</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'Read', value: 'read', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
sagemaker:CreateDataQualityJobDefinition,
sagemaker:DescribeDataQualityJobDefinition,
sagemaker:AddTags,
sagemaker:ListTags,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
sagemaker:DeleteDataQualityJobDefinition
```

</TabItem>
<TabItem value="read">

```json
sagemaker:DescribeDataQualityJobDefinition,
sagemaker:ListTags
```

</TabItem>
<TabItem value="list">

```json
sagemaker:ListDataQualityJobDefinitions,
sagemaker:ListTags
```

</TabItem>
</Tabs>