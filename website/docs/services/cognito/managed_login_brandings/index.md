---
title: managed_login_brandings
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_login_brandings
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

Creates, updates, deletes or gets a <code>managed_login_branding</code> resource or lists <code>managed_login_brandings</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>managed_login_brandings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Cognito::ManagedLoginBranding</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cognito.managed_login_brandings" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "user_pool_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "client_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "use_cognito_provided_values",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "settings",
    "type": "object",
    "description": ""
  },
  {
    "name": "assets",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "category",
        "type": "string",
        "description": ""
      },
      {
        "name": "color_mode",
        "type": "string",
        "description": ""
      },
      {
        "name": "extension",
        "type": "string",
        "description": ""
      },
      {
        "name": "bytes",
        "type": "string",
        "description": ""
      },
      {
        "name": "resource_id",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "managed_login_branding_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "return_merged_resources",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-managedloginbranding.html"><code>AWS::Cognito::ManagedLoginBranding</code></a>.

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
    <td><CopyableCode code="UserPoolId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>managed_login_branding</code>.
```sql
SELECT
region,
user_pool_id,
client_id,
use_cognito_provided_values,
settings,
assets,
managed_login_branding_id,
return_merged_resources
FROM awscc.cognito.managed_login_brandings
WHERE region = 'us-east-1' AND Identifier = '{{ user_pool_id }}|{{ managed_login_branding_id }}';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>managed_login_branding</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cognito.managed_login_brandings (
 UserPoolId,
 region
)
SELECT
'{{ user_pool_id }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cognito.managed_login_brandings (
 UserPoolId,
 ClientId,
 UseCognitoProvidedValues,
 Settings,
 Assets,
 ReturnMergedResources,
 region
)
SELECT
 '{{ user_pool_id }}',
 '{{ client_id }}',
 '{{ use_cognito_provided_values }}',
 '{{ settings }}',
 '{{ assets }}',
 '{{ return_merged_resources }}',
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
  - name: managed_login_branding
    props:
      - name: user_pool_id
        value: '{{ user_pool_id }}'
      - name: client_id
        value: '{{ client_id }}'
      - name: use_cognito_provided_values
        value: '{{ use_cognito_provided_values }}'
      - name: settings
        value: {}
      - name: assets
        value:
          - category: '{{ category }}'
            color_mode: '{{ color_mode }}'
            extension: '{{ extension }}'
            bytes: '{{ bytes }}'
            resource_id: '{{ resource_id }}'
      - name: return_merged_resources
        value: '{{ return_merged_resources }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>managed_login_branding</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cognito.managed_login_brandings
SET PatchDocument = string('{{ {
    "UseCognitoProvidedValues": use_cognito_provided_values,
    "Settings": settings,
    "Assets": assets,
    "ReturnMergedResources": return_merged_resources
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ user_pool_id }}|{{ managed_login_branding_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cognito.managed_login_brandings
WHERE Identifier = '{{ user_pool_id }}|{{ managed_login_branding_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>managed_login_brandings</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="create">

```json
cognito-idp:CreateManagedLoginBranding
```

</TabItem>
<TabItem value="read">

```json
cognito-idp:DescribeManagedLoginBranding
```

</TabItem>
<TabItem value="update">

```json
cognito-idp:UpdateManagedLoginBranding
```

</TabItem>
<TabItem value="delete">

```json
cognito-idp:DeleteManagedLoginBranding
```

</TabItem>
</Tabs>