---
title: vpc_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_endpoints
  - opensearchserverless
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

Creates, updates, deletes or gets a <code>vpc_endpoint</code> resource or lists <code>vpc_endpoints</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vpc_endpoints</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Amazon OpenSearchServerless vpc endpoint resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.opensearchserverless.vpc_endpoints" /></td></tr>
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
    "description": "The identifier of the VPC Endpoint"
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the VPC Endpoint"
  },
  {
    "name": "security_group_ids",
    "type": "array",
    "description": "The ID of one or more security groups to associate with the endpoint network interface"
  },
  {
    "name": "subnet_ids",
    "type": "array",
    "description": "The ID of one or more subnets in which to create an endpoint network interface"
  },
  {
    "name": "vpc_id",
    "type": "string",
    "description": "The ID of the VPC in which the endpoint will be used."
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
    "description": "The identifier of the VPC Endpoint"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-vpcendpoint.html"><code>AWS::OpenSearchServerless::VpcEndpoint</code></a>.

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
    <td><code>vpc_endpoints</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, VpcId, SubnetIds, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>vpc_endpoints</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>vpc_endpoints</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>vpc_endpoints_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>vpc_endpoints</code></td>
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

Gets all properties from an individual <code>vpc_endpoint</code>.
```sql
SELECT
region,
id,
name,
security_group_ids,
subnet_ids,
vpc_id
FROM awscc.opensearchserverless.vpc_endpoints
WHERE region = 'us-east-1' AND Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>vpc_endpoints</code> in a region.
```sql
SELECT
region,
id
FROM awscc.opensearchserverless.vpc_endpoints_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>vpc_endpoint</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.opensearchserverless.vpc_endpoints (
 Name,
 SubnetIds,
 VpcId,
 region
)
SELECT
'{{ name }}',
 '{{ subnet_ids }}',
 '{{ vpc_id }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.opensearchserverless.vpc_endpoints (
 Name,
 SecurityGroupIds,
 SubnetIds,
 VpcId,
 region
)
SELECT
 '{{ name }}',
 '{{ security_group_ids }}',
 '{{ subnet_ids }}',
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
  - name: vpc_endpoint
    props:
      - name: name
        value: '{{ name }}'
      - name: security_group_ids
        value:
          - '{{ security_group_ids[0] }}'
      - name: subnet_ids
        value:
          - '{{ subnet_ids[0] }}'
      - name: vpc_id
        value: '{{ vpc_id }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>vpc_endpoint</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.opensearchserverless.vpc_endpoints
SET PatchDocument = string('{{ {
    "SecurityGroupIds": security_group_ids,
    "SubnetIds": subnet_ids
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.opensearchserverless.vpc_endpoints
WHERE Identifier = '{{ id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>vpc_endpoints</code> resource, the following permissions are required:

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
aoss:BatchGetVpcEndpoint,
aoss:CreateVpcEndpoint,
ec2:CreateVpcEndpoint,
ec2:DeleteVpcEndPoints,
ec2:DescribeVpcEndpoints,
ec2:ModifyVpcEndPoint,
ec2:DescribeVpcs,
ec2:DescribeSubnets,
ec2:DescribeSecurityGroups,
ec2:CreateTags,
route53:ChangeResourceRecordSets,
route53:GetChange,
route53:GetHostedZone,
route53:ListResourceRecordSets,
route53:ListHostedZonesByName,
route53:CreateHostedZone,
route53:ListHostedZonesByVPC,
route53:AssociateVPCWithHostedZone
```

</TabItem>
<TabItem value="read">

```json
aoss:BatchGetVpcEndpoint,
ec2:DescribeVpcEndpoints
```

</TabItem>
<TabItem value="update">

```json
aoss:BatchGetVpcEndpoint,
aoss:UpdateVpcEndpoint,
ec2:CreateVpcEndpoint,
ec2:DeleteVpcEndPoints,
ec2:DescribeVpcEndpoints,
ec2:ModifyVpcEndPoint,
ec2:DescribeVpcs,
ec2:DescribeSubnets,
ec2:DescribeSecurityGroups,
ec2:CreateTags,
route53:ChangeResourceRecordSets,
route53:GetChange,
route53:GetHostedZone,
route53:ListResourceRecordSets,
route53:ListHostedZonesByName,
route53:CreateHostedZone,
route53:ListHostedZonesByVPC,
route53:AssociateVPCWithHostedZone
```

</TabItem>
<TabItem value="delete">

```json
aoss:BatchGetVpcEndpoint,
aoss:DeleteVpcEndpoint,
ec2:DeleteVpcEndPoints,
ec2:DescribeVpcEndpoints,
ec2:ModifyVpcEndPoint,
ec2:DescribeVpcs,
ec2:DescribeSubnets,
ec2:DescribeSecurityGroups,
ec2:CreateTags,
route53:ChangeResourceRecordSets,
route53:DeleteHostedZone,
route53:GetChange,
route53:GetHostedZone,
route53:ListResourceRecordSets,
route53:ListHostedZonesByName,
route53:ListHostedZonesByVPC,
route53:AssociateVPCWithHostedZone
```

</TabItem>
<TabItem value="list">

```json
aoss:ListVpcEndpoints,
ec2:DescribeVpcEndpoints
```

</TabItem>
</Tabs>