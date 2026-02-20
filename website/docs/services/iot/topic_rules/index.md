---
title: topic_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - topic_rules
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

Creates, updates, deletes or gets a <code>topic_rule</code> resource or lists <code>topic_rules</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>topic_rules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::IoT::TopicRule</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iot.topic_rules" /></td></tr>
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
    "name": "rule_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "topic_rule_payload",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "rule_disabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "error_action",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "cloudwatch_alarm",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "state_value",
                "type": "string",
                "description": ""
              },
              {
                "name": "alarm_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "state_reason",
                "type": "string",
                "description": ""
              },
              {
                "name": "role_arn",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "cloudwatch_logs",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "log_group_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "role_arn",
                "type": "string",
                "description": ""
              },
              {
                "name": "batch_mode",
                "type": "boolean",
                "description": ""
              }
            ]
          },
          {
            "name": "cloudwatch_metric",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "metric_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "metric_value",
                "type": "string",
                "description": ""
              },
              {
                "name": "metric_namespace",
                "type": "string",
                "description": ""
              },
              {
                "name": "metric_unit",
                "type": "string",
                "description": ""
              },
              {
                "name": "role_arn",
                "type": "string",
                "description": ""
              },
              {
                "name": "metric_timestamp",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "dynamo_db",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "table_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "payload_field",
                "type": "string",
                "description": ""
              },
              {
                "name": "range_key_field",
                "type": "string",
                "description": ""
              },
              {
                "name": "hash_key_field",
                "type": "string",
                "description": ""
              },
              {
                "name": "range_key_value",
                "type": "string",
                "description": ""
              },
              {
                "name": "range_key_type",
                "type": "string",
                "description": ""
              },
              {
                "name": "hash_key_type",
                "type": "string",
                "description": ""
              },
              {
                "name": "hash_key_value",
                "type": "string",
                "description": ""
              },
              {
                "name": "role_arn",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "dynamo_dbv2",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "put_item",
                "type": "object",
                "description": ""
              },
              {
                "name": "role_arn",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "elasticsearch",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "type",
                "type": "string",
                "description": ""
              },
              {
                "name": "index",
                "type": "string",
                "description": ""
              },
              {
                "name": "id",
                "type": "string",
                "description": ""
              },
              {
                "name": "endpoint",
                "type": "string",
                "description": ""
              },
              {
                "name": "role_arn",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "firehose",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "delivery_stream_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "role_arn",
                "type": "string",
                "description": ""
              },
              {
                "name": "separator",
                "type": "string",
                "description": ""
              },
              {
                "name": "batch_mode",
                "type": "boolean",
                "description": ""
              }
            ]
          },
          {
            "name": "http",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "confirmation_url",
                "type": "string",
                "description": ""
              },
              {
                "name": "headers",
                "type": "array",
                "description": ""
              },
              {
                "name": "url",
                "type": "string",
                "description": ""
              },
              {
                "name": "auth",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "iot_analytics",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "role_arn",
                "type": "string",
                "description": ""
              },
              {
                "name": "channel_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "batch_mode",
                "type": "boolean",
                "description": ""
              }
            ]
          },
          {
            "name": "iot_events",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "input_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "role_arn",
                "type": "string",
                "description": ""
              },
              {
                "name": "message_id",
                "type": "string",
                "description": ""
              },
              {
                "name": "batch_mode",
                "type": "boolean",
                "description": ""
              }
            ]
          },
          {
            "name": "iot_site_wise",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "role_arn",
                "type": "string",
                "description": ""
              },
              {
                "name": "put_asset_property_value_entries",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "kafka",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "destination_arn",
                "type": "string",
                "description": ""
              },
              {
                "name": "topic",
                "type": "string",
                "description": ""
              },
              {
                "name": "key",
                "type": "string",
                "description": ""
              },
              {
                "name": "partition",
                "type": "string",
                "description": ""
              },
              {
                "name": "client_properties",
                "type": "object",
                "description": ""
              },
              {
                "name": "headers",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "kinesis",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "partition_key",
                "type": "string",
                "description": ""
              },
              {
                "name": "stream_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "role_arn",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "lambda",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "function_arn",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "location",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "role_arn",
                "type": "string",
                "description": ""
              },
              {
                "name": "tracker_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "device_id",
                "type": "string",
                "description": ""
              },
              {
                "name": "latitude",
                "type": "string",
                "description": ""
              },
              {
                "name": "longitude",
                "type": "string",
                "description": ""
              },
              {
                "name": "timestamp",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "open_search",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "type",
                "type": "string",
                "description": ""
              },
              {
                "name": "index",
                "type": "string",
                "description": ""
              },
              {
                "name": "id",
                "type": "string",
                "description": ""
              },
              {
                "name": "endpoint",
                "type": "string",
                "description": ""
              },
              {
                "name": "role_arn",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "republish",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "qos",
                "type": "integer",
                "description": ""
              },
              {
                "name": "topic",
                "type": "string",
                "description": ""
              },
              {
                "name": "role_arn",
                "type": "string",
                "description": ""
              },
              {
                "name": "headers",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "s3",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "bucket_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "key",
                "type": "string",
                "description": ""
              },
              {
                "name": "role_arn",
                "type": "string",
                "description": ""
              },
              {
                "name": "canned_acl",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "sns",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "target_arn",
                "type": "string",
                "description": ""
              },
              {
                "name": "message_format",
                "type": "string",
                "description": ""
              },
              {
                "name": "role_arn",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "sqs",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "role_arn",
                "type": "string",
                "description": ""
              },
              {
                "name": "use_base64",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "queue_url",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "step_functions",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "execution_name_prefix",
                "type": "string",
                "description": ""
              },
              {
                "name": "state_machine_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "role_arn",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "timestream",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "role_arn",
                "type": "string",
                "description": ""
              },
              {
                "name": "database_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "table_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "dimensions",
                "type": "array",
                "description": ""
              },
              {
                "name": "timestamp",
                "type": "object",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "description",
        "type": "string",
        "description": ""
      },
      {
        "name": "aws_iot_sql_version",
        "type": "string",
        "description": ""
      },
      {
        "name": "actions",
        "type": "array",
        "description": ""
      },
      {
        "name": "sql",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
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
    "name": "rule_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html"><code>AWS::IoT::TopicRule</code></a>.

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
    <td><code>topic_rules</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="TopicRulePayload, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>topic_rules</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>topic_rules</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>topic_rules_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>topic_rules</code></td>
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

Gets all properties from an individual <code>topic_rule</code>.
```sql
SELECT
region,
arn,
rule_name,
topic_rule_payload,
tags
FROM awscc.iot.topic_rules
WHERE region = 'us-east-1' AND Identifier = '<RuleName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>topic_rules</code> in a region.
```sql
SELECT
region,
rule_name
FROM awscc.iot.topic_rules_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>topic_rule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iot.topic_rules (
 TopicRulePayload,
 region
)
SELECT 
'{{ TopicRulePayload }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iot.topic_rules (
 RuleName,
 TopicRulePayload,
 Tags,
 region
)
SELECT 
 '{{ RuleName }}',
 '{{ TopicRulePayload }}',
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
  - name: topic_rule
    props:
      - name: RuleName
        value: '{{ RuleName }}'
      - name: TopicRulePayload
        value:
          RuleDisabled: '{{ RuleDisabled }}'
          ErrorAction:
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
          Description: '{{ Description }}'
          AwsIotSqlVersion: '{{ AwsIotSqlVersion }}'
          Actions:
            - null
          Sql: '{{ Sql }}'
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
UPDATE awscc.iot.topic_rules
SET PatchDocument = string('{{ {
    "TopicRulePayload": topic_rule_payload,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<RuleName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iot.topic_rules
WHERE Identifier = '<RuleName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>topic_rules</code> resource, the following permissions are required:

### Create
```json
iam:PassRole,
iot:CreateTopicRule,
iot:GetTopicRule,
iot:TagResource,
iot:ListTagsForResource
```

### Read
```json
iot:GetTopicRule,
iot:ListTagsForResource
```

### Update
```json
iam:PassRole,
iot:GetTopicRule,
iot:ListTagsForResource,
iot:ReplaceTopicRule,
iot:TagResource,
iot:UntagResource
```

### Delete
```json
iot:GetTopicRule,
iot:DeleteTopicRule
```

### List
```json
iot:ListTopicRules
```
