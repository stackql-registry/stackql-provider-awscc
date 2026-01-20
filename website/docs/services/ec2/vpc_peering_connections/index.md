---
title: vpc_peering_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_peering_connections
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

Creates, updates, deletes or gets a <code>vpc_peering_connection</code> resource or lists <code>vpc_peering_connections</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vpc_peering_connections</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::EC2::VPCPeeringConnection</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.vpc_peering_connections" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "peer_role_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the VPC peer role for the peering connection in another AWS account."
  },
  {
    "name": "vpc_id",
    "type": "string",
    "description": "The ID of the VPC."
  },
  {
    "name": "peer_vpc_id",
    "type": "string",
    "description": "The ID of the VPC with which you are creating the VPC peering connection. You must specify this parameter in the request."
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "peer_region",
    "type": "string",
    "description": "The Region code for the accepter VPC, if the accepter VPC is located in a Region other than the Region in which you make the request."
  },
  {
    "name": "peer_owner_id",
    "type": "string",
    "description": "The AWS account ID of the owner of the accepter VPC."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcpeeringconnection.html"><code>AWS::EC2::VPCPeeringConnection</code></a>.

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
    <td><CopyableCode code="VpcId, PeerVpcId, region" /></td>
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

Gets all properties from an individual <code>vpc_peering_connection</code>.
```sql
SELECT
region,
peer_role_arn,
vpc_id,
peer_vpc_id,
id,
peer_region,
peer_owner_id,
tags
FROM awscc.ec2.vpc_peering_connections
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>vpc_peering_connection</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.vpc_peering_connections (
 VpcId,
 PeerVpcId,
 region
)
SELECT 
'{{ VpcId }}',
 '{{ PeerVpcId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.vpc_peering_connections (
 PeerRoleArn,
 VpcId,
 PeerVpcId,
 PeerRegion,
 PeerOwnerId,
 Tags,
 region
)
SELECT 
 '{{ PeerRoleArn }}',
 '{{ VpcId }}',
 '{{ PeerVpcId }}',
 '{{ PeerRegion }}',
 '{{ PeerOwnerId }}',
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
  - name: vpc_peering_connection
    props:
      - name: PeerRoleArn
        value: '{{ PeerRoleArn }}'
      - name: VpcId
        value: '{{ VpcId }}'
      - name: PeerVpcId
        value: '{{ PeerVpcId }}'
      - name: PeerRegion
        value: '{{ PeerRegion }}'
      - name: PeerOwnerId
        value: '{{ PeerOwnerId }}'
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
DELETE FROM awscc.ec2.vpc_peering_connections
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>vpc_peering_connections</code> resource, the following permissions are required:

### Read
```json
ec2:DescribeVpcPeeringConnections
```

### Create
```json
ec2:CreateVpcPeeringConnection,
ec2:DescribeVpcPeeringConnections,
ec2:AcceptVpcPeeringConnection,
ec2:CreateTags,
sts:AssumeRole
```

### Update
```json
ec2:CreateTags,
ec2:DeleteTags,
ec2:DescribeVpcPeeringConnections
```

### List
```json
ec2:DescribeVpcPeeringConnections
```

### Delete
```json
ec2:DeleteVpcPeeringConnection,
ec2:DescribeVpcPeeringConnections
```
