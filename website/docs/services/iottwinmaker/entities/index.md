---
title: entities
hide_title: false
hide_table_of_contents: false
keywords:
  - entities
  - iottwinmaker
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

Creates, updates, deletes or gets an <code>entity</code> resource or lists <code>entities</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>entities</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::IoTTwinMaker::Entity</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iottwinmaker.entities" /></td></tr>
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
    "name": "entity_id",
    "type": "string",
    "description": "The ID of the entity."
  },
  {
    "name": "entity_name",
    "type": "string",
    "description": "The name of the entity."
  },
  {
    "name": "status",
    "type": "object",
    "description": "The current status of the entity.",
    "children": [
      {
        "name": "state",
        "type": "string",
        "description": ""
      },
      {
        "name": "error",
        "type": "object",
        "description": ""
      }
    ]
  },
  {
    "name": "has_child_entities",
    "type": "boolean",
    "description": "A Boolean value that specifies whether the entity has child entities or not."
  },
  {
    "name": "parent_entity_id",
    "type": "string",
    "description": "The ID of the parent entity."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The ARN of the entity."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the entity."
  },
  {
    "name": "creation_date_time",
    "type": "string",
    "description": "The date and time when the entity was created."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A key-value pair to associate with a resource."
  },
  {
    "name": "workspace_id",
    "type": "string",
    "description": "The ID of the workspace."
  },
  {
    "name": "components",
    "type": "object",
    "description": "A map that sets information about a component type."
  },
  {
    "name": "composite_components",
    "type": "object",
    "description": "A map that sets information about a composite component."
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
    "name": "entity_id",
    "type": "string",
    "description": "The ID of the entity."
  },
  {
    "name": "workspace_id",
    "type": "string",
    "description": "The ID of the workspace."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html"><code>AWS::IoTTwinMaker::Entity</code></a>.

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
    <td><code>entities</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="WorkspaceId, EntityName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>entities</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>entities</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>entities_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>entities</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>entity</code>.
```sql
SELECT
region,
entity_id,
entity_name,
status,
has_child_entities,
parent_entity_id,
arn,
description,
creation_date_time,
update_date_time,
tags,
workspace_id,
components,
composite_components
FROM awscc.iottwinmaker.entities
WHERE region = 'us-east-1' AND data__Identifier = '<WorkspaceId>|<EntityId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>entities</code> in a region.
```sql
SELECT
region,
workspace_id,
entity_id
FROM awscc.iottwinmaker.entities_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>entity</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iottwinmaker.entities (
 EntityName,
 WorkspaceId,
 region
)
SELECT 
'{{ EntityName }}',
 '{{ WorkspaceId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iottwinmaker.entities (
 EntityId,
 EntityName,
 ParentEntityId,
 Description,
 Tags,
 WorkspaceId,
 Components,
 CompositeComponents,
 region
)
SELECT 
 '{{ EntityId }}',
 '{{ EntityName }}',
 '{{ ParentEntityId }}',
 '{{ Description }}',
 '{{ Tags }}',
 '{{ WorkspaceId }}',
 '{{ Components }}',
 '{{ CompositeComponents }}',
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
  - name: entity
    props:
      - name: EntityId
        value: '{{ EntityId }}'
      - name: EntityName
        value: '{{ EntityName }}'
      - name: ParentEntityId
        value: '{{ ParentEntityId }}'
      - name: Description
        value: '{{ Description }}'
      - name: Tags
        value: {}
      - name: WorkspaceId
        value: '{{ WorkspaceId }}'
      - name: Components
        value: {}
      - name: CompositeComponents
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.iottwinmaker.entities
SET data__PatchDocument = string('{{ {
    "EntityName": entity_name,
    "ParentEntityId": parent_entity_id,
    "Description": description,
    "Tags": tags,
    "Components": components,
    "CompositeComponents": composite_components
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<WorkspaceId>|<EntityId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iottwinmaker.entities
WHERE data__Identifier = '<WorkspaceId|EntityId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>entities</code> resource, the following permissions are required:

### Create
```json
iottwinmaker:GetWorkspace,
iottwinmaker:CreateEntity,
iottwinmaker:GetEntity,
iottwinmaker:ListComponents,
iottwinmaker:ListProperties,
iottwinmaker:ListTagsForResource,
iottwinmaker:TagResource
```

### Read
```json
iottwinmaker:GetComponentType,
iottwinmaker:GetEntity,
iottwinmaker:ListComponents,
iottwinmaker:ListProperties,
iottwinmaker:GetWorkspace,
iottwinmaker:ListEntities,
iottwinmaker:ListTagsForResource
```

### Update
```json
iottwinmaker:GetComponentType,
iottwinmaker:GetEntity,
iottwinmaker:ListComponents,
iottwinmaker:ListProperties,
iottwinmaker:GetWorkspace,
iottwinmaker:ListTagsForResource,
iottwinmaker:TagResource,
iottwinmaker:UntagResource,
iottwinmaker:UpdateEntity,
iottwinmaker:UpdateComponentType
```

### Delete
```json
iottwinmaker:GetEntity,
iottwinmaker:GetWorkspace,
iottwinmaker:DeleteEntity
```

### List
```json
iottwinmaker:GetWorkspace,
iottwinmaker:ListTagsForResource,
iottwinmaker:GetEntity,
iottwinmaker:ListEntities
```
