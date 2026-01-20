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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypool.html"><code>AWS::Cognito::IdentityPool</code></a>.

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
    <td><CopyableCode code="AllowUnauthenticatedIdentities, region" /></td>
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
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```

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
'{{ AllowUnauthenticatedIdentities }}',
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
 '{{ PushSync }}',
 '{{ CognitoIdentityProviders }}',
 '{{ DeveloperProviderName }}',
 '{{ CognitoStreams }}',
 '{{ SupportedLoginProviders }}',
 '{{ CognitoEvents }}',
 '{{ IdentityPoolName }}',
 '{{ AllowUnauthenticatedIdentities }}',
 '{{ SamlProviderARNs }}',
 '{{ OpenIdConnectProviderARNs }}',
 '{{ AllowClassicFlow }}',
 '{{ IdentityPoolTags }}',
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
      - name: PushSync
        value:
          ApplicationArns:
            - '{{ ApplicationArns[0] }}'
          RoleArn: '{{ RoleArn }}'
      - name: CognitoIdentityProviders
        value:
          - ServerSideTokenCheck: '{{ ServerSideTokenCheck }}'
            ProviderName: '{{ ProviderName }}'
            ClientId: '{{ ClientId }}'
      - name: DeveloperProviderName
        value: '{{ DeveloperProviderName }}'
      - name: CognitoStreams
        value:
          StreamingStatus: '{{ StreamingStatus }}'
          StreamName: '{{ StreamName }}'
          RoleArn: '{{ RoleArn }}'
      - name: SupportedLoginProviders
        value: {}
      - name: CognitoEvents
        value: {}
      - name: IdentityPoolName
        value: '{{ IdentityPoolName }}'
      - name: AllowUnauthenticatedIdentities
        value: '{{ AllowUnauthenticatedIdentities }}'
      - name: SamlProviderARNs
        value:
          - '{{ SamlProviderARNs[0] }}'
      - name: OpenIdConnectProviderARNs
        value:
          - '{{ OpenIdConnectProviderARNs[0] }}'
      - name: AllowClassicFlow
        value: '{{ AllowClassicFlow }}'
      - name: IdentityPoolTags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cognito.identity_pools
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>identity_pools</code> resource, the following permissions are required:

### Create
```json
cognito-identity:CreateIdentityPool,
cognito-sync:SetIdentityPoolConfiguration,
cognito-sync:SetCognitoEvents,
cognito-identity:TagResource,
iam:PassRole
```

### Read
```json
cognito-identity:DescribeIdentityPool
```

### Update
```json
cognito-identity:UpdateIdentityPool,
cognito-identity:DescribeIdentityPool,
cognito-sync:SetIdentityPoolConfiguration,
cognito-sync:SetCognitoEvents,
cognito-identity:TagResource,
cognito-identity:UntagResource,
iam:PassRole
```

### Delete
```json
cognito-identity:DeleteIdentityPool
```

### List
```json
cognito-identity:ListIdentityPools
```
