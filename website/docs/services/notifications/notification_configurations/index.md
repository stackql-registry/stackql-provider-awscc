---
title: notification_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - notification_configurations
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

Creates, updates, deletes or gets a <code>notification_configuration</code> resource or lists <code>notification_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>notification_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Notifications::NotificationConfiguration</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.notifications.notification_configurations" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="aggregation_duration" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="creation_time" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="status" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>A list of tags that are attached to the role.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-notificationconfiguration.html"><code>AWS::Notifications::NotificationConfiguration</code></a>.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="create_resource" /></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Description, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples
Gets all <code>notification_configurations</code> in a region.
```sql
SELECT
region,
aggregation_duration,
arn,
creation_time,
description,
name,
status,
tags
FROM awscc.notifications.notification_configurations
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>notification_configuration</code>.
```sql
SELECT
region,
aggregation_duration,
arn,
creation_time,
description,
name,
status,
tags
FROM awscc.notifications.notification_configurations
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>notification_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.notifications.notification_configurations (
 Description,
 Name,
 region
)
SELECT 
'{{ Description }}',
 '{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.notifications.notification_configurations (
 AggregationDuration,
 Description,
 Name,
 Tags,
 region
)
SELECT 
 '{{ AggregationDuration }}',
 '{{ Description }}',
 '{{ Name }}',
 '{{ Tags }}',
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
  - name: notification_configuration
    props:
      - name: AggregationDuration
        value: '{{ AggregationDuration }}'
      - name: Description
        value: '{{ Description }}'
      - name: Name
        value: '{{ Name }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.notifications.notification_configurations
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>notification_configurations</code> resource, the following permissions are required:

### Create
```json
notifications:CreateNotificationConfiguration,
notifications:GetNotificationConfiguration,
notifications:UpdateNotificationConfiguration,
notifications:TagResource,
notifications:UntagResource,
notifications:ListTagsForResource,
iam:CreateServiceLinkedRole
```

### Read
```json
notifications:GetNotificationConfiguration,
notifications:ListTagsForResource,
notifications:TagResource,
notifications:UntagResource
```

### Update
```json
notifications:CreateNotificationConfiguration,
notifications:GetNotificationConfiguration,
notifications:UpdateNotificationConfiguration,
notifications:TagResource,
notifications:UntagResource,
notifications:ListTagsForResource
```

### Delete
```json
notifications:DeleteNotificationConfiguration
```

### List
```json
notifications:ListNotificationConfigurations,
notifications:ListTagsForResource
```
