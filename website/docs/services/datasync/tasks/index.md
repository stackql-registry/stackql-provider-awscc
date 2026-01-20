---
title: tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - tasks
  - datasync
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

Creates, updates, deletes or gets a <code>task</code> resource or lists <code>tasks</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>tasks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::DataSync::Task.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.datasync.tasks" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "excludes",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "filter_type",
        "type": "string",
        "description": "The type of filter rule to apply. AWS DataSync only supports the SIMPLE&#95;PATTERN rule type."
      },
      {
        "name": "value",
        "type": "string",
        "description": "A single filter string that consists of the patterns to include or exclude. The patterns are delimited by \"&#124;\"."
      }
    ]
  },
  {
    "name": "includes",
    "type": "array",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key for an AWS resource tag."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for an AWS resource tag."
      }
    ]
  },
  {
    "name": "cloud_watch_log_group_arn",
    "type": "string",
    "description": "The ARN of the Amazon CloudWatch log group that is used to monitor and log events in the task."
  },
  {
    "name": "destination_location_arn",
    "type": "string",
    "description": "The ARN of an AWS storage resource's location."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of a task. This value is a text reference that is used to identify the task in the console."
  },
  {
    "name": "options",
    "type": "object",
    "description": "Represents the options that are available to control the behavior of a StartTaskExecution operation.",
    "children": [
      {
        "name": "atime",
        "type": "string",
        "description": "A file metadata value that shows the last time a file was accessed (that is, when the file was read or written to)."
      },
      {
        "name": "bytes_per_second",
        "type": "integer",
        "description": "A value that limits the bandwidth used by AWS DataSync."
      },
      {
        "name": "gid",
        "type": "string",
        "description": "The group ID (GID) of the file's owners."
      },
      {
        "name": "log_level",
        "type": "string",
        "description": "A value that determines the types of logs that DataSync publishes to a log stream in the Amazon CloudWatch log group that you provide."
      },
      {
        "name": "mtime",
        "type": "string",
        "description": "A value that indicates the last time that a file was modified (that is, a file was written to) before the PREPARING phase."
      },
      {
        "name": "overwrite_mode",
        "type": "string",
        "description": "A value that determines whether files at the destination should be overwritten or preserved when copying files."
      },
      {
        "name": "posix_permissions",
        "type": "string",
        "description": "A value that determines which users or groups can access a file for a specific purpose such as reading, writing, or execution of the file."
      },
      {
        "name": "preserve_deleted_files",
        "type": "string",
        "description": "A value that specifies whether files in the destination that don't exist in the source file system should be preserved."
      },
      {
        "name": "preserve_devices",
        "type": "string",
        "description": "A value that determines whether AWS DataSync should preserve the metadata of block and character devices in the source file system, and recreate the files with that device name and metadata on the destination."
      },
      {
        "name": "security_descriptor_copy_flags",
        "type": "string",
        "description": "A value that determines which components of the SMB security descriptor are copied during transfer."
      },
      {
        "name": "task_queueing",
        "type": "string",
        "description": "A value that determines whether tasks should be queued before executing the tasks."
      },
      {
        "name": "transfer_mode",
        "type": "string",
        "description": "A value that determines whether DataSync transfers only the data and metadata that differ between the source and the destination location, or whether DataSync transfers all the content from the source, without comparing to the destination location."
      },
      {
        "name": "uid",
        "type": "string",
        "description": "The user ID (UID) of the file's owner."
      },
      {
        "name": "verify_mode",
        "type": "string",
        "description": "A value that determines whether a data integrity verification should be performed at the end of a task execution after all data and metadata have been transferred."
      },
      {
        "name": "object_tags",
        "type": "string",
        "description": "A value that determines whether object tags should be read from the source object store and written to the destination object store."
      }
    ]
  },
  {
    "name": "task_report_config",
    "type": "object",
    "description": "Specifies how you want to configure a task report, which provides detailed information about for your Datasync transfer.",
    "children": [
      {
        "name": "destination",
        "type": "object",
        "description": "Specifies where DataSync uploads your task report.",
        "children": [
          {
            "name": "s3",
            "type": "object",
            "description": "Specifies the Amazon S3 bucket where DataSync uploads your task report.",
            "children": [
              {
                "name": "subdirectory",
                "type": "string",
                "description": "Specifies a bucket prefix for your report."
              },
              {
                "name": "bucket_access_role_arn",
                "type": "string",
                "description": "Specifies the Amazon Resource Name (ARN) of the IAM policy that allows Datasync to upload a task report to your S3 bucket."
              },
              {
                "name": "s3_bucket_arn",
                "type": "string",
                "description": "Specifies the ARN of the S3 bucket where Datasync uploads your report."
              }
            ]
          }
        ]
      },
      {
        "name": "output_type",
        "type": "string",
        "description": "Specifies the type of task report that you want."
      },
      {
        "name": "report_level",
        "type": "string",
        "description": "Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't."
      },
      {
        "name": "object_version_ids",
        "type": "string",
        "description": "Specifies whether your task report includes the new version of each object transferred into an S3 bucket, this only applies if you enable versioning on your bucket."
      },
      {
        "name": "overrides",
        "type": "object",
        "description": "Customizes the reporting level for aspects of your task report. For example, your report might generally only include errors, but you could specify that you want a list of successes and errors just for the files that Datasync attempted to delete in your destination location.",
        "children": [
          {
            "name": "transferred",
            "type": "object",
            "description": "Specifies the level of reporting for the files, objects, and directories that Datasync attempted to transfer.",
            "children": [
              {
                "name": "report_level",
                "type": "string",
                "description": "Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't."
              }
            ]
          },
          {
            "name": "verified",
            "type": "object",
            "description": "Specifies the level of reporting for the files, objects, and directories that Datasync attempted to verify at the end of your transfer. This only applies if you configure your task to verify data during and after the transfer (which Datasync does by default)",
            "children": [
              {
                "name": "report_level",
                "type": "string",
                "description": "Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't."
              }
            ]
          },
          {
            "name": "deleted",
            "type": "object",
            "description": "Specifies the level of reporting for the files, objects, and directories that Datasync attempted to delete in your destination location. This only applies if you configure your task to delete data in the destination that isn't in the source.",
            "children": [
              {
                "name": "report_level",
                "type": "string",
                "description": "Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't."
              }
            ]
          },
          {
            "name": "skipped",
            "type": "object",
            "description": "Specifies the level of reporting for the files, objects, and directories that Datasync attempted to skip during your transfer.",
            "children": [
              {
                "name": "report_level",
                "type": "string",
                "description": "Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "manifest_config",
    "type": "object",
    "description": "Configures a manifest, which is a list of files or objects that you want DataSync to transfer.",
    "children": [
      {
        "name": "action",
        "type": "string",
        "description": "Specifies what DataSync uses the manifest for."
      },
      {
        "name": "format",
        "type": "string",
        "description": "Specifies the file format of your manifest."
      },
      {
        "name": "source",
        "type": "object",
        "description": "Specifies the manifest that you want DataSync to use and where it's hosted.",
        "children": [
          {
            "name": "s3",
            "type": "object",
            "description": "Specifies the S3 bucket where you're hosting the manifest that you want AWS DataSync to use.",
            "children": [
              {
                "name": "manifest_object_path",
                "type": "string",
                "description": "Specifies the Amazon S3 object key of your manifest."
              },
              {
                "name": "bucket_access_role_arn",
                "type": "string",
                "description": "Specifies the AWS Identity and Access Management (IAM) role that allows DataSync to access your manifest."
              },
              {
                "name": "s3_bucket_arn",
                "type": "string",
                "description": "Specifies the Amazon Resource Name (ARN) of the S3 bucket where you're hosting your manifest."
              },
              {
                "name": "manifest_object_version_id",
                "type": "string",
                "description": "Specifies the object version ID of the manifest that you want DataSync to use."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "schedule",
    "type": "object",
    "description": "Specifies the schedule you want your task to use for repeated executions.",
    "children": [
      {
        "name": "schedule_expression",
        "type": "string",
        "description": "A cron expression that specifies when AWS DataSync initiates a scheduled transfer from a source to a destination location"
      },
      {
        "name": "status",
        "type": "string",
        "description": "Specifies status of a schedule."
      }
    ]
  },
  {
    "name": "source_location_arn",
    "type": "string",
    "description": "The ARN of the source location for the task."
  },
  {
    "name": "task_arn",
    "type": "string",
    "description": "The ARN of the task."
  },
  {
    "name": "task_mode",
    "type": "string",
    "description": "Specifies the task mode for the task."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of the task that was described."
  },
  {
    "name": "source_network_interface_arns",
    "type": "array",
    "description": "The Amazon Resource Names (ARNs) of the source ENIs (Elastic Network Interfaces) that were created for your subnet."
  },
  {
    "name": "destination_network_interface_arns",
    "type": "array",
    "description": "The Amazon Resource Names (ARNs) of the destination ENIs (Elastic Network Interfaces) that were created for your subnet."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html"><code>AWS::DataSync::Task</code></a>.

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
    <td><CopyableCode code="DestinationLocationArn, SourceLocationArn, region" /></td>
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

Gets all properties from an individual <code>task</code>.
```sql
SELECT
region,
excludes,
includes,
tags,
cloud_watch_log_group_arn,
destination_location_arn,
name,
options,
task_report_config,
manifest_config,
schedule,
source_location_arn,
task_arn,
task_mode,
status,
source_network_interface_arns,
destination_network_interface_arns
FROM awscc.datasync.tasks
WHERE region = 'us-east-1' AND data__Identifier = '<TaskArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>task</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.datasync.tasks (
 DestinationLocationArn,
 SourceLocationArn,
 region
)
SELECT 
'{{ DestinationLocationArn }}',
 '{{ SourceLocationArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.datasync.tasks (
 Excludes,
 Includes,
 Tags,
 CloudWatchLogGroupArn,
 DestinationLocationArn,
 Name,
 Options,
 TaskReportConfig,
 ManifestConfig,
 Schedule,
 SourceLocationArn,
 TaskMode,
 region
)
SELECT 
 '{{ Excludes }}',
 '{{ Includes }}',
 '{{ Tags }}',
 '{{ CloudWatchLogGroupArn }}',
 '{{ DestinationLocationArn }}',
 '{{ Name }}',
 '{{ Options }}',
 '{{ TaskReportConfig }}',
 '{{ ManifestConfig }}',
 '{{ Schedule }}',
 '{{ SourceLocationArn }}',
 '{{ TaskMode }}',
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
  - name: task
    props:
      - name: Excludes
        value:
          - FilterType: '{{ FilterType }}'
            Value: '{{ Value }}'
      - name: Includes
        value:
          - null
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: CloudWatchLogGroupArn
        value: '{{ CloudWatchLogGroupArn }}'
      - name: DestinationLocationArn
        value: '{{ DestinationLocationArn }}'
      - name: Name
        value: '{{ Name }}'
      - name: Options
        value:
          Atime: '{{ Atime }}'
          BytesPerSecond: '{{ BytesPerSecond }}'
          Gid: '{{ Gid }}'
          LogLevel: '{{ LogLevel }}'
          Mtime: '{{ Mtime }}'
          OverwriteMode: '{{ OverwriteMode }}'
          PosixPermissions: '{{ PosixPermissions }}'
          PreserveDeletedFiles: '{{ PreserveDeletedFiles }}'
          PreserveDevices: '{{ PreserveDevices }}'
          SecurityDescriptorCopyFlags: '{{ SecurityDescriptorCopyFlags }}'
          TaskQueueing: '{{ TaskQueueing }}'
          TransferMode: '{{ TransferMode }}'
          Uid: '{{ Uid }}'
          VerifyMode: '{{ VerifyMode }}'
          ObjectTags: '{{ ObjectTags }}'
      - name: TaskReportConfig
        value:
          Destination:
            S3:
              Subdirectory: '{{ Subdirectory }}'
              BucketAccessRoleArn: '{{ BucketAccessRoleArn }}'
              S3BucketArn: '{{ S3BucketArn }}'
          OutputType: '{{ OutputType }}'
          ReportLevel: '{{ ReportLevel }}'
          ObjectVersionIds: '{{ ObjectVersionIds }}'
          Overrides:
            Transferred:
              ReportLevel: '{{ ReportLevel }}'
            Verified:
              ReportLevel: '{{ ReportLevel }}'
            Deleted:
              ReportLevel: '{{ ReportLevel }}'
            Skipped:
              ReportLevel: '{{ ReportLevel }}'
      - name: ManifestConfig
        value:
          Action: '{{ Action }}'
          Format: '{{ Format }}'
          Source:
            S3:
              ManifestObjectPath: '{{ ManifestObjectPath }}'
              BucketAccessRoleArn: '{{ BucketAccessRoleArn }}'
              S3BucketArn: '{{ S3BucketArn }}'
              ManifestObjectVersionId: '{{ ManifestObjectVersionId }}'
      - name: Schedule
        value:
          ScheduleExpression: '{{ ScheduleExpression }}'
          Status: '{{ Status }}'
      - name: SourceLocationArn
        value: '{{ SourceLocationArn }}'
      - name: TaskMode
        value: '{{ TaskMode }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datasync.tasks
WHERE data__Identifier = '<TaskArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>tasks</code> resource, the following permissions are required:

### Create
```json
datasync:CreateTask,
datasync:DescribeTask,
datasync:ListTagsForResource,
datasync:TagResource,
s3:ListAllMyBuckets,
s3:ListBucket,
s3:GetObject,
s3:GetObjectVersion,
ec2:DescribeNetworkInterfaces,
ec2:CreateNetworkInterface,
ec2:DeleteNetworkInterface,
ec2:DescribeSecurityGroups,
ec2:DescribeSubnets,
ec2:CreateNetworkInterfacePermission,
fsx:DescribeFileSystems,
elasticfilesystem:DescribeFileSystems,
elasticfilesystem:DescribeMountTargets,
logs:DescribeLogGroups,
iam:GetRole,
iam:PassRole,
iam:AssumeRole
```

### Read
```json
datasync:DescribeTask,
datasync:ListTagsForResource
```

### Update
```json
datasync:UpdateTask,
datasync:DescribeTask,
datasync:ListTagsForResource,
datasync:TagResource,
datasync:UntagResource,
logs:DescribeLogGroups,
iam:PassRole
```

### Delete
```json
datasync:DeleteTask,
ec2:DescribeNetworkInterfaces,
ec2:DeleteNetworkInterface,
ec2:DescribeSecurityGroups,
ec2:DescribeSubnets,
fsx:DescribeFileSystems,
elasticfilesystem:DescribeFileSystems,
elasticfilesystem:DescribeMountTargets,
iam:GetRole
```

### List
```json
datasync:ListTasks
```
