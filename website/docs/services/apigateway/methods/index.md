---
title: methods
hide_title: false
hide_table_of_contents: false
keywords:
  - methods
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

Creates, updates, deletes or gets a <code>method</code> resource or lists <code>methods</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>methods</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApiGateway::Method&#96;&#96; resource creates API Gateway methods that define the parameters and body that clients must send in their requests.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigateway.methods" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "integration",
    "type": "object",
    "description": "&#96;&#96;Integration&#96;&#96; is a property of the &#91;AWS::ApiGateway::Method&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html) resource that specifies information about the target backend that a method calls.",
    "children": [
      {
        "name": "cache_namespace",
        "type": "string",
        "description": ""
      },
      {
        "name": "connection_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "integration_responses",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "response_templates",
            "type": "object",
            "description": ""
          },
          {
            "name": "selection_pattern",
            "type": "string",
            "description": ""
          },
          {
            "name": "content_handling",
            "type": "string",
            "description": ""
          },
          {
            "name": "response_parameters",
            "type": "object",
            "description": ""
          },
          {
            "name": "status_code",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "integration_http_method",
        "type": "string",
        "description": ""
      },
      {
        "name": "uri",
        "type": "string",
        "description": ""
      },
      {
        "name": "passthrough_behavior",
        "type": "string",
        "description": ""
      },
      {
        "name": "request_parameters",
        "type": "object",
        "description": ""
      },
      {
        "name": "connection_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "type",
        "type": "string",
        "description": ""
      },
      {
        "name": "cache_key_parameters",
        "type": "array",
        "description": ""
      },
      {
        "name": "content_handling",
        "type": "string",
        "description": ""
      },
      {
        "name": "request_templates",
        "type": "object",
        "description": ""
      },
      {
        "name": "timeout_in_millis",
        "type": "integer",
        "description": ""
      },
      {
        "name": "credentials",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "operation_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "request_models",
    "type": "object",
    "description": ""
  },
  {
    "name": "rest_api_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "authorization_scopes",
    "type": "array",
    "description": ""
  },
  {
    "name": "request_validator_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "request_parameters",
    "type": "object",
    "description": ""
  },
  {
    "name": "method_responses",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "response_parameters",
        "type": "object",
        "description": ""
      },
      {
        "name": "status_code",
        "type": "string",
        "description": ""
      },
      {
        "name": "response_models",
        "type": "object",
        "description": ""
      }
    ]
  },
  {
    "name": "authorizer_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "resource_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "api_key_required",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "authorization_type",
    "type": "string",
    "description": "The method's authorization type. This parameter is required. For valid values, see &#91;Method&#93;(https://docs.aws.amazon.com/apigateway/latest/api/API&#95;Method.html) in the &#42;API Gateway API Reference&#42;.<br />If you specify the &#96;&#96;AuthorizerId&#96;&#96; property, specify &#96;&#96;CUSTOM&#96;&#96; or &#96;&#96;COGNITO&#95;USER&#95;POOLS&#96;&#96; for this property."
  },
  {
    "name": "http_method",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html"><code>AWS::ApiGateway::Method</code></a>.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="create_resource" /></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="RestApiId, ResourceId, HttpMethod, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>method</code>.
```sql
SELECT
region,
integration,
operation_name,
request_models,
rest_api_id,
authorization_scopes,
request_validator_id,
request_parameters,
method_responses,
authorizer_id,
resource_id,
api_key_required,
authorization_type,
http_method
FROM awscc.apigateway.methods
WHERE region = 'us-east-1' AND Identifier = '{{ rest_api_id }}|{{ resource_id }}|{{ http_method }}';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>method</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.apigateway.methods (
 RestApiId,
 ResourceId,
 HttpMethod,
 region
)
SELECT
'{{ rest_api_id }}',
 '{{ resource_id }}',
 '{{ http_method }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.apigateway.methods (
 Integration,
 OperationName,
 RequestModels,
 RestApiId,
 AuthorizationScopes,
 RequestValidatorId,
 RequestParameters,
 MethodResponses,
 AuthorizerId,
 ResourceId,
 ApiKeyRequired,
 AuthorizationType,
 HttpMethod,
 region
)
SELECT
 '{{ integration }}',
 '{{ operation_name }}',
 '{{ request_models }}',
 '{{ rest_api_id }}',
 '{{ authorization_scopes }}',
 '{{ request_validator_id }}',
 '{{ request_parameters }}',
 '{{ method_responses }}',
 '{{ authorizer_id }}',
 '{{ resource_id }}',
 '{{ api_key_required }}',
 '{{ authorization_type }}',
 '{{ http_method }}',
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
  - name: method
    props:
      - name: integration
        value:
          cache_namespace: '{{ cache_namespace }}'
          connection_type: '{{ connection_type }}'
          integration_responses:
            - response_templates: {}
              selection_pattern: '{{ selection_pattern }}'
              content_handling: '{{ content_handling }}'
              response_parameters: {}
              status_code: '{{ status_code }}'
          integration_http_method: '{{ integration_http_method }}'
          uri: '{{ uri }}'
          passthrough_behavior: '{{ passthrough_behavior }}'
          request_parameters: {}
          connection_id: '{{ connection_id }}'
          type: '{{ type }}'
          cache_key_parameters:
            - '{{ cache_key_parameters[0] }}'
          content_handling: '{{ content_handling }}'
          request_templates: {}
          timeout_in_millis: '{{ timeout_in_millis }}'
          credentials: '{{ credentials }}'
      - name: operation_name
        value: '{{ operation_name }}'
      - name: request_models
        value: {}
      - name: rest_api_id
        value: '{{ rest_api_id }}'
      - name: authorization_scopes
        value:
          - '{{ authorization_scopes[0] }}'
      - name: request_validator_id
        value: '{{ request_validator_id }}'
      - name: request_parameters
        value: {}
      - name: method_responses
        value:
          - response_parameters: {}
            status_code: '{{ status_code }}'
            response_models: {}
      - name: authorizer_id
        value: '{{ authorizer_id }}'
      - name: resource_id
        value: '{{ resource_id }}'
      - name: api_key_required
        value: '{{ api_key_required }}'
      - name: authorization_type
        value: '{{ authorization_type }}'
      - name: http_method
        value: '{{ http_method }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>method</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.apigateway.methods
SET PatchDocument = string('{{ {
    "Integration": integration,
    "OperationName": operation_name,
    "RequestModels": request_models,
    "AuthorizationScopes": authorization_scopes,
    "RequestValidatorId": request_validator_id,
    "RequestParameters": request_parameters,
    "MethodResponses": method_responses,
    "AuthorizerId": authorizer_id,
    "ApiKeyRequired": api_key_required,
    "AuthorizationType": authorization_type
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ rest_api_id }}|{{ resource_id }}|{{ http_method }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apigateway.methods
WHERE Identifier = '{{ rest_api_id }}|{{ resource_id }}|{{ http_method }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>methods</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="read">

```json
apigateway:GET
```

</TabItem>
<TabItem value="create">

```json
apigateway:PUT,
apigateway:GET,
iam:PassRole
```

</TabItem>
<TabItem value="update">

```json
apigateway:GET,
apigateway:DELETE,
apigateway:PUT,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
apigateway:DELETE
```

</TabItem>
</Tabs>