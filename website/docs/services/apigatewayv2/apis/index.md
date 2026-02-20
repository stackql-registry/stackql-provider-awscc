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
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApiGatewayV2::Api&#96;&#96; resource creates an API. WebSocket APIs and HTTP APIs are supported. For more information about WebSocket APIs, see &#91;About WebSocket APIs in API Gateway&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-overview.html) in the &#42;API Gateway Developer Guide&#42;. For more information about HTTP APIs, see &#91;HTTP APIs&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api.html) in the &#42;API Gateway Developer Guide.&#42;</td></tr>
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
    "description": "The route selection expression for the API. For HTTP APIs, the &#96;&#96;routeSelectionExpression&#96;&#96; must be &#96;&#96;$&#123;request.method&#125; $&#123;request.path&#125;&#96;&#96;. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs."
  },
  {
    "name": "body",
    "type": "object",
    "description": "The OpenAPI definition. Supported only for HTTP APIs. To import an HTTP API, you must specify a &#96;&#96;Body&#96;&#96; or &#96;&#96;BodyS3Location&#96;&#96;. If you specify a &#96;&#96;Body&#96;&#96; or &#96;&#96;BodyS3Location&#96;&#96;, don't specify CloudFormation resources such as &#96;&#96;AWS::ApiGatewayV2::Authorizer&#96;&#96; or &#96;&#96;AWS::ApiGatewayV2::Route&#96;&#96;. API Gateway doesn't support the combination of OpenAPI and CloudFormation resources."
  },
  {
    "name": "body_s3_location",
    "type": "object",
    "description": "The S3 location of an OpenAPI definition. Supported only for HTTP APIs. To import an HTTP API, you must specify a &#96;&#96;Body&#96;&#96; or &#96;&#96;BodyS3Location&#96;&#96;. If you specify a &#96;&#96;Body&#96;&#96; or &#96;&#96;BodyS3Location&#96;&#96;, don't specify CloudFormation resources such as &#96;&#96;AWS::ApiGatewayV2::Authorizer&#96;&#96; or &#96;&#96;AWS::ApiGatewayV2::Route&#96;&#96;. API Gateway doesn't support the combination of OpenAPI and CloudFormation resources.",
    "children": [
      {
        "name": "etag",
        "type": "string",
        "description": "The Etag of the S3 object."
      },
      {
        "name": "bucket",
        "type": "string",
        "description": "The S3 bucket that contains the OpenAPI definition to import. Required if you specify a &#96;&#96;BodyS3Location&#96;&#96; for an API."
      },
      {
        "name": "version",
        "type": "string",
        "description": "The version of the S3 object."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The key of the S3 object. Required if you specify a &#96;&#96;BodyS3Location&#96;&#96; for an API."
      }
    ]
  },
  {
    "name": "base_path",
    "type": "string",
    "description": "Specifies how to interpret the base path of the API during import. Valid values are &#96;&#96;ignore&#96;&#96;, &#96;&#96;prepend&#96;&#96;, and &#96;&#96;split&#96;&#96;. The default value is &#96;&#96;ignore&#96;&#96;. To learn more, see &#91;Set the OpenAPI basePath Property&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api-basePath.html). Supported only for HTTP APIs."
  },
  {
    "name": "credentials_arn",
    "type": "string",
    "description": "This property is part of quick create. It specifies the credentials required for the integration, if any. For a Lambda integration, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify &#96;&#96;arn:aws:iam::&#42;:user/&#42;&#96;&#96;. To use resource-based permissions on supported AWS services, specify &#96;&#96;null&#96;&#96;. Currently, this property is not used for HTTP integrations. Supported only for HTTP APIs."
  },
  {
    "name": "cors_configuration",
    "type": "object",
    "description": "A CORS configuration. Supported only for HTTP APIs. See &#91;Configuring CORS&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html) for more information.",
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
    "description": "This property is part of quick create. If you don't specify a &#96;&#96;routeKey&#96;&#96;, a default route of &#96;&#96;$default&#96;&#96; is created. The &#96;&#96;$default&#96;&#96; route acts as a catch-all for any request made to your API, for a particular stage. The &#96;&#96;$default&#96;&#96; route key can't be modified. You can add routes after creating the API, and you can update the route keys of additional routes. Supported only for HTTP APIs."
  },
  {
    "name": "target",
    "type": "string",
    "description": "This property is part of quick create. Quick create produces an API with an integration, a default catch-all route, and a default stage which is configured to automatically deploy changes. For HTTP integrations, specify a fully qualified URL. For Lambda integrations, specify a function ARN. The type of the integration will be HTTP&#95;PROXY or AWS&#95;PROXY, respectively. Supported only for HTTP APIs."
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
    "description": "Specifies whether clients can invoke your API by using the default &#96;&#96;execute-api&#96;&#96; endpoint. By default, clients can invoke your API with the default https://&#123;api&#95;id&#125;.execute-api.&#123;region&#125;.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint."
  },
  {
    "name": "disable_schema_validation",
    "type": "boolean",
    "description": "Avoid validating models when creating a deployment. Supported only for WebSocket APIs."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the API. Required unless you specify an OpenAPI definition for &#96;&#96;Body&#96;&#96; or &#96;&#96;S3BodyLocation&#96;&#96;."
  },
  {
    "name": "version",
    "type": "string",
    "description": "A version identifier for the API."
  },
  {
    "name": "protocol_type",
    "type": "string",
    "description": "The API protocol. Valid values are &#96;&#96;WEBSOCKET&#96;&#96; or &#96;&#96;HTTP&#96;&#96;. Required unless you specify an OpenAPI definition for &#96;&#96;Body&#96;&#96; or &#96;&#96;S3BodyLocation&#96;&#96;."
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
    "description": "An API key selection expression. Supported only for WebSocket APIs. See &#91;API Key Selection Expressions&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions)."
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
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>apis</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
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
WHERE region = 'us-east-1' AND data__Identifier = '<ApiId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>apis</code> in a region.
```sql
SELECT
region,
api_id
FROM awscc.apigatewayv2.apis_list_only
WHERE region = 'us-east-1';
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
'{{ RouteSelectionExpression }}',
 '{{ Body }}',
 '{{ BodyS3Location }}',
 '{{ BasePath }}',
 '{{ CredentialsArn }}',
 '{{ CorsConfiguration }}',
 '{{ RouteKey }}',
 '{{ Target }}',
 '{{ FailOnWarnings }}',
 '{{ Description }}',
 '{{ DisableExecuteApiEndpoint }}',
 '{{ DisableSchemaValidation }}',
 '{{ Name }}',
 '{{ Version }}',
 '{{ ProtocolType }}',
 '{{ Tags }}',
 '{{ ApiKeySelectionExpression }}',
 '{{ IpAddressType }}',
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
 '{{ RouteSelectionExpression }}',
 '{{ Body }}',
 '{{ BodyS3Location }}',
 '{{ BasePath }}',
 '{{ CredentialsArn }}',
 '{{ CorsConfiguration }}',
 '{{ RouteKey }}',
 '{{ Target }}',
 '{{ FailOnWarnings }}',
 '{{ Description }}',
 '{{ DisableExecuteApiEndpoint }}',
 '{{ DisableSchemaValidation }}',
 '{{ Name }}',
 '{{ Version }}',
 '{{ ProtocolType }}',
 '{{ Tags }}',
 '{{ ApiKeySelectionExpression }}',
 '{{ IpAddressType }}',
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
      - name: RouteSelectionExpression
        value: '{{ RouteSelectionExpression }}'
      - name: Body
        value: {}
      - name: BodyS3Location
        value:
          Etag: '{{ Etag }}'
          Bucket: '{{ Bucket }}'
          Version: '{{ Version }}'
          Key: '{{ Key }}'
      - name: BasePath
        value: '{{ BasePath }}'
      - name: CredentialsArn
        value: '{{ CredentialsArn }}'
      - name: CorsConfiguration
        value:
          AllowOrigins:
            - '{{ AllowOrigins[0] }}'
          AllowCredentials: '{{ AllowCredentials }}'
          ExposeHeaders:
            - '{{ ExposeHeaders[0] }}'
          AllowHeaders:
            - '{{ AllowHeaders[0] }}'
          MaxAge: '{{ MaxAge }}'
          AllowMethods:
            - '{{ AllowMethods[0] }}'
      - name: RouteKey
        value: '{{ RouteKey }}'
      - name: Target
        value: '{{ Target }}'
      - name: FailOnWarnings
        value: '{{ FailOnWarnings }}'
      - name: Description
        value: '{{ Description }}'
      - name: DisableExecuteApiEndpoint
        value: '{{ DisableExecuteApiEndpoint }}'
      - name: DisableSchemaValidation
        value: '{{ DisableSchemaValidation }}'
      - name: Name
        value: '{{ Name }}'
      - name: Version
        value: '{{ Version }}'
      - name: ProtocolType
        value: '{{ ProtocolType }}'
      - name: Tags
        value: {}
      - name: ApiKeySelectionExpression
        value: '{{ ApiKeySelectionExpression }}'
      - name: IpAddressType
        value: '{{ IpAddressType }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.apigatewayv2.apis
SET data__PatchDocument = string('{{ {
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
WHERE region = '{{ region }}'
AND data__Identifier = '<ApiId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apigatewayv2.apis
WHERE data__Identifier = '<ApiId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>apis</code> resource, the following permissions are required:

### Create
```json
apigateway:POST,
apigateway:PUT,
s3:getObject
```

### Update
```json
apigateway:PATCH,
apigateway:GET,
apigateway:PUT,
apigateway:POST,
s3:getObject
```

### Read
```json
apigateway:GET,
s3:getObject
```

### Delete
```json
apigateway:GET,
apigateway:DELETE,
s3:getObject
```

### List
```json
apigateway:GET,
s3:getObject
```
