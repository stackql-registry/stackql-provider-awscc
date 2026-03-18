---
title: themes
hide_title: false
hide_table_of_contents: false
keywords:
  - themes
  - amplifyuibuilder
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

Creates, updates, deletes or gets a <code>theme</code> resource or lists <code>themes</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>themes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::AmplifyUIBuilder::Theme Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.amplifyuibuilder.themes" /></td></tr>
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
    "name": "app_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "created_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "environment_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "modified_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "overrides",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "value",
            "type": "string",
            "description": ""
          },
          {
            "name": "children",
            "type": "array",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "object",
    "description": ""
  },
  {
    "name": "values",
    "type": "array",
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
    "name": "app_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "environment_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-theme.html"><code>AWS::AmplifyUIBuilder::Theme</code></a>.

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
    <td><code>themes</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>themes</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>themes</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>themes_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>themes</code></td>
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

Gets all properties from an individual <code>theme</code>.
```sql
SELECT
  region,
  app_id,
  created_at,
  environment_name,
  id,
  modified_at,
  name,
  overrides,
  tags,
  values
FROM awscc.amplifyuibuilder.themes
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ app_id }}|{{ environment_name }}|{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>themes</code> in a region.
```sql
SELECT
  region,
  app_id,
  environment_name,
  id
FROM awscc.amplifyuibuilder.themes_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>theme</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.amplifyuibuilder.themes (
  AppId,
  EnvironmentName,
  Name,
  Overrides,
  Tags,
  Values,
  region
)
SELECT
  '{{ app_id }}',
  '{{ environment_name }}',
  '{{ name }}',
  '{{ overrides }}',
  '{{ tags }}',
  '{{ values }}',
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
INSERT INTO awscc.amplifyuibuilder.themes (
  AppId,
  EnvironmentName,
  Name,
  Overrides,
  Tags,
  Values,
  region
)
SELECT
  '{{ app_id }}',
  '{{ environment_name }}',
  '{{ name }}',
  '{{ overrides }}',
  '{{ tags }}',
  '{{ values }}',
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
  - name: theme
    props:
      - name: app_id
        value: '{{ app_id }}'
      - name: environment_name
        value: '{{ environment_name }}'
      - name: name
        value: '{{ name }}'
      - name: overrides
        value:
          - key: '{{ key }}'
            value:
              value: '{{ value }}'
              children:
                - null
      - name: tags
        value: {}
      - name: values
        value:
          - null
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>theme</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.amplifyuibuilder.themes
SET PatchDocument = string('{{ {
    "Name": name,
    "Overrides": overrides,
    "Tags": tags,
    "Values": values
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ app_id }}|{{ environment_name }}|{{ id }}'
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
DELETE FROM awscc.amplifyuibuilder.themes
WHERE
  Identifier = '{{ app_id }}|{{ environment_name }}|{{ id }}' AND
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

To operate on the <code>themes</code> resource, the following permissions are required:

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
amplify:GetApp,
amplifyuibuilder:CreateTheme,
amplifyuibuilder:GetTheme,
amplifyuibuilder:TagResource
```

</TabItem>
<TabItem value="read">

```json
amplify:GetApp,
amplifyuibuilder:GetTheme
```

</TabItem>
<TabItem value="update">

```json
amplify:GetApp,
amplifyuibuilder:GetTheme,
amplifyuibuilder:TagResource,
amplifyuibuilder:UntagResource,
amplifyuibuilder:UpdateTheme
```

</TabItem>
<TabItem value="delete">

```json
amplify:GetApp,
amplifyuibuilder:DeleteTheme,
amplifyuibuilder:UntagResource
```

</TabItem>
<TabItem value="list">

```json
amplify:GetApp,
amplifyuibuilder:ListThemes
```

</TabItem>
</Tabs>