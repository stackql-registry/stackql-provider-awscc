---
title: scenes
hide_title: false
hide_table_of_contents: false
keywords:
  - scenes
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

Creates, updates, deletes or gets a <code>scene</code> resource or lists <code>scenes</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>scenes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::IoTTwinMaker::Scene</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iottwinmaker.scenes" /></td></tr>
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
    "name": "scene_id",
    "type": "string",
    "description": "The ID of the scene."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The ARN of the scene."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the scene."
  },
  {
    "name": "content_location",
    "type": "string",
    "description": "The relative path that specifies the location of the content definition file."
  },
  {
    "name": "creation_date_time",
    "type": "string",
    "description": "The date and time when the scene was created."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A key-value pair to associate with a resource."
  },
  {
    "name": "workspace_id",
    "type": "string",
    "description": "The ID of the scene."
  },
  {
    "name": "capabilities",
    "type": "array",
    "description": "A list of capabilities that the scene uses to render."
  },
  {
    "name": "scene_metadata",
    "type": "object",
    "description": "A key-value pair of scene metadata for the scene."
  },
  {
    "name": "generated_scene_metadata",
    "type": "object",
    "description": "A key-value pair of generated scene metadata for the scene."
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
    "name": "scene_id",
    "type": "string",
    "description": "The ID of the scene."
  },
  {
    "name": "workspace_id",
    "type": "string",
    "description": "The ID of the scene."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-scene.html"><code>AWS::IoTTwinMaker::Scene</code></a>.

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
    <td><code>scenes</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="WorkspaceId, SceneId, ContentLocation, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>scenes</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>scenes</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>scenes_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>scenes</code></td>
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

Gets all properties from an individual <code>scene</code>.
```sql
SELECT
region,
scene_id,
arn,
description,
content_location,
creation_date_time,
update_date_time,
tags,
workspace_id,
capabilities,
scene_metadata,
generated_scene_metadata
FROM awscc.iottwinmaker.scenes
WHERE region = 'us-east-1' AND Identifier = '{{ workspace_id }}|{{ scene_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>scenes</code> in a region.
```sql
SELECT
region,
workspace_id,
scene_id
FROM awscc.iottwinmaker.scenes_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>scene</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iottwinmaker.scenes (
 SceneId,
 ContentLocation,
 WorkspaceId,
 region
)
SELECT
'{{ scene_id }}',
 '{{ content_location }}',
 '{{ workspace_id }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iottwinmaker.scenes (
 SceneId,
 Description,
 ContentLocation,
 Tags,
 WorkspaceId,
 Capabilities,
 SceneMetadata,
 region
)
SELECT
 '{{ scene_id }}',
 '{{ description }}',
 '{{ content_location }}',
 '{{ tags }}',
 '{{ workspace_id }}',
 '{{ capabilities }}',
 '{{ scene_metadata }}',
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
  - name: scene
    props:
      - name: scene_id
        value: '{{ scene_id }}'
      - name: description
        value: '{{ description }}'
      - name: content_location
        value: '{{ content_location }}'
      - name: tags
        value: {}
      - name: workspace_id
        value: '{{ workspace_id }}'
      - name: capabilities
        value:
          - '{{ capabilities[0] }}'
      - name: scene_metadata
        value: {}
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>scene</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iottwinmaker.scenes
SET PatchDocument = string('{{ {
    "Description": description,
    "ContentLocation": content_location,
    "Tags": tags,
    "Capabilities": capabilities,
    "SceneMetadata": scene_metadata
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ workspace_id }}|{{ scene_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iottwinmaker.scenes
WHERE Identifier = '{{ workspace_id }}|{{ scene_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>scenes</code> resource, the following permissions are required:

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
iottwinmaker:CreateScene,
iottwinmaker:GetScene,
iottwinmaker:GetWorkspace,
iottwinmaker:ListTagsForResource,
iottwinmaker:TagResource
```

</TabItem>
<TabItem value="read">

```json
iottwinmaker:GetWorkspace,
iottwinmaker:GetScene,
iottwinmaker:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
iottwinmaker:GetScene,
iottwinmaker:GetWorkspace,
iottwinmaker:ListTagsForResource,
iottwinmaker:TagResource,
iottwinmaker:UntagResource,
iottwinmaker:UpdateScene
```

</TabItem>
<TabItem value="delete">

```json
iottwinmaker:DeleteScene,
iottwinmaker:GetScene,
iottwinmaker:GetWorkspace
```

</TabItem>
<TabItem value="list">

```json
iottwinmaker:GetWorkspace,
iottwinmaker:ListTagsForResource,
iottwinmaker:ListScenes
```

</TabItem>
</Tabs>