---
title: vpc_endpoint_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_endpoint_associations
  - networkfirewall
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

Creates, updates, deletes or gets a <code>vpc_endpoint_association</code> resource or lists <code>vpc_endpoint_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vpc_endpoint_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource type definition for AWS::NetworkFirewall::VpcEndpointAssociation</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.networkfirewall.vpc_endpoint_associations" /></td></tr>
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
    "name": "vpc_endpoint_association_arn",
    "type": "string",
    "description": "A resource ARN."
  },
  {
    "name": "vpc_endpoint_association_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "vpc_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "endpoint_id",
    "type": "string",
    "description": "An endpoint Id."
  },
  {
    "name": "subnet_mapping",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "subnet_id",
        "type": "string",
        "description": "A SubnetId."
      },
      {
        "name": "ip_address_type",
        "type": "string",
        "description": "A IPAddressType"
      }
    ]
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "vpc_endpoint_association_arn",
    "type": "string",
    "description": "A resource ARN."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-vpcendpointassociation.html"><code>AWS::NetworkFirewall::VpcEndpointAssociation</code></a>.

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
    <td><code>vpc_endpoint_associations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="FirewallArn, VpcId, SubnetMapping, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>vpc_endpoint_associations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>vpc_endpoint_associations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>vpc_endpoint_associations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>vpc_endpoint_associations</code></td>
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

Gets all properties from an individual <code>vpc_endpoint_association</code>.
```sql
SELECT
region,
vpc_endpoint_association_arn,
vpc_endpoint_association_id,
description,
firewall_arn,
vpc_id,
endpoint_id,
subnet_mapping,
tags
FROM awscc.networkfirewall.vpc_endpoint_associations
WHERE region = 'us-east-1' AND Identifier = '<VpcEndpointAssociationArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>vpc_endpoint_associations</code> in a region.
```sql
SELECT
region,
vpc_endpoint_association_arn
FROM awscc.networkfirewall.vpc_endpoint_associations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>vpc_endpoint_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.networkfirewall.vpc_endpoint_associations (
 FirewallArn,
 VpcId,
 SubnetMapping,
 region
)
SELECT 
'{{ FirewallArn }}',
 '{{ VpcId }}',
 '{{ SubnetMapping }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.networkfirewall.vpc_endpoint_associations (
 Description,
 FirewallArn,
 VpcId,
 SubnetMapping,
 Tags,
 region
)
SELECT 
 '{{ Description }}',
 '{{ FirewallArn }}',
 '{{ VpcId }}',
 '{{ SubnetMapping }}',
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
  - name: vpc_endpoint_association
    props:
      - name: Description
        value: '{{ Description }}'
      - name: FirewallArn
        value: '{{ FirewallArn }}'
      - name: VpcId
        value: '{{ VpcId }}'
      - name: SubnetMapping
        value:
          SubnetId: '{{ SubnetId }}'
          IPAddressType: '{{ IPAddressType }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>vpc_endpoint_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.networkfirewall.vpc_endpoint_associations
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<VpcEndpointAssociationArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.networkfirewall.vpc_endpoint_associations
WHERE Identifier = '<VpcEndpointAssociationArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>vpc_endpoint_associations</code> resource, the following permissions are required:

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
network-firewall:CreateVpcEndpointAssociation,
network-firewall:DescribeVpcEndpointAssociation,
network-firewall:ListFirewalls,
network-firewall:TagResource,
ec2:CreateVpcEndpoint,
ec2:DescribeVpcEndpoints,
ec2:DescribeSubnets,
ec2:DescribeVpcs,
iam:CreateServiceLinkedRole
```

</TabItem>
<TabItem value="read">

```json
network-firewall:DescribeVpcEndpointAssociation,
network-firewall:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
network-firewall:DescribeVpcEndpointAssociation,
network-firewall:TagResource,
network-firewall:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
network-firewall:DeleteVpcEndpointAssociation,
network-firewall:DescribeVpcEndpointAssociation,
network-firewall:UntagResource,
ec2:DeleteVpcEndpoints,
ec2:DescribeRouteTables
```

</TabItem>
<TabItem value="list">

```json
network-firewall:ListVpcEndpointAssociations
```

</TabItem>
</Tabs>