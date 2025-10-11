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
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>The name of the connection group.</td></tr>
<tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="created_time" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="last_modified_time" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>A complex type that contains zero or more <code>Tag</code> elements.</td></tr>
<tr><td><CopyableCode code="ipv6_enabled" /></td><td><code>boolean</code></td><td>IPv6 is enabled for the connection group.</td></tr>
<tr><td><CopyableCode code="routing_endpoint" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="anycast_ip_list_id" /></td><td><code>string</code></td><td>The ID of the Anycast static IP list.</td></tr>
<tr><td><CopyableCode code="status" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="enabled" /></td><td><code>boolean</code></td><td>Whether the connection group is enabled.</td></tr>
<tr><td><CopyableCode code="is_default" /></td><td><code>boolean</code></td><td></td></tr>
<tr><td><CopyableCode code="e_tag" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-connectiongroup.html"><code>AWS::CloudFront::ConnectionGroup</code></a>.

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
    <td><CopyableCode code="Name, region" /></td>
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
Gets all <code>connection_groups</code> in a region.
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
;
```
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
WHERE data__Identifier = '<Id>';
```

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

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudfront.connection_groups
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>connection_groups</code> resource, the following permissions are required:

### Create
```json
cloudfront:CreateConnectionGroup,
cloudfront:GetConnectionGroup,
cloudfront:TagResource
```

### Delete
```json
cloudfront:DeleteConnectionGroup,
cloudfront:GetConnectionGroup,
cloudfront:UpdateConnectionGroup
```

### List
```json
cloudfront:ListConnectionGroups,
cloudfront:ListTagsForResource
```

### Read
```json
cloudfront:GetConnectionGroup,
cloudfront:ListTagsForResource
```

### Update
```json
cloudfront:GetConnectionGroup,
cloudfront:UpdateConnectionGroup,
cloudfront:ListTagsForResource,
cloudfront:TagResource,
cloudfront:UntagResource
```
