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
<tr><td><b>Description</b></td><td><details><summary>The AWS::IoTEvents::DetectorModel resource creates a detector model. You create a <i>detector model</i> (a model of your equipment or process) using <i>states</i>. For each state, you define conditional (Boolean) logic that evaluates the incoming inputs to detect significant events. When an event is detected, it can change the state or trigger custom-built or predefined actions using other AWS services. You can define additional events that trigger actions when entering or exiting a state and, optionally, when a condition is met. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/how-to-use-iotevents.html">How to Use</a> in the <i>Developer Guide</i>.</summary>When you successfully update a detector model (using the ITE console, ITE API or CLI commands, or CFN) all detector instances created by the model are reset to their initial states. (The detector's <code>state</code>, and the values of any variables and timers are reset.)<br />When you successfully update a detector model (using the ITE console, ITE API or CLI commands, or CFN) the version number of the detector model is incremented. (A detector model with version number 1 before the update has version number 2 after the update succeeds.)<br />If you attempt to update a detector model using CFN and the update does not succeed, the system may, in some cases, restore the original detector model. When this occurs, the detector model's version is incremented twice (for example, from version 1 to version 3) and the detector instances are reset.<br />Also, be aware that if you attempt to update several detector models at once using CFN, some updates may succeed and others fail. In this case, the effects on each detector model's detector instances and version number depend on whether the update succeeded or failed, with the results as stated.</details></td></tr>
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
            "description": "When entering this state, perform these <code>actions</code> if the <code>condition</code> is TRUE.",
            "children": [
              {
                "name": "events",
                "type": "array",
                "description": "Specifies the actions that are performed when the state is entered and the <code>condition</code> is <code>TRUE</code>."
              }
            ]
          },
          {
            "name": "on_exit",
            "type": "object",
            "description": "When exiting this state, perform these <code>actions</code> if the specified <code>condition</code> is <code>TRUE</code>.",
            "children": [
              {
                "name": "events",
                "type": "array",
                "description": "Specifies the <code>actions</code> that are performed when the state is exited and the <code>condition</code> is <code>TRUE</code>."
              }
            ]
          },
          {
            "name": "on_input",
            "type": "object",
            "description": "When an input is received and the <code>condition</code> is TRUE, perform the specified <code>actions</code>.",
            "children": [
              {
                "name": "events",
                "type": "array",
                "description": "Specifies the actions performed when the <code>condition</code> evaluates to TRUE."
              },
              {
                "name": "transition_events",
                "type": "array",
                "description": "Specifies the actions performed, and the next state entered, when a <code>condition</code> evaluates to TRUE."
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
    "description": "<details><summary>The value used to identify a detector instance. When a device or system sends input, a new detector instance with a unique key value is created. ITE can continue to route input to its corresponding detector instance based on this identifying information.</summary>This parameter uses a JSON-path expression to select the attribute-value pair in the message payload that is used for identification. To route the message to the correct detector instance, the device must send a message payload that contains the same attribute-value.</details>"
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "The ARN of the role that grants permission to ITE to perform its operations."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "<details><summary>An array of key-value pairs to apply to this resource.</summary>For more information, see <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html\">Tag</a>.</details>",
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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ detector_model_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>detector_models</code> in a region.
```sql
SELECT
  region,
  detector_model_name
FROM awscc.iotevents.detector_models_list_only
WHERE
  region = '{{ region }}';
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
  '{{ detector_model_definition }}',
  '{{ role_arn }}',
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
  '{{ detector_model_definition }}',
  '{{ detector_model_description }}',
  '{{ detector_model_name }}',
  '{{ evaluation_method }}',
  '{{ key }}',
  '{{ role_arn }}',
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
      - name: detector_model_definition
        value:
          initial_state_name: '{{ initial_state_name }}'
          states:
            - on_enter:
                events:
                  - actions:
                      - clear_timer:
                          timer_name: '{{ timer_name }}'
                        dynamo_db:
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
                        reset_timer:
                          timer_name: '{{ timer_name }}'
                        set_timer:
                          duration_expression: '{{ duration_expression }}'
                          seconds: '{{ seconds }}'
                          timer_name: '{{ timer_name }}'
                        set_variable:
                          value: '{{ value }}'
                          variable_name: '{{ variable_name }}'
                        sns:
                          payload: null
                          target_arn: '{{ target_arn }}'
                        sqs:
                          payload: null
                          queue_url: '{{ queue_url }}'
                          use_base64: '{{ use_base64 }}'
                    condition: '{{ condition }}'
                    event_name: '{{ event_name }}'
              on_exit:
                events:
                  - null
              on_input:
                events:
                  - null
                transition_events:
                  - actions:
                      - null
                    condition: '{{ condition }}'
                    event_name: '{{ event_name }}'
                    next_state: '{{ next_state }}'
              state_name: '{{ state_name }}'
      - name: detector_model_description
        value: '{{ detector_model_description }}'
      - name: detector_model_name
        value: '{{ detector_model_name }}'
      - name: evaluation_method
        value: '{{ evaluation_method }}'
      - name: key
        value: '{{ key }}'
      - name: role_arn
        value: '{{ role_arn }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ detector_model_name }}'
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


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotevents.detector_models
WHERE
  Identifier = '{{ detector_model_name }}' AND
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