---
title: route_server_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - route_server_endpoints
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

Creates, updates, deletes or gets a <code>route_server_endpoint</code> resource or lists <code>route_server_endpoints</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>route_server_endpoints</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>VPC Route Server Endpoint</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.route_server_endpoints" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the Route Server Endpoint."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The ID of the Route Server Endpoint."
  },
  {
    "name": "subnet_id",
    "type": "string",
    "description": "Subnet ID"
  },
  {
    "name": "vpc_id",
    "type": "string",
    "description": "VPC ID"
  },
  {
    "name": "eni_id",
    "type": "string",
    "description": "Elastic Network Interface ID owned by the Route Server Endpoint"
  },
  {
    "name": "eni_address",
    "type": "string",
    "description": "Elastic Network Interface IP address owned by the Route Server Endpoint"
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
    "description": "The ID of the Route Server Endpoint."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserverendpoint.html"><code>AWS::EC2::RouteServerEndpoint</code></a>.

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
    <td><code>route_server_endpoints</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="RouteServerId, SubnetId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>route_server_endpoints</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>route_server_endpoints</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>route_server_endpoints_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>route_server_endpoints</code></td>
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

Gets all properties from an individual <code>route_server_endpoint</code>.
```sql
SELECT
region,
route_server_id,
arn,
id,
subnet_id,
vpc_id,
eni_id,
eni_address,
tags
FROM awscc.ec2.route_server_endpoints
WHERE region = 'us-east-1' AND Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>route_server_endpoints</code> in a region.
```sql
SELECT
region,
id
FROM awscc.ec2.route_server_endpoints_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>route_server_endpoint</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.route_server_endpoints (
 RouteServerId,
 SubnetId,
 region
)
SELECT
'{{ route_server_id }}',
 '{{ subnet_id }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.route_server_endpoints (
 RouteServerId,
 SubnetId,
 Tags,
 region
)
SELECT
 '{{ route_server_id }}',
 '{{ subnet_id }}',
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
  - name: route_server_endpoint
    props:
      - name: route_server_id
        value: '{{ route_server_id }}'
      - name: subnet_id
        value: '{{ subnet_id }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>route_server_endpoint</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.route_server_endpoints
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.route_server_endpoints
WHERE Identifier = '{{ id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>route_server_endpoints</code> resource, the following permissions are required:

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
ec2:CreateRouteServerEndpoint,
ec2:CreateTags,
ec2:DescribeRouteServerEndpoints,
ec2:CreateNetworkInterface,
ec2:CreateNetworkInterfacePermission,
ec2:CreateSecurityGroup,
ec2:DescribeSecurityGroups,
ec2:AuthorizeSecurityGroupIngress
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeRouteServerEndpoints,
ec2:DescribeTags
```

</TabItem>
<TabItem value="update">

```json
ec2:CreateTags,
ec2:DeleteTags,
ec2:DescribeRouteServerEndpoints,
ec2:DescribeTags,
ec2:ModifyRouteServerEndpoint
```

</TabItem>
<TabItem value="delete">

```json
ec2:DescribeTags,
ec2:DescribeRouteServerEndpoints,
ec2:DeleteRouteServerEndpoint,
ec2:DeleteTags,
ec2:DeleteNetworkInterface,
ec2:DeleteSecurityGroup,
ec2:DescribeSecurityGroups,
ec2:RevokeSecurityGroupIngress
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeTags,
ec2:DescribeRouteServerEndpoints
```

</TabItem>
</Tabs>