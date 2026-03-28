---
title: rest_apis
hide_title: false
hide_table_of_contents: false
keywords:
  - rest_apis
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

import CodeBlock from '@theme/CodeBlock';
import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>rest_api</code> resource or lists <code>rest_apis</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>rest_apis</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td><details><summary>The <code>AWS::ApiGateway::RestApi</code> resource creates a REST API. For more information, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/API_CreateRestApi.html">restapi:create</a> in the <i>Amazon API Gateway REST API Reference</i>.</summary>On January 1, 2016, the Swagger Specification was donated to the <a href="https://docs.aws.amazon.com/https://www.openapis.org/">OpenAPI initiative</a>, becoming the foundation of the OpenAPI Specification.</details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigateway.rest_apis" /></td></tr>
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
    "name": "policy",
    "type": "object",
    "description": "A policy document that contains the permissions for the <code>RestApi</code> resource. To set the ARN for the policy, use the <code>!Join</code> intrinsic function with <code>\"\"</code> as delimiter and values of <code>\"execute-api:/\"</code> and <code>\"*\"</code>."
  },
  {
    "name": "body_s3_location",
    "type": "object",
    "description": "The Amazon Simple Storage Service (Amazon S3) location that points to an OpenAPI file, which defines a set of RESTful APIs in JSON or YAML format.",
    "children": [
      {
        "name": "bucket",
        "type": "string",
        "description": "The name of the S3 bucket where the OpenAPI file is stored."
      },
      {
        "name": "e_tag",
        "type": "string",
        "description": "The Amazon S3 ETag (a file checksum) of the OpenAPI file. If you don't specify a value, API Gateway skips ETag validation of your OpenAPI file."
      },
      {
        "name": "version",
        "type": "string",
        "description": "For versioning-enabled buckets, a specific version of the OpenAPI file."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The file name of the OpenAPI file (Amazon S3 object name)."
      }
    ]
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "minimum_compression_size",
    "type": "integer",
    "description": ""
  },
  {
    "name": "parameters",
    "type": "object",
    "description": ""
  },
  {
    "name": "clone_from",
    "type": "string",
    "description": ""
  },
  {
    "name": "mode",
    "type": "string",
    "description": "<details><summary>This property applies only when you use OpenAPI to define your REST API. The <code>Mode</code> determines how API Gateway handles resource updates.</summary>Valid values are <code>overwrite</code> or <code>merge</code>.<br />For <code>overwrite</code>, the new API definition replaces the existing one. The existing API identifier remains unchanged.<br />For <code>merge</code>, the new API definition is merged with the existing API.<br />If you don't specify this property, a default value is chosen. For REST APIs created before March 29, 2021, the default is <code>overwrite</code>. For REST APIs created after March 29, 2021, the new API definition takes precedence, but any container types such as endpoint configurations and binary media types are merged with the existing API.<br />Use the default mode to define top-level <code>RestApi</code> properties in addition to using OpenAPI. Generally, it's preferred to use API Gateway's OpenAPI extensions to model these properties.</details>"
  },
  {
    "name": "rest_api_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "disable_execute_api_endpoint",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "fail_on_warnings",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "binary_media_types",
    "type": "array",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the RestApi. A name is required if the REST API is not based on an OpenAPI specification."
  },
  {
    "name": "root_resource_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "api_key_source_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "endpoint_configuration",
    "type": "object",
    "description": "A list of the endpoint types of the API. Use this property when creating an API. When importing an existing API, specify the endpoint configuration types using the <code>Parameters</code> property.",
    "children": [
      {
        "name": "ip_address_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "types",
        "type": "array",
        "description": ""
      },
      {
        "name": "vpc_endpoint_ids",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "body",
    "type": "object",
    "description": "An OpenAPI specification that defines a set of RESTful APIs in JSON format. For YAML templates, you can also provide the specification in YAML format."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": ""
      },
      {
        "name": "key",
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
    "name": "rest_api_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html"><code>AWS::ApiGateway::RestApi</code></a>.

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
    <td><code>rest_apis</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>rest_apis</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>rest_apis</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>rest_apis_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>rest_apis</code></td>
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

Gets all properties from an individual <code>rest_api</code>.
```sql
SELECT
  region,
  policy,
  body_s3_location,
  description,
  minimum_compression_size,
  parameters,
  clone_from,
  mode,
  rest_api_id,
  disable_execute_api_endpoint,
  fail_on_warnings,
  binary_media_types,
  name,
  root_resource_id,
  api_key_source_type,
  endpoint_configuration,
  body,
  tags
FROM awscc.apigateway.rest_apis
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ rest_api_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>rest_apis</code> in a region.
```sql
SELECT
  region,
  rest_api_id
FROM awscc.apigateway.rest_apis_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>rest_api</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.apigateway.rest_apis (
  Policy,
  BodyS3Location,
  Description,
  MinimumCompressionSize,
  Parameters,
  CloneFrom,
  Mode,
  DisableExecuteApiEndpoint,
  FailOnWarnings,
  BinaryMediaTypes,
  Name,
  ApiKeySourceType,
  EndpointConfiguration,
  Body,
  Tags,
  region
)
SELECT
  '{{ policy }}',
  '{{ body_s3_location }}',
  '{{ description }}',
  '{{ minimum_compression_size }}',
  '{{ parameters }}',
  '{{ clone_from }}',
  '{{ mode }}',
  '{{ disable_execute_api_endpoint }}',
  '{{ fail_on_warnings }}',
  '{{ binary_media_types }}',
  '{{ name }}',
  '{{ api_key_source_type }}',
  '{{ endpoint_configuration }}',
  '{{ body }}',
  '{{ tags }}',
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
INSERT INTO awscc.apigateway.rest_apis (
  Policy,
  BodyS3Location,
  Description,
  MinimumCompressionSize,
  Parameters,
  CloneFrom,
  Mode,
  DisableExecuteApiEndpoint,
  FailOnWarnings,
  BinaryMediaTypes,
  Name,
  ApiKeySourceType,
  EndpointConfiguration,
  Body,
  Tags,
  region
)
SELECT
  '{{ policy }}',
  '{{ body_s3_location }}',
  '{{ description }}',
  '{{ minimum_compression_size }}',
  '{{ parameters }}',
  '{{ clone_from }}',
  '{{ mode }}',
  '{{ disable_execute_api_endpoint }}',
  '{{ fail_on_warnings }}',
  '{{ binary_media_types }}',
  '{{ name }}',
  '{{ api_key_source_type }}',
  '{{ endpoint_configuration }}',
  '{{ body }}',
  '{{ tags }}',
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
  - name: rest_api
    props:
      - name: policy
        value: {}
      - name: body_s3_location
        value:
          bucket: '{{ bucket }}'
          e_tag: '{{ e_tag }}'
          version: '{{ version }}'
          key: '{{ key }}'
      - name: description
        value: '{{ description }}'
      - name: minimum_compression_size
        value: '{{ minimum_compression_size }}'
      - name: parameters
        value: {}
      - name: clone_from
        value: '{{ clone_from }}'
      - name: mode
        value: '{{ mode }}'
      - name: disable_execute_api_endpoint
        value: '{{ disable_execute_api_endpoint }}'
      - name: fail_on_warnings
        value: '{{ fail_on_warnings }}'
      - name: binary_media_types
        value:
          - '{{ binary_media_types[0] }}'
      - name: name
        value: '{{ name }}'
      - name: api_key_source_type
        value: '{{ api_key_source_type }}'
      - name: endpoint_configuration
        value:
          ip_address_type: '{{ ip_address_type }}'
          types:
            - '{{ types[0] }}'
          vpc_endpoint_ids:
            - '{{ vpc_endpoint_ids[0] }}'
      - name: body
        value: {}
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>rest_api</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.apigateway.rest_apis
SET PatchDocument = string('{{ {
    "Policy": policy,
    "BodyS3Location": body_s3_location,
    "Description": description,
    "MinimumCompressionSize": minimum_compression_size,
    "Parameters": parameters,
    "CloneFrom": clone_from,
    "Mode": mode,
    "DisableExecuteApiEndpoint": disable_execute_api_endpoint,
    "FailOnWarnings": fail_on_warnings,
    "BinaryMediaTypes": binary_media_types,
    "Name": name,
    "ApiKeySourceType": api_key_source_type,
    "EndpointConfiguration": endpoint_configuration,
    "Body": body,
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ rest_api_id }}'
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
DELETE FROM awscc.apigateway.rest_apis
WHERE
  Identifier = '{{ rest_api_id }}' AND
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

To operate on the <code>rest_apis</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
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
apigateway:GET,
apigateway:POST,
apigateway:PUT,
apigateway:PATCH,
apigateway:UpdateRestApiPolicy,
s3:GetObject,
iam:PassRole
```

</TabItem>
<TabItem value="update">

```json
apigateway:GET,
apigateway:DELETE,
apigateway:PATCH,
apigateway:PUT,
apigateway:UpdateRestApiPolicy,
s3:GetObject,
iam:PassRole
```

</TabItem>
<TabItem value="list">

```json
apigateway:GET
```

</TabItem>
<TabItem value="delete">

```json
apigateway:DELETE
```

</TabItem>
</Tabs>