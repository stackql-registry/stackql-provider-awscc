---
title: vpc_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_connections
  - msk
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

Creates, updates, deletes or gets a <code>vpc_connection</code> resource or lists <code>vpc_connections</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vpc_connections</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::MSK::VpcConnection</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.msk.vpc_connections" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "authentication",
    "type": "string",
    "description": "The type of private link authentication"
  },
  {
    "name": "client_subnets",
    "type": "array",
    "description": ""
  },
  {
    "name": "target_cluster_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the target cluster"
  },
  {
    "name": "security_groups",
    "type": "array",
    "description": ""
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A key-value pair to associate with a resource."
  },
  {
    "name": "vpc_id",
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
    "name": "arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-vpcconnection.html"><code>AWS::MSK::VpcConnection</code></a>.

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
    <td><code>vpc_connections</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Authentication, ClientSubnets, SecurityGroups, TargetClusterArn, VpcId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>vpc_connections</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>vpc_connections</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>vpc_connections_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>vpc_connections</code></td>
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

Gets all properties from an individual <code>vpc_connection</code>.
```sql
SELECT
region,
arn,
authentication,
client_subnets,
target_cluster_arn,
security_groups,
tags,
vpc_id
FROM awscc.msk.vpc_connections
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>vpc_connections</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.msk.vpc_connections_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>vpc_connection</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.msk.vpc_connections (
 Authentication,
 ClientSubnets,
 TargetClusterArn,
 SecurityGroups,
 VpcId,
 region
)
SELECT 
'{{ Authentication }}',
 '{{ ClientSubnets }}',
 '{{ TargetClusterArn }}',
 '{{ SecurityGroups }}',
 '{{ VpcId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.msk.vpc_connections (
 Authentication,
 ClientSubnets,
 TargetClusterArn,
 SecurityGroups,
 Tags,
 VpcId,
 region
)
SELECT 
 '{{ Authentication }}',
 '{{ ClientSubnets }}',
 '{{ TargetClusterArn }}',
 '{{ SecurityGroups }}',
 '{{ Tags }}',
 '{{ VpcId }}',
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
  - name: vpc_connection
    props:
      - name: Authentication
        value: '{{ Authentication }}'
      - name: ClientSubnets
        value:
          - '{{ ClientSubnets[0] }}'
      - name: TargetClusterArn
        value: '{{ TargetClusterArn }}'
      - name: SecurityGroups
        value:
          - '{{ SecurityGroups[0] }}'
      - name: Tags
        value: {}
      - name: VpcId
        value: '{{ VpcId }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.msk.vpc_connections
SET data__PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.msk.vpc_connections
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>vpc_connections</code> resource, the following permissions are required:

### Create
```json
ec2:CreateVpcEndpoint,
ec2:DescribeSecurityGroups,
ec2:DescribeSubnets,
ec2:DescribeVpcAttribute,
ec2:DescribeVpcs,
ec2:DescribeVpcEndpoints,
ec2:AcceptVpcEndpointConnections,
ec2:RejectVpcEndpointConnections,
ec2:DescribeVpcEndpointConnections,
ec2:CreateTags,
iam:AttachRolePolicy,
iam:CreateServiceLinkedRole,
iam:PutRolePolicy,
kafka:CreateVpcConnection,
kafka:DescribeVpcConnection,
kafka:TagResource,
kms:CreateGrant,
kms:DescribeKey
```

### Read
```json
kafka:DescribeVpcConnection,
kms:CreateGrant,
kms:DescribeKey
```

### Update
```json
kafka:DescribeVpcConnection,
kms:CreateGrant,
kms:DescribeKey,
kafka:TagResource,
kafka:UntagResource
```

### Delete
```json
ec2:DeleteVpcEndpoint,
ec2:DeleteVpcEndpoints,
ec2:DescribeVpcEndpoints,
ec2:DescribeVpcEndpointConnections,
kafka:DeleteVpcConnection,
kafka:DescribeVpcConnection,
kms:CreateGrant,
kms:DescribeKey
```

### List
```json
kafka:ListVpcConnections,
kms:CreateGrant,
kms:DescribeKey
```
