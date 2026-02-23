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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "base_path",
    "type": "string",
    "description": "The base path name that callers of the API must provide in the URL after the domain name."
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
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmappingv2.html"><code>AWS::ApiGateway::BasePathMappingV2</code></a>.

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
    <td><code>base_path_mapping_v2s</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DomainNameArn, RestApiId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>base_path_mapping_v2s</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>base_path_mapping_v2s</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>base_path_mapping_v2s_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>base_path_mapping_v2s</code></td>
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
WHERE region = 'us-east-1' AND Identifier = '{{ base_path_mapping_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>base_path_mapping_v2s</code> in a region.
```sql
SELECT
region,
base_path_mapping_arn
FROM awscc.apigateway.base_path_mapping_v2s_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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
'{{ domain_name_arn }}',
 '{{ rest_api_id }}',
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
 '{{ base_path }}',
 '{{ domain_name_arn }}',
 '{{ rest_api_id }}',
 '{{ stage }}',
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
      - name: base_path
        value: '{{ base_path }}'
      - name: domain_name_arn
        value: '{{ domain_name_arn }}'
      - name: rest_api_id
        value: '{{ rest_api_id }}'
      - name: stage
        value: '{{ stage }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>base_path_mapping_v2</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.apigateway.base_path_mapping_v2s
SET PatchDocument = string('{{ {
    "RestApiId": rest_api_id,
    "Stage": stage
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ base_path_mapping_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apigateway.base_path_mapping_v2s
WHERE Identifier = '{{ base_path_mapping_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>base_path_mapping_v2s</code> resource, the following permissions are required:

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
apigateway:GET
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
apigateway:DELETE,
apigateway:PATCH
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