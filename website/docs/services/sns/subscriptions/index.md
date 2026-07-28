---
title: subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - subscriptions
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

Creates, updates, deletes or gets a <code>subscription</code> resource or lists <code>subscriptions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>subscriptions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SNS::Subscription</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sns.subscriptions" /></td></tr>
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
    "description": "Arn of the subscription"
  },
  {
    "name": "replay_policy",
    "type": "object",
    "description": "Specifies whether Amazon SNS resends the notification to the subscription when a message's attribute changes."
  },
  {
    "name": "raw_message_delivery",
    "type": "boolean",
    "description": "When set to true, enables raw message delivery. Raw messages don't contain any JSON formatting and can be sent to Amazon SQS and HTTP/S endpoints."
  },
  {
    "name": "endpoint",
    "type": "string",
    "description": "The subscription's endpoint. The endpoint value depends on the protocol that you specify."
  },
  {
    "name": "filter_policy",
    "type": "object",
    "description": "The filter policy JSON assigned to the subscription. Enables the subscriber to filter out unwanted messages."
  },
  {
    "name": "topic_arn",
    "type": "string",
    "description": "The ARN of the topic to subscribe to."
  },
  {
    "name": "redrive_policy",
    "type": "object",
    "description": "When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue. Messages that can't be delivered due to client errors are held in the dead-letter queue for further analysis or reprocessing."
  },
  {
    "name": "delivery_policy",
    "type": "object",
    "description": "The delivery policy JSON assigned to the subscription. Enables the subscriber to define the message delivery retry strategy in the case of an HTTP/S endpoint subscribed to the topic."
  },
  {
    "name": "region",
    "type": "string",
    "description": "For cross-region subscriptions, the region in which the topic resides.If no region is specified, AWS CloudFormation uses the region of the caller as the default."
  },
  {
    "name": "subscription_role_arn",
    "type": "string",
    "description": "This property applies only to Amazon Data Firehose delivery stream subscriptions."
  },
  {
    "name": "filter_policy_scope",
    "type": "string",
    "description": "This attribute lets you choose the filtering scope by using one of the following string value types: MessageAttributes (default) and MessageBody."
  },
  {
    "name": "protocol",
    "type": "string",
    "description": "The subscription's protocol."
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
    "name": "arn",
    "type": "string",
    "description": "Arn of the subscription"
  },
  {
    "name": "region",
    "type": "string",
    "description": "For cross-region subscriptions, the region in which the topic resides.If no region is specified, AWS CloudFormation uses the region of the caller as the default."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html"><code>AWS::SNS::Subscription</code></a>.

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
    <td><code>subscriptions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="TopicArn, Protocol, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>subscriptions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>subscriptions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>subscriptions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>subscriptions</code></td>
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

Gets all properties from an individual <code>subscription</code>.
```sql
SELECT
  region,
  arn,
  replay_policy,
  raw_message_delivery,
  endpoint,
  filter_policy,
  topic_arn,
  redrive_policy,
  delivery_policy,
  region,
  subscription_role_arn,
  filter_policy_scope,
  protocol
FROM awscc.sns.subscriptions
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>subscriptions</code> in a region.
```sql
SELECT
  region,
  arn
FROM awscc.sns.subscriptions_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>subscription</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.sns.subscriptions (
  TopicArn,
  Protocol,
  region
)
SELECT
  '{{ topic_arn }}',
  '{{ protocol }}',
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
INSERT INTO awscc.sns.subscriptions (
  ReplayPolicy,
  RawMessageDelivery,
  Endpoint,
  FilterPolicy,
  TopicArn,
  RedrivePolicy,
  DeliveryPolicy,
  Region,
  SubscriptionRoleArn,
  FilterPolicyScope,
  Protocol,
  region
)
SELECT
  '{{ replay_policy }}',
  '{{ raw_message_delivery }}',
  '{{ endpoint }}',
  '{{ filter_policy }}',
  '{{ topic_arn }}',
  '{{ redrive_policy }}',
  '{{ delivery_policy }}',
  '{{ region }}',
  '{{ subscription_role_arn }}',
  '{{ filter_policy_scope }}',
  '{{ protocol }}',
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
  - name: subscription
    props:
      - name: replay_policy
        value: {}
      - name: raw_message_delivery
        value: '{{ raw_message_delivery }}'
      - name: endpoint
        value: '{{ endpoint }}'
      - name: filter_policy
        value: {}
      - name: topic_arn
        value: '{{ topic_arn }}'
      - name: redrive_policy
        value: {}
      - name: delivery_policy
        value: {}
      - name: region
        value: '{{ region }}'
      - name: subscription_role_arn
        value: '{{ subscription_role_arn }}'
      - name: filter_policy_scope
        value: '{{ filter_policy_scope }}'
      - name: protocol
        value: '{{ protocol }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>subscription</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.sns.subscriptions
SET PatchDocument = string('{{ {
    "ReplayPolicy": replay_policy,
    "RawMessageDelivery": raw_message_delivery,
    "FilterPolicy": filter_policy,
    "RedrivePolicy": redrive_policy,
    "DeliveryPolicy": delivery_policy,
    "Region": region,
    "SubscriptionRoleArn": subscription_role_arn,
    "FilterPolicyScope": filter_policy_scope
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ arn }}'
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
DELETE FROM awscc.sns.subscriptions
WHERE
  Identifier = '{{ arn }}' AND
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

To operate on the <code>subscriptions</code> resource, the following permissions are required:

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
iam:GetRole,
iam:PassRole,
sns:Subscribe
```

</TabItem>
<TabItem value="read">

```json
sns:GetSubscriptionAttributes
```

</TabItem>
<TabItem value="update">

```json
iam:GetRole,
iam:PassRole,
sns:SetSubscriptionAttributes
```

</TabItem>
<TabItem value="delete">

```json
sns:Unsubscribe,
sns:GetSubscriptionAttributes
```

</TabItem>
<TabItem value="list">

```json
sns:ListSubscriptions
```

</TabItem>
</Tabs>