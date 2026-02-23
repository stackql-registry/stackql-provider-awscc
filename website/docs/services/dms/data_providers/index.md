---
title: data_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - data_providers
  - dms
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

Creates, updates, deletes or gets a <code>data_provider</code> resource or lists <code>data_providers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>data_providers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::DMS::DataProvider</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.dms.data_providers" /></td></tr>
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
    "name": "data_provider_name",
    "type": "string",
    "description": "The property describes a name to identify the data provider."
  },
  {
    "name": "data_provider_identifier",
    "type": "string",
    "description": "The property describes an identifier for the data provider. It is used for describing/deleting/modifying can be name/arn"
  },
  {
    "name": "data_provider_arn",
    "type": "string",
    "description": "The data provider ARN."
  },
  {
    "name": "data_provider_creation_time",
    "type": "string",
    "description": "The data provider creation time."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The optional description of the data provider."
  },
  {
    "name": "engine",
    "type": "string",
    "description": "The property describes a data engine for the data provider."
  },
  {
    "name": "exact_settings",
    "type": "boolean",
    "description": "The property describes the exact settings which can be modified"
  },
  {
    "name": "settings",
    "type": "object",
    "description": "The property identifies the exact type of settings for the data provider.",
    "children": [
      {
        "name": "postgre_sql_settings",
        "type": "object",
        "description": "PostgreSqlSettings property identifier.",
        "children": [
          {
            "name": "server_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "port",
            "type": "integer",
            "description": ""
          },
          {
            "name": "database_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "ssl_mode",
            "type": "string",
            "description": ""
          },
          {
            "name": "certificate_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "my_sql_settings",
        "type": "object",
        "description": "MySqlSettings property identifier.",
        "children": [
          {
            "name": "server_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "port",
            "type": "integer",
            "description": ""
          },
          {
            "name": "ssl_mode",
            "type": "string",
            "description": ""
          },
          {
            "name": "certificate_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "oracle_settings",
        "type": "object",
        "description": "OracleSettings property identifier.",
        "children": [
          {
            "name": "server_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "port",
            "type": "integer",
            "description": ""
          },
          {
            "name": "database_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "ssl_mode",
            "type": "string",
            "description": ""
          },
          {
            "name": "certificate_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "asm_server",
            "type": "string",
            "description": ""
          },
          {
            "name": "secrets_manager_oracle_asm_secret_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "secrets_manager_oracle_asm_access_role_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "secrets_manager_security_db_encryption_secret_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "secrets_manager_security_db_encryption_access_role_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "microsoft_sql_server_settings",
        "type": "object",
        "description": "MicrosoftSqlServerSettings property identifier.",
        "children": [
          {
            "name": "server_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "port",
            "type": "integer",
            "description": ""
          },
          {
            "name": "database_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "ssl_mode",
            "type": "string",
            "description": ""
          },
          {
            "name": "certificate_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "redshift_settings",
        "type": "object",
        "description": "RedshiftSettings property identifier.",
        "children": [
          {
            "name": "server_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "port",
            "type": "integer",
            "description": ""
          },
          {
            "name": "database_name",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "maria_db_settings",
        "type": "object",
        "description": "MariaDbSettings property identifier.",
        "children": [
          {
            "name": "server_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "port",
            "type": "integer",
            "description": ""
          },
          {
            "name": "ssl_mode",
            "type": "string",
            "description": ""
          },
          {
            "name": "certificate_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "doc_db_settings",
        "type": "object",
        "description": "DocDbSettings property identifier.",
        "children": [
          {
            "name": "server_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "port",
            "type": "integer",
            "description": ""
          },
          {
            "name": "database_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "ssl_mode",
            "type": "string",
            "description": ""
          },
          {
            "name": "certificate_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "mongo_db_settings",
        "type": "object",
        "description": "MongoDbSettings property identifier.",
        "children": [
          {
            "name": "server_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "port",
            "type": "integer",
            "description": ""
          },
          {
            "name": "database_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "ssl_mode",
            "type": "string",
            "description": ""
          },
          {
            "name": "certificate_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "auth_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "auth_source",
            "type": "string",
            "description": ""
          },
          {
            "name": "auth_mechanism",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "ibm_db2_luw_settings",
        "type": "object",
        "description": "IbmDb2LuwSettings property identifier.",
        "children": [
          {
            "name": "server_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "port",
            "type": "integer",
            "description": ""
          },
          {
            "name": "database_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "ssl_mode",
            "type": "string",
            "description": ""
          },
          {
            "name": "certificate_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "ibm_db2z_os_settings",
        "type": "object",
        "description": "IbmDb2zOsSettings property identifier.",
        "children": [
          {
            "name": "server_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "port",
            "type": "integer",
            "description": ""
          },
          {
            "name": "database_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "ssl_mode",
            "type": "string",
            "description": ""
          },
          {
            "name": "certificate_arn",
            "type": "string",
            "description": ""
          }
        ]
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
        "description": "<p>Tag key.</p>"
      },
      {
        "name": "value",
        "type": "string",
        "description": "<p>Tag value.</p>"
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
    "name": "data_provider_arn",
    "type": "string",
    "description": "The data provider ARN."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-dataprovider.html"><code>AWS::DMS::DataProvider</code></a>.

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
    <td><code>data_providers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Engine, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>data_providers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>data_providers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>data_providers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>data_providers</code></td>
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

Gets all properties from an individual <code>data_provider</code>.
```sql
SELECT
region,
data_provider_name,
data_provider_identifier,
data_provider_arn,
data_provider_creation_time,
description,
engine,
exact_settings,
settings,
tags
FROM awscc.dms.data_providers
WHERE region = 'us-east-1' AND Identifier = '{{ data_provider_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>data_providers</code> in a region.
```sql
SELECT
region,
data_provider_arn
FROM awscc.dms.data_providers_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>data_provider</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.dms.data_providers (
 Engine,
 region
)
SELECT
'{{ engine }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.dms.data_providers (
 DataProviderName,
 DataProviderIdentifier,
 Description,
 Engine,
 ExactSettings,
 Settings,
 Tags,
 region
)
SELECT
 '{{ data_provider_name }}',
 '{{ data_provider_identifier }}',
 '{{ description }}',
 '{{ engine }}',
 '{{ exact_settings }}',
 '{{ settings }}',
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
  - name: data_provider
    props:
      - name: data_provider_name
        value: '{{ data_provider_name }}'
      - name: data_provider_identifier
        value: '{{ data_provider_identifier }}'
      - name: description
        value: '{{ description }}'
      - name: engine
        value: '{{ engine }}'
      - name: exact_settings
        value: '{{ exact_settings }}'
      - name: settings
        value:
          postgre_sql_settings:
            server_name: '{{ server_name }}'
            port: '{{ port }}'
            database_name: '{{ database_name }}'
            ssl_mode: '{{ ssl_mode }}'
            certificate_arn: '{{ certificate_arn }}'
          my_sql_settings:
            server_name: '{{ server_name }}'
            port: '{{ port }}'
            ssl_mode: null
            certificate_arn: '{{ certificate_arn }}'
          oracle_settings:
            server_name: '{{ server_name }}'
            port: '{{ port }}'
            database_name: '{{ database_name }}'
            ssl_mode: null
            certificate_arn: '{{ certificate_arn }}'
            asm_server: '{{ asm_server }}'
            secrets_manager_oracle_asm_secret_id: '{{ secrets_manager_oracle_asm_secret_id }}'
            secrets_manager_oracle_asm_access_role_arn: '{{ secrets_manager_oracle_asm_access_role_arn }}'
            secrets_manager_security_db_encryption_secret_id: '{{ secrets_manager_security_db_encryption_secret_id }}'
            secrets_manager_security_db_encryption_access_role_arn: '{{ secrets_manager_security_db_encryption_access_role_arn }}'
          microsoft_sql_server_settings:
            server_name: '{{ server_name }}'
            port: '{{ port }}'
            database_name: '{{ database_name }}'
            ssl_mode: null
            certificate_arn: '{{ certificate_arn }}'
          redshift_settings:
            server_name: '{{ server_name }}'
            port: '{{ port }}'
            database_name: '{{ database_name }}'
          maria_db_settings:
            server_name: '{{ server_name }}'
            port: '{{ port }}'
            ssl_mode: null
            certificate_arn: '{{ certificate_arn }}'
          doc_db_settings:
            server_name: '{{ server_name }}'
            port: '{{ port }}'
            database_name: '{{ database_name }}'
            ssl_mode: '{{ ssl_mode }}'
            certificate_arn: '{{ certificate_arn }}'
          mongo_db_settings:
            server_name: '{{ server_name }}'
            port: '{{ port }}'
            database_name: '{{ database_name }}'
            ssl_mode: null
            certificate_arn: '{{ certificate_arn }}'
            auth_type: '{{ auth_type }}'
            auth_source: '{{ auth_source }}'
            auth_mechanism: '{{ auth_mechanism }}'
          ibm_db2_luw_settings:
            server_name: '{{ server_name }}'
            port: '{{ port }}'
            database_name: '{{ database_name }}'
            ssl_mode: '{{ ssl_mode }}'
            certificate_arn: '{{ certificate_arn }}'
          ibm_db2z_os_settings:
            server_name: '{{ server_name }}'
            port: '{{ port }}'
            database_name: '{{ database_name }}'
            ssl_mode: null
            certificate_arn: '{{ certificate_arn }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>data_provider</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.dms.data_providers
SET PatchDocument = string('{{ {
    "DataProviderName": data_provider_name,
    "DataProviderIdentifier": data_provider_identifier,
    "Description": description,
    "Engine": engine,
    "ExactSettings": exact_settings,
    "Settings": settings,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ data_provider_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.dms.data_providers
WHERE Identifier = '{{ data_provider_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>data_providers</code> resource, the following permissions are required:

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
dms:CreateDataProvider,
dms:ListDataProviders,
dms:DescribeDataProviders,
dms:AddTagsToResource,
dms:ListTagsForResource,
iam:GetRole,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
dms:ListDataProviders,
dms:DescribeDataProviders,
dms:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
dms:UpdateDataProvider,
dms:ModifyDataProvider,
dms:AddTagsToResource,
dms:RemoveTagsFromResource,
dms:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
dms:DeleteDataProvider
```

</TabItem>
<TabItem value="list">

```json
dms:ListDataProviders,
dms:DescribeDataProviders,
dms:ListTagsForResource
```

</TabItem>
</Tabs>