---
title: projects
hide_title: false
hide_table_of_contents: false
keywords:
  - projects
  - databrew
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
<tr><td><b>Description</b></td><td>Resource schema for AWS::DataBrew::Project.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.databrew.projects" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "dataset_name",
    "type": "string",
    "description": "Dataset name"
  },
  {
    "name": "name",
    "type": "string",
    "description": "Project name"
  },
  {
    "name": "recipe_name",
    "type": "string",
    "description": "Recipe name"
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "Role arn"
  },
  {
    "name": "sample",
    "type": "object",
    "description": "Sample",
    "children": [
      {
        "name": "size",
        "type": "integer",
        "description": "Sample size"
      },
      {
        "name": "type",
        "type": "string",
        "description": "Sample type"
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-project.html"><code>AWS::DataBrew::Project</code></a>.

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
    <td><CopyableCode code="DatasetName, Name, RecipeName, RoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
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

Gets all properties from an individual <code>project</code>.
```sql
SELECT
region,
dataset_name,
name,
recipe_name,
role_arn,
sample,
tags
FROM awscc.databrew.projects
WHERE region = 'us-east-1' AND data__Identifier = '<Name>';
```

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
INSERT INTO awscc.databrew.projects (
 DatasetName,
 Name,
 RecipeName,
 RoleArn,
 region
)
SELECT 
'{{ DatasetName }}',
 '{{ Name }}',
 '{{ RecipeName }}',
 '{{ RoleArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.databrew.projects (
 DatasetName,
 Name,
 RecipeName,
 RoleArn,
 Sample,
 Tags,
 region
)
SELECT 
 '{{ DatasetName }}',
 '{{ Name }}',
 '{{ RecipeName }}',
 '{{ RoleArn }}',
 '{{ Sample }}',
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
  - name: project
    props:
      - name: DatasetName
        value: '{{ DatasetName }}'
      - name: Name
        value: '{{ Name }}'
      - name: RecipeName
        value: '{{ RecipeName }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: Sample
        value:
          Size: '{{ Size }}'
          Type: '{{ Type }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.databrew.projects
WHERE data__Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>projects</code> resource, the following permissions are required:

### Create
```json
databrew:CreateProject,
databrew:DescribeProject,
databrew:TagResource,
databrew:UntagResource,
iam:PassRole
```

### Read
```json
databrew:DescribeProject,
iam:ListRoles
```

### Update
```json
databrew:UpdateProject,
databrew:TagResource,
databrew:UntagResource,
iam:PassRole
```

### Delete
```json
databrew:DeleteProject
```

### List
```json
databrew:ListProjects,
databrew:ListTagsForResource,
iam:ListRoles
```
