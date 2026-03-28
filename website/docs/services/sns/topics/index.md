---
title: topics
hide_title: false
hide_table_of_contents: false
keywords:
  - topics
  - sns
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

Creates, updates, deletes or gets a <code>topic</code> resource or lists <code>topics</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>topics</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td><details><summary>The <code>AWS::SNS::Topic</code> resource creates a topic to which notifications can be published.</summary>One account can create a maximum of 100,000 standard topics and 1,000 FIFO topics. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/sns.html">endpoints and quotas</a> in the <i>General Reference</i>.<br />The structure of <code>AUTHPARAMS</code> depends on the .signature of the API request. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/sigv4-signed-request-examples.html">Examples of the complete Signature Version 4 signing process</a> in the <i>General Reference</i>.</details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sns.topics" /></td></tr>
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
    "name": "display_name",
    "type": "string",
    "description": "The display name to use for an SNS topic with SMS subscriptions. The display name must be maximum 100 characters long, including hyphens (-), underscores (_), spaces, and tabs."
  },
  {
    "name": "kms_master_key_id",
    "type": "string",
    "description": "<details><summary>The ID of an AWS managed customer master key (CMK) for SNS or a custom CMK. For more information, see <a href=\"https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms\">Key terms</a>. For more examples, see <code>KeyId</code> in the <i>API Reference</i>.</summary>This property applies only to <a href=\"https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html\">server-side-encryption</a>.</details>"
  },
  {
    "name": "data_protection_policy",
    "type": "object",
    "description": "<details><summary>The body of the policy document you want to use for this topic.</summary>You can only add one policy per topic.<br />The policy must be in JSON string format.<br />Length Constraints: Maximum length of 30,720.</details>"
  },
  {
    "name": "subscription",
    "type": "array",
    "description": "<details><summary>The SNS subscriptions (endpoints) for this topic.</summary>If you specify the <code>Subscription</code> property in the <code>AWS::SNS::Topic</code> resource and it creates an associated subscription resource, the associated subscription is not deleted when the <code>AWS::SNS::Topic</code> resource is deleted.</details>",
    "children": [
      {
        "name": "endpoint",
        "type": "string",
        "description": "The endpoint that receives notifications from the SNS topic. The endpoint value depends on the protocol that you specify. For more information, see the <code>Endpoint</code> parameter of the <code>Subscribe</code> action in the <i>API Reference</i>."
      },
      {
        "name": "protocol",
        "type": "string",
        "description": "The subscription's protocol. For more information, see the <code>Protocol</code> parameter of the <code>Subscribe</code> action in the <i>API Reference</i>."
      }
    ]
  },
  {
    "name": "fifo_topic",
    "type": "boolean",
    "description": "Set to true to create a FIFO topic."
  },
  {
    "name": "content_based_deduplication",
    "type": "boolean",
    "description": "<details><summary>Enables content-based deduplication for FIFO topics.</summary>+  By default, <code>ContentBasedDeduplication</code> is set to <code>false</code>. If you create a FIFO topic and this attribute is <code>false</code>, you must specify a value for the <code>MessageDeduplicationId</code> parameter for the <a href=\"https://docs.aws.amazon.com/sns/latest/api/API_Publish.html\">Publish</a> action.<br />+  When you set <code>ContentBasedDeduplication</code> to <code>true</code>, SNS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using the body of the message (but not the attributes of the message).<br />(Optional) To override the generated value, you can specify a value for the the <code>MessageDeduplicationId</code> parameter for the <code>Publish</code> action.</details>"
  },
  {
    "name": "archive_policy",
    "type": "object",
    "description": "The archive policy determines the number of days SNS retains messages. You can set a retention period from 1 to 365 days."
  },
  {
    "name": "fifo_throughput_scope",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "<details><summary>The list of tags to add to a new topic.</summary>To be able to tag a topic on creation, you must have the <code>sns:CreateTopic</code> and <code>sns:TagResource</code> permissions.</details>",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The required key portion of the tag."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The optional value portion of the tag."
      }
    ]
  },
  {
    "name": "topic_name",
    "type": "string",
    "description": "<details><summary>The name of the topic you want to create. Topic names must include only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and must be between 1 and 256 characters long. FIFO topic names must end with <code>.fifo</code>.</summary>If you don't specify a name, CFN generates a unique physical ID and uses that ID for the topic name. For more information, see <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html\">Name type</a>.<br />If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.</details>"
  },
  {
    "name": "topic_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "signature_version",
    "type": "string",
    "description": "The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS. By default, <code>SignatureVersion</code> is set to <code>1</code>."
  },
  {
    "name": "tracing_config",
    "type": "string",
    "description": "Tracing mode of an SNS topic. By default <code>TracingConfig</code> is set to <code>PassThrough</code>, and the topic passes through the tracing header it receives from an SNS publisher to its subscriptions. If set to <code>Active</code>, SNS will vend X-Ray segment data to topic owner account if the sampled flag in the tracing header is true."
  },
  {
    "name": "delivery_status_logging",
    "type": "array",
    "description": "<details><summary>The <code>DeliveryStatusLogging</code> configuration enables you to log the delivery status of messages sent from your Amazon SNS topic to subscribed endpoints with the following supported delivery protocols:</summary>+  HTTP<br />+  Amazon Kinesis Data Firehose<br />+   AWS Lambda<br />+  Platform application endpoint<br />+  Amazon Simple Queue Service<br />Once configured, log entries are sent to Amazon CloudWatch Logs.</details>",
    "children": [
      {
        "name": "protocol",
        "type": "string",
        "description": "<details><summary>Indicates one of the supported protocols for the Amazon SNS topic.</summary>At least one of the other three <code>LoggingConfig</code> properties is recommend along with <code>Protocol</code>.</details>"
      },
      {
        "name": "success_feedback_role_arn",
        "type": "string",
        "description": "The IAM role ARN to be used when logging successful message deliveries in Amazon CloudWatch."
      },
      {
        "name": "success_feedback_sample_rate",
        "type": "string",
        "description": "The percentage of successful message deliveries to be logged in Amazon CloudWatch. Valid percentage values range from 0 to 100."
      },
      {
        "name": "failure_feedback_role_arn",
        "type": "string",
        "description": "The IAM role ARN to be used when logging failed message deliveries in Amazon CloudWatch."
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
    "name": "topic_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topic.html"><code>AWS::SNS::Topic</code></a>.

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
    <td><code>topics</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>topics</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>topics</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>topics_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>topics</code></td>
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

Gets all properties from an individual <code>topic</code>.
```sql
SELECT
  region,
  display_name,
  kms_master_key_id,
  data_protection_policy,
  subscription,
  fifo_topic,
  content_based_deduplication,
  archive_policy,
  fifo_throughput_scope,
  tags,
  topic_name,
  topic_arn,
  signature_version,
  tracing_config,
  delivery_status_logging
FROM awscc.sns.topics
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ topic_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>topics</code> in a region.
```sql
SELECT
  region,
  topic_arn
FROM awscc.sns.topics_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>topic</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.sns.topics (
  DisplayName,
  KmsMasterKeyId,
  DataProtectionPolicy,
  Subscription,
  FifoTopic,
  ContentBasedDeduplication,
  ArchivePolicy,
  FifoThroughputScope,
  Tags,
  TopicName,
  SignatureVersion,
  TracingConfig,
  DeliveryStatusLogging,
  region
)
SELECT
  '{{ display_name }}',
  '{{ kms_master_key_id }}',
  '{{ data_protection_policy }}',
  '{{ subscription }}',
  '{{ fifo_topic }}',
  '{{ content_based_deduplication }}',
  '{{ archive_policy }}',
  '{{ fifo_throughput_scope }}',
  '{{ tags }}',
  '{{ topic_name }}',
  '{{ signature_version }}',
  '{{ tracing_config }}',
  '{{ delivery_status_logging }}',
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
INSERT INTO awscc.sns.topics (
  DisplayName,
  KmsMasterKeyId,
  DataProtectionPolicy,
  Subscription,
  FifoTopic,
  ContentBasedDeduplication,
  ArchivePolicy,
  FifoThroughputScope,
  Tags,
  TopicName,
  SignatureVersion,
  TracingConfig,
  DeliveryStatusLogging,
  region
)
SELECT
  '{{ display_name }}',
  '{{ kms_master_key_id }}',
  '{{ data_protection_policy }}',
  '{{ subscription }}',
  '{{ fifo_topic }}',
  '{{ content_based_deduplication }}',
  '{{ archive_policy }}',
  '{{ fifo_throughput_scope }}',
  '{{ tags }}',
  '{{ topic_name }}',
  '{{ signature_version }}',
  '{{ tracing_config }}',
  '{{ delivery_status_logging }}',
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
  - name: topic
    props:
      - name: display_name
        value: '{{ display_name }}'
      - name: kms_master_key_id
        value: '{{ kms_master_key_id }}'
      - name: data_protection_policy
        value: {}
      - name: subscription
        value:
          - endpoint: '{{ endpoint }}'
            protocol: '{{ protocol }}'
      - name: fifo_topic
        value: '{{ fifo_topic }}'
      - name: content_based_deduplication
        value: '{{ content_based_deduplication }}'
      - name: archive_policy
        value: {}
      - name: fifo_throughput_scope
        value: '{{ fifo_throughput_scope }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: topic_name
        value: '{{ topic_name }}'
      - name: signature_version
        value: '{{ signature_version }}'
      - name: tracing_config
        value: '{{ tracing_config }}'
      - name: delivery_status_logging
        value:
          - protocol: '{{ protocol }}'
            success_feedback_role_arn: '{{ success_feedback_role_arn }}'
            success_feedback_sample_rate: '{{ success_feedback_sample_rate }}'
            failure_feedback_role_arn: '{{ failure_feedback_role_arn }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>topic</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.sns.topics
SET PatchDocument = string('{{ {
    "DisplayName": display_name,
    "KmsMasterKeyId": kms_master_key_id,
    "DataProtectionPolicy": data_protection_policy,
    "Subscription": subscription,
    "ContentBasedDeduplication": content_based_deduplication,
    "ArchivePolicy": archive_policy,
    "FifoThroughputScope": fifo_throughput_scope,
    "Tags": tags,
    "SignatureVersion": signature_version,
    "TracingConfig": tracing_config,
    "DeliveryStatusLogging": delivery_status_logging
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ topic_arn }}'
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
DELETE FROM awscc.sns.topics
WHERE
  Identifier = '{{ topic_arn }}' AND
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

To operate on the <code>topics</code> resource, the following permissions are required:

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
sns:CreateTopic,
sns:TagResource,
sns:Subscribe,
sns:GetTopicAttributes,
sns:PutDataProtectionPolicy,
iam:GetRole,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
sns:GetTopicAttributes,
sns:ListTagsForResource,
sns:ListSubscriptionsByTopic,
sns:GetDataProtectionPolicy
```

</TabItem>
<TabItem value="update">

```json
sns:SetTopicAttributes,
sns:TagResource,
sns:UntagResource,
sns:Subscribe,
sns:Unsubscribe,
sns:GetTopicAttributes,
sns:ListTagsForResource,
sns:ListSubscriptionsByTopic,
sns:GetDataProtectionPolicy,
sns:PutDataProtectionPolicy,
iam:GetRole,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
sns:GetTopicAttributes,
sns:DeleteTopic
```

</TabItem>
<TabItem value="list">

```json
sns:ListTopics
```

</TabItem>
</Tabs>