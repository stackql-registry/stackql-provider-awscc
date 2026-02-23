---
title: folders
hide_title: false
hide_table_of_contents: false
keywords:
  - folders
  - quicksight
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

Creates, updates, deletes or gets a <code>folder</code> resource or lists <code>folders</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>folders</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of the AWS::QuickSight::Folder Resource Type.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.quicksight.folders" /></td></tr>
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
    "description": "<p>The Amazon Resource Name (ARN) for the folder.</p>"
  },
  {
    "name": "aws_account_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "created_time",
    "type": "string",
    "description": "<p>The time that the folder was created.</p>"
  },
  {
    "name": "folder_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "folder_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "last_updated_time",
    "type": "string",
    "description": "<p>The time that the folder was last updated.</p>"
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "parent_folder_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "permissions",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "principal",
        "type": "string",
        "description": "<p>The Amazon Resource Name (ARN) of the principal. This can be one of the<br />following:</p><br /><ul><br /><li><br /><p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p><br /></li><br /><li><br /><p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p><br /></li><br /><li><br /><p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight<br />ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.<br />(This is less common.) </p><br /></li><br /></ul>"
      },
      {
        "name": "actions",
        "type": "array",
        "description": "<p>The IAM action to grant or revoke permissions on.</p>"
      }
    ]
  },
  {
    "name": "sharing_model",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "<p>Tag key.</p>"
      },
      {
        "name": "value",
        "type": "string",
        "description": "<p>Tag value.</p>"
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
    "name": "aws_account_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "folder_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-folder.html"><code>AWS::QuickSight::Folder</code></a>.

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
    <td><code>folders</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>folders</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>folders</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>folders_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>folders</code></td>
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

Gets all properties from an individual <code>folder</code>.
```sql
SELECT
region,
arn,
aws_account_id,
created_time,
folder_id,
folder_type,
last_updated_time,
name,
parent_folder_arn,
permissions,
sharing_model,
tags
FROM awscc.quicksight.folders
WHERE region = 'us-east-1' AND Identifier = '{{ aws_account_id }}|{{ folder_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>folders</code> in a region.
```sql
SELECT
region,
aws_account_id,
folder_id
FROM awscc.quicksight.folders_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>folder</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.quicksight.folders (
 AwsAccountId,
 FolderId,
 FolderType,
 Name,
 ParentFolderArn,
 Permissions,
 SharingModel,
 Tags,
 region
)
SELECT
'{{ aws_account_id }}',
 '{{ folder_id }}',
 '{{ folder_type }}',
 '{{ name }}',
 '{{ parent_folder_arn }}',
 '{{ permissions }}',
 '{{ sharing_model }}',
 '{{ tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.quicksight.folders (
 AwsAccountId,
 FolderId,
 FolderType,
 Name,
 ParentFolderArn,
 Permissions,
 SharingModel,
 Tags,
 region
)
SELECT
 '{{ aws_account_id }}',
 '{{ folder_id }}',
 '{{ folder_type }}',
 '{{ name }}',
 '{{ parent_folder_arn }}',
 '{{ permissions }}',
 '{{ sharing_model }}',
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
  - name: folder
    props:
      - name: aws_account_id
        value: '{{ aws_account_id }}'
      - name: folder_id
        value: '{{ folder_id }}'
      - name: folder_type
        value: '{{ folder_type }}'
      - name: name
        value: '{{ name }}'
      - name: parent_folder_arn
        value: '{{ parent_folder_arn }}'
      - name: permissions
        value:
          - principal: '{{ principal }}'
            actions:
              - '{{ actions[0] }}'
      - name: sharing_model
        value: '{{ sharing_model }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>folder</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.quicksight.folders
SET PatchDocument = string('{{ {
    "Name": name,
    "Permissions": permissions,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ aws_account_id }}|{{ folder_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.quicksight.folders
WHERE Identifier = '{{ aws_account_id }}|{{ folder_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>folders</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="read">

```json
quicksight:DescribeFolder,
quicksight:DescribeFolderPermissions,
quicksight:ListTagsForResource
```

</TabItem>
<TabItem value="create">

```json
quicksight:CreateFolder,
quicksight:DescribeFolder,
quicksight:UpdateFolderPermissions,
quicksight:DescribeFolderPermissions,
quicksight:TagResource,
quicksight:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
quicksight:DescribeFolder,
quicksight:UpdateFolder,
quicksight:DescribeFolderPermissions,
quicksight:UpdateFolderPermissions,
quicksight:ListTagsForResource,
quicksight:TagResource,
quicksight:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
quicksight:DeleteFolder
```

</TabItem>
<TabItem value="list">

```json
quicksight:ListFolders
```

</TabItem>
</Tabs>