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
    "description": "ARN identifier of the channel.<br />Example: arn:aws:chatbot::123456789012:chat-configuration/slack-channel/security-ops"
  },
  {
    "name": "managed_notification_configuration_arn",
    "type": "string",
    "description": "ARN identifier of the Managed Notification.<br />Example: arn:aws:notifications::381491923782:managed-notification-configuration/category/AWS-Health/sub-category/Billing"
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
    "description": "ARN identifier of the channel.<br />Example: arn:aws:chatbot::123456789012:chat-configuration/slack-channel/security-ops"
  },
  {
    "name": "managed_notification_configuration_arn",
    "type": "string",
    "description": "ARN identifier of the Managed Notification.<br />Example: arn:aws:notifications::381491923782:managed-notification-configuration/category/AWS-Health/sub-category/Billing"
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
WHERE region = 'us-east-1' AND Identifier = '<ChannelArn>|<ManagedNotificationConfigurationArn>';
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
WHERE region = 'us-east-1';
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
'{{ ChannelArn }}',
 '{{ ManagedNotificationConfigurationArn }}',
'{{ region }}';
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
 '{{ ChannelArn }}',
 '{{ ManagedNotificationConfigurationArn }}',
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
  - name: managed_notification_additional_channel_association
    props:
      - name: ChannelArn
        value: '{{ ChannelArn }}'
      - name: ManagedNotificationConfigurationArn
        value: '{{ ManagedNotificationConfigurationArn }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.notifications.managed_notification_additional_channel_associations
WHERE Identifier = '<ChannelArn|ManagedNotificationConfigurationArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>managed_notification_additional_channel_associations</code> resource, the following permissions are required:

### Create
```json
notifications:AssociateManagedNotificationAdditionalChannel,
notifications:ListManagedNotificationChannelAssociations
```

### Delete
```json
notifications:DisassociateManagedNotificationAdditionalChannel,
notifications:ListManagedNotificationChannelAssociations
```

### List
```json
notifications:ListManagedNotificationChannelAssociations
```

### Read
```json
notifications:ListManagedNotificationChannelAssociations
```
