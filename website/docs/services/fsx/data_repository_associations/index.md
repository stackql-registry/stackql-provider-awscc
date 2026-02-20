---
title: data_repository_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - data_repository_associations
  - fsx
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

Creates, updates, deletes or gets a <code>data_repository_association</code> resource or lists <code>data_repository_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>data_repository_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Creates an Amazon FSx for Lustre data repository association (DRA). A data repository association is a link between a directory on the file system and an Amazon S3 bucket or prefix. You can have a maximum of 8 data repository associations on a file system. Data repository associations are supported on all FSx for Lustre 2.12 and newer file systems, excluding &#96;&#96;scratch&#95;1&#96;&#96; deployment type. <br />Each data repository association must have a unique Amazon FSx file system directory and a unique S3 bucket or prefix associated with it. You can configure a data repository association for automatic import only, for automatic export only, or for both. To learn more about linking a data repository to your file system, see &#91;Linking your file system to an S3 bucket&#93;(https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html).</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.fsx.data_repository_associations" /></td></tr>
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
    "name": "association_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "resource_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "file_system_id",
    "type": "string",
    "description": "The ID of the file system on which the data repository association is configured."
  },
  {
    "name": "file_system_path",
    "type": "string",
    "description": "A path on the Amazon FSx for Lustre file system that points to a high-level directory (such as &#96;&#96;/ns1/&#96;&#96;) or subdirectory (such as &#96;&#96;/ns1/subdir/&#96;&#96;) that will be mapped 1-1 with &#96;&#96;DataRepositoryPath&#96;&#96;. The leading forward slash in the name is required. Two data repository associations cannot have overlapping file system paths. For example, if a data repository is associated with file system path &#96;&#96;/ns1/&#96;&#96;, then you cannot link another data repository with file system path &#96;&#96;/ns1/ns2&#96;&#96;.<br />This path specifies where in your file system files will be exported from or imported to. This file system directory can be linked to only one Amazon S3 bucket, and no other S3 bucket can be linked to the directory.<br />If you specify only a forward slash (&#96;&#96;/&#96;&#96;) as the file system path, you can link only one data repository to the file system. You can only specify \"/\" as the file system path for the first data repository associated with a file system."
  },
  {
    "name": "data_repository_path",
    "type": "string",
    "description": "The path to the Amazon S3 data repository that will be linked to the file system. The path can be an S3 bucket or prefix in the format &#96;&#96;s3://myBucket/myPrefix/&#96;&#96;. This path specifies where in the S3 data repository files will be imported from or exported to."
  },
  {
    "name": "batch_import_meta_data_on_create",
    "type": "boolean",
    "description": "A boolean flag indicating whether an import data repository task to import metadata should run after the data repository association is created. The task runs if this flag is set to &#96;&#96;true&#96;&#96;."
  },
  {
    "name": "imported_file_chunk_size",
    "type": "integer",
    "description": "For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system or cache.<br />The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500 GiB). Amazon S3 objects have a maximum size of 5 TB."
  },
  {
    "name": "s3",
    "type": "object",
    "description": "The configuration for an Amazon S3 data repository linked to an Amazon FSx Lustre file system with a data repository association. The configuration defines which file events (new, changed, or deleted files or directories) are automatically imported from the linked data repository to the file system or automatically exported from the file system to the data repository.",
    "children": [
      {
        "name": "auto_import_policy",
        "type": "object",
        "description": "Describes the data repository association's automatic import policy. The AutoImportPolicy defines how Amazon FSx keeps your file metadata and directory listings up to date by importing changes to your Amazon FSx for Lustre file system as you modify objects in a linked S3 bucket.<br />The &#96;&#96;AutoImportPolicy&#96;&#96; is only supported on Amazon FSx for Lustre file systems with a data repository association.",
        "children": [
          {
            "name": "events",
            "type": "array",
            "description": "The &#96;&#96;AutoImportPolicy&#96;&#96; can have the following event values:<br />+ &#96;&#96;NEW&#96;&#96; - Amazon FSx automatically imports metadata of files added to the linked S3 bucket that do not currently exist in the FSx file system.<br />+ &#96;&#96;CHANGED&#96;&#96; - Amazon FSx automatically updates file metadata and invalidates existing file content on the file system as files change in the data repository.<br />+ &#96;&#96;DELETED&#96;&#96; - Amazon FSx automatically deletes files on the file system as corresponding files are deleted in the data repository.<br /><br />You can define any combination of event types for your &#96;&#96;AutoImportPolicy&#96;&#96;."
          }
        ]
      },
      {
        "name": "auto_export_policy",
        "type": "object",
        "description": "Describes a data repository association's automatic export policy. The &#96;&#96;AutoExportPolicy&#96;&#96; defines the types of updated objects on the file system that will be automatically exported to the data repository. As you create, modify, or delete files, Amazon FSx for Lustre automatically exports the defined changes asynchronously once your application finishes modifying the file.<br />The &#96;&#96;AutoExportPolicy&#96;&#96; is only supported on Amazon FSx for Lustre file systems with a data repository association.",
        "children": [
          {
            "name": "events",
            "type": "array",
            "description": "The &#96;&#96;AutoExportPolicy&#96;&#96; can have the following event values:<br />+ &#96;&#96;NEW&#96;&#96; - New files and directories are automatically exported to the data repository as they are added to the file system.<br />+ &#96;&#96;CHANGED&#96;&#96; - Changes to files and directories on the file system are automatically exported to the data repository.<br />+ &#96;&#96;DELETED&#96;&#96; - Files and directories are automatically deleted on the data repository when they are deleted on the file system.<br /><br />You can define any combination of event types for your &#96;&#96;AutoExportPolicy&#96;&#96;."
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.<br />For more information, see &#91;Tag&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "A value that specifies the &#96;&#96;TagKey&#96;&#96;, the name of the tag. Tag keys must be unique for the resource to which they are attached."
      },
      {
        "name": "value",
        "type": "string",
        "description": "A value that specifies the &#96;&#96;TagValue&#96;&#96;, the value assigned to the corresponding tag key. Tag values can be null and don't have to be unique in a tag set. For example, you can have a key-value pair in a tag set of &#96;&#96;finances : April&#96;&#96; and also of &#96;&#96;payroll : April&#96;&#96;."
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
    "name": "association_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-datarepositoryassociation.html"><code>AWS::FSx::DataRepositoryAssociation</code></a>.

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
    <td><code>data_repository_associations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="FileSystemId, FileSystemPath, DataRepositoryPath, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>data_repository_associations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>data_repository_associations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>data_repository_associations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>data_repository_associations</code></td>
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

Gets all properties from an individual <code>data_repository_association</code>.
```sql
SELECT
region,
association_id,
resource_arn,
file_system_id,
file_system_path,
data_repository_path,
batch_import_meta_data_on_create,
imported_file_chunk_size,
s3,
tags
FROM awscc.fsx.data_repository_associations
WHERE region = 'us-east-1' AND Identifier = '<AssociationId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>data_repository_associations</code> in a region.
```sql
SELECT
region,
association_id
FROM awscc.fsx.data_repository_associations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>data_repository_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.fsx.data_repository_associations (
 FileSystemId,
 FileSystemPath,
 DataRepositoryPath,
 region
)
SELECT 
'{{ FileSystemId }}',
 '{{ FileSystemPath }}',
 '{{ DataRepositoryPath }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.fsx.data_repository_associations (
 FileSystemId,
 FileSystemPath,
 DataRepositoryPath,
 BatchImportMetaDataOnCreate,
 ImportedFileChunkSize,
 S3,
 Tags,
 region
)
SELECT 
 '{{ FileSystemId }}',
 '{{ FileSystemPath }}',
 '{{ DataRepositoryPath }}',
 '{{ BatchImportMetaDataOnCreate }}',
 '{{ ImportedFileChunkSize }}',
 '{{ S3 }}',
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
  - name: data_repository_association
    props:
      - name: FileSystemId
        value: '{{ FileSystemId }}'
      - name: FileSystemPath
        value: '{{ FileSystemPath }}'
      - name: DataRepositoryPath
        value: '{{ DataRepositoryPath }}'
      - name: BatchImportMetaDataOnCreate
        value: '{{ BatchImportMetaDataOnCreate }}'
      - name: ImportedFileChunkSize
        value: '{{ ImportedFileChunkSize }}'
      - name: S3
        value:
          AutoImportPolicy:
            Events:
              - '{{ Events[0] }}'
          AutoExportPolicy:
            Events: null
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>data_repository_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.fsx.data_repository_associations
SET PatchDocument = string('{{ {
    "ImportedFileChunkSize": imported_file_chunk_size,
    "S3": s3,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<AssociationId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.fsx.data_repository_associations
WHERE Identifier = '<AssociationId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>data_repository_associations</code> resource, the following permissions are required:

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
fsx:CreateDataRepositoryAssociation,
fsx:DescribeDataRepositoryAssociations,
fsx:TagResource,
s3:ListBucket,
s3:GetBucketPolicy,
s3:PutBucketPolicy,
iam:CreateServiceLinkedRole,
iam:PutRolePolicy
```

</TabItem>
<TabItem value="read">

```json
fsx:DescribeDataRepositoryAssociations
```

</TabItem>
<TabItem value="update">

```json
fsx:DescribeDataRepositoryAssociations,
fsx:UpdateDataRepositoryAssociation,
fsx:TagResource,
fsx:UntagResource,
s3:ListBucket,
s3:GetBucketPolicy,
s3:PutBucketPolicy,
iam:CreateServiceLinkedRole,
iam:PutRolePolicy
```

</TabItem>
<TabItem value="delete">

```json
fsx:DescribeDataRepositoryAssociations,
fsx:DeleteDataRepositoryAssociation
```

</TabItem>
<TabItem value="list">

```json
fsx:DescribeDataRepositoryAssociations
```

</TabItem>
</Tabs>