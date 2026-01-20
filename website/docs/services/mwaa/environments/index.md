---
title: environments
hide_title: false
hide_table_of_contents: false
keywords:
  - environments
  - mwaa
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

Creates, updates, deletes or gets an <code>environment</code> resource or lists <code>environments</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>environments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::MWAA::Environment</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.mwaa.environments" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "name",
    "type": "string",
    "description": "Customer-defined identifier for the environment, unique per customer region."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "ARN for the MWAA environment."
  },
  {
    "name": "webserver_url",
    "type": "string",
    "description": "Url endpoint for the environment's Airflow UI."
  },
  {
    "name": "execution_role_arn",
    "type": "string",
    "description": "IAM role to be used by tasks."
  },
  {
    "name": "kms_key",
    "type": "string",
    "description": "The identifier of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for MWAA data encryption.<br />You can specify the CMK using any of the following:<br />Key ID. For example, key/1234abcd-12ab-34cd-56ef-1234567890ab.<br />Key alias. For example, alias/ExampleAlias.<br />Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef.<br />Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.<br />AWS authenticates the CMK asynchronously. Therefore, if you specify an ID, alias, or ARN that is not valid, the action can appear to complete, but eventually fails."
  },
  {
    "name": "airflow_version",
    "type": "string",
    "description": "Version of airflow to deploy to the environment."
  },
  {
    "name": "source_bucket_arn",
    "type": "string",
    "description": "ARN for the AWS S3 bucket to use as the source of DAGs and plugins for the environment."
  },
  {
    "name": "dag_s3_path",
    "type": "string",
    "description": "Represents an S3 prefix relative to the root of an S3 bucket."
  },
  {
    "name": "plugins_s3_object_version",
    "type": "string",
    "description": "Represents an version ID for an S3 object."
  },
  {
    "name": "airflow_configuration_options",
    "type": "object",
    "description": "Key/value pairs representing Airflow configuration variables.<br />Keys are prefixed by their section:<br />&#91;core&#93;<br />dags&#95;folder=&#123;AIRFLOW&#95;HOME&#125;/dags<br />Would be represented as<br />\"core.dags&#95;folder\": \"&#123;AIRFLOW&#95;HOME&#125;/dags\""
  },
  {
    "name": "environment_class",
    "type": "string",
    "description": "Templated configuration for airflow processes and backing infrastructure."
  },
  {
    "name": "max_workers",
    "type": "integer",
    "description": "Maximum worker compute units."
  },
  {
    "name": "min_workers",
    "type": "integer",
    "description": "Minimum worker compute units."
  },
  {
    "name": "max_webservers",
    "type": "integer",
    "description": "Maximum webserver compute units."
  },
  {
    "name": "min_webservers",
    "type": "integer",
    "description": "Minimum webserver compute units."
  },
  {
    "name": "schedulers",
    "type": "integer",
    "description": "Scheduler compute units."
  },
  {
    "name": "network_configuration",
    "type": "object",
    "description": "Configures the network resources of the environment.",
    "children": [
      {
        "name": "subnet_ids",
        "type": "array",
        "description": "A list of subnets to use for the environment. These must be private subnets, in the same VPC, in two different availability zones."
      },
      {
        "name": "security_group_ids",
        "type": "array",
        "description": "A list of security groups to use for the environment."
      }
    ]
  },
  {
    "name": "logging_configuration",
    "type": "object",
    "description": "Logging configuration for the environment.",
    "children": [
      {
        "name": "dag_processing_logs",
        "type": "object",
        "description": "Logging configuration for a specific airflow component.",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "log_level",
            "type": "string",
            "description": ""
          },
          {
            "name": "cloud_watch_log_group_arn",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "weekly_maintenance_window_start",
    "type": "string",
    "description": "Start time for the weekly maintenance window."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A map of tags for the environment."
  },
  {
    "name": "webserver_access_mode",
    "type": "string",
    "description": "Choice for mode of webserver access including over public internet or via private VPC endpoint."
  },
  {
    "name": "endpoint_management",
    "type": "string",
    "description": "Defines whether the VPC endpoints configured for the environment are created, and managed, by the customer or by Amazon MWAA."
  },
  {
    "name": "celery_executor_queue",
    "type": "string",
    "description": "The celery executor queue associated with the environment."
  },
  {
    "name": "database_vpc_endpoint_service",
    "type": "string",
    "description": "The database VPC endpoint service name."
  },
  {
    "name": "webserver_vpc_endpoint_service",
    "type": "string",
    "description": "The webserver VPC endpoint service name, applicable if private webserver access mode selected."
  },
  {
    "name": "worker_replacement_strategy",
    "type": "string",
    "description": "The worker replacement strategy to use when updating the environment. Valid values: &#96;FORCED&#96;, &#96;GRACEFUL&#96;. FORCED means Apache Airflow workers will be stopped and replaced without waiting for tasks to complete before an update. GRACEFUL means Apache Airflow workers will be able to complete running tasks for up to 12 hours during an update before being stopped and replaced."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html"><code>AWS::MWAA::Environment</code></a>.

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
    <td><CopyableCode code="Name, region" /></td>
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

Gets all properties from an individual <code>environment</code>.
```sql
SELECT
region,
name,
arn,
webserver_url,
execution_role_arn,
kms_key,
airflow_version,
source_bucket_arn,
dag_s3_path,
plugins_s3_path,
plugins_s3_object_version,
requirements_s3_path,
requirements_s3_object_version,
startup_script_s3_path,
startup_script_s3_object_version,
airflow_configuration_options,
environment_class,
max_workers,
min_workers,
max_webservers,
min_webservers,
schedulers,
network_configuration,
logging_configuration,
weekly_maintenance_window_start,
tags,
webserver_access_mode,
endpoint_management,
celery_executor_queue,
database_vpc_endpoint_service,
webserver_vpc_endpoint_service,
worker_replacement_strategy
FROM awscc.mwaa.environments
WHERE region = 'us-east-1' AND data__Identifier = '<Name>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>environment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.mwaa.environments (
 Name,
 region
)
SELECT 
'{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.mwaa.environments (
 Name,
 ExecutionRoleArn,
 KmsKey,
 AirflowVersion,
 SourceBucketArn,
 DagS3Path,
 PluginsS3Path,
 PluginsS3ObjectVersion,
 RequirementsS3Path,
 RequirementsS3ObjectVersion,
 StartupScriptS3Path,
 StartupScriptS3ObjectVersion,
 AirflowConfigurationOptions,
 EnvironmentClass,
 MaxWorkers,
 MinWorkers,
 MaxWebservers,
 MinWebservers,
 Schedulers,
 NetworkConfiguration,
 LoggingConfiguration,
 WeeklyMaintenanceWindowStart,
 Tags,
 WebserverAccessMode,
 EndpointManagement,
 WorkerReplacementStrategy,
 region
)
SELECT 
 '{{ Name }}',
 '{{ ExecutionRoleArn }}',
 '{{ KmsKey }}',
 '{{ AirflowVersion }}',
 '{{ SourceBucketArn }}',
 '{{ DagS3Path }}',
 '{{ PluginsS3Path }}',
 '{{ PluginsS3ObjectVersion }}',
 '{{ RequirementsS3Path }}',
 '{{ RequirementsS3ObjectVersion }}',
 '{{ StartupScriptS3Path }}',
 '{{ StartupScriptS3ObjectVersion }}',
 '{{ AirflowConfigurationOptions }}',
 '{{ EnvironmentClass }}',
 '{{ MaxWorkers }}',
 '{{ MinWorkers }}',
 '{{ MaxWebservers }}',
 '{{ MinWebservers }}',
 '{{ Schedulers }}',
 '{{ NetworkConfiguration }}',
 '{{ LoggingConfiguration }}',
 '{{ WeeklyMaintenanceWindowStart }}',
 '{{ Tags }}',
 '{{ WebserverAccessMode }}',
 '{{ EndpointManagement }}',
 '{{ WorkerReplacementStrategy }}',
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
  - name: environment
    props:
      - name: Name
        value: '{{ Name }}'
      - name: ExecutionRoleArn
        value: '{{ ExecutionRoleArn }}'
      - name: KmsKey
        value: '{{ KmsKey }}'
      - name: AirflowVersion
        value: '{{ AirflowVersion }}'
      - name: SourceBucketArn
        value: '{{ SourceBucketArn }}'
      - name: DagS3Path
        value: '{{ DagS3Path }}'
      - name: PluginsS3Path
        value: null
      - name: PluginsS3ObjectVersion
        value: '{{ PluginsS3ObjectVersion }}'
      - name: RequirementsS3Path
        value: null
      - name: RequirementsS3ObjectVersion
        value: null
      - name: StartupScriptS3Path
        value: null
      - name: StartupScriptS3ObjectVersion
        value: null
      - name: AirflowConfigurationOptions
        value: {}
      - name: EnvironmentClass
        value: '{{ EnvironmentClass }}'
      - name: MaxWorkers
        value: '{{ MaxWorkers }}'
      - name: MinWorkers
        value: '{{ MinWorkers }}'
      - name: MaxWebservers
        value: '{{ MaxWebservers }}'
      - name: MinWebservers
        value: '{{ MinWebservers }}'
      - name: Schedulers
        value: '{{ Schedulers }}'
      - name: NetworkConfiguration
        value:
          SubnetIds:
            - '{{ SubnetIds[0] }}'
          SecurityGroupIds:
            - '{{ SecurityGroupIds[0] }}'
      - name: LoggingConfiguration
        value:
          DagProcessingLogs:
            Enabled: '{{ Enabled }}'
            LogLevel: '{{ LogLevel }}'
            CloudWatchLogGroupArn: '{{ CloudWatchLogGroupArn }}'
          SchedulerLogs: null
          WebserverLogs: null
          WorkerLogs: null
          TaskLogs: null
      - name: WeeklyMaintenanceWindowStart
        value: '{{ WeeklyMaintenanceWindowStart }}'
      - name: Tags
        value: {}
      - name: WebserverAccessMode
        value: '{{ WebserverAccessMode }}'
      - name: EndpointManagement
        value: '{{ EndpointManagement }}'
      - name: WorkerReplacementStrategy
        value: '{{ WorkerReplacementStrategy }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.mwaa.environments
WHERE data__Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>environments</code> resource, the following permissions are required:

### Create
```json
airflow:GetEnvironment,
airflow:CreateEnvironment,
airflow:TagResource,
airflow:UntagResource,
iam:PassRole,
iam:ListRoles,
iam:CreatePolicy,
iam:AttachRolePolicy,
iam:CreateRole,
iam:CreateServiceLinkedRole,
s3:GetBucketLocation,
s3:ListAllMyBuckets,
s3:ListBucket,
s3:ListBucketVersions,
s3:CreateBucket,
s3:PutObject,
s3:GetEncryptionConfiguration,
ec2:DescribeSecurityGroups,
ec2:DescribeSubnets,
ec2:DescribeVpcs,
ec2:DescribeRouteTables,
ec2:AuthorizeSecurityGroupIngress,
ec2:CreateSecurityGroup,
ec2:CreateVpcEndpoint,
ec2:CreateNetworkInterface,
kms:CreateGrant,
kms:DescribeKey,
kms:ListAliases
```

### Read
```json
airflow:GetEnvironment
```

### Update
```json
airflow:GetEnvironment,
airflow:UpdateEnvironment,
airflow:TagResource,
airflow:UntagResource,
iam:PassRole,
iam:ListRoles,
iam:AttachRolePolicy,
s3:GetBucketLocation,
s3:ListBucket,
s3:ListBucketVersions,
s3:GetEncryptionConfiguration,
ec2:DescribeSecurityGroups,
ec2:DescribeSubnets,
ec2:DescribeVpcs,
ec2:DescribeRouteTables,
kms:DescribeKey,
kms:ListAliases
```

### Delete
```json
airflow:GetEnvironment,
airflow:DeleteEnvironment
```

### List
```json
airflow:ListEnvironments
```
