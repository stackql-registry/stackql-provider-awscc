---
title: notification_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - notification_rules
  - codestarnotifications
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

Creates, updates, deletes or gets a <code>notification_rule</code> resource or lists <code>notification_rules</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>notification_rules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::CodeStarNotifications::NotificationRule</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.codestarnotifications.notification_rules" /></td></tr>
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
    "name": "event_type_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "created_by",
    "type": "string",
    "description": ""
  },
  {
    "name": "target_address",
    "type": "string",
    "description": ""
  },
  {
    "name": "event_type_ids",
    "type": "array",
    "description": ""
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "detail_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "resource",
    "type": "string",
    "description": ""
  },
  {
    "name": "targets",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "target_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "target_address",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
    "type": "object",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarnotifications-notificationrule.html"><code>AWS::CodeStarNotifications::NotificationRule</code></a>.

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
    <td><code>notification_rules</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="EventTypeIds, Resource, DetailType, Targets, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>notification_rules</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>notification_rules</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>notification_rules_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>notification_rules</code></td>
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

Gets all properties from an individual <code>notification_rule</code>.
```sql
SELECT
region,
event_type_id,
created_by,
target_address,
event_type_ids,
status,
detail_type,
resource,
targets,
tags,
name,
arn
FROM awscc.codestarnotifications.notification_rules
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>notification_rules</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.codestarnotifications.notification_rules_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>notification_rule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.codestarnotifications.notification_rules (
 EventTypeIds,
 DetailType,
 Resource,
 Targets,
 Name,
 region
)
SELECT 
'{{ EventTypeIds }}',
 '{{ DetailType }}',
 '{{ Resource }}',
 '{{ Targets }}',
 '{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.codestarnotifications.notification_rules (
 EventTypeId,
 CreatedBy,
 TargetAddress,
 EventTypeIds,
 Status,
 DetailType,
 Resource,
 Targets,
 Tags,
 Name,
 region
)
SELECT 
 '{{ EventTypeId }}',
 '{{ CreatedBy }}',
 '{{ TargetAddress }}',
 '{{ EventTypeIds }}',
 '{{ Status }}',
 '{{ DetailType }}',
 '{{ Resource }}',
 '{{ Targets }}',
 '{{ Tags }}',
 '{{ Name }}',
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
  - name: notification_rule
    props:
      - name: EventTypeId
        value: '{{ EventTypeId }}'
      - name: CreatedBy
        value: '{{ CreatedBy }}'
      - name: TargetAddress
        value: '{{ TargetAddress }}'
      - name: EventTypeIds
        value:
          - '{{ EventTypeIds[0] }}'
      - name: Status
        value: '{{ Status }}'
      - name: DetailType
        value: '{{ DetailType }}'
      - name: Resource
        value: '{{ Resource }}'
      - name: Targets
        value:
          - TargetType: '{{ TargetType }}'
            TargetAddress: '{{ TargetAddress }}'
      - name: Tags
        value: {}
      - name: Name
        value: '{{ Name }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.codestarnotifications.notification_rules
SET PatchDocument = string('{{ {
    "EventTypeId": event_type_id,
    "CreatedBy": created_by,
    "TargetAddress": target_address,
    "EventTypeIds": event_type_ids,
    "Status": status,
    "DetailType": detail_type,
    "Targets": targets,
    "Tags": tags,
    "Name": name
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.codestarnotifications.notification_rules
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>notification_rules</code> resource, the following permissions are required:

### Create
```json
codestar-notifications:createNotificationRule
```

### List
```json
codestar-notifications:listNotificationRules
```

### Read
```json
codestar-notifications:describeNotificationRule
```

### Delete
```json
codestar-notifications:deleteNotificationRule,
codestar-notifications:describeNotificationRule
```

### Update
```json
codestar-notifications:updateNotificationRule,
codestar-notifications:TagResource,
codestar-notifications:UntagResource
```
