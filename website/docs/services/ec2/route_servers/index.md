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
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="amazon_side_asn" /></td><td><code>integer</code></td><td>The Amazon-side ASN of the Route Server.</td></tr>
<tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the Route Server.</td></tr>
<tr><td><CopyableCode code="id" /></td><td><code>string</code></td><td>The ID of the Route Server.</td></tr>
<tr><td><CopyableCode code="persist_routes" /></td><td><code>string</code></td><td>Whether to enable persistent routes</td></tr>
<tr><td><CopyableCode code="persist_routes_duration" /></td><td><code>integer</code></td><td>The duration of persistent routes in minutes</td></tr>
<tr><td><CopyableCode code="sns_notifications_enabled" /></td><td><code>boolean</code></td><td>Whether to enable SNS notifications</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserver.html"><code>AWS::EC2::RouteServer</code></a>.

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
    <td><CopyableCode code="AmazonSideAsn, region" /></td>
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
Gets all <code>route_servers</code> in a region.
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
WHERE region = 'us-east-1';
```
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
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```

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
'{{ AmazonSideAsn }}',
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
 '{{ AmazonSideAsn }}',
 '{{ PersistRoutes }}',
 '{{ PersistRoutesDuration }}',
 '{{ SnsNotificationsEnabled }}',
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
  - name: route_server
    props:
      - name: AmazonSideAsn
        value: '{{ AmazonSideAsn }}'
      - name: PersistRoutes
        value: '{{ PersistRoutes }}'
      - name: PersistRoutesDuration
        value: '{{ PersistRoutesDuration }}'
      - name: SnsNotificationsEnabled
        value: '{{ SnsNotificationsEnabled }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.route_servers
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>route_servers</code> resource, the following permissions are required:

### Create
```json
ec2:CreateRouteServer,
ec2:CreateTags,
ec2:DescribeRouteServers,
sns:CreateTopic
```

### Read
```json
ec2:DescribeRouteServers,
ec2:DescribeTags
```

### Update
```json
ec2:CreateTags,
ec2:DeleteTags,
ec2:DescribeRouteServers,
ec2:DescribeTags,
ec2:ModifyRouteServer,
sns:CreateTopic,
sns:DeleteTopic
```

### Delete
```json
ec2:DescribeTags,
ec2:DescribeRouteServers,
ec2:DeleteRouteServer,
ec2:DeleteTags,
sns:DeleteTopic
```

### List
```json
ec2:DescribeTags,
ec2:DescribeRouteServers
```
