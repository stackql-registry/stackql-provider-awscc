---
title: endpoint_accesses
hide_title: false
hide_table_of_contents: false
keywords:
  - endpoint_accesses
  - redshift
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

Creates, updates, deletes or gets an <code>endpoint_access</code> resource or lists <code>endpoint_accesses</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>endpoint_accesses</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for a Redshift-managed VPC endpoint.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.redshift.endpoint_accesses" /></td></tr>
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
    "name": "endpoint_status",
    "type": "string",
    "description": "The status of the endpoint."
  },
  {
    "name": "vpc_endpoint",
    "type": "object",
    "description": "The connection endpoint for connecting to an Amazon Redshift cluster through the proxy.",
    "children": [
      {
        "name": "vpc_id",
        "type": "string",
        "description": "The VPC identifier that the endpoint is associated."
      },
      {
        "name": "network_interfaces",
        "type": "array",
        "description": "One or more network interfaces of the endpoint. Also known as an interface endpoint.",
        "children": [
          {
            "name": "private_ip_address",
            "type": "string",
            "description": "The IPv4 address of the network interface within the subnet."
          },
          {
            "name": "availability_zone",
            "type": "string",
            "description": "The Availability Zone."
          },
          {
            "name": "subnet_id",
            "type": "string",
            "description": "The subnet identifier."
          },
          {
            "name": "network_interface_id",
            "type": "string",
            "description": "The network interface identifier."
          }
        ]
      },
      {
        "name": "vpc_endpoint_id",
        "type": "string",
        "description": "The connection endpoint ID for connecting an Amazon Redshift cluster through the proxy."
      }
    ]
  },
  {
    "name": "address",
    "type": "string",
    "description": "The DNS address of the endpoint."
  },
  {
    "name": "endpoint_name",
    "type": "string",
    "description": "The name of the endpoint."
  },
  {
    "name": "vpc_security_group_ids",
    "type": "array",
    "description": "A list of vpc security group ids to apply to the created endpoint access."
  },
  {
    "name": "resource_owner",
    "type": "string",
    "description": "The AWS account ID of the owner of the cluster."
  },
  {
    "name": "subnet_group_name",
    "type": "string",
    "description": "The subnet group name where Amazon Redshift chooses to deploy the endpoint."
  },
  {
    "name": "port",
    "type": "integer",
    "description": "The port number on which the cluster accepts incoming connections."
  },
  {
    "name": "endpoint_create_time",
    "type": "string",
    "description": "The time (UTC) that the endpoint was created."
  },
  {
    "name": "cluster_identifier",
    "type": "string",
    "description": "A unique identifier for the cluster. You use this identifier to refer to the cluster for any subsequent cluster operations such as deleting or modifying. All alphabetical characters must be lower case, no hypens at the end, no two consecutive hyphens. Cluster name should be unique for all clusters within an AWS account"
  },
  {
    "name": "vpc_security_groups",
    "type": "array",
    "description": "A list of Virtual Private Cloud (VPC) security groups to be associated with the endpoint.",
    "children": [
      {
        "name": "status",
        "type": "string",
        "description": "The status of the VPC security group."
      },
      {
        "name": "vpc_security_group_id",
        "type": "string",
        "description": "The identifier of the VPC security group."
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
    "name": "endpoint_name",
    "type": "string",
    "description": "The name of the endpoint."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html"><code>AWS::Redshift::EndpointAccess</code></a>.

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
    <td><code>endpoint_accesses</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ClusterIdentifier, SubnetGroupName, EndpointName, VpcSecurityGroupIds, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>endpoint_accesses</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>endpoint_accesses</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>endpoint_accesses_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>endpoint_accesses</code></td>
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

Gets all properties from an individual <code>endpoint_access</code>.
```sql
SELECT
region,
endpoint_status,
vpc_endpoint,
address,
endpoint_name,
vpc_security_group_ids,
resource_owner,
subnet_group_name,
port,
endpoint_create_time,
cluster_identifier,
vpc_security_groups
FROM awscc.redshift.endpoint_accesses
WHERE region = 'us-east-1' AND Identifier = '<EndpointName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>endpoint_accesses</code> in a region.
```sql
SELECT
region,
endpoint_name
FROM awscc.redshift.endpoint_accesses_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>endpoint_access</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.redshift.endpoint_accesses (
 EndpointName,
 VpcSecurityGroupIds,
 SubnetGroupName,
 ClusterIdentifier,
 region
)
SELECT 
'{{ EndpointName }}',
 '{{ VpcSecurityGroupIds }}',
 '{{ SubnetGroupName }}',
 '{{ ClusterIdentifier }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.redshift.endpoint_accesses (
 EndpointName,
 VpcSecurityGroupIds,
 ResourceOwner,
 SubnetGroupName,
 ClusterIdentifier,
 region
)
SELECT 
 '{{ EndpointName }}',
 '{{ VpcSecurityGroupIds }}',
 '{{ ResourceOwner }}',
 '{{ SubnetGroupName }}',
 '{{ ClusterIdentifier }}',
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
  - name: endpoint_access
    props:
      - name: EndpointName
        value: '{{ EndpointName }}'
      - name: VpcSecurityGroupIds
        value:
          - '{{ VpcSecurityGroupIds[0] }}'
      - name: ResourceOwner
        value: '{{ ResourceOwner }}'
      - name: SubnetGroupName
        value: '{{ SubnetGroupName }}'
      - name: ClusterIdentifier
        value: '{{ ClusterIdentifier }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>endpoint_access</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.redshift.endpoint_accesses
SET PatchDocument = string('{{ {
    "VpcSecurityGroupIds": vpc_security_group_ids
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<EndpointName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.redshift.endpoint_accesses
WHERE Identifier = '<EndpointName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>endpoint_accesses</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="read">

```json
redshift:DescribeEndpointAccess,
ec2:DescribeClientVpnEndpoints,
ec2:DescribeVpcEndpoint,
ec2:DescribeVpcAttribute,
ec2:DescribeSecurityGroups,
ec2:DescribeAddresses,
ec2:DescribeInternetGateways,
ec2:DescribeSubnets
```

</TabItem>
<TabItem value="create">

```json
redshift:CreateEndpointAccess,
redshift:DescribeEndpointAccess,
ec2:CreateClientVpnEndpoint,
ec2:CreateVpcEndpoint,
ec2:DescribeVpcAttribute,
ec2:DescribeSecurityGroups,
ec2:DescribeAddresses,
ec2:DescribeInternetGateways,
ec2:DescribeSubnets
```

</TabItem>
<TabItem value="update">

```json
redshift:DescribeEndpointAccess,
redshift:ModifyEndpointAccess,
ec2:ModifyClientVpnEndpoint,
ec2:ModifyVpcEndpoint,
ec2:DescribeVpcAttribute,
ec2:DescribeSecurityGroups,
ec2:DescribeAddresses,
ec2:DescribeInternetGateways,
ec2:DescribeSubnets
```

</TabItem>
<TabItem value="list">

```json
redshift:DescribeEndpointAccess,
ec2:DescribeClientVpnEndpoints,
ec2:DescribeVpcEndpoints,
ec2:DescribeVpcAttribute,
ec2:DescribeSecurityGroups,
ec2:DescribeAddresses,
ec2:DescribeInternetGateways,
ec2:DescribeSubnets
```

</TabItem>
<TabItem value="delete">

```json
redshift:DeleteEndpointAccess,
redshift:DescribeEndpointAccess,
ec2:DeleteClientVpnEndpoint,
ec2:DeleteVpcEndpoint,
ec2:DescribeVpcAttribute,
ec2:DescribeSecurityGroups,
ec2:DescribeAddresses,
ec2:DescribeInternetGateways,
ec2:DescribeSubnets,
ec2:DescribeVpcEndpoint
```

</TabItem>
</Tabs>