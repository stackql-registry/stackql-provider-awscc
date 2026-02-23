---
title: identity_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_pools
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

Creates, updates, deletes or gets an <code>identity_pool</code> resource or lists <code>identity_pools</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>identity_pools</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Cognito::IdentityPool</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cognito.identity_pools" /></td></tr>
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
    "name": "push_sync",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "application_arns",
        "type": "array",
        "description": ""
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "cognito_identity_providers",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "server_side_token_check",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "provider_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "client_id",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "developer_provider_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "cognito_streams",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "streaming_status",
        "type": "string",
        "description": ""
      },
      {
        "name": "stream_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "supported_login_providers",
    "type": "object",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "cognito_events",
    "type": "object",
    "description": ""
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "identity_pool_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "allow_unauthenticated_identities",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "saml_provider_arns",
    "type": "array",
    "description": ""
  },
  {
    "name": "open_id_connect_provider_arns",
    "type": "array",
    "description": ""
  },
  {
    "name": "allow_classic_flow",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "identity_pool_tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
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
    "name": "id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypool.html"><code>AWS::Cognito::IdentityPool</code></a>.

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
    <td><code>identity_pools</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AllowUnauthenticatedIdentities, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>identity_pools</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>identity_pools</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>identity_pools_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>identity_pools</code></td>
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

Gets all properties from an individual <code>identity_pool</code>.
```sql
SELECT
region,
push_sync,
cognito_identity_providers,
developer_provider_name,
cognito_streams,
supported_login_providers,
name,
cognito_events,
id,
identity_pool_name,
allow_unauthenticated_identities,
saml_provider_arns,
open_id_connect_provider_arns,
allow_classic_flow,
identity_pool_tags
FROM awscc.cognito.identity_pools
WHERE region = 'us-east-1' AND Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>identity_pools</code> in a region.
```sql
SELECT
region,
id
FROM awscc.cognito.identity_pools_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>identity_pool</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cognito.identity_pools (
 AllowUnauthenticatedIdentities,
 region
)
SELECT
'{{ allow_unauthenticated_identities }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cognito.identity_pools (
 PushSync,
 CognitoIdentityProviders,
 DeveloperProviderName,
 CognitoStreams,
 SupportedLoginProviders,
 CognitoEvents,
 IdentityPoolName,
 AllowUnauthenticatedIdentities,
 SamlProviderARNs,
 OpenIdConnectProviderARNs,
 AllowClassicFlow,
 IdentityPoolTags,
 region
)
SELECT
 '{{ push_sync }}',
 '{{ cognito_identity_providers }}',
 '{{ developer_provider_name }}',
 '{{ cognito_streams }}',
 '{{ supported_login_providers }}',
 '{{ cognito_events }}',
 '{{ identity_pool_name }}',
 '{{ allow_unauthenticated_identities }}',
 '{{ saml_provider_arns }}',
 '{{ open_id_connect_provider_arns }}',
 '{{ allow_classic_flow }}',
 '{{ identity_pool_tags }}',
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
  - name: identity_pool
    props:
      - name: push_sync
        value:
          application_arns:
            - '{{ application_arns[0] }}'
          role_arn: '{{ role_arn }}'
      - name: cognito_identity_providers
        value:
          - server_side_token_check: '{{ server_side_token_check }}'
            provider_name: '{{ provider_name }}'
            client_id: '{{ client_id }}'
      - name: developer_provider_name
        value: '{{ developer_provider_name }}'
      - name: cognito_streams
        value:
          streaming_status: '{{ streaming_status }}'
          stream_name: '{{ stream_name }}'
          role_arn: '{{ role_arn }}'
      - name: supported_login_providers
        value: {}
      - name: cognito_events
        value: {}
      - name: identity_pool_name
        value: '{{ identity_pool_name }}'
      - name: allow_unauthenticated_identities
        value: '{{ allow_unauthenticated_identities }}'
      - name: saml_provider_arns
        value:
          - '{{ saml_provider_arns[0] }}'
      - name: open_id_connect_provider_arns
        value:
          - '{{ open_id_connect_provider_arns[0] }}'
      - name: allow_classic_flow
        value: '{{ allow_classic_flow }}'
      - name: identity_pool_tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>identity_pool</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cognito.identity_pools
SET PatchDocument = string('{{ {
    "PushSync": push_sync,
    "CognitoIdentityProviders": cognito_identity_providers,
    "DeveloperProviderName": developer_provider_name,
    "CognitoStreams": cognito_streams,
    "SupportedLoginProviders": supported_login_providers,
    "CognitoEvents": cognito_events,
    "IdentityPoolName": identity_pool_name,
    "AllowUnauthenticatedIdentities": allow_unauthenticated_identities,
    "SamlProviderARNs": saml_provider_arns,
    "OpenIdConnectProviderARNs": open_id_connect_provider_arns,
    "AllowClassicFlow": allow_classic_flow,
    "IdentityPoolTags": identity_pool_tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cognito.identity_pools
WHERE Identifier = '{{ id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>identity_pools</code> resource, the following permissions are required:

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
cognito-identity:CreateIdentityPool,
cognito-sync:SetIdentityPoolConfiguration,
cognito-sync:SetCognitoEvents,
cognito-identity:TagResource,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
cognito-identity:DescribeIdentityPool
```

</TabItem>
<TabItem value="update">

```json
cognito-identity:UpdateIdentityPool,
cognito-identity:DescribeIdentityPool,
cognito-sync:SetIdentityPoolConfiguration,
cognito-sync:SetCognitoEvents,
cognito-identity:TagResource,
cognito-identity:UntagResource,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
cognito-identity:DeleteIdentityPool
```

</TabItem>
<TabItem value="list">

```json
cognito-identity:ListIdentityPools
```

</TabItem>
</Tabs>