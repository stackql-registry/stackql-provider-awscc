---
title: group_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - group_profiles
  - datazone
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

Creates, updates, deletes or gets a <code>group_profile</code> resource or lists <code>group_profiles</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>group_profiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Group profiles represent groups of Amazon DataZone users. Groups can be manually created, or mapped to Active Directory groups of enterprise customers. In Amazon DataZone, groups serve two purposes. First, a group can map to a team of users in the organizational chart, and thus reduce the administrative work of a Amazon DataZone project owner when there are new employees joining or leaving a team. Second, corporate administrators use Active Directory groups to manage and update user statuses and so Amazon DataZone domain administrators can use these group memberships to implement Amazon DataZone domain policies.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.datazone.group_profiles" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "domain_id",
    "type": "string",
    "description": "The identifier of the Amazon DataZone domain in which the group profile is created."
  },
  {
    "name": "domain_identifier",
    "type": "string",
    "description": "The identifier of the Amazon DataZone domain in which the group profile would be created."
  },
  {
    "name": "group_identifier",
    "type": "string",
    "description": "The ID of the group."
  },
  {
    "name": "group_name",
    "type": "string",
    "description": "The group-name of the Group Profile."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The ID of the Amazon DataZone group profile."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of the group profile."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-groupprofile.html"><code>AWS::DataZone::GroupProfile</code></a>.

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
    <td><CopyableCode code="DomainIdentifier, GroupIdentifier, region" /></td>
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

Gets all properties from an individual <code>group_profile</code>.
```sql
SELECT
region,
domain_id,
domain_identifier,
group_identifier,
group_name,
id,
status
FROM awscc.datazone.group_profiles
WHERE region = 'us-east-1' AND data__Identifier = '<DomainId>|<Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>group_profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.datazone.group_profiles (
 DomainIdentifier,
 GroupIdentifier,
 region
)
SELECT 
'{{ DomainIdentifier }}',
 '{{ GroupIdentifier }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.datazone.group_profiles (
 DomainIdentifier,
 GroupIdentifier,
 Status,
 region
)
SELECT 
 '{{ DomainIdentifier }}',
 '{{ GroupIdentifier }}',
 '{{ Status }}',
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
  - name: group_profile
    props:
      - name: DomainIdentifier
        value: '{{ DomainIdentifier }}'
      - name: GroupIdentifier
        value: '{{ GroupIdentifier }}'
      - name: Status
        value: '{{ Status }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datazone.group_profiles
WHERE data__Identifier = '<DomainId|Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>group_profiles</code> resource, the following permissions are required:

### Create
```json
datazone:CreateGroupProfile,
datazone:GetGroupProfile,
datazone:UpdateGroupProfile,
sso:ListProfiles,
sso:GetProfile,
sso:AssociateProfile,
sso:DisassociateProfile
```

### Read
```json
datazone:GetGroupProfile
```

### Update
```json
datazone:UpdateGroupProfile,
datazone:GetGroupProfile,
sso:ListProfiles,
sso:GetProfile,
sso:AssociateProfile,
sso:DisassociateProfile
```

### Delete
```json
datazone:DeleteGroupProfile,
datazone:GetGroupProfile,
datazone:UpdateGroupProfile,
sso:ListProfiles,
sso:GetProfile,
sso:AssociateProfile,
sso:DisassociateProfile
```

### List
```json
datazone:SearchGroupProfiles
```
