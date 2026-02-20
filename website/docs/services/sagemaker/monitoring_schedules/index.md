---
title: monitoring_schedules
hide_title: false
hide_table_of_contents: false
keywords:
  - monitoring_schedules
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

Creates, updates, deletes or gets a <code>monitoring_schedule</code> resource or lists <code>monitoring_schedules</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>monitoring_schedules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SageMaker::MonitoringSchedule</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sagemaker.monitoring_schedules" /></td></tr>
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
    "name": "monitoring_schedule_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the monitoring schedule."
  },
  {
    "name": "monitoring_schedule_name",
    "type": "string",
    "description": "The name of the monitoring schedule."
  },
  {
    "name": "monitoring_schedule_config",
    "type": "object",
    "description": "The configuration object that specifies the monitoring schedule and defines the monitoring job.",
    "children": [
      {
        "name": "monitoring_job_definition",
        "type": "object",
        "description": "Defines the monitoring job.",
        "children": [
          {
            "name": "baseline_config",
            "type": "object",
            "description": "Baseline configuration used to validate that the data conforms to the specified constraints and statistics.",
            "children": [
              {
                "name": "constraints_resource",
                "type": "object",
                "description": "The baseline constraints resource for a monitoring job."
              },
              {
                "name": "statistics_resource",
                "type": "object",
                "description": "The baseline statistics resource for a monitoring job."
              }
            ]
          },
          {
            "name": "environment",
            "type": "object",
            "description": "Sets the environment variables in the Docker container"
          },
          {
            "name": "monitoring_app_specification",
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
              }
            ]
          },
          {
            "name": "monitoring_inputs",
            "type": "array",
            "description": "The array of inputs for the monitoring job.",
            "children": [
              {
                "name": "endpoint_input",
                "type": "object",
                "description": "The endpoint for a monitoring job."
              },
              {
                "name": "batch_transform_input",
                "type": "object",
                "description": "The batch transform input for a monitoring job."
              }
            ]
          },
          {
            "name": "monitoring_output_config",
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
                "description": "Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded."
              }
            ]
          },
          {
            "name": "monitoring_resources",
            "type": "object",
            "description": "Identifies the resources to deploy for a monitoring job.",
            "children": [
              {
                "name": "cluster_config",
                "type": "object",
                "description": "Configuration for the cluster used to run a processing job."
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
                "description": "Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html"
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
          }
        ]
      },
      {
        "name": "monitoring_job_definition_name",
        "type": "string",
        "description": "Name of the job definition"
      },
      {
        "name": "monitoring_type",
        "type": "string",
        "description": "The type of monitoring job."
      },
      {
        "name": "schedule_config",
        "type": "object",
        "description": "Configuration details about the monitoring schedule.",
        "children": [
          {
            "name": "schedule_expression",
            "type": "string",
            "description": "A cron expression or 'NOW' that describes details about the monitoring schedule."
          },
          {
            "name": "data_analysis_start_time",
            "type": "string",
            "description": "Data Analysis start time, e.g. -PT1H"
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
    "description": "The time at which the schedule was created."
  },
  {
    "name": "endpoint_name",
    "type": "string",
    "description": "The name of the endpoint used to run the monitoring job."
  },
  {
    "name": "failure_reason",
    "type": "string",
    "description": "Contains the reason a monitoring job failed, if it failed."
  },
  {
    "name": "last_modified_time",
    "type": "string",
    "description": "A timestamp that indicates the last time the monitoring job was modified."
  },
  {
    "name": "last_monitoring_execution_summary",
    "type": "object",
    "description": "Describes metadata on the last execution to run, if there was one.",
    "children": [
      {
        "name": "creation_time",
        "type": "string",
        "description": "The time at which the monitoring job was created."
      },
      {
        "name": "failure_reason",
        "type": "string",
        "description": "Contains the reason a monitoring job failed, if it failed."
      },
      {
        "name": "last_modified_time",
        "type": "string",
        "description": "A timestamp that indicates the last time the monitoring job was modified."
      },
      {
        "name": "monitoring_execution_status",
        "type": "string",
        "description": "The status of the monitoring job."
      },
      {
        "name": "processing_job_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the monitoring job."
      },
      {
        "name": "scheduled_time",
        "type": "string",
        "description": "The time the monitoring job was scheduled."
      }
    ]
  },
  {
    "name": "monitoring_schedule_status",
    "type": "string",
    "description": "The status of a schedule job."
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
    "name": "monitoring_schedule_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the monitoring schedule."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-monitoringschedule.html"><code>AWS::SageMaker::MonitoringSchedule</code></a>.

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
    <td><code>monitoring_schedules</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="MonitoringScheduleConfig, MonitoringScheduleName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>monitoring_schedules</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>monitoring_schedules</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>monitoring_schedules_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>monitoring_schedules</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>monitoring_schedule</code>.
```sql
SELECT
region,
monitoring_schedule_arn,
monitoring_schedule_name,
monitoring_schedule_config,
tags,
creation_time,
endpoint_name,
failure_reason,
last_modified_time,
last_monitoring_execution_summary,
monitoring_schedule_status
FROM awscc.sagemaker.monitoring_schedules
WHERE region = 'us-east-1' AND data__Identifier = '<MonitoringScheduleArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>monitoring_schedules</code> in a region.
```sql
SELECT
region,
monitoring_schedule_arn
FROM awscc.sagemaker.monitoring_schedules_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>monitoring_schedule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.sagemaker.monitoring_schedules (
 MonitoringScheduleName,
 MonitoringScheduleConfig,
 region
)
SELECT 
'{{ MonitoringScheduleName }}',
 '{{ MonitoringScheduleConfig }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.sagemaker.monitoring_schedules (
 MonitoringScheduleName,
 MonitoringScheduleConfig,
 Tags,
 EndpointName,
 FailureReason,
 LastMonitoringExecutionSummary,
 MonitoringScheduleStatus,
 region
)
SELECT 
 '{{ MonitoringScheduleName }}',
 '{{ MonitoringScheduleConfig }}',
 '{{ Tags }}',
 '{{ EndpointName }}',
 '{{ FailureReason }}',
 '{{ LastMonitoringExecutionSummary }}',
 '{{ MonitoringScheduleStatus }}',
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
  - name: monitoring_schedule
    props:
      - name: MonitoringScheduleName
        value: '{{ MonitoringScheduleName }}'
      - name: MonitoringScheduleConfig
        value:
          MonitoringJobDefinition:
            BaselineConfig:
              ConstraintsResource:
                S3Uri: '{{ S3Uri }}'
              StatisticsResource:
                S3Uri: null
            Environment: {}
            MonitoringAppSpecification:
              ContainerArguments:
                - '{{ ContainerArguments[0] }}'
              ContainerEntrypoint:
                - '{{ ContainerEntrypoint[0] }}'
              ImageUri: '{{ ImageUri }}'
              PostAnalyticsProcessorSourceUri: null
              RecordPreprocessorSourceUri: null
            MonitoringInputs:
              - EndpointInput:
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
            MonitoringOutputConfig:
              KmsKeyId: '{{ KmsKeyId }}'
              MonitoringOutputs:
                - S3Output:
                    LocalPath: '{{ LocalPath }}'
                    S3UploadMode: '{{ S3UploadMode }}'
                    S3Uri: '{{ S3Uri }}'
            MonitoringResources:
              ClusterConfig:
                InstanceCount: '{{ InstanceCount }}'
                InstanceType: '{{ InstanceType }}'
                VolumeSizeInGB: '{{ VolumeSizeInGB }}'
                VolumeKmsKeyId: '{{ VolumeKmsKeyId }}'
            NetworkConfig:
              EnableInterContainerTrafficEncryption: '{{ EnableInterContainerTrafficEncryption }}'
              EnableNetworkIsolation: '{{ EnableNetworkIsolation }}'
              VpcConfig:
                SecurityGroupIds:
                  - '{{ SecurityGroupIds[0] }}'
                Subnets:
                  - '{{ Subnets[0] }}'
            RoleArn: '{{ RoleArn }}'
            StoppingCondition:
              MaxRuntimeInSeconds: '{{ MaxRuntimeInSeconds }}'
          MonitoringJobDefinitionName: '{{ MonitoringJobDefinitionName }}'
          MonitoringType: '{{ MonitoringType }}'
          ScheduleConfig:
            ScheduleExpression: '{{ ScheduleExpression }}'
            DataAnalysisStartTime: '{{ DataAnalysisStartTime }}'
            DataAnalysisEndTime: null
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'
      - name: EndpointName
        value: null
      - name: FailureReason
        value: '{{ FailureReason }}'
      - name: LastMonitoringExecutionSummary
        value:
          CreationTime: '{{ CreationTime }}'
          EndpointName: null
          FailureReason: '{{ FailureReason }}'
          LastModifiedTime: '{{ LastModifiedTime }}'
          MonitoringExecutionStatus: '{{ MonitoringExecutionStatus }}'
          MonitoringScheduleName: null
          ProcessingJobArn: '{{ ProcessingJobArn }}'
          ScheduledTime: '{{ ScheduledTime }}'
      - name: MonitoringScheduleStatus
        value: '{{ MonitoringScheduleStatus }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.sagemaker.monitoring_schedules
SET data__PatchDocument = string('{{ {
    "MonitoringScheduleConfig": monitoring_schedule_config,
    "Tags": tags,
    "EndpointName": endpoint_name,
    "FailureReason": failure_reason,
    "LastMonitoringExecutionSummary": last_monitoring_execution_summary,
    "MonitoringScheduleStatus": monitoring_schedule_status
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<MonitoringScheduleArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.sagemaker.monitoring_schedules
WHERE data__Identifier = '<MonitoringScheduleArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>monitoring_schedules</code> resource, the following permissions are required:

### Create
```json
sagemaker:CreateMonitoringSchedule,
sagemaker:DescribeMonitoringSchedule,
iam:PassRole
```

### Delete
```json
sagemaker:DeleteMonitoringSchedule,
sagemaker:DescribeMonitoringSchedule
```

### List
```json
sagemaker:ListMonitoringSchedule
```

### Read
```json
sagemaker:DescribeMonitoringSchedule
```

### Update
```json
sagemaker:UpdateMonitoringSchedule,
sagemaker:DescribeMonitoringSchedule
```
