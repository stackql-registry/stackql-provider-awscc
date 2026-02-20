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
<tr><td><b>Description</b></td><td>A response headers policy.<br />A response headers policy contains information about a set of HTTP response headers.<br />After you create a response headers policy, you can use its ID to attach it to one or more cache behaviors in a CloudFront distribution. When it's attached to a cache behavior, the response headers policy affects the HTTP headers that CloudFront includes in HTTP responses to requests that match the cache behavior. CloudFront adds or removes response headers according to the configuration of the response headers policy.<br />For more information, see &#91;Adding or removing HTTP headers in CloudFront responses&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/modifying-response-headers.html) in the &#42;Amazon CloudFront Developer Guide&#42;.</td></tr>
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
        "description": "A comment to describe the response headers policy.<br />The comment cannot be longer than 128 characters."
      },
      {
        "name": "cors_config",
        "type": "object",
        "description": "A configuration for a set of HTTP response headers that are used for cross-origin resource sharing (CORS).",
        "children": [
          {
            "name": "access_control_allow_credentials",
            "type": "boolean",
            "description": "A Boolean that CloudFront uses as the value for the &#96;&#96;Access-Control-Allow-Credentials&#96;&#96; HTTP response header.<br />For more information about the &#96;&#96;Access-Control-Allow-Credentials&#96;&#96; HTTP response header, see &#91;Access-Control-Allow-Credentials&#93;(https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials) in the MDN Web Docs."
          },
          {
            "name": "access_control_allow_headers",
            "type": "object",
            "description": "A list of HTTP header names that CloudFront includes as values for the &#96;&#96;Access-Control-Allow-Headers&#96;&#96; HTTP response header.<br />For more information about the &#96;&#96;Access-Control-Allow-Headers&#96;&#96; HTTP response header, see &#91;Access-Control-Allow-Headers&#93;(https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers) in the MDN Web Docs.",
            "children": [
              {
                "name": "items",
                "type": "array",
                "description": "The list of HTTP header names. You can specify &#96;&#96;&#42;&#96;&#96; to allow all headers."
              }
            ]
          },
          {
            "name": "access_control_allow_methods",
            "type": "object",
            "description": "A list of HTTP methods that CloudFront includes as values for the &#96;&#96;Access-Control-Allow-Methods&#96;&#96; HTTP response header.<br />For more information about the &#96;&#96;Access-Control-Allow-Methods&#96;&#96; HTTP response header, see &#91;Access-Control-Allow-Methods&#93;(https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods) in the MDN Web Docs.",
            "children": [
              {
                "name": "items",
                "type": "array",
                "description": "The list of HTTP methods. Valid values are:<br />+ &#96;&#96;GET&#96;&#96; <br />+ &#96;&#96;DELETE&#96;&#96; <br />+ &#96;&#96;HEAD&#96;&#96; <br />+ &#96;&#96;OPTIONS&#96;&#96; <br />+ &#96;&#96;PATCH&#96;&#96; <br />+ &#96;&#96;POST&#96;&#96; <br />+ &#96;&#96;PUT&#96;&#96; <br />+ &#96;&#96;ALL&#96;&#96; <br /><br />&#96;&#96;ALL&#96;&#96; is a special value that includes all of the listed HTTP methods."
              }
            ]
          },
          {
            "name": "access_control_allow_origins",
            "type": "object",
            "description": "A list of origins (domain names) that CloudFront can use as the value for the &#96;&#96;Access-Control-Allow-Origin&#96;&#96; HTTP response header.<br />For more information about the &#96;&#96;Access-Control-Allow-Origin&#96;&#96; HTTP response header, see &#91;Access-Control-Allow-Origin&#93;(https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) in the MDN Web Docs.",
            "children": [
              {
                "name": "items",
                "type": "array",
                "description": "The list of origins (domain names). You can specify &#96;&#96;&#42;&#96;&#96; to allow all origins."
              }
            ]
          },
          {
            "name": "access_control_expose_headers",
            "type": "object",
            "description": "A list of HTTP headers that CloudFront includes as values for the &#96;&#96;Access-Control-Expose-Headers&#96;&#96; HTTP response header.<br />For more information about the &#96;&#96;Access-Control-Expose-Headers&#96;&#96; HTTP response header, see &#91;Access-Control-Expose-Headers&#93;(https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers) in the MDN Web Docs.",
            "children": [
              {
                "name": "items",
                "type": "array",
                "description": "The list of HTTP headers. You can specify &#96;&#96;&#42;&#96;&#96; to expose all headers."
              }
            ]
          },
          {
            "name": "access_control_max_age_sec",
            "type": "integer",
            "description": "A number that CloudFront uses as the value for the &#96;&#96;Access-Control-Max-Age&#96;&#96; HTTP response header.<br />For more information about the &#96;&#96;Access-Control-Max-Age&#96;&#96; HTTP response header, see &#91;Access-Control-Max-Age&#93;(https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age) in the MDN Web Docs."
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
        "description": "A name to identify the response headers policy.<br />The name must be unique for response headers policies in this AWS-account."
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
            "description": "The policy directives and their values that CloudFront includes as values for the &#96;&#96;Content-Security-Policy&#96;&#96; HTTP response header.<br />For more information about the &#96;&#96;Content-Security-Policy&#96;&#96; HTTP response header, see &#91;Content-Security-Policy&#93;(https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) in the MDN Web Docs.",
            "children": [
              {
                "name": "content_security_policy",
                "type": "string",
                "description": "The policy directives and their values that CloudFront includes as values for the &#96;&#96;Content-Security-Policy&#96;&#96; HTTP response header.<br />For more information about the &#96;&#96;Content-Security-Policy&#96;&#96; HTTP response header, see &#91;Content-Security-Policy&#93;(https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) in the MDN Web Docs."
              },
              {
                "name": "override",
                "type": "boolean",
                "description": "A Boolean that determines whether CloudFront overrides the &#96;&#96;Content-Security-Policy&#96;&#96; HTTP response header received from the origin with the one specified in this response headers policy."
              }
            ]
          },
          {
            "name": "content_type_options",
            "type": "object",
            "description": "Determines whether CloudFront includes the &#96;&#96;X-Content-Type-Options&#96;&#96; HTTP response header with its value set to &#96;&#96;nosniff&#96;&#96;.<br />For more information about the &#96;&#96;X-Content-Type-Options&#96;&#96; HTTP response header, see &#91;X-Content-Type-Options&#93;(https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options) in the MDN Web Docs.",
            "children": [
              {
                "name": "override",
                "type": "boolean",
                "description": "A Boolean that determines whether CloudFront overrides the &#96;&#96;X-Content-Type-Options&#96;&#96; HTTP response header received from the origin with the one specified in this response headers policy."
              }
            ]
          },
          {
            "name": "frame_options",
            "type": "object",
            "description": "Determines whether CloudFront includes the &#96;&#96;X-Frame-Options&#96;&#96; HTTP response header and the header's value.<br />For more information about the &#96;&#96;X-Frame-Options&#96;&#96; HTTP response header, see &#91;X-Frame-Options&#93;(https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) in the MDN Web Docs.",
            "children": [
              {
                "name": "frame_option",
                "type": "string",
                "description": "The value of the &#96;&#96;X-Frame-Options&#96;&#96; HTTP response header. Valid values are &#96;&#96;DENY&#96;&#96; and &#96;&#96;SAMEORIGIN&#96;&#96;.<br />For more information about these values, see &#91;X-Frame-Options&#93;(https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) in the MDN Web Docs."
              },
              {
                "name": "override",
                "type": "boolean",
                "description": "A Boolean that determines whether CloudFront overrides the &#96;&#96;X-Frame-Options&#96;&#96; HTTP response header received from the origin with the one specified in this response headers policy."
              }
            ]
          },
          {
            "name": "referrer_policy",
            "type": "object",
            "description": "Determines whether CloudFront includes the &#96;&#96;Referrer-Policy&#96;&#96; HTTP response header and the header's value.<br />For more information about the &#96;&#96;Referrer-Policy&#96;&#96; HTTP response header, see &#91;Referrer-Policy&#93;(https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) in the MDN Web Docs.",
            "children": [
              {
                "name": "override",
                "type": "boolean",
                "description": "A Boolean that determines whether CloudFront overrides the &#96;&#96;Referrer-Policy&#96;&#96; HTTP response header received from the origin with the one specified in this response headers policy."
              },
              {
                "name": "referrer_policy",
                "type": "string",
                "description": "Determines whether CloudFront includes the &#96;&#96;Referrer-Policy&#96;&#96; HTTP response header and the header's value.<br />For more information about the &#96;&#96;Referrer-Policy&#96;&#96; HTTP response header, see &#91;Referrer-Policy&#93;(https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) in the MDN Web Docs."
              }
            ]
          },
          {
            "name": "strict_transport_security",
            "type": "object",
            "description": "Determines whether CloudFront includes the &#96;&#96;Strict-Transport-Security&#96;&#96; HTTP response header and the header's value.<br />For more information about the &#96;&#96;Strict-Transport-Security&#96;&#96; HTTP response header, see &#91;Security headers&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/understanding-response-headers-policies.html#understanding-response-headers-policies-security) in the &#42;Amazon CloudFront Developer Guide&#42; and &#91;Strict-Transport-Security&#93;(https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security) in the MDN Web Docs.",
            "children": [
              {
                "name": "access_control_max_age_sec",
                "type": "integer",
                "description": "A number that CloudFront uses as the value for the &#96;&#96;max-age&#96;&#96; directive in the &#96;&#96;Strict-Transport-Security&#96;&#96; HTTP response header."
              },
              {
                "name": "include_subdomains",
                "type": "boolean",
                "description": "A Boolean that determines whether CloudFront includes the &#96;&#96;includeSubDomains&#96;&#96; directive in the &#96;&#96;Strict-Transport-Security&#96;&#96; HTTP response header."
              },
              {
                "name": "override",
                "type": "boolean",
                "description": "A Boolean that determines whether CloudFront overrides the &#96;&#96;Strict-Transport-Security&#96;&#96; HTTP response header received from the origin with the one specified in this response headers policy."
              },
              {
                "name": "preload",
                "type": "boolean",
                "description": "A Boolean that determines whether CloudFront includes the &#96;&#96;preload&#96;&#96; directive in the &#96;&#96;Strict-Transport-Security&#96;&#96; HTTP response header."
              }
            ]
          },
          {
            "name": "x_ss_protection",
            "type": "object",
            "description": "Determines whether CloudFront includes the &#96;&#96;X-XSS-Protection&#96;&#96; HTTP response header and the header's value.<br />For more information about the &#96;&#96;X-XSS-Protection&#96;&#96; HTTP response header, see &#91;X-XSS-Protection&#93;(https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.",
            "children": [
              {
                "name": "mode_block",
                "type": "boolean",
                "description": "A Boolean that determines whether CloudFront includes the &#96;&#96;mode=block&#96;&#96; directive in the &#96;&#96;X-XSS-Protection&#96;&#96; header.<br />For more information about this directive, see &#91;X-XSS-Protection&#93;(https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs."
              },
              {
                "name": "override",
                "type": "boolean",
                "description": "A Boolean that determines whether CloudFront overrides the &#96;&#96;X-XSS-Protection&#96;&#96; HTTP response header received from the origin with the one specified in this response headers policy."
              },
              {
                "name": "protection",
                "type": "boolean",
                "description": "A Boolean that determines the value of the &#96;&#96;X-XSS-Protection&#96;&#96; HTTP response header. When this setting is &#96;&#96;true&#96;&#96;, the value of the &#96;&#96;X-XSS-Protection&#96;&#96; header is &#96;&#96;1&#96;&#96;. When this setting is &#96;&#96;false&#96;&#96;, the value of the &#96;&#96;X-XSS-Protection&#96;&#96; header is &#96;&#96;0&#96;&#96;.<br />For more information about these settings, see &#91;X-XSS-Protection&#93;(https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs."
              },
              {
                "name": "report_uri",
                "type": "string",
                "description": "A reporting URI, which CloudFront uses as the value of the &#96;&#96;report&#96;&#96; directive in the &#96;&#96;X-XSS-Protection&#96;&#96; header.<br />You cannot specify a &#96;&#96;ReportUri&#96;&#96; when &#96;&#96;ModeBlock&#96;&#96; is &#96;&#96;true&#96;&#96;.<br />For more information about using a reporting URL, see &#91;X-XSS-Protection&#93;(https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs."
              }
            ]
          }
        ]
      },
      {
        "name": "server_timing_headers_config",
        "type": "object",
        "description": "A configuration for enabling the &#96;&#96;Server-Timing&#96;&#96; header in HTTP responses sent from CloudFront.",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": "A Boolean that determines whether CloudFront adds the &#96;&#96;Server-Timing&#96;&#96; header to HTTP responses that it sends in response to requests that match a cache behavior that's associated with this response headers policy."
          },
          {
            "name": "sampling_rate",
            "type": "number",
            "description": "A number 0–100 (inclusive) that specifies the percentage of responses that you want CloudFront to add the &#96;&#96;Server-Timing&#96;&#96; header to. When you set the sampling rate to 100, CloudFront adds the &#96;&#96;Server-Timing&#96;&#96; header to the HTTP response for every request that matches the cache behavior that this response headers policy is attached to. When you set it to 50, CloudFront adds the header to 50% of the responses for requests that match the cache behavior. You can set the sampling rate to any number 0–100 with up to four decimal places."
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
WHERE Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>response_headers_policies</code> in a region.
```sql
SELECT
region,
id
FROM awscc.cloudfront.response_headers_policies_list_only
;
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
'{{ ResponseHeadersPolicyConfig }}',
'{{ region }}';
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
 '{{ ResponseHeadersPolicyConfig }}',
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
  - name: response_headers_policy
    props:
      - name: ResponseHeadersPolicyConfig
        value:
          Comment: '{{ Comment }}'
          CorsConfig:
            AccessControlAllowCredentials: '{{ AccessControlAllowCredentials }}'
            AccessControlAllowHeaders:
              Items:
                - '{{ Items[0] }}'
            AccessControlAllowMethods:
              Items:
                - '{{ Items[0] }}'
            AccessControlAllowOrigins:
              Items:
                - '{{ Items[0] }}'
            AccessControlExposeHeaders:
              Items:
                - '{{ Items[0] }}'
            AccessControlMaxAgeSec: '{{ AccessControlMaxAgeSec }}'
            OriginOverride: '{{ OriginOverride }}'
          CustomHeadersConfig:
            Items:
              - Header: '{{ Header }}'
                Override: '{{ Override }}'
                Value: '{{ Value }}'
          Name: '{{ Name }}'
          RemoveHeadersConfig:
            Items:
              - Header: '{{ Header }}'
          SecurityHeadersConfig:
            ContentSecurityPolicy:
              ContentSecurityPolicy: '{{ ContentSecurityPolicy }}'
              Override: '{{ Override }}'
            ContentTypeOptions:
              Override: '{{ Override }}'
            FrameOptions:
              FrameOption: '{{ FrameOption }}'
              Override: '{{ Override }}'
            ReferrerPolicy:
              Override: '{{ Override }}'
              ReferrerPolicy: '{{ ReferrerPolicy }}'
            StrictTransportSecurity:
              AccessControlMaxAgeSec: '{{ AccessControlMaxAgeSec }}'
              IncludeSubdomains: '{{ IncludeSubdomains }}'
              Override: '{{ Override }}'
              Preload: '{{ Preload }}'
            XSSProtection:
              ModeBlock: '{{ ModeBlock }}'
              Override: '{{ Override }}'
              Protection: '{{ Protection }}'
              ReportUri: '{{ ReportUri }}'
          ServerTimingHeadersConfig:
            Enabled: '{{ Enabled }}'
            SamplingRate: null

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.cloudfront.response_headers_policies
SET PatchDocument = string('{{ {
    "ResponseHeadersPolicyConfig": response_headers_policy_config
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudfront.response_headers_policies
WHERE Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>response_headers_policies</code> resource, the following permissions are required:

### Create
```json
cloudfront:CreateResponseHeadersPolicy
```

### Delete
```json
cloudfront:DeleteResponseHeadersPolicy,
cloudfront:GetResponseHeadersPolicy
```

### List
```json
cloudfront:ListResponseHeadersPolicies
```

### Read
```json
cloudfront:GetResponseHeadersPolicy
```

### Update
```json
cloudfront:UpdateResponseHeadersPolicy,
cloudfront:GetResponseHeadersPolicy
```
