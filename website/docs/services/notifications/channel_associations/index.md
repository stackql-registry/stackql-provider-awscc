---
title: channel_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - channel_associations
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

Creates, updates, deletes or gets a <code>channel_association</code> resource or lists <code>channel_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>channel_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Notifications::ChannelAssociation</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.notifications.channel_associations" /></td></tr>
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
</TabItem>
<TabItem value="list">

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
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-channelassociation.html"><code>AWS::Notifications::ChannelAssociation</code></a>.

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
    <td><code>channel_associations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Arn, NotificationConfigurationArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>channel_associations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>channel_associations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>channel_associations</code></td>
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

Gets all properties from an individual <code>channel_association</code>.
```sql
SELECT
region,
arn,
notification_configuration_arn
FROM awscc.notifications.channel_associations
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>|<NotificationConfigurationArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>channel_associations</code> in a region.
```sql
SELECT
region,
arn,
notification_configuration_arn
FROM awscc.notifications.channel_associations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>channel_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.notifications.channel_associations (
 Arn,
 NotificationConfigurationArn,
 region
)
SELECT 
'{{ Arn }}',
 '{{ NotificationConfigurationArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.notifications.channel_associations (
 Arn,
 NotificationConfigurationArn,
 region
)
SELECT 
 '{{ Arn }}',
 '{{ NotificationConfigurationArn }}',
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
  - name: channel_association
    props:
      - name: Arn
        value: '{{ Arn }}'
      - name: NotificationConfigurationArn
        value: '{{ NotificationConfigurationArn }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.notifications.channel_associations
WHERE data__Identifier = '<Arn|NotificationConfigurationArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>channel_associations</code> resource, the following permissions are required:

### Create
```json
notifications:AssociateChannel,
notifications:ListChannels
```

### Delete
```json
notifications:DisassociateChannel
```

### List
```json
notifications:ListChannels
```

### Read
```json
notifications:ListChannels
```
