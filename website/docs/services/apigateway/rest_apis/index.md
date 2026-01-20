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
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApiGateway::RestApi&#96;&#96; resource creates a REST API. For more information, see &#91;restapi:create&#93;(https://docs.aws.amazon.com/apigateway/latest/api/API&#95;CreateRestApi.html) in the &#42;Amazon API Gateway REST API Reference&#42;.<br />On January 1, 2016, the Swagger Specification was donated to the &#91;OpenAPI initiative&#93;(https://docs.aws.amazon.com/https://www.openapis.org/), becoming the foundation of the OpenAPI Specification.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigateway.rest_apis" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "policy",
    "type": "object",
    "description": "A policy document that contains the permissions for the &#96;&#96;RestApi&#96;&#96; resource. To set the ARN for the policy, use the &#96;&#96;!Join&#96;&#96; intrinsic function with &#96;&#96;\"\"&#96;&#96; as delimiter and values of &#96;&#96;\"execute-api:/\"&#96;&#96; and &#96;&#96;\"&#42;\"&#96;&#96;."
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
    "description": "This property applies only when you use OpenAPI to define your REST API. The &#96;&#96;Mode&#96;&#96; determines how API Gateway handles resource updates.<br />Valid values are &#96;&#96;overwrite&#96;&#96; or &#96;&#96;merge&#96;&#96;. <br />For &#96;&#96;overwrite&#96;&#96;, the new API definition replaces the existing one. The existing API identifier remains unchanged.<br />For &#96;&#96;merge&#96;&#96;, the new API definition is merged with the existing API.<br />If you don't specify this property, a default value is chosen. For REST APIs created before March 29, 2021, the default is &#96;&#96;overwrite&#96;&#96;. For REST APIs created after March 29, 2021, the new API definition takes precedence, but any container types such as endpoint configurations and binary media types are merged with the existing API. <br />Use the default mode to define top-level &#96;&#96;RestApi&#96;&#96; properties in addition to using OpenAPI. Generally, it's preferred to use API Gateway's OpenAPI extensions to model these properties."
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
    "description": "A list of the endpoint types of the API. Use this property when creating an API. When importing an existing API, specify the endpoint configuration types using the &#96;&#96;Parameters&#96;&#96; property.",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html"><code>AWS::ApiGateway::RestApi</code></a>.

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
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

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
WHERE region = 'us-east-1' AND data__Identifier = '<RestApiId>';
```

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
'{{ Policy }}',
 '{{ BodyS3Location }}',
 '{{ Description }}',
 '{{ MinimumCompressionSize }}',
 '{{ Parameters }}',
 '{{ CloneFrom }}',
 '{{ Mode }}',
 '{{ DisableExecuteApiEndpoint }}',
 '{{ FailOnWarnings }}',
 '{{ BinaryMediaTypes }}',
 '{{ Name }}',
 '{{ ApiKeySourceType }}',
 '{{ EndpointConfiguration }}',
 '{{ Body }}',
 '{{ Tags }}',
'{{ region }}';
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
 '{{ Policy }}',
 '{{ BodyS3Location }}',
 '{{ Description }}',
 '{{ MinimumCompressionSize }}',
 '{{ Parameters }}',
 '{{ CloneFrom }}',
 '{{ Mode }}',
 '{{ DisableExecuteApiEndpoint }}',
 '{{ FailOnWarnings }}',
 '{{ BinaryMediaTypes }}',
 '{{ Name }}',
 '{{ ApiKeySourceType }}',
 '{{ EndpointConfiguration }}',
 '{{ Body }}',
 '{{ Tags }}',
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
  - name: rest_api
    props:
      - name: Policy
        value: {}
      - name: BodyS3Location
        value:
          Bucket: '{{ Bucket }}'
          ETag: '{{ ETag }}'
          Version: '{{ Version }}'
          Key: '{{ Key }}'
      - name: Description
        value: '{{ Description }}'
      - name: MinimumCompressionSize
        value: '{{ MinimumCompressionSize }}'
      - name: Parameters
        value: {}
      - name: CloneFrom
        value: '{{ CloneFrom }}'
      - name: Mode
        value: '{{ Mode }}'
      - name: DisableExecuteApiEndpoint
        value: '{{ DisableExecuteApiEndpoint }}'
      - name: FailOnWarnings
        value: '{{ FailOnWarnings }}'
      - name: BinaryMediaTypes
        value:
          - '{{ BinaryMediaTypes[0] }}'
      - name: Name
        value: '{{ Name }}'
      - name: ApiKeySourceType
        value: '{{ ApiKeySourceType }}'
      - name: EndpointConfiguration
        value:
          IpAddressType: '{{ IpAddressType }}'
          Types:
            - '{{ Types[0] }}'
          VpcEndpointIds:
            - '{{ VpcEndpointIds[0] }}'
      - name: Body
        value: {}
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apigateway.rest_apis
WHERE data__Identifier = '<RestApiId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>rest_apis</code> resource, the following permissions are required:

### Read
```json
apigateway:GET
```

### Create
```json
apigateway:GET,
apigateway:POST,
apigateway:PUT,
apigateway:PATCH,
apigateway:UpdateRestApiPolicy,
s3:GetObject,
iam:PassRole
```

### Update
```json
apigateway:GET,
apigateway:DELETE,
apigateway:PATCH,
apigateway:PUT,
apigateway:UpdateRestApiPolicy,
s3:GetObject,
iam:PassRole
```

### List
```json
apigateway:GET
```

### Delete
```json
apigateway:DELETE
```
