---
title: route_server_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - route_server_associations
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

Creates, updates, deletes or gets a <code>route_server_association</code> resource or lists <code>route_server_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>route_server_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>VPC Route Server Association</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.route_server_associations" /></td></tr>
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
    "name": "route_server_id",
    "type": "string",
    "description": "Route Server ID"
  },
  {
    "name": "vpc_id",
    "type": "string",
    "description": "VPC ID"
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
    "name": "route_server_id",
    "type": "string",
    "description": "Route Server ID"
  },
  {
    "name": "vpc_id",
    "type": "string",
    "description": "VPC ID"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserverassociation.html"><code>AWS::EC2::RouteServerAssociation</code></a>.

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
    <td><code>route_server_associations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="RouteServerId, VpcId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>route_server_associations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>route_server_associations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>route_server_associations</code></td>
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

Gets all properties from an individual <code>route_server_association</code>.
```sql
SELECT
region,
route_server_id,
vpc_id
FROM awscc.ec2.route_server_associations
WHERE region = 'us-east-1' AND Identifier = '{{ route_server_id }}|{{ vpc_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>route_server_associations</code> in a region.
```sql
SELECT
region,
route_server_id,
vpc_id
FROM awscc.ec2.route_server_associations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>route_server_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.route_server_associations (
 RouteServerId,
 VpcId,
 region
)
SELECT
'{{ route_server_id }}',
 '{{ vpc_id }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.route_server_associations (
 RouteServerId,
 VpcId,
 region
)
SELECT
 '{{ route_server_id }}',
 '{{ vpc_id }}',
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
  - name: route_server_association
    props:
      - name: route_server_id
        value: '{{ route_server_id }}'
      - name: vpc_id
        value: '{{ vpc_id }}'
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.route_server_associations
WHERE Identifier = '{{ route_server_id }}|{{ vpc_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>route_server_associations</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
ec2:AssociateRouteServer,
ec2:GetRouteServerAssociations
```

</TabItem>
<TabItem value="read">

```json
ec2:GetRouteServerAssociations
```

</TabItem>
<TabItem value="delete">

```json
ec2:GetRouteServerAssociations,
ec2:DisassociateRouteServer
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeRouteServers,
ec2:GetRouteServerAssociations
```

</TabItem>
</Tabs>