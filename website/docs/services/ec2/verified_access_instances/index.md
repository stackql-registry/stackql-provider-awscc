---
title: verified_access_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - verified_access_instances
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

Creates, updates, deletes or gets a <code>verified_access_instance</code> resource or lists <code>verified_access_instances</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>verified_access_instances</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::EC2::VerifiedAccessInstance resource creates an AWS EC2 Verified Access Instance.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.verified_access_instances" /></td></tr>
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
    "name": "verified_access_instance_id",
    "type": "string",
    "description": "The ID of the AWS Verified Access instance."
  },
  {
    "name": "verified_access_trust_providers",
    "type": "array",
    "description": "AWS Verified Access trust providers.",
    "children": [
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
      }
    ]
  },
  {
    "name": "verified_access_trust_provider_ids",
    "type": "array",
    "description": "The IDs of the AWS Verified Access trust providers."
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": "Time this Verified Access Instance was created."
  },
  {
    "name": "last_updated_time",
    "type": "string",
    "description": "Time this Verified Access Instance was last updated."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description for the AWS Verified Access instance."
  },
  {
    "name": "logging_configurations",
    "type": "object",
    "description": "The configuration options for AWS Verified Access instances.",
    "children": [
      {
        "name": "log_version",
        "type": "string",
        "description": "Select log version for Verified Access logs."
      },
      {
        "name": "include_trust_context",
        "type": "boolean",
        "description": "Include claims from trust providers in Verified Access logs."
      },
      {
        "name": "cloud_watch_logs",
        "type": "object",
        "description": "Sends Verified Access logs to CloudWatch Logs.",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": "Indicates whether logging is enabled."
          },
          {
            "name": "log_group",
            "type": "string",
            "description": "The ID of the CloudWatch Logs log group."
          }
        ]
      },
      {
        "name": "kinesis_data_firehose",
        "type": "object",
        "description": "Sends Verified Access logs to Kinesis.",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": "Indicates whether logging is enabled."
          },
          {
            "name": "delivery_stream",
            "type": "string",
            "description": "The ID of the delivery stream."
          }
        ]
      },
      {
        "name": "s3",
        "type": "object",
        "description": "Sends Verified Access logs to Amazon S3.",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": "Indicates whether logging is enabled."
          },
          {
            "name": "bucket_name",
            "type": "string",
            "description": "The bucket name."
          },
          {
            "name": "bucket_owner",
            "type": "string",
            "description": "The ID of the AWS account that owns the Amazon S3 bucket."
          },
          {
            "name": "prefix",
            "type": "string",
            "description": "The bucket prefix."
          }
        ]
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
    "name": "fips_enabled",
    "type": "boolean",
    "description": "Indicates whether FIPS is enabled"
  },
  {
    "name": "cidr_endpoints_custom_sub_domain",
    "type": "string",
    "description": "Introduce CidrEndpointsCustomSubDomain property to represent the domain (say, ava.my-company.com)"
  },
  {
    "name": "cidr_endpoints_custom_sub_domain_name_servers",
    "type": "array",
    "description": "Property to represent the name servers assoicated with the domain that AVA manages (say, &#91;'ns1.amazonaws.com', 'ns2.amazonaws.com', 'ns3.amazonaws.com', 'ns4.amazonaws.com'&#93;)."
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
    "name": "verified_access_instance_id",
    "type": "string",
    "description": "The ID of the AWS Verified Access instance."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html"><code>AWS::EC2::VerifiedAccessInstance</code></a>.

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
    <td><code>verified_access_instances</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>verified_access_instances</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>verified_access_instances</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>verified_access_instances_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>verified_access_instances</code></td>
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

Gets all properties from an individual <code>verified_access_instance</code>.
```sql
SELECT
region,
verified_access_instance_id,
verified_access_trust_providers,
verified_access_trust_provider_ids,
creation_time,
last_updated_time,
description,
logging_configurations,
tags,
fips_enabled,
cidr_endpoints_custom_sub_domain,
cidr_endpoints_custom_sub_domain_name_servers
FROM awscc.ec2.verified_access_instances
WHERE region = 'us-east-1' AND Identifier = '<VerifiedAccessInstanceId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>verified_access_instances</code> in a region.
```sql
SELECT
region,
verified_access_instance_id
FROM awscc.ec2.verified_access_instances_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>verified_access_instance</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.verified_access_instances (
 VerifiedAccessTrustProviders,
 VerifiedAccessTrustProviderIds,
 Description,
 LoggingConfigurations,
 Tags,
 FipsEnabled,
 CidrEndpointsCustomSubDomain,
 region
)
SELECT 
'{{ VerifiedAccessTrustProviders }}',
 '{{ VerifiedAccessTrustProviderIds }}',
 '{{ Description }}',
 '{{ LoggingConfigurations }}',
 '{{ Tags }}',
 '{{ FipsEnabled }}',
 '{{ CidrEndpointsCustomSubDomain }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.verified_access_instances (
 VerifiedAccessTrustProviders,
 VerifiedAccessTrustProviderIds,
 Description,
 LoggingConfigurations,
 Tags,
 FipsEnabled,
 CidrEndpointsCustomSubDomain,
 region
)
SELECT 
 '{{ VerifiedAccessTrustProviders }}',
 '{{ VerifiedAccessTrustProviderIds }}',
 '{{ Description }}',
 '{{ LoggingConfigurations }}',
 '{{ Tags }}',
 '{{ FipsEnabled }}',
 '{{ CidrEndpointsCustomSubDomain }}',
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
  - name: verified_access_instance
    props:
      - name: VerifiedAccessTrustProviders
        value:
          - TrustProviderType: '{{ TrustProviderType }}'
            DeviceTrustProviderType: '{{ DeviceTrustProviderType }}'
            UserTrustProviderType: '{{ UserTrustProviderType }}'
            OidcOptions:
              Issuer: '{{ Issuer }}'
              AuthorizationEndpoint: '{{ AuthorizationEndpoint }}'
              TokenEndpoint: '{{ TokenEndpoint }}'
              UserInfoEndpoint: '{{ UserInfoEndpoint }}'
              ClientId: '{{ ClientId }}'
              ClientSecret: '{{ ClientSecret }}'
              Scope: '{{ Scope }}'
            DeviceOptions:
              TenantId: '{{ TenantId }}'
              PublicSigningKeyUrl: '{{ PublicSigningKeyUrl }}'
            PolicyReferenceName: '{{ PolicyReferenceName }}'
            Description: '{{ Description }}'
            Tags:
              - Key: '{{ Key }}'
                Value: '{{ Value }}'
            SseSpecification:
              KmsKeyArn: '{{ KmsKeyArn }}'
              CustomerManagedKeyEnabled: '{{ CustomerManagedKeyEnabled }}'
            NativeApplicationOidcOptions:
              Issuer: '{{ Issuer }}'
              AuthorizationEndpoint: '{{ AuthorizationEndpoint }}'
              TokenEndpoint: '{{ TokenEndpoint }}'
              UserInfoEndpoint: '{{ UserInfoEndpoint }}'
              ClientId: '{{ ClientId }}'
              ClientSecret: '{{ ClientSecret }}'
              Scope: '{{ Scope }}'
              PublicSigningKeyEndpoint: '{{ PublicSigningKeyEndpoint }}'
      - name: VerifiedAccessTrustProviderIds
        value:
          - '{{ VerifiedAccessTrustProviderIds[0] }}'
      - name: Description
        value: '{{ Description }}'
      - name: LoggingConfigurations
        value:
          LogVersion: '{{ LogVersion }}'
          IncludeTrustContext: '{{ IncludeTrustContext }}'
          CloudWatchLogs:
            Enabled: '{{ Enabled }}'
            LogGroup: '{{ LogGroup }}'
          KinesisDataFirehose:
            Enabled: '{{ Enabled }}'
            DeliveryStream: '{{ DeliveryStream }}'
          S3:
            Enabled: '{{ Enabled }}'
            BucketName: '{{ BucketName }}'
            BucketOwner: '{{ BucketOwner }}'
            Prefix: '{{ Prefix }}'
      - name: Tags
        value:
          - null
      - name: FipsEnabled
        value: '{{ FipsEnabled }}'
      - name: CidrEndpointsCustomSubDomain
        value: '{{ CidrEndpointsCustomSubDomain }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>verified_access_instance</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.verified_access_instances
SET PatchDocument = string('{{ {
    "VerifiedAccessTrustProviders": verified_access_trust_providers,
    "VerifiedAccessTrustProviderIds": verified_access_trust_provider_ids,
    "Description": description,
    "LoggingConfigurations": logging_configurations,
    "Tags": tags,
    "FipsEnabled": fips_enabled,
    "CidrEndpointsCustomSubDomain": cidr_endpoints_custom_sub_domain
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<VerifiedAccessInstanceId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.verified_access_instances
WHERE Identifier = '<VerifiedAccessInstanceId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>verified_access_instances</code> resource, the following permissions are required:

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
ec2:CreateVerifiedAccessInstance,
ec2:AttachVerifiedAccessTrustProvider,
ec2:ModifyVerifiedAccessInstanceLoggingConfiguration,
ec2:DescribeVerifiedAccessInstances,
ec2:DescribeVerifiedAccessInstanceLoggingConfigurations,
ec2:DetachVerifiedAccessTrustProvider,
ec2:DeleteVerifiedAccessInstance,
ec2:CreateTags,
ec2:DescribeTags,
logs:CreateLogDelivery,
logs:GetLogDelivery,
logs:UpdateLogDelivery,
logs:PutDestination,
logs:DeleteLogDelivery,
logs:ListLogDeliveries,
logs:PutLogEvents,
logs:DescribeLogStreams,
s3:listBuckets,
s3:PutObject,
s3:GetBucketPolicy,
s3:PutBucketPolicy,
logs:DescribeLogGroups,
logs:PutResourcePolicy,
firehose:TagDeliveryStream,
logs:DescribeResourcePolicies,
iam:CreateServiceLinkedRole,
verified-access:AllowVerifiedAccess
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeVerifiedAccessInstances,
ec2:DescribeVerifiedAccessInstanceLoggingConfigurations,
ec2:DescribeTags,
logs:GetLogDelivery,
logs:ListLogDeliveries
```

</TabItem>
<TabItem value="update">

```json
ec2:ModifyVerifiedAccessInstance,
ec2:ModifyVerifiedAccessInstanceLoggingConfiguration,
ec2:DescribeVerifiedAccessInstances,
ec2:DescribeVerifiedAccessInstanceLoggingConfigurations,
ec2:DescribeTags,
ec2:AttachVerifiedAccessTrustProvider,
ec2:DetachVerifiedAccessTrustProvider,
ec2:DeleteTags,
ec2:CreateTags,
ec2:DescribeTags,
logs:CreateLogDelivery,
logs:GetLogDelivery,
logs:ListLogDeliveries,
logs:UpdateLogDelivery,
logs:DeleteLogDelivery,
logs:PutDestination,
logs:PutLogEvents,
logs:DescribeLogStreams,
s3:listBuckets,
s3:PutObject,
s3:GetBucketPolicy,
s3:PutBucketPolicy,
logs:DescribeLogGroups,
logs:PutResourcePolicy,
firehose:TagDeliveryStream,
iam:CreateServiceLinkedRole,
logs:DescribeResourcePolicies
```

</TabItem>
<TabItem value="delete">

```json
ec2:DeleteVerifiedAccessInstance,
ec2:DeleteTags,
ec2:DescribeVerifiedAccessInstances,
ec2:DescribeVerifiedAccessInstanceLoggingConfigurations,
ec2:DetachVerifiedAccessTrustProvider,
ec2:GetVerifiedAccessGroupPolicy,
ec2:DescribeTags,
logs:ListLogDeliveries,
logs:GetLogDelivery,
logs:DeleteLogDelivery
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeVerifiedAccessInstances,
ec2:DescribeTags,
logs:ListLogDeliveries,
logs:GetLogDelivery
```

</TabItem>
</Tabs>