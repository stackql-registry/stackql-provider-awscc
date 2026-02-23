---
title: db_cluster_parameter_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - db_cluster_parameter_groups
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

Creates, updates, deletes or gets a <code>db_cluster_parameter_group</code> resource or lists <code>db_cluster_parameter_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>db_cluster_parameter_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::RDS::DBClusterParameterGroup&#96;&#96; resource creates a new Amazon RDS DB cluster parameter group.<br />For information about configuring parameters for Amazon Aurora DB clusters, see &#91;Working with parameter groups&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER&#95;WorkingWithParamGroups.html) in the &#42;Amazon Aurora User Guide&#42;.<br />If you apply a parameter group to a DB cluster, then its DB instances might need to reboot. This can result in an outage while the DB instances are rebooting.<br />If you apply a change to parameter group associated with a stopped DB cluster, then the updated stack waits until the DB cluster is started.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.rds.db_cluster_parameter_groups" /></td></tr>
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
    "name": "description",
    "type": "string",
    "description": "The description for the DB cluster parameter group."
  },
  {
    "name": "family",
    "type": "string",
    "description": "The DB cluster parameter group family name. A DB cluster parameter group can be associated with one and only one DB cluster parameter group family, and can be applied only to a DB cluster running a database engine and engine version compatible with that DB cluster parameter group family.<br />&#42;Aurora MySQL&#42; <br />Example: &#96;&#96;aurora-mysql5.7&#96;&#96;, &#96;&#96;aurora-mysql8.0&#96;&#96;<br />&#42;Aurora PostgreSQL&#42; <br />Example: &#96;&#96;aurora-postgresql14&#96;&#96;<br />&#42;RDS for MySQL&#42; <br />Example: &#96;&#96;mysql8.0&#96;&#96;<br />&#42;RDS for PostgreSQL&#42; <br />Example: &#96;&#96;postgres13&#96;&#96;<br />To list all of the available parameter group families for a DB engine, use the following command:<br />&#96;&#96;aws rds describe-db-engine-versions --query \"DBEngineVersions&#91;&#93;.DBParameterGroupFamily\" --engine &lt;engine&gt;&#96;&#96; <br />For example, to list all of the available parameter group families for the Aurora PostgreSQL DB engine, use the following command:<br />&#96;&#96;aws rds describe-db-engine-versions --query \"DBEngineVersions&#91;&#93;.DBParameterGroupFamily\" --engine aurora-postgresql&#96;&#96; <br />The output contains duplicates.<br />The following are the valid DB engine values:<br />+ &#96;&#96;aurora-mysql&#96;&#96; <br />+ &#96;&#96;aurora-postgresql&#96;&#96; <br />+ &#96;&#96;mysql&#96;&#96; <br />+ &#96;&#96;postgres&#96;&#96;"
  },
  {
    "name": "parameters",
    "type": "object",
    "description": "Provides a list of parameters for the DB cluster parameter group."
  },
  {
    "name": "db_cluster_parameter_group_name",
    "type": "string",
    "description": "The name of the DB cluster parameter group.<br />Constraints:<br />+ Must not match the name of an existing DB cluster parameter group.<br /><br />This value is stored as a lowercase string."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags to assign to the DB cluster parameter group.",
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
    "name": "db_cluster_parameter_group_name",
    "type": "string",
    "description": "The name of the DB cluster parameter group.<br />Constraints:<br />+ Must not match the name of an existing DB cluster parameter group.<br /><br />This value is stored as a lowercase string."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbclusterparametergroup.html"><code>AWS::RDS::DBClusterParameterGroup</code></a>.

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
    <td><code>db_cluster_parameter_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Description, Family, Parameters, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>db_cluster_parameter_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>db_cluster_parameter_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>db_cluster_parameter_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>db_cluster_parameter_groups</code></td>
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

Gets all properties from an individual <code>db_cluster_parameter_group</code>.
```sql
SELECT
region,
description,
family,
parameters,
db_cluster_parameter_group_name,
tags
FROM awscc.rds.db_cluster_parameter_groups
WHERE region = 'us-east-1' AND Identifier = '{{ db_cluster_parameter_group_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>db_cluster_parameter_groups</code> in a region.
```sql
SELECT
region,
db_cluster_parameter_group_name
FROM awscc.rds.db_cluster_parameter_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>db_cluster_parameter_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.rds.db_cluster_parameter_groups (
 Description,
 Family,
 Parameters,
 region
)
SELECT
'{{ description }}',
 '{{ family }}',
 '{{ parameters }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.rds.db_cluster_parameter_groups (
 Description,
 Family,
 Parameters,
 DBClusterParameterGroupName,
 Tags,
 region
)
SELECT
 '{{ description }}',
 '{{ family }}',
 '{{ parameters }}',
 '{{ db_cluster_parameter_group_name }}',
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
  - name: db_cluster_parameter_group
    props:
      - name: description
        value: '{{ description }}'
      - name: family
        value: '{{ family }}'
      - name: parameters
        value: {}
      - name: db_cluster_parameter_group_name
        value: '{{ db_cluster_parameter_group_name }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>db_cluster_parameter_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.rds.db_cluster_parameter_groups
SET PatchDocument = string('{{ {
    "Parameters": parameters,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ db_cluster_parameter_group_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.rds.db_cluster_parameter_groups
WHERE Identifier = '{{ db_cluster_parameter_group_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>db_cluster_parameter_groups</code> resource, the following permissions are required:

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
iam:CreateServiceLinkedRole,
rds:AddTagsToResource,
rds:CreateDBClusterParameterGroup,
rds:DescribeDBClusterParameterGroups,
rds:DescribeDBClusterParameters,
rds:DescribeDBClusters,
rds:DescribeEngineDefaultClusterParameters,
rds:ListTagsForResource,
rds:ModifyDBClusterParameterGroup,
rds:RemoveTagsFromResource
```

</TabItem>
<TabItem value="read">

```json
rds:DescribeDBClusterParameterGroups,
rds:DescribeDBClusterParameters,
rds:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
rds:AddTagsToResource,
rds:DescribeDBClusterParameterGroups,
rds:DescribeDBClusterParameters,
rds:DescribeDBClusters,
rds:DescribeEngineDefaultClusterParameters,
rds:ListTagsForResource,
rds:ModifyDBClusterParameterGroup,
rds:RemoveTagsFromResource,
rds:ResetDBClusterParameterGroup
```

</TabItem>
<TabItem value="delete">

```json
rds:DeleteDBClusterParameterGroup
```

</TabItem>
<TabItem value="list">

```json
rds:DescribeDBClusterParameterGroups
```

</TabItem>
</Tabs>