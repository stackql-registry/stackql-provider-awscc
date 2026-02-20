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
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApiGatewayV2::Authorizer&#96;&#96; resource creates an authorizer for a WebSocket API or an HTTP API. To learn more, see &#91;Controlling and managing access to a WebSocket API in API Gateway&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-control-access.html) and &#91;Controlling and managing access to an HTTP API in API Gateway&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-access-control.html) in the &#42;API Gateway Developer Guide&#42;.</td></tr>
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
    "description": "The authorizer's Uniform Resource Identifier (URI). For &#96;&#96;REQUEST&#96;&#96; authorizers, this must be a well-formed Lambda function URI, for example, &#96;&#96;arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:&#123;account&#95;id&#125;:function:&#123;lambda&#95;function&#95;name&#125;/invocations&#96;&#96;. In general, the URI has this form: &#96;&#96;arn:aws:apigateway:&#123;region&#125;:lambda:path/&#123;service&#95;api&#125;&#96;&#96;, where &#42;&#123;region&#125;&#42; is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial &#96;&#96;/&#96;&#96;. For Lambda functions, this is usually of the form &#96;&#96;/2015-03-31/functions/&#91;FunctionARN&#93;/invocations&#96;&#96;."
  },
  {
    "name": "authorizer_credentials_arn",
    "type": "string",
    "description": "Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null. Supported only for &#96;&#96;REQUEST&#96;&#96; authorizers."
  },
  {
    "name": "authorizer_type",
    "type": "string",
    "description": "The authorizer type. Specify &#96;&#96;REQUEST&#96;&#96; for a Lambda function using incoming request parameters. Specify &#96;&#96;JWT&#96;&#96; to use JSON Web Tokens (supported only for HTTP APIs)."
  },
  {
    "name": "identity_source",
    "type": "array",
    "description": "The identity source for which authorization is requested.<br />For a &#96;&#96;REQUEST&#96;&#96; authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with &#96;&#96;$&#96;&#96;, for example, &#96;&#96;$request.header.Auth&#96;&#96;, &#96;&#96;$request.querystring.Name&#96;&#96;. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see &#91;Working with Lambda authorizers for HTTP APIs&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html).<br />For &#96;&#96;JWT&#96;&#96;, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example &#96;&#96;$request.header.Authorization&#96;&#96;."
  },
  {
    "name": "jwt_configuration",
    "type": "object",
    "description": "The &#96;&#96;JWTConfiguration&#96;&#96; property specifies the configuration of a JWT authorizer. Required for the &#96;&#96;JWT&#96;&#96; authorizer type. Supported only for HTTP APIs.",
    "children": [
      {
        "name": "issuer",
        "type": "string",
        "description": "The base domain of the identity provider that issues JSON Web Tokens. For example, an Amazon Cognito user pool has the following format: &#96;&#96;https://cognito-idp.&#123;region&#125;.amazonaws.com/&#123;userPoolId&#125;&#96;&#96;. Required for the &#96;&#96;JWT&#96;&#96; authorizer type. Supported only for HTTP APIs."
      },
      {
        "name": "audience",
        "type": "array",
        "description": "A list of the intended recipients of the JWT. A valid JWT must provide an &#96;&#96;aud&#96;&#96; that matches at least one entry in this list. See &#91;RFC 7519&#93;(https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc7519#section-4.1.3). Required for the &#96;&#96;JWT&#96;&#96; authorizer type. Supported only for HTTP APIs."
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
    "description": "Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are &#96;&#96;1.0&#96;&#96; and &#96;&#96;2.0&#96;&#96;. To learn more, see &#91;Working with Lambda authorizers for HTTP APIs&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html)."
  },
  {
    "name": "enable_simple_responses",
    "type": "boolean",
    "description": "Specifies whether a Lambda authorizer returns a response in a simple format. By default, a Lambda authorizer must return an IAM policy. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see &#91;Working with Lambda authorizers for HTTP APIs&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html)."
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
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>authorizers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
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
WHERE region = 'us-east-1' AND data__Identifier = '<AuthorizerId>|<ApiId>';
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
WHERE region = 'us-east-1';
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
'{{ AuthorizerType }}',
 '{{ ApiId }}',
 '{{ Name }}',
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
 '{{ IdentityValidationExpression }}',
 '{{ AuthorizerUri }}',
 '{{ AuthorizerCredentialsArn }}',
 '{{ AuthorizerType }}',
 '{{ IdentitySource }}',
 '{{ JwtConfiguration }}',
 '{{ AuthorizerResultTtlInSeconds }}',
 '{{ AuthorizerPayloadFormatVersion }}',
 '{{ EnableSimpleResponses }}',
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
  - name: authorizer
    props:
      - name: IdentityValidationExpression
        value: '{{ IdentityValidationExpression }}'
      - name: AuthorizerUri
        value: '{{ AuthorizerUri }}'
      - name: AuthorizerCredentialsArn
        value: '{{ AuthorizerCredentialsArn }}'
      - name: AuthorizerType
        value: '{{ AuthorizerType }}'
      - name: IdentitySource
        value:
          - '{{ IdentitySource[0] }}'
      - name: JwtConfiguration
        value:
          Issuer: '{{ Issuer }}'
          Audience:
            - '{{ Audience[0] }}'
      - name: AuthorizerResultTtlInSeconds
        value: '{{ AuthorizerResultTtlInSeconds }}'
      - name: AuthorizerPayloadFormatVersion
        value: '{{ AuthorizerPayloadFormatVersion }}'
      - name: EnableSimpleResponses
        value: '{{ EnableSimpleResponses }}'
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
UPDATE awscc.apigatewayv2.authorizers
SET data__PatchDocument = string('{{ {
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
WHERE region = '{{ region }}'
AND data__Identifier = '<AuthorizerId>|<ApiId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apigatewayv2.authorizers
WHERE data__Identifier = '<AuthorizerId|ApiId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>authorizers</code> resource, the following permissions are required:

### Create
```json
apigateway:POST,
iam:PassRole
```

### Update
```json
apigateway:PATCH,
apigateway:GET,
apigateway:PUT,
iam:PassRole
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
