---
title: managed_notification_additional_channel_associations_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_notification_additional_channel_associations_list_only
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

Lists <code>managed_notification_additional_channel_associations</code> in a region or regions, for all properties use <a href="/services/notifications/managed_notification_additional_channel_associations/"><code>managed_notification_additional_channel_associations</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>managed_notification_additional_channel_associations_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Notifications::ManagedNotificationAdditionalChannelAssociation</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.notifications.managed_notification_additional_channel_associations_list_only" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="channel_arn" /></td><td><code>string</code></td><td>ARN identifier of the channel.<br />Example: arn:aws:chatbot::123456789012:chat-configuration/slack-channel/security-ops</td></tr>
<tr><td><CopyableCode code="managed_notification_configuration_arn" /></td><td><code>string</code></td><td>ARN identifier of the Managed Notification.<br />Example: arn:aws:notifications::381491923782:managed-notification-configuration/category/AWS-Health/sub-category/Billing</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples
Lists all <code>managed_notification_additional_channel_associations</code> in a region.
```sql
SELECT
region,
channel_arn,
managed_notification_configuration_arn
FROM awscc.notifications.managed_notification_additional_channel_associations_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>managed_notification_additional_channel_associations_list_only</code> resource, see <a href="/services/notifications/managed_notification_additional_channel_associations/#permissions"><code>managed_notification_additional_channel_associations</code></a>

