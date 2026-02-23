---
title: projects
hide_title: false
hide_table_of_contents: false
keywords:
  - projects
  - iotsitewise
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

Creates, updates, deletes or gets a <code>project</code> resource or lists <code>projects</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>projects</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::IoTSiteWise::Project</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotsitewise.projects" /></td></tr>
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
    "name": "portal_id",
    "type": "string",
    "description": "The ID of the portal in which to create the project."
  },
  {
    "name": "project_id",
    "type": "string",
    "description": "The ID of the project."
  },
  {
    "name": "project_name",
    "type": "string",
    "description": "A friendly name for the project."
  },
  {
    "name": "project_description",
    "type": "string",
    "description": "A description for the project."
  },
  {
    "name": "project_arn",
    "type": "string",
    "description": "The ARN of the project."
  },
  {
    "name": "asset_ids",
    "type": "array",
    "description": "The IDs of the assets to be associated to the project."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of key-value pairs that contain metadata for the project.",
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
    "name": "project_id",
    "type": "string",
    "description": "The ID of the project."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-project.html"><code>AWS::IoTSiteWise::Project</code></a>.

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
    <td><code>projects</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="PortalId, ProjectName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>projects</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>projects</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>projects_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>projects</code></td>
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

Gets all properties from an individual <code>project</code>.
```sql
SELECT
region,
portal_id,
project_id,
project_name,
project_description,
project_arn,
asset_ids,
tags
FROM awscc.iotsitewise.projects
WHERE region = 'us-east-1' AND Identifier = '{{ project_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>projects</code> in a region.
```sql
SELECT
region,
project_id
FROM awscc.iotsitewise.projects_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>project</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iotsitewise.projects (
 PortalId,
 ProjectName,
 region
)
SELECT
'{{ portal_id }}',
 '{{ project_name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iotsitewise.projects (
 PortalId,
 ProjectName,
 ProjectDescription,
 AssetIds,
 Tags,
 region
)
SELECT
 '{{ portal_id }}',
 '{{ project_name }}',
 '{{ project_description }}',
 '{{ asset_ids }}',
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
  - name: project
    props:
      - name: portal_id
        value: '{{ portal_id }}'
      - name: project_name
        value: '{{ project_name }}'
      - name: project_description
        value: '{{ project_description }}'
      - name: asset_ids
        value:
          - '{{ asset_ids[0] }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>project</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iotsitewise.projects
SET PatchDocument = string('{{ {
    "ProjectName": project_name,
    "ProjectDescription": project_description,
    "AssetIds": asset_ids,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ project_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotsitewise.projects
WHERE Identifier = '{{ project_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>projects</code> resource, the following permissions are required:

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
iotsitewise:CreateProject,
iotsitewise:DescribeProject,
iotsitewise:ListProjectAssets,
iotsitewise:ListTagsForResource,
iotsitewise:TagResource,
iotsitewise:BatchAssociateProjectAssets
```

</TabItem>
<TabItem value="read">

```json
iotsitewise:DescribeProject,
iotsitewise:ListTagsForResource,
iotsitewise:ListProjectAssets
```

</TabItem>
<TabItem value="update">

```json
iotsitewise:DescribeProject,
iotsitewise:UpdateProject,
iotsitewise:BatchAssociateProjectAssets,
iotsitewise:BatchDisAssociateProjectAssets,
iotsitewise:ListProjectAssets,
iotsitewise:TagResource,
iotsitewise:UntagResource,
iotsitewise:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
iotsitewise:DescribeProject,
iotsitewise:DeleteProject
```

</TabItem>
<TabItem value="list">

```json
iotsitewise:ListPortals,
iotsitewise:ListProjects,
iotsitewise:ListTagsForResource
```

</TabItem>
</Tabs>