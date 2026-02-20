---
title: user_pool_identity_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - user_pool_identity_providers
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

Creates, updates, deletes or gets an <code>user_pool_identity_provider</code> resource or lists <code>user_pool_identity_providers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>user_pool_identity_providers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Cognito::UserPoolIdentityProvider</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cognito.user_pool_identity_providers" /></td></tr>
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
    "name": "provider_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "provider_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "provider_details",
    "type": "object",
    "description": ""
  },
  {
    "name": "idp_identifiers",
    "type": "array",
    "description": ""
  },
  {
    "name": "attribute_mapping",
    "type": "object",
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
    "name": "user_pool_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "provider_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolidentityprovider.html"><code>AWS::Cognito::UserPoolIdentityProvider</code></a>.

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
    <td><code>user_pool_identity_providers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="UserPoolId, ProviderName, ProviderType, ProviderDetails, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>user_pool_identity_providers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>user_pool_identity_providers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>user_pool_identity_providers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>user_pool_identity_providers</code></td>
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

Gets all properties from an individual <code>user_pool_identity_provider</code>.
```sql
SELECT
region,
user_pool_id,
provider_name,
provider_type,
provider_details,
idp_identifiers,
attribute_mapping
FROM awscc.cognito.user_pool_identity_providers
WHERE region = 'us-east-1' AND Identifier = '<UserPoolId>|<ProviderName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>user_pool_identity_providers</code> in a region.
```sql
SELECT
region,
user_pool_id,
provider_name
FROM awscc.cognito.user_pool_identity_providers_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>user_pool_identity_provider</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cognito.user_pool_identity_providers (
 UserPoolId,
 ProviderName,
 ProviderType,
 ProviderDetails,
 region
)
SELECT 
'{{ UserPoolId }}',
 '{{ ProviderName }}',
 '{{ ProviderType }}',
 '{{ ProviderDetails }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cognito.user_pool_identity_providers (
 UserPoolId,
 ProviderName,
 ProviderType,
 ProviderDetails,
 IdpIdentifiers,
 AttributeMapping,
 region
)
SELECT 
 '{{ UserPoolId }}',
 '{{ ProviderName }}',
 '{{ ProviderType }}',
 '{{ ProviderDetails }}',
 '{{ IdpIdentifiers }}',
 '{{ AttributeMapping }}',
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
  - name: user_pool_identity_provider
    props:
      - name: UserPoolId
        value: '{{ UserPoolId }}'
      - name: ProviderName
        value: '{{ ProviderName }}'
      - name: ProviderType
        value: '{{ ProviderType }}'
      - name: ProviderDetails
        value: {}
      - name: IdpIdentifiers
        value:
          - '{{ IdpIdentifiers[0] }}'
      - name: AttributeMapping
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.cognito.user_pool_identity_providers
SET PatchDocument = string('{{ {
    "ProviderDetails": provider_details,
    "IdpIdentifiers": idp_identifiers,
    "AttributeMapping": attribute_mapping
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<UserPoolId>|<ProviderName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cognito.user_pool_identity_providers
WHERE Identifier = '<UserPoolId|ProviderName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>user_pool_identity_providers</code> resource, the following permissions are required:

### Create
```json
cognito-idp:CreateIdentityProvider,
cognito-idp:DescribeIdentityProvider
```

### Read
```json
cognito-idp:DescribeIdentityProvider
```

### Update
```json
cognito-idp:UpdateIdentityProvider,
cognito-idp:DescribeIdentityProvider
```

### Delete
```json
cognito-idp:DeleteIdentityProvider,
cognito-idp:DescribeIdentityProvider
```

### List
```json
cognito-idp:ListIdentityProviders
```
