---
title: views
hide_title: false
hide_table_of_contents: false
keywords:
  - views
  - connect
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

Creates, updates, deletes or gets a <code>view</code> resource or lists <code>views</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>views</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Connect::View</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.connect.views" /></td></tr>
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
    "name": "instance_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the instance."
  },
  {
    "name": "view_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the view."
  },
  {
    "name": "view_id",
    "type": "string",
    "description": "The view id of the view."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the view."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the view."
  },
  {
    "name": "template",
    "type": "object",
    "description": "The template of the view as JSON."
  },
  {
    "name": "actions",
    "type": "array",
    "description": "The actions of the view in an array."
  },
  {
    "name": "view_content_sha256",
    "type": "string",
    "description": "The view content hash."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "One or more tags.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters"
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. . You can specify a value that is maximum of 256 Unicode characters"
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
    "name": "view_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the view."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-view.html"><code>AWS::Connect::View</code></a>.

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
    <td><code>views</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="InstanceArn, Template, Actions, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>views</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>views</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>views_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>views</code></td>
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

Gets all properties from an individual <code>view</code>.
```sql
SELECT
region,
instance_arn,
view_arn,
view_id,
name,
description,
template,
actions,
view_content_sha256,
tags
FROM awscc.connect.views
WHERE region = 'us-east-1' AND data__Identifier = '<ViewArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>views</code> in a region.
```sql
SELECT
region,
view_arn
FROM awscc.connect.views_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>view</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.connect.views (
 InstanceArn,
 Name,
 Template,
 Actions,
 region
)
SELECT 
'{{ InstanceArn }}',
 '{{ Name }}',
 '{{ Template }}',
 '{{ Actions }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.connect.views (
 InstanceArn,
 Name,
 Description,
 Template,
 Actions,
 Tags,
 region
)
SELECT 
 '{{ InstanceArn }}',
 '{{ Name }}',
 '{{ Description }}',
 '{{ Template }}',
 '{{ Actions }}',
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
  - name: view
    props:
      - name: InstanceArn
        value: '{{ InstanceArn }}'
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: Template
        value: {}
      - name: Actions
        value:
          - '{{ Actions[0] }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.connect.views
SET data__PatchDocument = string('{{ {
    "InstanceArn": instance_arn,
    "Name": name,
    "Description": description,
    "Template": template,
    "Actions": actions,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<ViewArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.connect.views
WHERE data__Identifier = '<ViewArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>views</code> resource, the following permissions are required:

### Create
```json
connect:CreateView,
connect:TagResource
```

### Read
```json
connect:DescribeView
```

### Delete
```json
connect:DeleteView,
connect:UntagResource
```

### List
```json
connect:ListViews
```

### Update
```json
connect:UpdateViewMetadata,
connect:UpdateViewContent,
connect:TagResource,
connect:UntagResource
```
