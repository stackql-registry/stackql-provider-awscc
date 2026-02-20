---
title: detector_models
hide_title: false
hide_table_of_contents: false
keywords:
  - detector_models
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

Creates, updates, deletes or gets a <code>detector_model</code> resource or lists <code>detector_models</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>detector_models</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::IoTEvents::DetectorModel resource creates a detector model. You create a &#42;detector model&#42; (a model of your equipment or process) using &#42;states&#42;. For each state, you define conditional (Boolean) logic that evaluates the incoming inputs to detect significant events. When an event is detected, it can change the state or trigger custom-built or predefined actions using other AWS services. You can define additional events that trigger actions when entering or exiting a state and, optionally, when a condition is met. For more information, see &#91;How to Use&#93;(https://docs.aws.amazon.com/iotevents/latest/developerguide/how-to-use-iotevents.html) in the &#42;Developer Guide&#42;.<br />When you successfully update a detector model (using the ITE console, ITE API or CLI commands, or CFN) all detector instances created by the model are reset to their initial states. (The detector's &#96;&#96;state&#96;&#96;, and the values of any variables and timers are reset.)<br />When you successfully update a detector model (using the ITE console, ITE API or CLI commands, or CFN) the version number of the detector model is incremented. (A detector model with version number 1 before the update has version number 2 after the update succeeds.)<br />If you attempt to update a detector model using CFN and the update does not succeed, the system may, in some cases, restore the original detector model. When this occurs, the detector model's version is incremented twice (for example, from version 1 to version 3) and the detector instances are reset.<br />Also, be aware that if you attempt to update several detector models at once using CFN, some updates may succeed and others fail. In this case, the effects on each detector model's detector instances and version number depend on whether the update succeeded or failed, with the results as stated.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotevents.detector_models" /></td></tr>
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
    "name": "detector_model_definition",
    "type": "object",
    "description": "Information that defines how a detector operates.",
    "children": [
      {
        "name": "initial_state_name",
        "type": "string",
        "description": "The state that is entered at the creation of each detector (instance)."
      },
      {
        "name": "states",
        "type": "array",
        "description": "Information about the states of the detector.",
        "children": [
          {
            "name": "on_enter",
            "type": "object",
            "description": "When entering this state, perform these &#96;&#96;actions&#96;&#96; if the &#96;&#96;condition&#96;&#96; is TRUE.",
            "children": [
              {
                "name": "events",
                "type": "array",
                "description": "Specifies the actions that are performed when the state is entered and the &#96;&#96;condition&#96;&#96; is &#96;&#96;TRUE&#96;&#96;."
              }
            ]
          },
          {
            "name": "on_exit",
            "type": "object",
            "description": "When exiting this state, perform these &#96;&#96;actions&#96;&#96; if the specified &#96;&#96;condition&#96;&#96; is &#96;&#96;TRUE&#96;&#96;.",
            "children": [
              {
                "name": "events",
                "type": "array",
                "description": "Specifies the &#96;&#96;actions&#96;&#96; that are performed when the state is exited and the &#96;&#96;condition&#96;&#96; is &#96;&#96;TRUE&#96;&#96;."
              }
            ]
          },
          {
            "name": "on_input",
            "type": "object",
            "description": "When an input is received and the &#96;&#96;condition&#96;&#96; is TRUE, perform the specified &#96;&#96;actions&#96;&#96;.",
            "children": [
              {
                "name": "events",
                "type": "array",
                "description": "Specifies the actions performed when the &#96;&#96;condition&#96;&#96; evaluates to TRUE."
              },
              {
                "name": "transition_events",
                "type": "array",
                "description": "Specifies the actions performed, and the next state entered, when a &#96;&#96;condition&#96;&#96; evaluates to TRUE."
              }
            ]
          },
          {
            "name": "state_name",
            "type": "string",
            "description": "The name of the state."
          }
        ]
      }
    ]
  },
  {
    "name": "detector_model_description",
    "type": "string",
    "description": "A brief description of the detector model."
  },
  {
    "name": "detector_model_name",
    "type": "string",
    "description": "The name of the detector model."
  },
  {
    "name": "evaluation_method",
    "type": "string",
    "description": "Information about the order in which events are evaluated and how actions are executed."
  },
  {
    "name": "key",
    "type": "string",
    "description": "The value used to identify a detector instance. When a device or system sends input, a new detector instance with a unique key value is created. ITE can continue to route input to its corresponding detector instance based on this identifying information. <br />This parameter uses a JSON-path expression to select the attribute-value pair in the message payload that is used for identification. To route the message to the correct detector instance, the device must send a message payload that contains the same attribute-value."
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "The ARN of the role that grants permission to ITE to perform its operations."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.<br />For more information, see &#91;Tag&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).",
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
    "name": "detector_model_name",
    "type": "string",
    "description": "The name of the detector model."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-detectormodel.html"><code>AWS::IoTEvents::DetectorModel</code></a>.

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
    <td><code>detector_models</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DetectorModelDefinition, RoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>detector_models</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>detector_models</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>detector_models_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>detector_models</code></td>
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

Gets all properties from an individual <code>detector_model</code>.
```sql
SELECT
region,
detector_model_definition,
detector_model_description,
detector_model_name,
evaluation_method,
key,
role_arn,
tags
FROM awscc.iotevents.detector_models
WHERE region = 'us-east-1' AND Identifier = '<DetectorModelName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>detector_models</code> in a region.
```sql
SELECT
region,
detector_model_name
FROM awscc.iotevents.detector_models_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>detector_model</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iotevents.detector_models (
 DetectorModelDefinition,
 RoleArn,
 region
)
SELECT 
'{{ DetectorModelDefinition }}',
 '{{ RoleArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iotevents.detector_models (
 DetectorModelDefinition,
 DetectorModelDescription,
 DetectorModelName,
 EvaluationMethod,
 Key,
 RoleArn,
 Tags,
 region
)
SELECT 
 '{{ DetectorModelDefinition }}',
 '{{ DetectorModelDescription }}',
 '{{ DetectorModelName }}',
 '{{ EvaluationMethod }}',
 '{{ Key }}',
 '{{ RoleArn }}',
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
  - name: detector_model
    props:
      - name: DetectorModelDefinition
        value:
          InitialStateName: '{{ InitialStateName }}'
          States:
            - OnEnter:
                Events:
                  - Actions:
                      - ClearTimer:
                          TimerName: '{{ TimerName }}'
                        DynamoDB:
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
                        ResetTimer:
                          TimerName: '{{ TimerName }}'
                        SetTimer:
                          DurationExpression: '{{ DurationExpression }}'
                          Seconds: '{{ Seconds }}'
                          TimerName: '{{ TimerName }}'
                        SetVariable:
                          Value: '{{ Value }}'
                          VariableName: '{{ VariableName }}'
                        Sns:
                          Payload: null
                          TargetArn: '{{ TargetArn }}'
                        Sqs:
                          Payload: null
                          QueueUrl: '{{ QueueUrl }}'
                          UseBase64: '{{ UseBase64 }}'
                    Condition: '{{ Condition }}'
                    EventName: '{{ EventName }}'
              OnExit:
                Events:
                  - null
              OnInput:
                Events:
                  - null
                TransitionEvents:
                  - Actions:
                      - null
                    Condition: '{{ Condition }}'
                    EventName: '{{ EventName }}'
                    NextState: '{{ NextState }}'
              StateName: '{{ StateName }}'
      - name: DetectorModelDescription
        value: '{{ DetectorModelDescription }}'
      - name: DetectorModelName
        value: '{{ DetectorModelName }}'
      - name: EvaluationMethod
        value: '{{ EvaluationMethod }}'
      - name: Key
        value: '{{ Key }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>detector_model</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iotevents.detector_models
SET PatchDocument = string('{{ {
    "DetectorModelDefinition": detector_model_definition,
    "DetectorModelDescription": detector_model_description,
    "EvaluationMethod": evaluation_method,
    "RoleArn": role_arn,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<DetectorModelName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotevents.detector_models
WHERE Identifier = '<DetectorModelName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>detector_models</code> resource, the following permissions are required:

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
iotevents:CreateDetectorModel,
iotevents:UpdateInputRouting,
iotevents:DescribeDetectorModel,
iotevents:ListTagsForResource,
iotevents:TagResource,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
iotevents:DescribeDetectorModel,
iotevents:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
iotevents:UpdateDetectorModel,
iotevents:UpdateInputRouting,
iotevents:DescribeDetectorModel,
iotevents:ListTagsForResource,
iotevents:UntagResource,
iotevents:TagResource,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
iotevents:DeleteDetectorModel,
iotevents:DescribeDetectorModel
```

</TabItem>
<TabItem value="list">

```json
iotevents:ListDetectorModels
```

</TabItem>
</Tabs>