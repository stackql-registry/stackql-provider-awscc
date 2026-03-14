---
title: apis
hide_title: false
hide_table_of_contents: false
keywords:
  - apis
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

Creates, updates, deletes or gets an <code>api</code> resource or lists <code>apis</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>apis</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The <code>AWS::ApiGatewayV2::Api</code> resource creates an API. WebSocket APIs and HTTP APIs are supported. For more information about WebSocket APIs, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-overview.html">About WebSocket APIs in API Gateway</a> in the <i>API Gateway Developer Guide</i>. For more information about HTTP APIs, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api.html">HTTP APIs</a> in the <i>API Gateway Developer Guide.</i></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigatewayv2.apis" /></td></tr>
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
    "name": "route_selection_expression",
    "type": "string",
    "description": "The route selection expression for the API. For HTTP APIs, the <code>routeSelectionExpression</code> must be <code>$&#123;request.method&#125; $&#123;request.path&#125;</code>. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs."
  },
  {
    "name": "body",
    "type": "object",
    "description": "The OpenAPI definition. Supported only for HTTP APIs. To import an HTTP API, you must specify a <code>Body</code> or <code>BodyS3Location</code>. If you specify a <code>Body</code> or <code>BodyS3Location</code>, don't specify CloudFormation resources such as <code>AWS::ApiGatewayV2::Authorizer</code> or <code>AWS::ApiGatewayV2::Route</code>. API Gateway doesn't support the combination of OpenAPI and CloudFormation resources."
  },
  {
    "name": "body_s3_location",
    "type": "object",
    "description": "The S3 location of an OpenAPI definition. Supported only for HTTP APIs. To import an HTTP API, you must specify a <code>Body</code> or <code>BodyS3Location</code>. If you specify a <code>Body</code> or <code>BodyS3Location</code>, don't specify CloudFormation resources such as <code>AWS::ApiGatewayV2::Authorizer</code> or <code>AWS::ApiGatewayV2::Route</code>. API Gateway doesn't support the combination of OpenAPI and CloudFormation resources.",
    "children": [
      {
        "name": "etag",
        "type": "string",
        "description": "The Etag of the S3 object."
      },
      {
        "name": "bucket",
        "type": "string",
        "description": "The S3 bucket that contains the OpenAPI definition to import. Required if you specify a <code>BodyS3Location</code> for an API."
      },
      {
        "name": "version",
        "type": "string",
        "description": "The version of the S3 object."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The key of the S3 object. Required if you specify a <code>BodyS3Location</code> for an API."
      }
    ]
  },
  {
    "name": "base_path",
    "type": "string",
    "description": "Specifies how to interpret the base path of the API during import. Valid values are <code>ignore</code>, <code>prepend</code>, and <code>split</code>. The default value is <code>ignore</code>. To learn more, see <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api-basePath.html\">Set the OpenAPI basePath Property</a>. Supported only for HTTP APIs."
  },
  {
    "name": "credentials_arn",
    "type": "string",
    "description": "This property is part of quick create. It specifies the credentials required for the integration, if any. For a Lambda integration, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify <code>arn:aws:iam::<i>:user/</i></code>. To use resource-based permissions on supported AWS services, specify <code>null</code>. Currently, this property is not used for HTTP integrations. Supported only for HTTP APIs."
  },
  {
    "name": "cors_configuration",
    "type": "object",
    "description": "A CORS configuration. Supported only for HTTP APIs. See <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html\">Configuring CORS</a> for more information.",
    "children": [
      {
        "name": "allow_origins",
        "type": "array",
        "description": "Represents a collection of allowed origins. Supported only for HTTP APIs."
      },
      {
        "name": "allow_credentials",
        "type": "boolean",
        "description": "Specifies whether credentials are included in the CORS request. Supported only for HTTP APIs."
      },
      {
        "name": "expose_headers",
        "type": "array",
        "description": "Represents a collection of exposed headers. Supported only for HTTP APIs."
      },
      {
        "name": "allow_headers",
        "type": "array",
        "description": "Represents a collection of allowed headers. Supported only for HTTP APIs."
      },
      {
        "name": "max_age",
        "type": "integer",
        "description": "The number of seconds that the browser should cache preflight request results. Supported only for HTTP APIs."
      },
      {
        "name": "allow_methods",
        "type": "array",
        "description": "Represents a collection of allowed HTTP methods. Supported only for HTTP APIs."
      }
    ]
  },
  {
    "name": "route_key",
    "type": "string",
    "description": "This property is part of quick create. If you don't specify a <code>routeKey</code>, a default route of <code>$default</code> is created. The <code>$default</code> route acts as a catch-all for any request made to your API, for a particular stage. The <code>$default</code> route key can't be modified. You can add routes after creating the API, and you can update the route keys of additional routes. Supported only for HTTP APIs."
  },
  {
    "name": "target",
    "type": "string",
    "description": "This property is part of quick create. Quick create produces an API with an integration, a default catch-all route, and a default stage which is configured to automatically deploy changes. For HTTP integrations, specify a fully qualified URL. For Lambda integrations, specify a function ARN. The type of the integration will be HTTP_PROXY or AWS_PROXY, respectively. Supported only for HTTP APIs."
  },
  {
    "name": "fail_on_warnings",
    "type": "boolean",
    "description": "Specifies whether to rollback the API creation when a warning is encountered. By default, API creation continues if a warning is encountered."
  },
  {
    "name": "api_endpoint",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the API."
  },
  {
    "name": "disable_execute_api_endpoint",
    "type": "boolean",
    "description": "Specifies whether clients can invoke your API by using the default <code>execute-api</code> endpoint. By default, clients can invoke your API with the default https://&#123;api_id&#125;.execute-api.&#123;region&#125;.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint."
  },
  {
    "name": "disable_schema_validation",
    "type": "boolean",
    "description": "Avoid validating models when creating a deployment. Supported only for WebSocket APIs."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the API. Required unless you specify an OpenAPI definition for <code>Body</code> or <code>S3BodyLocation</code>."
  },
  {
    "name": "version",
    "type": "string",
    "description": "A version identifier for the API."
  },
  {
    "name": "protocol_type",
    "type": "string",
    "description": "The API protocol. Valid values are <code>WEBSOCKET</code> or <code>HTTP</code>. Required unless you specify an OpenAPI definition for <code>Body</code> or <code>S3BodyLocation</code>."
  },
  {
    "name": "api_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "object",
    "description": "The collection of tags. Each tag element is associated with a given resource."
  },
  {
    "name": "api_key_selection_expression",
    "type": "string",
    "description": "An API key selection expression. Supported only for WebSocket APIs. See <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions\">API Key Selection Expressions</a>."
  },
  {
    "name": "ip_address_type",
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
    "name": "api_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-api.html"><code>AWS::ApiGatewayV2::Api</code></a>.

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
    <td><code>apis</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>apis</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>apis</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>apis_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>apis</code></td>
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

Gets all properties from an individual <code>api</code>.
```sql
SELECT
  region,
  route_selection_expression,
  body,
  body_s3_location,
  base_path,
  credentials_arn,
  cors_configuration,
  route_key,
  target,
  fail_on_warnings,
  api_endpoint,
  description,
  disable_execute_api_endpoint,
  disable_schema_validation,
  name,
  version,
  protocol_type,
  api_id,
  tags,
  api_key_selection_expression,
  ip_address_type
FROM awscc.apigatewayv2.apis
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ api_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>apis</code> in a region.
```sql
SELECT
  region,
  api_id
FROM awscc.apigatewayv2.apis_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>api</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.apigatewayv2.apis (
  RouteSelectionExpression,
  Body,
  BodyS3Location,
  BasePath,
  CredentialsArn,
  CorsConfiguration,
  RouteKey,
  Target,
  FailOnWarnings,
  Description,
  DisableExecuteApiEndpoint,
  DisableSchemaValidation,
  Name,
  Version,
  ProtocolType,
  Tags,
  ApiKeySelectionExpression,
  IpAddressType,
  region
)
SELECT
  '{{ route_selection_expression }}',
  '{{ body }}',
  '{{ body_s3_location }}',
  '{{ base_path }}',
  '{{ credentials_arn }}',
  '{{ cors_configuration }}',
  '{{ route_key }}',
  '{{ target }}',
  '{{ fail_on_warnings }}',
  '{{ description }}',
  '{{ disable_execute_api_endpoint }}',
  '{{ disable_schema_validation }}',
  '{{ name }}',
  '{{ version }}',
  '{{ protocol_type }}',
  '{{ tags }}',
  '{{ api_key_selection_expression }}',
  '{{ ip_address_type }}',
  '{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.apigatewayv2.apis (
  RouteSelectionExpression,
  Body,
  BodyS3Location,
  BasePath,
  CredentialsArn,
  CorsConfiguration,
  RouteKey,
  Target,
  FailOnWarnings,
  Description,
  DisableExecuteApiEndpoint,
  DisableSchemaValidation,
  Name,
  Version,
  ProtocolType,
  Tags,
  ApiKeySelectionExpression,
  IpAddressType,
  region
)
SELECT
  '{{ route_selection_expression }}',
  '{{ body }}',
  '{{ body_s3_location }}',
  '{{ base_path }}',
  '{{ credentials_arn }}',
  '{{ cors_configuration }}',
  '{{ route_key }}',
  '{{ target }}',
  '{{ fail_on_warnings }}',
  '{{ description }}',
  '{{ disable_execute_api_endpoint }}',
  '{{ disable_schema_validation }}',
  '{{ name }}',
  '{{ version }}',
  '{{ protocol_type }}',
  '{{ tags }}',
  '{{ api_key_selection_expression }}',
  '{{ ip_address_type }}',
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
  - name: api
    props:
      - name: route_selection_expression
        value: '{{ route_selection_expression }}'
      - name: body
        value: {}
      - name: body_s3_location
        value:
          etag: '{{ etag }}'
          bucket: '{{ bucket }}'
          version: '{{ version }}'
          key: '{{ key }}'
      - name: base_path
        value: '{{ base_path }}'
      - name: credentials_arn
        value: '{{ credentials_arn }}'
      - name: cors_configuration
        value:
          allow_origins:
            - '{{ allow_origins[0] }}'
          allow_credentials: '{{ allow_credentials }}'
          expose_headers:
            - '{{ expose_headers[0] }}'
          allow_headers:
            - '{{ allow_headers[0] }}'
          max_age: '{{ max_age }}'
          allow_methods:
            - '{{ allow_methods[0] }}'
      - name: route_key
        value: '{{ route_key }}'
      - name: target
        value: '{{ target }}'
      - name: fail_on_warnings
        value: '{{ fail_on_warnings }}'
      - name: description
        value: '{{ description }}'
      - name: disable_execute_api_endpoint
        value: '{{ disable_execute_api_endpoint }}'
      - name: disable_schema_validation
        value: '{{ disable_schema_validation }}'
      - name: name
        value: '{{ name }}'
      - name: version
        value: '{{ version }}'
      - name: protocol_type
        value: '{{ protocol_type }}'
      - name: tags
        value: {}
      - name: api_key_selection_expression
        value: '{{ api_key_selection_expression }}'
      - name: ip_address_type
        value: '{{ ip_address_type }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>api</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.apigatewayv2.apis
SET PatchDocument = string('{{ {
    "RouteSelectionExpression": route_selection_expression,
    "Body": body,
    "BodyS3Location": body_s3_location,
    "BasePath": base_path,
    "CredentialsArn": credentials_arn,
    "CorsConfiguration": cors_configuration,
    "RouteKey": route_key,
    "Target": target,
    "FailOnWarnings": fail_on_warnings,
    "Description": description,
    "DisableExecuteApiEndpoint": disable_execute_api_endpoint,
    "DisableSchemaValidation": disable_schema_validation,
    "Name": name,
    "Version": version,
    "Tags": tags,
    "ApiKeySelectionExpression": api_key_selection_expression,
    "IpAddressType": ip_address_type
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ api_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apigatewayv2.apis
WHERE
  Identifier = '{{ api_id }}' AND
  region = '{{ region }}';
```

## Permissions

To operate on the <code>apis</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
apigateway:POST,
apigateway:PUT,
s3:getObject
```

</TabItem>
<TabItem value="update">

```json
apigateway:PATCH,
apigateway:GET,
apigateway:PUT,
apigateway:POST,
s3:getObject
```

</TabItem>
<TabItem value="read">

```json
apigateway:GET,
s3:getObject
```

</TabItem>
<TabItem value="delete">

```json
apigateway:GET,
apigateway:DELETE,
s3:getObject
```

</TabItem>
<TabItem value="list">

```json
apigateway:GET,
s3:getObject
```

</TabItem>
</Tabs>