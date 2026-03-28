---
title: queues
hide_title: false
hide_table_of_contents: false
keywords:
  - queues
  - sqs
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

Creates, updates, deletes or gets a <code>queue</code> resource or lists <code>queues</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>queues</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td><details><summary>The <code>AWS::SQS::Queue</code> resource creates an SQS standard or FIFO queue.</summary>Keep the following caveats in mind:<br />+  If you don't specify the <code>FifoQueue</code> property, SQS creates a standard queue.<br />You can't change the queue type after you create it and you can't convert an existing standard queue into a FIFO queue. You must either create a new FIFO queue for your application or delete your existing standard queue and recreate it as a FIFO queue. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-moving.html">Moving from a standard queue to a FIFO queue</a> in the <i>Developer Guide</i>.<br />+  If you don't provide a value for a property, the queue is created with the default value for the property.<br />+  If you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.<br />+  To successfully create a new queue, you must provide a queue name that adheres to the <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/limits-queues.html">limits related to queues</a> and is unique within the scope of your queues.<br />For more information about creating FIFO (first-in-first-out) queues, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/create-queue-cloudformation.html">Creating an queue ()</a> in the <i>Developer Guide</i>.</details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sqs.queues" /></td></tr>
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
    "name": "queue_url",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "content_based_deduplication",
    "type": "boolean",
    "description": "For first-in-first-out (FIFO) queues, specifies whether to enable content-based deduplication. During the deduplication interval, SQS treats messages that are sent with identical content as duplicates and delivers only one copy of the message. For more information, see the <code>ContentBasedDeduplication</code> attribute for the <code>CreateQueue</code> action in the <i>API Reference</i>."
  },
  {
    "name": "deduplication_scope",
    "type": "string",
    "description": "<details><summary>For high throughput for FIFO queues, specifies whether message deduplication occurs at the message group or queue level. Valid values are <code>messageGroup</code> and <code>queue</code>.</summary>To enable high throughput for a FIFO queue, set this attribute to <code>messageGroup</code> <i>and</i> set the <code>FifoThroughputLimit</code> attribute to <code>perMessageGroupId</code>. If you set these attributes to anything other than these values, normal throughput is in effect and deduplication occurs as specified. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html\">High throughput for FIFO queues</a> and <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html\">Quotas related to messages</a> in the <i>Developer Guide</i>.</details>"
  },
  {
    "name": "delay_seconds",
    "type": "integer",
    "description": "The time in seconds for which the delivery of all messages in the queue is delayed. You can specify an integer value of <code>0</code> to <code>900</code> (15 minutes). The default value is <code>0</code>."
  },
  {
    "name": "fifo_queue",
    "type": "boolean",
    "description": "If set to true, creates a FIFO queue. If you don't specify this property, SQS creates a standard queue. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-fifo-queues.html\">Amazon SQS FIFO queues</a> in the <i>Developer Guide</i>."
  },
  {
    "name": "fifo_throughput_limit",
    "type": "string",
    "description": "<details><summary>For high throughput for FIFO queues, specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. Valid values are <code>perQueue</code> and <code>perMessageGroupId</code>.</summary>To enable high throughput for a FIFO queue, set this attribute to <code>perMessageGroupId</code> <i>and</i> set the <code>DeduplicationScope</code> attribute to <code>messageGroup</code>. If you set these attributes to anything other than these values, normal throughput is in effect and deduplication occurs as specified. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html\">High throughput for FIFO queues</a> and <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html\">Quotas related to messages</a> in the <i>Developer Guide</i>.</details>"
  },
  {
    "name": "kms_data_key_reuse_period_seconds",
    "type": "integer",
    "description": "<details><summary>The length of time in seconds for which SQS can reuse a data key to encrypt or decrypt messages before calling KMS again. The value must be an integer between 60 (1 minute) and 86,400 (24 hours). The default is 300 (5 minutes).</summary>A shorter time period provides better security, but results in more calls to KMS, which might incur charges after Free Tier. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-how-does-the-data-key-reuse-period-work\">Encryption at rest</a> in the <i>Developer Guide</i>.</details>"
  },
  {
    "name": "kms_master_key_id",
    "type": "string",
    "description": "<details><summary>The ID of an AWS Key Management Service (KMS) for SQS, or a custom KMS. To use the AWS managed KMS for SQS, specify a (default) alias ARN, alias name (for example <code>alias/aws/sqs</code>), key ARN, or key ID. For more information, see the following:</summary>+   <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html\">Encryption at rest</a> in the <i>Developer Guide</i><br />+   <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_CreateQueue.html\">CreateQueue</a> in the <i>API Reference</i><br />+   <a href=\"https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters\">Request Parameters</a> in the <i>Key Management Service API Reference</i><br />+   The Key Management Service (KMS) section of the <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/best-practices.html\">Security best practices for Key Management Service</a> in the <i>Key Management Service Developer Guide</i></details>"
  },
  {
    "name": "sqs_managed_sse_enabled",
    "type": "boolean",
    "description": "Enables server-side queue encryption using SQS owned encryption keys. Only one server-side encryption option is supported per queue (for example, <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html\">SSE-KMS</a> or <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sqs-sse-queue.html\">SSE-SQS</a>). When <code>SqsManagedSseEnabled</code> is not defined, <code>SSE-SQS</code> encryption is enabled by default."
  },
  {
    "name": "maximum_message_size",
    "type": "integer",
    "description": "The limit of how many bytes that a message can contain before SQS rejects it. You can specify an integer value from <code>1,024</code> bytes (1 KiB) to <code>262,144</code> bytes (256 KiB). The default value is <code>262,144</code> (256 KiB)."
  },
  {
    "name": "message_retention_period",
    "type": "integer",
    "description": "The number of seconds that SQS retains a message. You can specify an integer value from <code>60</code> seconds (1 minute) to <code>1,209,600</code> seconds (14 days). The default value is <code>345,600</code> seconds (4 days)."
  },
  {
    "name": "queue_name",
    "type": "string",
    "description": "<details><summary>A name for the queue. To create a FIFO queue, the name of your FIFO queue must end with the <code>.fifo</code> suffix. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-fifo-queues.html\">Amazon SQS FIFO queues</a> in the <i>Developer Guide</i>.</summary>If you don't specify a name, CFN generates a unique physical ID and uses that ID for the queue name. For more information, see <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html\">Name type</a> in the <i>User Guide</i>.<br />If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.</details>"
  },
  {
    "name": "receive_message_wait_time_seconds",
    "type": "integer",
    "description": "Specifies the duration, in seconds, that the ReceiveMessage action call waits until a message is in the queue in order to include it in the response, rather than returning an empty response if a message isn't yet available. You can specify an integer from 1 to 20. Short polling is used as the default or when you specify 0 for this property. For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-short-and-long-polling.html#sqs-long-polling\">Consuming messages using long polling</a> in the <i>Developer Guide</i>."
  },
  {
    "name": "redrive_allow_policy",
    "type": "object",
    "description": "<details><summary>The string that includes the parameters for the permissions for the dead-letter queue redrive permission and which source queues can specify dead-letter queues as a JSON object. The parameters are as follows:</summary>+   <code>redrivePermission</code>: The permission type that defines which source queues can specify the current queue as the dead-letter queue. Valid values are:<br />+   <code>allowAll</code>: (Default) Any source queues in this AWS account in the same Region can specify this queue as the dead-letter queue.<br />+   <code>denyAll</code>: No source queues can specify this queue as the dead-letter queue.<br />+   <code>byQueue</code>: Only queues specified by the <code>sourceQueueArns</code> parameter can specify this queue as the dead-letter queue.<br />+   <code>sourceQueueArns</code>: The Amazon Resource Names (ARN)s of the source queues that can specify this queue as the dead-letter queue and redrive messages. You can specify this parameter only when the <code>redrivePermission</code> parameter is set to <code>byQueue</code>. You can specify up to 10 source queue ARNs. To allow more than 10 source queues to specify dead-letter queues, set the <code>redrivePermission</code> parameter to <code>allowAll</code>.</details>"
  },
  {
    "name": "redrive_policy",
    "type": "object",
    "description": "<details><summary>The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object. The parameters are as follows:</summary>+   <code>deadLetterTargetArn</code>: The Amazon Resource Name (ARN) of the dead-letter queue to which SQS moves messages after the value of <code>maxReceiveCount</code> is exceeded.<br />+   <code>maxReceiveCount</code>: The number of times a message is received by a consumer of the source queue before being moved to the dead-letter queue. When the <code>ReceiveCount</code> for a message exceeds the <code>maxReceiveCount</code> for a queue, SQS moves the message to the dead-letter-queue.<br />The dead-letter queue of a FIFO queue must also be a FIFO queue. Similarly, the dead-letter queue of a standard queue must also be a standard queue.<br /><i>JSON</i><br /><code>&#123; \"deadLetterTargetArn\" : String, \"maxReceiveCount\" : Integer &#125;</code><br /><i>YAML</i><br /><code>deadLetterTargetArn : String</code><br /><code>maxReceiveCount : Integer</code></details>"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags that you attach to this queue. For more information, see <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html\">Resource tag</a> in the <i>User Guide</i>.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "visibility_timeout",
    "type": "integer",
    "description": "<details><summary>The length of time during which a message will be unavailable after a message is delivered from the queue. This blocks other components from receiving the same message and gives the initial component time to process and delete the message from the queue.</summary>Values must be from 0 to 43,200 seconds (12 hours). If you don't specify a value, AWS CloudFormation uses the default value of 30 seconds.<br />For more information about SQS queue visibility timeouts, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html\">Visibility timeout</a> in the <i>Developer Guide</i>.</details>"
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
    "name": "queue_url",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sqs-queue.html"><code>AWS::SQS::Queue</code></a>.

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
    <td><code>queues</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>queues</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>queues</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>queues_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>queues</code></td>
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

Gets all properties from an individual <code>queue</code>.
```sql
SELECT
  region,
  queue_url,
  arn,
  content_based_deduplication,
  deduplication_scope,
  delay_seconds,
  fifo_queue,
  fifo_throughput_limit,
  kms_data_key_reuse_period_seconds,
  kms_master_key_id,
  sqs_managed_sse_enabled,
  maximum_message_size,
  message_retention_period,
  queue_name,
  receive_message_wait_time_seconds,
  redrive_allow_policy,
  redrive_policy,
  tags,
  visibility_timeout
FROM awscc.sqs.queues
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ queue_url }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>queues</code> in a region.
```sql
SELECT
  region,
  queue_url
FROM awscc.sqs.queues_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>queue</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.sqs.queues (
  ContentBasedDeduplication,
  DeduplicationScope,
  DelaySeconds,
  FifoQueue,
  FifoThroughputLimit,
  KmsDataKeyReusePeriodSeconds,
  KmsMasterKeyId,
  SqsManagedSseEnabled,
  MaximumMessageSize,
  MessageRetentionPeriod,
  QueueName,
  ReceiveMessageWaitTimeSeconds,
  RedriveAllowPolicy,
  RedrivePolicy,
  Tags,
  VisibilityTimeout,
  region
)
SELECT
  '{{ content_based_deduplication }}',
  '{{ deduplication_scope }}',
  '{{ delay_seconds }}',
  '{{ fifo_queue }}',
  '{{ fifo_throughput_limit }}',
  '{{ kms_data_key_reuse_period_seconds }}',
  '{{ kms_master_key_id }}',
  '{{ sqs_managed_sse_enabled }}',
  '{{ maximum_message_size }}',
  '{{ message_retention_period }}',
  '{{ queue_name }}',
  '{{ receive_message_wait_time_seconds }}',
  '{{ redrive_allow_policy }}',
  '{{ redrive_policy }}',
  '{{ tags }}',
  '{{ visibility_timeout }}',
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
INSERT INTO awscc.sqs.queues (
  ContentBasedDeduplication,
  DeduplicationScope,
  DelaySeconds,
  FifoQueue,
  FifoThroughputLimit,
  KmsDataKeyReusePeriodSeconds,
  KmsMasterKeyId,
  SqsManagedSseEnabled,
  MaximumMessageSize,
  MessageRetentionPeriod,
  QueueName,
  ReceiveMessageWaitTimeSeconds,
  RedriveAllowPolicy,
  RedrivePolicy,
  Tags,
  VisibilityTimeout,
  region
)
SELECT
  '{{ content_based_deduplication }}',
  '{{ deduplication_scope }}',
  '{{ delay_seconds }}',
  '{{ fifo_queue }}',
  '{{ fifo_throughput_limit }}',
  '{{ kms_data_key_reuse_period_seconds }}',
  '{{ kms_master_key_id }}',
  '{{ sqs_managed_sse_enabled }}',
  '{{ maximum_message_size }}',
  '{{ message_retention_period }}',
  '{{ queue_name }}',
  '{{ receive_message_wait_time_seconds }}',
  '{{ redrive_allow_policy }}',
  '{{ redrive_policy }}',
  '{{ tags }}',
  '{{ visibility_timeout }}',
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
  - name: queue
    props:
      - name: content_based_deduplication
        value: '{{ content_based_deduplication }}'
      - name: deduplication_scope
        value: '{{ deduplication_scope }}'
      - name: delay_seconds
        value: '{{ delay_seconds }}'
      - name: fifo_queue
        value: '{{ fifo_queue }}'
      - name: fifo_throughput_limit
        value: '{{ fifo_throughput_limit }}'
      - name: kms_data_key_reuse_period_seconds
        value: '{{ kms_data_key_reuse_period_seconds }}'
      - name: kms_master_key_id
        value: '{{ kms_master_key_id }}'
      - name: sqs_managed_sse_enabled
        value: '{{ sqs_managed_sse_enabled }}'
      - name: maximum_message_size
        value: '{{ maximum_message_size }}'
      - name: message_retention_period
        value: '{{ message_retention_period }}'
      - name: queue_name
        value: '{{ queue_name }}'
      - name: receive_message_wait_time_seconds
        value: '{{ receive_message_wait_time_seconds }}'
      - name: redrive_allow_policy
        value: {}
      - name: redrive_policy
        value: {}
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: visibility_timeout
        value: '{{ visibility_timeout }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>queue</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.sqs.queues
SET PatchDocument = string('{{ {
    "ContentBasedDeduplication": content_based_deduplication,
    "DeduplicationScope": deduplication_scope,
    "DelaySeconds": delay_seconds,
    "FifoThroughputLimit": fifo_throughput_limit,
    "KmsDataKeyReusePeriodSeconds": kms_data_key_reuse_period_seconds,
    "KmsMasterKeyId": kms_master_key_id,
    "SqsManagedSseEnabled": sqs_managed_sse_enabled,
    "MaximumMessageSize": maximum_message_size,
    "MessageRetentionPeriod": message_retention_period,
    "ReceiveMessageWaitTimeSeconds": receive_message_wait_time_seconds,
    "RedriveAllowPolicy": redrive_allow_policy,
    "RedrivePolicy": redrive_policy,
    "Tags": tags,
    "VisibilityTimeout": visibility_timeout
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ queue_url }}'
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
DELETE FROM awscc.sqs.queues
WHERE
  Identifier = '{{ queue_url }}' AND
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

To operate on the <code>queues</code> resource, the following permissions are required:

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
sqs:CreateQueue,
sqs:GetQueueUrl,
sqs:GetQueueAttributes,
sqs:ListQueueTags,
sqs:TagQueue
```

</TabItem>
<TabItem value="read">

```json
sqs:GetQueueAttributes,
sqs:ListQueueTags
```

</TabItem>
<TabItem value="update">

```json
sqs:SetQueueAttributes,
sqs:GetQueueAttributes,
sqs:ListQueueTags,
sqs:TagQueue,
sqs:UntagQueue
```

</TabItem>
<TabItem value="delete">

```json
sqs:DeleteQueue,
sqs:GetQueueAttributes
```

</TabItem>
<TabItem value="list">

```json
sqs:ListQueues
```

</TabItem>
</Tabs>