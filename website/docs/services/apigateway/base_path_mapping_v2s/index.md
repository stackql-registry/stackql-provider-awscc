---
title: base_path_mapping_v2s
hide_title: false
hide_table_of_contents: false
keywords:
  - base_path_mapping_v2s
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

Creates, updates, deletes or gets a <code>base_path_mapping_v2</code> resource or lists <code>base_path_mapping_v2s</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>base_path_mapping_v2s</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::ApiGateway::BasePathMappingV2</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigateway.base_path_mapping_v2s" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "base_path",
    "type": "string",
    "description": "The base path name that callers of the API must provide in the URL after the domain name."
  },
  {
    "name": "domain_name_arn",
    "type": "string",
    "description": "The Arn of an AWS::ApiGateway::DomainNameV2 resource."
  },
  {
    "name": "rest_api_id",
    "type": "string",
    "description": "The ID of the API."
  },
  {
    "name": "stage",
    "type": "string",
    "description": "The name of the API's stage."
  },
  {
    "name": "base_path_mapping_arn",
    "type": "string",
    "description": "Amazon Resource Name (ARN) of the resource."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmappingv2.html"><code>AWS::ApiGateway::BasePathMappingV2</code></a>.

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
    <td><CopyableCode code="DomainNameArn, RestApiId, region" /></td>
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

Gets all properties from an individual <code>base_path_mapping_v2</code>.
```sql
SELECT
region,
base_path,
domain_name_arn,
rest_api_id,
stage,
base_path_mapping_arn
FROM awscc.apigateway.base_path_mapping_v2s
WHERE region = 'us-east-1' AND data__Identifier = '<BasePathMappingArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>base_path_mapping_v2</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.apigateway.base_path_mapping_v2s (
 DomainNameArn,
 RestApiId,
 region
)
SELECT 
'{{ DomainNameArn }}',
 '{{ RestApiId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.apigateway.base_path_mapping_v2s (
 BasePath,
 DomainNameArn,
 RestApiId,
 Stage,
 region
)
SELECT 
 '{{ BasePath }}',
 '{{ DomainNameArn }}',
 '{{ RestApiId }}',
 '{{ Stage }}',
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
  - name: base_path_mapping_v2
    props:
      - name: BasePath
        value: '{{ BasePath }}'
      - name: DomainNameArn
        value: '{{ DomainNameArn }}'
      - name: RestApiId
        value: '{{ RestApiId }}'
      - name: Stage
        value: '{{ Stage }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apigateway.base_path_mapping_v2s
WHERE data__Identifier = '<BasePathMappingArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>base_path_mapping_v2s</code> resource, the following permissions are required:

### Create
```json
apigateway:POST,
apigateway:GET
```

### Read
```json
apigateway:GET
```

### Update
```json
apigateway:GET,
apigateway:DELETE,
apigateway:PATCH
```

### Delete
```json
apigateway:DELETE
```

### List
```json
apigateway:GET
```
