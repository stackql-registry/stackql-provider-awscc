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
<tr><td><b>Description</b></td><td>An Anycast static IP list. For more information, see &#91;Request Anycast static IPs to use for allowlisting&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/request-static-ips.html) in the &#42;Amazon CloudFront Developer Guide&#42;.</td></tr>
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
    "description": "An Anycast static IP list. For more information, see &#91;Request Anycast static IPs to use for allowlisting&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/request-static-ips.html) in the &#42;Amazon CloudFront Developer Guide&#42;.",
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
        "description": "A complex type that contains zero or more &#96;&#96;Tag&#96;&#96; elements.",
        "children": [
          {
            "name": "items",
            "type": "array",
            "description": "A complex type that contains &#96;&#96;Tag&#96;&#96; elements.",
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
    "description": "A complex type that contains zero or more &#96;&#96;Tag&#96;&#96; elements.",
    "children": [
      {
        "name": "items",
        "type": "array",
        "description": "A complex type that contains &#96;&#96;Tag&#96;&#96; elements.",
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
WHERE Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>anycast_ip_lists</code> in a region.
```sql
SELECT
region,
id
FROM awscc.cloudfront.anycast_ip_lists_list_only
;
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
'{{ IpCount }}',
 '{{ Name }}',
'{{ region }}';
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
 '{{ IpCount }}',
 '{{ Name }}',
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
  - name: anycast_ip_list
    props:
      - name: IpCount
        value: '{{ IpCount }}'
      - name: Name
        value: '{{ Name }}'
      - name: Tags
        value:
          Items:
            - Key: '{{ Key }}'
              Value: '{{ Value }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudfront.anycast_ip_lists
WHERE Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>anycast_ip_lists</code> resource, the following permissions are required:

### Create
```json
cloudfront:CreateAnycastIpList,
cloudfront:TagResource
```

### Delete
```json
cloudfront:DeleteAnycastIpList,
cloudfront:GetAnycastIpList
```

### List
```json
cloudfront:ListAnycastIpLists
```

### Read
```json
cloudfront:GetAnycastIpList,
cloudfront:ListTagsForResource
```
