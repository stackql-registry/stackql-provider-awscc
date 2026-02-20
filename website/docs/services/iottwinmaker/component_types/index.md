---
title: component_types
hide_title: false
hide_table_of_contents: false
keywords:
  - component_types
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

Creates, updates, deletes or gets a <code>component_type</code> resource or lists <code>component_types</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>component_types</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::IoTTwinMaker::ComponentType</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iottwinmaker.component_types" /></td></tr>
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
    "name": "workspace_id",
    "type": "string",
    "description": "The ID of the workspace that contains the component type."
  },
  {
    "name": "component_type_id",
    "type": "string",
    "description": "The ID of the component type."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the component type."
  },
  {
    "name": "extends_from",
    "type": "array",
    "description": "Specifies the parent component type to extend."
  },
  {
    "name": "functions",
    "type": "object",
    "description": "a Map of functions in the component type. Each function's key must be unique to this map."
  },
  {
    "name": "is_singleton",
    "type": "boolean",
    "description": "A Boolean value that specifies whether an entity can have more than one component of this type."
  },
  {
    "name": "property_definitions",
    "type": "object",
    "description": "An map of the property definitions in the component type. Each property definition's key must be unique to this map."
  },
  {
    "name": "property_groups",
    "type": "object",
    "description": "An map of the property groups in the component type. Each property group's key must be unique to this map."
  },
  {
    "name": "composite_component_types",
    "type": "object",
    "description": "An map of the composite component types in the component type. Each composite component type's key must be unique to this map."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The ARN of the component type."
  },
  {
    "name": "creation_date_time",
    "type": "string",
    "description": "The date and time when the component type was created."
  },
  {
    "name": "status",
    "type": "object",
    "description": "The current status of the component type.",
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
    "name": "is_abstract",
    "type": "boolean",
    "description": "A Boolean value that specifies whether the component type is abstract."
  },
  {
    "name": "is_schema_initialized",
    "type": "boolean",
    "description": "A Boolean value that specifies whether the component type has a schema initializer and that the schema initializer has run."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A map of key-value pairs to associate with a resource."
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
    "name": "workspace_id",
    "type": "string",
    "description": "The ID of the workspace that contains the component type."
  },
  {
    "name": "component_type_id",
    "type": "string",
    "description": "The ID of the component type."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-componenttype.html"><code>AWS::IoTTwinMaker::ComponentType</code></a>.

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
    <td><code>component_types</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="WorkspaceId, ComponentTypeId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>component_types</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>component_types</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>component_types_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>component_types</code></td>
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

Gets all properties from an individual <code>component_type</code>.
```sql
SELECT
region,
workspace_id,
component_type_id,
description,
extends_from,
functions,
is_singleton,
property_definitions,
property_groups,
composite_component_types,
arn,
creation_date_time,
update_date_time,
status,
is_abstract,
is_schema_initialized,
tags
FROM awscc.iottwinmaker.component_types
WHERE region = 'us-east-1' AND Identifier = '<WorkspaceId>|<ComponentTypeId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>component_types</code> in a region.
```sql
SELECT
region,
workspace_id,
component_type_id
FROM awscc.iottwinmaker.component_types_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>component_type</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iottwinmaker.component_types (
 WorkspaceId,
 ComponentTypeId,
 region
)
SELECT 
'{{ WorkspaceId }}',
 '{{ ComponentTypeId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iottwinmaker.component_types (
 WorkspaceId,
 ComponentTypeId,
 Description,
 ExtendsFrom,
 Functions,
 IsSingleton,
 PropertyDefinitions,
 PropertyGroups,
 CompositeComponentTypes,
 Tags,
 region
)
SELECT 
 '{{ WorkspaceId }}',
 '{{ ComponentTypeId }}',
 '{{ Description }}',
 '{{ ExtendsFrom }}',
 '{{ Functions }}',
 '{{ IsSingleton }}',
 '{{ PropertyDefinitions }}',
 '{{ PropertyGroups }}',
 '{{ CompositeComponentTypes }}',
 '{{ Tags }}',
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
  - name: component_type
    props:
      - name: WorkspaceId
        value: '{{ WorkspaceId }}'
      - name: ComponentTypeId
        value: '{{ ComponentTypeId }}'
      - name: Description
        value: '{{ Description }}'
      - name: ExtendsFrom
        value:
          - '{{ ExtendsFrom[0] }}'
      - name: Functions
        value: {}
      - name: IsSingleton
        value: '{{ IsSingleton }}'
      - name: PropertyDefinitions
        value: {}
      - name: PropertyGroups
        value: {}
      - name: CompositeComponentTypes
        value: {}
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.iottwinmaker.component_types
SET PatchDocument = string('{{ {
    "Description": description,
    "ExtendsFrom": extends_from,
    "Functions": functions,
    "IsSingleton": is_singleton,
    "PropertyDefinitions": property_definitions,
    "PropertyGroups": property_groups,
    "CompositeComponentTypes": composite_component_types,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<WorkspaceId>|<ComponentTypeId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iottwinmaker.component_types
WHERE Identifier = '<WorkspaceId|ComponentTypeId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>component_types</code> resource, the following permissions are required:

### Create
```json
iottwinmaker:CreateComponentType,
iottwinmaker:GetComponentType,
iottwinmaker:GetWorkspace,
iottwinmaker:ListTagsForResource,
iottwinmaker:TagResource
```

### Read
```json
iottwinmaker:GetComponentType,
iottwinmaker:GetWorkspace,
iottwinmaker:ListTagsForResource
```

### Update
```json
iottwinmaker:GetComponentType,
iottwinmaker:GetWorkspace,
iottwinmaker:ListTagsForResource,
iottwinmaker:TagResource,
iottwinmaker:UntagResource,
iottwinmaker:UpdateComponentType
```

### Delete
```json
iottwinmaker:DeleteComponentType,
iottwinmaker:GetComponentType,
iottwinmaker:GetWorkspace
```

### List
```json
iottwinmaker:GetComponentType,
iottwinmaker:GetWorkspace,
iottwinmaker:ListComponentTypes,
iottwinmaker:ListTagsForResource
```
