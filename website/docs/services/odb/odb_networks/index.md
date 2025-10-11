---
title: odb_networks
hide_title: false
hide_table_of_contents: false
keywords:
  - odb_networks
  - odb
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

Creates, updates, deletes or gets an <code>odb_network</code> resource or lists <code>odb_networks</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>odb_networks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::ODB::OdbNetwork resource creates an ODB Network</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.odb.odb_networks" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="availability_zone" /></td><td><code>string</code></td><td>The AWS Availability Zone (AZ) where the ODB network is located.</td></tr>
<tr><td><CopyableCode code="availability_zone_id" /></td><td><code>string</code></td><td>The AZ ID of the AZ where the ODB network is located.</td></tr>
<tr><td><CopyableCode code="backup_subnet_cidr" /></td><td><code>string</code></td><td>The CIDR range of the backup subnet in the ODB network.</td></tr>
<tr><td><CopyableCode code="client_subnet_cidr" /></td><td><code>string</code></td><td>The CIDR range of the client subnet in the ODB network.</td></tr>
<tr><td><CopyableCode code="default_dns_prefix" /></td><td><code>string</code></td><td>The DNS prefix to the default DNS domain name. The default DNS domain name is oraclevcn.com.</td></tr>
<tr><td><CopyableCode code="delete_associated_resources" /></td><td><code>boolean</code></td><td>Specifies whether to delete associated OCI networking resources along with the ODB network.</td></tr>
<tr><td><CopyableCode code="display_name" /></td><td><code>string</code></td><td>The user-friendly name of the ODB network.</td></tr>
<tr><td><CopyableCode code="oci_network_anchor_id" /></td><td><code>string</code></td><td>The unique identifier of the OCI network anchor for the ODB network.</td></tr>
<tr><td><CopyableCode code="oci_resource_anchor_name" /></td><td><code>string</code></td><td>The name of the OCI resource anchor that's associated with the ODB network.</td></tr>
<tr><td><CopyableCode code="oci_vcn_url" /></td><td><code>string</code></td><td>The URL for the VCN that's associated with the ODB network.</td></tr>
<tr><td><CopyableCode code="odb_network_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the ODB network.</td></tr>
<tr><td><CopyableCode code="odb_network_id" /></td><td><code>string</code></td><td>The unique identifier of the ODB network.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>Tags to assign to the Odb Network.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-odb-odbnetwork.html"><code>AWS::ODB::OdbNetwork</code></a>.

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
    <td><CopyableCode code="region" /></td>
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
Gets all <code>odb_networks</code> in a region.
```sql
SELECT
region,
availability_zone,
availability_zone_id,
backup_subnet_cidr,
client_subnet_cidr,
default_dns_prefix,
delete_associated_resources,
display_name,
oci_network_anchor_id,
oci_resource_anchor_name,
oci_vcn_url,
odb_network_arn,
odb_network_id,
tags
FROM awscc.odb.odb_networks
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>odb_network</code>.
```sql
SELECT
region,
availability_zone,
availability_zone_id,
backup_subnet_cidr,
client_subnet_cidr,
default_dns_prefix,
delete_associated_resources,
display_name,
oci_network_anchor_id,
oci_resource_anchor_name,
oci_vcn_url,
odb_network_arn,
odb_network_id,
tags
FROM awscc.odb.odb_networks
WHERE region = 'us-east-1' AND data__Identifier = '<OdbNetworkArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>odb_network</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.odb.odb_networks (
 AvailabilityZone,
 AvailabilityZoneId,
 BackupSubnetCidr,
 ClientSubnetCidr,
 DefaultDnsPrefix,
 DeleteAssociatedResources,
 DisplayName,
 Tags,
 region
)
SELECT 
'{{ AvailabilityZone }}',
 '{{ AvailabilityZoneId }}',
 '{{ BackupSubnetCidr }}',
 '{{ ClientSubnetCidr }}',
 '{{ DefaultDnsPrefix }}',
 '{{ DeleteAssociatedResources }}',
 '{{ DisplayName }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.odb.odb_networks (
 AvailabilityZone,
 AvailabilityZoneId,
 BackupSubnetCidr,
 ClientSubnetCidr,
 DefaultDnsPrefix,
 DeleteAssociatedResources,
 DisplayName,
 Tags,
 region
)
SELECT 
 '{{ AvailabilityZone }}',
 '{{ AvailabilityZoneId }}',
 '{{ BackupSubnetCidr }}',
 '{{ ClientSubnetCidr }}',
 '{{ DefaultDnsPrefix }}',
 '{{ DeleteAssociatedResources }}',
 '{{ DisplayName }}',
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
  - name: odb_network
    props:
      - name: AvailabilityZone
        value: '{{ AvailabilityZone }}'
      - name: AvailabilityZoneId
        value: '{{ AvailabilityZoneId }}'
      - name: BackupSubnetCidr
        value: '{{ BackupSubnetCidr }}'
      - name: ClientSubnetCidr
        value: '{{ ClientSubnetCidr }}'
      - name: DefaultDnsPrefix
        value: '{{ DefaultDnsPrefix }}'
      - name: DeleteAssociatedResources
        value: '{{ DeleteAssociatedResources }}'
      - name: DisplayName
        value: '{{ DisplayName }}'
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
DELETE FROM awscc.odb.odb_networks
WHERE data__Identifier = '<OdbNetworkArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>odb_networks</code> resource, the following permissions are required:

### Create
```json
odb:CreateOdbNetwork,
odb:TagResource,
ec2:DescribeAvailabilityZones,
iam:CreateServiceLinkedRole,
ec2:DescribeVpcs,
ec2:CreateOdbNetworkPeering,
odb:ListTagsForResource,
sts:GetCallerIdentity,
odb:GetOdbNetwork,
odb:ListOdbNetworks,
odb:UpdateOdbNetwork,
vpc-lattice:CreateServiceNetwork,
vpc-lattice:GetServiceNetwork,
vpc-lattice:CreateServiceNetworkResourceAssociation,
vpc-lattice:GetServiceNetworkResourceAssociation,
vpc-lattice:CreateResourceGateway,
vpc-lattice:GetResourceGateway,
vpc-lattice:CreateServiceNetworkVpcEndpointAssociation,
redshiftchannelmanagement:CreateChannel,
ec2:ModifyOdbNetworkPeering,
ec2:DescribeVpcEndpointAssociations,
ec2:CreateVpcEndpoint,
ec2:DescribeVpcEndpoints,
ec2:CreateTags
```

### Read
```json
odb:GetOdbNetwork,
odb:ListOdbNetworks,
odb:ListTagsForResource,
sts:GetCallerIdentity,
vpc-lattice:GetServiceNetwork,
vpc-lattice:GetServiceNetworkResourceAssociation,
vpc-lattice:GetResourceGateway,
ec2:DescribeVpcEndpointAssociations,
ec2:DescribeVpcEndpoints
```

### Update
```json
odb:UpdateOdbNetwork,
odb:TagResource,
odb:UntagResource,
ec2:DescribeVpcs,
ec2:CreateOdbNetworkPeering,
ec2:DeleteOdbNetworkPeering,
odb:ListTagsForResource,
sts:GetCallerIdentity,
odb:GetOdbNetwork,
odb:ListOdbNetworks,
vpc-lattice:GetServiceNetwork,
vpc-lattice:GetServiceNetworkResourceAssociation,
vpc-lattice:GetResourceGateway,
ec2:DescribeVpcEndpointAssociations,
ec2:DescribeVpcEndpoints
```

### Delete
```json
odb:DeleteOdbNetwork,
ec2:DeleteOdbNetworkPeering,
ec2:DescribeVpcs,
odb:ListTagsForResource,
sts:GetCallerIdentity,
odb:GetOdbNetwork,
odb:ListOdbNetworks,
vpc-lattice:DeleteServiceNetwork,
vpc-lattice:GetServiceNetwork,
vpc-lattice:DeleteServiceNetworkResourceAssociation,
vpc-lattice:GetServiceNetworkResourceAssociation,
vpc-lattice:DeleteResourceGateway,
vpc-lattice:GetResourceGateway,
ec2:ModifyOdbNetworkPeering,
ec2:DescribeVpcEndpointAssociations,
ec2:DeleteVpcEndpoints,
ec2:DescribeVpcEndpoints
```

### List
```json
odb:ListOdbNetworks,
odb:ListTagsForResource,
sts:GetCallerIdentity,
vpc-lattice:GetServiceNetwork,
vpc-lattice:GetServiceNetworkResourceAssociation,
vpc-lattice:GetResourceGateway,
ec2:DescribeVpcEndpointAssociations,
ec2:DescribeVpcEndpoints
```
