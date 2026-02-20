---
title: workspaces
hide_title: false
hide_table_of_contents: false
keywords:
  - workspaces
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

Creates, updates, deletes or gets a <code>workspace</code> resource or lists <code>workspaces</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>workspaces</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::IoTTwinMaker::Workspace</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iottwinmaker.workspaces" /></td></tr>
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
    "description": "The ID of the workspace."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The ARN of the workspace."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the workspace."
  },
  {
    "name": "role",
    "type": "string",
    "description": "The ARN of the execution role associated with the workspace."
  },
  {
    "name": "s3_location",
    "type": "string",
    "description": "The ARN of the S3 bucket where resources associated with the workspace are stored."
  },
  {
    "name": "creation_date_time",
    "type": "string",
    "description": "The date and time when the workspace was created."
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-workspace.html"><code>AWS::IoTTwinMaker::Workspace</code></a>.

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
    <td><code>workspaces</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="WorkspaceId, Role, S3Location, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>workspaces</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>workspaces</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>workspaces_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>workspaces</code></td>
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

Gets all properties from an individual <code>workspace</code>.
```sql
SELECT
region,
workspace_id,
arn,
description,
role,
s3_location,
creation_date_time,
update_date_time,
tags
FROM awscc.iottwinmaker.workspaces
WHERE region = 'us-east-1' AND data__Identifier = '<WorkspaceId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>workspaces</code> in a region.
```sql
SELECT
region,
workspace_id
FROM awscc.iottwinmaker.workspaces_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>workspace</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iottwinmaker.workspaces (
 WorkspaceId,
 Role,
 S3Location,
 region
)
SELECT 
'{{ WorkspaceId }}',
 '{{ Role }}',
 '{{ S3Location }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iottwinmaker.workspaces (
 WorkspaceId,
 Description,
 Role,
 S3Location,
 Tags,
 region
)
SELECT 
 '{{ WorkspaceId }}',
 '{{ Description }}',
 '{{ Role }}',
 '{{ S3Location }}',
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
  - name: workspace
    props:
      - name: WorkspaceId
        value: '{{ WorkspaceId }}'
      - name: Description
        value: '{{ Description }}'
      - name: Role
        value: '{{ Role }}'
      - name: S3Location
        value: '{{ S3Location }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.iottwinmaker.workspaces
SET data__PatchDocument = string('{{ {
    "Description": description,
    "Role": role,
    "S3Location": s3_location,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<WorkspaceId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iottwinmaker.workspaces
WHERE data__Identifier = '<WorkspaceId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>workspaces</code> resource, the following permissions are required:

### Create
```json
iam:PassRole,
iottwinmaker:CreateWorkspace,
iottwinmaker:GetWorkspace,
iottwinmaker:ListTagsForResource,
iottwinmaker:TagResource
```

### Read
```json
iottwinmaker:GetWorkspace,
iottwinmaker:ListTagsForResource
```

### Update
```json
iottwinmaker:GetWorkspace,
iottwinmaker:ListTagsForResource,
iottwinmaker:TagResource,
iottwinmaker:UntagResource,
iottwinmaker:UpdateWorkspace
```

### Delete
```json
iottwinmaker:DeleteWorkspace,
iottwinmaker:GetWorkspace
```

### List
```json
iottwinmaker:GetWorkspace,
iottwinmaker:ListTagsForResource,
iottwinmaker:ListWorkspaces
```
