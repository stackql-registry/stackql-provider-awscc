---
title: response_headers_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - response_headers_policies
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

Creates, updates, deletes or gets a <code>response_headers_policy</code> resource or lists <code>response_headers_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>response_headers_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td><details><summary>A response headers policy.</summary>A response headers policy contains information about a set of HTTP response headers.<br />After you create a response headers policy, you can use its ID to attach it to one or more cache behaviors in a CloudFront distribution. When it's attached to a cache behavior, the response headers policy affects the HTTP headers that CloudFront includes in HTTP responses to requests that match the cache behavior. CloudFront adds or removes response headers according to the configuration of the response headers policy.<br />For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/modifying-response-headers.html">Adding or removing HTTP headers in CloudFront responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudfront.response_headers_policies" /></td></tr>
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
    "name": "last_modified_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "response_headers_policy_config",
    "type": "object",
    "description": "A response headers policy configuration.",
    "children": [
      {
        "name": "comment",
        "type": "string",
        "description": "<details><summary>A comment to describe the response headers policy.</summary>The comment cannot be longer than 128 characters.</details>"
      },
      {
        "name": "cors_config",
        "type": "object",
        "description": "A configuration for a set of HTTP response headers that are used for cross-origin resource sharing (CORS).",
        "children": [
          {
            "name": "access_control_allow_credentials",
            "type": "boolean",
            "description": "<details><summary>A Boolean that CloudFront uses as the value for the <code>Access-Control-Allow-Credentials</code> HTTP response header.</summary>For more information about the <code>Access-Control-Allow-Credentials</code> HTTP response header, see <a href=\"https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials\">Access-Control-Allow-Credentials</a> in the MDN Web Docs.</details>"
          },
          {
            "name": "access_control_allow_headers",
            "type": "object",
            "description": "<details><summary>A list of HTTP header names that CloudFront includes as values for the <code>Access-Control-Allow-Headers</code> HTTP response header.</summary>For more information about the <code>Access-Control-Allow-Headers</code> HTTP response header, see <a href=\"https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers\">Access-Control-Allow-Headers</a> in the MDN Web Docs.</details>",
            "children": [
              {
                "name": "items",
                "type": "array",
                "description": "The list of HTTP header names. You can specify <code>*</code> to allow all headers."
              }
            ]
          },
          {
            "name": "access_control_allow_methods",
            "type": "object",
            "description": "<details><summary>A list of HTTP methods that CloudFront includes as values for the <code>Access-Control-Allow-Methods</code> HTTP response header.</summary>For more information about the <code>Access-Control-Allow-Methods</code> HTTP response header, see <a href=\"https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods\">Access-Control-Allow-Methods</a> in the MDN Web Docs.</details>",
            "children": [
              {
                "name": "items",
                "type": "array",
                "description": "<details><summary>The list of HTTP methods. Valid values are:</summary>+   <code>GET</code><br />+   <code>DELETE</code><br />+   <code>HEAD</code><br />+   <code>OPTIONS</code><br />+   <code>PATCH</code><br />+   <code>POST</code><br />+   <code>PUT</code><br />+   <code>ALL</code><br /><code>ALL</code> is a special value that includes all of the listed HTTP methods.</details>"
              }
            ]
          },
          {
            "name": "access_control_allow_origins",
            "type": "object",
            "description": "<details><summary>A list of origins (domain names) that CloudFront can use as the value for the <code>Access-Control-Allow-Origin</code> HTTP response header.</summary>For more information about the <code>Access-Control-Allow-Origin</code> HTTP response header, see <a href=\"https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin\">Access-Control-Allow-Origin</a> in the MDN Web Docs.</details>",
            "children": [
              {
                "name": "items",
                "type": "array",
                "description": "The list of origins (domain names). You can specify <code>*</code> to allow all origins."
              }
            ]
          },
          {
            "name": "access_control_expose_headers",
            "type": "object",
            "description": "<details><summary>A list of HTTP headers that CloudFront includes as values for the <code>Access-Control-Expose-Headers</code> HTTP response header.</summary>For more information about the <code>Access-Control-Expose-Headers</code> HTTP response header, see <a href=\"https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers\">Access-Control-Expose-Headers</a> in the MDN Web Docs.</details>",
            "children": [
              {
                "name": "items",
                "type": "array",
                "description": "The list of HTTP headers. You can specify <code>*</code> to expose all headers."
              }
            ]
          },
          {
            "name": "access_control_max_age_sec",
            "type": "integer",
            "description": "<details><summary>A number that CloudFront uses as the value for the <code>Access-Control-Max-Age</code> HTTP response header.</summary>For more information about the <code>Access-Control-Max-Age</code> HTTP response header, see <a href=\"https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age\">Access-Control-Max-Age</a> in the MDN Web Docs.</details>"
          },
          {
            "name": "origin_override",
            "type": "boolean",
            "description": "A Boolean that determines whether CloudFront overrides HTTP response headers received from the origin with the ones specified in this response headers policy."
          }
        ]
      },
      {
        "name": "custom_headers_config",
        "type": "object",
        "description": "A configuration for a set of custom HTTP response headers.",
        "children": [
          {
            "name": "items",
            "type": "array",
            "description": "The list of HTTP response headers and their values.",
            "children": [
              {
                "name": "header",
                "type": "string",
                "description": "The HTTP response header name."
              },
              {
                "name": "override",
                "type": "boolean",
                "description": "A Boolean that determines whether CloudFront overrides a response header with the same name received from the origin with the header specified here."
              },
              {
                "name": "value",
                "type": "string",
                "description": "The value for the HTTP response header."
              }
            ]
          }
        ]
      },
      {
        "name": "name",
        "type": "string",
        "description": "<details><summary>A name to identify the response headers policy.</summary>The name must be unique for response headers policies in this AWS-account.</details>"
      },
      {
        "name": "remove_headers_config",
        "type": "object",
        "description": "A configuration for a set of HTTP headers to remove from the HTTP response.",
        "children": [
          {
            "name": "items",
            "type": "array",
            "description": "The list of HTTP header names.",
            "children": [
              {
                "name": "header",
                "type": "string",
                "description": "The HTTP header name."
              }
            ]
          }
        ]
      },
      {
        "name": "security_headers_config",
        "type": "object",
        "description": "A configuration for a set of security-related HTTP response headers.",
        "children": [
          {
            "name": "content_security_policy",
            "type": "object",
            "description": "<details><summary>The policy directives and their values that CloudFront includes as values for the <code>Content-Security-Policy</code> HTTP response header.</summary>For more information about the <code>Content-Security-Policy</code> HTTP response header, see <a href=\"https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy\">Content-Security-Policy</a> in the MDN Web Docs.</details>",
            "children": [
              {
                "name": "content_security_policy",
                "type": "string",
                "description": "<details><summary>The policy directives and their values that CloudFront includes as values for the <code>Content-Security-Policy</code> HTTP response header.</summary>For more information about the <code>Content-Security-Policy</code> HTTP response header, see <a href=\"https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy\">Content-Security-Policy</a> in the MDN Web Docs.</details>"
              },
              {
                "name": "override",
                "type": "boolean",
                "description": "A Boolean that determines whether CloudFront overrides the <code>Content-Security-Policy</code> HTTP response header received from the origin with the one specified in this response headers policy."
              }
            ]
          },
          {
            "name": "content_type_options",
            "type": "object",
            "description": "<details><summary>Determines whether CloudFront includes the <code>X-Content-Type-Options</code> HTTP response header with its value set to <code>nosniff</code>.</summary>For more information about the <code>X-Content-Type-Options</code> HTTP response header, see <a href=\"https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options\">X-Content-Type-Options</a> in the MDN Web Docs.</details>",
            "children": [
              {
                "name": "override",
                "type": "boolean",
                "description": "A Boolean that determines whether CloudFront overrides the <code>X-Content-Type-Options</code> HTTP response header received from the origin with the one specified in this response headers policy."
              }
            ]
          },
          {
            "name": "frame_options",
            "type": "object",
            "description": "<details><summary>Determines whether CloudFront includes the <code>X-Frame-Options</code> HTTP response header and the header's value.</summary>For more information about the <code>X-Frame-Options</code> HTTP response header, see <a href=\"https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options\">X-Frame-Options</a> in the MDN Web Docs.</details>",
            "children": [
              {
                "name": "frame_option",
                "type": "string",
                "description": "<details><summary>The value of the <code>X-Frame-Options</code> HTTP response header. Valid values are <code>DENY</code> and <code>SAMEORIGIN</code>.</summary>For more information about these values, see <a href=\"https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options\">X-Frame-Options</a> in the MDN Web Docs.</details>"
              },
              {
                "name": "override",
                "type": "boolean",
                "description": "A Boolean that determines whether CloudFront overrides the <code>X-Frame-Options</code> HTTP response header received from the origin with the one specified in this response headers policy."
              }
            ]
          },
          {
            "name": "referrer_policy",
            "type": "object",
            "description": "<details><summary>Determines whether CloudFront includes the <code>Referrer-Policy</code> HTTP response header and the header's value.</summary>For more information about the <code>Referrer-Policy</code> HTTP response header, see <a href=\"https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy\">Referrer-Policy</a> in the MDN Web Docs.</details>",
            "children": [
              {
                "name": "override",
                "type": "boolean",
                "description": "A Boolean that determines whether CloudFront overrides the <code>Referrer-Policy</code> HTTP response header received from the origin with the one specified in this response headers policy."
              },
              {
                "name": "referrer_policy",
                "type": "string",
                "description": "<details><summary>Determines whether CloudFront includes the <code>Referrer-Policy</code> HTTP response header and the header's value.</summary>For more information about the <code>Referrer-Policy</code> HTTP response header, see <a href=\"https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy\">Referrer-Policy</a> in the MDN Web Docs.</details>"
              }
            ]
          },
          {
            "name": "strict_transport_security",
            "type": "object",
            "description": "<details><summary>Determines whether CloudFront includes the <code>Strict-Transport-Security</code> HTTP response header and the header's value.</summary>For more information about the <code>Strict-Transport-Security</code> HTTP response header, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/understanding-response-headers-policies.html#understanding-response-headers-policies-security\">Security headers</a> in the <i>Amazon CloudFront Developer Guide</i> and <a href=\"https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security\">Strict-Transport-Security</a> in the MDN Web Docs.</details>",
            "children": [
              {
                "name": "access_control_max_age_sec",
                "type": "integer",
                "description": "A number that CloudFront uses as the value for the <code>max-age</code> directive in the <code>Strict-Transport-Security</code> HTTP response header."
              },
              {
                "name": "include_subdomains",
                "type": "boolean",
                "description": "A Boolean that determines whether CloudFront includes the <code>includeSubDomains</code> directive in the <code>Strict-Transport-Security</code> HTTP response header."
              },
              {
                "name": "override",
                "type": "boolean",
                "description": "A Boolean that determines whether CloudFront overrides the <code>Strict-Transport-Security</code> HTTP response header received from the origin with the one specified in this response headers policy."
              },
              {
                "name": "preload",
                "type": "boolean",
                "description": "A Boolean that determines whether CloudFront includes the <code>preload</code> directive in the <code>Strict-Transport-Security</code> HTTP response header."
              }
            ]
          },
          {
            "name": "x_ss_protection",
            "type": "object",
            "description": "<details><summary>Determines whether CloudFront includes the <code>X-XSS-Protection</code> HTTP response header and the header's value.</summary>For more information about the <code>X-XSS-Protection</code> HTTP response header, see <a href=\"https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection\">X-XSS-Protection</a> in the MDN Web Docs.</details>",
            "children": [
              {
                "name": "mode_block",
                "type": "boolean",
                "description": "<details><summary>A Boolean that determines whether CloudFront includes the <code>mode=block</code> directive in the <code>X-XSS-Protection</code> header.</summary>For more information about this directive, see <a href=\"https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection\">X-XSS-Protection</a> in the MDN Web Docs.</details>"
              },
              {
                "name": "override",
                "type": "boolean",
                "description": "A Boolean that determines whether CloudFront overrides the <code>X-XSS-Protection</code> HTTP response header received from the origin with the one specified in this response headers policy."
              },
              {
                "name": "protection",
                "type": "boolean",
                "description": "<details><summary>A Boolean that determines the value of the <code>X-XSS-Protection</code> HTTP response header. When this setting is <code>true</code>, the value of the <code>X-XSS-Protection</code> header is <code>1</code>. When this setting is <code>false</code>, the value of the <code>X-XSS-Protection</code> header is <code>0</code>.</summary>For more information about these settings, see <a href=\"https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection\">X-XSS-Protection</a> in the MDN Web Docs.</details>"
              },
              {
                "name": "report_uri",
                "type": "string",
                "description": "<details><summary>A reporting URI, which CloudFront uses as the value of the <code>report</code> directive in the <code>X-XSS-Protection</code> header.</summary>You cannot specify a <code>ReportUri</code> when <code>ModeBlock</code> is <code>true</code>.<br />For more information about using a reporting URL, see <a href=\"https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection\">X-XSS-Protection</a> in the MDN Web Docs.</details>"
              }
            ]
          }
        ]
      },
      {
        "name": "server_timing_headers_config",
        "type": "object",
        "description": "A configuration for enabling the <code>Server-Timing</code> header in HTTP responses sent from CloudFront.",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": "A Boolean that determines whether CloudFront adds the <code>Server-Timing</code> header to HTTP responses that it sends in response to requests that match a cache behavior that's associated with this response headers policy."
          },
          {
            "name": "sampling_rate",
            "type": "number",
            "description": "A number 0–100 (inclusive) that specifies the percentage of responses that you want CloudFront to add the <code>Server-Timing</code> header to. When you set the sampling rate to 100, CloudFront adds the <code>Server-Timing</code> header to the HTTP response for every request that matches the cache behavior that this response headers policy is attached to. When you set it to 50, CloudFront adds the header to 50% of the responses for requests that match the cache behavior. You can set the sampling rate to any number 0–100 with up to four decimal places."
          }
        ]
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-responseheaderspolicy.html"><code>AWS::CloudFront::ResponseHeadersPolicy</code></a>.

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
    <td><code>response_headers_policies</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ResponseHeadersPolicyConfig, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>response_headers_policies</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>response_headers_policies</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>response_headers_policies_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>response_headers_policies</code></td>
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

Gets all properties from an individual <code>response_headers_policy</code>.
```sql
SELECT
  region,
  id,
  last_modified_time,
  response_headers_policy_config
FROM awscc.cloudfront.response_headers_policies
WHERE
  region = 'us-east-1' AND
  Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>response_headers_policies</code> in a region.
```sql
SELECT
  region,
  id
FROM awscc.cloudfront.response_headers_policies_list_only
WHERE
  region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>response_headers_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cloudfront.response_headers_policies (
  ResponseHeadersPolicyConfig,
  region
)
SELECT
  '{{ response_headers_policy_config }}',
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
INSERT INTO awscc.cloudfront.response_headers_policies (
  ResponseHeadersPolicyConfig,
  region
)
SELECT
  '{{ response_headers_policy_config }}',
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
  - name: response_headers_policy
    props:
      - name: response_headers_policy_config
        value:
          comment: '{{ comment }}'
          cors_config:
            access_control_allow_credentials: '{{ access_control_allow_credentials }}'
            access_control_allow_headers:
              items:
                - '{{ items[0] }}'
            access_control_allow_methods:
              items:
                - '{{ items[0] }}'
            access_control_allow_origins:
              items:
                - '{{ items[0] }}'
            access_control_expose_headers:
              items:
                - '{{ items[0] }}'
            access_control_max_age_sec: '{{ access_control_max_age_sec }}'
            origin_override: '{{ origin_override }}'
          custom_headers_config:
            items:
              - header: '{{ header }}'
                override: '{{ override }}'
                value: '{{ value }}'
          name: '{{ name }}'
          remove_headers_config:
            items:
              - header: '{{ header }}'
          security_headers_config:
            content_security_policy:
              content_security_policy: '{{ content_security_policy }}'
              override: '{{ override }}'
            content_type_options:
              override: '{{ override }}'
            frame_options:
              frame_option: '{{ frame_option }}'
              override: '{{ override }}'
            referrer_policy:
              override: '{{ override }}'
              referrer_policy: '{{ referrer_policy }}'
            strict_transport_security:
              access_control_max_age_sec: '{{ access_control_max_age_sec }}'
              include_subdomains: '{{ include_subdomains }}'
              override: '{{ override }}'
              preload: '{{ preload }}'
            x_ss_protection:
              mode_block: '{{ mode_block }}'
              override: '{{ override }}'
              protection: '{{ protection }}'
              report_uri: '{{ report_uri }}'
          server_timing_headers_config:
            enabled: '{{ enabled }}'
            sampling_rate: null`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>response_headers_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cloudfront.response_headers_policies
SET PatchDocument = string('{{ {
    "ResponseHeadersPolicyConfig": response_headers_policy_config
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
DELETE FROM awscc.cloudfront.response_headers_policies
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

To operate on the <code>response_headers_policies</code> resource, the following permissions are required:

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
cloudfront:CreateResponseHeadersPolicy
```

</TabItem>
<TabItem value="delete">

```json
cloudfront:DeleteResponseHeadersPolicy,
cloudfront:GetResponseHeadersPolicy
```

</TabItem>
<TabItem value="list">

```json
cloudfront:ListResponseHeadersPolicies
```

</TabItem>
<TabItem value="read">

```json
cloudfront:GetResponseHeadersPolicy
```

</TabItem>
<TabItem value="update">

```json
cloudfront:UpdateResponseHeadersPolicy,
cloudfront:GetResponseHeadersPolicy
```

</TabItem>
</Tabs>