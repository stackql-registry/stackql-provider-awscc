---
title: db_proxy_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - db_proxy_endpoints
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

Creates, updates, deletes or gets a <code>db_proxy_endpoint</code> resource or lists <code>db_proxy_endpoints</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>db_proxy_endpoints</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::RDS::DBProxyEndpoint.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.rds.db_proxy_endpoints" /></td></tr>
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
    "name": "db_proxy_endpoint_name",
    "type": "string",
    "description": "The identifier for the DB proxy endpoint. This name must be unique for all DB proxy endpoints owned by your AWS account in the specified AWS Region."
  },
  {
    "name": "db_proxy_endpoint_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the DB proxy endpoint."
  },
  {
    "name": "db_proxy_name",
    "type": "string",
    "description": "The identifier for the proxy. This name must be unique for all proxies owned by your AWS account in the specified AWS Region."
  },
  {
    "name": "vpc_id",
    "type": "string",
    "description": "VPC ID to associate with the new DB proxy endpoint."
  },
  {
    "name": "vpc_security_group_ids",
    "type": "array",
    "description": "VPC security group IDs to associate with the new DB proxy endpoint."
  },
  {
    "name": "vpc_subnet_ids",
    "type": "array",
    "description": "VPC subnet IDs to associate with the new DB proxy endpoint."
  },
  {
    "name": "endpoint",
    "type": "string",
    "description": "The endpoint that you can use to connect to the DB proxy. You include the endpoint value in the connection string for a database client application."
  },
  {
    "name": "target_role",
    "type": "string",
    "description": "A value that indicates whether the DB proxy endpoint can be used for read/write or read-only operations."
  },
  {
    "name": "is_default",
    "type": "boolean",
    "description": "A value that indicates whether this endpoint is the default endpoint for the associated DB proxy. Default DB proxy endpoints always have read/write capability. Other endpoints that you associate with the DB proxy can be either read/write or read-only."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An optional set of key-value pairs to associate arbitrary data of your choosing with the DB proxy endpoint.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "string",
        "description": ""
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
    "name": "db_proxy_endpoint_name",
    "type": "string",
    "description": "The identifier for the DB proxy endpoint. This name must be unique for all DB proxy endpoints owned by your AWS account in the specified AWS Region."
  },
  {
    "name": "endpoint",
    "type": "string",
    "description": "The endpoint that you can use to connect to the DB proxy. You include the endpoint value in the connection string for a database client application."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html"><code>AWS::RDS::DBProxyEndpoint</code></a>.

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
    <td><code>db_proxy_endpoints</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DBProxyName, DBProxyEndpointName, VpcSubnetIds, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>db_proxy_endpoints</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>db_proxy_endpoints</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>db_proxy_endpoints_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>db_proxy_endpoints</code></td>
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

Gets all properties from an individual <code>db_proxy_endpoint</code>.
```sql
SELECT
region,
db_proxy_endpoint_name,
db_proxy_endpoint_arn,
db_proxy_name,
vpc_id,
vpc_security_group_ids,
vpc_subnet_ids,
endpoint,
target_role,
is_default,
tags
FROM awscc.rds.db_proxy_endpoints
WHERE region = 'us-east-1' AND Identifier = '{{ db_proxy_endpoint_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>db_proxy_endpoints</code> in a region.
```sql
SELECT
region,
db_proxy_endpoint_name
FROM awscc.rds.db_proxy_endpoints_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>db_proxy_endpoint</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.rds.db_proxy_endpoints (
 DBProxyEndpointName,
 DBProxyName,
 VpcSubnetIds,
 region
)
SELECT
'{{ db_proxy_endpoint_name }}',
 '{{ db_proxy_name }}',
 '{{ vpc_subnet_ids }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.rds.db_proxy_endpoints (
 DBProxyEndpointName,
 DBProxyName,
 VpcSecurityGroupIds,
 VpcSubnetIds,
 TargetRole,
 Tags,
 region
)
SELECT
 '{{ db_proxy_endpoint_name }}',
 '{{ db_proxy_name }}',
 '{{ vpc_security_group_ids }}',
 '{{ vpc_subnet_ids }}',
 '{{ target_role }}',
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
  - name: db_proxy_endpoint
    props:
      - name: db_proxy_endpoint_name
        value: '{{ db_proxy_endpoint_name }}'
      - name: db_proxy_name
        value: '{{ db_proxy_name }}'
      - name: vpc_security_group_ids
        value:
          - '{{ vpc_security_group_ids[0] }}'
      - name: vpc_subnet_ids
        value:
          - '{{ vpc_subnet_ids[0] }}'
      - name: target_role
        value: '{{ target_role }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>db_proxy_endpoint</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.rds.db_proxy_endpoints
SET PatchDocument = string('{{ {
    "VpcSecurityGroupIds": vpc_security_group_ids,
    "TargetRole": target_role,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ db_proxy_endpoint_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.rds.db_proxy_endpoints
WHERE Identifier = '{{ db_proxy_endpoint_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>db_proxy_endpoints</code> resource, the following permissions are required:

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
rds:CreateDBProxyEndpoint,
rds:DescribeDBProxyEndpoints
```

</TabItem>
<TabItem value="read">

```json
rds:DescribeDBProxyEndpoints,
rds:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
rds:ModifyDBProxyEndpoint,
rds:AddTagsToResource,
rds:RemoveTagsFromResource
```

</TabItem>
<TabItem value="delete">

```json
rds:DescribeDBProxyEndpoints,
rds:DeleteDBProxyEndpoint
```

</TabItem>
<TabItem value="list">

```json
rds:DescribeDBProxyEndpoints
```

</TabItem>
</Tabs>