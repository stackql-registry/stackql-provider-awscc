---
title: scheduled_queries
hide_title: false
hide_table_of_contents: false
keywords:
  - scheduled_queries
  - timestream
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

Creates, updates, deletes or gets a <code>scheduled_query</code> resource or lists <code>scheduled_queries</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>scheduled_queries</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::Timestream::ScheduledQuery resource creates a Timestream Scheduled Query.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.timestream.scheduled_queries" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": "Amazon Resource Name of the scheduled query that is generated upon creation."
  },
  {
    "name": "scheduled_query_name",
    "type": "string",
    "description": "The name of the scheduled query. Scheduled query names must be unique within each Region."
  },
  {
    "name": "query_string",
    "type": "string",
    "description": "The query string to run. Parameter names can be specified in the query string @ character followed by an identifier. The named Parameter @scheduled&#95;runtime is reserved and can be used in the query to get the time at which the query is scheduled to run. The timestamp calculated according to the ScheduleConfiguration parameter, will be the value of @scheduled&#95;runtime paramater for each query run. For example, consider an instance of a scheduled query executing on 2021-12-01 00:00:00. For this instance, the @scheduled&#95;runtime parameter is initialized to the timestamp 2021-12-01 00:00:00 when invoking the query."
  },
  {
    "name": "schedule_configuration",
    "type": "object",
    "description": "Configuration for when the scheduled query is executed.",
    "children": [
      {
        "name": "schedule_expression",
        "type": "string",
        "description": "An expression that denotes when to trigger the scheduled query run. This can be a cron expression or a rate expression."
      }
    ]
  },
  {
    "name": "notification_configuration",
    "type": "object",
    "description": "Notification configuration for the scheduled query. A notification is sent by Timestream when a query run finishes, when the state is updated or when you delete it.",
    "children": [
      {
        "name": "sns_configuration",
        "type": "object",
        "description": "SNS configuration for notification upon scheduled query execution.",
        "children": [
          {
            "name": "topic_arn",
            "type": "string",
            "description": "SNS topic ARN that the scheduled query status notifications will be sent to."
          }
        ]
      }
    ]
  },
  {
    "name": "client_token",
    "type": "string",
    "description": "Using a ClientToken makes the call to CreateScheduledQuery idempotent, in other words, making the same request repeatedly will produce the same result. Making multiple identical CreateScheduledQuery requests has the same effect as making a single request. If CreateScheduledQuery is called without a ClientToken, the Query SDK generates a ClientToken on your behalf. After 8 hours, any request with the same ClientToken is treated as a new request."
  },
  {
    "name": "scheduled_query_execution_role_arn",
    "type": "string",
    "description": "The ARN for the IAM role that Timestream will assume when running the scheduled query."
  },
  {
    "name": "target_configuration",
    "type": "object",
    "description": "Configuration of target store where scheduled query results are written to.",
    "children": [
      {
        "name": "timestream_configuration",
        "type": "object",
        "description": "Configuration needed to write data into the Timestream database and table.",
        "children": [
          {
            "name": "database_name",
            "type": "string",
            "description": "Name of Timestream database to which the query result will be written."
          },
          {
            "name": "table_name",
            "type": "string",
            "description": "Name of Timestream table that the query result will be written to. The table should be within the same database that is provided in Timestream configuration."
          },
          {
            "name": "time_column",
            "type": "string",
            "description": "Column from query result that should be used as the time column in destination table. Column type for this should be TIMESTAMP."
          },
          {
            "name": "dimension_mappings",
            "type": "array",
            "description": "This is to allow mapping column(s) from the query result to the dimension in the destination table.",
            "children": [
              {
                "name": "name",
                "type": "string",
                "description": "Column name from query result."
              },
              {
                "name": "dimension_value_type",
                "type": "string",
                "description": "Type for the dimension."
              }
            ]
          },
          {
            "name": "multi_measure_mappings",
            "type": "object",
            "description": "Only one of MixedMeasureMappings or MultiMeasureMappings is to be provided. MultiMeasureMappings can be used to ingest data as multi measures in the derived table.",
            "children": [
              {
                "name": "target_multi_measure_name",
                "type": "string",
                "description": "Name of the target multi-measure in the derived table. Required if MeasureNameColumn is not provided. If MeasureNameColumn is provided then the value from that column will be used as the multi-measure name."
              },
              {
                "name": "multi_measure_attribute_mappings",
                "type": "array",
                "description": "Required. Attribute mappings to be used for mapping query results to ingest data for multi-measure attributes."
              }
            ]
          },
          {
            "name": "mixed_measure_mappings",
            "type": "array",
            "description": "Specifies how to map measures to multi-measure records.",
            "children": [
              {
                "name": "measure_name",
                "type": "string",
                "description": "Refers to the value of the measure name in a result row. This field is required if MeasureNameColumn is provided."
              },
              {
                "name": "source_column",
                "type": "string",
                "description": "This field refers to the source column from which the measure value is to be read for result materialization."
              },
              {
                "name": "target_measure_name",
                "type": "string",
                "description": "Target measure name to be used. If not provided, the target measure name by default would be MeasureName if provided, or SourceColumn otherwise."
              },
              {
                "name": "measure_value_type",
                "type": "string",
                "description": "Type of the value that is to be read from SourceColumn. If the mapping is for MULTI, use MeasureValueType.MULTI."
              },
              {
                "name": "multi_measure_attribute_mappings",
                "type": "array",
                "description": "Required. Attribute mappings to be used for mapping query results to ingest data for multi-measure attributes."
              }
            ]
          },
          {
            "name": "measure_name_column",
            "type": "string",
            "description": "Name of the measure name column from the query result."
          }
        ]
      }
    ]
  },
  {
    "name": "error_report_configuration",
    "type": "object",
    "description": "Configuration for error reporting. Error reports will be generated when a problem is encountered when writing the query results.",
    "children": [
      {
        "name": "s3_configuration",
        "type": "object",
        "description": "Details on S3 location for error reports that result from running a query.",
        "children": [
          {
            "name": "bucket_name",
            "type": "string",
            "description": "Name of the S3 bucket under which error reports will be created."
          },
          {
            "name": "object_key_prefix",
            "type": "string",
            "description": "Prefix for error report keys."
          },
          {
            "name": "encryption_option",
            "type": "string",
            "description": "Encryption at rest options for the error reports. If no encryption option is specified, Timestream will choose SSE&#95;S3 as default."
          }
        ]
      }
    ]
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "The Amazon KMS key used to encrypt the scheduled query resource, at-rest. If the Amazon KMS key is not specified, the scheduled query resource will be encrypted with a Timestream owned Amazon KMS key. To specify a KMS key, use the key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix the name with alias/. If ErrorReportConfiguration uses SSE&#95;KMS as encryption type, the same KmsKeyId is used to encrypt the error report at rest."
  },
  {
    "name": "sq_name",
    "type": "string",
    "description": "The name of the scheduled query. Scheduled query names must be unique within each Region."
  },
  {
    "name": "sq_query_string",
    "type": "string",
    "description": "The query string to run. Parameter names can be specified in the query string @ character followed by an identifier. The named Parameter @scheduled&#95;runtime is reserved and can be used in the query to get the time at which the query is scheduled to run. The timestamp calculated according to the ScheduleConfiguration parameter, will be the value of @scheduled&#95;runtime paramater for each query run. For example, consider an instance of a scheduled query executing on 2021-12-01 00:00:00. For this instance, the @scheduled&#95;runtime parameter is initialized to the timestamp 2021-12-01 00:00:00 when invoking the query."
  },
  {
    "name": "sq_schedule_configuration",
    "type": "string",
    "description": "Configuration for when the scheduled query is executed."
  },
  {
    "name": "sq_notification_configuration",
    "type": "string",
    "description": "Notification configuration for the scheduled query. A notification is sent by Timestream when a query run finishes, when the state is updated or when you delete it."
  },
  {
    "name": "sq_scheduled_query_execution_role_arn",
    "type": "string",
    "description": "The ARN for the IAM role that Timestream will assume when running the scheduled query."
  },
  {
    "name": "sq_target_configuration",
    "type": "string",
    "description": "Configuration of target store where scheduled query results are written to."
  },
  {
    "name": "sq_error_report_configuration",
    "type": "string",
    "description": "Configuration for error reporting. Error reports will be generated when a problem is encountered when writing the query results."
  },
  {
    "name": "sq_kms_key_id",
    "type": "string",
    "description": "The Amazon KMS key used to encrypt the scheduled query resource, at-rest. If the Amazon KMS key is not specified, the scheduled query resource will be encrypted with a Timestream owned Amazon KMS key. To specify a KMS key, use the key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix the name with alias/. If ErrorReportConfiguration uses SSE&#95;KMS as encryption type, the same KmsKeyId is used to encrypt the error report at rest."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of key-value pairs to label the scheduled query.",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html"><code>AWS::Timestream::ScheduledQuery</code></a>.

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
    <td><CopyableCode code="QueryString, ScheduleConfiguration, NotificationConfiguration, ScheduledQueryExecutionRoleArn, ErrorReportConfiguration, region" /></td>
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

Gets all properties from an individual <code>scheduled_query</code>.
```sql
SELECT
region,
arn,
scheduled_query_name,
query_string,
schedule_configuration,
notification_configuration,
client_token,
scheduled_query_execution_role_arn,
target_configuration,
error_report_configuration,
kms_key_id,
sq_name,
sq_query_string,
sq_schedule_configuration,
sq_notification_configuration,
sq_scheduled_query_execution_role_arn,
sq_target_configuration,
sq_error_report_configuration,
sq_kms_key_id,
tags
FROM awscc.timestream.scheduled_queries
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>scheduled_query</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.timestream.scheduled_queries (
 QueryString,
 ScheduleConfiguration,
 NotificationConfiguration,
 ScheduledQueryExecutionRoleArn,
 ErrorReportConfiguration,
 region
)
SELECT 
'{{ QueryString }}',
 '{{ ScheduleConfiguration }}',
 '{{ NotificationConfiguration }}',
 '{{ ScheduledQueryExecutionRoleArn }}',
 '{{ ErrorReportConfiguration }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.timestream.scheduled_queries (
 ScheduledQueryName,
 QueryString,
 ScheduleConfiguration,
 NotificationConfiguration,
 ClientToken,
 ScheduledQueryExecutionRoleArn,
 TargetConfiguration,
 ErrorReportConfiguration,
 KmsKeyId,
 Tags,
 region
)
SELECT 
 '{{ ScheduledQueryName }}',
 '{{ QueryString }}',
 '{{ ScheduleConfiguration }}',
 '{{ NotificationConfiguration }}',
 '{{ ClientToken }}',
 '{{ ScheduledQueryExecutionRoleArn }}',
 '{{ TargetConfiguration }}',
 '{{ ErrorReportConfiguration }}',
 '{{ KmsKeyId }}',
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
  - name: scheduled_query
    props:
      - name: ScheduledQueryName
        value: '{{ ScheduledQueryName }}'
      - name: QueryString
        value: '{{ QueryString }}'
      - name: ScheduleConfiguration
        value:
          ScheduleExpression: '{{ ScheduleExpression }}'
      - name: NotificationConfiguration
        value:
          SnsConfiguration:
            TopicArn: '{{ TopicArn }}'
      - name: ClientToken
        value: '{{ ClientToken }}'
      - name: ScheduledQueryExecutionRoleArn
        value: '{{ ScheduledQueryExecutionRoleArn }}'
      - name: TargetConfiguration
        value:
          TimestreamConfiguration:
            DatabaseName: '{{ DatabaseName }}'
            TableName: '{{ TableName }}'
            TimeColumn: '{{ TimeColumn }}'
            DimensionMappings:
              - Name: '{{ Name }}'
                DimensionValueType: '{{ DimensionValueType }}'
            MultiMeasureMappings:
              TargetMultiMeasureName: '{{ TargetMultiMeasureName }}'
              MultiMeasureAttributeMappings:
                - SourceColumn: '{{ SourceColumn }}'
                  MeasureValueType: '{{ MeasureValueType }}'
                  TargetMultiMeasureAttributeName: '{{ TargetMultiMeasureAttributeName }}'
            MixedMeasureMappings:
              - MeasureName: '{{ MeasureName }}'
                SourceColumn: '{{ SourceColumn }}'
                TargetMeasureName: '{{ TargetMeasureName }}'
                MeasureValueType: '{{ MeasureValueType }}'
                MultiMeasureAttributeMappings: null
            MeasureNameColumn: '{{ MeasureNameColumn }}'
      - name: ErrorReportConfiguration
        value:
          S3Configuration:
            BucketName: '{{ BucketName }}'
            ObjectKeyPrefix: '{{ ObjectKeyPrefix }}'
            EncryptionOption: '{{ EncryptionOption }}'
      - name: KmsKeyId
        value: '{{ KmsKeyId }}'
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
DELETE FROM awscc.timestream.scheduled_queries
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>scheduled_queries</code> resource, the following permissions are required:

### Create
```json
timestream:CreateScheduledQuery,
timestream:DescribeEndpoints,
timestream:TagResource,
iam:PassRole,
kms:DescribeKey,
kms:GenerateDataKey
```

### Read
```json
timestream:DescribeScheduledQuery,
timestream:ListTagsForResource,
timestream:DescribeEndpoints,
kms:GenerateDataKey,
kms:Decrypt
```

### Update
```json
timestream:UpdateScheduledQuery,
timestream:TagResource,
timestream:UntagResource,
timestream:DescribeEndpoints
```

### Delete
```json
timestream:DeleteScheduledQuery,
timestream:DescribeScheduledQuery,
timestream:DescribeEndpoints
```

### List
```json
timestream:ListScheduledQueries,
timestream:DescribeEndpoints
```
