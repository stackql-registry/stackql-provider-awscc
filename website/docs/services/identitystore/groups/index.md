---
title: groups
hide_title: false
hide_table_of_contents: false
keywords:
  - groups
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

Creates, updates, deletes or gets a <code>group</code> resource or lists <code>groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::IdentityStore::Group</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.identitystore.groups" /></td></tr>
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
    "name": "description",
    "type": "string",
    "description": "A string containing the description of the group."
  },
  {
    "name": "display_name",
    "type": "string",
    "description": "A string containing the name of the group. This value is commonly displayed when the group is referenced."
  },
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-identitystore-group.html"><code>AWS::IdentityStore::Group</code></a>.

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
    <td><code>groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="IdentityStoreId, DisplayName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>groups</code></td>
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

Gets all properties from an individual <code>group</code>.
```sql
SELECT
region,
description,
display_name,
group_id,
identity_store_id
FROM awscc.identitystore.groups
WHERE region = 'us-east-1' AND Identifier = '{{ group_id }}|{{ identity_store_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>groups</code> in a region.
```sql
SELECT
region,
group_id,
identity_store_id
FROM awscc.identitystore.groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.identitystore.groups (
 DisplayName,
 IdentityStoreId,
 region
)
SELECT
'{{ display_name }}',
 '{{ identity_store_id }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.identitystore.groups (
 Description,
 DisplayName,
 IdentityStoreId,
 region
)
SELECT
 '{{ description }}',
 '{{ display_name }}',
 '{{ identity_store_id }}',
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
  - name: group
    props:
      - name: description
        value: '{{ description }}'
      - name: display_name
        value: '{{ display_name }}'
      - name: identity_store_id
        value: '{{ identity_store_id }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.identitystore.groups
SET PatchDocument = string('{{ {
    "Description": description,
    "DisplayName": display_name
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ group_id }}|{{ identity_store_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.identitystore.groups
WHERE Identifier = '{{ group_id }}|{{ identity_store_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>groups</code> resource, the following permissions are required:

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
identitystore:CreateGroup,
identitystore:DescribeGroup
```

</TabItem>
<TabItem value="read">

```json
identitystore:DescribeGroup
```

</TabItem>
<TabItem value="update">

```json
identitystore:DescribeGroup,
identitystore:UpdateGroup
```

</TabItem>
<TabItem value="delete">

```json
identitystore:DescribeGroup,
identitystore:DeleteGroup
```

</TabItem>
<TabItem value="list">

```json
identitystore:ListGroups
```

</TabItem>
</Tabs>