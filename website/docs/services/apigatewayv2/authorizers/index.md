---
title: authorizers
hide_title: false
hide_table_of_contents: false
keywords:
  - authorizers
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

Creates, updates, deletes or gets an <code>authorizer</code> resource or lists <code>authorizers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>authorizers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The <code>AWS::ApiGatewayV2::Authorizer</code> resource creates an authorizer for a WebSocket API or an HTTP API. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-control-access.html">Controlling and managing access to a WebSocket API in API Gateway</a> and <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-access-control.html">Controlling and managing access to an HTTP API in API Gateway</a> in the <i>API Gateway Developer Guide</i>.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigatewayv2.authorizers" /></td></tr>
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
    "name": "identity_validation_expression",
    "type": "string",
    "description": "This parameter is not used."
  },
  {
    "name": "authorizer_uri",
    "type": "string",
    "description": "The authorizer's Uniform Resource Identifier (URI). For <code>REQUEST</code> authorizers, this must be a well-formed Lambda function URI, for example, <code>arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:&#123;account_id&#125;:function:&#123;lambda_function_name&#125;/invocations</code>. In general, the URI has this form: <code>arn:aws:apigateway:&#123;region&#125;:lambda:path/&#123;service_api&#125;</code>, where <i>&#123;region&#125;</i> is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial <code>/</code>. For Lambda functions, this is usually of the form <code>/2015-03-31/functions/[FunctionARN]/invocations</code>."
  },
  {
    "name": "authorizer_credentials_arn",
    "type": "string",
    "description": "Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null. Supported only for <code>REQUEST</code> authorizers."
  },
  {
    "name": "authorizer_type",
    "type": "string",
    "description": "The authorizer type. Specify <code>REQUEST</code> for a Lambda function using incoming request parameters. Specify <code>JWT</code> to use JSON Web Tokens (supported only for HTTP APIs)."
  },
  {
    "name": "identity_source",
    "type": "array",
    "description": "<details><summary>The identity source for which authorization is requested.</summary>For a <code>REQUEST</code> authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with <code>$</code>, for example, <code>$request.header.Auth</code>, <code>$request.querystring.Name</code>. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html\">Working with Lambda authorizers for HTTP APIs</a>.<br />For <code>JWT</code>, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example <code>$request.header.Authorization</code>.</details>"
  },
  {
    "name": "jwt_configuration",
    "type": "object",
    "description": "The <code>JWTConfiguration</code> property specifies the configuration of a JWT authorizer. Required for the <code>JWT</code> authorizer type. Supported only for HTTP APIs.",
    "children": [
      {
        "name": "issuer",
        "type": "string",
        "description": "The base domain of the identity provider that issues JSON Web Tokens. For example, an Amazon Cognito user pool has the following format: <code>https://cognito-idp.&#123;region&#125;.amazonaws.com/&#123;userPoolId&#125;</code>. Required for the <code>JWT</code> authorizer type. Supported only for HTTP APIs."
      },
      {
        "name": "audience",
        "type": "array",
        "description": "A list of the intended recipients of the JWT. A valid JWT must provide an <code>aud</code> that matches at least one entry in this list. See <a href=\"https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc7519#section-4.1.3\">RFC 7519</a>. Required for the <code>JWT</code> authorizer type. Supported only for HTTP APIs."
      }
    ]
  },
  {
    "name": "authorizer_result_ttl_in_seconds",
    "type": "integer",
    "description": "The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers."
  },
  {
    "name": "authorizer_payload_format_version",
    "type": "string",
    "description": "Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are <code>1.0</code> and <code>2.0</code>. To learn more, see <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html\">Working with Lambda authorizers for HTTP APIs</a>."
  },
  {
    "name": "enable_simple_responses",
    "type": "boolean",
    "description": "Specifies whether a Lambda authorizer returns a response in a simple format. By default, a Lambda authorizer must return an IAM policy. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html\">Working with Lambda authorizers for HTTP APIs</a>."
  },
  {
    "name": "api_id",
    "type": "string",
    "description": "The API identifier."
  },
  {
    "name": "authorizer_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the authorizer."
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
    "description": "The API identifier."
  },
  {
    "name": "authorizer_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-authorizer.html"><code>AWS::ApiGatewayV2::Authorizer</code></a>.

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
    <td><code>authorizers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AuthorizerType, ApiId, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>authorizers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>authorizers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>authorizers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>authorizers</code></td>
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

Gets all properties from an individual <code>authorizer</code>.
```sql
SELECT
  region,
  identity_validation_expression,
  authorizer_uri,
  authorizer_credentials_arn,
  authorizer_type,
  identity_source,
  jwt_configuration,
  authorizer_result_ttl_in_seconds,
  authorizer_payload_format_version,
  enable_simple_responses,
  api_id,
  authorizer_id,
  name
FROM awscc.apigatewayv2.authorizers
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ authorizer_id }}|{{ api_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>authorizers</code> in a region.
```sql
SELECT
  region,
  authorizer_id,
  api_id
FROM awscc.apigatewayv2.authorizers_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>authorizer</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.apigatewayv2.authorizers (
  AuthorizerType,
  ApiId,
  Name,
  region
)
SELECT
  '{{ authorizer_type }}',
  '{{ api_id }}',
  '{{ name }}',
  '{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.apigatewayv2.authorizers (
  IdentityValidationExpression,
  AuthorizerUri,
  AuthorizerCredentialsArn,
  AuthorizerType,
  IdentitySource,
  JwtConfiguration,
  AuthorizerResultTtlInSeconds,
  AuthorizerPayloadFormatVersion,
  EnableSimpleResponses,
  ApiId,
  Name,
  region
)
SELECT
  '{{ identity_validation_expression }}',
  '{{ authorizer_uri }}',
  '{{ authorizer_credentials_arn }}',
  '{{ authorizer_type }}',
  '{{ identity_source }}',
  '{{ jwt_configuration }}',
  '{{ authorizer_result_ttl_in_seconds }}',
  '{{ authorizer_payload_format_version }}',
  '{{ enable_simple_responses }}',
  '{{ api_id }}',
  '{{ name }}',
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
  - name: authorizer
    props:
      - name: identity_validation_expression
        value: '{{ identity_validation_expression }}'
      - name: authorizer_uri
        value: '{{ authorizer_uri }}'
      - name: authorizer_credentials_arn
        value: '{{ authorizer_credentials_arn }}'
      - name: authorizer_type
        value: '{{ authorizer_type }}'
      - name: identity_source
        value:
          - '{{ identity_source[0] }}'
      - name: jwt_configuration
        value:
          issuer: '{{ issuer }}'
          audience:
            - '{{ audience[0] }}'
      - name: authorizer_result_ttl_in_seconds
        value: '{{ authorizer_result_ttl_in_seconds }}'
      - name: authorizer_payload_format_version
        value: '{{ authorizer_payload_format_version }}'
      - name: enable_simple_responses
        value: '{{ enable_simple_responses }}'
      - name: api_id
        value: '{{ api_id }}'
      - name: name
        value: '{{ name }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>authorizer</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.apigatewayv2.authorizers
SET PatchDocument = string('{{ {
    "IdentityValidationExpression": identity_validation_expression,
    "AuthorizerUri": authorizer_uri,
    "AuthorizerCredentialsArn": authorizer_credentials_arn,
    "AuthorizerType": authorizer_type,
    "IdentitySource": identity_source,
    "JwtConfiguration": jwt_configuration,
    "AuthorizerResultTtlInSeconds": authorizer_result_ttl_in_seconds,
    "AuthorizerPayloadFormatVersion": authorizer_payload_format_version,
    "EnableSimpleResponses": enable_simple_responses,
    "Name": name
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ authorizer_id }}|{{ api_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apigatewayv2.authorizers
WHERE
  Identifier = '{{ authorizer_id }}|{{ api_id }}' AND
  region = '{{ region }}';
```

## Permissions

To operate on the <code>authorizers</code> resource, the following permissions are required:

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
iam:PassRole
```

</TabItem>
<TabItem value="update">

```json
apigateway:PATCH,
apigateway:GET,
apigateway:PUT,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
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