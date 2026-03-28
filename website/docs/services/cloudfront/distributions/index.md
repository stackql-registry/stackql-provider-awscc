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

import CodeBlock from '@theme/CodeBlock';
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
        "description": "<details><summary>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas\">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</summary>A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.</details>"
      },
      {
        "name": "anycast_ip_list_id",
        "type": "string",
        "description": "<details><summary>To use this field for a multi-tenant distribution, use a connection group instead. For more information, see <a href=\"https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ConnectionGroup.html\">ConnectionGroup</a>.</summary>ID of the Anycast static IP list that is associated with the distribution.</details>"
      },
      {
        "name": "cnames",
        "type": "array",
        "description": "<details><summary>An alias for the CF distribution's domain name.</summary>This property is legacy. We recommend that you use <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-distributionconfig.html#cfn-cloudfront-distribution-distributionconfig-aliases\">Aliases</a> instead.</details>"
      },
      {
        "name": "cache_behaviors",
        "type": "array",
        "description": "A complex type that contains zero or more <code>CacheBehavior</code> elements.",
        "children": [
          {
            "name": "allowed_methods",
            "type": "array",
            "description": "<details><summary>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</summary>+  CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.<br />+  CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.<br />+  CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.<br />If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</details>"
          },
          {
            "name": "cache_policy_id",
            "type": "string",
            "description": "<details><summary>The unique identifier of the cache policy that is attached to this cache behavior. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy\">Creating cache policies</a> or <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html\">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</summary>A <code>CacheBehavior</code> must include either a <code>CachePolicyId</code> or <code>ForwardedValues</code>. We recommend that you use a <code>CachePolicyId</code>.</details>"
          },
          {
            "name": "cached_methods",
            "type": "array",
            "description": "<details><summary>A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:</summary>+  CloudFront caches responses to <code>GET</code> and <code>HEAD</code> requests.<br />+  CloudFront caches responses to <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.<br />If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly.</details>"
          },
          {
            "name": "compress",
            "type": "boolean",
            "description": "Whether you want CloudFront to automatically compress certain files for this cache behavior. If so, specify true; if not, specify false. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html\">Serving Compressed Files</a> in the <i>Amazon CloudFront Developer Guide</i>."
          },
          {
            "name": "default_ttl",
            "type": "number",
            "description": "<details><summary>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas\">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</summary>This field is deprecated. We recommend that you use the <code>DefaultTTL</code> field in a cache policy instead of this field. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy\">Creating cache policies</a> or <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html\">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />The default amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin does not add HTTP headers such as <code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and <code>Expires</code> to objects. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html\">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
          },
          {
            "name": "field_level_encryption_id",
            "type": "string",
            "description": "The value of <code>ID</code> for the field-level encryption configuration that you want CloudFront to use for encrypting specific fields of data for this cache behavior."
          },
          {
            "name": "forwarded_values",
            "type": "object",
            "description": "<details><summary>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html\">Working with policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</summary>If you want to include values in the cache key, use a cache policy. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy\">Creating cache policies</a> or <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html\">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy\">Creating origin request policies</a> or <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html\">Using the managed origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />A <code>CacheBehavior</code> must include either a <code>CachePolicyId</code> or <code>ForwardedValues</code>. We recommend that you use a <code>CachePolicyId</code>.<br />A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.</details>",
            "children": [
              {
                "name": "cookies",
                "type": "object",
                "description": "<details><summary>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</summary>If you want to include cookies in the cache key, use a cache policy. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy\">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />If you want to send cookies to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy\">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html\">How CloudFront Forwards, Caches, and Logs Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
              },
              {
                "name": "headers",
                "type": "array",
                "description": "<details><summary>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</summary>If you want to include headers in the cache key, use a cache policy. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy\">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />If you want to send headers to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy\">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />A complex type that specifies the <code>Headers</code>, if any, that you want CloudFront to forward to the origin for this cache behavior (whitelisted headers). For the headers that you specify, CloudFront also caches separate versions of a specified object that is based on the header values in viewer requests.<br />For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html\">Caching Content Based on Request Headers</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
              },
              {
                "name": "query_string",
                "type": "boolean",
                "description": "<details><summary>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</summary>If you want to include query strings in the cache key, use a cache policy. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy\">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />If you want to send query strings to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy\">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />Indicates whether you want CloudFront to forward query strings to the origin that is associated with this cache behavior and cache based on the query string parameters. CloudFront behavior depends on the value of <code>QueryString</code> and on the values that you specify for <code>QueryStringCacheKeys</code>, if any:<br />If you specify true for <code>QueryString</code> and you don't specify any values for <code>QueryStringCacheKeys</code>, CloudFront forwards all query string parameters to the origin and caches based on all query string parameters. Depending on how many query string parameters and values you have, this can adversely affect performance because CloudFront must forward more requests to the origin.<br />If you specify true for <code>QueryString</code> and you specify one or more values for <code>QueryStringCacheKeys</code>, CloudFront forwards all query string parameters to the origin, but it only caches based on the query string parameters that you specify.<br />If you specify false for <code>QueryString</code>, CloudFront doesn't forward any query string parameters to the origin, and doesn't cache based on query string parameters.<br />For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/QueryStringParameters.html\">Configuring CloudFront to Cache Based on Query String Parameters</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
              },
              {
                "name": "query_string_cache_keys",
                "type": "array",
                "description": "<details><summary>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</summary>If you want to include query strings in the cache key, use a cache policy. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy\">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />If you want to send query strings to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy\">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />A complex type that contains information about the query string parameters that you want CloudFront to use for caching for this cache behavior.</details>"
              }
            ]
          },
          {
            "name": "function_associations",
            "type": "array",
            "description": "A list of CloudFront functions that are associated with this cache behavior. CloudFront functions must be published to the <code>LIVE</code> stage to associate them with a cache behavior.",
            "children": [
              {
                "name": "event_type",
                "type": "string",
                "description": "The event type of the function, either <code>viewer-request</code> or <code>viewer-response</code>. You cannot use origin-facing event types (<code>origin-request</code> and <code>origin-response</code>) with a CloudFront function."
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
                "description": "<details><summary>Specifies the event type that triggers a Lambda@Edge function invocation. You can specify the following values:</summary>+  <code>viewer-request</code>: The function executes when CloudFront receives a request from a viewer and before it checks to see whether the requested object is in the edge cache.<br />+  <code>origin-request</code>: The function executes only when CloudFront sends a request to your origin. When the requested object is in the edge cache, the function doesn't execute.<br />+  <code>origin-response</code>: The function executes after CloudFront receives a response from the origin and before it caches the object in the response. When the requested object is in the edge cache, the function doesn't execute.<br />+  <code>viewer-response</code>: The function executes before CloudFront returns the requested object to the viewer. The function executes regardless of whether the object was already in the edge cache.<br />If the origin returns an HTTP status code other than HTTP 200 (OK), the function doesn't execute.</details>"
              },
              {
                "name": "include_body",
                "type": "boolean",
                "description": "A flag that allows a Lambda@Edge function to have read access to the body content. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-include-body-access.html\">Accessing the Request Body by Choosing the Include Body Option</a> in the Amazon CloudFront Developer Guide."
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
            "description": "<details><summary>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas\">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</summary>This field is deprecated. We recommend that you use the <code>MaxTTL</code> field in a cache policy instead of this field. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy\">Creating cache policies</a> or <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html\">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />The maximum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin adds HTTP headers such as <code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and <code>Expires</code> to objects. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html\">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
          },
          {
            "name": "min_ttl",
            "type": "number",
            "description": "<details><summary>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas\">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</summary>This field is deprecated. We recommend that you use the <code>MinTTL</code> field in a cache policy instead of this field. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy\">Creating cache policies</a> or <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html\">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />The minimum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html\">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />You must specify <code>0</code> for <code>MinTTL</code> if you configure CloudFront to forward all headers to your origin (under <code>Headers</code>, if you specify <code>1</code> for <code>Quantity</code> and <code>*</code> for <code>Name</code>).</details>"
          },
          {
            "name": "origin_request_policy_id",
            "type": "string",
            "description": "The unique identifier of the origin request policy that is attached to this cache behavior. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy\">Creating origin request policies</a> or <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html\">Using the managed origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>."
          },
          {
            "name": "path_pattern",
            "type": "string",
            "description": "<details><summary>The pattern (for example, <code>images/*.jpg</code>) that specifies which requests to apply the behavior to. When CloudFront receives a viewer request, the requested path is compared with path patterns in the order in which cache behaviors are listed in the distribution.</summary>You can optionally include a slash (<code>/</code>) at the beginning of the path pattern. For example, <code>/images/*.jpg</code>. CloudFront behavior is the same with or without the leading <code>/</code>.<br />The path pattern for the default cache behavior is <code>*</code> and cannot be changed. If the request for an object does not match the path pattern for any cache behaviors, CloudFront applies the behavior in the default cache behavior.<br />For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesPathPattern\">Path Pattern</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
          },
          {
            "name": "realtime_log_config_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the real-time log configuration that is attached to this cache behavior. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html\">Real-time logs</a> in the <i>Amazon CloudFront Developer Guide</i>."
          },
          {
            "name": "response_headers_policy_id",
            "type": "string",
            "description": "The identifier for a response headers policy."
          },
          {
            "name": "smooth_streaming",
            "type": "boolean",
            "description": "<details><summary>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas\">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</summary>Indicates whether you want to distribute media files in the Microsoft Smooth Streaming format using the origin that is associated with this cache behavior. If so, specify <code>true</code>; if not, specify <code>false</code>. If you specify <code>true</code> for <code>SmoothStreaming</code>, you can still distribute other content using this cache behavior if the content matches the value of <code>PathPattern</code>.</details>"
          },
          {
            "name": "target_origin_id",
            "type": "string",
            "description": "The value of <code>ID</code> for the origin that you want CloudFront to route requests to when they match this cache behavior."
          },
          {
            "name": "trusted_key_groups",
            "type": "array",
            "description": "<details><summary>A list of key groups that CloudFront can use to validate signed URLs or signed cookies.</summary>When a cache behavior contains trusted key groups, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with a private key whose corresponding public key is in the key group. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html\">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
          },
          {
            "name": "trusted_signers",
            "type": "array",
            "description": "<details><summary>We recommend using <code>TrustedKeyGroups</code> instead of <code>TrustedSigners</code>.</summary>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas\">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />A list of AWS-account IDs whose public keys CloudFront can use to validate signed URLs or signed cookies.<br />When a cache behavior contains trusted signers, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with the private key of a CloudFront key pair in the trusted signer's AWS-account. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html\">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
          },
          {
            "name": "viewer_protocol_policy",
            "type": "string",
            "description": "<details><summary>The protocol that viewers can use to access the files in the origin specified by <code>TargetOriginId</code> when a request matches the path pattern in <code>PathPattern</code>. You can specify the following options:</summary>+  <code>allow-all</code>: Viewers can use HTTP or HTTPS.<br />+  <code>redirect-to-https</code>: If a viewer submits an HTTP request, CloudFront returns an HTTP status code of 301 (Moved Permanently) to the viewer along with the HTTPS URL. The viewer then resubmits the request using the new URL.<br />+  <code>https-only</code>: If a viewer sends an HTTP request, CloudFront returns an HTTP status code of 403 (Forbidden).<br />For more information about requiring the HTTPS protocol, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-viewers-to-cloudfront.html\">Requiring HTTPS Between Viewers and CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />The only way to guarantee that viewers retrieve an object that was fetched from the origin using HTTPS is never to use any other protocol to fetch the object. If you have recently changed from HTTP to HTTPS, we recommend that you clear your objects' cache because cached objects are protocol agnostic. That means that an edge location will return an object from the cache regardless of whether the current request protocol matches the protocol used previously. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html\">Managing Cache Expiration</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
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
        "description": "<details><summary>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas\">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</summary>The identifier of a continuous deployment policy. For more information, see <code>CreateContinuousDeploymentPolicy</code>.</details>"
      },
      {
        "name": "custom_error_responses",
        "type": "array",
        "description": "<details><summary>A complex type that controls the following:</summary>+  Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.<br />+  How long CloudFront caches HTTP status codes in the 4xx and 5xx range.<br />For more information about custom error pages, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html\">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>",
        "children": [
          {
            "name": "error_caching_min_ttl",
            "type": "number",
            "description": "<details><summary>The minimum amount of time, in seconds, that you want CloudFront to cache the HTTP status code specified in <code>ErrorCode</code>. When this time period has elapsed, CloudFront queries your origin to see whether the problem that caused the error has been resolved and the requested object is now available.</summary>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html\">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
          },
          {
            "name": "error_code",
            "type": "integer",
            "description": "The HTTP status code for which you want to specify a custom error page and/or a caching duration."
          },
          {
            "name": "response_code",
            "type": "integer",
            "description": "<details><summary>The HTTP status code that you want CloudFront to return to the viewer along with the custom error page. There are a variety of reasons that you might want CloudFront to return a status code different from the status code that your origin returned to CloudFront, for example:</summary>+  Some Internet devices (some firewalls and corporate proxies, for example) intercept HTTP 4xx and 5xx and prevent the response from being returned to the viewer. If you substitute <code>200</code>, the response typically won't be intercepted.<br />+  If you don't care about distinguishing among different client errors or server errors, you can specify <code>400</code> or <code>500</code> as the <code>ResponseCode</code> for all 4xx or 5xx errors.<br />+  You might want to return a <code>200</code> status code (OK) and static website so your customers don't know that your website is down.<br />If you specify a value for <code>ResponseCode</code>, you must also specify a value for <code>ResponsePagePath</code>.</details>"
          },
          {
            "name": "response_page_path",
            "type": "string",
            "description": "<details><summary>The path to the custom error page that you want CloudFront to return to a viewer when your origin returns the HTTP status code specified by <code>ErrorCode</code>, for example, <code>/4xx-errors/403-forbidden.html</code>. If you want to store your objects and your custom error pages in different locations, your distribution must include a cache behavior for which the following is true:</summary>+  The value of <code>PathPattern</code> matches the path to your custom error messages. For example, suppose you saved custom error pages for 4xx errors in an Amazon S3 bucket in a directory named <code>/4xx-errors</code>. Your distribution must include a cache behavior for which the path pattern routes requests for your custom error pages to that location, for example, <code>/4xx-errors/*</code>.<br />+  The value of <code>TargetOriginId</code> specifies the value of the <code>ID</code> element for the origin that contains your custom error pages.<br />If you specify a value for <code>ResponsePagePath</code>, you must also specify a value for <code>ResponseCode</code>.<br />We recommend that you store custom error pages in an Amazon S3 bucket. If you store custom error pages on an HTTP server and the server starts to return 5xx errors, CloudFront can't get the files that you want to return to viewers because the origin server is unavailable.</details>"
          }
        ]
      },
      {
        "name": "custom_origin",
        "type": "object",
        "description": "<details><summary>The user-defined HTTP server that serves as the origin for content that CF distributes.</summary>This property is legacy. We recommend that you use <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origin.html\">Origin</a> instead.</details>",
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
            "description": "<details><summary>The minimum SSL/TLS protocol version that CF uses when communicating with your origin server over HTTPs.</summary>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginSSLProtocols\">Minimum Origin SSL Protocol</a> in the <i>Developer Guide</i>.</details>"
          }
        ]
      },
      {
        "name": "default_cache_behavior",
        "type": "object",
        "description": "A complex type that describes the default cache behavior if you don't specify a <code>CacheBehavior</code> element or if files don't match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.",
        "children": [
          {
            "name": "allowed_methods",
            "type": "array",
            "description": "<details><summary>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</summary>+  CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.<br />+  CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.<br />+  CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.<br />If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</details>"
          },
          {
            "name": "cache_policy_id",
            "type": "string",
            "description": "<details><summary>The unique identifier of the cache policy that is attached to the default cache behavior. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy\">Creating cache policies</a> or <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html\">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</summary>A <code>DefaultCacheBehavior</code> must include either a <code>CachePolicyId</code> or <code>ForwardedValues</code>. We recommend that you use a <code>CachePolicyId</code>.</details>"
          },
          {
            "name": "cached_methods",
            "type": "array",
            "description": "<details><summary>A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:</summary>+  CloudFront caches responses to <code>GET</code> and <code>HEAD</code> requests.<br />+  CloudFront caches responses to <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.<br />If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly.</details>"
          },
          {
            "name": "compress",
            "type": "boolean",
            "description": "Whether you want CloudFront to automatically compress certain files for this cache behavior. If so, specify <code>true</code>; if not, specify <code>false</code>. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html\">Serving Compressed Files</a> in the <i>Amazon CloudFront Developer Guide</i>."
          },
          {
            "name": "default_ttl",
            "type": "number",
            "description": "<details><summary>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas\">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</summary>This field is deprecated. We recommend that you use the <code>DefaultTTL</code> field in a cache policy instead of this field. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy\">Creating cache policies</a> or <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html\">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />The default amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin does not add HTTP headers such as <code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and <code>Expires</code> to objects. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html\">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
          },
          {
            "name": "field_level_encryption_id",
            "type": "string",
            "description": "The value of <code>ID</code> for the field-level encryption configuration that you want CloudFront to use for encrypting specific fields of data for the default cache behavior."
          },
          {
            "name": "forwarded_values",
            "type": "object",
            "description": "<details><summary>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html\">Working with policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</summary>If you want to include values in the cache key, use a cache policy. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy\">Creating cache policies</a> or <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html\">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy\">Creating origin request policies</a> or <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html\">Using the managed origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />A <code>DefaultCacheBehavior</code> must include either a <code>CachePolicyId</code> or <code>ForwardedValues</code>. We recommend that you use a <code>CachePolicyId</code>.<br />A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.</details>",
            "children": [
              {
                "name": "cookies",
                "type": "object",
                "description": "<details><summary>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</summary>If you want to include cookies in the cache key, use a cache policy. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy\">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />If you want to send cookies to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy\">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html\">How CloudFront Forwards, Caches, and Logs Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
              },
              {
                "name": "headers",
                "type": "array",
                "description": "<details><summary>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</summary>If you want to include headers in the cache key, use a cache policy. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy\">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />If you want to send headers to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy\">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />A complex type that specifies the <code>Headers</code>, if any, that you want CloudFront to forward to the origin for this cache behavior (whitelisted headers). For the headers that you specify, CloudFront also caches separate versions of a specified object that is based on the header values in viewer requests.<br />For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html\">Caching Content Based on Request Headers</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
              },
              {
                "name": "query_string",
                "type": "boolean",
                "description": "<details><summary>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</summary>If you want to include query strings in the cache key, use a cache policy. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy\">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />If you want to send query strings to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy\">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />Indicates whether you want CloudFront to forward query strings to the origin that is associated with this cache behavior and cache based on the query string parameters. CloudFront behavior depends on the value of <code>QueryString</code> and on the values that you specify for <code>QueryStringCacheKeys</code>, if any:<br />If you specify true for <code>QueryString</code> and you don't specify any values for <code>QueryStringCacheKeys</code>, CloudFront forwards all query string parameters to the origin and caches based on all query string parameters. Depending on how many query string parameters and values you have, this can adversely affect performance because CloudFront must forward more requests to the origin.<br />If you specify true for <code>QueryString</code> and you specify one or more values for <code>QueryStringCacheKeys</code>, CloudFront forwards all query string parameters to the origin, but it only caches based on the query string parameters that you specify.<br />If you specify false for <code>QueryString</code>, CloudFront doesn't forward any query string parameters to the origin, and doesn't cache based on query string parameters.<br />For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/QueryStringParameters.html\">Configuring CloudFront to Cache Based on Query String Parameters</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
              },
              {
                "name": "query_string_cache_keys",
                "type": "array",
                "description": "<details><summary>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</summary>If you want to include query strings in the cache key, use a cache policy. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy\">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />If you want to send query strings to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy\">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />A complex type that contains information about the query string parameters that you want CloudFront to use for caching for this cache behavior.</details>"
              }
            ]
          },
          {
            "name": "function_associations",
            "type": "array",
            "description": "A list of CloudFront functions that are associated with this cache behavior. Your functions must be published to the <code>LIVE</code> stage to associate them with a cache behavior.",
            "children": [
              {
                "name": "event_type",
                "type": "string",
                "description": "The event type of the function, either <code>viewer-request</code> or <code>viewer-response</code>. You cannot use origin-facing event types (<code>origin-request</code> and <code>origin-response</code>) with a CloudFront function."
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
                "description": "<details><summary>Specifies the event type that triggers a Lambda@Edge function invocation. You can specify the following values:</summary>+  <code>viewer-request</code>: The function executes when CloudFront receives a request from a viewer and before it checks to see whether the requested object is in the edge cache.<br />+  <code>origin-request</code>: The function executes only when CloudFront sends a request to your origin. When the requested object is in the edge cache, the function doesn't execute.<br />+  <code>origin-response</code>: The function executes after CloudFront receives a response from the origin and before it caches the object in the response. When the requested object is in the edge cache, the function doesn't execute.<br />+  <code>viewer-response</code>: The function executes before CloudFront returns the requested object to the viewer. The function executes regardless of whether the object was already in the edge cache.<br />If the origin returns an HTTP status code other than HTTP 200 (OK), the function doesn't execute.</details>"
              },
              {
                "name": "include_body",
                "type": "boolean",
                "description": "A flag that allows a Lambda@Edge function to have read access to the body content. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-include-body-access.html\">Accessing the Request Body by Choosing the Include Body Option</a> in the Amazon CloudFront Developer Guide."
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
            "description": "<details><summary>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas\">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</summary>This field is deprecated. We recommend that you use the <code>MaxTTL</code> field in a cache policy instead of this field. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy\">Creating cache policies</a> or <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html\">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />The maximum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin adds HTTP headers such as <code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and <code>Expires</code> to objects. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html\">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
          },
          {
            "name": "min_ttl",
            "type": "number",
            "description": "<details><summary>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas\">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</summary>This field is deprecated. We recommend that you use the <code>MinTTL</code> field in a cache policy instead of this field. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy\">Creating cache policies</a> or <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html\">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />The minimum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html\">Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />You must specify <code>0</code> for <code>MinTTL</code> if you configure CloudFront to forward all headers to your origin (under <code>Headers</code>, if you specify <code>1</code> for <code>Quantity</code> and <code>*</code> for <code>Name</code>).</details>"
          },
          {
            "name": "origin_request_policy_id",
            "type": "string",
            "description": "The unique identifier of the origin request policy that is attached to the default cache behavior. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy\">Creating origin request policies</a> or <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html\">Using the managed origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>."
          },
          {
            "name": "realtime_log_config_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the real-time log configuration that is attached to this cache behavior. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html\">Real-time logs</a> in the <i>Amazon CloudFront Developer Guide</i>."
          },
          {
            "name": "response_headers_policy_id",
            "type": "string",
            "description": "The identifier for a response headers policy."
          },
          {
            "name": "smooth_streaming",
            "type": "boolean",
            "description": "<details><summary>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas\">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</summary>Indicates whether you want to distribute media files in the Microsoft Smooth Streaming format using the origin that is associated with this cache behavior. If so, specify <code>true</code>; if not, specify <code>false</code>. If you specify <code>true</code> for <code>SmoothStreaming</code>, you can still distribute other content using this cache behavior if the content matches the value of <code>PathPattern</code>.</details>"
          },
          {
            "name": "target_origin_id",
            "type": "string",
            "description": "The value of <code>ID</code> for the origin that you want CloudFront to route requests to when they use the default cache behavior."
          },
          {
            "name": "trusted_key_groups",
            "type": "array",
            "description": "<details><summary>A list of key groups that CloudFront can use to validate signed URLs or signed cookies.</summary>When a cache behavior contains trusted key groups, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with a private key whose corresponding public key is in the key group. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html\">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
          },
          {
            "name": "trusted_signers",
            "type": "array",
            "description": "<details><summary>We recommend using <code>TrustedKeyGroups</code> instead of <code>TrustedSigners</code>.</summary>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas\">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />A list of AWS-account IDs whose public keys CloudFront can use to validate signed URLs or signed cookies.<br />When a cache behavior contains trusted signers, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with the private key of a CloudFront key pair in a trusted signer's AWS-account. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html\">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
          },
          {
            "name": "viewer_protocol_policy",
            "type": "string",
            "description": "<details><summary>The protocol that viewers can use to access the files in the origin specified by <code>TargetOriginId</code> when a request matches the path pattern in <code>PathPattern</code>. You can specify the following options:</summary>+  <code>allow-all</code>: Viewers can use HTTP or HTTPS.<br />+  <code>redirect-to-https</code>: If a viewer submits an HTTP request, CloudFront returns an HTTP status code of 301 (Moved Permanently) to the viewer along with the HTTPS URL. The viewer then resubmits the request using the new URL.<br />+  <code>https-only</code>: If a viewer sends an HTTP request, CloudFront returns an HTTP status code of 403 (Forbidden).<br />For more information about requiring the HTTPS protocol, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-viewers-to-cloudfront.html\">Requiring HTTPS Between Viewers and CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />The only way to guarantee that viewers retrieve an object that was fetched from the origin using HTTPS is never to use any other protocol to fetch the object. If you have recently changed from HTTP to HTTPS, we recommend that you clear your objects' cache because cached objects are protocol agnostic. That means that an edge location will return an object from the cache regardless of whether the current request protocol matches the protocol used previously. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html\">Managing Cache Expiration</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
          }
        ]
      },
      {
        "name": "default_root_object",
        "type": "string",
        "description": "<details><summary>When a viewer requests the root URL for your distribution, the default root object is the object that you want CloudFront to request from your origin. For example, if your root URL is <code>https://www.example.com</code>, you can specify CloudFront to return the <code>index.html</code> file as the default root object. You can specify a default root object so that viewers see a specific file or object, instead of another object in your distribution (for example, <code>https://www.example.com/product-description.html</code>). A default root object avoids exposing the contents of your distribution.</summary>You can specify the object name or a path to the object name (for example, <code>index.html</code> or <code>exampleFolderName/index.html</code>). Your string can't begin with a forward slash (<code>/</code>). Only specify the object name or the path to the object.<br />If you don't want to specify a default root object when you create a distribution, include an empty <code>DefaultRootObject</code> element.<br />To delete the default root object from an existing distribution, update the distribution configuration and include an empty <code>DefaultRootObject</code> element.<br />To replace the default root object, update the distribution configuration and specify the new object.<br />For more information about the default root object, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DefaultRootObject.html\">Specify a default root object</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
      },
      {
        "name": "enabled",
        "type": "boolean",
        "description": "From this field, you can enable or disable the selected distribution."
      },
      {
        "name": "http_version",
        "type": "string",
        "description": "<details><summary>(Optional) Specify the HTTP version(s) that you want viewers to use to communicate with CF. The default value for new distributions is <code>http1.1</code>.</summary>For viewers and CF to use HTTP/2, viewers must support TLSv1.2 or later, and must support Server Name Indication (SNI).<br />For viewers and CF to use HTTP/3, viewers must support TLSv1.3 and Server Name Indication (SNI). CF supports HTTP/3 connection migration to allow the viewer to switch networks without losing connection. For more information about connection migration, see <a href=\"https://docs.aws.amazon.com/https://www.rfc-editor.org/rfc/rfc9000.html#name-connection-migration\">Connection Migration</a> at RFC 9000. For more information about supported TLSv1.3 ciphers, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/secure-connections-supported-viewer-protocols-ciphers.html\">Supported protocols and ciphers between viewers and CloudFront</a>.</details>"
      },
      {
        "name": "ip_v6_enabled",
        "type": "boolean",
        "description": "<details><summary>To use this field for a multi-tenant distribution, use a connection group instead. For more information, see <a href=\"https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ConnectionGroup.html\">ConnectionGroup</a>.</summary>If you want CloudFront to respond to IPv6 DNS requests with an IPv6 address for your distribution, specify <code>true</code>. If you specify <code>false</code>, CloudFront responds to IPv6 DNS requests with the DNS response code <code>NOERROR</code> and with no IP addresses. This allows viewers to submit a second request, for an IPv4 address for your distribution.<br />In general, you should enable IPv6 if you have users on IPv6 networks who want to access your content. However, if you're using signed URLs or signed cookies to restrict access to your content, and if you're using a custom policy that includes the <code>IpAddress</code> parameter to restrict the IP addresses that can access your content, don't enable IPv6. If you want to restrict access to some content by IP address and not restrict access to other content (or restrict access but not by IP address), you can create two distributions. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-creating-signed-url-custom-policy.html\">Creating a Signed URL Using a Custom Policy</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />If you're using an R53AWSIntlong alias resource record set to route traffic to your CloudFront distribution, you need to create a second alias resource record set when both of the following are true:<br />+  You enable IPv6 for the distribution<br />+  You're using alternate domain names in the URLs for your objects<br />For more information, see <a href=\"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-cloudfront-distribution.html\">Routing Traffic to an Amazon CloudFront Web Distribution by Using Your Domain Name</a> in the <i>Developer Guide</i>.<br />If you created a CNAME resource record set, either with R53AWSIntlong or with another DNS service, you don't need to make any changes. A CNAME record will route traffic to your distribution regardless of the IP address format of the viewer request.</details>"
      },
      {
        "name": "logging",
        "type": "object",
        "description": "<details><summary>A complex type that controls whether access logs are written for the distribution.</summary>For more information about logging, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html\">Access Logs</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>",
        "children": [
          {
            "name": "bucket",
            "type": "string",
            "description": "The Amazon S3 bucket to store the access logs in, for example, <code>amzn-s3-demo-bucket.s3.amazonaws.com</code>."
          },
          {
            "name": "include_cookies",
            "type": "boolean",
            "description": "Specifies whether you want CloudFront to include cookies in access logs, specify <code>true</code> for <code>IncludeCookies</code>. If you choose to include cookies in logs, CloudFront logs all cookies regardless of how you configure the cache behaviors for this distribution. If you don't want to include cookies when you create a distribution or if you want to disable include cookies for an existing distribution, specify <code>false</code> for <code>IncludeCookies</code>."
          },
          {
            "name": "prefix",
            "type": "string",
            "description": "An optional string that you want CloudFront to prefix to the access log <code>filenames</code> for this distribution, for example, <code>myprefix/</code>. If you want to enable logging, but you don't want to specify a prefix, you still must include an empty <code>Prefix</code> element in the <code>Logging</code> element."
          }
        ]
      },
      {
        "name": "origin_groups",
        "type": "object",
        "description": "<details><summary>A complex type that contains information about origin groups for this distribution.</summary>Specify a value for either the <code>Origins</code> or <code>OriginGroups</code> property.</details>",
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
                "description": "The selection criteria for the origin group. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/high_availability_origin_failover.html#concept_origin_groups.creating\">Create an origin group</a> in the <i>Amazon CloudFront Developer Guide</i>."
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
        "description": "<details><summary>A complex type that contains information about origins for this distribution.</summary>Specify a value for either the <code>Origins</code> or <code>OriginGroups</code> property.</details>",
        "children": [
          {
            "name": "connection_attempts",
            "type": "integer",
            "description": "<details><summary>The number of times that CloudFront attempts to connect to the origin. The minimum number is 1, the maximum is 3, and the default (if you don't specify otherwise) is 3.</summary>For a custom origin (including an Amazon S3 bucket that's configured with static website hosting), this value also specifies the number of times that CloudFront attempts to get a response from the origin, in the case of an <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginResponseTimeout\">Origin Response Timeout</a>.<br />For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#origin-connection-attempts\">Origin Connection Attempts</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
          },
          {
            "name": "connection_timeout",
            "type": "integer",
            "description": "<details><summary>The number of seconds that CloudFront waits when trying to establish a connection to the origin. The minimum timeout is 1 second, the maximum is 10 seconds, and the default (if you don't specify otherwise) is 10 seconds.</summary>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#origin-connection-timeout\">Origin Connection Timeout</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
          },
          {
            "name": "response_completion_timeout",
            "type": "integer",
            "description": ""
          },
          {
            "name": "custom_origin_config",
            "type": "object",
            "description": "Use this type to specify an origin that is not an Amazon S3 bucket, with one exception. If the Amazon S3 bucket is configured with static website hosting, use this type. If the Amazon S3 bucket is not configured with static website hosting, use the <code>S3OriginConfig</code> type instead.",
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
                "description": "<details><summary>Specifies how long, in seconds, CloudFront persists its connection to the origin. The minimum timeout is 1 second, the maximum is 120 seconds, and the default (if you don't specify otherwise) is 5 seconds.</summary>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginKeepaliveTimeout\">Keep-alive timeout (custom origins only)</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
              },
              {
                "name": "origin_protocol_policy",
                "type": "string",
                "description": "<details><summary>Specifies the protocol (HTTP or HTTPS) that CloudFront uses to connect to the origin. Valid values are:</summary>+  <code>http-only</code> – CloudFront always uses HTTP to connect to the origin.<br />+  <code>match-viewer</code> – CloudFront connects to the origin using the same protocol that the viewer used to connect to CloudFront.<br />+  <code>https-only</code> – CloudFront always uses HTTPS to connect to the origin.</details>"
              },
              {
                "name": "origin_read_timeout",
                "type": "integer",
                "description": "<details><summary>Specifies how long, in seconds, CloudFront waits for a response from the origin. This is also known as the <i>origin response timeout</i>. The minimum timeout is 1 second, the maximum is 120 seconds, and the default (if you don't specify otherwise) is 30 seconds.</summary>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginResponseTimeout\">Response timeout (custom origins only)</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
              },
              {
                "name": "origin_ss_lprotocols",
                "type": "array",
                "description": "<details><summary>Specifies the minimum SSL/TLS protocol that CloudFront uses when connecting to your origin over HTTPS. Valid values include <code>SSLv3</code>, <code>TLSv1</code>, <code>TLSv1.1</code>, and <code>TLSv1.2</code>.</summary>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginSSLProtocols\">Minimum Origin SSL Protocol</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
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
            "description": "<details><summary>The domain name for the origin.</summary>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesDomainName\">Origin Domain Name</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
          },
          {
            "name": "id",
            "type": "string",
            "description": "<details><summary>A unique identifier for the origin. This value must be unique within the distribution.</summary>Use this value to specify the <code>TargetOriginId</code> in a <code>CacheBehavior</code> or <code>DefaultCacheBehavior</code>.</details>"
          },
          {
            "name": "origin_access_control_id",
            "type": "string",
            "description": "<details><summary>The unique identifier of an origin access control for this origin.</summary>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html\">Restricting access to an Amazon S3 origin</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
          },
          {
            "name": "origin_custom_headers",
            "type": "array",
            "description": "<details><summary>A list of HTTP header names and values that CloudFront adds to the requests that it sends to the origin.</summary>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/add-origin-custom-headers.html\">Adding Custom Headers to Origin Requests</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>",
            "children": [
              {
                "name": "header_name",
                "type": "string",
                "description": "The name of a header that you want CloudFront to send to your origin. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/forward-custom-headers.html\">Adding Custom Headers to Origin Requests</a> in the <i>Amazon CloudFront Developer Guide</i>."
              },
              {
                "name": "header_value",
                "type": "string",
                "description": "The value for the header that you specified in the <code>HeaderName</code> field."
              }
            ]
          },
          {
            "name": "origin_path",
            "type": "string",
            "description": "<details><summary>An optional path that CloudFront appends to the origin domain name when CloudFront requests content from the origin.</summary>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginPath\">Origin Path</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
          },
          {
            "name": "origin_shield",
            "type": "object",
            "description": "<details><summary>CloudFront Origin Shield. Using Origin Shield can help reduce the load on your origin.</summary>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html\">Using Origin Shield</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>",
            "children": [
              {
                "name": "enabled",
                "type": "boolean",
                "description": "<details><summary>A flag that specifies whether Origin Shield is enabled.</summary>When it's enabled, CloudFront routes all requests through Origin Shield, which can help protect your origin. When it's disabled, CloudFront might send requests directly to your origin from multiple edge locations or regional edge caches.</details>"
              },
              {
                "name": "origin_shield_region",
                "type": "string",
                "description": "<details><summary>The AWS-Region for Origin Shield.</summary>Specify the AWS-Region that has the lowest latency to your origin. To specify a region, use the region code, not the region name. For example, specify the US East (Ohio) region as <code>us-east-2</code>.<br />When you enable CloudFront Origin Shield, you must specify the AWS-Region for Origin Shield. For the list of AWS-Regions that you can specify, and for help choosing the best Region for your origin, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html#choose-origin-shield-region\">Choosing the for Origin Shield</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
              }
            ]
          },
          {
            "name": "s3_origin_config",
            "type": "object",
            "description": "Use this type to specify an origin that is an Amazon S3 bucket that is not configured with static website hosting. To specify any other type of origin, including an Amazon S3 bucket that is configured with static website hosting, use the <code>CustomOriginConfig</code> type instead.",
            "children": [
              {
                "name": "origin_access_identity",
                "type": "string",
                "description": "<details><summary>If you're using origin access control (OAC) instead of origin access identity, specify an empty <code>OriginAccessIdentity</code> element. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-origin.html\">Restricting access to an</a> in the <i>Amazon CloudFront Developer Guide</i>.</summary>The CloudFront origin access identity to associate with the origin. Use an origin access identity to configure the origin so that viewers can <i>only</i> access objects in an Amazon S3 bucket through CloudFront. The format of the value is:<br /><code>origin-access-identity/cloudfront/ID-of-origin-access-identity</code><br />The <code>ID-of-origin-access-identity</code> is the value that CloudFront returned in the <code>ID</code> element when you created the origin access identity.<br />If you want viewers to be able to access objects using either the CloudFront URL or the Amazon S3 URL, specify an empty <code>OriginAccessIdentity</code> element.<br />To delete the origin access identity from an existing distribution, update the distribution configuration and include an empty <code>OriginAccessIdentity</code> element.<br />To replace the origin access identity, update the distribution configuration and specify the new origin access identity.<br />For more information about the origin access identity, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html\">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
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
                "description": "<details><summary>Specifies how long, in seconds, CloudFront persists its connection to the origin. The minimum timeout is 1 second, the maximum is 120 seconds, and the default (if you don't specify otherwise) is 5 seconds.</summary>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginKeepaliveTimeout\">Keep-alive timeout (custom origins only)</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
              },
              {
                "name": "origin_read_timeout",
                "type": "integer",
                "description": "<details><summary>Specifies how long, in seconds, CloudFront waits for a response from the origin. This is also known as the <i>origin response timeout</i>. The minimum timeout is 1 second, the maximum is 120 seconds, and the default (if you don't specify otherwise) is 30 seconds.</summary>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginResponseTimeout\">Response timeout (custom origins only)</a> in the <i>Amazon CloudFront Developer Guide</i>.</details>"
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
        "description": "<details><summary>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas\">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</summary>The price class that corresponds with the maximum price that you want to pay for CloudFront service. If you specify <code>PriceClass_All</code>, CloudFront responds to requests for your objects from all CloudFront edge locations.<br />If you specify a price class other than <code>PriceClass_All</code>, CloudFront serves your objects from the CloudFront edge location that has the lowest latency among the edge locations in your price class. Viewers who are in or near regions that are excluded from your specified price class may encounter slower performance.<br />For more information about price classes, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PriceClass.html\">Choosing the Price Class for a CloudFront Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>. For information about CloudFront pricing, including how price classes (such as Price Class 100) map to CloudFront regions, see <a href=\"https://docs.aws.amazon.com/cloudfront/pricing/\">Amazon CloudFront Pricing</a>.</details>"
      },
      {
        "name": "restrictions",
        "type": "object",
        "description": "A complex type that identifies ways in which you want to restrict distribution of your content.",
        "children": [
          {
            "name": "geo_restriction",
            "type": "object",
            "description": "A complex type that controls the countries in which your content is distributed. CF determines the location of your users using <code>MaxMind</code> GeoIP databases. To disable geo restriction, remove the <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-distributionconfig.html#cfn-cloudfront-distribution-distributionconfig-restrictions\">Restrictions</a> property from your stack template.",
            "children": [
              {
                "name": "locations",
                "type": "array",
                "description": "<details><summary>A complex type that contains a <code>Location</code> element for each country in which you want CloudFront either to distribute your content (<code>whitelist</code>) or not distribute your content (<code>blacklist</code>).</summary>The <code>Location</code> element is a two-letter, uppercase country code for a country that you want to include in your <code>blacklist</code> or <code>whitelist</code>. Include one <code>Location</code> element for each country.<br />CloudFront and <code>MaxMind</code> both use <code>ISO 3166</code> country codes. For the current list of countries and the corresponding codes, see <code>ISO 3166-1-alpha-2</code> code on the <i>International Organization for Standardization</i> website. You can also refer to the country list on the CloudFront console, which includes both country names and codes.</details>"
              },
              {
                "name": "restriction_type",
                "type": "string",
                "description": "<details><summary>The method that you want to use to restrict distribution of your content by country:</summary>+  <code>none</code>: No geo restriction is enabled, meaning access to content is not restricted by client geo location.<br />+  <code>blacklist</code>: The <code>Location</code> elements specify the countries in which you don't want CloudFront to distribute your content.<br />+  <code>whitelist</code>: The <code>Location</code> elements specify the countries in which you want CloudFront to distribute your content.</details>"
              }
            ]
          }
        ]
      },
      {
        "name": "s3_origin",
        "type": "object",
        "description": "<details><summary>The origin as an S3 bucket.</summary>This property is legacy. We recommend that you use <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origin.html\">Origin</a> instead.</details>",
        "children": [
          {
            "name": "dns_name",
            "type": "string",
            "description": "The domain name assigned to your CF distribution."
          },
          {
            "name": "origin_access_identity",
            "type": "string",
            "description": "<details><summary>The CF origin access identity to associate with the distribution. Use an origin access identity to configure the distribution so that end users can only access objects in an S3 through CF.</summary>This property is legacy. We recommend that you use <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originaccesscontrol.html\">OriginAccessControl</a> instead.</details>"
          }
        ]
      },
      {
        "name": "staging",
        "type": "boolean",
        "description": "<details><summary>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas\">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</summary>A Boolean that indicates whether this is a staging distribution. When this value is <code>true</code>, this is a staging distribution. When this value is <code>false</code>, this is not a staging distribution.</details>"
      },
      {
        "name": "tenant_config",
        "type": "object",
        "description": "<details><summary>This field only supports multi-tenant distributions. You can't specify this field for standard distributions. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas\">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</summary>A distribution tenant configuration.</details>",
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
            "description": "<details><summary>In CloudFormation, this field name is <code>AcmCertificateArn</code>. Note the different capitalization.</summary>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs) and the SSL/TLS certificate is stored in <a href=\"https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html\">(ACM)</a>, provide the Amazon Resource Name (ARN) of the ACM certificate. CloudFront only supports ACM certificates in the US East (N. Virginia) Region (<code>us-east-1</code>).<br />If you specify an ACM certificate ARN, you must also specify values for <code>MinimumProtocolVersion</code> and <code>SSLSupportMethod</code>. (In CloudFormation, the field name is <code>SslSupportMethod</code>. Note the different capitalization.)</details>"
          },
          {
            "name": "cloud_front_default_certificate",
            "type": "boolean",
            "description": "<details><summary>If the distribution uses the CloudFront domain name such as <code>d111111abcdef8.cloudfront.net</code>, set this field to <code>true</code>.</summary>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs), omit this field and specify values for the following fields:<br />+  <code>AcmCertificateArn</code> or <code>IamCertificateId</code> (specify a value for one, not both)<br />+   <code>MinimumProtocolVersion</code><br />+   <code>SslSupportMethod</code></details>"
          },
          {
            "name": "iam_certificate_id",
            "type": "string",
            "description": "<details><summary>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas\">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</summary>In CloudFormation, this field name is <code>IamCertificateId</code>. Note the different capitalization.<br />If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs) and the SSL/TLS certificate is stored in <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html\">(IAM)</a>, provide the ID of the IAM certificate.<br />If you specify an IAM certificate ID, you must also specify values for <code>MinimumProtocolVersion</code> and <code>SSLSupportMethod</code>. (In CloudFormation, the field name is <code>SslSupportMethod</code>. Note the different capitalization.)</details>"
          },
          {
            "name": "minimum_protocol_version",
            "type": "string",
            "description": "<details><summary>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs), specify the security policy that you want CloudFront to use for HTTPS connections with viewers. The security policy determines two settings:</summary>+  The minimum SSL/TLS protocol that CloudFront can use to communicate with viewers.<br />+  The ciphers that CloudFront can use to encrypt the content that it returns to viewers.<br />For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValues-security-policy\">Security Policy</a> and <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/secure-connections-supported-viewer-protocols-ciphers.html#secure-connections-supported-ciphers\">Supported Protocols and Ciphers Between Viewers and CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.<br />On the CloudFront console, this setting is called <i>Security Policy</i>.<br />When you're using SNI only (you set <code>SSLSupportMethod</code> to <code>sni-only</code>), you must specify <code>TLSv1</code> or higher. (In CloudFormation, the field name is <code>SslSupportMethod</code>. Note the different capitalization.)<br />If the distribution uses the CloudFront domain name such as <code>d111111abcdef8.cloudfront.net</code> (you set <code>CloudFrontDefaultCertificate</code> to <code>true</code>), CloudFront automatically sets the security policy to <code>TLSv1</code> regardless of the value that you set here.</details>"
          },
          {
            "name": "ssl_support_method",
            "type": "string",
            "description": "<details><summary>In CloudFormation, this field name is <code>SslSupportMethod</code>. Note the different capitalization.</summary>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs), specify which viewers the distribution accepts HTTPS connections from.<br />+  <code>sni-only</code> – The distribution accepts HTTPS connections from only viewers that support <a href=\"https://docs.aws.amazon.com/https://en.wikipedia.org/wiki/Server_Name_Indication\">server name indication (SNI)</a>. This is recommended. Most browsers and clients support SNI.<br />+  <code>vip</code> – The distribution accepts HTTPS connections from all viewers including those that don't support SNI. This is not recommended, and results in additional monthly charges from CloudFront.<br />+  <code>static-ip</code> - Do not specify this value unless your distribution has been enabled for this feature by the CloudFront team. If you have a use case that requires static IP addresses for a distribution, contact CloudFront through the <a href=\"https://docs.aws.amazon.com/support/home\">Center</a>.<br />If the distribution uses the CloudFront domain name such as <code>d111111abcdef8.cloudfront.net</code>, don't set a value for this field.</details>"
          }
        ]
      },
      {
        "name": "web_acl_id",
        "type": "string",
        "description": "<details><summary>Multi-tenant distributions only support WAF V2 web ACLs.</summary>A unique identifier that specifies the WAF web ACL, if any, to associate with this distribution. To specify a web ACL created using the latest version of WAF, use the ACL ARN, for example <code>arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111</code>. To specify a web ACL created using WAF Classic, use the ACL ID, for example <code>a1b2c3d4-5678-90ab-cdef-EXAMPLE11111</code>.<br />WAF is a web application firewall that lets you monitor the HTTP and HTTPS requests that are forwarded to CloudFront, and lets you control access to your content. Based on conditions that you specify, such as the IP addresses that requests originate from or the values of query strings, CloudFront responds to requests either with the requested content or with an HTTP 403 status code (Forbidden). You can also configure CloudFront to return a custom error page when a request is blocked. For more information about WAF, see the <a href=\"https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html\">Developer Guide</a>.</details>"
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
WHERE
  region = 'us-east-1' AND
  Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>distributions</code> in a region.
```sql
SELECT
  region,
  id
FROM awscc.cloudfront.distributions_list_only
WHERE
  region = 'us-east-1';
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
INSERT INTO awscc.cloudfront.distributions (
  DistributionConfig,
  Tags,
  region
)
SELECT
  '{{ distribution_config }}',
  '{{ tags }}',
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
            value: '{{ value }}'`}</CodeBlock>

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
DELETE FROM awscc.cloudfront.distributions
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