---
title: ipams
hide_title: false
hide_table_of_contents: false
keywords:
  - ipams
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

Creates, updates, deletes or gets an <code>ipam</code> resource or lists <code>ipams</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>ipams</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Schema of AWS::EC2::IPAM Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.ipams" /></td></tr>
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
    "name": "ipam_id",
    "type": "string",
    "description": "Id of the IPAM."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the IPAM."
  },
  {
    "name": "default_resource_discovery_id",
    "type": "string",
    "description": "The Id of the default resource discovery, created with this IPAM."
  },
  {
    "name": "default_resource_discovery_association_id",
    "type": "string",
    "description": "The Id of the default association to the default resource discovery, created with this IPAM."
  },
  {
    "name": "resource_discovery_association_count",
    "type": "integer",
    "description": "The count of resource discoveries associated with this IPAM."
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "public_default_scope_id",
    "type": "string",
    "description": "The Id of the default scope for publicly routable IP space, created with this IPAM."
  },
  {
    "name": "private_default_scope_id",
    "type": "string",
    "description": "The Id of the default scope for publicly routable IP space, created with this IPAM."
  },
  {
    "name": "scope_count",
    "type": "integer",
    "description": "The number of scopes that currently exist in this IPAM."
  },
  {
    "name": "operating_regions",
    "type": "array",
    "description": "The regions IPAM is enabled for. Allows pools to be created in these regions, as well as enabling monitoring",
    "children": [
      {
        "name": "region_name",
        "type": "string",
        "description": "The name of the region."
      }
    ]
  },
  {
    "name": "tier",
    "type": "string",
    "description": "The tier of the IPAM."
  },
  {
    "name": "enable_private_gua",
    "type": "boolean",
    "description": "Enable provisioning of GUA space in private pools."
  },
  {
    "name": "metered_account",
    "type": "string",
    "description": "A metered account is an account that is charged for active IP addresses managed in IPAM"
  },
  {
    "name": "default_resource_discovery_organizational_unit_exclusions",
    "type": "array",
    "description": "A set of organizational unit (OU) exclusions for the default resource discovery, created with this IPAM.",
    "children": [
      {
        "name": "organizations_entity_path",
        "type": "string",
        "description": "An AWS Organizations entity path. Build the path for the OU(s) using AWS Organizations IDs separated by a '/'. Include all child OUs by ending the path with '/&#42;'."
      }
    ]
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
    "name": "ipam_id",
    "type": "string",
    "description": "Id of the IPAM."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipam.html"><code>AWS::EC2::IPAM</code></a>.

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
    <td><code>ipams</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code=", region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>ipams</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>ipams</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>ipams_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>ipams</code></td>
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

Gets all properties from an individual <code>ipam</code>.
```sql
SELECT
region,
ipam_id,
arn,
default_resource_discovery_id,
default_resource_discovery_association_id,
resource_discovery_association_count,
description,
public_default_scope_id,
private_default_scope_id,
scope_count,
operating_regions,
tier,
enable_private_gua,
metered_account,
default_resource_discovery_organizational_unit_exclusions,
tags
FROM awscc.ec2.ipams
WHERE region = 'us-east-1' AND Identifier = '<IpamId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>ipams</code> in a region.
```sql
SELECT
region,
ipam_id
FROM awscc.ec2.ipams_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>ipam</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.ipams (
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
INSERT INTO awscc.ec2.ipams (
 Description,
 OperatingRegions,
 Tier,
 EnablePrivateGua,
 MeteredAccount,
 DefaultResourceDiscoveryOrganizationalUnitExclusions,
 Tags,
 region
)
SELECT 
 '{{ Description }}',
 '{{ OperatingRegions }}',
 '{{ Tier }}',
 '{{ EnablePrivateGua }}',
 '{{ MeteredAccount }}',
 '{{ DefaultResourceDiscoveryOrganizationalUnitExclusions }}',
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
  - name: ipam
    props:
      - name: Description
        value: '{{ Description }}'
      - name: OperatingRegions
        value:
          - RegionName: '{{ RegionName }}'
      - name: Tier
        value: '{{ Tier }}'
      - name: EnablePrivateGua
        value: '{{ EnablePrivateGua }}'
      - name: MeteredAccount
        value: '{{ MeteredAccount }}'
      - name: DefaultResourceDiscoveryOrganizationalUnitExclusions
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

Use the following StackQL query and manifest file to update a <code>ipam</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.ipams
SET PatchDocument = string('{{ {
    "Description": description,
    "OperatingRegions": operating_regions,
    "Tier": tier,
    "EnablePrivateGua": enable_private_gua,
    "MeteredAccount": metered_account,
    "DefaultResourceDiscoveryOrganizationalUnitExclusions": default_resource_discovery_organizational_unit_exclusions,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<IpamId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.ipams
WHERE Identifier = '<IpamId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>ipams</code> resource, the following permissions are required:

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
ec2:CreateIpam,
iam:CreateServiceLinkedRole,
ec2:CreateTags,
ec2:DescribeIpams,
ec2:DescribeIpamResourceDiscoveries,
ec2:ModifyIpamResourceDiscovery
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeIpams,
ec2:DescribeIpamResourceDiscoveries
```

</TabItem>
<TabItem value="update">

```json
ec2:ModifyIpam,
ec2:CreateTags,
ec2:DeleteTags,
ec2:DescribeIpams,
ec2:DescribeIpamResourceDiscoveries,
ec2:ModifyIpamResourceDiscovery
```

</TabItem>
<TabItem value="delete">

```json
ec2:DeleteIpam,
ec2:DeleteTags,
ec2:DescribeIpams
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeIpams
```

</TabItem>
</Tabs>