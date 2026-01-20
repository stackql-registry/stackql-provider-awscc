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
<tr><td><b>Description</b></td><td>A cache policy.<br />When it's attached to a cache behavior, the cache policy determines the following:<br />+ The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.<br />+ The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.<br /><br />The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find a valid object in its cache that matches the request's cache key. If you want to send values to the origin but &#42;not&#42; include them in the cache key, use &#96;&#96;OriginRequestPolicy&#96;&#96;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudfront.cache_policies" /></td></tr>
</tbody>
</table>

## Fields
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
        "description": "The default amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. CloudFront uses this value as the object's time to live (TTL) only when the origin does &#42;not&#42; send &#96;&#96;Cache-Control&#96;&#96; or &#96;&#96;Expires&#96;&#96; headers with the object. For more information, see &#91;Managing How Long Content Stays in an Edge Cache (Expiration)&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />The default value for this field is 86400 seconds (one day). If the value of &#96;&#96;MinTTL&#96;&#96; is more than 86400 seconds, then the default value for this field is the same as the value of &#96;&#96;MinTTL&#96;&#96;."
      },
      {
        "name": "max_ttl",
        "type": "number",
        "description": "The maximum amount of time, in seconds, that objects stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. CloudFront uses this value only when the origin sends &#96;&#96;Cache-Control&#96;&#96; or &#96;&#96;Expires&#96;&#96; headers with the object. For more information, see &#91;Managing How Long Content Stays in an Edge Cache (Expiration)&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />The default value for this field is 31536000 seconds (one year). If the value of &#96;&#96;MinTTL&#96;&#96; or &#96;&#96;DefaultTTL&#96;&#96; is more than 31536000 seconds, then the default value for this field is the same as the value of &#96;&#96;DefaultTTL&#96;&#96;."
      },
      {
        "name": "min_ttl",
        "type": "number",
        "description": "The minimum amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. For more information, see &#91;Managing How Long Content Stays in an Edge Cache (Expiration)&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the &#42;Amazon CloudFront Developer Guide&#42;."
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
                "description": "Determines whether cookies in viewer requests are included in requests that CloudFront sends to the origin. Valid values are:<br />+ &#96;&#96;none&#96;&#96; – No cookies in viewer requests are included in requests that CloudFront sends to the origin. Even when this field is set to &#96;&#96;none&#96;&#96;, any cookies that are listed in a &#96;&#96;CachePolicy&#96;&#96;&#42;are&#42; included in origin requests.<br />+ &#96;&#96;whitelist&#96;&#96; – Only the cookies in viewer requests that are listed in the &#96;&#96;CookieNames&#96;&#96; type are included in requests that CloudFront sends to the origin.<br />+ &#96;&#96;all&#96;&#96; – All cookies in viewer requests are included in requests that CloudFront sends to the origin.<br />+ &#96;&#96;allExcept&#96;&#96; – All cookies in viewer requests are included in requests that CloudFront sends to the origin, &#42;except&#42; for those listed in the &#96;&#96;CookieNames&#96;&#96; type, which are not included."
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
            "description": "A flag that can affect whether the &#96;&#96;Accept-Encoding&#96;&#96; HTTP header is included in the cache key and included in requests that CloudFront sends to the origin.<br />This field is related to the &#96;&#96;EnableAcceptEncodingGzip&#96;&#96; field. If one or both of these fields is &#96;&#96;true&#96;&#96;&#42;and&#42; the viewer request includes the &#96;&#96;Accept-Encoding&#96;&#96; header, then CloudFront does the following:<br />+ Normalizes the value of the viewer's &#96;&#96;Accept-Encoding&#96;&#96; header<br />+ Includes the normalized header in the cache key<br />+ Includes the normalized header in the request to the origin, if a request is necessary<br /><br />For more information, see &#91;Compression support&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-policy-compressed-objects) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />If you set this value to &#96;&#96;true&#96;&#96;, and this cache behavior also has an origin request policy attached, do not include the &#96;&#96;Accept-Encoding&#96;&#96; header in the origin request policy. CloudFront always includes the &#96;&#96;Accept-Encoding&#96;&#96; header in origin requests when the value of this field is &#96;&#96;true&#96;&#96;, so including this header in an origin request policy has no effect.<br />If both of these fields are &#96;&#96;false&#96;&#96;, then CloudFront treats the &#96;&#96;Accept-Encoding&#96;&#96; header the same as any other HTTP header in the viewer request. By default, it's not included in the cache key and it's not included in origin requests. In this case, you can manually add &#96;&#96;Accept-Encoding&#96;&#96; to the headers whitelist like any other HTTP header."
          },
          {
            "name": "enable_accept_encoding_gzip",
            "type": "boolean",
            "description": "A flag that can affect whether the &#96;&#96;Accept-Encoding&#96;&#96; HTTP header is included in the cache key and included in requests that CloudFront sends to the origin.<br />This field is related to the &#96;&#96;EnableAcceptEncodingBrotli&#96;&#96; field. If one or both of these fields is &#96;&#96;true&#96;&#96;&#42;and&#42; the viewer request includes the &#96;&#96;Accept-Encoding&#96;&#96; header, then CloudFront does the following:<br />+ Normalizes the value of the viewer's &#96;&#96;Accept-Encoding&#96;&#96; header<br />+ Includes the normalized header in the cache key<br />+ Includes the normalized header in the request to the origin, if a request is necessary<br /><br />For more information, see &#91;Compression support&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-policy-compressed-objects) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />If you set this value to &#96;&#96;true&#96;&#96;, and this cache behavior also has an origin request policy attached, do not include the &#96;&#96;Accept-Encoding&#96;&#96; header in the origin request policy. CloudFront always includes the &#96;&#96;Accept-Encoding&#96;&#96; header in origin requests when the value of this field is &#96;&#96;true&#96;&#96;, so including this header in an origin request policy has no effect.<br />If both of these fields are &#96;&#96;false&#96;&#96;, then CloudFront treats the &#96;&#96;Accept-Encoding&#96;&#96; header the same as any other HTTP header in the viewer request. By default, it's not included in the cache key and it's not included in origin requests. In this case, you can manually add &#96;&#96;Accept-Encoding&#96;&#96; to the headers whitelist like any other HTTP header."
          },
          {
            "name": "headers_config",
            "type": "object",
            "description": "An object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and in requests that CloudFront sends to the origin.",
            "children": [
              {
                "name": "header_behavior",
                "type": "string",
                "description": "Determines whether any HTTP headers are included in requests that CloudFront sends to the origin. Valid values are:<br />+ &#96;&#96;none&#96;&#96; – No HTTP headers in viewer requests are included in requests that CloudFront sends to the origin. Even when this field is set to &#96;&#96;none&#96;&#96;, any headers that are listed in a &#96;&#96;CachePolicy&#96;&#96;&#42;are&#42; included in origin requests.<br />+ &#96;&#96;whitelist&#96;&#96; – Only the HTTP headers that are listed in the &#96;&#96;Headers&#96;&#96; type are included in requests that CloudFront sends to the origin.<br />+ &#96;&#96;allViewer&#96;&#96; – All HTTP headers in viewer requests are included in requests that CloudFront sends to the origin.<br />+ &#96;&#96;allViewerAndWhitelistCloudFront&#96;&#96; – All HTTP headers in viewer requests and the additional CloudFront headers that are listed in the &#96;&#96;Headers&#96;&#96; type are included in requests that CloudFront sends to the origin. The additional headers are added by CloudFront.<br />+ &#96;&#96;allExcept&#96;&#96; – All HTTP headers in viewer requests are included in requests that CloudFront sends to the origin, &#42;except&#42; for those listed in the &#96;&#96;Headers&#96;&#96; type, which are not included."
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
                "description": "Determines whether any URL query strings in viewer requests are included in requests that CloudFront sends to the origin. Valid values are:<br />+ &#96;&#96;none&#96;&#96; – No query strings in viewer requests are included in requests that CloudFront sends to the origin. Even when this field is set to &#96;&#96;none&#96;&#96;, any query strings that are listed in a &#96;&#96;CachePolicy&#96;&#96;&#42;are&#42; included in origin requests.<br />+ &#96;&#96;whitelist&#96;&#96; – Only the query strings in viewer requests that are listed in the &#96;&#96;QueryStringNames&#96;&#96; type are included in requests that CloudFront sends to the origin.<br />+ &#96;&#96;all&#96;&#96; – All query strings in viewer requests are included in requests that CloudFront sends to the origin.<br />+ &#96;&#96;allExcept&#96;&#96; – All query strings in viewer requests are included in requests that CloudFront sends to the origin, &#42;except&#42; for those listed in the &#96;&#96;QueryStringNames&#96;&#96; type, which are not included."
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-cachepolicy.html"><code>AWS::CloudFront::CachePolicy</code></a>.

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
    <td><CopyableCode code="CachePolicyConfig, region" /></td>
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

Gets all properties from an individual <code>cache_policy</code>.
```sql
SELECT
region,
cache_policy_config,
id,
last_modified_time
FROM awscc.cloudfront.cache_policies
WHERE data__Identifier = '<Id>';
```

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
'{{ CachePolicyConfig }}',
'{{ region }}';
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
 '{{ CachePolicyConfig }}',
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
  - name: cache_policy
    props:
      - name: CachePolicyConfig
        value:
          Comment: '{{ Comment }}'
          DefaultTTL: null
          MaxTTL: null
          MinTTL: null
          Name: '{{ Name }}'
          ParametersInCacheKeyAndForwardedToOrigin:
            CookiesConfig:
              CookieBehavior: '{{ CookieBehavior }}'
              Cookies:
                - '{{ Cookies[0] }}'
            EnableAcceptEncodingBrotli: '{{ EnableAcceptEncodingBrotli }}'
            EnableAcceptEncodingGzip: '{{ EnableAcceptEncodingGzip }}'
            HeadersConfig:
              HeaderBehavior: '{{ HeaderBehavior }}'
              Headers:
                - '{{ Headers[0] }}'
            QueryStringsConfig:
              QueryStringBehavior: '{{ QueryStringBehavior }}'
              QueryStrings:
                - '{{ QueryStrings[0] }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudfront.cache_policies
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>cache_policies</code> resource, the following permissions are required:

### Create
```json
cloudfront:CreateCachePolicy
```

### Delete
```json
cloudfront:DeleteCachePolicy,
cloudfront:GetCachePolicy
```

### List
```json
cloudfront:ListCachePolicies
```

### Read
```json
cloudfront:GetCachePolicy
```

### Update
```json
cloudfront:UpdateCachePolicy,
cloudfront:GetCachePolicy
```
