---
title: data_catalogs
hide_title: false
hide_table_of_contents: false
keywords:
  - data_catalogs
  - athena
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

Creates, updates, deletes or gets a <code>data_catalog</code> resource or lists <code>data_catalogs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>data_catalogs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::Athena::DataCatalog</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.athena.data_catalogs" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": "The name of the data catalog to create. The catalog name must be unique for the AWS account and can use a maximum of 128 alphanumeric, underscore, at sign, or hyphen characters."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description of the data catalog to be created."
  },
  {
    "name": "parameters",
    "type": "object",
    "description": "Specifies the Lambda function or functions to use for creating the data catalog. This is a mapping whose values depend on the catalog type."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of comma separated tags to add to the data catalog that is created.",
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
    "name": "type",
    "type": "string",
    "description": "The type of data catalog to create: LAMBDA for a federated catalog, GLUE for AWS Glue Catalog, or HIVE for an external hive metastore. FEDERATED is a federated catalog for which Athena creates the connection and the Lambda function for you based on the parameters that you pass."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of the creation or deletion of the data catalog. LAMBDA, GLUE, and HIVE data catalog types are created synchronously. Their status is either CREATE&#95;COMPLETE or CREATE&#95;FAILED. The FEDERATED data catalog type is created asynchronously."
  },
  {
    "name": "connection_type",
    "type": "string",
    "description": "The type of connection for a FEDERATED data catalog"
  },
  {
    "name": "error",
    "type": "string",
    "description": "Text of the error that occurred during data catalog creation or deletion."
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
    "name": "name",
    "type": "string",
    "description": "The name of the data catalog to create. The catalog name must be unique for the AWS account and can use a maximum of 128 alphanumeric, underscore, at sign, or hyphen characters."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-datacatalog.html"><code>AWS::Athena::DataCatalog</code></a>.

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
    <td><code>data_catalogs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, Type, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>data_catalogs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>data_catalogs</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>data_catalogs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>data_catalogs</code></td>
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

Gets all properties from an individual <code>data_catalog</code>.
```sql
SELECT
region,
name,
description,
parameters,
tags,
type,
status,
connection_type,
error
FROM awscc.athena.data_catalogs
WHERE region = 'us-east-1' AND Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>data_catalogs</code> in a region.
```sql
SELECT
region,
name
FROM awscc.athena.data_catalogs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>data_catalog</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.athena.data_catalogs (
 Name,
 Type,
 region
)
SELECT 
'{{ Name }}',
 '{{ Type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.athena.data_catalogs (
 Name,
 Description,
 Parameters,
 Tags,
 Type,
 Status,
 ConnectionType,
 Error,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Description }}',
 '{{ Parameters }}',
 '{{ Tags }}',
 '{{ Type }}',
 '{{ Status }}',
 '{{ ConnectionType }}',
 '{{ Error }}',
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
  - name: data_catalog
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: Parameters
        value: {}
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: Type
        value: '{{ Type }}'
      - name: Status
        value: '{{ Status }}'
      - name: ConnectionType
        value: '{{ ConnectionType }}'
      - name: Error
        value: '{{ Error }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.athena.data_catalogs
SET PatchDocument = string('{{ {
    "Description": description,
    "Parameters": parameters,
    "Tags": tags,
    "Type": type,
    "Status": status,
    "ConnectionType": connection_type,
    "Error": error
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.athena.data_catalogs
WHERE Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>data_catalogs</code> resource, the following permissions are required:

### Create
```json
athena:CreateDataCatalog,
athena:GetDataCatalog,
athena:TagResource,
s3:ListBucket,
glue:TagResource,
glue:CreateConnection,
glue:DeleteConnection,
glue:UpdateConnection,
serverlessrepo:CreateCloudFormationTemplate,
serverlessrepo:GetCloudFormationTemplate,
cloudformation:CreateStack,
cloudformation:DeleteStack,
cloudformation:DescribeStacks,
cloudformation:CreateChangeSet,
iam:AttachRolePolicy,
iam:DetachRolePolicy,
iam:DeleteRolePolicy,
iam:PutRolePolicy,
iam:CreateRole,
iam:TagRole,
iam:DeleteRole,
iam:GetRole,
iam:GetRolePolicy,
iam:PassRole,
lambda:DeleteFunction,
lambda:CreateFunction,
lambda:TagResource,
lambda:GetFunction,
ec2:DescribeSecurityGroups,
ec2:DescribeSubnets,
ec2:DescribeVpcs,
secretsmanager:ListSecrets,
glue:GetConnection,
ecr:BatchGetImage,
ecr:GetDownloadUrlForLayer
```

### Read
```json
athena:GetDataCatalog,
athena:ListTagsForResource
```

### Update
```json
athena:UpdateDataCatalog,
athena:TagResource,
athena:GetDataCatalog,
athena:UntagResource,
athena:ListTagsForResource
```

### Delete
```json
athena:DeleteDataCatalog,
athena:GetDataCatalog,
glue:GetConnection,
glue:UpdateConnection,
cloudformation:DeleteStack,
cloudformation:DescribeStacks,
lambda:DeleteFunction,
iam:DeleteRole,
iam:DeleteRolePolicy,
iam:DetachRolePolicy,
s3:ListBucket
```

### List
```json
athena:ListDataCatalogs
```
