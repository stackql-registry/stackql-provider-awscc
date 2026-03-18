---
title: event_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - event_subscriptions
  - rds
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

Creates, updates, deletes or gets an <code>event_subscription</code> resource or lists <code>event_subscriptions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>event_subscriptions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The <code>AWS::RDS::EventSubscription</code> resource allows you to receive notifications for Amazon Relational Database Service events through the Amazon Simple Notification Service (Amazon SNS). For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html">Using Amazon RDS Event Notification</a> in the <i>Amazon RDS User Guide</i>.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.rds.event_subscriptions" /></td></tr>
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
    "name": "tags",
    "type": "array",
    "description": "An optional array of key-value pairs to apply to this subscription.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with <code>aws:</code> or <code>rds:</code>. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: \"^([\\\\p&#123;L&#125;\\\\p&#123;Z&#125;\\\\p&#123;N&#125;_.:/=+\\\\-@]*)$\")."
      },
      {
        "name": "value",
        "type": "string",
        "description": "A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with <code>aws:</code> or <code>rds:</code>. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: \"^([\\\\p&#123;L&#125;\\\\p&#123;Z&#125;\\\\p&#123;N&#125;_.:/=+\\\\-@]*)$\")."
      }
    ]
  },
  {
    "name": "subscription_name",
    "type": "string",
    "description": "<details><summary>The name of the subscription.</summary>Constraints: The name must be less than 255 characters.</details>"
  },
  {
    "name": "enabled",
    "type": "boolean",
    "description": "Specifies whether to activate the subscription. If the event notification subscription isn't activated, the subscription is created but not active."
  },
  {
    "name": "event_categories",
    "type": "array",
    "description": "A list of event categories for a particular source type (<code>SourceType</code>) that you want to subscribe to. You can see a list of the categories for a given source type in the \"Amazon RDS event categories and event messages\" section of the <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.Messages.html\">Amazon RDS User Guide</a> or the <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Events.Messages.html\">Amazon Aurora User Guide</a>. You can also see this list by using the <code>DescribeEventCategories</code> operation."
  },
  {
    "name": "sns_topic_arn",
    "type": "string",
    "description": "<details><summary>The Amazon Resource Name (ARN) of the SNS topic created for event notification. SNS automatically creates the ARN when you create a topic and subscribe to it.</summary>RDS doesn't support FIFO (first in, first out) topics. For more information, see <a href=\"https://docs.aws.amazon.com/sns/latest/dg/sns-fifo-topics.html\">Message ordering and deduplication (FIFO topics)</a> in the <i>Amazon Simple Notification Service Developer Guide</i>.</details>"
  },
  {
    "name": "source_ids",
    "type": "array",
    "description": "<details><summary>The list of identifiers of the event sources for which events are returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens. It can't end with a hyphen or contain two consecutive hyphens.</summary>Constraints:<br />+  If <code>SourceIds</code> are supplied, <code>SourceType</code> must also be provided.<br />+  If the source type is a DB instance, a <code>DBInstanceIdentifier</code> value must be supplied.<br />+  If the source type is a DB cluster, a <code>DBClusterIdentifier</code> value must be supplied.<br />+  If the source type is a DB parameter group, a <code>DBParameterGroupName</code> value must be supplied.<br />+  If the source type is a DB security group, a <code>DBSecurityGroupName</code> value must be supplied.<br />+  If the source type is a DB snapshot, a <code>DBSnapshotIdentifier</code> value must be supplied.<br />+  If the source type is a DB cluster snapshot, a <code>DBClusterSnapshotIdentifier</code> value must be supplied.<br />+  If the source type is an RDS Proxy, a <code>DBProxyName</code> value must be supplied.</details>"
  },
  {
    "name": "source_type",
    "type": "string",
    "description": "<details><summary>The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you set this parameter to <code>db-instance</code>. For RDS Proxy events, specify <code>db-proxy</code>. If this value isn't specified, all events are returned.</summary>Valid Values:<code>db-instance | db-cluster | db-parameter-group | db-security-group | db-snapshot | db-cluster-snapshot | db-proxy | zero-etl | custom-engine-version | blue-green-deployment</code></details>"
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
    "name": "subscription_name",
    "type": "string",
    "description": "<details><summary>The name of the subscription.</summary>Constraints: The name must be less than 255 characters.</details>"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-eventsubscription.html"><code>AWS::RDS::EventSubscription</code></a>.

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
    <td><code>event_subscriptions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="SnsTopicArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>event_subscriptions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>event_subscriptions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>event_subscriptions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>event_subscriptions</code></td>
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

Gets all properties from an individual <code>event_subscription</code>.
```sql
SELECT
  region,
  tags,
  subscription_name,
  enabled,
  event_categories,
  sns_topic_arn,
  source_ids,
  source_type
FROM awscc.rds.event_subscriptions
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ subscription_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>event_subscriptions</code> in a region.
```sql
SELECT
  region,
  subscription_name
FROM awscc.rds.event_subscriptions_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>event_subscription</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.rds.event_subscriptions (
  SnsTopicArn,
  region
)
SELECT
  '{{ sns_topic_arn }}',
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
INSERT INTO awscc.rds.event_subscriptions (
  Tags,
  SubscriptionName,
  Enabled,
  EventCategories,
  SnsTopicArn,
  SourceIds,
  SourceType,
  region
)
SELECT
  '{{ tags }}',
  '{{ subscription_name }}',
  '{{ enabled }}',
  '{{ event_categories }}',
  '{{ sns_topic_arn }}',
  '{{ source_ids }}',
  '{{ source_type }}',
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
  - name: event_subscription
    props:
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: subscription_name
        value: '{{ subscription_name }}'
      - name: enabled
        value: '{{ enabled }}'
      - name: event_categories
        value:
          - '{{ event_categories[0] }}'
      - name: sns_topic_arn
        value: '{{ sns_topic_arn }}'
      - name: source_ids
        value:
          - '{{ source_ids[0] }}'
      - name: source_type
        value: '{{ source_type }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>event_subscription</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.rds.event_subscriptions
SET PatchDocument = string('{{ {
    "Tags": tags,
    "Enabled": enabled,
    "EventCategories": event_categories,
    "SourceIds": source_ids,
    "SourceType": source_type
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ subscription_name }}'
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
DELETE FROM awscc.rds.event_subscriptions
WHERE
  Identifier = '{{ subscription_name }}' AND
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

To operate on the <code>event_subscriptions</code> resource, the following permissions are required:

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
iam:CreateServiceLinkedRole,
rds:CreateEventSubscription,
rds:DescribeEventSubscriptions,
rds:ListTagsForResource,
rds:AddTagsToResource,
rds:RemoveTagsFromResource
```

</TabItem>
<TabItem value="read">

```json
rds:DescribeEventSubscriptions,
rds:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
rds:ModifyEventSubscription,
rds:AddSourceIdentifierToSubscription,
rds:RemoveSourceIdentifierFromSubscription,
rds:DescribeEventSubscriptions,
rds:ListTagsForResource,
rds:AddTagsToResource,
rds:RemoveTagsFromResource
```

</TabItem>
<TabItem value="delete">

```json
rds:DeleteEventSubscription,
rds:DescribeEventSubscriptions
```

</TabItem>
<TabItem value="list">

```json
rds:DescribeEventSubscriptions
```

</TabItem>
</Tabs>