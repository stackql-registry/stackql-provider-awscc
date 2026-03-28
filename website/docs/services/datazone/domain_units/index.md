---
title: domain_units
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_units
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

Creates, updates, deletes or gets a <code>domain_unit</code> resource or lists <code>domain_units</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>domain_units</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A domain unit enables you to easily organize your assets and other domain entities under specific business units and teams.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.datazone.domain_units" /></td></tr>
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
    "name": "domain_identifier",
    "type": "string",
    "description": "The ID of the domain where you want to create a domain unit."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the domain unit."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the domain unit."
  },
  {
    "name": "parent_domain_unit_identifier",
    "type": "string",
    "description": "The ID of the parent domain unit."
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The timestamp at which the domain unit was created."
  },
  {
    "name": "domain_id",
    "type": "string",
    "description": "The ID of the domain where the domain unit was created."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The ID of the domain unit."
  },
  {
    "name": "parent_domain_unit_id",
    "type": "string",
    "description": "The ID of the parent domain unit."
  },
  {
    "name": "identifier",
    "type": "string",
    "description": "The identifier of the domain unit that you want to get."
  },
  {
    "name": "last_updated_at",
    "type": "string",
    "description": "The timestamp at which the domain unit was last updated."
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
    "description": "The ID of the domain where the domain unit was created."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The ID of the domain unit."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domainunit.html"><code>AWS::DataZone::DomainUnit</code></a>.

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
    <td><code>domain_units</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DomainIdentifier, Name, ParentDomainUnitIdentifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>domain_units</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>domain_units</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>domain_units_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>domain_units</code></td>
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

Gets all properties from an individual <code>domain_unit</code>.
```sql
SELECT
  region,
  domain_identifier,
  description,
  name,
  parent_domain_unit_identifier,
  created_at,
  domain_id,
  id,
  parent_domain_unit_id,
  identifier,
  last_updated_at
FROM awscc.datazone.domain_units
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ domain_id }}|{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>domain_units</code> in a region.
```sql
SELECT
  region,
  domain_id,
  id
FROM awscc.datazone.domain_units_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>domain_unit</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.datazone.domain_units (
  DomainIdentifier,
  Name,
  ParentDomainUnitIdentifier,
  region
)
SELECT
  '{{ domain_identifier }}',
  '{{ name }}',
  '{{ parent_domain_unit_identifier }}',
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
INSERT INTO awscc.datazone.domain_units (
  DomainIdentifier,
  Description,
  Name,
  ParentDomainUnitIdentifier,
  region
)
SELECT
  '{{ domain_identifier }}',
  '{{ description }}',
  '{{ name }}',
  '{{ parent_domain_unit_identifier }}',
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
  - name: domain_unit
    props:
      - name: domain_identifier
        value: '{{ domain_identifier }}'
      - name: description
        value: '{{ description }}'
      - name: name
        value: '{{ name }}'
      - name: parent_domain_unit_identifier
        value: '{{ parent_domain_unit_identifier }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>domain_unit</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.datazone.domain_units
SET PatchDocument = string('{{ {
    "Description": description,
    "Name": name
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ domain_id }}|{{ id }}'
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
DELETE FROM awscc.datazone.domain_units
WHERE
  Identifier = '{{ domain_id }}|{{ id }}' AND
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

To operate on the <code>domain_units</code> resource, the following permissions are required:

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
datazone:CreateDomainUnit,
datazone:GetDomainUnit
```

</TabItem>
<TabItem value="read">

```json
datazone:GetDomainUnit
```

</TabItem>
<TabItem value="update">

```json
datazone:UpdateDomainUnit,
datazone:GetDomainUnit
```

</TabItem>
<TabItem value="delete">

```json
datazone:DeleteDomainUnit,
datazone:GetDomainUnit
```

</TabItem>
<TabItem value="list">

```json
datazone:ListDomainUnitsForParent
```

</TabItem>
</Tabs>