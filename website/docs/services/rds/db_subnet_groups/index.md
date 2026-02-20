---
title: db_subnet_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - db_subnet_groups
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

Creates, updates, deletes or gets a <code>db_subnet_group</code> resource or lists <code>db_subnet_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>db_subnet_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::RDS::DBSubnetGroup&#96;&#96; resource creates a database subnet group. Subnet groups must contain at least two subnets in two different Availability Zones in the same region. <br />For more information, see &#91;Working with DB subnet groups&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER&#95;VPC.WorkingWithRDSInstanceinaVPC.html#USER&#95;VPC.Subnets) in the &#42;Amazon RDS User Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.rds.db_subnet_groups" /></td></tr>
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
    "name": "db_subnet_group_description",
    "type": "string",
    "description": "The description for the DB subnet group."
  },
  {
    "name": "db_subnet_group_name",
    "type": "string",
    "description": "The name for the DB subnet group. This value is stored as a lowercase string.<br />Constraints:<br />+ Must contain no more than 255 letters, numbers, periods, underscores, spaces, or hyphens.<br />+ Must not be default.<br />+ First character must be a letter.<br /><br />Example: &#96;&#96;mydbsubnetgroup&#96;&#96;"
  },
  {
    "name": "subnet_ids",
    "type": "array",
    "description": "The EC2 Subnet IDs for the DB subnet group."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags to assign to the DB subnet group.",
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
    "name": "db_subnet_group_name",
    "type": "string",
    "description": "The name for the DB subnet group. This value is stored as a lowercase string.<br />Constraints:<br />+ Must contain no more than 255 letters, numbers, periods, underscores, spaces, or hyphens.<br />+ Must not be default.<br />+ First character must be a letter.<br /><br />Example: &#96;&#96;mydbsubnetgroup&#96;&#96;"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsubnetgroup.html"><code>AWS::RDS::DBSubnetGroup</code></a>.

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
    <td><code>db_subnet_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DBSubnetGroupDescription, SubnetIds, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>db_subnet_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>db_subnet_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>db_subnet_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>db_subnet_groups</code></td>
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

Gets all properties from an individual <code>db_subnet_group</code>.
```sql
SELECT
region,
db_subnet_group_description,
db_subnet_group_name,
subnet_ids,
tags
FROM awscc.rds.db_subnet_groups
WHERE region = 'us-east-1' AND data__Identifier = '<DBSubnetGroupName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>db_subnet_groups</code> in a region.
```sql
SELECT
region,
db_subnet_group_name
FROM awscc.rds.db_subnet_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>db_subnet_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.rds.db_subnet_groups (
 DBSubnetGroupDescription,
 SubnetIds,
 region
)
SELECT 
'{{ DBSubnetGroupDescription }}',
 '{{ SubnetIds }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.rds.db_subnet_groups (
 DBSubnetGroupDescription,
 DBSubnetGroupName,
 SubnetIds,
 Tags,
 region
)
SELECT 
 '{{ DBSubnetGroupDescription }}',
 '{{ DBSubnetGroupName }}',
 '{{ SubnetIds }}',
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
  - name: db_subnet_group
    props:
      - name: DBSubnetGroupDescription
        value: '{{ DBSubnetGroupDescription }}'
      - name: DBSubnetGroupName
        value: '{{ DBSubnetGroupName }}'
      - name: SubnetIds
        value:
          - '{{ SubnetIds[0] }}'
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
UPDATE awscc.rds.db_subnet_groups
SET data__PatchDocument = string('{{ {
    "DBSubnetGroupDescription": db_subnet_group_description,
    "SubnetIds": subnet_ids,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<DBSubnetGroupName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.rds.db_subnet_groups
WHERE data__Identifier = '<DBSubnetGroupName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>db_subnet_groups</code> resource, the following permissions are required:

### Create
```json
iam:CreateServiceLinkedRole,
rds:CreateDBSubnetGroup,
rds:DescribeDBSubnetGroups,
rds:AddTagsToResource,
rds:RemoveTagsFromResource,
rds:ListTagsForResource
```

### Read
```json
rds:DescribeDBSubnetGroups,
rds:ListTagsForResource
```

### Update
```json
rds:ModifyDBSubnetGroup,
rds:DescribeDBSubnetGroups,
rds:AddTagsToResource,
rds:RemoveTagsFromResource,
rds:ListTagsForResource
```

### Delete
```json
rds:DeleteDBSubnetGroup,
rds:DescribeDBSubnetGroups,
rds:ListTagsForResource
```

### List
```json
rds:DescribeDBSubnetGroups
```
