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
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="vpc_endpoint_association_arn" /></td><td><code>string</code></td><td>A resource ARN.</td></tr>
<tr><td><CopyableCode code="vpc_endpoint_association_id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="firewall_arn" /></td><td><code>string</code></td><td>A resource ARN.</td></tr>
<tr><td><CopyableCode code="vpc_id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="endpoint_id" /></td><td><code>string</code></td><td>An endpoint Id.</td></tr>
<tr><td><CopyableCode code="subnet_mapping" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-vpcendpointassociation.html"><code>AWS::NetworkFirewall::VpcEndpointAssociation</code></a>.

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
    <td><CopyableCode code="FirewallArn, VpcId, SubnetMapping, region" /></td>
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
Gets all <code>vpc_endpoint_associations</code> in a region.
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
WHERE region = 'us-east-1';
```
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
WHERE region = 'us-east-1' AND data__Identifier = '<VpcEndpointAssociationArn>';
```

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

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.networkfirewall.vpc_endpoint_associations
WHERE data__Identifier = '<VpcEndpointAssociationArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>vpc_endpoint_associations</code> resource, the following permissions are required:

### Create
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

### Read
```json
network-firewall:DescribeVpcEndpointAssociation,
network-firewall:ListTagsForResource
```

### Update
```json
network-firewall:DescribeVpcEndpointAssociation,
network-firewall:TagResource,
network-firewall:UntagResource
```

### Delete
```json
network-firewall:DeleteVpcEndpointAssociation,
network-firewall:DescribeVpcEndpointAssociation,
network-firewall:UntagResource,
ec2:DeleteVpcEndpoints,
ec2:DescribeRouteTables
```

### List
```json
network-firewall:ListVpcEndpointAssociations
```
