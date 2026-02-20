---
title: documentation_parts
hide_title: false
hide_table_of_contents: false
keywords:
  - documentation_parts
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

Creates, updates, deletes or gets a <code>documentation_part</code> resource or lists <code>documentation_parts</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>documentation_parts</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApiGateway::DocumentationPart&#96;&#96; resource creates a documentation part for an API. For more information, see &#91;Representation of API Documentation in API Gateway&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api-content-representation.html) in the &#42;API Gateway Developer Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigateway.documentation_parts" /></td></tr>
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
    "name": "documentation_part_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "location",
    "type": "object",
    "description": "The &#96;&#96;Location&#96;&#96; property specifies the location of the Amazon API Gateway API entity that the documentation applies to. &#96;&#96;Location&#96;&#96; is a property of the &#91;AWS::ApiGateway::DocumentationPart&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationpart.html) resource.<br />For more information about each property, including constraints and valid values, see &#91;DocumentationPart&#93;(https://docs.aws.amazon.com/apigateway/latest/api/API&#95;DocumentationPartLocation.html) in the &#42;Amazon API Gateway REST API Reference&#42;.",
    "children": [
      {
        "name": "method",
        "type": "string",
        "description": ""
      },
      {
        "name": "name",
        "type": "string",
        "description": ""
      },
      {
        "name": "path",
        "type": "string",
        "description": ""
      },
      {
        "name": "status_code",
        "type": "string",
        "description": ""
      },
      {
        "name": "type",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "properties",
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
    "name": "documentation_part_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationpart.html"><code>AWS::ApiGateway::DocumentationPart</code></a>.

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
    <td><code>documentation_parts</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Location, Properties, RestApiId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>documentation_parts</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>documentation_parts</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>documentation_parts_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>documentation_parts</code></td>
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

Gets all properties from an individual <code>documentation_part</code>.
```sql
SELECT
region,
documentation_part_id,
location,
properties,
rest_api_id
FROM awscc.apigateway.documentation_parts
WHERE region = 'us-east-1' AND Identifier = '<DocumentationPartId>|<RestApiId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>documentation_parts</code> in a region.
```sql
SELECT
region,
documentation_part_id,
rest_api_id
FROM awscc.apigateway.documentation_parts_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>documentation_part</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.apigateway.documentation_parts (
 Location,
 Properties,
 RestApiId,
 region
)
SELECT 
'{{ Location }}',
 '{{ Properties }}',
 '{{ RestApiId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.apigateway.documentation_parts (
 Location,
 Properties,
 RestApiId,
 region
)
SELECT 
 '{{ Location }}',
 '{{ Properties }}',
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
  - name: documentation_part
    props:
      - name: Location
        value:
          Method: '{{ Method }}'
          Name: '{{ Name }}'
          Path: '{{ Path }}'
          StatusCode: '{{ StatusCode }}'
          Type: '{{ Type }}'
      - name: Properties
        value: '{{ Properties }}'
      - name: RestApiId
        value: '{{ RestApiId }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>documentation_part</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.apigateway.documentation_parts
SET PatchDocument = string('{{ {
    "Properties": properties
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<DocumentationPartId>|<RestApiId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apigateway.documentation_parts
WHERE Identifier = '<DocumentationPartId|RestApiId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>documentation_parts</code> resource, the following permissions are required:

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
apigateway:GET,
apigateway:POST
```

</TabItem>
<TabItem value="read">

```json
apigateway:GET
```

</TabItem>
<TabItem value="update">

```json
apigateway:GET,
apigateway:PATCH
```

</TabItem>
<TabItem value="delete">

```json
apigateway:DELETE
```

</TabItem>
<TabItem value="list">

```json
apigateway:GET
```

</TabItem>
</Tabs>