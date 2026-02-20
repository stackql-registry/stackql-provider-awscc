---
title: identity_pool_role_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_pool_role_attachments
  - cognito
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

Creates, updates, deletes or gets an <code>identity_pool_role_attachment</code> resource or lists <code>identity_pool_role_attachments</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>identity_pool_role_attachments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Cognito::IdentityPoolRoleAttachment</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cognito.identity_pool_role_attachments" /></td></tr>
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
    "name": "identity_pool_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "roles",
    "type": "object",
    "description": ""
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "role_mappings",
    "type": "object",
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
    "name": "id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html"><code>AWS::Cognito::IdentityPoolRoleAttachment</code></a>.

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
    <td><code>identity_pool_role_attachments</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="IdentityPoolId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>identity_pool_role_attachments</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>identity_pool_role_attachments</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>identity_pool_role_attachments_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>identity_pool_role_attachments</code></td>
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

Gets all properties from an individual <code>identity_pool_role_attachment</code>.
```sql
SELECT
region,
identity_pool_id,
roles,
id,
role_mappings
FROM awscc.cognito.identity_pool_role_attachments
WHERE region = 'us-east-1' AND Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>identity_pool_role_attachments</code> in a region.
```sql
SELECT
region,
id
FROM awscc.cognito.identity_pool_role_attachments_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>identity_pool_role_attachment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cognito.identity_pool_role_attachments (
 IdentityPoolId,
 region
)
SELECT 
'{{ IdentityPoolId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cognito.identity_pool_role_attachments (
 IdentityPoolId,
 Roles,
 RoleMappings,
 region
)
SELECT 
 '{{ IdentityPoolId }}',
 '{{ Roles }}',
 '{{ RoleMappings }}',
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
  - name: identity_pool_role_attachment
    props:
      - name: IdentityPoolId
        value: '{{ IdentityPoolId }}'
      - name: Roles
        value: null
      - name: RoleMappings
        value: null

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>identity_pool_role_attachment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cognito.identity_pool_role_attachments
SET PatchDocument = string('{{ {
    "Roles": roles,
    "RoleMappings": role_mappings
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cognito.identity_pool_role_attachments
WHERE Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>identity_pool_role_attachments</code> resource, the following permissions are required:

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
cognito-identity:GetIdentityPoolRoles,
cognito-identity:SetIdentityPoolRoles,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
cognito-identity:GetIdentityPoolRoles
```

</TabItem>
<TabItem value="update">

```json
cognito-identity:GetIdentityPoolRoles,
cognito-identity:SetIdentityPoolRoles,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
cognito-identity:GetIdentityPoolRoles,
cognito-identity:SetIdentityPoolRoles
```

</TabItem>
<TabItem value="list">

```json
cognito-identity:GetIdentityPoolRoles
```

</TabItem>
</Tabs>