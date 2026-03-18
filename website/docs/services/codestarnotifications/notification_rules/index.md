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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>notification_rules</code> in a region.
```sql
SELECT
  region,
  arn
FROM awscc.codestarnotifications.notification_rules_list_only
WHERE
  region = '{{ region }}';
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
  '{{ event_type_ids }}',
  '{{ detail_type }}',
  '{{ resource }}',
  '{{ targets }}',
  '{{ name }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
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
  '{{ event_type_id }}',
  '{{ created_by }}',
  '{{ target_address }}',
  '{{ event_type_ids }}',
  '{{ status }}',
  '{{ detail_type }}',
  '{{ resource }}',
  '{{ targets }}',
  '{{ tags }}',
  '{{ name }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
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
      - name: event_type_id
        value: '{{ event_type_id }}'
      - name: created_by
        value: '{{ created_by }}'
      - name: target_address
        value: '{{ target_address }}'
      - name: event_type_ids
        value:
          - '{{ event_type_ids[0] }}'
      - name: status
        value: '{{ status }}'
      - name: detail_type
        value: '{{ detail_type }}'
      - name: resource
        value: '{{ resource }}'
      - name: targets
        value:
          - target_type: '{{ target_type }}'
            target_address: '{{ target_address }}'
      - name: tags
        value: {}
      - name: name
        value: '{{ name }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>notification_rule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ arn }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.codestarnotifications.notification_rules
WHERE
  Identifier = '{{ arn }}' AND
  region = '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

## Permissions

To operate on the <code>notification_rules</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'List', value: 'list', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

```json
codestar-notifications:createNotificationRule
```

</TabItem>
<TabItem value="list">

```json
codestar-notifications:listNotificationRules
```

</TabItem>
<TabItem value="read">

```json
codestar-notifications:describeNotificationRule
```

</TabItem>
<TabItem value="delete">

```json
codestar-notifications:deleteNotificationRule,
codestar-notifications:describeNotificationRule
```

</TabItem>
<TabItem value="update">

```json
codestar-notifications:updateNotificationRule,
codestar-notifications:TagResource,
codestar-notifications:UntagResource
```

</TabItem>
</Tabs>