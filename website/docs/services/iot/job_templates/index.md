---
title: job_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - job_templates
  - iot
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CodeBlock from '@theme/CodeBlock';
import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>job_template</code> resource or lists <code>job_templates</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>job_templates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::IoT::JobTemplate. Job templates enable you to preconfigure jobs so that you can deploy them to multiple sets of target devices.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iot.job_templates" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "job_arn",
    "type": "string",
    "description": "Optional for copying a JobTemplate from a pre-existing Job configuration."
  },
  {
    "name": "job_template_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description of the Job Template."
  },
  {
    "name": "document",
    "type": "string",
    "description": "The job document. Required if you don't specify a value for documentSource."
  },
  {
    "name": "document_source",
    "type": "string",
    "description": "An S3 link to the job document to use in the template. Required if you don't specify a value for document."
  },
  {
    "name": "timeout_config",
    "type": "object",
    "description": "Specifies the amount of time each device has to finish its execution of the job.",
    "children": [
      {
        "name": "in_progress_timeout_in_minutes",
        "type": "integer",
        "description": "Specifies the amount of time, in minutes, this device has to finish execution of this job."
      }
    ]
  },
  {
    "name": "job_executions_rollout_config",
    "type": "object",
    "description": "Allows you to create a staged rollout of a job.",
    "children": [
      {
        "name": "exponential_rollout_rate",
        "type": "object",
        "description": "The rate of increase for a job rollout. This parameter allows you to define an exponential rate for a job rollout.",
        "children": [
          {
            "name": "base_rate_per_minute",
            "type": "integer",
            "description": "The minimum number of things that will be notified of a pending job, per minute at the start of job rollout. This parameter allows you to define the initial rate of rollout."
          },
          {
            "name": "increment_factor",
            "type": "number",
            "description": "The exponential factor to increase the rate of rollout for a job."
          },
          {
            "name": "rate_increase_criteria",
            "type": "object",
            "description": "The criteria to initiate the increase in rate of rollout for a job.",
            "children": [
              {
                "name": "number_of_notified_things",
                "type": "integer",
                "description": ""
              },
              {
                "name": "number_of_succeeded_things",
                "type": "integer",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "maximum_per_minute",
        "type": "integer",
        "description": "The maximum number of things that will be notified of a pending job, per minute. This parameter allows you to create a staged rollout."
      }
    ]
  },
  {
    "name": "abort_config",
    "type": "object",
    "description": "The criteria that determine when and how a job abort takes place.",
    "children": [
      {
        "name": "criteria_list",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "action",
            "type": "string",
            "description": "The type of job action to take to initiate the job abort."
          },
          {
            "name": "failure_type",
            "type": "string",
            "description": "The type of job execution failures that can initiate a job abort."
          },
          {
            "name": "min_number_of_executed_things",
            "type": "integer",
            "description": "The minimum number of things which must receive job execution notifications before the job can be aborted."
          },
          {
            "name": "threshold_percentage",
            "type": "number",
            "description": "The minimum percentage of job execution failures that must occur to initiate the job abort."
          }
        ]
      }
    ]
  },
  {
    "name": "presigned_url_config",
    "type": "object",
    "description": "Configuration for pre-signed S3 URLs.",
    "children": [
      {
        "name": "role_arn",
        "type": "string",
        "description": "The ARN of an IAM role that grants grants permission to download files from the S3 bucket where the job data/updates are stored. The role must also grant permission for IoT to download the files."
      },
      {
        "name": "expires_in_sec",
        "type": "integer",
        "description": "How number (in seconds) pre-signed URLs are valid."
      }
    ]
  },
  {
    "name": "job_executions_retry_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "retry_criteria_list",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "number_of_retries",
            "type": "integer",
            "description": ""
          },
          {
            "name": "failure_type",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "maintenance_windows",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "start_time",
        "type": "string",
        "description": ""
      },
      {
        "name": "duration_in_minutes",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "destination_package_versions",
    "type": "array",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Metadata that can be used to manage the JobTemplate.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The tag's key."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The tag's value."
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
    "name": "job_template_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html"><code>AWS::IoT::JobTemplate</code></a>.

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
    <td><code>job_templates</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="JobTemplateId, Description, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>job_templates</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>job_templates_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>job_templates</code></td>
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

Gets all properties from an individual <code>job_template</code>.
```sql
SELECT
  region,
  arn,
  job_arn,
  job_template_id,
  description,
  document,
  document_source,
  timeout_config,
  job_executions_rollout_config,
  abort_config,
  presigned_url_config,
  job_executions_retry_config,
  maintenance_windows,
  destination_package_versions,
  tags
FROM awscc.iot.job_templates
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ job_template_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>job_templates</code> in a region.
```sql
SELECT
  region,
  job_template_id
FROM awscc.iot.job_templates_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>job_template</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iot.job_templates (
  JobTemplateId,
  Description,
  region
)
SELECT
  '{{ job_template_id }}',
  '{{ description }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iot.job_templates (
  JobArn,
  JobTemplateId,
  Description,
  Document,
  DocumentSource,
  TimeoutConfig,
  JobExecutionsRolloutConfig,
  AbortConfig,
  PresignedUrlConfig,
  JobExecutionsRetryConfig,
  MaintenanceWindows,
  DestinationPackageVersions,
  Tags,
  region
)
SELECT
  '{{ job_arn }}',
  '{{ job_template_id }}',
  '{{ description }}',
  '{{ document }}',
  '{{ document_source }}',
  '{{ timeout_config }}',
  '{{ job_executions_rollout_config }}',
  '{{ abort_config }}',
  '{{ presigned_url_config }}',
  '{{ job_executions_retry_config }}',
  '{{ maintenance_windows }}',
  '{{ destination_package_versions }}',
  '{{ tags }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`version: 1
name: stack name
description: stack description
providers:
  - aws
globals:
  - name: region
    value: '{{ vars.AWS_REGION }}'
resources:
  - name: job_template
    props:
      - name: job_arn
        value: '{{ job_arn }}'
      - name: job_template_id
        value: '{{ job_template_id }}'
      - name: description
        value: '{{ description }}'
      - name: document
        value: '{{ document }}'
      - name: document_source
        value: '{{ document_source }}'
      - name: timeout_config
        value:
          in_progress_timeout_in_minutes: '{{ in_progress_timeout_in_minutes }}'
      - name: job_executions_rollout_config
        value:
          exponential_rollout_rate:
            base_rate_per_minute: '{{ base_rate_per_minute }}'
            increment_factor: null
            rate_increase_criteria:
              number_of_notified_things: '{{ number_of_notified_things }}'
              number_of_succeeded_things: '{{ number_of_succeeded_things }}'
          maximum_per_minute: '{{ maximum_per_minute }}'
      - name: abort_config
        value:
          criteria_list:
            - action: '{{ action }}'
              failure_type: '{{ failure_type }}'
              min_number_of_executed_things: '{{ min_number_of_executed_things }}'
              threshold_percentage: null
      - name: presigned_url_config
        value:
          role_arn: '{{ role_arn }}'
          expires_in_sec: '{{ expires_in_sec }}'
      - name: job_executions_retry_config
        value:
          retry_criteria_list:
            - number_of_retries: '{{ number_of_retries }}'
              failure_type: '{{ failure_type }}'
      - name: maintenance_windows
        value:
          - start_time: '{{ start_time }}'
            duration_in_minutes: '{{ duration_in_minutes }}'
      - name: destination_package_versions
        value:
          - '{{ destination_package_versions[0] }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iot.job_templates
WHERE
  Identifier = '{{ job_template_id }}' AND
  region = '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

## Permissions

To operate on the <code>job_templates</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
iot:CreateJobTemplate,
iam:PassRole,
s3:GetObject,
iot:TagResource
```

</TabItem>
<TabItem value="read">

```json
iot:DescribeJobTemplate,
iot:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
iot:DeleteJobTemplate
```

</TabItem>
<TabItem value="list">

```json
iot:ListJobTemplates
```

</TabItem>
</Tabs>