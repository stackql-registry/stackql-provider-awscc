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
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

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
    "description": ""
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "event_pattern",
    "type": "string",
    "description": ""
  },
  {
    "name": "event_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "managed_rules",
    "type": "array",
    "description": ""
  },
  {
    "name": "notification_configuration_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "regions",
    "type": "array",
    "description": ""
  },
  {
    "name": "source",
    "type": "string",
    "description": ""
  },
  {
    "name": "status_summary_by_region",
    "type": "object",
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
    "name": "arn",
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
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-eventrule.html"><code>AWS::Notifications::EventRule</code></a>.

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
    <td><code>event_rules</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="EventType, NotificationConfigurationArn, Regions, Source, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>event_rules</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>event_rules</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>event_rules_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>event_rules</code></td>
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
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>event_rules</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.notifications.event_rules_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>event_rule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.notifications.event_rules
SET PatchDocument = string('{{ {
    "EventPattern": event_pattern,
    "Regions": regions
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.notifications.event_rules
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>event_rules</code> resource, the following permissions are required:

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
notifications:CreateEventRule,
notifications:UpdateEventRule,
notifications:GetEventRule
```

</TabItem>
<TabItem value="read">

```json
notifications:GetEventRule
```

</TabItem>
<TabItem value="update">

```json
notifications:UpdateEventRule,
notifications:GetEventRule
```

</TabItem>
<TabItem value="delete">

```json
notifications:DeleteEventRule,
notifications:GetEventRule
```

</TabItem>
<TabItem value="list">

```json
notifications:ListEventRules,
notifications:GetEventRule
```

</TabItem>
</Tabs>