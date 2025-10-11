---
title: event_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - event_rules
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

Creates, updates, deletes or gets an <code>event_rule</code> resource or lists <code>event_rules</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>event_rules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Notifications::EventRule</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.notifications.event_rules" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="creation_time" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="event_pattern" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="event_type" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="managed_rules" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="notification_configuration_arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="regions" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="source" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="status_summary_by_region" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-eventrule.html"><code>AWS::Notifications::EventRule</code></a>.

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
    <td><CopyableCode code="EventType, NotificationConfigurationArn, Regions, Source, region" /></td>
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
Gets all <code>event_rules</code> in a region.
```sql
SELECT
region,
arn,
creation_time,
event_pattern,
event_type,
managed_rules,
notification_configuration_arn,
regions,
source,
status_summary_by_region
FROM awscc.notifications.event_rules
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>event_rule</code>.
```sql
SELECT
region,
arn,
creation_time,
event_pattern,
event_type,
managed_rules,
notification_configuration_arn,
regions,
source,
status_summary_by_region
FROM awscc.notifications.event_rules
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>event_rule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.notifications.event_rules (
 EventType,
 NotificationConfigurationArn,
 Regions,
 Source,
 region
)
SELECT 
'{{ EventType }}',
 '{{ NotificationConfigurationArn }}',
 '{{ Regions }}',
 '{{ Source }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.notifications.event_rules (
 EventPattern,
 EventType,
 NotificationConfigurationArn,
 Regions,
 Source,
 region
)
SELECT 
 '{{ EventPattern }}',
 '{{ EventType }}',
 '{{ NotificationConfigurationArn }}',
 '{{ Regions }}',
 '{{ Source }}',
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
  - name: event_rule
    props:
      - name: EventPattern
        value: '{{ EventPattern }}'
      - name: EventType
        value: '{{ EventType }}'
      - name: NotificationConfigurationArn
        value: '{{ NotificationConfigurationArn }}'
      - name: Regions
        value:
          - '{{ Regions[0] }}'
      - name: Source
        value: '{{ Source }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.notifications.event_rules
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>event_rules</code> resource, the following permissions are required:

### Create
```json
notifications:CreateEventRule,
notifications:UpdateEventRule,
notifications:GetEventRule
```

### Read
```json
notifications:GetEventRule
```

### Update
```json
notifications:UpdateEventRule,
notifications:GetEventRule
```

### Delete
```json
notifications:DeleteEventRule,
notifications:GetEventRule
```

### List
```json
notifications:ListEventRules,
notifications:GetEventRule
```
