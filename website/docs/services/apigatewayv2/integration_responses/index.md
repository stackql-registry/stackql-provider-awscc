---
title: integration_responses
hide_title: false
hide_table_of_contents: false
keywords:
  - integration_responses
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

Creates, updates, deletes or gets an <code>integration_response</code> resource or lists <code>integration_responses</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>integration_responses</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApiGatewayV2::IntegrationResponse&#96;&#96; resource updates an integration response for an WebSocket API. For more information, see &#91;Set up WebSocket API Integration Responses in API Gateway&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-integration-responses.html) in the &#42;API Gateway Developer Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigatewayv2.integration_responses" /></td></tr>
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
    "name": "integration_response_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "response_templates",
    "type": "object",
    "description": "The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value."
  },
  {
    "name": "template_selection_expression",
    "type": "string",
    "description": "The template selection expression for the integration response. Supported only for WebSocket APIs."
  },
  {
    "name": "response_parameters",
    "type": "object",
    "description": "A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of &#96;&#96;method.response.header.&#123;name&#125;&#96;&#96;, where name is a valid and unique header name. The mapped non-static value must match the pattern of &#96;&#96;integration.response.header.&#123;name&#125;&#96;&#96; or &#96;&#96;integration.response.body.&#123;JSON-expression&#125;&#96;&#96;, where &#96;&#96;&#123;name&#125;&#96;&#96; is a valid and unique response header name and &#96;&#96;&#123;JSON-expression&#125;&#96;&#96; is a valid JSON expression without the &#96;&#96;$&#96;&#96; prefix."
  },
  {
    "name": "content_handling_strategy",
    "type": "string",
    "description": "Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are &#96;&#96;CONVERT&#95;TO&#95;BINARY&#96;&#96; and &#96;&#96;CONVERT&#95;TO&#95;TEXT&#96;&#96;, with the following behaviors:<br />&#96;&#96;CONVERT&#95;TO&#95;BINARY&#96;&#96;: Converts a response payload from a Base64-encoded string to the corresponding binary blob.<br />&#96;&#96;CONVERT&#95;TO&#95;TEXT&#96;&#96;: Converts a response payload from a binary blob to a Base64-encoded string.<br />If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification."
  },
  {
    "name": "integration_id",
    "type": "string",
    "description": "The integration ID."
  },
  {
    "name": "integration_response_key",
    "type": "string",
    "description": "The integration response key."
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "integration_response_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "integration_id",
    "type": "string",
    "description": "The integration ID."
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integrationresponse.html"><code>AWS::ApiGatewayV2::IntegrationResponse</code></a>.

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
    <td><code>integration_responses</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ApiId, IntegrationId, IntegrationResponseKey, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>integration_responses</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>integration_responses</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>integration_responses_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>integration_responses</code></td>
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

Gets all properties from an individual <code>integration_response</code>.
```sql
SELECT
region,
integration_response_id,
response_templates,
template_selection_expression,
response_parameters,
content_handling_strategy,
integration_id,
integration_response_key,
api_id
FROM awscc.apigatewayv2.integration_responses
WHERE region = 'us-east-1' AND data__Identifier = '<ApiId>|<IntegrationId>|<IntegrationResponseId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>integration_responses</code> in a region.
```sql
SELECT
region,
api_id,
integration_id,
integration_response_id
FROM awscc.apigatewayv2.integration_responses_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>integration_response</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.apigatewayv2.integration_responses (
 IntegrationId,
 IntegrationResponseKey,
 ApiId,
 region
)
SELECT 
'{{ IntegrationId }}',
 '{{ IntegrationResponseKey }}',
 '{{ ApiId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.apigatewayv2.integration_responses (
 ResponseTemplates,
 TemplateSelectionExpression,
 ResponseParameters,
 ContentHandlingStrategy,
 IntegrationId,
 IntegrationResponseKey,
 ApiId,
 region
)
SELECT 
 '{{ ResponseTemplates }}',
 '{{ TemplateSelectionExpression }}',
 '{{ ResponseParameters }}',
 '{{ ContentHandlingStrategy }}',
 '{{ IntegrationId }}',
 '{{ IntegrationResponseKey }}',
 '{{ ApiId }}',
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
  - name: integration_response
    props:
      - name: ResponseTemplates
        value: {}
      - name: TemplateSelectionExpression
        value: '{{ TemplateSelectionExpression }}'
      - name: ResponseParameters
        value: {}
      - name: ContentHandlingStrategy
        value: '{{ ContentHandlingStrategy }}'
      - name: IntegrationId
        value: '{{ IntegrationId }}'
      - name: IntegrationResponseKey
        value: '{{ IntegrationResponseKey }}'
      - name: ApiId
        value: '{{ ApiId }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.apigatewayv2.integration_responses
SET data__PatchDocument = string('{{ {
    "ResponseTemplates": response_templates,
    "TemplateSelectionExpression": template_selection_expression,
    "ResponseParameters": response_parameters,
    "ContentHandlingStrategy": content_handling_strategy,
    "IntegrationResponseKey": integration_response_key
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<ApiId>|<IntegrationId>|<IntegrationResponseId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apigatewayv2.integration_responses
WHERE data__Identifier = '<ApiId|IntegrationId|IntegrationResponseId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>integration_responses</code> resource, the following permissions are required:

### Create
```json
apigateway:POST
```

### Read
```json
apigateway:GET
```

### Update
```json
apigateway:PATCH,
apigateway:PUT,
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
