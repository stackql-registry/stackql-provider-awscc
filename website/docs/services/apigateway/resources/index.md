---
title: resources
hide_title: false
hide_table_of_contents: false
keywords:
  - resources
  - apigateway
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

Creates, updates, deletes or gets a <code>resource</code> resource or lists <code>resources</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>resources</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApiGateway::Resource&#96;&#96; resource creates a resource in an API.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigateway.resources" /></td></tr>
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
    "name": "parent_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "path_part",
    "type": "string",
    "description": ""
  },
  {
    "name": "resource_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "rest_api_id",
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
    "name": "resource_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "rest_api_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-resource.html"><code>AWS::ApiGateway::Resource</code></a>.

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
    <td><code>resources</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ParentId, PathPart, RestApiId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>resources</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>resources</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>resources_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>resources</code></td>
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

Gets all properties from an individual <code>resource</code>.
```sql
SELECT
region,
parent_id,
path_part,
resource_id,
rest_api_id
FROM awscc.apigateway.resources
WHERE region = 'us-east-1' AND Identifier = '<RestApiId>|<ResourceId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>resources</code> in a region.
```sql
SELECT
region,
rest_api_id,
resource_id
FROM awscc.apigateway.resources_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>resource</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.apigateway.resources (
 ParentId,
 PathPart,
 RestApiId,
 region
)
SELECT 
'{{ ParentId }}',
 '{{ PathPart }}',
 '{{ RestApiId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.apigateway.resources (
 ParentId,
 PathPart,
 RestApiId,
 region
)
SELECT 
 '{{ ParentId }}',
 '{{ PathPart }}',
 '{{ RestApiId }}',
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
  - name: resource
    props:
      - name: ParentId
        value: '{{ ParentId }}'
      - name: PathPart
        value: '{{ PathPart }}'
      - name: RestApiId
        value: '{{ RestApiId }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apigateway.resources
WHERE Identifier = '<RestApiId|ResourceId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>resources</code> resource, the following permissions are required:

### Read
```json
apigateway:GET
```

### Create
```json
apigateway:POST
```

### Update
```json
apigateway:GET,
apigateway:PATCH
```

### List
```json
apigateway:GET
```

### Delete
```json
apigateway:DELETE
```
