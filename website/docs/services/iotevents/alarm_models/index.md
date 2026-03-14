---
title: alarm_models
hide_title: false
hide_table_of_contents: false
keywords:
  - alarm_models
  - iotevents
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

Creates, updates, deletes or gets an <code>alarm_model</code> resource or lists <code>alarm_models</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>alarm_models</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Represents an alarm model to monitor an ITE input attribute. You can use the alarm to get notified when the value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/create-alarms.html">Create an alarm model</a> in the <i>Developer Guide</i>.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotevents.alarm_models" /></td></tr>
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
    "name": "alarm_model_name",
    "type": "string",
    "description": "The name of the alarm model."
  },
  {
    "name": "alarm_model_description",
    "type": "string",
    "description": "The description of the alarm model."
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see <a href=\"https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html\">Amazon Resource Names (ARNs)</a> in the <i>General Reference</i>."
  },
  {
    "name": "key",
    "type": "string",
    "description": "An input attribute used as a key to create an alarm. ITE routes <a href=\"https://docs.aws.amazon.com/iotevents/latest/apireference/API_Input.html\">inputs</a> associated with this key to the alarm."
  },
  {
    "name": "severity",
    "type": "integer",
    "description": "A non-negative integer that reflects the severity level of the alarm."
  },
  {
    "name": "alarm_rule",
    "type": "object",
    "description": "Defines when your alarm is invoked.",
    "children": [
      {
        "name": "simple_rule",
        "type": "object",
        "description": "A rule that compares an input property value to a threshold value with a comparison operator.",
        "children": [
          {
            "name": "input_property",
            "type": "string",
            "description": "The value on the left side of the comparison operator. You can specify an ITE input attribute as an input property."
          },
          {
            "name": "comparison_operator",
            "type": "string",
            "description": "The comparison operator."
          },
          {
            "name": "threshold",
            "type": "string",
            "description": "The value on the right side of the comparison operator. You can enter a number or specify an ITE input attribute."
          }
        ]
      }
    ]
  },
  {
    "name": "alarm_event_actions",
    "type": "object",
    "description": "Contains information about one or more alarm actions.",
    "children": [
      {
        "name": "alarm_actions",
        "type": "array",
        "description": "Specifies one or more supported actions to receive notifications when the alarm state changes.",
        "children": [
          {
            "name": "dynamo_db",
            "type": "object",
            "description": "<details><summary>Defines an action to write to the Amazon DynamoDB table that you created. The standard action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the <a href=\"https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html\">payload</a>. One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify.</summary>You must use expressions for all parameters in <code>DynamoDBAction</code>. The expressions accept literals, operators, functions, references, and substitution templates.<br /><b>Examples</b><br />+  For literal values, the expressions must contain single quotes. For example, the value for the <code>hashKeyType</code> parameter can be <code>'STRING'</code>.<br />+  For references, you must specify either variables or input values. For example, the value for the <code>hashKeyField</code> parameter can be <code>$input.GreenhouseInput.name</code>.<br />+  For a substitution template, you must use <code>$&#123;&#125;</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.<br />In the following example, the value for the <code>hashKeyValue</code> parameter uses a substitution template.<br /><code>'$&#123;$input.GreenhouseInput.temperature * 6 / 5 + 32&#125; in Fahrenheit'</code><br />+  For a string concatenation, you must use <code>+</code>. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.<br />In the following example, the value for the <code>tableName</code> parameter uses a string concatenation.<br /><code>'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date</code><br />For more information, see <a href=\"https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html\">Expressions</a> in the <i>Developer Guide</i>.<br />If the defined payload type is a string, <code>DynamoDBAction</code> writes non-JSON data to the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text. The value for the <code>payloadField</code> parameter is <code><payload-field>_raw</code>.</details>",
            "children": [
              {
                "name": "hash_key_field",
                "type": "string",
                "description": "The name of the hash key (also called the partition key). The <code>hashKeyField</code> value must match the partition key of the target DynamoDB table."
              },
              {
                "name": "hash_key_type",
                "type": "string",
                "description": "<details><summary>The data type for the hash key (also called the partition key). You can specify the following values:</summary>+   <code>'STRING'</code> - The hash key is a string.<br />+   <code>'NUMBER'</code> - The hash key is a number.<br />If you don't specify <code>hashKeyType</code>, the default value is <code>'STRING'</code>.</details>"
              },
              {
                "name": "hash_key_value",
                "type": "string",
                "description": "The value of the hash key (also called the partition key)."
              },
              {
                "name": "operation",
                "type": "string",
                "description": "<details><summary>The type of operation to perform. You can specify the following values:</summary>+   <code>'INSERT'</code> - Insert data as a new item into the DynamoDB table. This item uses the specified hash key as a partition key. If you specified a range key, the item uses the range key as a sort key.<br />+   <code>'UPDATE'</code> - Update an existing item of the DynamoDB table with new data. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.<br />+   <code>'DELETE'</code> - Delete an existing item of the DynamoDB table. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.<br />If you don't specify this parameter, ITE triggers the <code>'INSERT'</code> operation.</details>"
              },
              {
                "name": "payload",
                "type": "object",
                "description": "<details><summary>Information needed to configure the payload.</summary>By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</details>"
              },
              {
                "name": "payload_field",
                "type": "string",
                "description": "<details><summary>The name of the DynamoDB column that receives the action payload.</summary>If you don't specify this parameter, the name of the DynamoDB column is <code>payload</code>.</details>"
              },
              {
                "name": "range_key_field",
                "type": "string",
                "description": "The name of the range key (also called the sort key). The <code>rangeKeyField</code> value must match the sort key of the target DynamoDB table."
              },
              {
                "name": "range_key_type",
                "type": "string",
                "description": "<details><summary>The data type for the range key (also called the sort key), You can specify the following values:</summary>+   <code>'STRING'</code> - The range key is a string.<br />+   <code>'NUMBER'</code> - The range key is number.<br />If you don't specify <code>rangeKeyField</code>, the default value is <code>'STRING'</code>.</details>"
              },
              {
                "name": "range_key_value",
                "type": "string",
                "description": "The value of the range key (also called the sort key)."
              },
              {
                "name": "table_name",
                "type": "string",
                "description": "The name of the DynamoDB table. The <code>tableName</code> value must match the table name of the target DynamoDB table."
              }
            ]
          },
          {
            "name": "dynamo_dbv2",
            "type": "object",
            "description": "<details><summary>Defines an action to write to the Amazon DynamoDB table that you created. The default action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the <a href=\"https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html\">payload</a>. A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.</summary>You must use expressions for all parameters in <code>DynamoDBv2Action</code>. The expressions accept literals, operators, functions, references, and substitution templates.<br /><b>Examples</b><br />+  For literal values, the expressions must contain single quotes. For example, the value for the <code>tableName</code> parameter can be <code>'GreenhouseTemperatureTable'</code>.<br />+  For references, you must specify either variables or input values. For example, the value for the <code>tableName</code> parameter can be <code>$variable.ddbtableName</code>.<br />+  For a substitution template, you must use <code>$&#123;&#125;</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.<br />In the following example, the value for the <code>contentExpression</code> parameter in <code>Payload</code> uses a substitution template.<br /><code>'&#123;\\\"sensorID\\\": \\\"$&#123;$input.GreenhouseInput.sensor_id&#125;\\\", \\\"temperature\\\": \\\"$&#123;$input.GreenhouseInput.temperature * 9 / 5 + 32&#125;\\\"&#125;'</code><br />+  For a string concatenation, you must use <code>+</code>. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.<br />In the following example, the value for the <code>tableName</code> parameter uses a string concatenation.<br /><code>'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date</code><br />For more information, see <a href=\"https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html\">Expressions</a> in the <i>Developer Guide</i>.<br />The value for the <code>type</code> parameter in <code>Payload</code> must be <code>JSON</code>.</details>",
            "children": [
              {
                "name": "payload",
                "type": "object",
                "description": "<details><summary>Information needed to configure the payload.</summary>By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</details>"
              },
              {
                "name": "table_name",
                "type": "string",
                "description": "The name of the DynamoDB table."
              }
            ]
          },
          {
            "name": "firehose",
            "type": "object",
            "description": "Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.",
            "children": [
              {
                "name": "delivery_stream_name",
                "type": "string",
                "description": "The name of the Kinesis Data Firehose delivery stream where the data is written."
              },
              {
                "name": "payload",
                "type": "object",
                "description": "You can configure the action payload when you send a message to an Amazon Data Firehose delivery stream."
              },
              {
                "name": "separator",
                "type": "string",
                "description": "A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream. Valid values are: '\\n' (newline), '\\t' (tab), '\\r\\n' (Windows newline), ',' (comma)."
              }
            ]
          },
          {
            "name": "iot_events",
            "type": "object",
            "description": "Sends an ITE input, passing in information about the detector model instance and the event that triggered the action.",
            "children": [
              {
                "name": "input_name",
                "type": "string",
                "description": "The name of the ITE input where the data is sent."
              },
              {
                "name": "payload",
                "type": "object",
                "description": "You can configure the action payload when you send a message to an ITE input."
              }
            ]
          },
          {
            "name": "iot_site_wise",
            "type": "object",
            "description": "<details><summary>Sends information about the detector model instance and the event that triggered the action to a specified asset property in ITSW.</summary>You must use expressions for all parameters in <code>IotSiteWiseAction</code>. The expressions accept literals, operators, functions, references, and substitutions templates.<br /><b>Examples</b><br />+  For literal values, the expressions must contain single quotes. For example, the value for the <code>propertyAlias</code> parameter can be <code>'/company/windfarm/3/turbine/7/temperature'</code>.<br />+  For references, you must specify either variables or input values. For example, the value for the <code>assetId</code> parameter can be <code>$input.TurbineInput.assetId1</code>.<br />+  For a substitution template, you must use <code>$&#123;&#125;</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.<br />In the following example, the value for the <code>propertyAlias</code> parameter uses a substitution template.<br /><code>'company/windfarm/$&#123;$input.TemperatureInput.sensorData.windfarmID&#125;/turbine/ $&#123;$input.TemperatureInput.sensorData.turbineID&#125;/temperature'</code><br />You must specify either <code>propertyAlias</code> or both <code>assetId</code> and <code>propertyId</code> to identify the target asset property in ITSW.<br />For more information, see <a href=\"https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html\">Expressions</a> in the <i>Developer Guide</i>.</details>",
            "children": [
              {
                "name": "asset_id",
                "type": "string",
                "description": "The ID of the asset that has the specified property."
              },
              {
                "name": "entry_id",
                "type": "string",
                "description": "A unique identifier for this entry. You can use the entry ID to track which data entry causes an error in case of failure. The default is a new unique identifier."
              },
              {
                "name": "property_alias",
                "type": "string",
                "description": "The alias of the asset property."
              },
              {
                "name": "property_id",
                "type": "string",
                "description": "The ID of the asset property."
              },
              {
                "name": "property_value",
                "type": "object",
                "description": "The value to send to the asset property. This value contains timestamp, quality, and value (TQV) information."
              }
            ]
          },
          {
            "name": "iot_topic_publish",
            "type": "object",
            "description": "Information required to publish the MQTT message through the IoT message broker.",
            "children": [
              {
                "name": "mqtt_topic",
                "type": "string",
                "description": "The MQTT topic of the message. You can use a string expression that includes variables (<code>$variable.<variable-name></code>) and input values (<code>$input.<input-name>.<path-to-datum></code>) as the topic string."
              },
              {
                "name": "payload",
                "type": "object",
                "description": "You can configure the action payload when you publish a message to an IoTCore topic."
              }
            ]
          },
          {
            "name": "lambda",
            "type": "object",
            "description": "Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.",
            "children": [
              {
                "name": "function_arn",
                "type": "string",
                "description": "The ARN of the Lambda function that is executed."
              },
              {
                "name": "payload",
                "type": "object",
                "description": "You can configure the action payload when you send a message to a Lambda function."
              }
            ]
          },
          {
            "name": "sns",
            "type": "object",
            "description": "Information required to publish the Amazon SNS message.",
            "children": [
              {
                "name": "payload",
                "type": "object",
                "description": "You can configure the action payload when you send a message as an Amazon SNS push notification."
              },
              {
                "name": "target_arn",
                "type": "string",
                "description": "The ARN of the Amazon SNS target where the message is sent."
              }
            ]
          },
          {
            "name": "sqs",
            "type": "object",
            "description": "Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue.",
            "children": [
              {
                "name": "payload",
                "type": "object",
                "description": "You can configure the action payload when you send a message to an Amazon SQS queue."
              },
              {
                "name": "queue_url",
                "type": "string",
                "description": "The URL of the SQS queue where the data is written."
              },
              {
                "name": "use_base64",
                "type": "boolean",
                "description": "Set this to TRUE if you want the data to be base-64 encoded before it is written to the queue. Otherwise, set this to FALSE."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "alarm_capabilities",
    "type": "object",
    "description": "Contains the configuration information of alarm state changes.",
    "children": [
      {
        "name": "initialization_configuration",
        "type": "object",
        "description": "Specifies the default alarm state. The configuration applies to all alarms that were created based on this alarm model.",
        "children": [
          {
            "name": "disabled_on_initialization",
            "type": "boolean",
            "description": "The value must be <code>TRUE</code> or <code>FALSE</code>. If <code>FALSE</code>, all alarm instances created based on the alarm model are activated. The default value is <code>TRUE</code>."
          }
        ]
      },
      {
        "name": "acknowledge_flow",
        "type": "object",
        "description": "Specifies whether to get notified for alarm state changes.",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": "The value must be <code>TRUE</code> or <code>FALSE</code>. If <code>TRUE</code>, you receive a notification when the alarm state changes. You must choose to acknowledge the notification before the alarm state can return to <code>NORMAL</code>. If <code>FALSE</code>, you won't receive notifications. The alarm automatically changes to the <code>NORMAL</code> state when the input property value returns to the specified range."
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "<details><summary>A list of key-value pairs that contain metadata for the alarm model. The tags help you manage the alarm model. For more information, see <a href=\"https://docs.aws.amazon.com/iotevents/latest/developerguide/tagging-iotevents.html\">Tagging your resources</a> in the <i>Developer Guide</i>.</summary>You can create up to 50 tags for one alarm model.</details>",
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
    "name": "alarm_model_name",
    "type": "string",
    "description": "The name of the alarm model."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-alarmmodel.html"><code>AWS::IoTEvents::AlarmModel</code></a>.

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
    <td><code>alarm_models</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="RoleArn, AlarmRule, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>alarm_models</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>alarm_models</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>alarm_models_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>alarm_models</code></td>
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

Gets all properties from an individual <code>alarm_model</code>.
```sql
SELECT
  region,
  alarm_model_name,
  alarm_model_description,
  role_arn,
  key,
  severity,
  alarm_rule,
  alarm_event_actions,
  alarm_capabilities,
  tags
FROM awscc.iotevents.alarm_models
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ alarm_model_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>alarm_models</code> in a region.
```sql
SELECT
  region,
  alarm_model_name
FROM awscc.iotevents.alarm_models_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>alarm_model</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iotevents.alarm_models (
  RoleArn,
  AlarmRule,
  region
)
SELECT
  '{{ role_arn }}',
  '{{ alarm_rule }}',
  '{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iotevents.alarm_models (
  AlarmModelName,
  AlarmModelDescription,
  RoleArn,
  Key,
  Severity,
  AlarmRule,
  AlarmEventActions,
  AlarmCapabilities,
  Tags,
  region
)
SELECT
  '{{ alarm_model_name }}',
  '{{ alarm_model_description }}',
  '{{ role_arn }}',
  '{{ key }}',
  '{{ severity }}',
  '{{ alarm_rule }}',
  '{{ alarm_event_actions }}',
  '{{ alarm_capabilities }}',
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
  - name: alarm_model
    props:
      - name: alarm_model_name
        value: '{{ alarm_model_name }}'
      - name: alarm_model_description
        value: '{{ alarm_model_description }}'
      - name: role_arn
        value: '{{ role_arn }}'
      - name: key
        value: '{{ key }}'
      - name: severity
        value: '{{ severity }}'
      - name: alarm_rule
        value:
          simple_rule:
            input_property: '{{ input_property }}'
            comparison_operator: '{{ comparison_operator }}'
            threshold: '{{ threshold }}'
      - name: alarm_event_actions
        value:
          alarm_actions:
            - dynamo_db:
                hash_key_field: '{{ hash_key_field }}'
                hash_key_type: '{{ hash_key_type }}'
                hash_key_value: '{{ hash_key_value }}'
                operation: '{{ operation }}'
                payload:
                  content_expression: '{{ content_expression }}'
                  type: '{{ type }}'
                payload_field: '{{ payload_field }}'
                range_key_field: '{{ range_key_field }}'
                range_key_type: '{{ range_key_type }}'
                range_key_value: '{{ range_key_value }}'
                table_name: '{{ table_name }}'
              dynamo_dbv2:
                payload: null
                table_name: '{{ table_name }}'
              firehose:
                delivery_stream_name: '{{ delivery_stream_name }}'
                payload: null
                separator: '{{ separator }}'
              iot_events:
                input_name: '{{ input_name }}'
                payload: null
              iot_site_wise:
                asset_id: '{{ asset_id }}'
                entry_id: '{{ entry_id }}'
                property_alias: '{{ property_alias }}'
                property_id: '{{ property_id }}'
                property_value:
                  quality: '{{ quality }}'
                  timestamp:
                    offset_in_nanos: '{{ offset_in_nanos }}'
                    time_in_seconds: '{{ time_in_seconds }}'
                  value:
                    boolean_value: '{{ boolean_value }}'
                    double_value: '{{ double_value }}'
                    integer_value: '{{ integer_value }}'
                    string_value: '{{ string_value }}'
              iot_topic_publish:
                mqtt_topic: '{{ mqtt_topic }}'
                payload: null
              lambda:
                function_arn: '{{ function_arn }}'
                payload: null
              sns:
                payload: null
                target_arn: '{{ target_arn }}'
              sqs:
                payload: null
                queue_url: '{{ queue_url }}'
                use_base64: '{{ use_base64 }}'
      - name: alarm_capabilities
        value:
          initialization_configuration:
            disabled_on_initialization: '{{ disabled_on_initialization }}'
          acknowledge_flow:
            enabled: '{{ enabled }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>alarm_model</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iotevents.alarm_models
SET PatchDocument = string('{{ {
    "AlarmModelDescription": alarm_model_description,
    "RoleArn": role_arn,
    "Severity": severity,
    "AlarmRule": alarm_rule,
    "AlarmEventActions": alarm_event_actions,
    "AlarmCapabilities": alarm_capabilities,
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ alarm_model_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotevents.alarm_models
WHERE
  Identifier = '{{ alarm_model_name }}' AND
  region = '{{ region }}';
```

## Permissions

To operate on the <code>alarm_models</code> resource, the following permissions are required:

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
iotevents:CreateAlarmModel,
iotevents:UpdateInputRouting,
iotevents:DescribeAlarmModel,
iotevents:ListTagsForResource,
iotevents:TagResource,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
iotevents:DescribeAlarmModel,
iotevents:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
iotevents:UpdateAlarmModel,
iotevents:UpdateInputRouting,
iotevents:DescribeAlarmModel,
iotevents:ListTagsForResource,
iotevents:UntagResource,
iotevents:TagResource,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
iotevents:DeleteAlarmModel,
iotevents:DescribeAlarmModel
```

</TabItem>
<TabItem value="list">

```json
iotevents:ListAlarmModels
```

</TabItem>
</Tabs>