---
title: owners
hide_title: false
hide_table_of_contents: false
keywords:
  - owners
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

import CodeBlock from '@theme/CodeBlock';
import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets an <code>owner</code> resource or lists <code>owners</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>owners</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A owner can set up authorization permissions on their resources.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.datazone.owners" /></td></tr>
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
    "name": "entity_type",
    "type": "string",
    "description": "The type of an entity."
  },
  {
    "name": "owner",
    "type": "object",
    "description": "The owner that you want to add to the entity."
  },
  {
    "name": "entity_identifier",
    "type": "string",
    "description": "The ID of the entity to which you want to add an owner."
  },
  {
    "name": "domain_identifier",
    "type": "string",
    "description": "The ID of the domain in which you want to add the entity owner."
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
    "name": "entity_type",
    "type": "string",
    "description": "The type of an entity."
  },
  {
    "name": "owner",
    "type": "object",
    "description": "The owner that you want to add to the entity."
  },
  {
    "name": "entity_identifier",
    "type": "string",
    "description": "The ID of the entity to which you want to add an owner."
  },
  {
    "name": "domain_identifier",
    "type": "string",
    "description": "The ID of the domain in which you want to add the entity owner."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-owner.html"><code>AWS::DataZone::Owner</code></a>.

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
    <td><code>owners</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DomainIdentifier, EntityIdentifier, EntityType, Owner, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>owners</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>owners_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>owners</code></td>
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

Gets all properties from an individual <code>owner</code>.
```sql
SELECT
  region,
  entity_type,
  owner,
  entity_identifier,
  domain_identifier
FROM awscc.datazone.owners
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ domain_identifier }}|{{ entity_type }}|{{ entity_identifier }}|{{ owner_type }}|{{ owner_identifier }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>owners</code> in a region.
```sql
SELECT
  region,
  domain_identifier,
  entity_type,
  entity_identifier,
  owner_type,
  owner_identifier
FROM awscc.datazone.owners_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>owner</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.datazone.owners (
  EntityType,
  Owner,
  EntityIdentifier,
  DomainIdentifier,
  region
)
SELECT
  '{{ entity_type }}',
  '{{ owner }}',
  '{{ entity_identifier }}',
  '{{ domain_identifier }}',
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
INSERT INTO awscc.datazone.owners (
  EntityType,
  Owner,
  EntityIdentifier,
  DomainIdentifier,
  region
)
SELECT
  '{{ entity_type }}',
  '{{ owner }}',
  '{{ entity_identifier }}',
  '{{ domain_identifier }}',
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

<CodeBlock language="yaml">{`version: 1
name: stack name
description: stack description
providers:
  - aws
globals:
  - name: region
    value: '{{ vars.AWS_REGION }}'
resources:
  - name: owner
    props:
      - name: entity_type
        value: '{{ entity_type }}'
      - name: owner
        value: {}
      - name: entity_identifier
        value: '{{ entity_identifier }}'
      - name: domain_identifier
        value: '{{ domain_identifier }}'`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datazone.owners
WHERE
  Identifier = '{{ domain_identifier }}|{{ entity_type }}|{{ entity_identifier }}|{{ owner_type }}|{{ owner_identifier }}' AND
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

To operate on the <code>owners</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="read">

```json
datazone:ListEntityOwners,
iam:GetRole
```

</TabItem>
<TabItem value="create">

```json
datazone:AddEntityOwner,
datazone:ListEntityOwners,
datazone:GetGroupProfile,
datazone:GetUserProfile,
iam:GetRole
```

</TabItem>
<TabItem value="list">

```json
datazone:ListEntityOwners,
iam:GetRole
```

</TabItem>
<TabItem value="delete">

```json
datazone:RemoveEntityOwner,
datazone:GetUserProfile,
iam:GetRole
```

</TabItem>
</Tabs>