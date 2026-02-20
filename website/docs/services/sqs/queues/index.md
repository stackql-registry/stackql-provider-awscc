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
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::SQS::Queue&#96;&#96; resource creates an SQS standard or FIFO queue.<br />Keep the following caveats in mind:<br />+ If you don't specify the &#96;&#96;FifoQueue&#96;&#96; property, SQS creates a standard queue.<br />You can't change the queue type after you create it and you can't convert an existing standard queue into a FIFO queue. You must either create a new FIFO queue for your application or delete your existing standard queue and recreate it as a FIFO queue. For more information, see &#91;Moving from a standard queue to a FIFO queue&#93;(https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-moving.html) in the &#42;Developer Guide&#42;. <br />+ If you don't provide a value for a property, the queue is created with the default value for the property.<br />+ If you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.<br />+ To successfully create a new queue, you must provide a queue name that adheres to the &#91;limits related to queues&#93;(https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/limits-queues.html) and is unique within the scope of your queues.<br /><br />For more information about creating FIFO (first-in-first-out) queues, see &#91;Creating an queue ()&#93;(https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/create-queue-cloudformation.html) in the &#42;Developer Guide&#42;.</td></tr>
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
    "description": "For first-in-first-out (FIFO) queues, specifies whether to enable content-based deduplication. During the deduplication interval, SQS treats messages that are sent with identical content as duplicates and delivers only one copy of the message. For more information, see the &#96;&#96;ContentBasedDeduplication&#96;&#96; attribute for the &#96;&#96;CreateQueue&#96;&#96; action in the &#42;API Reference&#42;."
  },
  {
    "name": "deduplication_scope",
    "type": "string",
    "description": "For high throughput for FIFO queues, specifies whether message deduplication occurs at the message group or queue level. Valid values are &#96;&#96;messageGroup&#96;&#96; and &#96;&#96;queue&#96;&#96;.<br />To enable high throughput for a FIFO queue, set this attribute to &#96;&#96;messageGroup&#96;&#96; &#42;and&#42; set the &#96;&#96;FifoThroughputLimit&#96;&#96; attribute to &#96;&#96;perMessageGroupId&#96;&#96;. If you set these attributes to anything other than these values, normal throughput is in effect and deduplication occurs as specified. For more information, see &#91;High throughput for FIFO queues&#93;(https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html) and &#91;Quotas related to messages&#93;(https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html) in the &#42;Developer Guide&#42;."
  },
  {
    "name": "delay_seconds",
    "type": "integer",
    "description": "The time in seconds for which the delivery of all messages in the queue is delayed. You can specify an integer value of &#96;&#96;0&#96;&#96; to &#96;&#96;900&#96;&#96; (15 minutes). The default value is &#96;&#96;0&#96;&#96;."
  },
  {
    "name": "fifo_queue",
    "type": "boolean",
    "description": "If set to true, creates a FIFO queue. If you don't specify this property, SQS creates a standard queue. For more information, see &#91;Amazon SQS FIFO queues&#93;(https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-fifo-queues.html) in the &#42;Developer Guide&#42;."
  },
  {
    "name": "fifo_throughput_limit",
    "type": "string",
    "description": "For high throughput for FIFO queues, specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. Valid values are &#96;&#96;perQueue&#96;&#96; and &#96;&#96;perMessageGroupId&#96;&#96;.<br />To enable high throughput for a FIFO queue, set this attribute to &#96;&#96;perMessageGroupId&#96;&#96; &#42;and&#42; set the &#96;&#96;DeduplicationScope&#96;&#96; attribute to &#96;&#96;messageGroup&#96;&#96;. If you set these attributes to anything other than these values, normal throughput is in effect and deduplication occurs as specified. For more information, see &#91;High throughput for FIFO queues&#93;(https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html) and &#91;Quotas related to messages&#93;(https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html) in the &#42;Developer Guide&#42;."
  },
  {
    "name": "kms_data_key_reuse_period_seconds",
    "type": "integer",
    "description": "The length of time in seconds for which SQS can reuse a data key to encrypt or decrypt messages before calling KMS again. The value must be an integer between 60 (1 minute) and 86,400 (24 hours). The default is 300 (5 minutes).<br />A shorter time period provides better security, but results in more calls to KMS, which might incur charges after Free Tier. For more information, see &#91;Encryption at rest&#93;(https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-how-does-the-data-key-reuse-period-work) in the &#42;Developer Guide&#42;."
  },
  {
    "name": "kms_master_key_id",
    "type": "string",
    "description": "The ID of an AWS Key Management Service (KMS) for SQS, or a custom KMS. To use the AWS managed KMS for SQS, specify a (default) alias ARN, alias name (for example &#96;&#96;alias/aws/sqs&#96;&#96;), key ARN, or key ID. For more information, see the following:<br />+ &#91;Encryption at rest&#93;(https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html) in the &#42;Developer Guide&#42; <br />+ &#91;CreateQueue&#93;(https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API&#95;CreateQueue.html) in the &#42;API Reference&#42; <br />+ &#91;Request Parameters&#93;(https://docs.aws.amazon.com/kms/latest/APIReference/API&#95;DescribeKey.html#API&#95;DescribeKey&#95;RequestParameters) in the &#42;Key Management Service API Reference&#42; <br />+ The Key Management Service (KMS) section of the &#91;Security best practices for Key Management Service&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/best-practices.html) in the &#42;Key Management Service Developer Guide&#42;"
  },
  {
    "name": "sqs_managed_sse_enabled",
    "type": "boolean",
    "description": "Enables server-side queue encryption using SQS owned encryption keys. Only one server-side encryption option is supported per queue (for example, &#91;SSE-KMS&#93;(https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html) or &#91;SSE-SQS&#93;(https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sqs-sse-queue.html)). When &#96;&#96;SqsManagedSseEnabled&#96;&#96; is not defined, &#96;&#96;SSE-SQS&#96;&#96; encryption is enabled by default."
  },
  {
    "name": "maximum_message_size",
    "type": "integer",
    "description": "The limit of how many bytes that a message can contain before SQS rejects it. You can specify an integer value from &#96;&#96;1,024&#96;&#96; bytes (1 KiB) to &#96;&#96;262,144&#96;&#96; bytes (256 KiB). The default value is &#96;&#96;262,144&#96;&#96; (256 KiB)."
  },
  {
    "name": "message_retention_period",
    "type": "integer",
    "description": "The number of seconds that SQS retains a message. You can specify an integer value from &#96;&#96;60&#96;&#96; seconds (1 minute) to &#96;&#96;1,209,600&#96;&#96; seconds (14 days). The default value is &#96;&#96;345,600&#96;&#96; seconds (4 days)."
  },
  {
    "name": "queue_name",
    "type": "string",
    "description": "A name for the queue. To create a FIFO queue, the name of your FIFO queue must end with the &#96;&#96;.fifo&#96;&#96; suffix. For more information, see &#91;Amazon SQS FIFO queues&#93;(https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-fifo-queues.html) in the &#42;Developer Guide&#42;.<br />If you don't specify a name, CFN generates a unique physical ID and uses that ID for the queue name. For more information, see &#91;Name type&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html) in the &#42;User Guide&#42;. <br />If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name."
  },
  {
    "name": "receive_message_wait_time_seconds",
    "type": "integer",
    "description": "Specifies the duration, in seconds, that the ReceiveMessage action call waits until a message is in the queue in order to include it in the response, rather than returning an empty response if a message isn't yet available. You can specify an integer from 1 to 20. Short polling is used as the default or when you specify 0 for this property. For more information, see &#91;Consuming messages using long polling&#93;(https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-short-and-long-polling.html#sqs-long-polling) in the &#42;Developer Guide&#42;."
  },
  {
    "name": "redrive_allow_policy",
    "type": "object",
    "description": "The string that includes the parameters for the permissions for the dead-letter queue redrive permission and which source queues can specify dead-letter queues as a JSON object. The parameters are as follows:<br />+ &#96;&#96;redrivePermission&#96;&#96;: The permission type that defines which source queues can specify the current queue as the dead-letter queue. Valid values are:<br />+ &#96;&#96;allowAll&#96;&#96;: (Default) Any source queues in this AWS account in the same Region can specify this queue as the dead-letter queue.<br />+ &#96;&#96;denyAll&#96;&#96;: No source queues can specify this queue as the dead-letter queue.<br />+ &#96;&#96;byQueue&#96;&#96;: Only queues specified by the &#96;&#96;sourceQueueArns&#96;&#96; parameter can specify this queue as the dead-letter queue.<br /><br />+ &#96;&#96;sourceQueueArns&#96;&#96;: The Amazon Resource Names (ARN)s of the source queues that can specify this queue as the dead-letter queue and redrive messages. You can specify this parameter only when the &#96;&#96;redrivePermission&#96;&#96; parameter is set to &#96;&#96;byQueue&#96;&#96;. You can specify up to 10 source queue ARNs. To allow more than 10 source queues to specify dead-letter queues, set the &#96;&#96;redrivePermission&#96;&#96; parameter to &#96;&#96;allowAll&#96;&#96;."
  },
  {
    "name": "redrive_policy",
    "type": "object",
    "description": "The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object. The parameters are as follows:<br />+ &#96;&#96;deadLetterTargetArn&#96;&#96;: The Amazon Resource Name (ARN) of the dead-letter queue to which SQS moves messages after the value of &#96;&#96;maxReceiveCount&#96;&#96; is exceeded.<br />+ &#96;&#96;maxReceiveCount&#96;&#96;: The number of times a message is received by a consumer of the source queue before being moved to the dead-letter queue. When the &#96;&#96;ReceiveCount&#96;&#96; for a message exceeds the &#96;&#96;maxReceiveCount&#96;&#96; for a queue, SQS moves the message to the dead-letter-queue.<br /><br />The dead-letter queue of a FIFO queue must also be a FIFO queue. Similarly, the dead-letter queue of a standard queue must also be a standard queue.<br />&#42;JSON&#42; <br />&#96;&#96;&#123; \"deadLetterTargetArn\" : String, \"maxReceiveCount\" : Integer &#125;&#96;&#96; <br />&#42;YAML&#42; <br />&#96;&#96;deadLetterTargetArn : String&#96;&#96; <br />&#96;&#96;maxReceiveCount : Integer&#96;&#96;"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags that you attach to this queue. For more information, see &#91;Resource tag&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the &#42;User Guide&#42;.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "visibility_timeout",
    "type": "integer",
    "description": "The length of time during which a message will be unavailable after a message is delivered from the queue. This blocks other components from receiving the same message and gives the initial component time to process and delete the message from the queue.<br />Values must be from 0 to 43,200 seconds (12 hours). If you don't specify a value, AWS CloudFormation uses the default value of 30 seconds.<br />For more information about SQS queue visibility timeouts, see &#91;Visibility timeout&#93;(https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html) in the &#42;Developer Guide&#42;."
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
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>queues</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
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
WHERE region = 'us-east-1' AND data__Identifier = '<QueueUrl>';
```
</TabItem>
<TabItem value="list">

Lists all <code>queues</code> in a region.
```sql
SELECT
region,
queue_url
FROM awscc.sqs.queues_list_only
WHERE region = 'us-east-1';
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
'{{ ContentBasedDeduplication }}',
 '{{ DeduplicationScope }}',
 '{{ DelaySeconds }}',
 '{{ FifoQueue }}',
 '{{ FifoThroughputLimit }}',
 '{{ KmsDataKeyReusePeriodSeconds }}',
 '{{ KmsMasterKeyId }}',
 '{{ SqsManagedSseEnabled }}',
 '{{ MaximumMessageSize }}',
 '{{ MessageRetentionPeriod }}',
 '{{ QueueName }}',
 '{{ ReceiveMessageWaitTimeSeconds }}',
 '{{ RedriveAllowPolicy }}',
 '{{ RedrivePolicy }}',
 '{{ Tags }}',
 '{{ VisibilityTimeout }}',
'{{ region }}';
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
 '{{ ContentBasedDeduplication }}',
 '{{ DeduplicationScope }}',
 '{{ DelaySeconds }}',
 '{{ FifoQueue }}',
 '{{ FifoThroughputLimit }}',
 '{{ KmsDataKeyReusePeriodSeconds }}',
 '{{ KmsMasterKeyId }}',
 '{{ SqsManagedSseEnabled }}',
 '{{ MaximumMessageSize }}',
 '{{ MessageRetentionPeriod }}',
 '{{ QueueName }}',
 '{{ ReceiveMessageWaitTimeSeconds }}',
 '{{ RedriveAllowPolicy }}',
 '{{ RedrivePolicy }}',
 '{{ Tags }}',
 '{{ VisibilityTimeout }}',
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
  - name: queue
    props:
      - name: ContentBasedDeduplication
        value: '{{ ContentBasedDeduplication }}'
      - name: DeduplicationScope
        value: '{{ DeduplicationScope }}'
      - name: DelaySeconds
        value: '{{ DelaySeconds }}'
      - name: FifoQueue
        value: '{{ FifoQueue }}'
      - name: FifoThroughputLimit
        value: '{{ FifoThroughputLimit }}'
      - name: KmsDataKeyReusePeriodSeconds
        value: '{{ KmsDataKeyReusePeriodSeconds }}'
      - name: KmsMasterKeyId
        value: '{{ KmsMasterKeyId }}'
      - name: SqsManagedSseEnabled
        value: '{{ SqsManagedSseEnabled }}'
      - name: MaximumMessageSize
        value: '{{ MaximumMessageSize }}'
      - name: MessageRetentionPeriod
        value: '{{ MessageRetentionPeriod }}'
      - name: QueueName
        value: '{{ QueueName }}'
      - name: ReceiveMessageWaitTimeSeconds
        value: '{{ ReceiveMessageWaitTimeSeconds }}'
      - name: RedriveAllowPolicy
        value: {}
      - name: RedrivePolicy
        value: {}
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: VisibilityTimeout
        value: '{{ VisibilityTimeout }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.sqs.queues
SET data__PatchDocument = string('{{ {
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
WHERE region = '{{ region }}'
AND data__Identifier = '<QueueUrl>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.sqs.queues
WHERE data__Identifier = '<QueueUrl>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>queues</code> resource, the following permissions are required:

### Create
```json
sqs:CreateQueue,
sqs:GetQueueUrl,
sqs:GetQueueAttributes,
sqs:ListQueueTags,
sqs:TagQueue
```

### Read
```json
sqs:GetQueueAttributes,
sqs:ListQueueTags
```

### Update
```json
sqs:SetQueueAttributes,
sqs:GetQueueAttributes,
sqs:ListQueueTags,
sqs:TagQueue,
sqs:UntagQueue
```

### Delete
```json
sqs:DeleteQueue,
sqs:GetQueueAttributes
```

### List
```json
sqs:ListQueues
```
