---
title: customdb_engine_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - customdb_engine_versions
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

Creates, updates, deletes or gets a <code>customdb_engine_version</code> resource or lists <code>customdb_engine_versions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>customdb_engine_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Creates a custom DB engine version (CEV).</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.rds.customdb_engine_versions" /></td></tr>
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
    "name": "database_installation_files_s3_bucket_name",
    "type": "string",
    "description": "The name of an Amazon S3 bucket that contains database installation files for your CEV. For example, a valid bucket name is <code>my-custom-installation-files</code>."
  },
  {
    "name": "database_installation_files_s3_prefix",
    "type": "string",
    "description": "The Amazon S3 directory that contains the database installation files for your CEV. For example, a valid bucket name is <code>123456789012/cev1</code>. If this setting isn't specified, no prefix is assumed."
  },
  {
    "name": "description",
    "type": "string",
    "description": "An optional description of your CEV."
  },
  {
    "name": "engine",
    "type": "string",
    "description": "<details><summary>The database engine to use for your custom engine version (CEV).</summary>Valid values:<br />+   <code>custom-oracle-ee</code><br />+   <code>custom-oracle-ee-cdb</code></details>"
  },
  {
    "name": "engine_version",
    "type": "string",
    "description": "<details><summary>The name of your CEV. The name format is <code>major version.customized_string</code>. For example, a valid CEV name is <code>19.my_cev1</code>. This setting is required for RDS Custom for Oracle, but optional for Amazon RDS. The combination of <code>Engine</code> and <code>EngineVersion</code> is unique per customer per Region.</summary><i>Constraints:</i> Minimum length is 1. Maximum length is 60.<br /><i>Pattern:</i><code>^[a-z0-9_.-]&#123;1,60$</code>&#125;</details>"
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "<details><summary>The AWS KMS key identifier for an encrypted CEV. A symmetric encryption KMS key is required for RDS Custom, but optional for Amazon RDS.</summary>If you have an existing symmetric encryption KMS key in your account, you can use it with RDS Custom. No further action is necessary. If you don't already have a symmetric encryption KMS key in your account, follow the instructions in <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html#create-symmetric-cmk\">Creating a symmetric encryption KMS key</a> in the <i>Key Management Service Developer Guide</i>.<br />You can choose the same symmetric encryption key when you create a CEV and a DB instance, or choose different keys.</details>"
  },
  {
    "name": "manifest",
    "type": "string",
    "description": "<details><summary>The CEV manifest, which is a JSON document that describes the installation .zip files stored in Amazon S3. Specify the name/value pairs in a file or a quoted string. RDS Custom applies the patches in the order in which they are listed.</summary>The following JSON fields are valid:<br />+ MediaImportTemplateVersion Version of the CEV manifest. The date is in the format YYYY-MM-DD. + databaseInstallationFileNames Ordered list of installation files for the CEV. + opatchFileNames Ordered list of OPatch installers used for the Oracle DB engine. + psuRuPatchFileNames The PSU and RU patches for this CEV. + OtherPatchFileNames The patches that are not in the list of PSU and RU patches. Amazon RDS applies these patches after applying the PSU and RU patches.<br />For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.preparing.manifest\">Creating the CEV manifest</a> in the <i>Amazon RDS User Guide</i>.</details>"
  },
  {
    "name": "db_engine_version_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "source_custom_db_engine_version_identifier",
    "type": "string",
    "description": "The ARN of a CEV to use as a source for creating a new CEV. You can specify a different Amazon Machine Imagine (AMI) by using either <code>Source</code> or <code>UseAwsProvidedLatestImage</code>. You can't specify a different JSON manifest when you specify <code>SourceCustomDbEngineVersionIdentifier</code>."
  },
  {
    "name": "use_aws_provided_latest_image",
    "type": "boolean",
    "description": "Specifies whether to use the latest service-provided Amazon Machine Image (AMI) for the CEV. If you specify <code>UseAwsProvidedLatestImage</code>, you can't also specify <code>ImageId</code>."
  },
  {
    "name": "image_id",
    "type": "string",
    "description": "A value that indicates the ID of the AMI."
  },
  {
    "name": "status",
    "type": "string",
    "description": "A value that indicates the status of a custom engine version (CEV)."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of tags. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html\">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>",
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
    "name": "engine",
    "type": "string",
    "description": "<details><summary>The database engine to use for your custom engine version (CEV).</summary>Valid values:<br />+   <code>custom-oracle-ee</code><br />+   <code>custom-oracle-ee-cdb</code></details>"
  },
  {
    "name": "engine_version",
    "type": "string",
    "description": "<details><summary>The name of your CEV. The name format is <code>major version.customized_string</code>. For example, a valid CEV name is <code>19.my_cev1</code>. This setting is required for RDS Custom for Oracle, but optional for Amazon RDS. The combination of <code>Engine</code> and <code>EngineVersion</code> is unique per customer per Region.</summary><i>Constraints:</i> Minimum length is 1. Maximum length is 60.<br /><i>Pattern:</i><code>^[a-z0-9_.-]&#123;1,60$</code>&#125;</details>"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-customdbengineversion.html"><code>AWS::RDS::CustomDBEngineVersion</code></a>.

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
    <td><code>customdb_engine_versions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Engine, EngineVersion, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>customdb_engine_versions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>customdb_engine_versions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>customdb_engine_versions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>customdb_engine_versions</code></td>
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

Gets all properties from an individual <code>customdb_engine_version</code>.
```sql
SELECT
  region,
  database_installation_files_s3_bucket_name,
  database_installation_files_s3_prefix,
  description,
  engine,
  engine_version,
  kms_key_id,
  manifest,
  db_engine_version_arn,
  source_custom_db_engine_version_identifier,
  use_aws_provided_latest_image,
  image_id,
  status,
  tags
FROM awscc.rds.customdb_engine_versions
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ engine }}|{{ engine_version }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>customdb_engine_versions</code> in a region.
```sql
SELECT
  region,
  engine,
  engine_version
FROM awscc.rds.customdb_engine_versions_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>customdb_engine_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.rds.customdb_engine_versions (
  Engine,
  EngineVersion,
  region
)
SELECT
  '{{ engine }}',
  '{{ engine_version }}',
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
INSERT INTO awscc.rds.customdb_engine_versions (
  DatabaseInstallationFilesS3BucketName,
  DatabaseInstallationFilesS3Prefix,
  Description,
  Engine,
  EngineVersion,
  KMSKeyId,
  Manifest,
  SourceCustomDbEngineVersionIdentifier,
  UseAwsProvidedLatestImage,
  ImageId,
  Status,
  Tags,
  region
)
SELECT
  '{{ database_installation_files_s3_bucket_name }}',
  '{{ database_installation_files_s3_prefix }}',
  '{{ description }}',
  '{{ engine }}',
  '{{ engine_version }}',
  '{{ kms_key_id }}',
  '{{ manifest }}',
  '{{ source_custom_db_engine_version_identifier }}',
  '{{ use_aws_provided_latest_image }}',
  '{{ image_id }}',
  '{{ status }}',
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
  - name: customdb_engine_version
    props:
      - name: database_installation_files_s3_bucket_name
        value: '{{ database_installation_files_s3_bucket_name }}'
      - name: database_installation_files_s3_prefix
        value: '{{ database_installation_files_s3_prefix }}'
      - name: description
        value: '{{ description }}'
      - name: engine
        value: '{{ engine }}'
      - name: engine_version
        value: '{{ engine_version }}'
      - name: kms_key_id
        value: '{{ kms_key_id }}'
      - name: manifest
        value: '{{ manifest }}'
      - name: source_custom_db_engine_version_identifier
        value: '{{ source_custom_db_engine_version_identifier }}'
      - name: use_aws_provided_latest_image
        value: '{{ use_aws_provided_latest_image }}'
      - name: image_id
        value: '{{ image_id }}'
      - name: status
        value: '{{ status }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>customdb_engine_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.rds.customdb_engine_versions
SET PatchDocument = string('{{ {
    "Description": description,
    "Status": status,
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ engine }}|{{ engine_version }}'
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
DELETE FROM awscc.rds.customdb_engine_versions
WHERE
  Identifier = '{{ engine }}|{{ engine_version }}' AND
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

To operate on the <code>customdb_engine_versions</code> resource, the following permissions are required:

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
ec2:CopySnapshot,
ec2:DeleteSnapshot,
ec2:DescribeSnapshots,
kms:CreateGrant,
kms:Decrypt,
kms:DescribeKey,
kms:GenerateDataKey,
kms:ReEncrypt,
mediaimport:CreateDatabaseBinarySnapshot,
rds:AddTagsToResource,
rds:CreateCustomDBEngineVersion,
rds:DescribeDBEngineVersions,
rds:ModifyCustomDBEngineVersion,
s3:CreateBucket,
s3:GetObject,
s3:GetObjectAcl,
s3:GetObjectTagging,
s3:ListBucket,
s3:PutBucketObjectLockConfiguration,
s3:PutBucketPolicy,
s3:PutBucketVersioning
```

</TabItem>
<TabItem value="read">

```json
rds:DescribeDBEngineVersions
```

</TabItem>
<TabItem value="update">

```json
rds:AddTagsToResource,
rds:DescribeDBEngineVersions,
rds:ModifyCustomDBEngineVersion,
rds:RemoveTagsFromResource
```

</TabItem>
<TabItem value="delete">

```json
rds:DeleteCustomDBEngineVersion,
rds:DescribeDBEngineVersions
```

</TabItem>
<TabItem value="list">

```json
rds:DescribeDBEngineVersions
```

</TabItem>
</Tabs>