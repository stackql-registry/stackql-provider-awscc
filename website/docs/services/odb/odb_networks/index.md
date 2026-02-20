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
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

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
    "name": "availability_zone",
    "type": "string",
    "description": "The AWS Availability Zone (AZ) where the ODB network is located."
  },
  {
    "name": "availability_zone_id",
    "type": "string",
    "description": "The AZ ID of the AZ where the ODB network is located."
  },
  {
    "name": "backup_subnet_cidr",
    "type": "string",
    "description": "The CIDR range of the backup subnet in the ODB network."
  },
  {
    "name": "client_subnet_cidr",
    "type": "string",
    "description": "The CIDR range of the client subnet in the ODB network."
  },
  {
    "name": "default_dns_prefix",
    "type": "string",
    "description": "The DNS prefix to the default DNS domain name. The default DNS domain name is oraclevcn.com."
  },
  {
    "name": "delete_associated_resources",
    "type": "boolean",
    "description": "Specifies whether to delete associated OCI networking resources along with the ODB network."
  },
  {
    "name": "display_name",
    "type": "string",
    "description": "The user-friendly name of the ODB network."
  },
  {
    "name": "oci_network_anchor_id",
    "type": "string",
    "description": "The unique identifier of the OCI network anchor for the ODB network."
  },
  {
    "name": "oci_resource_anchor_name",
    "type": "string",
    "description": "The name of the OCI resource anchor that's associated with the ODB network."
  },
  {
    "name": "oci_vcn_url",
    "type": "string",
    "description": "The URL for the VCN that's associated with the ODB network."
  },
  {
    "name": "odb_network_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the ODB network."
  },
  {
    "name": "odb_network_id",
    "type": "string",
    "description": "The unique identifier of the ODB network."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags to assign to the Odb Network.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., :, /, =, +, @, -, and \"."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
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
    "name": "odb_network_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the ODB network."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-odb-odbnetwork.html"><code>AWS::ODB::OdbNetwork</code></a>.

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
    <td><code>odb_networks</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>odb_networks</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>odb_networks</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>odb_networks_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>odb_networks</code></td>
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
</TabItem>
<TabItem value="list">

Lists all <code>odb_networks</code> in a region.
```sql
SELECT
region,
odb_network_arn
FROM awscc.odb.odb_networks_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.odb.odb_networks
SET data__PatchDocument = string('{{ {
    "DeleteAssociatedResources": delete_associated_resources,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<OdbNetworkArn>';
```


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
