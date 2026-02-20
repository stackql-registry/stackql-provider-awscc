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
<tr><td><b>Description</b></td><td>Represents an alarm model to monitor an ITE input attribute. You can use the alarm to get notified when the value is outside a specified range. For more information, see &#91;Create an alarm model&#93;(https://docs.aws.amazon.com/iotevents/latest/developerguide/create-alarms.html) in the &#42;Developer Guide&#42;.</td></tr>
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
    "description": "The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see &#91;Amazon Resource Names (ARNs)&#93;(https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the &#42;General Reference&#42;."
  },
  {
    "name": "key",
    "type": "string",
    "description": "An input attribute used as a key to create an alarm. ITE routes &#91;inputs&#93;(https://docs.aws.amazon.com/iotevents/latest/apireference/API&#95;Input.html) associated with this key to the alarm."
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
            "description": "Defines an action to write to the Amazon DynamoDB table that you created. The standard action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the &#91;payload&#93;(https://docs.aws.amazon.com/iotevents/latest/apireference/API&#95;Payload.html). One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify.<br />You must use expressions for all parameters in &#96;&#96;DynamoDBAction&#96;&#96;. The expressions accept literals, operators, functions, references, and substitution templates.<br />&#42;&#42;Examples&#42;&#42;<br />+ For literal values, the expressions must contain single quotes. For example, the value for the &#96;&#96;hashKeyType&#96;&#96; parameter can be &#96;&#96;'STRING'&#96;&#96;.<br />+ For references, you must specify either variables or input values. For example, the value for the &#96;&#96;hashKeyField&#96;&#96; parameter can be &#96;&#96;$input.GreenhouseInput.name&#96;&#96;.<br />+ For a substitution template, you must use &#96;&#96;$&#123;&#125;&#96;&#96;, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.<br />In the following example, the value for the &#96;&#96;hashKeyValue&#96;&#96; parameter uses a substitution template. <br />&#96;&#96;'$&#123;$input.GreenhouseInput.temperature &#42; 6 / 5 + 32&#125; in Fahrenheit'&#96;&#96; <br />+ For a string concatenation, you must use &#96;&#96;+&#96;&#96;. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.<br />In the following example, the value for the &#96;&#96;tableName&#96;&#96; parameter uses a string concatenation. <br />&#96;&#96;'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date&#96;&#96; <br /><br />For more information, see &#91;Expressions&#93;(https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the &#42;Developer Guide&#42;.<br />If the defined payload type is a string, &#96;&#96;DynamoDBAction&#96;&#96; writes non-JSON data to the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text. The value for the &#96;&#96;payloadField&#96;&#96; parameter is &#96;&#96;&lt;payload-field&gt;&#95;raw&#96;&#96;.",
            "children": [
              {
                "name": "hash_key_field",
                "type": "string",
                "description": "The name of the hash key (also called the partition key). The &#96;&#96;hashKeyField&#96;&#96; value must match the partition key of the target DynamoDB table."
              },
              {
                "name": "hash_key_type",
                "type": "string",
                "description": "The data type for the hash key (also called the partition key). You can specify the following values:<br />+ &#96;&#96;'STRING'&#96;&#96; - The hash key is a string.<br />+ &#96;&#96;'NUMBER'&#96;&#96; - The hash key is a number.<br /><br />If you don't specify &#96;&#96;hashKeyType&#96;&#96;, the default value is &#96;&#96;'STRING'&#96;&#96;."
              },
              {
                "name": "hash_key_value",
                "type": "string",
                "description": "The value of the hash key (also called the partition key)."
              },
              {
                "name": "operation",
                "type": "string",
                "description": "The type of operation to perform. You can specify the following values: <br />+ &#96;&#96;'INSERT'&#96;&#96; - Insert data as a new item into the DynamoDB table. This item uses the specified hash key as a partition key. If you specified a range key, the item uses the range key as a sort key.<br />+ &#96;&#96;'UPDATE'&#96;&#96; - Update an existing item of the DynamoDB table with new data. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.<br />+ &#96;&#96;'DELETE'&#96;&#96; - Delete an existing item of the DynamoDB table. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.<br /><br />If you don't specify this parameter, ITE triggers the &#96;&#96;'INSERT'&#96;&#96; operation."
              },
              {
                "name": "payload",
                "type": "object",
                "description": "Information needed to configure the payload.<br />By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use &#96;&#96;contentExpression&#96;&#96;."
              },
              {
                "name": "payload_field",
                "type": "string",
                "description": "The name of the DynamoDB column that receives the action payload.<br />If you don't specify this parameter, the name of the DynamoDB column is &#96;&#96;payload&#96;&#96;."
              },
              {
                "name": "range_key_field",
                "type": "string",
                "description": "The name of the range key (also called the sort key). The &#96;&#96;rangeKeyField&#96;&#96; value must match the sort key of the target DynamoDB table."
              },
              {
                "name": "range_key_type",
                "type": "string",
                "description": "The data type for the range key (also called the sort key), You can specify the following values:<br />+ &#96;&#96;'STRING'&#96;&#96; - The range key is a string.<br />+ &#96;&#96;'NUMBER'&#96;&#96; - The range key is number.<br /><br />If you don't specify &#96;&#96;rangeKeyField&#96;&#96;, the default value is &#96;&#96;'STRING'&#96;&#96;."
              },
              {
                "name": "range_key_value",
                "type": "string",
                "description": "The value of the range key (also called the sort key)."
              },
              {
                "name": "table_name",
                "type": "string",
                "description": "The name of the DynamoDB table. The &#96;&#96;tableName&#96;&#96; value must match the table name of the target DynamoDB table."
              }
            ]
          },
          {
            "name": "dynamo_dbv2",
            "type": "object",
            "description": "Defines an action to write to the Amazon DynamoDB table that you created. The default action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the &#91;payload&#93;(https://docs.aws.amazon.com/iotevents/latest/apireference/API&#95;Payload.html). A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.<br />You must use expressions for all parameters in &#96;&#96;DynamoDBv2Action&#96;&#96;. The expressions accept literals, operators, functions, references, and substitution templates.<br />&#42;&#42;Examples&#42;&#42;<br />+ For literal values, the expressions must contain single quotes. For example, the value for the &#96;&#96;tableName&#96;&#96; parameter can be &#96;&#96;'GreenhouseTemperatureTable'&#96;&#96;.<br />+ For references, you must specify either variables or input values. For example, the value for the &#96;&#96;tableName&#96;&#96; parameter can be &#96;&#96;$variable.ddbtableName&#96;&#96;.<br />+ For a substitution template, you must use &#96;&#96;$&#123;&#125;&#96;&#96;, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.<br />In the following example, the value for the &#96;&#96;contentExpression&#96;&#96; parameter in &#96;&#96;Payload&#96;&#96; uses a substitution template. <br />&#96;&#96;'&#123;\\\"sensorID\\\": \\\"$&#123;$input.GreenhouseInput.sensor&#95;id&#125;\\\", \\\"temperature\\\": \\\"$&#123;$input.GreenhouseInput.temperature &#42; 9 / 5 + 32&#125;\\\"&#125;'&#96;&#96; <br />+ For a string concatenation, you must use &#96;&#96;+&#96;&#96;. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.<br />In the following example, the value for the &#96;&#96;tableName&#96;&#96; parameter uses a string concatenation. <br />&#96;&#96;'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date&#96;&#96; <br /><br />For more information, see &#91;Expressions&#93;(https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the &#42;Developer Guide&#42;.<br />The value for the &#96;&#96;type&#96;&#96; parameter in &#96;&#96;Payload&#96;&#96; must be &#96;&#96;JSON&#96;&#96;.",
            "children": [
              {
                "name": "payload",
                "type": "object",
                "description": "Information needed to configure the payload.<br />By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use &#96;&#96;contentExpression&#96;&#96;."
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
            "description": "Sends information about the detector model instance and the event that triggered the action to a specified asset property in ITSW.<br />You must use expressions for all parameters in &#96;&#96;IotSiteWiseAction&#96;&#96;. The expressions accept literals, operators, functions, references, and substitutions templates.<br />&#42;&#42;Examples&#42;&#42;<br />+ For literal values, the expressions must contain single quotes. For example, the value for the &#96;&#96;propertyAlias&#96;&#96; parameter can be &#96;&#96;'/company/windfarm/3/turbine/7/temperature'&#96;&#96;.<br />+ For references, you must specify either variables or input values. For example, the value for the &#96;&#96;assetId&#96;&#96; parameter can be &#96;&#96;$input.TurbineInput.assetId1&#96;&#96;.<br />+ For a substitution template, you must use &#96;&#96;$&#123;&#125;&#96;&#96;, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.<br />In the following example, the value for the &#96;&#96;propertyAlias&#96;&#96; parameter uses a substitution template. <br />&#96;&#96;'company/windfarm/$&#123;$input.TemperatureInput.sensorData.windfarmID&#125;/turbine/ $&#123;$input.TemperatureInput.sensorData.turbineID&#125;/temperature'&#96;&#96; <br /><br />You must specify either &#96;&#96;propertyAlias&#96;&#96; or both &#96;&#96;assetId&#96;&#96; and &#96;&#96;propertyId&#96;&#96; to identify the target asset property in ITSW.<br />For more information, see &#91;Expressions&#93;(https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the &#42;Developer Guide&#42;.",
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
                "description": "The MQTT topic of the message. You can use a string expression that includes variables (&#96;&#96;$variable.&lt;variable-name&gt;&#96;&#96;) and input values (&#96;&#96;$input.&lt;input-name&gt;.&lt;path-to-datum&gt;&#96;&#96;) as the topic string."
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
            "description": "The value must be &#96;&#96;TRUE&#96;&#96; or &#96;&#96;FALSE&#96;&#96;. If &#96;&#96;FALSE&#96;&#96;, all alarm instances created based on the alarm model are activated. The default value is &#96;&#96;TRUE&#96;&#96;."
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
            "description": "The value must be &#96;&#96;TRUE&#96;&#96; or &#96;&#96;FALSE&#96;&#96;. If &#96;&#96;TRUE&#96;&#96;, you receive a notification when the alarm state changes. You must choose to acknowledge the notification before the alarm state can return to &#96;&#96;NORMAL&#96;&#96;. If &#96;&#96;FALSE&#96;&#96;, you won't receive notifications. The alarm automatically changes to the &#96;&#96;NORMAL&#96;&#96; state when the input property value returns to the specified range."
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of key-value pairs that contain metadata for the alarm model. The tags help you manage the alarm model. For more information, see &#91;Tagging your resources&#93;(https://docs.aws.amazon.com/iotevents/latest/developerguide/tagging-iotevents.html) in the &#42;Developer Guide&#42;.<br />You can create up to 50 tags for one alarm model.",
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
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>alarm_models</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
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
WHERE region = 'us-east-1' AND data__Identifier = '<AlarmModelName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>alarm_models</code> in a region.
```sql
SELECT
region,
alarm_model_name
FROM awscc.iotevents.alarm_models_list_only
WHERE region = 'us-east-1';
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
'{{ RoleArn }}',
 '{{ AlarmRule }}',
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
 '{{ AlarmModelName }}',
 '{{ AlarmModelDescription }}',
 '{{ RoleArn }}',
 '{{ Key }}',
 '{{ Severity }}',
 '{{ AlarmRule }}',
 '{{ AlarmEventActions }}',
 '{{ AlarmCapabilities }}',
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
  - name: alarm_model
    props:
      - name: AlarmModelName
        value: '{{ AlarmModelName }}'
      - name: AlarmModelDescription
        value: '{{ AlarmModelDescription }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: Key
        value: '{{ Key }}'
      - name: Severity
        value: '{{ Severity }}'
      - name: AlarmRule
        value:
          SimpleRule:
            InputProperty: '{{ InputProperty }}'
            ComparisonOperator: '{{ ComparisonOperator }}'
            Threshold: '{{ Threshold }}'
      - name: AlarmEventActions
        value:
          AlarmActions:
            - DynamoDB:
                HashKeyField: '{{ HashKeyField }}'
                HashKeyType: '{{ HashKeyType }}'
                HashKeyValue: '{{ HashKeyValue }}'
                Operation: '{{ Operation }}'
                Payload:
                  ContentExpression: '{{ ContentExpression }}'
                  Type: '{{ Type }}'
                PayloadField: '{{ PayloadField }}'
                RangeKeyField: '{{ RangeKeyField }}'
                RangeKeyType: '{{ RangeKeyType }}'
                RangeKeyValue: '{{ RangeKeyValue }}'
                TableName: '{{ TableName }}'
              DynamoDBv2:
                Payload: null
                TableName: '{{ TableName }}'
              Firehose:
                DeliveryStreamName: '{{ DeliveryStreamName }}'
                Payload: null
                Separator: '{{ Separator }}'
              IotEvents:
                InputName: '{{ InputName }}'
                Payload: null
              IotSiteWise:
                AssetId: '{{ AssetId }}'
                EntryId: '{{ EntryId }}'
                PropertyAlias: '{{ PropertyAlias }}'
                PropertyId: '{{ PropertyId }}'
                PropertyValue:
                  Quality: '{{ Quality }}'
                  Timestamp:
                    OffsetInNanos: '{{ OffsetInNanos }}'
                    TimeInSeconds: '{{ TimeInSeconds }}'
                  Value:
                    BooleanValue: '{{ BooleanValue }}'
                    DoubleValue: '{{ DoubleValue }}'
                    IntegerValue: '{{ IntegerValue }}'
                    StringValue: '{{ StringValue }}'
              IotTopicPublish:
                MqttTopic: '{{ MqttTopic }}'
                Payload: null
              Lambda:
                FunctionArn: '{{ FunctionArn }}'
                Payload: null
              Sns:
                Payload: null
                TargetArn: '{{ TargetArn }}'
              Sqs:
                Payload: null
                QueueUrl: '{{ QueueUrl }}'
                UseBase64: '{{ UseBase64 }}'
      - name: AlarmCapabilities
        value:
          InitializationConfiguration:
            DisabledOnInitialization: '{{ DisabledOnInitialization }}'
          AcknowledgeFlow:
            Enabled: '{{ Enabled }}'
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
UPDATE awscc.iotevents.alarm_models
SET data__PatchDocument = string('{{ {
    "AlarmModelDescription": alarm_model_description,
    "RoleArn": role_arn,
    "Severity": severity,
    "AlarmRule": alarm_rule,
    "AlarmEventActions": alarm_event_actions,
    "AlarmCapabilities": alarm_capabilities,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<AlarmModelName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotevents.alarm_models
WHERE data__Identifier = '<AlarmModelName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>alarm_models</code> resource, the following permissions are required:

### Create
```json
iotevents:CreateAlarmModel,
iotevents:UpdateInputRouting,
iotevents:DescribeAlarmModel,
iotevents:ListTagsForResource,
iotevents:TagResource,
iam:PassRole
```

### Read
```json
iotevents:DescribeAlarmModel,
iotevents:ListTagsForResource
```

### Update
```json
iotevents:UpdateAlarmModel,
iotevents:UpdateInputRouting,
iotevents:DescribeAlarmModel,
iotevents:ListTagsForResource,
iotevents:UntagResource,
iotevents:TagResource,
iam:PassRole
```

### Delete
```json
iotevents:DeleteAlarmModel,
iotevents:DescribeAlarmModel
```

### List
```json
iotevents:ListAlarmModels
```
