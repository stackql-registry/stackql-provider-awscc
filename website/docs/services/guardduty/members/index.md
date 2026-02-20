---
title: members
hide_title: false
hide_table_of_contents: false
keywords:
  - members
  - guardduty
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

Creates, updates, deletes or gets a <code>member</code> resource or lists <code>members</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>members</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::GuardDuty::Member</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.guardduty.members" /></td></tr>
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
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "member_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "email",
    "type": "string",
    "description": ""
  },
  {
    "name": "message",
    "type": "string",
    "description": ""
  },
  {
    "name": "disable_email_notification",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "detector_id",
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
    "name": "member_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "detector_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html"><code>AWS::GuardDuty::Member</code></a>.

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
    <td><code>members</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Email, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>members</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>members</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>members_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>members</code></td>
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

Gets all properties from an individual <code>member</code>.
```sql
SELECT
region,
status,
member_id,
email,
message,
disable_email_notification,
detector_id
FROM awscc.guardduty.members
WHERE region = 'us-east-1' AND Identifier = '<DetectorId>|<MemberId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>members</code> in a region.
```sql
SELECT
region,
detector_id,
member_id
FROM awscc.guardduty.members_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>member</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.guardduty.members (
 Email,
 region
)
SELECT 
'{{ Email }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.guardduty.members (
 Status,
 MemberId,
 Email,
 Message,
 DisableEmailNotification,
 DetectorId,
 region
)
SELECT 
 '{{ Status }}',
 '{{ MemberId }}',
 '{{ Email }}',
 '{{ Message }}',
 '{{ DisableEmailNotification }}',
 '{{ DetectorId }}',
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
  - name: member
    props:
      - name: Status
        value: '{{ Status }}'
      - name: MemberId
        value: '{{ MemberId }}'
      - name: Email
        value: '{{ Email }}'
      - name: Message
        value: '{{ Message }}'
      - name: DisableEmailNotification
        value: '{{ DisableEmailNotification }}'
      - name: DetectorId
        value: '{{ DetectorId }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>member</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.guardduty.members
SET PatchDocument = string('{{ {
    "Status": status,
    "Email": email,
    "Message": message,
    "DisableEmailNotification": disable_email_notification
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<DetectorId>|<MemberId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.guardduty.members
WHERE Identifier = '<DetectorId|MemberId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>members</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
guardduty:CreateMembers,
guardduty:GetMembers
```

</TabItem>
<TabItem value="read">

```json
guardduty:GetMembers
```

</TabItem>
<TabItem value="delete">

```json
guardduty:GetMembers,
guardduty:DisassociateMembers,
guardduty:DeleteMembers
```

</TabItem>
<TabItem value="update">

```json
guardduty:GetMembers,
guardduty:CreateMembers,
guardduty:DisassociateMembers,
guardduty:StartMonitoringMembers,
guardduty:StopMonitoringMembers,
guardduty:InviteMembers
```

</TabItem>
<TabItem value="list">

```json
guardduty:ListMembers
```

</TabItem>
</Tabs>