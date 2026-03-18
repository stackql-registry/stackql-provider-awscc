---
title: group_memberships
hide_title: false
hide_table_of_contents: false
keywords:
  - group_memberships
  - identitystore
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

Creates, updates, deletes or gets a <code>group_membership</code> resource or lists <code>group_memberships</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>group_memberships</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type Definition for AWS:IdentityStore::GroupMembership</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.identitystore.group_memberships" /></td></tr>
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
    "name": "group_id",
    "type": "string",
    "description": "The unique identifier for a group in the identity store."
  },
  {
    "name": "identity_store_id",
    "type": "string",
    "description": "The globally unique identifier for the identity store."
  },
  {
    "name": "member_id",
    "type": "object",
    "description": "An object containing the identifier of a group member.",
    "children": [
      {
        "name": "user_id",
        "type": "string",
        "description": "The identifier for a user in the identity store."
      }
    ]
  },
  {
    "name": "membership_id",
    "type": "string",
    "description": "The identifier for a GroupMembership in the identity store."
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
    "name": "identity_store_id",
    "type": "string",
    "description": "The globally unique identifier for the identity store."
  },
  {
    "name": "membership_id",
    "type": "string",
    "description": "The identifier for a GroupMembership in the identity store."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-identitystore-groupmembership.html"><code>AWS::IdentityStore::GroupMembership</code></a>.

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
    <td><code>group_memberships</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="IdentityStoreId, GroupId, MemberId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>group_memberships</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>group_memberships_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>group_memberships</code></td>
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

Gets all properties from an individual <code>group_membership</code>.
```sql
SELECT
  region,
  group_id,
  identity_store_id,
  member_id,
  membership_id
FROM awscc.identitystore.group_memberships
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ membership_id }}|{{ identity_store_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>group_memberships</code> in a region.
```sql
SELECT
  region,
  membership_id,
  identity_store_id
FROM awscc.identitystore.group_memberships_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>group_membership</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.identitystore.group_memberships (
  GroupId,
  IdentityStoreId,
  MemberId,
  region
)
SELECT
  '{{ group_id }}',
  '{{ identity_store_id }}',
  '{{ member_id }}',
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
INSERT INTO awscc.identitystore.group_memberships (
  GroupId,
  IdentityStoreId,
  MemberId,
  region
)
SELECT
  '{{ group_id }}',
  '{{ identity_store_id }}',
  '{{ member_id }}',
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
  - name: group_membership
    props:
      - name: group_id
        value: '{{ group_id }}'
      - name: identity_store_id
        value: '{{ identity_store_id }}'
      - name: member_id
        value:
          user_id: '{{ user_id }}'
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.identitystore.group_memberships
WHERE
  Identifier = '{{ membership_id }}|{{ identity_store_id }}' AND
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

To operate on the <code>group_memberships</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
identitystore:CreateGroupMembership,
identitystore:DescribeGroupMembership
```

</TabItem>
<TabItem value="read">

```json
identitystore:DescribeGroupMembership
```

</TabItem>
<TabItem value="delete">

```json
identitystore:DeleteGroupMembership,
identitystore:DescribeGroupMembership
```

</TabItem>
<TabItem value="list">

```json
identitystore:ListGroupMemberships
```

</TabItem>
</Tabs>