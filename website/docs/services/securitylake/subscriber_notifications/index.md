---
title: subscriber_notifications
hide_title: false
hide_table_of_contents: false
keywords:
  - subscriber_notifications
  - securitylake
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

Creates, updates, deletes or gets a <code>subscriber_notification</code> resource or lists <code>subscriber_notifications</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>subscriber_notifications</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SecurityLake::SubscriberNotification</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.securitylake.subscriber_notifications" /></td></tr>
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
    "name": "notification_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "https_notification_configuration",
        "type": "object",
        "description": "The configuration for HTTPS subscriber notification.",
        "children": [
          {
            "name": "authorization_api_key_name",
            "type": "string",
            "description": "The key name for the notification subscription."
          },
          {
            "name": "authorization_api_key_value",
            "type": "string",
            "description": "The key value for the notification subscription."
          },
          {
            "name": "endpoint",
            "type": "string",
            "description": "The subscription endpoint in Security Lake."
          },
          {
            "name": "http_method",
            "type": "string",
            "description": "The HTTPS method used for the notification subscription."
          },
          {
            "name": "target_role_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the EventBridge API destinations IAM role that you created."
          }
        ]
      },
      {
        "name": "sqs_notification_configuration",
        "type": "object",
        "description": "The configurations for SQS subscriber notification. The members of this structure are context-dependent."
      }
    ]
  },
  {
    "name": "subscriber_arn",
    "type": "string",
    "description": "The ARN for the subscriber"
  },
  {
    "name": "subscriber_endpoint",
    "type": "string",
    "description": "The endpoint the subscriber should listen to for notifications"
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
    "name": "subscriber_arn",
    "type": "string",
    "description": "The ARN for the subscriber"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscribernotification.html"><code>AWS::SecurityLake::SubscriberNotification</code></a>.

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
    <td><code>subscriber_notifications</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="SubscriberArn, NotificationConfiguration, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>subscriber_notifications</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>subscriber_notifications</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>subscriber_notifications_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>subscriber_notifications</code></td>
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

Gets all properties from an individual <code>subscriber_notification</code>.
```sql
SELECT
region,
notification_configuration,
subscriber_arn,
subscriber_endpoint
FROM awscc.securitylake.subscriber_notifications
WHERE region = 'us-east-1' AND Identifier = '<SubscriberArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>subscriber_notifications</code> in a region.
```sql
SELECT
region,
subscriber_arn
FROM awscc.securitylake.subscriber_notifications_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>subscriber_notification</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.securitylake.subscriber_notifications (
 NotificationConfiguration,
 SubscriberArn,
 region
)
SELECT 
'{{ NotificationConfiguration }}',
 '{{ SubscriberArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.securitylake.subscriber_notifications (
 NotificationConfiguration,
 SubscriberArn,
 region
)
SELECT 
 '{{ NotificationConfiguration }}',
 '{{ SubscriberArn }}',
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
  - name: subscriber_notification
    props:
      - name: NotificationConfiguration
        value:
          HttpsNotificationConfiguration:
            AuthorizationApiKeyName: '{{ AuthorizationApiKeyName }}'
            AuthorizationApiKeyValue: '{{ AuthorizationApiKeyValue }}'
            Endpoint: '{{ Endpoint }}'
            HttpMethod: '{{ HttpMethod }}'
            TargetRoleArn: '{{ TargetRoleArn }}'
          SqsNotificationConfiguration: {}
      - name: SubscriberArn
        value: '{{ SubscriberArn }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>subscriber_notification</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.securitylake.subscriber_notifications
SET PatchDocument = string('{{ {
    "NotificationConfiguration": notification_configuration
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<SubscriberArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.securitylake.subscriber_notifications
WHERE Identifier = '<SubscriberArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>subscriber_notifications</code> resource, the following permissions are required:

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
securitylake:CreateDataLake,
securitylake:CreateSubscriber,
securitylake:CreateSubscriberNotification,
securitylake:GetSubscriber,
iam:CreateServiceLinkedRole,
iam:PutRolePolicy,
iam:DeleteRolePolicy,
iam:PassRole,
s3:PutBucketNotification,
s3:GetBucketNotification,
events:CreateApiDestination,
events:CreateConnection,
events:CreateRule,
events:UpdateConnection,
events:DeleteConnection,
events:UpdateApiDestination,
events:DeleteApiDestination,
events:ListApiDestinations,
events:ListConnections,
events:PutRule,
events:DescribeRule,
events:DeleteRule,
events:PutTargets,
events:RemoveTargets,
events:ListTargetsByRule,
secretsmanager:CreateSecret,
sqs:CreateQueue,
sqs:GetQueueAttributes,
sqs:GetQueueUrl,
sqs:SetQueueAttributes
```

</TabItem>
<TabItem value="read">

```json
securitylake:GetSubscriber
```

</TabItem>
<TabItem value="update">

```json
securitylake:UpdateSubscriberNotification,
securitylake:GetSubscriber,
iam:CreateServiceLinkedRole,
iam:PutRolePolicy,
iam:DeleteRolePolicy,
iam:PassRole,
events:CreateApiDestination,
events:CreateConnection,
events:UpdateConnection,
events:DeleteConnection,
events:UpdateApiDestination,
events:DeleteApiDestination,
events:DeleteRule,
events:ListApiDestinations,
events:ListConnections,
events:PutRule,
events:DescribeRule,
events:DeleteRule,
events:PutTargets,
events:RemoveTargets,
events:ListTargetsByRule,
secretsmanager:CreateSecret,
s3:GetBucketNotificationConfiguration,
s3:PutBucketNotificationConfiguration,
s3:PutBucketNotification,
s3:GetBucketNotification,
sqs:CreateQueue,
sqs:DeleteQueue,
sqs:GetQueueAttributes,
sqs:SetQueueAttributes
```

</TabItem>
<TabItem value="delete">

```json
securitylake:DeleteSubscriberNotification,
securitylake:GetSubscriber,
iam:DeleteRole,
iam:DeleteRolePolicy,
events:DeleteApiDestination,
events:DeleteConnection,
events:DeleteRule,
events:ListTargetsByRule,
events:DescribeRule,
events:RemoveTargets,
sqs:DeleteQueue
```

</TabItem>
<TabItem value="list">

```json
securitylake:ListSubscribers
```

</TabItem>
</Tabs>