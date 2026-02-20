---
title: local_gateway_route_tablevpc_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - local_gateway_route_tablevpc_associations
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

Creates, updates, deletes or gets a <code>local_gateway_route_tablevpc_association</code> resource or lists <code>local_gateway_route_tablevpc_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>local_gateway_route_tablevpc_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for Local Gateway Route Table VPC Association which describes an association between a local gateway route table and a VPC.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.local_gateway_route_tablevpc_associations" /></td></tr>
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
    "name": "local_gateway_id",
    "type": "string",
    "description": "The ID of the local gateway."
  },
  {
    "name": "local_gateway_route_table_id",
    "type": "string",
    "description": "The ID of the local gateway route table."
  },
  {
    "name": "local_gateway_route_table_vpc_association_id",
    "type": "string",
    "description": "The ID of the association."
  },
  {
    "name": "state",
    "type": "string",
    "description": "The state of the association."
  },
  {
    "name": "vpc_id",
    "type": "string",
    "description": "The ID of the VPC."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags for the association.",
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
    "name": "local_gateway_route_table_vpc_association_id",
    "type": "string",
    "description": "The ID of the association."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetablevpcassociation.html"><code>AWS::EC2::LocalGatewayRouteTableVPCAssociation</code></a>.

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
    <td><code>local_gateway_route_tablevpc_associations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="LocalGatewayRouteTableId, VpcId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>local_gateway_route_tablevpc_associations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>local_gateway_route_tablevpc_associations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>local_gateway_route_tablevpc_associations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>local_gateway_route_tablevpc_associations</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>local_gateway_route_tablevpc_association</code>.
```sql
SELECT
region,
local_gateway_id,
local_gateway_route_table_id,
local_gateway_route_table_vpc_association_id,
state,
vpc_id,
tags
FROM awscc.ec2.local_gateway_route_tablevpc_associations
WHERE region = 'us-east-1' AND data__Identifier = '<LocalGatewayRouteTableVpcAssociationId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>local_gateway_route_tablevpc_associations</code> in a region.
```sql
SELECT
region,
local_gateway_route_table_vpc_association_id
FROM awscc.ec2.local_gateway_route_tablevpc_associations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>local_gateway_route_tablevpc_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.local_gateway_route_tablevpc_associations (
 LocalGatewayRouteTableId,
 VpcId,
 region
)
SELECT 
'{{ LocalGatewayRouteTableId }}',
 '{{ VpcId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.local_gateway_route_tablevpc_associations (
 LocalGatewayRouteTableId,
 VpcId,
 Tags,
 region
)
SELECT 
 '{{ LocalGatewayRouteTableId }}',
 '{{ VpcId }}',
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
  - name: local_gateway_route_tablevpc_association
    props:
      - name: LocalGatewayRouteTableId
        value: '{{ LocalGatewayRouteTableId }}'
      - name: VpcId
        value: '{{ VpcId }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.ec2.local_gateway_route_tablevpc_associations
SET data__PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<LocalGatewayRouteTableVpcAssociationId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.local_gateway_route_tablevpc_associations
WHERE data__Identifier = '<LocalGatewayRouteTableVpcAssociationId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>local_gateway_route_tablevpc_associations</code> resource, the following permissions are required:

### Create
```json
ec2:CreateLocalGatewayRouteTableVpcAssociation,
ec2:DescribeLocalGatewayRouteTableVpcAssociations,
ec2:CreateTags
```

### Read
```json
ec2:DescribeLocalGatewayRouteTableVpcAssociations,
ec2:DescribeTags
```

### Update
```json
ec2:DescribeLocalGatewayRouteTableVpcAssociations,
ec2:CreateTags,
ec2:DeleteTags,
ec2:DescribeTags
```

### Delete
```json
ec2:DeleteLocalGatewayRouteTableVpcAssociation,
ec2:DescribeLocalGatewayRouteTableVpcAssociations,
ec2:DeleteTags
```

### List
```json
ec2:DescribeLocalGatewayRouteTableVpcAssociations
```
