---
title: attribute_group_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - attribute_group_associations
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

Creates, updates, deletes or gets an <code>attribute_group_association</code> resource or lists <code>attribute_group_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>attribute_group_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Schema for AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.servicecatalogappregistry.attribute_group_associations" /></td></tr>
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
    "name": "application",
    "type": "string",
    "description": "The name or the Id of the Application."
  },
  {
    "name": "attribute_group",
    "type": "string",
    "description": "The name or the Id of the AttributeGroup."
  },
  {
    "name": "application_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "attribute_group_arn",
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "application",
    "type": "string",
    "description": "The name or the Id of the Application."
  },
  {
    "name": "attribute_group",
    "type": "string",
    "description": "The name or the Id of the AttributeGroup."
  },
  {
    "name": "application_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "attribute_group_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroupassociation.html"><code>AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation</code></a>.

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
    <td><code>attribute_group_associations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Application, AttributeGroup, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>attribute_group_associations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>attribute_group_associations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>attribute_group_associations</code></td>
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

Gets all properties from an individual <code>attribute_group_association</code>.
```sql
SELECT
region,
application,
attribute_group,
application_arn,
attribute_group_arn
FROM awscc.servicecatalogappregistry.attribute_group_associations
WHERE region = 'us-east-1' AND Identifier = '<ApplicationArn>|<AttributeGroupArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>attribute_group_associations</code> in a region.
```sql
SELECT
region,
application_arn,
attribute_group_arn
FROM awscc.servicecatalogappregistry.attribute_group_associations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>attribute_group_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.servicecatalogappregistry.attribute_group_associations (
 Application,
 AttributeGroup,
 region
)
SELECT 
'{{ Application }}',
 '{{ AttributeGroup }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.servicecatalogappregistry.attribute_group_associations (
 Application,
 AttributeGroup,
 region
)
SELECT 
 '{{ Application }}',
 '{{ AttributeGroup }}',
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
  - name: attribute_group_association
    props:
      - name: Application
        value: '{{ Application }}'
      - name: AttributeGroup
        value: '{{ AttributeGroup }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.servicecatalogappregistry.attribute_group_associations
WHERE Identifier = '<ApplicationArn|AttributeGroupArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>attribute_group_associations</code> resource, the following permissions are required:

### Create
```json
servicecatalog:AssociateAttributeGroup
```

### Read
```json
servicecatalog:ListAttributeGroupsForApplication
```

### Delete
```json
servicecatalog:DisassociateAttributeGroup
```

### List
```json
servicecatalog:ListAttributeGroupsForApplication
```
