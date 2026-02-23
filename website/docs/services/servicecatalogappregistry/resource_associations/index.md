---
title: resource_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_associations
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

Creates, updates, deletes or gets a <code>resource_association</code> resource or lists <code>resource_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>resource_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Schema for AWS::ServiceCatalogAppRegistry::ResourceAssociation</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.servicecatalogappregistry.resource_associations" /></td></tr>
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
    "name": "resource",
    "type": "string",
    "description": "The name or the Id of the Resource."
  },
  {
    "name": "resource_type",
    "type": "string",
    "description": "The type of the CFN Resource for now it's enum CFN&#95;STACK."
  },
  {
    "name": "application_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "resource_arn",
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
    "name": "resource",
    "type": "string",
    "description": "The name or the Id of the Resource."
  },
  {
    "name": "resource_type",
    "type": "string",
    "description": "The type of the CFN Resource for now it's enum CFN&#95;STACK."
  },
  {
    "name": "application_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "resource_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-resourceassociation.html"><code>AWS::ServiceCatalogAppRegistry::ResourceAssociation</code></a>.

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
    <td><code>resource_associations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Application, Resource, ResourceType, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>resource_associations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>resource_associations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>resource_associations</code></td>
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

Gets all properties from an individual <code>resource_association</code>.
```sql
SELECT
region,
application,
resource,
resource_type,
application_arn,
resource_arn
FROM awscc.servicecatalogappregistry.resource_associations
WHERE region = 'us-east-1' AND Identifier = '{{ application_arn }}|{{ resource_arn }}|{{ resource_type }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>resource_associations</code> in a region.
```sql
SELECT
region,
application_arn,
resource_arn,
resource_type
FROM awscc.servicecatalogappregistry.resource_associations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>resource_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.servicecatalogappregistry.resource_associations (
 Application,
 Resource,
 ResourceType,
 region
)
SELECT
'{{ application }}',
 '{{ resource }}',
 '{{ resource_type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.servicecatalogappregistry.resource_associations (
 Application,
 Resource,
 ResourceType,
 region
)
SELECT
 '{{ application }}',
 '{{ resource }}',
 '{{ resource_type }}',
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
  - name: resource_association
    props:
      - name: application
        value: '{{ application }}'
      - name: resource
        value: '{{ resource }}'
      - name: resource_type
        value: '{{ resource_type }}'
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.servicecatalogappregistry.resource_associations
WHERE Identifier = '{{ application_arn }}|{{ resource_arn }}|{{ resource_type }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>resource_associations</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
servicecatalog:AssociateResource,
cloudformation:DescribeStacks
```

</TabItem>
<TabItem value="read">

```json
servicecatalog:ListAssociatedResources
```

</TabItem>
<TabItem value="delete">

```json
servicecatalog:DisassociateResource
```

</TabItem>
<TabItem value="list">

```json
servicecatalog:ListAssociatedResources
```

</TabItem>
</Tabs>