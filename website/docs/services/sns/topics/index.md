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
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::SNS::Topic&#96;&#96; resource creates a topic to which notifications can be published.<br />One account can create a maximum of 100,000 standard topics and 1,000 FIFO topics. For more information, see &#91;endpoints and quotas&#93;(https://docs.aws.amazon.com/general/latest/gr/sns.html) in the &#42;General Reference&#42;.<br />The structure of &#96;&#96;AUTHPARAMS&#96;&#96; depends on the .signature of the API request. For more information, see &#91;Examples of the complete Signature Version 4 signing process&#93;(https://docs.aws.amazon.com/general/latest/gr/sigv4-signed-request-examples.html) in the &#42;General Reference&#42;.</td></tr>
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
    "description": "The display name to use for an SNS topic with SMS subscriptions. The display name must be maximum 100 characters long, including hyphens (-), underscores (&#95;), spaces, and tabs."
  },
  {
    "name": "kms_master_key_id",
    "type": "string",
    "description": "The ID of an AWS managed customer master key (CMK) for SNS or a custom CMK. For more information, see &#91;Key terms&#93;(https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms). For more examples, see &#96;&#96;KeyId&#96;&#96; in the &#42;API Reference&#42;.<br />This property applies only to &#91;server-side-encryption&#93;(https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html)."
  },
  {
    "name": "data_protection_policy",
    "type": "object",
    "description": "The body of the policy document you want to use for this topic.<br />You can only add one policy per topic.<br />The policy must be in JSON string format.<br />Length Constraints: Maximum length of 30,720."
  },
  {
    "name": "subscription",
    "type": "array",
    "description": "The SNS subscriptions (endpoints) for this topic.<br />If you specify the &#96;&#96;Subscription&#96;&#96; property in the &#96;&#96;AWS::SNS::Topic&#96;&#96; resource and it creates an associated subscription resource, the associated subscription is not deleted when the &#96;&#96;AWS::SNS::Topic&#96;&#96; resource is deleted.",
    "children": [
      {
        "name": "endpoint",
        "type": "string",
        "description": "The endpoint that receives notifications from the SNS topic. The endpoint value depends on the protocol that you specify. For more information, see the &#96;&#96;Endpoint&#96;&#96; parameter of the &#96;&#96;Subscribe&#96;&#96; action in the &#42;API Reference&#42;."
      },
      {
        "name": "protocol",
        "type": "string",
        "description": "The subscription's protocol. For more information, see the &#96;&#96;Protocol&#96;&#96; parameter of the &#96;&#96;Subscribe&#96;&#96; action in the &#42;API Reference&#42;."
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
    "description": "Enables content-based deduplication for FIFO topics.<br />+ By default, &#96;&#96;ContentBasedDeduplication&#96;&#96; is set to &#96;&#96;false&#96;&#96;. If you create a FIFO topic and this attribute is &#96;&#96;false&#96;&#96;, you must specify a value for the &#96;&#96;MessageDeduplicationId&#96;&#96; parameter for the &#91;Publish&#93;(https://docs.aws.amazon.com/sns/latest/api/API&#95;Publish.html) action. <br />+ When you set &#96;&#96;ContentBasedDeduplication&#96;&#96; to &#96;&#96;true&#96;&#96;, SNS uses a SHA-256 hash to generate the &#96;&#96;MessageDeduplicationId&#96;&#96; using the body of the message (but not the attributes of the message).<br />(Optional) To override the generated value, you can specify a value for the the &#96;&#96;MessageDeduplicationId&#96;&#96; parameter for the &#96;&#96;Publish&#96;&#96; action."
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
    "description": "The list of tags to add to a new topic.<br />To be able to tag a topic on creation, you must have the &#96;&#96;sns:CreateTopic&#96;&#96; and &#96;&#96;sns:TagResource&#96;&#96; permissions.",
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
    "description": "The name of the topic you want to create. Topic names must include only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and must be between 1 and 256 characters long. FIFO topic names must end with &#96;&#96;.fifo&#96;&#96;.<br />If you don't specify a name, CFN generates a unique physical ID and uses that ID for the topic name. For more information, see &#91;Name type&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).<br />If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name."
  },
  {
    "name": "topic_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "signature_version",
    "type": "string",
    "description": "The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS. By default, &#96;&#96;SignatureVersion&#96;&#96; is set to &#96;&#96;1&#96;&#96;."
  },
  {
    "name": "tracing_config",
    "type": "string",
    "description": "Tracing mode of an SNS topic. By default &#96;&#96;TracingConfig&#96;&#96; is set to &#96;&#96;PassThrough&#96;&#96;, and the topic passes through the tracing header it receives from an SNS publisher to its subscriptions. If set to &#96;&#96;Active&#96;&#96;, SNS will vend X-Ray segment data to topic owner account if the sampled flag in the tracing header is true."
  },
  {
    "name": "delivery_status_logging",
    "type": "array",
    "description": "The &#96;&#96;DeliveryStatusLogging&#96;&#96; configuration enables you to log the delivery status of messages sent from your Amazon SNS topic to subscribed endpoints with the following supported delivery protocols:<br />+ HTTP <br />+ Amazon Kinesis Data Firehose<br />+ AWS Lambda<br />+ Platform application endpoint<br />+ Amazon Simple Queue Service<br /><br />Once configured, log entries are sent to Amazon CloudWatch Logs.",
    "children": [
      {
        "name": "protocol",
        "type": "string",
        "description": "Indicates one of the supported protocols for the Amazon SNS topic.<br />At least one of the other three &#96;&#96;LoggingConfig&#96;&#96; properties is recommend along with &#96;&#96;Protocol&#96;&#96;."
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
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>topics</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
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
WHERE region = 'us-east-1' AND data__Identifier = '<TopicArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>topics</code> in a region.
```sql
SELECT
region,
topic_arn
FROM awscc.sns.topics_list_only
WHERE region = 'us-east-1';
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
'{{ DisplayName }}',
 '{{ KmsMasterKeyId }}',
 '{{ DataProtectionPolicy }}',
 '{{ Subscription }}',
 '{{ FifoTopic }}',
 '{{ ContentBasedDeduplication }}',
 '{{ ArchivePolicy }}',
 '{{ FifoThroughputScope }}',
 '{{ Tags }}',
 '{{ TopicName }}',
 '{{ SignatureVersion }}',
 '{{ TracingConfig }}',
 '{{ DeliveryStatusLogging }}',
'{{ region }}';
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
 '{{ DisplayName }}',
 '{{ KmsMasterKeyId }}',
 '{{ DataProtectionPolicy }}',
 '{{ Subscription }}',
 '{{ FifoTopic }}',
 '{{ ContentBasedDeduplication }}',
 '{{ ArchivePolicy }}',
 '{{ FifoThroughputScope }}',
 '{{ Tags }}',
 '{{ TopicName }}',
 '{{ SignatureVersion }}',
 '{{ TracingConfig }}',
 '{{ DeliveryStatusLogging }}',
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
  - name: topic
    props:
      - name: DisplayName
        value: '{{ DisplayName }}'
      - name: KmsMasterKeyId
        value: '{{ KmsMasterKeyId }}'
      - name: DataProtectionPolicy
        value: {}
      - name: Subscription
        value:
          - Endpoint: '{{ Endpoint }}'
            Protocol: '{{ Protocol }}'
      - name: FifoTopic
        value: '{{ FifoTopic }}'
      - name: ContentBasedDeduplication
        value: '{{ ContentBasedDeduplication }}'
      - name: ArchivePolicy
        value: {}
      - name: FifoThroughputScope
        value: '{{ FifoThroughputScope }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: TopicName
        value: '{{ TopicName }}'
      - name: SignatureVersion
        value: '{{ SignatureVersion }}'
      - name: TracingConfig
        value: '{{ TracingConfig }}'
      - name: DeliveryStatusLogging
        value:
          - Protocol: '{{ Protocol }}'
            SuccessFeedbackRoleArn: '{{ SuccessFeedbackRoleArn }}'
            SuccessFeedbackSampleRate: '{{ SuccessFeedbackSampleRate }}'
            FailureFeedbackRoleArn: '{{ FailureFeedbackRoleArn }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.sns.topics
SET data__PatchDocument = string('{{ {
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
WHERE region = '{{ region }}'
AND data__Identifier = '<TopicArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.sns.topics
WHERE data__Identifier = '<TopicArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>topics</code> resource, the following permissions are required:

### Create
```json
sns:CreateTopic,
sns:TagResource,
sns:Subscribe,
sns:GetTopicAttributes,
sns:PutDataProtectionPolicy,
iam:GetRole,
iam:PassRole
```

### Read
```json
sns:GetTopicAttributes,
sns:ListTagsForResource,
sns:ListSubscriptionsByTopic,
sns:GetDataProtectionPolicy
```

### Update
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

### Delete
```json
sns:GetTopicAttributes,
sns:DeleteTopic
```

### List
```json
sns:ListTopics
```
