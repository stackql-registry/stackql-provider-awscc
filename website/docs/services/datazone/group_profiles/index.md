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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "domain_id",
    "type": "string",
    "description": "The identifier of the Amazon DataZone domain in which the group profile is created."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The ID of the Amazon DataZone group profile."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-groupprofile.html"><code>AWS::DataZone::GroupProfile</code></a>.

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
    <td><code>group_profiles</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DomainIdentifier, GroupIdentifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>group_profiles</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>group_profiles</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>group_profiles_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>group_profiles</code></td>
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
WHERE region = 'us-east-1' AND Identifier = '{{ domain_id }}|{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>group_profiles</code> in a region.
```sql
SELECT
region,
domain_id,
id
FROM awscc.datazone.group_profiles_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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
'{{ domain_identifier }}',
 '{{ group_identifier }}',
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
 '{{ domain_identifier }}',
 '{{ group_identifier }}',
 '{{ status }}',
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
      - name: domain_identifier
        value: '{{ domain_identifier }}'
      - name: group_identifier
        value: '{{ group_identifier }}'
      - name: status
        value: '{{ status }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>group_profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.datazone.group_profiles
SET PatchDocument = string('{{ {
    "Status": status
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ domain_id }}|{{ id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datazone.group_profiles
WHERE Identifier = '{{ domain_id }}|{{ id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>group_profiles</code> resource, the following permissions are required:

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
datazone:CreateGroupProfile,
datazone:GetGroupProfile,
datazone:UpdateGroupProfile,
sso:ListProfiles,
sso:GetProfile,
sso:AssociateProfile,
sso:DisassociateProfile
```

</TabItem>
<TabItem value="read">

```json
datazone:GetGroupProfile
```

</TabItem>
<TabItem value="update">

```json
datazone:UpdateGroupProfile,
datazone:GetGroupProfile,
sso:ListProfiles,
sso:GetProfile,
sso:AssociateProfile,
sso:DisassociateProfile
```

</TabItem>
<TabItem value="delete">

```json
datazone:DeleteGroupProfile,
datazone:GetGroupProfile,
datazone:UpdateGroupProfile,
sso:ListProfiles,
sso:GetProfile,
sso:AssociateProfile,
sso:DisassociateProfile
```

</TabItem>
<TabItem value="list">

```json
datazone:SearchGroupProfiles
```

</TabItem>
</Tabs>