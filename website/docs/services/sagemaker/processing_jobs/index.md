---
title: processing_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - processing_jobs
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

Creates, updates, deletes or gets a <code>processing_job</code> resource or lists <code>processing_jobs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>processing_jobs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SageMaker::ProcessingJob</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sagemaker.processing_jobs" /></td></tr>
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
    "name": "app_specification",
    "type": "object",
    "description": "Configures the processing job to run a specified Docker container image.",
    "children": [
      {
        "name": "container_arguments",
        "type": "array",
        "description": "The arguments for a container used to run a processing job."
      },
      {
        "name": "container_entrypoint",
        "type": "array",
        "description": "The entrypoint for a container used to run a processing job."
      },
      {
        "name": "image_uri",
        "type": "string",
        "description": "The container image to be run by the processing job."
      }
    ]
  },
  {
    "name": "environment",
    "type": "object",
    "description": "Sets the environment variables in the Docker container"
  },
  {
    "name": "experiment_config",
    "type": "object",
    "description": "Associates a SageMaker job as a trial component with an experiment and trial.",
    "children": [
      {
        "name": "experiment_name",
        "type": "string",
        "description": "The name of an existing experiment to associate with the trial component."
      },
      {
        "name": "trial_name",
        "type": "string",
        "description": "The name of an existing trial to associate the trial component with. If not specified, a new trial is created."
      },
      {
        "name": "trial_component_display_name",
        "type": "string",
        "description": "The display name for the trial component. If this key isn't specified, the display name is the trial component name."
      },
      {
        "name": "run_name",
        "type": "string",
        "description": "The name of the experiment run to associate with the trial component."
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
    "name": "processing_inputs",
    "type": "array",
    "description": "An array of inputs configuring the data to download into the processing container.",
    "children": [
      {
        "name": "s3_input",
        "type": "object",
        "description": "Configuration for downloading input data from Amazon S3 into the processing container.",
        "children": [
          {
            "name": "local_path",
            "type": "string",
            "description": "The local path in your container where you want Amazon SageMaker to write input data to. &#96;LocalPath&#96; is an absolute path to the input data and must begin with &#96;/opt/ml/processing/&#96;. LocalPath is a required parameter when &#96;AppManaged&#96; is &#96;False&#96; (default)."
          },
          {
            "name": "s3_compression_type",
            "type": "string",
            "description": "Whether to GZIP-decompress the data in Amazon S3 as it is streamed into the processing container. &#96;Gzip&#96; can only be used when &#96;Pipe&#96; mode is specified as the &#96;S3InputMode&#96;. In &#96;Pipe&#96; mode, Amazon SageMaker streams input data from the source directly to your container without using the EBS volume."
          },
          {
            "name": "s3_data_distribution_type",
            "type": "string",
            "description": "Whether to distribute the data from Amazon S3 to all processing instances with &#96;FullyReplicated&#96;, or whether the data from Amazon S3 is shared by Amazon S3 key, downloading one shard of data to each processing instance."
          },
          {
            "name": "s3_data_type",
            "type": "string",
            "description": "Whether you use an S3Prefix or a ManifestFile for the data type. If you choose S3Prefix, S3Uri identifies a key name prefix. Amazon SageMaker uses all objects with the specified key name prefix for the processing job. If you choose ManifestFile, S3Uri identifies an object that is a manifest file containing a list of object keys that you want Amazon SageMaker to use for the processing job."
          },
          {
            "name": "s3_input_mode",
            "type": "string",
            "description": "Whether to use File or Pipe input mode. In File mode, Amazon SageMaker copies the data from the input source onto the local ML storage volume before starting your processing container. This is the most commonly used input mode. In Pipe mode, Amazon SageMaker streams input data from the source directly to your processing container into named pipes without using the ML storage volume."
          },
          {
            "name": "s3_uri",
            "type": "string",
            "description": "The URI of the Amazon S3 prefix Amazon SageMaker downloads data required to run a processing job."
          }
        ]
      },
      {
        "name": "dataset_definition",
        "type": "object",
        "description": "Configuration for Dataset Definition inputs. The Dataset Definition input must specify exactly one of either &#96;AthenaDatasetDefinition&#96; or &#96;RedshiftDatasetDefinition&#96; types.",
        "children": [
          {
            "name": "athena_dataset_definition",
            "type": "object",
            "description": "Configuration for Athena Dataset Definition input.",
            "children": [
              {
                "name": "catalog",
                "type": "string",
                "description": "The name of the data catalog used in Athena query execution."
              },
              {
                "name": "database",
                "type": "string",
                "description": "The name of the database used in the Athena query execution."
              },
              {
                "name": "output_s3_uri",
                "type": "string",
                "description": "The location in Amazon S3 where Athena query results are stored."
              },
              {
                "name": "query_string",
                "type": "string",
                "description": "The SQL query statements, to be executed."
              },
              {
                "name": "work_group",
                "type": "string",
                "description": "The name of the workgroup in which the Athena query is being started."
              },
              {
                "name": "output_format",
                "type": "string",
                "description": "The data storage format for Athena query results."
              },
              {
                "name": "kms_key_id",
                "type": "string",
                "description": "The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data generated from an Athena query execution."
              },
              {
                "name": "output_compression",
                "type": "string",
                "description": "The compression used for Athena query results."
              }
            ]
          },
          {
            "name": "redshift_dataset_definition",
            "type": "object",
            "description": "Configuration for Redshift Dataset Definition input.",
            "children": [
              {
                "name": "database",
                "type": "string",
                "description": "The name of the Redshift database used in Redshift query execution."
              },
              {
                "name": "db_user",
                "type": "string",
                "description": "The database user name used in Redshift query execution."
              },
              {
                "name": "query_string",
                "type": "string",
                "description": "The SQL query statements to be executed."
              },
              {
                "name": "cluster_id",
                "type": "string",
                "description": "The Redshift cluster Identifier."
              },
              {
                "name": "cluster_role_arn",
                "type": "string",
                "description": "The IAM role attached to your Redshift cluster that Amazon SageMaker uses to generate datasets."
              },
              {
                "name": "output_s3_uri",
                "type": "string",
                "description": "The location in Amazon S3 where the Redshift query results are stored."
              },
              {
                "name": "output_format",
                "type": "string",
                "description": "The data storage format for Redshift query results."
              },
              {
                "name": "kms_key_id",
                "type": "string",
                "description": "The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data from a Redshift execution."
              },
              {
                "name": "output_compression",
                "type": "string",
                "description": "The compression used for Redshift query results."
              }
            ]
          },
          {
            "name": "data_distribution_type",
            "type": "string",
            "description": "Whether the generated dataset is FullyReplicated or ShardedByS3Key (default)."
          },
          {
            "name": "input_mode",
            "type": "string",
            "description": "Whether to use File or Pipe input mode. In File (default) mode, Amazon SageMaker copies the data from the input source onto the local Amazon Elastic Block Store (Amazon EBS) volumes before starting your training algorithm. This is the most commonly used input mode. In Pipe mode, Amazon SageMaker streams input data from the source directly to your algorithm without using the EBS volume."
          },
          {
            "name": "local_path",
            "type": "string",
            "description": "The local path where you want Amazon SageMaker to download the Dataset Definition inputs to run a processing job. LocalPath is an absolute path to the input data. This is a required parameter when AppManaged is False (default)."
          }
        ]
      },
      {
        "name": "input_name",
        "type": "string",
        "description": "The name for the processing job input."
      },
      {
        "name": "app_managed",
        "type": "boolean",
        "description": "When True, input operations such as data download are managed natively by the processing job application. When False (default), input operations are managed by Amazon SageMaker."
      }
    ]
  },
  {
    "name": "processing_job_name",
    "type": "string",
    "description": "The name of the processing job. The name must be unique within an AWS Region in the AWS account."
  },
  {
    "name": "processing_output_config",
    "type": "object",
    "description": "Configuration for uploading output from the processing container.",
    "children": [
      {
        "name": "kms_key_id",
        "type": "string",
        "description": "The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the processing job output. KmsKeyId can be an ID of a KMS key, ARN of a KMS key, or alias of a KMS key. The KmsKeyId is applied to all outputs."
      },
      {
        "name": "outputs",
        "type": "array",
        "description": "An array of outputs configuring the data to upload from the processing container.",
        "children": [
          {
            "name": "output_name",
            "type": "string",
            "description": "The name for the processing job output."
          },
          {
            "name": "app_managed",
            "type": "boolean",
            "description": "When True, output operations such as data upload are managed natively by the processing job application. When False (default), output operations are managed by Amazon SageMaker."
          },
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
          },
          {
            "name": "feature_store_output",
            "type": "object",
            "description": "Configuration for processing job outputs in Amazon SageMaker Feature Store.",
            "children": [
              {
                "name": "feature_group_name",
                "type": "string",
                "description": "The name of the Amazon SageMaker FeatureGroup to use as the destination for processing job output. Note that your processing script is responsible for putting records into your Feature Store."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "processing_resources",
    "type": "object",
    "description": "Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. In distributed training, you specify more than one instance.",
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
    "description": "(Optional) An array of key-value pairs. For more information, see Using Cost Allocation Tags(https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL) in the AWS Billing and Cost Management User Guide.",
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
    "name": "processing_job_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the processing job."
  },
  {
    "name": "auto_ml_job_arn",
    "type": "string",
    "description": "The ARN of an AutoML job associated with this processing job."
  },
  {
    "name": "exit_message",
    "type": "string",
    "description": "An optional string, up to one KB in size, that contains metadata from the processing container when the processing job exits."
  },
  {
    "name": "failure_reason",
    "type": "string",
    "description": "A string, up to one KB in size, that contains the reason a processing job failed, if it failed."
  },
  {
    "name": "monitoring_schedule_arn",
    "type": "string",
    "description": "The ARN of a monitoring schedule for an endpoint associated with this processing job."
  },
  {
    "name": "training_job_arn",
    "type": "string",
    "description": "The ARN of a training job associated with this processing job"
  },
  {
    "name": "processing_job_status",
    "type": "string",
    "description": "Provides the status of a processing job."
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": "The time at which the processing job was created."
  },
  {
    "name": "last_modified_time",
    "type": "string",
    "description": "The time at which the processing job was last modified."
  },
  {
    "name": "processing_start_time",
    "type": "string",
    "description": "The time at which the processing job started."
  },
  {
    "name": "processing_end_time",
    "type": "string",
    "description": "The time at which the processing job completed."
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
    "name": "processing_job_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the processing job."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-processingjob.html"><code>AWS::SageMaker::ProcessingJob</code></a>.

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
    <td><code>processing_jobs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AppSpecification, ProcessingResources, RoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>processing_jobs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>processing_jobs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>processing_jobs</code></td>
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

Gets all properties from an individual <code>processing_job</code>.
```sql
SELECT
region,
app_specification,
environment,
experiment_config,
network_config,
processing_inputs,
processing_job_name,
processing_output_config,
processing_resources,
role_arn,
stopping_condition,
tags,
processing_job_arn,
auto_ml_job_arn,
exit_message,
failure_reason,
monitoring_schedule_arn,
training_job_arn,
processing_job_status,
creation_time,
last_modified_time,
processing_start_time,
processing_end_time
FROM awscc.sagemaker.processing_jobs
WHERE region = 'us-east-1' AND Identifier = '<ProcessingJobArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>processing_jobs</code> in a region.
```sql
SELECT
region,
processing_job_arn
FROM awscc.sagemaker.processing_jobs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>processing_job</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.sagemaker.processing_jobs (
 AppSpecification,
 ProcessingResources,
 RoleArn,
 region
)
SELECT 
'{{ AppSpecification }}',
 '{{ ProcessingResources }}',
 '{{ RoleArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.sagemaker.processing_jobs (
 AppSpecification,
 Environment,
 ExperimentConfig,
 NetworkConfig,
 ProcessingInputs,
 ProcessingJobName,
 ProcessingOutputConfig,
 ProcessingResources,
 RoleArn,
 StoppingCondition,
 Tags,
 region
)
SELECT 
 '{{ AppSpecification }}',
 '{{ Environment }}',
 '{{ ExperimentConfig }}',
 '{{ NetworkConfig }}',
 '{{ ProcessingInputs }}',
 '{{ ProcessingJobName }}',
 '{{ ProcessingOutputConfig }}',
 '{{ ProcessingResources }}',
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
  - name: processing_job
    props:
      - name: AppSpecification
        value:
          ContainerArguments:
            - '{{ ContainerArguments[0] }}'
          ContainerEntrypoint:
            - '{{ ContainerEntrypoint[0] }}'
          ImageUri: '{{ ImageUri }}'
      - name: Environment
        value: {}
      - name: ExperimentConfig
        value:
          ExperimentName: '{{ ExperimentName }}'
          TrialName: '{{ TrialName }}'
          TrialComponentDisplayName: '{{ TrialComponentDisplayName }}'
          RunName: '{{ RunName }}'
      - name: NetworkConfig
        value:
          EnableInterContainerTrafficEncryption: '{{ EnableInterContainerTrafficEncryption }}'
          EnableNetworkIsolation: '{{ EnableNetworkIsolation }}'
          VpcConfig:
            SecurityGroupIds:
              - '{{ SecurityGroupIds[0] }}'
            Subnets:
              - '{{ Subnets[0] }}'
      - name: ProcessingInputs
        value:
          - S3Input:
              LocalPath: '{{ LocalPath }}'
              S3CompressionType: '{{ S3CompressionType }}'
              S3DataDistributionType: '{{ S3DataDistributionType }}'
              S3DataType: '{{ S3DataType }}'
              S3InputMode: '{{ S3InputMode }}'
              S3Uri: '{{ S3Uri }}'
            DatasetDefinition:
              AthenaDatasetDefinition:
                Catalog: '{{ Catalog }}'
                Database: '{{ Database }}'
                OutputS3Uri: '{{ OutputS3Uri }}'
                QueryString: '{{ QueryString }}'
                WorkGroup: '{{ WorkGroup }}'
                OutputFormat: '{{ OutputFormat }}'
                KmsKeyId: '{{ KmsKeyId }}'
                OutputCompression: '{{ OutputCompression }}'
              RedshiftDatasetDefinition:
                Database: '{{ Database }}'
                DbUser: '{{ DbUser }}'
                QueryString: '{{ QueryString }}'
                ClusterId: '{{ ClusterId }}'
                ClusterRoleArn: '{{ ClusterRoleArn }}'
                OutputS3Uri: '{{ OutputS3Uri }}'
                OutputFormat: '{{ OutputFormat }}'
                KmsKeyId: '{{ KmsKeyId }}'
                OutputCompression: '{{ OutputCompression }}'
              DataDistributionType: '{{ DataDistributionType }}'
              InputMode: '{{ InputMode }}'
              LocalPath: '{{ LocalPath }}'
            InputName: '{{ InputName }}'
            AppManaged: '{{ AppManaged }}'
      - name: ProcessingJobName
        value: '{{ ProcessingJobName }}'
      - name: ProcessingOutputConfig
        value:
          KmsKeyId: '{{ KmsKeyId }}'
          Outputs:
            - OutputName: '{{ OutputName }}'
              AppManaged: '{{ AppManaged }}'
              S3Output:
                LocalPath: '{{ LocalPath }}'
                S3UploadMode: '{{ S3UploadMode }}'
                S3Uri: '{{ S3Uri }}'
              FeatureStoreOutput:
                FeatureGroupName: '{{ FeatureGroupName }}'
      - name: ProcessingResources
        value:
          ClusterConfig:
            InstanceCount: '{{ InstanceCount }}'
            InstanceType: '{{ InstanceType }}'
            VolumeSizeInGB: '{{ VolumeSizeInGB }}'
            VolumeKmsKeyId: '{{ VolumeKmsKeyId }}'
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
DELETE FROM awscc.sagemaker.processing_jobs
WHERE Identifier = '<ProcessingJobArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>processing_jobs</code> resource, the following permissions are required:

### Create
```json
ec2:CreateNetworkInterface,
ec2:CreateNetworkInterfacePermission,
ec2:DeleteNetworkInterface,
ec2:DeleteNetworkInterfacePermission,
ec2:DescribeNetworkInterfaces,
ec2:DescribeVpcs,
ec2:DescribeDhcpOptions,
ec2:DescribeSubnets,
ec2:DescribeSecurityGroups,
kms:CreateGrant,
kms:Decrypt,
kms:DescribeKey,
sagemaker:CreateProcessingJob,
sagemaker:DescribeProcessingJob,
sagemaker:AddTags,
sagemaker:ListTags,
iam:PassRole
```

### Read
```json
sagemaker:DescribeProcessingJob,
sagemaker:ListTags
```

### Delete
```json
ec2:DeleteNetworkInterface,
ec2:DeleteNetworkInterfacePermission,
ec2:DescribeNetworkInterfaces,
ec2:DescribeVpcs,
ec2:DescribeSubnets,
ec2:DescribeSecurityGroups,
sagemaker:StopProcessingJob,
sagemaker:DescribeProcessingJob,
sagemaker:ListTags,
sagemaker:DeleteTags
```

### List
```json
sagemaker:ListProcessingJobs,
sagemaker:DescribeProcessingJob,
sagemaker:ListTags
```
