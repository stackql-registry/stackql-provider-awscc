---
title: principal_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - principal_permissions
  - lakeformation
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

Creates, updates, deletes or gets a <code>principal_permission</code> resource or lists <code>principal_permissions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>principal_permissions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The <code>AWS::LakeFormation::PrincipalPermissions</code> resource represents the permissions that a principal has on a GLUDC resource (such as GLUlong databases or GLUlong tables). When you create a <code>PrincipalPermissions</code> resource, the permissions are granted via the LFlong<code>GrantPermissions</code> API operation. When you delete a <code>PrincipalPermissions</code> resource, the permissions on principal-resource pair are revoked via the LFlong<code>RevokePermissions</code> API operation.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lakeformation.principal_permissions" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "catalog",
    "type": "string",
    "description": "The identifier for the GLUDC. By default, the account ID. The GLUDC is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment."
  },
  {
    "name": "principal",
    "type": "object",
    "description": "The principal to be granted a permission.",
    "children": [
      {
        "name": "data_lake_principal_identifier",
        "type": "string",
        "description": "An identifier for the LFlong principal."
      }
    ]
  },
  {
    "name": "resource",
    "type": "object",
    "description": "The resource to be granted or revoked permissions.",
    "children": [
      {
        "name": "catalog",
        "type": "object",
        "description": "The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your LFlong environment."
      },
      {
        "name": "database",
        "type": "object",
        "description": "The database for the resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database permissions to a principal.",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": "The name of the database resource. Unique to the Data Catalog."
          }
        ]
      },
      {
        "name": "table",
        "type": "object",
        "description": "The table for the resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.",
        "children": [
          {
            "name": "database_name",
            "type": "string",
            "description": "The name of the database for the table. Unique to a Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal."
          },
          {
            "name": "table_wildcard",
            "type": "object",
            "description": "<details><summary>A wildcard object representing every table under a database.</summary>At least one of <code>TableResource$Name</code> or <code>TableResource$TableWildcard</code> is required.</details>"
          }
        ]
      },
      {
        "name": "table_with_columns",
        "type": "object",
        "description": "The table with columns for the resource. A principal with permissions to this resource can select metadata from the columns of a table in the Data Catalog and the underlying data in Amazon S3.",
        "children": [
          {
            "name": "database_name",
            "type": "string",
            "description": "The name of the database for the table with columns resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal."
          },
          {
            "name": "column_names",
            "type": "array",
            "description": "The list of column names for the table. At least one of <code>ColumnNames</code> or <code>ColumnWildcard</code> is required."
          },
          {
            "name": "column_wildcard",
            "type": "object",
            "description": "A wildcard specified by a <code>ColumnWildcard</code> object. At least one of <code>ColumnNames</code> or <code>ColumnWildcard</code> is required."
          }
        ]
      },
      {
        "name": "data_location",
        "type": "object",
        "description": "The location of an Amazon S3 path where permissions are granted or revoked.",
        "children": [
          {
            "name": "resource_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) that uniquely identifies the data location resource."
          }
        ]
      },
      {
        "name": "data_cells_filter",
        "type": "object",
        "description": "A data cell filter.",
        "children": [
          {
            "name": "database_name",
            "type": "string",
            "description": "A database in the GLUDC."
          }
        ]
      },
      {
        "name": "lf_tag",
        "type": "object",
        "description": "The LF-tag key and values attached to a resource.",
        "children": [
          {
            "name": "tag_key",
            "type": "string",
            "description": "The key-name for the LF-tag."
          },
          {
            "name": "tag_values",
            "type": "array",
            "description": "A list of possible values for the corresponding <code>TagKey</code> of an LF-tag key-value pair."
          }
        ]
      },
      {
        "name": "lf_tag_policy",
        "type": "object",
        "description": "A list of LF-tag conditions that define a resource's LF-tag policy.",
        "children": [
          {
            "name": "resource_type",
            "type": "string",
            "description": "The resource type for which the LF-tag policy applies."
          },
          {
            "name": "expression",
            "type": "array",
            "description": "A list of LF-tag conditions that apply to the resource's LF-tag policy.",
            "children": [
              {
                "name": "tag_key",
                "type": "string",
                "description": "The key-name for the LF-tag."
              },
              {
                "name": "tag_values",
                "type": "array",
                "description": "A list of possible values of the corresponding <code>TagKey</code> of an LF-tag key-value pair."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "permissions",
    "type": "array",
    "description": "The permissions granted or revoked."
  },
  {
    "name": "principal_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "resource_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-principalpermission.html"><code>AWS::LakeFormation::PrincipalPermissions</code></a>.

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
    <td><CopyableCode code="Principal, Resource, Permissions, PermissionsWithGrantOption, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>principal_permission</code>.
```sql
SELECT
  region,
  catalog,
  principal,
  resource,
  permissions,
  permissions_with_grant_option,
  principal_identifier,
  resource_identifier
FROM awscc.lakeformation.principal_permissions
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ principal_identifier }}|{{ resource_identifier }}';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>principal_permission</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.lakeformation.principal_permissions (
  Principal,
  Resource,
  Permissions,
  PermissionsWithGrantOption,
  region
)
SELECT
  '{{ principal }}',
  '{{ resource }}',
  '{{ permissions }}',
  '{{ permissions_with_grant_option }}',
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
INSERT INTO awscc.lakeformation.principal_permissions (
  Catalog,
  Principal,
  Resource,
  Permissions,
  PermissionsWithGrantOption,
  region
)
SELECT
  '{{ catalog }}',
  '{{ principal }}',
  '{{ resource }}',
  '{{ permissions }}',
  '{{ permissions_with_grant_option }}',
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
  - name: principal_permission
    props:
      - name: catalog
        value: '{{ catalog }}'
      - name: principal
        value:
          data_lake_principal_identifier: '{{ data_lake_principal_identifier }}'
      - name: resource
        value:
          catalog: {}
          database:
            catalog_id: null
            name: '{{ name }}'
          table:
            catalog_id: null
            database_name: null
            name: null
            table_wildcard: {}
          table_with_columns:
            catalog_id: null
            database_name: null
            name: null
            column_names:
              - null
            column_wildcard:
              excluded_column_names: null
          data_location:
            catalog_id: null
            resource_arn: '{{ resource_arn }}'
          data_cells_filter:
            table_catalog_id: null
            database_name: null
            table_name: null
            name: null
          lf_tag:
            catalog_id: null
            tag_key: null
            tag_values:
              - '{{ tag_values[0] }}'
          lf_tag_policy:
            catalog_id: null
            resource_type: '{{ resource_type }}'
            expression:
              - tag_key: '{{ tag_key }}'
                tag_values: null
      - name: permissions
        value:
          - '{{ permissions[0] }}'
      - name: permissions_with_grant_option
        value: null`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.lakeformation.principal_permissions
WHERE
  Identifier = '{{ principal_identifier }}|{{ resource_identifier }}' AND
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

To operate on the <code>principal_permissions</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="create">

```json
lakeformation:GrantPermissions,
lakeformation:ListPermissions,
glue:GetTable,
glue:GetDatabase
```

</TabItem>
<TabItem value="read">

```json
lakeformation:ListPermissions,
glue:GetTable,
glue:GetDatabase
```

</TabItem>
<TabItem value="delete">

```json
lakeformation:RevokePermissions,
lakeformation:ListPermissions,
glue:GetTable,
glue:GetDatabase
```

</TabItem>
</Tabs>