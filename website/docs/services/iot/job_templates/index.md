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
    <td><CopyableCode code="data__Identifier, region" /></td>
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
WHERE region = 'us-east-1' AND data__Identifier = '<JobTemplateId>';
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
'{{ JobTemplateId }}',
 '{{ Description }}',
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
 '{{ JobArn }}',
 '{{ JobTemplateId }}',
 '{{ Description }}',
 '{{ Document }}',
 '{{ DocumentSource }}',
 '{{ TimeoutConfig }}',
 '{{ JobExecutionsRolloutConfig }}',
 '{{ AbortConfig }}',
 '{{ PresignedUrlConfig }}',
 '{{ JobExecutionsRetryConfig }}',
 '{{ MaintenanceWindows }}',
 '{{ DestinationPackageVersions }}',
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
  - name: job_template
    props:
      - name: JobArn
        value: '{{ JobArn }}'
      - name: JobTemplateId
        value: '{{ JobTemplateId }}'
      - name: Description
        value: '{{ Description }}'
      - name: Document
        value: '{{ Document }}'
      - name: DocumentSource
        value: '{{ DocumentSource }}'
      - name: TimeoutConfig
        value:
          InProgressTimeoutInMinutes: '{{ InProgressTimeoutInMinutes }}'
      - name: JobExecutionsRolloutConfig
        value:
          ExponentialRolloutRate:
            BaseRatePerMinute: '{{ BaseRatePerMinute }}'
            IncrementFactor: null
            RateIncreaseCriteria:
              NumberOfNotifiedThings: '{{ NumberOfNotifiedThings }}'
              NumberOfSucceededThings: '{{ NumberOfSucceededThings }}'
          MaximumPerMinute: '{{ MaximumPerMinute }}'
      - name: AbortConfig
        value:
          CriteriaList:
            - Action:
                CloudwatchAlarm:
                  StateValue: '{{ StateValue }}'
                  AlarmName: '{{ AlarmName }}'
                  StateReason: '{{ StateReason }}'
                  RoleArn: '{{ RoleArn }}'
                CloudwatchLogs:
                  LogGroupName: '{{ LogGroupName }}'
                  RoleArn: '{{ RoleArn }}'
                  BatchMode: '{{ BatchMode }}'
                CloudwatchMetric:
                  MetricName: '{{ MetricName }}'
                  MetricValue: '{{ MetricValue }}'
                  MetricNamespace: '{{ MetricNamespace }}'
                  MetricUnit: '{{ MetricUnit }}'
                  RoleArn: '{{ RoleArn }}'
                  MetricTimestamp: '{{ MetricTimestamp }}'
                DynamoDB:
                  TableName: '{{ TableName }}'
                  PayloadField: '{{ PayloadField }}'
                  RangeKeyField: '{{ RangeKeyField }}'
                  HashKeyField: '{{ HashKeyField }}'
                  RangeKeyValue: '{{ RangeKeyValue }}'
                  RangeKeyType: '{{ RangeKeyType }}'
                  HashKeyType: '{{ HashKeyType }}'
                  HashKeyValue: '{{ HashKeyValue }}'
                  RoleArn: '{{ RoleArn }}'
                DynamoDBv2:
                  PutItem:
                    TableName: '{{ TableName }}'
                  RoleArn: '{{ RoleArn }}'
                Elasticsearch:
                  Type: '{{ Type }}'
                  Index: '{{ Index }}'
                  Id: '{{ Id }}'
                  Endpoint: '{{ Endpoint }}'
                  RoleArn: '{{ RoleArn }}'
                Firehose:
                  DeliveryStreamName: '{{ DeliveryStreamName }}'
                  RoleArn: '{{ RoleArn }}'
                  Separator: '{{ Separator }}'
                  BatchMode: '{{ BatchMode }}'
                Http:
                  ConfirmationUrl: '{{ ConfirmationUrl }}'
                  Headers:
                    - Value: '{{ Value }}'
                      Key: '{{ Key }}'
                  Url: '{{ Url }}'
                  Auth:
                    Sigv4:
                      ServiceName: '{{ ServiceName }}'
                      SigningRegion: '{{ SigningRegion }}'
                      RoleArn: '{{ RoleArn }}'
                IotAnalytics:
                  RoleArn: '{{ RoleArn }}'
                  ChannelName: '{{ ChannelName }}'
                  BatchMode: '{{ BatchMode }}'
                IotEvents:
                  InputName: '{{ InputName }}'
                  RoleArn: '{{ RoleArn }}'
                  MessageId: '{{ MessageId }}'
                  BatchMode: '{{ BatchMode }}'
                IotSiteWise:
                  RoleArn: '{{ RoleArn }}'
                  PutAssetPropertyValueEntries:
                    - PropertyAlias: '{{ PropertyAlias }}'
                      PropertyValues:
                        - Value:
                            StringValue: '{{ StringValue }}'
                            DoubleValue: '{{ DoubleValue }}'
                            BooleanValue: '{{ BooleanValue }}'
                            IntegerValue: '{{ IntegerValue }}'
                          Timestamp:
                            TimeInSeconds: '{{ TimeInSeconds }}'
                            OffsetInNanos: '{{ OffsetInNanos }}'
                          Quality: '{{ Quality }}'
                      AssetId: '{{ AssetId }}'
                      EntryId: '{{ EntryId }}'
                      PropertyId: '{{ PropertyId }}'
                Kafka:
                  DestinationArn: '{{ DestinationArn }}'
                  Topic: '{{ Topic }}'
                  Key: '{{ Key }}'
                  Partition: '{{ Partition }}'
                  ClientProperties: {}
                  Headers:
                    - Value: '{{ Value }}'
                      Key: '{{ Key }}'
                Kinesis:
                  PartitionKey: '{{ PartitionKey }}'
                  StreamName: '{{ StreamName }}'
                  RoleArn: '{{ RoleArn }}'
                Lambda:
                  FunctionArn: '{{ FunctionArn }}'
                Location:
                  RoleArn: '{{ RoleArn }}'
                  TrackerName: '{{ TrackerName }}'
                  DeviceId: '{{ DeviceId }}'
                  Latitude: '{{ Latitude }}'
                  Longitude: '{{ Longitude }}'
                  Timestamp:
                    Value: '{{ Value }}'
                    Unit: '{{ Unit }}'
                OpenSearch:
                  Type: '{{ Type }}'
                  Index: '{{ Index }}'
                  Id: '{{ Id }}'
                  Endpoint: '{{ Endpoint }}'
                  RoleArn: '{{ RoleArn }}'
                Republish:
                  Qos: '{{ Qos }}'
                  Topic: '{{ Topic }}'
                  RoleArn: '{{ RoleArn }}'
                  Headers:
                    PayloadFormatIndicator: '{{ PayloadFormatIndicator }}'
                    ContentType: '{{ ContentType }}'
                    ResponseTopic: '{{ ResponseTopic }}'
                    CorrelationData: '{{ CorrelationData }}'
                    MessageExpiry: '{{ MessageExpiry }}'
                    UserProperties:
                      - Key: '{{ Key }}'
                        Value: '{{ Value }}'
                S3:
                  BucketName: '{{ BucketName }}'
                  Key: '{{ Key }}'
                  RoleArn: '{{ RoleArn }}'
                  CannedAcl: '{{ CannedAcl }}'
                Sns:
                  TargetArn: '{{ TargetArn }}'
                  MessageFormat: '{{ MessageFormat }}'
                  RoleArn: '{{ RoleArn }}'
                Sqs:
                  RoleArn: '{{ RoleArn }}'
                  UseBase64: '{{ UseBase64 }}'
                  QueueUrl: '{{ QueueUrl }}'
                StepFunctions:
                  ExecutionNamePrefix: '{{ ExecutionNamePrefix }}'
                  StateMachineName: '{{ StateMachineName }}'
                  RoleArn: '{{ RoleArn }}'
                Timestream:
                  RoleArn: '{{ RoleArn }}'
                  DatabaseName: '{{ DatabaseName }}'
                  TableName: '{{ TableName }}'
                  Dimensions:
                    - Name: '{{ Name }}'
                      Value: '{{ Value }}'
                  Timestamp:
                    Value: '{{ Value }}'
                    Unit: '{{ Unit }}'
              FailureType: '{{ FailureType }}'
              MinNumberOfExecutedThings: '{{ MinNumberOfExecutedThings }}'
              ThresholdPercentage: null
      - name: PresignedUrlConfig
        value:
          RoleArn: '{{ RoleArn }}'
          ExpiresInSec: '{{ ExpiresInSec }}'
      - name: JobExecutionsRetryConfig
        value:
          RetryCriteriaList:
            - NumberOfRetries: '{{ NumberOfRetries }}'
              FailureType: '{{ FailureType }}'
      - name: MaintenanceWindows
        value:
          - StartTime: '{{ StartTime }}'
            DurationInMinutes: '{{ DurationInMinutes }}'
      - name: DestinationPackageVersions
        value:
          - '{{ DestinationPackageVersions[0] }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iot.job_templates
WHERE data__Identifier = '<JobTemplateId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>job_templates</code> resource, the following permissions are required:

### Create
```json
iot:CreateJobTemplate,
iam:PassRole,
s3:GetObject,
iot:TagResource
```

### Read
```json
iot:DescribeJobTemplate,
iot:ListTagsForResource
```

### Delete
```json
iot:DeleteJobTemplate
```

### List
```json
iot:ListJobTemplates
```
