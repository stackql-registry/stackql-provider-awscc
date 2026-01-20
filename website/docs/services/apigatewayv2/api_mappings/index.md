---
title: api_mappings
hide_title: false
hide_table_of_contents: false
keywords:
  - api_mappings
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

Creates, updates, deletes or gets an <code>api_mapping</code> resource or lists <code>api_mappings</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>api_mappings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApiGatewayV2::ApiMapping&#96;&#96; resource contains an API mapping. An API mapping relates a path of your custom domain name to a stage of your API. A custom domain name can have multiple API mappings, but the paths can't overlap. A custom domain can map only to APIs of the same protocol type. For more information, see &#91;CreateApiMapping&#93;(https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/domainnames-domainname-apimappings.html#CreateApiMapping) in the &#42;Amazon API Gateway V2 API Reference&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigatewayv2.api_mappings" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "api_mapping_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "domain_name",
    "type": "string",
    "description": "The domain name."
  },
  {
    "name": "stage",
    "type": "string",
    "description": "The API stage."
  },
  {
    "name": "api_mapping_key",
    "type": "string",
    "description": "The API mapping key."
  },
  {
    "name": "api_id",
    "type": "string",
    "description": "The identifier of the API."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apimapping.html"><code>AWS::ApiGatewayV2::ApiMapping</code></a>.

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
    <td><CopyableCode code="DomainName, Stage, ApiId, region" /></td>
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

Gets all properties from an individual <code>api_mapping</code>.
```sql
SELECT
region,
api_mapping_id,
domain_name,
stage,
api_mapping_key,
api_id
FROM awscc.apigatewayv2.api_mappings
WHERE region = 'us-east-1' AND data__Identifier = '<ApiMappingId>|<DomainName>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>api_mapping</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.apigatewayv2.api_mappings (
 DomainName,
 Stage,
 ApiId,
 region
)
SELECT 
'{{ DomainName }}',
 '{{ Stage }}',
 '{{ ApiId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.apigatewayv2.api_mappings (
 DomainName,
 Stage,
 ApiMappingKey,
 ApiId,
 region
)
SELECT 
 '{{ DomainName }}',
 '{{ Stage }}',
 '{{ ApiMappingKey }}',
 '{{ ApiId }}',
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
  - name: api_mapping
    props:
      - name: DomainName
        value: '{{ DomainName }}'
      - name: Stage
        value: '{{ Stage }}'
      - name: ApiMappingKey
        value: '{{ ApiMappingKey }}'
      - name: ApiId
        value: '{{ ApiId }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apigatewayv2.api_mappings
WHERE data__Identifier = '<ApiMappingId|DomainName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>api_mappings</code> resource, the following permissions are required:

### Create
```json
apigateway:POST
```

### Update
```json
apigateway:PATCH,
apigateway:GET,
apigateway:PUT
```

### Read
```json
apigateway:GET
```

### Delete
```json
apigateway:DELETE
```

### List
```json
apigateway:GET
```
