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
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="app_specification" /></td><td><code>object</code></td><td>Configures the processing job to run a specified Docker container image.</td></tr>
<tr><td><CopyableCode code="environment" /></td><td><code>object</code></td><td>Sets the environment variables in the Docker container</td></tr>
<tr><td><CopyableCode code="experiment_config" /></td><td><code>object</code></td><td>Associates a SageMaker job as a trial component with an experiment and trial.</td></tr>
<tr><td><CopyableCode code="network_config" /></td><td><code>object</code></td><td>Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.</td></tr>
<tr><td><CopyableCode code="processing_inputs" /></td><td><code>array</code></td><td>An array of inputs configuring the data to download into the processing container.</td></tr>
<tr><td><CopyableCode code="processing_job_name" /></td><td><code>string</code></td><td>The name of the processing job. The name must be unique within an AWS Region in the AWS account.</td></tr>
<tr><td><CopyableCode code="processing_output_config" /></td><td><code>object</code></td><td>Configuration for uploading output from the processing container.</td></tr>
<tr><td><CopyableCode code="processing_resources" /></td><td><code>object</code></td><td>Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. In distributed training, you specify more than one instance.</td></tr>
<tr><td><CopyableCode code="role_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.</td></tr>
<tr><td><CopyableCode code="stopping_condition" /></td><td><code>object</code></td><td>Configures conditions under which the processing job should be stopped, such as how long the processing job has been running. After the condition is met, the processing job is stopped.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>(Optional) An array of key-value pairs. For more information, see Using Cost Allocation Tags(https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL) in the AWS Billing and Cost Management User Guide.</td></tr>
<tr><td><CopyableCode code="processing_job_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the processing job.</td></tr>
<tr><td><CopyableCode code="auto_ml_job_arn" /></td><td><code>string</code></td><td>The ARN of an AutoML job associated with this processing job.</td></tr>
<tr><td><CopyableCode code="exit_message" /></td><td><code>string</code></td><td>An optional string, up to one KB in size, that contains metadata from the processing container when the processing job exits.</td></tr>
<tr><td><CopyableCode code="failure_reason" /></td><td><code>string</code></td><td>A string, up to one KB in size, that contains the reason a processing job failed, if it failed.</td></tr>
<tr><td><CopyableCode code="monitoring_schedule_arn" /></td><td><code>string</code></td><td>The ARN of a monitoring schedule for an endpoint associated with this processing job.</td></tr>
<tr><td><CopyableCode code="training_job_arn" /></td><td><code>string</code></td><td>The ARN of a training job associated with this processing job</td></tr>
<tr><td><CopyableCode code="processing_job_status" /></td><td><code>string</code></td><td>Provides the status of a processing job.</td></tr>
<tr><td><CopyableCode code="creation_time" /></td><td><code>string</code></td><td>The time at which the processing job was created.</td></tr>
<tr><td><CopyableCode code="last_modified_time" /></td><td><code>string</code></td><td>The time at which the processing job was last modified.</td></tr>
<tr><td><CopyableCode code="processing_start_time" /></td><td><code>string</code></td><td>The time at which the processing job started.</td></tr>
<tr><td><CopyableCode code="processing_end_time" /></td><td><code>string</code></td><td>The time at which the processing job completed.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-processingjob.html"><code>AWS::SageMaker::ProcessingJob</code></a>.

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
    <td><CopyableCode code="AppSpecification, ProcessingResources, RoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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
Gets all <code>processing_jobs</code> in a region.
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
WHERE region = 'us-east-1';
```
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
WHERE region = 'us-east-1' AND data__Identifier = '<ProcessingJobArn>';
```

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
WHERE data__Identifier = '<ProcessingJobArn>'
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
