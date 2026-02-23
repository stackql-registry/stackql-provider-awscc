---
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
  - emrserverless
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
<tr><td><b>Description</b></td><td>Resource schema for AWS::EMRServerless::Application Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.emrserverless.applications" /></td></tr>
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
    "name": "architecture",
    "type": "string",
    "description": "The cpu architecture of an application."
  },
  {
    "name": "name",
    "type": "string",
    "description": "User friendly Application name."
  },
  {
    "name": "release_label",
    "type": "string",
    "description": "EMR release label."
  },
  {
    "name": "type",
    "type": "string",
    "description": "The type of the application"
  },
  {
    "name": "initial_capacity",
    "type": "array",
    "description": "Initial capacity initialized when an Application is started.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "Worker type for an analytics framework."
      },
      {
        "name": "value",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "worker_count",
            "type": "integer",
            "description": "Initial count of workers to be initialized when an Application is started. This count will be continued to be maintained until the Application is stopped"
          },
          {
            "name": "worker_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "cpu",
                "type": "string",
                "description": "Per worker CPU resource. vCPU is the only supported unit and specifying vCPU is optional."
              },
              {
                "name": "memory",
                "type": "string",
                "description": "Per worker memory resource. GB is the only supported unit and specifying GB is optional."
              },
              {
                "name": "disk",
                "type": "string",
                "description": "Per worker Disk resource. GB is the only supported unit and specifying GB is optional"
              },
              {
                "name": "disk_type",
                "type": "string",
                "description": "Per worker DiskType resource. Shuffle optimized and Standard are only supported types and specifying diskType is optional"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "maximum_capacity",
    "type": "object",
    "description": "Maximum allowed cumulative resources for an Application. No new resources will be created once the limit is hit.",
    "children": [
      {
        "name": "cpu",
        "type": "string",
        "description": "Per worker CPU resource. vCPU is the only supported unit and specifying vCPU is optional."
      },
      {
        "name": "memory",
        "type": "string",
        "description": "Per worker memory resource. GB is the only supported unit and specifying GB is optional."
      },
      {
        "name": "disk",
        "type": "string",
        "description": "Per worker Disk resource. GB is the only supported unit and specifying GB is optional"
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tag map with key and value",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 1 to 128 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "auto_start_configuration",
    "type": "object",
    "description": "Configuration for Auto Start of Application.",
    "children": [
      {
        "name": "enabled",
        "type": "boolean",
        "description": "If set to true, the Application will automatically start. Defaults to true."
      }
    ]
  },
  {
    "name": "auto_stop_configuration",
    "type": "object",
    "description": "Configuration for Auto Stop of Application.",
    "children": [
      {
        "name": "enabled",
        "type": "boolean",
        "description": "If set to true, the Application will automatically stop after being idle. Defaults to true."
      },
      {
        "name": "idle_timeout_minutes",
        "type": "integer",
        "description": "The amount of time &#91;in minutes&#93; to wait before auto stopping the Application when idle. Defaults to 15 minutes."
      }
    ]
  },
  {
    "name": "image_configuration",
    "type": "object",
    "description": "The image configuration.",
    "children": [
      {
        "name": "image_uri",
        "type": "string",
        "description": "The URI of an image in the Amazon ECR registry. This field is required when you create a new application. If you leave this field blank in an update, Amazon EMR will remove the image configuration."
      }
    ]
  },
  {
    "name": "monitoring_configuration",
    "type": "object",
    "description": "Monitoring configuration for batch and interactive JobRun.",
    "children": [
      {
        "name": "s3_monitoring_configuration",
        "type": "object",
        "description": "S3 monitoring configurations for a JobRun.",
        "children": [
          {
            "name": "log_uri",
            "type": "string",
            "description": ""
          },
          {
            "name": "encryption_key_arn",
            "type": "string",
            "description": "KMS key ARN to encrypt the logs stored in given s3"
          }
        ]
      },
      {
        "name": "managed_persistence_monitoring_configuration",
        "type": "object",
        "description": "Managed log persistence configurations for a JobRun.",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": "If set to false, managed logging will be turned off. Defaults to true."
          },
          {
            "name": "encryption_key_arn",
            "type": "string",
            "description": "KMS key ARN to encrypt the logs stored in managed persistence"
          }
        ]
      },
      {
        "name": "cloud_watch_logging_configuration",
        "type": "object",
        "description": "CloudWatch logging configurations for a JobRun.",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": "If set to false, CloudWatch logging will be turned off. Defaults to false."
          },
          {
            "name": "log_group_name",
            "type": "string",
            "description": "Log-group name to produce log-streams on CloudWatch. If undefined, logs will be produced in a default log-group /aws/emr-serverless"
          },
          {
            "name": "log_stream_name_prefix",
            "type": "string",
            "description": "Log-stream name prefix by which log-stream names will start in the CloudWatch Log-group."
          },
          {
            "name": "encryption_key_arn",
            "type": "string",
            "description": "KMS key ARN to encrypt the logs stored in given CloudWatch log-group."
          },
          {
            "name": "log_type_map",
            "type": "array",
            "description": "The specific log-streams which need to be uploaded to CloudWatch.",
            "children": [
              {
                "name": "key",
                "type": "string",
                "description": ""
              },
              {
                "name": "value",
                "type": "array",
                "description": "List of Applicable values: &#91;STDOUT, STDERR, HIVE&#95;LOG, TEZ&#95;AM, SYSTEM&#95;LOGS&#93;"
              }
            ]
          }
        ]
      },
      {
        "name": "prometheus_monitoring_configuration",
        "type": "object",
        "description": "Prometheus monitoring configurations for a JobRun.",
        "children": [
          {
            "name": "remote_write_url",
            "type": "string",
            "description": "The remote write URL in the Amazon Managed Service for Prometheus workspace to send metrics to."
          }
        ]
      }
    ]
  },
  {
    "name": "runtime_configuration",
    "type": "array",
    "description": "Runtime configuration for batch and interactive JobRun.",
    "children": [
      {
        "name": "classification",
        "type": "string",
        "description": "String with a maximum length of 1024."
      },
      {
        "name": "properties",
        "type": "object",
        "description": ""
      },
      {
        "name": "configurations",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "interactive_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "livy_endpoint_enabled",
        "type": "boolean",
        "description": "Enables an Apache Livy endpoint that you can connect to and run interactive jobs"
      },
      {
        "name": "studio_enabled",
        "type": "boolean",
        "description": "Enabled you to connect an Application to Amazon EMR Studio to run interactive workloads in a notebook"
      }
    ]
  },
  {
    "name": "network_configuration",
    "type": "object",
    "description": "Network Configuration for customer VPC connectivity.",
    "children": [
      {
        "name": "subnet_ids",
        "type": "array",
        "description": "The ID of the subnets in the VPC to which you want to connect your job or application."
      },
      {
        "name": "security_group_ids",
        "type": "array",
        "description": "The ID of the security groups in the VPC to which you want to connect your job or application."
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the EMR Serverless Application."
  },
  {
    "name": "application_id",
    "type": "string",
    "description": "The ID of the EMR Serverless Application."
  },
  {
    "name": "worker_type_specifications",
    "type": "object",
    "description": "The key-value pairs that specify worker type to WorkerTypeSpecificationInput. This parameter must contain all valid worker types for a Spark or Hive application. Valid worker types include Driver and Executor for Spark applications and HiveDriver and TezTask for Hive applications. You can either set image details in this parameter for each worker type, or in imageConfiguration for all worker types."
  },
  {
    "name": "scheduler_configuration",
    "type": "object",
    "description": "The scheduler configuration for batch and streaming jobs running on this application. Supported with release labels emr-7.0.0 and above.",
    "children": [
      {
        "name": "queue_timeout_minutes",
        "type": "integer",
        "description": "The maximum duration in minutes for the job in QUEUED state. If scheduler configuration is enabled on your application, the default value is 360 minutes (6 hours). The valid range is from 15 to 720."
      },
      {
        "name": "max_concurrent_runs",
        "type": "integer",
        "description": "The maximum concurrent job runs on this application. If scheduler configuration is enabled on your application, the default value is 15. The valid range is 1 to 1000."
      }
    ]
  },
  {
    "name": "identity_center_configuration",
    "type": "object",
    "description": "The IAM IdentityCenter configuration for trusted-identity-propagation on this application. Supported with release labels emr-7.8.0 and above.",
    "children": [
      {
        "name": "identity_center_instance_arn",
        "type": "string",
        "description": "The IAM IdentityCenter instance arn"
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
    "name": "application_id",
    "type": "string",
    "description": "The ID of the EMR Serverless Application."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html"><code>AWS::EMRServerless::Application</code></a>.

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
    <td><CopyableCode code="ReleaseLabel, Type, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>applications</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>applications</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
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

Gets all properties from an individual <code>application</code>.
```sql
SELECT
region,
architecture,
name,
release_label,
type,
initial_capacity,
maximum_capacity,
tags,
auto_start_configuration,
auto_stop_configuration,
image_configuration,
monitoring_configuration,
runtime_configuration,
interactive_configuration,
network_configuration,
arn,
application_id,
worker_type_specifications,
scheduler_configuration,
identity_center_configuration
FROM awscc.emrserverless.applications
WHERE region = 'us-east-1' AND Identifier = '{{ application_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>applications</code> in a region.
```sql
SELECT
region,
application_id
FROM awscc.emrserverless.applications_list_only
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
INSERT INTO awscc.emrserverless.applications (
 ReleaseLabel,
 Type,
 region
)
SELECT
'{{ release_label }}',
 '{{ type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.emrserverless.applications (
 Architecture,
 Name,
 ReleaseLabel,
 Type,
 InitialCapacity,
 MaximumCapacity,
 Tags,
 AutoStartConfiguration,
 AutoStopConfiguration,
 ImageConfiguration,
 MonitoringConfiguration,
 RuntimeConfiguration,
 InteractiveConfiguration,
 NetworkConfiguration,
 WorkerTypeSpecifications,
 SchedulerConfiguration,
 IdentityCenterConfiguration,
 region
)
SELECT
 '{{ architecture }}',
 '{{ name }}',
 '{{ release_label }}',
 '{{ type }}',
 '{{ initial_capacity }}',
 '{{ maximum_capacity }}',
 '{{ tags }}',
 '{{ auto_start_configuration }}',
 '{{ auto_stop_configuration }}',
 '{{ image_configuration }}',
 '{{ monitoring_configuration }}',
 '{{ runtime_configuration }}',
 '{{ interactive_configuration }}',
 '{{ network_configuration }}',
 '{{ worker_type_specifications }}',
 '{{ scheduler_configuration }}',
 '{{ identity_center_configuration }}',
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
      - name: architecture
        value: '{{ architecture }}'
      - name: name
        value: '{{ name }}'
      - name: release_label
        value: '{{ release_label }}'
      - name: type
        value: '{{ type }}'
      - name: initial_capacity
        value:
          - key: '{{ key }}'
            value:
              worker_count: '{{ worker_count }}'
              worker_configuration:
                cpu: '{{ cpu }}'
                memory: '{{ memory }}'
                disk: '{{ disk }}'
                disk_type: '{{ disk_type }}'
      - name: maximum_capacity
        value:
          cpu: null
          memory: null
          disk: null
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: auto_start_configuration
        value:
          enabled: '{{ enabled }}'
      - name: auto_stop_configuration
        value:
          enabled: '{{ enabled }}'
          idle_timeout_minutes: '{{ idle_timeout_minutes }}'
      - name: image_configuration
        value:
          image_uri: '{{ image_uri }}'
      - name: monitoring_configuration
        value:
          s3_monitoring_configuration: null
          managed_persistence_monitoring_configuration: null
          cloud_watch_logging_configuration: null
          prometheus_monitoring_configuration: null
      - name: runtime_configuration
        value:
          - classification: '{{ classification }}'
            properties: {}
            configurations:
              - null
      - name: interactive_configuration
        value:
          livy_endpoint_enabled: '{{ livy_endpoint_enabled }}'
          studio_enabled: '{{ studio_enabled }}'
      - name: network_configuration
        value:
          subnet_ids:
            - '{{ subnet_ids[0] }}'
          security_group_ids:
            - '{{ security_group_ids[0] }}'
      - name: worker_type_specifications
        value: {}
      - name: scheduler_configuration
        value:
          queue_timeout_minutes: '{{ queue_timeout_minutes }}'
          max_concurrent_runs: '{{ max_concurrent_runs }}'
      - name: identity_center_configuration
        value:
          identity_center_instance_arn: '{{ identity_center_instance_arn }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>application</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.emrserverless.applications
SET PatchDocument = string('{{ {
    "Architecture": architecture,
    "ReleaseLabel": release_label,
    "InitialCapacity": initial_capacity,
    "MaximumCapacity": maximum_capacity,
    "Tags": tags,
    "AutoStartConfiguration": auto_start_configuration,
    "AutoStopConfiguration": auto_stop_configuration,
    "ImageConfiguration": image_configuration,
    "MonitoringConfiguration": monitoring_configuration,
    "RuntimeConfiguration": runtime_configuration,
    "InteractiveConfiguration": interactive_configuration,
    "NetworkConfiguration": network_configuration,
    "WorkerTypeSpecifications": worker_type_specifications,
    "SchedulerConfiguration": scheduler_configuration,
    "IdentityCenterConfiguration": identity_center_configuration
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ application_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.emrserverless.applications
WHERE Identifier = '{{ application_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>applications</code> resource, the following permissions are required:

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
kms:CreateKey,
kms:CreateAlias,
kms:DescribeKey,
kms:EnableKey,
kms:ListGrants,
kms:ListAliases,
kms:ListKeyPolicies,
kms:ListKeys,
kms:PutKeyPolicy,
kms:UpdateKeyDescription,
kms:UpdateAlias,
kms:UpdatePrimaryRegion,
kms:RevokeGrant,
kms:DisableKey,
kms:DisableKeyRotation,
kms:GetKeyPolicy,
kms:GetKeyRotationStatus,
kms:DeleteAlias,
kms:ScheduleKeyDeletion,
kms:CancelKeyDeletion,
kms:GenerateDataKey,
kms:TagResource,
kms:UntagResource,
kms:Decrypt,
emr-serverless:CreateApplication,
emr-serverless:TagResource,
emr-serverless:GetApplication,
iam:CreateServiceLinkedRole,
ec2:CreateNetworkInterface,
ecr:BatchGetImage,
ecr:DescribeImages,
ecr:GetDownloadUrlForLayer,
sso:DescribeInstance,
sso:CreateApplication,
sso:DeleteApplication,
sso:PutApplicationAuthenticationMethod,
sso:PutApplicationAssignmentConfiguration,
sso:PutApplicationGrant,
sso:PutApplicationAccessScope
```

</TabItem>
<TabItem value="read">

```json
emr-serverless:GetApplication
```

</TabItem>
<TabItem value="update">

```json
emr-serverless:UpdateApplication,
emr-serverless:TagResource,
emr-serverless:UntagResource,
emr-serverless:GetApplication,
ec2:CreateNetworkInterface,
ecr:BatchGetImage,
ecr:DescribeImages,
ecr:GetDownloadUrlForLayer,
kms:CreateKey,
kms:CreateAlias,
kms:DescribeKey,
kms:EnableKey,
kms:ListGrants,
kms:ListAliases,
kms:ListKeyPolicies,
kms:ListKeys,
kms:PutKeyPolicy,
kms:UpdateKeyDescription,
kms:UpdateAlias,
kms:UpdatePrimaryRegion,
kms:RevokeGrant,
kms:DisableKey,
kms:DisableKeyRotation,
kms:GetKeyPolicy,
kms:GetKeyRotationStatus,
kms:DeleteAlias,
kms:ScheduleKeyDeletion,
kms:CancelKeyDeletion,
kms:GenerateDataKey,
kms:TagResource,
kms:UntagResource,
kms:Decrypt
```

</TabItem>
<TabItem value="delete">

```json
emr-serverless:DeleteApplication,
emr-serverless:GetApplication,
sso:DeleteApplication
```

</TabItem>
<TabItem value="list">

```json
emr-serverless:ListApplications
```

</TabItem>
</Tabs>