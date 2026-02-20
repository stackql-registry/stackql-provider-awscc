---
title: resource_gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_gateways
  - vpclattice
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

Creates, updates, deletes or gets a <code>resource_gateway</code> resource or lists <code>resource_gateways</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>resource_gateways</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Creates a resource gateway for a service.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.vpclattice.resource_gateways" /></td></tr>
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
    "name": "ip_address_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "vpc_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "ipv4_addresses_per_eni",
    "type": "integer",
    "description": "The number of IPv4 addresses to allocate per ENI for the resource gateway"
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "subnet_ids",
    "type": "array",
    "description": "The ID of one or more subnets in which to create an endpoint network interface."
  },
  {
    "name": "security_group_ids",
    "type": "array",
    "description": "The ID of one or more security groups to associate with the endpoint network interface."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourcegateway.html"><code>AWS::VpcLattice::ResourceGateway</code></a>.

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
    <td><code>resource_gateways</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, VpcIdentifier, SubnetIds, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>resource_gateways</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>resource_gateways</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>resource_gateways_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>resource_gateways</code></td>
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

Gets all properties from an individual <code>resource_gateway</code>.
```sql
SELECT
region,
ip_address_type,
vpc_identifier,
ipv4_addresses_per_eni,
id,
arn,
subnet_ids,
security_group_ids,
tags,
name
FROM awscc.vpclattice.resource_gateways
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>resource_gateways</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.vpclattice.resource_gateways_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>resource_gateway</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.vpclattice.resource_gateways (
 VpcIdentifier,
 SubnetIds,
 Name,
 region
)
SELECT 
'{{ VpcIdentifier }}',
 '{{ SubnetIds }}',
 '{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.vpclattice.resource_gateways (
 IpAddressType,
 VpcIdentifier,
 Ipv4AddressesPerEni,
 SubnetIds,
 SecurityGroupIds,
 Tags,
 Name,
 region
)
SELECT 
 '{{ IpAddressType }}',
 '{{ VpcIdentifier }}',
 '{{ Ipv4AddressesPerEni }}',
 '{{ SubnetIds }}',
 '{{ SecurityGroupIds }}',
 '{{ Tags }}',
 '{{ Name }}',
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
  - name: resource_gateway
    props:
      - name: IpAddressType
        value: '{{ IpAddressType }}'
      - name: VpcIdentifier
        value: '{{ VpcIdentifier }}'
      - name: Ipv4AddressesPerEni
        value: '{{ Ipv4AddressesPerEni }}'
      - name: SubnetIds
        value:
          - '{{ SubnetIds[0] }}'
      - name: SecurityGroupIds
        value:
          - '{{ SecurityGroupIds[0] }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: Name
        value: '{{ Name }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>resource_gateway</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.vpclattice.resource_gateways
SET PatchDocument = string('{{ {
    "Ipv4AddressesPerEni": ipv4_addresses_per_eni,
    "SecurityGroupIds": security_group_ids,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.vpclattice.resource_gateways
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>resource_gateways</code> resource, the following permissions are required:

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
vpc-lattice:GetResourceGateway,
vpc-lattice:ListTagsForResource
```

</TabItem>
<TabItem value="create">

```json
vpc-lattice:CreateResourceGateway,
vpc-lattice:GetResourceGateway,
vpc-lattice:TagResource,
vpc-lattice:ListTagsForResource,
ec2:DescribeVpcs,
ec2:DescribeSubnets,
ec2:DescribeSecurityGroups
```

</TabItem>
<TabItem value="update">

```json
vpc-lattice:UpdateResourceGateway,
vpc-lattice:GetResourceGateway,
vpc-lattice:TagResource,
vpc-lattice:UntagResource,
vpc-lattice:ListTagsForResource,
ec2:DescribeVpcs,
ec2:DescribeSubnets,
ec2:DescribeSecurityGroups
```

</TabItem>
<TabItem value="list">

```json
vpc-lattice:ListResourceGateways
```

</TabItem>
<TabItem value="delete">

```json
vpc-lattice:DeleteResourceGateway,
vpc-lattice:GetResourceGateway,
vpc-lattice:UntagResource
```

</TabItem>
</Tabs>