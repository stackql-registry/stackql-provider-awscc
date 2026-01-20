---
title: channel_associations_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - channel_associations_list_only
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

Lists <code>channel_associations</code> in a region or regions, for all properties use <a href="/services/notifications/channel_associations/"><code>channel_associations</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>channel_associations_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Notifications::ChannelAssociation</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.notifications.channel_associations_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": "ARN identifier of the channel.<br />Example: arn:aws:chatbot::123456789012:chat-configuration/slack-channel/security-ops"
  },
  {
    "name": "notification_configuration_arn",
    "type": "string",
    "description": "ARN identifier of the NotificationConfiguration.<br />Example: arn:aws:notifications::123456789012:configuration/a01jes88qxwkbj05xv9c967pgm1"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

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
Lists all <code>channel_associations</code> in a region.
```sql
SELECT
region,
arn,
notification_configuration_arn
FROM awscc.notifications.channel_associations_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>channel_associations_list_only</code> resource, see <a href="/services/notifications/channel_associations/#permissions"><code>channel_associations</code></a>

