---
title: origin_request_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - origin_request_policies
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

Creates, updates, deletes or gets an <code>origin_request_policy</code> resource or lists <code>origin_request_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>origin_request_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td><details><summary>An origin request policy.</summary>When it's attached to a cache behavior, the origin request policy determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:<br />+  The request body and the URL path (without the domain name) from the viewer request.<br />+  The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.<br />+  All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.<br />CloudFront sends a request when it can't find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudfront.origin_request_policies" /></td></tr>
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
    "name": "origin_request_policy_config",
    "type": "object",
    "description": "The origin request policy configuration.",
    "children": [
      {
        "name": "comment",
        "type": "string",
        "description": "A comment to describe the origin request policy. The comment cannot be longer than 128 characters."
      },
      {
        "name": "cookies_config",
        "type": "object",
        "description": "The cookies from viewer requests to include in origin requests.",
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
        "name": "headers_config",
        "type": "object",
        "description": "The HTTP headers to include in origin requests. These can include headers from viewer requests and additional headers added by CloudFront.",
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
        "name": "name",
        "type": "string",
        "description": "A unique name to identify the origin request policy."
      },
      {
        "name": "query_strings_config",
        "type": "object",
        "description": "The URL query strings from viewer requests to include in origin requests.",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originrequestpolicy.html"><code>AWS::CloudFront::OriginRequestPolicy</code></a>.

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
    <td><code>origin_request_policies</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="OriginRequestPolicyConfig, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>origin_request_policies</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>origin_request_policies</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>origin_request_policies_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>origin_request_policies</code></td>
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

Gets all properties from an individual <code>origin_request_policy</code>.
```sql
SELECT
  region,
  id,
  last_modified_time,
  origin_request_policy_config
FROM awscc.cloudfront.origin_request_policies
WHERE
  region = 'us-east-1' AND
  Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>origin_request_policies</code> in a region.
```sql
SELECT
  region,
  id
FROM awscc.cloudfront.origin_request_policies_list_only
WHERE
  region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>origin_request_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cloudfront.origin_request_policies (
  OriginRequestPolicyConfig,
  region
)
SELECT
  '{{ origin_request_policy_config }}',
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
INSERT INTO awscc.cloudfront.origin_request_policies (
  OriginRequestPolicyConfig,
  region
)
SELECT
  '{{ origin_request_policy_config }}',
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
  - name: origin_request_policy
    props:
      - name: origin_request_policy_config
        value:
          comment: '{{ comment }}'
          cookies_config:
            cookie_behavior: '{{ cookie_behavior }}'
            cookies:
              - '{{ cookies[0] }}'
          headers_config:
            header_behavior: '{{ header_behavior }}'
            headers:
              - '{{ headers[0] }}'
          name: '{{ name }}'
          query_strings_config:
            query_string_behavior: '{{ query_string_behavior }}'
            query_strings:
              - '{{ query_strings[0] }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>origin_request_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cloudfront.origin_request_policies
SET PatchDocument = string('{{ {
    "OriginRequestPolicyConfig": origin_request_policy_config
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
DELETE FROM awscc.cloudfront.origin_request_policies
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

To operate on the <code>origin_request_policies</code> resource, the following permissions are required:

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
cloudfront:CreateOriginRequestPolicy
```

</TabItem>
<TabItem value="delete">

```json
cloudfront:DeleteOriginRequestPolicy,
cloudfront:GetOriginRequestPolicy
```

</TabItem>
<TabItem value="list">

```json
cloudfront:ListOriginRequestPolicies
```

</TabItem>
<TabItem value="read">

```json
cloudfront:GetOriginRequestPolicy
```

</TabItem>
<TabItem value="update">

```json
cloudfront:UpdateOriginRequestPolicy,
cloudfront:GetOriginRequestPolicy
```

</TabItem>
</Tabs>