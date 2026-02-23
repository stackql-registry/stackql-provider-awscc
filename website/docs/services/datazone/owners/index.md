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
WHERE region = 'us-east-1' AND Identifier = '{{ domain_identifier }}|{{ entity_type }}|{{ entity_identifier }}|{{ owner_type }}|{{ owner_identifier }}';
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
WHERE region = 'us-east-1';
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
'{{ region }}';
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
  - name: owner
    props:
      - name: entity_type
        value: '{{ entity_type }}'
      - name: owner
        value: {}
      - name: entity_identifier
        value: '{{ entity_identifier }}'
      - name: domain_identifier
        value: '{{ domain_identifier }}'
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datazone.owners
WHERE Identifier = '{{ domain_identifier }}|{{ entity_type }}|{{ entity_identifier }}|{{ owner_type }}|{{ owner_identifier }}'
AND region = 'us-east-1';
```

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