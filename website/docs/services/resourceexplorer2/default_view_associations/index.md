---
title: default_view_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - default_view_associations
  - resourceexplorer2
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

Creates, updates, deletes or gets a <code>default_view_association</code> resource or lists <code>default_view_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>default_view_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::ResourceExplorer2::DefaultViewAssociation Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.resourceexplorer2.default_view_associations" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "view_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "associated_aws_principal",
    "type": "string",
    "description": "The AWS principal that the default view is associated with, used as the unique identifier for this resource."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-defaultviewassociation.html"><code>AWS::ResourceExplorer2::DefaultViewAssociation</code></a>.

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
    <td><CopyableCode code="ViewArn, region" /></td>
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
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>default_view_association</code>.
```sql
SELECT
region,
view_arn,
associated_aws_principal
FROM awscc.resourceexplorer2.default_view_associations
WHERE region = 'us-east-1' AND data__Identifier = '<AssociatedAwsPrincipal>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>default_view_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.resourceexplorer2.default_view_associations (
 ViewArn,
 region
)
SELECT 
'{{ ViewArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.resourceexplorer2.default_view_associations (
 ViewArn,
 region
)
SELECT 
 '{{ ViewArn }}',
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
  - name: default_view_association
    props:
      - name: ViewArn
        value: '{{ ViewArn }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.resourceexplorer2.default_view_associations
WHERE data__Identifier = '<AssociatedAwsPrincipal>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>default_view_associations</code> resource, the following permissions are required:

### Create
```json
resource-explorer-2:GetDefaultView,
resource-explorer-2:AssociateDefaultView
```

### Update
```json
resource-explorer-2:GetDefaultView,
resource-explorer-2:AssociateDefaultView
```

### Read
```json
resource-explorer-2:GetDefaultView
```

### Delete
```json
resource-explorer-2:GetDefaultView,
resource-explorer-2:DisassociateDefaultView
```
