---
title: distribution_tenants
hide_title: false
hide_table_of_contents: false
keywords:
  - distribution_tenants
  - cloudfront
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CodeBlock from '@theme/CodeBlock';
import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>distribution_tenant</code> resource or lists <code>distribution_tenants</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>distribution_tenants</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The distribution tenant.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudfront.distribution_tenants" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "distribution_id",
    "type": "string",
    "description": "The ID of the multi-tenant distribution."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the distribution tenant."
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "domain_results",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "domain",
        "type": "string",
        "description": "The specified domain."
      },
      {
        "name": "status",
        "type": "string",
        "description": "Whether the domain is active or inactive."
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A complex type that contains zero or more <code>Tag</code> elements.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "<details><summary>A string that contains <code>Tag</code> key.</summary>The string length should be between 1 and 128 characters. Valid characters include <code>a-z</code>, <code>A-Z</code>, <code>0-9</code>, space, and the special characters <code>_ - . : / = + @</code>.</details>"
      },
      {
        "name": "value",
        "type": "string",
        "description": "<details><summary>A string that contains an optional <code>Tag</code> value.</summary>The string length should be between 0 and 256 characters. Valid characters include <code>a-z</code>, <code>A-Z</code>, <code>0-9</code>, space, and the special characters <code>_ - . : / = + @</code>.</details>"
      }
    ]
  },
  {
    "name": "customizations",
    "type": "object",
    "description": "Customizations for the distribution tenant. For each distribution tenant, you can specify the geographic restrictions, and the Amazon Resource Names (ARNs) for the ACM certificate and WAF web ACL. These are specific values that you can override or disable from the multi-tenant distribution that was used to create the distribution tenant.",
    "children": [
      {
        "name": "web_acl",
        "type": "object",
        "description": "The WAF web ACL.",
        "children": [
          {
            "name": "action",
            "type": "string",
            "description": "The action for the WAF web ACL customization. You can specify <code>override</code> to specify a separate WAF web ACL for the distribution tenant. If you specify <code>disable</code>, the distribution tenant won't have WAF web ACL protections and won't inherit from the multi-tenant distribution."
          },
          {
            "name": "arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the WAF web ACL."
          }
        ]
      },
      {
        "name": "certificate",
        "type": "object",
        "description": "The ACMlong (ACM) certificate.",
        "children": [
          {
            "name": "arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the ACM certificate."
          }
        ]
      },
      {
        "name": "geo_restrictions",
        "type": "object",
        "description": "The geographic restrictions.",
        "children": [
          {
            "name": "restriction_type",
            "type": "string",
            "description": "<details><summary>The method that you want to use to restrict distribution of your content by country:</summary>+  <code>none</code>: No geographic restriction is enabled, meaning access to content is not restricted by client geo location.<br />+  <code>blacklist</code>: The <code>Location</code> elements specify the countries in which you don't want CloudFront to distribute your content.<br />+  <code>whitelist</code>: The <code>Location</code> elements specify the countries in which you want CloudFront to distribute your content.</details>"
          },
          {
            "name": "locations",
            "type": "array",
            "description": "The locations for geographic restrictions."
          }
        ]
      }
    ]
  },
  {
    "name": "parameters",
    "type": "array",
    "description": "A list of parameter values to add to the resource. A parameter is specified as a key-value pair. A valid parameter value must exist for any parameter that is marked as required in the multi-tenant distribution.",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": "The parameter name."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The parameter value."
      }
    ]
  },
  {
    "name": "connection_group_id",
    "type": "string",
    "description": "The ID of the connection group for the distribution tenant. If you don't specify a connection group, CloudFront uses the default connection group."
  },
  {
    "name": "created_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "last_modified_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "enabled",
    "type": "boolean",
    "description": "Indicates whether the distribution tenant is in an enabled state. If disabled, the distribution tenant won't serve traffic."
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "e_tag",
    "type": "string",
    "description": ""
  },
  {
    "name": "domains",
    "type": "array",
    "description": "The domains associated with the distribution tenant."
  },
  {
    "name": "managed_certificate_request",
    "type": "object",
    "description": "An object that represents the request for the Amazon CloudFront managed ACM certificate.",
    "children": [
      {
        "name": "validation_token_host",
        "type": "string",
        "description": "<details><summary>Specify how the HTTP validation token will be served when requesting the CloudFront managed ACM certificate.</summary>+  For <code>cloudfront</code>, CloudFront will automatically serve the validation token. Choose this mode if you can point the domain's DNS to CloudFront immediately.<br />+  For <code>self-hosted</code>, you serve the validation token from your existing infrastructure. Choose this mode when you need to maintain current traffic flow while your certificate is being issued. You can place the validation token at the well-known path on your existing web server, wait for ACM to validate and issue the certificate, and then update your DNS to point to CloudFront.</details>"
      },
      {
        "name": "primary_domain_name",
        "type": "string",
        "description": "The primary domain name associated with the CloudFront managed ACM certificate."
      },
      {
        "name": "certificate_transparency_logging_preference",
        "type": "string",
        "description": "You can opt out of certificate transparency logging by specifying the <code>disabled</code> option. Opt in by specifying <code>enabled</code>. For more information, see <a href=\"https://docs.aws.amazon.com/acm/latest/userguide/acm-concepts.html#concept-transparency\">Certificate Transparency Logging</a> in the <i>User Guide</i>."
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html"><code>AWS::CloudFront::DistributionTenant</code></a>.

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
    <td><code>distribution_tenants</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DistributionId, Name, Domains, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>distribution_tenants</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>distribution_tenants</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>distribution_tenants_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>distribution_tenants</code></td>
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

Gets all properties from an individual <code>distribution_tenant</code>.
```sql
SELECT
  region,
  id,
  distribution_id,
  name,
  arn,
  domain_results,
  tags,
  customizations,
  parameters,
  connection_group_id,
  created_time,
  last_modified_time,
  enabled,
  status,
  e_tag,
  domains,
  managed_certificate_request
FROM awscc.cloudfront.distribution_tenants
WHERE
  region = 'us-east-1' AND
  Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>distribution_tenants</code> in a region.
```sql
SELECT
  region,
  id
FROM awscc.cloudfront.distribution_tenants_list_only
WHERE
  region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>distribution_tenant</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cloudfront.distribution_tenants (
  DistributionId,
  Name,
  Domains,
  region
)
SELECT
  '{{ distribution_id }}',
  '{{ name }}',
  '{{ domains }}',
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
INSERT INTO awscc.cloudfront.distribution_tenants (
  DistributionId,
  Name,
  Tags,
  Customizations,
  Parameters,
  ConnectionGroupId,
  Enabled,
  Domains,
  ManagedCertificateRequest,
  region
)
SELECT
  '{{ distribution_id }}',
  '{{ name }}',
  '{{ tags }}',
  '{{ customizations }}',
  '{{ parameters }}',
  '{{ connection_group_id }}',
  '{{ enabled }}',
  '{{ domains }}',
  '{{ managed_certificate_request }}',
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

<CodeBlock language="yaml">{`version: 1
name: stack name
description: stack description
providers:
  - aws
globals:
  - name: region
    value: '{{ vars.AWS_REGION }}'
resources:
  - name: distribution_tenant
    props:
      - name: distribution_id
        value: '{{ distribution_id }}'
      - name: name
        value: '{{ name }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: customizations
        value:
          web_acl:
            action: '{{ action }}'
            arn: '{{ arn }}'
          certificate:
            arn: '{{ arn }}'
          geo_restrictions:
            restriction_type: '{{ restriction_type }}'
            locations:
              - '{{ locations[0] }}'
      - name: parameters
        value:
          - name: '{{ name }}'
            value: '{{ value }}'
      - name: connection_group_id
        value: '{{ connection_group_id }}'
      - name: enabled
        value: '{{ enabled }}'
      - name: domains
        value:
          - '{{ domains[0] }}'
      - name: managed_certificate_request
        value:
          validation_token_host: '{{ validation_token_host }}'
          primary_domain_name: '{{ primary_domain_name }}'
          certificate_transparency_logging_preference: '{{ certificate_transparency_logging_preference }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>distribution_tenant</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cloudfront.distribution_tenants
SET PatchDocument = string('{{ {
    "DistributionId": distribution_id,
    "Tags": tags,
    "Customizations": customizations,
    "Parameters": parameters,
    "ConnectionGroupId": connection_group_id,
    "Enabled": enabled,
    "Domains": domains,
    "ManagedCertificateRequest": managed_certificate_request
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ id }}'
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
DELETE FROM awscc.cloudfront.distribution_tenants
WHERE
  Identifier = '{{ id }}' AND
  region = 'us-east-1'
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

To operate on the <code>distribution_tenants</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

```json
acm:DescribeCertificate,
acm:RequestCertificate,
cloudfront:CreateDistributionTenant,
cloudfront:GetDistributionTenant,
cloudfront:GetManagedCertificateDetails,
cloudfront:TagResource,
cloudfront:VerifyDnsConfiguration,
wafv2:GetWebACL
```

</TabItem>
<TabItem value="delete">

```json
cloudfront:DeleteDistributionTenant,
cloudfront:UpdateDistributionTenant,
cloudfront:GetDistributionTenant,
wafv2:GetWebACL
```

</TabItem>
<TabItem value="list">

```json
cloudfront:ListDistributionTenants,
cloudfront:ListTagsForResource
```

</TabItem>
<TabItem value="read">

```json
cloudfront:GetDistributionTenant,
cloudfront:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
acm:DescribeCertificate,
acm:RequestCertificate,
cloudfront:GetDistributionTenant,
cloudfront:GetManagedCertificateDetails,
cloudfront:UpdateDistributionTenant,
cloudfront:ListTagsForResource,
cloudfront:TagResource,
cloudfront:UntagResource,
cloudfront:VerifyDnsConfiguration,
wafv2:GetWebACL
```

</TabItem>
</Tabs>