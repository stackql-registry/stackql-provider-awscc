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
<tr><td><b>Description</b></td><td>An origin request policy.<br />When it's attached to a cache behavior, the origin request policy determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:<br />+ The request body and the URL path (without the domain name) from the viewer request.<br />+ The headers that CloudFront automatically includes in every origin request, including &#96;&#96;Host&#96;&#96;, &#96;&#96;User-Agent&#96;&#96;, and &#96;&#96;X-Amz-Cf-Id&#96;&#96;.<br />+ All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.<br /><br />CloudFront sends a request when it can't find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use &#96;&#96;CachePolicy&#96;&#96;.</td></tr>
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
        "name": "headers_config",
        "type": "object",
        "description": "The HTTP headers to include in origin requests. These can include headers from viewer requests and additional headers added by CloudFront.",
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
WHERE region = 'us-east-1' AND Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>origin_request_policies</code> in a region.
```sql
SELECT
region,
id
FROM awscc.cloudfront.origin_request_policies_list_only
WHERE region = 'us-east-1';
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
'{{ region }}';
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
WHERE region = '{{ region }}'
AND Identifier = '{{ id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudfront.origin_request_policies
WHERE Identifier = '{{ id }}'
AND region = 'us-east-1';
```

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