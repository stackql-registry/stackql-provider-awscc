---
title: documentation_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - documentation_versions
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

Creates, updates, deletes or gets a <code>documentation_version</code> resource or lists <code>documentation_versions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>documentation_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApiGateway::DocumentationVersion&#96;&#96; resource creates a snapshot of the documentation for an API. For more information, see &#91;Representation of API Documentation in API Gateway&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api-content-representation.html) in the &#42;API Gateway Developer Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigateway.documentation_versions" /></td></tr>
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
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "documentation_version",
    "type": "string",
    "description": ""
  },
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "documentation_version",
    "type": "string",
    "description": ""
  },
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationversion.html"><code>AWS::ApiGateway::DocumentationVersion</code></a>.

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
    <td><code>documentation_versions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DocumentationVersion, RestApiId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>documentation_versions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>documentation_versions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>documentation_versions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>documentation_versions</code></td>
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

Gets all properties from an individual <code>documentation_version</code>.
```sql
SELECT
region,
description,
documentation_version,
rest_api_id
FROM awscc.apigateway.documentation_versions
WHERE region = 'us-east-1' AND Identifier = '{{ documentation_version }}|{{ rest_api_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>documentation_versions</code> in a region.
```sql
SELECT
region,
documentation_version,
rest_api_id
FROM awscc.apigateway.documentation_versions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>documentation_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.apigateway.documentation_versions (
 DocumentationVersion,
 RestApiId,
 region
)
SELECT
'{{ documentation_version }}',
 '{{ rest_api_id }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.apigateway.documentation_versions (
 Description,
 DocumentationVersion,
 RestApiId,
 region
)
SELECT
 '{{ description }}',
 '{{ documentation_version }}',
 '{{ rest_api_id }}',
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
  - name: documentation_version
    props:
      - name: description
        value: '{{ description }}'
      - name: documentation_version
        value: '{{ documentation_version }}'
      - name: rest_api_id
        value: '{{ rest_api_id }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>documentation_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.apigateway.documentation_versions
SET PatchDocument = string('{{ {
    "Description": description
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ documentation_version }}|{{ rest_api_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apigateway.documentation_versions
WHERE Identifier = '{{ documentation_version }}|{{ rest_api_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>documentation_versions</code> resource, the following permissions are required:

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
apigateway:GET,
apigateway:POST
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