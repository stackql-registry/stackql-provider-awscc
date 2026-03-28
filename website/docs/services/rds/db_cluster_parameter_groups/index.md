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

import CodeBlock from '@theme/CodeBlock';
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
<tr><td><b>Description</b></td><td><details><summary>The <code>AWS::RDS::DBClusterParameterGroup</code> resource creates a new Amazon RDS DB cluster parameter group.</summary>For information about configuring parameters for Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_WorkingWithParamGroups.html">Working with parameter groups</a> in the <i>Amazon Aurora User Guide</i>.<br />If you apply a parameter group to a DB cluster, then its DB instances might need to reboot. This can result in an outage while the DB instances are rebooting.<br />If you apply a change to parameter group associated with a stopped DB cluster, then the updated stack waits until the DB cluster is started.</details></td></tr>
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
    "description": "<details><summary>The DB cluster parameter group family name. A DB cluster parameter group can be associated with one and only one DB cluster parameter group family, and can be applied only to a DB cluster running a database engine and engine version compatible with that DB cluster parameter group family.</summary><i>Aurora MySQL</i><br />Example: <code>aurora-mysql5.7</code>, <code>aurora-mysql8.0</code><br /><i>Aurora PostgreSQL</i><br />Example: <code>aurora-postgresql14</code><br /><i>RDS for MySQL</i><br />Example: <code>mysql8.0</code><br /><i>RDS for PostgreSQL</i><br />Example: <code>postgres13</code><br />To list all of the available parameter group families for a DB engine, use the following command:<br /><code>aws rds describe-db-engine-versions --query \"DBEngineVersions[].DBParameterGroupFamily\" --engine <engine></code><br />For example, to list all of the available parameter group families for the Aurora PostgreSQL DB engine, use the following command:<br /><code>aws rds describe-db-engine-versions --query \"DBEngineVersions[].DBParameterGroupFamily\" --engine aurora-postgresql</code><br />The output contains duplicates.<br />The following are the valid DB engine values:<br />+   <code>aurora-mysql</code><br />+   <code>aurora-postgresql</code><br />+   <code>mysql</code><br />+   <code>postgres</code></details>"
  },
  {
    "name": "parameters",
    "type": "object",
    "description": "Provides a list of parameters for the DB cluster parameter group."
  },
  {
    "name": "db_cluster_parameter_group_name",
    "type": "string",
    "description": "<details><summary>The name of the DB cluster parameter group.</summary>Constraints:<br />+  Must not match the name of an existing DB cluster parameter group.<br />This value is stored as a lowercase string.</details>"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags to assign to the DB cluster parameter group.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with <code>aws:</code> or <code>rds:</code>. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: \"^([\\\\p&#123;L&#125;\\\\p&#123;Z&#125;\\\\p&#123;N&#125;_.:/=+\\\\-@]*)$\")."
      },
      {
        "name": "value",
        "type": "string",
        "description": "A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with <code>aws:</code> or <code>rds:</code>. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: \"^([\\\\p&#123;L&#125;\\\\p&#123;Z&#125;\\\\p&#123;N&#125;_.:/=+\\\\-@]*)$\")."
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
    "description": "<details><summary>The name of the DB cluster parameter group.</summary>Constraints:<br />+  Must not match the name of an existing DB cluster parameter group.<br />This value is stored as a lowercase string.</details>"
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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ db_cluster_parameter_group_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>db_cluster_parameter_groups</code> in a region.
```sql
SELECT
  region,
  db_cluster_parameter_group_name
FROM awscc.rds.db_cluster_parameter_groups_list_only
WHERE
  region = '{{ region }}';
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
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
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
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`version: 1
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
            value: '{{ value }}'`}</CodeBlock>

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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ db_cluster_parameter_group_name }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.rds.db_cluster_parameter_groups
WHERE
  Identifier = '{{ db_cluster_parameter_group_name }}' AND
  region = '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

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