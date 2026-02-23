---
title: distributions
hide_title: false
hide_table_of_contents: false
keywords:
  - distributions
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

Creates, updates, deletes or gets a <code>distribution</code> resource or lists <code>distributions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>distributions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudfront.distributions" /></td></tr>
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
    "name": "distribution_config",
    "type": "object",
    "description": "The distribution's configuration.",
    "children": [
      {
        "name": "aliases",
        "type": "array",
        "description": "This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see &#91;Unsupported features for SaaS Manager for Amazon CloudFront&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution."
      },
      {
        "name": "anycast_ip_list_id",
        "type": "string",
        "description": "To use this field for a multi-tenant distribution, use a connection group instead. For more information, see &#91;ConnectionGroup&#93;(https://docs.aws.amazon.com/cloudfront/latest/APIReference/API&#95;ConnectionGroup.html).<br />ID of the Anycast static IP list that is associated with the distribution."
      },
      {
        "name": "cnames",
        "type": "array",
        "description": "An alias for the CF distribution's domain name.<br />This property is legacy. We recommend that you use &#91;Aliases&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-distributionconfig.html#cfn-cloudfront-distribution-distributionconfig-aliases) instead."
      },
      {
        "name": "cache_behaviors",
        "type": "array",
        "description": "A complex type that contains zero or more &#96;&#96;CacheBehavior&#96;&#96; elements.",
        "children": [
          {
            "name": "allowed_methods",
            "type": "array",
            "description": "A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:<br />+ CloudFront forwards only &#96;&#96;GET&#96;&#96; and &#96;&#96;HEAD&#96;&#96; requests.<br />+ CloudFront forwards only &#96;&#96;GET&#96;&#96;, &#96;&#96;HEAD&#96;&#96;, and &#96;&#96;OPTIONS&#96;&#96; requests.<br />+ CloudFront forwards &#96;&#96;GET, HEAD, OPTIONS, PUT, PATCH, POST&#96;&#96;, and &#96;&#96;DELETE&#96;&#96; requests.<br /><br />If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin."
          },
          {
            "name": "cache_policy_id",
            "type": "string",
            "description": "The unique identifier of the cache policy that is attached to this cache behavior. For more information, see &#91;Creating cache policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or &#91;Using the managed cache policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />A &#96;&#96;CacheBehavior&#96;&#96; must include either a &#96;&#96;CachePolicyId&#96;&#96; or &#96;&#96;ForwardedValues&#96;&#96;. We recommend that you use a &#96;&#96;CachePolicyId&#96;&#96;."
          },
          {
            "name": "cached_methods",
            "type": "array",
            "description": "A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:<br />+ CloudFront caches responses to &#96;&#96;GET&#96;&#96; and &#96;&#96;HEAD&#96;&#96; requests.<br />+ CloudFront caches responses to &#96;&#96;GET&#96;&#96;, &#96;&#96;HEAD&#96;&#96;, and &#96;&#96;OPTIONS&#96;&#96; requests.<br /><br />If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly."
          },
          {
            "name": "compress",
            "type": "boolean",
            "description": "Whether you want CloudFront to automatically compress certain files for this cache behavior. If so, specify true; if not, specify false. For more information, see &#91;Serving Compressed Files&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html) in the &#42;Amazon CloudFront Developer Guide&#42;."
          },
          {
            "name": "default_ttl",
            "type": "number",
            "description": "This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see &#91;Unsupported features for SaaS Manager for Amazon CloudFront&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />This field is deprecated. We recommend that you use the &#96;&#96;DefaultTTL&#96;&#96; field in a cache policy instead of this field. For more information, see &#91;Creating cache policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or &#91;Using the managed cache policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />The default amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin does not add HTTP headers such as &#96;&#96;Cache-Control max-age&#96;&#96;, &#96;&#96;Cache-Control s-maxage&#96;&#96;, and &#96;&#96;Expires&#96;&#96; to objects. For more information, see &#91;Managing How Long Content Stays in an Edge Cache (Expiration)&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the &#42;Amazon CloudFront Developer Guide&#42;."
          },
          {
            "name": "field_level_encryption_id",
            "type": "string",
            "description": "The value of &#96;&#96;ID&#96;&#96; for the field-level encryption configuration that you want CloudFront to use for encrypting specific fields of data for this cache behavior."
          },
          {
            "name": "forwarded_values",
            "type": "object",
            "description": "This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field. For more information, see &#91;Working with policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />If you want to include values in the cache key, use a cache policy. For more information, see &#91;Creating cache policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or &#91;Using the managed cache policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see &#91;Creating origin request policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) or &#91;Using the managed origin request policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />A &#96;&#96;CacheBehavior&#96;&#96; must include either a &#96;&#96;CachePolicyId&#96;&#96; or &#96;&#96;ForwardedValues&#96;&#96;. We recommend that you use a &#96;&#96;CachePolicyId&#96;&#96;.<br />A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.",
            "children": [
              {
                "name": "cookies",
                "type": "object",
                "description": "This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.<br />If you want to include cookies in the cache key, use a cache policy. For more information, see &#91;Creating cache policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />If you want to send cookies to the origin but not include them in the cache key, use an origin request policy. For more information, see &#91;Creating origin request policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see &#91;How CloudFront Forwards, Caches, and Logs Cookies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html) in the &#42;Amazon CloudFront Developer Guide&#42;."
              },
              {
                "name": "headers",
                "type": "array",
                "description": "This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.<br />If you want to include headers in the cache key, use a cache policy. For more information, see &#91;Creating cache policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />If you want to send headers to the origin but not include them in the cache key, use an origin request policy. For more information, see &#91;Creating origin request policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />A complex type that specifies the &#96;&#96;Headers&#96;&#96;, if any, that you want CloudFront to forward to the origin for this cache behavior (whitelisted headers). For the headers that you specify, CloudFront also caches separate versions of a specified object that is based on the header values in viewer requests.<br />For more information, see &#91;Caching Content Based on Request Headers&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html) in the &#42;Amazon CloudFront Developer Guide&#42;."
              },
              {
                "name": "query_string",
                "type": "boolean",
                "description": "This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.<br />If you want to include query strings in the cache key, use a cache policy. For more information, see &#91;Creating cache policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />If you want to send query strings to the origin but not include them in the cache key, use an origin request policy. For more information, see &#91;Creating origin request policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />Indicates whether you want CloudFront to forward query strings to the origin that is associated with this cache behavior and cache based on the query string parameters. CloudFront behavior depends on the value of &#96;&#96;QueryString&#96;&#96; and on the values that you specify for &#96;&#96;QueryStringCacheKeys&#96;&#96;, if any:<br />If you specify true for &#96;&#96;QueryString&#96;&#96; and you don't specify any values for &#96;&#96;QueryStringCacheKeys&#96;&#96;, CloudFront forwards all query string parameters to the origin and caches based on all query string parameters. Depending on how many query string parameters and values you have, this can adversely affect performance because CloudFront must forward more requests to the origin.<br />If you specify true for &#96;&#96;QueryString&#96;&#96; and you specify one or more values for &#96;&#96;QueryStringCacheKeys&#96;&#96;, CloudFront forwards all query string parameters to the origin, but it only caches based on the query string parameters that you specify.<br />If you specify false for &#96;&#96;QueryString&#96;&#96;, CloudFront doesn't forward any query string parameters to the origin, and doesn't cache based on query string parameters.<br />For more information, see &#91;Configuring CloudFront to Cache Based on Query String Parameters&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/QueryStringParameters.html) in the &#42;Amazon CloudFront Developer Guide&#42;."
              },
              {
                "name": "query_string_cache_keys",
                "type": "array",
                "description": "This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.<br />If you want to include query strings in the cache key, use a cache policy. For more information, see &#91;Creating cache policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />If you want to send query strings to the origin but not include them in the cache key, use an origin request policy. For more information, see &#91;Creating origin request policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />A complex type that contains information about the query string parameters that you want CloudFront to use for caching for this cache behavior."
              }
            ]
          },
          {
            "name": "function_associations",
            "type": "array",
            "description": "A list of CloudFront functions that are associated with this cache behavior. CloudFront functions must be published to the &#96;&#96;LIVE&#96;&#96; stage to associate them with a cache behavior.",
            "children": [
              {
                "name": "event_type",
                "type": "string",
                "description": "The event type of the function, either &#96;&#96;viewer-request&#96;&#96; or &#96;&#96;viewer-response&#96;&#96;. You cannot use origin-facing event types (&#96;&#96;origin-request&#96;&#96; and &#96;&#96;origin-response&#96;&#96;) with a CloudFront function."
              },
              {
                "name": "function_arn",
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the function."
              }
            ]
          },
          {
            "name": "grpc_config",
            "type": "object",
            "description": "The gRPC configuration for your cache behavior.",
            "children": [
              {
                "name": "enabled",
                "type": "boolean",
                "description": "Enables your CloudFront distribution to receive gRPC requests and to proxy them directly to your origins."
              }
            ]
          },
          {
            "name": "lambda_function_associations",
            "type": "array",
            "description": "A complex type that contains zero or more Lambda@Edge function associations for a cache behavior.",
            "children": [
              {
                "name": "event_type",
                "type": "string",
                "description": "Specifies the event type that triggers a Lambda@Edge function invocation. You can specify the following values:<br />+ &#96;&#96;viewer-request&#96;&#96;: The function executes when CloudFront receives a request from a viewer and before it checks to see whether the requested object is in the edge cache.<br />+ &#96;&#96;origin-request&#96;&#96;: The function executes only when CloudFront sends a request to your origin. When the requested object is in the edge cache, the function doesn't execute.<br />+ &#96;&#96;origin-response&#96;&#96;: The function executes after CloudFront receives a response from the origin and before it caches the object in the response. When the requested object is in the edge cache, the function doesn't execute.<br />+ &#96;&#96;viewer-response&#96;&#96;: The function executes before CloudFront returns the requested object to the viewer. The function executes regardless of whether the object was already in the edge cache.<br />If the origin returns an HTTP status code other than HTTP 200 (OK), the function doesn't execute."
              },
              {
                "name": "include_body",
                "type": "boolean",
                "description": "A flag that allows a Lambda@Edge function to have read access to the body content. For more information, see &#91;Accessing the Request Body by Choosing the Include Body Option&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-include-body-access.html) in the Amazon CloudFront Developer Guide."
              },
              {
                "name": "lambda_function_arn",
                "type": "string",
                "description": "The ARN of the Lambda@Edge function. You must specify the ARN of a function version; you can't specify an alias or $LATEST."
              }
            ]
          },
          {
            "name": "max_ttl",
            "type": "number",
            "description": "This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see &#91;Unsupported features for SaaS Manager for Amazon CloudFront&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />This field is deprecated. We recommend that you use the &#96;&#96;MaxTTL&#96;&#96; field in a cache policy instead of this field. For more information, see &#91;Creating cache policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or &#91;Using the managed cache policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />The maximum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin adds HTTP headers such as &#96;&#96;Cache-Control max-age&#96;&#96;, &#96;&#96;Cache-Control s-maxage&#96;&#96;, and &#96;&#96;Expires&#96;&#96; to objects. For more information, see &#91;Managing How Long Content Stays in an Edge Cache (Expiration)&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the &#42;Amazon CloudFront Developer Guide&#42;."
          },
          {
            "name": "min_ttl",
            "type": "number",
            "description": "This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see &#91;Unsupported features for SaaS Manager for Amazon CloudFront&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />This field is deprecated. We recommend that you use the &#96;&#96;MinTTL&#96;&#96; field in a cache policy instead of this field. For more information, see &#91;Creating cache policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or &#91;Using the managed cache policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />The minimum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. For more information, see &#91;Managing How Long Content Stays in an Edge Cache (Expiration)&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />You must specify &#96;&#96;0&#96;&#96; for &#96;&#96;MinTTL&#96;&#96; if you configure CloudFront to forward all headers to your origin (under &#96;&#96;Headers&#96;&#96;, if you specify &#96;&#96;1&#96;&#96; for &#96;&#96;Quantity&#96;&#96; and &#96;&#96;&#42;&#96;&#96; for &#96;&#96;Name&#96;&#96;)."
          },
          {
            "name": "origin_request_policy_id",
            "type": "string",
            "description": "The unique identifier of the origin request policy that is attached to this cache behavior. For more information, see &#91;Creating origin request policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) or &#91;Using the managed origin request policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html) in the &#42;Amazon CloudFront Developer Guide&#42;."
          },
          {
            "name": "path_pattern",
            "type": "string",
            "description": "The pattern (for example, &#96;&#96;images/&#42;.jpg&#96;&#96;) that specifies which requests to apply the behavior to. When CloudFront receives a viewer request, the requested path is compared with path patterns in the order in which cache behaviors are listed in the distribution.<br />You can optionally include a slash (&#96;&#96;/&#96;&#96;) at the beginning of the path pattern. For example, &#96;&#96;/images/&#42;.jpg&#96;&#96;. CloudFront behavior is the same with or without the leading &#96;&#96;/&#96;&#96;.<br />The path pattern for the default cache behavior is &#96;&#96;&#42;&#96;&#96; and cannot be changed. If the request for an object does not match the path pattern for any cache behaviors, CloudFront applies the behavior in the default cache behavior.<br />For more information, see &#91;Path Pattern&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesPathPattern) in the &#42;Amazon CloudFront Developer Guide&#42;."
          },
          {
            "name": "realtime_log_config_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the real-time log configuration that is attached to this cache behavior. For more information, see &#91;Real-time logs&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html) in the &#42;Amazon CloudFront Developer Guide&#42;."
          },
          {
            "name": "response_headers_policy_id",
            "type": "string",
            "description": "The identifier for a response headers policy."
          },
          {
            "name": "smooth_streaming",
            "type": "boolean",
            "description": "This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see &#91;Unsupported features for SaaS Manager for Amazon CloudFront&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />Indicates whether you want to distribute media files in the Microsoft Smooth Streaming format using the origin that is associated with this cache behavior. If so, specify &#96;&#96;true&#96;&#96;; if not, specify &#96;&#96;false&#96;&#96;. If you specify &#96;&#96;true&#96;&#96; for &#96;&#96;SmoothStreaming&#96;&#96;, you can still distribute other content using this cache behavior if the content matches the value of &#96;&#96;PathPattern&#96;&#96;."
          },
          {
            "name": "target_origin_id",
            "type": "string",
            "description": "The value of &#96;&#96;ID&#96;&#96; for the origin that you want CloudFront to route requests to when they match this cache behavior."
          },
          {
            "name": "trusted_key_groups",
            "type": "array",
            "description": "A list of key groups that CloudFront can use to validate signed URLs or signed cookies.<br />When a cache behavior contains trusted key groups, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with a private key whose corresponding public key is in the key group. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see &#91;Serving private content&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) in the &#42;Amazon CloudFront Developer Guide&#42;."
          },
          {
            "name": "trusted_signers",
            "type": "array",
            "description": "We recommend using &#96;&#96;TrustedKeyGroups&#96;&#96; instead of &#96;&#96;TrustedSigners&#96;&#96;.<br />This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see &#91;Unsupported features for SaaS Manager for Amazon CloudFront&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />A list of AWS-account IDs whose public keys CloudFront can use to validate signed URLs or signed cookies.<br />When a cache behavior contains trusted signers, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with the private key of a CloudFront key pair in the trusted signer's AWS-account. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see &#91;Serving private content&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) in the &#42;Amazon CloudFront Developer Guide&#42;."
          },
          {
            "name": "viewer_protocol_policy",
            "type": "string",
            "description": "The protocol that viewers can use to access the files in the origin specified by &#96;&#96;TargetOriginId&#96;&#96; when a request matches the path pattern in &#96;&#96;PathPattern&#96;&#96;. You can specify the following options:<br />+ &#96;&#96;allow-all&#96;&#96;: Viewers can use HTTP or HTTPS.<br />+ &#96;&#96;redirect-to-https&#96;&#96;: If a viewer submits an HTTP request, CloudFront returns an HTTP status code of 301 (Moved Permanently) to the viewer along with the HTTPS URL. The viewer then resubmits the request using the new URL.<br />+ &#96;&#96;https-only&#96;&#96;: If a viewer sends an HTTP request, CloudFront returns an HTTP status code of 403 (Forbidden).<br /><br />For more information about requiring the HTTPS protocol, see &#91;Requiring HTTPS Between Viewers and CloudFront&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-viewers-to-cloudfront.html) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />The only way to guarantee that viewers retrieve an object that was fetched from the origin using HTTPS is never to use any other protocol to fetch the object. If you have recently changed from HTTP to HTTPS, we recommend that you clear your objects' cache because cached objects are protocol agnostic. That means that an edge location will return an object from the cache regardless of whether the current request protocol matches the protocol used previously. For more information, see &#91;Managing Cache Expiration&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the &#42;Amazon CloudFront Developer Guide&#42;."
          }
        ]
      },
      {
        "name": "comment",
        "type": "string",
        "description": "A comment to describe the distribution. The comment cannot be longer than 128 characters."
      },
      {
        "name": "connection_mode",
        "type": "string",
        "description": "This field specifies whether the connection mode is through a standard distribution (direct) or a multi-tenant distribution with distribution tenants(tenant-only)."
      },
      {
        "name": "continuous_deployment_policy_id",
        "type": "string",
        "description": "This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see &#91;Unsupported features for SaaS Manager for Amazon CloudFront&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />The identifier of a continuous deployment policy. For more information, see &#96;&#96;CreateContinuousDeploymentPolicy&#96;&#96;."
      },
      {
        "name": "custom_error_responses",
        "type": "array",
        "description": "A complex type that controls the following:<br />+ Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.<br />+ How long CloudFront caches HTTP status codes in the 4xx and 5xx range.<br /><br />For more information about custom error pages, see &#91;Customizing Error Responses&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html) in the &#42;Amazon CloudFront Developer Guide&#42;.",
        "children": [
          {
            "name": "error_caching_min_ttl",
            "type": "number",
            "description": "The minimum amount of time, in seconds, that you want CloudFront to cache the HTTP status code specified in &#96;&#96;ErrorCode&#96;&#96;. When this time period has elapsed, CloudFront queries your origin to see whether the problem that caused the error has been resolved and the requested object is now available.<br />For more information, see &#91;Customizing Error Responses&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html) in the &#42;Amazon CloudFront Developer Guide&#42;."
          },
          {
            "name": "error_code",
            "type": "integer",
            "description": "The HTTP status code for which you want to specify a custom error page and/or a caching duration."
          },
          {
            "name": "response_code",
            "type": "integer",
            "description": "The HTTP status code that you want CloudFront to return to the viewer along with the custom error page. There are a variety of reasons that you might want CloudFront to return a status code different from the status code that your origin returned to CloudFront, for example:<br />+ Some Internet devices (some firewalls and corporate proxies, for example) intercept HTTP 4xx and 5xx and prevent the response from being returned to the viewer. If you substitute &#96;&#96;200&#96;&#96;, the response typically won't be intercepted.<br />+ If you don't care about distinguishing among different client errors or server errors, you can specify &#96;&#96;400&#96;&#96; or &#96;&#96;500&#96;&#96; as the &#96;&#96;ResponseCode&#96;&#96; for all 4xx or 5xx errors.<br />+ You might want to return a &#96;&#96;200&#96;&#96; status code (OK) and static website so your customers don't know that your website is down.<br /><br />If you specify a value for &#96;&#96;ResponseCode&#96;&#96;, you must also specify a value for &#96;&#96;ResponsePagePath&#96;&#96;."
          },
          {
            "name": "response_page_path",
            "type": "string",
            "description": "The path to the custom error page that you want CloudFront to return to a viewer when your origin returns the HTTP status code specified by &#96;&#96;ErrorCode&#96;&#96;, for example, &#96;&#96;/4xx-errors/403-forbidden.html&#96;&#96;. If you want to store your objects and your custom error pages in different locations, your distribution must include a cache behavior for which the following is true:<br />+ The value of &#96;&#96;PathPattern&#96;&#96; matches the path to your custom error messages. For example, suppose you saved custom error pages for 4xx errors in an Amazon S3 bucket in a directory named &#96;&#96;/4xx-errors&#96;&#96;. Your distribution must include a cache behavior for which the path pattern routes requests for your custom error pages to that location, for example, &#96;&#96;/4xx-errors/&#42;&#96;&#96;.<br />+ The value of &#96;&#96;TargetOriginId&#96;&#96; specifies the value of the &#96;&#96;ID&#96;&#96; element for the origin that contains your custom error pages.<br /><br />If you specify a value for &#96;&#96;ResponsePagePath&#96;&#96;, you must also specify a value for &#96;&#96;ResponseCode&#96;&#96;.<br />We recommend that you store custom error pages in an Amazon S3 bucket. If you store custom error pages on an HTTP server and the server starts to return 5xx errors, CloudFront can't get the files that you want to return to viewers because the origin server is unavailable."
          }
        ]
      },
      {
        "name": "custom_origin",
        "type": "object",
        "description": "The user-defined HTTP server that serves as the origin for content that CF distributes.<br />This property is legacy. We recommend that you use &#91;Origin&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origin.html) instead.",
        "children": [
          {
            "name": "dns_name",
            "type": "string",
            "description": "The domain name assigned to your CF distribution."
          },
          {
            "name": "h_tt_pport",
            "type": "integer",
            "description": "The HTTP port that CF uses to connect to the origin. Specify the HTTP port that the origin listens on."
          },
          {
            "name": "h_tt_ps_port",
            "type": "integer",
            "description": "The HTTPS port that CF uses to connect to the origin. Specify the HTTPS port that the origin listens on."
          },
          {
            "name": "origin_protocol_policy",
            "type": "string",
            "description": "Specifies the protocol (HTTP or HTTPS) that CF uses to connect to the origin."
          },
          {
            "name": "origin_ss_lprotocols",
            "type": "array",
            "description": "The minimum SSL/TLS protocol version that CF uses when communicating with your origin server over HTTPs.<br />For more information, see &#91;Minimum Origin SSL Protocol&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginSSLProtocols) in the &#42;Developer Guide&#42;."
          }
        ]
      },
      {
        "name": "default_cache_behavior",
        "type": "object",
        "description": "A complex type that describes the default cache behavior if you don't specify a &#96;&#96;CacheBehavior&#96;&#96; element or if files don't match any of the values of &#96;&#96;PathPattern&#96;&#96; in &#96;&#96;CacheBehavior&#96;&#96; elements. You must create exactly one default cache behavior.",
        "children": [
          {
            "name": "allowed_methods",
            "type": "array",
            "description": "A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:<br />+ CloudFront forwards only &#96;&#96;GET&#96;&#96; and &#96;&#96;HEAD&#96;&#96; requests.<br />+ CloudFront forwards only &#96;&#96;GET&#96;&#96;, &#96;&#96;HEAD&#96;&#96;, and &#96;&#96;OPTIONS&#96;&#96; requests.<br />+ CloudFront forwards &#96;&#96;GET, HEAD, OPTIONS, PUT, PATCH, POST&#96;&#96;, and &#96;&#96;DELETE&#96;&#96; requests.<br /><br />If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin."
          },
          {
            "name": "cache_policy_id",
            "type": "string",
            "description": "The unique identifier of the cache policy that is attached to the default cache behavior. For more information, see &#91;Creating cache policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or &#91;Using the managed cache policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />A &#96;&#96;DefaultCacheBehavior&#96;&#96; must include either a &#96;&#96;CachePolicyId&#96;&#96; or &#96;&#96;ForwardedValues&#96;&#96;. We recommend that you use a &#96;&#96;CachePolicyId&#96;&#96;."
          },
          {
            "name": "cached_methods",
            "type": "array",
            "description": "A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:<br />+ CloudFront caches responses to &#96;&#96;GET&#96;&#96; and &#96;&#96;HEAD&#96;&#96; requests.<br />+ CloudFront caches responses to &#96;&#96;GET&#96;&#96;, &#96;&#96;HEAD&#96;&#96;, and &#96;&#96;OPTIONS&#96;&#96; requests.<br /><br />If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly."
          },
          {
            "name": "compress",
            "type": "boolean",
            "description": "Whether you want CloudFront to automatically compress certain files for this cache behavior. If so, specify &#96;&#96;true&#96;&#96;; if not, specify &#96;&#96;false&#96;&#96;. For more information, see &#91;Serving Compressed Files&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html) in the &#42;Amazon CloudFront Developer Guide&#42;."
          },
          {
            "name": "default_ttl",
            "type": "number",
            "description": "This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see &#91;Unsupported features for SaaS Manager for Amazon CloudFront&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />This field is deprecated. We recommend that you use the &#96;&#96;DefaultTTL&#96;&#96; field in a cache policy instead of this field. For more information, see &#91;Creating cache policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or &#91;Using the managed cache policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />The default amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin does not add HTTP headers such as &#96;&#96;Cache-Control max-age&#96;&#96;, &#96;&#96;Cache-Control s-maxage&#96;&#96;, and &#96;&#96;Expires&#96;&#96; to objects. For more information, see &#91;Managing How Long Content Stays in an Edge Cache (Expiration)&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the &#42;Amazon CloudFront Developer Guide&#42;."
          },
          {
            "name": "field_level_encryption_id",
            "type": "string",
            "description": "The value of &#96;&#96;ID&#96;&#96; for the field-level encryption configuration that you want CloudFront to use for encrypting specific fields of data for the default cache behavior."
          },
          {
            "name": "forwarded_values",
            "type": "object",
            "description": "This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field. For more information, see &#91;Working with policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />If you want to include values in the cache key, use a cache policy. For more information, see &#91;Creating cache policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or &#91;Using the managed cache policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see &#91;Creating origin request policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) or &#91;Using the managed origin request policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />A &#96;&#96;DefaultCacheBehavior&#96;&#96; must include either a &#96;&#96;CachePolicyId&#96;&#96; or &#96;&#96;ForwardedValues&#96;&#96;. We recommend that you use a &#96;&#96;CachePolicyId&#96;&#96;.<br />A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.",
            "children": [
              {
                "name": "cookies",
                "type": "object",
                "description": "This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.<br />If you want to include cookies in the cache key, use a cache policy. For more information, see &#91;Creating cache policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />If you want to send cookies to the origin but not include them in the cache key, use an origin request policy. For more information, see &#91;Creating origin request policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see &#91;How CloudFront Forwards, Caches, and Logs Cookies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html) in the &#42;Amazon CloudFront Developer Guide&#42;."
              },
              {
                "name": "headers",
                "type": "array",
                "description": "This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.<br />If you want to include headers in the cache key, use a cache policy. For more information, see &#91;Creating cache policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />If you want to send headers to the origin but not include them in the cache key, use an origin request policy. For more information, see &#91;Creating origin request policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />A complex type that specifies the &#96;&#96;Headers&#96;&#96;, if any, that you want CloudFront to forward to the origin for this cache behavior (whitelisted headers). For the headers that you specify, CloudFront also caches separate versions of a specified object that is based on the header values in viewer requests.<br />For more information, see &#91;Caching Content Based on Request Headers&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html) in the &#42;Amazon CloudFront Developer Guide&#42;."
              },
              {
                "name": "query_string",
                "type": "boolean",
                "description": "This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.<br />If you want to include query strings in the cache key, use a cache policy. For more information, see &#91;Creating cache policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />If you want to send query strings to the origin but not include them in the cache key, use an origin request policy. For more information, see &#91;Creating origin request policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />Indicates whether you want CloudFront to forward query strings to the origin that is associated with this cache behavior and cache based on the query string parameters. CloudFront behavior depends on the value of &#96;&#96;QueryString&#96;&#96; and on the values that you specify for &#96;&#96;QueryStringCacheKeys&#96;&#96;, if any:<br />If you specify true for &#96;&#96;QueryString&#96;&#96; and you don't specify any values for &#96;&#96;QueryStringCacheKeys&#96;&#96;, CloudFront forwards all query string parameters to the origin and caches based on all query string parameters. Depending on how many query string parameters and values you have, this can adversely affect performance because CloudFront must forward more requests to the origin.<br />If you specify true for &#96;&#96;QueryString&#96;&#96; and you specify one or more values for &#96;&#96;QueryStringCacheKeys&#96;&#96;, CloudFront forwards all query string parameters to the origin, but it only caches based on the query string parameters that you specify.<br />If you specify false for &#96;&#96;QueryString&#96;&#96;, CloudFront doesn't forward any query string parameters to the origin, and doesn't cache based on query string parameters.<br />For more information, see &#91;Configuring CloudFront to Cache Based on Query String Parameters&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/QueryStringParameters.html) in the &#42;Amazon CloudFront Developer Guide&#42;."
              },
              {
                "name": "query_string_cache_keys",
                "type": "array",
                "description": "This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.<br />If you want to include query strings in the cache key, use a cache policy. For more information, see &#91;Creating cache policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />If you want to send query strings to the origin but not include them in the cache key, use an origin request policy. For more information, see &#91;Creating origin request policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />A complex type that contains information about the query string parameters that you want CloudFront to use for caching for this cache behavior."
              }
            ]
          },
          {
            "name": "function_associations",
            "type": "array",
            "description": "A list of CloudFront functions that are associated with this cache behavior. Your functions must be published to the &#96;&#96;LIVE&#96;&#96; stage to associate them with a cache behavior.",
            "children": [
              {
                "name": "event_type",
                "type": "string",
                "description": "The event type of the function, either &#96;&#96;viewer-request&#96;&#96; or &#96;&#96;viewer-response&#96;&#96;. You cannot use origin-facing event types (&#96;&#96;origin-request&#96;&#96; and &#96;&#96;origin-response&#96;&#96;) with a CloudFront function."
              },
              {
                "name": "function_arn",
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the function."
              }
            ]
          },
          {
            "name": "grpc_config",
            "type": "object",
            "description": "The gRPC configuration for your cache behavior.",
            "children": [
              {
                "name": "enabled",
                "type": "boolean",
                "description": "Enables your CloudFront distribution to receive gRPC requests and to proxy them directly to your origins."
              }
            ]
          },
          {
            "name": "lambda_function_associations",
            "type": "array",
            "description": "A complex type that contains zero or more Lambda@Edge function associations for a cache behavior.",
            "children": [
              {
                "name": "event_type",
                "type": "string",
                "description": "Specifies the event type that triggers a Lambda@Edge function invocation. You can specify the following values:<br />+ &#96;&#96;viewer-request&#96;&#96;: The function executes when CloudFront receives a request from a viewer and before it checks to see whether the requested object is in the edge cache.<br />+ &#96;&#96;origin-request&#96;&#96;: The function executes only when CloudFront sends a request to your origin. When the requested object is in the edge cache, the function doesn't execute.<br />+ &#96;&#96;origin-response&#96;&#96;: The function executes after CloudFront receives a response from the origin and before it caches the object in the response. When the requested object is in the edge cache, the function doesn't execute.<br />+ &#96;&#96;viewer-response&#96;&#96;: The function executes before CloudFront returns the requested object to the viewer. The function executes regardless of whether the object was already in the edge cache.<br />If the origin returns an HTTP status code other than HTTP 200 (OK), the function doesn't execute."
              },
              {
                "name": "include_body",
                "type": "boolean",
                "description": "A flag that allows a Lambda@Edge function to have read access to the body content. For more information, see &#91;Accessing the Request Body by Choosing the Include Body Option&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-include-body-access.html) in the Amazon CloudFront Developer Guide."
              },
              {
                "name": "lambda_function_arn",
                "type": "string",
                "description": "The ARN of the Lambda@Edge function. You must specify the ARN of a function version; you can't specify an alias or $LATEST."
              }
            ]
          },
          {
            "name": "max_ttl",
            "type": "number",
            "description": "This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see &#91;Unsupported features for SaaS Manager for Amazon CloudFront&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />This field is deprecated. We recommend that you use the &#96;&#96;MaxTTL&#96;&#96; field in a cache policy instead of this field. For more information, see &#91;Creating cache policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or &#91;Using the managed cache policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />The maximum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin adds HTTP headers such as &#96;&#96;Cache-Control max-age&#96;&#96;, &#96;&#96;Cache-Control s-maxage&#96;&#96;, and &#96;&#96;Expires&#96;&#96; to objects. For more information, see &#91;Managing How Long Content Stays in an Edge Cache (Expiration)&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the &#42;Amazon CloudFront Developer Guide&#42;."
          },
          {
            "name": "min_ttl",
            "type": "number",
            "description": "This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see &#91;Unsupported features for SaaS Manager for Amazon CloudFront&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />This field is deprecated. We recommend that you use the &#96;&#96;MinTTL&#96;&#96; field in a cache policy instead of this field. For more information, see &#91;Creating cache policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or &#91;Using the managed cache policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />The minimum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. For more information, see &#91;Managing How Long Content Stays in an Edge Cache (Expiration)&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />You must specify &#96;&#96;0&#96;&#96; for &#96;&#96;MinTTL&#96;&#96; if you configure CloudFront to forward all headers to your origin (under &#96;&#96;Headers&#96;&#96;, if you specify &#96;&#96;1&#96;&#96; for &#96;&#96;Quantity&#96;&#96; and &#96;&#96;&#42;&#96;&#96; for &#96;&#96;Name&#96;&#96;)."
          },
          {
            "name": "origin_request_policy_id",
            "type": "string",
            "description": "The unique identifier of the origin request policy that is attached to the default cache behavior. For more information, see &#91;Creating origin request policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) or &#91;Using the managed origin request policies&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html) in the &#42;Amazon CloudFront Developer Guide&#42;."
          },
          {
            "name": "realtime_log_config_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the real-time log configuration that is attached to this cache behavior. For more information, see &#91;Real-time logs&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html) in the &#42;Amazon CloudFront Developer Guide&#42;."
          },
          {
            "name": "response_headers_policy_id",
            "type": "string",
            "description": "The identifier for a response headers policy."
          },
          {
            "name": "smooth_streaming",
            "type": "boolean",
            "description": "This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see &#91;Unsupported features for SaaS Manager for Amazon CloudFront&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />Indicates whether you want to distribute media files in the Microsoft Smooth Streaming format using the origin that is associated with this cache behavior. If so, specify &#96;&#96;true&#96;&#96;; if not, specify &#96;&#96;false&#96;&#96;. If you specify &#96;&#96;true&#96;&#96; for &#96;&#96;SmoothStreaming&#96;&#96;, you can still distribute other content using this cache behavior if the content matches the value of &#96;&#96;PathPattern&#96;&#96;."
          },
          {
            "name": "target_origin_id",
            "type": "string",
            "description": "The value of &#96;&#96;ID&#96;&#96; for the origin that you want CloudFront to route requests to when they use the default cache behavior."
          },
          {
            "name": "trusted_key_groups",
            "type": "array",
            "description": "A list of key groups that CloudFront can use to validate signed URLs or signed cookies.<br />When a cache behavior contains trusted key groups, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with a private key whose corresponding public key is in the key group. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see &#91;Serving private content&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) in the &#42;Amazon CloudFront Developer Guide&#42;."
          },
          {
            "name": "trusted_signers",
            "type": "array",
            "description": "We recommend using &#96;&#96;TrustedKeyGroups&#96;&#96; instead of &#96;&#96;TrustedSigners&#96;&#96;.<br />This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see &#91;Unsupported features for SaaS Manager for Amazon CloudFront&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />A list of AWS-account IDs whose public keys CloudFront can use to validate signed URLs or signed cookies.<br />When a cache behavior contains trusted signers, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with the private key of a CloudFront key pair in a trusted signer's AWS-account. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see &#91;Serving private content&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) in the &#42;Amazon CloudFront Developer Guide&#42;."
          },
          {
            "name": "viewer_protocol_policy",
            "type": "string",
            "description": "The protocol that viewers can use to access the files in the origin specified by &#96;&#96;TargetOriginId&#96;&#96; when a request matches the path pattern in &#96;&#96;PathPattern&#96;&#96;. You can specify the following options:<br />+ &#96;&#96;allow-all&#96;&#96;: Viewers can use HTTP or HTTPS.<br />+ &#96;&#96;redirect-to-https&#96;&#96;: If a viewer submits an HTTP request, CloudFront returns an HTTP status code of 301 (Moved Permanently) to the viewer along with the HTTPS URL. The viewer then resubmits the request using the new URL.<br />+ &#96;&#96;https-only&#96;&#96;: If a viewer sends an HTTP request, CloudFront returns an HTTP status code of 403 (Forbidden).<br /><br />For more information about requiring the HTTPS protocol, see &#91;Requiring HTTPS Between Viewers and CloudFront&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-viewers-to-cloudfront.html) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />The only way to guarantee that viewers retrieve an object that was fetched from the origin using HTTPS is never to use any other protocol to fetch the object. If you have recently changed from HTTP to HTTPS, we recommend that you clear your objects' cache because cached objects are protocol agnostic. That means that an edge location will return an object from the cache regardless of whether the current request protocol matches the protocol used previously. For more information, see &#91;Managing Cache Expiration&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the &#42;Amazon CloudFront Developer Guide&#42;."
          }
        ]
      },
      {
        "name": "default_root_object",
        "type": "string",
        "description": "When a viewer requests the root URL for your distribution, the default root object is the object that you want CloudFront to request from your origin. For example, if your root URL is &#96;&#96;https://www.example.com&#96;&#96;, you can specify CloudFront to return the &#96;&#96;index.html&#96;&#96; file as the default root object. You can specify a default root object so that viewers see a specific file or object, instead of another object in your distribution (for example, &#96;&#96;https://www.example.com/product-description.html&#96;&#96;). A default root object avoids exposing the contents of your distribution.<br />You can specify the object name or a path to the object name (for example, &#96;&#96;index.html&#96;&#96; or &#96;&#96;exampleFolderName/index.html&#96;&#96;). Your string can't begin with a forward slash (&#96;&#96;/&#96;&#96;). Only specify the object name or the path to the object.<br />If you don't want to specify a default root object when you create a distribution, include an empty &#96;&#96;DefaultRootObject&#96;&#96; element.<br />To delete the default root object from an existing distribution, update the distribution configuration and include an empty &#96;&#96;DefaultRootObject&#96;&#96; element.<br />To replace the default root object, update the distribution configuration and specify the new object.<br />For more information about the default root object, see &#91;Specify a default root object&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DefaultRootObject.html) in the &#42;Amazon CloudFront Developer Guide&#42;."
      },
      {
        "name": "enabled",
        "type": "boolean",
        "description": "From this field, you can enable or disable the selected distribution."
      },
      {
        "name": "http_version",
        "type": "string",
        "description": "(Optional) Specify the HTTP version(s) that you want viewers to use to communicate with CF. The default value for new distributions is &#96;&#96;http1.1&#96;&#96;.<br />For viewers and CF to use HTTP/2, viewers must support TLSv1.2 or later, and must support Server Name Indication (SNI).<br />For viewers and CF to use HTTP/3, viewers must support TLSv1.3 and Server Name Indication (SNI). CF supports HTTP/3 connection migration to allow the viewer to switch networks without losing connection. For more information about connection migration, see &#91;Connection Migration&#93;(https://docs.aws.amazon.com/https://www.rfc-editor.org/rfc/rfc9000.html#name-connection-migration) at RFC 9000. For more information about supported TLSv1.3 ciphers, see &#91;Supported protocols and ciphers between viewers and CloudFront&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/secure-connections-supported-viewer-protocols-ciphers.html)."
      },
      {
        "name": "ip_v6_enabled",
        "type": "boolean",
        "description": "To use this field for a multi-tenant distribution, use a connection group instead. For more information, see &#91;ConnectionGroup&#93;(https://docs.aws.amazon.com/cloudfront/latest/APIReference/API&#95;ConnectionGroup.html).<br />If you want CloudFront to respond to IPv6 DNS requests with an IPv6 address for your distribution, specify &#96;&#96;true&#96;&#96;. If you specify &#96;&#96;false&#96;&#96;, CloudFront responds to IPv6 DNS requests with the DNS response code &#96;&#96;NOERROR&#96;&#96; and with no IP addresses. This allows viewers to submit a second request, for an IPv4 address for your distribution.<br />In general, you should enable IPv6 if you have users on IPv6 networks who want to access your content. However, if you're using signed URLs or signed cookies to restrict access to your content, and if you're using a custom policy that includes the &#96;&#96;IpAddress&#96;&#96; parameter to restrict the IP addresses that can access your content, don't enable IPv6. If you want to restrict access to some content by IP address and not restrict access to other content (or restrict access but not by IP address), you can create two distributions. For more information, see &#91;Creating a Signed URL Using a Custom Policy&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-creating-signed-url-custom-policy.html) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />If you're using an R53AWSIntlong alias resource record set to route traffic to your CloudFront distribution, you need to create a second alias resource record set when both of the following are true:<br />+ You enable IPv6 for the distribution<br />+ You're using alternate domain names in the URLs for your objects<br /><br />For more information, see &#91;Routing Traffic to an Amazon CloudFront Web Distribution by Using Your Domain Name&#93;(https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-cloudfront-distribution.html) in the &#42;Developer Guide&#42;.<br />If you created a CNAME resource record set, either with R53AWSIntlong or with another DNS service, you don't need to make any changes. A CNAME record will route traffic to your distribution regardless of the IP address format of the viewer request."
      },
      {
        "name": "logging",
        "type": "object",
        "description": "A complex type that controls whether access logs are written for the distribution.<br />For more information about logging, see &#91;Access Logs&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html) in the &#42;Amazon CloudFront Developer Guide&#42;.",
        "children": [
          {
            "name": "bucket",
            "type": "string",
            "description": "The Amazon S3 bucket to store the access logs in, for example, &#96;&#96;amzn-s3-demo-bucket.s3.amazonaws.com&#96;&#96;."
          },
          {
            "name": "include_cookies",
            "type": "boolean",
            "description": "Specifies whether you want CloudFront to include cookies in access logs, specify &#96;&#96;true&#96;&#96; for &#96;&#96;IncludeCookies&#96;&#96;. If you choose to include cookies in logs, CloudFront logs all cookies regardless of how you configure the cache behaviors for this distribution. If you don't want to include cookies when you create a distribution or if you want to disable include cookies for an existing distribution, specify &#96;&#96;false&#96;&#96; for &#96;&#96;IncludeCookies&#96;&#96;."
          },
          {
            "name": "prefix",
            "type": "string",
            "description": "An optional string that you want CloudFront to prefix to the access log &#96;&#96;filenames&#96;&#96; for this distribution, for example, &#96;&#96;myprefix/&#96;&#96;. If you want to enable logging, but you don't want to specify a prefix, you still must include an empty &#96;&#96;Prefix&#96;&#96; element in the &#96;&#96;Logging&#96;&#96; element."
          }
        ]
      },
      {
        "name": "origin_groups",
        "type": "object",
        "description": "A complex type that contains information about origin groups for this distribution.<br />Specify a value for either the &#96;&#96;Origins&#96;&#96; or &#96;&#96;OriginGroups&#96;&#96; property.",
        "children": [
          {
            "name": "items",
            "type": "array",
            "description": "The items (origin groups) in a distribution.",
            "children": [
              {
                "name": "failover_criteria",
                "type": "object",
                "description": "A complex type that contains information about the failover criteria for an origin group."
              },
              {
                "name": "id",
                "type": "string",
                "description": "The origin group's ID."
              },
              {
                "name": "members",
                "type": "object",
                "description": "A complex type that contains information about the origins in an origin group."
              },
              {
                "name": "selection_criteria",
                "type": "string",
                "description": "The selection criteria for the origin group. For more information, see &#91;Create an origin group&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/high&#95;availability&#95;origin&#95;failover.html#concept&#95;origin&#95;groups.creating) in the &#42;Amazon CloudFront Developer Guide&#42;."
              }
            ]
          },
          {
            "name": "quantity",
            "type": "integer",
            "description": "The number of origin groups."
          }
        ]
      },
      {
        "name": "origins",
        "type": "array",
        "description": "A complex type that contains information about origins for this distribution.<br />Specify a value for either the &#96;&#96;Origins&#96;&#96; or &#96;&#96;OriginGroups&#96;&#96; property.",
        "children": [
          {
            "name": "connection_attempts",
            "type": "integer",
            "description": "The number of times that CloudFront attempts to connect to the origin. The minimum number is 1, the maximum is 3, and the default (if you don't specify otherwise) is 3.<br />For a custom origin (including an Amazon S3 bucket that's configured with static website hosting), this value also specifies the number of times that CloudFront attempts to get a response from the origin, in the case of an &#91;Origin Response Timeout&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginResponseTimeout).<br />For more information, see &#91;Origin Connection Attempts&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#origin-connection-attempts) in the &#42;Amazon CloudFront Developer Guide&#42;."
          },
          {
            "name": "connection_timeout",
            "type": "integer",
            "description": "The number of seconds that CloudFront waits when trying to establish a connection to the origin. The minimum timeout is 1 second, the maximum is 10 seconds, and the default (if you don't specify otherwise) is 10 seconds.<br />For more information, see &#91;Origin Connection Timeout&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#origin-connection-timeout) in the &#42;Amazon CloudFront Developer Guide&#42;."
          },
          {
            "name": "response_completion_timeout",
            "type": "integer",
            "description": ""
          },
          {
            "name": "custom_origin_config",
            "type": "object",
            "description": "Use this type to specify an origin that is not an Amazon S3 bucket, with one exception. If the Amazon S3 bucket is configured with static website hosting, use this type. If the Amazon S3 bucket is not configured with static website hosting, use the &#96;&#96;S3OriginConfig&#96;&#96; type instead.",
            "children": [
              {
                "name": "h_tt_pport",
                "type": "integer",
                "description": "The HTTP port that CloudFront uses to connect to the origin. Specify the HTTP port that the origin listens on."
              },
              {
                "name": "h_tt_ps_port",
                "type": "integer",
                "description": "The HTTPS port that CloudFront uses to connect to the origin. Specify the HTTPS port that the origin listens on."
              },
              {
                "name": "origin_keepalive_timeout",
                "type": "integer",
                "description": "Specifies how long, in seconds, CloudFront persists its connection to the origin. The minimum timeout is 1 second, the maximum is 120 seconds, and the default (if you don't specify otherwise) is 5 seconds.<br />For more information, see &#91;Keep-alive timeout (custom origins only)&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginKeepaliveTimeout) in the &#42;Amazon CloudFront Developer Guide&#42;."
              },
              {
                "name": "origin_protocol_policy",
                "type": "string",
                "description": "Specifies the protocol (HTTP or HTTPS) that CloudFront uses to connect to the origin. Valid values are:<br />+ &#96;&#96;http-only&#96;&#96; – CloudFront always uses HTTP to connect to the origin.<br />+ &#96;&#96;match-viewer&#96;&#96; – CloudFront connects to the origin using the same protocol that the viewer used to connect to CloudFront.<br />+ &#96;&#96;https-only&#96;&#96; – CloudFront always uses HTTPS to connect to the origin."
              },
              {
                "name": "origin_read_timeout",
                "type": "integer",
                "description": "Specifies how long, in seconds, CloudFront waits for a response from the origin. This is also known as the &#42;origin response timeout&#42;. The minimum timeout is 1 second, the maximum is 120 seconds, and the default (if you don't specify otherwise) is 30 seconds.<br />For more information, see &#91;Response timeout (custom origins only)&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginResponseTimeout) in the &#42;Amazon CloudFront Developer Guide&#42;."
              },
              {
                "name": "origin_ss_lprotocols",
                "type": "array",
                "description": "Specifies the minimum SSL/TLS protocol that CloudFront uses when connecting to your origin over HTTPS. Valid values include &#96;&#96;SSLv3&#96;&#96;, &#96;&#96;TLSv1&#96;&#96;, &#96;&#96;TLSv1.1&#96;&#96;, and &#96;&#96;TLSv1.2&#96;&#96;.<br />For more information, see &#91;Minimum Origin SSL Protocol&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginSSLProtocols) in the &#42;Amazon CloudFront Developer Guide&#42;."
              },
              {
                "name": "ip_address_type",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "domain_name",
            "type": "string",
            "description": "The domain name for the origin.<br />For more information, see &#91;Origin Domain Name&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesDomainName) in the &#42;Amazon CloudFront Developer Guide&#42;."
          },
          {
            "name": "id",
            "type": "string",
            "description": "A unique identifier for the origin. This value must be unique within the distribution.<br />Use this value to specify the &#96;&#96;TargetOriginId&#96;&#96; in a &#96;&#96;CacheBehavior&#96;&#96; or &#96;&#96;DefaultCacheBehavior&#96;&#96;."
          },
          {
            "name": "origin_access_control_id",
            "type": "string",
            "description": "The unique identifier of an origin access control for this origin.<br />For more information, see &#91;Restricting access to an Amazon S3 origin&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html) in the &#42;Amazon CloudFront Developer Guide&#42;."
          },
          {
            "name": "origin_custom_headers",
            "type": "array",
            "description": "A list of HTTP header names and values that CloudFront adds to the requests that it sends to the origin.<br />For more information, see &#91;Adding Custom Headers to Origin Requests&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/add-origin-custom-headers.html) in the &#42;Amazon CloudFront Developer Guide&#42;.",
            "children": [
              {
                "name": "header_name",
                "type": "string",
                "description": "The name of a header that you want CloudFront to send to your origin. For more information, see &#91;Adding Custom Headers to Origin Requests&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/forward-custom-headers.html) in the &#42;Amazon CloudFront Developer Guide&#42;."
              },
              {
                "name": "header_value",
                "type": "string",
                "description": "The value for the header that you specified in the &#96;&#96;HeaderName&#96;&#96; field."
              }
            ]
          },
          {
            "name": "origin_path",
            "type": "string",
            "description": "An optional path that CloudFront appends to the origin domain name when CloudFront requests content from the origin.<br />For more information, see &#91;Origin Path&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginPath) in the &#42;Amazon CloudFront Developer Guide&#42;."
          },
          {
            "name": "origin_shield",
            "type": "object",
            "description": "CloudFront Origin Shield. Using Origin Shield can help reduce the load on your origin.<br />For more information, see &#91;Using Origin Shield&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html) in the &#42;Amazon CloudFront Developer Guide&#42;.",
            "children": [
              {
                "name": "enabled",
                "type": "boolean",
                "description": "A flag that specifies whether Origin Shield is enabled.<br />When it's enabled, CloudFront routes all requests through Origin Shield, which can help protect your origin. When it's disabled, CloudFront might send requests directly to your origin from multiple edge locations or regional edge caches."
              },
              {
                "name": "origin_shield_region",
                "type": "string",
                "description": "The AWS-Region for Origin Shield.<br />Specify the AWS-Region that has the lowest latency to your origin. To specify a region, use the region code, not the region name. For example, specify the US East (Ohio) region as &#96;&#96;us-east-2&#96;&#96;.<br />When you enable CloudFront Origin Shield, you must specify the AWS-Region for Origin Shield. For the list of AWS-Regions that you can specify, and for help choosing the best Region for your origin, see &#91;Choosing the for Origin Shield&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html#choose-origin-shield-region) in the &#42;Amazon CloudFront Developer Guide&#42;."
              }
            ]
          },
          {
            "name": "s3_origin_config",
            "type": "object",
            "description": "Use this type to specify an origin that is an Amazon S3 bucket that is not configured with static website hosting. To specify any other type of origin, including an Amazon S3 bucket that is configured with static website hosting, use the &#96;&#96;CustomOriginConfig&#96;&#96; type instead.",
            "children": [
              {
                "name": "origin_access_identity",
                "type": "string",
                "description": "If you're using origin access control (OAC) instead of origin access identity, specify an empty &#96;&#96;OriginAccessIdentity&#96;&#96; element. For more information, see &#91;Restricting access to an&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-origin.html) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />The CloudFront origin access identity to associate with the origin. Use an origin access identity to configure the origin so that viewers can &#42;only&#42; access objects in an Amazon S3 bucket through CloudFront. The format of the value is:<br />&#96;&#96;origin-access-identity/cloudfront/ID-of-origin-access-identity&#96;&#96; <br />The &#96;&#96;ID-of-origin-access-identity&#96;&#96; is the value that CloudFront returned in the &#96;&#96;ID&#96;&#96; element when you created the origin access identity.<br />If you want viewers to be able to access objects using either the CloudFront URL or the Amazon S3 URL, specify an empty &#96;&#96;OriginAccessIdentity&#96;&#96; element.<br />To delete the origin access identity from an existing distribution, update the distribution configuration and include an empty &#96;&#96;OriginAccessIdentity&#96;&#96; element.<br />To replace the origin access identity, update the distribution configuration and specify the new origin access identity.<br />For more information about the origin access identity, see &#91;Serving Private Content through CloudFront&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) in the &#42;Amazon CloudFront Developer Guide&#42;."
              },
              {
                "name": "origin_read_timeout",
                "type": "integer",
                "description": ""
              }
            ]
          },
          {
            "name": "vpc_origin_config",
            "type": "object",
            "description": "The VPC origin configuration.",
            "children": [
              {
                "name": "origin_keepalive_timeout",
                "type": "integer",
                "description": "Specifies how long, in seconds, CloudFront persists its connection to the origin. The minimum timeout is 1 second, the maximum is 120 seconds, and the default (if you don't specify otherwise) is 5 seconds.<br />For more information, see &#91;Keep-alive timeout (custom origins only)&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginKeepaliveTimeout) in the &#42;Amazon CloudFront Developer Guide&#42;."
              },
              {
                "name": "origin_read_timeout",
                "type": "integer",
                "description": "Specifies how long, in seconds, CloudFront waits for a response from the origin. This is also known as the &#42;origin response timeout&#42;. The minimum timeout is 1 second, the maximum is 120 seconds, and the default (if you don't specify otherwise) is 30 seconds.<br />For more information, see &#91;Response timeout (custom origins only)&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginResponseTimeout) in the &#42;Amazon CloudFront Developer Guide&#42;."
              },
              {
                "name": "vpc_origin_id",
                "type": "string",
                "description": "The VPC origin ID."
              }
            ]
          }
        ]
      },
      {
        "name": "price_class",
        "type": "string",
        "description": "This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see &#91;Unsupported features for SaaS Manager for Amazon CloudFront&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />The price class that corresponds with the maximum price that you want to pay for CloudFront service. If you specify &#96;&#96;PriceClass&#95;All&#96;&#96;, CloudFront responds to requests for your objects from all CloudFront edge locations.<br />If you specify a price class other than &#96;&#96;PriceClass&#95;All&#96;&#96;, CloudFront serves your objects from the CloudFront edge location that has the lowest latency among the edge locations in your price class. Viewers who are in or near regions that are excluded from your specified price class may encounter slower performance.<br />For more information about price classes, see &#91;Choosing the Price Class for a CloudFront Distribution&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PriceClass.html) in the &#42;Amazon CloudFront Developer Guide&#42;. For information about CloudFront pricing, including how price classes (such as Price Class 100) map to CloudFront regions, see &#91;Amazon CloudFront Pricing&#93;(https://docs.aws.amazon.com/cloudfront/pricing/)."
      },
      {
        "name": "restrictions",
        "type": "object",
        "description": "A complex type that identifies ways in which you want to restrict distribution of your content.",
        "children": [
          {
            "name": "geo_restriction",
            "type": "object",
            "description": "A complex type that controls the countries in which your content is distributed. CF determines the location of your users using &#96;&#96;MaxMind&#96;&#96; GeoIP databases. To disable geo restriction, remove the &#91;Restrictions&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-distributionconfig.html#cfn-cloudfront-distribution-distributionconfig-restrictions) property from your stack template.",
            "children": [
              {
                "name": "locations",
                "type": "array",
                "description": "A complex type that contains a &#96;&#96;Location&#96;&#96; element for each country in which you want CloudFront either to distribute your content (&#96;&#96;whitelist&#96;&#96;) or not distribute your content (&#96;&#96;blacklist&#96;&#96;).<br />The &#96;&#96;Location&#96;&#96; element is a two-letter, uppercase country code for a country that you want to include in your &#96;&#96;blacklist&#96;&#96; or &#96;&#96;whitelist&#96;&#96;. Include one &#96;&#96;Location&#96;&#96; element for each country.<br />CloudFront and &#96;&#96;MaxMind&#96;&#96; both use &#96;&#96;ISO 3166&#96;&#96; country codes. For the current list of countries and the corresponding codes, see &#96;&#96;ISO 3166-1-alpha-2&#96;&#96; code on the &#42;International Organization for Standardization&#42; website. You can also refer to the country list on the CloudFront console, which includes both country names and codes."
              },
              {
                "name": "restriction_type",
                "type": "string",
                "description": "The method that you want to use to restrict distribution of your content by country:<br />+ &#96;&#96;none&#96;&#96;: No geo restriction is enabled, meaning access to content is not restricted by client geo location.<br />+ &#96;&#96;blacklist&#96;&#96;: The &#96;&#96;Location&#96;&#96; elements specify the countries in which you don't want CloudFront to distribute your content.<br />+ &#96;&#96;whitelist&#96;&#96;: The &#96;&#96;Location&#96;&#96; elements specify the countries in which you want CloudFront to distribute your content."
              }
            ]
          }
        ]
      },
      {
        "name": "s3_origin",
        "type": "object",
        "description": "The origin as an S3 bucket.<br />This property is legacy. We recommend that you use &#91;Origin&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origin.html) instead.",
        "children": [
          {
            "name": "dns_name",
            "type": "string",
            "description": "The domain name assigned to your CF distribution."
          },
          {
            "name": "origin_access_identity",
            "type": "string",
            "description": "The CF origin access identity to associate with the distribution. Use an origin access identity to configure the distribution so that end users can only access objects in an S3 through CF.<br />This property is legacy. We recommend that you use &#91;OriginAccessControl&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originaccesscontrol.html) instead."
          }
        ]
      },
      {
        "name": "staging",
        "type": "boolean",
        "description": "This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see &#91;Unsupported features for SaaS Manager for Amazon CloudFront&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />A Boolean that indicates whether this is a staging distribution. When this value is &#96;&#96;true&#96;&#96;, this is a staging distribution. When this value is &#96;&#96;false&#96;&#96;, this is not a staging distribution."
      },
      {
        "name": "tenant_config",
        "type": "object",
        "description": "This field only supports multi-tenant distributions. You can't specify this field for standard distributions. For more information, see &#91;Unsupported features for SaaS Manager for Amazon CloudFront&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />A distribution tenant configuration.",
        "children": [
          {
            "name": "parameter_definitions",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "name",
                "type": "string",
                "description": "The name of the parameter."
              },
              {
                "name": "definition",
                "type": "object",
                "description": "The value that you assigned to the parameter."
              }
            ]
          }
        ]
      },
      {
        "name": "viewer_certificate",
        "type": "object",
        "description": "A complex type that determines the distribution's SSL/TLS configuration for communicating with viewers.",
        "children": [
          {
            "name": "acm_certificate_arn",
            "type": "string",
            "description": "In CloudFormation, this field name is &#96;&#96;AcmCertificateArn&#96;&#96;. Note the different capitalization.<br />If the distribution uses &#96;&#96;Aliases&#96;&#96; (alternate domain names or CNAMEs) and the SSL/TLS certificate is stored in &#91;(ACM)&#93;(https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html), provide the Amazon Resource Name (ARN) of the ACM certificate. CloudFront only supports ACM certificates in the US East (N. Virginia) Region (&#96;&#96;us-east-1&#96;&#96;).<br />If you specify an ACM certificate ARN, you must also specify values for &#96;&#96;MinimumProtocolVersion&#96;&#96; and &#96;&#96;SSLSupportMethod&#96;&#96;. (In CloudFormation, the field name is &#96;&#96;SslSupportMethod&#96;&#96;. Note the different capitalization.)"
          },
          {
            "name": "cloud_front_default_certificate",
            "type": "boolean",
            "description": "If the distribution uses the CloudFront domain name such as &#96;&#96;d111111abcdef8.cloudfront.net&#96;&#96;, set this field to &#96;&#96;true&#96;&#96;.<br />If the distribution uses &#96;&#96;Aliases&#96;&#96; (alternate domain names or CNAMEs), omit this field and specify values for the following fields:<br />+ &#96;&#96;AcmCertificateArn&#96;&#96; or &#96;&#96;IamCertificateId&#96;&#96; (specify a value for one, not both) <br />+ &#96;&#96;MinimumProtocolVersion&#96;&#96; <br />+ &#96;&#96;SslSupportMethod&#96;&#96;"
          },
          {
            "name": "iam_certificate_id",
            "type": "string",
            "description": "This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see &#91;Unsupported features for SaaS Manager for Amazon CloudFront&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />In CloudFormation, this field name is &#96;&#96;IamCertificateId&#96;&#96;. Note the different capitalization.<br />If the distribution uses &#96;&#96;Aliases&#96;&#96; (alternate domain names or CNAMEs) and the SSL/TLS certificate is stored in &#91;(IAM)&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/id&#95;credentials&#95;server-certs.html), provide the ID of the IAM certificate.<br />If you specify an IAM certificate ID, you must also specify values for &#96;&#96;MinimumProtocolVersion&#96;&#96; and &#96;&#96;SSLSupportMethod&#96;&#96;. (In CloudFormation, the field name is &#96;&#96;SslSupportMethod&#96;&#96;. Note the different capitalization.)"
          },
          {
            "name": "minimum_protocol_version",
            "type": "string",
            "description": "If the distribution uses &#96;&#96;Aliases&#96;&#96; (alternate domain names or CNAMEs), specify the security policy that you want CloudFront to use for HTTPS connections with viewers. The security policy determines two settings:<br />+ The minimum SSL/TLS protocol that CloudFront can use to communicate with viewers.<br />+ The ciphers that CloudFront can use to encrypt the content that it returns to viewers.<br /><br />For more information, see &#91;Security Policy&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValues-security-policy) and &#91;Supported Protocols and Ciphers Between Viewers and CloudFront&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/secure-connections-supported-viewer-protocols-ciphers.html#secure-connections-supported-ciphers) in the &#42;Amazon CloudFront Developer Guide&#42;.<br />On the CloudFront console, this setting is called &#42;Security Policy&#42;.<br />When you're using SNI only (you set &#96;&#96;SSLSupportMethod&#96;&#96; to &#96;&#96;sni-only&#96;&#96;), you must specify &#96;&#96;TLSv1&#96;&#96; or higher. (In CloudFormation, the field name is &#96;&#96;SslSupportMethod&#96;&#96;. Note the different capitalization.)<br />If the distribution uses the CloudFront domain name such as &#96;&#96;d111111abcdef8.cloudfront.net&#96;&#96; (you set &#96;&#96;CloudFrontDefaultCertificate&#96;&#96; to &#96;&#96;true&#96;&#96;), CloudFront automatically sets the security policy to &#96;&#96;TLSv1&#96;&#96; regardless of the value that you set here."
          },
          {
            "name": "ssl_support_method",
            "type": "string",
            "description": "In CloudFormation, this field name is &#96;&#96;SslSupportMethod&#96;&#96;. Note the different capitalization.<br />If the distribution uses &#96;&#96;Aliases&#96;&#96; (alternate domain names or CNAMEs), specify which viewers the distribution accepts HTTPS connections from.<br />+ &#96;&#96;sni-only&#96;&#96; – The distribution accepts HTTPS connections from only viewers that support &#91;server name indication (SNI)&#93;(https://docs.aws.amazon.com/https://en.wikipedia.org/wiki/Server&#95;Name&#95;Indication). This is recommended. Most browsers and clients support SNI.<br />+ &#96;&#96;vip&#96;&#96; – The distribution accepts HTTPS connections from all viewers including those that don't support SNI. This is not recommended, and results in additional monthly charges from CloudFront.<br />+ &#96;&#96;static-ip&#96;&#96; - Do not specify this value unless your distribution has been enabled for this feature by the CloudFront team. If you have a use case that requires static IP addresses for a distribution, contact CloudFront through the &#91;Center&#93;(https://docs.aws.amazon.com/support/home).<br /><br />If the distribution uses the CloudFront domain name such as &#96;&#96;d111111abcdef8.cloudfront.net&#96;&#96;, don't set a value for this field."
          }
        ]
      },
      {
        "name": "web_acl_id",
        "type": "string",
        "description": "Multi-tenant distributions only support WAF V2 web ACLs.<br />A unique identifier that specifies the WAF web ACL, if any, to associate with this distribution. To specify a web ACL created using the latest version of WAF, use the ACL ARN, for example &#96;&#96;arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111&#96;&#96;. To specify a web ACL created using WAF Classic, use the ACL ID, for example &#96;&#96;a1b2c3d4-5678-90ab-cdef-EXAMPLE11111&#96;&#96;.<br />WAF is a web application firewall that lets you monitor the HTTP and HTTPS requests that are forwarded to CloudFront, and lets you control access to your content. Based on conditions that you specify, such as the IP addresses that requests originate from or the values of query strings, CloudFront responds to requests either with the requested content or with an HTTP 403 status code (Forbidden). You can also configure CloudFront to return a custom error page when a request is blocked. For more information about WAF, see the &#91;Developer Guide&#93;(https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html)."
      }
    ]
  },
  {
    "name": "domain_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A complex type that contains zero or more &#96;&#96;Tag&#96;&#96; elements.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "A string that contains &#96;&#96;Tag&#96;&#96; key.<br />The string length should be between 1 and 128 characters. Valid characters include &#96;&#96;a-z&#96;&#96;, &#96;&#96;A-Z&#96;&#96;, &#96;&#96;0-9&#96;&#96;, space, and the special characters &#96;&#96;&#95; - . : / = + @&#96;&#96;."
      },
      {
        "name": "value",
        "type": "string",
        "description": "A string that contains an optional &#96;&#96;Tag&#96;&#96; value.<br />The string length should be between 0 and 256 characters. Valid characters include &#96;&#96;a-z&#96;&#96;, &#96;&#96;A-Z&#96;&#96;, &#96;&#96;0-9&#96;&#96;, space, and the special characters &#96;&#96;&#95; - . : / = + @&#96;&#96;."
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distribution.html"><code>AWS::CloudFront::Distribution</code></a>.

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
    <td><CopyableCode code="DistributionConfig, region" /></td>
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
distribution_config,
domain_name,
id,
tags
FROM awscc.cloudfront.distributions
WHERE region = 'us-east-1' AND Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>distributions</code> in a region.
```sql
SELECT
region,
id
FROM awscc.cloudfront.distributions_list_only
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
INSERT INTO awscc.cloudfront.distributions (
 DistributionConfig,
 region
)
SELECT
'{{ distribution_config }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cloudfront.distributions (
 DistributionConfig,
 Tags,
 region
)
SELECT
 '{{ distribution_config }}',
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
  - name: distribution
    props:
      - name: distribution_config
        value:
          aliases:
            - '{{ aliases[0] }}'
          anycast_ip_list_id: '{{ anycast_ip_list_id }}'
          cnames:
            - '{{ cnames[0] }}'
          cache_behaviors:
            - allowed_methods:
                - '{{ allowed_methods[0] }}'
              cache_policy_id: '{{ cache_policy_id }}'
              cached_methods:
                - '{{ cached_methods[0] }}'
              compress: '{{ compress }}'
              default_ttl: null
              field_level_encryption_id: '{{ field_level_encryption_id }}'
              forwarded_values:
                cookies:
                  forward: '{{ forward }}'
                  whitelisted_names:
                    - '{{ whitelisted_names[0] }}'
                headers:
                  - '{{ headers[0] }}'
                query_string: '{{ query_string }}'
                query_string_cache_keys:
                  - '{{ query_string_cache_keys[0] }}'
              function_associations:
                - event_type: '{{ event_type }}'
                  function_arn: '{{ function_arn }}'
              grpc_config:
                enabled: '{{ enabled }}'
              lambda_function_associations:
                - event_type: '{{ event_type }}'
                  include_body: '{{ include_body }}'
                  lambda_function_arn: '{{ lambda_function_arn }}'
              max_ttl: null
              min_ttl: null
              origin_request_policy_id: '{{ origin_request_policy_id }}'
              path_pattern: '{{ path_pattern }}'
              realtime_log_config_arn: '{{ realtime_log_config_arn }}'
              response_headers_policy_id: '{{ response_headers_policy_id }}'
              smooth_streaming: '{{ smooth_streaming }}'
              target_origin_id: '{{ target_origin_id }}'
              trusted_key_groups:
                - '{{ trusted_key_groups[0] }}'
              trusted_signers:
                - '{{ trusted_signers[0] }}'
              viewer_protocol_policy: '{{ viewer_protocol_policy }}'
          comment: '{{ comment }}'
          connection_mode: '{{ connection_mode }}'
          continuous_deployment_policy_id: '{{ continuous_deployment_policy_id }}'
          custom_error_responses:
            - error_caching_min_ttl: null
              error_code: '{{ error_code }}'
              response_code: '{{ response_code }}'
              response_page_path: '{{ response_page_path }}'
          custom_origin:
            dns_name: '{{ dns_name }}'
            h_tt_pport: '{{ h_tt_pport }}'
            h_tt_ps_port: '{{ h_tt_ps_port }}'
            origin_protocol_policy: '{{ origin_protocol_policy }}'
            origin_ss_lprotocols:
              - '{{ origin_ss_lprotocols[0] }}'
          default_cache_behavior:
            allowed_methods:
              - '{{ allowed_methods[0] }}'
            cache_policy_id: '{{ cache_policy_id }}'
            cached_methods:
              - '{{ cached_methods[0] }}'
            compress: '{{ compress }}'
            default_ttl: null
            field_level_encryption_id: '{{ field_level_encryption_id }}'
            forwarded_values: null
            function_associations:
              - null
            grpc_config: null
            lambda_function_associations:
              - null
            max_ttl: null
            min_ttl: null
            origin_request_policy_id: '{{ origin_request_policy_id }}'
            realtime_log_config_arn: '{{ realtime_log_config_arn }}'
            response_headers_policy_id: '{{ response_headers_policy_id }}'
            smooth_streaming: '{{ smooth_streaming }}'
            target_origin_id: '{{ target_origin_id }}'
            trusted_key_groups:
              - '{{ trusted_key_groups[0] }}'
            trusted_signers:
              - '{{ trusted_signers[0] }}'
            viewer_protocol_policy: '{{ viewer_protocol_policy }}'
          default_root_object: '{{ default_root_object }}'
          enabled: '{{ enabled }}'
          http_version: '{{ http_version }}'
          ip_v6_enabled: '{{ ip_v6_enabled }}'
          logging:
            bucket: '{{ bucket }}'
            include_cookies: '{{ include_cookies }}'
            prefix: '{{ prefix }}'
          origin_groups:
            items:
              - failover_criteria:
                  status_codes:
                    items:
                      - '{{ items[0] }}'
                    quantity: '{{ quantity }}'
                id: '{{ id }}'
                members:
                  items:
                    - origin_id: '{{ origin_id }}'
                  quantity: '{{ quantity }}'
                selection_criteria: '{{ selection_criteria }}'
            quantity: '{{ quantity }}'
          origins:
            - connection_attempts: '{{ connection_attempts }}'
              connection_timeout: '{{ connection_timeout }}'
              response_completion_timeout: '{{ response_completion_timeout }}'
              custom_origin_config:
                h_tt_pport: '{{ h_tt_pport }}'
                h_tt_ps_port: '{{ h_tt_ps_port }}'
                origin_keepalive_timeout: '{{ origin_keepalive_timeout }}'
                origin_protocol_policy: '{{ origin_protocol_policy }}'
                origin_read_timeout: '{{ origin_read_timeout }}'
                origin_ss_lprotocols:
                  - '{{ origin_ss_lprotocols[0] }}'
                ip_address_type: '{{ ip_address_type }}'
              domain_name: '{{ domain_name }}'
              id: '{{ id }}'
              origin_access_control_id: '{{ origin_access_control_id }}'
              origin_custom_headers:
                - header_name: '{{ header_name }}'
                  header_value: '{{ header_value }}'
              origin_path: '{{ origin_path }}'
              origin_shield:
                enabled: '{{ enabled }}'
                origin_shield_region: '{{ origin_shield_region }}'
              s3_origin_config:
                origin_access_identity: '{{ origin_access_identity }}'
                origin_read_timeout: '{{ origin_read_timeout }}'
              vpc_origin_config:
                origin_keepalive_timeout: '{{ origin_keepalive_timeout }}'
                origin_read_timeout: '{{ origin_read_timeout }}'
                vpc_origin_id: '{{ vpc_origin_id }}'
          price_class: '{{ price_class }}'
          restrictions:
            geo_restriction:
              locations:
                - '{{ locations[0] }}'
              restriction_type: '{{ restriction_type }}'
          s3_origin:
            dns_name: '{{ dns_name }}'
            origin_access_identity: '{{ origin_access_identity }}'
          staging: '{{ staging }}'
          tenant_config:
            parameter_definitions:
              - name: '{{ name }}'
                definition:
                  string_schema:
                    comment: '{{ comment }}'
                    default_value: '{{ default_value }}'
                    required: '{{ required }}'
          viewer_certificate:
            acm_certificate_arn: '{{ acm_certificate_arn }}'
            cloud_front_default_certificate: '{{ cloud_front_default_certificate }}'
            iam_certificate_id: '{{ iam_certificate_id }}'
            minimum_protocol_version: '{{ minimum_protocol_version }}'
            ssl_support_method: '{{ ssl_support_method }}'
          web_acl_id: '{{ web_acl_id }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>distribution</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cloudfront.distributions
SET PatchDocument = string('{{ {
    "DistributionConfig": distribution_config,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudfront.distributions
WHERE Identifier = '{{ id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>distributions</code> resource, the following permissions are required:

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
cloudfront:CreateConnectionGroup,
cloudfront:CreateDistribution,
cloudfront:CreateDistributionWithTags,
cloudfront:GetConnectionGroup,
cloudfront:GetDistribution,
cloudfront:GetDistributionConfig,
cloudfront:TagResource
```

</TabItem>
<TabItem value="delete">

```json
cloudfront:DeleteDistribution,
cloudfront:GetDistribution,
cloudfront:GetDistributionConfig
```

</TabItem>
<TabItem value="list">

```json
cloudfront:ListTagsForResource,
cloudfront:ListDistributions
```

</TabItem>
<TabItem value="read">

```json
cloudfront:GetDistribution,
cloudfront:GetDistributionConfig
```

</TabItem>
<TabItem value="update">

```json
cloudfront:CreateConnectionGroup,
cloudfront:GetConnectionGroup,
cloudfront:GetDistribution,
cloudfront:GetDistributionConfig,
cloudfront:UpdateDistribution,
cloudfront:UpdateDistributionWithStagingConfig,
cloudfront:ListTagsForResource,
cloudfront:TagResource,
cloudfront:UntagResource
```

</TabItem>
</Tabs>