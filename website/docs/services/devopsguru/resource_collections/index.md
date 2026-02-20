---
title: resource_collections
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_collections
  - devopsguru
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

Creates, updates, deletes or gets a <code>resource_collection</code> resource or lists <code>resource_collections</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>resource_collections</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>This resource schema represents the ResourceCollection resource in the Amazon DevOps Guru.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.devopsguru.resource_collections" /></td></tr>
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
    "name": "resource_collection_filter",
    "type": "object",
    "description": "Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru.",
    "children": [
      {
        "name": "cloud_formation",
        "type": "object",
        "description": "CloudFormation resource for DevOps Guru to monitor",
        "children": [
          {
            "name": "stack_names",
            "type": "array",
            "description": "An array of CloudFormation stack names."
          }
        ]
      },
      {
        "name": "tags",
        "type": "array",
        "description": "Tagged resources for DevOps Guru to monitor",
        "children": [
          {
            "name": "app_boundary_key",
            "type": "string",
            "description": "A Tag key for DevOps Guru app boundary."
          },
          {
            "name": "tag_values",
            "type": "array",
            "description": "Tag values of DevOps Guru app boundary."
          }
        ]
      }
    ]
  },
  {
    "name": "resource_collection_type",
    "type": "string",
    "description": "The type of ResourceCollection"
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
    "name": "resource_collection_type",
    "type": "string",
    "description": "The type of ResourceCollection"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-resourcecollection.html"><code>AWS::DevOpsGuru::ResourceCollection</code></a>.

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
    <td><code>resource_collections</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ResourceCollectionFilter, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>resource_collections</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>resource_collections</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>resource_collections_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>resource_collections</code></td>
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

Gets all properties from an individual <code>resource_collection</code>.
```sql
SELECT
region,
resource_collection_filter,
resource_collection_type
FROM awscc.devopsguru.resource_collections
WHERE region = 'us-east-1' AND Identifier = '<ResourceCollectionType>';
```
</TabItem>
<TabItem value="list">

Lists all <code>resource_collections</code> in a region.
```sql
SELECT
region,
resource_collection_type
FROM awscc.devopsguru.resource_collections_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>resource_collection</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.devopsguru.resource_collections (
 ResourceCollectionFilter,
 region
)
SELECT 
'{{ ResourceCollectionFilter }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.devopsguru.resource_collections (
 ResourceCollectionFilter,
 region
)
SELECT 
 '{{ ResourceCollectionFilter }}',
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
  - name: resource_collection
    props:
      - name: ResourceCollectionFilter
        value:
          CloudFormation:
            StackNames:
              - '{{ StackNames[0] }}'
          Tags:
            - AppBoundaryKey: '{{ AppBoundaryKey }}'
              TagValues:
                - '{{ TagValues[0] }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.devopsguru.resource_collections
SET PatchDocument = string('{{ {
    "ResourceCollectionFilter": resource_collection_filter
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ResourceCollectionType>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.devopsguru.resource_collections
WHERE Identifier = '<ResourceCollectionType>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>resource_collections</code> resource, the following permissions are required:

### Create
```json
devops-guru:UpdateResourceCollection,
devops-guru:GetResourceCollection
```

### Read
```json
devops-guru:GetResourceCollection
```

### Delete
```json
devops-guru:UpdateResourceCollection,
devops-guru:GetResourceCollection
```

### List
```json
devops-guru:GetResourceCollection
```

### Update
```json
devops-guru:UpdateResourceCollection,
devops-guru:GetResourceCollection
```
