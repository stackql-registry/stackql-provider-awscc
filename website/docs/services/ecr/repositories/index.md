---
title: repositories
hide_title: false
hide_table_of_contents: false
keywords:
  - repositories
  - ecr
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

Creates, updates, deletes or gets a <code>repository</code> resource or lists <code>repositories</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>repositories</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ECR::Repository&#96;&#96; resource specifies an Amazon Elastic Container Registry (Amazon ECR) repository, where users can push and pull Docker images, Open Container Initiative (OCI) images, and OCI compatible artifacts. For more information, see &#91;Amazon ECR private repositories&#93;(https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html) in the &#42;Amazon ECR User Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ecr.repositories" /></td></tr>
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
    "name": "empty_on_delete",
    "type": "boolean",
    "description": "If true, deleting the repository force deletes the contents of the repository. If false, the repository must be empty before attempting to delete it."
  },
  {
    "name": "lifecycle_policy",
    "type": "object",
    "description": "Creates or updates a lifecycle policy. For information about lifecycle policy syntax, see &#91;Lifecycle policy template&#93;(https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html).",
    "children": [
      {
        "name": "lifecycle_policy_text",
        "type": "string",
        "description": "The JSON repository policy text to apply to the repository."
      },
      {
        "name": "registry_id",
        "type": "string",
        "description": "The AWS account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed."
      }
    ]
  },
  {
    "name": "repository_name",
    "type": "string",
    "description": "The name to use for the repository. The repository name may be specified on its own (such as &#96;&#96;nginx-web-app&#96;&#96;) or it can be prepended with a namespace to group the repository into a category (such as &#96;&#96;project-a/nginx-web-app&#96;&#96;). If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the repository name. For more information, see &#91;Name type&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).<br />The repository name must start with a letter and can only contain lowercase letters, numbers, hyphens, underscores, and forward slashes.<br />If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name."
  },
  {
    "name": "repository_policy_text",
    "type": "object",
    "description": "The JSON repository policy text to apply to the repository. For more information, see &#91;Amazon ECR repository policies&#93;(https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policy-examples.html) in the &#42;Amazon Elastic Container Registry User Guide&#42;."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "One part of a key-value pair that make up a tag. A &#96;&#96;key&#96;&#96; is a general label that acts like a category for more specific tag values."
      },
      {
        "name": "value",
        "type": "string",
        "description": "A &#96;&#96;value&#96;&#96; acts as a descriptor within a tag category (key)."
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "repository_uri",
    "type": "string",
    "description": ""
  },
  {
    "name": "image_tag_mutability",
    "type": "string",
    "description": "The tag mutability setting for the repository. If this parameter is omitted, the default setting of &#96;&#96;MUTABLE&#96;&#96; will be used which will allow image tags to be overwritten. If &#96;&#96;IMMUTABLE&#96;&#96; is specified, all image tags within the repository will be immutable which will prevent them from being overwritten."
  },
  {
    "name": "image_tag_mutability_exclusion_filters",
    "type": "array",
    "description": "The image tag mutability exclusion filters associated with the repository. These filters specify which image tags can override the repository's default image tag mutability setting.",
    "children": [
      {
        "name": "image_tag_mutability_exclusion_filter_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "image_tag_mutability_exclusion_filter_value",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "image_scanning_configuration",
    "type": "object",
    "description": "The image scanning configuration for the repository. This determines whether images are scanned for known vulnerabilities after being pushed to the repository.",
    "children": [
      {
        "name": "scan_on_push",
        "type": "boolean",
        "description": "The setting that determines whether images are scanned after being pushed to a repository. If set to &#96;&#96;true&#96;&#96;, images will be scanned after being pushed. If this parameter is not specified, it will default to &#96;&#96;false&#96;&#96; and images will not be scanned unless a scan is manually started."
      }
    ]
  },
  {
    "name": "encryption_configuration",
    "type": "object",
    "description": "The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.",
    "children": [
      {
        "name": "encryption_type",
        "type": "string",
        "description": "The encryption type to use.<br />If you use the &#96;&#96;KMS&#96;&#96; encryption type, the contents of the repository will be encrypted using server-side encryption with KMSlong key stored in KMS. When you use KMS to encrypt your data, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you already created.<br />If you use the &#96;&#96;KMS&#95;DSSE&#96;&#96; encryption type, the contents of the repository will be encrypted with two layers of encryption using server-side encryption with the KMS Management Service key stored in KMS. Similar to the &#96;&#96;KMS&#96;&#96; encryption type, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you've already created. <br />If you use the &#96;&#96;AES256&#96;&#96; encryption type, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts the images in the repository using an AES256 encryption algorithm.<br />For more information, see &#91;Amazon ECR encryption at rest&#93;(https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html) in the &#42;Amazon Elastic Container Registry User Guide&#42;."
      },
      {
        "name": "kms_key",
        "type": "string",
        "description": "If you use the &#96;&#96;KMS&#96;&#96; encryption type, specify the KMS key to use for encryption. The alias, key ID, or full ARN of the KMS key can be specified. The key must exist in the same Region as the repository. If no key is specified, the default AWS managed KMS key for Amazon ECR will be used."
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
    "name": "repository_name",
    "type": "string",
    "description": "The name to use for the repository. The repository name may be specified on its own (such as &#96;&#96;nginx-web-app&#96;&#96;) or it can be prepended with a namespace to group the repository into a category (such as &#96;&#96;project-a/nginx-web-app&#96;&#96;). If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the repository name. For more information, see &#91;Name type&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).<br />The repository name must start with a letter and can only contain lowercase letters, numbers, hyphens, underscores, and forward slashes.<br />If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repository.html"><code>AWS::ECR::Repository</code></a>.

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
    <td><code>repositories</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>repositories</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>repositories</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>repositories_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>repositories</code></td>
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

Gets all properties from an individual <code>repository</code>.
```sql
SELECT
region,
empty_on_delete,
lifecycle_policy,
repository_name,
repository_policy_text,
tags,
arn,
repository_uri,
image_tag_mutability,
image_tag_mutability_exclusion_filters,
image_scanning_configuration,
encryption_configuration
FROM awscc.ecr.repositories
WHERE region = 'us-east-1' AND Identifier = '<RepositoryName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>repositories</code> in a region.
```sql
SELECT
region,
repository_name
FROM awscc.ecr.repositories_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>repository</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ecr.repositories (
 EmptyOnDelete,
 LifecyclePolicy,
 RepositoryName,
 RepositoryPolicyText,
 Tags,
 ImageTagMutability,
 ImageTagMutabilityExclusionFilters,
 ImageScanningConfiguration,
 EncryptionConfiguration,
 region
)
SELECT 
'{{ EmptyOnDelete }}',
 '{{ LifecyclePolicy }}',
 '{{ RepositoryName }}',
 '{{ RepositoryPolicyText }}',
 '{{ Tags }}',
 '{{ ImageTagMutability }}',
 '{{ ImageTagMutabilityExclusionFilters }}',
 '{{ ImageScanningConfiguration }}',
 '{{ EncryptionConfiguration }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ecr.repositories (
 EmptyOnDelete,
 LifecyclePolicy,
 RepositoryName,
 RepositoryPolicyText,
 Tags,
 ImageTagMutability,
 ImageTagMutabilityExclusionFilters,
 ImageScanningConfiguration,
 EncryptionConfiguration,
 region
)
SELECT 
 '{{ EmptyOnDelete }}',
 '{{ LifecyclePolicy }}',
 '{{ RepositoryName }}',
 '{{ RepositoryPolicyText }}',
 '{{ Tags }}',
 '{{ ImageTagMutability }}',
 '{{ ImageTagMutabilityExclusionFilters }}',
 '{{ ImageScanningConfiguration }}',
 '{{ EncryptionConfiguration }}',
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
  - name: repository
    props:
      - name: EmptyOnDelete
        value: '{{ EmptyOnDelete }}'
      - name: LifecyclePolicy
        value:
          LifecyclePolicyText: '{{ LifecyclePolicyText }}'
          RegistryId: '{{ RegistryId }}'
      - name: RepositoryName
        value: '{{ RepositoryName }}'
      - name: RepositoryPolicyText
        value: {}
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: ImageTagMutability
        value: '{{ ImageTagMutability }}'
      - name: ImageTagMutabilityExclusionFilters
        value:
          - ImageTagMutabilityExclusionFilterType: '{{ ImageTagMutabilityExclusionFilterType }}'
            ImageTagMutabilityExclusionFilterValue: '{{ ImageTagMutabilityExclusionFilterValue }}'
      - name: ImageScanningConfiguration
        value:
          ScanOnPush: '{{ ScanOnPush }}'
      - name: EncryptionConfiguration
        value:
          EncryptionType: '{{ EncryptionType }}'
          KmsKey: '{{ KmsKey }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>repository</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ecr.repositories
SET PatchDocument = string('{{ {
    "EmptyOnDelete": empty_on_delete,
    "LifecyclePolicy": lifecycle_policy,
    "RepositoryPolicyText": repository_policy_text,
    "Tags": tags,
    "ImageTagMutability": image_tag_mutability,
    "ImageTagMutabilityExclusionFilters": image_tag_mutability_exclusion_filters,
    "ImageScanningConfiguration": image_scanning_configuration
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<RepositoryName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ecr.repositories
WHERE Identifier = '<RepositoryName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>repositories</code> resource, the following permissions are required:

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
ecr:CreateRepository,
ecr:PutLifecyclePolicy,
ecr:SetRepositoryPolicy,
ecr:TagResource,
kms:DescribeKey,
kms:CreateGrant,
kms:RetireGrant
```

</TabItem>
<TabItem value="read">

```json
ecr:DescribeRepositories,
ecr:GetLifecyclePolicy,
ecr:GetRepositoryPolicy,
ecr:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
ecr:DescribeRepositories,
ecr:PutLifecyclePolicy,
ecr:SetRepositoryPolicy,
ecr:TagResource,
ecr:UntagResource,
ecr:DeleteLifecyclePolicy,
ecr:DeleteRepositoryPolicy,
ecr:PutImageScanningConfiguration,
ecr:PutImageTagMutability,
kms:DescribeKey,
kms:CreateGrant,
kms:RetireGrant
```

</TabItem>
<TabItem value="delete">

```json
ecr:DeleteRepository,
kms:RetireGrant
```

</TabItem>
<TabItem value="list">

```json
ecr:DescribeRepositories
```

</TabItem>
</Tabs>