---
title: user_pool_clients
hide_title: false
hide_table_of_contents: false
keywords:
  - user_pool_clients
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

Creates, updates, deletes or gets an <code>user_pool_client</code> resource or lists <code>user_pool_clients</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>user_pool_clients</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Cognito::UserPoolClient</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cognito.user_pool_clients" /></td></tr>
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
    "name": "client_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "explicit_auth_flows",
    "type": "array",
    "description": ""
  },
  {
    "name": "generate_secret",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "read_attributes",
    "type": "array",
    "description": ""
  },
  {
    "name": "auth_session_validity",
    "type": "integer",
    "description": ""
  },
  {
    "name": "refresh_token_validity",
    "type": "integer",
    "description": ""
  },
  {
    "name": "access_token_validity",
    "type": "integer",
    "description": ""
  },
  {
    "name": "id_token_validity",
    "type": "integer",
    "description": ""
  },
  {
    "name": "token_validity_units",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "access_token",
        "type": "string",
        "description": ""
      },
      {
        "name": "id_token",
        "type": "string",
        "description": ""
      },
      {
        "name": "refresh_token",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "refresh_token_rotation",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "feature",
        "type": "string",
        "description": ""
      },
      {
        "name": "retry_grace_period_seconds",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "user_pool_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "write_attributes",
    "type": "array",
    "description": ""
  },
  {
    "name": "allowed_oauth_flows",
    "type": "array",
    "description": ""
  },
  {
    "name": "allowed_oauth_flows_user_pool_client",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "allowed_oauth_scopes",
    "type": "array",
    "description": ""
  },
  {
    "name": "callback_urls",
    "type": "array",
    "description": ""
  },
  {
    "name": "default_redirect_uri",
    "type": "string",
    "description": ""
  },
  {
    "name": "logout_urls",
    "type": "array",
    "description": ""
  },
  {
    "name": "supported_identity_providers",
    "type": "array",
    "description": ""
  },
  {
    "name": "analytics_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "application_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "application_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "external_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "user_data_shared",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  {
    "name": "prevent_user_existence_errors",
    "type": "string",
    "description": ""
  },
  {
    "name": "enable_token_revocation",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "enable_propagate_additional_user_context_data",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "client_secret",
    "type": "string",
    "description": ""
  },
  {
    "name": "client_id",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html"><code>AWS::Cognito::UserPoolClient</code></a>.

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
    <td><code>user_pool_clients</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="UserPoolId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>user_pool_clients</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>user_pool_clients</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>user_pool_clients_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>user_pool_clients</code></td>
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

Gets all properties from an individual <code>user_pool_client</code>.
```sql
SELECT
region,
client_name,
explicit_auth_flows,
generate_secret,
read_attributes,
auth_session_validity,
refresh_token_validity,
access_token_validity,
id_token_validity,
token_validity_units,
refresh_token_rotation,
user_pool_id,
write_attributes,
allowed_oauth_flows,
allowed_oauth_flows_user_pool_client,
allowed_oauth_scopes,
callback_urls,
default_redirect_uri,
logout_urls,
supported_identity_providers,
analytics_configuration,
prevent_user_existence_errors,
enable_token_revocation,
enable_propagate_additional_user_context_data,
name,
client_secret,
client_id
FROM awscc.cognito.user_pool_clients
WHERE region = 'us-east-1' AND Identifier = '{{ user_pool_id }}|{{ client_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>user_pool_clients</code> in a region.
```sql
SELECT
region,
user_pool_id,
client_id
FROM awscc.cognito.user_pool_clients_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>user_pool_client</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cognito.user_pool_clients (
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
INSERT INTO awscc.cognito.user_pool_clients (
 ClientName,
 ExplicitAuthFlows,
 GenerateSecret,
 ReadAttributes,
 AuthSessionValidity,
 RefreshTokenValidity,
 AccessTokenValidity,
 IdTokenValidity,
 TokenValidityUnits,
 RefreshTokenRotation,
 UserPoolId,
 WriteAttributes,
 AllowedOAuthFlows,
 AllowedOAuthFlowsUserPoolClient,
 AllowedOAuthScopes,
 CallbackURLs,
 DefaultRedirectURI,
 LogoutURLs,
 SupportedIdentityProviders,
 AnalyticsConfiguration,
 PreventUserExistenceErrors,
 EnableTokenRevocation,
 EnablePropagateAdditionalUserContextData,
 region
)
SELECT
 '{{ client_name }}',
 '{{ explicit_auth_flows }}',
 '{{ generate_secret }}',
 '{{ read_attributes }}',
 '{{ auth_session_validity }}',
 '{{ refresh_token_validity }}',
 '{{ access_token_validity }}',
 '{{ id_token_validity }}',
 '{{ token_validity_units }}',
 '{{ refresh_token_rotation }}',
 '{{ user_pool_id }}',
 '{{ write_attributes }}',
 '{{ allowed_oauth_flows }}',
 '{{ allowed_oauth_flows_user_pool_client }}',
 '{{ allowed_oauth_scopes }}',
 '{{ callback_urls }}',
 '{{ default_redirect_uri }}',
 '{{ logout_urls }}',
 '{{ supported_identity_providers }}',
 '{{ analytics_configuration }}',
 '{{ prevent_user_existence_errors }}',
 '{{ enable_token_revocation }}',
 '{{ enable_propagate_additional_user_context_data }}',
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
  - name: user_pool_client
    props:
      - name: client_name
        value: '{{ client_name }}'
      - name: explicit_auth_flows
        value:
          - '{{ explicit_auth_flows[0] }}'
      - name: generate_secret
        value: '{{ generate_secret }}'
      - name: read_attributes
        value:
          - '{{ read_attributes[0] }}'
      - name: auth_session_validity
        value: '{{ auth_session_validity }}'
      - name: refresh_token_validity
        value: '{{ refresh_token_validity }}'
      - name: access_token_validity
        value: '{{ access_token_validity }}'
      - name: id_token_validity
        value: '{{ id_token_validity }}'
      - name: token_validity_units
        value:
          access_token: '{{ access_token }}'
          id_token: '{{ id_token }}'
          refresh_token: '{{ refresh_token }}'
      - name: refresh_token_rotation
        value:
          feature: '{{ feature }}'
          retry_grace_period_seconds: '{{ retry_grace_period_seconds }}'
      - name: user_pool_id
        value: '{{ user_pool_id }}'
      - name: write_attributes
        value:
          - '{{ write_attributes[0] }}'
      - name: allowed_oauth_flows
        value:
          - '{{ allowed_oauth_flows[0] }}'
      - name: allowed_oauth_flows_user_pool_client
        value: '{{ allowed_oauth_flows_user_pool_client }}'
      - name: allowed_oauth_scopes
        value:
          - '{{ allowed_oauth_scopes[0] }}'
      - name: callback_urls
        value:
          - '{{ callback_urls[0] }}'
      - name: default_redirect_uri
        value: '{{ default_redirect_uri }}'
      - name: logout_urls
        value:
          - '{{ logout_urls[0] }}'
      - name: supported_identity_providers
        value:
          - '{{ supported_identity_providers[0] }}'
      - name: analytics_configuration
        value:
          application_arn: '{{ application_arn }}'
          application_id: '{{ application_id }}'
          external_id: '{{ external_id }}'
          role_arn: '{{ role_arn }}'
          user_data_shared: '{{ user_data_shared }}'
      - name: prevent_user_existence_errors
        value: '{{ prevent_user_existence_errors }}'
      - name: enable_token_revocation
        value: '{{ enable_token_revocation }}'
      - name: enable_propagate_additional_user_context_data
        value: '{{ enable_propagate_additional_user_context_data }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>user_pool_client</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cognito.user_pool_clients
SET PatchDocument = string('{{ {
    "ClientName": client_name,
    "ExplicitAuthFlows": explicit_auth_flows,
    "ReadAttributes": read_attributes,
    "AuthSessionValidity": auth_session_validity,
    "RefreshTokenValidity": refresh_token_validity,
    "AccessTokenValidity": access_token_validity,
    "IdTokenValidity": id_token_validity,
    "TokenValidityUnits": token_validity_units,
    "RefreshTokenRotation": refresh_token_rotation,
    "WriteAttributes": write_attributes,
    "AllowedOAuthFlows": allowed_oauth_flows,
    "AllowedOAuthFlowsUserPoolClient": allowed_oauth_flows_user_pool_client,
    "AllowedOAuthScopes": allowed_oauth_scopes,
    "CallbackURLs": callback_urls,
    "DefaultRedirectURI": default_redirect_uri,
    "LogoutURLs": logout_urls,
    "SupportedIdentityProviders": supported_identity_providers,
    "AnalyticsConfiguration": analytics_configuration,
    "PreventUserExistenceErrors": prevent_user_existence_errors,
    "EnableTokenRevocation": enable_token_revocation,
    "EnablePropagateAdditionalUserContextData": enable_propagate_additional_user_context_data
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ user_pool_id }}|{{ client_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cognito.user_pool_clients
WHERE Identifier = '{{ user_pool_id }}|{{ client_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>user_pool_clients</code> resource, the following permissions are required:

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
cognito-idp:CreateUserPoolClient,
iam:PassRole,
iam:PutRolePolicy,
iam:CreateServiceLinkedRole
```

</TabItem>
<TabItem value="read">

```json
cognito-idp:DescribeUserPoolClient
```

</TabItem>
<TabItem value="update">

```json
cognito-idp:UpdateUserPoolClient,
iam:PassRole,
iam:PutRolePolicy
```

</TabItem>
<TabItem value="delete">

```json
cognito-idp:DeleteUserPoolClient,
iam:PutRolePolicy,
iam:DeleteRolePolicy
```

</TabItem>
<TabItem value="list">

```json
cognito-idp:ListUserPoolClients
```

</TabItem>
</Tabs>