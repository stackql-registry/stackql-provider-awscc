---
title: db_subnet_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - db_subnet_groups
  - neptune
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
<tr><td><b>Description</b></td><td>The AWS::Neptune::DBSubnetGroup type creates an Amazon Neptune DB subnet group. Subnet groups must contain at least two subnets in two different Availability Zones in the same AWS Region.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.neptune.db_subnet_groups" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "db_subnet_group_name",
    "type": "string",
    "description": "The name for the DB subnet group. This value is stored as a lowercase string.<br />Constraints: Must contain no more than 255 lowercase alphanumeric characters or hyphens. Must not be \"Default\".<br />Example: mysubnetgroup<br />"
  },
  {
    "name": "db_subnet_group_description",
    "type": "string",
    "description": "The description for the DB subnet group."
  },
  {
    "name": "subnet_ids",
    "type": "array",
    "description": "The Amazon EC2 subnet IDs for the DB subnet group."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An optional array of key-value pairs to apply to this DB subnet group.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbsubnetgroup.html"><code>AWS::Neptune::DBSubnetGroup</code></a>.

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
    <td><CopyableCode code="DBSubnetGroupDescription, SubnetIds, region" /></td>
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

Gets all properties from an individual <code>db_subnet_group</code>.
```sql
SELECT
region,
db_subnet_group_name,
db_subnet_group_description,
subnet_ids,
tags
FROM awscc.neptune.db_subnet_groups
WHERE region = 'us-east-1' AND data__Identifier = '<DBSubnetGroupName>';
```

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
INSERT INTO awscc.neptune.db_subnet_groups (
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
INSERT INTO awscc.neptune.db_subnet_groups (
 DBSubnetGroupName,
 DBSubnetGroupDescription,
 SubnetIds,
 Tags,
 region
)
SELECT 
 '{{ DBSubnetGroupName }}',
 '{{ DBSubnetGroupDescription }}',
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
      - name: DBSubnetGroupName
        value: '{{ DBSubnetGroupName }}'
      - name: DBSubnetGroupDescription
        value: '{{ DBSubnetGroupDescription }}'
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

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.neptune.db_subnet_groups
WHERE data__Identifier = '<DBSubnetGroupName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>db_subnet_groups</code> resource, the following permissions are required:

### Create
```json
rds:CreateDBSubnetGroup,
rds:DescribeDBSubnetGroups,
rds:ListTagsForResource,
rds:AddTagsToResource,
iam:CreateServiceLinkedRole
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
rds:ListTagsForResource,
rds:RemoveTagsFromResource
```

### List
```json
rds:DescribeDBSubnetGroups,
rds:ListTagsForResource
```
