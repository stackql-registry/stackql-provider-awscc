---
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
  - glue
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

Creates, updates, deletes or gets a <code>job</code> resource or lists <code>jobs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>jobs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Glue::Job</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.glue.jobs" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "connections",
    "type": "object",
    "description": "Specifies the connections used by a job",
    "children": [
      {
        "name": "connections",
        "type": "array",
        "description": "A list of connections used by the job."
      }
    ]
  },
  {
    "name": "max_retries",
    "type": "number",
    "description": "The maximum number of times to retry this job after a JobRun fails"
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description of the job."
  },
  {
    "name": "timeout",
    "type": "integer",
    "description": "The maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status."
  },
  {
    "name": "allocated_capacity",
    "type": "number",
    "description": "The number of capacity units that are allocated to this job."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name you assign to the job definition"
  },
  {
    "name": "role",
    "type": "string",
    "description": "The name or Amazon Resource Name (ARN) of the IAM role associated with this job."
  },
  {
    "name": "default_arguments",
    "type": "object",
    "description": "The default arguments for this job, specified as name-value pairs."
  },
  {
    "name": "notification_property",
    "type": "object",
    "description": "Specifies configuration properties of a notification.",
    "children": [
      {
        "name": "notify_delay_after",
        "type": "integer",
        "description": "After a job run starts, the number of minutes to wait before sending a job run delay notification"
      }
    ]
  },
  {
    "name": "worker_type",
    "type": "string",
    "description": "TThe type of predefined worker that is allocated when a job runs."
  },
  {
    "name": "execution_class",
    "type": "string",
    "description": "Indicates whether the job is run with a standard or flexible execution class."
  },
  {
    "name": "log_uri",
    "type": "string",
    "description": "This field is reserved for future use."
  },
  {
    "name": "command",
    "type": "object",
    "description": "The code that executes a job.",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": "The name of the job command"
      },
      {
        "name": "python_version",
        "type": "string",
        "description": "The Python version being used to execute a Python shell job."
      },
      {
        "name": "runtime",
        "type": "string",
        "description": "Runtime is used to specify the versions of Ray, Python and additional libraries available in your environment"
      },
      {
        "name": "script_location",
        "type": "string",
        "description": "Specifies the Amazon Simple Storage Service (Amazon S3) path to a script that executes a job"
      }
    ]
  },
  {
    "name": "glue_version",
    "type": "string",
    "description": "Glue version determines the versions of Apache Spark and Python that AWS Glue supports."
  },
  {
    "name": "execution_property",
    "type": "object",
    "description": "The maximum number of concurrent runs that are allowed for this job.",
    "children": [
      {
        "name": "max_concurrent_runs",
        "type": "number",
        "description": "The maximum number of concurrent runs allowed for the job."
      }
    ]
  },
  {
    "name": "security_configuration",
    "type": "string",
    "description": "The name of the SecurityConfiguration structure to be used with this job."
  },
  {
    "name": "number_of_workers",
    "type": "integer",
    "description": "The number of workers of a defined workerType that are allocated when a job runs."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "The tags to use with this job."
  },
  {
    "name": "max_capacity",
    "type": "number",
    "description": "The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs."
  },
  {
    "name": "non_overridable_arguments",
    "type": "object",
    "description": "Non-overridable arguments for this job, specified as name-value pairs."
  },
  {
    "name": "maintenance_window",
    "type": "string",
    "description": "Property description not available."
  },
  {
    "name": "job_mode",
    "type": "string",
    "description": "Property description not available."
  },
  {
    "name": "job_run_queuing_enabled",
    "type": "boolean",
    "description": "Property description not available."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html"><code>AWS::Glue::Job</code></a>.

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
    <td><CopyableCode code="Role, Command, region" /></td>
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

Gets all properties from an individual <code>job</code>.
```sql
SELECT
region,
connections,
max_retries,
description,
timeout,
allocated_capacity,
name,
role,
default_arguments,
notification_property,
worker_type,
execution_class,
log_uri,
command,
glue_version,
execution_property,
security_configuration,
number_of_workers,
tags,
max_capacity,
non_overridable_arguments,
maintenance_window,
job_mode,
job_run_queuing_enabled
FROM awscc.glue.jobs
WHERE region = 'us-east-1' AND data__Identifier = '<Name>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>job</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.glue.jobs (
 Role,
 Command,
 region
)
SELECT 
'{{ Role }}',
 '{{ Command }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.glue.jobs (
 Connections,
 MaxRetries,
 Description,
 Timeout,
 AllocatedCapacity,
 Name,
 Role,
 DefaultArguments,
 NotificationProperty,
 WorkerType,
 ExecutionClass,
 LogUri,
 Command,
 GlueVersion,
 ExecutionProperty,
 SecurityConfiguration,
 NumberOfWorkers,
 Tags,
 MaxCapacity,
 NonOverridableArguments,
 MaintenanceWindow,
 JobMode,
 JobRunQueuingEnabled,
 region
)
SELECT 
 '{{ Connections }}',
 '{{ MaxRetries }}',
 '{{ Description }}',
 '{{ Timeout }}',
 '{{ AllocatedCapacity }}',
 '{{ Name }}',
 '{{ Role }}',
 '{{ DefaultArguments }}',
 '{{ NotificationProperty }}',
 '{{ WorkerType }}',
 '{{ ExecutionClass }}',
 '{{ LogUri }}',
 '{{ Command }}',
 '{{ GlueVersion }}',
 '{{ ExecutionProperty }}',
 '{{ SecurityConfiguration }}',
 '{{ NumberOfWorkers }}',
 '{{ Tags }}',
 '{{ MaxCapacity }}',
 '{{ NonOverridableArguments }}',
 '{{ MaintenanceWindow }}',
 '{{ JobMode }}',
 '{{ JobRunQueuingEnabled }}',
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
  - name: job
    props:
      - name: Connections
        value:
          Connections:
            - '{{ Connections[0] }}'
      - name: MaxRetries
        value: null
      - name: Description
        value: '{{ Description }}'
      - name: Timeout
        value: '{{ Timeout }}'
      - name: AllocatedCapacity
        value: null
      - name: Name
        value: '{{ Name }}'
      - name: Role
        value: '{{ Role }}'
      - name: DefaultArguments
        value: {}
      - name: NotificationProperty
        value:
          NotifyDelayAfter: '{{ NotifyDelayAfter }}'
      - name: WorkerType
        value: '{{ WorkerType }}'
      - name: ExecutionClass
        value: '{{ ExecutionClass }}'
      - name: LogUri
        value: '{{ LogUri }}'
      - name: Command
        value:
          Name: '{{ Name }}'
          PythonVersion: '{{ PythonVersion }}'
          Runtime: '{{ Runtime }}'
          ScriptLocation: '{{ ScriptLocation }}'
      - name: GlueVersion
        value: '{{ GlueVersion }}'
      - name: ExecutionProperty
        value:
          MaxConcurrentRuns: null
      - name: SecurityConfiguration
        value: '{{ SecurityConfiguration }}'
      - name: NumberOfWorkers
        value: '{{ NumberOfWorkers }}'
      - name: Tags
        value: {}
      - name: MaxCapacity
        value: null
      - name: NonOverridableArguments
        value: {}
      - name: MaintenanceWindow
        value: '{{ MaintenanceWindow }}'
      - name: JobMode
        value: '{{ JobMode }}'
      - name: JobRunQueuingEnabled
        value: '{{ JobRunQueuingEnabled }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.glue.jobs
WHERE data__Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>jobs</code> resource, the following permissions are required:

### Create
```json
iam:GetRole,
iam:PassRole,
glue:CreateJob,
glue:GetJob,
glue:TagResource
```

### Read
```json
glue:GetJob,
glue:GetTags
```

### Delete
```json
glue:DeleteJob,
glue:GetJob,
glue:UntagResource
```

### Update
```json
iam:GetRole,
iam:PassRole,
glue:UpdateJob,
glue:UntagResource,
glue:TagResource
```

### List
```json
glue:ListJobs
```
