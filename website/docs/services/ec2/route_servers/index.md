---
title: route_servers
hide_title: false
hide_table_of_contents: false
keywords:
  - route_servers
  - ec2
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

Creates, updates, deletes or gets a <code>route_server</code> resource or lists <code>route_servers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>route_servers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>VPC Route Server</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.route_servers" /></td></tr>
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
    "name": "amazon_side_asn",
    "type": "integer",
    "description": "The Amazon-side ASN of the Route Server."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the Route Server."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The ID of the Route Server."
  },
  {
    "name": "persist_routes",
    "type": "string",
    "description": "Whether to enable persistent routes"
  },
  {
    "name": "persist_routes_duration",
    "type": "integer",
    "description": "The duration of persistent routes in minutes"
  },
  {
    "name": "sns_notifications_enabled",
    "type": "boolean",
    "description": "Whether to enable SNS notifications"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The tag key."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The tag value."
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
    "description": "The ID of the Route Server."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserver.html"><code>AWS::EC2::RouteServer</code></a>.

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
    <td><code>route_servers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AmazonSideAsn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>route_servers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>route_servers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>route_servers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>route_servers</code></td>
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

Gets all properties from an individual <code>route_server</code>.
```sql
SELECT
region,
amazon_side_asn,
arn,
id,
persist_routes,
persist_routes_duration,
sns_notifications_enabled,
tags
FROM awscc.ec2.route_servers
WHERE region = 'us-east-1' AND Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>route_servers</code> in a region.
```sql
SELECT
region,
id
FROM awscc.ec2.route_servers_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>route_server</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.route_servers (
 AmazonSideAsn,
 region
)
SELECT
'{{ amazon_side_asn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.route_servers (
 AmazonSideAsn,
 PersistRoutes,
 PersistRoutesDuration,
 SnsNotificationsEnabled,
 Tags,
 region
)
SELECT
 '{{ amazon_side_asn }}',
 '{{ persist_routes }}',
 '{{ persist_routes_duration }}',
 '{{ sns_notifications_enabled }}',
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
  - name: route_server
    props:
      - name: amazon_side_asn
        value: '{{ amazon_side_asn }}'
      - name: persist_routes
        value: '{{ persist_routes }}'
      - name: persist_routes_duration
        value: '{{ persist_routes_duration }}'
      - name: sns_notifications_enabled
        value: '{{ sns_notifications_enabled }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>route_server</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.route_servers
SET PatchDocument = string('{{ {
    "PersistRoutes": persist_routes,
    "PersistRoutesDuration": persist_routes_duration,
    "SnsNotificationsEnabled": sns_notifications_enabled,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.route_servers
WHERE Identifier = '{{ id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>route_servers</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
ec2:CreateRouteServer,
ec2:CreateTags,
ec2:DescribeRouteServers,
sns:CreateTopic
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeRouteServers,
ec2:DescribeTags
```

</TabItem>
<TabItem value="update">

```json
ec2:CreateTags,
ec2:DeleteTags,
ec2:DescribeRouteServers,
ec2:DescribeTags,
ec2:ModifyRouteServer,
sns:CreateTopic,
sns:DeleteTopic
```

</TabItem>
<TabItem value="delete">

```json
ec2:DescribeTags,
ec2:DescribeRouteServers,
ec2:DeleteRouteServer,
ec2:DeleteTags,
sns:DeleteTopic
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeTags,
ec2:DescribeRouteServers
```

</TabItem>
</Tabs>