---
title: db_proxies
hide_title: false
hide_table_of_contents: false
keywords:
  - db_proxies
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

Creates, updates, deletes or gets a <code>db_proxy</code> resource or lists <code>db_proxies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>db_proxies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::RDS::DBProxy</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.rds.db_proxies" /></td></tr>
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
    "name": "auth",
    "type": "array",
    "description": "The authorization mechanism that the proxy uses.",
    "children": [
      {
        "name": "auth_scheme",
        "type": "string",
        "description": "The type of authentication that the proxy uses for connections from the proxy to the underlying database."
      },
      {
        "name": "description",
        "type": "string",
        "description": "A user-specified description about the authentication used by a proxy to log in as a specific database user."
      },
      {
        "name": "iam_auth",
        "type": "string",
        "description": "Whether to require or disallow Amazon Web Services Identity and Access Management (IAM) authentication for connections to the proxy. The ENABLED value is valid only for proxies with RDS for Microsoft SQL Server."
      },
      {
        "name": "secret_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate to the RDS DB instance or Aurora DB cluster. These secrets are stored within Amazon Secrets Manager."
      },
      {
        "name": "client_password_auth_type",
        "type": "string",
        "description": "The type of authentication the proxy uses for connections from clients."
      }
    ]
  },
  {
    "name": "db_proxy_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) for the proxy."
  },
  {
    "name": "db_proxy_name",
    "type": "string",
    "description": "The identifier for the proxy. This name must be unique for all proxies owned by your AWS account in the specified AWS Region."
  },
  {
    "name": "debug_logging",
    "type": "boolean",
    "description": "Whether the proxy includes detailed information about SQL statements in its logs."
  },
  {
    "name": "endpoint",
    "type": "string",
    "description": "The endpoint that you can use to connect to the proxy. You include the endpoint value in the connection string for a database client application."
  },
  {
    "name": "engine_family",
    "type": "string",
    "description": "The kinds of databases that the proxy can connect to."
  },
  {
    "name": "idle_client_timeout",
    "type": "integer",
    "description": "The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it."
  },
  {
    "name": "require_tls",
    "type": "boolean",
    "description": "A Boolean parameter that specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy."
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.",
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
    "name": "vpc_id",
    "type": "string",
    "description": "VPC ID to associate with the new DB proxy."
  },
  {
    "name": "vpc_security_group_ids",
    "type": "array",
    "description": "VPC security group IDs to associate with the new proxy."
  },
  {
    "name": "vpc_subnet_ids",
    "type": "array",
    "description": "VPC subnet IDs to associate with the new proxy."
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
    "name": "db_proxy_name",
    "type": "string",
    "description": "The identifier for the proxy. This name must be unique for all proxies owned by your AWS account in the specified AWS Region."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxy.html"><code>AWS::RDS::DBProxy</code></a>.

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
    <td><code>db_proxies</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Auth, DBProxyName, EngineFamily, RoleArn, VpcSubnetIds, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>db_proxies</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>db_proxies</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>db_proxies_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>db_proxies</code></td>
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

Gets all properties from an individual <code>db_proxy</code>.
```sql
SELECT
region,
auth,
db_proxy_arn,
db_proxy_name,
debug_logging,
endpoint,
engine_family,
idle_client_timeout,
require_tls,
role_arn,
tags,
vpc_id,
vpc_security_group_ids,
vpc_subnet_ids
FROM awscc.rds.db_proxies
WHERE region = 'us-east-1' AND data__Identifier = '<DBProxyName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>db_proxies</code> in a region.
```sql
SELECT
region,
db_proxy_name
FROM awscc.rds.db_proxies_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>db_proxy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.rds.db_proxies (
 Auth,
 DBProxyName,
 EngineFamily,
 RoleArn,
 VpcSubnetIds,
 region
)
SELECT 
'{{ Auth }}',
 '{{ DBProxyName }}',
 '{{ EngineFamily }}',
 '{{ RoleArn }}',
 '{{ VpcSubnetIds }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.rds.db_proxies (
 Auth,
 DBProxyName,
 DebugLogging,
 EngineFamily,
 IdleClientTimeout,
 RequireTLS,
 RoleArn,
 Tags,
 VpcSecurityGroupIds,
 VpcSubnetIds,
 region
)
SELECT 
 '{{ Auth }}',
 '{{ DBProxyName }}',
 '{{ DebugLogging }}',
 '{{ EngineFamily }}',
 '{{ IdleClientTimeout }}',
 '{{ RequireTLS }}',
 '{{ RoleArn }}',
 '{{ Tags }}',
 '{{ VpcSecurityGroupIds }}',
 '{{ VpcSubnetIds }}',
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
  - name: db_proxy
    props:
      - name: Auth
        value:
          - AuthScheme: '{{ AuthScheme }}'
            Description: '{{ Description }}'
            IAMAuth: '{{ IAMAuth }}'
            SecretArn: '{{ SecretArn }}'
            ClientPasswordAuthType: '{{ ClientPasswordAuthType }}'
      - name: DBProxyName
        value: '{{ DBProxyName }}'
      - name: DebugLogging
        value: '{{ DebugLogging }}'
      - name: EngineFamily
        value: '{{ EngineFamily }}'
      - name: IdleClientTimeout
        value: '{{ IdleClientTimeout }}'
      - name: RequireTLS
        value: '{{ RequireTLS }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: VpcSecurityGroupIds
        value:
          - '{{ VpcSecurityGroupIds[0] }}'
      - name: VpcSubnetIds
        value:
          - '{{ VpcSubnetIds[0] }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.rds.db_proxies
SET data__PatchDocument = string('{{ {
    "Auth": auth,
    "DebugLogging": debug_logging,
    "IdleClientTimeout": idle_client_timeout,
    "RequireTLS": require_tls,
    "RoleArn": role_arn,
    "Tags": tags,
    "VpcSecurityGroupIds": vpc_security_group_ids
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<DBProxyName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.rds.db_proxies
WHERE data__Identifier = '<DBProxyName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>db_proxies</code> resource, the following permissions are required:

### Create
```json
rds:CreateDBProxy,
rds:DescribeDBProxies,
iam:PassRole
```

### Read
```json
rds:DescribeDBProxies
```

### Update
```json
rds:ModifyDBProxy,
rds:AddTagsToResource,
rds:RemoveTagsFromResource,
iam:PassRole
```

### Delete
```json
rds:DescribeDBProxies,
rds:DeleteDBProxy
```

### List
```json
rds:DescribeDBProxies
```
