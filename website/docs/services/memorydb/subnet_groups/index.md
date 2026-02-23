---
title: subnet_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - subnet_groups
  - memorydb
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

Creates, updates, deletes or gets a <code>subnet_group</code> resource or lists <code>subnet_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>subnet_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::MemoryDB::SubnetGroup resource creates an Amazon MemoryDB Subnet Group.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.memorydb.subnet_groups" /></td></tr>
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
    "name": "subnet_group_name",
    "type": "string",
    "description": "The name of the subnet group. This value must be unique as it also serves as the subnet group identifier."
  },
  {
    "name": "description",
    "type": "string",
    "description": "An optional description of the subnet group."
  },
  {
    "name": "subnet_ids",
    "type": "array",
    "description": "A list of VPC subnet IDs for the subnet group."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this subnet group.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with 'aws:'. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the subnet group."
  },
  {
    "name": "supported_network_types",
    "type": "array",
    "description": "Supported network types would be a list of network types supported by subnet group and can be either &#91;ipv4&#93; or &#91;ipv4, dual&#95;stack&#93; or &#91;ipv6&#93;."
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
    "name": "subnet_group_name",
    "type": "string",
    "description": "The name of the subnet group. This value must be unique as it also serves as the subnet group identifier."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-subnetgroup.html"><code>AWS::MemoryDB::SubnetGroup</code></a>.

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
    <td><code>subnet_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="SubnetGroupName, SubnetIds, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>subnet_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>subnet_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>subnet_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>subnet_groups</code></td>
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

Gets all properties from an individual <code>subnet_group</code>.
```sql
SELECT
region,
subnet_group_name,
description,
subnet_ids,
tags,
arn,
supported_network_types
FROM awscc.memorydb.subnet_groups
WHERE region = 'us-east-1' AND Identifier = '{{ subnet_group_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>subnet_groups</code> in a region.
```sql
SELECT
region,
subnet_group_name
FROM awscc.memorydb.subnet_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>subnet_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.memorydb.subnet_groups (
 SubnetGroupName,
 SubnetIds,
 region
)
SELECT
'{{ subnet_group_name }}',
 '{{ subnet_ids }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.memorydb.subnet_groups (
 SubnetGroupName,
 Description,
 SubnetIds,
 Tags,
 region
)
SELECT
 '{{ subnet_group_name }}',
 '{{ description }}',
 '{{ subnet_ids }}',
 '{{ tags }}',
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
  - name: subnet_group
    props:
      - name: subnet_group_name
        value: '{{ subnet_group_name }}'
      - name: description
        value: '{{ description }}'
      - name: subnet_ids
        value:
          - '{{ subnet_ids[0] }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>subnet_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.memorydb.subnet_groups
SET PatchDocument = string('{{ {
    "Description": description,
    "SubnetIds": subnet_ids,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ subnet_group_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.memorydb.subnet_groups
WHERE Identifier = '{{ subnet_group_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>subnet_groups</code> resource, the following permissions are required:

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
memorydb:CreateSubnetGroup,
memorydb:DescribeSubnetGroups,
memorydb:TagResource,
memorydb:ListTags,
iam:CreateServiceLinkedRole
```

</TabItem>
<TabItem value="read">

```json
memorydb:DescribeSubnetGroups,
memorydb:ListTags
```

</TabItem>
<TabItem value="update">

```json
memorydb:UpdateSubnetGroup,
memorydb:DescribeSubnetGroups,
memorydb:ListTags,
memorydb:TagResource,
memorydb:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
memorydb:DeleteSubnetGroup,
memorydb:DescribeSubnetGroups
```

</TabItem>
<TabItem value="list">

```json
memorydb:DescribeSubnetGroups
```

</TabItem>
</Tabs>