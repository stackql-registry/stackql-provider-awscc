---
title: databases
hide_title: false
hide_table_of_contents: false
keywords:
  - databases
  - glue
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

Creates, updates, deletes or gets a <code>database</code> resource or lists <code>databases</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>databases</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Glue::Database</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.glue.databases" /></td></tr>
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
    "name": "catalog_id",
    "type": "string",
    "description": "The AWS account ID for the account in which to create the catalog object."
  },
  {
    "name": "database_input",
    "type": "object",
    "description": "The metadata for the database.",
    "children": [
      {
        "name": "location_uri",
        "type": "string",
        "description": "The location of the database (for example, an HDFS path)."
      },
      {
        "name": "create_table_default_permissions",
        "type": "array",
        "description": "Creates a set of default permissions on the table for principals. Used by AWS Lake Formation. Not used in the normal course of AWS Glue operations.",
        "children": [
          {
            "name": "permissions",
            "type": "array",
            "description": "The permissions that are granted to the principal."
          },
          {
            "name": "principal",
            "type": "object",
            "description": "The principal who is granted permissions.",
            "children": [
              {
                "name": "data_lake_principal_identifier",
                "type": "string",
                "description": "An identifier for the AWS Lake Formation principal."
              }
            ]
          }
        ]
      },
      {
        "name": "description",
        "type": "string",
        "description": "A description of the database."
      },
      {
        "name": "parameters",
        "type": "object",
        "description": "These key-value pairs define parameters and properties of the database."
      },
      {
        "name": "target_database",
        "type": "object",
        "description": "A DatabaseIdentifier structure that describes a target database for resource linking.",
        "children": [
          {
            "name": "database_name",
            "type": "string",
            "description": "The name of the catalog database."
          },
          {
            "name": "region",
            "type": "string",
            "description": "Region of the target database."
          },
          {
            "name": "catalog_id",
            "type": "string",
            "description": "The ID of the Data Catalog in which the database resides."
          }
        ]
      },
      {
        "name": "federated_database",
        "type": "object",
        "description": "A FederatedDatabase structure that references an entity outside the AWS Glue Data Catalog.",
        "children": [
          {
            "name": "connection_name",
            "type": "string",
            "description": "The name of the connection to the external metastore."
          },
          {
            "name": "identifier",
            "type": "string",
            "description": "A unique identifier for the federated database."
          }
        ]
      },
      {
        "name": "name",
        "type": "string",
        "description": "The name of the database. For hive compatibility, this is folded to lowercase when it is stored."
      }
    ]
  },
  {
    "name": "database_name",
    "type": "string",
    "description": "The name of the database. For hive compatibility, this is folded to lowercase when it is store."
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
    "name": "database_name",
    "type": "string",
    "description": "The name of the database. For hive compatibility, this is folded to lowercase when it is store."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-database.html"><code>AWS::Glue::Database</code></a>.

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
    <td><code>databases</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DatabaseInput, CatalogId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>databases</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>databases</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>databases_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>databases</code></td>
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

Gets all properties from an individual <code>database</code>.
```sql
SELECT
region,
catalog_id,
database_input,
database_name
FROM awscc.glue.databases
WHERE region = 'us-east-1' AND Identifier = '{{ database_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>databases</code> in a region.
```sql
SELECT
region,
database_name
FROM awscc.glue.databases_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>database</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.glue.databases (
 CatalogId,
 DatabaseInput,
 region
)
SELECT
'{{ catalog_id }}',
 '{{ database_input }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.glue.databases (
 CatalogId,
 DatabaseInput,
 DatabaseName,
 region
)
SELECT
 '{{ catalog_id }}',
 '{{ database_input }}',
 '{{ database_name }}',
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
  - name: database
    props:
      - name: catalog_id
        value: '{{ catalog_id }}'
      - name: database_input
        value:
          location_uri: '{{ location_uri }}'
          create_table_default_permissions:
            - permissions:
                - '{{ permissions[0] }}'
              principal:
                data_lake_principal_identifier: '{{ data_lake_principal_identifier }}'
          description: '{{ description }}'
          parameters: {}
          target_database:
            database_name: '{{ database_name }}'
            region: '{{ region }}'
            catalog_id: '{{ catalog_id }}'
          federated_database:
            connection_name: '{{ connection_name }}'
            identifier: '{{ identifier }}'
          name: '{{ name }}'
      - name: database_name
        value: '{{ database_name }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>database</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.glue.databases
SET PatchDocument = string('{{ {
    "CatalogId": catalog_id,
    "DatabaseInput": database_input
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ database_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.glue.databases
WHERE Identifier = '{{ database_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>databases</code> resource, the following permissions are required:

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
glue:CreateDatabase,
glue:GetDatabase,
glue:PassConnection,
glue:CreateConnection,
lakeformation:ListResources,
lakeformation:DescribeResource,
lakeformation:DescribeLakeFormationIdentityCenterConfiguration
```

</TabItem>
<TabItem value="read">

```json
glue:GetDatabase,
glue:GetConnection,
lakeformation:ListResources,
lakeformation:DescribeResource,
lakeformation:DescribeLakeFormationIdentityCenterConfiguration
```

</TabItem>
<TabItem value="update">

```json
glue:UpdateDatabase,
glue:UpdateConnection,
lakeformation:ListResources,
lakeformation:DescribeResource,
lakeformation:DescribeLakeFormationIdentityCenterConfiguration
```

</TabItem>
<TabItem value="delete">

```json
glue:DeleteDatabase,
glue:GetDatabase,
glue:DeleteConnection,
glue:GetConnection,
lakeformation:ListResources,
lakeformation:DescribeResource,
lakeformation:DescribeLakeFormationIdentityCenterConfiguration
```

</TabItem>
<TabItem value="list">

```json
glue:GetDatabases,
lakeformation:ListResources,
lakeformation:DescribeResource,
lakeformation:DescribeLakeFormationIdentityCenterConfiguration
```

</TabItem>
</Tabs>