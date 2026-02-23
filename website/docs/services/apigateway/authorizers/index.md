---
title: authorizers
hide_title: false
hide_table_of_contents: false
keywords:
  - authorizers
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

Creates, updates, deletes or gets an <code>authorizer</code> resource or lists <code>authorizers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>authorizers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApiGateway::Authorizer&#96;&#96; resource creates an authorization layer that API Gateway activates for methods that have authorization enabled. API Gateway activates the authorizer when a client calls those methods.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigateway.authorizers" /></td></tr>
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
    "name": "rest_api_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "authorizer_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "auth_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "authorizer_credentials",
    "type": "string",
    "description": ""
  },
  {
    "name": "authorizer_result_ttl_in_seconds",
    "type": "integer",
    "description": ""
  },
  {
    "name": "authorizer_uri",
    "type": "string",
    "description": ""
  },
  {
    "name": "identity_source",
    "type": "string",
    "description": ""
  },
  {
    "name": "identity_validation_expression",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "provider_arns",
    "type": "array",
    "description": ""
  },
  {
    "name": "type",
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
    "name": "rest_api_id",
    "type": "string",
    "description": ""
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-authorizer.html"><code>AWS::ApiGateway::Authorizer</code></a>.

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
    <td><CopyableCode code="RestApiId, Type, Name, region" /></td>
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
rest_api_id,
authorizer_id,
auth_type,
authorizer_credentials,
authorizer_result_ttl_in_seconds,
authorizer_uri,
identity_source,
identity_validation_expression,
name,
provider_arns,
type
FROM awscc.apigateway.authorizers
WHERE region = 'us-east-1' AND Identifier = '{{ rest_api_id }}|{{ authorizer_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>authorizers</code> in a region.
```sql
SELECT
region,
rest_api_id,
authorizer_id
FROM awscc.apigateway.authorizers_list_only
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
INSERT INTO awscc.apigateway.authorizers (
 RestApiId,
 Name,
 Type,
 region
)
SELECT
'{{ rest_api_id }}',
 '{{ name }}',
 '{{ type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.apigateway.authorizers (
 RestApiId,
 AuthType,
 AuthorizerCredentials,
 AuthorizerResultTtlInSeconds,
 AuthorizerUri,
 IdentitySource,
 IdentityValidationExpression,
 Name,
 ProviderARNs,
 Type,
 region
)
SELECT
 '{{ rest_api_id }}',
 '{{ auth_type }}',
 '{{ authorizer_credentials }}',
 '{{ authorizer_result_ttl_in_seconds }}',
 '{{ authorizer_uri }}',
 '{{ identity_source }}',
 '{{ identity_validation_expression }}',
 '{{ name }}',
 '{{ provider_arns }}',
 '{{ type }}',
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
      - name: rest_api_id
        value: '{{ rest_api_id }}'
      - name: auth_type
        value: '{{ auth_type }}'
      - name: authorizer_credentials
        value: '{{ authorizer_credentials }}'
      - name: authorizer_result_ttl_in_seconds
        value: '{{ authorizer_result_ttl_in_seconds }}'
      - name: authorizer_uri
        value: '{{ authorizer_uri }}'
      - name: identity_source
        value: '{{ identity_source }}'
      - name: identity_validation_expression
        value: '{{ identity_validation_expression }}'
      - name: name
        value: '{{ name }}'
      - name: provider_arns
        value:
          - '{{ provider_arns[0] }}'
      - name: type
        value: '{{ type }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>authorizer</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.apigateway.authorizers
SET PatchDocument = string('{{ {
    "AuthType": auth_type,
    "AuthorizerCredentials": authorizer_credentials,
    "AuthorizerResultTtlInSeconds": authorizer_result_ttl_in_seconds,
    "AuthorizerUri": authorizer_uri,
    "IdentitySource": identity_source,
    "IdentityValidationExpression": identity_validation_expression,
    "Name": name,
    "ProviderARNs": provider_arns,
    "Type": type
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ rest_api_id }}|{{ authorizer_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apigateway.authorizers
WHERE Identifier = '{{ rest_api_id }}|{{ authorizer_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>authorizers</code> resource, the following permissions are required:

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
apigateway:POST,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
apigateway:GET
```

</TabItem>
<TabItem value="update">

```json
apigateway:GET,
apigateway:PATCH,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
apigateway:DELETE
```

</TabItem>
<TabItem value="list">

```json
apigateway:GET
```

</TabItem>
</Tabs>