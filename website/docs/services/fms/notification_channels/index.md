---
title: notification_channels
hide_title: false
hide_table_of_contents: false
keywords:
  - notification_channels
  - fms
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

Creates, updates, deletes or gets a <code>notification_channel</code> resource or lists <code>notification_channels</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>notification_channels</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Designates the IAM role and Amazon Simple Notification Service (SNS) topic that AWS Firewall Manager uses to record SNS logs.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.fms.notification_channels" /></td></tr>
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
    "name": "sns_role_name",
    "type": "string",
    "description": "A resource ARN."
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-notificationchannel.html"><code>AWS::FMS::NotificationChannel</code></a>.

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
    <td><code>notification_channels</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="SnsRoleName, SnsTopicArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>notification_channels</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>notification_channels</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>notification_channels_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>notification_channels</code></td>
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

Gets all properties from an individual <code>notification_channel</code>.
```sql
SELECT
region,
sns_role_name,
sns_topic_arn
FROM awscc.fms.notification_channels
WHERE region = 'us-east-1' AND Identifier = '<SnsTopicArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>notification_channels</code> in a region.
```sql
SELECT
region,
sns_topic_arn
FROM awscc.fms.notification_channels_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>notification_channel</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.fms.notification_channels (
 SnsRoleName,
 SnsTopicArn,
 region
)
SELECT 
'{{ SnsRoleName }}',
 '{{ SnsTopicArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.fms.notification_channels (
 SnsRoleName,
 SnsTopicArn,
 region
)
SELECT 
 '{{ SnsRoleName }}',
 '{{ SnsTopicArn }}',
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
  - name: notification_channel
    props:
      - name: SnsRoleName
        value: '{{ SnsRoleName }}'
      - name: SnsTopicArn
        value: null

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.fms.notification_channels
SET PatchDocument = string('{{ {
    "SnsRoleName": sns_role_name,
    "SnsTopicArn": sns_topic_arn
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<SnsTopicArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.fms.notification_channels
WHERE Identifier = '<SnsTopicArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>notification_channels</code> resource, the following permissions are required:

### Create
```json
fms:PutNotificationChannel,
iam:PassRole
```

### Update
```json
fms:PutNotificationChannel,
iam:PassRole
```

### Read
```json
fms:GetNotificationChannel
```

### Delete
```json
fms:DeleteNotificationChannel
```

### List
```json
fms:GetNotificationChannel
```
