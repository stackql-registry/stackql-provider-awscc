---
title: permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - permissions
  - ram
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

Creates, updates, deletes or gets a <code>permission</code> resource or lists <code>permissions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>permissions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource type definition for AWS::RAM::Permission</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ram.permissions" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": "The name of the permission."
  },
  {
    "name": "version",
    "type": "string",
    "description": "Version of the permission."
  },
  {
    "name": "is_resource_type_default",
    "type": "boolean",
    "description": "Set to true to use this as the default permission."
  },
  {
    "name": "permission_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "resource_type",
    "type": "string",
    "description": "The resource type this permission can be used with."
  },
  {
    "name": "policy_template",
    "type": "object",
    "description": "Policy template for the permission."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-permission.html"><code>AWS::RAM::Permission</code></a>.

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
    <td><code>permissions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, ResourceType, PolicyTemplate, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>permissions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>permissions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>permissions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>permissions</code></td>
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

Gets all properties from an individual <code>permission</code>.
```sql
SELECT
region,
arn,
name,
version,
is_resource_type_default,
permission_type,
resource_type,
policy_template,
tags
FROM awscc.ram.permissions
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>permissions</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.ram.permissions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>permission</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ram.permissions (
 Name,
 ResourceType,
 PolicyTemplate,
 region
)
SELECT
'{{ name }}',
 '{{ resource_type }}',
 '{{ policy_template }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ram.permissions (
 Name,
 ResourceType,
 PolicyTemplate,
 Tags,
 region
)
SELECT
 '{{ name }}',
 '{{ resource_type }}',
 '{{ policy_template }}',
 '{{ tags }}',
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
  - name: permission
    props:
      - name: name
        value: '{{ name }}'
      - name: resource_type
        value: '{{ resource_type }}'
      - name: policy_template
        value: {}
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>permission</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ram.permissions
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ram.permissions
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>permissions</code> resource, the following permissions are required:

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
ram:CreatePermission,
ram:TagResource
```

</TabItem>
<TabItem value="read">

```json
ram:GetPermission
```

</TabItem>
<TabItem value="update">

```json
ram:CreatePermissionVersion,
ram:DeletePermissionVersion,
ram:SetDefaultPermissionVersion,
ram:GetPermission,
ram:ReplacePermissionAssociations,
ram:ListReplacePermissionAssociationsWork,
ram:ListPermissionVersions,
ram:UntagResource,
ram:TagResource
```

</TabItem>
<TabItem value="delete">

```json
ram:DeletePermissionVersion,
ram:DeletePermission
```

</TabItem>
<TabItem value="list">

```json
ram:ListPermissions,
ram:ListPermissionVersions
```

</TabItem>
</Tabs>