---
title: cache_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - cache_policies
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

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>cache_policy</code> resource or lists <code>cache_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>cache_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td><details><summary>A cache policy.</summary>When it's attached to a cache behavior, the cache policy determines the following:<br />+  The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.<br />+  The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.<br />The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find a valid object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudfront.cache_policies" /></td></tr>
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
    "name": "cache_policy_config",
    "type": "object",
    "description": "The cache policy configuration.",
    "children": [
      {
        "name": "comment",
        "type": "string",
        "description": "A comment to describe the cache policy. The comment cannot be longer than 128 characters."
      },
      {
        "name": "default_ttl",
        "type": "number",
        "description": "<details><summary>The default amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. CloudFront uses this value as the object's time to live (TTL) only when the origin does <i>not</i> send <code>Cache-Control</code> or <code>Expires</code> headers with the object. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html\">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</summary>The default value for this field is 86400 seconds (one day). If the value of <code>MinTTL</code> is more than 86400 seconds, then the default value for this field is the same as the value of <code>MinTTL</code>.</details>"
      },
      {
        "name": "max_ttl",
        "type": "number",
        "description": "<details><summary>The maximum amount of time, in seconds, that objects stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. CloudFront uses this value only when the origin sends <code>Cache-Control</code> or <code>Expires</code> headers with the object. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html\">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</summary>The default value for this field is 31536000 seconds (one year). If the value of <code>MinTTL</code> or <code>DefaultTTL</code> is more than 31536000 seconds, then the default value for this field is the same as the value of <code>DefaultTTL</code>.</details>"
      },
      {
        "name": "min_ttl",
        "type": "number",
        "description": "The minimum amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html\">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>."
      },
      {
        "name": "name",
        "type": "string",
        "description": "A unique name to identify the cache policy."
      },
      {
        "name": "parameters_in_cache_key_and_forwarded_to_origin",
        "type": "object",
        "description": "The HTTP headers, cookies, and URL query strings to include in the cache key. The values included in the cache key are also included in requests that CloudFront sends to the origin.",
        "children": [
          {
            "name": "cookies_config",
            "type": "object",
            "description": "An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and in requests that CloudFront sends to the origin.",
            "children": [
              {
                "name": "cookie_behavior",
                "type": "string",
                "description": "<details><summary>Determines whether cookies in viewer requests are included in requests that CloudFront sends to the origin. Valid values are:</summary>+  <code>none</code> – No cookies in viewer requests are included in requests that CloudFront sends to the origin. Even when this field is set to <code>none</code>, any cookies that are listed in a <code>CachePolicy</code><i>are</i> included in origin requests.<br />+  <code>whitelist</code> – Only the cookies in viewer requests that are listed in the <code>CookieNames</code> type are included in requests that CloudFront sends to the origin.<br />+  <code>all</code> – All cookies in viewer requests are included in requests that CloudFront sends to the origin.<br />+  <code>allExcept</code> – All cookies in viewer requests are included in requests that CloudFront sends to the origin, <i>except</i> for those listed in the <code>CookieNames</code> type, which are not included.</details>"
              },
              {
                "name": "cookies",
                "type": "array",
                "description": "Contains a list of cookie names."
              }
            ]
          },
          {
            "name": "enable_accept_encoding_brotli",
            "type": "boolean",
            "description": "<details><summary>A flag that can affect whether the <code>Accept-Encoding</code> HTTP header is included in the cache key and included in requests that CloudFront sends to the origin.</summary>This field is related to the <code>EnableAcceptEncodingGzip</code> field. If one or both of these fields is <code>true</code><i>and</i> the viewer request includes the <code>Accept-Encoding</code> header, then CloudFront does the following:<br />+  Normalizes the value of the viewer's <code>Accept-Encoding</code> header<br />+  Includes the normalized header in the cache key<br />+  Includes the normalized header in the request to the origin, if a request is necessary<br />For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-policy-compressed-objects\">Compression support</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />If you set this value to <code>true</code>, and this cache behavior also has an origin request policy attached, do not include the <code>Accept-Encoding</code> header in the origin request policy. CloudFront always includes the <code>Accept-Encoding</code> header in origin requests when the value of this field is <code>true</code>, so including this header in an origin request policy has no effect.<br />If both of these fields are <code>false</code>, then CloudFront treats the <code>Accept-Encoding</code> header the same as any other HTTP header in the viewer request. By default, it's not included in the cache key and it's not included in origin requests. In this case, you can manually add <code>Accept-Encoding</code> to the headers whitelist like any other HTTP header.</details>"
          },
          {
            "name": "enable_accept_encoding_gzip",
            "type": "boolean",
            "description": "<details><summary>A flag that can affect whether the <code>Accept-Encoding</code> HTTP header is included in the cache key and included in requests that CloudFront sends to the origin.</summary>This field is related to the <code>EnableAcceptEncodingBrotli</code> field. If one or both of these fields is <code>true</code><i>and</i> the viewer request includes the <code>Accept-Encoding</code> header, then CloudFront does the following:<br />+  Normalizes the value of the viewer's <code>Accept-Encoding</code> header<br />+  Includes the normalized header in the cache key<br />+  Includes the normalized header in the request to the origin, if a request is necessary<br />For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-policy-compressed-objects\">Compression support</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />If you set this value to <code>true</code>, and this cache behavior also has an origin request policy attached, do not include the <code>Accept-Encoding</code> header in the origin request policy. CloudFront always includes the <code>Accept-Encoding</code> header in origin requests when the value of this field is <code>true</code>, so including this header in an origin request policy has no effect.<br />If both of these fields are <code>false</code>, then CloudFront treats the <code>Accept-Encoding</code> header the same as any other HTTP header in the viewer request. By default, it's not included in the cache key and it's not included in origin requests. In this case, you can manually add <code>Accept-Encoding</code> to the headers whitelist like any other HTTP header.</details>"
          },
          {
            "name": "headers_config",
            "type": "object",
            "description": "An object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and in requests that CloudFront sends to the origin.",
            "children": [
              {
                "name": "header_behavior",
                "type": "string",
                "description": "<details><summary>Determines whether any HTTP headers are included in requests that CloudFront sends to the origin. Valid values are:</summary>+  <code>none</code> – No HTTP headers in viewer requests are included in requests that CloudFront sends to the origin. Even when this field is set to <code>none</code>, any headers that are listed in a <code>CachePolicy</code><i>are</i> included in origin requests.<br />+  <code>whitelist</code> – Only the HTTP headers that are listed in the <code>Headers</code> type are included in requests that CloudFront sends to the origin.<br />+  <code>allViewer</code> – All HTTP headers in viewer requests are included in requests that CloudFront sends to the origin.<br />+  <code>allViewerAndWhitelistCloudFront</code> – All HTTP headers in viewer requests and the additional CloudFront headers that are listed in the <code>Headers</code> type are included in requests that CloudFront sends to the origin. The additional headers are added by CloudFront.<br />+  <code>allExcept</code> – All HTTP headers in viewer requests are included in requests that CloudFront sends to the origin, <i>except</i> for those listed in the <code>Headers</code> type, which are not included.</details>"
              },
              {
                "name": "headers",
                "type": "array",
                "description": "Contains a list of HTTP header names."
              }
            ]
          },
          {
            "name": "query_strings_config",
            "type": "object",
            "description": "An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the cache key and in requests that CloudFront sends to the origin.",
            "children": [
              {
                "name": "query_string_behavior",
                "type": "string",
                "description": "<details><summary>Determines whether any URL query strings in viewer requests are included in requests that CloudFront sends to the origin. Valid values are:</summary>+  <code>none</code> – No query strings in viewer requests are included in requests that CloudFront sends to the origin. Even when this field is set to <code>none</code>, any query strings that are listed in a <code>CachePolicy</code><i>are</i> included in origin requests.<br />+  <code>whitelist</code> – Only the query strings in viewer requests that are listed in the <code>QueryStringNames</code> type are included in requests that CloudFront sends to the origin.<br />+  <code>all</code> – All query strings in viewer requests are included in requests that CloudFront sends to the origin.<br />+  <code>allExcept</code> – All query strings in viewer requests are included in requests that CloudFront sends to the origin, <i>except</i> for those listed in the <code>QueryStringNames</code> type, which are not included.</details>"
              },
              {
                "name": "query_strings",
                "type": "array",
                "description": "Contains a list of query string names."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "last_modified_time",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-cachepolicy.html"><code>AWS::CloudFront::CachePolicy</code></a>.

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
    <td><code>cache_policies</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="CachePolicyConfig, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>cache_policies</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>cache_policies</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>cache_policies_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>cache_policies</code></td>
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

Gets all properties from an individual <code>cache_policy</code>.
```sql
SELECT
  region,
  cache_policy_config,
  id,
  last_modified_time
FROM awscc.cloudfront.cache_policies
WHERE
  region = 'us-east-1' AND
  Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>cache_policies</code> in a region.
```sql
SELECT
  region,
  id
FROM awscc.cloudfront.cache_policies_list_only
WHERE
  region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>cache_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cloudfront.cache_policies (
  CachePolicyConfig,
  region
)
SELECT
  '{{ cache_policy_config }}',
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
INSERT INTO awscc.cloudfront.cache_policies (
  CachePolicyConfig,
  region
)
SELECT
  '{{ cache_policy_config }}',
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
  - name: cache_policy
    props:
      - name: cache_policy_config
        value:
          comment: '{{ comment }}'
          default_ttl: null
          max_ttl: null
          min_ttl: null
          name: '{{ name }}'
          parameters_in_cache_key_and_forwarded_to_origin:
            cookies_config:
              cookie_behavior: '{{ cookie_behavior }}'
              cookies:
                - '{{ cookies[0] }}'
            enable_accept_encoding_brotli: '{{ enable_accept_encoding_brotli }}'
            enable_accept_encoding_gzip: '{{ enable_accept_encoding_gzip }}'
            headers_config:
              header_behavior: '{{ header_behavior }}'
              headers:
                - '{{ headers[0] }}'
            query_strings_config:
              query_string_behavior: '{{ query_string_behavior }}'
              query_strings:
                - '{{ query_strings[0] }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>cache_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cloudfront.cache_policies
SET PatchDocument = string('{{ {
    "CachePolicyConfig": cache_policy_config
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
DELETE FROM awscc.cloudfront.cache_policies
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

To operate on the <code>cache_policies</code> resource, the following permissions are required:

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
cloudfront:CreateCachePolicy
```

</TabItem>
<TabItem value="delete">

```json
cloudfront:DeleteCachePolicy,
cloudfront:GetCachePolicy
```

</TabItem>
<TabItem value="list">

```json
cloudfront:ListCachePolicies
```

</TabItem>
<TabItem value="read">

```json
cloudfront:GetCachePolicy
```

</TabItem>
<TabItem value="update">

```json
cloudfront:UpdateCachePolicy,
cloudfront:GetCachePolicy
```

</TabItem>
</Tabs>