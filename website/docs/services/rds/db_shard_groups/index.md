---
title: db_shard_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - db_shard_groups
  - rds
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

Creates, updates, deletes or gets a <code>db_shard_group</code> resource or lists <code>db_shard_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>db_shard_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Creates a new DB shard group for Aurora Limitless Database. You must enable Aurora Limitless Database to create a DB shard group.<br />Valid for: Aurora DB clusters only</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.rds.db_shard_groups" /></td></tr>
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
    "name": "db_shard_group_resource_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "db_shard_group_identifier",
    "type": "string",
    "description": "The name of the DB shard group."
  },
  {
    "name": "db_cluster_identifier",
    "type": "string",
    "description": "The name of the primary DB cluster for the DB shard group."
  },
  {
    "name": "compute_redundancy",
    "type": "integer",
    "description": "Specifies whether to create standby standby DB data access shard for the DB shard group. Valid values are the following:<br />+ 0 - Creates a DB shard group without a standby DB data access shard. This is the default value.<br />+ 1 - Creates a DB shard group with a standby DB data access shard in a different Availability Zone (AZ).<br />+ 2 - Creates a DB shard group with two standby DB data access shard in two different AZs."
  },
  {
    "name": "max_ac_u",
    "type": "number",
    "description": "The maximum capacity of the DB shard group in Aurora capacity units (ACUs)."
  },
  {
    "name": "min_ac_u",
    "type": "number",
    "description": "The minimum capacity of the DB shard group in Aurora capacity units (ACUs)."
  },
  {
    "name": "publicly_accessible",
    "type": "boolean",
    "description": "Specifies whether the DB shard group is publicly accessible.<br />When the DB shard group is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB shard group's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB shard group's VPC. Access to the DB shard group is ultimately controlled by the security group it uses. That public access is not permitted if the security group assigned to the DB shard group doesn't permit it.<br />When the DB shard group isn't publicly accessible, it is an internal DB shard group with a DNS name that resolves to a private IP address.<br />Default: The default behavior varies depending on whether &#96;&#96;DBSubnetGroupName&#96;&#96; is specified.<br />If &#96;&#96;DBSubnetGroupName&#96;&#96; isn't specified, and &#96;&#96;PubliclyAccessible&#96;&#96; isn't specified, the following applies:<br />+ If the default VPC in the target Region doesn’t have an internet gateway attached to it, the DB shard group is private.<br />+ If the default VPC in the target Region has an internet gateway attached to it, the DB shard group is public.<br /><br />If &#96;&#96;DBSubnetGroupName&#96;&#96; is specified, and &#96;&#96;PubliclyAccessible&#96;&#96; isn't specified, the following applies:<br />+ If the subnets are part of a VPC that doesn’t have an internet gateway attached to it, the DB shard group is private.<br />+ If the subnets are part of a VPC that has an internet gateway attached to it, the DB shard group is public."
  },
  {
    "name": "endpoint",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An optional set of key-value pairs to associate arbitrary data of your choosing with the DB shard group.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with &#96;&#96;aws:&#96;&#96; or &#96;&#96;rds:&#96;&#96;. The string can only contain only the set of Unicode letters, digits, white-space, '&#95;', '.', ':', '/', '=', '+', '-', '@' (Java regex: \"^(&#91;\\\\p&#123;L&#125;\\\\p&#123;Z&#125;\\\\p&#123;N&#125;&#95;.:/=+\\\\-@&#93;&#42;)$\")."
      },
      {
        "name": "value",
        "type": "string",
        "description": "A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with &#96;&#96;aws:&#96;&#96; or &#96;&#96;rds:&#96;&#96;. The string can only contain only the set of Unicode letters, digits, white-space, '&#95;', '.', ':', '/', '=', '+', '-', '@' (Java regex: \"^(&#91;\\\\p&#123;L&#125;\\\\p&#123;Z&#125;\\\\p&#123;N&#125;&#95;.:/=+\\\\-@&#93;&#42;)$\")."
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
    "name": "db_shard_group_identifier",
    "type": "string",
    "description": "The name of the DB shard group."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbshardgroup.html"><code>AWS::RDS::DBShardGroup</code></a>.

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
    <td><code>db_shard_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DBClusterIdentifier, MaxACU, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>db_shard_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>db_shard_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>db_shard_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>db_shard_groups</code></td>
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

Gets all properties from an individual <code>db_shard_group</code>.
```sql
SELECT
region,
db_shard_group_resource_id,
db_shard_group_identifier,
db_cluster_identifier,
compute_redundancy,
max_ac_u,
min_ac_u,
publicly_accessible,
endpoint,
tags
FROM awscc.rds.db_shard_groups
WHERE region = 'us-east-1' AND data__Identifier = '<DBShardGroupIdentifier>';
```
</TabItem>
<TabItem value="list">

Lists all <code>db_shard_groups</code> in a region.
```sql
SELECT
region,
db_shard_group_identifier
FROM awscc.rds.db_shard_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>db_shard_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.rds.db_shard_groups (
 DBClusterIdentifier,
 MaxACU,
 region
)
SELECT 
'{{ DBClusterIdentifier }}',
 '{{ MaxACU }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.rds.db_shard_groups (
 DBShardGroupIdentifier,
 DBClusterIdentifier,
 ComputeRedundancy,
 MaxACU,
 MinACU,
 PubliclyAccessible,
 Tags,
 region
)
SELECT 
 '{{ DBShardGroupIdentifier }}',
 '{{ DBClusterIdentifier }}',
 '{{ ComputeRedundancy }}',
 '{{ MaxACU }}',
 '{{ MinACU }}',
 '{{ PubliclyAccessible }}',
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
  - name: db_shard_group
    props:
      - name: DBShardGroupIdentifier
        value: '{{ DBShardGroupIdentifier }}'
      - name: DBClusterIdentifier
        value: '{{ DBClusterIdentifier }}'
      - name: ComputeRedundancy
        value: '{{ ComputeRedundancy }}'
      - name: MaxACU
        value: null
      - name: MinACU
        value: null
      - name: PubliclyAccessible
        value: '{{ PubliclyAccessible }}'
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
UPDATE awscc.rds.db_shard_groups
SET data__PatchDocument = string('{{ {
    "ComputeRedundancy": compute_redundancy,
    "MaxACU": max_ac_u,
    "MinACU": min_ac_u,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<DBShardGroupIdentifier>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.rds.db_shard_groups
WHERE data__Identifier = '<DBShardGroupIdentifier>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>db_shard_groups</code> resource, the following permissions are required:

### Create
```json
rds:AddTagsToResource,
rds:CreateDBShardGroup,
rds:DescribeDBClusters,
rds:DescribeDBShardGroups,
rds:ListTagsForResource
```

### Read
```json
rds:DescribeDBShardGroups,
rds:ListTagsForResource
```

### Update
```json
rds:AddTagsToResource,
rds:DescribeDBShardGroups,
rds:DescribeDBClusters,
rds:RemoveTagsFromResource,
rds:ModifyDBShardGroup,
rds:ListTagsForResource
```

### Delete
```json
rds:DeleteDBShardGroup,
rds:DescribeDBClusters,
rds:DescribeDbShardGroups
```

### List
```json
rds:DescribeDBShardGroups,
rds:ListTagsForResource
```
