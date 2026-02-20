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
    "description": "The name of an Amazon S3 bucket that contains database installation files for your CEV. For example, a valid bucket name is &#96;&#96;my-custom-installation-files&#96;&#96;."
  },
  {
    "name": "database_installation_files_s3_prefix",
    "type": "string",
    "description": "The Amazon S3 directory that contains the database installation files for your CEV. For example, a valid bucket name is &#96;&#96;123456789012/cev1&#96;&#96;. If this setting isn't specified, no prefix is assumed."
  },
  {
    "name": "description",
    "type": "string",
    "description": "An optional description of your CEV."
  },
  {
    "name": "engine",
    "type": "string",
    "description": "The database engine to use for your custom engine version (CEV).<br />Valid values:<br />+ &#96;&#96;custom-oracle-ee&#96;&#96; <br />+ &#96;&#96;custom-oracle-ee-cdb&#96;&#96;"
  },
  {
    "name": "engine_version",
    "type": "string",
    "description": "The name of your CEV. The name format is &#96;&#96;major version.customized&#95;string&#96;&#96;. For example, a valid CEV name is &#96;&#96;19.my&#95;cev1&#96;&#96;. This setting is required for RDS Custom for Oracle, but optional for Amazon RDS. The combination of &#96;&#96;Engine&#96;&#96; and &#96;&#96;EngineVersion&#96;&#96; is unique per customer per Region.<br />&#42;Constraints:&#42; Minimum length is 1. Maximum length is 60.<br />&#42;Pattern:&#42;&#96;&#96;^&#91;a-z0-9&#95;.-&#93;&#123;1,60$&#96;&#96;&#125;"
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "The AWS KMS key identifier for an encrypted CEV. A symmetric encryption KMS key is required for RDS Custom, but optional for Amazon RDS.<br />If you have an existing symmetric encryption KMS key in your account, you can use it with RDS Custom. No further action is necessary. If you don't already have a symmetric encryption KMS key in your account, follow the instructions in &#91;Creating a symmetric encryption KMS key&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html#create-symmetric-cmk) in the &#42;Key Management Service Developer Guide&#42;.<br />You can choose the same symmetric encryption key when you create a CEV and a DB instance, or choose different keys."
  },
  {
    "name": "manifest",
    "type": "string",
    "description": "The CEV manifest, which is a JSON document that describes the installation .zip files stored in Amazon S3. Specify the name/value pairs in a file or a quoted string. RDS Custom applies the patches in the order in which they are listed.<br />The following JSON fields are valid:<br />+ MediaImportTemplateVersion Version of the CEV manifest. The date is in the format YYYY-MM-DD. + databaseInstallationFileNames Ordered list of installation files for the CEV. + opatchFileNames Ordered list of OPatch installers used for the Oracle DB engine. + psuRuPatchFileNames The PSU and RU patches for this CEV. + OtherPatchFileNames The patches that are not in the list of PSU and RU patches. Amazon RDS applies these patches after applying the PSU and RU patches. <br />For more information, see &#91;Creating the CEV manifest&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.preparing.manifest) in the &#42;Amazon RDS User Guide&#42;."
  },
  {
    "name": "db_engine_version_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "source_custom_db_engine_version_identifier",
    "type": "string",
    "description": "The ARN of a CEV to use as a source for creating a new CEV. You can specify a different Amazon Machine Imagine (AMI) by using either &#96;&#96;Source&#96;&#96; or &#96;&#96;UseAwsProvidedLatestImage&#96;&#96;. You can't specify a different JSON manifest when you specify &#96;&#96;SourceCustomDbEngineVersionIdentifier&#96;&#96;."
  },
  {
    "name": "use_aws_provided_latest_image",
    "type": "boolean",
    "description": "Specifies whether to use the latest service-provided Amazon Machine Image (AMI) for the CEV. If you specify &#96;&#96;UseAwsProvidedLatestImage&#96;&#96;, you can't also specify &#96;&#96;ImageId&#96;&#96;."
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
    "description": "A list of tags. For more information, see &#91;Tagging Amazon RDS Resources&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER&#95;Tagging.html) in the &#42;Amazon RDS User Guide.&#42;",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with &#96;&#96;aws:&#96;&#96; or &#96;&#96;rds:&#96;&#96;. The string can only contain only the set of Unicode letters, digits, white-space, '&#95;', '.', ':', '/', '=', '+', '-', '@' (Java regex: \"^(&#91;\\\\p&#123;L&#125;\\\\p&#123;Z&#125;\\\\p&#123;N&#125;&#95;.:/=+\\\\-@&#93;&#42;)$\")."
      },
      {
        "name": "value",
        "type": "string",
        "description": "A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with &#96;&#96;aws:&#96;&#96; or &#96;&#96;rds:&#96;&#96;. The string can only contain only the set of Unicode letters, digits, white-space, '&#95;', '.', ':', '/', '=', '+', '-', '@' (Java regex: \"^(&#91;\\\\p&#123;L&#125;\\\\p&#123;Z&#125;\\\\p&#123;N&#125;&#95;.:/=+\\\\-@&#93;&#42;)$\")."
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
    "description": "The database engine to use for your custom engine version (CEV).<br />Valid values:<br />+ &#96;&#96;custom-oracle-ee&#96;&#96; <br />+ &#96;&#96;custom-oracle-ee-cdb&#96;&#96;"
  },
  {
    "name": "engine_version",
    "type": "string",
    "description": "The name of your CEV. The name format is &#96;&#96;major version.customized&#95;string&#96;&#96;. For example, a valid CEV name is &#96;&#96;19.my&#95;cev1&#96;&#96;. This setting is required for RDS Custom for Oracle, but optional for Amazon RDS. The combination of &#96;&#96;Engine&#96;&#96; and &#96;&#96;EngineVersion&#96;&#96; is unique per customer per Region.<br />&#42;Constraints:&#42; Minimum length is 1. Maximum length is 60.<br />&#42;Pattern:&#42;&#96;&#96;^&#91;a-z0-9&#95;.-&#93;&#123;1,60$&#96;&#96;&#125;"
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
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>customdb_engine_versions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
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
WHERE region = 'us-east-1' AND data__Identifier = '<Engine>|<EngineVersion>';
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
WHERE region = 'us-east-1';
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
'{{ Engine }}',
 '{{ EngineVersion }}',
'{{ region }}';
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
 '{{ DatabaseInstallationFilesS3BucketName }}',
 '{{ DatabaseInstallationFilesS3Prefix }}',
 '{{ Description }}',
 '{{ Engine }}',
 '{{ EngineVersion }}',
 '{{ KMSKeyId }}',
 '{{ Manifest }}',
 '{{ SourceCustomDbEngineVersionIdentifier }}',
 '{{ UseAwsProvidedLatestImage }}',
 '{{ ImageId }}',
 '{{ Status }}',
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
  - name: customdb_engine_version
    props:
      - name: DatabaseInstallationFilesS3BucketName
        value: '{{ DatabaseInstallationFilesS3BucketName }}'
      - name: DatabaseInstallationFilesS3Prefix
        value: '{{ DatabaseInstallationFilesS3Prefix }}'
      - name: Description
        value: '{{ Description }}'
      - name: Engine
        value: '{{ Engine }}'
      - name: EngineVersion
        value: '{{ EngineVersion }}'
      - name: KMSKeyId
        value: '{{ KMSKeyId }}'
      - name: Manifest
        value: '{{ Manifest }}'
      - name: SourceCustomDbEngineVersionIdentifier
        value: '{{ SourceCustomDbEngineVersionIdentifier }}'
      - name: UseAwsProvidedLatestImage
        value: '{{ UseAwsProvidedLatestImage }}'
      - name: ImageId
        value: '{{ ImageId }}'
      - name: Status
        value: '{{ Status }}'
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
UPDATE awscc.rds.customdb_engine_versions
SET data__PatchDocument = string('{{ {
    "Description": description,
    "Status": status,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Engine>|<EngineVersion>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.rds.customdb_engine_versions
WHERE data__Identifier = '<Engine|EngineVersion>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>customdb_engine_versions</code> resource, the following permissions are required:

### Create
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

### Read
```json
rds:DescribeDBEngineVersions
```

### Update
```json
rds:AddTagsToResource,
rds:DescribeDBEngineVersions,
rds:ModifyCustomDBEngineVersion,
rds:RemoveTagsFromResource
```

### Delete
```json
rds:DeleteCustomDBEngineVersion,
rds:DescribeDBEngineVersions
```

### List
```json
rds:DescribeDBEngineVersions
```
