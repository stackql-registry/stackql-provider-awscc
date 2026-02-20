---
title: verified_access_trust_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - verified_access_trust_providers
  - ec2
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

Creates, updates, deletes or gets a <code>verified_access_trust_provider</code> resource or lists <code>verified_access_trust_providers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>verified_access_trust_providers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::EC2::VerifiedAccessTrustProvider type describes a verified access trust provider</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.verified_access_trust_providers" /></td></tr>
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
    "name": "trust_provider_type",
    "type": "string",
    "description": "Type of trust provider. Possible values: user&#124;device"
  },
  {
    "name": "device_trust_provider_type",
    "type": "string",
    "description": "The type of device-based trust provider. Possible values: jamf&#124;crowdstrike"
  },
  {
    "name": "user_trust_provider_type",
    "type": "string",
    "description": "The type of device-based trust provider. Possible values: oidc&#124;iam-identity-center"
  },
  {
    "name": "oidc_options",
    "type": "object",
    "description": "The OpenID Connect details for an oidc -type, user-identity based trust provider.",
    "children": [
      {
        "name": "issuer",
        "type": "string",
        "description": "The OIDC issuer."
      },
      {
        "name": "authorization_endpoint",
        "type": "string",
        "description": "The OIDC authorization endpoint."
      },
      {
        "name": "token_endpoint",
        "type": "string",
        "description": "The OIDC token endpoint."
      },
      {
        "name": "user_info_endpoint",
        "type": "string",
        "description": "The OIDC user info endpoint."
      },
      {
        "name": "client_id",
        "type": "string",
        "description": "The client identifier."
      },
      {
        "name": "client_secret",
        "type": "string",
        "description": "The client secret."
      },
      {
        "name": "scope",
        "type": "string",
        "description": "OpenID Connect (OIDC) scopes are used by an application during authentication to authorize access to details of a user. Each scope returns a specific set of user attributes."
      }
    ]
  },
  {
    "name": "device_options",
    "type": "object",
    "description": "The options for device identity based trust providers.",
    "children": [
      {
        "name": "tenant_id",
        "type": "string",
        "description": "The ID of the tenant application with the device-identity provider."
      },
      {
        "name": "public_signing_key_url",
        "type": "string",
        "description": "URL Verified Access will use to verify authenticity of the device tokens."
      }
    ]
  },
  {
    "name": "policy_reference_name",
    "type": "string",
    "description": "The identifier to be used when working with policy rules."
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": "The creation time."
  },
  {
    "name": "last_updated_time",
    "type": "string",
    "description": "The last updated time."
  },
  {
    "name": "verified_access_trust_provider_id",
    "type": "string",
    "description": "The ID of the Amazon Web Services Verified Access trust provider."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description for the Amazon Web Services Verified Access trust provider."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The tag key."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The tag value."
      }
    ]
  },
  {
    "name": "sse_specification",
    "type": "object",
    "description": "The configuration options for customer provided KMS encryption.",
    "children": [
      {
        "name": "kms_key_arn",
        "type": "string",
        "description": "KMS Key Arn used to encrypt the group policy"
      },
      {
        "name": "customer_managed_key_enabled",
        "type": "boolean",
        "description": "Whether to encrypt the policy with the provided key or disable encryption"
      }
    ]
  },
  {
    "name": "native_application_oidc_options",
    "type": "object",
    "description": "The OpenID Connect details for an oidc -type, user-identity based trust provider for L4.",
    "children": [
      {
        "name": "issuer",
        "type": "string",
        "description": "The OIDC issuer."
      },
      {
        "name": "authorization_endpoint",
        "type": "string",
        "description": "The OIDC authorization endpoint."
      },
      {
        "name": "token_endpoint",
        "type": "string",
        "description": "The OIDC token endpoint."
      },
      {
        "name": "user_info_endpoint",
        "type": "string",
        "description": "The OIDC user info endpoint."
      },
      {
        "name": "client_id",
        "type": "string",
        "description": "The client identifier."
      },
      {
        "name": "client_secret",
        "type": "string",
        "description": "The client secret."
      },
      {
        "name": "scope",
        "type": "string",
        "description": "OpenID Connect (OIDC) scopes are used by an application during authentication to authorize access to details of a user. Each scope returns a specific set of user attributes."
      },
      {
        "name": "public_signing_key_endpoint",
        "type": "string",
        "description": "The public signing key for endpoint"
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
    "name": "verified_access_trust_provider_id",
    "type": "string",
    "description": "The ID of the Amazon Web Services Verified Access trust provider."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html"><code>AWS::EC2::VerifiedAccessTrustProvider</code></a>.

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
    <td><code>verified_access_trust_providers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="TrustProviderType, PolicyReferenceName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>verified_access_trust_providers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>verified_access_trust_providers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>verified_access_trust_providers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>verified_access_trust_providers</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>verified_access_trust_provider</code>.
```sql
SELECT
region,
trust_provider_type,
device_trust_provider_type,
user_trust_provider_type,
oidc_options,
device_options,
policy_reference_name,
creation_time,
last_updated_time,
verified_access_trust_provider_id,
description,
tags,
sse_specification,
native_application_oidc_options
FROM awscc.ec2.verified_access_trust_providers
WHERE region = 'us-east-1' AND data__Identifier = '<VerifiedAccessTrustProviderId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>verified_access_trust_providers</code> in a region.
```sql
SELECT
region,
verified_access_trust_provider_id
FROM awscc.ec2.verified_access_trust_providers_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>verified_access_trust_provider</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.verified_access_trust_providers (
 TrustProviderType,
 PolicyReferenceName,
 region
)
SELECT 
'{{ TrustProviderType }}',
 '{{ PolicyReferenceName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.verified_access_trust_providers (
 TrustProviderType,
 DeviceTrustProviderType,
 UserTrustProviderType,
 OidcOptions,
 DeviceOptions,
 PolicyReferenceName,
 Description,
 Tags,
 SseSpecification,
 NativeApplicationOidcOptions,
 region
)
SELECT 
 '{{ TrustProviderType }}',
 '{{ DeviceTrustProviderType }}',
 '{{ UserTrustProviderType }}',
 '{{ OidcOptions }}',
 '{{ DeviceOptions }}',
 '{{ PolicyReferenceName }}',
 '{{ Description }}',
 '{{ Tags }}',
 '{{ SseSpecification }}',
 '{{ NativeApplicationOidcOptions }}',
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
  - name: verified_access_trust_provider
    props:
      - name: TrustProviderType
        value: '{{ TrustProviderType }}'
      - name: DeviceTrustProviderType
        value: '{{ DeviceTrustProviderType }}'
      - name: UserTrustProviderType
        value: '{{ UserTrustProviderType }}'
      - name: OidcOptions
        value:
          Issuer: '{{ Issuer }}'
          AuthorizationEndpoint: '{{ AuthorizationEndpoint }}'
          TokenEndpoint: '{{ TokenEndpoint }}'
          UserInfoEndpoint: '{{ UserInfoEndpoint }}'
          ClientId: '{{ ClientId }}'
          ClientSecret: '{{ ClientSecret }}'
          Scope: '{{ Scope }}'
      - name: DeviceOptions
        value:
          TenantId: '{{ TenantId }}'
          PublicSigningKeyUrl: '{{ PublicSigningKeyUrl }}'
      - name: PolicyReferenceName
        value: '{{ PolicyReferenceName }}'
      - name: Description
        value: '{{ Description }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: SseSpecification
        value:
          KmsKeyArn: '{{ KmsKeyArn }}'
          CustomerManagedKeyEnabled: '{{ CustomerManagedKeyEnabled }}'
      - name: NativeApplicationOidcOptions
        value:
          Issuer: '{{ Issuer }}'
          AuthorizationEndpoint: '{{ AuthorizationEndpoint }}'
          TokenEndpoint: '{{ TokenEndpoint }}'
          UserInfoEndpoint: '{{ UserInfoEndpoint }}'
          ClientId: '{{ ClientId }}'
          ClientSecret: '{{ ClientSecret }}'
          Scope: '{{ Scope }}'
          PublicSigningKeyEndpoint: '{{ PublicSigningKeyEndpoint }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.ec2.verified_access_trust_providers
SET data__PatchDocument = string('{{ {
    "OidcOptions": oidc_options,
    "Description": description,
    "Tags": tags,
    "SseSpecification": sse_specification,
    "NativeApplicationOidcOptions": native_application_oidc_options
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<VerifiedAccessTrustProviderId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.verified_access_trust_providers
WHERE data__Identifier = '<VerifiedAccessTrustProviderId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>verified_access_trust_providers</code> resource, the following permissions are required:

### Create
```json
ec2:CreateVerifiedAccessTrustProvider,
ec2:DescribeVerifiedAccessTrustProviders,
ec2:CreateTags,
ec2:DescribeTags,
sso:GetSharedSsoConfiguration,
kms:DescribeKey,
kms:RetireGrant,
kms:CreateGrant,
kms:GenerateDataKey,
kms:Decrypt
```

### Read
```json
ec2:DescribeVerifiedAccessTrustProviders,
ec2:DescribeTags,
kms:DescribeKey,
kms:GenerateDataKey,
kms:Decrypt
```

### Update
```json
ec2:ModifyVerifiedAccessTrustProvider,
ec2:DescribeVerifiedAccessTrustProviders,
ec2:DescribeTags,
ec2:DeleteTags,
ec2:CreateTags,
kms:DescribeKey,
kms:RetireGrant,
kms:CreateGrant,
kms:GenerateDataKey,
kms:Decrypt
```

### Delete
```json
ec2:DeleteVerifiedAccessTrustProvider,
ec2:DeleteTags,
ec2:DescribeVerifiedAccessTrustProviders,
ec2:DescribeTags,
kms:DescribeKey,
kms:RetireGrant,
kms:CreateGrant,
kms:GenerateDataKey,
kms:Decrypt
```

### List
```json
ec2:DescribeVerifiedAccessTrustProviders,
ec2:DescribeTags,
kms:DescribeKey,
kms:GenerateDataKey,
kms:Decrypt
```
