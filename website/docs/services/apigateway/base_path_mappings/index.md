---
title: base_path_mappings
hide_title: false
hide_table_of_contents: false
keywords:
  - base_path_mappings
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

Creates, updates, deletes or gets a <code>base_path_mapping</code> resource or lists <code>base_path_mappings</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>base_path_mappings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApiGateway::BasePathMapping&#96;&#96; resource creates a base path that clients who call your API must use in the invocation URL.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigateway.base_path_mappings" /></td></tr>
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
    "description": ""
  },
  {
    "name": "domain_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "rest_api_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "stage",
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
    "name": "base_path",
    "type": "string",
    "description": ""
  },
  {
    "name": "domain_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmapping.html"><code>AWS::ApiGateway::BasePathMapping</code></a>.

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
    <td><code>base_path_mappings</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DomainName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>base_path_mappings</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>base_path_mappings</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>base_path_mappings_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>base_path_mappings</code></td>
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

Gets all properties from an individual <code>base_path_mapping</code>.
```sql
SELECT
region,
base_path,
domain_name,
rest_api_id,
stage
FROM awscc.apigateway.base_path_mappings
WHERE region = 'us-east-1' AND Identifier = '{{ domain_name }}|{{ base_path }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>base_path_mappings</code> in a region.
```sql
SELECT
region,
domain_name,
base_path
FROM awscc.apigateway.base_path_mappings_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>base_path_mapping</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.apigateway.base_path_mappings (
 DomainName,
 region
)
SELECT
'{{ domain_name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.apigateway.base_path_mappings (
 BasePath,
 DomainName,
 RestApiId,
 Stage,
 region
)
SELECT
 '{{ base_path }}',
 '{{ domain_name }}',
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
  - name: base_path_mapping
    props:
      - name: base_path
        value: '{{ base_path }}'
      - name: domain_name
        value: '{{ domain_name }}'
      - name: rest_api_id
        value: '{{ rest_api_id }}'
      - name: stage
        value: '{{ stage }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>base_path_mapping</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.apigateway.base_path_mappings
SET PatchDocument = string('{{ {
    "RestApiId": rest_api_id,
    "Stage": stage
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ domain_name }}|{{ base_path }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apigateway.base_path_mappings
WHERE Identifier = '{{ domain_name }}|{{ base_path }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>base_path_mappings</code> resource, the following permissions are required:

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