---
title: identity_pool_principal_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_pool_principal_tags
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

Expands all tag keys and values for <code>identity_pool_principals</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>identity_pool_principal_tags</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Cognito::IdentityPoolPrincipalTag</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cognito.identity_pool_principal_tags" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "identity_pool_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "identity_provider_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "use_defaults",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "principal_tags",
    "type": "object",
    "description": ""
  },
  {
    "name": "tag_key",
    "type": "string",
    "description": "Tag key."
  },
  {
    "name": "tag_value",
    "type": "string",
    "description": "Tag value."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolprincipaltag.html"><code>AWS::Cognito::IdentityPoolPrincipalTag</code></a>.

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
    <td><CopyableCode code="IdentityPoolId, IdentityProviderName, region" /></td>
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
Expands tags for all <code>identity_pool_principals</code> in a region.
```sql
SELECT
region,
identity_pool_id,
identity_provider_name,
use_defaults,
principal_tags,
tag_key,
tag_value
FROM awscc.cognito.identity_pool_principal_tags
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>identity_pool_principal_tag</code>.
```sql
SELECT
region,
identity_pool_id,
identity_provider_name,
use_defaults,
principal_tags
FROM awscc.cognito.identity_pool_principal_tags
WHERE region = 'us-east-1' AND data__Identifier = '<IdentityPoolId>|<IdentityProviderName>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>identity_pool_principal_tag</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cognito.identity_pool_principal_tags (
 IdentityPoolId,
 IdentityProviderName,
 region
)
SELECT 
'{{ IdentityPoolId }}',
 '{{ IdentityProviderName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cognito.identity_pool_principal_tags (
 IdentityPoolId,
 IdentityProviderName,
 UseDefaults,
 PrincipalTags,
 region
)
SELECT 
 '{{ IdentityPoolId }}',
 '{{ IdentityProviderName }}',
 '{{ UseDefaults }}',
 '{{ PrincipalTags }}',
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
  - name: identity_pool_principal_tag
    props:
      - name: IdentityPoolId
        value: '{{ IdentityPoolId }}'
      - name: IdentityProviderName
        value: '{{ IdentityProviderName }}'
      - name: UseDefaults
        value: '{{ UseDefaults }}'
      - name: PrincipalTags
        value: {}

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cognito.identity_pool_principal_tags
WHERE data__Identifier = '<IdentityPoolId|IdentityProviderName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>identity_pool_principal_tags</code> resource, the following permissions are required:

### Create
```json
cognito-identity:GetPrincipalTagAttributeMap,
cognito-identity:SetPrincipalTagAttributeMap
```

### Read
```json
cognito-identity:GetPrincipalTagAttributeMap
```

### Update
```json
cognito-identity:GetPrincipalTagAttributeMap,
cognito-identity:SetPrincipalTagAttributeMap
```

### Delete
```json
cognito-identity:GetPrincipalTagAttributeMap,
cognito-identity:SetPrincipalTagAttributeMap
```

### List
```json
cognito-identity:GetPrincipalTagAttributeMap
```
