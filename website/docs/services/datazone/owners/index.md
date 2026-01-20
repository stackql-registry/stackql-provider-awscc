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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-owner.html"><code>AWS::DataZone::Owner</code></a>.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="create_resource" /></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DomainIdentifier, EntityIdentifier, EntityType, Owner, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>owner</code>.
```sql
SELECT
region,
entity_type,
owner,
entity_identifier,
domain_identifier
FROM awscc.datazone.owners
WHERE region = 'us-east-1' AND data__Identifier = '<DomainIdentifier>|<EntityType>|<EntityIdentifier>|<OwnerType>|<OwnerIdentifier>';
```

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
'{{ EntityType }}',
 '{{ Owner }}',
 '{{ EntityIdentifier }}',
 '{{ DomainIdentifier }}',
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
 '{{ EntityType }}',
 '{{ Owner }}',
 '{{ EntityIdentifier }}',
 '{{ DomainIdentifier }}',
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
      - name: EntityType
        value: '{{ EntityType }}'
      - name: Owner
        value: {}
      - name: EntityIdentifier
        value: '{{ EntityIdentifier }}'
      - name: DomainIdentifier
        value: '{{ DomainIdentifier }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datazone.owners
WHERE data__Identifier = '<DomainIdentifier|EntityType|EntityIdentifier|OwnerType|OwnerIdentifier>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>owners</code> resource, the following permissions are required:

### Read
```json
datazone:ListEntityOwners,
iam:GetRole
```

### Create
```json
datazone:AddEntityOwner,
datazone:ListEntityOwners,
datazone:GetGroupProfile,
datazone:GetUserProfile,
iam:GetRole
```

### List
```json
datazone:ListEntityOwners,
iam:GetRole
```

### Delete
```json
datazone:RemoveEntityOwner,
datazone:GetUserProfile,
iam:GetRole
```
