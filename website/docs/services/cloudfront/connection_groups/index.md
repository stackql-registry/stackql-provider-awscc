---
title: connection_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - connection_groups
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

Creates, updates, deletes or gets a <code>connection_group</code> resource or lists <code>connection_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>connection_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The connection group for your distribution tenants. When you first create a distribution tenant and you don't specify a connection group, CloudFront will automatically create a default connection group for you. When you create a new distribution tenant and don't specify a connection group, the default one will be associated with your distribution tenant.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudfront.connection_groups" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": "The name of the connection group."
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "created_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "last_modified_time",
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
    "name": "ipv6_enabled",
    "type": "boolean",
    "description": "IPv6 is enabled for the connection group."
  },
  {
    "name": "routing_endpoint",
    "type": "string",
    "description": ""
  },
  {
    "name": "anycast_ip_list_id",
    "type": "string",
    "description": "The ID of the Anycast static IP list."
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "enabled",
    "type": "boolean",
    "description": "Whether the connection group is enabled."
  },
  {
    "name": "is_default",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "e_tag",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-connectiongroup.html"><code>AWS::CloudFront::ConnectionGroup</code></a>.

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
    <td><code>connection_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>connection_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>connection_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>connection_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>connection_groups</code></td>
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

Gets all properties from an individual <code>connection_group</code>.
```sql
SELECT
region,
id,
name,
arn,
created_time,
last_modified_time,
tags,
ipv6_enabled,
routing_endpoint,
anycast_ip_list_id,
status,
enabled,
is_default,
e_tag
FROM awscc.cloudfront.connection_groups
WHERE Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>connection_groups</code> in a region.
```sql
SELECT
region,
id
FROM awscc.cloudfront.connection_groups_list_only
;
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>connection_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cloudfront.connection_groups (
 Name,
 region
)
SELECT 
'{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cloudfront.connection_groups (
 Name,
 Tags,
 Ipv6Enabled,
 AnycastIpListId,
 Enabled,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Tags }}',
 '{{ Ipv6Enabled }}',
 '{{ AnycastIpListId }}',
 '{{ Enabled }}',
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
  - name: connection_group
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: Ipv6Enabled
        value: '{{ Ipv6Enabled }}'
      - name: AnycastIpListId
        value: '{{ AnycastIpListId }}'
      - name: Enabled
        value: '{{ Enabled }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>connection_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cloudfront.connection_groups
SET PatchDocument = string('{{ {
    "Tags": tags,
    "Ipv6Enabled": ipv6_enabled,
    "AnycastIpListId": anycast_ip_list_id,
    "Enabled": enabled
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudfront.connection_groups
WHERE Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>connection_groups</code> resource, the following permissions are required:

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
cloudfront:GetConnectionGroup,
cloudfront:TagResource
```

</TabItem>
<TabItem value="delete">

```json
cloudfront:DeleteConnectionGroup,
cloudfront:GetConnectionGroup,
cloudfront:UpdateConnectionGroup
```

</TabItem>
<TabItem value="list">

```json
cloudfront:ListConnectionGroups,
cloudfront:ListTagsForResource
```

</TabItem>
<TabItem value="read">

```json
cloudfront:GetConnectionGroup,
cloudfront:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
cloudfront:GetConnectionGroup,
cloudfront:UpdateConnectionGroup,
cloudfront:ListTagsForResource,
cloudfront:TagResource,
cloudfront:UntagResource
```

</TabItem>
</Tabs>