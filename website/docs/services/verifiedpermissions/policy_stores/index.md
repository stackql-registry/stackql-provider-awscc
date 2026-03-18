---
title: policy_stores
hide_title: false
hide_table_of_contents: false
keywords:
  - policy_stores
  - verifiedpermissions
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

Creates, updates, deletes or gets a <code>policy_store</code> resource or lists <code>policy_stores</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>policy_stores</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Represents a policy store that you can place schema, policies, and policy templates in to validate authorization requests</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.verifiedpermissions.policy_stores" /></td></tr>
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
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "policy_store_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "validation_settings",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "mode",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "schema",
    "type": "object",
    "description": ""
  },
  {
    "name": "deletion_protection",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "mode",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags to add to the policy store",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "string",
        "description": ""
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
    "name": "policy_store_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policystore.html"><code>AWS::VerifiedPermissions::PolicyStore</code></a>.

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
    <td><code>policy_stores</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ValidationSettings, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>policy_stores</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>policy_stores</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>policy_stores_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>policy_stores</code></td>
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

Gets all properties from an individual <code>policy_store</code>.
```sql
SELECT
  region,
  arn,
  description,
  policy_store_id,
  validation_settings,
  schema,
  deletion_protection,
  tags
FROM awscc.verifiedpermissions.policy_stores
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ policy_store_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>policy_stores</code> in a region.
```sql
SELECT
  region,
  policy_store_id
FROM awscc.verifiedpermissions.policy_stores_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>policy_store</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.verifiedpermissions.policy_stores (
  ValidationSettings,
  region
)
SELECT
  '{{ validation_settings }}',
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
INSERT INTO awscc.verifiedpermissions.policy_stores (
  Description,
  ValidationSettings,
  Schema,
  DeletionProtection,
  Tags,
  region
)
SELECT
  '{{ description }}',
  '{{ validation_settings }}',
  '{{ schema }}',
  '{{ deletion_protection }}',
  '{{ tags }}',
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
  - name: policy_store
    props:
      - name: description
        value: '{{ description }}'
      - name: validation_settings
        value:
          mode: '{{ mode }}'
      - name: schema
        value: null
      - name: deletion_protection
        value:
          mode: '{{ mode }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>policy_store</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.verifiedpermissions.policy_stores
SET PatchDocument = string('{{ {
    "Description": description,
    "ValidationSettings": validation_settings,
    "Schema": schema,
    "DeletionProtection": deletion_protection,
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ policy_store_id }}'
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
DELETE FROM awscc.verifiedpermissions.policy_stores
WHERE
  Identifier = '{{ policy_store_id }}' AND
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

To operate on the <code>policy_stores</code> resource, the following permissions are required:

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
verifiedpermissions:CreatePolicyStore,
verifiedpermissions:TagResource,
verifiedpermissions:GetPolicyStore,
verifiedpermissions:PutSchema
```

</TabItem>
<TabItem value="read">

```json
verifiedpermissions:GetPolicyStore,
verifiedpermissions:ListTagsForResource,
verifiedpermissions:GetSchema
```

</TabItem>
<TabItem value="update">

```json
verifiedpermissions:UpdatePolicyStore,
verifiedpermissions:GetPolicyStore,
verifiedpermissions:TagResource,
verifiedpermissions:UntagResource,
verifiedpermissions:GetSchema,
verifiedpermissions:PutSchema
```

</TabItem>
<TabItem value="delete">

```json
verifiedpermissions:DeletePolicyStore,
verifiedpermissions:GetPolicyStore
```

</TabItem>
<TabItem value="list">

```json
verifiedpermissions:ListPolicyStores,
verifiedpermissions:GetPolicyStore,
verifiedpermissions:GetSchema
```

</TabItem>
</Tabs>