---
title: managed_notification_additional_channel_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_notification_additional_channel_associations
  - notifications
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

Creates, updates, deletes or gets a <code>managed_notification_additional_channel_association</code> resource or lists <code>managed_notification_additional_channel_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>managed_notification_additional_channel_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Notifications::ManagedNotificationAdditionalChannelAssociation</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.notifications.managed_notification_additional_channel_associations" /></td></tr>
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
    "name": "channel_arn",
    "type": "string",
    "description": "<details><summary>ARN identifier of the channel.</summary>Example: arn:aws:chatbot::123456789012:chat-configuration/slack-channel/security-ops</details>"
  },
  {
    "name": "managed_notification_configuration_arn",
    "type": "string",
    "description": "<details><summary>ARN identifier of the Managed Notification.</summary>Example: arn:aws:notifications::381491923782:managed-notification-configuration/category/AWS-Health/sub-category/Billing</details>"
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
    "name": "channel_arn",
    "type": "string",
    "description": "<details><summary>ARN identifier of the channel.</summary>Example: arn:aws:chatbot::123456789012:chat-configuration/slack-channel/security-ops</details>"
  },
  {
    "name": "managed_notification_configuration_arn",
    "type": "string",
    "description": "<details><summary>ARN identifier of the Managed Notification.</summary>Example: arn:aws:notifications::381491923782:managed-notification-configuration/category/AWS-Health/sub-category/Billing</details>"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-managednotificationadditionalchannelassociation.html"><code>AWS::Notifications::ManagedNotificationAdditionalChannelAssociation</code></a>.

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
    <td><code>managed_notification_additional_channel_associations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ChannelArn, ManagedNotificationConfigurationArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>managed_notification_additional_channel_associations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>managed_notification_additional_channel_associations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>managed_notification_additional_channel_associations</code></td>
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

Gets all properties from an individual <code>managed_notification_additional_channel_association</code>.
```sql
SELECT
  region,
  channel_arn,
  managed_notification_configuration_arn
FROM awscc.notifications.managed_notification_additional_channel_associations
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ channel_arn }}|{{ managed_notification_configuration_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>managed_notification_additional_channel_associations</code> in a region.
```sql
SELECT
  region,
  channel_arn,
  managed_notification_configuration_arn
FROM awscc.notifications.managed_notification_additional_channel_associations_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>managed_notification_additional_channel_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.notifications.managed_notification_additional_channel_associations (
  ChannelArn,
  ManagedNotificationConfigurationArn,
  region
)
SELECT
  '{{ channel_arn }}',
  '{{ managed_notification_configuration_arn }}',
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
INSERT INTO awscc.notifications.managed_notification_additional_channel_associations (
  ChannelArn,
  ManagedNotificationConfigurationArn,
  region
)
SELECT
  '{{ channel_arn }}',
  '{{ managed_notification_configuration_arn }}',
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
  - name: managed_notification_additional_channel_association
    props:
      - name: channel_arn
        value: '{{ channel_arn }}'
      - name: managed_notification_configuration_arn
        value: '{{ managed_notification_configuration_arn }}'`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.notifications.managed_notification_additional_channel_associations
WHERE
  Identifier = '{{ channel_arn }}|{{ managed_notification_configuration_arn }}' AND
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

To operate on the <code>managed_notification_additional_channel_associations</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Read', value: 'read', },
    ]
}>
<TabItem value="create">

```json
notifications:AssociateManagedNotificationAdditionalChannel,
notifications:ListManagedNotificationChannelAssociations
```

</TabItem>
<TabItem value="delete">

```json
notifications:DisassociateManagedNotificationAdditionalChannel,
notifications:ListManagedNotificationChannelAssociations
```

</TabItem>
<TabItem value="list">

```json
notifications:ListManagedNotificationChannelAssociations
```

</TabItem>
<TabItem value="read">

```json
notifications:ListManagedNotificationChannelAssociations
```

</TabItem>
</Tabs>