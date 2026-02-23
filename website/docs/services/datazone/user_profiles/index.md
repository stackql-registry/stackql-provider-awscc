---
title: user_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - user_profiles
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

Creates, updates, deletes or gets an <code>user_profile</code> resource or lists <code>user_profiles</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>user_profiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A user profile represents Amazon DataZone users. Amazon DataZone supports both IAM roles and SSO identities to interact with the Amazon DataZone Management Console and the data portal for different purposes. Domain administrators use IAM roles to perform the initial administrative domain-related work in the Amazon DataZone Management Console, including creating new Amazon DataZone domains, configuring metadata form types, and implementing policies. Data workers use their SSO corporate identities via Identity Center to log into the Amazon DataZone Data Portal and access projects where they have memberships.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.datazone.user_profiles" /></td></tr>
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
    "name": "details",
    "type": "object",
    "description": ""
  },
  {
    "name": "domain_id",
    "type": "string",
    "description": "The identifier of the Amazon DataZone domain in which the user profile is created."
  },
  {
    "name": "domain_identifier",
    "type": "string",
    "description": "The identifier of the Amazon DataZone domain in which the user profile would be created."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The ID of the Amazon DataZone user profile."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of the user profile."
  },
  {
    "name": "type",
    "type": "string",
    "description": "The type of the user profile."
  },
  {
    "name": "user_identifier",
    "type": "string",
    "description": "The ID of the user."
  },
  {
    "name": "user_type",
    "type": "string",
    "description": "The type of the user."
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
    "description": "The identifier of the Amazon DataZone domain in which the user profile is created."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The ID of the Amazon DataZone user profile."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-userprofile.html"><code>AWS::DataZone::UserProfile</code></a>.

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
    <td><code>user_profiles</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DomainIdentifier, UserIdentifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>user_profiles</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>user_profiles</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>user_profiles_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>user_profiles</code></td>
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

Gets all properties from an individual <code>user_profile</code>.
```sql
SELECT
region,
details,
domain_id,
domain_identifier,
id,
status,
type,
user_identifier,
user_type
FROM awscc.datazone.user_profiles
WHERE region = 'us-east-1' AND Identifier = '{{ domain_id }}|{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>user_profiles</code> in a region.
```sql
SELECT
region,
domain_id,
id
FROM awscc.datazone.user_profiles_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>user_profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.datazone.user_profiles (
 DomainIdentifier,
 UserIdentifier,
 region
)
SELECT
'{{ domain_identifier }}',
 '{{ user_identifier }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.datazone.user_profiles (
 DomainIdentifier,
 Status,
 UserIdentifier,
 UserType,
 region
)
SELECT
 '{{ domain_identifier }}',
 '{{ status }}',
 '{{ user_identifier }}',
 '{{ user_type }}',
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
  - name: user_profile
    props:
      - name: domain_identifier
        value: '{{ domain_identifier }}'
      - name: status
        value: '{{ status }}'
      - name: user_identifier
        value: '{{ user_identifier }}'
      - name: user_type
        value: '{{ user_type }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>user_profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.datazone.user_profiles
SET PatchDocument = string('{{ {
    "Status": status
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ domain_id }}|{{ id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datazone.user_profiles
WHERE Identifier = '{{ domain_id }}|{{ id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>user_profiles</code> resource, the following permissions are required:

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
datazone:CreateUserProfile,
datazone:GetUserProfile,
datazone:UpdateUserProfile,
datazone:GetDomain,
sso:ListProfiles,
sso:GetProfile,
sso:AssociateProfile,
sso:DisassociateProfile,
iam:GetRole,
iam:GetUser
```

</TabItem>
<TabItem value="read">

```json
datazone:GetUserProfile
```

</TabItem>
<TabItem value="update">

```json
datazone:UpdateUserProfile,
datazone:GetUserProfile,
datazone:UpdateUserProfile,
sso:ListProfiles,
sso:GetProfile,
sso:AssociateProfile,
sso:DisassociateProfile,
iam:GetRole,
iam:GetUser
```

</TabItem>
<TabItem value="delete">

```json
datazone:DeleteUserProfile,
datazone:GetUserProfile,
datazone:UpdateUserProfile,
sso:ListProfiles,
sso:GetProfile,
sso:AssociateProfile,
sso:DisassociateProfile,
iam:GetRole,
iam:GetUser
```

</TabItem>
<TabItem value="list">

```json
datazone:SearchUserProfiles
```

</TabItem>
</Tabs>