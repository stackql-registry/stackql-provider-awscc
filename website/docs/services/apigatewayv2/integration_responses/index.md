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

import CodeBlock from '@theme/CodeBlock';
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
<tr><td><b>Description</b></td><td>The <code>AWS::ApiGatewayV2::IntegrationResponse</code> resource updates an integration response for an WebSocket API. For more information, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-integration-responses.html">Set up WebSocket API Integration Responses in API Gateway</a> in the <i>API Gateway Developer Guide</i>.</td></tr>
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
    "description": "A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of <code>method.response.header.&#123;name&#125;</code>, where name is a valid and unique header name. The mapped non-static value must match the pattern of <code>integration.response.header.&#123;name&#125;</code> or <code>integration.response.body.&#123;JSON-expression&#125;</code>, where <code>&#123;name&#125;</code> is a valid and unique response header name and <code>&#123;JSON-expression&#125;</code> is a valid JSON expression without the <code>$</code> prefix."
  },
  {
    "name": "content_handling_strategy",
    "type": "string",
    "description": "<details><summary>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</summary><code>CONVERT_TO_BINARY</code>: Converts a response payload from a Base64-encoded string to the corresponding binary blob.<br /><code>CONVERT_TO_TEXT</code>: Converts a response payload from a binary blob to a Base64-encoded string.<br />If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</details>"
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
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>integration_responses</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ api_id }}|{{ integration_id }}|{{ integration_response_id }}';
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
WHERE
  region = '{{ region }}';
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
  '{{ integration_id }}',
  '{{ integration_response_key }}',
  '{{ api_id }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
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
  '{{ response_templates }}',
  '{{ template_selection_expression }}',
  '{{ response_parameters }}',
  '{{ content_handling_strategy }}',
  '{{ integration_id }}',
  '{{ integration_response_key }}',
  '{{ api_id }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`version: 1
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
      - name: response_templates
        value: {}
      - name: template_selection_expression
        value: '{{ template_selection_expression }}'
      - name: response_parameters
        value: {}
      - name: content_handling_strategy
        value: '{{ content_handling_strategy }}'
      - name: integration_id
        value: '{{ integration_id }}'
      - name: integration_response_key
        value: '{{ integration_response_key }}'
      - name: api_id
        value: '{{ api_id }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>integration_response</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.apigatewayv2.integration_responses
SET PatchDocument = string('{{ {
    "ResponseTemplates": response_templates,
    "TemplateSelectionExpression": template_selection_expression,
    "ResponseParameters": response_parameters,
    "ContentHandlingStrategy": content_handling_strategy,
    "IntegrationResponseKey": integration_response_key
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ api_id }}|{{ integration_id }}|{{ integration_response_id }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apigatewayv2.integration_responses
WHERE
  Identifier = '{{ api_id }}|{{ integration_id }}|{{ integration_response_id }}' AND
  region = '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

## Permissions

To operate on the <code>integration_responses</code> resource, the following permissions are required:

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
apigateway:PATCH,
apigateway:PUT,
apigateway:GET
```

</TabItem>
<TabItem value="delete">

```json
apigateway:GET,
apigateway:DELETE
```

</TabItem>
<TabItem value="list">

```json
apigateway:GET
```

</TabItem>
</Tabs>