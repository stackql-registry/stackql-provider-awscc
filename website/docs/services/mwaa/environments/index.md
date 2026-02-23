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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "name",
    "type": "string",
    "description": "Customer-defined identifier for the environment, unique per customer region."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html"><code>AWS::MWAA::Environment</code></a>.

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
    <td><code>environments</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>environments</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>environments</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>environments_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>environments</code></td>
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
WHERE region = 'us-east-1' AND Identifier = '{{ name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>environments</code> in a region.
```sql
SELECT
region,
name
FROM awscc.mwaa.environments_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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
'{{ name }}',
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
 '{{ name }}',
 '{{ execution_role_arn }}',
 '{{ kms_key }}',
 '{{ airflow_version }}',
 '{{ source_bucket_arn }}',
 '{{ dag_s3_path }}',
 '{{ plugins_s3_path }}',
 '{{ plugins_s3_object_version }}',
 '{{ requirements_s3_path }}',
 '{{ requirements_s3_object_version }}',
 '{{ startup_script_s3_path }}',
 '{{ startup_script_s3_object_version }}',
 '{{ airflow_configuration_options }}',
 '{{ environment_class }}',
 '{{ max_workers }}',
 '{{ min_workers }}',
 '{{ max_webservers }}',
 '{{ min_webservers }}',
 '{{ schedulers }}',
 '{{ network_configuration }}',
 '{{ logging_configuration }}',
 '{{ weekly_maintenance_window_start }}',
 '{{ tags }}',
 '{{ webserver_access_mode }}',
 '{{ endpoint_management }}',
 '{{ worker_replacement_strategy }}',
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
      - name: name
        value: '{{ name }}'
      - name: execution_role_arn
        value: '{{ execution_role_arn }}'
      - name: kms_key
        value: '{{ kms_key }}'
      - name: airflow_version
        value: '{{ airflow_version }}'
      - name: source_bucket_arn
        value: '{{ source_bucket_arn }}'
      - name: dag_s3_path
        value: '{{ dag_s3_path }}'
      - name: plugins_s3_path
        value: null
      - name: plugins_s3_object_version
        value: '{{ plugins_s3_object_version }}'
      - name: requirements_s3_path
        value: null
      - name: requirements_s3_object_version
        value: null
      - name: startup_script_s3_path
        value: null
      - name: startup_script_s3_object_version
        value: null
      - name: airflow_configuration_options
        value: {}
      - name: environment_class
        value: '{{ environment_class }}'
      - name: max_workers
        value: '{{ max_workers }}'
      - name: min_workers
        value: '{{ min_workers }}'
      - name: max_webservers
        value: '{{ max_webservers }}'
      - name: min_webservers
        value: '{{ min_webservers }}'
      - name: schedulers
        value: '{{ schedulers }}'
      - name: network_configuration
        value:
          subnet_ids:
            - '{{ subnet_ids[0] }}'
          security_group_ids:
            - '{{ security_group_ids[0] }}'
      - name: logging_configuration
        value:
          dag_processing_logs:
            enabled: '{{ enabled }}'
            log_level: '{{ log_level }}'
            cloud_watch_log_group_arn: '{{ cloud_watch_log_group_arn }}'
          scheduler_logs: null
          webserver_logs: null
          worker_logs: null
          task_logs: null
      - name: weekly_maintenance_window_start
        value: '{{ weekly_maintenance_window_start }}'
      - name: tags
        value: {}
      - name: webserver_access_mode
        value: '{{ webserver_access_mode }}'
      - name: endpoint_management
        value: '{{ endpoint_management }}'
      - name: worker_replacement_strategy
        value: '{{ worker_replacement_strategy }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>environment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.mwaa.environments
SET PatchDocument = string('{{ {
    "ExecutionRoleArn": execution_role_arn,
    "AirflowVersion": airflow_version,
    "SourceBucketArn": source_bucket_arn,
    "DagS3Path": dag_s3_path,
    "PluginsS3Path": plugins_s3_path,
    "PluginsS3ObjectVersion": plugins_s3_object_version,
    "RequirementsS3Path": requirements_s3_path,
    "RequirementsS3ObjectVersion": requirements_s3_object_version,
    "StartupScriptS3Path": startup_script_s3_path,
    "StartupScriptS3ObjectVersion": startup_script_s3_object_version,
    "AirflowConfigurationOptions": airflow_configuration_options,
    "EnvironmentClass": environment_class,
    "MaxWorkers": max_workers,
    "MinWorkers": min_workers,
    "MaxWebservers": max_webservers,
    "MinWebservers": min_webservers,
    "Schedulers": schedulers,
    "WeeklyMaintenanceWindowStart": weekly_maintenance_window_start,
    "Tags": tags,
    "WebserverAccessMode": webserver_access_mode,
    "WorkerReplacementStrategy": worker_replacement_strategy
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.mwaa.environments
WHERE Identifier = '{{ name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>environments</code> resource, the following permissions are required:

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

</TabItem>
<TabItem value="read">

```json
airflow:GetEnvironment
```

</TabItem>
<TabItem value="update">

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

</TabItem>
<TabItem value="delete">

```json
airflow:GetEnvironment,
airflow:DeleteEnvironment
```

</TabItem>
<TabItem value="list">

```json
airflow:ListEnvironments
```

</TabItem>
</Tabs>