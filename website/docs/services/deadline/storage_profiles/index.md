---
title: storage_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - storage_profiles
  - deadline
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

Creates, updates, deletes or gets a <code>storage_profile</code> resource or lists <code>storage_profiles</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>storage_profiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Deadline::StorageProfile Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.deadline.storage_profiles" /></td></tr>
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
    "name": "display_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "farm_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "file_system_locations",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": ""
      },
      {
        "name": "path",
        "type": "string",
        "description": ""
      },
      {
        "name": "type",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "os_family",
    "type": "string",
    "description": ""
  },
  {
    "name": "storage_profile_id",
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
    "name": "farm_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "storage_profile_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-storageprofile.html"><code>AWS::Deadline::StorageProfile</code></a>.

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
    <td><code>storage_profiles</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DisplayName, FarmId, OsFamily, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>storage_profiles</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>storage_profiles</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>storage_profiles_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>storage_profiles</code></td>
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

Gets all properties from an individual <code>storage_profile</code>.
```sql
SELECT
region,
display_name,
farm_id,
file_system_locations,
os_family,
storage_profile_id
FROM awscc.deadline.storage_profiles
WHERE region = 'us-east-1' AND Identifier = '{{ farm_id }}|{{ storage_profile_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>storage_profiles</code> in a region.
```sql
SELECT
region,
farm_id,
storage_profile_id
FROM awscc.deadline.storage_profiles_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>storage_profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.deadline.storage_profiles (
 DisplayName,
 FarmId,
 OsFamily,
 region
)
SELECT
'{{ display_name }}',
 '{{ farm_id }}',
 '{{ os_family }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.deadline.storage_profiles (
 DisplayName,
 FarmId,
 FileSystemLocations,
 OsFamily,
 region
)
SELECT
 '{{ display_name }}',
 '{{ farm_id }}',
 '{{ file_system_locations }}',
 '{{ os_family }}',
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
  - name: storage_profile
    props:
      - name: display_name
        value: '{{ display_name }}'
      - name: farm_id
        value: '{{ farm_id }}'
      - name: file_system_locations
        value:
          - name: '{{ name }}'
            path: '{{ path }}'
            type: '{{ type }}'
      - name: os_family
        value: '{{ os_family }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>storage_profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.deadline.storage_profiles
SET PatchDocument = string('{{ {
    "DisplayName": display_name,
    "FileSystemLocations": file_system_locations,
    "OsFamily": os_family
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ farm_id }}|{{ storage_profile_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.deadline.storage_profiles
WHERE Identifier = '{{ farm_id }}|{{ storage_profile_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>storage_profiles</code> resource, the following permissions are required:

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
deadline:CreateStorageProfile,
deadline:GetStorageProfile,
identitystore:ListGroupMembershipsForMember
```

</TabItem>
<TabItem value="read">

```json
deadline:GetStorageProfile,
identitystore:ListGroupMembershipsForMember
```

</TabItem>
<TabItem value="update">

```json
deadline:UpdateStorageProfile,
deadline:GetStorageProfile,
identitystore:ListGroupMembershipsForMember
```

</TabItem>
<TabItem value="delete">

```json
deadline:DeleteStorageProfile,
deadline:GetStorageProfile,
identitystore:ListGroupMembershipsForMember
```

</TabItem>
<TabItem value="list">

```json
deadline:ListStorageProfiles,
identitystore:ListGroupMembershipsForMember
```

</TabItem>
</Tabs>