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
WHERE region = 'us-east-1' AND Identifier = '<DataProviderArn>';
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
'{{ Engine }}',
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
 '{{ DataProviderName }}',
 '{{ DataProviderIdentifier }}',
 '{{ Description }}',
 '{{ Engine }}',
 '{{ ExactSettings }}',
 '{{ Settings }}',
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
  - name: data_provider
    props:
      - name: DataProviderName
        value: '{{ DataProviderName }}'
      - name: DataProviderIdentifier
        value: '{{ DataProviderIdentifier }}'
      - name: Description
        value: '{{ Description }}'
      - name: Engine
        value: '{{ Engine }}'
      - name: ExactSettings
        value: '{{ ExactSettings }}'
      - name: Settings
        value:
          PostgreSqlSettings:
            ServerName: '{{ ServerName }}'
            Port: '{{ Port }}'
            DatabaseName: '{{ DatabaseName }}'
            SslMode: '{{ SslMode }}'
            CertificateArn: '{{ CertificateArn }}'
          MySqlSettings:
            ServerName: '{{ ServerName }}'
            Port: '{{ Port }}'
            SslMode: null
            CertificateArn: '{{ CertificateArn }}'
          OracleSettings:
            ServerName: '{{ ServerName }}'
            Port: '{{ Port }}'
            DatabaseName: '{{ DatabaseName }}'
            SslMode: null
            CertificateArn: '{{ CertificateArn }}'
            AsmServer: '{{ AsmServer }}'
            SecretsManagerOracleAsmSecretId: '{{ SecretsManagerOracleAsmSecretId }}'
            SecretsManagerOracleAsmAccessRoleArn: '{{ SecretsManagerOracleAsmAccessRoleArn }}'
            SecretsManagerSecurityDbEncryptionSecretId: '{{ SecretsManagerSecurityDbEncryptionSecretId }}'
            SecretsManagerSecurityDbEncryptionAccessRoleArn: '{{ SecretsManagerSecurityDbEncryptionAccessRoleArn }}'
          MicrosoftSqlServerSettings:
            ServerName: '{{ ServerName }}'
            Port: '{{ Port }}'
            DatabaseName: '{{ DatabaseName }}'
            SslMode: null
            CertificateArn: '{{ CertificateArn }}'
          RedshiftSettings:
            ServerName: '{{ ServerName }}'
            Port: '{{ Port }}'
            DatabaseName: '{{ DatabaseName }}'
          MariaDbSettings:
            ServerName: '{{ ServerName }}'
            Port: '{{ Port }}'
            SslMode: null
            CertificateArn: '{{ CertificateArn }}'
          DocDbSettings:
            ServerName: '{{ ServerName }}'
            Port: '{{ Port }}'
            DatabaseName: '{{ DatabaseName }}'
            SslMode: '{{ SslMode }}'
            CertificateArn: '{{ CertificateArn }}'
          MongoDbSettings:
            ServerName: '{{ ServerName }}'
            Port: '{{ Port }}'
            DatabaseName: '{{ DatabaseName }}'
            SslMode: null
            CertificateArn: '{{ CertificateArn }}'
            AuthType: '{{ AuthType }}'
            AuthSource: '{{ AuthSource }}'
            AuthMechanism: '{{ AuthMechanism }}'
          IbmDb2LuwSettings:
            ServerName: '{{ ServerName }}'
            Port: '{{ Port }}'
            DatabaseName: '{{ DatabaseName }}'
            SslMode: '{{ SslMode }}'
            CertificateArn: '{{ CertificateArn }}'
          IbmDb2zOsSettings:
            ServerName: '{{ ServerName }}'
            Port: '{{ Port }}'
            DatabaseName: '{{ DatabaseName }}'
            SslMode: null
            CertificateArn: '{{ CertificateArn }}'
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
AND Identifier = '<DataProviderArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.dms.data_providers
WHERE Identifier = '<DataProviderArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>data_providers</code> resource, the following permissions are required:

### Create
```json
dms:CreateDataProvider,
dms:ListDataProviders,
dms:DescribeDataProviders,
dms:AddTagsToResource,
dms:ListTagsForResource,
iam:GetRole,
iam:PassRole
```

### Read
```json
dms:ListDataProviders,
dms:DescribeDataProviders,
dms:ListTagsForResource
```

### Update
```json
dms:UpdateDataProvider,
dms:ModifyDataProvider,
dms:AddTagsToResource,
dms:RemoveTagsFromResource,
dms:ListTagsForResource
```

### Delete
```json
dms:DeleteDataProvider
```

### List
```json
dms:ListDataProviders,
dms:DescribeDataProviders,
dms:ListTagsForResource
```
