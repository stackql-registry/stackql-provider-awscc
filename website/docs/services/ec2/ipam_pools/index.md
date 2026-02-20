---
title: ipam_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_pools
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

Creates, updates, deletes or gets an <code>ipam_pool</code> resource or lists <code>ipam_pools</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>ipam_pools</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Schema of AWS::EC2::IPAMPool Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.ipam_pools" /></td></tr>
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
    "name": "ipam_pool_id",
    "type": "string",
    "description": "Id of the IPAM Pool."
  },
  {
    "name": "address_family",
    "type": "string",
    "description": "The address family of the address space in this pool. Either IPv4 or IPv6."
  },
  {
    "name": "allocation_min_netmask_length",
    "type": "integer",
    "description": "The minimum allowed netmask length for allocations made from this pool."
  },
  {
    "name": "allocation_default_netmask_length",
    "type": "integer",
    "description": "The default netmask length for allocations made from this pool. This value is used when the netmask length of an allocation isn't specified."
  },
  {
    "name": "allocation_max_netmask_length",
    "type": "integer",
    "description": "The maximum allowed netmask length for allocations made from this pool."
  },
  {
    "name": "allocation_resource_tags",
    "type": "array",
    "description": "When specified, an allocation will not be allowed unless a resource has a matching set of tags.",
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
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the IPAM Pool."
  },
  {
    "name": "auto_import",
    "type": "boolean",
    "description": "Determines what to do if IPAM discovers resources that haven't been assigned an allocation. If set to true, an allocation will be made automatically."
  },
  {
    "name": "aws_service",
    "type": "string",
    "description": "Limits which service in Amazon Web Services that the pool can be used in."
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "ipam_scope_id",
    "type": "string",
    "description": "The Id of the scope this pool is a part of."
  },
  {
    "name": "ipam_scope_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the scope this pool is a part of."
  },
  {
    "name": "ipam_scope_type",
    "type": "string",
    "description": "Determines whether this scope contains publicly routable space or space for a private network"
  },
  {
    "name": "ipam_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the IPAM this pool is a part of."
  },
  {
    "name": "locale",
    "type": "string",
    "description": "The region of this pool. If not set, this will default to \"None\" which will disable non-custom allocations. If the locale has been specified for the source pool, this value must match."
  },
  {
    "name": "pool_depth",
    "type": "integer",
    "description": "The depth of this pool in the source pool hierarchy."
  },
  {
    "name": "provisioned_cidrs",
    "type": "array",
    "description": "A list of cidrs representing the address space available for allocation in this pool.",
    "children": [
      {
        "name": "cidr",
        "type": "string",
        "description": "Represents a single IPv4 or IPv6 CIDR"
      }
    ]
  },
  {
    "name": "public_ip_source",
    "type": "string",
    "description": "The IP address source for pools in the public scope. Only used for provisioning IP address CIDRs to pools in the public scope. Default is &#96;byoip&#96;."
  },
  {
    "name": "publicly_advertisable",
    "type": "boolean",
    "description": "Determines whether or not address space from this pool is publicly advertised. Must be set if and only if the pool is IPv6."
  },
  {
    "name": "source_ipam_pool_id",
    "type": "string",
    "description": "The Id of this pool's source. If set, all space provisioned in this pool must be free space provisioned in the parent pool."
  },
  {
    "name": "source_resource",
    "type": "object",
    "description": "The resource associated with this pool's space. Depending on the ResourceType, setting a SourceResource changes which space can be provisioned in this pool and which types of resources can receive allocations",
    "children": [
      {
        "name": "resource_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "resource_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "resource_region",
        "type": "string",
        "description": ""
      },
      {
        "name": "resource_owner",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "state",
    "type": "string",
    "description": "The state of this pool. This can be one of the following values: \"create-in-progress\", \"create-complete\", \"modify-in-progress\", \"modify-complete\", \"delete-in-progress\", or \"delete-complete\""
  },
  {
    "name": "state_message",
    "type": "string",
    "description": "An explanation of how the pool arrived at it current state."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource."
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
    "name": "ipam_pool_id",
    "type": "string",
    "description": "Id of the IPAM Pool."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipampool.html"><code>AWS::EC2::IPAMPool</code></a>.

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
    <td><code>ipam_pools</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="IpamScopeId, AddressFamily, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>ipam_pools</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>ipam_pools</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>ipam_pools_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>ipam_pools</code></td>
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

Gets all properties from an individual <code>ipam_pool</code>.
```sql
SELECT
region,
ipam_pool_id,
address_family,
allocation_min_netmask_length,
allocation_default_netmask_length,
allocation_max_netmask_length,
allocation_resource_tags,
arn,
auto_import,
aws_service,
description,
ipam_scope_id,
ipam_scope_arn,
ipam_scope_type,
ipam_arn,
locale,
pool_depth,
provisioned_cidrs,
public_ip_source,
publicly_advertisable,
source_ipam_pool_id,
source_resource,
state,
state_message,
tags
FROM awscc.ec2.ipam_pools
WHERE region = 'us-east-1' AND data__Identifier = '<IpamPoolId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>ipam_pools</code> in a region.
```sql
SELECT
region,
ipam_pool_id
FROM awscc.ec2.ipam_pools_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>ipam_pool</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.ipam_pools (
 AddressFamily,
 IpamScopeId,
 region
)
SELECT 
'{{ AddressFamily }}',
 '{{ IpamScopeId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.ipam_pools (
 AddressFamily,
 AllocationMinNetmaskLength,
 AllocationDefaultNetmaskLength,
 AllocationMaxNetmaskLength,
 AllocationResourceTags,
 AutoImport,
 AwsService,
 Description,
 IpamScopeId,
 Locale,
 ProvisionedCidrs,
 PublicIpSource,
 PubliclyAdvertisable,
 SourceIpamPoolId,
 SourceResource,
 Tags,
 region
)
SELECT 
 '{{ AddressFamily }}',
 '{{ AllocationMinNetmaskLength }}',
 '{{ AllocationDefaultNetmaskLength }}',
 '{{ AllocationMaxNetmaskLength }}',
 '{{ AllocationResourceTags }}',
 '{{ AutoImport }}',
 '{{ AwsService }}',
 '{{ Description }}',
 '{{ IpamScopeId }}',
 '{{ Locale }}',
 '{{ ProvisionedCidrs }}',
 '{{ PublicIpSource }}',
 '{{ PubliclyAdvertisable }}',
 '{{ SourceIpamPoolId }}',
 '{{ SourceResource }}',
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
  - name: ipam_pool
    props:
      - name: AddressFamily
        value: '{{ AddressFamily }}'
      - name: AllocationMinNetmaskLength
        value: '{{ AllocationMinNetmaskLength }}'
      - name: AllocationDefaultNetmaskLength
        value: '{{ AllocationDefaultNetmaskLength }}'
      - name: AllocationMaxNetmaskLength
        value: '{{ AllocationMaxNetmaskLength }}'
      - name: AllocationResourceTags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: AutoImport
        value: '{{ AutoImport }}'
      - name: AwsService
        value: '{{ AwsService }}'
      - name: Description
        value: '{{ Description }}'
      - name: IpamScopeId
        value: '{{ IpamScopeId }}'
      - name: Locale
        value: '{{ Locale }}'
      - name: ProvisionedCidrs
        value:
          - Cidr: '{{ Cidr }}'
      - name: PublicIpSource
        value: '{{ PublicIpSource }}'
      - name: PubliclyAdvertisable
        value: '{{ PubliclyAdvertisable }}'
      - name: SourceIpamPoolId
        value: '{{ SourceIpamPoolId }}'
      - name: SourceResource
        value:
          ResourceId: '{{ ResourceId }}'
          ResourceType: '{{ ResourceType }}'
          ResourceRegion: '{{ ResourceRegion }}'
          ResourceOwner: '{{ ResourceOwner }}'
      - name: Tags
        value:
          - null

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.ec2.ipam_pools
SET data__PatchDocument = string('{{ {
    "AllocationMinNetmaskLength": allocation_min_netmask_length,
    "AllocationDefaultNetmaskLength": allocation_default_netmask_length,
    "AllocationMaxNetmaskLength": allocation_max_netmask_length,
    "AllocationResourceTags": allocation_resource_tags,
    "AutoImport": auto_import,
    "Description": description,
    "ProvisionedCidrs": provisioned_cidrs,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<IpamPoolId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.ipam_pools
WHERE data__Identifier = '<IpamPoolId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>ipam_pools</code> resource, the following permissions are required:

### Create
```json
ec2:CreateIpamPool,
ec2:DescribeIpamPools,
ec2:ProvisionIpamPoolCidr,
ec2:GetIpamPoolCidrs,
ec2:CreateTags
```

### Read
```json
ec2:DescribeIpamPools,
ec2:GetIpamPoolCidrs
```

### Update
```json
ec2:ModifyIpamPool,
ec2:DescribeIpamPools,
ec2:GetIpamPoolCidrs,
ec2:ProvisionIpamPoolCidr,
ec2:DeprovisionIpamPoolCidr,
ec2:CreateTags,
ec2:DeleteTags
```

### Delete
```json
ec2:DeleteIpamPool,
ec2:DescribeIpamPools,
ec2:GetIpamPoolCidrs,
ec2:DeprovisionIpamPoolCidr,
ec2:DeleteTags
```

### List
```json
ec2:DescribeIpamPools
```
