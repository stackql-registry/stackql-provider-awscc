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
            "type": "object",
            "description": "The type of job action to take to initiate the job abort.",
            "children": [
              {
                "name": "cloudwatch_alarm",
                "type": "object",
                "description": ""
              },
              {
                "name": "cloudwatch_logs",
                "type": "object",
                "description": ""
              },
              {
                "name": "cloudwatch_metric",
                "type": "object",
                "description": ""
              },
              {
                "name": "dynamo_db",
                "type": "object",
                "description": ""
              },
              {
                "name": "dynamo_dbv2",
                "type": "object",
                "description": ""
              },
              {
                "name": "elasticsearch",
                "type": "object",
                "description": ""
              },
              {
                "name": "firehose",
                "type": "object",
                "description": ""
              },
              {
                "name": "http",
                "type": "object",
                "description": ""
              },
              {
                "name": "iot_analytics",
                "type": "object",
                "description": ""
              },
              {
                "name": "iot_events",
                "type": "object",
                "description": ""
              },
              {
                "name": "iot_site_wise",
                "type": "object",
                "description": ""
              },
              {
                "name": "kafka",
                "type": "object",
                "description": ""
              },
              {
                "name": "kinesis",
                "type": "object",
                "description": ""
              },
              {
                "name": "lambda",
                "type": "object",
                "description": ""
              },
              {
                "name": "location",
                "type": "object",
                "description": ""
              },
              {
                "name": "open_search",
                "type": "object",
                "description": ""
              },
              {
                "name": "republish",
                "type": "object",
                "description": ""
              },
              {
                "name": "s3",
                "type": "object",
                "description": ""
              },
              {
                "name": "sns",
                "type": "object",
                "description": ""
              },
              {
                "name": "sqs",
                "type": "object",
                "description": ""
              },
              {
                "name": "step_functions",
                "type": "object",
                "description": ""
              },
              {
                "name": "timestream",
                "type": "object",
                "description": ""
              }
            ]
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
        "description": ""
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
        "description": ""
      },
      {
        "name": "value",
        "type": "string",
        "description": ""
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
WHERE region = 'us-east-1' AND Identifier = '{{ job_template_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>job_templates</code> in a region.
```sql
SELECT
region,
job_template_id
FROM awscc.iot.job_templates_list_only
WHERE region = 'us-east-1';
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
'{{ region }}';
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
            - action:
                cloudwatch_alarm:
                  state_value: '{{ state_value }}'
                  alarm_name: '{{ alarm_name }}'
                  state_reason: '{{ state_reason }}'
                  role_arn: '{{ role_arn }}'
                cloudwatch_logs:
                  log_group_name: '{{ log_group_name }}'
                  role_arn: '{{ role_arn }}'
                  batch_mode: '{{ batch_mode }}'
                cloudwatch_metric:
                  metric_name: '{{ metric_name }}'
                  metric_value: '{{ metric_value }}'
                  metric_namespace: '{{ metric_namespace }}'
                  metric_unit: '{{ metric_unit }}'
                  role_arn: '{{ role_arn }}'
                  metric_timestamp: '{{ metric_timestamp }}'
                dynamo_db:
                  table_name: '{{ table_name }}'
                  payload_field: '{{ payload_field }}'
                  range_key_field: '{{ range_key_field }}'
                  hash_key_field: '{{ hash_key_field }}'
                  range_key_value: '{{ range_key_value }}'
                  range_key_type: '{{ range_key_type }}'
                  hash_key_type: '{{ hash_key_type }}'
                  hash_key_value: '{{ hash_key_value }}'
                  role_arn: '{{ role_arn }}'
                dynamo_dbv2:
                  put_item:
                    table_name: '{{ table_name }}'
                  role_arn: '{{ role_arn }}'
                elasticsearch:
                  type: '{{ type }}'
                  index: '{{ index }}'
                  id: '{{ id }}'
                  endpoint: '{{ endpoint }}'
                  role_arn: '{{ role_arn }}'
                firehose:
                  delivery_stream_name: '{{ delivery_stream_name }}'
                  role_arn: '{{ role_arn }}'
                  separator: '{{ separator }}'
                  batch_mode: '{{ batch_mode }}'
                http:
                  confirmation_url: '{{ confirmation_url }}'
                  headers:
                    - value: '{{ value }}'
                      key: '{{ key }}'
                  url: '{{ url }}'
                  auth:
                    sigv4:
                      service_name: '{{ service_name }}'
                      signing_region: '{{ signing_region }}'
                      role_arn: '{{ role_arn }}'
                iot_analytics:
                  role_arn: '{{ role_arn }}'
                  channel_name: '{{ channel_name }}'
                  batch_mode: '{{ batch_mode }}'
                iot_events:
                  input_name: '{{ input_name }}'
                  role_arn: '{{ role_arn }}'
                  message_id: '{{ message_id }}'
                  batch_mode: '{{ batch_mode }}'
                iot_site_wise:
                  role_arn: '{{ role_arn }}'
                  put_asset_property_value_entries:
                    - property_alias: '{{ property_alias }}'
                      property_values:
                        - value:
                            string_value: '{{ string_value }}'
                            double_value: '{{ double_value }}'
                            boolean_value: '{{ boolean_value }}'
                            integer_value: '{{ integer_value }}'
                          timestamp:
                            time_in_seconds: '{{ time_in_seconds }}'
                            offset_in_nanos: '{{ offset_in_nanos }}'
                          quality: '{{ quality }}'
                      asset_id: '{{ asset_id }}'
                      entry_id: '{{ entry_id }}'
                      property_id: '{{ property_id }}'
                kafka:
                  destination_arn: '{{ destination_arn }}'
                  topic: '{{ topic }}'
                  key: '{{ key }}'
                  partition: '{{ partition }}'
                  client_properties: {}
                  headers:
                    - value: '{{ value }}'
                      key: '{{ key }}'
                kinesis:
                  partition_key: '{{ partition_key }}'
                  stream_name: '{{ stream_name }}'
                  role_arn: '{{ role_arn }}'
                lambda:
                  function_arn: '{{ function_arn }}'
                location:
                  role_arn: '{{ role_arn }}'
                  tracker_name: '{{ tracker_name }}'
                  device_id: '{{ device_id }}'
                  latitude: '{{ latitude }}'
                  longitude: '{{ longitude }}'
                  timestamp:
                    value: '{{ value }}'
                    unit: '{{ unit }}'
                open_search:
                  type: '{{ type }}'
                  index: '{{ index }}'
                  id: '{{ id }}'
                  endpoint: '{{ endpoint }}'
                  role_arn: '{{ role_arn }}'
                republish:
                  qos: '{{ qos }}'
                  topic: '{{ topic }}'
                  role_arn: '{{ role_arn }}'
                  headers:
                    payload_format_indicator: '{{ payload_format_indicator }}'
                    content_type: '{{ content_type }}'
                    response_topic: '{{ response_topic }}'
                    correlation_data: '{{ correlation_data }}'
                    message_expiry: '{{ message_expiry }}'
                    user_properties:
                      - key: '{{ key }}'
                        value: '{{ value }}'
                s3:
                  bucket_name: '{{ bucket_name }}'
                  key: '{{ key }}'
                  role_arn: '{{ role_arn }}'
                  canned_acl: '{{ canned_acl }}'
                sns:
                  target_arn: '{{ target_arn }}'
                  message_format: '{{ message_format }}'
                  role_arn: '{{ role_arn }}'
                sqs:
                  role_arn: '{{ role_arn }}'
                  use_base64: '{{ use_base64 }}'
                  queue_url: '{{ queue_url }}'
                step_functions:
                  execution_name_prefix: '{{ execution_name_prefix }}'
                  state_machine_name: '{{ state_machine_name }}'
                  role_arn: '{{ role_arn }}'
                timestream:
                  role_arn: '{{ role_arn }}'
                  database_name: '{{ database_name }}'
                  table_name: '{{ table_name }}'
                  dimensions:
                    - name: '{{ name }}'
                      value: '{{ value }}'
                  timestamp:
                    value: '{{ value }}'
                    unit: '{{ unit }}'
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
            value: '{{ value }}'
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iot.job_templates
WHERE Identifier = '{{ job_template_id }}'
AND region = 'us-east-1';
```

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