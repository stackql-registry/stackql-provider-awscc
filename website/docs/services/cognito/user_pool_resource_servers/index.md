---
title: user_pool_resource_servers
hide_title: false
hide_table_of_contents: false
keywords:
  - user_pool_resource_servers
  - cognito
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

Creates, updates, deletes or gets an <code>user_pool_resource_server</code> resource or lists <code>user_pool_resource_servers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>user_pool_resource_servers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Cognito::UserPoolResourceServer</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cognito.user_pool_resource_servers" /></td></tr>
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
    "name": "user_pool_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "scopes",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "scope_description",
        "type": "string",
        "description": ""
      },
      {
        "name": "scope_name",
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
    "name": "user_pool_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "identifier",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolresourceserver.html"><code>AWS::Cognito::UserPoolResourceServer</code></a>.

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
    <td><code>user_pool_resource_servers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="UserPoolId, Identifier, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>user_pool_resource_servers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>user_pool_resource_servers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>user_pool_resource_servers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>user_pool_resource_servers</code></td>
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

Gets all properties from an individual <code>user_pool_resource_server</code>.
```sql
SELECT
region,
user_pool_id,
identifier,
name,
scopes
FROM awscc.cognito.user_pool_resource_servers
WHERE region = 'us-east-1' AND Identifier = '{{ user_pool_id }}|{{ identifier }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>user_pool_resource_servers</code> in a region.
```sql
SELECT
region,
user_pool_id,
identifier
FROM awscc.cognito.user_pool_resource_servers_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>user_pool_resource_server</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cognito.user_pool_resource_servers (
 UserPoolId,
 Identifier,
 Name,
 region
)
SELECT
'{{ user_pool_id }}',
 '{{ identifier }}',
 '{{ name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cognito.user_pool_resource_servers (
 UserPoolId,
 Identifier,
 Name,
 Scopes,
 region
)
SELECT
 '{{ user_pool_id }}',
 '{{ identifier }}',
 '{{ name }}',
 '{{ scopes }}',
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
  - name: user_pool_resource_server
    props:
      - name: user_pool_id
        value: '{{ user_pool_id }}'
      - name: identifier
        value: '{{ identifier }}'
      - name: name
        value: '{{ name }}'
      - name: scopes
        value:
          - scope_description: '{{ scope_description }}'
            scope_name: '{{ scope_name }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>user_pool_resource_server</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cognito.user_pool_resource_servers
SET PatchDocument = string('{{ {
    "Name": name,
    "Scopes": scopes
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ user_pool_id }}|{{ identifier }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cognito.user_pool_resource_servers
WHERE Identifier = '{{ user_pool_id }}|{{ identifier }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>user_pool_resource_servers</code> resource, the following permissions are required:

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
cognito-idp:CreateResourceServer
```

</TabItem>
<TabItem value="read">

```json
cognito-idp:DescribeResourceServer
```

</TabItem>
<TabItem value="update">

```json
cognito-idp:UpdateResourceServer
```

</TabItem>
<TabItem value="delete">

```json
cognito-idp:DeleteResourceServer
```

</TabItem>
<TabItem value="list">

```json
cognito-idp:ListResourceServers
```

</TabItem>
</Tabs>