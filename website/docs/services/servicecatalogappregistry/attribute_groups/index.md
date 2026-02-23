---
title: attribute_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - attribute_groups
  - servicecatalogappregistry
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

Creates, updates, deletes or gets an <code>attribute_group</code> resource or lists <code>attribute_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>attribute_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Schema for AWS::ServiceCatalogAppRegistry::AttributeGroup.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.servicecatalogappregistry.attribute_groups" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the attribute group."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the attribute group."
  },
  {
    "name": "attributes",
    "type": "object",
    "description": ""
  },
  {
    "name": "tags",
    "type": "object",
    "description": ""
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
    "name": "id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroup.html"><code>AWS::ServiceCatalogAppRegistry::AttributeGroup</code></a>.

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
    <td><code>attribute_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, Attributes, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>attribute_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>attribute_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>attribute_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>attribute_groups</code></td>
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

Gets all properties from an individual <code>attribute_group</code>.
```sql
SELECT
region,
id,
arn,
name,
description,
attributes,
tags
FROM awscc.servicecatalogappregistry.attribute_groups
WHERE region = 'us-east-1' AND Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>attribute_groups</code> in a region.
```sql
SELECT
region,
id
FROM awscc.servicecatalogappregistry.attribute_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>attribute_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.servicecatalogappregistry.attribute_groups (
 Name,
 Attributes,
 region
)
SELECT
'{{ name }}',
 '{{ attributes }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.servicecatalogappregistry.attribute_groups (
 Name,
 Description,
 Attributes,
 Tags,
 region
)
SELECT
 '{{ name }}',
 '{{ description }}',
 '{{ attributes }}',
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
  - name: attribute_group
    props:
      - name: name
        value: '{{ name }}'
      - name: description
        value: '{{ description }}'
      - name: attributes
        value: {}
      - name: tags
        value: {}
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>attribute_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.servicecatalogappregistry.attribute_groups
SET PatchDocument = string('{{ {
    "Name": name,
    "Description": description,
    "Attributes": attributes,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.servicecatalogappregistry.attribute_groups
WHERE Identifier = '{{ id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>attribute_groups</code> resource, the following permissions are required:

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
servicecatalog:CreateAttributeGroup,
servicecatalog:TagResource
```

</TabItem>
<TabItem value="read">

```json
servicecatalog:GetAttributeGroup
```

</TabItem>
<TabItem value="update">

```json
servicecatalog:GetAttributeGroup,
servicecatalog:UpdateAttributeGroup,
servicecatalog:ListTagsForResource,
servicecatalog:TagResource,
servicecatalog:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
servicecatalog:DeleteAttributeGroup
```

</TabItem>
<TabItem value="list">

```json
servicecatalog:ListAttributeGroups
```

</TabItem>
</Tabs>