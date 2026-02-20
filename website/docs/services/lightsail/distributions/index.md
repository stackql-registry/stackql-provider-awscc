---
title: distributions
hide_title: false
hide_table_of_contents: false
keywords:
  - distributions
  - lightsail
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

Creates, updates, deletes or gets a <code>distribution</code> resource or lists <code>distributions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>distributions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Lightsail::Distribution</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lightsail.distributions" /></td></tr>
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
    "name": "distribution_name",
    "type": "string",
    "description": "The name for the distribution."
  },
  {
    "name": "distribution_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "bundle_id",
    "type": "string",
    "description": "The bundle ID to use for the distribution."
  },
  {
    "name": "ip_address_type",
    "type": "string",
    "description": "The IP address type for the distribution."
  },
  {
    "name": "cache_behaviors",
    "type": "array",
    "description": "An array of objects that describe the per-path cache behavior for the distribution.",
    "children": [
      {
        "name": "behavior",
        "type": "string",
        "description": "The cache behavior for the specified path."
      },
      {
        "name": "path",
        "type": "string",
        "description": "The path to a directory or file to cached, or not cache. Use an asterisk symbol to specify wildcard directories (path/to/assets/&#42;), and file types (&#42;.html, &#42;jpg, &#42;js). Directories and file paths are case-sensitive."
      }
    ]
  },
  {
    "name": "cache_behavior_settings",
    "type": "object",
    "description": "An object that describes the cache behavior settings for the distribution.",
    "children": [
      {
        "name": "allowed_ht_tp_methods",
        "type": "string",
        "description": "The HTTP methods that are processed and forwarded to the distribution's origin."
      },
      {
        "name": "cached_ht_tp_methods",
        "type": "string",
        "description": "The HTTP method responses that are cached by your distribution."
      },
      {
        "name": "default_ttl",
        "type": "integer",
        "description": "The default amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the content has been updated."
      },
      {
        "name": "maximum_ttl",
        "type": "integer",
        "description": "The maximum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated."
      },
      {
        "name": "minimum_ttl",
        "type": "integer",
        "description": "The minimum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated."
      },
      {
        "name": "forwarded_cookies",
        "type": "object",
        "description": "An object that describes the cookies that are forwarded to the origin. Your content is cached based on the cookies that are forwarded.",
        "children": [
          {
            "name": "cookies_allow_list",
            "type": "array",
            "description": "The specific cookies to forward to your distribution's origin."
          },
          {
            "name": "option",
            "type": "string",
            "description": "Specifies which cookies to forward to the distribution's origin for a cache behavior: all, none, or allow-list to forward only the cookies specified in the cookiesAllowList parameter."
          }
        ]
      },
      {
        "name": "forwarded_headers",
        "type": "object",
        "description": "An object that describes the headers that are forwarded to the origin. Your content is cached based on the headers that are forwarded.",
        "children": [
          {
            "name": "headers_allow_list",
            "type": "array",
            "description": "The specific headers to forward to your distribution's origin."
          },
          {
            "name": "option",
            "type": "string",
            "description": "The headers that you want your distribution to forward to your origin and base caching on."
          }
        ]
      },
      {
        "name": "forwarded_query_strings",
        "type": "object",
        "description": "An object that describes the query strings that are forwarded to the origin. Your content is cached based on the query strings that are forwarded.",
        "children": [
          {
            "name": "query_strings_allow_list",
            "type": "array",
            "description": "The specific query strings that the distribution forwards to the origin."
          },
          {
            "name": "option",
            "type": "boolean",
            "description": "Indicates whether the distribution forwards and caches based on query strings."
          }
        ]
      }
    ]
  },
  {
    "name": "default_cache_behavior",
    "type": "object",
    "description": "An object that describes the default cache behavior for the distribution.",
    "children": [
      {
        "name": "behavior",
        "type": "string",
        "description": "The cache behavior of the distribution."
      }
    ]
  },
  {
    "name": "origin",
    "type": "object",
    "description": "An object that describes the origin resource for the distribution, such as a Lightsail instance or load balancer.",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": "The name of the origin resource."
      },
      {
        "name": "protocol_policy",
        "type": "string",
        "description": "The protocol that your Amazon Lightsail distribution uses when establishing a connection with your origin to pull content."
      },
      {
        "name": "region_name",
        "type": "string",
        "description": "The AWS Region name of the origin resource."
      }
    ]
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of the distribution."
  },
  {
    "name": "able_to_update_bundle",
    "type": "boolean",
    "description": "Indicates whether the bundle that is currently applied to your distribution, specified using the distributionName parameter, can be changed to another bundle."
  },
  {
    "name": "is_enabled",
    "type": "boolean",
    "description": "Indicates whether the distribution is enabled."
  },
  {
    "name": "certificate_name",
    "type": "string",
    "description": "The certificate attached to the Distribution."
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "distribution_name",
    "type": "string",
    "description": "The name for the distribution."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-distribution.html"><code>AWS::Lightsail::Distribution</code></a>.

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
    <td><code>distributions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DistributionName, BundleId, DefaultCacheBehavior, Origin, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>distributions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>distributions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>distributions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>distributions</code></td>
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

Gets all properties from an individual <code>distribution</code>.
```sql
SELECT
region,
distribution_name,
distribution_arn,
bundle_id,
ip_address_type,
cache_behaviors,
cache_behavior_settings,
default_cache_behavior,
origin,
status,
able_to_update_bundle,
is_enabled,
certificate_name,
tags
FROM awscc.lightsail.distributions
WHERE region = 'us-east-1' AND Identifier = '<DistributionName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>distributions</code> in a region.
```sql
SELECT
region,
distribution_name
FROM awscc.lightsail.distributions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>distribution</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.lightsail.distributions (
 DistributionName,
 BundleId,
 DefaultCacheBehavior,
 Origin,
 region
)
SELECT 
'{{ DistributionName }}',
 '{{ BundleId }}',
 '{{ DefaultCacheBehavior }}',
 '{{ Origin }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.lightsail.distributions (
 DistributionName,
 BundleId,
 IpAddressType,
 CacheBehaviors,
 CacheBehaviorSettings,
 DefaultCacheBehavior,
 Origin,
 IsEnabled,
 CertificateName,
 Tags,
 region
)
SELECT 
 '{{ DistributionName }}',
 '{{ BundleId }}',
 '{{ IpAddressType }}',
 '{{ CacheBehaviors }}',
 '{{ CacheBehaviorSettings }}',
 '{{ DefaultCacheBehavior }}',
 '{{ Origin }}',
 '{{ IsEnabled }}',
 '{{ CertificateName }}',
 '{{ Tags }}',
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
  - name: distribution
    props:
      - name: DistributionName
        value: '{{ DistributionName }}'
      - name: BundleId
        value: '{{ BundleId }}'
      - name: IpAddressType
        value: '{{ IpAddressType }}'
      - name: CacheBehaviors
        value:
          - Behavior: '{{ Behavior }}'
            Path: '{{ Path }}'
      - name: CacheBehaviorSettings
        value:
          AllowedHTTPMethods: '{{ AllowedHTTPMethods }}'
          CachedHTTPMethods: '{{ CachedHTTPMethods }}'
          DefaultTTL: '{{ DefaultTTL }}'
          MaximumTTL: '{{ MaximumTTL }}'
          MinimumTTL: '{{ MinimumTTL }}'
          ForwardedCookies:
            CookiesAllowList:
              - '{{ CookiesAllowList[0] }}'
            Option: '{{ Option }}'
          ForwardedHeaders:
            HeadersAllowList:
              - '{{ HeadersAllowList[0] }}'
            Option: '{{ Option }}'
          ForwardedQueryStrings:
            QueryStringsAllowList:
              - '{{ QueryStringsAllowList[0] }}'
            Option: '{{ Option }}'
      - name: DefaultCacheBehavior
        value:
          Behavior: '{{ Behavior }}'
      - name: Origin
        value:
          Name: '{{ Name }}'
          ProtocolPolicy: '{{ ProtocolPolicy }}'
          RegionName: '{{ RegionName }}'
      - name: IsEnabled
        value: '{{ IsEnabled }}'
      - name: CertificateName
        value: '{{ CertificateName }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>distribution</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.lightsail.distributions
SET PatchDocument = string('{{ {
    "BundleId": bundle_id,
    "CacheBehaviors": cache_behaviors,
    "CacheBehaviorSettings": cache_behavior_settings,
    "DefaultCacheBehavior": default_cache_behavior,
    "Origin": origin,
    "IsEnabled": is_enabled,
    "CertificateName": certificate_name,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<DistributionName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.lightsail.distributions
WHERE Identifier = '<DistributionName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>distributions</code> resource, the following permissions are required:

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
lightsail:AttachCertificateToDistribution,
lightsail:CreateDistribution,
lightsail:DetachCertificateFromDistribution,
lightsail:GetCertificates,
lightsail:GetCertificateDetails,
lightsail:GetDistributions,
lightsail:TagResource,
lightsail:UntagResource,
lightsail:UpdateDistribution,
lightsail:UpdateDistributionBundle
```

</TabItem>
<TabItem value="read">

```json
lightsail:GetDistributions
```

</TabItem>
<TabItem value="update">

```json
lightsail:AttachCertificateToDistribution,
lightsail:DetachCertificateFromDistribution,
lightsail:GetCertificates,
lightsail:GetCertificateDetails,
lightsail:GetDistributions,
lightsail:TagResource,
lightsail:UntagResource,
lightsail:UpdateDistribution,
lightsail:UpdateDistributionBundle
```

</TabItem>
<TabItem value="delete">

```json
lightsail:DeleteDistribution,
lightsail:GetDistributions
```

</TabItem>
<TabItem value="list">

```json
lightsail:GetDistributions
```

</TabItem>
</Tabs>