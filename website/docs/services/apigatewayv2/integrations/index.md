---
title: integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - integrations
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

Creates, updates, deletes or gets an <code>integration</code> resource or lists <code>integrations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>integrations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An example resource schema demonstrating some basic constructs and validation rules.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigatewayv2.integrations" /></td></tr>
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
    "name": "api_id",
    "type": "string",
    "description": "The API identifier."
  },
  {
    "name": "connection_id",
    "type": "string",
    "description": "The ID of the VPC link for a private integration. Supported only for HTTP APIs."
  },
  {
    "name": "connection_type",
    "type": "string",
    "description": "The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC&#95;LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET."
  },
  {
    "name": "content_handling_strategy",
    "type": "string",
    "description": "Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT&#95;TO&#95;BINARY and CONVERT&#95;TO&#95;TEXT."
  },
  {
    "name": "credentials_arn",
    "type": "string",
    "description": "Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::&#42;:user/&#42;. To use resource-based permissions on supported AWS services, don't specify this parameter."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the integration."
  },
  {
    "name": "integration_method",
    "type": "string",
    "description": "Specifies the integration's HTTP method type."
  },
  {
    "name": "integration_subtype",
    "type": "string",
    "description": "Supported only for HTTP API AWS&#95;PROXY integrations. Specifies the AWS service action to invoke."
  },
  {
    "name": "integration_id",
    "type": "string",
    "description": "The integration ID."
  },
  {
    "name": "integration_type",
    "type": "string",
    "description": "The integration type of an integration."
  },
  {
    "name": "integration_uri",
    "type": "string",
    "description": "For a Lambda integration, specify the URI of a Lambda function. For an HTTP integration, specify a fully-qualified URL. For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service."
  },
  {
    "name": "passthrough_behavior",
    "type": "string",
    "description": "Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN&#95;NO&#95;MATCH, WHEN&#95;NO&#95;TEMPLATES, and NEVER. Supported only for WebSocket APIs."
  },
  {
    "name": "payload_format_version",
    "type": "string",
    "description": "Specifies the format of the payload sent to an integration. Required for HTTP APIs. For HTTP APIs, supported values for Lambda proxy integrations are 1.0 and 2.0 For all other integrations, 1.0 is the only supported value."
  },
  {
    "name": "request_parameters",
    "type": "object",
    "description": "A key-value map specifying parameters."
  },
  {
    "name": "request_templates",
    "type": "object",
    "description": "A map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client."
  },
  {
    "name": "response_parameters",
    "type": "object",
    "description": "Parameters that transform the HTTP response from a backend integration before returning the response to clients. Supported only for HTTP APIs."
  },
  {
    "name": "template_selection_expression",
    "type": "string",
    "description": "The template selection expression for the integration. Supported only for WebSocket APIs."
  },
  {
    "name": "timeout_in_millis",
    "type": "integer",
    "description": "Custom timeout between 50 and 29000 milliseconds for WebSocket APIs and between 50 and 30000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs."
  },
  {
    "name": "tls_config",
    "type": "object",
    "description": "The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.",
    "children": [
      {
        "name": "server_name_to_verify",
        "type": "string",
        "description": ""
      }
    ]
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
    "name": "integration_id",
    "type": "string",
    "description": "The integration ID."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integration.html"><code>AWS::ApiGatewayV2::Integration</code></a>.

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
    <td><code>integrations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ApiId, IntegrationType, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>integrations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>integrations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>integrations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>integrations</code></td>
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

Gets all properties from an individual <code>integration</code>.
```sql
SELECT
region,
api_id,
connection_id,
connection_type,
content_handling_strategy,
credentials_arn,
description,
integration_method,
integration_subtype,
integration_id,
integration_type,
integration_uri,
passthrough_behavior,
payload_format_version,
request_parameters,
request_templates,
response_parameters,
template_selection_expression,
timeout_in_millis,
tls_config
FROM awscc.apigatewayv2.integrations
WHERE region = 'us-east-1' AND data__Identifier = '<ApiId>|<IntegrationId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>integrations</code> in a region.
```sql
SELECT
region,
api_id,
integration_id
FROM awscc.apigatewayv2.integrations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>integration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.apigatewayv2.integrations (
 ApiId,
 IntegrationType,
 region
)
SELECT 
'{{ ApiId }}',
 '{{ IntegrationType }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.apigatewayv2.integrations (
 ApiId,
 ConnectionId,
 ConnectionType,
 ContentHandlingStrategy,
 CredentialsArn,
 Description,
 IntegrationMethod,
 IntegrationSubtype,
 IntegrationType,
 IntegrationUri,
 PassthroughBehavior,
 PayloadFormatVersion,
 RequestParameters,
 RequestTemplates,
 ResponseParameters,
 TemplateSelectionExpression,
 TimeoutInMillis,
 TlsConfig,
 region
)
SELECT 
 '{{ ApiId }}',
 '{{ ConnectionId }}',
 '{{ ConnectionType }}',
 '{{ ContentHandlingStrategy }}',
 '{{ CredentialsArn }}',
 '{{ Description }}',
 '{{ IntegrationMethod }}',
 '{{ IntegrationSubtype }}',
 '{{ IntegrationType }}',
 '{{ IntegrationUri }}',
 '{{ PassthroughBehavior }}',
 '{{ PayloadFormatVersion }}',
 '{{ RequestParameters }}',
 '{{ RequestTemplates }}',
 '{{ ResponseParameters }}',
 '{{ TemplateSelectionExpression }}',
 '{{ TimeoutInMillis }}',
 '{{ TlsConfig }}',
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
  - name: integration
    props:
      - name: ApiId
        value: '{{ ApiId }}'
      - name: ConnectionId
        value: '{{ ConnectionId }}'
      - name: ConnectionType
        value: '{{ ConnectionType }}'
      - name: ContentHandlingStrategy
        value: '{{ ContentHandlingStrategy }}'
      - name: CredentialsArn
        value: '{{ CredentialsArn }}'
      - name: Description
        value: '{{ Description }}'
      - name: IntegrationMethod
        value: '{{ IntegrationMethod }}'
      - name: IntegrationSubtype
        value: '{{ IntegrationSubtype }}'
      - name: IntegrationType
        value: '{{ IntegrationType }}'
      - name: IntegrationUri
        value: '{{ IntegrationUri }}'
      - name: PassthroughBehavior
        value: '{{ PassthroughBehavior }}'
      - name: PayloadFormatVersion
        value: '{{ PayloadFormatVersion }}'
      - name: RequestParameters
        value: {}
      - name: RequestTemplates
        value: {}
      - name: ResponseParameters
        value: {}
      - name: TemplateSelectionExpression
        value: '{{ TemplateSelectionExpression }}'
      - name: TimeoutInMillis
        value: '{{ TimeoutInMillis }}'
      - name: TlsConfig
        value:
          ServerNameToVerify: '{{ ServerNameToVerify }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.apigatewayv2.integrations
SET data__PatchDocument = string('{{ {
    "ConnectionId": connection_id,
    "ConnectionType": connection_type,
    "ContentHandlingStrategy": content_handling_strategy,
    "CredentialsArn": credentials_arn,
    "Description": description,
    "IntegrationMethod": integration_method,
    "IntegrationSubtype": integration_subtype,
    "IntegrationType": integration_type,
    "IntegrationUri": integration_uri,
    "PassthroughBehavior": passthrough_behavior,
    "PayloadFormatVersion": payload_format_version,
    "RequestParameters": request_parameters,
    "RequestTemplates": request_templates,
    "ResponseParameters": response_parameters,
    "TemplateSelectionExpression": template_selection_expression,
    "TimeoutInMillis": timeout_in_millis,
    "TlsConfig": tls_config
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<ApiId>|<IntegrationId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apigatewayv2.integrations
WHERE data__Identifier = '<ApiId|IntegrationId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>integrations</code> resource, the following permissions are required:

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
