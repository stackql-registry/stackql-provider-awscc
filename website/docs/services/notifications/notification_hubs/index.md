---
title: notification_hubs
hide_title: false
hide_table_of_contents: false
keywords:
  - notification_hubs
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

Creates, updates, deletes or gets a <code>notification_hub</code> resource or lists <code>notification_hubs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>notification_hubs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Notifications::NotificationHub</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.notifications.notification_hubs" /></td></tr>
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
    "name": "region",
    "type": "string",
    "description": "Region that NotificationHub is present in."
  },
  {
    "name": "notification_hub_status_summary",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "notification_hub_status",
        "type": "string",
        "description": ""
      },
      {
        "name": "notification_hub_status_reason",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "creation_time",
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "region",
    "type": "string",
    "description": "Region that NotificationHub is present in."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-notificationhub.html"><code>AWS::Notifications::NotificationHub</code></a>.

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
    <td><code>notification_hubs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Region, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>notification_hubs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>notification_hubs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>notification_hubs</code></td>
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

Gets all properties from an individual <code>notification_hub</code>.
```sql
SELECT
region,
region,
notification_hub_status_summary,
creation_time
FROM awscc.notifications.notification_hubs
WHERE region = 'us-east-1' AND Identifier = '<Region>';
```
</TabItem>
<TabItem value="list">

Lists all <code>notification_hubs</code> in a region.
```sql
SELECT
region,
region
FROM awscc.notifications.notification_hubs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>notification_hub</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.notifications.notification_hubs (
 Region,
 region
)
SELECT 
'{{ Region }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.notifications.notification_hubs (
 Region,
 region
)
SELECT 
 '{{ Region }}',
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
  - name: notification_hub
    props:
      - name: Region
        value: '{{ Region }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.notifications.notification_hubs
WHERE Identifier = '<Region>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>notification_hubs</code> resource, the following permissions are required:

### Read
```json
notifications:ListNotificationHubs
```

### Create
```json
notifications:RegisterNotificationHub,
notifications:ListNotificationHubs,
iam:CreateServiceLinkedRole
```

### Delete
```json
notifications:DeregisterNotificationHub,
notifications:ListNotificationHubs
```

### List
```json
notifications:ListNotificationHubs
```
