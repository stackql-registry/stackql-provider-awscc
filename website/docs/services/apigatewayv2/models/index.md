---
title: models
hide_title: false
hide_table_of_contents: false
keywords:
  - models
  - apigatewayv2
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

Creates, updates, deletes or gets a <code>model</code> resource or lists <code>models</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>models</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApiGatewayV2::Model&#96;&#96; resource updates data model for a WebSocket API. For more information, see &#91;Model Selection Expressions&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-model-selection-expressions) in the &#42;API Gateway Developer Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigatewayv2.models" /></td></tr>
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
    "name": "model_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the model."
  },
  {
    "name": "content_type",
    "type": "string",
    "description": "The content-type for the model, for example, \"application/json\"."
  },
  {
    "name": "schema",
    "type": "object",
    "description": "The schema for the model. For application/json models, this should be JSON schema draft 4 model."
  },
  {
    "name": "api_id",
    "type": "string",
    "description": "The API identifier."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the model."
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
    "name": "model_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "api_id",
    "type": "string",
    "description": "The API identifier."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-model.html"><code>AWS::ApiGatewayV2::Model</code></a>.

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
    <td><code>models</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ApiId, Schema, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>models</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>models</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>models_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>models</code></td>
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

Gets all properties from an individual <code>model</code>.
```sql
SELECT
region,
model_id,
description,
content_type,
schema,
api_id,
name
FROM awscc.apigatewayv2.models
WHERE region = 'us-east-1' AND data__Identifier = '<ApiId>|<ModelId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>models</code> in a region.
```sql
SELECT
region,
api_id,
model_id
FROM awscc.apigatewayv2.models_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>model</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.apigatewayv2.models (
 Schema,
 ApiId,
 Name,
 region
)
SELECT 
'{{ Schema }}',
 '{{ ApiId }}',
 '{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.apigatewayv2.models (
 Description,
 ContentType,
 Schema,
 ApiId,
 Name,
 region
)
SELECT 
 '{{ Description }}',
 '{{ ContentType }}',
 '{{ Schema }}',
 '{{ ApiId }}',
 '{{ Name }}',
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
  - name: model
    props:
      - name: Description
        value: '{{ Description }}'
      - name: ContentType
        value: '{{ ContentType }}'
      - name: Schema
        value: {}
      - name: ApiId
        value: '{{ ApiId }}'
      - name: Name
        value: '{{ Name }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.apigatewayv2.models
SET data__PatchDocument = string('{{ {
    "Description": description,
    "ContentType": content_type,
    "Schema": schema,
    "Name": name
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<ApiId>|<ModelId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apigatewayv2.models
WHERE data__Identifier = '<ApiId|ModelId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>models</code> resource, the following permissions are required:

### Create
```json
apigateway:POST
```

### Update
```json
apigateway:PATCH,
apigateway:GET,
apigateway:PUT
```

### Read
```json
apigateway:GET
```

### Delete
```json
apigateway:GET,
apigateway:DELETE
```

### List
```json
apigateway:GET
```
