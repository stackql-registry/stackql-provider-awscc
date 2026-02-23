---
title: identity_provider_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_provider_configs
  - eks
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

Creates, updates, deletes or gets an <code>identity_provider_config</code> resource or lists <code>identity_provider_configs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>identity_provider_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An object representing an Amazon EKS IdentityProviderConfig.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.eks.identity_provider_configs" /></td></tr>
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
    "name": "cluster_name",
    "type": "string",
    "description": "The name of the identity provider configuration."
  },
  {
    "name": "type",
    "type": "string",
    "description": "The type of the identity provider configuration."
  },
  {
    "name": "identity_provider_config_name",
    "type": "string",
    "description": "The name of the OIDC provider configuration."
  },
  {
    "name": "oidc",
    "type": "object",
    "description": "An object representing an OpenID Connect (OIDC) configuration.",
    "children": [
      {
        "name": "client_id",
        "type": "string",
        "description": "This is also known as audience. The ID for the client application that makes authentication requests to the OpenID identity provider."
      },
      {
        "name": "groups_claim",
        "type": "string",
        "description": "The JWT claim that the provider uses to return your groups."
      },
      {
        "name": "groups_prefix",
        "type": "string",
        "description": "The prefix that is prepended to group claims to prevent clashes with existing names (such as system: groups)."
      },
      {
        "name": "issuer_url",
        "type": "string",
        "description": "The URL of the OpenID identity provider that allows the API server to discover public signing keys for verifying tokens."
      },
      {
        "name": "required_claims",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "key",
            "type": "string",
            "description": "The key of the requiredClaims."
          },
          {
            "name": "value",
            "type": "string",
            "description": "The value for the requiredClaims."
          }
        ]
      },
      {
        "name": "username_claim",
        "type": "string",
        "description": "The JSON Web Token (JWT) claim to use as the username. The default is sub, which is expected to be a unique identifier of the end user. You can choose other claims, such as email or name, depending on the OpenID identity provider. Claims other than email are prefixed with the issuer URL to prevent naming clashes with other plug-ins."
      },
      {
        "name": "username_prefix",
        "type": "string",
        "description": "The prefix that is prepended to username claims to prevent clashes with existing names. If you do not provide this field, and username is a value other than email, the prefix defaults to issuerurl#. You can use the value - to disable all prefixing."
      }
    ]
  },
  {
    "name": "tags",
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
    "name": "identity_provider_config_arn",
    "type": "string",
    "description": "The ARN of the configuration."
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
    "name": "cluster_name",
    "type": "string",
    "description": "The name of the identity provider configuration."
  },
  {
    "name": "type",
    "type": "string",
    "description": "The type of the identity provider configuration."
  },
  {
    "name": "identity_provider_config_name",
    "type": "string",
    "description": "The name of the OIDC provider configuration."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-identityproviderconfig.html"><code>AWS::EKS::IdentityProviderConfig</code></a>.

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
    <td><code>identity_provider_configs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Type, ClusterName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>identity_provider_configs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>identity_provider_configs</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>identity_provider_configs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>identity_provider_configs</code></td>
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

Gets all properties from an individual <code>identity_provider_config</code>.
```sql
SELECT
region,
cluster_name,
type,
identity_provider_config_name,
oidc,
tags,
identity_provider_config_arn
FROM awscc.eks.identity_provider_configs
WHERE region = 'us-east-1' AND Identifier = '{{ identity_provider_config_name }}|{{ cluster_name }}|{{ type }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>identity_provider_configs</code> in a region.
```sql
SELECT
region,
identity_provider_config_name,
cluster_name,
type
FROM awscc.eks.identity_provider_configs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>identity_provider_config</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.eks.identity_provider_configs (
 ClusterName,
 Type,
 region
)
SELECT
'{{ cluster_name }}',
 '{{ type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.eks.identity_provider_configs (
 ClusterName,
 Type,
 IdentityProviderConfigName,
 Oidc,
 Tags,
 region
)
SELECT
 '{{ cluster_name }}',
 '{{ type }}',
 '{{ identity_provider_config_name }}',
 '{{ oidc }}',
 '{{ tags }}',
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
  - name: identity_provider_config
    props:
      - name: cluster_name
        value: '{{ cluster_name }}'
      - name: type
        value: '{{ type }}'
      - name: identity_provider_config_name
        value: '{{ identity_provider_config_name }}'
      - name: oidc
        value:
          client_id: '{{ client_id }}'
          groups_claim: '{{ groups_claim }}'
          groups_prefix: '{{ groups_prefix }}'
          issuer_url: '{{ issuer_url }}'
          required_claims:
            - key: '{{ key }}'
              value: '{{ value }}'
          username_claim: '{{ username_claim }}'
          username_prefix: '{{ username_prefix }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>identity_provider_config</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.eks.identity_provider_configs
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ identity_provider_config_name }}|{{ cluster_name }}|{{ type }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.eks.identity_provider_configs
WHERE Identifier = '{{ identity_provider_config_name }}|{{ cluster_name }}|{{ type }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>identity_provider_configs</code> resource, the following permissions are required:

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
eks:DescribeUpdate,
eks:AssociateIdentityProviderConfig,
eks:DescribeIdentityProviderConfig,
eks:TagResource
```

</TabItem>
<TabItem value="read">

```json
eks:DescribeIdentityProviderConfig
```

</TabItem>
<TabItem value="update">

```json
eks:DescribeIdentityProviderConfig,
eks:TagResource,
eks:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
eks:DisassociateIdentityProviderConfig,
eks:DescribeIdentityProviderConfig
```

</TabItem>
<TabItem value="list">

```json
eks:ListIdentityProviderConfigs
```

</TabItem>
</Tabs>