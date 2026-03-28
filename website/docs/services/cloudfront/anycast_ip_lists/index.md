---
title: anycast_ip_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - anycast_ip_lists
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

Creates, updates, deletes or gets an <code>anycast_ip_list</code> resource or lists <code>anycast_ip_lists</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>anycast_ip_lists</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An Anycast static IP list. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/request-static-ips.html">Request Anycast static IPs to use for allowlisting</a> in the <i>Amazon CloudFront Developer Guide</i>.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudfront.anycast_ip_lists" /></td></tr>
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
    "name": "anycast_ip_list",
    "type": "object",
    "description": "An Anycast static IP list. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/request-static-ips.html\">Request Anycast static IPs to use for allowlisting</a> in the <i>Amazon CloudFront Developer Guide</i>.",
    "children": [
      {
        "name": "e_tag",
        "type": "string",
        "description": ""
      },
      {
        "name": "id",
        "type": "string",
        "description": ""
      },
      {
        "name": "ip_count",
        "type": "integer",
        "description": "The number of IP addresses in the Anycast static IP list."
      },
      {
        "name": "name",
        "type": "string",
        "description": "The name of the Anycast static IP list."
      },
      {
        "name": "tags",
        "type": "object",
        "description": "A complex type that contains zero or more <code>Tag</code> elements.",
        "children": [
          {
            "name": "items",
            "type": "array",
            "description": "A complex type that contains <code>Tag</code> elements.",
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
          }
        ]
      }
    ]
  },
  {
    "name": "e_tag",
    "type": "string",
    "description": ""
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "ip_count",
    "type": "integer",
    "description": "The number of IP addresses in the Anycast static IP list."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the Anycast static IP list."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A complex type that contains zero or more <code>Tag</code> elements.",
    "children": [
      {
        "name": "items",
        "type": "array",
        "description": "A complex type that contains <code>Tag</code> elements.",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-anycastiplist.html"><code>AWS::CloudFront::AnycastIpList</code></a>.

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
    <td><code>anycast_ip_lists</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="IpCount, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>anycast_ip_lists</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>anycast_ip_lists_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>anycast_ip_lists</code></td>
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

Gets all properties from an individual <code>anycast_ip_list</code>.
```sql
SELECT
  region,
  anycast_ip_list,
  e_tag,
  id,
  ip_count,
  name,
  tags
FROM awscc.cloudfront.anycast_ip_lists
WHERE
  region = 'us-east-1' AND
  Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>anycast_ip_lists</code> in a region.
```sql
SELECT
  region,
  id
FROM awscc.cloudfront.anycast_ip_lists_list_only
WHERE
  region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>anycast_ip_list</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cloudfront.anycast_ip_lists (
  IpCount,
  Name,
  region
)
SELECT
  '{{ ip_count }}',
  '{{ name }}',
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
INSERT INTO awscc.cloudfront.anycast_ip_lists (
  IpCount,
  Name,
  Tags,
  region
)
SELECT
  '{{ ip_count }}',
  '{{ name }}',
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
  - name: anycast_ip_list
    props:
      - name: ip_count
        value: '{{ ip_count }}'
      - name: name
        value: '{{ name }}'
      - name: tags
        value:
          items:
            - key: '{{ key }}'
              value: '{{ value }}'`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudfront.anycast_ip_lists
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

To operate on the <code>anycast_ip_lists</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Read', value: 'read', },
    ]
}>
<TabItem value="create">

```json
cloudfront:CreateAnycastIpList,
cloudfront:TagResource
```

</TabItem>
<TabItem value="delete">

```json
cloudfront:DeleteAnycastIpList,
cloudfront:GetAnycastIpList
```

</TabItem>
<TabItem value="list">

```json
cloudfront:ListAnycastIpLists
```

</TabItem>
<TabItem value="read">

```json
cloudfront:GetAnycastIpList,
cloudfront:ListTagsForResource
```

</TabItem>
</Tabs>