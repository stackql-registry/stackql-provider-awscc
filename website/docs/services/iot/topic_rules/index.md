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
WHERE region = 'us-east-1' AND Identifier = '{{ rule_name }}';
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
'{{ topic_rule_payload }}',
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
 '{{ rule_name }}',
 '{{ topic_rule_payload }}',
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
  - name: topic_rule
    props:
      - name: rule_name
        value: '{{ rule_name }}'
      - name: topic_rule_payload
        value:
          rule_disabled: '{{ rule_disabled }}'
          error_action:
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
          description: '{{ description }}'
          aws_iot_sql_version: '{{ aws_iot_sql_version }}'
          actions:
            - null
          sql: '{{ sql }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>topic_rule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iot.topic_rules
SET PatchDocument = string('{{ {
    "TopicRulePayload": topic_rule_payload,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ rule_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iot.topic_rules
WHERE Identifier = '{{ rule_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>topic_rules</code> resource, the following permissions are required:

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
iam:PassRole,
iot:CreateTopicRule,
iot:GetTopicRule,
iot:TagResource,
iot:ListTagsForResource
```

</TabItem>
<TabItem value="read">

```json
iot:GetTopicRule,
iot:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
iam:PassRole,
iot:GetTopicRule,
iot:ListTagsForResource,
iot:ReplaceTopicRule,
iot:TagResource,
iot:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
iot:GetTopicRule,
iot:DeleteTopicRule
```

</TabItem>
<TabItem value="list">

```json
iot:ListTopicRules
```

</TabItem>
</Tabs>