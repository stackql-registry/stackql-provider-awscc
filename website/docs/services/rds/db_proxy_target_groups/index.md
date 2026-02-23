---
title: db_proxy_target_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - db_proxy_target_groups
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

Creates, updates, deletes or gets a <code>db_proxy_target_group</code> resource or lists <code>db_proxy_target_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>db_proxy_target_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::RDS::DBProxyTargetGroup</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.rds.db_proxy_target_groups" /></td></tr>
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
    "name": "db_proxy_name",
    "type": "string",
    "description": "The identifier for the proxy."
  },
  {
    "name": "target_group_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) representing the target group."
  },
  {
    "name": "target_group_name",
    "type": "string",
    "description": "The identifier for the DBProxyTargetGroup"
  },
  {
    "name": "connection_pool_configuration_info",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "max_connections_percent",
        "type": "integer",
        "description": "The maximum size of the connection pool for each target in a target group."
      },
      {
        "name": "max_idle_connections_percent",
        "type": "integer",
        "description": "Controls how actively the proxy closes idle database connections in the connection pool."
      },
      {
        "name": "connection_borrow_timeout",
        "type": "integer",
        "description": "The number of seconds for a proxy to wait for a connection to become available in the connection pool."
      },
      {
        "name": "session_pinning_filters",
        "type": "array",
        "description": "Each item in the list represents a class of SQL operations that normally cause all later statements in a session using a proxy to be pinned to the same underlying database connection."
      },
      {
        "name": "init_query",
        "type": "string",
        "description": "One or more SQL statements for the proxy to run when opening each new database connection."
      }
    ]
  },
  {
    "name": "db_instance_identifiers",
    "type": "array",
    "description": ""
  },
  {
    "name": "db_cluster_identifiers",
    "type": "array",
    "description": ""
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
    "name": "target_group_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) representing the target group."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxytargetgroup.html"><code>AWS::RDS::DBProxyTargetGroup</code></a>.

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
    <td><code>db_proxy_target_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DBProxyName, TargetGroupName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>db_proxy_target_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>db_proxy_target_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>db_proxy_target_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>db_proxy_target_groups</code></td>
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

Gets all properties from an individual <code>db_proxy_target_group</code>.
```sql
SELECT
region,
db_proxy_name,
target_group_arn,
target_group_name,
connection_pool_configuration_info,
db_instance_identifiers,
db_cluster_identifiers
FROM awscc.rds.db_proxy_target_groups
WHERE region = 'us-east-1' AND Identifier = '{{ target_group_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>db_proxy_target_groups</code> in a region.
```sql
SELECT
region,
target_group_arn
FROM awscc.rds.db_proxy_target_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>db_proxy_target_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.rds.db_proxy_target_groups (
 DBProxyName,
 TargetGroupName,
 region
)
SELECT
'{{ db_proxy_name }}',
 '{{ target_group_name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.rds.db_proxy_target_groups (
 DBProxyName,
 TargetGroupName,
 ConnectionPoolConfigurationInfo,
 DBInstanceIdentifiers,
 DBClusterIdentifiers,
 region
)
SELECT
 '{{ db_proxy_name }}',
 '{{ target_group_name }}',
 '{{ connection_pool_configuration_info }}',
 '{{ db_instance_identifiers }}',
 '{{ db_cluster_identifiers }}',
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
  - name: db_proxy_target_group
    props:
      - name: db_proxy_name
        value: '{{ db_proxy_name }}'
      - name: target_group_name
        value: '{{ target_group_name }}'
      - name: connection_pool_configuration_info
        value:
          max_connections_percent: '{{ max_connections_percent }}'
          max_idle_connections_percent: '{{ max_idle_connections_percent }}'
          connection_borrow_timeout: '{{ connection_borrow_timeout }}'
          session_pinning_filters:
            - '{{ session_pinning_filters[0] }}'
          init_query: '{{ init_query }}'
      - name: db_instance_identifiers
        value:
          - '{{ db_instance_identifiers[0] }}'
      - name: db_cluster_identifiers
        value:
          - '{{ db_cluster_identifiers[0] }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>db_proxy_target_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.rds.db_proxy_target_groups
SET PatchDocument = string('{{ {
    "ConnectionPoolConfigurationInfo": connection_pool_configuration_info,
    "DBInstanceIdentifiers": db_instance_identifiers,
    "DBClusterIdentifiers": db_cluster_identifiers
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ target_group_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.rds.db_proxy_target_groups
WHERE Identifier = '{{ target_group_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>db_proxy_target_groups</code> resource, the following permissions are required:

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
rds:DescribeDBProxies,
rds:DescribeDBProxyTargetGroups,
rds:ModifyDBProxyTargetGroup,
rds:RegisterDBProxyTargets
```

</TabItem>
<TabItem value="read">

```json
rds:DescribeDBProxyTargetGroups,
rds:DescribeDBProxyTargets
```

</TabItem>
<TabItem value="update">

```json
rds:DescribeDBProxyTargetGroups,
rds:ModifyDBProxyTargetGroup,
rds:RegisterDBProxyTargets,
rds:DeregisterDBProxyTargets
```

</TabItem>
<TabItem value="delete">

```json
rds:DeregisterDBProxyTargets
```

</TabItem>
<TabItem value="list">

```json
rds:DescribeDBProxyTargetGroups
```

</TabItem>
</Tabs>