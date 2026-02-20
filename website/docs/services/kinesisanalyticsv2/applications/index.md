---
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
  - kinesisanalyticsv2
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

Creates, updates, deletes or gets an <code>application</code> resource or lists <code>applications</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>applications</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Creates an Amazon Kinesis Data Analytics application. For information about creating a Kinesis Data Analytics application, see &#91;Creating an Application&#93;(https://docs.aws.amazon.com/kinesisanalytics/latest/java/getting-started.html).</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.kinesisanalyticsv2.applications" /></td></tr>
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
    "name": "application_configuration",
    "type": "object",
    "description": "Use this parameter to configure the application.",
    "children": [
      {
        "name": "application_code_configuration",
        "type": "object",
        "description": "The code location and type parameters for a Flink-based Kinesis Data Analytics application.",
        "children": [
          {
            "name": "code_content",
            "type": "object",
            "description": "The location and type of the application code.",
            "children": [
              {
                "name": "zip_file_content",
                "type": "string",
                "description": "The zip-format code for a Flink-based Kinesis Data Analytics application."
              },
              {
                "name": "s3_content_location",
                "type": "object",
                "description": "Information about the Amazon S3 bucket that contains the application code."
              },
              {
                "name": "text_content",
                "type": "string",
                "description": "The text-format code for a Flink-based Kinesis Data Analytics application."
              }
            ]
          },
          {
            "name": "code_content_type",
            "type": "string",
            "description": "Specifies whether the code content is in text or zip format."
          }
        ]
      },
      {
        "name": "application_encryption_configuration",
        "type": "object",
        "description": "Describes whether customer managed key is enabled and key details for customer data encryption",
        "children": [
          {
            "name": "key_id",
            "type": "string",
            "description": "KMS KeyId. Can be either key uuid or full key arn or key alias arn or short key alias"
          },
          {
            "name": "key_type",
            "type": "string",
            "description": "Specifies whether application data is encrypted using service key: AWS&#95;OWNED&#95;KEY or customer key: CUSTOMER&#95;MANAGED&#95;KEY"
          }
        ]
      },
      {
        "name": "application_snapshot_configuration",
        "type": "object",
        "description": "Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.",
        "children": [
          {
            "name": "snapshots_enabled",
            "type": "boolean",
            "description": "Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application."
          }
        ]
      },
      {
        "name": "application_system_rollback_configuration",
        "type": "object",
        "description": "Describes whether system initiated rollbacks are enabled for a Flink-based Kinesis Data Analytics application.",
        "children": [
          {
            "name": "rollback_enabled",
            "type": "boolean",
            "description": "Describes whether system initiated rollbacks are enabled for a Flink-based Kinesis Data Analytics application."
          }
        ]
      },
      {
        "name": "environment_properties",
        "type": "object",
        "description": "Describes execution properties for a Flink-based Kinesis Data Analytics application.",
        "children": [
          {
            "name": "property_groups",
            "type": "array",
            "description": "Describes the execution property groups.",
            "children": [
              {
                "name": "property_group_id",
                "type": "string",
                "description": "Describes the key of an application execution property key-value pair."
              },
              {
                "name": "property_map",
                "type": "object",
                "description": "Describes the value of an application execution property key-value pair."
              }
            ]
          }
        ]
      },
      {
        "name": "flink_application_configuration",
        "type": "object",
        "description": "The creation and update parameters for a Flink-based Kinesis Data Analytics application.",
        "children": [
          {
            "name": "checkpoint_configuration",
            "type": "object",
            "description": "Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance. For more information, see Checkpoints for Fault Tolerance in the Apache Flink Documentation.",
            "children": [
              {
                "name": "configuration_type",
                "type": "string",
                "description": "Describes whether the application uses Kinesis Data Analytics' default checkpointing behavior. You must set this property to &#96;CUSTOM&#96; in order to set the &#96;CheckpointingEnabled&#96;, &#96;CheckpointInterval&#96;, or &#96;MinPauseBetweenCheckpoints&#96; parameters."
              },
              {
                "name": "checkpointing_enabled",
                "type": "boolean",
                "description": "Describes whether checkpointing is enabled for a Flink-based Kinesis Data Analytics application."
              },
              {
                "name": "checkpoint_interval",
                "type": "integer",
                "description": "Describes the interval in milliseconds between checkpoint operations."
              },
              {
                "name": "min_pause_between_checkpoints",
                "type": "integer",
                "description": "Describes the minimum time in milliseconds after a checkpoint operation completes that a new checkpoint operation can start. If a checkpoint operation takes longer than the CheckpointInterval, the application otherwise performs continual checkpoint operations. For more information, see Tuning Checkpointing in the Apache Flink Documentation."
              }
            ]
          },
          {
            "name": "monitoring_configuration",
            "type": "object",
            "description": "Describes configuration parameters for Amazon CloudWatch logging for an application.",
            "children": [
              {
                "name": "configuration_type",
                "type": "string",
                "description": "Describes whether to use the default CloudWatch logging configuration for an application. You must set this property to CUSTOM in order to set the LogLevel or MetricsLevel parameters."
              },
              {
                "name": "metrics_level",
                "type": "string",
                "description": "Describes the granularity of the CloudWatch Logs for an application. The Parallelism level is not recommended for applications with a Parallelism over 64 due to excessive costs."
              },
              {
                "name": "log_level",
                "type": "string",
                "description": "Describes the verbosity of the CloudWatch Logs for an application."
              }
            ]
          },
          {
            "name": "parallelism_configuration",
            "type": "object",
            "description": "Describes parameters for how an application executes multiple tasks simultaneously.",
            "children": [
              {
                "name": "configuration_type",
                "type": "string",
                "description": "Describes whether the application uses the default parallelism for the Kinesis Data Analytics service. You must set this property to &#96;CUSTOM&#96; in order to change your application's &#96;AutoScalingEnabled&#96;, &#96;Parallelism&#96;, or &#96;ParallelismPerKPU&#96; properties."
              },
              {
                "name": "parallelism_per_kp_u",
                "type": "integer",
                "description": "Describes the number of parallel tasks that a Java-based Kinesis Data Analytics application can perform per Kinesis Processing Unit (KPU) used by the application. For more information about KPUs, see Amazon Kinesis Data Analytics Pricing."
              },
              {
                "name": "parallelism",
                "type": "integer",
                "description": "Describes the initial number of parallel tasks that a Java-based Kinesis Data Analytics application can perform. The Kinesis Data Analytics service can increase this number automatically if ParallelismConfiguration:AutoScalingEnabled is set to true."
              },
              {
                "name": "auto_scaling_enabled",
                "type": "boolean",
                "description": "Describes whether the Kinesis Data Analytics service can increase the parallelism of the application in response to increased throughput."
              }
            ]
          }
        ]
      },
      {
        "name": "sql_application_configuration",
        "type": "object",
        "description": "The creation and update parameters for a SQL-based Kinesis Data Analytics application.",
        "children": [
          {
            "name": "inputs",
            "type": "array",
            "description": "The array of Input objects describing the input streams used by the application.",
            "children": [
              {
                "name": "name_prefix",
                "type": "string",
                "description": "The name prefix to use when creating an in-application stream. Suppose that you specify a prefix &#96;\"MyInApplicationStream\"&#96;. Kinesis Data Analytics then creates one or more (as per the InputParallelism count you specified) in-application streams with the names &#96;\"MyInApplicationStream&#95;001\"&#96;, &#96;\"MyInApplicationStream&#95;002\"&#96;, and so on."
              },
              {
                "name": "input_schema",
                "type": "object",
                "description": "Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created."
              },
              {
                "name": "kinesis_streams_input",
                "type": "object",
                "description": "If the streaming source is an Amazon Kinesis data stream, identifies the stream's Amazon Resource Name (ARN)."
              },
              {
                "name": "kinesis_firehose_input",
                "type": "object",
                "description": "If the streaming source is an Amazon Kinesis Data Firehose delivery stream, identifies the delivery stream's ARN."
              },
              {
                "name": "input_processing_configuration",
                "type": "object",
                "description": "The InputProcessingConfiguration for the input. An input processor transforms records as they are received from the stream, before the application's SQL code executes. Currently, the only input processing configuration available is InputLambdaProcessor."
              },
              {
                "name": "input_parallelism",
                "type": "object",
                "description": "Describes the number of in-application streams to create."
              }
            ]
          }
        ]
      },
      {
        "name": "zeppelin_application_configuration",
        "type": "object",
        "description": "The configuration parameters for a Kinesis Data Analytics Studio notebook.",
        "children": [
          {
            "name": "catalog_configuration",
            "type": "object",
            "description": "The Amazon Glue Data Catalog that you use in queries in a Kinesis Data Analytics Studio notebook.",
            "children": [
              {
                "name": "glue_data_catalog_configuration",
                "type": "object",
                "description": "The configuration parameters for the default Amazon Glue database. You use this database for Apache Flink SQL queries and table API transforms that you write in a Kinesis Data Analytics Studio notebook."
              }
            ]
          },
          {
            "name": "monitoring_configuration",
            "type": "object",
            "description": "The monitoring configuration of a Kinesis Data Analytics Studio notebook.",
            "children": [
              {
                "name": "log_level",
                "type": "string",
                "description": "The verbosity of the CloudWatch Logs for an application. You can set it to &#96;INFO&#96;, &#96;WARN&#96;, &#96;ERROR&#96;, or &#96;DEBUG&#96;."
              }
            ]
          },
          {
            "name": "deploy_as_application_configuration",
            "type": "object",
            "description": "The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state.",
            "children": [
              {
                "name": "s3_content_location",
                "type": "object",
                "description": "The description of an Amazon S3 object that contains the Amazon Data Analytics application, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data."
              }
            ]
          },
          {
            "name": "custom_artifacts_configuration",
            "type": "array",
            "description": "A list of CustomArtifactConfiguration objects.",
            "children": [
              {
                "name": "artifact_type",
                "type": "string",
                "description": "Set this to either &#96;UDF&#96; or &#96;DEPENDENCY&#95;JAR&#96;. &#96;UDF&#96; stands for user-defined functions. This type of artifact must be in an S3 bucket. A &#96;DEPENDENCY&#95;JAR&#96; can be in either Maven or an S3 bucket."
              },
              {
                "name": "maven_reference",
                "type": "object",
                "description": "The parameters required to fully specify a Maven reference."
              },
              {
                "name": "s3_content_location",
                "type": "object",
                "description": "The location of the custom artifacts."
              }
            ]
          }
        ]
      },
      {
        "name": "vpc_configurations",
        "type": "array",
        "description": "The array of descriptions of VPC configurations available to the application.",
        "children": [
          {
            "name": "security_group_ids",
            "type": "array",
            "description": "The array of SecurityGroup IDs used by the VPC configuration."
          },
          {
            "name": "subnet_ids",
            "type": "array",
            "description": "The array of Subnet IDs used by the VPC configuration."
          }
        ]
      }
    ]
  },
  {
    "name": "application_description",
    "type": "string",
    "description": "The description of the application."
  },
  {
    "name": "application_mode",
    "type": "string",
    "description": "To create a Kinesis Data Analytics Studio notebook, you must set the mode to &#96;INTERACTIVE&#96;. However, for a Kinesis Data Analytics for Apache Flink application, the mode is optional."
  },
  {
    "name": "application_name",
    "type": "string",
    "description": "The name of the application."
  },
  {
    "name": "runtime_environment",
    "type": "string",
    "description": "The runtime environment for the application."
  },
  {
    "name": "service_execution_role",
    "type": "string",
    "description": "Specifies the IAM role that the application uses to access external resources."
  },
  {
    "name": "run_configuration",
    "type": "object",
    "description": "Specifies run configuration (start parameters) of a Kinesis Data Analytics application. Evaluated on update for RUNNING applications an only.",
    "children": [
      {
        "name": "application_restore_configuration",
        "type": "object",
        "description": "Describes the restore behavior of a restarting application.",
        "children": [
          {
            "name": "application_restore_type",
            "type": "string",
            "description": "Specifies how the application should be restored."
          },
          {
            "name": "snapshot_name",
            "type": "string",
            "description": "The identifier of an existing snapshot of application state to use to restart an application. The application uses this value if RESTORE&#95;FROM&#95;CUSTOM&#95;SNAPSHOT is specified for the ApplicationRestoreType."
          }
        ]
      },
      {
        "name": "flink_run_configuration",
        "type": "object",
        "description": "Describes the starting parameters for a Flink-based Kinesis Data Analytics application.",
        "children": [
          {
            "name": "allow_non_restored_state",
            "type": "boolean",
            "description": "When restoring from a snapshot, specifies whether the runtime is allowed to skip a state that cannot be mapped to the new program. Defaults to false. If you update your application without specifying this parameter, AllowNonRestoredState will be set to false, even if it was previously set to true."
          }
        ]
      }
    ]
  },
  {
    "name": "application_maintenance_configuration",
    "type": "object",
    "description": "Used to configure start of maintenance window.",
    "children": [
      {
        "name": "application_maintenance_window_start_time",
        "type": "string",
        "description": "The start time for the maintenance window."
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of one or more tags to assign to the application. A tag is a key-value pair that identifies an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that's 0 to 256 characters in length."
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
    "name": "application_name",
    "type": "string",
    "description": "The name of the application."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html"><code>AWS::KinesisAnalyticsV2::Application</code></a>.

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
    <td><code>applications</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="RuntimeEnvironment, ServiceExecutionRole, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>applications</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>applications</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>applications_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>applications</code></td>
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

Gets all properties from an individual <code>application</code>.
```sql
SELECT
region,
application_configuration,
application_description,
application_mode,
application_name,
runtime_environment,
service_execution_role,
run_configuration,
application_maintenance_configuration,
tags
FROM awscc.kinesisanalyticsv2.applications
WHERE region = 'us-east-1' AND data__Identifier = '<ApplicationName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>applications</code> in a region.
```sql
SELECT
region,
application_name
FROM awscc.kinesisanalyticsv2.applications_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>application</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.kinesisanalyticsv2.applications (
 RuntimeEnvironment,
 ServiceExecutionRole,
 region
)
SELECT 
'{{ RuntimeEnvironment }}',
 '{{ ServiceExecutionRole }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.kinesisanalyticsv2.applications (
 ApplicationConfiguration,
 ApplicationDescription,
 ApplicationMode,
 ApplicationName,
 RuntimeEnvironment,
 ServiceExecutionRole,
 RunConfiguration,
 ApplicationMaintenanceConfiguration,
 Tags,
 region
)
SELECT 
 '{{ ApplicationConfiguration }}',
 '{{ ApplicationDescription }}',
 '{{ ApplicationMode }}',
 '{{ ApplicationName }}',
 '{{ RuntimeEnvironment }}',
 '{{ ServiceExecutionRole }}',
 '{{ RunConfiguration }}',
 '{{ ApplicationMaintenanceConfiguration }}',
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
  - name: application
    props:
      - name: ApplicationConfiguration
        value:
          ApplicationCodeConfiguration:
            CodeContent:
              ZipFileContent: '{{ ZipFileContent }}'
              S3ContentLocation:
                BucketARN: '{{ BucketARN }}'
                FileKey: '{{ FileKey }}'
                ObjectVersion: '{{ ObjectVersion }}'
              TextContent: '{{ TextContent }}'
            CodeContentType: '{{ CodeContentType }}'
          ApplicationEncryptionConfiguration:
            KeyId: '{{ KeyId }}'
            KeyType: '{{ KeyType }}'
          ApplicationSnapshotConfiguration:
            SnapshotsEnabled: '{{ SnapshotsEnabled }}'
          ApplicationSystemRollbackConfiguration:
            RollbackEnabled: '{{ RollbackEnabled }}'
          EnvironmentProperties:
            PropertyGroups:
              - PropertyGroupId: '{{ PropertyGroupId }}'
                PropertyMap: {}
          FlinkApplicationConfiguration:
            CheckpointConfiguration:
              ConfigurationType: '{{ ConfigurationType }}'
              CheckpointingEnabled: '{{ CheckpointingEnabled }}'
              CheckpointInterval: '{{ CheckpointInterval }}'
              MinPauseBetweenCheckpoints: '{{ MinPauseBetweenCheckpoints }}'
            MonitoringConfiguration:
              ConfigurationType: '{{ ConfigurationType }}'
              MetricsLevel: '{{ MetricsLevel }}'
              LogLevel: '{{ LogLevel }}'
            ParallelismConfiguration:
              ConfigurationType: '{{ ConfigurationType }}'
              ParallelismPerKPU: '{{ ParallelismPerKPU }}'
              Parallelism: '{{ Parallelism }}'
              AutoScalingEnabled: '{{ AutoScalingEnabled }}'
          SqlApplicationConfiguration:
            Inputs:
              - NamePrefix: '{{ NamePrefix }}'
                InputSchema:
                  RecordEncoding: '{{ RecordEncoding }}'
                  RecordColumns:
                    - Mapping: '{{ Mapping }}'
                      Name: '{{ Name }}'
                      SqlType: '{{ SqlType }}'
                  RecordFormat:
                    RecordFormatType: '{{ RecordFormatType }}'
                    MappingParameters:
                      CSVMappingParameters:
                        RecordColumnDelimiter: '{{ RecordColumnDelimiter }}'
                        RecordRowDelimiter: '{{ RecordRowDelimiter }}'
                      JSONMappingParameters:
                        RecordRowPath: '{{ RecordRowPath }}'
                KinesisStreamsInput:
                  ResourceARN: null
                KinesisFirehoseInput:
                  ResourceARN: null
                InputProcessingConfiguration:
                  InputLambdaProcessor:
                    ResourceARN: null
                InputParallelism:
                  Count: '{{ Count }}'
          ZeppelinApplicationConfiguration:
            CatalogConfiguration:
              GlueDataCatalogConfiguration:
                DatabaseARN: null
            MonitoringConfiguration:
              LogLevel: '{{ LogLevel }}'
            DeployAsApplicationConfiguration:
              S3ContentLocation:
                BucketARN: null
                BasePath: '{{ BasePath }}'
            CustomArtifactsConfiguration:
              - ArtifactType: '{{ ArtifactType }}'
                MavenReference:
                  ArtifactId: '{{ ArtifactId }}'
                  GroupId: '{{ GroupId }}'
                  Version: '{{ Version }}'
                S3ContentLocation: null
          VpcConfigurations:
            - SecurityGroupIds:
                - '{{ SecurityGroupIds[0] }}'
              SubnetIds:
                - '{{ SubnetIds[0] }}'
      - name: ApplicationDescription
        value: '{{ ApplicationDescription }}'
      - name: ApplicationMode
        value: '{{ ApplicationMode }}'
      - name: ApplicationName
        value: '{{ ApplicationName }}'
      - name: RuntimeEnvironment
        value: '{{ RuntimeEnvironment }}'
      - name: ServiceExecutionRole
        value: null
      - name: RunConfiguration
        value:
          ApplicationRestoreConfiguration:
            ApplicationRestoreType: '{{ ApplicationRestoreType }}'
            SnapshotName: '{{ SnapshotName }}'
          FlinkRunConfiguration:
            AllowNonRestoredState: '{{ AllowNonRestoredState }}'
      - name: ApplicationMaintenanceConfiguration
        value:
          ApplicationMaintenanceWindowStartTime: '{{ ApplicationMaintenanceWindowStartTime }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.kinesisanalyticsv2.applications
SET data__PatchDocument = string('{{ {
    "ApplicationConfiguration": application_configuration,
    "ApplicationDescription": application_description,
    "RuntimeEnvironment": runtime_environment,
    "ServiceExecutionRole": service_execution_role,
    "RunConfiguration": run_configuration,
    "ApplicationMaintenanceConfiguration": application_maintenance_configuration,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<ApplicationName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.kinesisanalyticsv2.applications
WHERE data__Identifier = '<ApplicationName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>applications</code> resource, the following permissions are required:

### Create
```json
iam:PassRole,
kinesisanalytics:CreateApplication,
kinesisanalytics:DescribeApplication,
kinesisanalytics:ListTagsForResource,
kinesisanalytics:UpdateApplicationMaintenanceConfiguration,
kms:Decrypt,
kms:DescribeKey,
kms:GenerateDataKey,
kms:GenerateDataKeyWithoutPlaintext
```

### Read
```json
kinesisanalytics:DescribeApplication,
kinesisanalytics:ListTagsForResource,
kms:DescribeKey
```

### Update
```json
kinesisanalytics:UpdateApplication,
kinesisanalytics:DescribeApplication,
kinesisanalytics:TagResource,
kinesisanalytics:UntagResource,
kinesisanalytics:AddApplicationVpcConfiguration,
kinesisanalytics:DeleteApplicationVpcConfiguration,
kinesisanalytics:UpdateApplicationMaintenanceConfiguration,
kinesisanalytics:ListTagsForResource,
kms:CreateGrant,
kms:Decrypt,
kms:DescribeKey,
kms:GenerateDataKey,
kms:GenerateDataKeyWithoutPlaintext
```

### Delete
```json
kinesisanalytics:DescribeApplication,
kinesisanalytics:DeleteApplication
```

### List
```json
kinesisanalytics:ListApplications
```
