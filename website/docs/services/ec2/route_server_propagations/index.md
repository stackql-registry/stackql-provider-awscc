---
title: route_server_propagations
hide_title: false
hide_table_of_contents: false
keywords:
  - route_server_propagations
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

Creates, updates, deletes or gets a <code>route_server_propagation</code> resource or lists <code>route_server_propagations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>route_server_propagations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>VPC Route Server Propagation</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.route_server_propagations" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "route_server_id",
    "type": "string",
    "description": "Route Server ID"
  },
  {
    "name": "route_table_id",
    "type": "string",
    "description": "Route Table ID"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserverpropagation.html"><code>AWS::EC2::RouteServerPropagation</code></a>.

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
    <td><CopyableCode code="RouteServerId, RouteTableId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>route_server_propagation</code>.
```sql
SELECT
region,
route_server_id,
route_table_id
FROM awscc.ec2.route_server_propagations
WHERE region = 'us-east-1' AND data__Identifier = '<RouteServerId>|<RouteTableId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>route_server_propagation</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.route_server_propagations (
 RouteServerId,
 RouteTableId,
 region
)
SELECT 
'{{ RouteServerId }}',
 '{{ RouteTableId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.route_server_propagations (
 RouteServerId,
 RouteTableId,
 region
)
SELECT 
 '{{ RouteServerId }}',
 '{{ RouteTableId }}',
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
  - name: route_server_propagation
    props:
      - name: RouteServerId
        value: '{{ RouteServerId }}'
      - name: RouteTableId
        value: '{{ RouteTableId }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.route_server_propagations
WHERE data__Identifier = '<RouteServerId|RouteTableId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>route_server_propagations</code> resource, the following permissions are required:

### Create
```json
ec2:EnableRouteServerPropagation,
ec2:GetRouteServerPropagations
```

### Read
```json
ec2:GetRouteServerPropagations
```

### Delete
```json
ec2:GetRouteServerPropagations,
ec2:DisableRouteServerPropagation
```

### List
```json
ec2:DescribeRouteServers,
ec2:GetRouteServerPropagations
```
