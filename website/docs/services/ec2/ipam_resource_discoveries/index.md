---
title: ipam_resource_discoveries
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_resource_discoveries
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

Creates, updates, deletes or gets an <code>ipam_resource_discovery</code> resource or lists <code>ipam_resource_discoveries</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>ipam_resource_discoveries</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Schema of AWS::EC2::IPAMResourceDiscovery Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.ipam_resource_discoveries" /></td></tr>
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
    "name": "ipam_resource_discovery_id",
    "type": "string",
    "description": "Id of the IPAM Pool."
  },
  {
    "name": "owner_id",
    "type": "string",
    "description": "Owner Account ID of the Resource Discovery"
  },
  {
    "name": "operating_regions",
    "type": "array",
    "description": "The regions Resource Discovery is enabled for. Allows resource discoveries to be created in these regions, as well as enabling monitoring",
    "children": [
      {
        "name": "region_name",
        "type": "string",
        "description": "The name of the region."
      }
    ]
  },
  {
    "name": "ipam_resource_discovery_region",
    "type": "string",
    "description": "The region the resource discovery is setup in."
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "organizational_unit_exclusions",
    "type": "array",
    "description": "A set of organizational unit (OU) exclusions for this resource.",
    "children": [
      {
        "name": "organizations_entity_path",
        "type": "string",
        "description": "An AWS Organizations entity path. Build the path for the OU(s) using AWS Organizations IDs separated by a '/'. Include all child OUs by ending the path with '/&#42;'."
      }
    ]
  },
  {
    "name": "is_default",
    "type": "boolean",
    "description": "Determines whether or not address space from this pool is publicly advertised. Must be set if and only if the pool is IPv6."
  },
  {
    "name": "ipam_resource_discovery_arn",
    "type": "string",
    "description": "Amazon Resource Name (Arn) for the Resource Discovery."
  },
  {
    "name": "state",
    "type": "string",
    "description": "The state of this Resource Discovery."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "ipam_resource_discovery_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamresourcediscovery.html"><code>AWS::EC2::IPAMResourceDiscovery</code></a>.

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
    <td><code>ipam_resource_discoveries</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code=", region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>ipam_resource_discoveries</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>ipam_resource_discoveries</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>ipam_resource_discoveries_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>ipam_resource_discoveries</code></td>
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

Gets all properties from an individual <code>ipam_resource_discovery</code>.
```sql
SELECT
region,
ipam_resource_discovery_id,
owner_id,
operating_regions,
ipam_resource_discovery_region,
description,
organizational_unit_exclusions,
is_default,
ipam_resource_discovery_arn,
state,
tags
FROM awscc.ec2.ipam_resource_discoveries
WHERE region = 'us-east-1' AND Identifier = '<IpamResourceDiscoveryId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>ipam_resource_discoveries</code> in a region.
```sql
SELECT
region,
ipam_resource_discovery_id
FROM awscc.ec2.ipam_resource_discoveries_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>ipam_resource_discovery</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.ipam_resource_discoveries (
 ,
 region
)
SELECT 
'{{  }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.ipam_resource_discoveries (
 OperatingRegions,
 Description,
 OrganizationalUnitExclusions,
 Tags,
 region
)
SELECT 
 '{{ OperatingRegions }}',
 '{{ Description }}',
 '{{ OrganizationalUnitExclusions }}',
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
  - name: ipam_resource_discovery
    props:
      - name: OperatingRegions
        value:
          - RegionName: '{{ RegionName }}'
      - name: Description
        value: '{{ Description }}'
      - name: OrganizationalUnitExclusions
        value:
          - OrganizationsEntityPath: '{{ OrganizationsEntityPath }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>ipam_resource_discovery</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.ipam_resource_discoveries
SET PatchDocument = string('{{ {
    "OperatingRegions": operating_regions,
    "Description": description,
    "OrganizationalUnitExclusions": organizational_unit_exclusions,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<IpamResourceDiscoveryId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.ipam_resource_discoveries
WHERE Identifier = '<IpamResourceDiscoveryId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>ipam_resource_discoveries</code> resource, the following permissions are required:

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
ec2:CreateIpamResourceDiscovery,
ec2:DescribeIpamResourceDiscoveries,
ec2:ModifyIpamResourceDiscovery,
ec2:CreateTags,
iam:CreateServiceLinkedRole
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeIpamResourceDiscoveries
```

</TabItem>
<TabItem value="update">

```json
ec2:ModifyIpamResourceDiscovery,
ec2:DescribeIpamResourceDiscoveries,
ec2:CreateTags,
ec2:DeleteTags
```

</TabItem>
<TabItem value="delete">

```json
ec2:DeleteIpamResourceDiscovery,
ec2:DescribeIpamResourceDiscoveries,
ec2:DeleteTags
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeIpamResourceDiscoveries
```

</TabItem>
</Tabs>