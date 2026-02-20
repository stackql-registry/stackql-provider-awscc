---
title: route_responses
hide_title: false
hide_table_of_contents: false
keywords:
  - route_responses
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

Creates, updates, deletes or gets a <code>route_response</code> resource or lists <code>route_responses</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>route_responses</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApiGatewayV2::RouteResponse&#96;&#96; resource creates a route response for a WebSocket API. For more information, see &#91;Set up Route Responses for a WebSocket API in API Gateway&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-route-response.html) in the &#42;API Gateway Developer Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigatewayv2.route_responses" /></td></tr>
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
    "name": "route_response_key",
    "type": "string",
    "description": "The route response key."
  },
  {
    "name": "response_parameters",
    "type": "object",
    "description": "The route response parameters."
  },
  {
    "name": "route_id",
    "type": "string",
    "description": "The route ID."
  },
  {
    "name": "model_selection_expression",
    "type": "string",
    "description": "The model selection expression for the route response. Supported only for WebSocket APIs."
  },
  {
    "name": "api_id",
    "type": "string",
    "description": "The API identifier."
  },
  {
    "name": "response_models",
    "type": "object",
    "description": "The response models for the route response."
  },
  {
    "name": "route_response_id",
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
    "name": "route_id",
    "type": "string",
    "description": "The route ID."
  },
  {
    "name": "api_id",
    "type": "string",
    "description": "The API identifier."
  },
  {
    "name": "route_response_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routeresponse.html"><code>AWS::ApiGatewayV2::RouteResponse</code></a>.

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
    <td><code>route_responses</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="RouteResponseKey, RouteId, ApiId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>route_responses</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>route_responses</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>route_responses_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>route_responses</code></td>
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

Gets all properties from an individual <code>route_response</code>.
```sql
SELECT
region,
route_response_key,
response_parameters,
route_id,
model_selection_expression,
api_id,
response_models,
route_response_id
FROM awscc.apigatewayv2.route_responses
WHERE region = 'us-east-1' AND Identifier = '<ApiId>|<RouteId>|<RouteResponseId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>route_responses</code> in a region.
```sql
SELECT
region,
api_id,
route_id,
route_response_id
FROM awscc.apigatewayv2.route_responses_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>route_response</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.apigatewayv2.route_responses (
 RouteResponseKey,
 RouteId,
 ApiId,
 region
)
SELECT 
'{{ RouteResponseKey }}',
 '{{ RouteId }}',
 '{{ ApiId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.apigatewayv2.route_responses (
 RouteResponseKey,
 ResponseParameters,
 RouteId,
 ModelSelectionExpression,
 ApiId,
 ResponseModels,
 region
)
SELECT 
 '{{ RouteResponseKey }}',
 '{{ ResponseParameters }}',
 '{{ RouteId }}',
 '{{ ModelSelectionExpression }}',
 '{{ ApiId }}',
 '{{ ResponseModels }}',
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
  - name: route_response
    props:
      - name: RouteResponseKey
        value: '{{ RouteResponseKey }}'
      - name: ResponseParameters
        value: null
      - name: RouteId
        value: '{{ RouteId }}'
      - name: ModelSelectionExpression
        value: '{{ ModelSelectionExpression }}'
      - name: ApiId
        value: '{{ ApiId }}'
      - name: ResponseModels
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.apigatewayv2.route_responses
SET PatchDocument = string('{{ {
    "RouteResponseKey": route_response_key,
    "ResponseParameters": response_parameters,
    "ModelSelectionExpression": model_selection_expression,
    "ResponseModels": response_models
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ApiId>|<RouteId>|<RouteResponseId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apigatewayv2.route_responses
WHERE Identifier = '<ApiId|RouteId|RouteResponseId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>route_responses</code> resource, the following permissions are required:

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
